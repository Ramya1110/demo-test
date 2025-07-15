import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const allSkills = ['HTML', 'CSS', 'JAVA', 'REACT']
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('')
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    country:"",
    skills:[],
  });
  const navigate = useNavigate();
  //Total count
  useEffect(() => {
    const stored = localStorage.getItem("formData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCount(parsed.length);
        }
      } catch (error) {
        console.log("Error :", error);
      }
    }
  }, []);
  //Functions
  const handleInput=(e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({ ...prev,[name]:value }));
  }
  const handleSkill= (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedSkills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value);
      return { ...prev, skills:updatedSkills };
    });
    setErrors((prev) => ({ ...prev, skills: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'enter a valid email'
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    else if (!passwordRegex.test(formData.password.trim())) {
      errors.password = `password should contain a special charecter, upper case, Lower className
      NUmbers`
    } else if(formData.password.length<8) {
      errors.password='password must contains 8 charecters'
    }
  
    if (!formData.dob.trim()) {
      errors.dob = 'Date of birth is required';
    }
    if (!formData.country.trim()) {
      errors.country = 'Country is required';
    }
    if (formData.skills.length === 0) {
      errors.skills = 'Select at least one skill';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
//Form submission function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log(formData)
      return;
    }
    else {
      alert('form submitted successfully');
      let users = [];
      const storedData = localStorage.getItem('formData');
       navigate("/SignIn");
      try {
        if (storedData) {
          const parsed = JSON.parse(storedData);
          if (Array.isArray(parsed)) {
            setCount(parsed.length);
            users=parsed
          }
          else {
            console.log('storedData is not an array')
            localStorage.removeItem('formData')
          }
        }
      }
      catch (error) {
        console.log('error',error)
        localStorage.removeItem('formData')
      }
      const newUsers=[...users, formData]
      localStorage.setItem("formData", JSON.stringify(newUsers));
      setCount(newUsers.length);
      setMsg('User Registered successfully..!')
      setTimeout(() => {
       setMsg('') 
      }, 3000);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        dob: '', 
        country:'',
        skills:[],
      })
   }
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
        <label>First Name:</label>
          <input type="text" name='firstName' value={formData.firstName} onChange={handleInput} />
          <p style={{ color: 'red' }}>{errors.firstName}</p>
        </div>
        <div className="input-fields">
        <label >Last Name:</label>
          <input type="text" name='lastName' value={formData.lastName} onChange={handleInput} />
          <p style={{ color: 'red' }}>{errors.lastName}</p>
       </div>
        <div className="input-fields">
        <label >Email:</label>
          <input type="email" name='email' value={formData.email} onChange={handleInput} />
          <p style={{ color: 'red' }}>{errors.email}</p>
       </div>
        <div className="input-fields">
        <label >Password:</label>
          <input type="password" name='password' value={formData.password} onChange={handleInput} />
          <p style={{ color: 'red' }}>{errors.password}</p>
        </div>
        <div className="input-fields">
        <label >D.O.B:</label>
          <input type="date" name='dob' value={formData.dob} onChange={handleInput} />
          <p style={{ color: 'red' }}>{errors.dob}</p>
        </div>
        <div className="input-fields">
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInput}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            </select>
            <p style={{ color: 'red' }}>{errors.country}</p>
          </div>
          <div className="skills">
            <label >SKILLS:</label>
            {allSkills.map((skill) => (
              <label key={skill}>
                <input type="checkbox"
                name='checkbox'
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkill}
                />
                {skill}
                </label>
            ))}
          <p style={{ color: 'red' }}>{errors.skills}</p>
          </div>
       </div>
        
        <div>
          <button type="submit">Register</button>
          <h3 style={{ color: "green" }}>Total users count: {count}</h3>
          <p style={{ color: "green" }}>{msg}</p>
        </div>
      </form>
    </div>
  )
}
export default Form;
  