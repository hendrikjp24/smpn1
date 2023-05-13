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
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "secret",
    resave: true,
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
        detail: req.body,
        progress: req.flash('progres'),
        tahun: req.flash('tahun'),
        kelas: req.flash('kelas'),
        grupKelas: req.flash('grupKelas'),
        semester: req.flash('semester')
    });
})

// Page all news
app.get("/berita", (req, res)=>{
    res.render("news", {
        title: "Berita",
        layout: "layouts/main-layout",
        pagenation: 0
    });
})

// Pagenation pada news
app.get("/berita/:page", (req, res)=>{
    
    if(req.params.page === "0"){
        res.redirect("/berita");
    }else{
        res.render("news", {
            title: "Berita",
            layout: "layouts/main-layout",
            pagenation: req.params.page
        });
    }
})


// post jadwal ujian
let jmlahData = 0;
app.post("/jadwal-ujian", (req, res)=>{
    if (jmlahData > 0){
        req.flash('status', "Berhasil");
        req.flash('progres', 'Pencarian');
        
        // data from form
        req.flash('tahun', req.body.tahun);
        req.flash('kelas', req.body.kelas);
        req.flash('grupKelas', req.body.grupKelas);
        req.flash('semester', req.body.semester);


        res.redirect("/jadwal-ujian");
        
    }else{
        req.flash('progres', 'Pencarian');
        // data from form
        req.flash('tahun', req.body.tahun);
        req.flash('kelas', req.body.kelas);
        req.flash('grupKelas', req.body.grupKelas);
        req.flash('semester', req.body.semester);

        res.redirect("/jadwal-ujian");
        
    }
    jmlahData++;
})

// Page Detail Berita
app.get("/detail-berita",(req, res)=>{
    res.render('detail-berita', {
        title: "Detail Berita",
        layout: "layouts/main-layout"
    });
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});