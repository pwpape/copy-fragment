document.addEventListener("contextmenu", function(e) {
  let copyFrom = document.createElement("textarea");
  copyFrom.textContent = window.location.href + "#" + e.target.id;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
});