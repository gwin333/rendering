function createSingleNameTag() {
    return `
    <div class= "text-center mt-5" style= "width= 350px;
    `
}


function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
            <div style= "
        </div>
    `
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