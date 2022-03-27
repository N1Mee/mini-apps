// 1.

// Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// Посмотрите видео, как подготовить верстку: 
// 2) JS
// - Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
// - Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.
// Чтобы добавить класс к DOM-элементу, используется метод element.classList.add('classname')
// -------
// - Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.
// Чтобы удалить класс из DOM-элемента, используется метод element.classList.remove('classname')
// - Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
// Для обращения к элементу, на который пришелся клик, можно использовать метод 
// e.target (e - это параметр функции-обработчика события, и его свойство target точно вказывает на тот элемент, на который кликнул пользователь).

let buttonopen = document.querySelector('button.popup-btn')
let popup = document.querySelector('div.popup')
let popupcontent = document.querySelector('div.popup-content')
let buttonclose = document.querySelector('button.popup-close')
buttonopen.addEventListener('click', (event) => popup.classList.add('open'))
buttonclose.addEventListener('click', (event) => popup.classList.remove('open'))
popup.addEventListener('click', (event) => {
    if (event.target === popup){
    popup.classList.remove('open')
    }
})

// 2).

// Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
// Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// В разметке предусмотреть два блока: боковую панель и main.
// Боковая панель имеет фиксированное позиционирование, занимает определенную ширину (например, 250px) и 100% высоты экрана. Укажите для нее стиль overflow-x: hidden, чтобы при сворачивании панели (ширина ее будет становиться 0) все ее содержимое скрывалось.
// Задать фоновый цвет, внутри сверстать навигацию (ссылки). Кнопку закрытия разместить в правом верхнем углу панели с помощью position: absolute.
// Main расположен по центру экрана, но когда боковая панель открыта - имеет margin-left по размеру ширины боковой выезжающей панели. Внутри main разместите кнопку-бургер, которая будет открывать боковую панель, а также заголовок и какой-то контент.
// 2) JS
// Создайте переменные для обеих кнопок, для боковой панели и для main.
// Повесьте на кнопки обработчики кликов:
// - при клике на бургер должна увеличиться ширина боковой панели (с 0 до например 250px), а у main должен появится слева отступ. Сам бургер при открытии боковой панели должен исчезать.
// - при клике на крестик ширина боковой панели должна становиться равной нулю, также должен исчезать левый отступ у main и должна появляться кнопка-бургер.

let openside = document.querySelector('button.burger')
let side = document.querySelector('div.side')
let closeside = document.querySelector('button.close-side')
let main = document.querySelector('main')
openside.addEventListener('click', (event) => {
    side.classList.add('side-open')
    main.classList.add('main-open')
    openside.classList.add('burger-open')
})
closeside.addEventListener('click', (event) => {
    side.classList.remove('side-open')
    main.classList.remove('main-open')
    openside.classList.remove('burger-open')
})


// 3).

// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - dev.by, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон строки меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

let menu = document.querySelector('div.menu')
let toggler = document.querySelector('button.toggler')
let menuclose = document.querySelector('button.menu-close')
toggler.addEventListener('click', (event) => {
    menu.classList.add('menu-shown')
    toggler.classList.add('toggler-hidden')
    menuclose.classList.add('menu-close-shown')
})
menuclose.addEventListener('click', (event) => {
    menu.classList.remove('menu-shown')
    toggler.classList.remove('toggler-hidden')
    menuclose.classList.remove('menu-close-shown')
})

// 4).

// Реализовать функционал мини таск-менеджера.
// Функционально должно работать так: https://ucarecdn.com/a2aeaed4-...
// Затем стилизовать (написать CSS) на свое усмотрение.
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) Описать в html форму с полем input и кнопкой отправки формы. Под формой предусмотреть пустой список ul.
// 2) На событие отправки формы добавлять в список ul элемент li со значением инпута. Сам инпут при этом очищать.
// 3) Внутри добавляющегося li перед текстом должен также добавляться чекбокс.
// Для добавления элемента внутрь в начало используйте метод element.prepend(element).
// 4) При отметке чекбокса задача должна перечеркиваться (становиться выполненной) и перемещаться вниз списка. Если отметку снять - перечеркивание убирается и задача помещается в начало списка.
// Отмеченный чекбокс - js-свойство .checked
// Перечеркнутый текст - CSS-свойство text-decoration: line-through
// 5) К каждой задаче добавить кнопку для удаления, реализовать само удаление.
// Для удаления элементов используется метод element.remove().
// 6) Пропишите CSS, чтобы ваш таск-менеджер выглядел получше: уберите маркеры у списка, оформите кнопки.

// +

// 1).

// 1) Сделать код таск-менеджера из прошлого урока более читаемым, разбив его на отдельные функции. 
// По сабмиту формы после preventDefault должна вызываться одна функция - addLi(text) и очищаться input. Все остальные действия - внутри функций.
// 2) Добавить кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';
// 3) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.
// Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.
// Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.

let form = document.querySelector('form')
let ul = document.querySelector('ul')
let input = document.querySelector('input.insert')
let checker = document.querySelector('button.checker')
let allLi = document.querySelectorAll('li');
let tasks = [];

if (localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks)
    tasks.forEach(item => {
        let newLi = createLi(item)
        ul.appendChild(newLi)
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let taskText = input.value
    tasks.push(taskText)
    let li = createLi(taskText)
    ul.appendChild(li)
    input.value = ''
    localStorage.tasks = JSON.stringify(tasks)
})

checker.addEventListener('click', (event) => {
    let allLi = document.querySelectorAll('li');
    allLi.forEach(item => item.style.textDecoration = 'line-through')
})

function createLi(text) {
    let li = document.createElement('li')
    li.innerText = text
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', event => {
        if (checkbox.checked){
            console.log('checked')
            li.style.textDecoration = 'line-through';
            ul.append(li)
        }
        else{
            li.style.textDecoration = 'none'
            ul.prepend(li)     
        }
    })
    let del = document.createElement('button')
    del.innerText = 'X'
    del.addEventListener('click', (event) => li.remove())
    li.append(del)
    li.prepend(checkbox)
    return li;
}

// 2).

// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

let obj = {}
obj.name = 'Nikita'
let strg = JSON.stringify(obj.name)
let storage = JSON.parse(strg)

let user = obj
localStorage.usr = JSON.stringify(user)
let newUser = JSON.parse(localStorage.usr)

// 3).

// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
// Пример реализации:
// https://ucarecdn.com/6e689f37-...

// ПОДСКАЗКИ
// - значение атрибута можно узнать с помощью метода element.getAttribute(' ');
// - элемент, по которому пришелся клик, = 
// event.target
// остальные элементы - 
// !event.target
// Порядок работы, если нет своих идей:
// 1. Собираем изображения в массив.
// 2. Перебираем массив с изображениями, добавляем на них обработчик клика.
// Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или url в память и ставим ее на фон body.
// При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку.

let images = document.querySelectorAll('.imgs img')
let body = document.querySelector('body')

if (localStorage.bg) {
    body.style.backgroundImage = `url(${localStorage.bg})`
}

images.forEach(item => {
    item.addEventListener('click', event => {
        console.log('click')
        images.forEach(item => {
            if (item !== event.target){
                item.classList.remove('active')
            }
        })
        item.classList.add('active')
        let imageUrl = item.getAttribute('src')
        localStorage.bg = imageUrl
        body.style.backgroundImage = `url(${imageUrl})`
    })
})