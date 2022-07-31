console.log("OK");
const input_box=document.getElementsByClassName('form-control');
var list_count=0;/*to show the total tasks left */
let uniq_number=0;/*to give serial number to tasks */
//hide or visible plus icon on focus or focus out resp.
input_box[0].addEventListener('focus',()=>{
    document.getElementById('plus-icon').style.display="block";
});
input_box[0].addEventListener('focusout',()=>{
    document.getElementById('plus-icon').style.display="none";
});

const task_remaining=document.getElementById('task-left');
/*function that runs after you submit your list*/
function submit_to_do(){
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
    uniq_number++;/*It is used to uniquely identify list and */
    list_count++;/*for total count also*/
    list_item.innerHTML+='<div id="todo-item" class="'+uniq_number+'"> <input type="radio" id="todo-radio" ><p id="todo-text">'+value+'</p><a href="#" id="delete-button" onclick="ok('+uniq_number+')"><i class="glyphicon fas fa-times-circle"></i></a><hr></div>';
    task_remaining.innerHTML=list_count+" task left";
} 

const newspaperSpinning = [
    { left:'0px' },
    { left:'-500px' }
  ];

const newspaperTiming = {
    duration: 500,
    iterations: 1,
  }


/*Here we are named list as per the serial number */
function ok(serial_number){
    const ok=document.getElementsByClassName(serial_number)[0];
    ok.animate(newspaperSpinning,newspaperTiming);

    /*promise to wait until the animation got completed*/
    Promise.all(
        ok.getAnimations().map(
          function(animation) {
            return animation.finished
          }
        )
      ).then(
        function() {
          return ok.remove();/*deleting the element*/
        }
      );
      
      /*decreasing list count with each deletion*/
      list_count--;
      task_remaining.innerHTML=list_count+" task left";
      
}


