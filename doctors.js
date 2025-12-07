
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".doctor-card");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        const day = btn.getAttribute("data-day");

        cards.forEach(card => {
          if (day === "all") {
            card.classList.remove("hide");
          } else if (card.classList.contains(day)) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      });
    });

    // ===== Book Now Button Click =====
    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const doctorName = btn.closest(".doctor-card").querySelector("h3").innerText;
        alert(`You are booking an appointment with ${doctorName}.`);
        // Later: replace this alert with a booking form or page
      });
    });