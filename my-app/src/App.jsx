// import React from 'react';

// function App() {
//     const [count, setCount] = React.useState(0); // [state, setState


//   return (
//     <div>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }

// function Button(props){
//     function onButtonClick(){
//         props.setCount(props.count + 1);
//     }
//     return <button onClick={onButtonClick}>Counter {props.count}</button>
// }

// export default App;




// jsx is a file in which u can write both js and xml code


import {useState} from 'react';

// let state = {
//     count: 0 
// }


// todo application

// {
//     todos: {{ title: "todo1", description: "first todos", completed:false, }}
// }


function App() {
    const [todos, setTodos] = useState([{
        title:"Go to gym",
        description: "Go to gym at 6:00 AM",
        completed: false
    },
    {
        title:"Go to market",
        description: "Go to market at 6:00 AM",
        completed: false
    },
    {
        title:"Go to school",
        description: "Go to school at 6:00 AM",
        completed: false
    },
    ]);
 // [state, setState]
 
    function addTodo(){
        setTodos([...todos, {
            title: "new Todo",
            description: "desc of new todo",
            completed: false
        }]);

     return(
            <div>
            <button onClick={addTodo}>Add a Random todo</button>
             {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed}></Todo>
                <Todo title={todos[1].title} description={todos[1].description} completed={todos[1].completed}></Todo> */}
                {todos.map(function(todo) {
                    return <Todo title={todo.title} description={todo.description} completed={todo.completed}></Todo>
                })}


            </div>
     );
   
    }
       
        
}   

function Todo(props){
    

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.completed}</p>
        </div>
    );
}

    export default App;




      





