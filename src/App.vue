<template>
  <v-app >
  <Navbar />
  <v-main>
    <Theme/>



    <v-theme-provider>
       <Dashboard :posts="posts" />
    </v-theme-provider>

  </v-main>


  </v-app>
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Dashboard from './components/Dashboard.vue'
import Theme from './components/Theme.vue'

export default {

  name: 'App',

  components: {
    Navbar,
    Dashboard,
    Theme

  },

  data(){
    return{
      posts:[],
      darkTheme:false,


    }
  },
  mounted(){

      axios.get("https://blog975.herokuapp.com/api/posts/all")
      .then(data=>{this.posts=data.data.result})
       .catch(err=>console.log(err))
  },

};
</script>
