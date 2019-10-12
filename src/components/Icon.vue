<template>
  <div class="icons-list">
    <icon-font type="icon-tuichu" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" />
    <a-icon type="smile" theme="twoTone" />
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

export default {
  components: {
    IconFont
  }
};
</script>   

<style scoped>
.icons-list {
  margin-right: 6px;
  margin-top: 6px;
  font-size: 24px;
}

.icons-list .anticon {
  margin: 6px;
}
</style>