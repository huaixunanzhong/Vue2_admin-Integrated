<template>
  <div class="article-wrapper">
    <a-list item-layout="vertical" :data-source="data" size="large">
      <a-list-item slot="renderItem" slot-scope="item">
        <template slot="actions">
          <span><a-icon type="star-o" style="margin-right: 8px" /> {{ item.star }}</span>
          <span> <a-icon type="like-o" style="margin-right: 8px" /> {{ item.like }}</span>
          <span><a-icon type="message" style="margin-right: 8px" /> {{ item.message }}</span>
        </template>
        <a-list-item-meta>
          <a slot="title" :href="item.url" target="_blank" style="font-size: 1rem">{{ item.title }}</a>
          <div slot="description" class="listDescription">
            <template v-for="tag in item.tagList">
              <a-tag :key="tag.title" style="margin-bottom: 6px" :color="tag.color">
                {{ tag.title }}
              </a-tag>
            </template>
            {{ item.time }}
            <div style="margin: 7px 0 5px">{{ item.description }}</div>
          </div>
        </a-list-item-meta>
      </a-list-item>
      <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px">
        <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>
      </div>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'articlePage',
  data() {
    return {
      data: [
        {
          title: '一. 前端开发的万能公式',
          url: 'https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI?modal_id=7149104776121175337',
          tagList: [
            {
              title: '前端开发的万能公式',
              color: '#1890FF'
            },
            {
              title: '前端开发',
              color: '#52C41A'
            }
          ],
          star: 175,
          like: 230,
          message: 15,
          time: '2022-10-18',
          description:
            '写代码没有思路，组件怎么拆分更合理，数据结构如何定义，可以用万能公式手册作为指导，掌握诀窍才是关键核心的点'
        },
        {
          title: '二. Vue+ Echarts图标最佳实战',
          url: 'https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI?modal_id=7148722053011524904&vid=7148722053011524904',
          tagList: [
            {
              title: 'Vue',
              color: '#1890FF'
            },
            {
              title: 'Echarts',
              color: '#1890FF'
            },
            {
              title: '配置分离',
              color: '#1890FF'
            },
            {
              title: '最佳实践',
              color: '#52C41A'
            }
          ],
          star: 2800,
          like: 1250,
          message: 960,
          time: '2022-10-18',
          description: '前端Vue技术栈和图表Echarts最佳实践，组件的拆分和配置文件的分离'
        },
        {
          title: '三. 前端实现一个Iphone灵动岛动画',
          url: 'https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI?modal_id=7151544476169719080',
          tagList: [
            {
              title: 'CSS3',
              color: '#1890FF'
            },
            {
              title: '动画',
              color: '#1890FF'
            },
            {
              title: 'IPhone14',
              color: '#1890FF'
            },
            {
              title: '前端',
              color: '#52C41A'
            }
          ],
          star: 1750,
          like: 1450,
          message: 195,
          time: '2022-10-20',
          description: 'TypeScript初体验，并在vue中实践，值类型声明和全面添加ESLint。'
        }
      ],
      loadingMore: false
    };
  },
  methods: {
    loadMore() {
      this.loadingMore = true;
      const data = [...this.data];
      this.data = this.data.concat(data.reverse());
      setTimeout(() => {
        this.loadingMore = false;
      }, 350);
    }
  }
};
</script>
<style lang="less" scoped>
.listDescription {
  margin: 10px 0 1px;
  color: #666;
}
</style>
