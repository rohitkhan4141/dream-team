/* geeting any element data from the dom*/
function gettingDataFromDom(selectorID, isInput) {
  const elementSelector = document.getElementById(selectorID);
  let data;
  if (isInput === true) {
    data = parseInt(elementSelector.value);
  } else {
    data = parseInt(elementSelector.innerText);
  }
  return data;
}
/* setting any element data into the dom*/
function settingDataIntoDom(selectorID, isInput, value) {
  const elementSelector = document.getElementById(selectorID);
  if (isInput === true) {
    elementSelector.value = value;
  } else {
    elementSelector.innerText = value;
  }
}
