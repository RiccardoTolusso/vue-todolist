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
        },
        addToDo(event){
            console.log("ciao")
            inputValue = event.target.children[0].value;
            if(inputValue.length < 5){
                alert("Inserisci una parola di almeno 5 lettere");
            }
            else if(inputValue.length > 80){
                alert("Inserisci al massimo 80 caratteri");
            }
            else {
                this.toDoList.push({
                    text: inputValue,
                    done: false
                })
                event.target.children[0].value = ""
            }
        },
        invertDone(id){
            this.toDoList[id].done = !this.toDoList[id].done;
        }
    }
}).mount("#app")
