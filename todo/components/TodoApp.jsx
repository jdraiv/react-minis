

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {tasks: [], cTask: "", btnState: "btn-inactive"}
      
      this.inputChange = this.inputChange.bind(this);
      this.submitTask = this.submitTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
    }
    
    inputChange(event) {
      let btnState = "btn-inactive";
          
      if (event.target.value.length > 0) {
        btnState = "btn-active"
      }
      this.setState({cTask: event.target.value, btnState: btnState})
    }
    
    submitTask() {
      if (this.state.cTask.length > 0) {
        this.setState({tasks: [...this.state.tasks, this.state.cTask], cTask: "", btnState: "btn-inactive"})
      }
    }
    
    deleteTask(task) {
      let newArray = this.state.tasks;
      newArray.splice(newArray.indexOf(task), 1)
      
      this.setState({tasks: newArray});
    }
      
    render() {
      let tasks = this.state.tasks.map((task) => 
        <TaskItem taskName={task} deleteEvent={this.deleteTask}/>
      )
                                       
      return (
        <div id="todo-container">
          <div className="header-container">
            <DateInfo totalTasks={this.state.tasks.length}/>
          </div>
          <Input changeEvent={this.inputChange} value={this.state.cTask}/>
          
          <div id="tasks-container">
            {tasks}
          </div>
          <div className="btn-container">
            <button className={this.state.btnState} id="submit-btn" onClick={this.submitTask}>Add</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('container')
  )
  
  /* Ruego al tiempo aquel momento! */