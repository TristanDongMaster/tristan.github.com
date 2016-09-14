;(function($,vera){
	//get uid
	function getID(){
		var num = new Date();
		num = num.getTime();
		return "dialog_" + num;
	}

	function defaultData(data){
		if(data==""|| data== null || data==undefined){
			data = {};
		}
		var result = {id:getID(),
				title:"",
				body:"<h1>内容为空</h1>",
				type:"dialog"
				};
		result = $.extend(true, result, data);
		this.result = result;
	}

	defaultData.prototype.getDialogHTML = function(){
		var data = this.result;
		var type = "";
		if(data.type == "blue"){
			type = "dialog-blue";
		}
		var dialogTemplate = '<div class="dialog-overlay '+ type +'   " id= '+data.id+'  role="dialog">'+
							 '<div class="dialog-container">'+
								'<div class="dialog-table-row">'+
									'<div class="dialog-table-cell">'+
										'<div class="dialog-content">';
		if(data.title != "" && data.title != undefined){
			dialogTemplate += '<div class="dialog-header">'+
									'<div class="dialog-title">'+
										'<span class="title">'+
										data.title +
										'</span>'+
										'<a href="javascript:void(0)" class="close-btn" data-dialog data-action="hide" >'+
											'<i class="icon-cross "  ></i>'+
										'</a>'+
									'</div>'+
								'</div>';
		}							
		dialogTemplate +='<div class="dialog-body">'+
						  data.body +
						'</div>';
		if(data.footer){
			var col50 = "col-50";
			if(data.footer.cancel==undefined||data.footer.ok==undefined){
				col50 = "";
			}
			dialogTemplate += '<div class="dialog-footer">';
			if(data.footer.cancel!=undefined && data.footer.ok!=undefined){
				dialogTemplate += '<a class="col ' + col50 + ' dialog-action action-left" data-dialog data-action="cancel">'+
										 data.footer.cancel + 
									'</a>';
				dialogTemplate += '<a class="col ' + col50 + ' dialog-action action-right" data-dialog data-action="ok">'+
										 data.footer.ok +
									'</a>';
			}
			else if(data.footer.ok!=undefined){
				dialogTemplate += '<a class="col ' + col50 + ' dialog-action" data-dialog data-action="ok">'+
										 data.footer.ok +
									'</a>';
			}
			else if(data.footer.cancel!=undefined){
				dialogTemplate += '<a class="col ' + col50 + ' dialog-action" data-dialog data-action="ok">'+
										 data.footer.cancel +
									'</a>';
			}
			dialogTemplate += 	'</div>';
		}
		dialogTemplate += '</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'</div>'+
		'</div>';
		$(dialogTemplate).appendTo("body");	
		this.bindDialogEvent();
	}

	defaultData.prototype.bindDialogEvent = function(){
		var data = this.result;
		var $obj = $("#" + data.id);
		if(data.event){
			if(data.event.show){
				$obj.on("dialog:show", function(){
					data.event.show();
				});
			}
			if(data.event.hide){
				$obj.on("dialog:hide", function(){
					data.event.hide();
				});
			}
			if(data.event.ok){
				$obj.on("dialog:ok", function(){
					data.event.ok();
				});
			}
			if(data.event.cancel){
				$obj.on("dialog:cancel", function(){
					data.event.cancel();
				});
			}
		}
	}

	vera.Dialog = function(data){
       var obj =  new defaultData(data);
       obj.getDialogHTML();
       return $("#" + obj.result.id);
    };

	//show hide
	$.fn.dialog = function(option, callback){
		$this = this;
		$container = $this.find(".dialog-container");
		if(option==='show'){
			$this.show();
			$container.addClass("dialog-show");
			if(callback){
				callback();
			}
			// trigger the show event
			$this.trigger('dialog:show');
			$('body').on("touchmove.dialog",function(e){ 
				if($(e.target).closest(".dialog-body").length&& ($(e.target).closest(".dialog-body").height()>=300)){
					return;  
				}
				else{
					 e.preventDefault();  
					}
		         return;
		    }); 
		}
		else if(option==='hide'||option==='cancel'||option==='ok'){
			$container.removeClass("dialog-show");
			var t = setTimeout(function(){
				$this.hide();
				clearTimeout(t);
			},300)
			
			if(callback){
				callback();
			}
			//trigger the hide event
			$this.trigger("dialog:" + option);
			if(option!='hide'){
				$this.trigger("dialog:hide");
			}
			$('body').off("touchmove.dialog"); 
		}
	};

	//dialog dom ctrl
	$('body').on('tap','[data-dialog]',function(e){
		if($(this).hasClass("disabled")){
			return;
		}
		var modalId = $(this).data('dialog'),
			action = $(this).data('action');
		if (modalId==''){
			modalId = "#" + $(this).closest(".dialog-overlay").attr("id");
		}	
		if (action==''||modalId==''|| modalId == undefined) {
			return false;
		}
		if(action==='show'){
			$(modalId).dialog('show');
		}
		else if(action==='hide'||action==='cancel'||action==='ok'){
			$(modalId).dialog(action);
		}
		else{
			console.log("dialog属性值错误");
		}
	});

	$('body').on('touchstart','.dialog-action',function(e){
		$(e.target).addClass('touching')
	});

	$('body').on('touchend','.dialog-action',function(e){
		$(e.target).removeClass('touching')
	});
})(Zepto,vera);