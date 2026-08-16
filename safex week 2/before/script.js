document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach(function (card, index) {
    card.addEventListener("click", function () {
      alert("Service " + (index + 1) + " clicked");
    });
  });

  const stats = document.querySelectorAll(".stat-box");
  stats.forEach(function (stat) {
    stat.addEventListener("mouseenter", function () {
      stat.style.transform = "scale(1.03)";
    });
    stat.addEventListener("mouseleave", function () {
      stat.style.transform = "scale(1)";
    });
  });
});
