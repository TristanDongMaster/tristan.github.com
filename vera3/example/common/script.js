$(function(){
	loadPageByHash()
})

function loadPageByHash(){
	var hash = location.hash
	hash = hash.replace(/#/,'')
	if(hash==''){
		return
	}
	var url = './'+hash+'/index.html'
	$('#wrap').load(url)
}

