// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const productInput = form.elements.product;
  const quantityInput = form.elements.qty;
  addToList(productInput.value, quantityInput.value);
  productInput.value = '';
  quantityInput.value = '';
});

const addToList = (product, qty) => {
  const newProduct = document.createElement('li');
  newProduct.innerText = (`${qty} ${product}`);
  list.appendChild(newProduct);
}