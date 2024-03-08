const tolist = document.getElementById("todolistcontainer");
const btn = document.getElementById("add_btn");
const input = document.getElementsByTagName("input")[0];
let todo = [];
let temp = "";

input.onchange = (el) => {
  temp = el.target.value;
};

const renderTodoList = () => {
  tolist.innerHTML = ""; // Clear the list container
  todo.forEach((el, index) => {
    const spantag = document.createElement("span");
    spantag.className = "spantag";

    const h1tag = document.createElement("h1");
    const deleteBTN = document.createElement("button");
    deleteBTN.className = "deletebtn";

    deleteBTN.onclick = () => {
      todo.splice(index, 1); // Remove item from the array
      renderTodoList(); // Re-render the list
    };
    h1tag.textContent = el;
    deleteBTN.textContent = "Delete";
    spantag.appendChild(h1tag);
    spantag.appendChild(deleteBTN);
   

    tolist.appendChild(spantag);
  });
};

btn.onclick = () => {
  if (temp.trim() !== "") {
    todo.push(temp);
    temp = ""; // Clear the input value
    renderTodoList(); // Re-render the list
  }
};