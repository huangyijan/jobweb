new Vue ({
	el: '#Loin_register',
	data () {
		return {
			loginNameVerification: false,
			loginPswVerification: false,
			registerNameVerification: false,
			registerPswVerification: false,
			loginUserName: '',
			loginPsw: '',
			registerUser: '',
			registerPsw: '',
			loginType: true,
			loginError: false,
			registerSuccess: false,
			registerError: false
		}
	},
	mounted () {
		console.log(2222)
	},
	methods: {
		changeType (flag) {
			this.loginType = flag
			console.log(flag)
		},
		// 登录
		login () {
			console.log(1111)
			if (this.loginUserName === '') {
				this.loginNameVerification = true
			} else {
				this.loginNameVerification = false
			}
			if (this.loginPsw.length < 6 || this.loginPsw.length > 16) {
				this.loginPswVerification = true
			} else {
				this.loginPswVerification = false
			}
			console.log(this.loginPsw.length < 6 || this.loginPsw > 16)
			if (this.loginNameVerification === false && this.loginPswVerification === false) {
				$.ajax({
					url: 'https://hyjweb.cn/api/login?name=' + this.loginUserName + '&password=' + this.loginPsw,
					type: 'get',
					success: (res) => {
						if (res.code === 3 || res.code === 0) { // "用户不存在或者密码错误"
							this.loginError = true
						} else {
							this.loginError = false
							console.log(res)
							if(res.code===1){
								window.sessionStorage.setItem('personInfo',JSON.stringify(res.data.info[0]))
                                window.location.href = '../../../job/home/index.html' // 登录成功，跳到主页面
                            }
						}
					}
				})
			}
		},
		register () {
			if (this.registerUser === '') {
				this.registerNameVerification = true
			} else {
				this.registerNameVerification = false
			}
			if (this.registerPsw === '' || this.registerPsw.length < 6 || this.registerPsw.length > 16) {
				this.registerPswVerification = true
			} else {
				this.registerPswVerification = false
			}
			if (this.registerNameVerification === false && this.registerPswVerification === false) {
				$.ajax({
					url: 'https://hyjweb.cn/api/register?name=' + this.registerUser + '&password=' + this.registerPsw,
					type: 'get',
					success: (res) => {
						if (res.code === 2 || res.code === 0) {
							this.registerError = true
						}
						if (res.code === 1) {
							this.registerError = false
							this.registerSuccess = true
							setTimeout(() => {
								this.loginType = true
								this.registerSuccess = false
							}, 500)
						}
					}
				})
			}
		}
	}
})
