const urls = "sites.json"
const dates = "dates.json"
let graphDatesArray
let lowestScore = 1
let highestScore = 0

function init() {
  const URLsArray = []
  const DatesArray = []
  $.getJSON(urls)
  .done(async urlData => {
    await urlData.forEach(url => {
      URLsArray.push(url) // builds out urls 
    })
    $.getJSON(dates)
    .done(async datesData => {
      graphDatesArray = datesData
      await datesData.forEach(date => {
        if (date === "" || date === null || typeof date === "undefined" || !date) return
        const parsedDate = date.replace("/", "")
        DatesArray.push(parsedDate) // builds out dates 
      })
      concatenateSummaries(URLsArray, DatesArray)
    })
  })
}

async function concatenateSummaries(URLsArray, DatesArray) {
  const concatenatedData = {}
  const promises = []
  await DatesArray.forEach(date => { // this results in [ date: [{urls with scores}] ]
    promises.push(new Promise((resolve) => {
      $.getJSON(`./report/${date}/summary.json`)
      .done(data => {
        concatenatedData[date] = data
        resolve()
      })
    }))
  })
  Promise.all(promises).then(async () => {
    // concatenatedData looks like:
    //  1-june-2020: Array
    //    {url: "https://www.candyspace.com", score: 1},
    //    {url: "https://www.anotherURL.com", score: 0.5}
    const fullData = {}
    const _promises = []
    await URLsArray.forEach(url => {
      _promises.push(new Promise(resolve => {
        fullData[url] = []
        for (const dateKey in concatenatedData) {
          concatenatedData[dateKey].forEach(dataPoint => {
            if (dataPoint.url === url) {
              if (dataPoint.score < lowestScore) { lowestScore = dataPoint.score }
              if (dataPoint.score > highestScore) { highestScore = dataPoint.score }
              fullData[url].push({
                score: dataPoint.score,
                date: +new Date(dateKey)
              })
              resolve()
            }
          })
        }
      }))
    })
    Promise.all(_promises).then(() => sortFullData(fullData))
  })
}

async function sortFullData(fullData) {
  await Object.keys(fullData).forEach(async key => {
    const sortedData = await fullData[key].sort((a,b) => a.date - b.date)
    fullData[key] = sortedData
  })
  createChart(fullData)
}

init()


function getDataset(fullData) {
  // TODO - async await 
  const dataSets = []
  for (const URL in fullData) {
    if (fullData.hasOwnProperty(URL)) {
      const originalScoreData = fullData[URL]
      const newScoreData = []
      originalScoreData.forEach(score => {
        newScoreData.push(score.score)
      })
      dataSets.push({
        data: newScoreData,
        label: URL,
        borderColor: Colors.random(),
        fill: false
      })
    }
  }
  return dataSets
}

async function processGraphDates(datesArray) {
  return await datesArray
    .filter(date => date.length > 0) // remove empties
    .map(date => date.replace("/", "")) // remove trailing /
    .sort((a,b) => (+new Date(a)) - (+new Date(b))) // sort by unix time conversion
    .map(date => (new Date(date)).toLocaleDateString()) // parse into d/m/y format
}

createChart = async (fullData) => {
  chart = new Chart(document.getElementById("reports-chart"), {
    type: 'line',
    data: {
      datasets: await getDataset(fullData),
      labels: await processGraphDates(graphDatesArray),
    },
    options: {
      legend: {
        display: true,
        position: "right"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Pagespeed score",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontSize: 18
          },
          ticks: {
            suggestedMin: Math.max( Math.floor(lowestScore * 10) / 10 ).toFixed(2), // would convert 0.55 or 0.51 or 0.59 to: 0.5 (lowest tenth in the scores)
            suggestedMax: Math.max( Math.ceil(highestScore * 10) / 10 ).toFixed(2) // would convert 0.85 or 0.81 or 0.89 to: 0.9 (highest tenth in the scores)
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontSize: 18
          }
        }],
      }
    }
  })
}