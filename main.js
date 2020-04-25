document.addEventListener('DOMContentLoaded', () =>{
  console.log('page loaded');
  // listen for form submit instead of click on submit button
  document.querySelector('#mform').addEventListener('submit', (event) =>{
    console.log("submit event values: ", event);
    event.preventDefault();

    // only add the view if there is valid input
    // select all input with 'required' field rather than chaining validation
    let inputs = document.querySelectorAll('input[required]');
    if([...inputs].every(el => el.checkValidity()))
      addView();
  })
});

function addView(){
  // let img = imageurl.value;
  let img ='http://lorempixel.com/200/200';
  let topval = toptext.value;
  let bottomval = bottomtext.value;
  let li = document.createElement('li');
  li.setAttribute('class', 'viewparent');
  
  let viewTemplate = 
  `<div class='view'>
      <img src=${img} alt='http://lorempixel.com/200/200'>
      <div class='top'>${topval}</div>
      <div class='bottom'>${bottomval}</div>
    </div>`;

  li.innerHTML = viewTemplate;
  
  // let view = document.querySelector('#viewlist');
  let newView = viewlist.appendChild(li);
  newView.addEventListener('click', (el) => {
    console.log(el.target, "was clicked, parentElement is:", el.target.parentElement);
    // removes only if you click the 'X'
    if(el.target.parentElement.className === 'viewparent')
      view.removeChild(el.target.parentElement);
  });
}