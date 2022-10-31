function updateText() {
  const text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}

function makeBold(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}
function makeUnderline(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("underline");
}

function textAlign(elem, textType) {
  const text = textType;
  document.getElementById("text-output").style.textAlign = text;
  let buttonLists = document.getElementsByClassName("align");
  for (let i = 0; buttonLists.length > i; i++) {
    buttonLists[i].classList.remove("active");
  }

  elem.classList.add("active");
}
