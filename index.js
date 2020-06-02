var urls = "sites.json";
var dates = "dates.json";

function init() {
  const URLsArray = []
  const DatesArray = []
  $.getJSON(urls)
  .done(async urlData => {
    await urlData.forEach(url => {
      URLsArray.push(url); // builds out urls 
    })
    $.getJSON(dates)
    .done(async datesData => {
      await datesData.forEach(date => {
        const parsedDate = date.replace("/", "")
        DatesArray.push(parsedDate); // builds out dates 
      })
      concatenateSummaries(URLsArray, DatesArray)
    })
  })
}

function concatenateSummaries(URLsArray, DatesArray) {
  // TODO
}
init()

var dataObject = {
  "https://www.candyspace.com": [
    {
      date: 1589238000000,
      score: 0.28
    },
    {
      date: 1589324400000,
      score: 0.32,
    },
    {
      date: 1589756400000,
      score: 0.38,
    },
    {
      date: 1590534000000,
      score: 0.36,
    },
    {
      date: 1590620400000,
      score: 0.36,
    },
    {
      date: 1590966000000,
      score: 0.38,
    }
  ],
  "https://www.mazda.co.uk": [
    {
      date: 1589238000000,
      score: 0.23
    },
    {
      date: 1589324400000,
      score: 0.21,
    },
    {
      date: 1589756400000,
      score: 0.3,
    },
    {
      date: 1590534000000,
      score: 0.31,
    },
    {
      date: 1590620400000,
      score: 0.28,
    },
    {
      date: 1590966000000,
      score: 0.18,
    }
  ]
}

function getDataset(data) {
  // TODO - async await 
  const dataSets = []
  for (const URL in data) {
    if (data.hasOwnProperty(URL)) {
      const originalScoreData = data[URL];
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

createChart = async (data) => {
  chart = new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      datasets: await getDataset(data),
      labels: [1,2,3,5,6,7],
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });
}

createChart(dataObject);