const receiver = document.getElementsByClassName("menu")[0];
const navigation = document.getElementsByClassName("nav-links")[0];
let isMenuOpen = false;

receiver.addEventListener("click", () => {
  if (!isMenuOpen) {
    navigation.style.display = "block";
    isMenuOpen = true;
  } else {
    navigation.style.display = "none";
    isMenuOpen = false;
  }
})