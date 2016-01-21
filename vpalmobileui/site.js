$(function(){
	$('.J-openModal').on('tap',function(){
		$('#someFullpageModal').modal('show');
	});
	$('.J-clicktrace').tap(function(){
		$.trace('你好啊帅哥')
	})
	
	$('.J-clickPageload').tap(function(){
		$.loading('show');
		// setTimeout(function(){
		// 	$.loading('hide');
		// },5000)
	})

	$('.J-demo-btnloading').tap(function(){
		var isBtnLoading = $(this).buttonLoading() 
		var self = this;
		$(self).buttonLoading('show',function(){console.log(3)});
		setTimeout(function(){
			$(self).buttonLoading('hide',function(){console.log(2)})
		},3000)
		if(isBtnLoading){
			return false;
		}
		// code goes here
		
	})
});