
export default class TaskItem extends React.Component {
    // Props = [taskName, deleteEvent]
    constructor(props) {
      super(props);
      
      this.state = {itemState: "item-active"}
      
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler() {
      let newState = "item-active";
      
      if (this.state.itemState == "item-active") {
        newState = "item-inactive";
      }
      
      this.setState({itemState: newState})
    }
    
    render() {
      return (
        <div className="task-item">
          <h6 className={"task-name " + this.state.itemState} onClick={this.clickHandler}>{this.props.taskName}</h6>
          <button id="delete-btn" onClick={() => {this.props.deleteEvent(this.props.taskName)}}>X</button>
        </div>
      )
    }
  }