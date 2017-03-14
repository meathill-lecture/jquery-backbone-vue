/**
 * Created by realm on 2017/3/13.
 */
$(function () {
  var template = $('#template').remove();
  function addItem() {
    var label = $('#app [type=text]').val()
    if (label) {
      var newItem = template.clone();
      newItem.find('span').text(label);
      $('#app ul').append(newItem);
      $('#app [type=text]').val('');
      refreshCounter();
    }
  }
  function refreshCounter() {
    $('.counter').text($('[type=checkbox]:not(:checked)').length + '/' + $('[type=checkbox]').length);
  }
  $('#app')
    .on('submit', 'form', function (event) {
      addItem();
      event.preventDefault();
    })
    .on('keydown', 'input', function (event) {
      if (event.keyCode === 13) {
        addItem();
      }
    })
    .on('change', '[type=checkbox]', function (event) {
      var target = $(event.currentTarget);
      target.closest('li').toggleClass('done', target.prop('checked'));
      refreshCounter();
    })
});