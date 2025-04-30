export default function(){
  let projectList = JSON.parse(localStorage.getItem("projects")) || [];  
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

    projectList.push(newTask); 
    localStorage.setItem("projects", JSON.stringify(projectList));
    form.reset();
    document.querySelector('.modal').close();
    console.log(projectList);
    updateDisplay();
  })

  function updateDisplay(){
    const project = JSON.parse(localStorage.getItem("projects"));
    // console.log(project);
    // hardcoded; make it dynamic
    const title = project[0].title;;
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
  // document.querySelector('.card-button').addEventListener('click', () => {
    
  // });
}