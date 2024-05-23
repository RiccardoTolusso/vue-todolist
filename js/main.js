const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            toDoList: [
                {
                    text: "titolo 1",
                    done: false,
                },
                {
                    text: "titolo 2",
                    done: false,
                },
                {
                    text: "titolo 3",
                    done: true,
                },
                {
                    text: "titolo 4",
                    done: false,
                },
                {
                    text: "titolo 5",
                    done: false,
                },
                {
                    text: "titolo 6",
                    done: true,
                },
                {
                    text: "titolo 7",
                    done: false,
                },
                {
                    text: "titolo 8",
                    done: false,
                }
            ],
        }
    },
    methods:{
        deleteToDo(id){
            console.log(this.toDoList[id])
            this.toDoList.splice(id, 1)
        }
    }
}).mount("#app")
