import React from 'react';

function CommentsForm(props) {
  return(
    <form className = 'comments-section__input-comments' method = "post" onSubmit = {props.onSubmit} >
          <label className ='input-comments__user-name'>
            <input className = 'user-name__input' 
            type = 'text' 
            name = 'user-name' 
            value = {props.userName}
            onChange = {props.getUserName}
            placeholder = 'Введите Ваше имя'
            required 
            />
          </label>

          <label className = 'input-comments__comment-textarea'>
            <textarea className = 'label__comments-input' 
                      cols = '50' rows = '5' 
                      name = 'user-comment'
                      placeholder = 'Введите Ваш комментарий' 
                      value = {props.userComment}
                      onChange = {props.getUserComment}
                      required>
            </textarea>
          </label>

          <button className = 'input-comments__btn' type = 'submit'>Добавить комментарий</button>
    </form>
 
  )
}

export default CommentsForm;