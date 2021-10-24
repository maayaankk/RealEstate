import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//  "homepage": "https://Ahmed-Zitouni.github.io/RealEstate",
//    "deploy": "npm run build && gh-pages -d build"
