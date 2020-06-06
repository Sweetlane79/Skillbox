import React from 'react';

//На вход получаем текущей список комментариев и функцию удаления комментария
const AddComment = ({ commentsList, deleteComment }) => {
  return (
    //Для каждомго элемента массива комменатриев ренедрим li
    commentsList.map((liEl) => {
      return (
      <li key = {liEl.id} className = 'coments-list__item'>
        <article className = 'item__article'>
          <header className = 'article__header-section'>
            <h2 className = 'header-section__header'>{liEl.userName}</h2>

            <time className = 'header-section__date'>{liEl.publicationInfo.split(' ')[1]}
              <span className = 'header-section__time'>{liEl.publicationInfo.split(' ')[0]}</span>
            </time>

            <button className = 'header-section__delete-btn'
                    type = 'button' 
                    aria-label='Удалить комментарий'
                    onClick = {event => deleteComment(liEl.id)}>
                    </button>
          </header>
          
          <p className = 'article__comment'>{liEl.userComment}</p>
        </article>
      </li>
      )
    })
  )
}

export default AddComment;