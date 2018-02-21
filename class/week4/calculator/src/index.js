import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
  constructor(props){
    super(props);
    this.calculateNum = this.calculateNum.bind(this);
    this.onOperator = this.onOperator.bind(this);
    this.onEvaluation = this.onEvaluation.bind(this);
    this.getOperation = this.getOperation.bind(this);

    this.state = {
      userInput: '',
      calcInput: '',
      operation: ''
    };
  }

  calculateNum(e){
    let number = _.join([this.state.userInput, e.target.value], '');

    this.setState({userInput: number});
    console.log(number);
  }

  getOperation(operator){
    let result;

    if(operator == '+'){
      result = function(a, b) {
        return parseInt(a) + parseInt(b);
      };
    }
    else if(operator == '-'){
      result = function(a, b) {
        return parseInt(a) - parseInt(b);
      };
    }
    else if(operator == '*'){
      result = function(a, b) {
        return parseInt(a) * parseInt(b);
      };
    }
    else if(operator == '/'){
      result = function(a, b) {
        return parseInt(a) / parseInt(b);
      };
    }
    else{
      result = 'error';
    }

    return result;
  }

  onOperator(e){
    let number = this.state.userInput;

    this.setState({calcInput: number});
    this.setState({userInput: ''});
    this.setState({
      operation:this.getOperation(e.target.value)
    });
  }

  onEvaluation(e){
    let operator = this.state.operation;
    let value1 = this.state.userInput;
    let value2 = this.state.calcInput;

    console.log(operator(value1, value2));

    this.setState({
      result: operator(value1, value2)
    });
  }


  render(){
    let buttons = [];

    for(let i=0; i <= 9; i++){
      buttons.push((<button value={i} key={i} onClick={this.calculateNum}>{i}</button>));
    }
    return (
      <div>
        <div>
          {this.state.result}
        </div>
        {buttons}
        <button value='+' onClick={this.onOperator}>+</button>
        <button value='-' onClick={this.onOperator}>-</button>
        <button value='*' onClick={this.onOperator}>x</button>
        <button value='/' onClick={this.onOperator}>/</button>
        <button value='=' onClick={this.onEvaluation}>=</button>
      </div>
    );
  }
};

ReactDOM.render(
  <Component/>,
  document.getElementById('root')
);

