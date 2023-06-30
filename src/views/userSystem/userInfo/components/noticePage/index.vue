<template>
  <div class="notice-wrapper">
    <a-list item-layout="vertical" :data-source="data" size="large">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <p slot="title">
            {{ item.user }}
          </p>
          <a-avatar slot="avatar" :src="item.imgUrl" />
          <div slot="description">
            {{ item.description }}
            <div style="margin-top: 8px">{{ item.time }}</div>
          </div>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data() {
    return {
      data: [
        {
          user: '系统管理员',
          description: '系统管理员',
          imgUrl: require('../../../../../assets/nav/system.png'),
          time: '2022-10-16 19:25:45'
        },
        {
          user: '大伟聊前端',
          description: '前端训练营',
          imgUrl: require('../../../../../assets/nav/user.gif'),
          time: '2022-10-11  21:41:10'
        },
        {
          user: '系统管理员',
          description: '系统管理员',
          imgUrl: require('../../../../../assets/nav/system.png'),
          time: '2022-10-11  21:41:10'
        },
        {
          user: '大伟聊前端',
          description: '大伟聊前端---前端训练营',
          imgUrl: require('../../../../../assets/nav/user.gif'),
          time: '2022-10-19  21:45:10'
        }
      ]
    };
  }
};
</script>
