let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
 
if(urlParams.has('day')){
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
 
}else{
    myDay = myDate.getDay();
 
}
 
 
function coffeeTemplate(coffee){
    let myReturn = "";
 
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
 
    </p>
        `;
        
    return myReturn;
}
 
switch(myDay){

    case 0:
        today = "Sunday";
 
        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of pumpkin spice latte",
            day: "Sunday",
            desc: `love autumn and are basic? The Pumpkin Spice Latte is for you!`
        };
 
    break;    
 
    case 1:
        today = "Monday";
 
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble Tea",
            day: "Monday",
            desc: 'how can you hate Bubble Tea? No seriously, name me a single person who hates this drink.'
        };
 
    break;    
 
    case 2:
        today = "Tuesday";
 
        coffee = {
            color: "blue",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a caramel latte",
            day: "Tuesday",
            desc: 'people who drink Caramel Lattes also probably don\'t fold their socks.'
        };
 
    break;   
 
 
    case 3:
        today = "Wednesday";
 
        coffee = {
            color: "grey",
            name: "cold brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of cold brew",
            day: "Wednesday",
            desc: 'feel depressed? The Cold Brew won\'t make you feel any better.'
        };
 
    break;
 
    case 4:
        today = "Thursday";
 
        coffee = {
            color: "black",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip",
            day: "Thursday",
            desc: 'want to feel like a lowsy business man? Try some drip. #stocks!'
 
        };
 
    break;
 
 
    case 5:
        today = "Friday";
    
        coffee = {
            color: "tan",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of Frappaccino",
            day: "Friday",
            desc: 'if you like the Frappaccino you\'re probably the type of person who adds sweetener to everything just to feel good about themselves every now and then.'
           
         };
 
    break;     
 
 
    case 6:
        today = "Saturday";
 
        coffee = {
            color: "yellow",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of Mocha",
            day: "Saturday",
            desc: 'per request, our minimum-wage baristas will make some poor quality milk art with the Mocha as well!'
 
        
        };
 
    break;
    
    

 
 
 
}
 
 
console.log(coffee);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
 
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
 
document.getElementById("coffee-highlight").style.color = coffee.color;
