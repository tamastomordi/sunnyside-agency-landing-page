let toggler = document.querySelector('#toggle-nav');
let mobileNav = document.querySelector('#mobile-nav');

toggler.addEventListener('click', () => {
   mobileNav.classList.contains("collapsed") ?
      mobileNav.classList.remove("collapsed") :
      mobileNav.classList.add("collapsed");
});