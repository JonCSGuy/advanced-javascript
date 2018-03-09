import React from 'react';
import ReactDOM from 'react-dom';

function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: props.question
    };
  }
  answer(choice) {
    let answer = this.state.q['option' + this.state.q.answers];
    let picked = this.state.q['option' + choice];

    if(choice === this.state.q.answers) {
      this.setState({
        message: "Correct! The answer is " + answer
      });
    } else {
      this.setState({
        message: "Wrong! The answer is " + answer + ", you picked " + picked
      });
    }
  }
  render() {
    let answers = [];
    let display;
    let correct = this.state.correct;
    for(let i = 1; i <= 4; i++) {
      let j = i;
      answers.push(
        <button onClick={() => this.answer(i)}>
          {this.state.q['option' + i]}
        </button>
      );
    }

    if(this.state.message) {
      display = this.state.message;
    } else {
      display = answers;
    }
    return (
      <div>
        <p>
          {this.state.q.question}
        </p>
        <div>
          {display}
        </div>
      </div>
    );
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
    this.loadQuestions = this.loadQuestions.bind(this);
  }
  loadQuestions() {
    var url = 'https://qriusity.com/v1/categories/7/questions';
    getAjaxPromise(url)
      .then((data) => {
        this.setState({questions: JSON.parse(data)});
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.questions.map(q => <Question question={q}/>)}
        </ul>
        <button onClick={this.loadQuestions}>Start</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Component/>,
  document.getElementById('root')
);
