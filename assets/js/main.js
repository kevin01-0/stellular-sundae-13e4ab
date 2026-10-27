document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuButton.textContent = open ? "×" : "☰";
    });
  }

  const dateInput = document.querySelector("#event-date");
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
    dateInput.min = localDate;
  }

  // If a visitor follows a service link from services.html, preselect it in the form.
  const serviceInput = document.querySelector("#service");
  if (serviceInput) {
    const serviceFromUrl = new URLSearchParams(window.location.search).get("service");
    if (serviceFromUrl) {
      const matchingOption = Array.from(serviceInput.options).find(option =>
        option.value === serviceFromUrl || option.text === serviceFromUrl
      );
      if (matchingOption) serviceInput.value = matchingOption.value || matchingOption.text;
    }
  }

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;

      const data = new FormData(bookingForm);
      const value = (key) => String(data.get(key) || "").trim();
      const lines = [
        "Hello Luxe Beauty Studio! 👋",
        "",
        "I would like to enquire about a beauty appointment.",
        "",
        "👤 Name: " + value("name"),
        "📱 Contact number: " + value("phone"),
        "💄 Service: " + value("service"),
        "📅 Event date: " + value("date"),
        "⏰ Preferred time: " + value("time"),
        "📍 Event location: " + value("location"),
        "👥 Number of people: " + value("people"),
        "💰 Approximate budget: " + value("budget"),
        "📞 Preferred reply: " + value("reply"),
        "",
        "📝 Additional details: " + (value("notes") || "None"),
        "",
        "Could you please share your available dates, service packages, pricing, inclusions, advance booking details, travel charges (if applicable), and payment options?",
        "",
        "Thank you!"
      ];
      const message = encodeURIComponent(lines.join("\n"));
      const whatsappNumber = "919487229487"; // Demo destination: replace with the salon owner's number before launch.
      const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + message;

      const status = document.querySelector("#form-status");
      status.textContent = "Opening WhatsApp with your booking details. Review the message and tap Send in WhatsApp to deliver it.";
      const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = whatsappUrl;
    });
  }
});