var tg = window.Telegram.WebApp;

// Расширяем на весь экран.
tg.expand();

// Кнопка просмотра заказа (реализуется тг - не сайтом).
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// Хранение выбранного товара.
let item = "";

function createListener(i) {
	return function() {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText("Перейти к оплате");
			item = i.toString();
			tg.MainButton.show();
		}
	};
}

for (var i = 1; i <= 6; i++) {
	let btn = document.getElementById("btn" + i.toString());
	btn.addEventListener("click", createListener(i));
}

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