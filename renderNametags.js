function createSingleNameTag(nametag) {
    return `
    <div class= "text-center mt-5" style= "width: 330px; height: 180px; border: 2px solid #000; border-radius: 5px;">
        <h2 style= "font-weight: bold; color: #fff; background-color:blue; padding:8px;">Hello, my name is:</h1>
        <h3 style= "font-variant: small-caps; padding: 25px; text-align: auto">${nametag}</h3>
    </div>
    `
}


function renderNametags(nametags) {
    return nametags.map(createSingleNameTag).join('')
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}