const form = document.querySelector("#form");
const input = document.querySelector("#notes");
const appendDiv = document.querySelector("#div");
const noteSpot = document.querySelector(".notesHere")


function newNote(){
  //  makes the note section w btn
 const shortNote = document.createElement("div");
 const shortNoteP = document.createElement("p");
 const modalBtn = document.createElement("button")

 noteSpot.append(shortNote)
 shortNoteP.innerText= input.value;
 shortNote.append(shortNoteP);
 shortNote.classList.add("shortNote");
 shortNote.append(modalBtn);
 modalBtn.innerText="See full note"

// makes the modal visible -> see below
modalBtn.addEventListener("click",(e)=>{
  modalBg.classList.add("active-bg")
})

// the hidden modal
const modalBg = document.createElement("div");
const modal = document.createElement("div");
const modalP= document.createElement("p");
const spanX = document.createElement("span");

spanX.innerText="X";
spanX.classList.add("spanX");
modalBg.classList.add("modal-bg");
modal.classList.add("modal");
modalP.innerText=input.value;
modalBg.append(modal);
modal.append(modalP);
modal.append(spanX)
noteSpot.append(modalBg)

// hides the modal
spanX.addEventListener("click", ()=>{
    modalBg.classList.remove("active-bg")
})
input.value=""
}


form.addEventListener("submit",(e)=>{
e.preventDefault();
newNote();
})



// const h1 = document.createElement("h1")
// h1.innerText=`${input.value}`
// appendDiv.append(h1);
// input.value=""

// modalBg.classList.add("active-bg")
