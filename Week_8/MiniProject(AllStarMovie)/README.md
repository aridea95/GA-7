# TeamF-Backend

# RESTful endpoints users

## .GET https://pacific-mountain-56035.herokuapp.com/user

### Get All User List

> Request Header : 
no needed

> Request Body :
no needed

- Response (200 - OK)
```json

[
    {
        "id": 3,
        "fullname": "Ari",
        "username": "aridea",
        "profileimage": "public/users/Apple-iphone-11-family.jpg",
        "age": 28,
        "gender": "male",
        "email": "aridea@gmail.com",
        "password": "$2b$05$3gqvoHbrywQ1rbgjGl/ndu1XKLg/QwUF4Ny0S433fCGAYaJ2TcJmW",
        "role": "user",
        "createdAt": "2020-10-08T12:18:56.918Z",
        "updatedAt": "2020-10-08T12:18:56.918Z"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .Post https://pacific-mountain-56035.herokuapp.com/register 

### REGISTER Users

> Register, User role by default = user

> Request Header : 
no needed

> Request Body :
{ fullname, username, age, gender, email, password } 

- Response (201) "access_token"

- Response (409) - Email or Username already registered

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .POST https://pacific-mountain-56035.herokuapp.com/login

### User Login

> Request Header :
no needed

> Request Body :
{ username, password }

- Response (201) "access_token"

- Response (404 - invalid password)
- Response (404 - user not found)
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .PUT https://pacific-mountain-56035.herokuapp.com/user/update 

### Update users data

> Request Header :
{"access_token": "<your access token>"}

> request Data :
{ id }

> request Body :
{ fullname, username, age, gender, email, password }

- Response (200 - OK)
```json
[
    {
        "id" : <users id>,
        "fullname" : "<fullname users>",
        "username" : "<username users>",
        "profileimage" : "<profileimage users path>",
        "age" : <age users>,
        "gender" : "<gender users>",
        "email" : "<email users>",
        "password" : "<password users>"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .GET https://pacific-mountain-56035.herokuapp.com/user/find

### Find One User

> Request Header : {"access_token": "<your access token>"}

> Request Data : { id }
- Response ( 201 - Created )
```
{
    "id": 20,
    "fullname": "Dea Putra",
    "username": "deput",
    "profileimage": "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
    "age": 26,
    "gender": "male",
    "email": "deaputra@gmail.com",
    "password": "$2b$05$T8nffT289cQrmu.aYHfzf.L2Mo2biuj8HiYF9xIQYT6bZ/m/A1Uiq",
    "role": "user",
    "createdAt": "2020-10-11T19:20:02.563Z",
    "updatedAt": "2020-10-11T19:20:02.563Z"
}
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .DELETE https://pacific-mountain-56035.herokuapp.com/user/delete

### Delete User

> Request Header :
{"access_token": "<your access token>"}

> request Data :
{ id }

- Response (202 - user deleted)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
# RESTful endpoints movie

## .GET https://pacific-mountain-56035.herokuapp.com/movie/?page=1&limit=10 

### Get all Movie per page

> Request Header : 
not needed

> Request Body :
not needed

- Response (200 - OK)
```json
[
    { 
      "id" : <movie id>,
      "title" : "<title movie>",
      "synopsis" : "<synopsis movie>",
      "year" : <year movie>,
      "trailer" : "<trailer movie>",
      "poster" : "<poster movie>",
      "director" : "<director movie>",
      "budget" : <budget movie>,
      "userId" : <userId>,
      "createdAt" : <createdAt movie>,
      "updatedAt" : <updatedAt movie>
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .POST https://pacific-mountain-56035.herokuapp.com/movie/add 

### Add new movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
{ title, synopsis, year, trailer, poster, director, budget, userId }

- Response (200 - OK)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "userId" : <userId>,
    "createdAt" : <createdAt movie>,
    "updatedAt" : <updatedAt movie>
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .DELETE https://pacific-mountain-56035.herokuapp.com/movie/delete/:id

### Deleting movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response (200 - movie deleted)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .GET https://pacific-mountain-56035.herokuapp.com/movie/search/:id 

### Get form add movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response (200 - ke form edit movie)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .POST https://pacific-mountain-56035.herokuapp.com/movie/add

### Adding Movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Data :
{ id }

> Request Body :
{ title, synopsis, year, trailer, director, budget }

- Response (201 - Movie succesfully updated)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "updatedAt" : <updatedAt movie>
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .GET https://pacific-mountain-56035.herokuapp.com/movie/edit/:id

### Get form to edit movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response (200 - form update)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .PUT https://pacific-mountain-56035.herokuapp.com/movie/edit/

### Update the movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
{ title, synopsis, year, trailer, poster, director, budget, userId }

- Response (200 - OK)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "createdAt" : <createdAt movie>,
    "updatedAt" : <updatedAt movie>,
    "userId" : <userId>
  }
]
```
- Response (409 - title already exist! input another title!)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .GET https://pacific-mountain-56035.herokuapp.com/movie/search

### Search a movie

> Request Header : 
not needed

> Request Body :
{ search }

- Response (200 - movie found)

- Response (409 - Movie is not available)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## GET https://pacific-mountain-56035.herokuapp.com/movie/search/:id 

### Search a movie by id

> Request Header : 
no needed

> Request Data :
{ id }

> Request Body :
no needed

- Response (200 - movie found)

- Response (409 - Movie is not available)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Category

## .GET https://pacific-mountain-56035.herokuapp.com/category

### Get all category

> Request Header : 
not needed

> Request Body
not needed

- Response (200 - OK)
```json
[
    { 
        "id": 1,
        "genre": "Thriller",
        "userId": 1,
        "createdAt": "2020-10-08T07:42:52.968Z",
        "updatedAt": "2020-10-08T07:42:52.968Z"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .GET https://pacific-mountain-56035.herokuapp.com/category/add

### form add new category for movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response (200 - To form add category)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## POST https://pacific-mountain-56035.herokuapp.com/category/add 

### Post add new category

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Data :
{ id }

> Request Body :
{ genre }

- Response (200 - To form add category)
```json
[
    { 
        "id": 1,
        "genre": "Thriller",
        "userId": 1,
        "createdAt": "2020-10-08T07:42:52.968Z",
        "updatedAt": "2020-10-08T07:42:52.968Z"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .DELETE https://pacific-mountain-56035.herokuapp.com/category/delete/:id

### Deleting a category

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Data :
{ id }

> Request Body :
no needed

- Response (201 - Category deleted successfully!)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET https://pacific-mountain-56035.herokuapp.com/category/edit/:id

### Get form edit for category

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response (200 - ke form edit movie)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## PUT https://pacific-mountain-56035.herokuapp.com/category/edit/:id

### Edit Genre 

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Data :
{ id }

Request Body :
{ genre }

- Response (201 - category succesfully edited)
```json
[
    { 
        "id": 1,
        "genre": "Animation",
        "userId": 1,
        "createdAt": "2020-10-08T07:42:52.968Z",
        "updatedAt": "2020-10-08T07:42:52.968Z"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Movie by Category (Category in Movie)

## GET https://pacific-mountain-56035.herokuapp.com/category/find/:id 

### Get movie by category id

> Request Header : 
no needed

> Request Body :
no needed

- Response ( 200 - OK )
```json
[
  {
    "id": 3,
    "MovieId": 1,
    "CategoryId": 6,
    "userId": 1,
    "createdAt": "2020-10-08T08:00:36.768Z",
    "updatedAt": "2020-10-08T08:00:36.768Z",
    "Movie": {
        "id": 1,
        "title": "Searching",
        "synopsis": "Movie Synopsis",
        "year": "24 Agustus 2018",
        "trailer": "https://youtu.be/3Ro9ebQxEOY",
        "poster": "public/posters/images.jpg",
        "director": "Aneesh Chaganty",
        "budget": "$880,000",
        "userId": 1,
        "ReviewId": null,
        "sumRating": null,
        "createdAt": "2020-10-08T06:31:42.584Z",
        "updatedAt": "2020-10-08T06:31:42.584Z"
    }
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .GET https://pacific-mountain-56035.herokuapp.com/category/add/genre 

### Get form add genre to movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response ( 200 - OK )

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .POST https://pacific-mountain-56035.herokuapp.com/category/add/genre

### Add genre to movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
{ MovieId, CategoryId }

- Response ( 200 - OK )
```json
[
  {
    "MovieId"
    "CategoryId"
    "userId"
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## DELETE https://pacific-mountain-56035.herokuapp.com/category/delete/genre:id 

### Delete genre from movie

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response ( 201 - Movie Category deleted successfully )

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .GET /edit/genre/:id :https://pacific-mountain-56035.herokuapp.com/category/edit/genre/:id 

### Get form edit movie category

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
no needed

- Response ( 200 - OK )

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .PUT https://pacific-mountain-56035.herokuapp.com/category/edit/genre/:id 

### Edit of movie category

> Authorization : only for admin

> Request Header : 
{"access_token": "<your access token>"}

> Request Body :
{ MovieId, CategoryId }

- Response ( 201 - Movie edited successfully )
```
[
  {
    "MovieId"
    "CategoryId"
    "userId"
  } 
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Character

## .GET https://pacific-mountain-56035.herokuapp.com/character 

### Get All Character Movie

> Request Header : 
no needed

> Request Body :
no needed

- Response (200 - OK)
```json
[
    {
        "categoryId"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .POST https://pacific-mountain-56035.herokuapp.com/character/add 

### Add Character

> Request Header :
no needed 
{
  "access_token": "<your access token>"
}

> Request Body :
{
  "name": "<character name>",
  "photo": "<upload photo>"
}
- Response (200 - OK)
```json
[
    {
        "id": "<character id>",
        "photo": "<uploaded photo>",
        "name": "<character name>",
        "userId": <userId>,
        "createdAt": <createdAt>,
        "updatedAt": <updatedAt>
    }
]
```
- Response (409 - Conflict)
```json
{
  "<returned error message>"
}
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## .PUT https://pacific-mountain-56035.herokuapp.com/character/edit/:id 

### Edit Character

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body :
{
  "name": "<character name>",
  "photo": "<upload photo>"
}
- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## .DELETE https://pacific-mountain-56035.herokuapp.com/character/delete/:id 

### Delete Character

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body
No needed

- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## .POST https://pacific-mountain-56035.herokuapp.com/character/add/char 

### Add Movie Character

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body
{
  "MovieId": "<Movie Id>",
  "CharacterId": "<Character Id>",
  "userId": <userId>,
}
- Response (201 - Created)
```json
[
  {
    "MovieId": "<Movie Id>",
    "CharacterId": "<Character Id>",
    "userId": <userId>,
    "createdAt": <createdAt>,
    "updatedAt": <updatedAt>
  }
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## Delete https://pacific-mountain-56035.herokuapp.com/character/delete/char/:id 

### Delete Movie Character

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body
No needed

- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```
## .PUT https://pacific-mountain-56035.herokuapp.com/character/edit/char/:id 

### Edit Movie Character

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body
{
  "MovieId": "<Movie Id>",
  "CharacterId": "<Character Id>",
  "userId": <userId>,
}

- Response (201 - Created)
```
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```
## .GET https://pacific-mountain-56035.herokuapp.com/character/find/:id

### Get All Character by Movie

> Request Header : 
no needed

> Request Body :
no needed

- Response (200 - OK)
```
[
  {
    "MovieId": "<Movie Id>",
    "CharacterId": "<Character Id>",
    "userId": <userId>,
    "createdAt": <createdAt>,
    "updatedAt": <updatedAt>,
    "Character": {
        "photo": "<uploaded photo>",
        "name": "<character name>",
        "userId": 1,
        "createdAt": <createdAt>,
        "updatedAt": <updatedAt>
    }
  },
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

# RESTful endpoints Review

## .GET https://pacific-mountain-56035.herokuapp.com/review/1?page=1&limit=10

### Get All Review

> Request Header : No Needed

> Request Body : No Needed

- Respond (200 - OK)
```
[
    {
        "id": 1,
        "content": "bagus searching, mantap",
        "rating": 9,
        "userId": 2,
        "MovieId": 1,
        "createdAt": "2020-10-08T11:10:05.021Z",
        "updatedAt": "2020-10-08T11:10:05.021Z"
    },
    {
        "id": 8,
        "content": "searching coyy",
        "rating": 9,
        "userId": 3,
        "MovieId": 1,
        "createdAt": "2020-10-08T12:20:09.048Z",
        "updatedAt": "2020-10-08T12:20:09.048Z"
    },
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## .GET https://pacific-mountain-56035.herokuapp.com/review/share?page=1&limit=10

### Get User Share Review

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body : No Needed

- Response ( 200 - OK )
```
[
    {
        "id": 1,
        "content": "bagus searching, mantap",
        "rating": 9,
        "userId": 2,
        "MovieId": 1,
        "createdAt": "2020-10-08T11:10:05.021Z",
        "updatedAt": "2020-10-08T11:10:05.021Z"
    }
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## .POST https://pacific-mountain-56035.herokuapp.com/review/add/:MovieId

### Add Review MovieId

> Request Header : {
  "access_token": "<your access token>"
}

> Request Body : { content, rating }

- Response (201 - OK)
```
[
    {
        "id": 1,
        "content": "bagus searching, mantap",
        "rating": 9,
        "userId": 2,
        "MovieId": 1,
        "createdAt": "2020-10-08T11:10:05.021Z",
        "updatedAt": "2020-10-08T11:10:05.021Z"
    }
]
```
- Response (409 - Cannot review the same movie!)

- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## .PUT https://pacific-mountain-56035.herokuapp.com/review/edit/:id

### Edit Review

> Request Header : {
  "access_token": "<your access token>"
}

> Request Body : { content, rating }

- Response (201 - Review edited successfully)
```
[
    {
        "id": 1,
        "content": "mantap",
        "rating": 9,
        "userId": 2,
        "MovieId": 1,
        "createdAt": "2020-10-08T11:10:05.021Z",
        "updatedAt": "2020-10-08T11:10:05.021Z"
    }
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## .Delete https://pacific-mountain-56035.herokuapp.com/review/delete/:id 

### Delete Review

> Request Header : 
{
  "access_token": "<your access token>"
}

> Request Body
No needed

- Response (201 - review deleted)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```