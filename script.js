document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // SERVICE DATA
  // ==============================
  const servicesData = {
    "pre-wedding": {
      name: "Pre Wedding Photography",
      price: "₹20,000",
      desc: "Romantic outdoor shoot with cinematic poses and edited album."
    },
    "full-wedding": {
      name: "Full Wedding Photography",
      price: "₹60,000",
      desc: "Complete wedding coverage including haldi, mehendi, wedding and reception."
    },
    "event-photography": {
      name: "Event Coverage Photography",
      price: "₹20,000",
      desc: "Professional coverage for parties, birthdays and corporate events."
    },
    "candid-photography": {
      name: "Candid Photography",
      price: "₹12,000",
      desc: "Natural candid moments captured beautifully."
    },
    "fashion-photography": {
      name: "Fashion Photography",
      price: "₹18,000",
      desc: "Professional fashion shoot with lighting setup."
    },
    "real-estate-product-photography": {
      name: "Real Estate & Product Photography",
      price: "₹8,000",
      desc: "High quality interior and property photography."
    }
  };

  const modal = document.getElementById("serviceModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const price = document.getElementById("modalPrice");
  const closeBtn = document.querySelector(".close-btn");
  const confirmBtn = document.getElementById("confirmBooking");

  let selectedService = "";

  // ==============================
  // BOOK BUTTON CLICK
  // ==============================
  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      const service = this.getAttribute("data-service");

      if (!servicesData[service]) {
        alert("Service not found in JS data!");
        return;
      }

      selectedService = service;

      title.innerText = servicesData[service].name;
      desc.innerText = servicesData[service].desc;
      price.innerText = "Price: " + servicesData[service].price;

      modal.style.display = "block";
    });
  });

  // ==============================
  // CLOSE MODAL
  // ==============================
  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // ==============================
  // CONFIRM BOOKING → EMAIL
  // ==============================
  confirmBtn.onclick = function () {

    const service = servicesData[selectedService];

    const subject = `Booking Inquiry | DHARMENDRA Studio | ${service.name}`;

    const body = `Hello DHARMENDRA Studio,

I am interested in booking the following service:

Service: ${service.name}
Price: ${service.price}

Service Details:
${service.desc}

Please confirm availability and next steps.

Thank you.`;

    const email = "dharmender.9329@gmail.com";

    const mailURL =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailURL;
  };

  // ==============================
  // BOOK SESSION BUTTON → SCROLL
  // ==============================
  const bookBtn = document.getElementById("bookSessionBtn");
  const servicesSection = document.getElementById("services");

  if(bookBtn && servicesSection){
    bookBtn.addEventListener("click", function(){

      servicesSection.scrollIntoView({
        behavior: "smooth"
      });

    });
  }

});
