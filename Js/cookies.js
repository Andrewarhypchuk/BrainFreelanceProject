let cookieModal = document.querySelector(".content")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("content_active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("content_active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("content_active")
    }
}, 2000)