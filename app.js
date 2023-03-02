const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

// route default / index
app.get("/", (req, res)=>{
    res.send("Hello World");
})


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});