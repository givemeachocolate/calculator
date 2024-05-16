function add(a, b) {
    let i = "+"
    return a+b
}

function substract(c, d) {
    let j = "-"
    return c-d
}

function multiply(e, f) {
    let k = "*"
    return e*f
}

function divide(g, h) {
    let l = "/"
    return g/h
}

function operate(l, m, n) {
    if (n === "+") {
        const divResultAdd = document.createElement("div")
        divResultAdd.textContent = add(l,m)
        body.appendChild(divResultAdd)
        return add(l,m)
    } else if (n === "-") {
        const divResultSubstract = document.createElement("div")
        divResultSubstract.textContent = substract(l,m)
        body.appendChild(divResultSubstract)
        return substract(l,m)
    } else if (n === "*") {
        const divResultMultiply = document.createElement("div")
        divResultMultiply.textContent = multiply(l,m)
        body.appendChild(divResultMultiply)
        return multiply(l,m)
    } else if (n === "/") {
        const divResultDivide = document.createElement("div")
        divResultDivide.textContent = divide(l,m)
        body.appendChild(divResultDivide)
        return divide(l,m)
    }
}

// function result() {
    // btnAdd.addEventListener
//     const result = document.createElement("div")
//     result.textContent = ``
//     body.appendChild(result)
// }

const body = document.querySelector("body")

let j = []
let m = []

for (i=0; i<10; i++) {
    window["btn" + i] = document.createElement("button")
    window["btn" + i].textContent = `${i}`
    body.appendChild(window["btn" + i])
    j.push(window["btn" + i])
}

for (k=0; k<j.length; k++) {
    let h = j[k]
    let l = k
    h.addEventListener("click", () => {
       const display = document.createElement("div")
       display.textContent = l
       body.appendChild(display)
       display.setAttribute("id", "number")
       m.push(l)
    //    console.log(m)
    })
}

const btnAdd = document.createElement("button")
btnAdd.textContent = "+"
body.appendChild(btnAdd)
btnAdd.addEventListener("click", () => m.push("+"))

const btnSubstract = document.createElement("button")
btnSubstract.textContent = "-"
body.appendChild(btnSubstract)
btnSubstract.addEventListener("click", () => m.push("-"))

const btnMultiply = document.createElement("button")
btnMultiply.textContent = "*"
body.appendChild(btnMultiply)
btnMultiply.addEventListener("click", () => m.push("*"))

const btnDivide = document.createElement("button")
btnDivide.textContent = "/"
body.appendChild(btnDivide)
btnDivide.addEventListener("click", () => m.push("/"))

const btnEqual = document.createElement("button")
btnEqual.textContent = "="
body.appendChild(btnEqual)
btnEqual.addEventListener("click", () => {
    // console.log(m)
    // operate(m[0], m[2], m[1])
    // m[0] = operate(m[0], m[2], m[1])
    // const divNumber = document.getElementById("number")
    // body.removeChild(divNumber)
    // const divNumber1 = document.getElementById("number")
    // body.removeChild(divNumber)
    const div = document.querySelector("div")
    body.removeChild(div)
    const div1 = document.querySelector("div")
    body.removeChild(div1)
    // console.log(m)
    // console.log(operate(m[0], m[2], m[1]))
    m.splice(0, 1, operate(m[0], m[2], m[1]))
    m.splice(1, 2)
    // console.log(m)
})

const btnClear = document.createElement("button")
btnClear.textContent = "clear"
body.appendChild(btnClear)
btnClear.addEventListener("click", () => {
    const div2 = document.querySelector("div")
    body.removeChild(div2)
    // const div3 = document.querySelector("div")
    // body.removeChild(div3)
})

// console.log(divide(4, 5))