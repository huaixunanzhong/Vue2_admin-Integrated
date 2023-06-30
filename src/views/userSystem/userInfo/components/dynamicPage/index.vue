<template>
  <div class="dynamic-wrapper">
    <div class="active-wrapper">
      <div class="dynamic-title">活跃度统计图</div>
      <active-pie />
    </div>
    <div class="timeline-wrapper">
      <div class="dynamic-title">近期动态</div>
      <a-timeline class="padding24" mode="left" style="margin-top: 35px">
        <a-timeline-item v-for="(item, index) in timelineList" :key="index" :color="item.color">
          <p>{{ item.time }}</p>
          {{ item.title }}
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import activePie from './activePie.vue';
export default {
  name: 'dynamic',
  components: { activePie },
  data() {
    return {
      timelineList: [
        {
          title: '发布Vue-cli脚手架工程',
          time: '2022-11-19',
          color: 'green'
        },
        {
          title: '前端训练营',
          time: '2021-12-20',
          color: 'gray'
        },
        {
          title: '优化简历辅导',
          time: '2021-12-08',
          color: 'gray'
        },
        {
          title: 'webpack5 + Bable面试题',
          time: '2020-12-05',
          color: 'green'
        },
        {
          title: '前端训练营',
          time: '2021-12-20',
          color: 'gray'
        },
        {
          title: '优化简历辅导',
          time: '2021-12-08',
          color: 'gray'
        },
        {
          title: 'webpack5 + Bable面试题',
          time: '2020-12-05',
          color: 'green'
        },
        {
          title: '前端训练营',
          time: '2021-12-20',
          color: 'gray'
        },
        {
          title: '优化简历辅导',
          time: '2021-12-08',
          color: 'gray'
        },
        {
          title: 'webpack5 + Bable面试题',
          time: '2020-12-05',
          color: 'green'
        },
        {
          title: '权限管理系统',
          time: '2020-10-13',
          color: 'gray'
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.dynamic-title {
  font-size: 1rem;
  margin-bottom: 15px;
}
.timeline-wrapper {
  margin-top: 24px;
}
</style>
