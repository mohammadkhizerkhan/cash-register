const billDiv = document.querySelector(".billEnter");
const billAmt = document.querySelector("#billAmt");
const nextBtn = document.querySelector(".next");

const cashDiv = document.querySelector(".cashEnter");
const cashGiven = document.querySelector("#amtGiven");
const chk = document.querySelector("#check");
const message = document.querySelector("#message");

const outputDis = document.querySelector(".notesDisplay");

const notes = [2000, 500, 100, 20, 10, 5, 1];

chk.addEventListener("click", function validatingCashAndBillamt() {
  hidemessage();
  console.log(billAmt.value);
  console.log(cashGiven.value);
  if (Number(billAmt.value) === 0) {
    console.log("Amount can be zero");
  }
  if (Number(cashGiven.value) < Number(billAmt.value)) {
    showMessage("The cash amount should be atleast equal to bill amount");
  }
    const amountReturn = Number(cashGiven.value) - Number(billAmt.value);
    console.log("remaining amount: ", billAmt.value - cashGiven.value);
    console.log(amountReturn);
    //calculateChange(amountReturn);
  
});

//calculating the changes

function calculateChange(amtReturn) {
  for (let i = 0; i < notes.length; i++) {
    const no_of_notes = Math.trunc(amtReturn / notes[i]);
    amtReturn %= notes[i];
    outputDis[i].innerText = no_of_notes;
  }
}

// hidding the error message at first
function hidemessage() {
  message.style.display = "none";
}

// error message display function
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

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
