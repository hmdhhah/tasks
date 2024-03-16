const addBtn = document.querySelector(".addtolist");
const inputBox = document.querySelector(".inputbox"); // Get the input box
let listContainer = document.getElementById("list");
// Assign the completedListContainer variable by selecting the element with the ID "completedlistcontainer"
let completedListContainer = document.getElementById("completedlistcontainer");
let mainContainer = document.getElementById("maincontainer");
let numberoftaks = document.getElementById("nooflist");


addBtn.addEventListener("click", () => {
  let addlist = document.getElementsByClassName("addlist")[0];
  let body = document.getElementsByClassName("body")[0];
  body.style.display = "none";
  addlist.style.display = "block";
});
const cancelBtn = document.querySelector(".cancelbtn");
cancelBtn.addEventListener("click", () => {
  let addlist = document.getElementsByClassName("addlist")[0];
  let body = document.getElementsByClassName("body")[0];
  addlist.style.display = "none";
  body.style.display = "block";
});

const add = () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let addlist = document.getElementsByClassName("addlist")[0];
    let body = document.getElementsByClassName("body")[0];
    addlist.style.display = "none";
    body.style.display = "block";
    inputBox.value = "";
    saveData();
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    count();
    saveData();
  }
};
function toggle(item) {
  if (item.parentElement.id === "list") {
    completedListContainer.appendChild(item);
    count();
    saveData();
    saveData2();
    saveData3();
  } else if (item.parentElement.id === "completedlistcontainer") {
    listContainer.appendChild(item);
    count();
    saveData();
    saveData2();
    saveData3();
  }
}

listContainer.addEventListener("click", (task) => {
  if (task.target.tagName === "LI") {
    toggle(task.target);
  } else if (task.target.tagName === "SPAN") {
    task.target.parentElement.remove();
    saveData();
  }
  

});

completedListContainer.addEventListener("click", (task) => {
  if (task.target.tagName === "LI") {
    toggle(task.target);
  } else if (task.target.tagName === "SPAN") {
    task.target.parentElement.remove();
    count();
   saveData2();
    saveData3();
  }

});

function count() {
  let completedListItems = document.querySelectorAll(
    "#completedlistcontainer li"
  );
  let numberoftaks = document.getElementById("nooflist");
  numberoftaks.textContent = completedListItems.length;
}

count();


function saveData() {
  console.log("Saving data...");
  console.log("List container HTML:", listContainer.innerHTML);
  localStorage.setItem("data", listContainer.innerHTML);
}

function saveData2() {
  console.log("Saving data...");
  console.log("List container HTML:", completedListContainer.innerHTML);
  localStorage.setItem("data2", completedListContainer.innerHTML);
}

function showTaks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTaks();


function showTaks2() {
  completedListContainer.innerHTML = localStorage.getItem("data2");
}
showTaks2();

function saveData3(){
  localStorage.setItem("data3",numberoftaks.innerHTML);
}
function showTaks3(){
  numberoftaks.innerHTML = localStorage.getItem("data3");
}
showTaks3();
 
// let options = document.getElementsByClassName("options");
// let threeDots    = document.querySelectorAll(".thredots")[0];

// threeDots.addEventListener("click",()=>{
//   for (let i = 0; i < options.length; i++) {
//     options[i].style.display = "block";
//   }
   
// })
let options = document.getElementsByClassName("options");
let threeDots = document.querySelectorAll(".thredots")[0];
let clickHandler = (event) => {
  // Check if the click is outside of options or threedots
  if (!event.target.closest('.options') && !event.target.closest('.thredots')) {
    // Click is outside, hide options
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
  }
};

// Show options when threedots is clicked
threeDots.addEventListener("click", () => {
  for (let i = 0; i < options.length; i++) {
    options[i].style.display = "block";
  }
  // Prevent the click event from propagating to the document
  event.stopPropagation();
});

// Hide options when clicked outside
document.addEventListener('click', clickHandler);
