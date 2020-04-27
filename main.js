function addView(){
  let imgurl = imageurl.value;
  let topval = toptext.value;
  let bottomval = bottomtext.value;

  // image validation, also includes dataURLs:
  if(imgurl.match(/\.(jpeg|jpg|gif|png)(\_|\:)?(large)?$|^data\:image/) == null){
    console.log('Image appears to be invalid, inserting a default image instead.');
    
    // possible default images:
    // 'http://lorempixel.com/200/200';
    // 'https://www.adobe.com/content/dam/acom/target/emea/emeastk0001/657x388_pod2.jpg';
    
    imgurl = 'https://i.kym-cdn.com/photos/images/original/001/349/572/c27.jpg_large';
    topval = 'hey';
    bottomval = 'the image url is invalid';
  }
  
  let li = document.createElement('li');
  li.setAttribute('class', 'viewparent');
  
  let viewTemplate = 
  `<div class='view'>
      <img src=${imgurl}>
      <div class='imagetext top'>${topval}</div>
      <div class='imagetext bottom'>${bottomval}</div>
    </div>`;

  li.innerHTML = viewTemplate;
  
  // let view = document.querySelector('#viewlist');
  let newView = viewlist.appendChild(li);
  newView.addEventListener('click', (el) => {
    console.log(el.target, "was clicked, parentElement is:", el.target.parentElement);
    // removes only if you click the 'X'
    if(el.target.parentElement.className === 'viewparent')
      viewlist.removeChild(el.target.parentElement);
  });
}

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