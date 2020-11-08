<template>
  <div>
    <VueShowdown v-bind:markdown="text"/>
  </div>
</template>

<script>

let text = "### Hello, Vue Showdown! :tada: Input your markdown here and get the HTML right now! Set the `emoji`\n option below to enable emoji parsing!\n :smile: Set the `vueTemplate` prop below to enable vue template parsing!"

export default {
  data: () => ({
          text,
  }),
}
</script>
