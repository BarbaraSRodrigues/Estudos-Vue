const handlingForms = {
    data() {
        return {
            tasks: [],
            newTask: { description: "" }
        };
    },
    methods: {
        addTask() {
            const description = this.newTask.description.trim();
            if (description) {
                this.tasks.push({ description, done: false });
                this.newTask.description = "";
                localStorage.setItem("tasks", JSON.stringify(this.tasks));
            } else {
                alert("O campo não pode estar vazio!");
            }
        },
        clearTasks() {
            this.tasks = [];
            // localStorage.setItem("tasks", JSON.stringify(this.tasks)); // Limpar também no localStorage
        },
        toggleTask(task) {
            task.done = !task.done;
            // localStorage.setItem("tasks", JSON.stringify(this.tasks)); // Atualizar no localStorage
        }
    },
    created() {
        // Garantir que a leitura do localStorage aconteça corretamente
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
    },
    updated(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks)); // Limpar também no localStorage
    }
};

Vue.createApp(handlingForms).mount('#app');
