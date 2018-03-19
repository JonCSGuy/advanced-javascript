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

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 */

ReactDOM.render(
  <div className="example-style">Replace this with the component you create</div>,
  document.getElementById('root')
);
