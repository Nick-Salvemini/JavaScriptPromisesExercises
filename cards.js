// 1
// let cardUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
// $.getJSON(cardUrl)
//     .then(data => { console.log(`1 ${data.cards[0].value} of ${data.cards[0].suit}`) })

// 2
// let cardUrl2 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
// let card1
// let card2
// $.getJSON(cardUrl2)
//     .then(data => {
//         card1 = `${data.cards[0].value} of ${data.cards[0].suit}`;
//         return $.getJSON(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
//     })
//     .then(data2 => card2 = `${data2.cards[0].value} of ${data2.cards[0].suit}`)
//     .then(() => { console.log(`${card1} and ${card2}`) })

//3
let shuffleUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let shufflePromise = $.getJSON(shuffleUrl)

$('#drawACard').on('click', function () {
    shufflePromise.then(data => {
        let shuffleId = data.deck_id;
        let drawUrl = `https://deckofcardsapi.com/api/deck/${shuffleId}/draw/?count=1`;
        return $.getJSON(drawUrl)
    })
        .then(data => {
            let card = `${data.cards[0].value} of ${data.cards[0].suit}`;
            $(`<li>${card}</li>`).prependTo('#cardsList')
        })
})