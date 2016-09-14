;(function($,vera){
	//button loading 
	$.fn.button = function(option){
		var text = '';
		if(typeof option === 'undefined'){
			return false;
		}
		if(option.disabled){
			text = this.text();
			this.attr('data-text',text).removeClass('btn-red').addClass('btn-diasbled').text('安全加载中...');
		}
		else {
			text = this.data('text');
			this.removeClass('btn-diasbled').addClass('btn-red').text(text);
		}

	};

	/**
	dom 	 : string 
	action 	 : string 'on' 'off'
	callback : function
	**/
	vera.buttonLoading = function(dom,action,callback){
		var wrap = $(dom).find('.btn-loading-wrap')
		//返回btn是否处于loading状态
		if(typeof action==='undefined' && typeof callback==='undefined'){
			return $(wrap).hasClass('btn-loading-wrap-on')
		}
		//on ,turn on loading
		if(action==='on'){
			$(wrap).addClass('btn-loading-wrap-on')
		}
		//off,turn off loading
		else if(action==='off'){
			$(wrap).removeClass('btn-loading-wrap-on')
		}
		if(typeof callback==='function'){
			callback();
		}
	}
})(Zepto,vera)