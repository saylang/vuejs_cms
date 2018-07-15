<template>
    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="login-content card">
                        <div class="login-form">
                            <h4>Đăng nhập</h4>
                            <div class="form-group">
                                <label>Địa chỉ email</label>
                                <input type="email" v-model="email" class="form-control" placeholder="Địa chỉ email">
                            </div>
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" v-model="password" class="form-control" placeholder="Mật khẩu">
                            </div>
                            <div class="checkbox">
                                <label>
                                        <input type="checkbox"> Nhớ tài khoản
                                    </label>
                                <label class="pull-right">
                                        <a href="#">Quên mật khẩu?</a>
                                    </label>

                            </div>
                            <button @click="login" class="btn btn-primary btn-flat m-b-30 m-t-30">Đăng nhập</button>
                            <div class="register-link m-t-15 text-center">
                                <p>Bạn chưa có tài khoản ? <a href="#"> Đăng ký tại đây</a></p>
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
    name: 'Login',
    data () {
        return {
			email: '',
            password: '',
            error: null
		}
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.access_token).then(response => {
                    // redirect
                    console.log(response);
                    if(this.$route.query.redirect != 'underfined'){
                        this.$router.push({ name: this.$route.query.redirect})
                    }else{
                        this.$router.push({ name: "Home"})
                    }
                }, error => {
                    console.error('Got nothing from server. Prompt user to check internet connection and try again')
                })
            } catch (error) {
                //console.log(error.status)
            }
        }
    }
}
</script>
