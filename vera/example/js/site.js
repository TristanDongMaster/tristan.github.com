$(function(){
	$('.J-openModal').on('tap',function(){
		$('#someFullpageModal').modal('show');
	});
	$('.J-clicktrace').tap(function(){
		$.trace('你好啊帅哥')
	})
	
	$('.J-clickPageload').tap(function(){
		vera.loading('show');
		setTimeout(function(){
			vera.loading('hide');
		},5000)
	})

	$('.J-demo-btnloading').tap(function(){
		var btn = '.J-demo-btnloading';
		var isloading = vera.buttonLoading(btn) 
		if(isloading){
			vera.buttonLoading(btn,'off');
		}
		else{
			vera.buttonLoading(btn,'on')
		}
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

	/**********  使用脚本生成一个弹出框   ***********/
	/*!
	 * 	设置
	 *	@id 	    {string}         
	 *	@title		{string}
	 *	@body		{string}    弹出框文本内容
	 *  @footer     {object}	ok:确定按钮文字	cancel: 取消按钮文字
	 *	@event     {func}       show：监听弹框显示回调   hide：监听弹框关闭后回调 ok：监听弹框确定回调   cancel：监听弹框取消后回调
	 *	@type		{string}    默认值： dialog 指定值：blue（蓝色弹出框）
	*/

	/**********  普通弹出框   ***********/
	var data = { id:"test001",
			title:"温馨提示",
			footer:{cancel:"取消"},
			body:"<p>JS动态创建弹出框</p>",
			event:{
				show: function(){
					console.log("show1");
				},
				hide: function(){
					console.log("hide1");
				},
				cancel: function(){
					console.log("cancel1");
				},
				ok: function(){
					console.log("ok1");
				}
			},
			type:"dialog"
		};
	var $dialog = vera.Dialog(data);
	$(".dialog_test_js").on('tap', function(){
		$dialog.dialog("show");
	});

	/**********  蓝色弹出框   ***********/
	var dataToast = { id:"test002",
			title:"提示信息",
			body:"<p>JS动态创建弹出框</p>",
			footer:{ok:"确定"},
			event:{
				hide: function(){
					console.log("hide1");
				},
				cancel: function(){
					console.log("cancel1");
				},
				ok: function(){
					console.log("ok1");
				}
			},
			type:"blue"
		};
	var $dialogToast = vera.Dialog(dataToast);
	$(".dialog_toast_js").on('tap', function(){
		$dialogToast.dialog("show");
	});

	/**********   手动注册dialog事件   ***********/
	$dialogToast.on("dialog:show", function(){
		console.log("this is manual event for show dialog");
	});


	/**********  使用脚本生成一个开关按钮   ***********/
	/*!
		 * 	设置
		 *	@id 	    {string}         
		 *	@status		{string}		   只有"on" 或 "off"，不设默认"off"
		 *	@parent 	{#id .class div}   不设默认添加到body
		 	@events     {func}             on：监听到开后回调   off：监听到关后回调
		 */
	var testData = { 
		parent : "#J_switcher_wrapper",
		id     : "switcher_001" , 
		/*status : "on" , */
		events : {
			/*on : function(){
				console.log('the switcher on');
			},*/
			off : function(){
				console.log('script switch-btn off from init');
			}
		}
	};
	var switcher = vera.Switcher(testData);

	/**********   其他按钮控制脚本生成的开关状态   ***********/
	$('#J_opt_scriptswitch').tap( function(){
		switcher.switcher( 'on' , function(){
			console.log('script switch-btn on via others');
		});
	});

	/**********   手动注册script开关switcher事件   ***********/
	$('#J_switcher_wrapper').on( 'switcher:on' , switcher , function(){
		console.log('script switch-btn on from event');
	});
    

	/**********   其他按钮控制dom开关状态   ***********/
    $('#J_opt_switch').tap( function(){
    	$('#J_switcher_test').switcher( 'off' , function(){
    		console.log('dom switch-btn off via others');
    	});
    });

    /**********   手动注册dom开关switcher事件   ***********/
	$('#J_switcher_test').on( 'switcher:on' , function(){
		console.log('dom switch-btn on');
	});
});