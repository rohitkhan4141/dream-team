/* Selectors */
const selectBtnList = document.querySelectorAll(".btn-select");
const playerList = document.querySelectorAll(".player-name");
const selectedPlayerList = document.getElementById("selected-players");

let count = 0;

/* loop through the buttons and add event listners and added to the ordered list */
for (let i = 0; i < selectBtnList.length; i++) {
  selectBtnList[i].addEventListener("click", function () {
    count += 1;
    if (count <= 5) {
      selectedPlayerList.innerHTML += `
        <li class="py-2 selected-player">${playerList[i].innerText}</li>
        `;
      selectBtnList[i].disabled = true;
    } else {
      alert("You Cant Add More Than Five Players");
    }
  });
}

/* Adding event listners to the calculate button */
document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerCost = gettingDataFromDom("perPlayerCost-field", true);
  const toatalPlayer = document.getElementsByClassName("selected-player");
  const totalPlayerCost = perPlayerCost * toatalPlayer.length;
  settingDataIntoDom("player-expences", false, totalPlayerCost);
});

/* Adding event listners to the calculate total button */
document.getElementById("btn-total").addEventListener("click", function () {
  const managerCost = gettingDataFromDom("manager-field", true);
  const coachCost = gettingDataFromDom("coach-field", true);
  const playersCost = gettingDataFromDom("player-expences", false);
  const totalCost = managerCost + coachCost + playersCost;
  settingDataIntoDom("total", false, totalCost);
});
