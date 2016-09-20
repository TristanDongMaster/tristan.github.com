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

	var _loading = __webpack_require__(13);

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

	exports.showDialog = showDialog;
	exports.hideDialog = hideDialog;

	__webpack_require__(10);

	var _index = __webpack_require__(12);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VH5Dialog = function () {
		function VH5Dialog() {
			_classCallCheck(this, VH5Dialog);

			this.initTemplate = this.initTemplate.bind(this);
			this.showDialog = this.showDialog.bind(this);
			this.initDialog = this.initDialog.bind(this);
			this.hideDialog = this.hideDialog.bind(this);
		}

		_createClass(VH5Dialog, [{
			key: 'initTemplate',
			value: function initTemplate() {
				var $target = document.querySelector('.vh5-dialog-overlay');
				if ($target != undefined) {
					$target.remove();
				}
				document.body.insertAdjacentHTML('beforeend', _index2.default);
			}
		}, {
			key: 'showDialog',
			value: function showDialog(param) {
				this.initDialog(param);
				setTimeout(function () {
					$('.vh5-dialog-overlay').removeClass('hide');
				}, 100);
			}
		}, {
			key: 'hideDialog',
			value: function hideDialog() {
				$('.vh5-dialog-overlay').addClass('hide');
			}
		}, {
			key: 'initDialog',
			value: function initDialog(param) {
				var _this = this;

				this.initTemplate();
				if (param) {
					var $target = $('.vh5-dialog-overlay');

					if (param.title != '' && param.title != undefined) {
						$target.find('.dialog-header').html(param.title);
					} else {
						$target.find('.dialog-header').remove();
					}

					if (param.content != '' && param.content != undefined) {
						if (param.isHTML) {
							$target.find('.dialog-body').html(param.content);
						} else {
							$target.find('.dialog-text').html(param.content);
						}
					}

					if (param.buttonLeftText != '' && param.buttonLeftText != undefined) {
						$target.find('.action-left').html(param.buttonLeftText);
					}

					if (param.buttonRightText != '' && param.buttonRightText != undefined) {
						$target.find('.action-right').html(param.buttonRightText);
					}

					if (param.buttonCenterText != '' && param.buttonCenterText != undefined) {
						$target.find('.dialog-action').html(param.buttonCenterText);
					}

					if (typeof param.buttonLeftEventMethod == "function") {
						$target.on('click', '.action-left', function () {
							param.buttonLeftEventMethod;
							_this.hideDialog();
						});
					}
					if (typeof param.buttonRightEventMethod == "function") {
						$target.on('click', '.action-right', function () {
							param.buttonRightEventMethod;
							_this.hideDialog();
						});
					}
					if (typeof param.buttonCenterEventMethod == "function") {
						$target.find('.action-right').remove();
						$target.find('.dialog-action').removeClass('col-50');
						$target.on('click', '.dialog-action', function () {
							param.buttonCenterEventMethod;
							_this.hideDialog();
						});
					}
					if (typeof param.buttonLeftEventMethod != "function" && typeof param.buttonRightEventMethod != "function" && typeof param.buttonCenterEventMethod != "function") {
						$target.find('.dialog-footer').remove();
					}
				}
			}
		}]);

		return VH5Dialog;
	}();

	var vh5DialogObject = new VH5Dialog();

	/***
		param: {
			title:'标题',
			content:'内容',
			buttonType: "BUTTON_TYPE_LEFTRIGHT",//BUTTON_TYPE_CENTER BUTTON_TYPE_LEFTRIGHT
	        buttonLeftText: "取消",
	        buttonLeftEventMethod: function(){},
	        buttonRightText: "去认证",
	        buttonRightEventMethod: function(){
	        	alert("去认证")
	        },
	        //buttonCenterText: "取消",
		    //buttonCenterEventMethod: function(){}
		}
		return void
	*/
	function showDialog(param) {
		vh5DialogObject.showDialog(param);
	}
	function hideDialog() {
		vh5DialogObject.hideDialog();
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
	exports.push([module.id, "@charset \"utf-8\";\n.flex {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-box;\n  display: box;\n  display: flexbox;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vh5-dialog-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: 1001;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: opacity 0.3s, visibility 0.3s, -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n  transition: opacity 0.3s, visibility 0.3s, -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65), visibility 0.3s;\n  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65), visibility 0.3s, -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n}\n.vh5-dialog-overlay.hide {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n  transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n  transition: visibility 0.3s, opacity 0.3s, transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n  transition: visibility 0.3s, opacity 0.3s, transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65), -webkit-transform 0.3s cubic-bezier(0.68, -0.65, 0.27, 1.65);\n}\n.vh5-dialog-overlay .dialog-container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 0.05rem;\n  box-shadow: 0.05rem 0.05rem 0.05rem #D8D8D8;\n}\n.vh5-dialog-overlay .dialog-content {\n  background: white;\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: 0.05rem;\n}\n.vh5-dialog-overlay .dialog-body {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-box;\n  display: box;\n  display: flexbox;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: 3rem;\n  color: #222;\n  margin: 0;\n  min-height: 0.8rem;\n  font-size: 0.14rem;\n}\n.vh5-dialog-overlay .dialog-header {\n  padding-top: 0.2rem;\n  font-weight: bold;\n  text-align: center;\n  font-size: 0.16rem;\n  color: #222;\n}\n.vh5-dialog-overlay .dialog-action {\n  text-align: center;\n  text-decoration: none;\n  box-sizing: border-box;\n  height: 0.5rem;\n  font-size: 0.16rem;\n  line-height: 0.5rem;\n  color: #0099ff;\n  border-radius: 0 0 0.05rem 0.05rem;\n}\n.vh5-dialog-overlay .dialog-text {\n  text-align: center;\n  padding: 0.18rem;\n}\n.vh5-dialog-overlay .dialog-footer {\n  overflow: hidden;\n  border-radius: 0 0 0.05rem 0.05rem;\n  border-top: 0.01rem solid #D8D8D8;\n}\n.vh5-dialog-overlay .dialog-footer .action-right {\n  border-radius: 0 0 0.05rem 0;\n  font-weight: bold;\n  border-left: 0.01rem solid #D8D8D8;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vh5-dialog-overlay hide\" role=\"dialog\">\r\n\t<div class=\"dialog-container\">\r\n\t\t<div class=\"dialog-header \"></div>\r\n\t\t<div class=\"dialog-body\">\r\n\t\t\t<div class=\"dialog-text\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"dialog-footer\">\r\n\t\t\t<span class=\"col col-50 dialog-action action-left\"></span>\r\n\t\t\t<span class=\"col col-50 col dialog-action action-right\"></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.showLoading = showLoading;
	exports.hideLoading = hideLoading;

	__webpack_require__(14);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vh5-loading-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 110;\n}\n.vh5-loading-wrap.z-hide {\n  visibility: hidden;\n}\n.vh5-loading-inner {\n  display: inline-block;\n  width: 90px;\n  height: 90px;\n  text-align: center;\n  margin-left: -90px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vh5-loading-text {\n  text-anchor: middle;\n  font: 21px/1 Helvetica;\n}\n.vh5-loading-box {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.vh5-loading-bg {\n  position: relative;\n  left: -90px;\n  top: -90px;\n  width: 180px;\n  height: 180px;\n  background-color: #fff;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n}\n.vh5-loading-bg:after {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  width: 0;\n  overflow-y: hidden;\n  vertical-align: middle;\n}\n.vh5-loading {\n  width: 90px;\n  height: 90px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.vh5-loading-progress {\n  stroke-dasharray: 150;\n  stroke-dashoffset: 150.796;\n  -webkit-animation: loading-anim 2s ease-in infinite;\n          animation: loading-anim 2s ease-in infinite;\n}\n@-webkit-keyframes loading-anim {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes loading-anim {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n", ""]);

	// exports


/***/ }
/******/ ]);