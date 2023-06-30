<template>
  <div class="paddingBox-container border-box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'paddingBox',
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.paddingBox-container {
  padding: 24px;
  background: #f0f2f5;
}
</style>
