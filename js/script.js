const selectBtnList = document.querySelectorAll(".btn-select");
const playerList = document.querySelectorAll(".player-name");

const selectedPlayerList = document.getElementById("selected-players");

let count = 0;

for (let i = 0; i < selectBtnList.length; i++) {
  selectBtnList[i].addEventListener("click", function () {
    count += 1;
    if (count <= 5) {
      selectedPlayerList.innerHTML += `
        <li class="py-2">${playerList[i].innerText}</li>
        `;
      selectBtnList[i].disabled = true;
    } else {
      alert("You Cant Add More Than Five Players");
    }
  });
}
