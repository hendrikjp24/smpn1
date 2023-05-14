const btlogin = document.getElementById("btlogin");

console.log(btlogin);


if(document.location.href.includes("login")){
    console.log("INI PAGE LOGIN");
    document.body.style.backgroundColor = "#3eb2f0";
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #3eb2f0, #fafcfc)";
}else{
    console.log("INI BUKAN PAGE LOGIN");
}