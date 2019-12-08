<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="sass">
.column
  display: flex
  flex-direction: column

.row
  display: flex
  flex-direction: row

.row-space-around
  display: flex
  flex-direction: row
  justify-content: space-around

// padding -----------------------------
.padding-8
  padding: 8px

.padding-bottom-8
  padding-bottom: 8px

.padding-top-8
  padding-top: 8px

.padding-left-8
  padding-left: 8px

.padding-right-8
  padding-right: 8px

.padding-16
  padding: 16px

.padding-bottom-16
  padding-bottom: 16px

.padding-top-16
  padding-top: 16px

.padding-left-16
  padding-left: 16px

.padding-right-16
  padding-right: 16px



</style>
