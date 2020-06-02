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




// var rawData = ["./report/10-may-2020/summary.json", "./report/12-may-2020/summary.json"];



// console.log(rawData);

// function parseUrls() {
//     $.getJSON( May12, function( data ) {
//         let urls = [];
//         data.forEach(element => {
//             urls.push(element.url);
//         });
//         createChart(urls);
//         matchURLs(urls);
//         console.log(urls);
//     });
// }

// parseUrls();

function callData() {
    rawData.forEach(el => {
        $.getJSON(el, data => {
            let performances = [];
            data.forEach(score => {
                performances.push(score.detail.performance);
            })
            console.log(performances);
            // console.log(data);
        })
    })
}

callData();


function parseData() {
    let masterData = [];
    $.getJSON(master, data => {
        masterData.push(data);
    });
    matchURLs(masterData);
}

function matchURLs(masterData) {


    console.log(urls);
    console.log(masterData);
}

// urls.forEach((url) => {
//   masterData.forEach((day) => {
//     if () day.url === url) {
//     return score;
//     }
//   })
// })

function init() {
    parseData();
}

init();




function May12Data() {
    $.getJSON( May12, function(data) {
        let urls = [];
        let scores =[];
        data.forEach(element => {
            urls.push(element.url);
            scores.push(element.score);
        })
        console.log(urls, scores);
        May12Object = Object.assign(...urls.map((k, i) => ({[k]: scores[i]})));
        console.log(May12Object);
    })
}

May12Data();

var obj = {
  "www.candyspace": [
    {
      date: "date",
      score: "score"
    },
    {
      date: "date",
      score: "score",
    }
  ],
  "www.mazda": [
    {
      date: "date",
      score: "score"
    }
  ]
}






createChart = (scores) => {
    chart = new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{ 
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: urls[0],
              borderColor: "#3e95cd",
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

// const json = {
//     "id": "c2dec94f",
//     "data": [
//         {
//             "field_template_id": 1,
//             "value": "111"
//         },
//         {
//             "field_template_id": 2,
//             "value": 222
//         },
//         {
//             "field_template_id": 3,
//             "value": [
//                 333
//             ]
//         },
//         {
//             "field_template_id": 2,
//             "value": 444
//         }
//     ]
// }
// const data = json.data

// let obj = {}
// let arr = []
// data.forEach(item => {
//     if (obj[item.field_template_id]) {
//         arr.some((val, key) => {
//             const newItem = arr[key]
//             if (val.field_template_id === item.field_template_id) {
//                 if (Array.isArray(newItem.value) && Array.isArray(item.value)) {
//                     newItem.value = newItem.value.concat(item.value)
//                 } else if (Array.isArray(newItem.value)) {
//                     newItem.value.push(item.value)
//                 } else if (Array.isArray(item.value)) {
//                     item.value.unshift(newItem.value)
//                 } else {
//                     const result = []
//                     result.push(newItem.value)
//                     result.push(item.value)
//                     newItem.value = result
//                 }
//                 return true
//             } else {
//                 return false
//             }
//         })
//     } else {
//         obj[item.field_template_id] = true
//         arr.push(item)
//     }
// })

// const result = {
//     id: json.id,
//     data: arr
// }

// console.log(result)