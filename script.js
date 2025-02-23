document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Empire Dashboard Loaded!");

    // Risk System Elements
    const riskBar = document.getElementById("risk-bar");
    const increaseRiskBtn = document.getElementById("increase-risk");
    const decreaseRiskBtn = document.getElementById("decrease-risk");

    // Revenue & Stats Elements
    const revenueText = document.getElementById("revenue");
    const productionRateText = document.getElementById("production-rate");
    const efficiencyText = document.getElementById("efficiency");

    // Navigation Buttons
    const navButtons = document.querySelectorAll(".nav-button");

    // Store Data in Local Storage to Persist on Refresh
    let riskLevel = localStorage.getItem("riskLevel") ? parseInt(localStorage.getItem("riskLevel")) : 40;
    let revenue = localStorage.getItem("revenue") ? parseInt(localStorage.getItem("revenue")) : 5000;
    let productionRate = localStorage.getItem("productionRate") ? parseInt(localStorage.getItem("productionRate")) : 10;
    let efficiency = localStorage.getItem("efficiency") ? parseInt(localStorage.getItem("efficiency")) : 60;

    /*** 🛑 RISK SYSTEM ***/
    function updateRiskMeter() {
        if (riskBar) {
            riskBar.style.width = `${riskLevel}%`;
            riskBar.textContent = `${riskLevel}% Suspicion`;

            if (riskLevel >= 80) {
                riskBar.style.backgroundColor = "red";
                riskBar.classList.add("blink");
                playAlertSound();
            } else if (riskLevel >= 50) {
                riskBar.style.backgroundColor = "orange";
                riskBar.classList.remove("blink");
            } else {
                riskBar.style.backgroundColor = "green";
                riskBar.classList.remove("blink");
            }
        }
    }

    // Increase Risk Button
    if (increaseRiskBtn) {
        increaseRiskBtn.addEventListener("click", () => {
            if (riskLevel < 100) {
                riskLevel += 10;
                localStorage.setItem("riskLevel", riskLevel);
                updateRiskMeter();
            }
        });
    }

    // Decrease Risk Button (Simulating Bribes or Lying Low)
    if (decreaseRiskBtn) {
        decreaseRiskBtn.addEventListener("click", () => {
            if (riskLevel > 10) {
                riskLevel -= 10;
                localStorage.setItem("riskLevel", riskLevel);
                updateRiskMeter();
            }
        });
    }

    /*** 💰 AUTO-GENERATE REVENUE & UPDATE STATS ***/
    function updateEmpireStats() {
        revenue += Math.floor(Math.random() * 1000) + 500; // Add $500-$1500 per cycle
        productionRate = Math.min(100, productionRate + 2); // Increase efficiency over time
        efficiency = Math.min(100, efficiency + 1); // Efficiency improves over time

        // Update UI
        revenueText.textContent = `$${revenue.toLocaleString()}`;
        productionRateText.textContent = `${productionRate}% per batch`;
        efficiencyText.textContent = `${efficiency}% delivered`;

        // Save Data
        localStorage.setItem("revenue", revenue);
        localStorage.setItem("productionRate", productionRate);
        localStorage.setItem("efficiency", efficiency);
    }

    setInterval(updateEmpireStats, 5000); // Updates every 5 seconds

    /*** 🔊 ALERT SOUND FOR HIGH RISK ***/
    function playAlertSound() {
        const alertSound = new Audio("sounds/alert.mp3");
        alertSound.volume = 0.5;
        alertSound.play();
    }

    /*** 🔄 SMOOTH PAGE TRANSITIONS (NO HARSH RELOADS) ***/
    navButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents default link behavior

            // Apply fade-out animation
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = button.getAttribute("href");
            }, 500); // 0.5s transition
        });
    });

    // Initialize Risk Meter & Empire Stats
    updateRiskMeter();
    updateEmpireStats();
});
