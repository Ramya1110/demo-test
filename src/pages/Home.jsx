import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Home = () => {
const [users,setUsers]=useState([])
const [editingIndex, setEditingIndex] = useState(null);
const [editForm, setEditForm] = useState({});
  

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      try {
        const parsed=JSON.parse(storedData)
        if (Array.isArray(parsed)) {
          setUsers(parsed)
        }
        else {
          console.log('invalid form data')
        }
      }
      catch (error) {
        console.log('error',error)
      }
    }
  },[])



  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm({ ...users[index] });
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditForm({});
  };

const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: name === "skills" ? value.split(",") : value,
    }));
  };

  const handleSave = () => {
    const updatedUsers = users.map((user, index) =>
      index === editingIndex ? editForm : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('formData', JSON.stringify(updatedUsers));
    setEditingIndex(null);
    setEditForm({});
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, index) => index !== index);
    setUsers(updatedUsers);
    localStorage.setItem('formData', JSON.stringify(updatedUsers));
   
    if (editingIndex === index) {
      setEditingIndex(null);
      setEditForm({});
    }
  };


  return (
    <div>
      <div className="heading">
         <h1>User Data</h1>
        <button ><Link to='/Form'>Back to home</Link></button>
     </div>

      {users.length === 0 ? 
        <p>No registered users found.</p>
      : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>D.O.B</th>
              <th>Country</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        name="firstName"
                        value={editForm.firstName}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="lastName"
                        value={editForm.lastName}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={editForm.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="password"
                        value={editForm.password}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="dob"
                        value={editForm.dob}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="country"
                        value={editForm.country}
                        onChange={handleChange}
                      />
                    </td>

                     <td>
                      <input
                        name="skills"
                        value={editForm.skills.join(",")}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleSave} className="edit-btn">Save</button>
                      <button onClick={handleCancel} className="dlt-btn">Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.dob}</td>
                    <td>{user.country}</td>
                    <td>{user.skills.join(",")}</td>
                    <td>
                        <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(index)} className="dlt-btn">Delete</button>
                    </td>
                    </>
                     )}
              </tr>
            ))}
          </tbody>
        </table>
        )}
    
    </div>
  );

}

export default Home
