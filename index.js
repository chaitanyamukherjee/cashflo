var totalp = document.querySelector("#tprice");
var paidp = document.querySelector("#paid");
var sub = document.querySelector("#mutton");
var noteBlocks = document.querySelector(".noteBlock");
var eror = document.querySelector(".error");
var leftamount = document.querySelector(".leftamt");


var money = [2000,500, 200, 100, 20, 10, 5, 1];

var a = 0;

 function clearous(){
    noteBlocks.innerText = "";
    leftamount.innerText = "";
    noteBlocks.style.margin = "0rem 0rem 0rem 0rem";
    // noteBlocks.style.border = "0rem";
 }


function errors(total,paid){
    clearous();
    eror.innerHTML = "";
    if(paid == "" || total == ""){
        eror.innerHTML = "Input can't be empty";
        console.log("1");
    }
    else if(total < 0 || paid < 0){
        eror.innerHTML = "Input can't be negative"
        console.log("2");
    }
    // if(paid == "" || total == "" || paid < 0 || total < 0){
    //     try {
    //         if(total == "" || paid == "") throw "can't be empty";
    //         if(total < 0 || paid < 0) throw "can't be negative";
    //       }
    //       catch(err) {
    //         eror.innerHTML = "Input " + err;
    //       }
    //     }
    else if(Number(paid) < Number(total)){
        eror.innerHTML = "Sorry Paid amount is less then Total amount";
        console.log("3");
    }
    else if(Number(paid) == Number(total)){
        eror.innerHTML = "No Amount left";
        console.log("4");
    }
    else{
        process(total,paid);
        console.log( total + paid);
    }
}

function process(total, paid){
    clearous();

    var nbcsmall = window.matchMedia("(max-width: 376px)");
    var nbc = window.matchMedia("(max-width: 416px)");
    if(nbc.matches){
        noteBlocks.style.margin = "2rem 0rem 0rem 0rem";
    }
    else if(nbcsmall){
        noteBlocks.style.margin = "1.3rem"
    }
    else{
        noteBlocks.style.margin = "0rem 0rem 5rem 18rem";
    }

    var leftAmt = paid - total;
    leftamount.innerText = "Left Amount → " + "₹ " +leftAmt;
    var head = document.createElement('div');
    noteBlocks.appendChild(head);
    head.innerText = " Notes to Return!"
    head.style.margin = "1rem 0rem 0.8rem 0rem";
    head.style.animation = "lists 1s ease";
    head.style.textAlign = "center";

    for(var i = 0; i < 8; i++){
        if(parseInt(leftAmt) >= money[i]){
            console.log(leftAmt)
            var quo = parseInt(leftAmt / money[i]);
            console.log(money[i]);
            var rem = parseInt(leftAmt) - (parseInt(quo) * money[i]);
            var res = parseInt(quo);
            // var image = document.createElement('img');
            // image.src = 'iconmonstr-currency-25.svg';

            var list = document.createElement('div');
            list.classList.add("liststyle");
            list.style.animationDelay = "2s";
            list.style.animation = "lists 1s ease";
            list.innerHTML = "<img src = \"iconmonstr-currency-25.svg\">";
            list.innerText = "₹ " + money[i] + " → " + res;
            noteBlocks.appendChild(list);
            console.log(quo.toFixed(0) * money[i] + " " + rem);
            leftAmt = rem;
            if(rem == 0){
                break; 
            }
        }
    }
}