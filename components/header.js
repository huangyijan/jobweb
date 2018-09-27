Vue.component('header_nav', {
    template: `<!--导航栏Top-->
    <div id="navi">
        <ul class="navi-list" style="letter-spacing: 5px">
            <li>
                <a href="../home/index.html">首页</a>
            </li>
            <li>
                <a href="../company/index.html">公司</a>
            </li>
            <li>
                <a href="#">校园</a>
            </li>
            <li>
                <a href="#">言职</a>
            </li>

        </ul>
        <ul class="navi-login" style="letter-spacing: 3px">
            <li>
                <a href="../login/login.html">登录</a>
            </li>
            <li><span>|</span></li>
            <li>
                <a href="">注册</a>
            </li>
        </ul>
    </div>`
})
