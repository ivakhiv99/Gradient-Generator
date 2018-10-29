// document.addEventListener("DOMContentLoaded" function() {
//   const colorInputs = document.getElementsByClassName("gg-color-item__input");
//   const gradientBox =  document.getElementById("gradient-here");
//   // const colors =
// });


function toggle () {
  const $toggleBtn = event.target;
  $toggleBtn.style.outline = 'none';
  const $radial = document.getElementById('radial');
  const $linear = document.getElementById('linear');
  if ($toggleBtn.classList.contains('toggle-linear')) {
    $toggleBtn.classList.replace('toggle-linear', 'toggle-radial');
    $linear.classList.replace('gg-toggle__gradient-type--on', 'gg-toggle__gradient-type--off');
    $radial.classList.replace('gg-toggle__gradient-type--off', 'gg-toggle__gradient-type--on');
  } else {
    $toggleBtn.classList.replace('toggle-radial', 'toggle-linear');
    $radial.classList.replace('gg-toggle__gradient-type--on', 'gg-toggle__gradient-type--off');
    $linear.classList.replace('gg-toggle__gradient-type--off', 'gg-toggle__gradient-type--on');
  }
}

const $degreeInput = document.getElementById('degree-input');
console.log($degreeInput);

$degreeInput.addEventListener('mouseup', function () {
  const $degreeVal = document.getElementById('degree-value');
  console.log("f u");
  $degreeVal.innerText = $degreeInput.value;
});
