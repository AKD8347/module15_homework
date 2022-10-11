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
//поле для вывода сообщений
const output = document.getElementById("output");
//поле отправляемого сообщения
const field = document.querySelector('.chat__field');
//кнопака отправки сообщения на сервер
const sendMsg = document.querySelector('.chat__submit');
//url эхо-сервера
const webSocUri = 'wss://echo-ws-service.herokuapp.com';
//переменная для вэбсокета
let websocket;
//функция записи отправленного сообщения
function writeMy(message) {
    //в созданный тег p
    let pre = document.createElement("p");
    //добавляем нужный класс
    pre.classList.add('chat__msg')
    //добавляем верстку
    pre.innerHTML = message;
    //заполненный элемент добавляем в поле сообщений
    output.appendChild(pre);
}
//функция записи ответа сервера
function writeResponse(message) {
    //в созданный тег p
    let pre = document.createElement("p");
    //добавляем нужный класс
    pre.classList.add('chat__msg', 'chat__msg--answer')
    //добавляем верстку
    pre.innerHTML = message;
    //заполненный элемент добавляем в поле сообщений
    output.appendChild(pre);
}
//при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    //устанавливаем соединение через вебсокет с сервером
    websocket = new WebSocket(webSocUri);
    websocket.onopen = function(evt) {
        console.log('connected');
    };
    websocket.onclose = function(evt) {
        console.log('connected');
    };
    websocket.onmessage = function(evt) {
        //получаем ответ от сервера и передаем его в функцию записи ответа
        writeResponse(evt.data);
    };
    websocket.onerror = function(evt) {
        console.log('error');
    };
})
//при клике на кнопку отправки сообщения
sendMsg.addEventListener('click', () => {
    //берем значение поля
    let fieldVal = field.value;
    //если поле не пустое
    if(fieldVal !== '') {
        //записываем сообщение
        writeMy(fieldVal);
        //и отправляем его на сервер
        websocket.send(fieldVal);
    } else {
        //если пустое - ничего не отправляется
        event.preventDefault();
    }
})
