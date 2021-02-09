<template>
  <v-app >
  <Navbar />
  <v-main>
    <Theme/>



    <v-theme-provider>
       <Dashboard :posts="posts" />
    </v-theme-provider>

    <v-snackbar v-model="dialog" timeout="6000">
      <v-card>
        <v-card-subtitle>Welcome To My Blog</v-card-subtitle>
        <v-card-actions>
          <v-button icon @click="dialog=false">OK</v-button>
        </v-card-actions>
      </v-card>
    </v-snackbar>

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
      dialog:false,
      darkTheme:false,


    }
  },
  mounted(){

      axios.get("https://blog975.herokuapp.com/api/posts/all")
      .then(data=>{this.posts=data.data.result;
      this.dialog=true;
      })
       .catch(err=>console.log(err))
  },

};
</script>
