const btn = document.querySelector(".btn"),
    heart = document.querySelector(".heart"),
    box = document.querySelector(".box");
// hearts = document.querySelector('.my-heart');


btn.addEventListener("click", () => {
    if (btn) {
        box.classList.toggle("active")
        heart.classList.add("active")

        heart.style.boxShadow = "1px 1px 15px crimson"

        heart.addEventListener("mouseenter", () => {
            heart.style.background = "black"
            heart.style.borderRadius = "5px"
            heart.style.boxShadow = "5px 5px 20px black"

        })
        heart.addEventListener("mouseout", () => {
            heart.style.background = "#fff"
            heart.style.boxShadow = "5px 5px 20px crimson"
        })
    }
})

// addEventListener("mousemove", () => {

// })