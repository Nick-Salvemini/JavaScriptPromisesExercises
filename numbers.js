let numUrl = 'http://numbersapi.com/'

// 1
let favNum = 3
$.getJSON(`${numUrl}${favNum}?json`).then(data => {
    console.log(data.text)
})

// 2
let favNums = [3, 6, 9]
$.getJSON(`${numUrl}${favNums}?json`).then(data => {
    console.log(data)
})

// 3
let numPromises = []
for (let i = 1; i < 5; i++) {
    numPromises.push($.getJSON(`${numUrl}${favNum}?json`))
}

Promise.all(numPromises)
    .then(numFacts => (
        numFacts.forEach(p => console.log(p.text))
    ))