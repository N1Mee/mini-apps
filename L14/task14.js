// let button = document.getElementById('dailyB')
// let dailyDiv = document.getElementById('daily')

// button.addEventListener('click', (event) => {
//     event.preventDefault()
//     fetch('https://emojihub.herokuapp.com/api/random')
//         .then((response) => {
//             return response.json();
//         })

//         .then((data) => {
//             console.log(data);
//             dailyDiv.innerHTML = data.htmlCode
//         })
// })


// let smileys = document.querySelector('div.smileys')
// let food = document.querySelector('div.food')
// let travel = document.querySelector('div.travel')

// fetch('https://emojihub.herokuapp.com/api/all')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach(emoji => {
//             let cat = emoji.category
//             switch (cat) {
//                 case 'smileys and people':
//                     smileys.innerHTML += emoji.htmlCode
//                     break

//                 case 'food and drink':
//                     food.innerHTML += emoji.htmlCode
//                     break
//                 case 'travel and places':
//                     travel.innerHTML += emoji.htmlCode
//                     break
//             }
//         });
//     });


// 2). --------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// let main = document.querySelector('div.row')

// fetch('https://restcountries.com/v3.1/all')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         for (i = 0; i <= 120; i += 10){
//             country(data[i].flags.png, data[i].name.official, data[i].region, data[i].population, getLan(data[i]), getCurrency(data[i]));
//             neighbors(data[i])
//         }
//     });

// function country(flag, name, zone, population, language, currency) {
//     let base = document.createElement('div.col')
//     base.innerHTML = `<div class="card">
//     <img src="${flag}" class="card-img-top" alt="${name}">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">${zone}</p>
//       <ul>
//       <li class="population">&#128106; ${(population/1000000).toFixed(2)} млн</li>
//       <li class="language">&#128483; ${language}</li>
//       <li class="currency">&#128176; ${currency}</li>
//   </ul>
//     </div>
//   </div>`
//   main.appendChild(base)
// }

// function subcountry(flag, name, zone, population, language, currency) {
//     let base = document.createElement('div.col')
//     base.innerHTML = `<div class="card neighbor">
//     <div class="neighbor-title">Neighboring country</div>
//     <img src="${flag}" class="card-img-top" alt="${name}">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">${zone}</p>
//       <ul>
//       <li class="population">&#128106; ${(population/1000000).toFixed(2)} млн</li>
//       <li class="language">&#128483; ${language}</li>
//       <li class="currency">&#128176; ${currency}</li>
//   </ul>
//     </div>
//   </div>`
//   main.appendChild(base)
// }

// function neighbors(country){
//     for (let code of country.borders){
//         fetch(`https://restcountries.com/v3.1/alpha/${code}`)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 subcountry(data[i].flags.png, data[i].name.official, data[i].region, data[i].population, getLan(data[i]), getCurrency(data[i]))
//             })
//         console.log(code)
//     }
// }

// function getCurrency(country){
//     for (code in country.currencies){
//         let sym = country.currencies[code].name;
//         let cur = country.currencies[code].symbol;
//         return `${sym}, ${cur}`
//     }
// }

// function getLan(country){
//     const languages = []
//     for (code in country.languages){
//         let lan = country.languages[code];
//         languages.push(` ${lan}`)
//     }
//     return languages
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let main = document.querySelector('div.row')

fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        country(data[0].flags.png, data[0].name.official, data[0].region, data[0].population, getLan(data[0]), getCurrency(data[0]));
        neighbors(data[0])
    });

function country(flag, name, zone, population, language, currency) {
    let base = document.createElement('div.col')
    base.innerHTML = `<div class="card">
    <img src="${flag}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${zone}</p>
      <ul>
      <li class="population">&#128106; ${(population / 1000000).toFixed(2)} млн</li>
      <li class="language">&#128483; ${language}</li>
      <li class="currency">&#128176; ${currency}</li>
  </ul>
    </div>
  </div>`
    main.appendChild(base)
}

function subcountry(flag, name, zone, population, language, currency) {
    let base = document.createElement('div.col')
    base.innerHTML = `<div class="card neighbor">
    <div class="neighbor-title">Neighboring country</div>
    <img src="${flag}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${zone}</p>
      <ul>
      <li class="population">&#128106; ${(population / 1000000).toFixed(2)} млн</li>
      <li class="language">&#128483; ${language}</li>
      <li class="currency">&#128176; ${currency}</li>
  </ul>
    </div>
  </div>`
    main.appendChild(base)
}

function neighbors(country) {
    for (let code of country.borders) {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                subcountry(data[0].flags.png, data[0].name.official, data[0].region, data[0].population, getLan(data[0]), getCurrency(data[0]))
            })
        console.log(code)
    }
}

function getCurrency(country) {
    for (code in country.currencies) {
        let sym = country.currencies[code].name;
        let cur = country.currencies[code].symbol;
        return `${sym}, ${cur}`
    }
}

function getLan(country) {
    const languages = []
    for (code in country.languages) {
        let lan = country.languages[code];
        languages.push(` ${lan}`)
    }
    return languages
}


// 5). --------------------------------------------------------------------------------------------------------------------------------------------------------------------------



const form = document.querySelector('form')
const player = document.querySelector('div.player')
const block = document.querySelector('div.block')
const input = document.querySelector('input.input')
// console.log(form, input)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(input.value)
    let value = input.value
    ftch(value)
})

function ftch(value) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${value}&type=video`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            block.innerHTML = ''
            renderPlayer(data.items[0].id.videoId)
            renderPreview(data)
            // player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
            // for (let item of data.items){
            //     console.log(item.snippet.thumbnails.default.url)
            //     let preview = document.createElement('div')
            //     // preview.href = `https://www.youtube.com/embed/${item.id.videoId}`
            //     preview.innerHTML = `<img src="${item.snippet.thumbnails.default.url}" alt="">`
            //     block.appendChild(preview)
            //     preview.addEventListener('click', (event) => {
            //         event.preventDefault;
            //     })
            // }
        });
}

function renderPlayer(id) {
    player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`

}

function renderPreview(data) {
    for (let item of data.items) {
        console.log(item.snippet.thumbnails.default.url)
        let preview = document.createElement('div')
        // preview.href = `https://www.youtube.com/embed/${item.id.videoId}`
        preview.innerHTML = `<img src="${item.snippet.thumbnails.default.url}" alt="">`
        preview.style.cursor = 'pointer'
        block.appendChild(preview)
        preview.addEventListener('click', (event) => {
            event.preventDefault();
            renderPlayer(item.id.videoId)
        })
        // click(item)
    }
}

// function click (item) {
//     preview.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 renderPlayer(item.id.videoId)
//             })
// }