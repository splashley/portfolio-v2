<template>
  <div class="header">
    <div>Ashley Hynes</div>
    <div>Links</div>
    <SocialMediaIcons />
  </div>
</template>

<script>
import SocialMediaIcons from './SocialMediaIcons.vue'
export default {
  name: 'Header',
  components: { SocialMediaIcons }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
}
</style>
