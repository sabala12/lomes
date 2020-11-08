<template>
  <div>
    <p>{{ $route.query.lan}} </p>

    <VeShowdown markdown="Hello, world!"/>

    <v-row v-for='story in stories' :key='story.title'>
      <v-col>
        <v-hover 
         v-slot:default='{ hover }'>
          <v-window>
            <v-card 
             :href='`/story?name=` + story.title'
             :elevation="hover ? 3 : 1"
             :class="{ 'on-hover': hover }"
              class='mx-auto'>
              <v-card-text>

                <strong class='title'>{{ story.title }} </strong>
                <p></p>
                <p>{{ story.preview }}</p>

              </v-card-text>
            </v-card>
          </v-window>
        </v-hover>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>

//import storiesService from './../services/storiesService.js';

export default {
        name: 'Stories',
        props: {
                lan: {
                        type: String,
                        default: 'english',
                }
        },
        data: () => ({
                stories: [],
        }),
        mounted() {
                //this.stories = storiesService.getStoryList(this.lan)
                //this.stories = storiesService.getStoryList(this.params.lan)

                this.stories = [
                        {
                                title:          'rot',
                                preview:        'once upon a time',
                        },
                        {
                                title:          'blau',
                                preview:        'once upon a time',
                        }
                ]
        },
}

</script>

<style scoped>
</style>
