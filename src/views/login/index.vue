<template>
  <div class="login-container bgImg content">
    <div class="layout">
      <a-form-model
        :model="loginForm"
        :rules="loginRules"
        class="form-container"
        :wrapper-col="{ span: 22 }"
        ref="loginForm"
      >
        <div class="title">管理系统技术全家桶</div>
        <a-form-model-item prop="username">
          <a-input
            v-model="loginForm.username"
            placeholder="请输入账号 (dawei)"
            size="large"
            allow-clear
            @pressEnter="focusPassword"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input-password
            v-model="loginForm.password"
            placeholder="请输入密码 (dawei)"
            size="large"
            allow-clear
            @pressEnter="toLogin"
            ref="password"
          >
            <svg-icon icon="password" :size="14" slot="prefix"> </svg-icon>
          </a-input-password>
        </a-form-model-item>

        <a-form-item style="margin-top: -7px">
          <a-button type="primary" block size="large" :loading="loading" @click="toLogin"> 登录 </a-button>
        </a-form-item>
        <a-form-item style="margin-top: -7px">
          <a-checkbox v-model="loginForm.remember">记住密码</a-checkbox>
          <span class="forge-password pointer">忘记密码</span>
        </a-form-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import { isPassWord } from '@/utils/validate';
import { getCache, setCache, removeCache } from '@/utils/session';
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.trim().length === 0) {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!isPassWord(value)) {
        callback(new Error('请正确输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: '',
        remember: true
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    };
  },
  mounted() {
    const cache = getCache('LOGIN_INFO');
    if (cache) {
      this.loginForm.username = cache.username;
      this.loginForm.password = cache.password;
    }
  },
  methods: {
    focusPassword() {
      this.$refs.password.focus();
    },
    //登录
    toLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          const { username, password } = this.loginForm;
          this.$store
            .dispatch('user/login', { username, password })
            .then(() => {
              if (this.loginForm.remember) {
                setCache('LOGIN_INFO', { username, password });
                this.$router.push({
                  path: '/index'
                });
                this.loading = false;
              } else {
                removeCache('LOGIN_INFO');
              }
            })
            .catch(() => {
              setTimeout(() => {
                this.loading = false;
              }, 500);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  display: flex;
  height: 100vh;
  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    .form-container {
      width: 400px;
      .title {
        font-weight: 700;
        font-size: 1.8rem;
        padding-left: 5px;
        margin-bottom: 30px;
      }
      .tabs {
        margin: 15px 0;
      }
      .forge-password {
        font-size: 14px;
        float: right;
        color: #1890ff;
      }
    }
  }
}
</style>
<style lang="less">
.login-container {
  .ant-tabs-bar {
    border-bottom: none !important;
  }
  .ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 35px !important;
  }
  .ant-tabs-bar {
    margin-bottom: 30px !important;
  }
}
</style>
