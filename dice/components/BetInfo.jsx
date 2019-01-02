
export default class BetInfo extends React.Component {
    // Props = inputChange, betAmount, winChance, payout
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div id="bet-info-container">
          <label>Bet Amount</label>
          <input className="info-input" id="bet-input" value={this.props.betAmount} onChange={this.props.inputChange}></input>
          <label>Payout</label>
          <input className="info-input" id="win-input" value={this.props.payout} disabled></input>
          <label>Win Chance</label>
          <input className="info-input" id="payout-input" value={this.props.winChance} disabled></input>
        </div>
      )
    }
  }