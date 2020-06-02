var May12 = "./report/12-may-2020/summary.json";
var May13 = "./report/13-may-2020/summary.json";
var May18 = "./report/18-may-2020/summary.json";
var May27 = "./report/27-may-2020/summary.json";
var May28 = "./report/28-may-2020/summary.json";
var June01 = "./report/1-june-2020/summary.json";

var rawData = [May12, May13, May18, May27, May28, June01];

var dates = ["12-May-2020", "13-May-2020", "18-May-2020", "27-May-2020", "28-May-2020", "01-June-2020"];

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

convertDates = () => {
    let unixArray = [];
    dates.forEach(el => {
        uni = new Date(el).getTime();
        unixArray.push(uni);
    })
    console.log(unixArray);
}

convertDates();

// parseData = () => {
//     $.getJSON(May12, data => {
//         let scores = [];
//         data.forEach(el => {
//             scores.push(el.detail.performance);
//         });
//         console.log(scores);
//     })
// }

// parseData();

function callData() {
    rawData.forEach(el => {
        $.getJSON(el, data => {
            let performances = [];
            data.forEach(score => {
                performances.push(score.detail.performance);
            })
            // console.log(performances);
            // console.log(data);
        })
    })
};

callData();

var May12Performance = [0.28, 0.23, 0.27, 0.25, 0.23, 0.25, 0.11, 0.08, 0.17, 0.27, 0.26, 0.22, 0.26, 0.16, 0.32, 0.33];
var May13Performance = [0.32, 0.21, 0.28, 0.12, 0.23, 0.13, 0.1, 0.12, 0.15, 0.22, 0.11, 0.22, 0.17, 0.19, 0.27, 0.26];
var May18Performance = [0.38, 0.3, 0.14, 0.24, 0.16, 0.03, 0.07, 0.2, 0.04, 0.22, 0.29, 0.3, 0.03, 0.17, 0.21, 0.21];
var May27Performance = [0.36, 0.31, 0.17, 0.21, 0.17, 0.19, 0.21, 0.27, 0.23, 0.22, 0.16, 0.17, 0.24, 0.2, 0.25, 0.22];
var May28Performance = [0.36, 0.28, 0.27, 0.32, 0.08, 0.2, 0.12, 0.18, 0.03, 0.18, 0.28, 0.27, 0.22, 0.18, 0.37, 0.31];
var June01Performance = [0.38, 0.18, 0.16, 0.21, 0.26, 0.26, 0.26, 0.26, 0.22, 0.18, 0.09, 0.18, 0.03, 0.18, 0.23, 0.2];

var x = May12Performance.shift();

console.log(x)





createChart = () => {
    chart = new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
              { 
              data: [0.28, 0.23, 0.27, 0.25, 0.23, 0.25, 0.11, 0.08, 0.17, 0.27, 0.26, 0.22, 0.26, 0.16, 0.32, 0.33],
              label: urls[1],
              borderColor: "#3e95cd",
              fill: false
            },
            { 
                data: [0.32, 0.21, 0.28, 0.12, 0.23, 0.13, 0.1, 0.12, 0.15, 0.22, 0.11, 0.22, 0.17, 0.19, 0.27, 0.26],
                label: urls[2],
                borderColor: "green",
                fill: false
              }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
}

createChart();
