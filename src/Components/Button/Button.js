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
            <button class="Button" >
              <h1>{this.props.purpose}</h1>
            </button>
          </div>
        );
      }
}
export default Button;