console.log(document)

function nElement(id){
    const element=document.getElementById(id);
    return element;
}

const cartbnt=document.getElementsByClassName("scard");
console.log(cartbnt);

for(let cartButton of cartbnt){
    console.log(cartButton)

    const AddButton=cartButton.querySelector(".card-btn");
    console.log("AddButton",AddButton)
    const totalPrice=nElement("total-price").innerText;
    console.log(totalPrice); 


AddButton.addEventListener("click",function(){
    const cardTitle=cartButton.querySelector(".card-title").innerText;
    console.log(cardTitle);


const amount=cartButton.querySelector(".taka").innerText;
console.log(amount);

const totalPrice=nElement("total-price").innerText;

const currentAmount=parseFloat(amount)+Number(totalPrice);
nElement("total-price").innerText=currentAmount;
// console.log(currentAmount)

const cardContainer=nElement("cart-container")
console.log(cardContainer)
const newCard=document.createElement("div")
newCard.innerHTML=`
     <div class="m-5 bg-green-200 rounded-xl p-2">
     
<h1>${cardTitle}</h1>
<h1>${amount}</h1>
    </div>
    <div class="flex">

        </div>`;

cardContainer.append(newCard);

})
}