<template>
  <div ref="radiusPie"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'radiusPie',
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
      this.myChart = echarts.init(this.$refs.radiusPie);
      this.myChart.setOption(
        {
          color: colorLost,
          tooltip: {
            trigger: 'item',
            formatter: params => {
              return params.marker + ' ' + params.name + '：' + params.value + ' (' + params.percent + '%)';
            }
          },
          legend: {
            show: true,
            left: '15',
            top: 0,
            type: 'scroll',
            itemWidth: 18,
            itemHeight: 11,
            data: ['北京', '上海', '广州', '深圳', '济南', '成都']
          },
          series: [
            {
              name: '技术占比',
              type: 'pie',
              icon: 'circle',
              radius: ['35%', '55%'],
              center: ['48%', '55%'],
              roseType: 'radius',
              data: [
                {
                  name: '北京',
                  value: 254
                },
                {
                  name: '上海',
                  value: 136
                },
                {
                  name: '广州',
                  value: 292
                },
                {
                  name: '深圳',
                  value: 192
                },
                {
                  name: '济南',
                  value: 650
                },
                {
                  name: '成都',
                  value: 450
                }
              ],
              label: {},
              labelLine: {
                normal: {
                  show: true
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
