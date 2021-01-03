<template>
<nav>
    <v-toolbar dark>

       <v-toolbar-title id="title" class="text-uppercase font-weight-light">
            My<span class="text-uppercase font-weight-bold">Blog's</span>
        </v-toolbar-title></a>
        <v-spacer></v-spacer>
        <v-toolbar-items>

        </v-toolbar-items>
    </v-toolbar>

</nav>
</template>

<script>

export default{
    name:'Navbar',
    data:()=>({
        drawer:false,
        newPostDialog:false,
        newPost:{}

    }),

    methods:{

    }

}
</script>
<style>
a,a:hover,a:active,a:focus{
    text-decoration:none;
    color:inherit;

}
#title{

  background: linear-gradient(to right ,rgb(247, 123, 181), rgb(170, 141, 252),rgb(176, 255, 173));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>