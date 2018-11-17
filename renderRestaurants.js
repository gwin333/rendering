function renderRestaurant(restaurants) {
    return `
        <div class="text-center mt-5" style="border-radius: 11px; background: #e6e6e6; padding: 4px; border: none; width: 220px; height: 120px; display: inline-block;">
            <h2 style= "font-weight: bold;">${restaurants.name}</h2>
            <h6>${restaurants.type}</h6>
            <h2 style="color: #00b33c; font-weight: bold;">${priceTier(restaurants.priceRating)}</h2>
            
        </div>
    `
}

function priceTier(value) {
    if (value===1) {
        return '$'
    } else if (value===2) {
        return '$$'
    } else if (value===3) {
        return '$$$'
    } else if (value===4) {
        return '$$$$'
    } else if (value===5) {
        return '$$$$$'
    }
}

function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    return restaurants.map(renderRestaurant).join('')
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}