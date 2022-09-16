// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fmqN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redom = require("redom");
var _creditcardJs = require("creditcard.js");
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
_redom.el("form", _redom.el("div", _redom.el("div"), _redom.el("div"), _redom.el("div"), _redom.el("div")), _redom.el("div"));
const form = _redom.el("form");
const container = _redom.el("div", {
    className: 'form-row align-items-end mb-3'
});
const wrapperInput1 = _redom.el("div", {
    className: 'col-auto'
});
const labelNumberCard = _redom.el("label", 'Номер карты', {
    for: 'numberCard'
});
const inputNumberCard = _redom.el("input", {
    className: 'form-control mb-2',
    id: "numberCard",
    placeholder: "0000 0000 0000 0000",
    required: true
});
const icon1 = _redom.el("img", {
    style: 'height:25px;width:35px; align-self:center;display:none',
    src: new URL(require("366f6fbb06264e22"))
});
const icon2 = _redom.el("img", {
    style: 'height:25px;width:35px; align-self:center;display:none',
    src: new URL(require("dd469e6e7423cabb"))
});
_redom.mount(labelNumberCard, inputNumberCard);
_redom.mount(wrapperInput1, labelNumberCard);
_redom.mount(container, wrapperInput1);
_redom.mount(container, icon1);
_redom.mount(container, icon2);
const wrapperInput2 = _redom.el("div", {
    className: 'col-auto'
});
const labelDataEnd = _redom.el("label", 'Дата окончания действия', {
    for: 'dataEnd'
});
const inputDataEnd = _redom.el("input", {
    className: 'form-control mb-2',
    id: "dataEnd",
    placeholder: "MM/ГГ",
    required: true
});
_redom.mount(labelDataEnd, inputDataEnd);
_redom.mount(wrapperInput2, labelDataEnd);
_redom.mount(container, wrapperInput2);
const wrapperInput3 = _redom.el("div", {
    className: 'col-auto'
});
const labelCvc = _redom.el("label", 'CVC/CVV', {
    for: 'labelCvc'
});
const inputCvc = _redom.el("input", {
    className: 'form-control mb-2',
    id: "cvc",
    placeholder: "CVC/CVV",
    required: true
});
_redom.mount(labelCvc, inputCvc);
_redom.mount(wrapperInput3, labelCvc);
_redom.mount(container, wrapperInput3);
const wrapperInput4 = _redom.el("div", {
    className: 'col-auto'
});
const labelEmail = _redom.el("label", 'Email', {
    for: 'inputEmail'
});
const inputEmail = _redom.el("input", {
    className: 'form-control mb-2',
    type: "email",
    id: "inputEmail",
    placeholder: "Email",
    required: true
});
_redom.mount(labelEmail, inputEmail);
_redom.mount(wrapperInput4, labelEmail);
_redom.mount(container, wrapperInput4);
const buttonwrapper = _redom.el("div");
const button = _redom.el("button", "Оплатить", {
    type: "submit",
    className: 'btn btn-primary mb-2',
    disabled: true
});
_redom.mount(buttonwrapper, button);
_redom.setChildren(form, container, buttonwrapper);
_redom.setChildren(window.document.body, form);
const masknumberCard = {
    mask: '0000 0000 0000 0000 00'
};
const maskNumber = _imaskDefault.default(inputNumberCard, masknumberCard);
maskNumber.updateValue();
const maskDataEnd = {
    mask: '00/00'
};
const maskData = _imaskDefault.default(inputDataEnd, maskDataEnd);
maskData.updateValue();
const maskNumberCvc = {
    mask: '000'
};
const maskCvc = _imaskDefault.default(inputCvc, maskNumberCvc);
maskCvc.updateValue();
function showError(input) {
    input.classList.add('is-invalid');
}
const validationMap = {
    numberCard () {
        if (!_creditcardJs.isValid(inputNumberCard.value)) showError(inputNumberCard);
        if (_creditcardJs.getCreditCardNameByNumber(inputNumberCard.value) === 'Mastercard') icon1.style.display = 'block';
        if (_creditcardJs.getCreditCardNameByNumber(inputNumberCard.value) === 'Visa') icon2.style.display = 'block';
    },
    dataEnd () {
        const a = inputDataEnd.value[0];
        const b = inputDataEnd.value[1];
        const c = inputDataEnd.value[3];
        const d = inputDataEnd.value[4];
        let month = a + b;
        let year = Number('20' + c + d);
        const date = new Date();
        let currentMonth = date.getMonth() + 1;
        if (currentMonth < 10) currentMonth = '0' + currentMonth;
        let currentYear = date.getFullYear();
        if (month > '12' || month < '01' || year < currentYear) showError(inputDataEnd);
        if (month <= currentMonth && year <= currentYear) showError(inputDataEnd);
        if (inputDataEnd.value.length < 5) showError(inputDataEnd);
    },
    cvc () {
        if (inputCvc.value.length < 3) showError(inputCvc);
    },
    inputEmail () {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!inputEmail.value.match(pattern)) showError(inputEmail);
    }
};
const inputs = document.querySelectorAll('.form-control');
inputs.forEach((input1)=>{
    input1.addEventListener('blur', ()=>{
        validationMap[input1.id]();
        const validArr = [];
        inputs.forEach((input)=>{
            validArr.push(input.value !== '' && !input.classList.contains('is-invalid'));
            if (!validArr.includes(false)) button.removeAttribute("disabled");
            else button.setAttribute("disabled", true);
        });
    });
    for(let i = 0; i < inputs.length; i++)inputs[i].addEventListener('focus', function() {
        inputs[i].classList.remove('is-invalid');
    });
});

},{"redom":"iahd6","creditcard.js":"lyHGp","imask":"aLznl","366f6fbb06264e22":"6GjRO","dd469e6e7423cabb":"aUY3z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iahd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List
);
parcelHelpers.export(exports, "ListPool", ()=>ListPool
);
parcelHelpers.export(exports, "Place", ()=>Place
);
parcelHelpers.export(exports, "Router", ()=>Router
);
parcelHelpers.export(exports, "el", ()=>el
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "list", ()=>list
);
parcelHelpers.export(exports, "listPool", ()=>listPool
);
parcelHelpers.export(exports, "mount", ()=>mount
);
parcelHelpers.export(exports, "place", ()=>place
);
parcelHelpers.export(exports, "router", ()=>router
);
parcelHelpers.export(exports, "s", ()=>s
);
parcelHelpers.export(exports, "setAttr", ()=>setAttr
);
parcelHelpers.export(exports, "setChildren", ()=>setChildren
);
parcelHelpers.export(exports, "setData", ()=>setData
);
parcelHelpers.export(exports, "setStyle", ()=>setStyle
);
parcelHelpers.export(exports, "setXlink", ()=>setXlink
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "unmount", ()=>unmount
);
function createElement(query, ns1) {
    var ref = parse(query);
    var tag = ref.tag;
    var id = ref.id;
    var className = ref.className;
    var element = ns1 ? document.createElementNS(ns1, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns1) element.setAttribute('class', className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    var chunks = query.split(/([.#])/);
    var className = '';
    var id = '';
    for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case '.':
            className += " " + chunks[i + 1];
            break;
        case '#':
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || 'div',
        id: id
    };
}
function unmount(parent, child) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    var hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse1 = parentEl;
    if (childEl.__redom_mounted) trigger(childEl, 'onunmount');
    while(traverse1){
        var parentHooks = traverse1.__redom_lifecycle || {};
        for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse1.__redom_lifecycle = null;
        traverse1 = traverse1.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(var key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}
/* global Node, ShadowRoot */ var hookNames = [
    'onmount',
    'onremount',
    'onunmount'
];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;
function mount(parent, child, before, replace) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    var wasMounted = childEl.__redom_mounted;
    var oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
    if (before != null) {
        if (replace) parentEl.replaceChild(childEl, getEl(before));
        else parentEl.insertBefore(childEl, getEl(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el1, eventName) {
    if (eventName === 'onmount' || eventName === 'onremount') el1.__redom_mounted = true;
    else if (eventName === 'onunmount') el1.__redom_mounted = false;
    var hooks = el1.__redom_lifecycle;
    if (!hooks) return;
    var view = el1.__redom_view;
    var hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(var hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        var traverse2 = el1.firstChild;
        while(traverse2){
            var next = traverse2.nextSibling;
            trigger(traverse2, eventName);
            traverse2 = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    var remount = parentEl === oldParent;
    var hooksFound = false;
    for(var i = 0, list1 = hookNames; i < list1.length; i += 1){
        var hookName = list1[i];
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse3 = parentEl;
    var triggered = false;
    if (remount || traverse3 && traverse3.__redom_mounted) {
        trigger(childEl, remount ? 'onremount' : 'onmount');
        triggered = true;
    }
    while(traverse3){
        var parent = traverse3.parentNode;
        var parentHooks = traverse3.__redom_lifecycle || (traverse3.__redom_lifecycle = {});
        for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse3.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse3 instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse3, remount ? 'onremount' : 'onmount');
                triggered = true;
            }
            traverse3 = parent;
        }
    }
}
function setStyle(view, arg1, arg2) {
    var el2 = getEl(view);
    if (typeof arg1 === 'object') for(var key in arg1)setStyleValue(el2, key, arg1[key]);
    else setStyleValue(el2, arg1, arg2);
}
function setStyleValue(el3, key, value) {
    el3.style[key] = value == null ? '' : value;
}
/* global SVGElement */ var xlinkns = 'http://www.w3.org/1999/xlink';
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    var el4 = getEl(view);
    var isObj = typeof arg1 === 'object';
    if (isObj) for(var key in arg1)setAttrInternal(el4, key, arg1[key], initial);
    else {
        var isSVG = el4 instanceof SVGElement;
        var isFunc = typeof arg2 === 'function';
        if (arg1 === 'style' && typeof arg2 === 'object') setStyle(el4, arg2);
        else if (isSVG && isFunc) el4[arg1] = arg2;
        else if (arg1 === 'dataset') setData(el4, arg2);
        else if (!isSVG && (arg1 in el4 || isFunc) && arg1 !== 'list') el4[arg1] = arg2;
        else {
            if (isSVG && arg1 === 'xlink') {
                setXlink(el4, arg2);
                return;
            }
            if (initial && arg1 === 'class') arg2 = el4.className + ' ' + arg2;
            if (arg2 == null) el4.removeAttribute(arg1);
            else el4.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el5, arg1, arg2) {
    if (typeof arg1 === 'object') for(var key in arg1)setXlink(el5, key, arg1[key]);
    else if (arg2 != null) el5.setAttributeNS(xlinkns, arg1, arg2);
    else el5.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el6, arg1, arg2) {
    if (typeof arg1 === 'object') for(var key in arg1)setData(el6, key, arg1[key]);
    else if (arg2 != null) el6.dataset[arg1] = arg2;
    else delete el6.dataset[arg1];
}
function text(str) {
    return document.createTextNode(str != null ? str : '');
}
function parseArgumentsInternal(element, args, initial) {
    for(var i = 0, list2 = args; i < list2.length; i += 1){
        var arg = list2[i];
        if (arg !== 0 && !arg) continue;
        var type = typeof arg;
        if (type === 'function') arg(element);
        else if (type === 'string' || type === 'number') element.appendChild(text(arg));
        else if (isNode(getEl(arg))) mount(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === 'object') setAttrInternal(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === 'string' ? html(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}
var htmlCache = {};
function html(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === 'string') element = memoizeHTML(query).cloneNode(false);
    else if (isNode(query)) element = query.cloneNode(false);
    else if (type === 'function') {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error('At least one argument required');
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var el = html;
var h = html;
html.extend = function extendHtml(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var clone = memoizeHTML(query);
    return html.bind.apply(html, [
        this,
        clone
    ].concat(args));
};
function memoizeHTML(query) {
    return htmlCache[query] || (htmlCache[query] = createElement(query));
}
function setChildren(parent) {
    var children = [], len = arguments.length - 1;
    while(len-- > 0)children[len] = arguments[len + 1];
    var parentEl = getEl(parent);
    var current = traverse(parent, children, parentEl.firstChild);
    while(current){
        var next = current.nextSibling;
        unmount(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    var current = _current;
    var childEls = Array(children.length);
    for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
    for(var i$1 = 0; i$1 < children.length; i$1++){
        var child = children[i$1];
        if (!child) continue;
        var childEl = childEls[i$1];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if (isNode(childEl)) {
            var next = current && current.nextSibling;
            var exists = child.__redom_index != null;
            var replace = exists && next === childEls[i$1 + 1];
            mount(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}
function listPool(View, key, initData) {
    return new ListPool(View, key, initData);
}
var ListPool = function ListPool(View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.oldLookup = {};
    this.lookup = {};
    this.oldViews = [];
    this.views = [];
    if (key != null) this.key = typeof key === 'function' ? key : propKey(key);
};
ListPool.prototype.update = function update(data, context) {
    var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
    var keySet = key != null;
    var oldLookup = this.lookup;
    var newLookup = {};
    var newViews = Array(data.length);
    var oldViews = this.views;
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var view = void 0;
        if (keySet) {
            var id = key(item);
            view = oldLookup[id] || new View(initData, item, i, data);
            newLookup[id] = view;
            view.__redom_id = id;
        } else view = oldViews[i] || new View(initData, item, i, data);
        view.update && view.update(item, i, data, context);
        var el7 = getEl(view.el);
        el7.__redom_view = view;
        newViews[i] = view;
    }
    this.oldViews = oldViews;
    this.views = newViews;
    this.oldLookup = oldLookup;
    this.lookup = newLookup;
};
function propKey(key) {
    return function(item) {
        return item[key];
    };
}
function list(parent, View, key, initData) {
    return new List(parent, View, key, initData);
}
var List = function List(parent, View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.views = [];
    this.pool = new ListPool(View, key, initData);
    this.el = ensureEl(parent);
    this.keySet = key != null;
};
List.prototype.update = function update(data, context) {
    if (data === void 0) data = [];
    var ref = this;
    var keySet = ref.keySet;
    var oldViews = this.views;
    this.pool.update(data, context);
    var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;
    if (keySet) for(var i = 0; i < oldViews.length; i++){
        var oldView = oldViews[i];
        var id = oldView.__redom_id;
        if (lookup[id] == null) {
            oldView.__redom_index = null;
            unmount(this, oldView);
        }
    }
    for(var i$1 = 0; i$1 < views.length; i$1++){
        var view = views[i$1];
        view.__redom_index = i$1;
    }
    setChildren(this, views);
    if (keySet) this.lookup = lookup;
    this.views = views;
};
List.extend = function extendList(parent, View, key, initData) {
    return List.bind(List, parent, View, key, initData);
};
list.extend = List.extend;
/* global Node */ function place(View, initData) {
    return new Place(View, initData);
}
var Place = function Place(View, initData) {
    this.el = text('');
    this.visible = false;
    this.view = null;
    this._placeholder = this.el;
    if (View instanceof Node) this._el = View;
    else if (View.el instanceof Node) {
        this._el = View;
        this.view = View;
    } else this._View = View;
    this._initData = initData;
};
Place.prototype.update = function update(visible, data) {
    var placeholder = this._placeholder;
    var parentNode = this.el.parentNode;
    if (visible) {
        if (!this.visible) {
            if (this._el) {
                mount(parentNode, this._el, placeholder);
                unmount(parentNode, placeholder);
                this.el = getEl(this._el);
                this.visible = visible;
            } else {
                var View = this._View;
                var view = new View(this._initData);
                this.el = getEl(view);
                this.view = view;
                mount(parentNode, view, placeholder);
                unmount(parentNode, placeholder);
            }
        }
        this.view && this.view.update && this.view.update(data);
    } else if (this.visible) {
        if (this._el) {
            mount(parentNode, placeholder, this._el);
            unmount(parentNode, this._el);
            this.el = placeholder;
            this.visible = visible;
            return;
        }
        mount(parentNode, placeholder, this.view);
        unmount(parentNode, this.view);
        this.el = placeholder;
        this.view = null;
    }
    this.visible = visible;
};
/* global Node */ function router(parent, Views, initData) {
    return new Router(parent, Views, initData);
}
var Router = function Router(parent, Views, initData) {
    this.el = ensureEl(parent);
    this.Views = Views;
    this.initData = initData;
};
Router.prototype.update = function update(route, data) {
    if (route !== this.route) {
        var Views = this.Views;
        var View = Views[route];
        this.route = route;
        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
        else this.view = View && new View(this.initData, data);
        setChildren(this.el, [
            this.view
        ]);
    }
    this.view && this.view.update && this.view.update(data, route);
};
var ns = 'http://www.w3.org/2000/svg';
var svgCache = {};
function svg(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === 'string') element = memoizeSVG(query).cloneNode(false);
    else if (isNode(query)) element = query.cloneNode(false);
    else if (type === 'function') {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error('At least one argument required');
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var s = svg;
svg.extend = function extendSvg(query) {
    var clone = memoizeSVG(query);
    return svg.bind(this, clone);
};
svg.ns = ns;
function memoizeSVG(query) {
    return svgCache[query] || (svgCache[query] = createElement(query, ns));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lyHGp":[function(require,module,exports) {
/**
 * @name creditcard.js 3.0.16
 * @license MIT
 * @author ContaAzul (contaazul.com)
 */ (function(g, f) {
    f(exports);
})(this, function(exports) {
    'use strict';
    var CARDS = [
        {
            name: 'Banescard',
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: 'Maxxvan',
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: 'Cabal',
            bins: /^(604324|604330|604337|604203|604338)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: 'GoodCard',
            bins: /^(606387|605680|605674|603574)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: 'Elo',
            bins: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(6509[0-9])|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: 'Diners',
            bins: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            codeLength: 3
        },
        {
            name: 'Discover',
            bins: /^6(?:011|5[0-9]{2}|4[4-9][0-9]{1}|(22(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5]$)[0-9]{10}$))[0-9]{12}$/,
            codeLength: 4
        },
        {
            name: 'Amex',
            bins: /^3[47][0-9]{13}$/,
            codeLength: 4
        },
        {
            name: 'Aura',
            bins: /^50[0-9]{14,17}$/,
            codeLength: 3
        },
        {
            name: 'Mastercard',
            bins: /^(603136|603689|608619|606200|603326|605919|608783|607998|603690|604891|603600|603134|608718|603680|608710|604998)|(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
            codeLength: 3
        },
        {
            name: 'Visa',
            bins: /^4[0-9]{12}(?:[0-9]{3})?$/,
            codeLength: 3
        },
        {
            name: 'Hipercard',
            bins: /^(38[0-9]{17}|60[0-9]{14})$/,
            codeLength: 3
        },
        {
            name: 'JCB',
            bins: /^(?:2131|1800|35\d{3})\d{11}$/,
            codeLength: 3
        }
    ];
    var MILLENNIUM = 1000;
    var DEFAULT_CODE_LENGTH = 3;
    var getCreditCardNameByNumber = function getCreditCardNameByNumber(number) {
        return findCreditCardObjectByNumber(number).name || 'Credit card is invalid!';
    };
    var isSecurityCodeValid = function isSecurityCodeValid(creditCardNumber, securityCode) {
        var numberLength = getCreditCardCodeLengthByNumber(creditCardNumber);
        return new RegExp("^[0-9]{".concat(numberLength, "}$")).test(securityCode);
    };
    var isExpirationDateValid = function isExpirationDateValid(month, year) {
        return isValidMonth(month) && isValidYear(year) && isFutureOrPresentDate(month, year);
    };
    var isValid = function isValid(number) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cards = options.cards;
        var rawNumber = removeNonNumbersCaracteres(number);
        if (hasSomeInvalidDigit(number) || !hasCorrectLength(rawNumber)) return false;
        var sum = sumNumber(rawNumber);
        return checkSum(sum) && validateCardsWhenRequired(number, cards);
    };
    function validateCardsWhenRequired(number, cards) {
        return !cards || !cards.length || validateCards(number, cards);
    }
    function validateCards(number, cards) {
        return areCardsSupported(cards) && cards.map(function(c) {
            return c.toLowerCase();
        }).includes(getCreditCardNameByNumber(number).toLowerCase());
    }
    function hasCorrectLength(number) {
        return number && number.length <= 19;
    }
    function removeNonNumbersCaracteres(number) {
        return number.replace(/\D/g, '');
    }
    function hasSomeInvalidDigit(creditcardNumber) {
        var invalidDigits = new RegExp('[^0-9- ]');
        return invalidDigits.test(creditcardNumber);
    }
    function checkSum(sum) {
        return sum > 0 && sum % 10 === 0;
    }
    function areCardsSupported(passedCards) {
        var supportedCards = CARDS.map(function(c) {
            return c.name.toLowerCase();
        });
        return passedCards.every(function(c) {
            return supportedCards.includes(c.toLowerCase());
        });
    }
    function findCreditCardObjectByNumber(number) {
        if (!number) return {};
        var numberOnly = number.replace(/[^\d]/g, '');
        return CARDS.find(function(card) {
            return card.bins.test(numberOnly) && card;
        }) || {};
    }
    function getCreditCardCodeLengthByNumber(number) {
        return findCreditCardObjectByNumber(number).codeLength || DEFAULT_CODE_LENGTH;
    }
    function isValidMonth(month) {
        return !isNaN(month) && month >= 1 && month <= 12;
    }
    function isValidYear(year) {
        return !isNaN(year) && isValidFullYear(formatFullYear(year));
    }
    function formatFullYear(year) {
        if (year.length === 2) return dateRange(year);
        return year.length === 4 ? year : 0;
    }
    function dateRange() {
        var increaseYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var year = parseInt(increaseYear);
        var today = new Date();
        return Math.floor(today.getFullYear() / MILLENNIUM) * MILLENNIUM + year;
    }
    function isValidFullYear(year) {
        return year >= dateRange() && year <= dateRange(MILLENNIUM);
    }
    function isFutureOrPresentDate(month, year) {
        var fullYear = formatFullYear(year);
        var currentDate = new Date();
        var expirationDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), 1);
        expirationDate.setFullYear(fullYear, month - 1, 1);
        return currentDate <= expirationDate;
    }
    function sumNumber(number) {
        var computed = [
            0,
            2,
            4,
            6,
            8,
            1,
            3,
            5,
            7,
            9
        ];
        var sum = 0;
        var digit = 0;
        var i = number.length;
        var even = true;
        while(i--){
            digit = Number(number[i]);
            sum += (even = !even) ? computed[digit] : digit;
        }
        return sum;
    }
    exports.getCreditCardNameByNumber = getCreditCardNameByNumber;
    exports.isExpirationDateValid = isExpirationDateValid;
    exports.isSecurityCodeValid = isSecurityCodeValid;
    exports.isValid = isValid;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}],"aLznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMask", ()=>_inputJsDefault.default
);
parcelHelpers.export(exports, "default", ()=>_holderJsDefault.default
);
parcelHelpers.export(exports, "Masked", ()=>_baseJsDefault.default
);
parcelHelpers.export(exports, "MaskedPattern", ()=>_patternJsDefault.default
);
parcelHelpers.export(exports, "MaskedEnum", ()=>_enumJsDefault.default
);
parcelHelpers.export(exports, "MaskedRange", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "MaskedNumber", ()=>_numberJsDefault.default
);
parcelHelpers.export(exports, "MaskedDate", ()=>_dateJsDefault.default
);
parcelHelpers.export(exports, "MaskedRegExp", ()=>_regexpJsDefault.default
);
parcelHelpers.export(exports, "MaskedFunction", ()=>_functionJsDefault.default
);
parcelHelpers.export(exports, "MaskedDynamic", ()=>_dynamicJsDefault.default
);
parcelHelpers.export(exports, "createMask", ()=>_factoryJsDefault.default
);
parcelHelpers.export(exports, "MaskElement", ()=>_maskElementJsDefault.default
);
parcelHelpers.export(exports, "HTMLMaskElement", ()=>_htmlMaskElementJsDefault.default
);
parcelHelpers.export(exports, "HTMLContenteditableMaskElement", ()=>_htmlContenteditableMaskElementJsDefault.default
);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>_pipeJs.PIPE_TYPE
);
parcelHelpers.export(exports, "createPipe", ()=>_pipeJs.createPipe
);
parcelHelpers.export(exports, "pipe", ()=>_pipeJs.pipe
);
var _holderJs = require("./core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _rollupPluginBabelHelpersB054Ecd2Js = require("./_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("./core/utils.js");
var _changeDetailsJs = require("./core/change-details.js");
var _actionDetailsJs = require("./core/action-details.js");
var _continuousTailDetailsJs = require("./core/continuous-tail-details.js");
var _inputDefinitionJs = require("./masked/pattern/input-definition.js");
var _fixedDefinitionJs = require("./masked/pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./masked/pattern/chunk-tail-details.js");
var _cursorJs = require("./masked/pattern/cursor.js");
var _inputJs = require("./controls/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _baseJs = require("./masked/base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _patternJs = require("./masked/pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _enumJs = require("./masked/enum.js");
var _enumJsDefault = parcelHelpers.interopDefault(_enumJs);
var _rangeJs = require("./masked/range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _numberJs = require("./masked/number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _dateJs = require("./masked/date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _regexpJs = require("./masked/regexp.js");
var _regexpJsDefault = parcelHelpers.interopDefault(_regexpJs);
var _functionJs = require("./masked/function.js");
var _functionJsDefault = parcelHelpers.interopDefault(_functionJs);
var _dynamicJs = require("./masked/dynamic.js");
var _dynamicJsDefault = parcelHelpers.interopDefault(_dynamicJs);
var _factoryJs = require("./masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./controls/mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlMaskElementJs = require("./controls/html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./controls/html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _pipeJs = require("./masked/pipe.js");
try {
    globalThis.IMask = _holderJsDefault.default;
} catch (e) {}

},{"./core/holder.js":"fNs7n","./_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./core/utils.js":"hh2Rx","./core/change-details.js":"cDdFe","./core/action-details.js":"cJg34","./core/continuous-tail-details.js":"5MbDY","./masked/pattern/input-definition.js":"lGvsS","./masked/pattern/fixed-definition.js":"fnLC7","./masked/pattern/chunk-tail-details.js":"a8Q24","./masked/pattern/cursor.js":"1K9Ff","./controls/input.js":"bZfiB","./masked/base.js":"i9dza","./masked/pattern.js":"edg1G","./masked/enum.js":"dmeoh","./masked/range.js":"iHvQL","./masked/number.js":"gHi3R","./masked/date.js":"1V3CB","./masked/regexp.js":"7B25G","./masked/function.js":"64ffz","./masked/dynamic.js":"kPiRi","./masked/factory.js":"4c29b","./controls/mask-element.js":"6dhyp","./controls/html-mask-element.js":"exheL","./controls/html-contenteditable-mask-element.js":"l1S15","./masked/pipe.js":"knGz0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNs7n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IMask
);
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */ function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1NjF5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>_createClass
);
parcelHelpers.export(exports, "a", ()=>_classCallCheck
);
parcelHelpers.export(exports, "b", ()=>_objectWithoutProperties
);
parcelHelpers.export(exports, "c", ()=>_typeof
);
parcelHelpers.export(exports, "d", ()=>_inherits
);
parcelHelpers.export(exports, "e", ()=>_createSuper
);
parcelHelpers.export(exports, "f", ()=>_slicedToArray
);
parcelHelpers.export(exports, "g", ()=>_get
);
parcelHelpers.export(exports, "h", ()=>_getPrototypeOf
);
parcelHelpers.export(exports, "i", ()=>_set
);
function _typeof(obj1) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return _get.apply(this, arguments);
}
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _defineProperty(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh2Rx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Selection range */ parcelHelpers.export(exports, "DIRECTION", ()=>DIRECTION
);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp
);
parcelHelpers.export(exports, "forceDirection", ()=>forceDirection
);
parcelHelpers.export(exports, "indexInDirection", ()=>indexInDirection
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "normalizePrepare", ()=>normalizePrepare
);
parcelHelpers.export(exports, "objectIncludes", ()=>objectIncludes
);
parcelHelpers.export(exports, "posInDirection", ()=>posInDirection
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("./change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
/** Checks if value is string */ function isString(str) {
    return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/ var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/ /** Returns next char index in direction */ function indexInDirection(pos, direction) {
    if (direction === DIRECTION.LEFT) --pos;
    return pos;
}
/** Returns next char position in direction */ function posInDirection(pos, direction) {
    switch(direction){
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
            return --pos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
            return ++pos;
        default:
            return pos;
    }
}
/** */ function forceDirection(direction) {
    switch(direction){
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT;
        default:
            return direction;
    }
}
/** Escapes regular expression control chars */ function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [
        prep,
        new _changeDetailsJsDefault.default()
    ];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a), arrB = Array.isArray(b), i;
    if (arrA && arrB) {
        if (a.length != b.length) return false;
        for(i = 0; i < a.length; i++){
            if (!objectIncludes(a[i], b[i])) return false;
        }
        return true;
    }
    if (arrA != arrB) return false;
    if (a && b && _rollupPluginBabelHelpersB054Ecd2Js.c(a) === 'object' && _rollupPluginBabelHelpersB054Ecd2Js.c(b) === 'object') {
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;
        for(i = 0; i < keys.length; i++){
            // $FlowFixMe ... ???
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }
        for(i = 0; i < keys.length; i++){
            if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        }
        return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') return a.toString() === b.toString();
    return false;
}

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./change-details.js":"cDdFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDdFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChangeDetails
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/ var ChangeDetails = /*#__PURE__*/ function() {
    /** Inserted symbols */ /** Can skip chars */ /** Additional offset if any changes occurred before tail */ /** Raw inserted is used by dynamic mask */ function ChangeDetails1(details) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, ChangeDetails1);
        Object.assign(this, {
            inserted: '',
            rawInserted: '',
            skip: false,
            tailShift: 0
        }, details);
    }
    /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */ _rollupPluginBabelHelpersB054Ecd2Js._(ChangeDetails1, [
        {
            key: "aggregate",
            value: function aggregate(details) {
                this.rawInserted += details.rawInserted;
                this.skip = this.skip || details.skip;
                this.inserted += details.inserted;
                this.tailShift += details.tailShift;
                return this;
            }
        },
        {
            key: "offset",
            get: function get() {
                return this.tailShift + this.inserted.length;
            }
        }
    ]);
    return ChangeDetails1;
}();

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJg34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ActionDetails
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("./utils.js");
var _changeDetailsJs = require("./change-details.js");
/** Provides details of changing input */ var ActionDetails = /*#__PURE__*/ function() {
    /** Current input value */ /** Current cursor position */ /** Old input value */ /** Old selection */ function ActionDetails1(value, cursorPos, oldValue, oldSelection) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, ActionDetails1);
        this.value = value;
        this.cursorPos = cursorPos;
        this.oldValue = oldValue;
        this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)
        while(this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos))--this.oldSelection.start;
    }
    /**
    Start changing position
    @readonly
  */ _rollupPluginBabelHelpersB054Ecd2Js._(ActionDetails1, [
        {
            key: "startChangePos",
            get: function get() {
                return Math.min(this.cursorPos, this.oldSelection.start);
            }
        },
        {
            key: "insertedCount",
            get: function get() {
                return this.cursorPos - this.startChangePos;
            }
        },
        {
            key: "inserted",
            get: function get() {
                return this.value.substr(this.startChangePos, this.insertedCount);
            }
        },
        {
            key: "removedCount",
            get: function get() {
                // Math.max for opposite operation
                return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
            }
        },
        {
            key: "removed",
            get: function get() {
                return this.oldValue.substr(this.startChangePos, this.removedCount);
            }
        },
        {
            key: "head",
            get: function get() {
                return this.value.substring(0, this.startChangePos);
            }
        },
        {
            key: "tail",
            get: function get() {
                return this.value.substring(this.startChangePos + this.insertedCount);
            }
        },
        {
            key: "removeDirection",
            get: function get() {
                if (!this.removedCount || this.insertedCount) return _utilsJs.DIRECTION.NONE; // align right if delete at right
                return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? _utilsJs.DIRECTION.RIGHT : _utilsJs.DIRECTION.LEFT;
            }
        }
    ]);
    return ActionDetails1;
}();

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./utils.js":"hh2Rx","./change-details.js":"cDdFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MbDY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ContinuousTailDetails
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
/** Provides details of continuous extracted tail */ var ContinuousTailDetails = /*#__PURE__*/ function() {
    /** Tail value as string */ /** Tail start position */ /** Start position */ function ContinuousTailDetails1() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var stop = arguments.length > 2 ? arguments[2] : undefined;
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, ContinuousTailDetails1);
        this.value = value;
        this.from = from;
        this.stop = stop;
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(ContinuousTailDetails1, [
        {
            key: "toString",
            value: function toString() {
                return this.value;
            }
        },
        {
            key: "extend",
            value: function extend(tail) {
                this.value += String(tail);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(masked) {
                return masked.append(this.toString(), {
                    tail: true
                }).aggregate(masked._appendPlaceholder());
            }
        },
        {
            key: "state",
            get: function get() {
                return {
                    value: this.value,
                    from: this.from,
                    stop: this.stop
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        },
        {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
                var shiftChar = this.value[0];
                this.value = this.value.slice(1);
                return shiftChar;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (!this.value.length) return '';
                var shiftChar = this.value[this.value.length - 1];
                this.value = this.value.slice(0, -1);
                return shiftChar;
            }
        }
    ]);
    return ContinuousTailDetails1;
}();

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGvsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_INPUT_DEFINITIONS", ()=>DEFAULT_INPUT_DEFINITIONS
);
parcelHelpers.export(exports, "default", ()=>PatternInputDefinition
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../../_rollupPluginBabelHelpers-b054ecd2.js");
var _factoryJs = require("../factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _holderJs = require("../../core/holder.js");
var _excluded = [
    "mask"
];
var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
};
/** */ var PatternInputDefinition = /*#__PURE__*/ function() {
    /** */ /** */ /** */ /** */ /** */ /** */ /** */ function PatternInputDefinition1(opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, PatternInputDefinition1);
        var mask = opts.mask, blockOpts = _rollupPluginBabelHelpersB054Ecd2Js.b(opts, _excluded);
        this.masked = _factoryJsDefault.default({
            mask: mask
        });
        Object.assign(this, blockOpts);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(PatternInputDefinition1, [
        {
            key: "reset",
            value: function reset() {
                this.isFilled = false;
                this.masked.reset();
            }
        },
        {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                if (fromPos === 0 && toPos >= 1) {
                    this.isFilled = false;
                    return this.masked.remove(fromPos, toPos);
                }
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "value",
            get: function get() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this.masked.unmaskedValue;
            }
        },
        {
            key: "isComplete",
            get: function get() {
                return Boolean(this.masked.value) || this.isOptional;
            }
        },
        {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (this.isFilled) return new _changeDetailsJsDefault.default();
                var state = this.masked.state; // simulate input
                var details = this.masked._appendChar(ch, flags);
                if (details.inserted && this.doValidate(flags) === false) {
                    details.inserted = details.rawInserted = '';
                    this.masked.state = state;
                }
                if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
                details.skip = !details.inserted && !this.isOptional;
                this.isFilled = Boolean(details.inserted);
                return details;
            }
        },
        {
            key: "append",
            value: function append() {
                var _this$masked;
                // TODO probably should be done via _appendChar
                return (_this$masked = this.masked).append.apply(_this$masked, arguments);
            }
        },
        {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new _changeDetailsJsDefault.default();
                if (this.isFilled || this.isOptional) return details;
                this.isFilled = true;
                details.inserted = this.placeholderChar;
                return details;
            }
        },
        {
            key: "_appendEager",
            value: function _appendEager() {
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "extractTail",
            value: function extractTail() {
                var _this$masked2;
                return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
            }
        },
        {
            key: "appendTail",
            value: function appendTail() {
                var _this$masked3;
                return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;
                return this.masked.extractInput(fromPos, toPos, flags);
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilsJs.DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this.value.length;
                var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
                switch(direction){
                    case _utilsJs.DIRECTION.LEFT:
                    case _utilsJs.DIRECTION.FORCE_LEFT:
                        return this.isComplete ? boundPos : minPos;
                    case _utilsJs.DIRECTION.RIGHT:
                    case _utilsJs.DIRECTION.FORCE_RIGHT:
                        return this.isComplete ? boundPos : maxPos;
                    case _utilsJs.DIRECTION.NONE:
                    default:
                        return boundPos;
                }
            }
        },
        {
            key: "doValidate",
            value: function doValidate() {
                var _this$masked4, _this$parent;
                return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {
                this.masked.doCommit();
            }
        },
        {
            key: "state",
            get: function get() {
                return {
                    masked: this.masked.state,
                    isFilled: this.isFilled
                };
            },
            set: function set(state) {
                this.masked.state = state.masked;
                this.isFilled = state.isFilled;
            }
        }
    ]);
    return PatternInputDefinition1;
}();

},{"../../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../factory.js":"4c29b","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c29b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMask
);
parcelHelpers.export(exports, "maskedClass", ()=>maskedClass
);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../core/change-details.js");
/** Get Masked class by mask type */ function maskedClass(mask) {
    if (mask == null) throw new Error('mask property should be defined');
     // $FlowFixMe
    if (mask instanceof RegExp) return _holderJsDefault.default.MaskedRegExp; // $FlowFixMe
    if (_utilsJs.isString(mask)) return _holderJsDefault.default.MaskedPattern; // $FlowFixMe
    if (mask instanceof Date || mask === Date) return _holderJsDefault.default.MaskedDate; // $FlowFixMe
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _holderJsDefault.default.MaskedNumber; // $FlowFixMe
    if (Array.isArray(mask) || mask === Array) return _holderJsDefault.default.MaskedDynamic; // $FlowFixMe
    if (_holderJsDefault.default.Masked && mask.prototype instanceof _holderJsDefault.default.Masked) return mask; // $FlowFixMe
    if (mask instanceof _holderJsDefault.default.Masked) return mask.constructor; // $FlowFixMe
    if (mask instanceof Function) return _holderJsDefault.default.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe
    return _holderJsDefault.default.Masked;
}
/** Creates new {@link Masked} depending on mask type */ function createMask(opts) {
    // $FlowFixMe
    if (_holderJsDefault.default.Masked && opts instanceof _holderJsDefault.default.Masked) return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask; // $FlowFixMe
    if (_holderJsDefault.default.Masked && mask instanceof _holderJsDefault.default.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
}
_holderJsDefault.default.createMask = createMask;

},{"../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/change-details.js":"cDdFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnLC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternFixedDefinition
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var PatternFixedDefinition = /*#__PURE__*/ function() {
    /** */ /** */ /** */ /** */ /** */ /** */ function PatternFixedDefinition1(opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, PatternFixedDefinition1);
        Object.assign(this, opts);
        this._value = '';
        this.isFixed = true;
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(PatternFixedDefinition1, [
        {
            key: "value",
            get: function get() {
                return this._value;
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this.isUnmasking ? this.value : '';
            }
        },
        {
            key: "reset",
            value: function reset() {
                this._isRawInput = false;
                this._value = '';
            }
        },
        {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                if (!this._value) this._isRawInput = false;
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilsJs.DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this._value.length;
                switch(direction){
                    case _utilsJs.DIRECTION.LEFT:
                    case _utilsJs.DIRECTION.FORCE_LEFT:
                        return minPos;
                    case _utilsJs.DIRECTION.NONE:
                    case _utilsJs.DIRECTION.RIGHT:
                    case _utilsJs.DIRECTION.FORCE_RIGHT:
                    default:
                        return maxPos;
                }
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
            }
        },
        {
            key: "isComplete",
            get: function get() {
                return true;
            }
        },
        {
            key: "isFilled",
            get: function get() {
                return Boolean(this._value);
            }
        },
        {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details = new _changeDetailsJsDefault.default();
                if (this._value) return details;
                var appended = this.char === ch;
                var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
                if (isResolved) details.rawInserted = this.char;
                this._value = details.inserted = this.char;
                this._isRawInput = isResolved && (flags.raw || flags.input);
                return details;
            }
        },
        {
            key: "_appendEager",
            value: function _appendEager() {
                return this._appendChar(this.char);
            }
        },
        {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new _changeDetailsJsDefault.default();
                if (this._value) return details;
                this._value = details.inserted = this.char;
                return details;
            }
        },
        {
            key: "extractTail",
            value: function extractTail() {
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new _continuousTailDetailsJsDefault.default('');
            } // $FlowFixMe no ideas
        },
        {
            key: "appendTail",
            value: function appendTail(tail) {
                if (_utilsJs.isString(tail)) tail = new _continuousTailDetailsJsDefault.default(String(tail));
                return tail.appendTo(this);
            }
        },
        {
            key: "append",
            value: function append(str, flags, tail) {
                var details = this._appendChar(str[0], flags);
                if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
                return details;
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {}
        },
        {
            key: "state",
            get: function get() {
                return {
                    _value: this._value,
                    _isRawInput: this._isRawInput
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        }
    ]);
    return PatternFixedDefinition1;
}();

},{"../../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8Q24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChunksTailDetails
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _excluded = [
    "chunks"
];
var ChunksTailDetails = /*#__PURE__*/ function() {
    /** */ function ChunksTailDetails1() {
        var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, ChunksTailDetails1);
        this.chunks = chunks;
        this.from = from;
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(ChunksTailDetails1, [
        {
            key: "toString",
            value: function toString() {
                return this.chunks.map(String).join('');
            } // $FlowFixMe no ideas
        },
        {
            key: "extend",
            value: function extend(tailChunk) {
                if (!String(tailChunk)) return;
                if (_utilsJs.isString(tailChunk)) tailChunk = new _continuousTailDetailsJsDefault.default(String(tailChunk));
                var lastChunk = this.chunks[this.chunks.length - 1];
                var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
                if (tailChunk instanceof _continuousTailDetailsJsDefault.default) {
                    // check the ability to extend previous chunk
                    if (extendLast) // extend previous chunk
                    lastChunk.extend(tailChunk.toString());
                    else // append new chunk
                    this.chunks.push(tailChunk);
                } else if (tailChunk instanceof ChunksTailDetails1) {
                    if (tailChunk.stop == null) {
                        // unwrap floating chunks to parent, keeping `from` pos
                        var firstTailChunk;
                        while(tailChunk.chunks.length && tailChunk.chunks[0].stop == null){
                            firstTailChunk = tailChunk.chunks.shift();
                            firstTailChunk.from += tailChunk.from;
                            this.extend(firstTailChunk);
                        }
                    } // if tail chunk still has value
                    if (tailChunk.toString()) {
                        // if chunks contains stops, then popup stop to container
                        tailChunk.stop = tailChunk.blockIndex;
                        this.chunks.push(tailChunk);
                    }
                }
            }
        },
        {
            key: "appendTo",
            value: function appendTo(masked) {
                // $FlowFixMe
                if (!(masked instanceof _holderJsDefault.default.MaskedPattern)) {
                    var tail = new _continuousTailDetailsJsDefault.default(this.toString());
                    return tail.appendTo(masked);
                }
                var details = new _changeDetailsJsDefault.default();
                for(var ci = 0; ci < this.chunks.length && !details.skip; ++ci){
                    var chunk = this.chunks[ci];
                    var lastBlockIter = masked._mapPosToBlock(masked.value.length);
                    var stop = chunk.stop;
                    var chunkBlock = void 0;
                    if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
                        if (chunk instanceof ChunksTailDetails1 || masked._stops.indexOf(stop) >= 0) details.aggregate(masked._appendPlaceholder(stop));
                        chunkBlock = chunk instanceof ChunksTailDetails1 && masked._blocks[stop];
                    }
                    if (chunkBlock) {
                        var tailDetails = chunkBlock.appendTail(chunk);
                        tailDetails.skip = false; // always ignore skip, it will be set on last
                        details.aggregate(tailDetails);
                        masked._value += tailDetails.inserted; // get not inserted chars
                        var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                        if (remainChars) details.aggregate(masked.append(remainChars, {
                            tail: true
                        }));
                    } else details.aggregate(masked.append(chunk.toString(), {
                        tail: true
                    }));
                }
                return details;
            }
        },
        {
            key: "state",
            get: function get() {
                return {
                    chunks: this.chunks.map(function(c) {
                        return c.state;
                    }),
                    from: this.from,
                    stop: this.stop,
                    blockIndex: this.blockIndex
                };
            },
            set: function set(state) {
                var chunks = state.chunks, props = _rollupPluginBabelHelpersB054Ecd2Js.b(state, _excluded);
                Object.assign(this, props);
                this.chunks = chunks.map(function(cstate) {
                    var chunk = "chunks" in cstate ? new ChunksTailDetails1() : new _continuousTailDetailsJsDefault.default(); // $FlowFixMe already checked above
                    chunk.state = cstate;
                    return chunk;
                });
            }
        },
        {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
                var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
                var ci = 0;
                while(ci < this.chunks.length){
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.unshift(chunkShiftPos);
                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        ++ci;
                    } else // clean if chunk has no value
                    this.chunks.splice(ci, 1);
                    if (shiftChar) return shiftChar;
                }
                return '';
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (!this.chunks.length) return '';
                var ci = this.chunks.length - 1;
                while(0 <= ci){
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.shift();
                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        --ci;
                    } else // clean if chunk has no value
                    this.chunks.splice(ci, 1);
                    if (shiftChar) return shiftChar;
                }
                return '';
            }
        }
    ]);
    return ChunksTailDetails1;
}();

},{"../../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K9Ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternCursor
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../../_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("../../core/utils.js");
var _changeDetailsJs = require("../../core/change-details.js");
var PatternCursor = /*#__PURE__*/ function() {
    function PatternCursor1(masked, pos) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, PatternCursor1);
        this.masked = masked;
        this._log = [];
        var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? {
            index: 0,
            offset: 0
        } : {
            index: this.masked._blocks.length,
            offset: 0
        }), offset = _ref.offset, index = _ref.index;
        this.offset = offset;
        this.index = index;
        this.ok = false;
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(PatternCursor1, [
        {
            key: "block",
            get: function get() {
                return this.masked._blocks[this.index];
            }
        },
        {
            key: "pos",
            get: function get() {
                return this.masked._blockStartPos(this.index) + this.offset;
            }
        },
        {
            key: "state",
            get: function get() {
                return {
                    index: this.index,
                    offset: this.offset,
                    ok: this.ok
                };
            },
            set: function set(s) {
                Object.assign(this, s);
            }
        },
        {
            key: "pushState",
            value: function pushState() {
                this._log.push(this.state);
            }
        },
        {
            key: "popState",
            value: function popState() {
                var s = this._log.pop();
                this.state = s;
                return s;
            }
        },
        {
            key: "bindBlock",
            value: function bindBlock() {
                if (this.block) return;
                if (this.index < 0) {
                    this.index = 0;
                    this.offset = 0;
                }
                if (this.index >= this.masked._blocks.length) {
                    this.index = this.masked._blocks.length - 1;
                    this.offset = this.block.value.length;
                }
            }
        },
        {
            key: "_pushLeft",
            value: function _pushLeft(fn) {
                this.pushState();
                for(this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0){
                    var _this$block;
                    if (fn()) return this.ok = true;
                }
                return this.ok = false;
            }
        },
        {
            key: "_pushRight",
            value: function _pushRight(fn) {
                this.pushState();
                for(this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0){
                    if (fn()) return this.ok = true;
                }
                return this.ok = false;
            }
        },
        {
            key: "pushLeftBeforeFilled",
            value: function pushLeftBeforeFilled() {
                var _this = this;
                return this._pushLeft(function() {
                    if (_this.block.isFixed || !_this.block.value) return;
                    _this.offset = _this.block.nearestInputPos(_this.offset, _utilsJs.DIRECTION.FORCE_LEFT);
                    if (_this.offset !== 0) return true;
                });
            }
        },
        {
            key: "pushLeftBeforeInput",
            value: function pushLeftBeforeInput() {
                var _this2 = this;
                // cases:
                // filled input: 00|
                // optional empty input: 00[]|
                // nested block: XX<[]>|
                return this._pushLeft(function() {
                    if (_this2.block.isFixed) return;
                    _this2.offset = _this2.block.nearestInputPos(_this2.offset, _utilsJs.DIRECTION.LEFT);
                    return true;
                });
            }
        },
        {
            key: "pushLeftBeforeRequired",
            value: function pushLeftBeforeRequired() {
                var _this3 = this;
                return this._pushLeft(function() {
                    if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
                    _this3.offset = _this3.block.nearestInputPos(_this3.offset, _utilsJs.DIRECTION.LEFT);
                    return true;
                });
            }
        },
        {
            key: "pushRightBeforeFilled",
            value: function pushRightBeforeFilled() {
                var _this4 = this;
                return this._pushRight(function() {
                    if (_this4.block.isFixed || !_this4.block.value) return;
                    _this4.offset = _this4.block.nearestInputPos(_this4.offset, _utilsJs.DIRECTION.FORCE_RIGHT);
                    if (_this4.offset !== _this4.block.value.length) return true;
                });
            }
        },
        {
            key: "pushRightBeforeInput",
            value: function pushRightBeforeInput() {
                var _this5 = this;
                return this._pushRight(function() {
                    if (_this5.block.isFixed) return; // const o = this.offset;
                    _this5.offset = _this5.block.nearestInputPos(_this5.offset, _utilsJs.DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
                    // aa|X
                    // aa<X|[]>X_    - this will not work
                    // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
                    return true;
                });
            }
        },
        {
            key: "pushRightBeforeRequired",
            value: function pushRightBeforeRequired() {
                var _this6 = this;
                return this._pushRight(function() {
                    if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_
                    _this6.offset = _this6.block.nearestInputPos(_this6.offset, _utilsJs.DIRECTION.NONE);
                    return true;
                });
            }
        }
    ]);
    return PatternCursor1;
}();

},{"../../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../../core/utils.js":"hh2Rx","../../core/change-details.js":"cDdFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZfiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputMask
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("../core/utils.js");
var _actionDetailsJs = require("../core/action-details.js");
var _actionDetailsJsDefault = parcelHelpers.interopDefault(_actionDetailsJs);
var _dateJs = require("../masked/date.js");
var _factoryJs = require("../masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _patternJs = require("../masked/pattern.js");
var _baseJs = require("../masked/base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("../masked/pattern/input-definition.js");
var _fixedDefinitionJs = require("../masked/pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("../masked/pattern/chunk-tail-details.js");
var _cursorJs = require("../masked/pattern/cursor.js");
var _regexpJs = require("../masked/regexp.js");
var _rangeJs = require("../masked/range.js");
var _excluded = [
    "mask"
];
/** Listens to element events and controls changes between element and {@link Masked} */ var InputMask = /*#__PURE__*/ function() {
    /**
    View element
    @readonly
  */ /**
    Internal {@link Masked} model
    @readonly
  */ /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */ function InputMask1(el, opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, InputMask1);
        this.el = el instanceof _maskElementJsDefault.default ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _htmlContenteditableMaskElementJsDefault.default(el) : new _htmlMaskElementJsDefault.default(el);
        this.masked = _factoryJsDefault.default(opts);
        this._listeners = {};
        this._value = '';
        this._unmaskedValue = '';
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents(); // refresh
        this.updateValue();
        this._onChange();
    }
    /** Read or update mask */ _rollupPluginBabelHelpersB054Ecd2Js._(InputMask1, [
        {
            key: "mask",
            get: function get() {
                return this.masked.mask;
            },
            set: function set(mask) {
                if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update
                if (!(mask instanceof _holderJsDefault.default.Masked) && this.masked.constructor === _factoryJs.maskedClass(mask)) {
                    this.masked.updateOptions({
                        mask: mask
                    });
                    return;
                }
                var masked = _factoryJsDefault.default({
                    mask: mask
                });
                masked.unmaskedValue = this.masked.unmaskedValue;
                this.masked = masked;
            }
        },
        {
            key: "maskEquals",
            value: function maskEquals(mask) {
                var _this$masked;
                return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
            }
        },
        {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(str) {
                this.masked.value = str;
                this.updateControl();
                this.alignCursor();
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this._unmaskedValue;
            },
            set: function set(str) {
                this.masked.unmaskedValue = str;
                this.updateControl();
                this.alignCursor();
            }
        },
        {
            key: "typedValue",
            get: function get() {
                return this.masked.typedValue;
            },
            set: function set(val) {
                this.masked.typedValue = val;
                this.updateControl();
                this.alignCursor();
            }
        },
        {
            key: "_bindEvents",
            value: function _bindEvents() {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                });
            }
        },
        {
            key: "_unbindEvents",
            value: function _unbindEvents() {
                if (this.el) this.el.unbindEvents();
            }
        },
        {
            key: "_fireEvent",
            value: function _fireEvent(ev) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                var listeners = this._listeners[ev];
                if (!listeners) return;
                listeners.forEach(function(l) {
                    return l.apply(void 0, args);
                });
            }
        },
        {
            key: "selectionStart",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            }
        },
        {
            key: "cursorPos",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            },
            set: function set(pos) {
                if (!this.el || !this.el.isActive) return;
                this.el.select(pos, pos);
                this._saveSelection();
            }
        },
        {
            key: "_saveSelection",
            value: function /* ev */ _saveSelection() {
                if (this.value !== this.el.value) console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
                this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                };
            }
        },
        {
            key: "updateValue",
            value: function updateValue() {
                this.masked.value = this.el.value;
                this._value = this.masked.value;
            }
        },
        {
            key: "updateControl",
            value: function updateControl() {
                var newUnmaskedValue = this.masked.unmaskedValue;
                var newValue = this.masked.value;
                var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                this._unmaskedValue = newUnmaskedValue;
                this._value = newValue;
                if (this.el.value !== newValue) this.el.value = newValue;
                if (isChanged) this._fireChangeEvents();
            }
        },
        {
            key: "updateOptions",
            value: function updateOptions(opts) {
                var mask = opts.mask, restOpts = _rollupPluginBabelHelpersB054Ecd2Js.b(opts, _excluded);
                var updateMask = !this.maskEquals(mask);
                var updateOpts = !_utilsJs.objectIncludes(this.masked, restOpts);
                if (updateMask) this.mask = mask;
                if (updateOpts) this.masked.updateOptions(restOpts);
                if (updateMask || updateOpts) this.updateControl();
            }
        },
        {
            key: "updateCursor",
            value: function updateCursor(cursorPos) {
                if (cursorPos == null) return;
                this.cursorPos = cursorPos; // also queue change cursor for mobile browsers
                this._delayUpdateCursor(cursorPos);
            }
        },
        {
            key: "_delayUpdateCursor",
            value: function _delayUpdateCursor(cursorPos) {
                var _this = this;
                this._abortUpdateCursor();
                this._changingCursorPos = cursorPos;
                this._cursorChanging = setTimeout(function() {
                    if (!_this.el) return; // if was destroyed
                    _this.cursorPos = _this._changingCursorPos;
                    _this._abortUpdateCursor();
                }, 10);
            }
        },
        {
            key: "_fireChangeEvents",
            value: function _fireChangeEvents() {
                this._fireEvent('accept', this._inputEvent);
                if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
            }
        },
        {
            key: "_abortUpdateCursor",
            value: function _abortUpdateCursor() {
                if (this._cursorChanging) {
                    clearTimeout(this._cursorChanging);
                    delete this._cursorChanging;
                }
            }
        },
        {
            key: "alignCursor",
            value: function alignCursor() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _utilsJs.DIRECTION.LEFT));
            }
        },
        {
            key: "alignCursorFriendly",
            value: function alignCursorFriendly() {
                if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
                this.alignCursor();
            }
        },
        {
            key: "on",
            value: function on(ev, handler) {
                if (!this._listeners[ev]) this._listeners[ev] = [];
                this._listeners[ev].push(handler);
                return this;
            }
        },
        {
            key: "off",
            value: function off(ev, handler) {
                if (!this._listeners[ev]) return this;
                if (!handler) {
                    delete this._listeners[ev];
                    return this;
                }
                var hIndex = this._listeners[ev].indexOf(handler);
                if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                return this;
            }
        },
        {
            key: "_onInput",
            value: function _onInput(e) {
                this._inputEvent = e;
                this._abortUpdateCursor(); // fix strange IE behavior
                if (!this._selection) return this.updateValue();
                var details = new _actionDetailsJsDefault.default(this.el.value, this.cursorPos, this.value, this._selection);
                var oldRawValue = this.masked.rawInputValue;
                var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
                // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
                var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _utilsJs.DIRECTION.NONE;
                var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                if (removeDirection !== _utilsJs.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _utilsJs.DIRECTION.NONE);
                this.updateControl();
                this.updateCursor(cursorPos);
                delete this._inputEvent;
            }
        },
        {
            key: "_onChange",
            value: function _onChange() {
                if (this.value !== this.el.value) this.updateValue();
                this.masked.doCommit();
                this.updateControl();
                this._saveSelection();
            }
        },
        {
            key: "_onDrop",
            value: function _onDrop(ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        },
        {
            key: "_onFocus",
            value: function _onFocus(ev) {
                this.alignCursorFriendly();
            }
        },
        {
            key: "_onClick",
            value: function _onClick(ev) {
                this.alignCursorFriendly();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._unbindEvents(); // $FlowFixMe why not do so?
                this._listeners.length = 0; // $FlowFixMe
                delete this.el;
            }
        }
    ]);
    return InputMask1;
}();
_holderJsDefault.default.InputMask = InputMask;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/utils.js":"hh2Rx","../core/action-details.js":"cJg34","../masked/date.js":"1V3CB","../masked/factory.js":"4c29b","./mask-element.js":"6dhyp","./html-mask-element.js":"exheL","./html-contenteditable-mask-element.js":"l1S15","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../masked/pattern.js":"edg1G","../masked/base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","../masked/pattern/input-definition.js":"lGvsS","../masked/pattern/fixed-definition.js":"fnLC7","../masked/pattern/chunk-tail-details.js":"a8Q24","../masked/pattern/cursor.js":"1K9Ff","../masked/regexp.js":"7B25G","../masked/range.js":"iHvQL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1V3CB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDate
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Date mask */ var MaskedDate = /*#__PURE__*/ function(_MaskedPattern) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedDate1, _MaskedPattern);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedDate1);
    /** Pattern mask for date according to {@link MaskedDate#format} */ /** Start date */ /** End date */ /** */ /**
    @param {Object} opts
  */ function MaskedDate1(opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedDate1);
        return _super.call(this, Object.assign({}, MaskedDate1.DEFAULTS, opts));
    }
    /**
    @override
  */ _rollupPluginBabelHelpersB054Ecd2Js._(MaskedDate1, [
        {
            key: "_update",
            value: function _update(opts) {
                if (opts.mask === Date) delete opts.mask;
                if (opts.pattern) opts.mask = opts.pattern;
                var blocks = opts.blocks;
                opts.blocks = Object.assign({}, MaskedDate1.GET_DEFAULT_BLOCKS()); // adjust year block
                if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
                if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                    opts.blocks.m.from = opts.min.getMonth() + 1;
                    opts.blocks.m.to = opts.max.getMonth() + 1;
                    if (opts.blocks.m.from === opts.blocks.m.to) {
                        opts.blocks.d.from = opts.min.getDate();
                        opts.blocks.d.to = opts.max.getDate();
                    }
                }
                Object.assign(opts.blocks, this.blocks, blocks); // add autofix
                Object.keys(opts.blocks).forEach(function(bk) {
                    var b = opts.blocks[bk];
                    if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
                });
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDate1.prototype), "_update", this).call(this, opts);
            }
        },
        {
            key: "doValidate",
            value: function doValidate() {
                var _get2;
                var date = this.date;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                return (_get2 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDate1.prototype), "doValidate", this)).call.apply(_get2, [
                    this
                ].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
            }
        },
        {
            key: "isDateExist",
            value: function isDateExist(str) {
                return this.format(this.parse(str, this), this).indexOf(str) >= 0;
            }
        },
        {
            key: "date",
            get: function get() {
                return this.typedValue;
            },
            set: function set(date) {
                this.typedValue = date;
            }
        },
        {
            key: "typedValue",
            get: function get() {
                return this.isComplete ? _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDate1.prototype), "typedValue", this) : null;
            },
            set: function set(value) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDate1.prototype), "typedValue", value, this, true);
            }
        },
        {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return mask === Date || _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDate1.prototype), "maskEquals", this).call(this, mask);
            }
        }
    ]);
    return MaskedDate1;
}(_patternJsDefault.default);
MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
        if (!date) return '';
        var day = String(date.getDate()).padStart(2, '0');
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var year = date.getFullYear();
        return [
            day,
            month,
            year
        ].join('.');
    },
    parse: function parse(str) {
        var _str$split = str.split('.'), _str$split2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
        return new Date(year, month - 1, day);
    }
};
MaskedDate.GET_DEFAULT_BLOCKS = function() {
    return {
        d: {
            mask: _rangeJsDefault.default,
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: _rangeJsDefault.default,
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: _rangeJsDefault.default,
            from: 1900,
            to: 9999
        }
    };
};
_holderJsDefault.default.MaskedDate = MaskedDate;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./pattern.js":"edg1G","./range.js":"iHvQL","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./pattern/input-definition.js":"lGvsS","./factory.js":"4c29b","./pattern/fixed-definition.js":"fnLC7","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edg1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedPattern
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _cursorJs = require("./pattern/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _regexpJs = require("./regexp.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _excluded = [
    "_blocks"
];
/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/ var MaskedPattern = /*#__PURE__*/ function(_Masked) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedPattern1, _Masked);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedPattern1);
    /** */ /** */ /** Single char for empty input */ /** Show placeholder only when needed */ function MaskedPattern1() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedPattern1);
        // TODO type $Shape<MaskedPatternOptions>={} does not work
        opts.definitions = Object.assign({}, _inputDefinitionJs.DEFAULT_INPUT_DEFINITIONS, opts.definitions);
        return _super.call(this, Object.assign({}, MaskedPattern1.DEFAULTS, opts));
    }
    /**
    @override
    @param {Object} opts
  */ _rollupPluginBabelHelpersB054Ecd2Js._(MaskedPattern1, [
        {
            key: "_update",
            value: function _update() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                opts.definitions = Object.assign({}, this.definitions, opts.definitions);
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "_update", this).call(this, opts);
                this._rebuildMask();
            }
        },
        {
            key: "_rebuildMask",
            value: function _rebuildMask() {
                var _this = this;
                var defs = this.definitions;
                this._blocks = [];
                this._stops = [];
                this._maskedBlocks = {};
                var pattern = this.mask;
                if (!pattern || !defs) return;
                var unmaskingBlock = false;
                var optionalBlock = false;
                for(var i = 0; i < pattern.length; ++i){
                    if (this.blocks) {
                        var _ret = function() {
                            var p = pattern.slice(i);
                            var bNames = Object.keys(_this.blocks).filter(function(bName) {
                                return p.indexOf(bName) === 0;
                            }); // order by key length
                            bNames.sort(function(a, b) {
                                return b.length - a.length;
                            }); // use block name with max length
                            var bName1 = bNames[0];
                            if (bName1) {
                                // $FlowFixMe no ideas
                                var maskedBlock = _factoryJsDefault.default(Object.assign({
                                    parent: _this,
                                    lazy: _this.lazy,
                                    eager: _this.eager,
                                    placeholderChar: _this.placeholderChar,
                                    overwrite: _this.overwrite
                                }, _this.blocks[bName1]));
                                if (maskedBlock) {
                                    _this._blocks.push(maskedBlock); // store block index
                                    if (!_this._maskedBlocks[bName1]) _this._maskedBlocks[bName1] = [];
                                    _this._maskedBlocks[bName1].push(_this._blocks.length - 1);
                                }
                                i += bName1.length - 1;
                                return "continue";
                            }
                        }();
                        if (_ret === "continue") continue;
                    }
                    var char = pattern[i];
                    var isInput = char in defs;
                    if (char === MaskedPattern1.STOP_CHAR) {
                        this._stops.push(this._blocks.length);
                        continue;
                    }
                    if (char === '{' || char === '}') {
                        unmaskingBlock = !unmaskingBlock;
                        continue;
                    }
                    if (char === '[' || char === ']') {
                        optionalBlock = !optionalBlock;
                        continue;
                    }
                    if (char === MaskedPattern1.ESCAPE_CHAR) {
                        ++i;
                        char = pattern[i];
                        if (!char) break;
                        isInput = false;
                    }
                    var def = isInput ? new _inputDefinitionJsDefault.default({
                        parent: this,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        mask: defs[char],
                        isOptional: optionalBlock
                    }) : new _fixedDefinitionJsDefault.default({
                        char: char,
                        eager: this.eager,
                        isUnmasking: unmaskingBlock
                    });
                    this._blocks.push(def);
                }
            }
        },
        {
            key: "state",
            get: function get() {
                return Object.assign({}, _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "state", this), {
                    _blocks: this._blocks.map(function(b) {
                        return b.state;
                    })
                });
            },
            set: function set(state) {
                var _blocks = state._blocks, maskedState = _rollupPluginBabelHelpersB054Ecd2Js.b(state, _excluded);
                this._blocks.forEach(function(b, bi) {
                    return b.state = _blocks[bi];
                });
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "state", maskedState, this, true);
            }
        },
        {
            key: "reset",
            value: function reset() {
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "reset", this).call(this);
                this._blocks.forEach(function(b) {
                    return b.reset();
                });
            }
        },
        {
            key: "isComplete",
            get: function get() {
                return this._blocks.every(function(b) {
                    return b.isComplete;
                });
            }
        },
        {
            key: "isFilled",
            get: function get() {
                return this._blocks.every(function(b) {
                    return b.isFilled;
                });
            }
        },
        {
            key: "isFixed",
            get: function get() {
                return this._blocks.every(function(b) {
                    return b.isFixed;
                });
            }
        },
        {
            key: "isOptional",
            get: function get() {
                return this._blocks.every(function(b) {
                    return b.isOptional;
                });
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {
                this._blocks.forEach(function(b) {
                    return b.doCommit();
                });
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "doCommit", this).call(this);
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this._blocks.reduce(function(str, b) {
                    return str += b.unmaskedValue;
                }, '');
            },
            set: function set(unmaskedValue) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
        },
        {
            key: "value",
            get: function get() {
                // TODO return _value when not in change?
                return this._blocks.reduce(function(str, b) {
                    return str += b.value;
                }, '');
            },
            set: function set(value) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "value", value, this, true);
            }
        },
        {
            key: "appendTail",
            value: function appendTail(tail) {
                return _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
            }
        },
        {
            key: "_appendEager",
            value: function _appendEager() {
                var _this$_mapPosToBlock;
                var details = new _changeDetailsJsDefault.default();
                var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
                if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks
                if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
                for(var bi = startBlockIndex; bi < this._blocks.length; ++bi){
                    var d = this._blocks[bi]._appendEager();
                    if (!d.inserted) break;
                    details.aggregate(d);
                }
                return details;
            }
        },
        {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var blockIter = this._mapPosToBlock(this.value.length);
                var details = new _changeDetailsJsDefault.default();
                if (!blockIter) return details;
                for(var bi = blockIter.index;; ++bi){
                    var _flags$_beforeTailSta;
                    var _block = this._blocks[bi];
                    if (!_block) break;
                    var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
                        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
                    }));
                    var skip = blockDetails.skip;
                    details.aggregate(blockDetails);
                    if (skip || blockDetails.rawInserted) break; // go next char
                }
                return details;
            }
        },
        {
            key: "extractTail",
            value: function extractTail() {
                var _this2 = this;
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var chunkTail = new _chunkTailDetailsJsDefault.default();
                if (fromPos === toPos) return chunkTail;
                this._forEachBlocksInRange(fromPos, toPos, function(b, bi, bFromPos, bToPos) {
                    var blockChunk = b.extractTail(bFromPos, bToPos);
                    blockChunk.stop = _this2._findStopBefore(bi);
                    blockChunk.from = _this2._blockStartPos(bi);
                    if (blockChunk instanceof _chunkTailDetailsJsDefault.default) blockChunk.blockIndex = bi;
                    chunkTail.extend(blockChunk);
                });
                return chunkTail;
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var fromPos1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                if (fromPos1 === toPos1) return '';
                var input = '';
                this._forEachBlocksInRange(fromPos1, toPos1, function(b, _, fromPos, toPos) {
                    input += b.extractInput(fromPos, toPos, flags);
                });
                return input;
            }
        },
        {
            key: "_findStopBefore",
            value: function _findStopBefore(blockIndex) {
                var stopBefore;
                for(var si = 0; si < this._stops.length; ++si){
                    var stop = this._stops[si];
                    if (stop <= blockIndex) stopBefore = stop;
                    else break;
                }
                return stopBefore;
            }
        },
        {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder(toBlockIndex) {
                var _this3 = this;
                var details = new _changeDetailsJsDefault.default();
                if (this.lazy && toBlockIndex == null) return details;
                var startBlockIter = this._mapPosToBlock(this.value.length);
                if (!startBlockIter) return details;
                var startBlockIndex = startBlockIter.index;
                var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
                this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b) {
                    if (!b.lazy || toBlockIndex != null) {
                        // $FlowFixMe `_blocks` may not be present
                        var args = b._blocks != null ? [
                            b._blocks.length
                        ] : [];
                        var bDetails = b._appendPlaceholder.apply(b, args);
                        _this3._value += bDetails.inserted;
                        details.aggregate(bDetails);
                    }
                });
                return details;
            }
        },
        {
            key: "_mapPosToBlock",
            value: function _mapPosToBlock(pos) {
                var accVal = '';
                for(var bi = 0; bi < this._blocks.length; ++bi){
                    var _block2 = this._blocks[bi];
                    var blockStartPos = accVal.length;
                    accVal += _block2.value;
                    if (pos <= accVal.length) return {
                        index: bi,
                        offset: pos - blockStartPos
                    };
                }
            }
        },
        {
            key: "_blockStartPos",
            value: function _blockStartPos(blockIndex) {
                return this._blocks.slice(0, blockIndex).reduce(function(pos, b) {
                    return pos += b.value.length;
                }, 0);
            }
        },
        {
            key: "_forEachBlocksInRange",
            value: function _forEachBlocksInRange(fromPos) {
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var fn = arguments.length > 2 ? arguments[2] : undefined;
                var fromBlockIter = this._mapPosToBlock(fromPos);
                if (fromBlockIter) {
                    var toBlockIter = this._mapPosToBlock(toPos); // process first block
                    var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                    var fromBlockStartPos = fromBlockIter.offset;
                    var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                    fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
                    if (toBlockIter && !isSameBlock) {
                        // process intermediate blocks
                        for(var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi)fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                         // process last block
                        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                    }
                }
            }
        },
        {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var removeDetails = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedPattern1.prototype), "remove", this).call(this, fromPos, toPos);
                this._forEachBlocksInRange(fromPos, toPos, function(b, _, bFromPos, bToPos) {
                    removeDetails.aggregate(b.remove(bFromPos, bToPos));
                });
                return removeDetails;
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilsJs.DIRECTION.NONE;
                if (!this._blocks.length) return 0;
                var cursor = new _cursorJsDefault.default(this, cursorPos);
                if (direction === _utilsJs.DIRECTION.NONE) {
                    // -------------------------------------------------
                    // NONE should only go out from fixed to the right!
                    // -------------------------------------------------
                    if (cursor.pushRightBeforeInput()) return cursor.pos;
                    cursor.popState();
                    if (cursor.pushLeftBeforeInput()) return cursor.pos;
                    return this.value.length;
                } // FORCE is only about a|* otherwise is 0
                if (direction === _utilsJs.DIRECTION.LEFT || direction === _utilsJs.DIRECTION.FORCE_LEFT) {
                    // try to break fast when *|a
                    if (direction === _utilsJs.DIRECTION.LEFT) {
                        cursor.pushRightBeforeFilled();
                        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                        cursor.popState();
                    } // forward flow
                    cursor.pushLeftBeforeInput();
                    cursor.pushLeftBeforeRequired();
                    cursor.pushLeftBeforeFilled(); // backward flow
                    if (direction === _utilsJs.DIRECTION.LEFT) {
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                    }
                    if (cursor.ok) return cursor.pos;
                    if (direction === _utilsJs.DIRECTION.FORCE_LEFT) return 0;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos; // cursor.popState();
                    // if (
                    //   cursor.pushRightBeforeInput() &&
                    //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
                    //   (!this.lazy || this.extractInput())
                    // ) return cursor.pos;
                    return 0;
                }
                if (direction === _utilsJs.DIRECTION.RIGHT || direction === _utilsJs.DIRECTION.FORCE_RIGHT) {
                    // forward flow
                    cursor.pushRightBeforeInput();
                    cursor.pushRightBeforeRequired();
                    if (cursor.pushRightBeforeFilled()) return cursor.pos;
                    if (direction === _utilsJs.DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    return this.nearestInputPos(cursorPos, _utilsJs.DIRECTION.LEFT);
                }
                return cursorPos;
            }
        },
        {
            key: "maskedBlock",
            value: function maskedBlock(name) {
                return this.maskedBlocks(name)[0];
            }
        },
        {
            key: "maskedBlocks",
            value: function maskedBlocks(name) {
                var _this4 = this;
                var indices = this._maskedBlocks[name];
                if (!indices) return [];
                return indices.map(function(gi) {
                    return _this4._blocks[gi];
                });
            }
        }
    ]);
    return MaskedPattern1;
}(_baseJsDefault.default);
MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _inputDefinitionJsDefault.default;
MaskedPattern.FixedDefinition = _fixedDefinitionJsDefault.default;
_holderJsDefault.default.MaskedPattern = MaskedPattern;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","./pattern/input-definition.js":"lGvsS","./pattern/fixed-definition.js":"fnLC7","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./factory.js":"4c29b","../core/holder.js":"fNs7n","./regexp.js":"7B25G","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9dza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Masked
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Supported mask type */ /** Provides common masking stuff */ var Masked = /*#__PURE__*/ function() {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773
    /** @type {Mask} */ /** */ // $FlowFixMe no ideas
    /** Transforms value before mask processing */ /** Validates if value is acceptable */ /** Does additional processing in the end of editing */ /** Format typed value to string */ /** Parse strgin to get typed value */ /** Enable characters overwriting */ /** */ /** */ function Masked1(opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, Masked1);
        this._value = '';
        this._update(Object.assign({}, Masked1.DEFAULTS, opts));
        this.isInitialized = true;
    }
    /** Sets and applies new options */ _rollupPluginBabelHelpersB054Ecd2Js._(Masked1, [
        {
            key: "updateOptions",
            value: function updateOptions(opts) {
                if (!Object.keys(opts).length) return; // $FlowFixMe
                this.withValueRefresh(this._update.bind(this, opts));
            }
        },
        {
            key: "_update",
            value: function _update(opts) {
                Object.assign(this, opts);
            }
        },
        {
            key: "state",
            get: function get() {
                return {
                    _value: this.value
                };
            },
            set: function set(state) {
                this._value = state._value;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this._value = '';
            }
        },
        {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(value) {
                this.resolve(value);
            }
        },
        {
            key: "resolve",
            value: function resolve(value) {
                this.reset();
                this.append(value, {
                    input: true
                }, '');
                this.doCommit();
                return this.value;
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this.value;
            },
            set: function set(value) {
                this.reset();
                this.append(value, {}, '');
                this.doCommit();
            }
        },
        {
            key: "typedValue",
            get: function get() {
                return this.doParse(this.value);
            },
            set: function set(value) {
                this.value = this.doFormat(value);
            }
        },
        {
            key: "rawInputValue",
            get: function get() {
                return this.extractInput(0, this.value.length, {
                    raw: true
                });
            },
            set: function set(value) {
                this.reset();
                this.append(value, {
                    raw: true
                }, '');
                this.doCommit();
            }
        },
        {
            key: "isComplete",
            get: function get() {
                return true;
            }
        },
        {
            key: "isFilled",
            get: function get() {
                return this.isComplete;
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                return cursorPos;
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return this.value.slice(fromPos, toPos);
            }
        },
        {
            key: "extractTail",
            value: function extractTail() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new _continuousTailDetailsJsDefault.default(this.extractInput(fromPos, toPos), fromPos);
            }
        },
        {
            key: "appendTail",
            value: function appendTail(tail) {
                if (_utilsJs.isString(tail)) tail = new _continuousTailDetailsJsDefault.default(String(tail));
                return tail.appendTo(this);
            }
        },
        {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                if (!ch) return new _changeDetailsJsDefault.default();
                this._value += ch;
                return new _changeDetailsJsDefault.default({
                    inserted: ch,
                    rawInserted: ch
                });
            }
        },
        {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var checkTail = arguments.length > 2 ? arguments[2] : undefined;
                var consistentState = this.state;
                var details;
                var _normalizePrepare = _utilsJs.normalizePrepare(this.doPrepare(ch, flags));
                var _normalizePrepare2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_normalizePrepare, 2);
                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                details = details.aggregate(this._appendCharRaw(ch, flags));
                if (details.inserted) {
                    var consistentTail;
                    var appended = this.doValidate(flags) !== false;
                    if (appended && checkTail != null) {
                        // validation ok, check tail
                        var beforeTailState = this.state;
                        if (this.overwrite === true) {
                            consistentTail = checkTail.state;
                            checkTail.unshift(this.value.length);
                        }
                        var tailDetails = this.appendTail(checkTail);
                        appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift
                        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
                            this.state = beforeTailState;
                            consistentTail = checkTail.state;
                            checkTail.shift();
                            tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString();
                        } // if ok, rollback state after tail
                        if (appended && tailDetails.inserted) this.state = beforeTailState;
                    } // revert all if something went wrong
                    if (!appended) {
                        details = new _changeDetailsJsDefault.default();
                        this.state = consistentState;
                        if (checkTail && consistentTail) checkTail.state = consistentTail;
                    }
                }
                return details;
            }
        },
        {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "_appendEager",
            value: function _appendEager() {
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "append",
            value: function append(str, flags, tail) {
                if (!_utilsJs.isString(str)) throw new Error('value should be string');
                var details = new _changeDetailsJsDefault.default();
                var checkTail = _utilsJs.isString(tail) ? new _continuousTailDetailsJsDefault.default(String(tail)) : tail;
                if (flags && flags.tail) flags._beforeTailState = this.state;
                for(var ci = 0; ci < str.length; ++ci)details.aggregate(this._appendChar(str[ci], flags, checkTail));
                 // append tail but aggregate only tailShift
                if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
                if (this.eager && flags !== null && flags !== void 0 && flags.input && str) details.aggregate(this._appendEager());
                return details;
            }
        },
        {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                return new _changeDetailsJsDefault.default();
            }
        },
        {
            key: "withValueRefresh",
            value: function withValueRefresh(fn) {
                if (this._refreshing || !this.isInitialized) return fn();
                this._refreshing = true;
                var rawInput = this.rawInputValue;
                var value = this.value;
                var ret = fn();
                this.rawInputValue = rawInput; // append lost trailing chars at end
                if (this.value && this.value !== value && value.indexOf(this.value) === 0) this.append(value.slice(this.value.length), {}, '');
                delete this._refreshing;
                return ret;
            }
        },
        {
            key: "runIsolated",
            value: function runIsolated(fn) {
                if (this._isolated || !this.isInitialized) return fn(this);
                this._isolated = true;
                var state = this.state;
                var ret = fn(this);
                this.state = state;
                delete this._isolated;
                return ret;
            }
        },
        {
            key: "doPrepare",
            value: function doPrepare(str) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.prepare ? this.prepare(str, this, flags) : str;
            }
        },
        {
            key: "doValidate",
            value: function doValidate(flags) {
                return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {
                if (this.commit) this.commit(this.value, this);
            }
        },
        {
            key: "doFormat",
            value: function doFormat(value) {
                return this.format ? this.format(value, this) : value;
            }
        },
        {
            key: "doParse",
            value: function doParse(str) {
                return this.parse ? this.parse(str, this) : str;
            }
        },
        {
            key: "splice",
            value: function splice(start, deleteCount, inserted, removeDirection) {
                var tailPos = start + deleteCount;
                var tail = this.extractTail(tailPos);
                var oldRawValue;
                if (this.eager) {
                    removeDirection = _utilsJs.forceDirection(removeDirection);
                    oldRawValue = this.extractInput(0, tailPos, {
                        raw: true
                    });
                }
                var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? _utilsJs.DIRECTION.NONE : removeDirection);
                var details = new _changeDetailsJsDefault.default({
                    tailShift: startChangePos - start // adjust tailShift if start was aligned
                }).aggregate(this.remove(startChangePos));
                if (this.eager && removeDirection !== _utilsJs.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
                    if (removeDirection === _utilsJs.DIRECTION.FORCE_LEFT) {
                        var valLength;
                        while(oldRawValue === this.rawInputValue && (valLength = this.value.length))details.aggregate(new _changeDetailsJsDefault.default({
                            tailShift: -1
                        })).aggregate(this.remove(valLength - 1));
                    } else if (removeDirection === _utilsJs.DIRECTION.FORCE_RIGHT) tail.unshift();
                }
                return details.aggregate(this.append(inserted, {
                    input: true
                }, tail));
            }
        },
        {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return this.mask === mask;
            }
        }
    ]);
    return Masked1;
}();
Masked.DEFAULTS = {
    format: function format(v) {
        return v;
    },
    parse: function parse(v) {
        return v;
    }
};
_holderJsDefault.default.Masked = Masked;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7B25G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRegExp
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by RegExp */ var MaskedRegExp = /*#__PURE__*/ function(_Masked) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedRegExp1, _Masked);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedRegExp1);
    function MaskedRegExp1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedRegExp1);
        return _super.apply(this, arguments);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(MaskedRegExp1, [
        {
            key: "_update",
            value: /**
      @override
      @param {Object} opts
    */ function _update(opts) {
                if (opts.mask) opts.validate = function(value) {
                    return value.search(opts.mask) >= 0;
                };
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedRegExp1.prototype), "_update", this).call(this, opts);
            }
        }
    ]);
    return MaskedRegExp1;
}(_baseJsDefault.default);
_holderJsDefault.default.MaskedRegExp = MaskedRegExp;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHvQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRange
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Pattern which accepts ranges */ var MaskedRange = /*#__PURE__*/ function(_MaskedPattern) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedRange1, _MaskedPattern);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedRange1);
    function MaskedRange1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedRange1);
        return _super.apply(this, arguments);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(MaskedRange1, [
        {
            key: "_matchFrom",
            get: /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */ /** Min bound */ /** Max bound */ /** */ function get() {
                return this.maxLength - String(this.from).length;
            }
        },
        {
            key: "_update",
            value: function _update(opts) {
                // TODO type
                opts = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0
                }, opts);
                var maxLength = String(opts.to).length;
                if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                opts.maxLength = maxLength;
                var fromStr = String(opts.from).padStart(maxLength, '0');
                var toStr = String(opts.to).padStart(maxLength, '0');
                var sameCharsCount = 0;
                while(sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount])++sameCharsCount;
                opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedRange1.prototype), "_update", this).call(this, opts);
            }
        },
        {
            key: "isComplete",
            get: function get() {
                return _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedRange1.prototype), "isComplete", this) && Boolean(this.value);
            }
        },
        {
            key: "boundaries",
            value: function boundaries(str) {
                var minstr = '';
                var maxstr = '';
                var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
                if (num) {
                    minstr = '0'.repeat(placeholder.length) + num;
                    maxstr = '9'.repeat(placeholder.length) + num;
                }
                minstr = minstr.padEnd(this.maxLength, '0');
                maxstr = maxstr.padEnd(this.maxLength, '9');
                return [
                    minstr,
                    maxstr
                ];
            } // TODO str is a single char everytime
        },
        {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details;
                var _normalizePrepare = _utilsJs.normalizePrepare(_rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedRange1.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));
                var _normalizePrepare2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_normalizePrepare, 2);
                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                if (!this.autofix || !ch) return ch;
                var fromStr = String(this.from).padStart(this.maxLength, '0');
                var toStr = String(this.to).padStart(this.maxLength, '0');
                var nextVal = this.value + ch;
                if (nextVal.length > this.maxLength) return '';
                var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
                if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
                if (Number(minstr) > this.to) {
                    if (this.autofix === 'pad' && nextVal.length < this.maxLength) return [
                        '',
                        details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))
                    ];
                    return toStr[nextVal.length - 1];
                }
                return ch;
            }
        },
        {
            key: "doValidate",
            value: function doValidate() {
                var _get2;
                var str = this.value;
                var firstNonZero = str.search(/[^0]/);
                if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
                var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _rollupPluginBabelHelpersB054Ecd2Js.f(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedRange1.prototype), "doValidate", this)).call.apply(_get2, [
                    this
                ].concat(args));
            }
        }
    ]);
    return MaskedRange1;
}(_patternJsDefault.default);
_holderJsDefault.default.MaskedRange = MaskedRange;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./pattern.js":"edg1G","../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./pattern/input-definition.js":"lGvsS","./factory.js":"4c29b","./pattern/fixed-definition.js":"fnLC7","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dhyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskElement
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**
  Generic element API to use with mask
  @interface
