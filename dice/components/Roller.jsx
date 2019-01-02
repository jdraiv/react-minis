
export default class Roller extends React.Component {
    // Props rollEvent, decision, predictionNum, betAmount, userTokens
    constructor(props) {
      super(props);
      
      this.state = {btnState: "active-btn"}
    }
    
    getBtnClass() {
      let newState = "active-btn"
      
      if (parseInt(this.props.betAmount) > parseInt(this.props.userTokens)) {
        newState = "inactive-btn";
      }
      return newState;
    }
    
    render() {
      let btnClass = this.getBtnClass()
      return (
        <div id="roller-container">
          <button className={btnClass} id="roll-btn" onClick={this.props.rollEvent}>Roll {this.props.decision} {this.props.predictionNum}</button>
        </div>
      )
    }
  }