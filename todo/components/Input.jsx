
export default class Input extends React.Component {
    // Props = [changeEvent]
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="input-container">
          <input id="input" type="text" placeholder="Task" value={this.props.value} onChange={this.props.changeEvent}/>
        </div>
      )
    }
  }