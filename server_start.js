const Express = require("express");

const PORT = process.argv[2] || 3000;

const app = Express();

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));
app.get("/client_start.js", (req, res) => res.sendFile(`${__dirname}/client_start.js`));
app.use("/stylesheets", Express.static("stylesheets"));
app.use("/libraries", Express.static("libraries"));
app.use("/scripts", Express.static("scripts"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
