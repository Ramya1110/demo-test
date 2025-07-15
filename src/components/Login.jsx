// import { useState } from "react";

// const LogIn = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pwd, setPwd] = useState('');
//   function FormHandle(e) {
//     e.preventDefault();
//     if (!name || !email || !pwd) {
//       alert('fill all fields');
//       return;
//     }
//     alert("Form submitted successfully!");
//     setName('');
//     setEmail('');
//     setPwd('');
//   }
//   return (
//     <div>
//     <form onSubmit={FormHandle}>
//         <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /><br />      
//         <input type="email" placeholder="enter email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}  /><br />
//       <input type="password" placeholder="enter password" id='pwd' value={pwd} onChange={(e)=>setPwd(e.target.value)} /><br />
//       <button type="submit">SUBMIT</button>
//    </form>
//   </div>
// )

// }
// export default LogIn;
import { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState(() => {
    const Saved = localStorage.getItem('tasks');
    return Saved ? JSON.parse(Saved) : [];
  })
  useEffect(() => {
  localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks])
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePwd = (e) => {
    setPwd(e.target.value)
  }
  const FormHandle = (e) => {
    e.preventDefault();
    if (!name || !email || !pwd) {
      alert('all fields must be filled');     
    }
    else if (pwd.length < 8) {
      setError('password must contain more than 8 charecters')
    }
    else {
      const newTask = { name, email, pwd };
      setTasks([...tasks, newTask]);
      setName('');
      setEmail('');
      setPwd('');
      setError('');
      alert('Login successfully')
    }
  }
  return (
    <div>
      <form onSubmit={FormHandle}>
        <input type="text" placeholder="enter your name" value={name} onChange={handleName} />
        <input type="email" placeholder="enter email" value={email} onChange={handleEmail} />
        <input type="password" placeholder="enter password" value={pwd} onChange={handlePwd} />
        <button type="submit" className="login">Login</button>
        {/* <Link to='./Home'><button type="submit" className="login">Login</button> </Link> */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}
export default Login