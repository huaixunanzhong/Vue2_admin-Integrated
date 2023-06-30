const Mock = require('mockjs');

const xDataList = {
  day: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'],
  week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
  month: Mock.Random.range(1, 31),
  year: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
};

function lineData(type) {
  return Array.from({ length: xDataList[type].length }, () => {
    return Mock.mock('@natural(20,2000)');
  });
}

function rankData() {
  let obj = Mock.mock({
    'name|10': {
      抖音大伟: '@natural(20,2000)',
      B站大伟: '@natural(20,2000)',
      视频号前端: '@natural(20,2000)',
      西瓜视频: '@natural(20,2000)',
      大伟聊前端1: '@natural(20,2000)',
      大伟聊前端2: '@natural(20,2000)',
      大伟聊前端3: '@natural(20,2000)',
      大伟聊前端4: '@natural(20,2000)',
      大伟聊前端5: '@natural(20,2000)',
      大伟聊前端6: '@natural(20,2000)',
      大伟聊前端7: '@natural(20,2000)',
      大伟聊前端8: '@natural(20,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      area: i,
      value: obj.name[i]
    });
  }
  return list.sort((a, b) => {
    return b.value - a.value;
  });
}

function pieData() {
  let obj = Mock.mock({
    'name|6': {
      前端: '@natural(100,500)',
      Vue: '@natural(100,500)',
      React: '@natural(100,500)',
      Java: '@natural(100,500)',
      Go: '@natural(100,500)',
      Flutter: '@natural(100,500)',
      Gis: '@natural(100,500)',
      Threejs: '@natural(100,500)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      name: i,
      value: obj.name[i]
    });
  }
  return list;
}

function hotData() {
  let obj = Mock.mock({
    'name|15': {
      '西瓜视频-大伟聊前端': '@natural(500,2000)',
      '抖音-大伟聊前端': '@natural(500,2000)',
      '视频号-大伟聊前端': '@natural(500,2000)',
      'B站-大伟聊前端': '@natural(500,2000)',
      大伟聊前端: '@natural(500,2000)',
      'Vue-Cli最佳实战': '@natural(500,2000)',
      前端训练营: '@natural(500,2000)',
      面试辅导: '@natural(500,2000)',
      简历深度优化: '@natural(500,2000)',
      React最佳实战: '@natural(500,2000)',
      'Vue3 + Vite': '@natural(500,2000)',
      '大伟聊前端-知识星球': '@natural(500,2000)',
      知识星球: '@natural(500,2000)',
      简历亮点: '@natural(500,2000)',
      面试辅导: '@natural(500,2000)',
      大文件上传: '@natural(500,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      name: i,
      value: obj.name[i]
    });
  }
  return list;
}

function moreData() {
  let obj = Mock.mock({
    'name|6': {
      字节跳动: '@natural(500,2000)',
      百度: '@natural(500,2000)',
      滴滴: '@natural(500,2000)',
      美团: '@natural(500,2000)',
      商汤科技: '@natural(500,2000)',
      第四范式: '@natural(500,2000)',
      比亚迪研发: '@natural(500,2000)',
      抖音集团: '@natural(500,2000)',
      西瓜视频: '@natural(500,2000)',
      联想: '@natural(500,2000)',
      新浪: '@natural(500,2000)',
      腾讯: '@natural(500,2000)',
      小米: '@natural(500,2000)',
      华为: '@natural(500,2000)',
      网易: '@natural(500,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    let random = Math.floor(Math.random() * obj.name[i]);
    list.push({
      name: i,
      male: random,
      female: obj.name[i] - random,
      value: obj.name[i]
    });
  }
  return list;
}

module.exports = [
  {
    url: '/dashboard/lineChart',
    type: 'post',
    response: config => {
      const { type } = config.body;
      console.log('type----', type);
      return {
        data: {
          xData: xDataList[type],
          yData: lineData(type),
          lastData: lineData(type)
        },
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/rankData',
    type: 'post',
    response: config => {
      return {
        data: rankData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/pieTypeData',
    type: 'post',
    response: config => {
      return {
        data: pieData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/hotSearchData',
    type: 'post',
    response: config => {
      return {
        data: hotData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/moreData',
    type: 'post',
    response: config => {
      return {
        data: moreData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  }
];
