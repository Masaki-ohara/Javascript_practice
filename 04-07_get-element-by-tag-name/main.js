'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  let elements = document.getElementsByTagName('p');
  console.log(elements);
  for(let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
  }
}, false);
