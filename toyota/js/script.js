let isOpen = false;

function toggleNav() {
  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
  isOpen = !isOpen;
}

function openNav() {
  document.getElementById('mySidenav').style.width = '300px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

document.getElementById('menu-container').addEventListener('click', toggleNav);