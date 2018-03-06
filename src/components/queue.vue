<template>
  <div>
    <sqblHeader :fileInfo="this"></sqblHeader>
    <div id="todo-list-example">
      <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
        class="mainInput"
      >
      <h3>{{newTodoText}}</h3>
      <ul>
        <li
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        >
          <input type="checkbox" class="checkbox"/>
          <label class="title">{{ todo.title }}</label>
          <button v-on:click="$emit('remove')">
            <icon name='trash' dims='18,18'></icon>
          </button>
        </li>
      </ul>
    </div>
    <footer>
      <bgPalette></bgPalette>
    </footer>
  </div>
</template>

<script>
import sqblHeader from './header.vue';
import bgPalette from './backgroundChanger.vue';

export default {
  name: 'queue',
  components: {
    sqblHeader: sqblHeader,
    bgPalette: bgPalette
  },
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>
  .mainInput {
    display: block;
    position: relative;

    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    width: 100vw;
  }

  h3 {
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    height: 0px;
    background: #fff;
    z-index: 1;
  }

  .mainInput:focus ~ h3{
    height: auto;
  }

  ul {
    display: block;
    height: calc(100vh - 140px);
    margin: 10px;
    padding: 5px;

    background: #e2e2e2;;
		box-shadow: 0 0 15px 0 #000;

    list-style: none;
    overflow-y: scroll;
  }

  li {
    display: block;
    position: relative;

    box-sizing: border-box;
    margin: 0px;
    padding: 5px 5px 10px 30px;
    border-radius: 3px;
    border-bottom: 1px solid rgba(0,0,0,0.5);

    font-family: BenchNine;
    font-size: 18px;
    text-align: left;
    cursor: pointer;
  }
  
  button {
    display: block;
    position: absolute;
    top: 5px;
    right: 1px;

    box-sizing: border-box;
    width: 23px;
    height: 23px;
    margin: 0;
    padding: 0;
  }

  .checkbox {
    display: block;
    position: absolute;
    top: 7px;
    left: 2px;
    outline: none;
    transform: scale(1.8);
  }

  footer {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;

    height: 34px;
    width: 100%;
    margin: 0;
    padding: 0;

    background: linear-gradient(to bottom right, #222, #444);

    text-align: center;

    overflow: visible;
  }

</style>
