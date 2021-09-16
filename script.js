// const billDiv = document.querySelector(".billEnter");
const billAmt = document.querySelector("#billAmt");
const nextBtn = document.querySelector("#next");

const cashDiv = document.querySelector(".cashEnter");
const cashGiven = document.querySelector("#amtGiven");
const chk = document.querySelector("#check");
const message = document.querySelector("#message");

const outputDiv = document.querySelector(".outputEnter");
const outputDis = document.querySelectorAll(".notesDisplay");

const notes = [2000, 500, 100, 20, 10, 5, 1];

chk.addEventListener("click", function validatingCashAndBillamt() {
  hidemessage();
  outputDiv.style.display = "block";
  if(Number(billAmt.value)>0 && Number(cashGiven.value)>0){
    
    if (Number(cashGiven.value) < Number(billAmt.value)) {
      showMessage("The cash amount should be atleast equal to bill amount");
      return;
    }
    const amountReturn = Number(cashGiven.value) - Number(billAmt.value);
    calculateChange(amountReturn);
  }

  else{
    showMessage("Please enter the valid amount");
  }
  

});

//calculating the changes

function calculateChange(amountReturn) {
  for (let i = 0; i < notes.length; i++) {
    const no_of_notes = Math.trunc(amountReturn / notes[i]);
    amountReturn %= notes[i];
    outputDis[i].innerText = no_of_notes;
  }
  console.log(no_of_notes)
}

// hidding the error message at first
function hidemessage() {
  message.style.display = "none";
}

// error message display function
function showMessage(msg) {
  outputDiv.style.display="none"
  message.style.display = "block";
  message.innerText = msg;
}


// next button hide

outputDiv.style.display = "none";
cashDiv.style.display = "none";
nextBtn.addEventListener("click", () => {
  hidemessage();
  if (Number(billAmt.value) > 0) {
    nextBtn.style.display = "none";
    cashDiv.style.display = "block";
  } else {
    showMessage("Enter valid bill amount");
  }
});

