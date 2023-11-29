function calTotal() {
  // Initialize total to 0
  var total = 0;

  // Get all items
  var items = document.querySelectorAll('.item');

  // Loop over each item
  for (let i = 0; i < items.length; i++) {
    // Check if the item is selected
    if (items[i].checked) {
      // Get the item's price
      var price = parseFloat(items[i].value);

      // Add the price to the total
      total += price;
    }
  }

  // Display the total
  return total;
}

function displayCustomerOrder(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Call calTotal() and store the returned total
  var total = calTotal();

  var items = document.querySelectorAll('.item');
  var orderList = ""; // Initialize orderList to an empty string
  // Loop over each item
  for (let i = 0; i < items.length; i++) {
    // Check if the item is selected
    if (items[i].checked) {
      // Get the label for the item
      var label = items[i].nextElementSibling.innerText;
      orderList += label + "<br>";
    }
  }

  // Create a new HTML string with orderList and the total
  var newHtml = `<div>${orderList}</div><div>Total: ${total}$</div>`;

  // Update the #customer-order-list element with the new HTML
  document.querySelector('#customer-order-list').innerHTML = newHtml;
}
