export default {
  install(Vue) {
    Vue.prototype.THEME_LIST = [
      {
        label: '混合主题',
        key: 'mixins'
      },
      {
        label: '浅色主题',
        key: 'white'
      },
      {
        label: '深色主题',
        key: 'dark'
      }
    ];
    Vue.prototype.SKILL_LIST = [
      {
        label: '前端训练营',
        key: 1
      },
      {
        label: '深度优化简历',
        key: 2
      },
      {
        label: 'Webpack5前端面试题',
        key: 3
      },
      {
        label: 'React最佳实践',
        key: 4
      },
      {
        label: 'Vue3',
        key: 5
      },
      {
        label: 'TypeScript',
        key: 6
      },
      {
        label: 'React Hooks',
        key: 7
      },
      {
        label: 'Flutter',
        key: 8
      },
      {
        label: 'Electron',
        key: 9
      },
      {
        label: '996',
        key: 10
      }
    ];

    Vue.prototype.LAYOUT_LIST = [
      {
        label: '左侧导航',
        key: 'inline'
      },
      {
        label: '头部导航',
        key: 'horizontal'
      }
    ];
  }
};
