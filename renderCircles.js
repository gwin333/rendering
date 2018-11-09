
function createSingleCircle(circle) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
 
//  var i;
//  for (i=0; i < circles.length; i++) {
    return `
        <div class="text-center mt-5">
            <div style= "width: ${circle.radius}px; height:${circle.radius}px; border-radius: 50%; background-color:${circle.color}"></div> 
        </div>
    `
//  }
 
}



function renderCircles(circles) {
    return circles.map(createSingleCircle).join('')
}



// console.log(circles)



function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}