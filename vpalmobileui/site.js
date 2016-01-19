$(function(){
	$('#openModal').on('tap',function(){
		$('#someFullpageModal').modal('show');
	});
	$('#clicktrace').tap(function(){
		$.trace('你好啊帅哥')
	})
	$('#clickdisabled').tap(function(){
		var self = this;
		$(self).button({disabled:true})
		setTimeout(function(){
			$(self).button({disabled:false})
		},3000)
	})
});