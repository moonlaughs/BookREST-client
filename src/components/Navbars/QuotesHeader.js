import React from "react";

export default class QuotesHeader extends React.Component {
constructor(props) {
    super(props); 

    this.state = {
        quote: ''
    }
}
  

  componentDidMount() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => this.setState({ quote: data }));
console.log("DATA: " + this.state.quote)
  }

  render() {
      var {quote} = this.state;
    return (
    

<div className="blockquote-wrapper">
<div className="blockquote">
  <h1>"{quote.content}"</h1>
  <h4>-{quote.author}</h4>
</div>
</div>
    );
  }
}