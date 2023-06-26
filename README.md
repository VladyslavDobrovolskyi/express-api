# express-api

## REST API, написанный на Express, с подключением базы данных MongoDB с помощью библиотеки Mongoose. API предоставляет возможность выполнять CRUD-операции с данными, используя HTTP-запросы

API документация:

## User API

### Get all users

Returns a list of all users.

-   **URL**

    /users

-   **Method:**

    ``GET`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:** `[{"_id": "611a7b4154f4a7b2b8b8f6de", "firstName": "John", "secondName": "Doe", "emailAddress": "johndoe@example.com", "phoneNumber": "+380123456789", "createdAt": "2022-08-15T12:00:00.000Z"}, {"_id": "611a7b4154f4a7b2b8b8f6df", "firstName": "Jane", "secondName": "Doe", "emailAddress": "janedoe@example.com", "phoneNumber": "+380987654321", "createdAt": "2022-08-15T13:00:00.000Z"}]`

-   **Error Response:**

    -   **Code:** 500 Internal Server Error <br />
        **Content:** `{ message: 'Internal Server Error.' }`

### Get user by id

Returns a user by the given id.

-   **URL**

    /users/:id

-   **Method:**

    ``GET`

-   **URL Params**

    **Required:**

    ``id=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:** `{"_id": "611a7b4154f4a7b2b8b8f6de", "firstName": "John", "secondName": "Doe", "emailAddress": "johndoe@example.com", "phoneNumber": "+380123456789", "createdAt": "2022-08-15T12:00:00.000Z"}`

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ message: 'User not found.' }`
    -   **Code:** 500 Internal Server Error <br />
        **Content:** `{ message: 'Internal Server Error.' }`

### Edit user by id

Updates a user by the given id.

-   **URL**

    /users/:id

-   **Method:**

    ``PUT`

-   **URL Params**

    **Required:**

    ``id=[string]`

-   **Data Params**

    **Required:**

    ``{ firstName: [string], secondName: [string], emailAddress: [string], phoneNumber: [string] }`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:** `{"_id": "611a7b4154f4a7b2b8b8f6de", "firstName": "John", "secondName": "Doe", "emailAddress": "johndoe@example.com", "phoneNumber": "+380123456789", "createdAt": "2022-08-15T12:00:00.000Z"}`

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ message: 'User not found.' }`
    -   **Code:** 500 Internal Server Error <br />
        **Content:** `{ message: 'Internal Server Error.' }`

### Delete user by id

Deletes a user by the given id.

-   **URL**

    /users/:id

-   **Method:**

    ``DELETE`

-   **URL Params**

    **Required:**

    ``id=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:** `{ message: 'User deleted' }`

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ message: 'User not found.' }`
    -   **Code:** 500 Internal Server Error <br />
        **Content:** `{ message: 'Internal Server Error.' }`

### Create user

Creates a new user.

-   **URL**

    /users

-   **Method:**

    ``POST`

-   **Data Params**

    **Required:**

    ``{ firstName: [string], secondName: [string], emailAddress: [string], phoneNumber: [string] }`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:** `{"_id": "611a7b4154f4a7b2b8b8f6de", "firstName": "John", "secondName": "Doe", "emailAddress": "johndoe@example.com", "phoneNumber": "+380123456789", "createdAt": "2022-08-15T12:00:00.000Z"}`

-   **Error Response:**

    -   **Code:** 400 Bad Request <br />
        **Content:** `{ error: 'User with this email already exists.' }`
    -   **Code:** 500 Internal Server Error <br />
        **Content:** `{ error: 'Internal Server Error.' }`
