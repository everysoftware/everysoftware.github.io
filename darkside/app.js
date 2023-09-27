let tg = window.Telegram.WebApp;

// Расширяем на весь экран.
tg.expand();

// Кнопка просмотра заказа (реализуется тг - не сайтом).
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// Хранение выбранного товара.
let item = "";

// Доступ ко всем кнопкам.
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let f = (i) -> function() {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти к оплате");
		item = i.toString();
		tg.MainButton.show();
	}
};

// Устанавливаем события на кнопки.
btn1.addEventListener("click", f(1));

btn2.addEventListener("click", f(2));

btn3.addEventListener("click", f(3));

btn4.addEventListener("click", f(4));

btn5.addEventListener("click", f(5));

btn6.addEventListener("click", f(6));

// Отправка данных в тг.
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

// Добавление в usercard данных из тг.
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);