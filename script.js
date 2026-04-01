function hireWorker(type) {
    alert("You selected: " + type);
}


function calculateCost() {

    let area = document.getElementById("area").value;
    let rate = document.getElementById("rate").value;
    let materialPercent = document.getElementById("material").value;
    let labourPercent = document.getElementById("labour").value;

    let baseCost = area * rate;

    let materialCost = (baseCost * materialPercent) / 100;
    let labourCost = (baseCost * labourPercent) / 100;

    let total = materialCost + labourCost;

    document.getElementById("materialCost").innerText = "Material Cost: ₹" + materialCost;
    document.getElementById("labourCost").innerText = "Labour Cost: ₹" + labourCost;
    document.getElementById("totalCost").innerText = "Total Cost: ₹" + total;
}


// Show selected worker
window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let worker = params.get("worker");

    if (worker) {
        document.getElementById("workerName").innerText = "Booking: " + worker;
    }
}

// Confirm booking
function confirmBooking() {
    alert("Booking Confirmed ✅");
}