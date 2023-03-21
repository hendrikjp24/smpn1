const btCari = document.getElementById("btnSubmit");

const tableUjian = document.querySelector(".table-ujian");

let clickCari = 0;
btCari.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Halo Its Me!");
    if(clickCari < 1){
        tableUjian.classList.toggle("hide");
    }
    clickCari += 1;
});