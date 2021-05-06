const app = new Vue({

  el: '#app',
  data:{
    alertMess : false,
    strTodo : "",
    todos : [

      {
        todo: "Ripassare HTML/CSS",
        checked : false
      },

      {
        todo :"Studiare Vue",
        checked : false
      },

      {
        todo :"Amare Vue",
        checked: true
      }

    ]
  },

  methods:{
    removeTodo(index){
      this.todos.splice(index,1)
    },

    addTodo(){
      if(this.strTodo.length < 3){
        this.alertMess = true;
        setTimeout(()=>{
          this.alertMess = false;
        },2000);
          
      }else{
        this.todos.push(
          {
            todo : this.strTodo,
          checked : false
        });
        this.strTodo = "";
      }
    }

  }


});