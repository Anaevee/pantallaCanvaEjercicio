const input = document. querySelectorAll("input");
const addBtn = document. querySelectorAll(".btn-add");
const ul = document. querySelectorAll("ul");
const empty = document. querySelectorAll(".empty");

addBtn[0]. addEventListener("click", (e) => {
  e. preventDefault();

  const text = input[0]. value;


  if (text !== "") {
    const li = document. createElement("li");
    const p = document. createElement("p");
    p. textContent = text;

    li. appendChild(p);
    li. appendChild(addDeleteBtn());
    ul[0]. appendChild(li);

    input. value = "";
    empty[0]. style. display = "none";
  }
});
addBtn[1]. addEventListener("click", (e) => {
  e. preventDefault();

  const text = input[1]. value;


  if (text !== "") {
    const li = document. createElement("li");
    const p = document. createElement("p");
    p. textContent = text;

    li. appendChild(p);
    li. appendChild(addDeleteBtn());
    ul[1]. appendChild(li);

    input. value = "";
    empty[1]. style. display = "none";
  }
});
addBtn[2]. addEventListener("click", (e) => {
    e. preventDefault();
  
    const text = input[2]. value;
  
  
    if (text !== "") {
      const li = document. createElement("li");
      const p = document. createElement("p");
      p. textContent = text;
  
      li. appendChild(p);
      li. appendChild(addDeleteBtn());
      ul[2]. appendChild(li);
  
      input. value = "";
      empty[2]. style. display = "none";
    }
  });
  addBtn[3]. addEventListener("click", (e) => {
    e. preventDefault();
  
    const text = input[3]. value;
  
  
    if (text !== "") {
      const li = document. createElement("li");
      const p = document. createElement("p");
      p. textContent = text;
  
      li. appendChild(p);
      li. appendChild(addDeleteBtn());
      ul[3]. appendChild(li);
  
      input. value = "";
      empty[3]. style. display = "none";
    }
  });
  
function addDeleteBtn() {
  const deleteBtn = document. createElement("button");

  deleteBtn. textContent = "X";
  deleteBtn. className = "btn-delete";

  deleteBtn. addEventListener("click", (e) => {
    const item = e. target. parentElement;
    item.parentElement.removeChild(item);

    const items = document. querySelectorAll("li");

   
  });

  return deleteBtn;

  function moverDerecha(){
    const moverDerecha=document.createElement("button");

    moverDerecha.className="moverDerecha";


  }
}