(function () {
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".card");
  var groups = document.querySelectorAll(".group");

  function applyFilter(filter) {
    chips.forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-filter") === filter);
    });

    cards.forEach(function (card) {
      var cat = card.getAttribute("data-cat") || "";
      var show =
        filter === "all" ||
        (filter === "core" && cat === "core") ||
        (filter === "onboarding" && cat === "onboarding") ||
        (filter === "desktop" && cat === "desktop");
      card.classList.toggle("hidden", !show);
    });

    groups.forEach(function (section) {
      var any = section.querySelector(".card:not(.hidden)");
      section.classList.toggle("hidden", !any);
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      applyFilter(chip.getAttribute("data-filter") || "all");
    });
  });
})();
