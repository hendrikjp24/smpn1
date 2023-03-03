const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static('public'));

// route default / index
app.get("/", (req, res)=>{
    res.render("index", {
        title: "Home Page",
        layout: "layouts/main-layout"
    })
})

app.get("/about", (req, res)=>{
    res.render("about", {
        title: "About SMPN 1 TAPHIL",
        layout: "layouts/main-layout"
    });
})


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});