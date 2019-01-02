
export default class DecisionBtn extends React.Component {
    // Props, clickEvent, cDecision, decision
    constructor(props) {
      super(props);
      
      this.state = {btnClass: ""}
      this.setClass = this.setClass.bind(this);
    }
    
    setClass() {
      let newClass = "decision-active";
      
      if (this.props.decision.toLowerCase() != this.props.cDecision) {
        newClass = "decision-inactive";
      }
      
      if (newClass != this.state.btnClass) {
        this.setState({btnClass: newClass})
      }
   
    }
    
    componentWillMount() {
      this.setClass();
    }
    
    componentDidUpdate() {
      this.setClass();
    }
    
    render() {
      return (
        <button className={"decision-btn " + this.state.btnClass} onClick={this.props.clickEvent} id={this.props.decision} id={this.props.decision.toLowerCase()}>{this.props.decision}</button>
      )
    }
    
  }