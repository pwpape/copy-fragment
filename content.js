document.addEventListener("contextmenu", function(e) {
  let copyFrom = document.createElement("textarea");
  if (e.target.id == "") {
    copyFrom.textContent = window.location.href;
  }
  else {
    copyFrom.textContent = window.location.origin + window.location.pathname + "#" + e.target.id;
  }
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
});