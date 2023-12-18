    // Arreglo inicial de tareas
    const tasksArray = [
        { id: 1, title: 'Así verás tus tareas', completed: false },
        { id: 2, title: 'Haz clic en el botón verde si la tarea la haz completado', completed: false },
        { id: 3, title: 'Si haces clic en el botón rojo podrás eliminarlo', completed: false },
    ];

    // Función para renderizar las tareas en la página
    function renderTasks() {
        const tasksList = document.getElementById('tasks');
        tasksList.innerHTML = '';
        let completedCount = 0;

        tasksArray.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task';
            if (task.completed) {
                li.classList.add('completed');
                completedCount++;
            }

            li.innerHTML = `
                <span>${task.id} - ${task.title}</span>
                <button class="delete" onclick="deleteTask(${task.id})">X</button>
                <button class="done" onclick="completeTask(${task.id})">✓</button>
            `;

            tasksList.appendChild(li);
        });


        // Actualizar contadores
        document.getElementById('totalTasks').textContent = tasksArray.length;
        document.getElementById('completedTasks').textContent = completedCount;
    }

    // Función para agregar una nueva tarea
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const newTask = {
            id: tasksArray.length + 1,
            title: taskInput.value,
            completed: false
        };

        tasksArray.push(newTask);
        taskInput.value = ''; // Limpiar el input
        renderTasks();
    }

    // Función para eliminar una tarea
    function deleteTask(taskId) {
        const taskIndex = tasksArray.findIndex(task => task.id === taskId);
        tasksArray.splice(taskIndex, 1);
        renderTasks();
    }

    // Función para marcar/desmarcar una tarea como completada
    function completeTask(taskId) {
        const taskIndex = tasksArray.findIndex(task => task.id === taskId);
        tasksArray[taskIndex].completed = !tasksArray[taskIndex].completed;
        renderTasks();
    }

    // Renderizar las tareas iniciales
    renderTasks();