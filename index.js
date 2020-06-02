var May12 = "./report/12-may-2020/summary.json";
var May13 = "./report/13-may-2020/summary.json";
var May18 = "./report/18-may-2020/summary.json";

var rawData = [May12, May13, May18];

var master = "./report/master.json";

var dates = ["12-May-2020", "13-May-2020", "18-May-2020"]
var urls = [
    "https://www.candyspace.com",
    "https://www.mazda.co.uk",
    "https://www.mazda.co.uk/offers/retail-offers/",
    "https://www.mazda.co.uk/used-cars/",
    "https://www.mazda.co.uk/cars/mazda-cx-30/",
    "https://www.mazda.co.uk/cars/mazda-cx-5/",
    "https://www.mazda.co.uk/cars/all-new-mazda3-hatchback/",
    "https://www.mazda.co.uk/cars/mazda2/",
    "https://www.mazda.co.uk/cars/mazda-mx-5/",
    "https://www.mazda.co.uk/cars/mazda-cx-3/accessories/",
    "https://www.mazda.co.uk/cars/mazda-mx-30/",
    "https://www.mazda.co.uk/cars/mazda6-saloon/",
    "https://www.mazda.co.uk/cars/mazda-mx-5-rf/",
    "https://www.mazda.co.uk/configurator/start/",
    "https://www.mazda.co.uk/forms/find-a-dealer/",
    "https://www.mazda.co.uk/owners/accessories/"
];

// function callData() {
//     rawData.forEach(el => {
//         $.getJSON(el, data => {
//             let performances = [];
//             data.forEach(score => {
//                 performances.push(score.detail.performance);
//             })
//         })
//     })
// }

// callData();


// function parseData() {
//     let masterData = [];
//     $.getJSON(master, data => {
//         masterData.push(data);
//     });
//     matchURLs(masterData);
// }

// function init() {
//     parseData();
// }

// init();




// function May12Data() {
//     $.getJSON( May12, function(data) {
//         let urls = [];
//         let scores =[];
//         data.forEach(element => {
//             urls.push(element.url);
//             scores.push(element.score);
//         })
//         // console.log(urls, scores);
//         May12Object = Object.assign(...urls.map((k, i) => ({[k]: scores[i]})));
//         // console.log(May12Object);
//     })
// }

// May12Data();

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