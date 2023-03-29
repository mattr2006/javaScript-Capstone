const personSelectorDisplay = document.getElementById("result");
const possibleOptions = document.getElementById("person-selector");
const counterMinus = document.querySelectorAll(".minBtn");
const counterPlus = document.querySelectorAll(".plsBtn");

const weightValueMatt = document.querySelector("#wv-matt");
const weightValueJake = document.querySelector("#wv-jake");
const weightValueDenise = document.querySelector("#wv-denise");
const weightValueJames = document.querySelector("#wv-james");
const weightValueMitchell = document.querySelector("#wv-mitchell");
const weightValueMollyKate = document.querySelector("#wv-mollykate");
const weightValueOlivia = document.querySelector("#wv-olivia");
const weightValueEnoka = document.querySelector("#wv-enoka");
const weightValueShawn = document.querySelector("#wv-shawn");
const weightValueKarely = document.querySelector("#wv-karely");
const weightValueJohn = document.querySelector("#wv-john");

const weights = {
  matt: "1",
  jake: "2",
  denise: "0",
  james: "0",
  mitchell: "0",
  mollykate: "0",
  shawn: "0",
  olivia: "0",
  karely: "0",
  enoka: "0",
  john: "0",
};

weightValueMatt.innerHTML = weights["matt"];
weightValueMatt.innerHTML = weights["jake"];
weightValueMatt.innerHTML = weights["denise"];
weightValueMatt.innerHTML = weights["james"];
weightValueMatt.innerHTML = weights["mitchell"];
weightValueMatt.innerHTML = weights["mollykate"];
weightValueMatt.innerHTML = weights["shawn"];
weightValueMatt.innerHTML = weights["oliva"];
weightValueMatt.innerHTML = weights["karely"];
weightValueMatt.innerHTML = weights["enoka"];
weightValueMatt.innerHTML = weights["john"];

let nameList;

counterMinus.forEach((button) =>
  button.addEventListener("click", (e) => {
    const studentName = e.target.id.split("-")[1];
    const studentSpan = document.querySelector(`#wv-${studentName}`);
    weights[studentName]--;
    studentSpan.innerHTML = weights[studentName];
  })
);

counterPlus.forEach((button) => {
  button.addEventListener("click", (e) => {
    const studentName = e.target.id.split("-")[1];
    const studentSpan = document.querySelector(`#wv-${studentName}`);
    weights[studentName]++;
    studentSpan.innerHTML = weights[studentName];
  });
});

function updateCount() {
  counterDisplay.innerHTML = count;
}

possibleOptions.addEventListener("click", (e) => {
  generateComputerChoice();
});

function generateComputerChoice() {
  let nameList = [
    "Matt",
    "John",
    "James",
    "Enoka",
    "Karely",
    "Olivia",
    "Jake",
    "Mitchell",
    "Molly Kate",
    "Denise",
  ];

  const name = nameList[Math.floor(Math.random(nameList) * nameList.length)];

  personSelectorDisplay.innerHTML = name;
}

// const nameList = [

//     "Matt",
//     "John",
//     "James",
//     "Enoka",
//     "Karely",
//     "Olivia",
//     "Jake",
//     "Mitchell",
//     "Molly Kate",
//     "Denise",];

// const newList = [];

// const numLoops = 1;

// for (let i = 0; i < numLoops; i++) {
//   const randomIndex = Math.floor(Math.random() * nameList.length);

//   const randomItem = nameList[randomIndex];
//   newList.push(randomItem);
//   console.log(newList);
// }
