
class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tokens: 500, betAmount: 20, choosenNumbers: [], winChance: 0, payout: 0, gameResult: 0}
    
    this.betChange = this.betChange.bind(this);
    this.saveBall = this.saveBall.bind(this);
    this.submitBet = this.submitBet.bind(this);
  }
  
  saveBall(event) {
    // Save into array
    if (!this.state.choosenNumbers.includes(event.target.value)) {     
      this.setState({
        choosenNumbers: [...this.state.choosenNumbers, event.target.value]
      }, () => {
        this.setWinChance();
      })
    }
    // Remove from array
    else {
      let newArray = [...this.state.choosenNumbers];
      let index = newArray.indexOf(event.target.value)
      newArray.splice(index, 1)
      
      this.setState({
        choosenNumbers: newArray
      }, () => {
        this.setWinChance();
      })
    }
  }
  
  betChange(event) {
    if (event.target.value == "" || Number.isInteger(Number(event.target.value))) {
      this.setState({
        betAmount: event.target.value
      })
    }
  }
  
  setWinChance() {
    let winChance = this.state.choosenNumbers.length;
    if (winChance != this.state.winChace) {
      this.setState({
        winChance: winChance * 10
      })
    }
  }
  
  setPayout() {
    let betTotal = parseInt(this.state.betAmount);
    let payout = betTotal + betTotal * ((100 - parseInt(this.state.winChance)) / 100);
    
    if (payout != this.state.payout) {
      this.setState({
        payout: payout
      })
    }
  }
  
  submitBet() {
    // Filters, filters, filters!
    let totalNumbers = this.state.choosenNumbers.length;
    
    
    let validAmount = parseInt(this.state.betAmount) <= parseInt(this.state.tokens) ? true : false;
    let validNumbers = totalNumbers != 0 && totalNumbers != 10 ? true : false;
    
    if (validAmount && validNumbers) {
      // Generate result number
      let result = Math.floor((Math.random() * 10) + 1); 
      this.setState({
        gameResult: result
      })
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    // If choosen balls are updated, the winChance and betAmount variable need be updated
    if (prevState.choosenNumbers.length != this.state.choosenNumbers.length || prevState.betAmount != this.state.betAmount) {
      this.setWinChance(this.state.choosenNumbers.length);
      this.setPayout();
    }
  }
  
  render() {
    return (
      <div id="game-container">
        <TokensShowcase tokens={this.state.tokens} />
        <BallsContainer addBallEvent={this.saveBall} choosenNumbers={this.state.choosenNumbers} gameResult={this.state.gameResult} />
        <BetController betAmount={this.state.betAmount} winChance={this.state.winChance} betChangeEvent={this.betChange} payout={this.state.payout}/>
        <SubmitBet submitBetEvent={this.submitBet}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('container')
)
