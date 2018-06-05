const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

require('./routes/index.js')(app);

app.listen(3000, function() {
    console.log("listening on port 3000!");
});