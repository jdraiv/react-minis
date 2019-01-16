
function Ball(props) {
  // Props = ballNumber, currentNumber, clickEvent, choosenNumbers
  let ballClass = props.choosenNumbers.includes(String(props.ballNumber)) ? "ball-active" : "ball-inactive";
  
  return <button className={"ball-number " + ballClass} value={props.ballNumber} onClick={props.clickEvent}>{props.ballNumber}</button>
}


export default class BallsContainer extends React.Component {
  // Props = addBallEvent, choosenBalls, gameResult
  constructor(props) {
    super(props);
    
    this.state = {currentNum: 0}
  }
  
  changeNumber() {
    console.log(this.props.gameResult);
    // FINISH THIS
    if (this.state.currentNum != this.props.gameResult) {
      //console.log("different")
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.changeNumber(), 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbersList = numbers.map((num) => <Ball ballNumber={num} clickEvent={this.props.addBallEvent} choosenNumbers={this.props.choosenNumbers}/> )
    return (                                 
      <div className="balls-container">                           
        {numbersList}
      </div>                              
    )
  }
}
