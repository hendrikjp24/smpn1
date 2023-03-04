const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static('public'));

// route default / index
// PAGE HOME PAGE
app.get("/", (req, res)=>{
    res.render("index", {
        title: "Home Page",
        layout: "layouts/main-layout",
        home: "active"
    })
})

// PAGE PROFILE > TENTANG SEKOLAH
app.get("/about", (req, res)=>{
    res.render("about", {
        title: "About SMPN 1 TAPHIL",
        layout: "layouts/main-layout"
    });
})

// PAGE VISI MISI
app.get("/visi", (req, res)=>{
    res.render("visi_misi", {
        title: "Visi dan Misi",
        layout: "layouts/main-layout"
    });
})

// CONTACT PAGE
app.get("/contact", (req, res)=>{
    res.render("contact", {
        title: "Contact Kami",
        layout: "layouts/main-layout"
    });

})


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});