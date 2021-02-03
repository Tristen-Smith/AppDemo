/*
Test jQuery script
 */
console.log("Hi");
let paragraph = $("p");

console.log("There are " + paragraph.length + " paragraphs");

for(let i =0; i< paragraph.length; i++){
    let paragraphText = paragraph[i].textContent;
    console.log(paragraphText);
}

function myUpdateFunction(event){
    console.log("Hello")
}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction);

function addFunction(event){
    let fieldNum1 = parseFloat($("#field1").val());
    let fieldNum2 = parseFloat($("#field2").val());
    let fieldNum3 = fieldNum1 + fieldNum2
    $("#field3").val(fieldNum3);
}

let formButton2 = $("#button2");
formButton2.on("click", addFunction);

function hideFunction(event){
    if($("#paragraphToHide").is(":hidden")) {
        $("#paragraphToHide").show(500);
    }
    else {
        $("#paragraphToHide").hide(500);
    }
}

let formButton3 = $("#button3");
formButton3.on("click", hideFunction);



// -- How to validate an item

// Function to validate
function validateFunction(event) {
    // Get the field
    let v1 = $('#phoneField').val();

    // Create the regular expression
    let reg = /^[1-9]{3}?[.-][1-9]{3}[.-][1-9]{4}$/;

    // Test the regular expression to see if there is a match
    if (reg.test(v1)) {
        console.log("OK")
    } else {
        console.log("Bad")
    }}

// Attach an action to a button click
let formButton4 = $('#button4');
formButton4.on("click", validateFunction);

// -- JSON'ify a form
// We'll use this a lot to interact with the back-end

// Create function to JSON'ify
function jsonFunction(event) {

    // Create an empty object
    let formObject = {};

    // Set a field in the object to the value in this form field
    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();

    // Build the JSON string based on that object's fields
    let jsonString = JSON.stringify(formObject);

    // Set a field to the JSON result so we can see it.
    console.log(jsonString);
}

// Attach an action to a button click
let formButton5 = $('#button5');
formButton5.on("click", jsonFunction);