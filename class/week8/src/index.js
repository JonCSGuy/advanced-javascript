import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Content = ({ match }) => (
  <div>
    Some cool content: {match.params.contentId}
  </div>
);

const Home = () => (
  <div>
    This is my cool Website! <br/>
    <Link to="/content/page1">My First Page!</Link> <br/>
    <Link to="/content/page2">My Second Page!</Link>
  </div>
);

const About = () => (
  <div>
    This website was built with react-router!
  </div>
);

const Contact = () => (
  <div>
    Enter your e-mail <br/>
    <input type="text"/> <br/>
    <button>Submit</button>
  </div>
);

const Footer = () => (
  <div id="footer">
    <div>
      Footer
    </div>
  </div>
);

const App = () => (
  <div id="app" className={'flex-col'}>
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>

    <div id="content" className={'flex-col'}>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/content/:contentId" component={Content}/>
      <RouteConfig/>
    </div>
    <Footer/>
  </div>
);

const RouteConfig = () => (
  <div>
    <Route path="/contact" component={Contact}/>
  </div>
);

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);

