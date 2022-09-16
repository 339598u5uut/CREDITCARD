# Форма для онлайн-оплаты кредитной картой

Проект представляет собой имитацию онлайн оплаты товара кредитной картой.


## Технологии

*	  Верстка компонентами Bootstrap
* 	Система сборки Parcel
* 	Валидация полей: пакет npm "creditcard.js",
* 	Библиотека, создающая «маску» в поле для ввода — "imask"
* 	Формирование DOM-формы — библиотека Redom



## Функциональность

*	При вводе номера карты  игнорируются любые символы, кроме цифр. Цифры автоматически разделяются по 4 штуки пробелом.
  Номер карты проходит валидацию на корректность;
*	Дата окончания карты автоматически разделяется символом «/», если в поле введено 2 цифры месяца;
*	В поле для CVC/CVV вводится строго 3 цифры;
*	Корректный формат email;
* Появляется логотип платёжной системы (Visa/MasterCard);
*	Проверка корректности введённого значения происходит при потере фокуса на поле, а при любом вводе в поле ошибка сбрасывается;
*	Под формой имеется кнопка «Оплатить». Она находится в состоянии disabled до тех пор, пока пользователь корректно не заполнит все поля;


## Установка

1.	Создаем рабочую директорию с произвольным именем (например dev):
    mkdir <имя рабочей директории>;

2.	Клонируем репозиторий в рабочую директорию, переходим в неё:
    cd <имя рабочей директории>;

3.	Клонируем репозиторий: git clone https://github.com/339598u5uut/CREDITCARD.git;
    В рабочей директории должна появиться папка проекта CREDITCARD;

4.	Переходим в папку с проектом:
    cd CREDITCARD, устанавливаем зависимости: npm install;

5.	Запускаем проект: npm run dev.


## Протестировать свою кредитную карту: [GitHubPages](https://339598u5uut.github.io/CREDITCARD/)


***
