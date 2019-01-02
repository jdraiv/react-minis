

export default class TableElement extends React.Component {
    // Props = date, price, oldPrice
    constructor(props) {
      super(props);
      
      this.state = {percentageChange: 0, percentageStatus: ""}
      this.getPercentage = this.getPercentage.bind(this);
    }
    
    getPercentage() {
      function roundNumber(num) {
        return Math.round(num * 100 ) / 100
      }
      // Adding this if statement to avoid the infinity percentageChange
      if (this.props.oldPrice != 0) {
        if (this.props.price >= this.props.oldPrice) {
          let increase = this.props.price - this.props.oldPrice;
  
          this.setState({percentageChange: roundNumber(increase / this.props.oldPrice * 100), percentageStatus: 'increase'})
        } else if (this.props.price < this.props.oldPrice) {
          let decrease = this.props.oldPrice - this.props.price;
          
          this.setState({percentageChange: roundNumber(decrease / this.props.oldPrice * 100), percentageStatus: "decrease"})
        }
      }
    }
    
    componentWillMount() {
      this.getPercentage();
    }
    
    render() {
      return (
        <tr>
          <td>{this.props.date}</td>
          <td>{this.props.price}</td>
          <td className={this.state.percentageStatus}>{this.state.percentageChange}</td>
        </tr>
      )
    }
  }