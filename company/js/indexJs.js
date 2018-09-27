var app = new Vue({
	el: '#companyXiao',
	data: {
		company: [],
		pageSize: 0, // 总页码数量
		page: 1, // 当前页码
		pageContent: [1, 2, 3, '····']
	},
	mounted(){
		this.getCompany() //获取数据
	},
	methods:{
		//获取数据
		getCompany () {
			$.ajax({
				url: 'https://hyjweb.cn/api/company?page=' + this.page,
				type: 'get',
				dataType: 'json',
				success: (data) => {
					console.log('2222')
					this.company = data.message.data.result
					console.log(data.message.data)
					this.$nextTick(() => {
						this.pageSize = data.message.data.pageSize
					})
					this.company.forEach((item, index) => {
						item.companyLogo = 'http://www.lgstatic.com/thumbnail_200x200/' + item.companyLogo
					})
	      }
			})
		},
		// 跳转至公司详情页面
    turnPage (id) {
    	console.log(id)
			window.location.href='https://www.lagou.com/gongsi/' + id + '.html'
		},
		changPage (index) {
			this.page = index
			this.getCompany()
		}
	}
})

