export default class PredictionDice extends React.Component {
    // Props = predictionNum, inputChange
    constructor(props) {
      super(props);
      
      this.state = {diceValue: 0}
    }
    
    render() {
      return (
        <div className="dice">
          <input className="dice-input" id="prediction-input" value={this.props.predictionNum} onChange={this.props.inputChange}></input>
          <h5 className="dice-text">Prediction</h5>
        </div>
      )
    }
  }