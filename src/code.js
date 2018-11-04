// document.addEventListener("DOMContentLoaded" function() {
//   const colorInputs = document.getElementsByClassName("gg-color-item__input");
//   const gradientBox =  document.getElementById("gradient-here");
//   // const colors =
// });


const toggle = () => {
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

// deegree-value
document.getElementById('degree-input').addEventListener('input', function () {
    const degreeVal = document.getElementById('degree-input').value;
    const valLable = document.getElementById('degree-value');
    valLable.textContent = degreeVal;
  });

const addColor = () => {
  const $colorsList = document.getElementById('gg-colors-list');

  const $li = document.createElement('li');
  $li.classList.add('gg-colors-list__item');

  const $colorInput = document.createElement('input');
  $colorInput.classList.add('gg-colors-list__input');
  $colorInput.type ='color';

  const $removeBtn = document.createElement('i');
  $removeBtn.classList.add('fas' , 'fa-times' , 'gg-colors-list__remove-btn');

  $li.appendChild($removeBtn);
  $li.appendChild($colorInput);
  $colorsList.appendChild($li);
}

//remove color
document.addEventListener('click' , event =>  {
  const {target} = event;
  const isRemoveBtn = target.classList.contains('gg-colors-list__remove-btn');
  const $list = target.parentElement.parentElement;
  const $item = target.parentElement;
  if (isRemoveBtn){
    $list.removeChild($item);
  }
});

document.addEventListener('mouseup', function () {
  const $gradientBlock = document.getElementById('gradient-here');
  const degreeValue = document.getElementById('degree-input').value;
  const isRadial = document.getElementById('radial').classList.contains('gg-toggle__gradient-type--on');
  const colors = getColors();
  // console.log(colors);
});


const getColors = () => {
  let a =  document.getElementsByClassName('gg-colors-list__input');
  // return a.map((item) => {
  //   return item.value;
  // });
  console.log(typeof (a));
   return null;
}

