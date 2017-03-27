/**
 * Created by realm on 2017/3/16.
 */
const KEY = 'todos-backbone';
let Todo = Backbone.Model.extend({
  toJSON() {
    let json = Backbone.Model.prototype.toJSON.call(this);
    json.cid = this.cid;
    return json;
  }
});
let Todos = Backbone.Collection.extend({
  model: Todo,
  initialize() {
    let store = localStorage.getItem(KEY);
    if (store) {
      store = JSON.parse(store);
      this.set(store);
    }
    this.on('add', this.store, this);
    this.on('change', this.store, this);
  },
  store() {
    let json = JSON.stringify(this.toJSON());
    localStorage.setItem(KEY, json);
  }
});
let List = Backbone.View.extend({
  events: {
    'change input': 'input_onChange'
  },
  initialize () {
    this.template = Handlebars.compile(this.$('script').remove().html());
    this.collection.on('add', this.collection_onAdd, this);
    this.collection.on('change', this.collection_onChange, this);
    this.collection.each( model => {
      this.collection.trigger('add', model);
    });
  },
  collection_onAdd(model) {
    let item = this.template(model.toJSON());
    this.$el.append(item);
  },
  collection_onChange(model) {
    this.$('#' + model.cid).replaceWith(this.template(model.toJSON()));
  },
  input_onChange(event) {
    let target = $(event.currentTarget);
    this.collection.get(target.val()).set('status', target.prop('checked'));
  }
});
let Input = Backbone.View.extend({
  events: {
    'submit': 'onSubmit'
  },
  onSubmit(event) {
    event.preventDefault();
    let todo = this.$('input').val();
    if (!todo) {
      return;
    }
    this.collection.add({
      status: false,
      label: todo
    });
    this.$('input').val('');
  }
});
let Counter = Backbone.View.extend({
  initialize() {
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
    this.render();
  },
  render() {
    let done = this.collection.filter(model => {
      return !model.get('status');
    }).length;
    this.$el.html(`${done} / ${this.collection.length}`);
  }
});

let todos = new Todos();
let list = new List({
  el: 'ul',
  collection: todos
});
let input = new Input({
  el: 'form',
  collection: todos
});
let counter = new Counter({
  el: '.counter',
  collection: todos
});