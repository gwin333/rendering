function singleCard (pokerHand) {
    return `
        <div class="text-center mt-5" style="display: inline";>
            <img src = 'img/${pokerHand.value}${pokerHand.suit}.png' style = 'width: 155px; height: 210px;'>
        </div>
    `
}

function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    return pokerHand.map(singleCard).join('')
}
/* <code>${JSON.stringify(pokerHand)}</code> */

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}