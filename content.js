console.log(document.activeElement);

document.addEventListener("contextmenu", function(event){
  let element = event.target;
  console.log(element);
  //console.log(window.location.href);

  

});