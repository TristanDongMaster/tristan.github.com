/**
弹出loading提示
**/
import './style.less'
export function showLoading(){
	var temp = 
		`<div class="vh5-mask">
    <div class="vh5-loading-box">
        <div class="vh5-loading-bg">
            <svg viewBox="0 0 50 50" class="vh5-loading">
                <circle r="24" cx="25" cy="25" fill="none" stroke="#f0f0f0" stroke-width="2"/>
                <text x="25" y="25" dy=".27em" fill="#dedede" class="vh5-loading-text">vip</text>
            </svg>
            <div class="vh5-loading-inner">
                <svg viewBox="0 0 50 50" class="vh5-loading">
                    <circle r="24" cx="25" cy="25" fill="none" stroke="#e4007f" stroke-linecap="round" stroke-width="2" class="vh5-loading-progress" id="J_loading_progress" >
                    </circle>
                </svg>
            </div>
        </div>
    </div>
</div>`
	var loadingNode = document.createElement('div')  
	loadingNode.id = "vh5-loading-mask"
	loadingNode.innerHTML =  temp
	document.body.appendChild(loadingNode)
	
}
/**
隐藏loading提示
**/
export function hideLoading(){
	var loadingNode = document.querySelector('#vh5-loading-mask')
    if(loadingNode !==null){
        document.body.removeChild(loadingNode)
    }
	
}



