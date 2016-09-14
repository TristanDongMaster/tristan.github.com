/**
弹出App Dialog提示
param:{
    content: "",
    buttonType: "",
    buttonCenterText: "",
    buttonCenterEventMethod: "",
    buttonLeftText: "",
    buttonLeftEventMethod: "",
    buttonRightText: "",
    buttonRightEventMethod: ""
}
BUTTON_TYPE_CENTER: 中间一个按钮类型
BUTTON_TYPE_LEFTRIGHT: 左右两边都存在按钮类型
**/

import './style.less'
export function showDialog(param){
	var temp = 
		`
		<div class="vh5-mask">
			<div class="vh5-dialog">
                <div class="vh5-dialog-conent">
                     `+getConTemp(param.content)+`
                </div>
                `+getFoot(param)+`
	    	</div>
	    </div>`
	//<a class="col toast-action"></a>    
	var div = document.createElement('div')  
	div.innerHTML =  temp

	document.body.appendChild(div)
	window.VH5_DIALOG = {
		hide: function(fn){
			document.body.removeChild(div)
			if(typeof fn==='function'){
				fn()
			}
		},
		centerEvent: param.buttonCenterEventMethod,
		leftEvent: param.buttonLeftEventMethod,
		rightEvent: param.buttonRightEventMethod
	}
	
}

function getConTemp(content){
	if(content.length<14){
		return `<br/><br/>`+content
	}
	else if(content.length<25){
		return `<br/>`+content
	}
	else{
		return content
	}
}
function getFoot(param){
	if(param.buttonType==='BUTTON_TYPE_CENTER'){
		return `<div class="vh5-dialog-footer" >
                    <a class="vh5-row vh5-dialog-action " onclick="VH5_DIALOG.hide(VH5_DIALOG.centerEvent)">`+param.buttonCenterText+`</a>
                </div>`
	}
	else{
		return `<div class="vh5-dialog-footer" >
                    <a class="vh5-row-half vh5-dialog-action vh5-dialog-action-left" onclick="VH5_DIALOG.hide(VH5_DIALOG.leftEvent)">`+param.buttonLeftText+`</a>
                    <a class="vh5-row-half vh5-dialog-action vh5-dialog-action-right" onclick="VH5_DIALOG.hide(VH5_DIALOG.rightEvent)">`+param.buttonRightText+`</a>
                </div>`
	}
}



