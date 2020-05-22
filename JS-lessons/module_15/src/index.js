import React from 'react';
import ReactDOM from 'react-dom';

import './normolize.css';
import './common-styles.css';
import './styles.css';

import AddComment from './addComment'
import CommentsForm from './commentsForm'

//Счетчик для уникального id комментария
let numberId = 0;

//Когда у нас есть данные в localStorage, то мы продолжаем в качестве начального значения для numberId берем 
//id последнего комментария в local storage
if (localStorage.getItem('prevComments')) {
  //превводим в массив
  const storageArr = JSON.parse(localStorage.prevComments);

  if (storageArr.length !== 0) {
    //получаем новый стартовый id
    numberId = storageArr[storageArr.length - 1].id;
  }
}

//Функция для определения даты отправления комментария
function getDateTime() {
  const dateTime = new Date().toLocaleString('ru', {year:'numeric', 
    month:'numeric', 
    day:'numeric', 
    hour:'numeric',
    minute: 'numeric'
  }).split(', ').reverse().join(' ');

  return dateTime;
}

//В зависимости от колличества комментариев рендерим или нет "Комментариев нет..."
function CommentInfo(props) {
  if (props.commentsAmount.length !== 0) {
    return null;
  } else {
    return(
      <p className = 'comments-section__comments-info'>Комментариев нет...</p>
    )
  }
}

class CommentWidget extends React.Component {
  constructor() {
    super();

    let prevComments = [];

    //При перезагрузке старницы в пременную prevComments запишем массив объектов из localStorage
    //этот массив задаст начальные условия для списка комментариев
    if (localStorage.getItem('prevComments')) {
      prevComments = JSON.parse(localStorage.getItem('prevComments'))
    }

    //начальные условия
    this.state = {
      userName: '',
      userComment: '',
      //задаем начальне условие для спсика комментариев через перменную prevCommnets
      commentsItems: prevComments
    };

    this.getUserName = this.getUserName.bind(this);
    this.getUserComment = this.getUserComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  //Функция для получения имени автора комментария
  getUserName(event) {
    this.setState({userName: event.target.value});
  }

  //Функция для получения комментария
  getUserComment(event) {
    this.setState({userComment: event.target.value});
  }

  deleteComment(id) {
    // получаем новый массив без удаленного комментария
    const filteredArr = this.state.commentsItems.filter(item => item.id !== id);
  
    // После обновления состояния, удаляем из localStorage комментарий, который мы удалили
    this.setState({commentsItems: filteredArr}, function() {
      localStorage.setItem('prevComments', JSON.stringify(this.state.commentsItems));
    });
  }

  //Получаем имя, комментарий и дату
  submitComment(event) {
    event.preventDefault();

    const userName = this.state.userName;
    const userComment = this.state.userComment;
    const commentsItems = this.state.commentsItems;
    const dateTime = getDateTime();

    //Используем trim() чтобы не допустить ввод одних лишь пробелов
    if (userName.trim() === '') {
      alert('В Вашем имени одни пробелы');
    } else if (userComment.trim() === '') {
      alert('В Вашем комментарии од1ни пробелы');
    } else {
      numberId++;

      commentsItems.push({ 
                          id: numberId.toString(),
                          name: userName,
                          comment: userComment,
                          publicationInfo: dateTime
     })

      this.setState({userName: '',
                     userComment: '',
                     commentsItems
      });

      //Сохраняем в localStorage
      localStorage.setItem('prevComments', JSON.stringify(this.state.commentsItems));
    }
  }

  render () {
    return (
      <section className = 'comments-section'>
        <h1 className = 'comments-section__main-header'>Добавьте комментарий!</h1>

        <CommentsForm userName = {this.state.userName}
                      getUserName = {this.getUserName}
                      onSubmit = {this.submitComment}
                      userComment = {this.state.userComment}
                      getUserComment = {this.getUserComment}
        />

        <CommentInfo commentsAmount = {this.state.commentsItems}/>

        <ul className = 'comments-section__coments-list'>
          <AddComment commentData = {this.state.commentsItems} deleteComment = {this.deleteComment}/>
        </ul>
      </section>
    );
  }
}

ReactDOM.render(
  <CommentWidget />,
  document.querySelector('.comment-section')
);



