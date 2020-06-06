const commentsList = (state = [], action) => { 
  switch (action.type) {
    case 'ADD_COMMENT':
      //Промежуточная перменная для хранения состояния
      let prevComments;

      //Проверяем, есть ли уже сохраненые комментарияя в localStorage
      if (localStorage.getItem('prevComments')) {
        //Еесли есть записываем в prevComments массив этих комментариев
        prevComments = JSON.parse(localStorage.getItem('prevComments'));
      } else {
        prevComments = [];
      }

      //Записываем новый комментарий в localStorageObj
      const localStorageObj =    {
        id: action.id,
        userName: action.userName,
        userComment: action.userComment,
        publicationInfo: action.publicationInfo
      }

      //Добавляем localStorageObj в промежутночный массив
      prevComments.push(localStorageObj);

      //Записываем в localStorage
      localStorage.setItem('prevComments', JSON.stringify(prevComments));

      //обновляем состояние
      return [
        ...state, 
        {
          id: action.id,
          userName: action.userName,
          userComment: action.userComment,
          publicationInfo: action.publicationInfo
        }
    ]

    case 'DELETE_COMMENT':
      // получаем новый массив без удаленного комментария
      const filteredArr = state.filter(item => item.id !== action.id);

      // После обновления состояния, удаляем из localStorage комментарий, который мы удалили
      localStorage.setItem('prevComments', JSON.stringify(filteredArr));
      
    return filteredArr
    
    default: return state;
  }
}

export  default commentsList;