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
    document.querySelector('.modal').close();
    console.log(tasksList);
    updateDisplay();
  })

  function updateDisplay(){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(tasks);
    // hardcoded; make it dynamic
    const title = tasks[0].title;;
    const cardHTML = `
    <div class="card">
      <div class="card-details">
        <p class="text-title">${title}</p>
      </div>
      <button class="card-button">More info</button>
    </div>
  `;
  
  document.querySelector('.projects-div').insertAdjacentHTML('beforeend', cardHTML);
  }
}