const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require("method-override");
const routes = require ("./routes");

const comment = require("./models/comment.js")

const bodyParser = require('body-parser');

const corsOptions = {
    origin: ['http://localhost:3000'], //port for React app
    // origin: ['http://beer-encyclopaedia.surge.sh'], //port for React app
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });

//   app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://beer-encyclopaedia.surge.sh");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   })

app.use(methodOverride("_method"));

app.use("/comment", routes.comment);

app.listen(process.env.PORT||3005, () => {
    console.log("My portfolio is set up and running");
});