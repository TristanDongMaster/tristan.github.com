/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /***
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     hercules 相关的文档
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://wiki.corp.vipshop.com/pages/viewpage.action?pageId=91001767
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://wiki.corp.vipshop.com/pages/viewpage.action?pageId=74752365&src=search
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://gitlab.tools.vipshop.com/h5_dev/hercules/blob/master/1/index.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


	__webpack_require__(2);

	var _toast = __webpack_require__(6);

	var _dialog = __webpack_require__(9);

	var _loading = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VH5UI = function () {
	  function VH5UI() {
	    _classCallCheck(this, VH5UI);
	  }

	  _createClass(VH5UI, [{
	    key: 'showToast',
	    value: function showToast(param) {
	      (0, _toast.showToast)(param);
	    }
	  }, {
	    key: 'showDialog',
	    value: function showDialog(param) {
	      (0, _dialog.showDialog)(param);
	    }
	  }, {
	    key: 'showLoading',
	    value: function showLoading() {
	      (0, _loading.showLoading)();
	    }
	  }, {
	    key: 'hideLoading',
	    value: function hideLoading() {
	      (0, _loading.hideLoading)();
	    }
	  }]);

	  return VH5UI;
	}();

	exports.default = VH5UI;


	var VH5 = {
	  ui: new VH5UI(),
	  nav: {
	    goto: function goto(url) {
	      if (url == -1) {
	        if (location.href.indexOf('source=app') > -1) {
	          window.VH.base.goPrePage();
	        } else {
	          history.go(-1);
	        }
	        return false;
	      }
	      var a = document.createElement('a');
	      var content = document.createTextNode("a link navgation fro VH");
	      a.appendChild(content);
	      a.style.display = 'none';
	      a.href = url;
	      document.body.appendChild(a);
	      var event = new Event('click', { bubbles: true });
	      a.dispatchEvent(event);
	      document.body.removeChild(a);
	    }
	  }
	};

	window.VHPF = {
	  ui: {
	    env: 'h5', //or app
	    showToast: function showToast(param) {
	      if (this.env == 'h5') {
	        VH5.ui.showToast(param);
	      } else {
	        VH.ui.showToast(param);
	      }
	    },
	    showDialog: function showDialog(param) {
	      if (this.env == 'h5') {
	        VH5.ui.showDialog(param);
	      } else {
	        VH.ui.showDialog(param);
	      }
	    },
	    showLoading: function showLoading() {
	      if (this.env == 'h5') {
	        VH5.ui.showLoading();
	      } else {
	        VH.ui.showLoading();
	      }
	    },
	    hideLoading: function hideLoading() {
	      if (this.env == 'h5') {
	        VH5.ui.hideLoading();
	      } else {
	        VH.ui.hideLoading();
	      }
	    }
	  },
	  nav: {
	    goto: VH5.nav.goto
	  }
	};

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/less-loader/index.js!./mask.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/less-loader/index.js!./mask.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vh5-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.showToast = showToast;

	__webpack_require__(7);

	function showToast(param) {
		var temp = '<div class="vh5-mask" id="vh5-trace-mask">\n\t\t<div class="vh5-trace"  role="trace">' + param.content + '</div>\n\t    </div>';
		var div = document.createElement('div');
		div.innerHTML = temp;

		document.body.appendChild(div);
		var t1 = setTimeout(function () {
			document.querySelector('.vh5-trace').className = 'vh5-trace vh5-trace-hide';
			var t2 = setTimeout(function () {
				document.body.removeChild(div);
				clearTimeout(t2);
				clearTimeout(t1);
			}, 1000);
		}, 3000);
	} /**
	   弹出Toast提示
	   param:{
	  	    content: ""
	  	}
	   **/

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n.vh5-trace {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 200px;\n  max-width: 250px;\n  background: #000;\n  color: #ddd;\n  z-index: 1000;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.13rem;\n  text-align: center;\n  opacity: 0.9;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.vh5-trace-hide {\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.showDialog = showDialog;

	__webpack_require__(10);

	function showDialog(param) {
		var temp = '\n\t\t<div class="vh5-mask">\n\t\t\t<div class="vh5-dialog">\n                <div class="vh5-dialog-conent">\n                     ' + getConTemp(param.content) + '\n                </div>\n                ' + getFoot(param) + '\n\t    \t</div>\n\t    </div>';
		var div = document.createElement('div');
		div.className = "vh5-mask-dialog";
		div.innerHTML = temp;

		document.body.appendChild(div);
		window.VH5_DIALOG = {
			hide: function hide(fn) {
				var node = document.querySelectorAll('.vh5-mask-dialog');
				console.log(node);
				for (var i = 0; i < node.length; i++) {
					console.log(node[i]);
					document.body.removeChild(node[i]);
				}
				if (typeof fn === 'function') {
					fn();
				}
			},
			centerEvent: param.buttonCenterEventMethod,
			leftEvent: param.buttonLeftEventMethod,
			rightEvent: param.buttonRightEventMethod
		};
	} /**
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

	function getConTemp(content) {
		if (content.length < 14) {
			return '<br/><br/>' + content;
		} else if (content.length < 25) {
			return '<br/>' + content;
		} else {
			return content;
		}
	}
	function getFoot(param) {
		if (param.buttonType === 'BUTTON_TYPE_CENTER') {
			return '<div class="vh5-dialog-footer" >\n                    <a class="vh5-row vh5-dialog-action " onclick="VH5_DIALOG.hide(VH5_DIALOG.centerEvent)">' + param.buttonCenterText + '</a>\n                </div>';
		} else {
			return '<div class="vh5-dialog-footer" >\n                    <a class="vh5-row-half vh5-dialog-action vh5-dialog-action-left" onclick="VH5_DIALOG.hide(VH5_DIALOG.leftEvent)">' + param.buttonLeftText + '</a>\n                    <a class="vh5-row-half vh5-dialog-action vh5-dialog-action-right" onclick="VH5_DIALOG.hide(VH5_DIALOG.rightEvent)">' + param.buttonRightText + '</a>\n                </div>';
		}
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n.vh5-dialog {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  min-height: 120px;\n  width: 250px;\n  margin-left: -125px;\n  margin-top: -75px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 1px 1px 12px #888888;\n  -webkit-animation: vh5-dialog 0.5s;\n          animation: vh5-dialog 0.5s;\n}\n@media screen and (max-width: 320px) {\n  .vh5-dialog {\n    width: 200px;\n    margin-left: -100px;\n  }\n}\n@-webkit-keyframes vh5-dialog {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes vh5-dialog {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.vh5-dialog-conent {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px 10px 45px 10px;\n  font-size: 14px;\n  color: #222;\n}\n.vh5-dialog-footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  border-top: 1px solid #ddd;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n.vh5-row {\n  width: 50%;\n  height: 100%;\n}\n.vh5-row-half {\n  float: left;\n  width: 50%;\n  height: 100%;\n}\n.vh5-dialog-action {\n  text-align: center;\n  color: #0099ff;\n  cursor: pointer;\n}\n.vh5-dialog-action-left {\n  border-right: 1px solid #ddd;\n  box-sizing: border-box;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.showLoading = showLoading;
	exports.hideLoading = hideLoading;

	__webpack_require__(13);

	function showLoading() {
	    var temp = '<div class="vh5-mask">\n    <div class="vh5-loading-box">\n        <div class="vh5-loading-bg">\n            <svg viewBox="0 0 50 50" class="vh5-loading">\n                <circle r="24" cx="25" cy="25" fill="none" stroke="#f0f0f0" stroke-width="2"/>\n                <text x="25" y="25" dy=".27em" fill="#dedede" class="vh5-loading-text">vip</text>\n            </svg>\n            <div class="vh5-loading-inner">\n                <svg viewBox="0 0 50 50" class="vh5-loading">\n                    <circle r="24" cx="25" cy="25" fill="none" stroke="#e4007f" stroke-linecap="round" stroke-width="2" class="vh5-loading-progress" id="J_loading_progress" >\n                    </circle>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>';
	    var loadingNode = document.createElement('div');
	    loadingNode.id = "vh5-loading-mask";
	    loadingNode.innerHTML = temp;
	    document.body.appendChild(loadingNode);
	}
	/**
	隐藏loading提示
	**/
	/**
	弹出loading提示
	**/
	function hideLoading() {
	    var loadingNode = document.querySelector('#vh5-loading-mask');
	    if (loadingNode !== null) {
	        document.body.removeChild(loadingNode);
	    }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vh5-loading-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 110;\n}\n.vh5-loading-wrap.z-hide {\n  visibility: hidden;\n}\n.vh5-loading-inner {\n  display: inline-block;\n  width: 90px;\n  height: 90px;\n  text-align: center;\n  margin-left: -90px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vh5-loading-text {\n  text-anchor: middle;\n  font: 21px/1 Helvetica;\n}\n.vh5-loading-box {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.vh5-loading-bg {\n  position: relative;\n  left: -90px;\n  top: -90px;\n  width: 180px;\n  height: 180px;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n}\n.vh5-loading-bg:after {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  width: 0;\n  overflow-y: hidden;\n  vertical-align: middle;\n}\n.vh5-loading {\n  width: 90px;\n  height: 90px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.vh5-loading-progress {\n  stroke-dasharray: 150;\n  stroke-dashoffset: 150.796;\n  -webkit-animation: loading-anim 2s ease-in infinite;\n          animation: loading-anim 2s ease-in infinite;\n}\n@-webkit-keyframes loading-anim {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes loading-anim {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n", ""]);

	// exports


/***/ }
/******/ ]);