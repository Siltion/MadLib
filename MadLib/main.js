document.getElementById('submit').addEventListener("click", press);

function press() {
    let noun1 = document.getElementById('noun1').value; 
    let adj1 = document.getElementById('adj1').value; 
    let nounp1 = document.getElementById('nounp1').value; 
    let fmsp = document.getElementById('fmsp').value; 
    let place = document.getElementById('place').value; 
    let verbING = document.getElementById('verbING').value; 
    let adj2 = document.getElementById('adj2').value; 
    let favs = document.getElementById('favs').value; 
    let verbED = document.getElementById('verbED').value; 
    let adverb = document.getElementById('adverb').value; 
    let verbING2 = document.getElementById('verbING2').value; 
    let superM = document.getElementById('superM').value; 
    let adj3 = document.getElementById('adj3').value; 
    document.getElementById('para2').innerHTML="Once upon a time there was a "+ noun1 +". It had "+ adj1 +" "+ nounp1 +"! One day it met "+ fmsp +" on the side of the "+ place +" they were "+ verbING +". It was very "+ adj2 +"; they both looked like hobos! All of the sudden they started singing "+ favs +" really loudly. They "+ verbED +" really "+ adverb +"! "+ fmsp +" "+ verbING2 +" with "+ superM +". They looked really "+ adj3 +"!"

}



