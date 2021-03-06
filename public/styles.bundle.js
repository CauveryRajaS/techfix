webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n    font-family: Century Gothic, sans-serif;\n}\n\n#container {\n  width: 100%;\n  position: absolute;\n  top:7vh;\n  left:0;/*\n  margin: calc(50vh - 5px) auto;*/ /*vertical center for better showcase*/\n}\n\n.loadingbar {\n    display: block;\n    height: 10px;\n    border-radius: 50%;\n    background-color: #ccc;\n    overflow: hidden;\n    position: relative;\n}\n\n.loadingbar:after, .loadingbar:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 0%;\n    border-radius: 10px;\n    background: linear-gradient(to right,yellow,#F9AF26);\n}\n\n.loadingbar:before {\n    -webkit-animation: loading1 5s linear 0s infinite;\n            animation: loading1 5s linear 0s infinite;\n    z-index: 10;\n}\n\n.loadingbar:after {\n    -webkit-animation: loading2 5s linear 2.5s infinite;\n            animation: loading2 5s linear 2.5s infinite;\n    z-index: 20;\n}\n\n@-webkit-keyframes loading1 {\n  0%{\n    width: 10%;\n    margin-left: -10%;\n  }\n  50%,100%{\n    width: 50%;\n    margin-left: 100%;\n  }\n}\n\n@keyframes loading1 {\n  0%{\n    width: 10%;\n    margin-left: -10%;\n  }\n  50%,100%{\n    width: 50%;\n    margin-left: 100%;\n  }\n}\n\n@-webkit-keyframes loading2 {\n  0%{\n    width: 50%;\n    margin-left: -50%;\n  }\n  50%,100%{\n    width: 10%;\n    margin-left: 100%;\n  }\n}\n\n@keyframes loading2 {\n  0%{\n    width: 50%;\n    margin-left: -50%;\n  }\n  50%,100%{\n    width: 10%;\n    margin-left: 100%;\n  }\n}\n\n@-webkit-keyframes desktop {\n    0% {\n    }\n    100% {\n    }\n}\n\n@keyframes desktop {\n    0% {\n    }\n    100% {\n    }\n}\n\n@-webkit-keyframes cog1 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        color:skyblue;\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes cog1 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        color:skyblue;\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes cog2 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n        color:skyblue;\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n        color:black;\n    }\n}\n\n@keyframes cog2 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n        color:skyblue;\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n        color:black;\n    }\n}\n\n@-webkit-keyframes cog3 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n\n}\n\n@keyframes cog3 {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n\n}\n\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n      background-color: white;\n  }\n  \n  .loading {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-40%,-40%);\n              transform: translate(-40%,-40%);\n      padding:5px;\n  }\n  .loading div {\n      display: inline-block;\n      width: 10px;\n      height: 50px;\n      border-radius: 1px;\n      -webkit-animation: loading 1.5s ease-in-out infinite;\n              animation: loading 1.5s ease-in-out infinite;\n      background-color: #345f73;\n  }\n  .loading div:nth-child(1) {\n      -webkit-animation-delay: .24s;\n              animation-delay: .24s;\n  }\n  .loading div:nth-child(2) {\n      -webkit-animation-delay: .12s;\n              animation-delay: .12s;\n  }\n  .loading div:nth-child(4) {\n      -webkit-animation-delay: .12s;\n              animation-delay: .12s;\n  }\n  .loading div:nth-child(5) {\n      -webkit-animation-delay: .24s;\n              animation-delay: .24s;\n  }\n  \n  @-webkit-keyframes loading {\n      0% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      background-color: #345f73;\n      }\n      25% {\n      -webkit-transform: scale(1, 2.1);\n              transform: scale(1, 2.1);\n      background-color: #1792BA;\n      }\n      50% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      background-color: #345f73;\n      }\n  }\n  \n  @keyframes loading {\n      0% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      background-color: #345f73;\n      }\n      25% {\n      -webkit-transform: scale(1, 2.1);\n              transform: scale(1, 2.1);\n      background-color: #1792BA;\n      }\n      50% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      background-color: #345f73;\n      }\n  }\n\n@media only screen and (max-width: 500px) { \n    #container {\n        width: 100%;\n        position: absolute;\n        top:11vh;\n        left:0;/*\n        margin: calc(50vh - 5px) auto;*/ /*vertical center for better showcase*/\n    }      \n}\n/*\nbutton a {\n    text-decoration:none;\n    color:white;\n}\n\ndiv button a {\n    text-decoration:none;\n    color:white;\n}\n\ndiv a {\n    text-decoration: none;\n    color:black;\n}\n\n.back {\n    text-decoration:none;\n    float: right;\n    width:40px;\n    height: 40px;\n    color:white;\n    border-radius:50%;\n    background: blue;\n}\n\n.backBtn {\n    color:white;\n    top:50%;\n    left:50%;\n    transform:translate(12%,-58%);\n}\n\n.typeGrids {\n    position: absolute;\n    background-color: blue;\n    min-width: 84%;\n    min-height: 300px;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-gap: 0.5em;\n    grid-auto-rows:minmax(300px,auto);\n}\n\n.nested {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-gap: 0.5em;\n    background: red;\n}\n\n.content {\n    background:lightblue;\n}\n\n.nested > div {\n    border: 0.2em solid black;\n    background:grey;\n}\n\n.hide {\n    top:0px;\n    left:0px;\n    position:fixed;\n    width:100%;\n    height:100%;\n    z-index:998;\n    background: black;\n}\n\n.timer {\n    position: relative;\n    background:black;\n    border:10px solid transparent;\n    border-color:#005EFF;\n    border-radius:10%;\n    color:white;\n    height:60px;\n    width:120px;\n    float:right;\n}\n\n.bgGrids {\n    top:0;\n    left:0;\n    position: absolute;\n    z-index:-1;\n    background-color: blue;\n    min-width: 100%;\n    min-height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 0.5em;\n    grid-auto-rows:minmax(104px,auto);\n}\n\n.cube {\n    background: #FDFAFA;\n    z-index:-1;\n}\n\n.cubeX {\n    background: white;\n    z-index:-1;\n    animation:spinX 2s linear infinite;\n}\n\n@keyframes spinX {\n    0% {\n        transform: rotateX(0deg);\n    }\n    100% {\n        transform: rotateX(360deg);\n    }\n}\n\n\n.cubeY {\n    background: white;\n    z-index:-1;\n    animation:spinY 2s linear infinite;\n}\n\n@keyframes spinY {\n    0% {\n        transform: rotate3d(0deg);\n    }\n    100% {\n        transform: rotate3d(360deg);\n    }\n}\n\n.loader {\n    min-width:100%;\n    min-height:100%;\n}\n\n.spinner {\n    top:50%;\n    left:50%;\n    transform:translate(-105%,-105%);\n    width:80px;\n    height:80px;\n    background:#9A9696;\n    border-radius:50%;\n    position: absolute;\n    margin: 50px;\n    display: inline-block;\n}\n\n.spinner_1:after,.spinner_1:before {\n    display: block;\n    content:'';\n    width:80px;\n    height:80px;\n    border-radius:50%;\n}\n\n.spinner_1:after {\n    border-radius:50%;\n    top:0px;\n    left:0px;\n    position: absolute;\n    border:4px solid transparent;\n    border-top-color:#005EFF;\n    border-bottom-color:#005EFF;\n    animation:spinny 2s linear infinite;\n}\n\n.spinner_2:after,.spinner_2:before {\n    display: block;\n    content:'';\n    width:80px;\n    height:80px;\n    border-radius:50%;\n}\n\n.spinner_2:after {\n    border-radius:50%;\n    top:0px;\n    left:0px;\n    position: absolute;\n    border:4px solid transparent;\n    border-left-color:#005EFF;\n    border-right-color:#005EFF;\n    animation:spinny_2 2s linear infinite;\n}\n\n/*\n.spinner_3:after,.spinner_3:before {\n    display: block;\n    content:'';\n    width:20px;\n    height:20px;\n    border-radius:50%;\n}\n\n.spinner_3:after {\n    border-radius:50%;\n    top:0px;\n    left:0px;\n    position: absolute;\n    border:4px solid #4CA160 transparent;\n}\n\n\n.spinner_3 {\n    width:15px;\n    height:15px;\n    border-radius:50%;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    border:4px solid transparent;\n    border-color: #005EFF;\n}*/\n\n/*\n.spinner_4:after,.spinner_4:before {\n    display: block;\n    content:'';\n    width:20px;\n    height:20px;\n    border-radius:50%;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    background-color:#005EFF;\n}\n\n.spinner_4:after {\n    border-radius:50%;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background-color:#005EFF;\n    animation:spinny_3 2s linear infinite;\n}\n*/\n/*\n@keyframes spinny {\n    0% {\n        transform:rotate(0deg) scale(1);\n    }\n    50% {\n        transform:rotate(45deg) scale(1.4);\n    }\n    100% {\n        transform: rotate(360deg) scale(1);\n    }\n}\n\n@keyframes spinny_2 {\n    0% {\n        transform:rotate(0deg) scale(1);\n    }\n    50% {\n        transform:rotate(45deg) scale(2);\n    }\n    100% {\n        transform: rotate(360deg) scale(1);\n    }\n}\n\n@keyframes spinny_3 {\n    0% {\n        transform:opacity(0) scale(1);\n    }\n    50% {\n        transform:opacity(1) scale(1.6);\n    }\n    100% {\n        transform:opacity(0) scale(1);\n    }\n}\n\n*/", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

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
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map