import React from 'react';
import ReactDOM from 'react-dom';

import './css/normolize.css';
import './css/common-styles.css';
import './css/styles.css';

import CommentApp from './containers/App';
import { createStore } from 'redux';
import commentsList from './reducers';

//Начальнео значение состояния
let initialState = [];

//При перезагрузке старницы в пременную prevComments запишем массив объектов из localStorage
//этот массив задаст начальные условия для списка комментариев
if (localStorage.getItem('prevComments')) {
  initialState = JSON.parse(localStorage.getItem('prevComments'))
}

const store = createStore(commentsList, initialState);

ReactDOM.render(
  <CommentApp store = {store}/>,
  document.querySelector('.comment-section')
);