import React from 'react';

//На входе получаем функцию добавление комментария
const CommentsForm = ({ addComment }) => {
  return(
    <form className = 'comments-section__input-comments' method = "post" onSubmit = {addComment}>
          <label className ='input-comments__user-name'>
            <input className = 'user-name__input'
            id = 'user-name-input' 
            type = 'text' 
            name = 'user-name' 
            onChange = {event => {userName = (event.target.value)}}
            placeholder = 'Введите Ваше имя'
            required 
            />
          </label>

          <label className = 'input-comments__comment-textarea'>
            <textarea 
                      id='user-comment-textarea'
                      className = 'label__comments-input' 
                      cols = '50' rows = '5' 
                      name = 'user-comment'
                      onChange = {event => {userComment = (event.target.value)}}
                      placeholder = 'Введите Ваш комментарий' 
                      required
            >
            </textarea>
          </label>

          <button className = 'input-comments__btn' type = 'submit'>Добавить комментарий</button>
    </form>
  )
}

export default CommentsForm;
//экспорт данны с onChange имени и комментария
export let userName;
export let userComment;