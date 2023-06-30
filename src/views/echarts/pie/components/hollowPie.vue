<template>
  <div ref="hollowPie"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'hollowPie',
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
      this.myChart = echarts.init(this.$refs.hollowPie);
      this.myChart.setOption(
        {
          color: colorLost,
          title: [
            {
              text: '85%',
              textStyle: {
                color: '#5171fd',
                fontSize: 25
              },
              top: 'center',
              left: 'center'
            }
          ],
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
            data: ['前端', '后端', 'React', 'Vue', 'Java', 'Go']
          },
          series: [
            {
              name: '消费类型',
              type: 'pie',
              icon: 'circle',
              radius: ['35%', '55%'],
              center: ['50%', '50%'],
              itemStyle: {
                normal: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              },
              data: [
                {
                  name: '前端',
                  value: 18
                },
                {
                  name: '后端',
                  value: 35
                },
                {
                  name: 'React',
                  value: 37
                },
                {
                  name: 'Vue',
                  value: 20
                },
                {
                  name: 'Java',
                  value: 36
                },
                {
                  name: 'Go',
                  value: 54
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
