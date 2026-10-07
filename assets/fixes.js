/* Accessibility: Escape closes the top-most dialog / drawer */
document.addEventListener("keydown",function(e){
  if(e.key!=="Escape"||e.defaultPrevented)return;
  var layers=document.querySelectorAll(".modal-layer"),scope=layers.length?layers[layers.length-1]:document;
  var btns=scope.querySelectorAll("button[aria-label]"),re=/إغلاق|close/i;
  for(var i=0;i<btns.length;i++){if(re.test(btns[i].getAttribute("aria-label"))){btns[i].click();e.preventDefault();return}}
  if(layers.length){layers[layers.length-1].click();e.preventDefault()}
});
