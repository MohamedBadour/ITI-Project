let quantitySpan = document.querySelector('.quantity-controls span');          
let quantity = 1;

let unitPrice = 14.90;


let cartBadge = document.querySelector('.num');                         
function updateUI() {
  quantitySpan.textContent = quantity.toString().padStart(2, '0');

  let totalPrice = document.querySelectorAll('td')[3];                     
  totalPrice.textContent = "$" + (unitPrice * quantity).toFixed(2); 
  cartBadge.textContent = quantity; 
}


let plusBtn = document.querySelector('.quantity-controls button:last-child');  
plusBtn.addEventListener('click', function () {
  quantity = quantity + 1;
  updateUI(); 
});


let minusBtn = document.querySelector('.quantity-controls button:first-child'); 
minusBtn.addEventListener('click', function () {
  if (quantity > 1) {
    quantity = quantity - 1;
    updateUI(); 
  }
});
