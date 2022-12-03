import axios from 'axios';


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


const todo = {
  id:1,
  title:'2',
  completed:true
} as Todo;

const logTodo = (id: number, title: string, completed: boolean) =>{
  console.log(id, title, completed)
}

logTodo(todo.id, todo.title, todo.completed)