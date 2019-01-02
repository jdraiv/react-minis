
class DiceGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {decision: "under", predictionNum: 50, betAmount: 20, winChance: 50, payout: 0, gameResult: 50, userTokens: 200, gameWin: ""}
      
      this.rollDice = this.rollDice.bind(this);
      this.decisionController = this.decisionController.bind(this);
      this.predictionChange = this.predictionChange.bind(this);
      this.betChange = this.betChange.bind(this);
    }
    
    rollDice() {
      let result = Math.floor(Math.random() * 99) + 0
      let lose = true;
      let tokenBag = this.state.userTokens;
      
      if (this.state.decision == "under") {
        if (result < this.state.predictionNum) {
          lose = false;
        }
      } 
      else if (this.state.decision == "over") {
        if (result > this.state.predictionNum) {
          lose = false;
        }
      }
      
      if (lose) {
        tokenBag -= this.state.betAmount
      } else {
        tokenBag += this.state.payout;
      }
      this.setState({gameResult: result, userTokens: tokenBag, gameWin: lose})
      // Store token on cookies
      document.cookie = `jdrdice=${lose}`
    }
    
    predictionChange(event) {
      
      // The number 0 and 99 are not available
      if (event.target.value != "0") {
        if (event.target.value.length <= 2) {
          let lastElem = event.target.value.slice(-1)
          if (lastElem == "") {
            this.setState({predictionNum: event.target.value})
          }
          else if (Number.isInteger(parseInt(lastElem))) {
            let num = event.target.value;
            if (num == 99) {
              num = 98  
            }
            this.setState({predictionNum: num})
          }
        }
      }
    }
    
    // Controls the roll under or over decision of the user.
    decisionController(event) {
      this.setState({decision: event.target.id})
    }
    
    betChange(event) {
      let lastElem = event.target.value.slice(-1)
      
      if (lastElem == "" || Number.isInteger(parseInt(lastElem))) {
        this.setState({betAmount: event.target.value})
      }
    }
    
    setWinChance() {
      // We check if the state variable is the same. If it is, we don't setState to avoid generating an infinite loop.    
      let result;
      
      if (this.state.predictionNum != "") {
        if (this.state.decision == "under") {
          result = (this.state.predictionNum / 100) * 100
        } else if (this.state.decision == "over") {
          let outcomes = 99 - this.state.predictionNum;
          result = (outcomes / 99) * 99
        }
      }
      else {
        result = 0;
      }
      
      // We check if the result variable matches the current state variable. If they are the same, we don't update the state variable since it causes an infinite loop.
      if (this.state.winChance != result) {
        this.setState({winChance: result})
      }
    }
    
    setPayout() {
      let payout = this.state.betAmount * (100 - this.state.winChance) / 10
      
      if (payout != this.state.payout) {
        this.setState({payout: payout})
      }
    } 
    
    componentWillMount() {
      this.setWinChance();
      this.setPayout();
    }
    
    componentDidUpdate() {
      this.setWinChance()
      this.setPayout()
    }
    
   
    render() {
      return [
        <TokensController tokens={this.state.userTokens}/>,
        <div id="dices-container">
          <PredictionDice predictionNum={this.state.predictionNum} inputChange={this.predictionChange}/>
          <ResultDice result={this.state.gameResult} gameLose={this.state.gameWin}/>
        </div>,
        <div id="decision-btns-container">
          <DecisionBtn clickEvent={this.decisionController} decision="Under" cDecision={this.state.decision} />
          <DecisionBtn clickEvent={this.decisionController} decision="Over" cDecision={this.state.decision} />
        </div>,
        <BetInfo inputChange={this.betChange} betAmount={this.state.betAmount} winChance={this.state.winChance} payout={this.state.payout}/>,
        <Roller rollEvent={this.rollDice} decision={this.state.decision} predictionNum={this.state.predictionNum} betAmount={this.state.betAmount} userTokens={this.state.userTokens}/>
      ]
    }
  }
  
  ReactDOM.render(
    <DiceGame />,
    document.getElementById('container')
  ) 