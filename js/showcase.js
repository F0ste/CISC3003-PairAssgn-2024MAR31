const buttons = document.querySelectorAll('.nav-button');


buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('animated');
  });

  button.addEventListener('mouseout', () => {
    button.classList.remove('animated');
  });
});