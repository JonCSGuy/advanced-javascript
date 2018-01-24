/* Hello world - using a pure component */

const NestedComponent = () => (
  <h1>Hello World!</h1>
);

const renderHelloWorld = () => {
  ReactDOM.render(
   <div>
    This is a simple example of some JSX with a nested component
    <NestedComponent/>

    Refresh the page to return to the main menu.
  </div>,
  document.getElementById('root')
  );
};

/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      userInput: '',
      todos: []
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  addTodo() {
    const todos = this.state.todos;

    todos.push(this.state.userInput);

    this.setState({todos: todos});
  }
  render() {
    const todos = this.state.todos.map(
      (todo) => <li>{todo}</li>
    );
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/>
          <button onClick={this.addTodo}>Add</button>
          <ul>
            {todos}
          </ul>
      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};


/* index.js */
const MenuReturn = () => (
  <button onClick={renderMainMenu}>
    Return to Menu
  </button>
);


const renderMainMenu = () => {
  ReactDOM.render(
    <div>
        <h1>Welcome to JavaScript 5</h1>
        <span>Example Code</span>
        <ul>
            <li>
              <a onClick={renderHelloWorld} href="#">
                Hello World Example
              </a>
            </li>
            <li>
              <a onClick={renderBasicInput} href="#">
                Input Example
              </a>
            </li>
            {/* try adding your own code to the list */}
        </ul>
    </div>,
    document.getElementById('root')
  );
};

renderMainMenu();
