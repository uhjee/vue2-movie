<template>
  <div class="login-container">
    <div class="login-form-box">
      <el-form ref="login-form" :model="formData" label-width="30px">
        <el-form-item label="ID">
          <el-input v-model="formData.id"></el-input>
        </el-form-item>
        <el-form-item label="PW">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
      </el-form>

      <el-button :disabled="!isFullLoginForm" @click="onClickLogin" :style="{width: '100%'}">
        Log in
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      formData: {
        id: '',
        password: ''
      }
    }
  },
  computed: {
    isFullLoginForm() {
      return !!this.formData.id && !!this.formData.password;
    }
  },
  methods: {
    onClickLogin() {
      console.log({
        id: this.formData.id,
        password: this.formData.password
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282626;

  .login-form-box {
    width: 400px;
    border: 1px solid #999;
    padding: 28px 26px;
    border-radius: 4px;
    background-color: #fff;
  }
}
</style>
