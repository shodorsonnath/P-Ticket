function selectedSit(seat) {
  let selectedSeats = document.querySelectorAll(".selected");
  let countSeats = document.getElementById("count-seat");
  let totalSeats = document.getElementById("total-seat");

  if (selectedSeats.length >= 4) {
    alert("You cannot buy more than 4 seats.");
    return;
  }

  let countSeatsTotal = selectedSeats.length + 1;

  seat.classList.add("selected");
  countSeats.innerText = selectedSeats.length + 1;

  updateSeatDetails();
}

function updateSeatDetails() {
  let selectedSeats = document.querySelectorAll(".selected");
  let totalPrice = document.getElementById("total-price");
  let seatDetails = document.getElementById("seat-details");
  let grandTotalPrice = document.getElementById("grand-total");

  let selectedSeatDetailsInfo = [];
  selectedSeats.forEach(function (selectedSeat) {
    selectedSeatDetailsInfo.push(selectedSeat.textContent);
  });

  seatDetails.innerHTML = "";
  selectedSeatDetailsInfo.forEach(function (seatNumber, index) {
    seatDetails.innerHTML +=
      seatNumber +
      "&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  Economy &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  550<br>";
  });

  let totalPriceTk = selectedSeats.length * 550;
  totalPrice.innerText = totalPriceTk;
  grandTotalPrice.innerHTML = totalPriceTk;
}

document.getElementById("btn-coupon-apply").addEventListener("click", applyCoupon);

function applyCoupon() {
  let couponCodeValue = document.getElementById("btn-coupon");
  let grandTotalPriceN = document.getElementById("grand-total")
  let couponCodeDiv = document.getElementById("coupon-code")
  let couponCode = couponCodeValue.value.trim();

  if (couponCode === "NEW15") {
    let totalPrice = parseInt(document.getElementById("total-price").innerText);
    let discountPrice = totalPrice * 0.15; 
    let grandTotalPrice = totalPrice - discountPrice;

    grandTotalPriceN.innerText = grandTotalPrice;
    couponCodeDiv.style.display = "none";
  } 
  else {
    alert("Invalid Coupon Code!!!");
    return;
  }
}


