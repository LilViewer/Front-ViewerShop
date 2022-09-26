# Интернет-магазин игровых ключей - ViewerShop

---

Проект представляет из себя разработку интернет-магазина игровых ключей для диплома.

Проект выполнен при помощи библиотеки React и фреймворка Laravel. 

**Front - [React](https://github.com/LilViewer/Front-ViewerShop)**

**Back - [Laravel-api](https://github.com/LilViewer/Back-ViewerShop)**

Для полного развертования проекта нужны обе части (упомянутые выше).

---

#Front

##клонирование проекта

`*git clone https://github.com/LilViewer/Front-ViewerShop.git*`

##изменение ссылки на BD

`diplom/src/network.js`

`
const NET ={
    APP_URL: 'http://localhost:8000/api',
    APP_SUP: 'http://localhost:8000/',
    ADMIN_TOKEN: 'mYMGWohaWCQJ7ZcQT6u9geIlJndouSGlA5lamA4BOwskLeDqCsRLmFaZ4cKia8nkItJL0XtNeo3XdsmU'
}
`
изменение APP_URL и APP_SUP в случае изменение ссылки.

ADMIN_TOKEN отвечает за аккаует админа, для изменения взять из БД токен пользователя который желаете сделать админом.
 
