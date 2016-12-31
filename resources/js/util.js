/**
 * 分享
 */
var share = function(id){
	//id是分享者的id
	
	//获取本页的完整url
	var url = encodeURI(window.location.href);
	/**
	 * 发送请求，返回分享所需要的参数
	 */
	$.ajax({
		type	: 'get',
		url		: '',//${_base}/raffle/raffling/${raffle.id}/${codeName}/{userCode}
		dataType: 'json',
		contentType: 'application/json',
		success:function(data){
			if (data.result == 'SUCCESS') {
			 	wx.config({
				    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				    appId:data.data.appid, // 必填，公众号的唯一标识
				    timestamp:data.data.timestamp, // 必填，生成签名的时间戳
				    nonceStr:data.data.noncestr, // 必填，生成签名的随机串
				    signature:data.data.signature,// 必填，签名，见附录1
				    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] 
				});
			}
		},
		error:function(){
			alert("系统异常");
		}
	});
	wx.ready(function(){
	    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
		wx.onMenuShareTimeline({
		    title: that.conference.name, // 分享标题
		    link: "http://www.mwicloud.com/mwi/pages/social/confEdit/indexDesignTem/template-1/pages/template-wechat-1.jsp?"+initPage.data.search, // 分享链接
		    imgUrl: 'http://www.mwicloud.com/mwi/resources/images/common/event-space3.png', // 分享图标
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});
		wx.onMenuShareAppMessage({
		    title: that.conference.name, // 分享标题
		    desc: "时间："+that.conference.beginTimeStr+'\n地点：'+that.conference.area+that.conference.addr, // 分享描述
		    link: "http://www.mwicloud.com/mwi/pages/social/confEdit/indexDesignTem/template-1/pages/template-wechat-1.jsp?"+initPage.data.search, // 分享链接
		    imgUrl: 'http://www.mwicloud.com/mwi/resources/images/common/event-space3.png', // 分享图标
		    type: 'link', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});
	});
}