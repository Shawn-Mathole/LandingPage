// Modal functionality
const modal = document.getElementById("buyModal");
const btn = document.getElementById("buyNowBtn");
const span = document.getElementsByClassName("close")[0];
const totalPriceDisplay = document.getElementById("totalPrice");

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Price calculator
function calculatePrice() {
  let basePrice = 25;
  let colorCost = parseInt(document.getElementById("colorSelect").value);
  let engraving = document.getElementById("engraving").checked ? 5 : 0;
  let packaging = document.getElementById("packaging").checked ? 3 : 0;

  let total = basePrice + colorCost + engraving + packaging;
  totalPriceDisplay.textContent = total;
  modal.style.display = "none"; // Close modal after updating
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const terms = document.getElementById("terms");
  if (!terms.checked) {
    alert("You must agree to the terms and conditions.");
    e.preventDefault();
  }
});
