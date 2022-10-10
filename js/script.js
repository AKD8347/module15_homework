//Задание 1
//находим кнопку по классу
const iconTrigger = document.querySelector('.btn__trigger');
//вышаем события по клику на кнопку
iconTrigger.addEventListener('click', () => {
    //добавляем и убираем активный класс кнопке
    iconTrigger.classList.toggle('btn__trigger--active');
});

//Задание 2
//находим кнопку по классу
const alertTrigger = document.querySelector('.btn__alert');
//вышаем события по клику на кнопку
alertTrigger.addEventListener('click', () => {
    //определяем ширину экрана устройства
    let screenWidth = window.screen.width;
    //определяем высоту экрана устройства
    let screenHeight = window.screen.height;
    //выводим данные через alert
    window.alert(`Высота: ${screenWidth}, Ширина: ${screenHeight}`);
})

//Задание 3
//
const output = document.getElementById("output");
const field = document.querySelector('.chat__field');
const sendMsg = document.querySelector('.chat__submit');
const webSocUri = 'wss://echo-ws-service.herokuapp.com';
let websocket;

function writeMy(message) {
    let pre = document.createElement("p");
    pre.classList.add('chat__msg')
    pre.innerHTML = message;
    output.appendChild(pre);
}

function writeResponse(message) {
    let pre = document.createElement("p");
    pre.classList.add('chat__msg', 'chat__msg--answer')
    pre.innerHTML = message;
    output.appendChild(pre);
}

document.addEventListener("DOMContentLoaded", function () {
    websocket = new WebSocket(webSocUri);
    websocket.onopen = function(evt) {
        console.log('connected');
    };
    websocket.onclose = function(evt) {
        // console.log(websocket);
    };
    websocket.onmessage = function(evt) {
        writeResponse(evt.data);
    };
    websocket.onerror = function(evt) {
        // console.log(websocket);
    };
})

sendMsg.addEventListener('click', () => {
    let fieldVal = field.value;
    if(fieldVal !== '') {
        writeMy(fieldVal);
        websocket.send(fieldVal);
    } else {
        event.preventDefault();
    }
})
