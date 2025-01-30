export default function(){
  const modal = document.querySelector('.modal');
  // const infoBtn = document.querySelector('.card-button');
  const close = document.querySelector('.close-modal');
  const newTaskBtn = document.querySelector('.new-task');

  // When the user clicks on the button, open the modal
  // infoBtn.addEventListener('click',  () => {
    // show a read-only view of the added information
    // modal.showModal();
  // })
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  close.addEventListener('click', () => {
    modal.close();
  })
  
  newTaskBtn.addEventListener('click', () => {
    modal.showModal();
    
  })
};