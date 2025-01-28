export default function(){
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.card-button');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click',  () => {
    modal.showModal();
  })

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};