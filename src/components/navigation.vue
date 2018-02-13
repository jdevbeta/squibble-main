<template>
  <div>
    <nav>
      <label for="active-window">Active Applications</label>
      <ul id="active-windows">
        <li v-for="activeItem in index.window" 
          :key="activeItem.id">
          {{activeItem.title}}
        </li>
      </ul>
      <label for="saved-clipboards">Saved Clipboards</label>
      <ul id="saved-clipboards">
        <li>Active Clipboards Template</li>
      </ul>
      <label for="saved-notes">Saved Notes</label>
      <ul id="saved-notes">
        <li v-for="(note, mem) in index.notepad" :key="note.id">
          <h2>{{mem}}</h2>
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
  nav label {
    display: block;
    padding: 5px;
    border: 1px solid #000;
  }

  nav ul {
    list-style: none;
  }
</style>
