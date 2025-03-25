let a = document.querySelectorAll(".btn")
let string = "";
let entered_no = Array.from(a).forEach(e => {
    e.addEventListener("click", (el) => {
        if (el.target.innerHTML == "AC") {
            document.querySelector("#inp").value = ""
            string = ""
        }
        else if (el.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector("#inp").value = string
        }
        else {
            string = string + el.target.innerHTML
            document.querySelector("#inp").value = string
        }
    })
})
let arr = ["color0","color1","color2","color3","color4","color5","color6"]
setInterval(()=>{
    let random_color= arr[Math.floor(Math.random()*arr.length)]
    let be = random_color.toString()
    console.log(random_color)
    document.querySelector("#wow").classList.remove("color0")
    document.querySelector("#wow").classList.remove("color1")
    document.querySelector("#wow").classList.remove("color2")
    document.querySelector("#wow").classList.remove("color3")
    document.querySelector("#wow").classList.remove("color4")
    document.querySelector("#wow").classList.remove("color5")
    document.querySelector("#wow").classList.remove("color6")
    document.querySelector("#wow").classList.toggle(be)
},2000)
