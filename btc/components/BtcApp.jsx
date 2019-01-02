
class BtcPrice extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {pricesData: []}
      
      this.getData = this.getData.bind(this);
    }
    
    getData() {
      let url = "https://api.coindesk.com/v1/bpi/historical/close.json";
      
      fetch(url)
        .then((response) => {
          return response.json();
        }).then((data) => {
          // We create a new array since we are going to store the old date on the state variable
          let newArray = [];
          let oldPrice = 0;
        
          for (let [key, value] of Object.entries(data['bpi'])) {
            let newDic = {'date': key, 'price': value, 'oldPrice': oldPrice}
            newArray.push(newDic)
            oldPrice = value;
          }      
          this.setState({pricesData: newArray});
        })
    }
    
    componentWillMount() {
      this.getData();
    }
    
    render() {
      let tableItems = this.state.pricesData.map((item) =>
        <TableElement date={item['date']} price={item['price']} oldPrice={item['oldPrice']} />
      )
      
      return (
        <div>
          <h1 id="header">Bitcoin Price (Last 30 Days)</h1>                                         
          <table id="main-table">
            <tr>
              <th className="title">Date</th>
              <th className="title">Price (USD)</th>
              <th className="title">Change (24h)</th>
            </tr>
            {tableItems}
          </table>
        </div>
      )
    }
  }

  ReactDOM.render(
    <BtcPrice />,
    document.getElementById('container')
  )