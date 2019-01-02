
export default class DateInfo extends React.Component {
  // Props = [totalTasks]
  constructor(props) {
    super(props);
    this.state = {month: "", year: "", date: ""}
  }
  
  setDate() {
    let date = new Date();
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    
    this.setState({
      year: date.getFullYear(), 
      month: months[date.getMonth()],
      date: date.getDate()
    })
  }
  
  componentWillMount() {
    this.setDate();
  }
  
  render() {
    return [
      <div className="date-container">
        <h4 id="date">{this.state.date}</h4>
        <div className="sub-date-container">
          <h4>{this.state.month}</h4>
          <h4>{this.state.year}</h4>
        </div>
      </div>,
      <div className="tasks-info-container">
        <h4>{this.props.totalTasks} Task</h4>
      </div>
    ]
  }
}
