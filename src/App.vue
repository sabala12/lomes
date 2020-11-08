<template>
  <v-app>
    <v-app-bar app color="#a9b2b2" dark>

      <v-btn href="/" text>
        <span class="mr-2">LOMES</span>
      </v-btn>
      <v-btn href="/posts/math" text>
        <span class="mr-2">MATH</span>
      </v-btn>
      <v-btn href="/posts/cs" text>
        <span class="mr-2">CS</span>
      </v-btn>
      <v-btn href="/posts/thoughts" text>
        <span class="mr-2">THOUGHTS</span>
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn href="/about" text>
        <span class="mr-2">ABOUT</span>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.rounded-img {
  border-radius:50px;
}
</style>
