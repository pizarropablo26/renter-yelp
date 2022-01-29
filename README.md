# Renter Yelp

## Structure
* `back/` contains back-end code (Node, Express, TypeScript)
    * `routes/` contains callbacks for each access point
* `front/` contains front-end code (React)
    * `public/` contains files to be served statically
* `build/` contains a production-ready build of the front-end + back-end

## Build

Install back-end dependencies:
```bash
renter-yelp> npm install
```
Install front-end dependencies:
```bash
renter-yelp> cd front
renter-yelp/front> npm install
```
Build the front-end:
```bash
renter-yelp/front> npm run build
```

Build the back-end:
```bash
renter-yelp/front> cd ..
renter-yelp> npm run build
```

Run the server on `localhost:8000`:
```bash
renter-yelp> npm start
```

(You can also exclusively serve the front-end):
```bash
renter-yelp/front> npm start
```


