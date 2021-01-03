<template>
<v-container class="fluid pt-3" style="max-height:85vh;overflow-y:scroll">

<v-layout wrap>
    <v-flex xs12 md8 offset-md2>
        <h1 class=" mb-4 font-weight-bold">Posts</h1>

    </v-flex xs12 md8 offset-md2>
    <v-flex xs12 md8 offset-md2>
          <v-card  v-if="posts.length==0">
              <v-sheet dark class='grey darken-3'><v-card-title>No Post Yet</v-card-title></v-sheet>
              <v-card-subtitle>No Post have been published</v-card-subtitle>

          </v-card>




            <v-card style="overflow:hidden" fluid  dark class="grey darken-3  mb-2" v-for="(post,key) in posts" :key="key">


                  <v-card-title style="cursor:pointer" @click="viewPost(post._id)" class="mb-4">{{post.title}}</v-card-title>
                  <v-card-subtitle class="font-weight-bold">{{post.timestamp}}</v-card-subtitle>


                  <v-card-text>{{post.content.slice(0,200)}}...<v-btn text  @click="viewPost(post._id)">Read more</v-btn></v-card-text>
                    <v-card-subtitle> - {{post.author}}</v-card-subtitle>



            </v-card>

    </v-flex>
    <v-dialog v-model="postDialog" width="90%">
        <v-card >
            <v-sheet id="dialogTitle" dark class="grey darken-4"><v-card-title>{{data.title}}</v-card-title></v-sheet>
     <v-card-subtitle>{{data.timestamp}}</v-card-subtitle>
            <v-card-text>{{data.content}}</v-card-text>
                 <v-card-subtitle>{{data.author}}</v-card-subtitle>
                 <v-card-action>
                     <v-btn class="secondary mx-2 my-2" @click="toggleDialog()">Back</v-btn>
                 </v-card-action>
        </v-card>

    </v-dialog>


</v-layout>
</v-container>

</template>

<script>
import axios from 'axios'
export default{
    name:'Dashboard',
    props:['posts'],
    data(){
        return{
          postDialog:false,
          data:{},

        }

    },

    methods:{
        viewPost(id){
            axios.get(`https://blog975.herokuapp.com/api/post/view/${id}`)
            .then(data=>{this.data=data.data;this.toggleDialog()})

        },
        toggleDialog(){
            if(this.postDialog==false){
                this.postDialog=true;
            }
            else{
                this.postDialog=false
            }
        }



    },

}
</script>
<style>

</style>