console.log("OK");
const input_box=document.getElementsByClassName('form-control');
var list_count=0;/*to show the total tasks left */

//hide or visible plus icon on focus or focus out resp.
input_box[0].addEventListener('focus',()=>{
    document.getElementById('plus-icon').style.display="block";
});
input_box[0].addEventListener('focusout',()=>{
    document.getElementById('plus-icon').style.display="none";
});


/*function that runs after you submit your list*/
function ok(){
    const list_item=document.getElementsByClassName('card-body')[0];
    let value=input_box[0].value;
    /*append list
    html for list item:
        <div id="todo-item">
            <input type="radio" id="todo-radio" >
            <p id="todo-text">this is sample text</p>
            <i class="glyphicon fas fa-times-circle"></i>
            <hr>
        </div>
    */
    list_count++;
    console.log(list_count)
    list_item.innerHTML+='<div id="todo-item"> <input type="radio" id="todo-radio" ><p id="todo-text">'+value+'</p><i class="glyphicon fas fa-times-circle"></i><hr></div>';
} 