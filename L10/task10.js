// 1).

// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

// function Shop(title, address) {
//     this.title = title;
//     this.address = address;
//     this.getDescription = function() {
//         return `${this.title}, ${this.address}`
//     }
// }

// let Green = new Shop('Green', 'horoshaya');
// let ProStore = new Shop('ProStore', 'otlichnaya')
// let shops = [Green, ProStore]
// console.log(shops)
// let addresses = shops.map(item => item.address)
// console.log(addresses)

// 2).

// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     console.log(httpRequest.responseText);
//     let obj = JSON.parse(httpRequest.responseText)
//     let div = document.querySelector('div')
//     div.innerText = obj.title
//     };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();

// 3).

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     console.log(httpRequest.responseText);
//     let obj = JSON.parse(httpRequest.responseText)
//     for (let i = 0; i < 20; i++){
//         let li = document.createElement('li')
//         li.innerText = obj[i].title
//         let ul = document.querySelector('ul')
//         ul.appendChild(li)
//     }
//     };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// httpRequest.send();

// 4).

// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments
// Оформить тегами как в ПРИМЕРЕ.
// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.



// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     console.log(httpRequest.responseText);
//     let obj = JSON.parse(httpRequest.responseText)
//         for (let i = 0; i < 10; i++){
//             addInfo('h3', obj[i].name, 'top')
//             addInfo('p', obj[i].email, 'mid')
//             addInfo('p', obj[i].body, 'bot')
//         }
//     };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();

// addInfo = function(tag, text, classs){
//     let div = document.querySelector('div')
//     let a = document.createElement(tag);
//     a.innerText = text
//     a.classList.add(classs);
//     div.appendChild(a)
// }

// 5).

// Создать собственный погодный виджет на основе данных с сервера погоды.
// Оформить, как в примере: ЗДЕСЬ.
// Документация: https://openweathermap.org/api...
// Порядок работы:

// 1) Проверить, работает ли API-ключ, данный в примере. Для этого открыть url https://api.openweathermap.org...
// Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.
// 1.1. Зарегистрироваться и получить собственный API-ключ на сайте https://home.openweathermap.or...

// 2) Создать html-css разметку под данные.
// - общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. ЗДЕСЬ)
// - внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).

// 3) Написать JS с HTTP-запросом на url.
// - кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию (см. на странице документации раздел Units of measurement)

// 4) добавить информацию из ответа в виджет на страницу.
// - в верхней части виджета отобразить город и дату (из полученного JSON-объекта).
// Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней ЗДЕСЬ.
// - из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.
// Как узнать url иконки: https://openweathermap.org/wea...
// - в нижней части добавить необходимую информацию через цикл. Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки), а нам нужна погода 1 раз в сутки.

let current = document.querySelector('div.current')
let forecast = document.querySelector('div.forecast')

let date = document.createElement('p')
date.innerText = new Date().toLocaleString()
date.classList.add('date')
current.appendChild(date)

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    console.log(httpRequest.responseText);
    let obj = JSON.parse(httpRequest.responseText)

    let city = document.createElement('p')
    city.innerText = obj.city.name
    city.classList.add('city')
    current.appendChild(city)

    let icon = document.createElement('img')
    icon.src = `http://openweathermap.org/img/wn/${obj.list[0].weather[0].icon}@2x.png`
    current.appendChild(icon)

    let descr = document.createElement('p')
    descr.innerText = obj.list[0].weather[0].description
    current.appendChild(descr)

    let temp = document.createElement('p')
    temp.innerText = `${obj.list[0].main.temp_min}°C - ${obj.list[0].main.temp_max}°C`
    temp.classList.add('temp')
    current.appendChild(temp)

    let div = document.createElement('div')
    let speed1= document.createElement('p')
    speed1.innerText = 'Speed'
    div.appendChild(speed1)
    let speed2 = document.createElement('p')
    speed2.innerText = `${obj.list[0].wind.speed} m/s`
    div.appendChild(speed2)
    current.appendChild(div)


    for (let i = 0; i < 48; i = i + 8) {
        let div = document.createElement('div')
        let dt = document.createElement('p')
        dt.innerText = obj.list[i].dt_txt;
        div.appendChild(dt);
        let icon = document.createElement('img')
        icon.src = `http://openweathermap.org/img/wn/${obj.list[i].weather[0].icon}@2x.png`
        div.appendChild(icon)
        let temp = document.createElement('p');
        temp.innerText = `${obj.list[i].main.temp_min}°C - ${obj.list[i].main.temp_max}°C`
        div.appendChild(temp)

        forecast.appendChild(div)
    }
};
httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=a94d0a5ac08570add4b47b8da933f247');
httpRequest.send();

