window.addEventListener('DOMContentLoaded', function() {


//Задаем переменные для работы(получаем из html)
	let products = document.querySelectorAll('.product'),
			buttons = document.getElementsByTagName('button'),
			open = document.getElementsByClassName('open')[0];

//Создаем функцию для создания корзины
	function createCart() {

		//Создаем прямо тут(их нет в html) элементы, которые будут в корзине

		let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				close = document.createElement('button');

				//добавляем классы к нашим элементам
				cart.classList.add('cart');
				field.classList.add('cart-field');
				close.classList.add('close');

				//добавляем надписи внутрь наших элементов
				close.textContent = "Закрыть";
				heading.textContent = "В нашей корзине:";

				//наконец добавляем эти элементы на страницу с помощью команды аппендЧайлд, которая 
				//добавляет элементы в конец(body в данномс случае)
				//а так может еще куда
				document.body.appendChild(cart);
				cart.appendChild(heading);
				cart.appendChild(field);
				cart.appendChild(close);

	}

	createCart();

	let field = document.querySelector('.cart-field'),
			cart = document.querySelector('.cart'),
			close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		// Вешаем обработчик события на каждую кнопку
		buttons[i].addEventListener('click', function() {

			//создали копию товара в корзине
			let item = products[i].cloneNode(true),
					btn = item.querySelector('button');

			//удаляем кнопку 
			btn.remove();
			//добавляем созданный копированный
			// элемент в конец переменной field, относящ. к классу cart-field
			field.appendChild(item);
			//удаляем элемент продукт со страницы продукты
			products[i].remove();
		});
	}

	function openCart() {
		cart.style.display = "block";
	}

	function closeCart() {
		cart.style.display = "none";
	}

open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);

});