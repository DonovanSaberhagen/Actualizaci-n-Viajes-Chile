$(document).ready(function () {

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


  $("#enviarcorreo").click(function () {
    console.log("HiceClick");
    alert("Mensaje fue Enviado");
  });
});


