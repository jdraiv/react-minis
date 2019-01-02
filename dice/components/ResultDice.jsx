
export default class ResultDice extends React.Component {
    // Props = result, gameLose
    constructor(props) {
      super(props);
      
      this.state = {diceValue: 0}
    }
    
    updateDice() {
      if (this.props.result != this.state.diceValue) {
        let newValue = this.state.diceValue;
        
        if (newValue === 99) {
          newValue = 0
        } else {
          newValue += 1
        }
        this.setState({diceValue: newValue})
      }
    }
    
    getColor() {    
      if (this.props.result == this.state.diceValue) {
        if (this.props.gameLose == true) {
          return '#ab2e40'
        } else if (this.props.gameLose === false) {
          return '#009f4d';
        } else {
          return 'white';
        }
      }
    }
    
    componentWillMount() {
      this.setState({diceValue: this.props.result});
      this.interval = setInterval(() => this.updateDice(), 20)
    }
    
    render() {
      let style = {
        color: this.getColor()
      }
      return (
        <div className="dice">
          <input style={style} className="dice-input" id="result-input" value={this.state.diceValue}></input>
          <h5 className="dice-text">Result</h5>
        </div>
      )
    }
  }
  