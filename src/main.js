if('serviceWorker' in navigator){
  window.addEventListener('load' , () =>{
    navigator.serviceWorker
      .register('../service-worker.js')
      .then(reg => console.log('service worker registreted'))
      .catch(err => console.log(`error while registrating service worker : ${err}`))
  });
}



const $gradientBlock = document.getElementById('gradient-here');

 document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('gradient-direction').style.display = 'none';
  $gradientBlock.style.backgroundImage = setGradient($gradientBlock);
});

const toggle = () => {
  const $toggleBtn = event.target;
  $toggleBtn.style.outline = 'none';
  const $radial = document.getElementById('radial');
  const $linear = document.getElementById('linear');
  const $direction = document.getElementById('gradient-direction');
  if ($toggleBtn.classList.contains('toggle-linear')) {
    $toggleBtn.classList.replace('toggle-linear', 'toggle-radial');
    $linear.classList.replace('gg-toggle__gradient-type--on', 'gg-toggle__gradient-type--off');
    $radial.classList.replace('gg-toggle__gradient-type--off', 'gg-toggle__gradient-type--on');
    $direction.style.display = 'none';
  } else {
    $toggleBtn.classList.replace('toggle-radial', 'toggle-linear');
    $radial.classList.replace('gg-toggle__gradient-type--on', 'gg-toggle__gradient-type--off');
    $linear.classList.replace('gg-toggle__gradient-type--off', 'gg-toggle__gradient-type--on');
    $direction.style.display = 'block';
  }
  setGradient($gradientBlock);
}

document.getElementById('degree-input').addEventListener('input', function () {
    const degreeVal = document.getElementById('degree-input').value;
    const $valLable = document.getElementById('degree-value');
    $valLable.textContent = degreeVal;
    setGradient($gradientBlock);
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
  setGradient($gradientBlock);
}

const colorsList = document.getElementById('gg-colors-list');
colorsList.addEventListener('click' , event =>  {
  const {target} = event;
  const isRemoveBtn = target.classList.contains('gg-colors-list__remove-btn');
  const $list = target.parentElement.parentElement;
  const $item = target.parentElement;
  if (isRemoveBtn){
    $list.removeChild($item);
  }
  setGradient($gradientBlock);
});

const setGradient = whereToSet =>{
  whereToSet.style.backgroundImage = `${getGradient()}`;
  $gradientBlock.innerHTML ='';
}

const getGradient = () => {
  const degreeValue = document.getElementById('degree-input').value;
  const isRadial = document.getElementById('radial').classList.contains('gg-toggle__gradient-type--on');
  const colors = getColors();

  let gradient = '';

  let gradientType;
  isRadial ? gradientType = 'radial-gradient' : gradientType = 'linear-gradient';

  const colorList = colors.join(' , ');

  isRadial ? gradient = `${gradientType}( ${colorList} )` : gradient = `${gradientType}( ${degreeValue}deg , ${colorList} )`;
  return gradient;
}

const getColors = () => {
  const colorInputs = Array.from(document.getElementsByClassName('gg-colors-list__input'));
  return colorInputs.map(item =>{
    return item.value;
  });
}

const getCss = () =>{
  const $back = document.getElementById('main');
  setGradient($back);
  $gradientBlock.style.background ='linear-gradient(169deg, #333, #777)';
  let gradient = getGradient();
  gradient = `background: -moz-${gradient} background: -webkit-${gradient} background: ${gradient}`;
  $gradientBlock.innerText = gradient;
}
