/**
 * Created by realm on 2017/3/13.
 */
$(function () {
  let template = $('#template').removeAttr('id').remove();
  let app = $('#app');
  let key = 'todo-jquery';

  function addItem(label, needStore) {
    let newItem = template.clone();
    newItem.find('.custom-control-description').text(label);
    app.find('ul').append(newItem);
    app.find('[type=text]').val('');
    refreshCounter();
    if (needStore) {
      store();
    }
    return newItem;
  }
  function init() {
    let todos = localStorage.getItem(key);
    if (todos) {
      todos = JSON.parse(todos);
      todos.forEach( item => {
        let newItem = addItem(item.label);
        if (item.status) {
          newItem.find('input').prop('checked', true);
        }
      });
      app.find(':checked').change();
    }
  }
  function refreshCounter() {
    $('.counter').text($('[type=checkbox]:not(:checked)').length + '/' + $('[type=checkbox]').length);
  }
  function store() {
    let todos = app.find('li').get().map( item => {
      return {
        status: $(item).find('input').prop('checked'),
        label: $(item).find('.custom-control-description').text()
      }
    });
    localStorage.setItem(key, JSON.stringify(todos));
  }

  app
    .on('submit', 'form', function (event) {
      let label = app.find('[type=text]').val();
      if (label) {
        addItem(label, true);
      }
      event.preventDefault();
    })
    .on('change', '[type=checkbox]', function (event) {
      let target = $(event.currentTarget);
      target.closest('li').toggleClass('done', target.prop('checked'));
      refreshCounter();
      store();
    });

  init();
});