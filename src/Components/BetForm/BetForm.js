import React from "react";
import "./BetForm.css";
import Button from "../Button/Button";

class BetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      opponent: null,
      wager: null,
      id: this.props.bets.length,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOpponentChange = this.handleOpponentChange.bind(this);
    this.handleWagerChange = this.handleWagerChange.bind(this);
    this.addBet = this.addBet.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      opponent: this.state.opponent,
      wager: this.state.wager,
    });
  }
  handleOpponentChange(e) {
    this.setState({
      name: this.state.name,
      opponent: e.target.value,
      wager: this.state.wager,
    });
  }
  handleWagerChange(e) {
    this.setState({
      name: this.state.name,
      opponent: this.state.opponent,
      wager: e.target.value,
    });
  }
  addBet() {
    const newBet = {
      name: this.state.name,
      opponent: this.state.opponent,
      wager: this.state.wager,
      id: this.props.bets.length + 1,
    };
    let containsNull = false;
    for (var n in newBet) {
      if (newBet[n] == null) containsNull = true;
    }
    if (!containsNull) {
        this.props.onAdd(newBet);
        this.state = {
          name: null,
          opponent: null,
          wager: null,
          id: this.props.bets.length,
        }; 
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <label>CHALLENGE</label>
          <input placeholder="Challenge" onChange={this.handleNameChange} />
          <label>OPPONENT</label>
          <input placeholder="Name" onChange={this.handleOpponentChange} />
          <label>CHARITABLE WAGER</label>
          <input placeholder="Wager" onChange={this.handleWagerChange} />
          <br></br>
          <button onClick={() => this.addBet()}>Add Bet</button>
        </div>
      </div>
    );
  }
}
export default BetForm;
