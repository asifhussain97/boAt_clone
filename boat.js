let hbutton = document.getElementById("hambutton");
let side = document.getElementById("sidedrop");
let cbutton=document.getElementById("catbutton");
let cats=document.getElementById("categories");
let cat=document.getElementById("categorie");
let p=document.getElementById("plus");
let mbutton=document.getElementById("morebutton");
let mores=document.getElementById("mores");
let more=document.getElementById("more");
let p2=document.getElementById("plus2");
let main=document.getElementById("main");
let v1 = true;
let v2 = true;
let v3 = true;
let v4 = true;
hbutton.addEventListener("click",function(){
    if(v1){
        side.classList.remove("d-none");
        document.getElementById("overlay").style.display = "block";
    }
    else{
        side.classList.add("d-none");
        document.getElementById("overlay").style.display = "none";
    }
    v1= !v1;
});
main.addEventListener("click",function(){
        side.classList.add("d-none");
        document.getElementById("overlay").style.display = "none";
})
cbutton.addEventListener("click",function(){
    if(v2){
        cats.classList.remove("d-none");
        cbutton.style.backgroundColor="rgb(241, 241, 241)"
        cat.classList.add("border");
        p.style.transform="rotate(45deg)";

        mores.classList.add("d-none");
        mbutton.style.backgroundColor=""
        more.classList.remove("border");
        p2.style.transform="rotate(0deg)"

    }
    else{
        cats.classList.add("d-none");
        cbutton.style.backgroundColor=""
        cat.classList.remove("border");
        p.style.transform="rotate(0deg)"
    }
    v2= !v2;
})

mbutton.addEventListener("click",function(){
    if(v3){
        mores.classList.remove("d-none");
        mbutton.style.backgroundColor="rgb(241, 241, 241)"
        more.classList.add("border");
        p2.style.transform="rotate(45deg)"
        
        cats.classList.add("d-none");
        cbutton.style.backgroundColor=""
        cat.classList.remove("border");
        p.style.transform="rotate(0deg)"
    }
    else{
        mores.classList.add("d-none");
        mbutton.style.backgroundColor=""
        more.classList.remove("border");
        p2.style.transform="rotate(0deg)"
    }
    v3= !v3;
})

function display(id,cl){
    let id2 = document.getElementById(id)
    let cl2=document.getElementById(cl)
    id2.classList.remove("d-none");
    cl2.style.fontWeight="bolder";
}
function fade(id,cl){
    let id2 = document.getElementById(id)
    let cl2=document.getElementById(cl)
    id2.classList.add("d-none");
    cl2.style.fontWeight="";
}
