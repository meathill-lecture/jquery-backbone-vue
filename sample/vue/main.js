/**
 * Created by realm on 2017/3/16.
 */

const KEY = 'todos-vue';
let store = localStorage.getItem(KEY);
store = store ? JSON.parse(store) : [];

let app = new Vue({
  el: '#app',
  data: {
    todos: store
  },
  computed: {
    done() {
      return this.todos.filter( todo => {
        return !todo.status;
      }).length;
    },
    total() {
      return this.todos.length;
    }
  },
  methods: {
    store() {
      let json = JSON.stringify(this.todos);
      localStorage.setItem(KEY, json);
    },
    onChange(index, event) {
      this.todos[index].status = event.target.checked;
      this.store();
    },
    onSubmit(event) {
      let todo = event.target.elements.todo.value;
      if (todo) {
        this.todos.push({
          status: false,
          label: todo
        });
        event.target.elements.todo.value = '';
        this.store();
      }
    }
  }
});