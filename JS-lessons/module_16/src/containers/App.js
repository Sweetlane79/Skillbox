import React from 'react';
import { connect } from 'react-redux';

//Импорт формы, эелементов списка, абзац "Комментариев нет..."
import CommentsForm from '../components/commentsForm';
import AddComment from '../components/addComments';
import CommentInfo from '../components/showHideNoComments';
import { userName, userComment }  from '../components/commentsForm';

//Импорт добавление и удалени комментария
import { addComment, deleteComment } from '../actions/index'

let CommentApp = (props) => {
  const {
    commentsList, addComment, deleteComment
  } = props;

  return (
    <section className = 'comments-section'>
      <h1 className = 'comments-section__main-header'>Добавьте комментарий!</h1>
      
      <CommentsForm addComment = {addComment} />

      <CommentInfo commentsList = {commentsList}/>

      <ul className = 'comments-section__coments-list'>
        <AddComment commentsList = {commentsList} deleteComment= {deleteComment} />
      </ul>
      
    </section>
  )
}

//Связываем commentsList со state
const mapStateToProps = (state) => {
  return {
    commentsList: state
  }
}

//вязываем dispatch с удаленим и добавлением комментария
const mapDispatchProps = (dispatch) => {
  return {
    // onInputChange: (event) => dispatch(onInputChange(event))
    addComment: (event, name) => dispatch(addComment(event, userName, userComment)),
    deleteComment : (id) => dispatch(deleteComment(id))
  }
}

CommentApp = connect(
  mapStateToProps,
  mapDispatchProps
)(CommentApp);

export default CommentApp;