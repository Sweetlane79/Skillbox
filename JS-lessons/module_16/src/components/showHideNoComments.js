import React from 'react';

// В зависимости от колличества комментариев рендерим или нет "Комментариев нет..."
function CommentInfo({commentsList}) {
  if (commentsList.length !== 0) {
    return null;
  } else {
    return(
      <p className = 'comments-section__comments-info'>Комментариев нет...</p>
    )
  }
}

export default CommentInfo;