import React from "react";
import "./BetList.css";
import Bet from "../Bet/Bet.js";

class BetList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  render() {
    const bets = this.props.bets;
    return (
      <div>
        <section>
        </section>
        <div className="Betlist">
          {bets.map((bet) => {
            return (
              <section>
                <Bet
                  bet={bet}
                  id={bet.id}
                  onAdd={this.props.onAdd}
                  onEdit={this.props.onEdit}
                  onRemove={this.props.onRemove}
                />
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}
export default BetList;
