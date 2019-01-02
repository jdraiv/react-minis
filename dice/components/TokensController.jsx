
export default class TokensController extends React.Component {
    // Props = tokens
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div id="tokens-container">
          <button id="tokens-btn">{this.props.tokens}</button>
        </div>
      )
    }
  }