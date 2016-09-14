;(function($,vera){
	var modalShowClass = 'modal-show';
	//modal
	function Modal(){
		var self = this;
		self.show = function(selector){
			$(selector).addClass(modalShowClass);
		}
		self.hide = function(selector){
			$(selector).removeClass(modalShowClass);
		}
	}
	vera.modal = new Modal();

	//modal
	//show hide
	$.fn.modal = function(option){
		if(option==='show'){
			this.addClass(modalShowClass);
		}
		else if(option==='hide'){
			this.removeClass(modalShowClass);
			$('body').css('overflow','auto')
		}
	};

	//modal dom ctrl
	$('body').on('tap','[data-modal]',function(e){
		var target = e.target,
			modalId = $(target).data('modal'),
			action = $(target).data('action');
		if (modalId==''){
			return false;
		}	
		if (action=='') {
			return false;
		}
		if(action==='show'){
			$(modalId).modal('show');
		}
		else if(action=='hide'){
			$(modalId).modal('hide');
		}
	});
})(Zepto,vera)