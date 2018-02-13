<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <component 
        v-on:switchApp=changeApp
        :class=active.app
        :is=active.app
        :index=index
      >
      </component>
    </transition>
    <div id="developers">
      <button @click="openApp()">Test Popup</button>
      <p>{{active}}</p>
      <p>Windows: {{index.window}}</p>
      <p>Clips: {{index.clipboard}}</p>
      <p>Notepads: {{index.notepad}}</p>
      <p>{{index}}</p>
    </div>
  </div>
</template>

<script>
import sqblLogin from './components/login.vue';
import sqblNavigation from './components/navigation.vue';

var Active = new Object();

export default {
  name: 'app',
  components: {
    login: sqblLogin,
    navigation: sqblNavigation
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
      var ref = AppData.ref || RandomKey();
      var opened = window.open(this.url, this.ref, 'width=200 height=350');
      console.log(AppData);
      console.log(this.index);
      this.index.window.push({
        type: type,
        title: title,
        url: url,
        ref: ref,
      });
      Active[ref] = opened;
      console.log(Active);
      // Add Window Reference to a Global Variable
    }
  },
  data () {
    return {
      active: {
        app: 'login'
      },
      index: {
        window: [
    
        ],
        clipboard: {

        },
        notepad: {
          note1: {
            content: "This is a Test."
          }
        }
      }
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    text-align: center;
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