*/ var MaskElement = /*#__PURE__*/ function() {
    function MaskElement1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskElement1);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(MaskElement1, [
        {
            key: "selectionStart",
            get: /** */ /** */ /** */ /** Safely returns selection start */ function get() {
                var start;
                try {
                    start = this._unsafeSelectionStart;
                } catch (e) {}
                return start != null ? start : this.value.length;
            }
        },
        {
            key: "selectionEnd",
            get: function get() {
                var end;
                try {
                    end = this._unsafeSelectionEnd;
                } catch (e) {}
                return end != null ? end : this.value.length;
            }
        },
        {
            key: "select",
            value: function select(start, end) {
                if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
                try {
                    this._unsafeSelect(start, end);
                } catch (e) {}
            }
        },
        {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {}
        },
        {
            key: "isActive",
            get: function get() {
                return false;
            }
        },
        {
            key: "bindEvents",
            value: function bindEvents(handlers) {}
        },
        {
            key: "unbindEvents",
            value: function unbindEvents() {}
        }
    ]);
    return MaskElement1;
}();
_holderJsDefault.default.MaskElement = MaskElement;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exheL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLMaskElement
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Bridge between HTMLElement and {@link Masked} */ var HTMLMaskElement = /*#__PURE__*/ function(_MaskElement) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(HTMLMaskElement1, _MaskElement);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(HTMLMaskElement1);
    /** Mapping between HTMLElement events and mask internal events */ /** HTMLElement to use mask on */ /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */ function HTMLMaskElement1(input) {
        var _this;
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, HTMLMaskElement1);
        _this = _super.call(this);
        _this.input = input;
        _this._handlers = {};
        return _this;
    }
    /** */ // $FlowFixMe https://github.com/facebook/flow/issues/2839
    _rollupPluginBabelHelpersB054Ecd2Js._(HTMLMaskElement1, [
        {
            key: "rootElement",
            get: function get() {
                var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
                return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
            }
        },
        {
            key: "isActive",
            get: function get() {
                //$FlowFixMe
                return this.input === this.rootElement.activeElement;
            }
        },
        {
            key: "_unsafeSelectionStart",
            get: function get() {
                return this.input.selectionStart;
            }
        },
        {
            key: "_unsafeSelectionEnd",
            get: function get() {
                return this.input.selectionEnd;
            }
        },
        {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                this.input.setSelectionRange(start, end);
            }
        },
        {
            key: "value",
            get: function get() {
                return this.input.value;
            },
            set: function set(value) {
                this.input.value = value;
            }
        },
        {
            key: "bindEvents",
            value: function bindEvents(handlers) {
                var _this2 = this;
                Object.keys(handlers).forEach(function(event) {
                    return _this2._toggleEventHandler(HTMLMaskElement1.EVENTS_MAP[event], handlers[event]);
                });
            }
        },
        {
            key: "unbindEvents",
            value: function unbindEvents() {
                var _this3 = this;
                Object.keys(this._handlers).forEach(function(event) {
                    return _this3._toggleEventHandler(event);
                });
            }
        },
        {
            key: "_toggleEventHandler",
            value: function _toggleEventHandler(event, handler) {
                if (this._handlers[event]) {
                    this.input.removeEventListener(event, this._handlers[event]);
                    delete this._handlers[event];
                }
                if (handler) {
                    this.input.addEventListener(event, handler);
                    this._handlers[event] = handler;
                }
            }
        }
    ]);
    return HTMLMaskElement1;
}(_maskElementJsDefault.default);
HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
};
_holderJsDefault.default.HTMLMaskElement = HTMLMaskElement;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./mask-element.js":"6dhyp","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1S15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLContenteditableMaskElement
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
var HTMLContenteditableMaskElement = /*#__PURE__*/ function(_HTMLMaskElement) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(HTMLContenteditableMaskElement1, _HTMLMaskElement);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(HTMLContenteditableMaskElement1);
    function HTMLContenteditableMaskElement1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, HTMLContenteditableMaskElement1);
        return _super.apply(this, arguments);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(HTMLContenteditableMaskElement1, [
        {
            key: "_unsafeSelectionStart",
            get: /**
      Returns HTMLElement selection start
      @override
    */ function get() {
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();
                var anchorOffset = selection && selection.anchorOffset;
                var focusOffset = selection && selection.focusOffset;
                if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
                return focusOffset;
            }
        },
        {
            key: "_unsafeSelectionEnd",
            get: function get() {
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();
                var anchorOffset = selection && selection.anchorOffset;
                var focusOffset = selection && selection.focusOffset;
                if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
                return focusOffset;
            }
        },
        {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                if (!this.rootElement.createRange) return;
                var range = this.rootElement.createRange();
                range.setStart(this.input.firstChild || this.input, start);
                range.setEnd(this.input.lastChild || this.input, end);
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        },
        {
            key: "value",
            get: function get() {
                // $FlowFixMe
                return this.input.textContent;
            },
            set: function set(value) {
                this.input.textContent = value;
            }
        }
    ]);
    return HTMLContenteditableMaskElement1;
}(_htmlMaskElementJsDefault.default);
_holderJsDefault.default.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmeoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedEnum
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Pattern which validates enum values */ var MaskedEnum = /*#__PURE__*/ function(_MaskedPattern) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedEnum1, _MaskedPattern);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedEnum1);
    function MaskedEnum1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedEnum1);
        return _super.apply(this, arguments);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(MaskedEnum1, [
        {
            key: "_update",
            value: /**
      @override
      @param {Object} opts
    */ function _update(opts) {
                // TODO type
                if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedEnum1.prototype), "_update", this).call(this, opts);
            }
        },
        {
            key: "doValidate",
            value: function doValidate() {
                var _this = this, _get2;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                return this.enum.some(function(e) {
                    return e.indexOf(_this.unmaskedValue) >= 0;
                }) && (_get2 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedEnum1.prototype), "doValidate", this)).call.apply(_get2, [
                    this
                ].concat(args));
            }
        }
    ]);
    return MaskedEnum1;
}(_patternJsDefault.default);
_holderJsDefault.default.MaskedEnum = MaskedEnum;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./pattern.js":"edg1G","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./pattern/input-definition.js":"lGvsS","./factory.js":"4c29b","./pattern/fixed-definition.js":"fnLC7","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHi3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedNumber
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/ var MaskedNumber = /*#__PURE__*/ function(_Masked) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedNumber1, _Masked);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedNumber1);
    /** Single char */ /** Single char */ /** Array of single chars */ /** */ /** */ /** Digits after point */ /** */ /** Flag to remove leading and trailing zeros in the end of editing */ /** Flag to pad trailing zeros after point in the end of editing */ function MaskedNumber1(opts) {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedNumber1);
        return _super.call(this, Object.assign({}, MaskedNumber1.DEFAULTS, opts));
    }
    /**
    @override
  */ _rollupPluginBabelHelpersB054Ecd2Js._(MaskedNumber1, [
        {
            key: "_update",
            value: function _update(opts) {
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "_update", this).call(this, opts);
                this._updateRegExps();
            }
        },
        {
            key: "_updateRegExps",
            value: function _updateRegExps() {
                // use different regexp to process user input (more strict, input suffix) and tail shifting
                var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
                var midInput = '(0|([1-9]+\\d*))?';
                var mid = '\\d*';
                var end = (this.scale ? '(' + _utilsJs.escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
                this._numberRegExpInput = new RegExp(start + midInput + end);
                this._numberRegExp = new RegExp(start + mid + end);
                this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_utilsJs.escapeRegExp).join('') + ']', 'g');
                this._thousandsSeparatorRegExp = new RegExp(_utilsJs.escapeRegExp(this.thousandsSeparator), 'g');
            }
        },
        {
            key: "_removeThousandsSeparators",
            value: function _removeThousandsSeparators(value) {
                return value.replace(this._thousandsSeparatorRegExp, '');
            }
        },
        {
            key: "_insertThousandsSeparators",
            value: function _insertThousandsSeparators(value) {
                // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                var parts = value.split(this.radix);
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                return parts.join(this.radix);
            }
        },
        {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var _get2;
                ch = ch.replace(this._mapToRadixRegExp, this.radix);
                var noSepCh = this._removeThousandsSeparators(ch);
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                var _normalizePrepare = _utilsJs.normalizePrepare((_get2 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "doPrepare", this)).call.apply(_get2, [
                    this,
                    noSepCh
                ].concat(args))), _normalizePrepare2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_normalizePrepare, 2), prepCh = _normalizePrepare2[0], details = _normalizePrepare2[1];
                if (ch && !noSepCh) details.skip = true;
                return [
                    prepCh,
                    details
                ];
            }
        },
        {
            key: "_separatorsCount",
            value: function _separatorsCount(to) {
                var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var count = 0;
                for(var pos = 0; pos < to; ++pos)if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                    ++count;
                    if (extendOnSeparators) to += this.thousandsSeparator.length;
                }
                return count;
            }
        },
        {
            key: "_separatorsCountFromSlice",
            value: function _separatorsCountFromSlice() {
                var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;
                var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
                var _this$_adjustRangeWit2 = _rollupPluginBabelHelpersB054Ecd2Js.f(_this$_adjustRangeWit, 2);
                fromPos = _this$_adjustRangeWit2[0];
                toPos = _this$_adjustRangeWit2[1];
                return this._removeThousandsSeparators(_rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
            }
        },
        {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!this.thousandsSeparator) return _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "_appendCharRaw", this).call(this, ch, flags);
                var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
                this._value = this._removeThousandsSeparators(this.value);
                var appendDetails = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "_appendCharRaw", this).call(this, ch, flags);
                this._value = this._insertThousandsSeparators(this._value);
                var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
                appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                return appendDetails;
            }
        },
        {
            key: "_findSeparatorAround",
            value: function _findSeparatorAround(pos) {
                if (this.thousandsSeparator) {
                    var searchFrom = pos - this.thousandsSeparator.length + 1;
                    var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                    if (separatorPos <= pos) return separatorPos;
                }
                return -1;
            }
        },
        {
            key: "_adjustRangeWithSeparators",
            value: function _adjustRangeWithSeparators(from, to) {
                var separatorAroundFromPos = this._findSeparatorAround(from);
                if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
                var separatorAroundToPos = this._findSeparatorAround(to);
                if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                return [
                    from,
                    to
                ];
            }
        },
        {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
                var _this$_adjustRangeWit4 = _rollupPluginBabelHelpersB054Ecd2Js.f(_this$_adjustRangeWit3, 2);
                fromPos = _this$_adjustRangeWit4[0];
                toPos = _this$_adjustRangeWit4[1];
                var valueBeforePos = this.value.slice(0, fromPos);
                var valueAfterPos = this.value.slice(toPos);
                var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
                return new _changeDetailsJsDefault.default({
                    tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                });
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                if (!this.thousandsSeparator) return cursorPos;
                switch(direction){
                    case _utilsJs.DIRECTION.NONE:
                    case _utilsJs.DIRECTION.LEFT:
                    case _utilsJs.DIRECTION.FORCE_LEFT:
                        var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                        if (separatorAtLeftPos >= 0) {
                            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _utilsJs.DIRECTION.FORCE_LEFT) return separatorAtLeftPos;
                        }
                        break;
                    case _utilsJs.DIRECTION.RIGHT:
                    case _utilsJs.DIRECTION.FORCE_RIGHT:
                        var separatorAtRightPos = this._findSeparatorAround(cursorPos);
                        if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                }
                return cursorPos;
            }
        },
        {
            key: "doValidate",
            value: function doValidate(flags) {
                var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string
                var valid = regexp.test(this._removeThousandsSeparators(this.value));
                if (valid) {
                    // validate as number
                    var number = this.number;
                    valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
                }
                return valid && _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "doValidate", this).call(this, flags);
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {
                if (this.value) {
                    var number = this.number;
                    var validnum = number; // check bounds
                    if (this.min != null) validnum = Math.max(validnum, this.min);
                    if (this.max != null) validnum = Math.min(validnum, this.max);
                    if (validnum !== number) this.unmaskedValue = String(validnum);
                    var formatted = this.value;
                    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                    if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                    this._value = formatted;
                }
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "doCommit", this).call(this);
            }
        },
        {
            key: "_normalizeZeros",
            value: function _normalizeZeros(value) {
                var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros
                parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
                    return sign + num;
                }); // add leading zero
                if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
                if (parts.length > 1) {
                    parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
                    if (!parts[1].length) parts.length = 1; // remove fractional
                }
                return this._insertThousandsSeparators(parts.join(this.radix));
            }
        },
        {
            key: "_padFractionalZeros",
            value: function _padFractionalZeros(value) {
                if (!value) return value;
                var parts = value.split(this.radix);
                if (parts.length < 2) parts.push('');
                parts[1] = parts[1].padEnd(this.scale, '0');
                return parts.join(this.radix);
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
            },
            set: function set(unmaskedValue) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
            }
        },
        {
            key: "typedValue",
            get: function get() {
                return Number(this.unmaskedValue);
            },
            set: function set(n) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedNumber1.prototype), "unmaskedValue", String(n), this, true);
            }
        },
        {
            key: "number",
            get: function get() {
                return this.typedValue;
            },
            set: function set(number) {
                this.typedValue = number;
            }
        },
        {
            key: "allowNegative",
            get: function get() {
                return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
            }
        }
    ]);
    return MaskedNumber1;
}(_baseJsDefault.default);
MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: [
        '.'
    ],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
};
_holderJsDefault.default.MaskedNumber = MaskedNumber;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64ffz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedFunction
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by custom Function */ var MaskedFunction = /*#__PURE__*/ function(_Masked) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedFunction1, _Masked);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedFunction1);
    function MaskedFunction1() {
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedFunction1);
        return _super.apply(this, arguments);
    }
    _rollupPluginBabelHelpersB054Ecd2Js._(MaskedFunction1, [
        {
            key: "_update",
            value: /**
      @override
      @param {Object} opts
    */ function _update(opts) {
                if (opts.mask) opts.validate = opts.mask;
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedFunction1.prototype), "_update", this).call(this, opts);
            }
        }
    ]);
    return MaskedFunction1;
}(_baseJsDefault.default);
_holderJsDefault.default.MaskedFunction = MaskedFunction;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPiRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDynamic
);
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _excluded = [
    "compiledMasks",
    "currentMaskRef",
    "currentMask"
];
/** Dynamic mask for choosing apropriate mask in run-time */ var MaskedDynamic = /*#__PURE__*/ function(_Masked) {
    _rollupPluginBabelHelpersB054Ecd2Js.d(MaskedDynamic1, _Masked);
    var _super = _rollupPluginBabelHelpersB054Ecd2Js.e(MaskedDynamic1);
    /** Currently chosen mask */ /** Compliled {@link Masked} options */ /** Chooses {@link Masked} depending on input value */ /**
    @param {Object} opts
  */ function MaskedDynamic1(opts) {
        var _this;
        _rollupPluginBabelHelpersB054Ecd2Js.a(this, MaskedDynamic1);
        _this = _super.call(this, Object.assign({}, MaskedDynamic1.DEFAULTS, opts));
        _this.currentMask = null;
        return _this;
    }
    /**
    @override
  */ _rollupPluginBabelHelpersB054Ecd2Js._(MaskedDynamic1, [
        {
            key: "_update",
            value: function _update(opts) {
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "_update", this).call(this, opts);
                if ('mask' in opts) // mask could be totally dynamic with only `dispatch` option
                this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m) {
                    return _factoryJsDefault.default(m);
                }) : [];
            }
        },
        {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details = this._applyDispatch(ch, flags);
                if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, flags));
                return details;
            }
        },
        {
            key: "_applyDispatch",
            value: function _applyDispatch() {
                var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                var inputValue = this.rawInputValue;
                var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
                var tailValue = inputValue.slice(insertValue.length);
                var prevMask = this.currentMask;
                var details = new _changeDetailsJsDefault.default();
                var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`
                this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch
                if (this.currentMask) {
                    if (this.currentMask !== prevMask) {
                        // if mask changed reapply input
                        this.currentMask.reset();
                        if (insertValue) {
                            // $FlowFixMe - it's ok, we don't change current mask above
                            var d = this.currentMask.append(insertValue, {
                                raw: true
                            });
                            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                        }
                        if (tailValue) // $FlowFixMe - it's ok, we don't change current mask above
                        details.tailShift += this.currentMask.append(tailValue, {
                            raw: true,
                            tail: true
                        }).tailShift;
                    } else // Dispatch can do something bad with state, so
                    // restore prev mask state
                    this.currentMask.state = prevMaskState;
                }
                return details;
            }
        },
        {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = this._applyDispatch.apply(this, arguments);
                if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
                return details;
            }
        },
        {
            key: "_appendEager",
            value: function _appendEager() {
                var details = this._applyDispatch.apply(this, arguments);
                if (this.currentMask) details.aggregate(this.currentMask._appendEager());
                return details;
            }
        },
        {
            key: "doDispatch",
            value: function doDispatch(appended) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.dispatch(appended, this, flags);
            }
        },
        {
            key: "doValidate",
            value: function doValidate() {
                var _get2, _this$currentMask;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                return (_get2 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "doValidate", this)).call.apply(_get2, [
                    this
                ].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
            }
        },
        {
            key: "reset",
            value: function reset() {
                var _this$currentMask2;
                (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 || _this$currentMask2.reset();
                this.compiledMasks.forEach(function(m) {
                    return m.reset();
                });
            }
        },
        {
            key: "value",
            get: function get() {
                return this.currentMask ? this.currentMask.value : '';
            },
            set: function set(value) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "value", value, this, true);
            }
        },
        {
            key: "unmaskedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.unmaskedValue : '';
            },
            set: function set(unmaskedValue) {
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
        },
        {
            key: "typedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.typedValue : '';
            } // probably typedValue should not be used with dynamic
            ,
            set: function set(value) {
                var unmaskedValue = String(value); // double check it
                if (this.currentMask) {
                    this.currentMask.typedValue = value;
                    unmaskedValue = this.currentMask.unmaskedValue;
                }
                this.unmaskedValue = unmaskedValue;
            }
        },
        {
            key: "isComplete",
            get: function get() {
                var _this$currentMask3;
                return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
            }
        },
        {
            key: "isFilled",
            get: function get() {
                var _this$currentMask4;
                return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var details = new _changeDetailsJsDefault.default();
                if (this.currentMask) {
                    var _this$currentMask5;
                    details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
                    .aggregate(this._applyDispatch());
                }
                return details;
            }
        },
        {
            key: "state",
            get: function get() {
                return Object.assign({}, _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "state", this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map(function(m) {
                        return m.state;
                    }),
                    currentMaskRef: this.currentMask,
                    currentMask: this.currentMask && this.currentMask.state
                });
            },
            set: function set(state) {
                var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _rollupPluginBabelHelpersB054Ecd2Js.b(state, _excluded);
                this.compiledMasks.forEach(function(m, mi) {
                    return m.state = compiledMasks[mi];
                });
                if (currentMaskRef != null) {
                    this.currentMask = currentMaskRef;
                    this.currentMask.state = currentMask;
                }
                _rollupPluginBabelHelpersB054Ecd2Js.i(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "state", maskedState, this, true);
            }
        },
        {
            key: "extractInput",
            value: function extractInput() {
                var _this$currentMask6;
                return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
            }
        },
        {
            key: "extractTail",
            value: function extractTail() {
                var _this$currentMask7, _get3;
                for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "extractTail", this)).call.apply(_get3, [
                    this
                ].concat(args));
            }
        },
        {
            key: "doCommit",
            value: function doCommit() {
                if (this.currentMask) this.currentMask.doCommit();
                _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "doCommit", this).call(this);
            }
        },
        {
            key: "nearestInputPos",
            value: function nearestInputPos() {
                var _this$currentMask8, _get4;
                for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "nearestInputPos", this)).call.apply(_get4, [
                    this
                ].concat(args));
            }
        },
        {
            key: "overwrite",
            get: function get() {
                return this.currentMask ? this.currentMask.overwrite : _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "overwrite", this);
            },
            set: function set(overwrite) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
            }
        },
        {
            key: "eager",
            get: function get() {
                return this.currentMask ? this.currentMask.eager : _rollupPluginBabelHelpersB054Ecd2Js.g(_rollupPluginBabelHelpersB054Ecd2Js.h(MaskedDynamic1.prototype), "eager", this);
            },
            set: function set(eager) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
            }
        },
        {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return Array.isArray(mask) && this.compiledMasks.every(function(m, mi) {
                    var _mask$mi;
                    return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
                });
            }
        }
    ]);
    return MaskedDynamic1;
}(_baseJsDefault.default);
MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
        if (!masked.compiledMasks.length) return;
        var inputValue = masked.rawInputValue; // simulate input
        var inputs = masked.compiledMasks.map(function(m, index) {
            m.reset();
            m.append(inputValue, {
                raw: true
            });
            m.append(appended, flags);
            var weight = m.rawInputValue.length;
            return {
                weight: weight,
                index: index
            };
        }); // pop masks with longer values first
        inputs.sort(function(i1, i2) {
            return i2.weight - i1.weight;
        });
        return masked.compiledMasks[inputs[0].index];
    }
};
_holderJsDefault.default.MaskedDynamic = MaskedDynamic;

},{"../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/change-details.js":"cDdFe","./factory.js":"4c29b","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knGz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>PIPE_TYPE
);
parcelHelpers.export(exports, "createPipe", ()=>createPipe
);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _rollupPluginBabelHelpersB054Ecd2Js = require("../_rollupPluginBabelHelpers-b054ecd2.js");
var _changeDetailsJs = require("../core/change-details.js");
/** Mask pipe source and destination types */ var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */ function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = _factoryJsDefault.default(mask);
    return function(value) {
        return masked.runIsolated(function(m) {
            m[from] = value;
            return m[to];
        });
    };
}
/** Pipes value through mask depending on mask type, source and destination options */ function pipe(value) {
    for(var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)pipeArgs[_key - 1] = arguments[_key];
    return createPipe.apply(void 0, pipeArgs)(value);
}
_holderJsDefault.default.PIPE_TYPE = PIPE_TYPE;
_holderJsDefault.default.createPipe = createPipe;
_holderJsDefault.default.pipe = pipe;

},{"./factory.js":"4c29b","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../_rollupPluginBabelHelpers-b054ecd2.js":"1NjF5","../core/change-details.js":"cDdFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GjRO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "mastercard.11e81818.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aUY3z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "visa.ed5f4866.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
