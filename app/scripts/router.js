import Backbone from 'backbone';
import Document from './components/docView';
import React from 'react';
import ReactDom from 'react-dom';
import store from './store';

let container = document.getElementById('container');

const Router = Backbone.Router.extend({
routes: {
  '': 'home'
},
home() {
  ReactDom.render(<Document doc={store}/>, container);
}
});

export default new Router();
