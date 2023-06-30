<template>
  <div ref="activeLine" class="activeChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'activeLine',
  mixins: [resize],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(this.$refs.activeLine);
      this.myChart.setOption(
        {
          title: {
            text: '技术统计',
            subtext: '技术',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '前端' },
                { value: 735, name: '后端' },
                { value: 580, name: '端' },
                { value: 484, name: 'Flutter' },
                { value: 300, name: 'test' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>

<style lang="less" scoped>
.activeChart {
  width: 100%;
  height: 350px;
}
</style>
