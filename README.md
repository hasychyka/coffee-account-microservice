# Coffee Shop Loyalty Program — Account Microservice ☕🛡️

[![Node.js Version](https://img.shields.io/badge/node_js-%3E%3D_18.0.0-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-%5E4.19.0-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Docker_Container-brightgreen.svg)](https://www.mongodb.com/)

Автономний **мікросервіс акаунтів та програми лояльності** для мережі кав'ярень. Сервіс ізольовано керує профілями клієнтів, накопиченням бонусних балів та динамічним оновленням статусів рівнів лояльності (`Bronze`, `Silver`, `Gold`). 

Проєкт побудовано на базі архітектурного шаблону **MSC (Model-Service-Controller)**.

---

## 🚀 Технологічний стек

* **Runtime:** Node.js (Express.js)
* **Database:** MongoDB (крутиться в ізольованому Docker-контейнері)
* **ODM:** Mongoose
* **Environment:** Dotenvx / Dotenv
* **Tooling:** Nodemon, Postman (для тестування API)

---

## 📁 Структура проєкту

```text
account-microservice/
├── src/
│   ├── models/          # Схеми даних Mongoose (User.js)
│   ├── services/        # Бізнес-логіка та взаємодія з БД (User.js)
│   ├── controllers/     # Обробка HTTP-запитів та відповідей (userController.js)
│   ├── routes/          # Маршрутизація ендпоінтів Express (userRoutes.js)
│   └── app.js           # Головний файл ініціалізації сервера
├── docker-compose.yml   # Конфігурація Docker для MongoDB
├── .env                 # Змінні оточення (ігнорується Git)
├── .gitignore           # Налаштування ігнорування файлів
└── package.json         # Залежності та скрипти запуску
