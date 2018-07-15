<template>
  <div class="unix-login">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-content card">
                    <div class="login-form">
                        <h4>Đăng ký</h4>
                        <div class="form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" v-model="username" class="form-control" placeholder="Tên đăng nhập">
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ email</label>
                            <input type="email" v-model="email" class="form-control" placeholder="Địa chỉ email">
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <button @click="register" class="btn btn-primary btn-flat m-b-30 m-t-30">Đăng ký</button>
                        <div class="register-link m-t-15 text-center">
                            <p>Đã có tài khoản ? <a href="/login"> Đăng nhập</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<!-- eslint-disable indent no-tabs -->
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	name: 'Register',
	data () {
		return {
            username: '',
			email: '',
			password: ''
		}
    },
    methods: {
        async register () {
            const response = await AuthenticationService.register({
                username: this.username,
                email: this.email,
                password: this.password
            })
            console.log(response)
        }
    }
}
</script>
