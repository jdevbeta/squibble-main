<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <component 
        v-on:switchApp=changeApp
        v-on:openApp=openApp
        :class=active.app
        :is=active.app
        :index=index
      >
      </component>
    </transition>
    <!--
    <div id="developers">
      <span @click="openApp()">
        <icon name="zap" dims="20,20"></icon>
      </span>
    </div>
    -->
  </div>
</template>

<script>
import sqblLogin from './components/login.vue';
import sqblNavigation from './components/navigation.vue';
import sqblNotepad from './components/notepad.vue';
import sqblLoading from './components/loading.vue';
import sqblQueue from './components/queue.vue';

export default {
  name: 'app',
  components: {
    login: sqblLogin,
    navigation: sqblNavigation,
    notepad: sqblNotepad,
    queue: sqblQueue
  },
  methods: {
    changeApp(toApp){
        this.active.app = toApp;
      return this;
    },
    openApp(AppData){
      function RandomKey(){
        return Math.random().toString(36).substring(2,12);
      }
      var AppData = AppData || new Object();
      var type = AppData.type || 'external';
      var title = AppData.title || 'Untitled App';
      var url = AppData.url || 'https://google.com/';
      var mem = AppData.mem || RandomKey();
      var width = AppData.width || "200";
      var height = AppData.height || "300";
      var opened = window.open(url, mem, 'width='+width+' height='+height);
      console.log(AppData);
      console.log(this.index);
      this.index.window.push({
        type: type,
        title: title,
        url: url,
        mem: mem,
        id: this.index.window.length,
        active: opened
      });
      Active[mem] = opened;
      console.log(Active);
      // Add Window Reference to a Global Variable
    }
  },
  data () {
    return {
      active: {
        app: sqblLoading,
      },
      index: {
        window: [
    
        ],
        clipboard: {

        },
        notepad: {
          SavedNote: {
            title: "Saved Note One",
            content: "This is a Test.",
            mem: 'notepadmemorylocation'
          }
        }
      }
    }
  }
}
</script>

<style>
  body {
    display: block;
    position: relative;
    top: 0;
    left: 0;

    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    
    text-align: center;
    background-color: #333;
    background: linear-gradient(to top right, #222, rgba(255,255,255,0)),
      linear-gradient(to top left, #337, rgba(255,255,255,0)),
      linear-gradient(to bottom, #770074, rgba(255,255,255,0));
    background-size: 100% 100%;
    background-attachment: fixed;

    overflow: hidden;
  }

  #developers {
    display: block;
    position: fixed;
    bottom: 0px;
    right: 0px;
    height: auto;
    max-height: 100px;
    width: 50%;
    border: 1px solid #111;
    border-radius: 5px;
  }

  #developers:hover {
    max-height: 100%;
  }

</style>