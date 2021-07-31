const billAmt=document.querySelector("#billAmt");
const cashGiven=document.querySelector("#amtGiven")
const chk=document.querySelector("#check")
const outputDis=document.querySelector(".notesDisplay")
const message=document.querySelector("#message")

const notes=[2000, 500, 100, 20, 10, 5, 1];
chk.addEventListener("click", function validatingCashAndBillamt() {
    hidemessage();
    if(billAmt.value>0){
        if(cashGiven.value>=billAmt.value){
            const amountReturn=cashGiven.value-billAmt.value;
            calculateChange(amountReturn);
        }
        else{
            showMessage("The cash amount should be atleast equal to bill amount");
        }
    }
    else{
        showMessage("invalid amount")
    }
});

//calculating the changes

function calculateChange(amountReturn){
    for(let i=0;i<notes.length;i++){
        const no_of_notes=Math.trunc(amountReturn/notes[i]);
        amountReturn%=notes[i];
        outputDis[i].innerText=no_of_notes;
    }
}

// hidding the error message at first
function hidemessage(){
    message.style.display="none"
}


// error message display function
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}

