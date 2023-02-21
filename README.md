## Travel Pin Project - Full Stack - Travel Pin and Review App

### Goals and Objectives:
PinpointAPI is a Backend Repository that included building a RESTful API. The learning goal was to create a project that uses a MERN stack. This backend supports the front end found [here](https://github.com/KStockton/TravelPin-FE).


### Website Link

View the website here  TBD

#### Intial Setup

Backend:

* Clone this repo: https://github.com/KStockton/PinpointAPI.
* Run ```npm install``` from the root directory.
* Login to [mongodb](https://www.mongodb.com/cloud/atlas/register).
* Setup a Node.js Cluster and obtain a connection string [MONGODB](https://www.mongodb.com/docs/drivers/node/current/quick-start/#create-a-mongodb-cluster)
* 
  * Add .env file with the connection string to the .env file and name the variable MONGO_URL ```${process.env.MONGO_URL}```.

* Run npm start http://localhost:1234/ in your browser.

#### Get ```api/v1/pins``` (All Pins)

The response sends all the teams from database. 

Response example:

```  

    {
        "_id": "63ea858edc53f1ead0899853",
        "username": "mic80205",
        "title": "Otay Mesa",
        "rating": 5,
        "lat": 32.548319,
        "long": -117.024073,
        "createdAt": "2023-02-13T18:46:38.457Z",
        "updatedAt": "2023-02-13T18:46:38.457Z",
        "__v": 0
    },
    {
        "_id": "63ed3138408cc817acfe5ecc",
        "username": "Joe",
        "title": "summer vacation",
        "rating": 5,
        "lat": 32.614,
        "long": -117.0948,
        "createdAt": "2023-02-15T19:23:36.241Z",
        "updatedAt": "2023-02-15T19:23:36.241Z",
        "__v": 0
    },
    {
        "_id": "63ed4bdc6a55b96deccbf9ad",
        "username": "Mike",
        "title": "North East SD",
        "desc": "Had a wonderful time. Worth it!!!",
        "rating": 5,
        "lat": 32.79363236569263,
        "long": -117.04066306067327,
        "createdAt": "2023-02-15T21:17:16.363Z",
        "updatedAt": "2023-02-15T21:17:16.363Z",
        "__v": 0
    },
    {
        "_id": "63ee9845879a54e9e41dce2d",
        "username": "magical",
        "title": "el cajon",
        "desc": "average at best",
        "rating": 2,
        "lat": 32.68662036988212,
        "long": -116.81666564941413,
        "createdAt": "2023-02-16T20:55:33.630Z",
        "updatedAt": "2023-02-16T20:55:33.630Z",
        "__v": 0
    }
]
```

| Name | Type | Description |
| ---- |:----:|:-----------:|
| id | Integer | Unique ID for each user |
| username | String | Username of the user that is logged in |
| title | String | Title of the Pin Point AOI |
| desc | String | Description of the Pin Point AOI |
| rating | Interger | rating of AOI |
| lat | Interger | latitude of AOI |
| longitude | Interger | longitude of AOI |


#### Post ```api/v1/pins``` (Create a new Pin)

The user can post a new Pint to the database. Below is the required parameters. Must be formated in JSON,

| Name | Type | Description |
| ---- |:----:|:-----------:|
| title | String | Title of the Pin Point AOI |
| desc | String | Description of the Pin Point AOI |
| rating | Interger | rating of AOI |

Post example:
```
{ 
	"title": "Ball Arena",
	"desc": "The Nuggets defeated Dallas Mavs",
  "rating": 5,
}
```

Response:

```
{
    "username": "Bob",
    "title": "Ball Arena",
    "desc": "The Nuggets defeated Dallas Mavs",
    "rating": 5,
    "lat": 32,
    "long": -117,
    "_id": "63f50798ccc95208700b4df0",
    "createdAt": "2023-02-21T18:04:08.644Z",
    "updatedAt": "2023-02-21T18:04:08.644Z",
    "__v": 0
}
```

## Users

### Post ```/api/v1/users/register``` Register a new user

A user can login to begin creating reviews.

See below for more information.

| Name | Type | Description |
| ---- |:----:|:-----------:|
| username | String | New users username |
| email | String | email of the user |
| password | String | password of the user |

Example post request 
```
 {
     "username": "Mic",
     "email": "test@example.com",
     "password": "example"
 }
```

Response: 

```
{
    "id": "63f50a7d284d106bd902eb59",
}
```

### Post ```/api/v1/users/login``` Login to site

See below for more information.

| Name | Type | Description |
| ---- |:----:|:-----------:|
| username | String | New users username |
| password | String | password of the user |

Example post request 
```
 {
     "username": "Mic",
     "password": "example"
 }
```

Response:

```
{
    "id": "63f50a7d284d106bd902eb59",
    "username": "mic"
}
```

## Contributors

#### Michael King-Stockton

Express.js
MongoDB / Mongoose

### Primary Technologies used:

* Node.js
* MongoDB
* Async Javascript
* BCrypt