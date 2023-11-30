function calTotal(event) {
  event.preventDefault();
  var tours = document.querySelectorAll('.item');
  var numberOfPeople = document.getElementById('number-of-people').value;
  var price = 0;
  for (let i = 0; i < tours.length; i++) {
    if (tours[i].selected) {
      price = tours[i].value;
    }
  }
  document.getElementById('price').innerHTML = `<p>${price}$/Person</p>`;
  
  var total = price * numberOfPeople;
  document.getElementById('totalPrice').innerHTML = `<p>Total Amount: ${total}$</p>`;
}