// Get the text element
const text = document.getElementById('text');
// Get the length of the text
const textLength = text.getComputedTextLength();
//Set the text length to 0
text.style.strokeDasharray = textLength;
text.style.strokeDashoffset = textLength;

// Animate the text drawing
text.animate([
    // Start with fully drawn text
    {strokeDashoffset:textLength},
    //End with no drawn text
    {strokeDashoffset:0}
],{
    //Animation duration in milliseconds
    duration: 4000,
    //Animation easing function
    easing: 'cubic-bezier(.38,.57,1,.5)'
}).onfinish=()=>{
    //Remove strokeDasharray
    text.style.strokeDasharray='none';
    //Set strokeDashoffset to 0
    text.style.strokeDashoffset='0';
};

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};