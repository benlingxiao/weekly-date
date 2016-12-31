// artDialog - 默认配置
var artdialog = {
	/**
	 * 提示框
	 * @param {String} content
	 * @param {Function()} callback
	 */
	alert : function(content,callback){
		var html = artdialog.createHtml(content);
		if($('#file-error').length<1){
			$('body').append(html);
		}else{
			$('#file-error').find('.dialog_label').text(content);
		}
		$('#file-error').fadeIn(300);
		
		/**
		* 隐藏提示
		*/
		$(document).off('touchend','#file-error-close').on('touchend','#file-error-close',function(){
			$('#file-error').hide(300);
			if(callback){
				callback();
			}
		});
	},
	confirm : function(content,callback){
		var html = artdialog.createSubHtml(content);
		if($('#confirm').length<1){
			$('body').append(html);
		}else{
			$('#confirm').find('.dialog_label').text(content);
		}
		$('#confirm').fadeIn(300);
		
		/**
		 * 隐藏提示
		 */
		$(document).off('touchend','#notice-cancel-close').on('touchend','#notice-cancel-close',function(){
			$('#confirm').fadeOut(300);
		});
		$(document).off('touchend','#notice-ok-close').on('touchend','#notice-ok-close',function(){
			$('#confirm').fadeOut(300);
			if(callback){
				callback();
			}
		});
	},
	createHtml: function(content){
		while (content.indexOf("\n") != -1) {
			content = content.replace('\n','<br />');
		}
		var	html ='	<div id="file-error" class="weui_dialog_alert display-none">';
			html+='	    <div class="weui_mask"></div>';
			html+='	    <div class="weui_dialog">';
			html+='	        <div class="weui_dialog_hd"><strong class="weui_dialog_title">提示</strong></div>';
			html+='	        <div class="weui_dialog_bd dialog_label">'+content+'</div>';
			html+='	        <div class="weui_dialog_ft">';
			html+='	            <a id="file-error-close" href="javascript:void(0);" class="weui_btn_dialog primary">确定</a>';
			html+='	        </div>';
			html+='	    </div>';
			html+='	</div>';
		return html;
	},
	createSubHtml: function(content){
		while (content.indexOf("\n") != -1) {
			content = content.replace('\n','<br />');
		}
		
		var	html ='	<div class="weui_dialog_confirm" id="confirm" style="display: none;">';
		html+='	    <div class="weui_mask"></div>';
		html+='	    <div class="weui_dialog">';
		html+='	        <div class="weui_dialog_hd"><strong class="weui_dialog_title">提示</strong></div>';
		html+='	        <div class="weui_dialog_bd">'+content+'</div>';
		html+='	        <div class="weui_dialog_ft">';
		html+='	            <a href="javascript:void(0)" id="notice-cancel-close" class="weui_btn_dialog default">取消</a>';
		html+='	            <a href="javascript:void(0)" id="notice-ok-close" class="weui_btn_dialog primary">确定</a>';
		html+='	        </div>';
		html+='	    </div>';
		html+='	</div>';
		return html;
	}
};
