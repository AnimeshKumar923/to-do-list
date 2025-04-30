export default function(){
  const modal = document.querySelector('.modal');
  const infoBtn = document.querySelector('.card-button');
  const close = document.querySelector('.close-task-modal');
  const newTaskBtn = document.querySelector('.new-task');
  const infoModal = document.querySelector('.read-only-modal');
  const closeReadOnly = document.querySelector('.close-read-only')
  // When the user clicks on the button, open the modal
  infoBtn.addEventListener('click',  () => {
    // show a read-only view of the added information
    infoModal.showModal();
  })
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  close.addEventListener('click', () => {
    modal.close();
  })
  
  closeReadOnly.addEventListener('click', () => {
    infoModal.close();
  });

  newTaskBtn.addEventListener('click', () => {
    modal.showModal();
  })
};