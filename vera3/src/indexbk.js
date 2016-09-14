
import './src/stylesheet/app/pub.less'
import {showToast} from './src/toast'
import {showDialog} from './src/dialog'
import {showLoading,hideLoading} from './src/loading'

export default class VH5UI {
  constructor() {
    
  }
  showToast(param) {
    showToast(param)
  }
  showDialog(param){
  	showDialog(param)
  }
  showLoading(){
    showLoading()
  }
  hideLoading(){
    hideLoading()
  }
}
var _history = []
var VH5 = {
  ui: new VH5UI(),
  nav:{
    goto: function(url){
      var _url = ''
      if(typeof url == 'number'){
        if(url>0){
          return false
        }
        var i = _history.length - 1 + url
        if(i<0){
          return false
        }
        for(var j=_history.length - 1;j>=i;j--){
          _url = _history.pop()
        }
      }
      else{
        _history.push(url)
        _url = url
      }

      var a = document.createElement('a');
      var content = document.createTextNode("a link navgation fro VH");
      a.appendChild(content);
      a.style.display = 'none'
      a.href = _url
      document.body.appendChild(a);
      var event = new Event('click', { bubbles: true });
      a.dispatchEvent(event);
      document.body.removeChild(a);
    }
  }
}

window.VHPF = {
  ui: {
    env: 'h5',//or h5
    showToast: function(param){
      if(this.env=='h5'){
        VH5.ui.showToast(param)
      }
      else{
        VH.ui.showToast(param)
      }
    },
    showDialog: function(param){
      if(this.env=='h5'){
        VH5.ui.showDialog(param)
      }
      else{
        if(param.buttonType=='BUTTON_TYPE_CENTER'){
          var _param = {
            content: param.content,
            buttonType: param.buttonType,
            buttonCenterText: param.buttonCenterText
          }
          VH.ui.showDialog(_param)
          VH.event.once('event_type_dialog_button_center',function() {
            if(typeof param.buttonCenterEventMethod=='function'){
              param.buttonCenterEventMethod()
            }
          })
        }
        else{
          var _param = {
            content: param.content,
            buttonType: param.buttonType,
            buttonLeftText: param.buttonLeftText,
            buttonRightText: param.buttonRightText
          }
          VH.ui.showDialog(_param)
          VH.event.once('event_type_dialog_button_left',function() {
            if(typeof param.buttonLeftEventMethod=='function'){
              param.buttonLeftEventMethod()
            }
          })
          VH.event.once('event_type_dialog_button_right',function() {
            if(typeof param.buttonRightEventMethod=='function'){
              param.buttonRightEventMethod()
            }
          })
        }
      }
    },
    showLoading: function(){
      if(this.env=='h5'){
        VH5.ui.showLoading()
      }
      else{
        VH.ui.showLoading()
      }
    },
    hideLoading: function(){
      if(this.env=='h5'){
        VH5.ui.hideLoading()
      }
      else{
        VH.ui.hideLoading()
      }
    }
  },
  nav:{
    goto: VH5.nav.goto
  }
}

