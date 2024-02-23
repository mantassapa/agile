const body = document.querySelector("body")
const input = document.querySelector("input")
const textarea = document.querySelector("textarea")
const findB = document.querySelector(".find")
const addB = document.querySelector(".add")


addB.addEventListener("click", (ev)=>{
    ev.preventDefault()
    const p = document.createElement("p")
    p.innerText=textarea.value
    body.append(p)
})

findB.addEventListener("click",(ev)=>{
    ev.preventDefault()
    const p = document.querySelectorAll("p")
    p.forEach((el)=>{
        el.value
    })
})