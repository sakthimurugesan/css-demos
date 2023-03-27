const btn=document.getElementsByClassName("btn")[0];
const navbar=document.getElementsByClassName("nav-li")[0];
btn.addEventListener("click",()=>
{
    navbar.classList.toggle("active");
    console.log("hello")
})