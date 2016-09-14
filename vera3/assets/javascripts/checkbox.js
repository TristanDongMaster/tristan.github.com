;(function($,vera){
	vera.checkbox = new Checkbox();

	//checkbox
	function Checkbox(){
		//checkbox checkkbox-default checkkbox-selected checkkbox-disabled
		var self = this;
		self.get = function(selector){
			var val = $(selector).find('.checkbox').hasClass('checkkbox-selected');
			return val;
		};
		self.set = function(selector,value){
			var checkkbox = $(selector).find('.checkbox');
			if(checkkbox.hasClass('checkkbox-disabled')){
				return false;
			}
			if(value){ // true
				checkkbox.removeClass('checkkbox-default').addClass('checkkbox-selected');
			}
			else{
				checkkbox.removeClass('checkkbox-selected').addClass('checkkbox-default');
			}
		};
		self.toggle = function(selector){
			var checkkbox = $(selector).find('.checkbox');
			if(checkkbox.hasClass('checkkbox-disabled')){
				return false;
			}
			if(checkkbox.hasClass('checkkbox-default')){
				checkkbox.removeClass('checkkbox-default').addClass('checkkbox-selected');
			}
			else{
				checkkbox.removeClass('checkkbox-selected').addClass('checkkbox-default');
			}
		};
	}
	$('[role="checkbox"]').tap(function(){
		vera.checkbox.toggle(this);
	});

})(Zepto,vera)