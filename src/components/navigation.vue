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
        <li v-for="note in index.notepad" :key="note.id">
          <icon name="paperclip" dims="18,18">
          </icon><span>
            {{note.title}}
          </span>
        </li>
      </ul>
    </nav>
    <div id="sqbl-tools">
      <span @click="$emit('openApp', {url: './notepad.html', width: 300, height: 400})">
      <icon name="file-text" dims="28,28"></icon>
      </span>
      <span>
      <icon name="send" dims="28,28"></icon>
      </span>
      <span>
      <icon name="share-2" dims="28,28"></icon>
      </span>
    </div>
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
    display: block;
    box-sizing: border-box;
    margin: 0 0 0 40px;
    padding: 10px 10px;

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

    box-sizing: border-box;
    margin: 5px;
    padding: 5px 5px 0 5px;
    background: rgba(255,255,255,0.3);
    border-radius: 3px;
    cursor: pointer;

    transition: all 0.3s ease;
  }

  nav li svg {
    float: left;
    transition: transform 0.5s ease;
  }

  nav li span {
    border: 0px solid #000;
  }

  nav li:hover {
    transform: scale(1.02);
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

  #sqbl-tools {
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    box-sizing: border-box;
    width: 42px;
    height: 100%;

    margin: 0;
    padding: 5px 0;

    border-right: 0.5px solid #000;
    background: linear-gradient(to top right, #333, #555);
    color: #999;
  }

  #sqbl-tools svg {
    display: block;

    margin: 0;
    padding: 5px 5px;
    stroke: #000;
    fill: #777;
    stroke-width: 0px;
    filter: drop-shadow(1px 1px 3px #111);
    
    cursor: pointer;

    transition: all 0.5s ease;
  }

  #sqbl-tools svg:hover {
    fill: #5594a2;
    transform: scale(0.9);
    stroke-width: 1px;
  }

</style>
