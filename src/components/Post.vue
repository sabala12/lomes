<template>
  <div>
    <h1>{{ name }}</h1>
    <VueShowdown :markdown='markdown'/>
  </div>
</template>

<script>

import postsService from '../services/postsService.js'

export default {
  name: 'Post',

  data: () => ({
          markdown: ''
  }),

  props: {
    name: {
      type: String,
      default: 'no_name',
    },
  },

  methods: {
          getPost (name)  {

                  postsService.getPostByName(name)
                    .then(response => {
                            console.log(response.data[0].markdown)
                            // TODO::Change data[0] to data, when getPostByName is fixed.
                            this.$data.markdown = response.data[0].markdown
                    })
                    .catch(e => {
                            console.log(e)
                    });
          }
  },

  mounted() {

          this.getPost(this.name);
  }
}

</script>

<style scoped>
</style>
