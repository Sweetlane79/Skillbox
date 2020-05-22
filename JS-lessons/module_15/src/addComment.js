import React from 'react';

function AddComment(props) {
  return (
    props.commentData.map((liEl) => {
      return (
      <li key = {liEl.id} 
          className = 'coments-list__item'>
        <article className = 'item__article'>
          <header className = 'article__header-section'>
            <h2 className = 'header-section__header'>{liEl.name}</h2>

            <time className = 'header-section__date'>{liEl.publicationInfo.split(' ')[1]}
              <span className = 'header-section__time'>{liEl.publicationInfo.split(' ')[0]}</span>
            </time>

            <button className = 'header-section__delete-btn'
                    type = 'button' 
                    aria-label='Удалить комментарий'
                    onClick = {props.deleteComment.bind(this, liEl.id)}>
                    </button>
          </header>
          
      <p className = 'article__comment'>{liEl.comment}</p>
        </article>
      </li>
      )
    })
  )
}

export default AddComment;
