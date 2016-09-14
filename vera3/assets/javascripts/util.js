//工具类
;(function($,vera){
	vera.util = {
		px2number: px2number
	}
	
	function px2number(strpx){
		var numstr = strpx.replace(/px/,'');
		return numstr*1;
	}
})(Zepto,vera)