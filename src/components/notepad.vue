<template>
  <div>
    <sqblHeader :fileInfo=this.a>

    </sqblHeader
    ><div id='notepad'>
      <textarea id='note-content'></textarea>
      <span class='watermark'>@Squibble</span>
    </div>
    <footer>
      <bgPalette></bgPalette>
    </footer>
  </div>
</template>

<script>
import sqblHeader from './header.vue';
import bgPalette from './backgroundChanger.vue';

var DataTemplate = {
    title: 'GD Template Title',
    content: 'This is what the Parsed Data might'
      +' look like after it is imported from Local'
      +' Storage. Cool, right?'
      +'\n Overall, I dont expect it to look quite so neat.'
      +'\n But we can definitely work with that!',
}

var API = {
  Data: DataTemplate,
}

export default {
  name: 'notepad',
  components: {
    sqblHeader: sqblHeader,
    bgPalette: bgPalette,
  },
  created: function(){
    this.loadNotepad();
  },
  methods: {
    blurNotepad(){
      console.log("Notepad Unfocused. Btw.");
    },
    focusNotepad(){
      console.log("Focusing on Notepad now. Fyi.");
    },
    loadNotepad(){
      console.log('Loading...');
    },
  },
  data () {
    return {
      a: API.Data
    };
  }
}
</script>

<style scoped>

  #notepad {
    display: block;
    position: absolute;

		width: calc(100vw - 20px);
		height: calc(100vh - 90px);

    margin: 10px;
    padding: 0;

		background: rgba(255,255,255,0.5);
		box-shadow: 0 0 15px 0 #000;
  }

  textarea {
    display: block;

    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 35px);
    padding: 10px;
    margin: 0;

    background: none;
    border: none;
    outline: none;

    font-family: 'BenchNine';
    font-size: 18px;
    resize: none;
  }

  .watermark {
    display: block;
    position: absolute;
    bottom: 5px;
    right: 10px;

    width: auto;

    font-size: 20px;
    font-family: 'Lobster Two';
    opacity: 0.5;
    user-select: none;
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

    background: linear-gradient(to top right, #222, #444);

    text-align: center;

    overflow: visible;
  }
</style>
