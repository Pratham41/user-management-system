# ABOUT THIS APP

This is backend for user management system.

I have used Node.js, Express.js, PostgreSql, jsonwebtoken, prisma, bcryptjs, winston in this app.

# ROUTES

AUTH API

HOSTED DOMAIN 

https://user-management-system-nu.vercel.app

LOCAL DOMAIN

http://localhost:5000


REGISTER NEW USER API
http://localhost:5000/api/v1/auth/register  POST ROUTE (PUBLIC ROUTE)

LOGIN USER API
http://localhost:5000/api/v1/auth/login  POST ROUTE (PUBLIC ROUTE)

CONTACT API

ADD CONTACT API
http://localhost:5000/api/v1/contact/add  POST ROUTE (PRIVATE ROUTE)

SEARCH API
SEARCH BY NAME
http://localhost:5000/api/v1/search/name?name=abc  GET ROUTE (PRIVATE ROUTE)

SEARCH BY PHONE NUMBER
http://localhost:5000/api/v1/search/name?phoneNumber=111111  GET ROUTE (PRIVATE ROUTE)

SPAM API
MARK AS SPAM
http://localhost:5000/api/v1/search/spam  POST ROUTE (PRIVATE ROUTE)

PROFILE API
GET USER PROFILE
http://localhost:5000/api/v1/profile  GET ROUTE (PRIVATE ROUTE)

UPDATE USER PROFILE
http://localhost:5000/api/v1/profile  PUT ROUTE (PRIVATE ROUTE)


# TO RUN THIS PROJECT
### `clone the repo`
then
### `npm install`
then
### `add .env file in root directory. Variables are (PORT, DATABASE_URL, JWT_SECRET)`
then
### `npx prisma migrate dev --name init`
### `npx prisma generate`
then
### `npm run dev` 
Runs the app in the development mode.
### `npm start`
Runs the app in the production mode.
