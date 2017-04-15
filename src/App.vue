<template>
  <div id="app">
    <div id="Catalog">
      <h3>目录：</h3>
      <ul>
         <li v-for="(val,key) in tab">
          <router-link :to='"/"+key'>{{val}}</router-link>
         </li>
      </ul>
    </div>
    
    <div id="Content">
      <transition enter-active-class="animated rotateIn" leaver-active-class="animated rotateOut">
        <router-view class=""></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
//import $ from 'jquery'
export default {
  name: 'app',
  
  data () {
    return {
      tab:{'router':"路由",'slot':"模板Slot",'communication':'组件通信','transition':'动画','element':'ElementUI'}
    }
  },methods:{
    
  }
}
</script>

<style lang="less">
@color:#42b983;

html,body{ overflow:hidden;height:100%;margin:0 0 0 5px;padding:0; }
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;display:flex;color: #2c3e50;min-height:100%;
   #Catalog{
     min-height:100%;
     flex:1;
     border-right:1px solid @color;
     margin-right:5px;
   }
   #Content{
    flex:9;
   }
}

h1, h2 {font-weight: normal;}
ul {list-style-type: none;padding: 0;}
li { margin: 0 10px;}
a {color: @color;}
</style>
