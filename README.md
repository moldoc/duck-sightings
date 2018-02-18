# Duck sighting app

This app allows you to list the duck sightings from the backend, as well
as add your own sightings. If you add a new sighting, it will be added to the list.
Please note that this app doesn't use a database, which means that any sightings
that you add will be lost when the server is restarted.

## Requirements

Requires [Node.js](https://nodejs.org/) installed with npm. [Git](https://git-scm.com/) is used for cloning repository.

Tested with Node.js version 8.9.4 and npm v5.6.0.

## Install

```
$ git clone https://github.com/moldoc/duck-sightings.git
$ cd summer-2018
$ npm install
```

## Run

To run both backend and frontend simultaneously, run

```
$ npm run dev
```
The backend uses port 8081 and front end port 3000.

# Duck backend

Simple backend stub for having fun.

## Requirements

Requires [Node.js](https://nodejs.org/) installed with npm. [Git](https://git-scm.com/) is used for cloning repository.

Tested with Node.js version 6.0.0 and npm v3.8.6.

## Run

To start server run

```
$ npm start
```

or if you want to run server in some other port than default 8081

```
$ PORT=<port> node server.js
```

where you should replace `<port>` with wanted port number
