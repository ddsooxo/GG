import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props)
    }
    newBet() {

    }
    render() {
        return (
          <div className="Button">
            <button class="Button" onClick={this.props.onSave}>
              <h1>{this.props.purpose}</h1>
            </button>
          </div>
        );
      }
}
export default Button;