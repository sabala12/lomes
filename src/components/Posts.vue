<template>
  <div>
    <v-row v-for='post in posts' :key='post.id'>
      <v-col>
        <v-hover 
         v-slot:default='{ hover }'>

          <v-window class='ml-1'>
            <v-card
             v-on:click=goToPost(post.name)
             color='#f2edd5'
             :elevation="hover ? 3 : 1"
             :class="{ 'on-hover': hover }"
             class='ml-4'
             max-width='450'
             >
             
               <v-card-title  class="headline">
                 <strong class='title'>{{ post.name }}</strong>
               </v-card-title>

              <v-card-subtitle>
                <v-chip color='black' class='ma-2' outlined text-color='black' v-for='tag in post.tags' :key='tag'>
                  {{ tag }}
                </v-chip>
              </v-card-subtitle>

            </v-card>
          </v-window>
        </v-hover>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>

import postsService from '../services/postsService.js'

export default {
  name: '',

  data: () => ({
    posts: [],
    test_val: '/post/some'
  }),

  props: {
    sub: {
      type: String,
      default: 'no_subject',
    },         
  },

  methods: {
    getPostsDesc() {
        postsService.getDescsByTags(this.sub)
          .then(response => {
            this.posts = response.data;
          })
          .catch(e => {
                  console.log(e)
          });
    },

    goToPost(name) {
            console.log('eeeee')

            this.$router.push({ path: `/post/${name}`})
    }
  },

  mounted() {
    this.getPostsDesc();
  }
}

</script>

<style scoped>
</style>
