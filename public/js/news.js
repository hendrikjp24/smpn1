const btnext = document.getElementById("btnext");
const btprev = document.getElementById("btprev");

const alamaturlnext = btnext.getAttribute("href");
const cekPageNext = alamaturlnext.split("/");

const alamaturlprev = btprev.getAttribute("href");
const cekPagePrev = alamaturlprev.split("/");

if(parseInt(cekPageNext[2]) == 0){
    btprev.style.display = "none";
}

btnext.addEventListener("click", ()=>{
    let newPage = parseInt(cekPageNext[2]) + 1;
    const newUrl = `/${cekPageNext[1]}/${newPage}`;
    btnext.setAttribute("href", newUrl);
})

btprev.addEventListener("click", ()=>{
    let newPage = parseInt(cekPagePrev[2]) - 1;
    const newUrl = `/${cekPagePrev[1]}/${newPage}`;
    btprev.setAttribute("href", newUrl);
})