<template>
  <div>
    <nav>
      <ul id="active-windows">
        <label for="active-window"> Active Applications </label>
        <li v-for="activeItem in index.window" 
          :key="activeItem.id">
          <icon name="chrome" dims="18,18">
          </icon><span>
            {{activeItem.title}}
          </span>
        </li>
      </ul>
      <ul id="saved-clipboards">
        <label for="saved-clipboards">Saved Clipboards</label>
        <li>
          <icon name="layers" dims="18,18">
          </icon><span>
            Active Clipboards Template
            </span>
        </li>
      </ul>
      <ul id="saved-notes">
        <label for="saved-notes">Saved Notes</label>
        <li v-for="(note, mem) in index.notepad" :key="note.id">
          <icon name="paperclip" dims="18,18">
          </icon><span>
            {{note.title}}
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sqblNavigation',
  props: {
    index: {
      type: Object,
      required: true
    }
  },
  methods: {

  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  nav {
    font-family: 'BenchNine';
  }

  nav label {
    display: block;
    margin: 0;
    padding: 1px;
    border: 1px solid #000;
    background: #aaa;
    font-size: 20px;
  }

  nav ul {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    padding-bottom: 1px;
    list-style: none;
    background: rgba(255,255,255,0.1);
    box-shadow: 0 5px 10px -5px #000;
  }

  nav li {
    display: block;
    margin: 5px;
    padding: 5px 5px 0 5px;
    background: rgba(255,255,255,0.3);
    border-radius: 3px;
    cursor: pointer;
  }
  nav object {
    float: left;
    user-select: none;
  }
  nav span {
    position: relative;
    top: -2px;
    letter-spacing: 1px;
    font-size: 18px;
  }
</style>
