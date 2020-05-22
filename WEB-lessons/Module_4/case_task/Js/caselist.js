$(document).ready(function(){
  const caseListItemEl = $('.js-caselist');
  const infoTextEl = $('.js-infotext');
  const formEL= $('.js-form');
  const textInputEl = $('.js-textinput');
  const caseTextAreaInputEl = $('.js-casedescription');

  function onFormSubmit(event){
    event.preventDefault();

    const caseName = textInputEl.val();
    const caseDecription = caseTextAreaInputEl.val();

    infoTextEl.hide();
    // caseListItemEl.show();
    caseListItemEl.append(`
      <li class="case-list__item js-listitem">
        <article class="item__article js-article">
          <header class="case-header">
            <h3 class="item-article__header">${caseName}</h3>

            <button class="delete-btn js-deletebtn" type="button" aria-label="Удалить дело"></button>
            
            <button class="arrow-btn js-arrowbtn" type="button" aria-label="Свернуть описание дела"></button>
          </header>

          <p class="item-article__case-description js-articlecasedecription">${caseDecription}</p>
        </article>
      </li>
    `);

    this.reset();
  } 

  function onDeleteCaseBtnClick() {  
    $(this).closest('.js-listitem').remove(); 

    if (caseListItemEl.children().length === 0) {
      // caseListItemEl.hide();
      infoTextEl.show();
    }
  }

  function onCaseDescriptionClick() {
    $(this).parents('.js-article').find('.js-articlecasedecription').slideToggle();

    if ($(this).is('.rotated')) {
       $(this).toggleClass('rotated');
       $(this).parents('.js-article').find('.js-arrowbtn').attr('aria-label', 'Свернуть описание дела');
    } else {
       $(this).toggleClass('rotated');
       $(this).parents('.js-article').find('.js-arrowbtn').attr('aria-label', 'Развернуть описание дела');
    }
  }

  formEL.on('submit', onFormSubmit);

  caseListItemEl.on('click', '.js-deletebtn', onDeleteCaseBtnClick);

  caseListItemEl.on('click', '.js-arrowbtn', onCaseDescriptionClick);
});

