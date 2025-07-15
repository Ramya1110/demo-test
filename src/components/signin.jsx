import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password:'',
  });
  const [error,setError]=useState('')

  const handleInput=(e) => {
    const { name, value} = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   const storedUsers = JSON.parse(localStorage.getItem("formData"));

const matchedUser = storedUsers?.find(
  (user) =>
    user.email === formData.email &&
    user.password === formData.password
);
if (matchedUser) {
  navigate("/Home");
} else {
  setError("Invalid email or password");
}
  };

  return (
    <div><h1>Login Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-fields">
          <input type="email" name='email' placeholder="enter email"  onChange={handleInput} />
      <input type="password" name='password' placeholder="enter password "  onChange={handleInput} />
          <button type="submit">SIGN IN</button>
          <div className='sign'>
            <p>Don't have an account..?</p>
            <p><Link to="/form">Sign Up</Link></p>
          </div>
      </div>
         {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      </div>
  )
}
export default SignIn;