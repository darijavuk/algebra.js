/**
 * 1. u HTML dodajte obrazac s jednim text input poljem i dugmetom za submit.
 * 2. Kada se obrazac pošalje (submit), vrijednost u text input treba biti ispisana na stranici ispod obrazca.
 */

(function () {
    class Task {
        constructor(name) { this.name = name; }
        toHtml() { return `<p>TASK: ${this.name}</p>`; }
    }

    const tasks = [];
    const form = document.querySelector("#form");
    const input = document.querySelector("#task");
    const output = document.querySelector("#output");
    const submit = document.querySelector("#submit");

    submit.setAttribute('disabled', 'disabled');

    input.addEventListener("input", function () {
        if (input.value.trim() !== '') {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'disabled');
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const task = new Task(input.value.trim());
        tasks.push(task);

        output.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            output.innerHTML += tasks[i].toHtml();
        }

        if (task.name !== '') {
            input.value = '';
            submit.setAttribute('disabled', 'disabled');
        }
    });
})();

/**
 * Napravite klasu taskList koja:
 * - se konstruira sa praznim nizom "tasks"
 * - koja ima metodu addTask() koja prima Task objekt kao parametar i sprema ga u niz "tasks"
 * - koja ima metodu render() koja prima HTML element kao parametar, briše njegov sadržaj, ispisuje sve taskove iz "tasks"
 * 
 * Konstruirajet klasu TaskList i spremite u konstantu "taskList"
 * 
 * Na submit obrasca dodajte kreirani task u TaskList pomoću metode addTask() i pozovite metodu render() da ispiše sve taskove
 */

// Define the Task class
    

(function () {
    class Task {
        constructor(name) {
            this.name = name;
        }

        toHtml() {
            return `<p>TASK: ${this.name}</p>`;
        }
    }

    class TaskList {
        constructor() {
            this.tasks = [];
        }

        addTask(task) {
            this.tasks.push(task);
        }

        render(element) {
            element.innerHTML = '';
            for (let i = 0; i < this.tasks.length; i++) {
                element.innerHTML += this.tasks[i].toHtml();
            }
        }
    }

    const taskList = new TaskList();

    const form = document.querySelector("#form");
    const input = document.querySelector("#task");
    const output = document.querySelector("#output");
    const submit = document.querySelector("#submit");

    submit.setAttribute('disabled', 'disabled');

    input.addEventListener("input", function () {
        if (input.value.trim() !== '') {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'disabled');
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const task = new Task(input.value.trim());
        taskList.addTask(task);
        taskList.render(output);

        if (task.name !== '') {
            input.value = '';
            submit.setAttribute('disabled', 'disabled');
        }
    });
})();