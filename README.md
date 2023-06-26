# Описание API:
**REST API**, реализованный на Express и подключенный к базе данных MongoDB с помощью библиотеки Mongoose, предоставляет возможность клиентским приложениям выполнять операции CRUD (create, read, update, delete) с данными в базе данных, используя стандартные HTTP-запросы.

**tags:** `Node.js` `Express`  `Mongoose`  `Mongoose-sanitize`  `Helmet`

**features:** `Проверка на уникальность email` `Проверка на уникальность номера` `Валидация  Mongoose` `Валидация с помощью RegExp` 

--- 


### 🟢 GET `/users`

Возвращает список всех пользователей.

#### Пример запроса

`GET` `/users`

#### Успешный ответ
`Status: 200 OK`
`Response:`
```
[
    {
        "_id": "60d7e29b0f2bb638d6a7a18d",
        "firstName": "John",
        "secondName": "Doe",
        "emailAddress": "johndoe@example.com",
        "phoneNumber": "+380123456789",
        "createdAt": "2022-06-27T12:00:00.000Z",
    },
    {
        "_id": "60d7e2d40f2bb638d6a7a18e",
        "firstName": "Jane",
        "secondName": "Doe",
        "emailAddress": "janedoe@example.com",
        "phoneNumber": "+380987654321",
        "createdAt": "2022-06-27T12:00:00.000Z",
    }
]
```

#### Ошибки

- Если произошла ошибка на стороне сервера, API вернет ошибку `500 Internal Server Error`.

### 🟢 GET `/users/:id`

Возвращает пользователя по его id.

#### Пример запроса

`GET` `/users/60d7e29b0f2bb638d6a7a18d`


#### Успешный ответ
`Status: 200 OK`
`Response:`
```
{
    "_id": "60d7e29b0f2bb638d6a7a18d",
    "firstName": "John",
    "secondName": "Doe",
    "emailAddress": "johndoe@example.com",
    "phoneNumber": "+380123456789",
    "createdAt": "2022-06-27T12:00:00.000Z",
}
```

#### Ошибки

- Если пользователь с указанным id не найден, API вернет ошибку `404 Not Found`.
- Если произошла ошибка на стороне сервера, API вернет ошибку `500 Internal Server Error`.

### 🟣 POST `/users`

Создает нового пользователя.

#### Пример запроса
`POST` `/users`

`Content-Type: application/json`
```
{
    "firstName": "John",
    "secondName": "Doe",
    "emailAddress": "johndoe@example.com",
    "phoneNumber": "+380123456789"
}
```

#### Успешный ответ
`Status: 201 Created`
`Response:`
```
{
    "_id": "60d7e29b0f2bb638d6a7a18d",
    "firstName": "John",
    "secondName": "Doe",
    "emailAddress": "johndoe@example.com",
    "phoneNumber": "+380123456789",
    "createdAt": "2022-06-27T12:00:00.000Z",
}
```

#### Ошибки

- Если данные не проходят валидацию, API вернет ошибку `400 Bad Request` с описанием ошибок валидации.
- Если пользователь с указанным номером телефона или email уже существует, API вернет ошибку `400 Bad Request` с соответствующим сообщением об ошибке.
- Если произошла ошибка на стороне сервера, API вернет ошибку `500 Internal Server Error`.

###  🟡 PUT `/users/:id`

Редактирует пользователя по его id.

#### Пример запроса

`PUT` `/users/60d7e29b0f2bb638d6a7a18d`
```
{
    "firstName": "John",
    "secondName": "Smith",
    "emailAddress": "johnsmith@example.com",
    "phoneNumber": "+380987654321"
}
```

#### Успешный ответ

`Status: 200 OK` `Response:`
```
{
    "_id": "60d7e29b0f2bb638d6a7a18d",
    "firstName": "John",
    "secondName": "Smith",
    "emailAddress": "johnsmith@example.com",
    "phoneNumber": "+380987654321",
    "createdAt": "2022-06-27T12:00:00.000Z",
}
```

#### Ошибки

- Если пользователь с указанным id не найден, API вернет ошибку `404 Not Found`.
- Если данные не проходят валидацию, API вернет ошибку `400 Bad Request` с описанием ошибок валидации.
- Если пользователь с указанным номером телефона или email уже существует, API вернет ошибку `400 Bad Request` с соответствующим сообщением об ошибке.
- Если произошла ошибка на стороне сервера, API вернет ошибку `500 Internal Server Error`.

### 🔴 DELETE `/users/:id`

Удаляет пользователя по его id.

#### Пример запроса


`DELETE` `/users/60d7e29b0f2bb638d6a7a18d`

#### Успешный ответ

`Status: 200 OK`
```
{
    "message": "User deleted."
}
```

#### Ошибки

- Если пользователь с указанным id не найден, API вернет ошибку `404 Not Found`.
- Если произошла ошибка на стороне сервера, API вернет ошибку `500 Internal Server Error`.

--- 

# 👤 Описание схемы пользователя:

```
*required* firstName: {
            type: String,
            maxlength: 50,
            minlength: 2,
            trim: true,
            required: true,
            match: /^([А-ЯЁ][а-яё]{1,}|[A-Z][a-z]{1,})$/,
        },
 *required secondName: {
            type: String,
            maxlength: 50,
            minlength: 2,
            trim: true,
            required: true,
            match: /^([А-ЯЁ][а-яё]{1,}|[A-Z][a-z]{1,})$/,
        },
 *optional* emailAddress: {
            type: String,
            maxlength: 255,
            minlength: 2,
            trim: true,
            required: false,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
*required* phoneNumber: {
            type: String,
            maxlength: 13,
            minlength: 10,
            required: true,
            trim: true,
            match: /^\+380\d{9}$/,
        },
*generated* createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
```
