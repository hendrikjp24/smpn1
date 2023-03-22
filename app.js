const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static('public'));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));
app.use(cookieParser("secret"));
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));


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

// PPDB PAGE
app.get("/ppdb", (req, res)=>{
    res.render("ppdb", {
        title: "PPDB PAGE",
        layout: "layouts/main-layout"
    });
}) 

// PENGUMUMAN PAGE
app.get("/pengumuman", (req, res)=>{
    res.render("pengumuman", {
        title: "Page Pengumuman",
        layout: "layouts/main-layout"
    });
})

// PAGE JADWAL UJIAN
app.get("/jadwal-ujian", (req, res)=>{
    res.render("ujian", {
        title: "Page Jadwal Ujian",
        layout: "layouts/main-layout",
        status: req.flash('status'),
        detail: req.body
    });
})

// post jadwal ujian
let jmlahData = 0;
app.post("/jadwal-ujian", (req, res)=>{
    if (jmlahData > 0){
        req.flash('status', "Berhasil");
        res.render("ujian", {
            title: "Page Jadwal Ujian",
            layout: "layouts/main-layout",
            detail: req.body,
            status: req.flash('status')
        })
    }else{
        res.render("ujian", {
            title: "Page Jadwal Ujian",
            layout: "layouts/main-layout",
            detail: req.body,
            status: req.flash('status')
        })
        
    }
    jmlahData++;
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});