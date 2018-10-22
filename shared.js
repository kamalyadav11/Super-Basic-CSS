var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlasButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlasButtons.length; i++) {
  selectPlasButtons[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className = "open"
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) modal.classList.remove("open");

  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
