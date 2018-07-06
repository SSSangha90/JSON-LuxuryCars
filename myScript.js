/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

//JSON File uploaded to Github, after validating through JSONLint.com 

//var carManufacturer = document.getElementById("manufacturer").addEventListener('click', ajaxData);
//
//
//
//function ajaxData(){
//    var ourRequest = new XMLHttpRequest();
//    ourRequest.open("GET", "https://raw.githubusercontent.com/SSSangha90/JSON-LuxuryCars/master/expensiveLuxuryCars.json", true);
//    ourRequest.onload = function(){
//        
//        if(ourRequest.readyState == 4 && ourRequest.status == 200){
//            
//            var ourData = JSON.parse(ourRequest.responseText);
//            
//            //console.log(ourData);
//            
//            displayText(ourData);
//            
//        } else{
//            
//        }
//        
//    }
//}


// AUWAIS SOLUTION:


var getManufacturer = document.getElementById("manufacturer");



// created a variable that listens to change on our dropdown menu. 
var eventListenerCars = document.getElementById("manufacturer").addEventListener('change', happyDays);

function happyDays(){
    // you'd use the .value on the ID to get all the elements within the ID (i.e. within the dropdown menu).
    
    var ourRequest = new XMLHttpRequest();
    
    ourRequest.open("GET", "https://raw.githubusercontent.com/SSSangha90/JSON-LuxuryCars/master/expensiveLuxuryCars.json", true);
    
    ourRequest.onload = function(){
        

        if(ourRequest.readyState == 4 && ourRequest.status == 200){
           
            var ourData = JSON.parse(ourRequest.responseText);

            console.log(ourData);
          
            writeText(ourData);
            
        } else{
           
           document.getElementById("messageAlert").innerHTML = "There was an error with our servers, we are very sorry!"
           
           }
   
    }

    //outside the anonymouse function but within our happy days.
    ourRequest.send();
    
}


function writeText(a){
    var manufacturerID = getManufacturer.options[getManufacturer.selectedIndex].value;
// returns the position of each item within the array, i.e. within the manufacturer ID, like 0 for Roll's royce, when you click on it, etc.
//console.log(manufacturerID);
    console.log(a);
    document.getElementById("manufacturerC").innerHTML = a.data[manufacturerID].manufacturer;
    document.getElementById("priceC").innerHTML = "£" + a.data[manufacturerID].price;
    document.getElementById("modelC").innerHTML = a.data[manufacturerID].model;
    document.getElementById("descriptionC").innerHTML = a.data[manufacturerID].description;
//  console.log("<img src=" + a.data[manufacturerID].img + " />")
    document.getElementById("imgC").innerHTML = "<img src=" + a.data[manufacturerID].img + " />"
    // you can use HTML code in quotations, with the relevant tag, inline with JavaScript and just + it!
} 






















