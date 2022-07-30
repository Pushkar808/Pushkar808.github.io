console.log("OK");
const input_box=document.getElementsByClassName('form-control');

//hide or visible plus icon on focus or focus out resp.
input_box[0].addEventListener('focus',()=>{
    document.getElementById('plus-icon').style.display="block";
});
input_box[0].addEventListener('focusout',()=>{
    document.getElementById('plus-icon').style.display="none";
    console.log("OK2")
});

