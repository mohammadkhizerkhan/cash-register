const billAmt=document.querySelector("#billAmt");
const cashGiven=document.querySelector("#amtGiven")
const chk=document.querySelector("#check")
const message=document.querySelector("#message")


chk.addEventListener("click", function validatingCashAndBillamt() {
    hidemessage();
    if(billAmt.value>0){
        if(cashGiven.value>=billAmt.value){
            const amountReturn=cashGiven.value-billAmt.value;
            calculateChange(amountReturn)
        }
        else{
            showMessage("The cash amount shoulb be atleast equal to bill amount")
        }
    }
    else{
        showMessage("invalid amount")
    }
})


function hidemessage(){
    message.style.display="none"
}


// error message display function
function showMessage(msg){
    message.style.display="block";
    message.innteText=msg;
}

