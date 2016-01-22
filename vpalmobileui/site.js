$(function(){
	$('.J-openModal').on('tap',function(){
		$('#someFullpageModal').modal('show');
	});
	$('.J-clicktrace').tap(function(){
		$.trace('你好啊帅哥')
	})
	
	$('.J-clickPageload').tap(function(){
		$.loading('show');
		setTimeout(function(){
			$.loading('hide');
		},5000)
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

	//
	var $listItem = $('.J-list-touch-test .item');

	var t0 = 0;
	$('#J-list-touch-test').on('touchstart',function(){
		var t1 = new Date().getTime();
		t0 = t1
		console.log(t1)
	})

	$('#J-list-touch-test').on('touchend',function(){
		var t1 = new Date().getTime();
		console.log('touchend',t1,t1-t0)
	})

	$('#J-list-touch-test').on('click',function(){
		var t1 = new Date().getTime();
		console.log('click',t1,t1-t0)
	})
	// var tag = document.getElementById('J-list-touch-test');
	// tag.addEventListener('click',function(){
	// 	var t1 = new Date().getTime();
	// 	console.log(t1)
	// })
	// tag.addEventListener('touch',function(){
	// 	var t1 = new Date().getTime();
	// 	console.log(t1)
	// })


});