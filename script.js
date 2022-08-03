console.log("OK");
const input_box = document.getElementsByClassName('form-control');
var list_count = 0;/*to show the total tasks left */
let uniq_number = 0;/*to give serial number to tasks */
//hide or visible plus icon on focus or focus out resp.
input_box[0].addEventListener('focus', () => {
  document.getElementById('plus-icon').style.display = "block";
});
input_box[0].addEventListener('focusout', () => {
  document.getElementById('plus-icon').style.display = "none";
});

const task_remaining = document.getElementById('task-left');
/*function that runs after you submit your list*/
function submit_to_do() {
  const list_item = document.getElementsByClassName('card-body')[0];
  let value = input_box[0].value;
  /*append list
  html for list item:
  <div id="todo-item" class="q' + uniq_number + '"> 
    <input type="checkbox" id="todo-checkbox" name="checked">
    <p id="todo-text">' + value + '</p>
    <a href="#" id="delete-button" onclick="delete_button(' + uniq_number + ')">
      <i class="glyphicon fas fa-times-circle"></i>
    </a>
    <hr>
  </div>  
  */
  uniq_number++;/*It is used to uniquely identify list and */
  list_count++;/*for total count also*/
  list_item.innerHTML += '<div id="todo-item" class="q' + uniq_number + '"> <input type="checkbox" id="todo-checkbox" name="checked"><p id="todo-text">' + value + '</p><a href="#" id="delete-button" onclick="delete_button(' + uniq_number + ')"><i class="glyphicon fas fa-times-circle"></i></a><hr></div>';
  task_remaining.innerHTML = list_count + " task left";
}
//function to return all the tasks that are checked
function getCompletedTask(){
  var CompletedTasks=[];
  const Tasks = document.querySelectorAll('#todo-item');
  for (let i = 0; i < Tasks.length; i++) {
      //getting checkbox of a particular todo-item i.e #todo-item class>#todo-checkbox
      let checkedtask = document.querySelector("." + Tasks[i].className + " > #todo-checkbox");
      if (checkedtask.checked)//getting tasks that are only completed 
      {
        CompletedTasks.push(Tasks[i]);
      }
    }
    return CompletedTasks;
}
//clear completed EventListener
document.getElementById('clearcompleted').addEventListener('click', () => {
  if (list_count != 0) {
    let CompletedTask= getCompletedTask();//getting completed tasks array
      for(let i=0;i<CompletedTask.length;i++){
        CompletedTask[i].remove();
        decrease_tasks();
      }
  }
  else
    alert("There is no task left to delete");
});

//Complete  all tasks button on header
document.getElementById('completeall').addEventListener('click',()=>{
  let checkbox=document.querySelectorAll('#todo-checkbox');
  for(let i=0;i<checkbox.length;i++)
    checkbox[i].checked=true;
})


//deleting  animation effect
const animation = [
  { left: '0px' },
  { left: '-500px' }
];

const animationTime = {
  duration: 500,
  iterations: 1,
}


/*Here we are named list as per the serial number */
function delete_button(serial_number) {
  /*as we can't give class as number as it can't be used 
  with queryselector so 'q' is appended it is already taken care while adding html in js*/
  serial_number = 'q' + serial_number;
  const serial_number_element = document.getElementsByClassName(serial_number)[0];
  serial_number_element.animate(animation, animationTime);

  /*promise to wait until the animation got completed*/
  Promise.all(
    serial_number_element.getAnimations().map(
      function (animation) {
        return animation.finished
      }
    )
  ).then(
    function () {
      return serial_number_element.remove();/*deleting the element*/
    }
  );

  decrease_tasks();

}
function decrease_tasks() {
  /*decreasing list count with each deletion*/
  list_count--;
  task_remaining.innerHTML = list_count + " task left";
}


/*Footer Button of All,Unread,Completed event Listener*/
const All_button=document.getElementById('all');
const Uncompleted=document.getElementById('uncompleted');
const Completed=document.getElementById('completed');
//All button click
All_button.addEventListener('click',()=>{
  Uncompleted.className="text-muted";
  Completed.className="text-muted";
  All_button.className="text-primary";
  let getCheckedTask=getCompletedTask();
  //i was here 
});


// Uncompleted.addEventListener('click',()=>{
//   Uncompleted.className="text-primary";
//   Completed.className="text-muted";
//   All_button.className="text-muted";
//   // var getCheckedTask=



// });
// Completed.addEventListener('click',()=>{
//   Uncompleted.className="text-muted";
//   Completed.className="text-primary";
//   All_button.className="text-muted";
//   // var getCheckedTask



// });