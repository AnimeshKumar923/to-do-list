// query selectors
export default function(){
  let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];  
  function createTask(){
    const title = '';
    const dueDate = '';
    const description = '';
    const priority = '';

    return { 
      title, dueDate, description, priority
    };
  }

  const form = document.querySelector('.task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTask = createTask();

    // form data collection
    const formData = new FormData(form);
    newTask.title = formData.get('title');
    newTask.dueDate = formData.get('due-date');
    newTask.description = formData.get('description');
    newTask.priority = formData.get('priority');

    tasksList.push(newTask); 
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    form.reset();
    console.log(tasksList);
    
  })
}