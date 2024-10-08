let addToCartBtns = document.querySelectorAll('#add-to-cart');
let shop = document.querySelector('.shop');
let shoppingCart = document.querySelector('.cart-body-wrapper');
let tableBody = document.querySelector('tbody');


for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', addToCart);
}

function addToCart(event) {
    let btn = event.target;

    let btnParent = btn.parentElement;
    let btnGrandparent = btn.parentElement.parentElement;
    let itemPrice = btnParent.firstElementChild.textContent;
    let itemName = btnGrandparent.firstElementChild.textContent; 
    let itemImage = btnGrandparent.parentElement.firstElementChild.src;
    let deleteBtn = document.querySelectorAll('.cart-delete');
    /* let cartItem = document.querySelector('.cart-item'); */
    

    /* cart table */
    let cartTable = document.querySelector('.cart-table');
    let itemQuantity;
 
    let newItem = document.createElement('tr');
newItem.innerHTML = `
    <td class="cart-image"><img src="${itemImage}" alt="${itemName}"></td>
    <td class="cart-name">${itemName}</td>
    <td class="cart-quantity">
        <div class="cart-quantity-btns">
           <button class="quantity-minus">
            <i class="fas fa-minus"></i>
           </button>
          <div class="quantity-number">0</div>
          <button class="quantity-plus">
            <i class="fas fa-plus"></i>
             </button>
        </div>
         </td>
         <td class="cart-price">${itemPrice}</td>
         <td>
           <div class="cart-delete">
            <i class="fas fa-trash-can"></i>
           </div>
        </td>
`;

tableBody.appendChild(newItem);
cartTable.appendChild(tableBody);

for(let i = 0; i < deleteBtn.length; i ++){
    deleteBtn[i].addEventListener('click', deleteItem);
}
}
/* end of add to cart function */

/* delete btn */
function deleteItem(event){
    let selectedBtn = event.target;
    let cartItem = selectedBtn.parentElement;
    let cartItemParent = cartItem.parentElement;
    cartItemParent.removeChild(cartItem);
    console.log();
}


/* cart interactions */
//cart minus and plus buttons
/* let quantityMinus = document.querySelector('.quantity-minus');
let quantityPlus = document.querySelector('.quantity-plus');
let quantityNumber = document.querySelector('.quantity-number').textContent;

quantityPlus.addEventListener('click', ()=>{
    quantityNumber ++;
})

quantityMinus.addEventListener('click', ()=>{
    quantityNumber --;
}) */