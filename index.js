let saveEl = document.getElementById("zero1")
let saveXl = document.getElementById("zero")

let count = 0
let count1 = 0


function but() {
    count = count + 1
    saveEl.textContent = count

}

function but1() {
    count += 2
    saveEl.textContent = count

}

function but2() {
    count += 3
    saveEl.textContent = count

}

function button() {
    count1 += 1
    saveXl.textContent = count1
}

function button1() {
    count1 += 2
    saveXl.textContent = count1
}

function button2() {
    count1 += 3
    saveXl.textContent = count1
}
document.getElementById("reset").addEventListener("click", () => {
    count = 0
    count1 = 0
    saveXl.textContent = count1
    saveEl.textContent = count

})
console.log(count)