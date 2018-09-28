Vue.component('header_nav', {
    data(){
        return {
            showPersonName: !!window.sessionStorage.getItem('personInfo'),
            userInfo:　window.sessionStorage.getItem('personInfo')
        }
    },
    methods:{
        logout(){
            window.sessionStorage.setItem('personInfo','')
            this.showPersonName = false
        }
    },
    template: `<!--导航栏Top-->
    <div id="navi">
        <ul class="navi-list" style="letter-spacing: 5px">
            <li>
                <a href="../home/index.html">首页</a>
            </li>
            <li>
                <a href="../company/index.html">公司</a>
            </li>
        </ul>
        <ul class="navi-login" style="letter-spacing: 3px">
            <li>
                <a href="../login/index.html" v-if="!showPersonName">登录</a>
                <a href="../person/file.html" v-if="showPersonName">{{JSON.parse(userInfo).name}}</a>
            </li>
            <li><span>|</span></li>
            <li>
                <a  v-if="!showPersonName">注册</a>
                <a href="../person/file.html" v-if="showPersonName">个人中心</a>
            </li>
            <li v-if="showPersonName"><span>|</span></li>
            <li v-if="showPersonName">
                <a href="#" @click="logout" v-if="showPersonName">退出登陆</a>
            </li>
        </ul>
    </div>`
})
