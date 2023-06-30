<template>
  <div class="userInfo-wrapper">
    <a-row :gutter="16">
      <a-col :span="7">
        <a-card :hoverable="true" :bordered="false">
          <div class="accountInfo">
            <img src="../../../assets/nav/user.gif" alt="" class="accountImg" />
            <div class="username">{{ accountInfo.username }}</div>
            <div class="userRole">{{ accountInfo.roleString }}</div>
          </div>
          <div class="accountMajor">
            <template v-for="(v, k) in accountInfo">
              <div
                class="major-wrapper"
                :key="k"
                v-if="
                  !['id', 'key', 'date', 'username', 'role', 'password', 'text', 'roleIds', 'roleString'].includes(k)
                "
              >
                <svg-icon :icon="k" class="vertical-bottom" />
                <span class="major-name">{{ v }}</span>
              </div>
            </template>
          </div>
          <a-divider />
          <div class="tabList">
            <p>标签</p>
            <template v-for="item in tagList">
              <a-tag :key="item.title" style="margin-bottom: 6px" closable :color="item.color">
                {{ item.title }}
              </a-tag>
            </template>
            <a-input
              v-if="addInputShow"
              ref="input"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              v-model="tagValue"
              @blur="inputConfirm"
              @keyup.enter="inputConfirm"
            />
            <a-tag v-else style="cursor: pointer" @click="writeInput"> <a-icon type="plus" /> New Tag </a-tag>
          </div>
          <a-divider />
          <div class="skillList">
            <p>技能</p>
            <div class="skill-wrapper" v-for="item in skillList" :key="item.title">
              {{ item.title }}
              <a-progress :percent="item.value" :status="item.status" />
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="17">
        <a-card :bordered="false" :tab-list="tabList" :active-tab-key="currentKey" @tabChange="changeTab">
          <component :is="currentKey" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { articlePage, dynamicPage, noticePage } from './components';
export default {
  name: 'userInfo',
  components: { dynamicPage, articlePage, noticePage },

  data() {
    return {
      tabList: [
        {
          key: 'dynamicPage',
          tab: '动态'
        },
        {
          key: 'articlePage',
          tab: '文章'
        },
        {
          key: 'noticePage',
          tab: '通知'
        }
      ],
      currentKey: 'dynamicPage',
      skillList: [
        {
          title: 'Vue',
          value: 95,
          status: 'active'
        },
        {
          title: 'React',
          value: 90,
          status: 'active'
        },
        {
          title: 'Java',
          value: 60,
          status: 'active'
        },
        {
          title: 'Vue-cli | Create-react-app',
          value: 100,
          status: 'success'
        },
        {
          title: 'Flutter',
          value: 40,
          status: 'exception'
        }
      ],
      tagList: [
        {
          title: '大伟聊前端',
          color: '#1890FF'
        },
        {
          title: '玩转Vue-cli脚手架',
          color: '#52C41A'
        },
        {
          title: '分享技术',
          color: '#52C41A'
        },
        {
          title: '深度简历优化指导',
          color: '#1890FF'
        },
        {
          title: '前端训练营',
          color: '#F5222D'
        }
      ],
      addInputShow: false,
      tagValue: ''
    };
  },
  computed: {
    ...mapState({
      accountInfo: state => state.user.accountInfo
    })
  },
  created() {
    this.currentKey = this.$route.params.key || 'dynamicPage';
  },
  methods: {
    changeTab(key) {
      this.currentKey = key;
    },

    inputConfirm() {
      const value = this.tagValue.trim();
      let tagList = this.tagList;
      if (value && this.tagList.findIndex(item => item.title == value) == -1) {
        tagList = [...tagList, { title: value, color: '#1890FF' }];
      }
      Object.assign(this, {
        tagValue: '',
        tagList: tagList,
        addInputShow: false
      });
    },
    writeInput() {
      this.addInputShow = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.accountInfo {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  .accountImg {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  .username {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 1.7rem;
    margin: 12px 0 3px 0;
  }
  .userRole {
    color: #999;
    font-size: 0.8rem;
  }
}
.major-wrapper {
  margin-bottom: 5px;
  .major-name {
    margin-left: 10px;
  }
}
.skill-wrapper {
  margin-bottom: 10px;
}
</style>
