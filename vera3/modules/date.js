export function format(date, fmt) {
	if (date =='' || date == undefined || fmt == "" || fmt == undefined || fmt == null) {
		return "";
	}
	var _date = new Date(date)
	if(_date=='Invalid Date'){
		return ''
	}
	var o = {
		"M+": _date.getMonth() + 1,
		//月份 
		"d+": _date.getDate(),
		//日 
		"h+": _date.getHours(),
		//小时 
		"m+": _date.getMinutes(),
		//分 
		"s+": _date.getSeconds(),
		//秒 
		"q+": Math.floor((_date.getMonth() + 3) / 3),
		//季度 
		"S": _date.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

