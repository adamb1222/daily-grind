/*
Day of week - day
Coffee Name - name
coffee pic - pic
alt tag - alt
coffee description - desc
color for coffee - color
*/




let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

function coffeeTemplate(coffee){
        let myReturn = "";


        myReturn = `
        <p>
            <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>,
           ${coffee.desc}
        </p>
        `;

        return myReturn;

}

switch(myDay){

    case 1:
        today = "Monday"

        coffee = {
            color: "pink",
            name: "Bubbletea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            day: "Monday",
            desc: `I love bubble tea!`



        };

    break;
    
    
    
    case 3:
        today = "Wednesday"

        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            desc: `Some days you just need the drip!`



        };

    break;


}


console.log(coffee)

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

//alert("Hi, it's " + today)