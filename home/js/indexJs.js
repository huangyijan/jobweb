var app = new Vue({
	el: '#bigbox',
	data: {
		arr: []
	},
	created(){
		let that = this
		$.ajax({
			url: 'https://hyjweb.cn/api/getjop',
			type: 'get',
			dataType: 'json',
			success: (data) => {
				that.arr = data
            }
		})
	},
	methods:{
        goDetail(id){
        	window.sessionStorage.setItem('id',id)
			window.location.href='../../../job/offer_detail/zhaoPingMes.html'
		}
	}
})
window.onload=function(){
	var list=document.getElementById('list');
		var i=0;  //自增下标
		/*把ul的第一个孩子节点克隆*/
		var liClone=list.children[0].cloneNode(true);

		list.appendChild(liClone);/*把克隆的li添加到ul里面*/
		/*获取图片宽度*/
		var imgWid=list.children[0].children[0].offsetWidth;
		var length=list.children.length;/*获取ul孩子的数量*/
		list.style.width=imgWid*length+'px';/*设置ul的宽度*/
		console.log(list);

		var time=setInterval(play,3000);

		list.onmouseover=function(){
			clearInterval(time);
		}
		list.onmouseout=function(){
			time=setInterval(play,3000);
		}

		var prev=document.getElementsByClassName('prev')[0];
		prev.onclick=function(){
				clearInterval(time);
				var left=list.offsetLeft;
				if (left==0) {
					i=length-2;
					list.style.left=-i*imgWid+'px';
				}else{
					i--;
					list.style.left=-i*imgWid+'px';
				}
		}

		var next=document.getElementsByClassName('next')[0];
		next.onclick=function(){
				clearInterval(time);
				var left=list.offsetLeft;
				if (left==-(imgWid*(length-1))) {
					i=1;
					list.style.left=-i*imgWid+'px';
				}else{
					i++;
					list.style.left=-i*imgWid+'px';
				}
		}

		function play(){
			i++;
			if(i==length){
				i=1;
				list.style.left=0;
			}
			var scrTime=setInterval(function(){
				var left=list.offsetLeft; //获取元素left值的方法
				var target=-i*imgWid;  //定义每次到达的目标值
				var speed=(left-target)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (left==target) {
					clearInterval(scrTime);
				}
				list.style.left=left-speed+'px';
			},30)
		}



		var gtop=document.getElementById('go-top');

		gtop.onclick=function(){
			var timer=setInterval(function(){
				/*获取滚动条滚动的距离*/
				var scrolly=window.scrollY; /*2500*/
				console.log(scrolly);
				var speed=scrolly/20;
				var target=scrolly-speed;
				if (scrolly<=10) {
					target=0;
					clearInterval(timer);
				}
				window.scrollTo(0,target);
			},10)
			/*设置滚动条距离方法
			window.scrollTo(0,0);*/
		}
}


