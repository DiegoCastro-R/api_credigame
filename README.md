# api_credigame

API para aplicato mobile credigame

## Install

    yarn || npm install

## Run the app

    yarn dev || npm dev

# REST API

The REST API to the example app is described below.

## Create New User

### Request

`POST /users/register/`

    curl -i -H 'Accept: application/json' http://localhost:3333/users/register/

`Body: 
{
  name: string;
  lastName: string;
  email: string;
  password: string;
}

`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Auth User

### Request

`POST /users/auth/`

    curl -i -H 'Accept: application/json' -d 'email=string&password=string'  http://localhost:3333/users/auth
    
`Body: 
{
  email: string;
  password: string;
}

`


### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"success": true, "user": { "name": string }, "token": string}

## Update User Score

### Request

`POST /users/update-score`

    curl -i -H 'Accept: application/json' -d 'score=10' http://localhost:3333/users/update-score
    
    `Should be Authenticaded with Bearer Token on Header, generated on /users/auth`

`
Body: 
{
  score: number
}
`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"success": true, "message": "User score successfuly updated"}
    
## User's Ranking TOP 10

### Request

`POST /users/ranking`

    curl -i -H 'Accept: application/json' -d 'score=10' http://localhost:7000/users/update-score
    
    `Should be Authenticaded with Bearer Token on Header, generated on /users/auth`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"success": true,"data": [{"name": string,"lastName": string,"score": number},{"name": string,"lastName": string,"score": number}]
}



