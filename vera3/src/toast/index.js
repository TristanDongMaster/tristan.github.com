/**
 弹出Toast提示
 param:{
	    content: ""
	}
 **/
import './style.less'
export function showToast(param){
	var temp = 
		`<div class="vh5-mask" id="vh5-trace-mask">
		<div class="vh5-trace"  role="trace">`+
        	param.content +
	    `</div>
	    </div>`
	var div = document.createElement('div')  
	div.innerHTML =  temp

	document.body.appendChild(div)
	var t1 = setTimeout(()=>{
		document.querySelector('.vh5-trace').className = 'vh5-trace vh5-trace-hide'
		var t2 = setTimeout(()=>{
			document.body.removeChild(div)
			clearTimeout(t2)
			clearTimeout(t1)
		},1000)
	},3000)
}

