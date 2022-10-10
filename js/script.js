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
