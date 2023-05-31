
# Books CRUD Width Auth
The content of the project is that. users are registered. and logs into the system. then can add, delete, update and search all books in the system. the project is made using typescript and nestjs. download the code and start learning!

## API Reference

#### Register

```http
  POST /auth/register
```
| body  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_name`      | `string` | **Required** |
| `user_email`      | `string` | **Required**|
| `user_password`      | `string` | **Required** |


#### Login

```http
  POST /auth/Login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_name`      | `string` | **Required** |
| `user_password`      | `string` | **Required** |

#### GET ALL BOOKS

```http
  GET /book/
```

#### GET ONE BOOK

```http
  POST /book/oneBook/:id
```
| Parameter  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**  |


#### POST BOOK

```http
  POST /book/addBook
```
| body  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** |
| `book_description`      | `string` | **Required**|
| `book_title`      | `string` | **Required** |
| `book_price`      | `string` | **Required** |
| `book_author`      | `string` | **Required** |
| `created_by_id`      | `string` | **Required** |
| `created_at`      | `string` | **Required** |

#### UPDATE BOOK

```http
  POST /book/updateBook/:id
```
| body  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** |
| `book_description`      | `string` | **Required**|
| `book_title`      | `string` | **Required** |
| `book_price`      | `string` | **Required** |
| `book_author`      | `string` | **Required** |


#### DELETE BOOK

```http
  DELETE /book/deleteBook/:id
```
| Parameter  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**  |

                    Thanks for watching!
## Author

- [@JasurJamolov](https://www.github.com/JasurJamolovdev)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://t.me/ioneed_io/)


![Logo](https://res.cloudinary.com/drdadn2hv/image/upload/v1685564429/ionned_light_pakl3x.png)

