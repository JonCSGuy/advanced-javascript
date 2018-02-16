import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

const Component = (props) => {
  // Lodash, now imported by this script
  let helloMsg = _.join(
    ['Hello', 'webpack', 'and ES5', '!!!'], ' '
  );

  return (
    <div>
      This is some cool JSX!
      It's going to get turned into HTML.
      {helloMsg}
    </div>
  );
};

ReactDOM.render(
  <Component/>,
  document.getElementById('root')
);
