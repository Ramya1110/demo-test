//TO-DO List
/*import { useState, useEffect } from "react";
import ToDo from './todo'

 const App = () => { 
  const [taskInput, setTaskInput] = useState("");       
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
},[tasks])

  const addTask = () => {
    if (taskInput.trim() === "") {
      alert('fill the field')
      return;
    }
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] ={taskInput};
      setTasks(updatedTasks);
      setTaskInput("");
      setEditIndex(null);
      return;
    } 
    setTasks(tasks.concat({taskInput}))
    setTaskInput("");
  };

  const Delete=(indexDlt) => {
    const updated = tasks.filter((task, index) => {
      console.log(task)
      return index !== indexDlt;
    })
    console.log(updated)
  setTasks(updated)
  }

  const Edit = (index) => {
    setTaskInput(tasks[index].taskInput);
    setEditIndex(index);
  };
  return (
    <div>
      <ToDo
         taskInput={taskInput}
         setTaskInput={setTaskInput}
         addTask={addTask}
         tasks={tasks}
        Delete={Delete}
        Edit={Edit}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />         
    </div>
  )
}
export default App;*/

//Example COUNTER
/*const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  },[count]);

  const Increment = () => {
    setCount(count => count + 1);
  }
  const Decrement = () => {
    setCount(count => count - 1);
  }
  const Reset = () => {
    setCount(0)
  }
  return (
    <div>
     
      <Counter count={count} Increment={Increment} Decrement={Decrement} Reset={ Reset} />
      
    </div>
    ) 
   }
export default App;*/


//Profile card - By sending props
/*const App = () => {
  const Users = [
    {
      id: 1 ,
      name: 'Sriramya',
      bio:'Frontend Developer from India. Loves painting and video games.',
      image:'https://tse1.mm.bing.net/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?pid=Api&P=0&h=180',
    },
    {
      id: 2 ,
      name: 'Priyanka',
      bio:'Full Stack Developer, passionate about open-source.',
      image:'https://tse1.mm.bing.net/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?pid=Api&P=0&h=180', 
    },
    {
      id: 3 ,
      name: 'Devi',
      bio:'Full Stack Developer, passionate about open-source.',
      image:'https://tse1.mm.bing.net/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?pid=Api&P=0&h=180', 
    }]
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px',
    };
  return (
    <div >
      <h1 style={{textAlign:'center'}}>Users</h1>
      <div style={containerStyle}>
        {Users.map(user => (
          <ProfileCard
            key={user.id}
            name={user.name}
            bio={user.bio}
            image={user.image}
          />)
        )}
      </div>
    </div>
  )
}
export default App;*/



import SignIn from "./components/signin";
import Home from "./pages/Home";
import Form from './components/form';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
//Registration / SignUp Form
const App = () => {
  return (
    <div>
     
      <BrowserRouter>
       <Routes>
        <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
