// Tuotteiden lataaminen ja näyttäminen
fetch('tuotteet.json')
  .then(response => response.json())
  .then(data => {
    const productGrid = document.querySelector('.product-grid');

    data.forEach(product => {
