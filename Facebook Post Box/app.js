function addTodo(){
    var input = document.getElementById("text")
    var list = document.getElementById("list")
   list.innerHTML = `
   <li class="licolor" id="bkcolor">
   <input class='todoinput' type='text' value='${input.value}' disabled/>  
   <button class="btn"  onclick='delTodo()'>Delet</button>
   <button class="btn" onclick= 'editTodo(this)'>Edit</button> 
    </li>
   `
    






    // console.log(input.value)
    // var li = document.createElement('li')
    // var text = document.createTextNode(input.value)
    // li.appendChild(text)
    // var delButton = document.createElement('button')
    // var delText = document.createTextNode('Delet')
    // delButton.appendChild(delText)
    // delButton.setAttribute('onclick','delTodo()')
    // var editButton = document.createElement('button')
    // var editText = document.createTextNode('Edit')
    // editButton.appendChild(editText)
    // li.appendChild(delButton)
    // li.appendChild(editButton)
    // list.appendChild(li)
  

}
function delTodo(){
    event.target.parentNode.remove()
} 
var edit = false;
function editTodo(e){
    // var oldValue = event.target.parentNode.firstChild.nodeValue;
    // var editValue =prompt("Enter update value", oldValue)
    // event.target.parentNode.firstChild.nodeValue = editValue;
    if(edit){
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur() 
        e.parentNode.childNodes[5].innerHTML = "Edit"
        edit = false;

    }else{
    e.parentNode.childNodes[1].disabled = false;
    e.parentNode.childNodes[1].focus() 
    e.parentNode.childNodes[5].innerHTML = "Update"
    edit = true;
}
}
// function green(){
//     document.getElementById('text')
//   var element = document.getElementById('list')
//   element.style.backgroundImage = "url('img/images\ \(1\).jpg')";
// }
// function bilue(){
//     var element = document.getElementById('li st')
//     element.style.backgroundImage ="url('img/download\ \(6\).jpg')";
// }
// function pinck(){
//     var element = document.getElementById('list')
//     element.style.backgroundImage = "url('img/images.jpg')";
// }
// function red(){
//     var element = document.getElementById('list')
//     element.style.backgroundImage = "url('img/images\ \(2\).jpg')";
// }
// function yellow(){
//     var element = document.getElementById('list')
//     element.style.backgroundImage = "url('img/images\ \(3\).jpg')";
// }


function green() {
    var element = document.getElementById('text');
    element.style.backgroundImage = "url('img/images\ \(1\).jpg')";
  }
  
  function blue() {
    var element = document.getElementById('text');
    element.style.backgroundImage = "url('img/download\ \(6\).jpg')";
  }
  
  function pink() {
    var element = document.getElementById('text');
    element.style.backgroundImage = "url('img/images.jpg')";
  }
  
  function red() {
    var element = document.getElementById('text');
    element.style.backgroundImage = "url('img/images\ \(2\).jpg')";
  }
  
  function yellow() {
    var element = document.getElementById('text');
    element.style.backgroundImage = "url('img/images\ \(3\).jpg')";
  }