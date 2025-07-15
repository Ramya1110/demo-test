

const ToDo = ({ taskInput, setTaskInput, addTask, tasks, Delete,Edit,editIndex}) => {
 
  return (
    <div>
      <h2>Todo List</h2>
      <div className="box">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
        <button className="add" onClick={addTask}>{editIndex !== null ? "Update" : "Add"}
     
      </button>
     </div>
      

  <ul style={{listStyleType:'none', padding:'0'}}>
  {tasks?.map((item, index) => (
    <li className="list"
      key={index}>{item.taskInput}
      <button className="delete" onClick={() => Delete(index)}>Delete</button>
      <button className="edit" onClick={() => Edit(index)}>Edit</button>
    </li>
  ))}
      </ul>
     
    </div>
    
  );
  
};

export default ToDo;

