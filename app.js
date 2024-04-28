const express =  require("express");
const path = require('path')

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/git-in-the-terminal.html");
});

app.get("/git-in-the-terminal", (req, res) => {
    res.sendFile(__dirname + "/public/git-in-the-terminal.html");
});

app.get("/data-types-in-javascript", (req, res) => {
    res.sendFile(__dirname + "/public/data-types-in-javascript.html");
});

app.get("/type-coercion", (req, res) => {
    res.sendFile(__dirname + "/public/type-coercion.html");
});

app.get("/what-is-node-js", (req, res) => {
    res.sendFile(__dirname + "/public/what-is-node-js.html");
});

app.get("/rest-api", (req, res) => {
    res.sendFile(__dirname + "/public/rest-api.html");
});

app.get("/functions-in-javascript", (req, res) => {
    res.sendFile(__dirname + "/public/functions-in-javascript.html");
});

app.get("/package-json-node-modules", (req, res) => {
    res.sendFile(__dirname + "/public/package-json-node-modules.html");
});

app.get("/loop-methods", (req, res) => {
    res.sendFile(__dirname + "/public/loop-methods.html");
});

app.get("/getting-started-with-express", (req, res) => {
    res.sendFile(__dirname + "/public/getting-started-with-express.html");
});


app.get("/fetch-request", (req, res) => {
    res.sendFile(__dirname + "/public/fetch-request.html");
});

app.get("/terminology-for-url", (req, res) => {
    res.sendFile(__dirname + "/public/terminology-for-url.html");
});



app.listen(3000, () => console.log("Server is running on port 3000"));
