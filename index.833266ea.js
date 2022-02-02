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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"1bEO8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "635c849b833266ea";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
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
            it = o[Symbol.iterator]();
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
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
        checkedAssets = {
        };
        acceptedAssets = {
        };
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
            } else window.location.reload();
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
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
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"lzYRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _core = require("@elemaudio/core");
var _srvb = require("@elemaudio/srvb");
var _srvbDefault = parcelHelpers.interopDefault(_srvb);
var _teoria = require("teoria");
var _teoriaDefault = parcelHelpers.interopDefault(_teoria);
var _synth = require("./Synth");
var _synthDefault = parcelHelpers.interopDefault(_synth);
var _drawing = require("./drawing");
// Constants
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const canvas = document.getElementById('canvas');
const clone = canvas.cloneNode();
const ctx = canvas.getContext('2d');
const cloneCtx = clone.getContext('2d');
const globalAlpha = 0.96 + Math.random() * 0.05;
let width = canvas.width = clone.width = window.innerWidth;
let height = canvas.height = clone.height = window.innerHeight;
// Must be set after the assignment to width/height, which resets the
// state of the canvas contexts
ctx.globalCompositeOperation = 'lighten';
cloneCtx.globalAlpha = globalAlpha;
// Our mutable app state
const state = {
    frameCount: 0,
    channelData: [
        new Float32Array(512).map((x, i)=>Math.sin(i / 512 * 1 * Math.PI)
        ),
        new Float32Array(512).map((x, i)=>Math.cos(i / 512 * 1 * Math.PI)
        ), 
    ]
};
// Random seed stuff
let baseNote = _teoriaDefault.default.note.fromKey(25 + Math.round(Math.random() * 24));
let accentNote = _teoriaDefault.default.note.fromKey(baseNote.key() + 12);
let scaleType = [
    'major',
    'minor',
    'lydian',
    'mixolydian'
][Math.round(Math.random() * 3)];
let scale = accentNote.scale(scaleType).notes().concat(baseNote.scale(scaleType).notes());
let density = 0.02 + Math.random() * 0.2;
let similarity = Math.random();
console.log(`${baseNote.toString()} ${scaleType} ${density.toFixed(3)}/${similarity.toFixed(3)} alpha:${globalAlpha.toFixed(3)}`);
// Record a bunch of operations against our synth
let syn1 = new _synthDefault.default('ll', 4);
let syn2 = new _synthDefault.default('rr', 4);
let adsrDecay = 3.5;
let nextNote1 = 0;
let nextNote2 = 0;
let bpm = 76;
let n64Rate = 1 / (60 / bpm / 8);
// Eight bars of 16th notes
let atLeastOneNote = false;
while(!atLeastOneNote){
    syn1.reset();
    syn2.reset();
    for(let i = 0; i < 128; ++i){
        let playLeft = Math.random() < density;
        let playSimilar = Math.random() < similarity;
        if (playLeft) {
            syn1.noteOff(nextNote1);
            nextNote1 = scale[Math.floor(Math.random() * (scale.length - 1))].fq();
            syn1.noteOn(nextNote1, 0.125 + Math.random());
            atLeastOneNote = true;
        }
        // If we have high similarity, we duplicate the note event into the right
        // channel synth. If we fail our similarity check, we optionally play whatever
        // note we want in the right channel synth
        if (playLeft && playSimilar) {
            syn2.noteOff(nextNote2);
            nextNote2 = nextNote1;
            syn2.noteOn(nextNote2, Math.random());
        } else if (Math.random() < density) {
            syn2.noteOff(nextNote2);
            nextNote2 = scale[Math.floor(Math.random() * (scale.length - 1))].fq();
            syn2.noteOn(nextNote2, 0.125 + Math.random() * 0.5);
            atLeastOneNote = true;
        }
        syn1.step();
        syn2.step();
    }
}
_core.ElementaryWebAudioRenderer.on('load', function(e1) {
    let ll = _core.el.add(...syn1.render(function(key, gs, fs, vs, i) {
        let t = _core.el.train(n64Rate);
        let env = _core.el.adsr(0.01, adsrDecay, 0, adsrDecay, _core.el.seq({
            key: `${key}:gs`,
            seq: gs,
            hold: true
        }, t));
        let gain = _core.el.seq({
            key: `${key}:vs`,
            seq: vs,
            hold: true
        }, t);
        return _core.el.mul(env, _core.el.sm(gain), _core.el.cycle(_core.el.smooth(_core.el.tau2pole(0.01), _core.el.seq({
            key: `${key}:fs`,
            seq: fs,
            hold: true
        }, t))));
    }));
    let rr = _core.el.add(...syn2.render(function(key, gs, fs, vs, i) {
        let t = _core.el.train(n64Rate);
        let env = _core.el.adsr(0.01, adsrDecay, 0, adsrDecay, _core.el.seq({
            key: `${key}:gs`,
            seq: gs,
            hold: true
        }, t));
        let gain = _core.el.seq({
            key: `${key}:vs`,
            seq: vs,
            hold: true
        }, t);
        return _core.el.mul(env, _core.el.sm(gain), _core.el.cycle(_core.el.smooth(_core.el.tau2pole(0.01), _core.el.seq({
            key: `${key}:fs`,
            seq: fs,
            hold: true
        }, t))));
    }));
    let xl = _core.el.mul(0.2, _core.el.scope({
        channels: 2
    }, ll, rr));
    let xr = _core.el.mul(0.2, rr);
    let [yl, yr] = _srvbDefault.default({
        name: 'verb'
    }, 0.5, 0.8, 0.5, xl, xr);
    _core.ElementaryWebAudioRenderer.render(_core.el.add(xl, _core.el.mul(0.5, yl)), _core.el.add(xr, _core.el.mul(0.5, yr)));
    _core.ElementaryWebAudioRenderer.on('scope', function(e) {
        state.channelData = e.data;
    });
});
// Clicking on the document initializes the web audio backend and restarts the
// visualization.
//
// We need this step because most browsers deny an AudioContext from starting
// before some user-initiated interaction.
document.addEventListener('click', async function start(e) {
    if (audioContext.state !== 'running') await audioContext.resume();
    let node = await _core.ElementaryWebAudioRenderer.initialize(audioContext, {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [
            2
        ]
    });
    node.connect(audioContext.destination);
    // Reset the canvas state
    state.channelData = [
        new Float32Array(512).fill(0),
        new Float32Array(512).fill(0), 
    ];
    ctx.clearRect(0, 0, width, height);
    state.frameCount = 0;
    document.removeEventListener('click', start);
});
// On resize, we need to scale our canvas size accordingly to preserve the
// correct drawing ratios.
window.addEventListener('resize', function(e) {
    width = canvas.width = clone.width = window.innerWidth;
    height = canvas.height = clone.height = window.innerHeight;
    // Setting width/height resets the canvas state, need to reapply these
    ctx.globalCompositeOperation = 'lighten';
    cloneCtx.globalAlpha = globalAlpha;
});
// Finally, our draw loop
window.requestAnimationFrame(function loop() {
    _drawing.clear(ctx, cloneCtx, width, height);
    _drawing.draw(ctx, state.frameCount++, width, height, state.channelData);
    window.requestAnimationFrame(loop);
});

},{"@elemaudio/core":"kqwmJ","@elemaudio/srvb":"9lK8h","teoria":"3egax","./Synth":"31u3t","./drawing":"c8qF0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kqwmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementaryNodeRenderer", ()=>QC
);
parcelHelpers.export(exports, "ElementaryPluginRenderer", ()=>DC
);
parcelHelpers.export(exports, "ElementaryWebAudioRenderer", ()=>sC
);
parcelHelpers.export(exports, "candyWrap", ()=>Gg
);
parcelHelpers.export(exports, "el", ()=>NC
);
parcelHelpers.export(exports, "stdlib", ()=>Vg
);
parcelHelpers.export(exports, "sugar", ()=>tg
);
var process = require("process");
var global = arguments[3];
const A1 = {
    sin: "sin",
    cos: "cos",
    tan: "tan",
    tanh: "tanh",
    asinh: "asinh",
    ln: "ln",
    log: "log",
    log2: "log2",
    ceil: "ceil",
    floor: "floor",
    sqrt: "sqrt",
    exp: "exp",
    abs: "abs",
    le: "le",
    leq: "leq",
    ge: "ge",
    geq: "geq",
    pow: "pow",
    add: "add",
    sub: "sub",
    mul: "mul",
    div: "div",
    mod: "mod",
    min: "min",
    max: "max",
    root: "root",
    in: "in",
    sr: "sr",
    time: "time",
    const: "const",
    phasor: "phasor",
    rand: "rand",
    counter: "counter",
    latch: "latch",
    sample: "sample",
    table: "table",
    seq: "seq",
    delay: "delay",
    z: "z",
    metro: "metro",
    pole: "pole",
    env: "env",
    biquad: "biquad",
    convolve: "convolve",
    meter: "meter",
    scope: "scope",
    fft: "fft",
    snapshot: "snapshot",
    tapIn: "tapIn",
    tapOut: "tapOut"
};
var I1 = function(A, I, g, C, B, Q, E, i) {
    if (!A) {
        var o;
        if (void 0 === I) o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var D = [
                g,
                C,
                B,
                Q,
                E,
                i
            ], w = 0;
            (o = new Error(I.replace(/%s/g, function() {
                return D[w++];
            }))).name = "Invariant Violation";
        }
        throw o.framesToPop = 1, o;
    }
}, g1 = function(A, I, g, C) {
    var B = g ? g.call(C, A, I) : void 0;
    if (void 0 !== B) return !!B;
    if (A === I) return !0;
    if ("object" != typeof A || !A || "object" != typeof I || !I) return !1;
    var Q = Object.keys(A), E = Object.keys(I);
    if (Q.length !== E.length) return !1;
    for(var i = Object.prototype.hasOwnProperty.bind(I), o = 0; o < Q.length; o++){
        var D = Q[o];
        if (!i(D)) return !1;
        var w = A[D], s = I[D];
        if (!1 === (B = g ? g.call(C, w, s, D) : void 0) || void 0 === B && w !== s) return !1;
    }
    return !0;
};
var C1 = function() {
    this.__data__ = [], this.size = 0;
};
var B1 = function(A, I) {
    return A === I || A != A && I != I;
};
var Q1 = function(A, I) {
    for(var g = A.length; g--;)if (B1(A[g][0], I)) return g;
    return -1;
}, E1 = Array.prototype.splice;
var i1 = function(A) {
    var I = this.__data__, g = Q1(I, A);
    return !(g < 0) && (g == I.length - 1 ? I.pop() : E1.call(I, g, 1), --this.size, !0);
};
var o1 = function(A) {
    var I = this.__data__, g = Q1(I, A);
    return g < 0 ? void 0 : I[g][1];
};
var D1 = function(A) {
    return Q1(this.__data__, A) > -1;
};
var w1 = function(A, I) {
    var g = this.__data__, C = Q1(g, A);
    return C < 0 ? (++this.size, g.push([
        A,
        I
    ])) : g[C][1] = I, this;
};
function s1(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
s1.prototype.clear = C1, s1.prototype.delete = i1, s1.prototype.get = o1, s1.prototype.has = D1, s1.prototype.set = w1;
var N1 = s1;
var R1 = function() {
    this.__data__ = new N1, this.size = 0;
};
var F1 = function(A) {
    var I = this.__data__, g = I.delete(A);
    return this.size = I.size, g;
};
var a1 = function(A) {
    return this.__data__.get(A);
};
var t1 = function(A) {
    return this.__data__.has(A);
}, G1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
};
function y1(A) {
    var I = {
        exports: {
        }
    };
    return A(I, I.exports), I.exports;
}
var e1 = "object" == typeof G1 && G1 && G1.Object === Object && G1, n = "object" == typeof self && self && self.Object === Object && self, c = e1 || n || Function("return this")(), U = c.Symbol, h = Object.prototype, r = h.hasOwnProperty, J = h.toString, M = U ? U.toStringTag : void 0;
var k = function(A) {
    var I = r.call(A, M), g = A[M];
    try {
        A[M] = void 0;
        var C = !0;
    } catch (A2) {
    }
    var B = J.call(A);
    return C && (I ? A[M] = g : delete A[M]), B;
}, l = Object.prototype.toString;
var Y = function(A) {
    return l.call(A);
}, K = U ? U.toStringTag : void 0;
var S = function(A) {
    return null == A ? void 0 === A ? "[object Undefined]" : "[object Null]" : K && K in Object(A) ? k(A) : Y(A);
};
var d = function(A) {
    var I = typeof A;
    return null != A && ("object" == I || "function" == I);
};
var L, f = function(A) {
    if (!d(A)) return !1;
    var I = S(A);
    return "[object Function]" == I || "[object GeneratorFunction]" == I || "[object AsyncFunction]" == I || "[object Proxy]" == I;
}, u = c["__core-js_shared__"], b = (L = /[^.]+$/.exec(u && u.keys && u.keys.IE_PROTO || "")) ? "Symbol(src)_1." + L : "";
var Z = function(A) {
    return !!b && b in A;
}, H = Function.prototype.toString;
var V = function(A) {
    if (null != A) {
        try {
            return H.call(A);
        } catch (A3) {
        }
        try {
            return A + "";
        } catch (A) {
        }
    }
    return "";
}, m = /^\[object .+?Constructor\]$/, T = Function.prototype, W = Object.prototype, p = T.toString, q = W.hasOwnProperty, X = RegExp("^" + p.call(q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var O = function(A) {
    return !(!d(A) || Z(A)) && (f(A) ? X : m).test(V(A));
};
var x = function(A, I) {
    return null == A ? void 0 : A[I];
};
var v = function(A, I) {
    var g = x(A, I);
    return O(g) ? g : void 0;
}, j = v(c, "Map"), z = v(Object, "create");
var P = function() {
    this.__data__ = z ? z(null) : {
    }, this.size = 0;
};
var _ = function(A) {
    var I = this.has(A) && delete this.__data__[A];
    return this.size -= I ? 1 : 0, I;
}, $ = Object.prototype.hasOwnProperty;
var AA = function(A) {
    var I = this.__data__;
    if (z) {
        var g = I[A];
        return "__lodash_hash_undefined__" === g ? void 0 : g;
    }
    return $.call(I, A) ? I[A] : void 0;
}, IA = Object.prototype.hasOwnProperty;
var gA = function(A) {
    var I = this.__data__;
    return z ? void 0 !== I[A] : IA.call(I, A);
};
var CA = function(A, I) {
    var g = this.__data__;
    return this.size += this.has(A) ? 0 : 1, g[A] = z && void 0 === I ? "__lodash_hash_undefined__" : I, this;
};
function BA(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
BA.prototype.clear = P, BA.prototype.delete = _, BA.prototype.get = AA, BA.prototype.has = gA, BA.prototype.set = CA;
var QA = BA;
var EA = function() {
    this.size = 0, this.__data__ = {
        hash: new QA,
        map: new (j || N1),
        string: new QA
    };
};
var iA = function(A) {
    var I = typeof A;
    return "string" == I || "number" == I || "symbol" == I || "boolean" == I ? "__proto__" !== A : null === A;
};
var oA = function(A, I) {
    var g = A.__data__;
    return iA(I) ? g["string" == typeof I ? "string" : "hash"] : g.map;
};
var DA = function(A) {
    var I = oA(this, A).delete(A);
    return this.size -= I ? 1 : 0, I;
};
var wA = function(A) {
    return oA(this, A).get(A);
};
var sA = function(A) {
    return oA(this, A).has(A);
};
var NA = function(A, I) {
    var g = oA(this, A), C = g.size;
    return g.set(A, I), this.size += g.size == C ? 0 : 1, this;
};
function RA(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
RA.prototype.clear = EA, RA.prototype.delete = DA, RA.prototype.get = wA, RA.prototype.has = sA, RA.prototype.set = NA;
var FA = RA;
var aA = function(A, I) {
    var g = this.__data__;
    if (g instanceof N1) {
        var C = g.__data__;
        if (!j || C.length < 199) return C.push([
            A,
            I
        ]), this.size = ++g.size, this;
        g = this.__data__ = new FA(C);
    }
    return g.set(A, I), this.size = g.size, this;
};
function tA(A) {
    var I = this.__data__ = new N1(A);
    this.size = I.size;
}
tA.prototype.clear = R1, tA.prototype.delete = F1, tA.prototype.get = a1, tA.prototype.has = t1, tA.prototype.set = aA;
var GA = tA;
var yA = function(A, I) {
    for(var g = -1, C = null == A ? 0 : A.length; ++g < C && !1 !== I(A[g], g, A););
    return A;
}, eA = function() {
    try {
        var A = v(Object, "defineProperty");
        return A({
        }, "", {
        }), A;
    } catch (A) {
    }
}();
var nA = function(A, I, g) {
    "__proto__" == I && eA ? eA(A, I, {
        configurable: !0,
        enumerable: !0,
        value: g,
        writable: !0
    }) : A[I] = g;
}, cA = Object.prototype.hasOwnProperty;
var UA = function(A, I, g) {
    var C = A[I];
    cA.call(A, I) && B1(C, g) && (void 0 !== g || I in A) || nA(A, I, g);
};
var hA = function(A, I, g, C) {
    var B = !g;
    g || (g = {
    });
    for(var Q = -1, E = I.length; ++Q < E;){
        var i = I[Q], o = C ? C(g[i], A[i], i, g, A) : void 0;
        void 0 === o && (o = A[i]), B ? nA(g, i, o) : UA(g, i, o);
    }
    return g;
};
var rA = function(A, I) {
    for(var g = -1, C = Array(A); ++g < A;)C[g] = I(g);
    return C;
};
var JA = function(A) {
    return null != A && "object" == typeof A;
};
var MA = function(A) {
    return JA(A) && "[object Arguments]" == S(A);
}, kA = Object.prototype, lA = kA.hasOwnProperty, YA = kA.propertyIsEnumerable, KA = MA(function() {
    return arguments;
}()) ? MA : function(A) {
    return JA(A) && lA.call(A, "callee") && !YA.call(A, "callee");
}, SA = Array.isArray;
var dA = function() {
    return !1;
}, LA = y1(function(A, I) {
    var g = I && !I.nodeType && I, C = g && A && !A.nodeType && A, B = C && C.exports === g ? c.Buffer : void 0, Q = (B ? B.isBuffer : void 0) || dA;
    A.exports = Q;
}), fA = /^(?:0|[1-9]\d*)$/;
var uA = function(A, I) {
    var g = typeof A;
    return !!(I = null == I ? 9007199254740991 : I) && ("number" == g || "symbol" != g && fA.test(A)) && A > -1 && A % 1 == 0 && A < I;
};
var bA = function(A) {
    return "number" == typeof A && A > -1 && A % 1 == 0 && A <= 9007199254740991;
}, ZA = {
};
ZA["[object Float32Array]"] = ZA["[object Float64Array]"] = ZA["[object Int8Array]"] = ZA["[object Int16Array]"] = ZA["[object Int32Array]"] = ZA["[object Uint8Array]"] = ZA["[object Uint8ClampedArray]"] = ZA["[object Uint16Array]"] = ZA["[object Uint32Array]"] = !0, ZA["[object Arguments]"] = ZA["[object Array]"] = ZA["[object ArrayBuffer]"] = ZA["[object Boolean]"] = ZA["[object DataView]"] = ZA["[object Date]"] = ZA["[object Error]"] = ZA["[object Function]"] = ZA["[object Map]"] = ZA["[object Number]"] = ZA["[object Object]"] = ZA["[object RegExp]"] = ZA["[object Set]"] = ZA["[object String]"] = ZA["[object WeakMap]"] = !1;
var HA = function(A) {
    return JA(A) && bA(A.length) && !!ZA[S(A)];
};
var VA = function(A) {
    return function(I) {
        return A(I);
    };
}, mA = y1(function(A4, I) {
    var g = I && !I.nodeType && I, C = g && A4 && !A4.nodeType && A4, B = C && C.exports === g && e1.process, Q = function() {
        try {
            var A = C && C.require && C.require("util").types;
            return A || B && B.binding && B.binding("util");
        } catch (A) {
        }
    }();
    A4.exports = Q;
}), TA = mA && mA.isTypedArray, WA = TA ? VA(TA) : HA, pA = Object.prototype.hasOwnProperty;
var qA = function(A, I) {
    var g = SA(A), C = !g && KA(A), B = !g && !C && LA(A), Q = !g && !C && !B && WA(A), E = g || C || B || Q, i = E ? rA(A.length, String) : [], o = i.length;
    for(var D in A)!I && !pA.call(A, D) || E && ("length" == D || B && ("offset" == D || "parent" == D) || Q && ("buffer" == D || "byteLength" == D || "byteOffset" == D) || uA(D, o)) || i.push(D);
    return i;
}, XA = Object.prototype;
var OA = function(A) {
    var I = A && A.constructor;
    return A === ("function" == typeof I && I.prototype || XA);
};
var xA = function(A, I) {
    return function(g) {
        return A(I(g));
    };
}, vA = xA(Object.keys, Object), jA = Object.prototype.hasOwnProperty;
var zA = function(A) {
    if (!OA(A)) return vA(A);
    var I = [];
    for(var g in Object(A))jA.call(A, g) && "constructor" != g && I.push(g);
    return I;
};
var PA = function(A) {
    return null != A && bA(A.length) && !f(A);
};
var _A = function(A) {
    return PA(A) ? qA(A) : zA(A);
};
var $A = function(A, I) {
    return A && hA(I, _A(I), A);
};
var AI = function(A) {
    var I = [];
    if (null != A) for(var g in Object(A))I.push(g);
    return I;
}, II = Object.prototype.hasOwnProperty;
var gI = function(A) {
    if (!d(A)) return AI(A);
    var I = OA(A), g = [];
    for(var C in A)("constructor" != C || !I && II.call(A, C)) && g.push(C);
    return g;
};
var CI = function(A) {
    return PA(A) ? qA(A, !0) : gI(A);
};
var BI = function(A, I) {
    return A && hA(I, CI(I), A);
}, QI = y1(function(A5, I2) {
    var g2 = I2 && !I2.nodeType && I2, C2 = g2 && A5 && !A5.nodeType && A5, B = C2 && C2.exports === g2 ? c.Buffer : void 0, Q = B ? B.allocUnsafe : void 0;
    A5.exports = function(A, I) {
        if (I) return A.slice();
        var g = A.length, C = Q ? Q(g) : new A.constructor(g);
        return A.copy(C), C;
    };
});
var EI = function(A, I) {
    var g = -1, C = A.length;
    for(I || (I = Array(C)); ++g < C;)I[g] = A[g];
    return I;
};
var iI = function(A, I) {
    for(var g = -1, C = null == A ? 0 : A.length, B = 0, Q = []; ++g < C;){
        var E = A[g];
        I(E, g, A) && (Q[B++] = E);
    }
    return Q;
};
var oI = function() {
    return [];
}, DI = Object.prototype.propertyIsEnumerable, wI = Object.getOwnPropertySymbols, sI = wI ? function(A) {
    return null == A ? [] : (A = Object(A), iI(wI(A), function(I) {
        return DI.call(A, I);
    }));
} : oI;
var NI = function(A, I) {
    return hA(A, sI(A), I);
};
var RI = function(A, I) {
    for(var g = -1, C = I.length, B = A.length; ++g < C;)A[B + g] = I[g];
    return A;
}, FI = xA(Object.getPrototypeOf, Object), aI = Object.getOwnPropertySymbols ? function(A) {
    for(var I = []; A;)RI(I, sI(A)), A = FI(A);
    return I;
} : oI;
var tI = function(A, I) {
    return hA(A, aI(A), I);
};
var GI = function(A, I, g) {
    var C = I(A);
    return SA(A) ? C : RI(C, g(A));
};
var yI = function(A) {
    return GI(A, _A, sI);
};
var eI = function(A) {
    return GI(A, CI, aI);
}, nI = v(c, "DataView"), cI = v(c, "Promise"), UI = v(c, "Set"), hI = v(c, "WeakMap"), rI = V(nI), JI = V(j), MI = V(cI), kI = V(UI), lI = V(hI), YI = S;
(nI && "[object DataView]" != YI(new nI(new ArrayBuffer(1))) || j && "[object Map]" != YI(new j) || cI && "[object Promise]" != YI(cI.resolve()) || UI && "[object Set]" != YI(new UI) || hI && "[object WeakMap]" != YI(new hI)) && (YI = function(A) {
    var I = S(A), g = "[object Object]" == I ? A.constructor : void 0, C = g ? V(g) : "";
    if (C) switch(C){
        case rI:
            return "[object DataView]";
        case JI:
            return "[object Map]";
        case MI:
            return "[object Promise]";
        case kI:
            return "[object Set]";
        case lI:
            return "[object WeakMap]";
    }
    return I;
});
var KI = YI, SI = Object.prototype.hasOwnProperty;
var dI = function(A) {
    var I = A.length, g = new A.constructor(I);
    return I && "string" == typeof A[0] && SI.call(A, "index") && (g.index = A.index, g.input = A.input), g;
}, LI = c.Uint8Array;
var fI = function(A) {
    var I = new A.constructor(A.byteLength);
    return new LI(I).set(new LI(A)), I;
};
var uI = function(A, I) {
    var g = I ? fI(A.buffer) : A.buffer;
    return new A.constructor(g, A.byteOffset, A.byteLength);
}, bI = /\w*$/;
var ZI = function(A) {
    var I = new A.constructor(A.source, bI.exec(A));
    return I.lastIndex = A.lastIndex, I;
}, HI = U ? U.prototype : void 0, VI = HI ? HI.valueOf : void 0;
var mI = function(A) {
    return VI ? Object(VI.call(A)) : {
    };
};
var TI = function(A, I) {
    var g = I ? fI(A.buffer) : A.buffer;
    return new A.constructor(g, A.byteOffset, A.length);
};
var WI = function(A, I, g) {
    var C = A.constructor;
    switch(I){
        case "[object ArrayBuffer]":
            return fI(A);
        case "[object Boolean]":
        case "[object Date]":
            return new C(+A);
        case "[object DataView]":
            return uI(A, g);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
            return TI(A, g);
        case "[object Map]":
        case "[object Set]":
            return new C;
        case "[object Number]":
        case "[object String]":
            return new C(A);
        case "[object RegExp]":
            return ZI(A);
        case "[object Symbol]":
            return mI(A);
    }
}, pI = Object.create, qI = function() {
    function A() {
    }
    return function(I) {
        if (!d(I)) return {
        };
        if (pI) return pI(I);
        A.prototype = I;
        var g = new A;
        return A.prototype = void 0, g;
    };
}();
var XI = function(A) {
    return "function" != typeof A.constructor || OA(A) ? {
    } : qI(FI(A));
};
var OI = function(A) {
    return JA(A) && "[object Map]" == KI(A);
}, xI = mA && mA.isMap, vI = xI ? VA(xI) : OI;
var jI = function(A) {
    return JA(A) && "[object Set]" == KI(A);
}, zI = mA && mA.isSet, PI = zI ? VA(zI) : jI, _I = {
};
_I["[object Arguments]"] = _I["[object Array]"] = _I["[object ArrayBuffer]"] = _I["[object DataView]"] = _I["[object Boolean]"] = _I["[object Date]"] = _I["[object Float32Array]"] = _I["[object Float64Array]"] = _I["[object Int8Array]"] = _I["[object Int16Array]"] = _I["[object Int32Array]"] = _I["[object Map]"] = _I["[object Number]"] = _I["[object Object]"] = _I["[object RegExp]"] = _I["[object Set]"] = _I["[object String]"] = _I["[object Symbol]"] = _I["[object Uint8Array]"] = _I["[object Uint8ClampedArray]"] = _I["[object Uint16Array]"] = _I["[object Uint32Array]"] = !0, _I["[object Error]"] = _I["[object Function]"] = _I["[object WeakMap]"] = !1;
var $I = function A(I, g, C, B2, Q2, E) {
    var i, o = 1 & g, D = 2 & g, w = 4 & g;
    if (C && (i = Q2 ? C(I, B2, Q2, E) : C(I)), void 0 !== i) return i;
    if (!d(I)) return I;
    var s = SA(I);
    if (s) {
        if (i = dI(I), !o) return EI(I, i);
    } else {
        var N = KI(I), R = "[object Function]" == N || "[object GeneratorFunction]" == N;
        if (LA(I)) return QI(I, o);
        if ("[object Object]" == N || "[object Arguments]" == N || R && !Q2) {
            if (i = D || R ? {
            } : XI(I), !o) return D ? tI(I, BI(i, I)) : NI(I, $A(i, I));
        } else {
            if (!_I[N]) return Q2 ? I : {
            };
            i = WI(I, N, o);
        }
    }
    E || (E = new GA);
    var F = E.get(I);
    if (F) return F;
    E.set(I, i), PI(I) ? I.forEach(function(B) {
        i.add(A(B, g, C, B, I, E));
    }) : vI(I) && I.forEach(function(B, Q) {
        i.set(Q, A(B, g, C, Q, I, E));
    });
    var a = s ? void 0 : (w ? D ? eI : yI : D ? CI : _A)(I);
    return yA(a || I, function(B, Q) {
        a && (B = I[Q = B]), UA(i, Q, A(B, g, C, Q, I, E));
    }), i;
};
var Ag = function(A) {
    return $I(A, 5);
};
const Ig = Symbol.for("ELEM_NODE"), gg = new Map, Cg = new Map;
function Bg(A, I) {
    if (I <= 0) return A;
    let g = A;
    return g = (g << 5) - g + I, g |= 0, g < 0 ? -2 * g : g;
}
function Qg(A, I) {
    if (0 === I.length) return A;
    let g = A;
    for(let A6 = 0; A6 < I.length; ++A6)g = (g << 5) - g + I.charCodeAt(A6), g |= 0;
    return g < 0 ? -2 * g : g;
}
function Eg(A) {
    let I = A.toString(16);
    for(; I.length < 8;)I = "0" + I;
    return I;
}
function ig(A, g, C) {
    I1("string" == typeof A || "function" == typeof A, `Unexpected Node type ${typeof A}: ${A}`), I1(Array.isArray(C), "A Node must be initialized with a valid children array.");
    return {
        $$typeof: Ig,
        _type: A,
        _props: g,
        _children: C
    };
}
function og(A7, C = g1) {
    I1("function" == typeof A7, "Cannot memoize something that is not a function");
    const B = new Map;
    return function({ props: I , context: g , children: Q  }) {
        for (const [A, g3] of B)if (C(A, I)) return g3;
        const E = A7({
            props: I,
            context: g,
            children: Q
        });
        return B.set(Ag(I), E), E;
    };
}
function Dg(A) {
    return "object" == typeof A && A.hasOwnProperty("$$typeof") && A.$$typeof === Ig;
}
function wg(A8, g, C) {
    if ("number" == typeof g) return wg(A8, ig("const", {
        value: g
    }, []), C);
    if (I1(Dg(g), `Unexpected ${typeof g} passed to core.render: ${g}`), C.has(g)) return Object.assign({
    }, C.get(g));
    if ("function" == typeof g._type) {
        const I = wg(A8, g._type({
            props: g._props,
            context: A8.renderContext,
            children: g._children
        }), C);
        return C.set(g, I), I;
    }
    const { _props: B , _children: Q , ...E } = g, i = {
        ...E,
        _hash: null,
        _props: Ag(B),
        _children: Q.map(function(I, g) {
            return wg(A8, I, C);
        })
    }, o = Qg(0, i._type), D = Qg(o, i._props.hasOwnProperty("key") && "string" == typeof i._props.key ? i._props.key : JSON.stringify(i._props));
    let w = i._children.reduce(function(A, I) {
        return Bg(A, I._hash);
    }, D);
    return "root" === i._type && gg.has(w) && !Cg.has(w) && (w = Bg(w, (268435455 & Date.now()) * (Math.random() + 1) | 0)), i._hash = w, C.set(g, i), i;
}
function sg(A, g) {
    var C;
    if (I1(Dg(g), `Unexpected ${typeof g} passed to core.render: ${g}`), I1(Dg(C = g) && "string" == typeof C._type, `Attempting to mount an unresolved node: ${g}`), "root" === g._type && Cg.set(g._hash, g), !gg.has(g._hash)) {
        A.createNode(Eg(g._hash), g._type), gg.set(g._hash, g);
        for(let I in g._props)if (g._props.hasOwnProperty(I)) {
            const C = g._props[I];
            (null == C || "number" == typeof C && isNaN(C) || "number" == typeof C && !isFinite(C)) && console.warn(`Warning: applying a potentially erroneous property value. ${I}: ${C}`), A.setProperty(Eg(g._hash), I, C);
        }
        for(let I3 = 0; I3 < g._children.length; ++I3)sg(A, g._children[I3]), A.appendChild(Eg(g._hash), Eg(g._children[I3]._hash));
    }
}
function Ng(A, C, B) {
    if (I1(gg.has(C._hash), "Attempting to update a property for an unknown node"), B.has(C._hash)) return;
    const Q = gg.get(C._hash);
    Q._generation = 0;
    for(let I in C._props)if (C._props.hasOwnProperty(I)) {
        const B = C._props[I];
        if (!Q._props.hasOwnProperty(I) || !g1(Q._props[I], B)) (null == B || "number" == typeof B && isNaN(B) || "number" == typeof B && !isFinite(B)) && console.warn(`Warning: applying a potentially erroneous property value. ${I}: ${B}`), A.setProperty(Eg(Q._hash), I, B), Q._props[I] = B;
    }
    B.set(C._hash, !0);
    for(let I4 = 0; I4 < C._children.length; ++I4)Ng(A, C._children[I4], B);
}
function Rg(A, ...I8) {
    try {
        for (const A9 of gg.values())A9._generation++;
        let g = new Map, C3 = I8.map(function(I, C) {
            return wg(A, ig("root", {
                channel: C
            }, [
                I
            ]), g);
        });
        Cg.clear();
        for(let I7 = 0; I7 < C3.length; ++I7)sg(A, C3[I7]);
        let B = new Map;
        for(let I5 = 0; I5 < C3.length; ++I5)Ng(A, C3[I5], B);
        A.commitUpdates();
        for (const [I6, g4] of gg)g4._generation >= 4 && (A.deleteNode(Eg(I6)), gg.delete(I6));
        A.commitUpdates();
    } catch (A10) {
        let I = new Error(A10.message);
        throw I.name = "Elementary Error", Error.hasOwnProperty("captureStackTrace") && "function" == typeof Error.captureStackTrace && Error.captureStackTrace(I, Rg), I; /** @preserve node-do-not-add-exception-line */ 
    }
}
function Fg(A11) {
    gg.clear(), A11.forEach(function(A) {
        gg.set(A, Object.assign({
        }, ig("__hydratedNodeInstance__", {
        }, []), {
            _hash: A
        }));
    });
}
function ag(A) {
    I1(Array.isArray(A), `Trying to flatten something that's not an array: ${A}`);
    let g = [];
    for(let I = 0; I < A.length; ++I)Array.isArray(A[I]) ? g = g.concat(ag(A[I])) : g.push(A[I]);
    return g;
}
function tg(A, ...g) {
    if (0 === g.length) return ig(A, {
    }, []);
    const C = ag(g);
    if (Dg(C[0]) || "number" == typeof C[0]) return I1(C.length <= 8, "Nodes can only have at most 8 children."), ig(A, {
    }, C);
    const B = C[0], Q = C.slice(1);
    return I1(Q.length <= 8, "Nodes can only have at most 8 children."), ig(A, B, Q);
}
function Gg(A) {
    I1("object" == typeof A, "Candy wrapper wants an object");
    let g5 = {
    };
    for(let I in A)A.hasOwnProperty(I) && (g5[I] = function(...g) {
        return tg(A[I], ...g);
    });
    return g5;
}
const yg = Gg({
    ...A1
});
var eg = Object.freeze({
    __proto__: null,
    ms2samps: function({ children: [A]  }) {
        return yg.mul(yg.sr(), yg.div(A, 1000));
    },
    tau2pole: function({ children: [A]  }) {
        return yg.exp(yg.div(-1, yg.mul(A, yg.sr())));
    },
    db2gain: function({ children: [A]  }) {
        return yg.pow(10, yg.mul(A, 0.05));
    },
    select: function({ children: [A, I, g]  }) {
        return yg.add(yg.mul(A, I), yg.mul(yg.sub(1, A), g));
    }
});
const ng = Gg({
    ...A1,
    ...eg
});
var cg = Object.freeze({
    __proto__: null,
    compress: function({ children: [A, I, g, C, B, Q]  }) {
        const E = ng.env(ng.tau2pole(ng.mul(0.001, A)), ng.tau2pole(ng.mul(0.001, I)), B), i = ng.sub(1, ng.mul(ng.ge(E, ng.db2gain(g)), ng.mul(C, ng.sub(E, ng.db2gain(g)))));
        return ng.mul(i, Q);
    }
});
const Ug = Gg({
    ...A1,
    ...eg,
    smooth: hg,
    zero: rg
});
function hg({ children: [A, I]  }) {
    return Ug.pole(A, Ug.mul(Ug.sub(1, A), I));
}
function rg({ children: [A, I, g]  }) {
    return Ug.sub(Ug.mul(A, g), Ug.mul(I, Ug.z(g)));
}
var Jg = Object.freeze({
    __proto__: null,
    smooth: hg,
    sm: function({ children: [A]  }) {
        return Ug.smooth(Ug.tau2pole(0.02), A);
    },
    zero: rg,
    dcblock: function({ children: [A]  }) {
        return Ug.pole(0.995, Ug.zero(1, 1, A));
    },
    df11: function({ children: [A, I, g, C]  }) {
        return Ug.pole(g, Ug.zero(A, I, C));
    },
    lowpass: function({ children: [A, I, g]  }) {
        const C = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), B = Ug.cos(C), Q = Ug.div(Ug.sin(C), Ug.mul(2, I)), E = Ug.mul(0.5, Ug.sub(1, B)), i = Ug.sub(1, B), o = Ug.mul(0.5, Ug.sub(1, B)), D = Ug.add(1, Q), w = Ug.mul(-2, B), s = Ug.sub(1, Q), N = Ug.div(1, D);
        return Ug.biquad(Ug.mul(E, N), Ug.mul(i, N), Ug.mul(o, N), Ug.mul(w, N), Ug.mul(s, N), g);
    },
    highpass: function({ children: [A, I, g]  }) {
        const C = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), B = Ug.cos(C), Q = Ug.div(Ug.sin(C), Ug.mul(2, I)), E = Ug.mul(0.5, Ug.add(1, B)), i = Ug.mul(-1, Ug.add(1, B)), o = Ug.mul(0.5, Ug.add(1, B)), D = Ug.add(1, Q), w = Ug.mul(-2, B), s = Ug.sub(1, Q), N = Ug.div(1, D);
        return Ug.biquad(Ug.mul(E, N), Ug.mul(i, N), Ug.mul(o, N), Ug.mul(w, N), Ug.mul(s, N), g);
    },
    bandpass: function({ children: [A, I, g]  }) {
        const C = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), B = Ug.cos(C), Q = Ug.div(Ug.sin(C), Ug.mul(2, I)), E = Q, i = Ug.mul(-1, Q), o = Ug.add(1, Q), D = Ug.mul(-2, B), w = Ug.sub(1, Q), s = Ug.div(1, o);
        return Ug.biquad(Ug.mul(E, s), Ug.mul(0, s), Ug.mul(i, s), Ug.mul(D, s), Ug.mul(w, s), g);
    },
    notch: function({ children: [A, I, g]  }) {
        const C = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), B = Ug.cos(C), Q = Ug.div(Ug.sin(C), Ug.mul(2, I)), E = Ug.mul(-2, B), i = Ug.add(1, Q), o = Ug.mul(-2, B), D = Ug.sub(1, Q), w = Ug.div(1, i);
        return Ug.biquad(Ug.mul(1, w), Ug.mul(E, w), Ug.mul(1, w), Ug.mul(o, w), Ug.mul(D, w), g);
    },
    allpass: function({ children: [A, I, g]  }) {
        const C = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), B = Ug.cos(C), Q = Ug.div(Ug.sin(C), Ug.mul(2, I)), E = Ug.sub(1, Q), i = Ug.mul(-2, B), o = Ug.add(1, Q), D = Ug.add(1, Q), w = Ug.mul(-2, B), s = Ug.sub(1, Q), N = Ug.div(1, D);
        return Ug.biquad(Ug.mul(E, N), Ug.mul(i, N), Ug.mul(o, N), Ug.mul(w, N), Ug.mul(s, N), g);
    },
    peak: function({ children: [A, I, g, C]  }) {
        const B = Ug.pow(10, Ug.div(g, 40)), Q = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), E = Ug.cos(Q), i = Ug.div(Ug.sin(Q), Ug.mul(2, I)), o = Ug.add(1, Ug.mul(i, B)), D = Ug.mul(-2, E), w = Ug.sub(1, Ug.mul(i, B)), s = Ug.add(1, Ug.div(i, B)), N = Ug.mul(-2, E), R = Ug.sub(1, Ug.div(i, B)), F = Ug.div(1, s);
        return Ug.biquad(Ug.mul(o, F), Ug.mul(D, F), Ug.mul(w, F), Ug.mul(N, F), Ug.mul(R, F), C);
    },
    lowshelf: function({ children: [A, I, g, C]  }) {
        const B = Ug.pow(10, Ug.div(g, 40)), Q = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), E = Ug.cos(Q), i = Ug.div(Ug.sin(Q), Ug.mul(2, I)), o = Ug.mul(2, i, Ug.sqrt(B)), D = Ug.add(B, 1), w = Ug.sub(B, 1), s = Ug.mul(D, E), N = Ug.mul(w, E), R = Ug.mul(B, Ug.add(o, Ug.sub(D, N))), F = Ug.mul(2, B, Ug.sub(w, s)), a = Ug.mul(B, Ug.sub(D, N, o)), t = Ug.add(D, N, o), G = Ug.mul(-2, Ug.add(w, s)), y = Ug.sub(Ug.add(D, N), o), e = Ug.div(1, t);
        return Ug.biquad(Ug.mul(R, e), Ug.mul(F, e), Ug.mul(a, e), Ug.mul(G, e), Ug.mul(y, e), C);
    },
    highshelf: function({ children: [A, I, g, C]  }) {
        const B = Ug.pow(10, Ug.div(g, 40)), Q = Ug.div(Ug.mul(2 * Math.PI, A), Ug.sr()), E = Ug.cos(Q), i = Ug.div(Ug.sin(Q), Ug.mul(2, I)), o = Ug.mul(2, i, Ug.sqrt(B)), D = Ug.add(B, 1), w = Ug.sub(B, 1), s = Ug.mul(D, E), N = Ug.mul(w, E), R = Ug.mul(B, Ug.add(o, D, N)), F = Ug.mul(-2, B, Ug.add(w, s)), a = Ug.mul(B, Ug.sub(Ug.add(D, N), o)), t = Ug.add(Ug.sub(D, N), o), G = Ug.mul(2, Ug.sub(w, s)), y = Ug.sub(D, N, o), e = Ug.div(1, t);
        return Ug.biquad(Ug.mul(R, e), Ug.mul(F, e), Ug.mul(a, e), Ug.mul(G, e), Ug.mul(y, e), C);
    },
    pink: function({ children: [A]  }) {
        return Ug.biquad(1, -0.07568359, 0, -0.53567505, 0, Ug.biquad(1, -1.81835938, 0.82094419, -1.94363403, 0.9438566, A));
    }
});
const Mg = Gg({
    ...A1,
    ...Jg
});
var kg = Object.freeze({
    __proto__: null,
    freeverb: function({ props: A12 , children: [I9, g6, C4]  }) {
        let B3 = [
            1557,
            1617,
            1491,
            1422,
            1277,
            1356,
            1188,
            1116
        ].map(function(B4, Q3) {
            return (function(A, I, g, C, B) {
                let Q = Mg.add(B, Mg.mul(g, Mg.tapIn({
                    name: A
                })));
                return Mg.add(Q, Mg.mul(0, Mg.tapOut({
                    name: A,
                    size: I
                }, Mg.smooth(C, Q))));
            })(`${A12.name}:lbcf:${Q3}`, B4, I9, g6, C4);
        });
        return [
            525,
            556,
            641,
            537
        ].reduce(function(I10, g7, C5) {
            return (function(A, I, g, C) {
                let B = Mg.add(C, Mg.mul(g, Mg.tapIn({
                    name: A
                })));
                return Mg.add(Mg.mul(-g, B), Mg.tapOut({
                    name: A,
                    size: I
                }, B));
            })(`${A12.name}:ap:${C5}`, g7, 0.5, I10);
        }, Mg.add(...B3));
    }
});
const lg = Gg({
    ...A1,
    ...Jg
});
var Yg = Object.freeze({
    __proto__: null,
    noise: function() {
        return lg.sub(lg.mul(2, lg.rand()), 1);
    },
    pinknoise: function() {
        return lg.pink(lg.noise());
    }
});
const Kg = Gg({
    ...A1,
    train: Sg
});
function Sg({ children: [A]  }) {
    return Kg.le(Kg.phasor(A), 0.5);
}
function dg({ children: [A]  }) {
    return Kg.sub(Kg.mul(2, Kg.phasor(A)), 1);
}
function Lg(A, I) {
    let g = Kg.le(I, A), C = Kg.ge(I, Kg.sub(1, A)), B = Kg.div(I, A), Q = Kg.div(Kg.sub(I, 1), A);
    return Kg.add(Kg.mul(g, Kg.sub(Kg.mul(2, B), Kg.mul(B, B), 1)), Kg.mul(C, Kg.add(Kg.mul(2, Q), Kg.mul(Q, Q), 1)));
}
function fg({ children: [A]  }) {
    let I = Kg.phasor(A), g = Kg.le(I, 0.5), C = Kg.sub(Kg.mul(2, g), 1), B = Kg.div(A, Kg.sr()), Q = Lg(B, I), E = Lg(B, Kg.mod(Kg.add(I, 0.5), 1));
    return Kg.sub(Kg.add(C, Q), E);
}
var ug = Object.freeze({
    __proto__: null,
    train: Sg,
    cycle: function({ children: [A]  }) {
        return Kg.sin(Kg.mul(2 * Math.PI, Kg.phasor(A)));
    },
    saw: dg,
    square: function({ children: [A]  }) {
        return Kg.sub(Kg.mul(2, Kg.train(A)), 1);
    },
    triangle: function({ children: [A]  }) {
        return Kg.mul(2, Kg.sub(0.5, Kg.abs(tg(dg, A))));
    },
    blepsaw: function({ children: [A]  }) {
        let I = Kg.phasor(A), g = Kg.sub(Kg.mul(2, I), 1), C = Kg.div(A, Kg.sr());
        return Kg.sub(g, Lg(C, I));
    },
    blepsquare: fg,
    bleptriangle: function({ children: [A]  }) {
        let I = Kg.div(Kg.mul(4, A), Kg.sr());
        return Kg.mul(I, Kg.pole(0.999, tg(fg, A)));
    }
});
const bg = Gg({
    ...A1,
    ...eg,
    ...Jg
});
var Zg, Hg = Object.freeze({
    __proto__: null,
    adsr: function({ children: [A, I, g, C, B]  }) {
        let Q = bg.mul(A, bg.sr()), E = bg.le(bg.counter(B), Q), i = bg.select(B, bg.select(E, 1, g), 0), o = bg.select(B, bg.select(E, A, I), C), D = bg.tau2pole(bg.div(o, 6.91));
        return bg.smooth(D, i);
    },
    hann: function({ children: [A]  }) {
        return bg.mul(0.5, bg.sub(1, bg.cos(bg.mul(2 * Math.PI, A))));
    }
}), Vg = {
    ...A1,
    ...eg,
    ...cg,
    ...Jg,
    ...kg,
    ...Yg,
    ...ug,
    ...Hg
}, mg = "object" == typeof Reflect ? Reflect : null, Tg = mg && "function" == typeof mg.apply ? mg.apply : function(A, I, g) {
    return Function.prototype.apply.call(A, I, g);
};
Zg = mg && "function" == typeof mg.ownKeys ? mg.ownKeys : Object.getOwnPropertySymbols ? function(A) {
    return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A));
} : function(A) {
    return Object.getOwnPropertyNames(A);
};
var Wg = Number.isNaN || function(A) {
    return A != A;
};
function pg() {
    pg.init.call(this);
}
var qg = pg, Xg = function(A13, I11) {
    return new Promise(function(g8, C) {
        function B(g) {
            A13.removeListener(I11, Q), C(g);
        }
        function Q() {
            "function" == typeof A13.removeListener && A13.removeListener("error", B), g8([].slice.call(arguments));
        }
        IC(A13, I11, Q, {
            once: !0
        }), "error" !== I11 && (function(A, I, g) {
            "function" == typeof A.on && IC(A, "error", I, g);
        })(A13, B, {
            once: !0
        });
    });
};
pg.EventEmitter = pg, pg.prototype._events = void 0, pg.prototype._eventsCount = 0, pg.prototype._maxListeners = void 0;
var Og = 10;
function xg(A) {
    if ("function" != typeof A) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof A);
}
function vg(A) {
    return void 0 === A._maxListeners ? pg.defaultMaxListeners : A._maxListeners;
}
function jg(A, I, g, C) {
    var B, Q, E, i;
    if (xg(g), void 0 === (Q = A._events) ? (Q = A._events = Object.create(null), A._eventsCount = 0) : (void 0 !== Q.newListener && (A.emit("newListener", I, g.listener ? g.listener : g), Q = A._events), E = Q[I]), void 0 === E) E = Q[I] = g, ++A._eventsCount;
    else if ("function" == typeof E ? E = Q[I] = C ? [
        g,
        E
    ] : [
        E,
        g
    ] : C ? E.unshift(g) : E.push(g), (B = vg(A)) > 0 && E.length > B && !E.warned) {
        E.warned = !0;
        var o = new Error("Possible EventEmitter memory leak detected. " + E.length + " " + String(I) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        o.name = "MaxListenersExceededWarning", o.emitter = A, o.type = I, o.count = E.length, i = o, console && console.warn && console.warn(i);
    }
    return A;
}
function zg() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Pg(A, I, g) {
    var C = {
        fired: !1,
        wrapFn: void 0,
        target: A,
        type: I,
        listener: g
    }, B = zg.bind(C);
    return B.listener = g, C.wrapFn = B, B;
}
function _g(A14, I12, g9) {
    var C = A14._events;
    if (void 0 === C) return [];
    var B = C[I12];
    return void 0 === B ? [] : "function" == typeof B ? g9 ? [
        B.listener || B
    ] : [
        B
    ] : g9 ? (function(A) {
        for(var I = new Array(A.length), g = 0; g < I.length; ++g)I[g] = A[g].listener || A[g];
        return I;
    })(B) : AC(B, B.length);
}
function $g(A) {
    var I = this._events;
    if (void 0 !== I) {
        var g = I[A];
        if ("function" == typeof g) return 1;
        if (void 0 !== g) return g.length;
    }
    return 0;
}
function AC(A, I) {
    for(var g = new Array(I), C = 0; C < I; ++C)g[C] = A[C];
    return g;
}
function IC(A, I, g, C) {
    if ("function" == typeof A.on) C.once ? A.once(I, g) : A.on(I, g);
    else {
        if ("function" != typeof A.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof A);
        A.addEventListener(I, function B(Q) {
            C.once && A.removeEventListener(I, B), g(Q);
        });
    }
}
Object.defineProperty(pg, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Og;
    },
    set: function(A) {
        if ("number" != typeof A || A < 0 || Wg(A)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + A + ".");
        Og = A;
    }
}), pg.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, pg.prototype.setMaxListeners = function(A) {
    if ("number" != typeof A || A < 0 || Wg(A)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + A + ".");
    return this._maxListeners = A, this;
}, pg.prototype.getMaxListeners = function() {
    return vg(this);
}, pg.prototype.emit = function(A) {
    for(var I = [], g = 1; g < arguments.length; g++)I.push(arguments[g]);
    var C = "error" === A, B = this._events;
    if (void 0 !== B) C = C && void 0 === B.error;
    else if (!C) return !1;
    if (C) {
        var Q;
        if (I.length > 0 && (Q = I[0]), Q instanceof Error) throw Q;
        var E = new Error("Unhandled error." + (Q ? " (" + Q.message + ")" : ""));
        throw E.context = Q, E;
    }
    var i = B[A];
    if (void 0 === i) return !1;
    if ("function" == typeof i) Tg(i, this, I);
    else {
        var o = i.length, D = AC(i, o);
        for(g = 0; g < o; ++g)Tg(D[g], this, I);
    }
    return !0;
}, pg.prototype.addListener = function(A, I) {
    return jg(this, A, I, !1);
}, pg.prototype.on = pg.prototype.addListener, pg.prototype.prependListener = function(A, I) {
    return jg(this, A, I, !0);
}, pg.prototype.once = function(A, I) {
    return xg(I), this.on(A, Pg(this, A, I)), this;
}, pg.prototype.prependOnceListener = function(A, I) {
    return xg(I), this.prependListener(A, Pg(this, A, I)), this;
}, pg.prototype.removeListener = function(A15, I13) {
    var g, C, B, Q, E;
    if (xg(I13), void 0 === (C = this._events)) return this;
    if (void 0 === (g = C[A15])) return this;
    if (g === I13 || g.listener === I13) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete C[A15], C.removeListener && this.emit("removeListener", A15, g.listener || I13));
    else if ("function" != typeof g) {
        for(B = -1, Q = g.length - 1; Q >= 0; Q--)if (g[Q] === I13 || g[Q].listener === I13) {
            E = g[Q].listener, B = Q;
            break;
        }
        if (B < 0) return this;
        0 === B ? g.shift() : (function(A, I) {
            for(; I + 1 < A.length; I++)A[I] = A[I + 1];
            A.pop();
        })(g, B), 1 === g.length && (C[A15] = g[0]), void 0 !== C.removeListener && this.emit("removeListener", A15, E || I13);
    }
    return this;
}, pg.prototype.off = pg.prototype.removeListener, pg.prototype.removeAllListeners = function(A) {
    var I, g, C;
    if (void 0 === (g = this._events)) return this;
    if (void 0 === g.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== g[A] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete g[A]), this;
    if (0 === arguments.length) {
        var B, Q = Object.keys(g);
        for(C = 0; C < Q.length; ++C)"removeListener" !== (B = Q[C]) && this.removeAllListeners(B);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (I = g[A])) this.removeListener(A, I);
    else if (void 0 !== I) for(C = I.length - 1; C >= 0; C--)this.removeListener(A, I[C]);
    return this;
}, pg.prototype.listeners = function(A) {
    return _g(this, A, !0);
}, pg.prototype.rawListeners = function(A) {
    return _g(this, A, !1);
}, pg.listenerCount = function(A, I) {
    return "function" == typeof A.listenerCount ? A.listenerCount(I) : $g.call(A, I);
}, pg.prototype.listenerCount = $g, pg.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Zg(this._events) : [];
}, qg.once = Xg;
let gC = null, CC = {
    nodesAdded: 0,
    nodesRemoved: 0,
    edgesAdded: 0,
    propsWritten: 0,
    renderContext: null,
    createNode: (A, I)=>{
        CC.nodesAdded++, gC.recv("createNode", [
            A,
            I
        ]);
    },
    deleteNode: (A)=>{
        CC.nodesRemoved++, gC.recv("deleteNode", [
            A
        ]);
    },
    appendChild: (A, I)=>{
        CC.edgesAdded++, gC.recv("appendChild", [
            A,
            I
        ]);
    },
    setProperty: (A, I, g)=>{
        CC.propsWritten++, gC.recv("setProperty", [
            A,
            I,
            g
        ]);
    },
    commitUpdates: ()=>{
        gC.recv("commitUpdates", []);
    }
};
class BC extends qg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og;
    }
    initialize() {
        null === gC && (gC = process._linkedBinding("elemnative"), gC.setInternalCallbacks({
            dispatchEvent: (A, I)=>{
                "load" === A && (CC.renderContext = {
                    sampleRate: I.sampleRate,
                    blockSize: I.blockSize,
                    numInputs: I.numInputChannels,
                    numOutputs: I.numOutputs
                }), this.emit(A, I);
            }
        }));
    }
    render(...A16) {
        const I = performance.now();
        CC.nodesAdded = 0, CC.nodesRemoved = 0, CC.edgesAdded = 0, CC.propsWritten = 0, Rg(CC, ...A16);
        const g = performance.now();
        return {
            nodesAdded: CC.nodesAdded,
            edgesAdded: CC.edgesAdded,
            propsWritten: CC.propsWritten,
            elapsedTimeMs: g - I
        };
    }
}
var QC = new BC;
function EC(A) {
    try {
        window.webkit.messageHandlers.nativeHandler.postMessage(JSON.stringify(A));
    } catch (A17) {
        throw new Error("Failed to reach the plugin backend. Are you running with the correct renderer?");
    }
}
let iC = {
    nodesAdded: 0,
    nodesRemoved: 0,
    edgesAdded: 0,
    propsWritten: 0,
    renderContext: null,
    createNode: (A, I)=>{
        iC.nodesAdded++, EC([
            "createNode",
            A,
            I
        ]);
    },
    deleteNode: (A)=>{
        iC.nodesRemoved++, EC([
            "deleteNode",
            A
        ]);
    },
    appendChild: (A, I)=>{
        iC.edgesAdded++, EC([
            "appendChild",
            A,
            I
        ]);
    },
    setProperty: (A, I, g)=>{
        iC.propsWritten++, EC([
            "setProperty",
            A,
            I,
            g
        ]);
    },
    commitUpdates: ()=>{
        EC([
            "commitUpdates"
        ]);
    }
};
class oC extends qg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og;
    }
    initialize() {
        window.__recvNativeMessage = (A)=>{
            const [I, g] = JSON.parse(A);
            "load" === I && (iC.renderContext = {
                sampleRate: g.sampleRate,
                blockSize: g.blockSize,
                numInputs: g.numInputChannels,
                numOutputs: g.numOutputs
            }, g.hasOwnProperty("hydration") && Fg(g.hydration)), this.emit(I, g);
        }, window.__elemReceiveNativeMessageBatch__ = (A18)=>{
            JSON.parse(A18).forEach(([A, I])=>{
                "load" === A && (iC.renderContext = {
                    sampleRate: I.sampleRate,
                    blockSize: I.blockSize,
                    numInputs: I.numInputChannels,
                    numOutputs: I.numOutputs
                }, I.hasOwnProperty("hydration") && Fg(I.hydration)), this.emit(A, I);
            });
        }, EC([
            "ready"
        ]);
    }
    render(...A20) {
        const I = performance.now();
        iC.nodesAdded = 0, iC.nodesRemoved = 0, iC.edgesAdded = 0, iC.propsWritten = 0, Rg(iC, ...A20);
        const g = performance.now();
        return {
            nodesAdded: iC.nodesAdded,
            edgesAdded: iC.edgesAdded,
            propsWritten: iC.propsWritten,
            elapsedTimeMs: g - I
        };
    }
}
var DC = new oC;
class wC extends qg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og, this.__worklet = null, this.__renderer = null, this.__timer = null;
    }
    async initialize(A19, g10 = {
    }) {
        I1("object" == typeof A19 && null !== A19, "First argument to initialize must be a valid AudioContext instance."), I1("object" == typeof g10 && null !== g10, "The optional second argument to initialize must be an object.");
        const C = new Blob([
            'var Module=function(){var A="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(A=A||__filename),function(I){var g,C,B;I=I||{},g||(g=void 0!==I?I:{}),g.ready=new Promise((function(A,I){C=A,B=I}));var Q,E={};for(Q in g)g.hasOwnProperty(Q)&&(E[Q]=g[Q]);var D,i,o,w,N="object"==typeof window,R="function"==typeof importScripts,F="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,G="";F?(G=R?require("path").dirname(G)+"/":__dirname+"/",D=function(A,I){var g=oI(A);return g?I?g:g.toString():(o||(o=require("fs")),w||(w=require("path")),A=w.normalize(A),o.readFileSync(A,I?null:"utf8"))},i=function(A){return(A=D(A,!0)).buffer||(A=new Uint8Array(A)),a(A.buffer),A},1<process.argv.length&&process.argv[1].replace(/\\\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(A){throw A})),process.on("unhandledRejection",j),g.inspect=function(){return"[Emscripten Module object]"}):(N||R)&&(R?G=self.location.href:"undefined"!=typeof document&&document.currentScript&&(G=document.currentScript.src),A&&(G=A),G=0!==G.indexOf("blob:")?G.substr(0,G.lastIndexOf("/")+1):"",D=function(A){try{var I=new XMLHttpRequest;return I.open("GET",A,!1),I.send(null),I.responseText}catch(B){if(A=oI(A)){I=[];for(var g=0;g<A.length;g++){var C=A[g];255<C&&(DI&&a(!1,"Character code "+C+" ("+String.fromCharCode(C)+")  at offset "+g+" not in 0x00-0xFF."),C&=255),I.push(String.fromCharCode(C))}return I.join("")}throw B}},R&&(i=function(A){try{var I=new XMLHttpRequest;return I.open("GET",A,!1),I.responseType="arraybuffer",I.send(null),new Uint8Array(I.response)}catch(I){if(A=oI(A))return A;throw I}}));var U,y=g.print||console.log.bind(console),s=g.printErr||console.warn.bind(console);for(Q in E)E.hasOwnProperty(Q)&&(g[Q]=E[Q]);E=null,g.wasmBinary&&(U=g.wasmBinary);g.noExitRuntime;"object"!=typeof WebAssembly&&j("no native wasm support detected");var J,M=!1;function a(A,I){A||j("Assertion failed: "+I)}var h="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function k(A,I,g){var C=I+g;for(g=I;A[g]&&!(g>=C);)++g;if(16<g-I&&A.subarray&&h)return h.decode(A.subarray(I,g));for(C="";I<g;){var B=A[I++];if(128&B){var Q=63&A[I++];if(192==(224&B))C+=String.fromCharCode((31&B)<<6|Q);else{var E=63&A[I++];65536>(B=224==(240&B)?(15&B)<<12|Q<<6|E:(7&B)<<18|Q<<12|E<<6|63&A[I++])?C+=String.fromCharCode(B):(B-=65536,C+=String.fromCharCode(55296|B>>10,56320|1023&B))}}else C+=String.fromCharCode(B)}return C}var Y,c,K,S,l,L,n,t,Z,H="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function r(A,I){for(var g=A>>1,C=g+I/2;!(g>=C)&&l[g];)++g;if(32<(g<<=1)-A&&H)return H.decode(K.subarray(A,g));for(g="",C=0;!(C>=I/2);++C){var B=S[A+2*C>>1];if(0==B)break;g+=String.fromCharCode(B)}return g}function d(A,I,g){if(void 0===g&&(g=2147483647),2>g)return 0;var C=I;g=(g-=2)<2*A.length?g/2:A.length;for(var B=0;B<g;++B)S[I>>1]=A.charCodeAt(B),I+=2;return S[I>>1]=0,I-C}function V(A){return 2*A.length}function T(A,I){for(var g=0,C="";!(g>=I/4);){var B=L[A+4*g>>2];if(0==B)break;++g,65536<=B?(B-=65536,C+=String.fromCharCode(55296|B>>10,56320|1023&B)):C+=String.fromCharCode(B)}return C}function f(A,I,g){if(void 0===g&&(g=2147483647),4>g)return 0;var C=I;g=C+g-4;for(var B=0;B<A.length;++B){var Q=A.charCodeAt(B);if(55296<=Q&&57343>=Q)Q=65536+((1023&Q)<<10)|1023&A.charCodeAt(++B);if(L[I>>2]=Q,(I+=4)+4>g)break}return L[I>>2]=0,I-C}function W(A){for(var I=0,g=0;g<A.length;++g){var C=A.charCodeAt(g);55296<=C&&57343>=C&&++g,I+=4}return I}function b(){var A=J.buffer;Y=A,g.HEAP8=c=new Int8Array(A),g.HEAP16=S=new Int16Array(A),g.HEAP32=L=new Int32Array(A),g.HEAPU8=K=new Uint8Array(A),g.HEAPU16=l=new Uint16Array(A),g.HEAPU32=n=new Uint32Array(A),g.HEAPF32=t=new Float32Array(A),g.HEAPF64=Z=new Float64Array(A)}var e,q=[],X=[],m=[];function x(){var A=g.preRun.shift();q.unshift(A)}var O=0,u=null,p=null;function j(A){throw g.onAbort&&g.onAbort(A),s(A),M=!0,A=new WebAssembly.RuntimeError("abort("+A+"). Build with -s ASSERTIONS=1 for more info."),B(A),A}g.preloadedImages={},g.preloadedAudios={};var z,v="data:application/octet-stream;base64,";if(!(z="data:application/octet-stream;base64,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ACADIAE2AgggAyABNgIEIAJBCGsgATYCACACQQxrIAE2AgAgBEEZSQ0AIAMgATYCGCADIAE2AhQgAyABNgIQIAMgATYCDCACQRBrIAE2AgAgAkEUayABNgIAIAJBGGsgATYCACACQRxrIAE2AgAgBCADQQRxQRhyIgRrIgJBIEkNACABrUKBgICAEH4hBSADIARqIQEDQCABIAU3AxggASAFNwMQIAEgBTcDCCABIAU3AwAgAUEgaiEBIAJBIGsiAkEfSw0ACwsgAAv5AQEEfyMAQRBrIgQkAAJAAkACQAJAAkACQCAAKAIYQQRrDgUAAQIDBAULIAAsAAtBf0oNBCAAKAIAECcMBAsgACAAKAIEED8MAwsgACgCACICRQ0CIAIgACgCBCIBRgR/IAIFA0AgAUEgayEDIAFBCGsiASgCAEF/RwRAIAMQKwsgAUF/NgIAIAMiASACRw0ACyAAKAIACyEBIAAgAjYCBCABECcMAgsgACgCACIBRQ0BIAAgATYCBCABECcMAQsCQCAAIAAoAhAiAkYEQEEEIQEMAQtBBSEBIAJFDQELIAIgAigCACABQQJ0aigCABEAAAsgBEEQaiQACzcBAX8CQCAAQQhqIgEoAgAEQCABIAEoAgBBAWsiATYCACABQX9HDQELIAAgACgCACgCEBEAAAsLAwABCxMAIABBEGogACgCECgCABEBABoL3AwCDn8CfSMAQRBrIgckACAAQRRqIgUgARBPIQYgB0HAABAoIgA2AgAgB0KygICAgIiAgIB/NwIEIABBADoAMiAAQZAKLwAAOwAwIABBiAopAAA3ACggAEGACikAADcAICAAQfgJKQAANwAYIABB8AkpAAA3ABAgAEHoCSkAADcACCAAQeAJKQAANwAAIAYEQEEIEAEiACAHEDggAEHMoAJBARACAAsgABAnIAchDCACIQ0gASILKAIEIAEtAAsiACAAQRh0QRh1QQBIIgAbIgIhAyABKAIAIAEgABsiByEEAkAgAiIAQQRJDQACfyACQQRrIgBBBHEEQCACIgEhAyAHDAELIAcoAABBldPH3gVsIgFBGHYgAXNBldPH3gVsIAJBldPH3gVscyEDIAAhASAHQQRqCyEEIABBBEkNACABIQADQCAEKAAEQZXTx94FbCIBQRh2IAFzQZXTx94FbCAEKAAAQZXTx94FbCIB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DQELIAUgAiABEDAaCyABIAVqQQA6AAAgACADKAIINgIYIAAgAykDADcCECAAQQQ2AiggA0EQaiQAIAAPCxBDAAsQQwALqiQCCn8BfCMAQSBrIgUkAAJAAkACQAJAAkACQAJAAkACQAJAIABBAWsOCAECAwQFBgcIAAsCQAJAIAEoAgAiACgCGEEBag4CAQoACyAAECsLIABBADYCGAwICwJAAkAgASgCACIAKAIYQQFqDgMBAAkACyAAECsLIABBATYCGAwHCwJAAkACQCABKAIAIgAoAhhBAWoOBAIBAQABCyACIAMtAAA6AAAMCAsgABArCyADLQAAIQEgAEECNgIYIAAgAToAAAwGCwJAAkACQCABKAIAIgAoAhhBAWoOBQIBAQEAAQsgAiADKwMAOQMADAcLIAAQKwsgAysDACEOIABBAzYCGCAAIA45AwAMBQsgASgCACIAKAIYIgFBBEYEQCACIANGDQUgAy0ACyIBQRh0QRh1IQAgAiwAC0EATgRAIABBAE4EQCACIAMpAwA3AwAgAiADKAIINgIIDAcLIAIgAygCACADKAIEEJcBDAYLIAIgAygCACADIABBAEgiABsgAygCBCABIAAbEJgBDAULAkAgAywAC0EATgRAIAUgAygCCDYCCCAFIAMpAgA3AwAMAQsgBSADKAIAIAMoAgQQOSAAKAIYIQELIAFBf0cEQCAAECsLIAAgBSkDADcCACAAIAUoAgg2AgggAEEENgIYDAQLIAEoAgAiACgCGEEFRgRAIAIgA0YNBCADKAIAIQEgA0EEaiEKQQAhACMAQRBrIggkAAJAIAIiBigCCEUNACAGKAIAIQIgBiAGQQRqNgIAIAYoAgRBADYCCCAGQgA3AgQgAigCBCIDIAIgAxsiA0UEQCAGQQAQPwwBCwJAIAMoAggiBEUNACADIAQoAgAiAkYEQCAEQQA2AgAgBCgCBCICRQRAIAQhAAwCCwNAIAIiACgCACICDQAgACgCBCICDQALDAELIARBADYCBCACRQRAIAQhAAwBCwNAIAIiACgCACICDQAgACgCBCICDQALCwJAIAEgCkYEQCADIQQMAQsgASECA0AgACEEIAggA0EgajYCDCAIIANBEGo2AggjAEEQayIHJAACQCACQRBqIgAgCCgCCCIBRg0AIAAtAAsiC0EYdEEYdSEJIAEsAAtB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AUEAOgAAIAMoAhgiAEF/RwRAIAAgASADED0gASADKAIYNgIYCyABQSBqIQEgA0EgaiIDIAZHDQALCyACIAE2AgQMAgsgACABRwRAA0AgAUEgayEDIAFBCGsiASgCAEF/RwRAIAMQKwsgAUF/NgIAIAMiASAARw0ACwsgAiAANgIEDAELIAAEQCAAIAIoAgQiA0YEfyAABQNAIANBIGshASADQQhrIgMoAgBBf0cEQCABECsLIANBfzYCACABIgMgAEcNAAsgAigCAAshASACIAA2AgQgARAnIAJBADYCCCACQgA3AgBBACEBCyAHQX9MDQEgCCABQQR1IgAgACAISRtB////PyABQQV1Qf///x9JGyIAQYCAgMAATw0BIAIgAEEFdCIBECgiADYCACACIAA2AgQgAiAAIAFqNgIIIAQgBkcEQANAIABBfzYCGCAAQQA6AAAgBCgCGCIBQX9HBEAgASAAIAQQPSAAIAQoAhg2AhgLIABBIGohACAEQSBqIgQgBkcNAAsLIAIgADYCBAsgCkEwaiQADAELEDIACwwDCyAFIAM2AgQgBSAANgIAIwBBIGsiACQAIAUoAgAhAiAFKAIEIQQgAEEANgIIIABCADcDAAJAAkAgBCgCBCAEKAIAayIDBEAgA0F/TA0BIAAgAxAoIgE2AgAgACABNgIEIAAgASADQQV1QQV0ajYCCCAEKAIAIgMgBCgCBCIERwRAA0AgAUF/NgIYIAFBADoAACADKAIYIgZBf0cEQCAGIAEgAxA9IAEgAygCGDYCGAsgAUEgaiEBIANBIGoiAyAERw0ACwsgACABNgIECyACKAIYQX9HBEAgAhArCyACQQA2AgggAkIANwMAIAIgACgCADYCACACIAAoAgQ2AgQgACgCCCEBIAJBBjYCGCACIAE2AgggAEEgaiQADAELEDIACwwCCyABKAIAIgAoAhhBB0YEQCACIANGDQICQCADKAIEIgggAygCACIBayIDQQJ1IgQgAigCCCIGIAIoAgAiAGtBAnVNBEAgASACKAIEIABrIgNqIAggBCADQQJ1IgpLGyIDIAFrIgYEQCAAIAEgBhA7CyAEIApLBEAgAigCBCEAIAIgCCADayIBQQFOBH8gACADIAEQMCABagUgAAs2AgQMAgsgAiAAIAZqNgIEDAELIAAEQCACIAA2AgQgABAnIAJBADYCCCACQgA3AgBBACEGCwJAIANBf0wNACAEIAZBAXUiACAAIARJG0H/////AyAGQQJ1Qf////8BSRsiAEGAgICABE8NACACIABBAnQiBBAoIgA2AgAgAiAANgIEIAIgACAEajYCCCACIANBAU4EfyAAIAEgAxAwIANqBSAACzYCBAwBCxAyAAsMAgsgBSADNgIEIAUgADYCACMAQSBrIgAkACAFKAIAIQEgBSgCBCECIABBADYCECAAQgA3AwgCQAJAIAIoAgQgAigCAGsiBARAIARBf0wNASAAIAQQKCIDNgIIIAAgAzYCDCAAIAMgBEECdUECdGo2AhAgACACKAIEIAIoAgAiBGsiAkEBTgR/IAMgBCACEDAgAmoFIAMLNgIMCyABKAIYQX9HBEAgARArCyABQQA2AgggAUIANwMAIAEgACgCCDYCACABIAAoAgw2AgQgACgCECECIAFBBzYCGCABIAI2AgggAEEgaiQADAELEDIACwwBCyABKAIAIgAoAhhBCEYEQAJAIAMoAhAiAEUEQCAFQQA2AhAMAQsgACADRgRAIAUgBTYCECAAIAUgACgCACgCDBECAAwBCyAFIAAgACgCACgCCBEBADYCEAsjAEEQayIAJAACQCACIAVGDQAgBSAFKAIQIgFGBEAgAiACKAIQRgRAIAEgACABKAIAKAIMEQIAIAUoAhAiASABKAIAKAIQEQAAIAVBADYCECACKAIQIgEgBSABKAIAKAIMEQIAIAIoAhAiASABKAIAKAIQEQAAIAJBADYCECAFIAU2AhAgACACIAAoAgAoAgwRAgAgACAAKAIAKAIQEQAAIAIgAjYCEAwCCyABIAIgASgCACgCDBECACAFKAIQIgEgASgCACgCEBEAACAFIAIoAhA2AhAgAiACNgIQDAELIAIoAhAiAyACRgRAIAMgBSADKAIAKAIMEQIAIAIoAhAiASABKAIAKAIQEQAAIAIgBSgCEDYCECAFIAU2AhAMAQsgBSADNgIQIAIgATYCEAsgAEEQaiQAAkAgBSgCECIBIAVGBEBBBCEADAELQQUhACABRQ0CCyABIAEoAgAgAEECdGooAgARAAAMAQsgBSADNgIEIAUgADYCACMAQSBrIgAkACAFKAIAIQECQCAFKAIEIgMoAhAiAkUEQCAAQQA2AhAMAQsgAiADRgRAIAAgADYC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f1gNAEGQqwJBxAA2AgAMAQsgECANrCIPhSAPfSERCyAIQRBqJAAjAEEQayIAJAAgAEGQqwIoAgA2AgxBkKsCIAYoAgg2AgAgBiAAKAIMNgIIIABBEGokAAJAIAYoAghBxABHBEAgBigCDCAHRg0BIAZBEGokACARDAILIwBBEGsiACQAIAAgC0GNEhCWASAAEJUBAAsjAEEQayIAJAAgACALQZENEJYBIAAQlQEACyEPIAktAAtBB3YEQCAJKAIIGiAJKAIAECcLIApBEGokACAPC6gCAQF/IABBfzYCICAAQQA6AAACQAJAAkACQAJAAkAgASgCIA4EAAECAwULIAAgASkDADcDACAAIAEoAgg2AgggACABKAIMNgIMIAFCADcDCCAAQgA3AxAgAEEANgIYIAAgASgCEDYCECAAIAEoAhQ2AhQgACABKAIYNgIYIAFBADYCGCABQgA3AxAMAwsgACABKQMANwMAIAAgASgCCDYCCCAAIAEoAgw2AgwgAUIANwMIIABCADcDECAAQQA2AhggACABKAIQNgIQIAAgASgCFDYCFCAAIAEoAhg2AhggAUEANgIYIAFCADcDEEEBIQIMAgsgACABKQMANwMAQQIhAgwBCyAAIAEpAwA3AwAgACABKQMINwMIIAEoAiAhAgsgACACNgIgCwuZAQEDfCAAIACiIgMgAyADoqIgA0R81c9aOtnlPaJE65wriublWr6goiADIANEff6xV+Mdxz6iRNVhwRmgASq/oKJEpvgQERERgT+goCEFIAMgAKIhBCACRQRAIAQgAyAFokRJVVVVVVXFv6CiIACgDwsgACADIAFEAAAAAAAA4D+iIAQgBaKhoiABoSAERElVVVVVVcU/oqChC5IBAQN8RAAAAAAAAPA/IAAgAKIiAkQAAAAAAADgP6IiA6EiBEQAAAAAAADwPyAEoSADoSACIAIgAiACRJAVyxmgAfo+okR3UcEWbMFWv6CiRExVVVVVVaU/oKIgAiACoiIDIAOiIAIgAkTUOIi+6fqovaJExLG0vZ7uIT6gokStUpyAT36SvqCioKIgACABoqGgoAvoAgIDfwF8IwBBEGsiASQAAn0gALwiA0H/////B3EiAkHan6T6A00EQEMAAIA/IAJBgICAzANJDQEaIAC7EEYMAQsgAkHRp+2DBE0EQCAAuyEEIAJB5Jfb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IAAoAiAiAQRAIAAgATYCJCABECcLIAAoAhQiAQRAIAAgATYCGCABECcLIAALjAMBB38gACgCCCICIAAoAgQiAWtBA3VBIE8EQCAAIAFBAEGAAhAqQYACajYCBA8LAkACQAJAIAEgACgCACIEa0EDdSIFQSBqIgNBgICAgAJJBEACfyADIAIgBGsiAkECdSIGIAMgBksbQf////8BIAJBA3VB/////wBJGyICBEAgAkGAgICAAk8NAyACQQN0ECghBwsgByAFQQN0aiIDC0EAQYACECoiBkGAAmohBSAHIAJBA3RqIQIgASAERg0CA0AgA0EIayIDIAFBCGsiASgCADYCACADIAEoAgQ2AgQgAUIANwIAIAEgBEcNAAsgACACNgIIIAAoAgQhBCAAIAU2AgQgACgCACEBIAAgAzYCACABIARGDQMDQCAEIgBBCGshBAJAIABBBGsoAgAiAEUNACAAIAAoAgQiA0EBazYCBCADDQAgACAAKAIAKAIIEQAAIAAQLAsgASAERw0ACwwDCxAyAAtBxw8QOgALIAAgAjYCCCAAIAU2AgQgACAGNgIACyABBEAgARAnCwuoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0gEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSBtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAABAAoiEAIAFBg3BKBEAgAUH+B2ohAQwBCyAARAAAAAAAABAAoiEAIAFBhmggAUGGaEobQfwPaiEBCyAAIAFB/wdqrUI0hr+iC0kBAn8gACgCBCIFQQh1IQYgACgCACIAIAEgBUEBcQR/IAYgAigCAGooAgAFIAYLIAJqIANBAiAFQQJxGyAEIAAoAgAoAhgRBQALxgEBAn8jAEEQayIBJAACQCAAvUIgiKdB/////wdxIgJB+8Ok/wNNBEAgAkGAgMDyA0kNASAARAAAAAAAAAAAQQAQYiEADAELIAJBgIDA/wdPBEAgACAAoSEADAELAkACQAJAAkAgACABEJ4BQQNxDgMAAQIDCyABKwMAIAErAwhBARBiIQAMAwsgASsDACABKwMIEGMhAAwCCyABKwMAIAErAwhBARBimiEADAELIAErAwAgASsDCBBjmiEACyABQRBqJAAgAAubBAEDfyABIAAgAUYiAjoADAJAIAINAANAIAEoAggiAi0ADA0BAkACfyACIAIoAggiAygCACIERgRAAkAgAygCBCIERQ0AIAQtAAwNAAwDCwJAIAEgAigCAEYEQCACIQEMAQsgAiACKAIEIgEoAgAiADYCBCABIAAEfyAAIAI2AgggAigCCAUgAws2AgggAigCCCIAIAAoAgAgAkdBAnRqIAE2AgAgASACNgIAIAIgATYCCCABKAIIIQMLIAFBAToADCADQQA6AAwgAyADKAIAIgAoAgQiATYCACABBEAgASADNgIICyAAIAMoAgg2AgggAygCCCIBIAEoAgAgA0dBAnRqIAA2AgAgACADNgIEIANBCGoMAQsCQCAERQ0AIAQtAAwNAAwCCwJAIAEgAigCAEcEQCACIQEMAQsgAiABKAIEIgA2AgAgASAABH8gACACNgIIIAIoAggFIAMLNgIIIAIoAggiACAAKAIAIAJHQQJ0aiABNgIAIAEgAjYCBCACIAE2AgggASgCCCEDCyABQQE6AAwgA0EAOgAMIAMgAygCBCIAKAIAIgE2AgQgAQRAIAEgAzYCCAsgACADKAIINgIIIAMoAggiASABKAIAIANHQQJ0aiAANgIAIAAgAzYCACADQQhqCyAANgIADAILIARBDGohASACQQE6AAwgAyAAIANGIgI6AAwgAUEBOgAAIAMhASACRQ0ACwsL3gEBAn8CQCABIAAoAgxGBEAgACgCCCECDAELIAAoAggiAgRAIAIQJwsgAEIANwIIIAFFBEBBACECDAELQX8gAUECdCABQf////8DcSABRxsQKCECIAAgATYCDCAAIAI2AggLIAJBACABQQJ0IgMQKhoCQCABIAAoAhhGBEAgACgCFCECDAELIAAoAhQiAgRAIAIQJwsgAEIANwIUIAFFBEBBACECDAELQX8gAUECdCABQf////8DcSABRxsQKCECIAAgATYCGCAAIAI2AhQLIAJBACADECoaIAAgATYCAAu0AQEBfyAAQgA3AgQgAEEMahBnIABBoAFqEGcgACgCuAIiAQRAIAEQJwsgAEIANwK4AiAAKALEAiIBBEAgARAnCyAAQgA3AsQCIABBzAJqEGcgACgC5AMiAQRAIAEQJwsgAEIANwLkAyAAKALwAyIBBEAgARAnCyAAQgA3AvADIAAoAvwDIgEEQCABECcLIABCADcC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CHUhByAAKAIAIgAgASACIAZBAXEEfyAHIAMoAgBqKAIABSAHCyADaiAEQQIgBkECcRsgBSAAKAIAKAIUEQoAC5oBACAAQQE6ADUCQCAAKAIEIAJHDQAgAEEBOgA0AkAgACgCECICRQRAIABBATYCJCAAIAM2AhggACABNgIQIAAoAjBBAUcNAiADQQFGDQEMAgsgASACRgRAIAAoAhgiAkECRgRAIAAgAzYCGCADIQILIAAoAjBBAUcNAiACQQFGDQEMAgsgACAAKAIkQQFqNgIkCyAAQQE6ADYLC10BAX8gACgCECIDRQRAIABBATYCJCAAIAI2AhggACABNgIQDwsCQCABIANGBEAgACgCGEECRw0BIAAgAjYCGA8LIABBAToANiAAQQI2AhggACAAKAIkQQFqNgIkCwsVACAAQZSfAjYCACAAQQRqEJIBIAALagEDfyMAQRBrIgEkACABQQA2AgwgASAANgIEIAEgADYCACABIABBAWo2AgggASECIwBBEGsiAyQAIANBCGoiACACKAIENgIAIAAoAgBBAToAACACKAIIQQE6AAAgA0EQaiQAIAFBEGokAAuXAQEEfyMAQRBrIgEkACABQQA2AgwgASAANgIEIAEgADYCACABIABBAWo2AgggASEDIwBBEGsiBCQAAn8gBEEIaiIAIAMoAgQ2AgAgACgCAC0AAEULBEACfwJAIAMoAggiAi0AACIAQQFHBH8gAEECcQ0BIAJBAjoAAEEBBUEACwwBCwALIQILIARBEGokACABQRBqJAAgAgs3AQJ/IAEQSyICQQ1qECgiA0EANgIIIAMgAjYCBCADIAI2AgAgACADQQxqIAEgAkEBahAwNgIAC8cCAQV/IwBBEGsiCCQAIAIgAUF/c0ERa00EQAJ/IAAtAAtBB3YEQCAAKAIADAELIAALIQkCfyABQef///8HSQRAIAggAUEBdDYCCCAIIAEgAmo2AgwCfyMAQRBrIgIkACAIQQxqIgooAgAgCEEIaiILKAIASSEMIAJBEGokACALIAogDBsoAgAiAkELTwsEfyACQRBqQXBxIgIgAkEBayICIAJBC0YbBUEKCwwBC0FuC0EBaiIKECghAiAEBEAgAiAJIAQQTAsgBgRAIAIgBGogByAGEEwLIAMgBCAFamsiAwRAIAIgBGogBmogBCAJaiAFaiADEEwL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ARAnCyAAQgA3AvwDIABByPgBNgLsAyAAKALwAyIBBEAgARAnCyAAQgA3AvADIABByPgBNgLgAyAAKALkAyIBBEAgARAnCyAAQgA3AuQDIABBzAJqEGgaIABByPgBNgLAAiAAKALEAiIBBEAgARAnCyAAQgA3AsQCIABByPgBNgK0AiAAKAK4AiIBBEAgARAnCyAAQgA3ArgCIABBoAFqEGgaIABBDGoQaBogAAuhAQEEfyAAKAIAIQEgAEEANgIAIAEEQAJAIAAtAAhFDQAgASgCICIABEAgASAANgIkIAAQJwsgASgCFCIABEAgACABKAIYIgJGBH8gAAUDQCACQQxrIgQoAgAiAwRAIAJBCGsgAzYCACADECcLIAQiAiAARw0ACyABKAIUCyECIAEgADYCGCACECcLIAEsABNBf0oNACABKAIIECcLIAEQJwsL3AQBCX8jAEEQayIGJAAgBkEANgIIIAZCADcDAAJAAkACQCABRQRAQQAhAQwBCyABQYCAgIAETw0BIAYgAUECdCICECgiAzYCACAGIAIgA2oiATYCCCADQQAgAhAqGgsgAEEANgIIIABCADcCACAAQQwQKCICNgIAIAAgAjYCBCAAIAJBDGoiBzYCCAJAIAEgA2siBEUEQCACQQBBDBAqGgwBCyAEQX9MDQIgBEECdUECdCEJIARBAnZBAnQhCCACIQEDQCABQQA2AgggAUIANwIAIAEgBBAoIgU2AgAgASAFIAlqNgIIIAEgBSADIAQQMCAIajYCBCABQQxqIgEgB0cNAAsLIAAgBzYCBCADBEAgAxAnIAAoAgQhByAAKAIAIQILIABCADcCDCAAQQA2AhQgAiAHRwRAIABBDGohAQNAIAYgAigCADYCAAJAIAEoAgQiAyABKAIIIgVJBEAgAyAGKAIANgIAIAEgA0EEajYCBAwBCwJAIAMgASgCACIDayIJQQJ1IghBAWoiBEGAgICABEkEQCAEIAUgA2siBUEBdSIKIAQgCksbQf////8DIAVBAnVB/////wFJGyIEBH8gBEGAgICABE8NAiAEQQJ0ECgFQQALIgUgCEECdGoiCCAGKAIANgIAIAlBAU4EQCAFIAMgCRAwGgsgASAFIARBAnRqNgIIIAEgCEEEajYCBCABIAU2AgAgAwRAIAMQJwsMAgsQMgALQccPEDoACyACQQxq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GwwBCyAHEDQLIgcgBiAGIAdJGyIGIAVPDQELIAEgBhBICyABKAIEIgUgBUEBayIDcUUEQCADIAhxIQYMAQsgBSAISwRAIAghBgwBCyAIIAVwIQYLAkAgASgCACAGQQJ0aiIEKAIAIgNFBEAgAiABKAIINgIAIAEgAjYCCCAEIAFBCGo2AgAgAigCACIDRQ0BIAMoAgQhAwJAIAUgBUEBayIEcUUEQCADIARxIQMMAQsgAyAFSQ0AIAMgBXAhAwsgASgCACADQQJ0aiACNgIADAELIAIgAygCADYCACADIAI2AgALIAEgASgCDEEBajYCDEEBCzoABCAAIAI2AgAL9wcCA38BfiMAQSBrIgYkAAJAAkACQAJAAkAgAEEBaw4DAQIDAAsCQAJAAkAgASgCACIAKAIgQQFqDgICAAELIAIgAykDADcDACADKAIMIQEgAygCCCEAIANCADcDCCACIAA2AgggAigCDCEAIAIgATYCDAJAIABFDQAgACAAKAIEIgFBAWs2AgQgAQ0AIAAgACgCACgCCBEAACAAECwLIAIoAhAiAQRAIAEgAigCFCIARgR/IAEFA0AgACIEQQhrIQACQCAEQQRrKAIAIgRFDQAgBCAEKAIEIgVBAWs2AgQgBQ0AIAQgBCgCACgCCBEAACAEECwLIAAgAUcNAAsgAigCEAshACACIAE2AhQgABAnIAJBADYCGCACQgA3AxALIAIgAygCEDYCECACIAMoAhQ2AhQgAiADKAIYNgIYIANBADYCGCADQgA3AxAMBQsgABBECyAAIAMpAwA3AwAgACADKAIINgIIIAAgAygCDDYCDCADQgA3AwggAEIANwMQIABBADYCGCAAIAMoAhA2AhAgACADKAIUNgIUIAAgAygCGDYCGCADQQA2AhggA0IANwMQIABBADYCIAwDCwJAAkACQCABKAIAIgAoAiBBAWoOAwIBAAELIAIgAykDADcDACADKAIMIQEgAygCCCEAIANCADcDCCACIAA2AgggAigCDCEAIAIgATYCDAJAIABFDQAgACAAKAIEIgFBAWs2AgQgAQ0AIAAgACgCACgCCBEAACAAECwLIAIoAhAiAQRAIAEgAigCFCIARgR/IAEFA0AgACIEQQhrIQACQCAEQQRrKAIAIgRFDQAgBCAEKAIEIgVBAWs2AgQgBQ0AIAQgBCgCACgCCBEAACAEECwLIAAgAUcNAAsgAigCEAshACACIAE2AhQgABAnIAJBADYCGCACQgA3AxALIAIgAygCEDYCECACIAMoAhQ2AhQgAiADKAIYNgIYIANBADYCGCADQgA3AxAMBAsgABBECyAAIAMpAwA3AwAgACADKAIINgIIIAAgAygCDDYCDCADQgA3AwggAEIANwMQIABBADYCGCAAIAMoAhA2AhAgACADKAIUNgIUIAAgAygCGDYCGCADQQA2AhggA0IANwMQIABBATYCIAwCCwJAAkACQCABKAIAIgAoAiBBAWoOBAIBAQABCyACIAMpAwA3AwAMAwsgABBECyADKQMAIQcgAEECNgIgIAAgBzcDAAwBCyABKAIAIgAoAiAiAUEDRgRAIAIgAykDADcDACACIAMpAwg3AwgMAQsgAUF/RwRAIAAQRAsgAEF/NgIgIAAgAykDADcDACAAIAMpAwg3AwggAEEDNgIgCyAGQSBqJAAL1QYBBn8jAEEgayIEJAACQAJAAkACQCAAKAIoIgVFDQAgBSABEF0hByAEQSAQKCIDNgIAIARCmICAgICEgICAfzcCBCADQQA6ABggA0GRJSkAADcAECADQYklKQAANwAIIANBgSUpAAA3AAAgBCAEIAEoAgAgASABLQALIgNBGHRBGHVBAEgiBhsgASgCBCADIAYbEFkiAyIGKAIINgIYIAQgAykCADcDECADQgA3AgAgBkEANgIIIAdFDQMgBCwAG0F/TARAIAQoAhAQJwsgBCwAC0F/TARAIAQoAgAQJwsgBSABEE8iBUUNASAFKAIUIQcgBSgCGCEGIARBIBAoIgM2AgAgBEKagICAgISAgIB/NwIEIANBADoAGiADQeskLwAAOwAYIANB4yQpAAA3ABAgA0HbJCkAADcACCADQdMkKQAANwAAIAQgBCABKAIAIAEgAS0ACyIDQRh0QRh1QQBIIggbIAEoAgQgAyAIGxBZIgEiAygCCDYCGCAEIAEpAgA3AxAgAUIANwIAIANBADYCCCAGIAdrQQxtIAJNDQMgBCwAG0F/TARAIAQoAhAQJwsgBCwAC0F/TARAIAQoAgAQJwsgBSgCGCAFKAIUIgdrQQxtIAJNDQICQCAAKAIwIAAoAiwiBWsiAQRAIAFBA3UiAUEBIAFBAUsbIQZBACEBA0AgBSABQQN0aigCBCIDBEAgAygCBEUNAwsgAUEBaiIBIAZHDQALC0EIEAEiABBSIABBzKACQQEQAgALIAUgAUEDdGooAgAhASADIAMoAgRBAWo2AgQgARBvIAEgByACQQxsaiICKAIAIgUgAigCBCAFa0ECdRCvAQJ/IAAoAjwiBSAAQUBrKAIAIgJLBEAgBSACawwBCyAAKAI4IAUgAmtqCwRAIAAoAkQgAkEDdGoiBSABNgIAIAUoAgQhASAFIAM2AgQCQCABRQ0AIAEgASgCBCIDQQFrNgIEIAMNACABIAEoAgAoAggRAAAgARAsCyAAIAAoAlAgAkEBanE2AkAMAQsgAyADKAIEIgBBAWs2AgQgAA0AIAMgAygCACgCCBEAACADECwLIARBIGokAA8LQcoSEEUACxB+AAtBCBABIgAgBEEQahA4IABBzKACQQEQAgALngMBBX8jAEEQayIFJAAgAEGc8AE2AgACQCAAKAJYIgFFDQAgASABKAIEIgNBAWs2AgQgAw0AIAEgASgCACgCCBEAACABECwLIAAoAkQiAwRAIAMgACgCSCIBRgR/IAMFA0AgASICQQhrIQECQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECwLIAEgA0cNAAsgACgCRAshASAAIAM2AkggARAnCyAAKAIsIgMEQCADIAAoAjAiAUYEfyADBQNAIAEiAkEIayEBAkAgAkEEaygCACICRQ0AIAIgAigCBCIEQQFrNgIEIAQNACACIAIoAgAoAggRAAAgAhAsCyABIANHDQALIAAoAiwLIQEgACADNgIwIAEQJwsgAEHkLzYCACAAKAIcIgEEQANAIAEoAgAhAyABKAIwQX9HBEAgAUEYahArCyABQX82AjAgASwAE0F/TARAIAEoAggQJwsgARAnIAMiAQ0ACwsgACgCFCEBIABBADYCFCABBEAgARAnCyAFQRBqJAAgAAv2AQEDfwJAIAEQSyIDQXBJBEACQAJAIANBC08EQCADQRBqQXBxIgUQKCEEIAAgBUGAgICAeHI2AgggACAENgIAIAAgAzYCBAwBCyAAIAM6AAsgACEEIANFDQELIAQgASADEDAaCyADIARqQQA6AAAgAEEANgIYIABCADcDECACKAIEIAIoAgBrIgQEQCAAQRBqIQMgBEF/TA0CIAAg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AEEQayIFJAAgAEGs1wE2AgAgACgCeCIBBEAgACABNgJ8IAEQJwsCQCAAKAJcIgFFDQAgASABKAIEIgNBAWs2AgQgAw0AIAEgASgCACgCCBEAACABECwLIAAoAkgiAwRAIAMgACgCTCIBRgR/IAMFA0AgASICQQhrIQECQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECwLIAEgA0cNAAsgACgCSAshASAAIAM2AkwgARAnCyAAKAIwIgMEQCADIAAoAjQiAUYEfyADBQNAIAEiAkEIayEBAkAgAkEEaygCACICRQ0AIAIgAigCBCIEQQFrNgIEIAQNACACIAIoAgAoAggRAAAgAhAsCyABIANHDQALIAAoAjALIQEgACADNgI0IAEQJwsgAEHkLzYCACAAKAIcIgEEQANAIAEoAgAhAyABKAIwQX9HBEAgAUEYahArCyABQX82AjAgASwAE0F/TARAIAEoAggQJwsgARAnIAMiAQ0ACwsgACgCFCEBIABBADYCFCABBEAgARAnCyAFQRBqJAAgAAueAwEFfyMAQRBrIgUkACAAQdDBATYCAAJAIAAoAlgiAUUNACABIAEoAgQiA0EBazYCBCADDQAgASABKAIAKAIIEQAAIAEQLAsgACgCRCIDBEAgAyAAKAJIIgFGBH8gAwUDQCABIgJBCGshAQJAIAJBBGsoAgAiAkUNACACIAIoAgQiBEEBazYCBCAEDQAgAiACKAIAKAIIEQAAIAIQLAsgASADRw0ACyAAKAJECyEBIAAgAzYCSCABECcLIAAoAiwiAwRAIAMgACgCMCIBRgR/IAMFA0AgASICQQhrIQECQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECwLIAEgA0cNAAsgACgCLAshASAAIAM2AjAgARAnCyAAQeQvNgIAIAAoAhwiAQRAA0AgASgCACEDIAEoAjBBf0cEQCABQRhqECsLIAFBfzYCMCABLAATQX9MBEAgASgCCBAnCyABECcgAyIBDQALCyAAKAIUIQEgAEEANgIUIAEEQCABECcLIAVBEGokACAAC74EAgR/AXwjAEEQayIDJAAgAyAAQRRqIAEgASACEFACQCADLQAEDQAgAygCACIGQRhqIQQgAigCGCEFAkAgBigCMEF/RgRAIAVBf0YNAgwBCyAFQX9HDQAgBBArIAZBfzYCMAwBCyADIAQ2AgAgBSADIAQgAhBKCwJAAkACQCABKAIEIAEtAAsiBCAEQRh0QRh1QQBIG0EIRw0AIAFBmw5BCBA1DQAgAigCGCEEIANBwAAQKCIBNgIAIANCsYCAgICIgICAfzcCBCABQQA6ADEgAUHwHC0AADoAMCABQegcKQAANwAoIAFB4BwpAAA3ACAgAUHYHCkAADcAGCABQdAcKQAANwAQIAFByBwpAAA3AAggAUHAHCkAADcAACAEQQNHDQIgARAnIAIoAhhBA0cNASACKwMAIQcgA0HAABAoIgE2AgAgA0K3gICAgIiAgIB/NwIEIAFBADoANyABQaUkKQAANwAvIAFBniQpAAA3ACggAUGWJCkAADcAICABQY4kKQAANwAYIAFBhiQpAAA3ABAgAUH+IykAADcACCABQfYjKQAANwAAIAdEAAAAAAAAAABkRQ0CIAEQJyACKAIYQQNHDQEgAAJ+IAIrAwBE/Knx0k1iUD+iIAAqAhC7oiIHRAAAAAAAAABAIAdEAAAAAAAAAEBkGyIHmUQAAAAAAADgQ2MEQCAHsAwBC0KAgICAgICAgIB/CzcDOAsgA0EQaiQADwsQPgALQQgQASIAIAMQOCAAQcygAkEBEAIAC54DAQV/IwBBEGsiBSQAIABByK4BNgIAAkAgACgCWCIBRQ0AIAEgASgCBCIDQQFrNgIEIAMNACABIAEoAgAoAggRAAAgARAsCyAAKAJEIgMEQCADIAAoAkgiAUYEfyADBQNAIAEiAkEIayEBAkAgAkEEaygCACICRQ0AIAIgAigCBCIEQQFrNgIEIAQNACACIAIoAgAoAggRAAAgAhAsCyABIANHDQALIAAoAkQLIQEgACADNgJIIAEQJwsgACgCLCIDBEAgAyAAKAIwIgFGBH8gAwUDQCABIgJBCGshAQJAIAJBBGsoAgAiAkUNACACIAIoAgQiBEEBazYCBCAEDQAgAiACKAIAKAIIEQAAIAIQLAsgASADRw0ACyAAKAIsCyEBIAAgAzYCMCABECcLIABB5C82AgAgACgCHCIBBEADQCABKAIAIQMgASgCMEF/RwRAIAFBGGoQKwsgAUF/NgIwIAEsABNBf0wEQCABKAIIECcLIAEQJyADIgENAAsLIAAoAhQhASAAQQA2AhQgAQRAIAEQJwsgBUEQaiQAIAALfgEDfyMAQRBrIgMkACAAQeQvNgIAIAAoAhwiAQRAA0AgASgCACECIAEoAjBBf0cEQCABQRhqECsLIAFBfzYCMCABLAATQX9MBEAgASgCCBAnCyABECcgAiIBDQALCyAAKAIUIQIgAEEANgIUIAIEQCACECcLIANBEGokACAAC4oOAQl/IwBBEGsiCCQAIwBBEGsiBiQAIAAiAUH4AGooAtABIgAEQANAIAAoAgAhAiAAECcgAiIADQALCyABKALAAiEAIAFBADYCwAIgAARAIAAQJwsgASgCtAIiAARAIAEgADYCuAIgABAnCyABKAKoAiIABEAgASAANgKsAiAAECcLIAEoApgCIgAEQANAIAAoAgAhAiAAECcgAiIADQALCyABKAKQAiEAIAFBADYCkAIgAARAIAAQJwsgASgChAIiAARAIAEgADYCiAIgABAnCyABKAL4ASIABEAgASAANgL8ASAAECcLIAEoAugBIgAEQCABIAA2AuwBIAAQJwsgASgC3AEiAARAIAEgADYC4AEgABAnCyABKALIASICBEAgAiABKALMASIARgR/IAIFA0AgAEEoayEDIABBCGsiACgCAEF/RwRAIAMQRAsgAEF/NgIAIAMiACACRw0ACyABKALIAQshACABIAI2AswBIAAQJwsgASgCsAEiAARAA0AgACgCACEEIAAoAhAiAgRAIAIgACgCFCIDRgR/IAIFA0AgAyIFQQhrIQMCQCAFQQRrKAIAIgVFDQAgBSAFKAIEIgdBAWs2AgQgBw0AIAUgBSgCACgCCBEAACAFECwLIAIgA0cNAAsgACgCEAshAyAAIAI2AhQgAxAnCyAAECcgBCIADQALCyABKAKoASEAIAFBADYCqAEgAARAIAAQJwsgASgCnAEiAARAA0AgACICKAIAIQACQCACKAIUIgNFDQAgAyADKAIEIgRBAWs2AgQgBA0AIAMgAygCACgCCBEAACADECwLIAIQJyAADQALCyABKAKUASEAIAFBADYClAEgAARAIAAQJwsgASgCiAEiAARAA0AgACICKAIAIQACQCACKAIUIgNFDQAgAyADKAIEIgRBAWs2AgQgBA0AIAMgAygCACgCCBEAACADECwLIAIQJyAADQALCyABKAKA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ASgCBCABLQALIgMgA0EYdEEYdUEASBtBBEcNACABQfQRQQQQNQ0AIAIoAhghBCAFQTAQKCIDNgIAIAVCq4CAgICGgICAfzcCBCADQQA6ACsgA0GIHygAADYAJyADQYEfKQAANwAgIANB+R4pAAA3ABggA0HxHikAADcAECADQekeKQAANwAIIANB4R4pAAA3AAAgBEEERw0EIAMQJwsgBSAAQRRqIAEgASACEFAgBS0ABA0CIAUoAgAiA0EYaiEAIAIoAhghASADKAIwQX9GBEAgAUF/Rg0DDAILIAFBf0cNASAAECsgA0F/NgIwDAILED4ACyAFIAA2AgAgASAFIAAgAhBKCyAFQRBqJAAPC0EIEAEiACAFEDggAEHMoAJBARACAAsJACAAELwBECcLDwAgAEGk6AE2AgAgABAnCw0AIABBpOgBNgIAIAALBgBB/OkBCxQAIABBBGpBACABKAIEQcjpAUYbC4YDAwF9AX4DfyAEKAIAGiADKgIAIQUgAikDACEGQfgAECgiAUIANwIEIAFBpOgBNgIAIwBBQGoiAiQAIAFBEGoiByIDQgA3AhQgAyAFOAIQIAMgBjcDCCADQZTpATYCACADQgA3AhwgA0KAgID8AzcCJCADQSxqEK4BIANBQGtCADcDACADQgA3AzggA0IANwMwIANCADcCTCADQYDAADYCSCADQdQAaiIIQgA3AgAgA0KAgICA8P8HNwJcIAJBgIACECgiBDYCCCACIARBgIACaiIJNgIQIARBAEGAgAIQKhogAiAJNgIMIAggAkEIahBWIAIoAggiBARAIAIgBDYCDCAEECcLIAJBADoALCACQfPS6asGNgIoIAJBBDoAMyACQQM2AiAgAkKAgICAgICAyMAANwMIIAMgAkEoaiACQQhqIAMoAgAoAggRAwAgAigCIEF/RwRAIAJBCGoQKwsgAiwAM0F/TARAIAIoAigQJwsgAkFAayQAIAAgATYCBCAAIAc2AgALBQBBqCsLCwAgAUHc5gE2AgALEQBBCBAoIgBB3OYBNgIAIAALsRACDn8BfCMAQeABayICJAAgAkEAOgAMIAJB89LpqwY2AgggAkEEOgATIAIgAkEIaiIDNgLIASACQagBaiAAQRRqIgwgAyACQcgBahBOAkACQAJAAkACQAJAIAIoAqgBIgMoAjBBA0cNACACLAAT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ADcAJyADQdsfKQAANwAgIANB0x8pAAA3ABggA0HLHykAADcAECADQcMfKQAANwAIIANBux8pAAA3AAAgBUEERw0CIAMQJyACKAIYQQRHDQECQCACLAALQQBOBEAgBCACKAIINgIIIAQgAikCADcDAAwBCyAEIAIoAgAgAigCBBA5CwJAIAQoAgQgBC0ACyIDIANBGHRBGHVBAEgbQQdHDQAgBEGxC0EHEDUNACAAQQA2AoQBCwJAIAQoAgQgBC0ACyIDIANBGHRBGHVBAEgbQQRHDQAgBEHSEEEEEDUNACAAQQE2AoQBCwJAIAQoAgQgBC0ACyIDIANBGHRBGHVBAEgbQQRHDQAgBEH1C0EEEDUNACAAQQI2AoQBCyAELAALQX9KDQAgBCgCABAnCwJAIAEoAgQgAS0ACyIDIANBGHRBGHVBAEgbQQtHDQAgAUGuCUELEDUNACACKAIYIQUgBEHAABAoIgM2AgAgBEK2gICAgIiAgIB/NwIEIANBADoANiADQYAeKQAANwAuIANB+h0pAAA3ACggA0HyHSkAADcAICADQeodKQAANwAYIANB4h0pAAA3ABAgA0HaHSkAADcACCADQdIdKQAANwAAIAVBA0cNAiADECcgAigCGEEDRw0BIAIrAwAhBiAEQcAAECgiAzYCACAEQr+AgICAiICAgH83AgQgA0EAOgA/IANBgRspAAA3ADcgA0H6GikAADcAMCADQfIaKQAANwAoIANB6hopAAA3ACAgA0HiGikAADcAGCADQdoaKQAANwAQIANB0hopAAA3AAggA0HKGikAADcAAAJ/IAaZRAAAAAAAAOBBYwRAIAaqDAELQYCAgIB4CyIFQX9MDQIgAxAnIAAgBTYCiAELAkAgASgCBCABLQALIgMgA0EYdEEYdUEASBtBCkcNACABQboJQQoQNQ0AIAIoAhghAyAEQcAAECgiATYCACAEQrWAgICAiICAgH83AgQgAUEAOgA1IAFBth4pAAA3AC0gAUGxHikAADcAKCABQakeKQAANwAgIAFBoR4pAAA3ABggAUGZHikAADcAECABQZEeKQAANwAIIAFBiR4pAAA3AAAgA0EDRw0CIAEQJyACKAIYQQNHDQEgAisDACEGIARBwAAQKCIBNgIAIARCvoCAgICIgICAfzcCBCABQQA6AD4gAUHAGykAADcANiABQbobKQAANwAwIAFBshspAAA3ACggAUGqGykAADcAICABQaIbKQAANwAYIAFBmhspAAA3ABAgAUGSGykAADcACCABQYobKQAANwAAAn8gBplEAAAAAAAA4EFjBEAgBqoMAQtBgICAgHgLIgJBf0wNAiABECcgACACNgKMAQsgBEEQaiQADwsQPgALQQgQASIAIAQQOCAAQcygAkEBEAIACw8AIABB+NkBNgIAIAAQJwsNACAAQfjZATYCACAACwYAQaTcAQsUACAAQQRqQQAgASgCBEHs2wFGGwuKAQIBfQF+IAQoAgAhBCADKgIAIQUgAikDACEGQaABECgiAUIANwIEIAFB+NkBNgIAIAFBEGoiAiAGIAUQxAEgAUIANwJsIAFB7NoBNgIQIAFCADcCdCABQgA3AnwgAUIANwKEASABQgA3AowBIAFCADcClAEgAUEANgKcASAAIAE2AgQgACACNgIACyQAIAFBxCU2AgAgASAAKAIENgIEIAEgACgCCCIANgIIIAAQBgsLACABQazYATYCAAsRAEEIECgiAEGs2AE2AgAgAAuqAgEGfwJAAkAgAwRAIAAoAlgiAw0BCyAERQ0BIAJBACAEQQJ0ECoaDwsgBEUNACADKAIEIAMoAgAiB2tBAnUgACgCaGshAyAEQQFxIQogACgCYCEGIAEoAgAhCAJAIARBAUYEQEEAIQEMAQsgBEF+cSEJQQAhAQNAIAcgBkECdGogCCABQQJ0IgtqKgIAOAIAIAcgBkEBaiIGQQAgAyADIAZLG2siBkECdGogCCALQQRyaioCADgCACAGQQFqIgZBACADIAMgBksbayEGIAFBAmohASAJQQJrIgkNAAsLIAAgCgR/IAcgBkECdGogCCABQQJ0aioCADgCACAGQQFqIgFBACADIAEgA0kbawUgBgs2AmAgBEUNACACIAcgA0ECdGogBEECdBA7CwupCgIHfwF8IwBBEGsiBiQAAkACQAJAIAEoAgQgAS0ACyIDIANBGHRBGHVBAEgbQQRHDQAgAUGGEEEEEDUNACACKAIYIQQgBkEwECgiAzYCACAGQq6AgICAhoCAgH83AgQgA0EAOgAuIANBixwpAAA3ACYgA0GFHCkAADcAICADQf0bKQAANwAYIANB9RspAAA3ABAgA0HtGykAADcACCADQeUbKQAANwAAIARBA0cN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BDYCBCAFIAc2AgAgAiAFQQhqNgI0CyACKAI4IQYgAigCNCEFQRgQKCIEQgA3AgQgBEIANwIMIARBjK8BNgIAIARBADYCFCADIAQ2AgwgAyAEQQxqIgc2AggCQCAFIAZPBEAgCCADQQhqEEIgAygCDCIERQ0BIAQgBCgCBCIFQQFrNgIEIAUNASAEIAQoAgAoAggRAAAgBBAsDAELIAUgBDYCBCAFIAc2AgAgAiAFQQhqNgI0CyACQSA2AjwgAkFAa0IANwMAIAJByABqIgRCADcDACACQoCAgIDwAzcDUCAEEGkgAkIANwNgIAJCADcDWCACQgA3A3AgAkEgNgJsIAIgCTYCaCACQfgAaiIEQgA3AwAgAkKAgICA8AM3A4ABIARBIBBBIANBADoALCADQfPS6asGNgIoIANBBDoAMyACKAJoIQQgA0EDNgIgIAMgBLg5AwggAiADQShqIANBCGogAigCACgCCBEDACADKAIgQX9HBEAgA0EIahArCyADLAAzQX9MBEAgAygCKBAnCyADQUBrJAAgACABNgIEIAAgCjYCAAsLACABQezUATYCAAsRAEEIECgiAEHs1AE2AgAgAAswAAJAIANFBEAgBEUNASACQQAgBEECdBAqGg8LIARFDQAgAiABKAIAIARBAnQQOwsL6wQBA38jAEEQayIFJAACQAJAAkAgASgCBCABLQALIgMgA0EYdEEYdUEASBtBBEcNACABQfQRQQQQNQ0AIAIoAhghAyAFQTAQKCIBNgIAIAVCroCAgICGgICAfzcCBCABQQA6AC4gAUHlESkAADcAJiABQd8RKQAANwAgIAFB1xEpAAA3ABggAUHPESkAADcAECABQccRKQAANwAIIAFBvxEpAAA3AAAgA0EERw0BIAEQJyACKAIYQQRHDQICQCACLAALQQBOBEAgBSACKAIINgIIIAUgAikCADcDAAwBCyAFIAIoAgAgAigCBBA5CyAFKAIAIAUgBS0ACyICQRh0QRh1QQBIIgMbIQECQCAFKAIEIAIgAxsiA0EESQRAIAMiBCECDAELAkAgA0EEayICQQRxBEAgAyEEDAELIAEoAABBldPH3gVsIgRBGHYgBHNBldPH3gVsIANBldPH3gVscyEEIAFBBGohASACIQMLIAJBBEkNACADIQIDQCABKAAEQZXTx94FbCIDQRh2IANzQZXTx94FbCABKAAAQZXTx94FbCIDQRh2IANzQZXTx94FbCAEQZXTx94FbHNBldPH3gVscyEEIAFBCGohASACQQhrIgJBA0sNAAsLAkACQAJAAkAgAkEBaw4DAgEAAwsgAS0AAkEQdCAEcyEECyABLQABQQh0IARzIQQLIAQgAS0AAHNBldPH3gVsIQQLIAAgBEENdiAEc0GV08feBWwiAEEPdiAAczYCLCAFLAALQX9KDQAgBSgCABAnCyAFQRBqJAAPC0EIEAEiACAFEDggAEHMoAJBARACAAsQPgALDwAgAEH80gE2AgAgABAnCw0AIABB/NIBNgIAIAALBgBB3NQBCxQAIABBBGpBACABKAIEQaTUAUYbC3ECAX4BfSACKQMAIQUgAyoCACEGQcAAECgiAUIANwIEIAFB/NIBNgIAIAFB7NMBNgIQIAFCADcCJCABIAY4AiAgASAFNwMYIAFCADcCLCABQoCAgPwDNwI0IAFBADYCPCAAIAE2AgQgACABQRBqNgIACxUAIABBxCU2AgAgACgCCBAAIAAQJwsLACABQbTRATYCAAsRAEEIECgiAEG00QE2AgAgAAvYAQIFfQZ/AkAgA0EGTwRAIARFDQEgASgCFCELIAEoAhAhDCABKAIMIQ0gASgCCCEOIAEoAgQhDyABKAIAIRBBACEDA0AgDSADQQJ0IgFqKgIAIQggASAPaioCACEJIAAqAjAhCiAAIAEgDmoqAgAgASALaioCACIGlCABIAxqKgIAIAEgEGoqAgAgBpQgACoCLJIiB5STOAIwIAAgCiAJIAaUIAggB5STkjgCLCABIAJqIAc4AgAgA0EBaiIDIARHDQALDAELIARFDQAgAkEAIARBAnQQKhoLCw8AIABBrM8BNgIAIAAQJwsNACAAQazPATYCACAACwYAQaTRAQsUACAAQQRqQQAgASgCBEHk0AFGGwtxAgF+AX0gAikDACEFIAMqAgAhBkHIABAoIgFCADcCBCABQazPATYCACABQaTQATYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCABQgA3AjwgACABNgIEIAAgAUEQajYCAAsLACABQdzNATYCAAsRAEEIECgiAEHczQE2AgAgAAsTACAAQcQlNgIAIAAoAggQACAAC44BAgJ9A38CQCADQQNP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KgIAIg9DAACAP14bIA9DAACAv10bKgIAlCAKIAtqKgIAkjgCACACIApqIA44AgAgBkEBaiIBQQAgByABIAdIG2shBiADQQFqIgMgBEcNAAsgACAGNgJcDAELIARFDQAgBEEDcSEGIAEoAgAhAUEAIQAgBEEBa0EDTwRAIARBfHEhBANAIAIgAEECdCIDaiABIANqKgIAOAIAIAIgA0EEciIHaiABIAdqKgIAOAIAIAIgA0EIciIHaiABIAdqKgIAOAIAIAIgA0EMciIDaiABIANqKgIAOAIAIABBBGohACAEQQRrIgQNAAsLIAZFDQADQCACIABBAnQiA2ogASADaioCADgCACAAQQFqIQAgBkEBayIGDQALCyAIQRBqJAALjQUCBX8BfCMAQRBrIgYkAAJAAkACQCABKAIEIAEtAAsiAyADQRh0QRh1QQBIG0EERw0AIAFBhhBBBBA1DQAgAigCGCEDIAZBIBAoIgE2AgAgBkKbgICAgISAgIB/NwIEIAFBADoAGyABQeAbKAAANgAXIAFB2RspAAA3ABAgAUHRGykAADcACCABQckbKQAANwAAIANBA0cNASABECcgAigCGEEDRw0CIAAoAjAgACgCLCIFayEBAn8gAisDACIImUQAAAAAAADgQWMEQCAIqgwBC0GAgICAeAshBAJAIAEEQCABQQN1IgFBASABQQFLGyECQQAhAQNAIAUgAUEDdGooAgQiAwRAIAMoAgRFDQMLIAFBAWoiASACRw0ACwtBCBABIgAQUiAAQcygAkEBEAIACyAFIAFBA3RqKAIAIQEgAyADKAIEQQFqNgIEAkAgBCABKAIEIgIgASgCACIFa0ECdSIHSwRAIAEgBCAHaxBBIAEoAgAhBSABKAIEIQIMAQsgBCAHTw0AIAEgBSAEQQJ0aiICNgIECyACIAVrIgIEQCAFQQAgAkECdSICQQEgAkEBSxtBAnQQKhoLAn8gACgCPCIEIABBQGsoAgAiAksEQCAEIAJrDAELIAAoAjggBCACa2oLBEAgACgCRCACQQN0aiIEIAE2AgAgBCgCBCEBIAQgAzYCBAJAIAFFDQAgASABKAIEIgNBAWs2AgQgAw0AIAEgASgCACgCCBEAACABECwLIAAgACgCUCACQQFqcTYCQAwBCyADIAMoAgQiAEEBazYCBCAADQAgAyADKAIAKAII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OgAAIAMoAgAiAEFwTw0BAkACQCAAQQtPBEAgAEEQakFwcSICECghASAEIAJBgICAgHhyNgIIIAQgATYCACAEIAA2AgQMAQsgBCAAOgALIAQhASAARQ0BCyABIANBBGogABAwGgsgACABakEAOgAAIAcgBEEQaiAEIAURAwAgBCwAC0F/TARAIAQoAgAQJwsgBCwAG0F/TARAIAQoAhAQJwsgBEEgaiQADwsQQwALEEMACxEAQQgQKCIAQaihATYCACAAC9IBAQF/AkAgBEUNACAAKAIsIQAgBEEHcSEGQQAhASAEQQFrQQdPBEAgBEF4cSEEA0AgAiABQQJ0IgNqIAA2AgAgAiADQQRyaiAANgIAIAIgA0EIcmogADYCACACIANBDHJqIAA2AgAgAiADQRByaiAANgIAIAIgA0EUcmogADYCACACIANBGHJqIAA2AgAgAiADQRxyaiAANgIAIAFBCGohASAEQQhrIgQNAAsLIAZFDQADQCACIAFBAnRqIAA2AgAgAUEBaiEBIAZBAWsiBg0ACwsL6QEBAn8jAEEQayIDJAACQAJAAkAgASgCBCABLQALIgQgBEEYdEEYdUEASBtBBUcNACABQcwQQQUQNQ0AIAIoAhghBCADQTAQKCIBNgIAIANCr4CAgICGgICAfzcCBCABQQA6AC8gAUGGESkAADcAJyABQf8QKQAANwAgIAFB9xApAAA3ABggAUHvECkAADcAECABQecQKQAANwAIIAFB3xApAAA3AAAgBEEDRw0BIAEQJyACKAIYQQNHDQIgACACKwMAtjgCLAsgA0EQaiQADwtBCBABIgAgAxA4IABBzKACQQEQAgALED4ACw8AIABBuJ8BNgIAIAAQJwsNACAAQbifATYCACAACwYAQZihAQsUACAAQQRqQQAgASgCBEHgoAFGGwt1AgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQbifATYCACABQaigATYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCABQYCAgPwDNgI8IAAgATYCBCAAIAFBEGo2AgALCwAgAUHwnQE2AgAL9yMDEH8CfQF+IwBBEGsiDyQAIAAoAgAhBiAPQTAQKCIENgIAIA9CooCAgICGgICAfzcCBCAEQQA6ACIgBEG3GS8AADsAICAEQa8ZKQAANwAYIARBpxkpAAA3ABAgBEGfGSkAADcACCAEQZcZKQAANwAAIAZFBEBBCBABIgAgDxA4IABBzKACQQEQAgALIAQQJyAAKAIAIQdBACEGIwBBQGoiAyQAIAMgARBgNwMoIAdBFGoiCyACEE8hBCMAQRBrIgEkACADIAFBCGoQmgEiCUHuJEHuJBBLIgwgDAJ/IAIiAC0AC0EHdgRAIAAoAgQMAQsgAC0ACwsiAGoQmQEgCQJ/IAIiDC0AC0EHdgRAIAwoAgAMAQsgDAsgABBZGiABQRBqJAACQAJAAkAgBARAIAMsAAtBf0wEQCADKAIAECcLIAdBKGoiCiADQShqEDYhASADQTAQKCIANgIAIANCrYCAgICGgICAfzcCBCAAQQA6AC0gAEGEGikAADcAJSAAQf8ZKQAANwAgIABB9xkpAAA3ABggAEHvGSkAADcAECAAQecZKQAANwAIIABB3xkpAAA3AAAgAQ0CIAAQJyADIAw2AjggDCgCBCAMLQALIgAgAEEYdEEYdUEASCIAGyICIQUgDCgCACAMIAAbIgQhCAJAIAIiAEEESQ0AAn8gAkEEayIAQQRxBEAgAiIBIQUgBAwBCyAEKAAAQZXTx94FbCIBQRh2IAFzQZXTx94FbCACQZXTx94FbHMhBSAAIQEgBEEEagshCCAAQQRJDQAgASEAA0AgCCgABEGV08feBWwiAUEYdiABc0GV08feBWwgCCgAAEGV08feBWwiAUEYdiABc0GV08feBWwgBUGV08feBWxzQZXTx94FbHMhBSAIQQhqIQggAEEIayIAQQNLDQALCwJAAkACQAJAIABBAWsOAwIBAAMLIAgtAAJBEHQgBXMhBQsgCC0AAUEIdCAFcyEFCyAFIAgtAABzQZXTx94FbCEFCyAFQQ12IAVzQZXTx94FbCIAQQ92IABzIQkCQAJAIAsoAgQiBUUNACALKAIAAn8gCSAFQQFrcSAFaSIAQQFNDQAaIAkgBSAJSw0AGiAJIAVwCyIGQQJ0aigCACIBRQ0AIAEoAgAiCEUNACAAQQFNBEAgBUEBayEQA0AgCSAIKAIEIgBHQQAgACAQcSAGRxsNAgJAIAgoAgwgCC0AEyIBIAFBGHRBGHUiEUEASCIAGyACRw0AIAhBCGoiDigCACENIABFBEAgEUUNBSAEIgAtAAAgDUH/AXFHDQEDQCABQQFrIgFFDQYgAC0AASENIABBAWohACANIA5BAWoiDi0AAEYNAAsMAQsgAkUNBCANIA4gABsgBCACEDdFDQQLIAgoAgAiCA0ACwwBCwNAIAkgCCgCBCIARwRAIAAgBU8EfyAAIAVwBSAACyAGRw0CCwJAIAgoAgwgCC0AEyIBIAFBGHRBGHUiEEEASCIAGyACRw0AIAhBCGoiDigCACENIABFBEAgEEUNBCAEIgAtAAAgDUH/AXFHDQEDQCABQQFrIgFFDQUgAC0AASENIABBAWohACANIA5BAWoiDi0AAEYNAAsMAQsgAkUNAyANIA4gABsgBCACEDdFDQMLIAgoAgAiCA0ACwtBMBAoIghBCGohAQJAIAMoAjgiACwAC0EATgRAIAEgACkCADcCACABIAAoAgg2AggMAQsgASAAKAIAIAAoAgQQOQsgCCAJNgIEIAhBADYCACAIQQA2AigCQCALKAIMQQFqsyITIAsqAhAiFCAFs5ReQQEgBRtFDQAgBSAFQQFrcUEARyAFQQNJciAFQQF0ciEAAkACf0ECAn8gEyAUlY0iE0MAAIBPXSATQwAAAABgcQRAIBOpDAELQQALIgEgACAAIAFJGyIAQQFGDQAaIAAgACAAQQFrcUUNABogABA0CyIFIAsoAgQiAE0EQCAAIAVNDQEgAEEDSSECAn8gCygCDLMgCyoCEJWNIhNDAACAT10gE0MAAAAAYHEEQCATqQwBC0EACyEBIAACfwJAIAINACAAaUEBSw0AIAFBAUEgIAFBAWtna3QgAUECSRsMAQsgARA0CyIBIAUgASAFSxsiBU0NAQsgCyAFEFcLIAsoAgQiBSAFQQFrIgBxRQRAIAAgCXEhBgwBCyAFIAlLBEAgCSEGDAELIAkgBXAhBgsCQCALKAIAIAZBAnRqIgEoAgAiAEUEQCAIIAsoAgg2AgAgCyAINgIIIAEgC0EIajYCACAIKAIAIgBFDQEgACgCBCEAAkAgBSAFQQFrIgFxRQRAIAAgAXEhAAwBCyAAIAVJDQAgACAFcCEACyALKAIAIABBAnRqIAg2AgAMAQsgCCAAKAIANgIAIAAgCDYCAAtBASESIAsgCygCDEEBajYCDAsgAyASOgAEIAMgCDYCACADKAIAIQAgBygC7AIhASAHKgLoAiETIAMgAykDKDcDACADIBM4AjggAyABNgI0IAAoAigiAEUNASADQSBqIAAgAyADQThqIANBNGogACgCACgCGBEFACADIAMoAiQiADYCDCADIAMpAyg3AwAgAyADKAIgNgIIIAAEQCAAIAAoAgRBAWo2AgQLQQAhACADKQMAIhWnQZXTx94FbCIBQRh2IAFzQZXTx94FbEGomb30fXNBldPH3gVsIBVCIIinQZXTx94FbCIBQRh2IAFzQZXTx94FbHMiAUENdiABc0GV08feBWwiAUEPdiABcyEBIAMCfwJAIAooAgQiBEUNAAJAIARpIgJBAk8EQCABIgAgBE8EQCABIARwIQALIAooAgAgAEECdGooAgAiBkUNAiACQQFNDQEDQCAGKAIAIgZFDQMgASAGKAIEIgJHBEAgAiAETwR/IAIgBHAFIAILIABHDQQLIAYpAwggFVINAAtBAAwDCyAKKAIAIAEgBEEBa3EiAEECdGooAgAiBkUNAQsgBEEBayECA0AgBigCACIGRQ0BIAEgBigCBCIJR0EAIAIgCXEgAEcbDQEgBikDCCAVUg0AC0EADAELQRgQKCIGIAMpAwA3AwggBiADKAIINgIQIAYgAygCDDYCFCADQgA3AwggBkEANgIAIAYgATYCBAJAIAooAgxBAWqzIhMgCioCECIUIASzlF5BASAEG0UNACAEIARBAWtxQQBHIARBA0lyIARBAXRyIQJBAiEAAkACfyATIBSVjSITQwAAgE9dIBNDAAAAAGBxBEAgE6kMAQtBAAsiCSACIAIgCUkbIgJBAUYNACACIAJBAWtxRQRAIAIhAAwBCyACEDQhACAKKAIEIQQLAkAgACAETQRAIAAgBE8NASAEQQNJIQkCfyAKKAIMsyAKKgIQlY0iE0MAAIBPXSATQwAAAABgcQRAIBOpDAELQQALIQICfwJAIAkNACAEaUEBSw0AIAJBAUEgIAJBAWtna3QgAkECSRsMAQsgAhA0CyICIAAgACACSRsiACAETw0BCyAKIAAQSAsgCigCBCIEIARBAWsiAHFFBEAgACABcSEADAELIAEgBEkEQCABIQAMAQsgASAEcCEACwJAIAooAgAgAEECdGoiASgCACIARQRAIAYgCigCCDYCACAKIAY2AgggASAKQQhqNgIAIAYoAgAiAEUNASAAKAIEIQACQCAEIARBAWsiAXFFBEAgACABcSEADAELIAAgBEkNACAAIARwIQALIAooAgAgAEECdGogBjYCAAwBCyAGIAAoAgA2AgAgACAGNgIACyAKIAooAgxBAWo2AgxBAQs6ADwgAyAGNgI4AkAgAygCDCIARQ0AIAAgACgCBCIBQQFrNgIEIAENACAAIAAoAgAoAggRAAAgABAsCyADKAIgIgEgBzYCKEHAABAoIgBBQGshBAJAAkACQAJAIAwoAgQgDC0ACyICIAJBGHRBGHVBAEgbQQRGBEAgDEGYCUEEEDVFDQEgAygCICEBCyADIAMoAiQiAjYCDCADIAE2AgggAyADKQMoNwMAIAIEQCACIAIoAgRBAWo2AgQLIAMgBDYCGCADIAA2AhQgAyAANgIQIAcoAlQiACAHKAJYTw0BIAAgAykDADcDACAAIAMoAgg2AgggACADKAIMNgIMIANCADcDCCAAQgA3AxAgAEEANgIYIAAgAygCEDYCECAAIAMoAhQ2AhQgACADKAIYNgIYIANBADYCGCADQgA3AxAgAEEBNgIgIAcgAEEoajYCVAwCCyADIAMoAiQiATYCDCADIAMpAyg3AwAgAyADKAIgNgIIIAEEQCABIAEoAgRBAWo2AgQLIAMgBDYCGCADIAA2AhQgAyAANgIQAkAgBygCVCIAIAcoAlhJBEAgACADKQMANwMAIAAgAygCCDYCCCAAIAMoAgw2AgwgA0IANwMIIABCADcDECAAQQA2AhggACADKAIQNgIQIAAgAygCFDYCFCAAIAMoAhg2AhggA0EANgIYIANCADcDECAAQQA2AiAgByAAQShqNgJUDAELIwBBEGsiCSQAAkACQAJAIAcoAlQgBygCUCIBa0EobSICQQFqIgBB58yZM0kEQCAAIAcoAlggAWtBKG0iAUEBdCIEIAAgBEsbQebMmTMgAUGz5swZSRsiAEHnzJkzTw0BIABBKGwiABAoIgEgAkEobGoiAiADKQMANwMAIAIgAygCCDYCCCACIAMoAgw2AgwgA0IANwMIIAIgAygCEDYCECACIAMoAhQ2AhQgAiADKAIYNgIYIANBADYCGCADQgA3AxAgAkEANgIgIAAgAWohBCACQShqIQYgBygCVCIAIAcoAlAiAUYNAgNAIAJBKGsiAiAAQShrIgAQYSAAIAFHDQALIAcgBDYCWCAHKAJUIQAgByAGNgJUIAcoAlAhASAHIAI2AlAgACABRg0DA0AgAEEoayECIABBCGsiACgCAEF/RwRAIAIQRAsgAEF/NgIAIAIiACABRw0ACwwDCxAyAAtBxw8QOgALIAcgBDYCWCAHIAY2AlQgByACNgJQCyABBEAgARAnCyAJQRBqJAAgAygCECIBRQ0AIAEgAygCFCIARgR/IAEFA0AgACICQQhrIQACQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECwLIAAgAUcNAAsgAygCEAshACADIAE2AhQgABAnCyADKAIMIgBFDQIgACAAKAIEIgFBAWs2AgQgAQ0CIAAgACgCACgCCBEAACAAECwMAgsjAEEQayIJJAACQAJAAkAgBygCVCAHKAJQIgFrQShtIgJBAWoiAEHnzJkzSQRAIAAgBygCWCABa0EobSIBQQF0IgQgACAESxtB5syZMyABQbPmzBlJGyIAQefMmTNPDQEgAEEobCIAECgiASACQShsaiICIAMpAwA3AwAgAiADKAIINgIIIAIgAygCDDYCDCADQgA3AwggAiADKAIQNgIQIAIgAygCFDYCFCACIAMoAhg2AhggA0EANgIYIANCADcDECACQQE2AiAgACABaiEEIAJBKGohBiAHKAJUIgAgBygCUCIBRg0CA0AgAkEoayICIABBKGsiABBhIAAgAUcNAAsgByAENgJYIAcoAlQhACAHIAY2AlQgBygCUCEBIAcgAjYCUCAAIAFGDQMDQCAAQShrIQIgAEEIayIAKAIAQX9HBEAgAhBECyAAQX82AgAgAiIAIAFHDQALDAMLEDIAC0HHDxA6AAsgByAENgJYIAcgBjYCVCAHIAI2AlALIAEEQCABECcLIAlBEGokACADKAIQIgFFDQAgASADKAIUIgBGBH8gAQUDQCAAIgJBCGshAAJAIAJBBGsoAgAiAkUNACACIAIoAgQiBEEBazYCBCAEDQAgAiACKAIAKAIIEQAAIAIQLAsgACABRw0ACyADKAIQCyEAIAMgATYCFCAAECcLIAMoAgwiAEUNACAAIAAoAgQiAUEBazYCBCABDQAgACAAKAIAKAIIEQAAIAAQLAsCQCADKAIkIgBFDQAgACAAKAIEIgFBAWs2AgQgAQ0AIAAgACgCACgCCBEAACAAECwLIANBQGskAAwDCwwBCxBV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RgR/IAMFA0AgAEEMayIEKAIAIgUEQCAAQQhrIAU2AgAgBRAnCyAEIgAgA0cNAAsgAigCCAshACACIAM2AgwgABAnCyABKAI4IQMLAkAgA0EHRw0AIAJBCGogASgCJCABKAIga0ECdRCyARogASgCJCABKAIgIgBrIgMEQCACKAIIKAIAIAAgAxA7CwJAIAEsABtBAE4EQCACIAEoAhg2AiggAiABKQIQNwMgDAELIAJBIGogASgCECABKAIUEDkLIAIgAikDCDcCLCACQgA3AwggAikDECETIAJCADcDECACIBM3AjQgAikDGCETIAJCADcDGCACIBM3AjwgAkHIAGogByACQSBqIgAgABCzASACKAI4IgAEQCACIAA2AjwgABAnCyACKAIsIgMEQCADIAIoAjAiAEYEfyADBQNAIABBDGsiBCgCACIFBEAgAEEIayAFNgIAIAUQJwsgBCIAIANHDQALIAIoAiwLIQAgAiADNgIwIAAQJwsgAiwAK0F/TARAIAIoAiAQJwsgAigCFCIABEAgAiAANgIYIAAQJwsgAigCCCIDRQ0AIAMgAigCDCIARgR/IAMFA0AgAEEMayIEKAIAIgUEQCAAQQhrIAU2AgAgBRAnCyAEIgAgA0cNAAsgAigCCAshACACIAM2AgwgABAnCwJAIAEoAgQiA0UEQCABKAIIIgAoAgAgAUYNASABQQhqIQMDQCADKAIAIgFBCGohAyABIAEoAggiACgCAEcNAAsMAQsDQCADIgAoAgAiAw0ACwsgACAKRw0ACwsgAkHQAGokAAwCCyACQcAAECgiADYCICACQryAgICAiICAgH83AiQgAEEAOgA8IABBxRooAAA2ADggAEG9GikAADcAMCAAQbUaKQAANwAoIABBrRopAAA3ACAgAEGlGikAADcAGCAAQZ0aKQAANwAQIABBlRopAAA3AAggAEGNGikAADcAAAtBCBABIgAgAkEgahA4DAULIwBBEGsiDiQAIBAoAggiAARAIAZBCGohEQNAIAAoAgggAEEIaiICIAAtABMiAUEYdEEYdUEASCIDGyEFAkAgACgCDCABIAMbIgNBBEkEQCADIgEhBAwBCwJAIANBBGsiBEEEcQRAIAMhAQwBCyAFKAAAQZXTx94FbCIBQRh2IAFzQZXTx94FbCADQZXTx94FbHMhASAFQQRqIQUg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AkEAIARBAnQQKhoLCw8AIABByOQANgIAIAAQJwsNACAAQcjkADYCACAAC0sBAX9BMBAoIQIgACgCACEAIAEoAgAhASACQgA3AwAgAkIANwMgIAJCADcDCCACQgA3AxAgAkEANgIYIAIgATYCLCACIAA2AiggAgsGAEHs5gALFAAgAEEEakEAIAEoAgRBnOYARhsLagIBfgF9IAIpAwAhBSADKgIAIQZBwAAQKCIBQgA3AgQgAUHI5AA2AgAgAUHQ5QA2AhAgAUIANwIkIAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgACABNgIEIAAgAUEQajYCAAsLACABQejiADYCAAsRAEEIECgiAEHo4gA2AgAgAAvmAQECfwJAIAMEQCAERQ0BIARBA3EhBiABKAIAIQBBACEDIARBAWtBA08EQCAEQXxxIQQDQCACIANBAnQiAWogACABaioCABBmOAIAIAIgAUEEciIHaiAAIAdqKgIAEGY4AgAgAiABQQhyIgdqIAAgB2oqAgAQZjgCACACIAFBDHIiAWogACABaioCABBmOAIAIANBBGohAyAEQQRrIgQNAAsLIAZFDQEDQCACIANBAnQiAWogACABaioCABBmOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLDwAgAEG04AA2AgAgABAnCw0AIABBtOAANgIAIAALBgBB2OIACxQAIABBBGpBACABKAIEQYjiAEYbCzUBAX8jAEEQayIDJAAgAyABNgIMIAMgAjYCCCADQQxqIANBCGogABEEACEAIANBEGokACAAC2oCAX4BfSACKQMAIQUgAyoCACEGQcAAECgiAUIANwIEIAFBtOAANgIAIAFBvOEANgIQIAFCADcCJCABIAY4AiAgASAFNwMYIAFCADcCLCABQoCAgPwDNwI0IAAgATYCBCAAIAFBEGo2AgALCwAgAUHU3gA2AgALEQBBCBAoIgBB1N4ANgIAIAAL4QEBAn8CQCADBEAgBEUNASAEQQNxIQYgASgCACEAQQAhAyAEQQFrQQNPBEAgBEF8cSEEA0AgAiADQQJ0IgFqIAAgAWoqAgCROAIAIAIgAUEEciIHaiAAIAdqKgIAkTgCACACIAFBCHIiB2ogACAHaioCAJE4AgAgAiABQQxyIgFqIAAgAWoqAgCROAIAIANBBGohAyAEQQRrIgQNAAsLIAZFDQEDQCACIANBAnQiAWogACABaioCAJE4AgAgA0EBaiEDIAZBAWsiBg0ACwwBCyAERQ0AIAJBACAEQQJ0ECoaCwsPACAAQZzcADYCACAAECcLDQAgAEGc3AA2AgAgAAsGAEHE3gALFAAgAEEEakEAIAEoAgRB9N0ARhsLagIBfgF9IAIpAwAhBSADKgIAIQZBwAAQKCIBQgA3AgQgAUGc3AA2AgAgAUGk3QA2AhAgAUIANwIkIAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgACABNgIEIAAgAUEQajYCAAsLACABQbzaADYCAAuUAQEEfyAABEACfyAAKAIQIgEEQCAAIAE2AhQgARAnCyAAKAIEIgIEQCACIAAoAggiA0YEfyACBQNAIANBDGsiASgCACIEBEAgA0EIayAENgIAIAQQJwsgASIDIAJHDQALIAAoAgQLIQEgACACNgIIIAEQJwsgACgCACEBIABBADYCACABBEAgARDKARAnCyAACxAnCwsRAEEIECgiAEG82gA2AgAgAAvhAQECfwJAIAMEQCAERQ0BIARBA3EhBiABKAIAIQBBACEDIARBAWtBA08EQCAEQXxxIQQDQCACIANBAnQiAWogACABaioCAI44AgAgAiABQQRyIgdqIAAgB2oqAgCOOAIAIAIgAUEIciIHaiAAIAdqKgIAjjgCACACIAFBDHIiAWogACABaioCAI44AgAgA0EEaiEDIARBBGsiBA0ACwsgBkUNAQNAIAIgA0ECdCIBaiAAIAFqKgIAjjgCACADQQFqIQMgBkEBayIGDQALDAELIARFDQAgAkEAIARBAnQQKhoLCw8AIABBgNgANgIAIAAQJwsNACAAQYDYADYCACAACwYAQazaAAsUACAAQQRqQQAgASgCBEHc2QBGGwtqAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQYDYADYCACABQYzZADYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCAAIAE2AgQgACABQRBqNgIACwsAIAFBnNYANgIACxEAQQgQKCIAQZzWADYCACAAC+EBAQJ/AkAgAwRAIARFDQEgBEEDcSEGIAEoAgAhAEEAIQMgBEEBa0EDTwRAIARBfHEhBANAIAIgA0ECdCIBaiAAIAFqKgIAjTgCACACIAFBBHIiB2ogACAHaioCAI04AgAgAiABQQhyIgdqIAAgB2oqAgCNOAIAIAIgAUEMciIBaiAAIAFqKgIAjTgCACADQQRqIQMgBEEEayIEDQALCyAGRQ0BA0AgAiADQQJ0IgFqIAAgAWoqAgCNOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLBgBB0PUBCw8AIABB5NMANgIAIAAQJwsNACAAQeTTADYCACAACwYAQYzWAAsUACAAQQRqQQAgASgCBEG81QBGGwtqAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQeTTADYCACABQezUADYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCAAIAE2AgQgACABQRBqNgIACwsAIAFBhNIANgIACxEAQQgQKCIAQYTSADYCACAAC+YBAQJ/AkAgAwRAIARFDQEgBEEDcSEGIAEoAgAhAEEAIQMgBEEBa0EDTwRAIARBfHEhBANAIAIgA0ECdCIBaiAAIAFqKgIAEF84AgAgAiABQQRyIgdqIAAgB2oqAgAQXzgCACACIAFBCHIiB2ogACAHaioCABBfOAIAIAIgAUEMciIBaiAAIAFqKgIAEF84AgAgA0EEaiEDIARBBGsiBA0ACwsgBkUNAQNAIAIgA0ECdCIBaiAAIAFqKgIAEF84AgAgA0EBaiEDIAZBAWsiBg0ACwwBCyAERQ0AIAJBACAEQQJ0ECoaCwsPACAAQczPADYCACAAECcLDQAgAEHMzwA2AgAgAAsGAEH00QALFAAgAEEEakEAIAEoAgRBpNEARhsLagIBfgF9IAIpAwAhBSADKgIAIQZBwAAQKCIBQgA3AgQgAUHMzwA2AgAgAUHU0AA2AhAgAUIANwIkIAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgACABNgIEIAAgAUEQajYCAAsLACABQezNADYCAAsRAEEIECgiAEHszQA2AgAgAAvmAQECfwJAIAMEQCAERQ0BIARBA3EhBiABKAIAIQBBACEDIARBAWtBA08EQCAEQXxxIQQDQCACIANBAnQiAWogACABaioCABBeOAIAIAIgAUEEciIHaiAAIAdqKgIAEF44AgAgAiABQQhyIgdqIAAgB2oqAgAQXjgCACACIAFBDHIiAWogACABaioCABBeOAIAIANBBGohAyAEQQRrIgQNAAsLIAZFDQEDQCACIANBAnQiAWogACABaioCABBeOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLDwAgAEGwywA2AgAgABAnCw0AIABBsMsANgIAIAALBgBB3M0ACxQAIABBBGpBACABKAIEQYzNAEYbC2oCAX4BfSACKQMAIQUgAyoCACEGQcAAECgiAUIANwIEIAFBsMsANgIAIAFBvMwANgIQIAFCADcCJCABIAY4AiAgASAFNwMYIAFCADcCLCABQoCAgPwDNwI0IAAgATYCBCAAIAFBEGo2AgALCwAgAUHMyQA2AgALEQBBCBAoIgBBzMkANgIAIAAL5gEBAn8CQCADBEAgBEUNASAEQQNxIQYgASgCACEAQQAhAyAEQQFrQQNPBEAgBEF8cSEEA0AgAiADQQJ0IgFqIAAgAWoqAgAQVDgCACACIAFBBHIiB2ogACAHaioCABBUOAIAIAIgAUEIciIHaiAAIAdqKgIAEFQ4AgAgAiABQQxyIgFqIAAgAWoqAgAQVDgCACADQQRqIQMgBEEEayIEDQALCyAGRQ0BA0AgAiADQQJ0IgFqIAAgAWoqAgAQVDgCACADQQFqIQMgBkEBayIGDQALDAELIARFDQAgAkEAIARBAnQQKhoLCw8AIABBmMcANgIAIAAQJwsNACAAQZjHADYCACAACwYAQbzJAAsUACAAQQRqQQAgASgCBEHsyABGGwtqAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQZjHADYCACABQaDIADYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCAAIAE2AgQgACABQRBqNgIACwsAIAFBuMUANgIACxEAQQgQKCIAQbjFADYCACAAC7QEAgN9An8CQCADBEAgBEUNASABKAIAIQBBACEDA0AgAiADQQJ0IgFqAn0gACABaigCACIJQf////8HcSIBviEGAkAgAUGAgICsBE8EQCAGEFRDGHIxP5IhBgwBCyABQYCAgIAETwRAIAYgBpJDAACAPyAGIAaUQwAAgD+SkSAGkpWS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b2Nlc3NRdWV1ZWRFdmVudHMAcHJvY2VzcwBiYWRfdmFyaWFudF9hY2Nlc3MAY29zAGNoYW5uZWxzAGNvbW1pdFVwZGF0ZXMAYWJzAHZlY3RvcgBFbGVtZW50YXJ5QXVkaW9Qcm9jZXNzb3IAcGhhc29yAGVycm9yAFJlbmRlcmluZ0Vycm9yAGZsb29yAGNvdW50ZXIAbWV0ZXIAdHJpZ2dlcgBjaGFubmVsIHByb3AgbXVzdCBiZSBhIG51bWJlcgB1bnNpZ25lZCBjaGFyAHNlcQBsZXEAZ2VxAGV4cABsb29wAHVwZGF0ZVJlc291cmNlTWFwAHNpemUgcHJvcCBvbiB0aGUgZmZ0IG5vZGUgbXVzdCBiZSBhIHBvd2VyIG9mIHR3bwBtZXRybwBzdGQ6OmV4Y2VwdGlvbgBGdW5jdGlvbgBfX2N4YV9ndWFyZF9hY3F1aXJlIGRldGVjdGVkIHJlY3Vyc2l2ZSBpbml0aWFsaXphdGlvbgA6IG5vIGNvbnZlcnNpb24Ac2luAG1pbgB0YW4AdGFwSW4ATG9hZGluZyByZXNvdXJjZXMgZnJvbSBkaXNrIGlzIG5vdCBzdXBwb3J0ZWQgaW4gd2FzbQBmcm9tAG11bABib29sAHN0b2xsAHN0ZDo6YmFkX2Z1bmN0aW9uX2NhbGwAY2hhbm5lbABpbnRlcnZhbABlbXNjcmlwdGVuOjp2YWwAcmVhbABsZW5ndGgAcGF0aABhc2luaABsYXRjaABsb2cAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAYmFzaWNfc3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAHBhdGggcHJvcCBtdXN0IGJlIGEgc3RyaW5nAGltYWcAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQBzaXplIHByb3Agb24gdGhlIGZmdCBub2RlIG11c3QgYmUgYmV0d2VuIDI1NiBhbmQgODE5MiwgaW5jbHVzaXZlAHZhbHVlAGdhdGUAcHJlcGFyZQB2YWx1ZSBwcm9wIGZvciBjb25zdCBub2RlIG11c3QgYmUgYSBudW1iZXIgdHlwZQBuYW1lIHByb3AgZm9yIHRhcE91dCBub2RlIG11c3QgYmUgYSBzdHJpbmcgdHlwZQBuYW1lIHByb3AgZm9yIHRhcEluIG5vZGUgbXVzdCBiZSBhIHN0cmluZyB0eXBlAHNjb3BlAG5hbWUAc2FtcGxlAGRvdWJsZQB0YWJsZQA6IG91dCBvZiByYW5nZQBtZXNzYWdlAG1vZGUAZGVsZXRlTm9kZQBjcmVhdGVOb2RlAHNvdXJjZQBtb2QAdW5vcmRlcmVkX21hcDo6YXQ6IGtleSBub3QgZm91bmQAaG9sZABhcHBlbmRDaGlsZAB2b2lkAHNlZWQAYWRkAGJpcXVhZABzdWIAZGF0YQBnZXRPdXRwdXRCdWZmZXJEYXRhAGdldElucHV0QnVmZmVyRGF0YQBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AFRyeWluZyB0byBhcHBlbmQgYSBjaGlsZCB0byBhbiB1bmtub3duIHBhcmVudC4AVHJ5aW5nIHRvIGFwcGVuZCBhbiB1bmtub3duIGNoaWxkIHRvIGEgcGFyZW50LgBGYWlsZWQgZXZlbnQgaW52YXJpYW50LgBSdW50aW1lIGhhcyBub3QgYmVlbiBwcmVwYXJlZCB5ZXQuAHVwZGF0ZVJlc291cmNlTWFwIGV4cGVjdHMgYW4gb2JqZWN0LgBUcnlpbmcgdG8gY3JlYXRlIGEgbm9kZSB3aGljaCBhbHJlYWR5IGV4aXN0cy4AQ2Fubm90IGluaXRpYWxpemUgQXVkaW9SZXNvdXJjZU1hcCBmcm9tIGludmFsaWQgdmFsdWUgdHlwZXMuAHN0YXJ0T2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLgBzdG9wT2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLgBzaXplIHByb3AgbXVzdCBiZSBhIG51bWJlci4Ac2l6ZSBwcm9wIG9uIHRoZSB0YXBPdXQgbm9kZSBtdXN0IGJlIGEgbnVtYmVyLgBzaXplIHByb3Agb24gdGhlIGZmdCBub2RlIG11c3QgYmUgYSBudW1iZXIuAGludGVydmFsIHByb3Agb24gdGhlIG1ldHJvIG5vZGUgbXVzdCBiZSBhIG51bWJlci4AY2hhbm5lbHMgcHJvcCBvbiB0aGUgc2NvcGUgbm9kZSBtdXN0IGJlIGEgbnVtYmVyLgBzaXplIHByb3Agb24gdGhlIHNjb3BlIG5vZGUgbXVzdCBiZSBhIG51bWJlci4Ac3RhcnRPZmZzZXQgcHJvcCBmb3IgdGhlIHNhbXBsZSBub2RlIG11c3QgYmUgYSBudW1iZXIuAHN0b3BPZmZzZXQgcHJvcCBmb3IgdGhlIHNhbXBsZSBub2RlIG11c3QgYmUgYSBudW1iZXIuAEZhaWxlZCB0byBhbGxvY2F0ZSBmcm9tIHRoZSBwb29sLgBuYW1lIHByb3Agb24gdGhlIGZmdCBub2RlIG11c3QgYmUgYSBzdHJpbmcuAG5hbWUgcHJvcCBvbiB0aGUgc2NvcGUgbm9kZSBtdXN0IGJlIGEgc3RyaW5nLgBtb2RlIHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgc3RyaW5nLgBzaXplIHByb3Agb24gdGhlIHRhcE91dCBub2RlIG11c3QgYmUgYXQgbGVhc3QgYXMgYmlnIGFzIHRoZSBibG9jayBzaXplLgBjaGFubmVscyBwcm9wIG9uIHRoZSBzY29wZSBub2RlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA0LCBpbmNsdXNpdmUuAHNpemUgcHJvcCBvbiB0aGUgc2NvcGUgbm9kZSBtdXN0IGJlIGJldHdlZW4gMjU2IGFuZCA4MTkyLCBpbmNsdXNpdmUuAHNlcSBwcm9wIGZvciBzZXEgbm9kZSBtdXN0IGJlIGFuIGFycmF5IHR5cGUuAGxvb3AgcHJvcCBmb3Igc2VxIG5vZGUgbXVzdCBiZSBhIGJvb2xlYW4gdHlwZS4AaG9sZCBwcm9wIGZvciBzZXEgbm9kZSBtdXN0IGJlIGEgYm9vbGVhbiB0eXBlLgBUcnlpbmcgdG8gc2V0IGEgcHJvcGVydHkgZm9yIGFuIHVucmVjb2duaXplZCBub2RlLgBUcnlpbmcgdG8gZGVsZXRlIGFuIHVucmVjb2duaXplZCBub2RlLgBOYU4gdmFsdWUgZW5jb3VudGVyZWQuAEhlYXAgc2l6ZSBleGNlZWRlZC4AU3RhY2sgc2l6ZSBleGNlZWRlZC4AVGFibGUgc2l6ZSBleGNlZWRlZC4AaW50ZXJ2YWwgcHJvcCBvbiB0aGUgbWV0cm8gbm9kZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLgAobnVsbCkAUHVyZSB2aXJ0dWFsIGZ1bmN0aW9uIGNhbGxlZCEASW52YWxpZCBjaGFubmVsIGluZGV4IGZvciAAVW5rbm93biBub2RlIHR5cGUgAEZhaWxlZCB0byBmaW5kIHJlc291cmNlIAAlcwoATjEwZW1zY3JpcHRlbjN2YWxFAAAAALiSAACeEgAAAAAAACQUAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACQAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0laTjI0RWxlbWVudGFyeUF1ZGlvUHJvY2Vzc29yMTlwcm9jZXNzUXVldWVkRXZlbnRzRU4xMGVtc2NyaXB0ZW4zdmFsRUVVbFJLTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU40ZWxlbTJqczVWYWx1ZUVFX05TOF9JU0dfRUVGdlNDX1NGX0VFRQBOU3QzX18yMTBfX2Z1bmN0aW9uNl9fYmFzZUlGdlJLTlNfMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRU40ZWxlbTJqczVWYWx1ZUVFRUUAALiSAACuEwAA4JIAAOgSAAAcFAAAAAAAAKwUAAC0EgAATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAAAC4kgAAexQAADyTAAA8FAAAAAAAAAEAAACkFAAAAAAAAE41bXBhcmsxOGJhZF92YXJpYW50X2FjY2Vzc0UAAAAA4JIAAMQUAACEjwAAAAAAAOQUAAAEAAAAJQAAACYAAAC0EgAAtBIAAFpOMjRFbGVtZW50YXJ5QXVkaW9Qcm9jZXNzb3IxOXByb2Nlc3NRdWV1ZWRFdmVudHNFTjEwZW1zY3JpcHRlbjN2YWxFRVVsUktOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFTjRlbGVtMmpzNVZhbHVlRUVfALiSAAAMFQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAAC4kgAAsBUAAPSRAAC0EgAAtBIAALQSAAAAAAAA/BYAACcAAAAoAAAAKQAAACoAAAArAAAALAAAAC0AAAAuAAAALwAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTJJZGVudGl0eU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQBOU3QzX18yMTBfX2Z1bmN0aW9uNl9fYmFzZUlGTlNfMTBzaGFyZWRfcHRySU40ZWxlbTlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAAuJIAAKgWAADgkgAAFBYAAPQWAAAAAAAAcBcAADAAAAAxAAAAMgAAADMAAAA0AAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTJJZGVudGl0eU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAAAkFwAAnIsAAAAAAADQFwAANQAAADYAAAA3AAAAOAAAADkAAABONGVsZW0xMklkZW50aXR5Tm9kZUlmRUUATjRlbGVtOUdyYXBoTm9kZUlmRUUAAAC4kgAAsRcAAOCSAACYFwAAyBcAAAAAAADIFwAANQAAADoAAAA7AAAAPAAAADkAAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTJJZGVudGl0eU5vZGVJZkVFRUUAAAC4kgAA+BcAAAAAAAAQGQAAJwAAAD0AAAA+AAAAPwAAAEAAAABBAAAAQgAAAEMAAABEAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3NpbmZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAAGgYAAD0FgAAAAAAAJgZAABFAAAARgAAAEcAAAAzAAAASAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozc2luZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAOCSAAA4GQAAnIsAAAAAAADsGQAANQAAAEkAAAA7AAAASgAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3NpbmZFRUVFAOCSAADAGQAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3NpbmZFRUVFRUUAAAAAuJIAAPgZAAAAAAAAJBsAACcAAABLAAAATAAAAE0AAABOAAAATwAAAFAAAABRAAAAUgAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNjb3NmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAOCSAAB8GgAA9BYAAAAAAACsGwAAUwAAAFQAAABVAAAAMwAAAFYAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2Nvc2ZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAADgkgAATBsAAJyLAAAAAAAAABwAADUAAABXAAAAOwAAAFgAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNjb3NmRUVFRQDgkgAA1BsAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNjb3NmRUVFRUVFAAAAALiSAAAMHAAAAAAAADgdAAAnAAAAWQAAAFoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozdGFuZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAADgkgAAkBwAAPQWAAAAAAAAwB0AAGEAAABiAAAAYwAAADMAAABkAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjN0YW5mRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAA4JIAAGAdAACciwAAAAAAABQeAAA1AAAAZQAAADsAAABmAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozdGFuZkVFRUUA4JIAAOgdAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozdGFuZkVFRUVFRQAAAAC4kgAAIB4AAAAAAABMHwAAJwAAAGcAAABoAAAAaQAAAGoAAABrAAAAbAAAAG0AAABuAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNHRhbmhmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAAKQeAAD0FgAAAAAAANQfAABvAAAAcAAAAHEAAAAzAAAAcgAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0dGFuaGZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAAB0HwAAnIsAAAAAAAAsIAAANQAAAHMAAAA7AAAAdAAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNHRhbmhmRUVFRQAAAADgkgAA/B8AAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjR0YW5oZkVFRUVFRQAAALiSAAA4IAAAAAAAAGghAAAnAAAAdQAAAHYAAAB3AAAAeAAAAHkAAAB6AAAAewAAAHwAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1YXNpbmhmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAA4JIAALwgAAD0FgAAAAAAAPQhAAB9AAAAfgAAAH8AAAAzAAAAgAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1YXNpbmhmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAADgkgAAkCEAAJyLAAAAAAAATCIAADUAAACBAAAAOwAAAIIAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVhc2luaGZFRUVFAAAA4JIAABwiAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1YXNpbmhmRUVFRUVFAAC4kgAAWCIAAAAAAACEIwAAJwAAAIMAAACEAAAAhQAAAIYAAACHAAAAiAAAAIkAAACKAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2xvZ2ZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAANwiAAD0FgAAAAAAAAwkAACLAAAAjAAAAI0AAAAzAAAAjgAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozbG9nZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAOCSAACsIwAAnIsAAAAAAABgJAAANQAAAI8AAAA7AAAAkAAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2xvZ2ZFRUVFAOCSAAA0JAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2xvZ2ZFRUVFRUUAAAAAuJIAAGwkAAAAAAAAnCUAACcAAACRAAAAkgAAAJMAAACUAAAAlQAAAJYAAACXAAAAmAAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVsb2cxMGZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAADgkgAA8CQAAPQWAAAAAAAAKCYAAJkAAACaAAAAmwAAADMAAACcAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVsb2cxMGZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAAAOCSAADEJQAAnIsAAAAAAACAJgAANQAAAJ0AAAA7AAAAngAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWxvZzEwZkVFRUUAAADgkgAAUCYAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVsb2cxMGZFRUVFRUUAALiSAACMJgAAAAAAALgnAAAnAAAAnwAAAKAAAAChAAAAogAAAKMAAACkAAAApQAAAKYAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0bG9nMmZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQDgkgAAECcAAPQWAAAAAAAAQCgAAKcAAACoAAAAqQAAADMAAACqAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRsb2cyZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUA4JIAAOAnAACciwAAAAAAAJgoAAA1AAAAqwAAADsAAACsAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0bG9nMmZFRUVFAAAAAOCSAABoKAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNGxvZzJmRUVFRUVFAAAAuJIAAKQoAAAAAAAA0CkAACcAAACtAAAArgAAAK8AAACwAAAAsQAAALIAAACzAAAAtAAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRjZWlsZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAOCSAAAoKQAA9BYAAAAAAABYKgAAtQAAALYAAAC3AAAAMwAAALgAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNGNlaWxmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAA+CkAAJyLAAAAAAAAsCoAADUAAAC5AAAAOwAAALoAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRjZWlsZkVFRUUAAAAA4JIAAIAqAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0Y2VpbGZFRUVFRUUAAAC4kgAAvCoAAAAAAADsKwAAJwAAALsAAAC8AAAAvQAAAL4AAAC/AAAAwAAAAMEAAADCAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWZsb29yZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAOCSAABAKwAA9BYAAAAAAAB4LAAAwwAAAMQAAADFAAAAMwAAAMYAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWZsb29yZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAAA4JIAABQsAACciwAAAAAAANAsAAA1AAAAxwAAADsAAADIAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1Zmxvb3JmRUVFRQAAAOCSAACgLAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWZsb29yZkVFRUVFRQAAuJIAANwsAAAAAAAACC4AACcAAADJAAAAygAAAMsAAADMAAAAzQAAAM4AAADPAAAA0AAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRzcXJ0ZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAOCSAABgLQAA9BYAAAAAAACQLgAA0QAAANIAAADTAAAAMwAAANQAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNHNxcnRmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAAMC4AAJyLAAAAAAAA6C4AADUAAADVAAAAOwAAANYAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRzcXJ0ZkVFRUUAAAAA4JIAALguAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0c3FydGZFRUVFRUUAAAC4kgAA9C4AAAAAAAAgMAAAJwAAANcAAADYAAAA2QAAANoAAADbAAAA3AAAAN0AAADeAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2V4cGZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAAHgvAAD0FgAAAAAAAKgwAADfAAAA4AAAAOEAAAAzAAAA4gAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozZXhwZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAOCSAABIMAAAnIsAAAAAAAD8MAAANQAAAOMAAAA7AAAA5AAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2V4cGZFRUVFAOCSAADQMAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2V4cGZFRUVFRUUAAAAAuJIAAAgxAAAAAAAANDIAACcAAADlAAAA5gAAAOcAAADoAAAA6QAAAOoAAADrAAAA7AAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNhYnNmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAOCSAACMMQAA9BYAAAAAAAC8MgAA7QAAAO4AAADvAAAAMwAAAPAAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2Fic2ZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAADgkgAAXDIAAJyLAAAAAAAAEDMAADUAAADxAAAAOwAAAPIAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNhYnNmRUVFRQDgkgAA5DIAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNhYnNmRUVFRUVFAAAAALiSAAAcMwAAAAAAAEg0AAAnAAAA8wAAAPQAAAD1AAAA9gAAAPcAAAD4AAAA+QAAAPoAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfNGxlc3NJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAADgkgAAoDMAAPQWAAAAAAAA0DQAAPsAAAD8AAAA/QAAADMAAAD+AAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU180bGVzc0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAA4JIAAHA0AACciwAAAAAAACg1AAA1AAAA/wAAADsAAAAAAQAAOQAAAE40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlN0M19fMjRsZXNzSWZFRUVFAOCSAAD4NAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzI0bGVzc0lmRUVFRUVFAAAAALiSAAA0NQAAAAAAAGw2AAAnAAAAAQEAAAIBAAADAQAABAEAAAUBAAAGAQAABwEAAAgBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfMTBsZXNzX2VxdWFsSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAOCSAAC8NQAA9BYAAAAAAAD8NgAACQEAAAoBAAALAQAAMwAAAAwBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzEwbGVzc19lcXVhbElmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAOCSAACUNgAAnIsAAAAAAABcNwAANQAAAA0BAAA7AAAADgEAADkAAABONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzIxMGxlc3NfZXF1YWxJZkVFRUUAAOCSAAAkNwAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzIxMGxlc3NfZXF1YWxJZkVFRUVFRQC4kgAAaDcAAAAAAACgOAAAJwAAAA8BAAAQAQAAEQEAABIBAAATAQAAFAEAABUBAAAWAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzdncmVhdGVySWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAOCSAAD0NwAA9BYAAAAAAAAsOQAAFwEAABgBAAAZAQAAMwAAABoBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzdncmVhdGVySWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAAAA4JIAAMg4AACciwAAAAAAAIg5AAA1AAAAGwEAADsAAAAcAQAAOQAAAE40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlN0M19fMjdncmVhdGVySWZFRUVFAADgkgAAVDkAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yN2dyZWF0ZXJJZkVFRUVFRQC4kgAAlDkAAAAAAADQOgAAJwAAAB0BAAAeAQAAHwEAACABAAAhAQAAIgEAACMBAAAkAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzEzZ3JlYXRlcl9lcXVhbElmRUVFRUVFTlNfOWFsbG9jYXRvcklTOV9FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAA4JIAABw6AAD0FgAAAAAAAGQ7AAAlAQAAJgEAACcBAAAzAAAAKAEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfMTNncmVhdGVyX2VxdWFsSWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAAAAAOCSAAD4OgAAnIsAAAAAAADIOwAANQAAACkBAAA7AAAAKgEAADkAAABONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzIxM2dyZWF0ZXJfZXF1YWxJZkVFRUUAAADgkgAAjDsAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yMTNncmVhdGVyX2VxdWFsSWZFRUVFRUUAALiSAADUOwAAAAAAABA9AAAnAAAAKwEAACwBAAAtAQAALgEAAC8BAAAwAQAAMQEAADIBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlMyXzdTYWZlUG93SWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAAGQ8AAD0FgAAAAAAAJw9AAAzAQAANAEAADUBAAAzAAAANgEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlMxXzdTYWZlUG93SWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAADgkgAAOD0AAJyLAAAAAAAA9D0AADUAAAA3AQAAOwAAADgBAAA5AAAATjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU183U2FmZVBvd0lmRUVFRQAA4JIAAMQ9AADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfN1NhZmVQb3dJZkVFRUVFRQC4kgAAAD4AAAAAAAAsPwAAJwAAADkBAAA6AQAAOwEAADwBAAA9AQAAPgEAAD8BAABAAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfNHBsdXNJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAIQ+AAD0FgAAAAAAALQ/AABBAQAAQgEAAEMBAAAzAAAARAEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU180cGx1c0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAOCSAABUPwAAnIsAAAAAAAAMQAAANQAAAEUBAAA7AAAARgEAADkAAABONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlN0M19fMjRwbHVzSWZFRUVFAADgkgAA3D8AAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TdDNfXzI0cGx1c0lmRUVFRUVFALiSAAAYQAAAAAAAAERBAAAnAAAARwEAAEgBAABJAQAASgEAAEsBAABMAQAATQEAAE4BAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU181bWludXNJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAADgkgAAnEAAAPQWAAAAAAAAzEEAAE8BAABQAQAAUQEAADMAAABSAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzVtaW51c0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAA4JIAAGxBAACciwAAAAAAACRCAAA1AAAAUwEAADsAAABUAQAAOQAAAE40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU3QzX18yNW1pbnVzSWZFRUVFAOCSAAD0QQAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlN0M19fMjVtaW51c0lmRUVFRUVFAAAAALiSAAAwQgAAAAAAAGhDAAAnAAAAVQEAAFYBAABXAQAAWAEAAFkBAABaAQAAWwEAAFwBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU18xMG11bHRpcGxpZXNJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAOCSAAC4QgAA9BYAAAAAAAD4QwAAXQEAAF4BAABfAQAAMwAAAGABAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfMTBtdWx0aXBsaWVzSWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAAAAAOCSAACQQwAAnIsAAAAAAABYRAAANQAAAGEBAAA7AAAAYgEAADkAAABONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlN0M19fMjEwbXVsdGlwbGllc0lmRUVFRQAAAOCSAAAgRAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlN0M19fMjEwbXVsdGlwbGllc0lmRUVFRUVFAAC4kgAAZEQAAAAAAACgRQAAJwAAAGMBAABkAQAAZQEAAGYBAABnAQAAaAEAAGkBAABqAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMyXzExU2FmZURpdmlkZXNJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAADgkgAA8EQAAPQWAAAAAAAAMEYAAGsBAABsAQAAbQEAADMAAABuAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TMV8xMVNhZmVEaXZpZGVzSWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAADgkgAAyEUAAJyLAAAAAAAAjEYAADUAAABvAQAAOwAAAHABAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzExU2FmZURpdmlkZXNJZkVFRUUAAOCSAABYRgAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfMTFTYWZlRGl2aWRlc0lmRUVFRUVFALiSAACYRgAAAAAAAMxHAAAnAAAAcQEAAHIBAABzAQAAdAEAAHUBAAB2AQAAdwEAAHgBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOUzJfN01vZHVsdXNJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAACBHAAD0FgAAAAAAAFhIAAB5AQAAegEAAHsBAAAzAAAAfAEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOUzFfN01vZHVsdXNJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAADgkgAA9EcAAJyLAAAAAAAAsEgAADUAAAB9AQAAOwAAAH4BAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzdNb2R1bHVzSWZFRUVFAAAA4JIAAIBIAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU183TW9kdWx1c0lmRUVFRUVFAAC4kgAAvEgAAAAAAADoSQAAJwAAAH8BAACAAQAAgQEAAIIBAACDAQAAhAEAAIUBAACGAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMyXzNNaW5JZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAEBJAAD0FgAAAAAAAHBKAACHAQAAiAEAAIkBAAAzAAAAigEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOUzFfM01pbklmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAOCSAAAQSgAAnIsAAAAAAADESgAANQAAAIsBAAA7AAAAjAEAADkAAABONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfM01pbklmRUVFRQAAAOCSAACYSgAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfM01pbklmRUVFRUVFAAC4kgAA0EoAAAAAAAD4SwAAJwAAAI0BAACOAQAAjwEAAJABAACRAQAAkgEAAJMBAACUAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMyXzNNYXhJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAFBLAAD0FgAAAAAAAIBMAACVAQAAlgEAAJcBAAAzAAAAmAEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOUzFfM01heElmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAOCSAAAgTAAAnIsAAAAAAADUTAAANQAAAJkBAAA7AAAAmgEAADkAAABONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfM01heElmRUVFRQAAAOCSAACoTAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfM01heElmRUVFRUVFAAC4kgAA4EwAAAAAAADwTQAAJwAAAJsBAACcAQAAnQEAAJ4BAACfAQAAoAEAAKEBAACiAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl84Um9vdE5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAAGBNAAD0FgAAAAAAAGBOAACjAQAApAEAAKUBAAAzAAAApgEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbThSb290Tm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAOCSAAAYTgAAnIsAAAAAAACcTgAANQAAAKcBAACoAQAAqQEAADkAAABONGVsZW04Um9vdE5vZGVJZkVFAOCSAACITgAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU184Um9vdE5vZGVJZkVFRUUAAAAAuJIAAKhOAAAAAAAApE8AACcAAACqAQAAqwEAAKwBAACtAQAArgEAAK8BAACwAQAAsQEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfOUNvbnN0Tm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAOCSAAAUTwAA9BYAAAAAAAAUUAAAsgEAALMBAAC0AQAAMwAAALUBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW05Q29uc3ROb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAAzE8AAJyLAAAAAAAAVFAAADUAAAC2AQAAtwEAALgBAAA5AAAATjRlbGVtOUNvbnN0Tm9kZUlmRUUAAAAA4JIAADxQAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzlDb25zdE5vZGVJZkVFRUUAAAC4kgAAYFAAAAAAAABgUQAAJwAAALkBAAC6AQAAuwEAALwBAAC9AQAAvgEAAL8BAADAAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xMFBoYXNvck5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAOCSAADMUAAA9BYAAAAAAADUUQAAwQEAAMIBAADDAQAAMwAAAMQBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xMFBoYXNvck5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAA4JIAAIhRAACciwAAAAAAABRSAAA1AAAAxQEAADsAAADGAQAAOQAAAE40ZWxlbTEwUGhhc29yTm9kZUlmRUUAAOCSAAD8UQAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xMFBoYXNvck5vZGVJZkVFRUUAuJIAACBSAAAAAAAAJFMAACcAAADHAQAAyAEAAMkBAADKAQAAywEAAMwBAADNAQAAzgEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTRTYW1wbGVSYXRlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAIxSAAD0FgAAAAAAAJxTAADPAQAA0AEAANEBAAAzAAAA0gEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE0U2FtcGxlUmF0ZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAA4JIAAExTAACciwAAAAAAAOBTAAA1AAAA0wEAADsAAADUAQAAOQAAAE40ZWxlbTE0U2FtcGxlUmF0ZU5vZGVJZkVFAADgkgAAxFMAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTRTYW1wbGVSYXRlTm9kZUlmRUVFRQC4kgAA7FMAAAAAAAD0VAAAJwAAANUBAADWAQAA1wEAANgBAADZAQAA2gEAANsBAADcAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xNFNhbXBsZVRpbWVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAADgkgAAXFQAAPQWAAAAAAAAbFUAAN0BAADeAQAA3wEAADMAAADgAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTRTYW1wbGVUaW1lTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAADgkgAAHFUAAJyLAAAAAAAAsFUAADUAAADhAQAAOwAAAOIBAAA5AAAATjRlbGVtMTRTYW1wbGVUaW1lTm9kZUlmRUUAAOCSAACUVQAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xNFNhbXBsZVRpbWVOb2RlSWZFRUVFALiSAAC8VQAAAAAAAMBWAAAnAAAA4wEAAOQBAADlAQAA5gEAAOcBAADoAQAA6QEAAOoBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzEyU2VxdWVuY2VOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAACxWAAD0FgAAAAAAADRXAADrAQAA7AEAAO0BAAAzAAAA7gEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEyU2VxdWVuY2VOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAA6FYAAJyLAAAAAAAAeFcAAO8BAADwAQAA8QEAAPIBAAA5AAAATjRlbGVtMTJTZXF1ZW5jZU5vZGVJZkVFAAAAAOCSAABcVwAAyBcAAAAAAADsVwAA8wEAAPQBAAD1AQAAMwAAAPYBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlOU182dmVjdG9ySWZOU185YWxsb2NhdG9ySWZFRUVFTlMyX0lTNF9FRUVFAAAA4JIAAKBXAACciwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzEyU2VxdWVuY2VOb2RlSWZFRUVFAAAAuJIAAPhXAAAAAAAA/FgAACcAAAD3AQAA+AEAAPkBAAD6AQAA+wEAAPwBAAD9AQAA/gEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTFDb3VudGVyTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAADgkgAAaFgAAPQWAAAAAAAAcFkAAP8BAAAAAgAAAQIAADMAAAACAgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTFDb3VudGVyTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAOCSAAAkWQAAnIsAAAAAAACwWQAANQAAAAMCAAA7AAAABAIAADkAAABONGVsZW0xMUNvdW50ZXJOb2RlSWZFRQDgkgAAmFkAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTFDb3VudGVyTm9kZUlmRUVFRQAAAAC4kgAAvFkAAAAAAAC8WgAAJwAAAAUCAAAGAgAABwIAAAgCAAAJAgAACgIAAAsCAAAMAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl85TGF0Y2hOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAACxaAAD0FgAAAAAAACxbAAANAgAADgIAAA8CAAAzAAAAEAIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTlMYXRjaE5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAADkWgAAnIsAAAAAAABsWwAANQAAABECAAA7AAAAEgIAADkAAABONGVsZW05TGF0Y2hOb2RlSWZFRQAAAADgkgAAVFsAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOUxhdGNoTm9kZUlmRUVFRQAAALiSAAB4WwAAAAAAAIRcAAAnAAAAEwIAABQCAAAVAgAAFgIAABcCAAAYAgAAGQIAABoCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzIyVW5pZm9ybVJhbmRvbU5vaXNlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAORbAAD0FgAAAAAAAARdAAAbAgAAHAIAAB0CAAAzAAAAHgIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTIyVW5pZm9ybVJhbmRvbU5vaXNlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAADgkgAArFwAAJyLAAAAAAAAUF0AADUAAAAfAgAAIAIAACECAAA5AAAATjRlbGVtMjJVbmlmb3JtUmFuZG9tTm9pc2VOb2RlSWZFRQAA4JIAACxdAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzIyVW5pZm9ybVJhbmRvbU5vaXNlTm9kZUlmRUVFRQC4kgAAXF0AAAAAAABsXgAAJwAAACICAAAjAgAAJAIAACUCAAAmAgAAJwIAACgCAAApAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xM01ldHJvbm9tZU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAADgkgAA1F0AAPQWAAAAAAAA5F4AACoCAAArAgAALAIAADMAAAAtAgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTNNZXRyb25vbWVOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAADgkgAAlF4AAJyLAAAAAAAAKF8AADUAAAAuAgAALwIAADACAAAxAgAATjRlbGVtMTNNZXRyb25vbWVOb2RlSWZFRQAAAOCSAAAMXwAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xM01ldHJvbm9tZU5vZGVJZkVFRUUAALiSAAA0XwAAAAAAAEBgAAAnAAAAMgIAADMCAAA0AgAANQIAADYCAAA3AgAAOAIAADkCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE3VmFyaWFibGVEZWxheU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAADgkgAApF8AAPQWAAAAAAAAvGAAADoCAAA7AgAAPAIAADMAAAA9AgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTdWYXJpYWJsZURlbGF5Tm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAAA4JIAAGhgAACciwAAAAAAAARhAAA+AgAAPwIAAEACAABBAgAAOQAAAE40ZWxlbTE3VmFyaWFibGVEZWxheU5vZGVJZkVFAAAA4JIAAORgAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE3VmFyaWFibGVEZWxheU5vZGVJZkVFRUUAALiSAAAQYQAAAAAAACRiAAAnAAAAQgIAAEMCAABEAgAARQIAAEYCAABHAgAASAIAAEkCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzIxU2luZ2xlU2FtcGxlRGVsYXlOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAA4JIAAIRhAAD0FgAAAAAAAKRiAABKAgAASwIAAEwCAAAzAAAATQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTIxU2luZ2xlU2FtcGxlRGVsYXlOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAADgkgAATGIAAJyLAAAAAAAA8GIAADUAAABOAgAAOwAAAE8CAAA5AAAATjRlbGVtMjFTaW5nbGVTYW1wbGVEZWxheU5vZGVJZkVFAAAA4JIAAMxiAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzIxU2luZ2xlU2FtcGxlRGVsYXlOb2RlSWZFRUVFAAC4kgAA/GIAAAAAAAAIZAAAJwAAAFACAABRAgAAUgIAAFMCAABUAgAAVQIAAFYCAABXAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xMU9uZVBvbGVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAOCSAAB0YwAA9BYAAAAAAAB8ZAAAWAIAAFkCAABaAgAAMwAAAFsCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xMU9uZVBvbGVOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAA4JIAADBkAACciwAAAAAAALxkAAA1AAAAXAIAADsAAABdAgAAOQAAAE40ZWxlbTExT25lUG9sZU5vZGVJZkVFAOCSAACkZAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xMU9uZVBvbGVOb2RlSWZFRUVFAAAAALiSAADIZAAAAAAAAMxlAAAnAAAAXgIAAF8CAABgAgAAYQIAAGICAABjAgAAZAIAAGUCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzEyRW52ZWxvcGVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAADhlAAD0FgAAAAAAAEBmAABmAgAAZwIAAGgCAAAzAAAAaQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEyRW52ZWxvcGVOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAA9GUAAJyLAAAAAAAAhGYAADUAAABqAgAAOwAAAGsCAAA5AAAATjRlbGVtMTJFbnZlbG9wZU5vZGVJZkVFAAAAAOCSAABoZgAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xMkVudmVsb3BlTm9kZUlmRUVFRQAAALiSAACQZgAAAAAAAJhnAAAnAAAAbAIAAG0CAABuAgAAbwIAAHACAABxAgAAcgIAAHMCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE2QmlxdWFkRmlsdGVyTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAOCSAAAAZwAA9BYAAAAAAAAQaAAAdAIAAHUCAAB2AgAAMwAAAHcCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xNkJpcXVhZEZpbHRlck5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAADAZwAAnIsAAAAAAABYaAAANQAAAHgCAAA7AAAAeQIAADkAAABONGVsZW0xNkJpcXVhZEZpbHRlck5vZGVJZkVFAAAAAOCSAAA4aAAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xNkJpcXVhZEZpbHRlck5vZGVJZkVFRUUAAAC4kgAAZGgAAAAAAABoaQAAJwAAAHoCAAB7AgAAfAIAAH0CAAB+AgAAfwIAAIACAACBAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl85VGFwSW5Ob2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAANhoAAD0FgAAAAAAANhpAACCAgAAgwIAAIQCAAAzAAAAhQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTlUYXBJbk5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAACQaQAAnIsAAAAAAAAYagAANQAAAIYCAACHAgAAiAIAADkAAABONGVsZW05VGFwSW5Ob2RlSWZFRQAAAADgkgAAAGoAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOVRhcEluTm9kZUlmRUVFRQAAALiSAAAkagAAAAAAACRrAAAnAAAAiQIAAIoCAACLAgAAjAIAAI0CAACOAgAAjwIAAJACAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzEwVGFwT3V0Tm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAA4JIAAJBqAAD0FgAAAAAAAJhrAACRAgAAkgIAAJMCAAAzAAAAlAIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEwVGFwT3V0Tm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAADgkgAATGsAAJyLAAAAAAAA2GsAAJUCAACWAgAAlwIAAJgCAAA5AAAATjRlbGVtMTBUYXBPdXROb2RlSWZFRQAA4JIAAMBrAADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzEwVGFwT3V0Tm9kZUlmRUVFRQC4kgAA5GsAAAAAAADkbAAAJwAAAJkCAACaAgAAmwIAAJwCAACdAgAAngIAAJ8CAACgAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xMFNhbXBsZU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAOCSAABQbAAA9BYAAAAAAABYbQAAoQIAAKICAACjAgAAMwAAAKQCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xMFNhbXBsZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAA4JIAAAxtAACciwAAAAAAAMRtAAClAgAApgIAAKcCAACoAgAAOQAAAE40ZWxlbTEwU2FtcGxlTm9kZUlmRUUATjRlbGVtMTdSZXNvdXJjZUJhc2VkTm9kZUlmRUUAAAAA4JIAAJdtAADIFwAA4JIAAIBtAAC4bQAAAAAAALhtAAClAgAAqQIAAKoCAAA8AAAAOQAAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xMFNhbXBsZU5vZGVJZkVFRUUAuJIAAOxtAAAAAAAA6G4AACcAAACrAgAArAIAAK0CAACuAgAArwIAALACAACxAgAAsgIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfOVRhYmxlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAOCSAABYbgAA9BYAAAAAAABYbwAAswIAALQCAAC1AgAAMwAAALYCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW05VGFibGVOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQDgkgAAEG8AAJyLAAAAAAAAmG8AAKUCAAC3AgAAqgIAALgCAAA5AAAATjRlbGVtOVRhYmxlTm9kZUlmRUUAAAAA4JIAAIBvAAC4bQAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzlUYWJsZU5vZGVJZkVFRUUAAAC4kgAApG8AAAAAAACgcAAAJwAAALkCAAC6AgAAuwIAALwCAAC9AgAAvgIAAL8CAADAAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl85TWV0ZXJOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUA4JIAABBwAAD0FgAAAAAAABBxAADBAgAAwgIAAMMCAAAzAAAAxAIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTlNZXRlck5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAADIcAAAnIsAAAAAAABQcQAAxQIAAMYCAAA7AAAAxwIAAMgCAABONGVsZW05TWV0ZXJOb2RlSWZFRQAAAADgkgAAOHEAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOU1ldGVyTm9kZUlmRUVFRQAAALiSAABccQAAAAAAAFhyAAAnAAAAyQIAAMoCAADLAgAAzAIAAM0CAADOAgAAzwIAANACAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzlTY29wZU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQDgkgAAyHEAAPQWAAAAAAAAyHIAANECAADSAgAA0wIAADMAAADUAgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtOVNjb3BlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUA4JIAAIByAACciwAAAAAAAAhzAADVAgAA1gIAANcCAADYAgAA2QIAAE40ZWxlbTlTY29wZU5vZGVJZkVFAAAAAOCSAADwcgAAyBcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU185U2NvcGVOb2RlSWZFRUVFAAAAuJIAABRzAAAAAAAAEHQAACcAAADaAgAA2wIAANwCAADdAgAA3gIAAN8CAADgAgAA4QIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfN0ZGVE5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAOCSAACAcwAA9BYAAAAAAACAdAAA4gIAAOMCAADkAgAAMwAAAOUCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW03RkZUTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAADgkgAAOHQAAJyLAAAAAAAAvHQAAOYCAADnAgAA6AIAAOkCAADqAgAATjRlbGVtN0ZGVE5vZGVJZkVFAADgkgAAqHQAAMgXAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfN0ZGVE5vZGVJZkVFRUUAuJIAAMh0AAAAAAAAxHUAACcAAADrAgAA7AIAAO0CAADuAgAA7wIAAPACAADxAgAA8gIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTJTbmFwc2hvdE5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQDgkgAAMHUAAPQWAAAAAAAAOHYAAPMCAAD0AgAA9QIAADMAAAD2AgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTJTbmFwc2hvdE5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAOCSAADsdQAAnIsAAAAAAAB8dgAANQAAAPcCAAA7AAAA+AIAAPkCAABONGVsZW0xMlNuYXBzaG90Tm9kZUlmRUUAAAAA4JIAAGB2AADIFwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzEyU25hcHNob3ROb2RlSWZFRUVFAAAAuJIAAIh2AAAAAAAAkHcAACcAAAD6AgAA+wIAAPwCAAD9AgAA/gIAAP8CAAAAAwAAAQMAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTVDb252b2x1dGlvbk5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAA4JIAAPh2AAD0FgAAAAAAAAh4AAACAwAAAwMAAAQDAAAzAAAABQMAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE1Q29udm9sdXRpb25Ob2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAA4JIAALh3AACciwAAAAAAAEx4AAAGAwAABwMAAAgDAAAJAwAAOQAAAE40ZWxlbTE1Q29udm9sdXRpb25Ob2RlSWZFRQDgkgAAMHgAAMgXAAAAAAAA0HgAAAoDAAALAwAADAMAADMAAAANAwAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjEyZmZ0Y29udm9sdmVyMjBUd29TdGFnZUZGVENvbnZvbHZlckVOU185YWxsb2NhdG9ySVMyX0VFRUUAAADgkgAAdHgAAJyLAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTVDb252b2x1dGlvbk5vZGVJZkVFRUUAAAAAuJIAANx4AAAAAAAAIHoAAA4DAAAPAwAAEAMAABEDAAASAwAAEwMAABQDAAAVAwAAFgMAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSVpONGVsZW05R3JhcGhIb3N0SWZFMTFzZXRQcm9wZXJ0eUVSS05TXzEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUVTQ19SS05TMl8yanM1VmFsdWVFRVVsdkVfTlM4X0lTSF9FRUZ2dkVFRQBOU3QzX18yMTBfX2Z1bmN0aW9uNl9fYmFzZUlGdnZFRUUAAAAAuJIAAPN5AADgkgAAUHkAABh6AABaTjRlbGVtOUdyYXBoSG9zdElmRTExc2V0UHJvcGVydHlFUktOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFU0FfUktOU18yanM1VmFsdWVFRVVsdkVfAAAAALiSAAAsegAAMjRFbGVtZW50YXJ5QXVkaW9Qcm9jZXNzb3IAALiSAAC0egAAUDI0RWxlbWVudGFyeUF1ZGlvUHJvY2Vzc29yAJiTAADYegAAAAAAANB6AABQSzI0RWxlbWVudGFyeUF1ZGlvUHJvY2Vzc29yAAAAAJiTAAAEewAAAQAAANB6AABpaQB2AHZpAPR6AABUkgAAVJIAAGlpaWkAAAAA9JEAAPR6AACokgAAYJIAAHZpaWRpAAAA9JEAAPR6AABUkgAAdmlpaQAAAAD0kQAA9HoAALQSAAC0EgAA9HoAAFSSAEGg9wELIvSRAAD0egAArBQAAKwUAAB2aWlpaQAAAPSRAAD0egAArBQAQdD3AQvECPSRAAD0egAArBQAAKwUAAC0EgAAdmlpaWlpAAD0kQAA9HoAAHZpaQAAAAAAOHwAABcDAAAYAwAAGQMAABoDAABOMTJmZnRjb252b2x2ZXIyMFR3b1N0YWdlRkZUQ29udm9sdmVyRQAAuJIAABB8AAAAAAAAbHwAABsDAAAcAwAATjEyZmZ0Y29udm9sdmVyNkJ1ZmZlcklmRUUAALiSAABQfAAAAAAAAKR8AAAdAwAAHgMAAE4xMmZmdGNvbnZvbHZlcjEyRkZUQ29udm9sdmVyRQAAuJIAAIR8AAAAAAAACH0AAB8DAAAgAwAAIQMAACIDAAAjAwAATjhhdWRpb2ZmdDhPb3VyYUZGVEUATjhhdWRpb2ZmdDZkZXRhaWwxMkF1ZGlvRkZUSW1wbEUAAAC4kgAA3XwAAOCSAADIfAAAAH0AAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAAA8kwAAFH0AAAAAAAABAAAApBQAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAPJMAAGx9AAAAAAAAAQAAAKQUAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAAA8kwAAxH0AAAAAAAABAAAApBQAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAADyTAAAgfgAAAAAAAAEAAACkFAAAAAAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAAuJIAAHx+AABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAALiSAACkfgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAAC4kgAAzH4AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAAuJIAAPR+AABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAALiSAAAcfwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAAC4kgAARH8AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAAuJIAAGx/AABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAALiSAACUfwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAAC4kgAAvH8AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWRFRQAAuJIAAOR/AAAAAAA/AAAAvwBBoIACC9cVAwAAAAQAAAAEAAAABgAAAIP5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").startsWith(v)){var P=z;z=g.locateFile?g.locateFile(P,G):G+P}function _(A){for(;0<A.length;){var I=A.shift();if("function"==typeof I)I(g);else{var C=I.Ka;"number"==typeof C?void 0===I.oa?e.get(C)():e.get(C)(I.oa):C(void 0===I.oa?null:I.oa)}}}function $(A){this.X=A-16,this.Ia=function(A){L[this.X+4>>2]=A},this.Fa=function(A){L[this.X+8>>2]=A},this.Ga=function(){L[this.X>>2]=0},this.Ea=function(){c[this.X+12>>0]=0},this.Ha=function(){c[this.X+13>>0]=0},this.ya=function(A,I){this.Ia(A),this.Fa(I),this.Ga(),this.Ea(),this.Ha()}}function AA(A){switch(A){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+A)}}var IA=void 0;function gA(A){for(var I="";K[A];)I+=IA[K[A++]];return I}var CA={},BA={},QA={};function EA(A){if(void 0===A)return"_unknown";var I=(A=A.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=I&&57>=I?"_"+A:A}function DA(A,I){return A=EA(A),new Function("body","return function "+A+\'() {\\n    "use strict";    return body.apply(this, arguments);\\n};\\n\')(I)}function iA(A){var I=Error,g=DA(A,(function(I){this.name=A,this.message=I,void 0!==(I=Error(I).stack)&&(this.stack=this.toString()+"\\n"+I.replace(/^Error(:[^\\n]*)?\\n/,""))}));return g.prototype=Object.create(I.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},g}var oA=void 0;function wA(A){throw new oA(A)}var NA=void 0;function RA(A){throw new NA(A)}function FA(A,I,g){function C(I){(I=g(I)).length!==A.length&&RA("Mismatched type converter count");for(var C=0;C<A.length;++C)GA(A[C],I[C])}A.forEach((function(A){QA[A]=I}));var B=Array(I.length),Q=[],E=0;I.forEach((function(A,I){BA.hasOwnProperty(A)?B[I]=BA[A]:(Q.push(A),CA.hasOwnProperty(A)||(CA[A]=[]),CA[A].push((function(){B[I]=BA[A],++E===Q.length&&C(B)})))})),0===Q.length&&C(B)}function GA(A,I,g){if(g=g||{},!("argPackAdvance"in I))throw new TypeError("registerType registeredInstance requires argPackAdvance");var C=I.name;if(A||wA(\'type "\'+C+\'" must have a positive integer typeid pointer\'),BA.hasOwnProperty(A)){if(g.xa)return;wA("Cannot register type \'"+C+"\' twice")}BA[A]=I,delete QA[A],CA.hasOwnProperty(A)&&(I=CA[A],delete CA[A],I.forEach((function(A){A()})))}function UA(A){wA(A.W.Z.Y.name+" instance already deleted")}var yA=!1;function sA(){}function JA(A){--A.count.value,0===A.count.value&&(A.$?A.aa.ga(A.$):A.Z.Y.ga(A.X))}function MA(A){return"undefined"==typeof FinalizationGroup?(MA=function(A){return A},A):(yA=new FinalizationGroup((function(A){for(var I=A.next();!I.done;I=A.next())(I=I.value).X?JA(I):console.warn("object already deleted: "+I.X)})),sA=function(A){yA.unregister(A.W)},(MA=function(A){return yA.register(A,A.W,A.W),A})(A))}var aA=void 0,hA=[];function kA(){for(;hA.length;){var A=hA.pop();A.W.ha=!1,A.delete()}}function YA(){}var cA={};function KA(A,I,g){if(void 0===A[I].da){var C=A[I];A[I]=function(){return A[I].da.hasOwnProperty(arguments.length)||wA("Function \'"+g+"\' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+A[I].da+")!"),A[I].da[arguments.length].apply(this,arguments)},A[I].da=[],A[I].da[C.la]=C}}function SA(A,I,g,C,B,Q,E,D){this.name=A,this.constructor=I,this.ia=g,this.ga=C,this.ba=B,this.va=Q,this.ka=E,this.ua=D,this.Ba=[]}function lA(A,I,g){for(;I!==g;)I.ka||wA("Expected null or instance of "+g.name+", got an instance of "+I.name),A=I.ka(A),I=I.ba;return A}function LA(A,I){return null===I?(this.pa&&wA("null is not a valid "+this.name),0):(I.W||wA(\'Cannot pass "\'+jA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),lA(I.W.X,I.W.Z.Y,this.Y))}function nA(A,I){if(null===I){if(this.pa&&wA("null is not a valid "+this.name),this.na){var g=this.Ca();return null!==A&&A.push(this.ga,g),g}return 0}if(I.W||wA(\'Cannot pass "\'+jA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),!this.ma&&I.W.Z.ma&&wA("Cannot convert argument of type "+(I.W.aa?I.W.aa.name:I.W.Z.name)+" to parameter type "+this.name),g=lA(I.W.X,I.W.Z.Y,this.Y),this.na)switch(void 0===I.W.$&&wA("Passing raw pointer to smart pointer is illegal"),this.Ja){case 0:I.W.aa===this?g=I.W.$:wA("Cannot convert argument of type "+(I.W.aa?I.W.aa.name:I.W.Z.name)+" to parameter type "+this.name);break;case 1:g=I.W.$;break;case 2:if(I.W.aa===this)g=I.W.$;else{var C=I.clone();g=this.Da(g,pA((function(){C.delete()}))),null!==A&&A.push(this.ga,g)}break;default:wA("Unsupporting sharing policy")}return g}function tA(A,I){return null===I?(this.pa&&wA("null is not a valid "+this.name),0):(I.W||wA(\'Cannot pass "\'+jA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),I.W.Z.ma&&wA("Cannot convert argument of type "+I.W.Z.name+" to parameter type "+this.name),lA(I.W.X,I.W.Z.Y,this.Y))}function ZA(A){return this.fromWireType(n[A>>2])}function HA(A,I,g){return I===g?A:void 0===g.ba||null===(A=HA(A,I,g.ba))?null:g.ua(A)}var rA={};function dA(A,I){return I.Z&&I.X||RA("makeClassHandle requires ptr and ptrType"),!!I.aa!=!!I.$&&RA("Both smartPtrType and smartPtr must be specified"),I.count={value:1},MA(Object.create(A,{W:{value:I}}))}function VA(A,I,g,C){this.name=A,this.Y=I,this.pa=g,this.ma=C,this.na=!1,this.ga=this.Da=this.Ca=this.sa=this.Ja=this.Aa=void 0,void 0!==I.ba?this.toWireType=nA:(this.toWireType=C?LA:tA,this.ea=null)}function TA(A,I){var C=(A=gA(A)).includes("j")?function(A,I){var C=[];return function(){C.length=arguments.length;for(var B=0;B<arguments.length;B++)C[B]=arguments[B];return A.includes("j")?(B=g["dynCall_"+A],B=C&&C.length?B.apply(null,[I].concat(C)):B.call(null,I)):B=e.get(I).apply(null,C),B}}(A,I):e.get(I);return"function"!=typeof C&&wA("unknown function pointer with signature "+A+": "+I),C}var fA=void 0;function WA(A){var I=gA(A=FI(A));return UI(A),I}function bA(A,I){var g=[],C={};throw I.forEach((function A(I){C[I]||BA[I]||(QA[I]?QA[I].forEach(A):(g.push(I),C[I]=!0))})),new fA(A+": "+g.map(WA).join([", "]))}function eA(A,I){for(var g=[],C=0;C<A;C++)g.push(L[(I>>2)+C]);return g}function qA(A){for(;A.length;){var I=A.pop();A.pop()(I)}}function XA(A){var I=Function;if(!(I instanceof Function))throw new TypeError("new_ called with constructor type "+typeof I+" which is not a function");var g=DA(I.name||"unknownFunctionName",(function(){}));return g.prototype=I.prototype,g=new g,(A=I.apply(g,A))instanceof Object?A:g}function mA(A,I,g,C,B){var Q=I.length;2>Q&&wA("argTypes array size mismatch! Must at least get return value and \'this\' types!");var E=null!==I[1]&&null!==g,D=!1;for(g=1;g<I.length;++g)if(null!==I[g]&&void 0===I[g].ea){D=!0;break}var i="void"!==I[0].name,o="",w="";for(g=0;g<Q-2;++g)o+=(0!==g?", ":"")+"arg"+g,w+=(0!==g?", ":"")+"arg"+g+"Wired";A="return function "+EA(A)+"("+o+") {\\nif (arguments.length !== "+(Q-2)+") {\\nthrowBindingError(\'function "+A+" called with \' + arguments.length + \' arguments, expected "+(Q-2)+" args!\');\\n}\\n",D&&(A+="var destructors = [];\\n");var N=D?"destructors":"null";for(o="throwBindingError invoker fn runDestructors retType classParam".split(" "),C=[wA,C,B,qA,I[0],I[1]],E&&(A+="var thisWired = classParam.toWireType("+N+", this);\\n"),g=0;g<Q-2;++g)A+="var arg"+g+"Wired = argType"+g+".toWireType("+N+", arg"+g+"); // "+I[g+2].name+"\\n",o.push("argType"+g),C.push(I[g+2]);if(E&&(w="thisWired"+(0<w.length?", ":"")+w),A+=(i?"var rv = ":"")+"invoker(fn"+(0<w.length?", ":"")+w+");\\n",D)A+="runDestructors(destructors);\\n";else for(g=E?1:2;g<I.length;++g)Q=1===g?"thisWired":"arg"+(g-2)+"Wired",null!==I[g].ea&&(A+=Q+"_dtor("+Q+"); // "+I[g].name+"\\n",o.push(Q+"_dtor"),C.push(I[g].ea));return i&&(A+="var ret = retType.fromWireType(rv);\\nreturn ret;\\n"),o.push(A+"}\\n"),XA(o).apply(null,C)}var xA=[],OA=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function uA(A){4<A&&0==--OA[A].qa&&(OA[A]=void 0,xA.push(A))}function pA(A){switch(A){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var I=xA.length?xA.pop():OA.length;return OA[I]={qa:1,value:A},I}}function jA(A){if(null===A)return"null";var I=typeof A;return"object"===I||"array"===I||"function"===I?A.toString():""+A}function zA(A,I){switch(I){case 2:return function(A){return this.fromWireType(t[A>>2])};case 3:return function(A){return this.fromWireType(Z[A>>3])};default:throw new TypeError("Unknown float type: "+A)}}function vA(A,I,g){switch(I){case 0:return g?function(A){return c[A]}:function(A){return K[A]};case 1:return g?function(A){return S[A>>1]}:function(A){return l[A>>1]};case 2:return g?function(A){return L[A>>2]}:function(A){return n[A>>2]};default:throw new TypeError("Unknown integer type: "+A)}}function PA(A){return A||wA("Cannot use deleted val. handle = "+A),OA[A].value}function _A(A,I){var g=BA[A];return void 0===g&&wA(I+" has unknown type "+WA(A)),g}function $A(A,I){for(var g=Array(A),C=0;C<A;++C)g[C]=_A(L[(I>>2)+C],"parameter "+C);return g}var AI={};function II(A){var I=AI[A];return void 0===I?gA(A):I}var gI=[];function CI(){return"object"==typeof globalThis?globalThis:Function("return this")()}for(var BI=[null,[],[]],QI=Array(256),EI=0;256>EI;++EI)QI[EI]=String.fromCharCode(EI);IA=QI,oA=g.BindingError=iA("BindingError"),NA=g.InternalError=iA("InternalError"),YA.prototype.isAliasOf=function(A){if(!(this instanceof YA&&A instanceof YA))return!1;var I=this.W.Z.Y,g=this.W.X,C=A.W.Z.Y;for(A=A.W.X;I.ba;)g=I.ka(g),I=I.ba;for(;C.ba;)A=C.ka(A),C=C.ba;return I===C&&g===A},YA.prototype.clone=function(){if(this.W.X||UA(this),this.W.ja)return this.W.count.value+=1,this;var A=MA,I=Object,g=I.create,C=Object.getPrototypeOf(this),B=this.W;return(A=A(g.call(I,C,{W:{value:{count:B.count,ha:B.ha,ja:B.ja,X:B.X,Z:B.Z,$:B.$,aa:B.aa}}}))).W.count.value+=1,A.W.ha=!1,A},YA.prototype.delete=function(){this.W.X||UA(this),this.W.ha&&!this.W.ja&&wA("Object already scheduled for deletion"),sA(this),JA(this.W),this.W.ja||(this.W.$=void 0,this.W.X=void 0)},YA.prototype.isDeleted=function(){return!this.W.X},YA.prototype.deleteLater=function(){return this.W.X||UA(this),this.W.ha&&!this.W.ja&&wA("Object already scheduled for deletion"),hA.push(this),1===hA.length&&aA&&aA(kA),this.W.ha=!0,this},VA.prototype.wa=function(A){return this.sa&&(A=this.sa(A)),A},VA.prototype.ra=function(A){this.ga&&this.ga(A)},VA.prototype.argPackAdvance=8,VA.prototype.readValueFromPointer=ZA,VA.prototype.deleteObject=function(A){null!==A&&A.delete()},VA.prototype.fromWireType=function(A){function I(){return this.na?dA(this.Y.ia,{Z:this.Aa,X:g,aa:this,$:A}):dA(this.Y.ia,{Z:this,X:A})}var g=this.wa(A);if(!g)return this.ra(A),null;var C=function(A,I){for(void 0===I&&wA("ptr should not be undefined");A.ba;)I=A.ka(I),A=A.ba;return rA[I]}(this.Y,g);if(void 0!==C)return 0===C.W.count.value?(C.W.X=g,C.W.$=A,C.clone()):(C=C.clone(),this.ra(A),C);if(C=this.Y.va(g),!(C=cA[C]))return I.call(this);C=this.ma?C.ta:C.pointerType;var B=HA(g,this.Y,C.Y);return null===B?I.call(this):this.na?dA(C.Y.ia,{Z:C,X:B,aa:this,$:A}):dA(C.Y.ia,{Z:C,X:B})},g.getInheritedInstanceCount=function(){return Object.keys(rA).length},g.getLiveInheritedInstances=function(){var A,I=[];for(A in rA)rA.hasOwnProperty(A)&&I.push(rA[A]);return I},g.flushPendingDeletes=kA,g.setDelayFunction=function(A){aA=A,hA.length&&aA&&aA(kA)},fA=g.UnboundTypeError=iA("UnboundTypeError"),g.count_emval_handles=function(){for(var A=0,I=5;I<OA.length;++I)void 0!==OA[I]&&++A;return A},g.get_first_emval=function(){for(var A=5;A<OA.length;++A)if(void 0!==OA[A])return OA[A];return null};var DI=!1,iI="function"==typeof atob?atob:function(A){var I="",g=0;A=A.replace(/[^A-Za-z0-9\\+\\/=]/g,"");do{var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++));C=C<<2|B>>4,B=(15&B)<<4|Q>>2;var D=(3&Q)<<6|E;I+=String.fromCharCode(C),64!==Q&&(I+=String.fromCharCode(B)),64!==E&&(I+=String.fromCharCode(D))}while(g<A.length);return I};function oI(A){if(A.startsWith(v)){if(A=A.slice(v.length),"boolean"==typeof F&&F){var I=Buffer.from(A,"base64");I=new Uint8Array(I.buffer,I.byteOffset,I.byteLength)}else try{var g=iI(A),C=new Uint8Array(g.length);for(A=0;A<g.length;++A)C[A]=g.charCodeAt(A);I=C}catch(A){throw Error("Converting base64 string to bytes failed.")}return I}}var wI={b:function(A){return RI(A+16)+16},c:function(A,I,g){throw new $(A).ya(I,g),A},A:function(){},H:function(A,I,g,C,B){var Q=AA(g);GA(A,{name:I=gA(I),fromWireType:function(A){return!!A},toWireType:function(A,I){return I?C:B},argPackAdvance:8,readValueFromPointer:function(A){if(1===g)var C=c;else if(2===g)C=S;else{if(4!==g)throw new TypeError("Unknown boolean type size: "+I);C=L}return this.fromWireType(C[A>>Q])},ea:null})},K:function(A,I,C,B,Q,E,D,i,o,w,N,R,F){N=gA(N),E=TA(Q,E),i&&(i=TA(D,i)),w&&(w=TA(o,w)),F=TA(R,F);var G=EA(N);!function(A,I){g.hasOwnProperty(A)?(wA("Cannot register public name \'"+A+"\' twice"),KA(g,A,A),g.hasOwnProperty(void 0)&&wA("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),g[A].da[void 0]=I):g[A]=I}(G,(function(){bA("Cannot construct "+N+" due to unbound types",[B])})),FA([A,I,C],B?[B]:[],(function(I){if(I=I[0],B)var C=I.Y,Q=C.ia;else Q=YA.prototype;I=DA(G,(function(){if(Object.getPrototypeOf(this)!==D)throw new oA("Use \'new\' to construct "+N);if(void 0===o.fa)throw new oA(N+" has no accessible constructor");var A=o.fa[arguments.length];if(void 0===A)throw new oA("Tried to invoke ctor of "+N+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(o.fa).toString()+") parameters instead!");return A.apply(this,arguments)}));var D=Object.create(Q,{constructor:{value:I}});I.prototype=D;var o=new SA(N,I,D,F,C,E,i,w);C=new VA(N,o,!0,!1),Q=new VA(N+"*",o,!1,!1);var R=new VA(N+" const*",o,!1,!0);return cA[A]={pointerType:Q,ta:R},function(A,I){g.hasOwnProperty(A)||RA("Replacing nonexistant public symbol"),g[A]=I,g[A].la=void 0}(G,I),[C,Q,R]}))},F:function(A,I,g,C,B,Q){a(0<I);var E=eA(I,g);B=TA(C,B),FA([],[A],(function(A){var g="constructor "+(A=A[0]).name;if(void 0===A.Y.fa&&(A.Y.fa=[]),void 0!==A.Y.fa[I-1])throw new oA("Cannot register multiple constructors with identical number of parameters ("+(I-1)+") for class \'"+A.name+"\'! Overload resolution is currently only performed using the parameter count, not actual type info!");return A.Y.fa[I-1]=function(){bA("Cannot construct "+A.name+" due to unbound types",E)},FA([],E,(function(C){return C.splice(1,0,null),A.Y.fa[I-1]=mA(g,C,null,B,Q),[]})),[]}))},e:function(A,I,g,C,B,Q,E,D){var i=eA(g,C);I=gA(I),Q=TA(B,Q),FA([],[A],(function(A){function C(){bA("Cannot call "+B+" due to unbound types",i)}var B=(A=A[0]).name+"."+I;I.startsWith("@@")&&(I=Symbol[I.substring(2)]),D&&A.Y.Ba.push(I);var o=A.Y.ia,w=o[I];return void 0===w||void 0===w.da&&w.className!==A.name&&w.la===g-2?(C.la=g-2,C.className=A.name,o[I]=C):(KA(o,I,B),o[I].da[g-2]=C),FA([],i,(function(C){return C=mA(B,C,A,Q,E),void 0===o[I].da?(C.la=g-2,o[I]=C):o[I].da[g-2]=C,[]})),[]}))},G:function(A,I){GA(A,{name:I=gA(I),fromWireType:function(A){var I=OA[A].value;return uA(A),I},toWireType:function(A,I){return pA(I)},argPackAdvance:8,readValueFromPointer:ZA,ea:null})},t:function(A,I,g){g=AA(g),GA(A,{name:I=gA(I),fromWireType:function(A){return A},toWireType:function(A,I){if("number"!=typeof I&&"boolean"!=typeof I)throw new TypeError(\'Cannot convert "\'+jA(I)+\'" to \'+this.name);return I},argPackAdvance:8,readValueFromPointer:zA(I,g),ea:null})},h:function(A,I,g,C,B){function Q(A){return A}I=gA(I),-1===B&&(B=4294967295);var E=AA(g);if(0===C){var D=32-8*g;Q=function(A){return A<<D>>>D}}var i=I.includes("unsigned");GA(A,{name:I,fromWireType:Q,toWireType:function(A,g){if("number"!=typeof g&&"boolean"!=typeof g)throw new TypeError(\'Cannot convert "\'+jA(g)+\'" to \'+this.name);if(g<C||g>B)throw new TypeError(\'Passing a number "\'+jA(g)+\'" from JS side to C/C++ side to an argument of type "\'+I+\'", which is outside the valid range [\'+C+", "+B+"]!");return i?g>>>0:0|g},argPackAdvance:8,readValueFromPointer:vA(I,E,0!==C),ea:null})},f:function(A,I,g){function C(A){var I=n;return new B(Y,I[(A>>=2)+1],I[A])}var B=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][I];GA(A,{name:g=gA(g),fromWireType:C,argPackAdvance:8,readValueFromPointer:C},{xa:!0})},u:function(A,I){var g="std::string"===(I=gA(I));GA(A,{name:I,fromWireType:function(A){var I=n[A>>2];if(g)for(var C=A+4,B=0;B<=I;++B){var Q=A+4+B;if(B==I||0==K[Q]){if(C=C?k(K,C,Q-C):"",void 0===E)var E=C;else E+=String.fromCharCode(0),E+=C;C=Q+1}}else{for(E=Array(I),B=0;B<I;++B)E[B]=String.fromCharCode(K[A+4+B]);E=E.join("")}return UI(A),E},toWireType:function(A,I){I instanceof ArrayBuffer&&(I=new Uint8Array(I));var C="string"==typeof I;C||I instanceof Uint8Array||I instanceof Uint8ClampedArray||I instanceof Int8Array||wA("Cannot pass non-string to std::string");var B=(g&&C?function(){for(var A=0,g=0;g<I.length;++g){var C=I.charCodeAt(g);55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&I.charCodeAt(++g)),127>=C?++A:A=2047>=C?A+2:65535>=C?A+3:A+4}return A}:function(){return I.length})(),Q=RI(4+B+1);if(n[Q>>2]=B,g&&C)!function(A,I,g){var C=K;if(0<g){g=I+g-1;for(var B=0;B<A.length;++B){var Q=A.charCodeAt(B);if(55296<=Q&&57343>=Q&&(Q=65536+((1023&Q)<<10)|1023&A.charCodeAt(++B)),127>=Q){if(I>=g)break;C[I++]=Q}else{if(2047>=Q){if(I+1>=g)break;C[I++]=192|Q>>6}else{if(65535>=Q){if(I+2>=g)break;C[I++]=224|Q>>12}else{if(I+3>=g)break;C[I++]=240|Q>>18,C[I++]=128|Q>>12&63}C[I++]=128|Q>>6&63}C[I++]=128|63&Q}}C[I]=0}}(I,Q+4,B+1);else if(C)for(C=0;C<B;++C){var E=I.charCodeAt(C);255<E&&(UI(Q),wA("String has UTF-16 code units that do not fit in 8 bits")),K[Q+4+C]=E}else for(C=0;C<B;++C)K[Q+4+C]=I[C];return null!==A&&A.push(UI,Q),Q},argPackAdvance:8,readValueFromPointer:ZA,ea:function(A){UI(A)}})},p:function(A,I,g){if(g=gA(g),2===I)var C=r,B=d,Q=V,E=function(){return l},D=1;else 4===I&&(C=T,B=f,Q=W,E=function(){return n},D=2);GA(A,{name:g,fromWireType:function(A){for(var g,B=n[A>>2],Q=E(),i=A+4,o=0;o<=B;++o){var w=A+4+o*I;o!=B&&0!=Q[w>>D]||(i=C(i,w-i),void 0===g?g=i:(g+=String.fromCharCode(0),g+=i),i=w+I)}return UI(A),g},toWireType:function(A,C){"string"!=typeof C&&wA("Cannot pass non-string to C++ string type "+g);var E=Q(C),i=RI(4+E+I);return n[i>>2]=E>>D,B(C,i+4,E+I),null!==A&&A.push(UI,i),i},argPackAdvance:8,readValueFromPointer:ZA,ea:function(A){UI(A)}})},I:function(A,I){GA(A,{za:!0,name:I=gA(I),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},k:function(A,I,g){A=PA(A),I=_A(I,"emval::as");var C=[],B=pA(C);return L[g>>2]=B,I.toWireType(C,A)},y:function(A,I,g,C){A=PA(A),g=$A(I,g);for(var B=Array(I),Q=0;Q<I;++Q){var E=g[Q];B[Q]=E.readValueFromPointer(C),C+=E.argPackAdvance}return pA(A=A.apply(void 0,B))},v:function(A,I,g,C,B){A=gI[A],I=PA(I),g=II(g);var Q=[];return L[C>>2]=pA(Q),A(I,g,Q,B)},J:function(A,I,g,C){(A=gI[A])(I=PA(I),g=II(g),null,C)},a:uA,l:function(A){return 0===A?pA(CI()):(A=II(A),pA(CI()[A]))},q:function(A,I){for(var g=(I=$A(A,I))[0],C=g.name+"_$"+I.slice(1).map((function(A){return A.name})).join("_")+"$",B=["retType"],Q=[g],E="",D=0;D<A-1;++D)E+=(0!==D?", ":"")+"arg"+D,B.push("argType"+D),Q.push(I[1+D]);C="return function "+EA("methodCaller_"+C)+"(handle, name, destructors, args) {\\n";var i=0;for(D=0;D<A-1;++D)C+="    var arg"+D+" = argType"+D+".readValueFromPointer(args"+(i?"+"+i:"")+");\\n",i+=I[D+1].argPackAdvance;for(C+="    var rv = handle[name]("+E+");\\n",D=0;D<A-1;++D)I[D+1].deleteObject&&(C+="    argType"+D+".deleteObject(arg"+D+");\\n");return g.za||(C+="    return retType.toWireType(destructors, rv);\\n"),B.push(C+"};\\n"),function(A){var I=gI.length;return gI.push(A),I}(A=XA(B).apply(null,Q))},j:function(A,I){return pA((A=PA(A))[I=PA(I)])},g:function(A){4<A&&(OA[A].qa+=1)},m:function(A,I){return(A=PA(A))instanceof(I=PA(I))},M:function(A){return"number"==typeof(A=PA(A))},L:function(A){return"string"==typeof(A=PA(A))},x:function(){return pA([])},r:function(A){return pA(II(A))},w:function(){return pA({})},i:function(A){qA(OA[A].value),uA(A)},n:function(A,I,g){A=PA(A),I=PA(I),g=PA(g),A[I]=g},d:function(A,I){return pA(A=(A=_A(A,"_emval_take_value")).readValueFromPointer(I))},o:function(){j()},C:function(A,I,g){K.copyWithin(A,I,I+g)},D:function(A){var I=K.length;if(2147483648<(A>>>=0))return!1;for(var g=1;4>=g;g*=2){var C=I*(1+.2/g);C=Math.min(C,A+100663296),0<(C=Math.max(A,C))%65536&&(C+=65536-C%65536);A:{try{J.grow(Math.min(2147483648,C)-Y.byteLength+65535>>>16),b();var B=1;break A}catch(A){}B=void 0}if(B)return!0}return!1},E:function(){return 0},z:function(){},s:function(A,I,g,C){for(var B=0,Q=0;Q<g;Q++){for(var E=L[I+8*Q>>2],D=L[I+(8*Q+4)>>2],i=0;i<D;i++){var o=K[E+i],w=BI[A];0===o||10===o?((1===A?y:s)(k(w,0)),w.length=0):w.push(o)}B+=D}return L[C>>2]=B,0},B:function(){}},NI=function(){function A(A){g.asm=A.exports,J=g.asm.N,b(),e=g.asm.Q,X.unshift(g.asm.O),O--,g.monitorRunDependencies&&g.monitorRunDependencies(O),0==O&&(null!==u&&(clearInterval(u),u=null),p&&(A=p,p=null,A()))}var I={a:wI};if(O++,g.monitorRunDependencies&&g.monitorRunDependencies(O),g.instantiateWasm)try{return g.instantiateWasm(I,A)}catch(A){return s("Module.instantiateWasm callback failed with error: "+A),!1}return I=function(A){var I=z;try{A:{try{if(I==z&&U){var g=new Uint8Array(U);break A}var C=oI(I);if(C){g=C;break A}if(i){g=i(I);break A}throw"sync fetching of the wasm failed: you can preload it to Module[\'wasmBinary\'] manually, or emcc.py will do that for you when generating HTML (but not JS)"}catch(A){j(A)}g=void 0}var B=new WebAssembly.Module(g),Q=new WebAssembly.Instance(B,A)}catch(I){throw A=I.toString(),s("failed to compile wasm module: "+A),(A.includes("imported Memory")||A.includes("memory import"))&&s("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."),I}return[Q,B]}(I),A(I[0]),g.asm}();g.___wasm_call_ctors=NI.O;var RI=g._malloc=NI.P,FI=g.___getTypeName=NI.R;g.___embind_register_native_and_builtin_types=NI.S;var GI,UI=g._free=NI.T;function yI(){function A(){if(!GI&&(GI=!0,g.calledRun=!0,!M)){if(_(X),C(g),g.onRuntimeInitialized&&g.onRuntimeInitialized(),g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var A=g.postRun.shift();m.unshift(A)}_(m)}}if(!(0<O)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)x();_(q),0<O||(g.setStatus?(g.setStatus("Running..."),setTimeout((function(){setTimeout((function(){g.setStatus("")}),1),A()}),1)):A())}}if(g.dynCall_viiiiij=NI.U,g.dynCall_jiji=NI.V,p=function A(){GI||yI(),GI||(p=A)},g.run=yI,g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();return yI(),I}}();"object"==typeof exports&&"object"==typeof module?module.exports=Module:"function"==typeof define&&define.amd?define([],(function(){return Module})):"object"==typeof exports&&(exports.Module=Module);',
            'class ElementaryAudioWorkletProcessor extends AudioWorkletProcessor{constructor(e){super(e);const t=e.numberOfInputs,s=e.outputChannelCount.reduce(((e,t)=>e+t),0);this._module=Module(),this._native=new this._module.ElementaryAudioProcessor(t,s),this._native.prepare(sampleRate,512);if(e.hasOwnProperty("processorOptions")&&"object"==typeof e.processorOptions&&null!==e.processorOptions){const{virtualFileSystem:t,...s}=e.processorOptions;if("object"==typeof t&&null!==t&&Object.keys(t).length>0)try{this._native.updateResourceMap(t)}catch(e){console.error("Failed to load virtual file system")}}this._native.commitUpdates(),this.port.onmessage=e=>{const[t,...s]=e.data;switch(t){case"createNode":return this._native.createNode(...s);case"deleteNode":return this._native.deleteNode(...s);case"appendChild":return this._native.appendChild(...s);case"setProperty":return this._native.setProperty(...s);case"commitUpdates":return this._native.commitUpdates(...s);case"updateResourceMap":return this._native.updateResourceMap(...s);case"processQueuedEvents":return this._native.processQueuedEvents(((e,t)=>{this.port.postMessage([e,t])}))}},this.port.postMessage(["load",{sampleRate:sampleRate,blockSize:128,numInputChannels:2,numOutputChannels:2}])}process(e,t,s){if(e.length>0){let t=0;for(let s=0;s<e.length;++s)for(let o=0;o<e[s].length;++o){const r=this._native.getInputBufferData(t++);for(let t=0;t<e[s][o].length;++t)r[t]=e[s][o][t]}}const o=t.length>0&&t[0].length>0?t[0][0].length:0;if(this._native.process(o),t.length>0){let e=0;for(let s=0;s<t.length;++s)for(let o=0;o<t[s].length;++o){const r=this._native.getOutputBufferData(e++);for(let e=0;e<t[s][o].length;++e)t[s][o][e]=r[e]}}return!0}}registerProcessor("ElementaryAudioWorkletProcessor",ElementaryAudioWorkletProcessor);'
        ], {
            type: "text/javascript"
        }), B = URL.createObjectURL(C);
        return await A19.audioWorklet.addModule(B), this.__worklet = new AudioWorkletNode(A19, "ElementaryAudioWorkletProcessor", Object.assign({
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [
                2
            ]
        }, g10)), this.__renderer = {
            nodesAdded: 0,
            nodesRemoved: 0,
            edgesAdded: 0,
            propsWritten: 0,
            renderContext: null,
            createNode: (A, I)=>{
                this.__renderer.nodesAdded++, this.__worklet.port.postMessage([
                    "createNode",
                    A,
                    I
                ]);
            },
            deleteNode: (A)=>{
                this.__renderer.nodesRemoved++, this.__worklet.port.postMessage([
                    "deleteNode",
                    A
                ]);
            },
            appendChild: (A, I)=>{
                this.__renderer.edgesAdded++, this.__worklet.port.postMessage([
                    "appendChild",
                    A,
                    I
                ]);
            },
            setProperty: (A, I, g)=>{
                this.__renderer.propsWritten++, this.__worklet.port.postMessage([
                    "setProperty",
                    A,
                    I,
                    g
                ]);
            },
            commitUpdates: ()=>{
                this.__worklet.port.postMessage([
                    "commitUpdates"
                ]);
            }
        }, this.__worklet.port.onmessage = (A)=>{
            const [I, g] = A.data;
            "load" === I && (this.__renderer.renderContext = {
                sampleRate: g.sampleRate,
                blockSize: g.blockSize,
                numInputs: g.numInputChannels,
                numOutputs: g.numOutputs
            }), this.emit(I, g);
        }, this.__timer = window.setInterval(()=>{
            this.__worklet.port.postMessage([
                "processQueuedEvents"
            ]);
        }, 8), this.__worklet;
    }
    render(...A) {
        const I = performance.now();
        this.__renderer.nodesAdded = 0, this.__renderer.nodesRemoved = 0, this.__renderer.edgesAdded = 0, this.__renderer.propsWritten = 0, Rg(this.__renderer, ...A);
        const g = performance.now();
        return {
            nodesAdded: this.__renderer.nodesAdded,
            edgesAdded: this.__renderer.edgesAdded,
            propsWritten: this.__renderer.propsWritten,
            elapsedTimeMs: g - I
        };
    }
    updateVirtualFileSystem(A21) {
        I1("object" == typeof A21 && null !== A21, "Virtual file system must be an object mapping string type keys to Array|Float32Array type values"), Object.keys(A21).forEach(function(g) {
            const C = "object" == typeof A21[g] && (Array.isArray(A21[g]) || A21[g] instanceof Float32Array);
            I1(C, "Virtual file system must be an object mapping string type keys to Array|Float32Array type values");
        }), this.__worklet.port.postMessage([
            "updateResourceMap",
            A21
        ]);
    }
}
var sC = new wC;
const NC = Gg(Vg);

},{"process":"lDnB8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"ciiiV":[function(require,module,exports) {
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

},{}],"9lK8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var _elementary = require("@nick-thompson/elementary");
// A size 8 Hadamard matrix constructed using Numpy and Scipy.
//
// The Hadamard matrix satisfies the property H*H^T = nI, where n is the size
// of the matrix, I the identity, and H^T the transpose of H. Therefore, we have
// orthogonality and stability in the feedback path if we scale according to (1 / n)
// along the diagonal, which we do internally by multiplying each matrix element
// by Math.sqrt(1 / n), which yields the identity as above.
//
// @see https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.linalg.hadamard.html
// @see https://nhigham.com/2020/04/10/what-is-a-hadamard-matrix/
const H8 = [
    [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    [
        1,
        -1,
        1,
        -1,
        1,
        -1,
        1,
        -1
    ],
    [
        1,
        1,
        -1,
        -1,
        1,
        1,
        -1,
        -1
    ],
    [
        1,
        -1,
        -1,
        1,
        1,
        -1,
        -1,
        1
    ],
    [
        1,
        1,
        1,
        1,
        -1,
        -1,
        -1,
        -1
    ],
    [
        1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1
    ],
    [
        1,
        1,
        -1,
        -1,
        -1,
        -1,
        1,
        1
    ],
    [
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1
    ]
];
// A diffusion step expecting exactly 8 input channels with
// a maximum diffusion time of 500ms
function diffuse(size, ...ins) {
    const len = ins.length;
    const scale = Math.sqrt(1 / len);
    _invariantDefault.default(len === 8, "Invalid diffusion step!");
    _invariantDefault.default(typeof size === 'number', "Diffusion step size must be a number");
    const dels = ins.map(function(input, i) {
        const lineSize = size * ((i + 1) / len);
        return _elementary.el.delay({
            size: size * 2
        }, lineSize, 0, input);
    });
    return H8.map(function(row, i) {
        return _elementary.el.add(...row.map(function(col, j) {
            return _elementary.el.mul(col * scale, dels[j]);
        }));
    });
}
// An eight channel feedback delay network with a one-pole lowpass filter in
// the feedback loop for damping the high frequencies faster than the low.
//
// @param {string} name for the tap structures
// @param {el.const} size in the range [0, 1]
// @param {el.const} decay in the range [0, 1]
// @param {el.const} modDepth in the range [0, 1]
// @param {...core.Node} ...ins eight input channels
function dampFDN(name, size, decay, modDepth, ...ins) {
    const len = ins.length;
    const scale = Math.sqrt(1 / len);
    const md = _elementary.el.mul(modDepth, 0.02);
    if (len !== 8) throw new Error("Invalid FDN step!");
    // The unity-gain one pole lowpass here is tuned to taste along
    // the range [0.001, 0.5]. Towards the top of the range, we get into the region
    // of killing the decay time too quickly. Towards the bottom, not much damping.
    const dels = ins.map(function(input, i) {
        return _elementary.el.add(input, _elementary.el.mul(decay, _elementary.el.smooth(0.105, _elementary.el.tapIn({
            name: `${name}:fdn${i}`
        }))));
    });
    let mix = H8.map(function(row, i) {
        return _elementary.el.add(...row.map(function(col, j) {
            return _elementary.el.mul(col * scale, dels[j]);
        }));
    });
    return mix.map(function(mm, i) {
        const modulate = (x, rate, amt)=>_elementary.el.add(x, _elementary.el.mul(amt, _elementary.el.cycle(rate)))
        ;
        const ms2samps = (ms)=>44100 * (ms / 1000)
        ;
        // Each delay line here will be ((i + 1) * 17)ms long, multiplied by [1, 4]
        // depending on the size parameter. So at size = 0, delay lines are 17, 34, 51, ...,
        // and at size = 1 we have 68, 136, ..., all in ms here.
        const delaySize = _elementary.el.mul(_elementary.el.add(1, _elementary.el.mul(3, size)), ms2samps((i + 1) * 17));
        // Then we modulate the read position for each tap to add some chorus in the
        // delay network.
        const readPos = modulate(delaySize, _elementary.el.add(0.1, _elementary.el.mul(i, md)), ms2samps(2.5));
        return _elementary.el.tapOut({
            name: `${name}:fdn${i}`
        }, _elementary.el.delay({
            size: ms2samps(750)
        }, readPos, 0, mm));
    });
}
function srvb(props, size, decay, modDepth, xl, xr) {
    _invariantDefault.default(typeof props === 'object', "Missing props object");
    _invariantDefault.default(props.hasOwnProperty('name') && typeof props.name === 'string', "Must supply a name prop of type string");
    _invariantDefault.default(typeof size === 'number' || typeof size === 'object', "size param must be a number or a node");
    _invariantDefault.default(typeof decay === 'number' || typeof decay === 'object', "decay param must be a number or a node");
    _invariantDefault.default(typeof modDepth === 'number' || typeof modDepth === 'object', "modDepth param must be a number or a node");
    _invariantDefault.default(typeof xl === 'number' || typeof xl === 'object', "left input must be a number or a node");
    _invariantDefault.default(typeof xr === 'number' || typeof xr === 'object', "right input must be a number or a node");
    const name = props.name;
    // Upmix to eight channels
    const mid = _elementary.el.mul(0.5, _elementary.el.add(xl, xr));
    const side = _elementary.el.mul(0.5, _elementary.el.sub(xl, xr));
    const four = [
        xl,
        xr,
        mid,
        side
    ];
    const eight = [
        ...four,
        ...four.map((x)=>_elementary.el.mul(-1, x)
        )
    ];
    // Diffusion
    const ms2samps = (ms)=>44100 * (ms / 1000)
    ;
    const d1 = diffuse(ms2samps(43), ...eight);
    const d2 = diffuse(ms2samps(97), ...d1);
    const d3 = diffuse(ms2samps(117), ...d2);
    // Reverb network
    const d4 = dampFDN(`${name}:d4`, size, 0.004, modDepth, ...d3);
    const r0 = dampFDN(`${name}:r0`, size, decay, modDepth, ...d4);
    // Downmix
    //
    // It's important here to interleave the output channels because the way that
    // the multi-channel delay lines are written above tends to correlate the delay
    // length with the current index in the 8-channel array. That means the smaller
    // the index, the shorter the delay line. The mix matrix will mostly address this,
    // but if you sum index 0-3 into the left and 4-7 into the right you can definitely
    // hear the energy in the left channel build before the energy in the right.
    const yl = _elementary.el.mul(0.25, _elementary.el.add(r0[0], r0[2], r0[4], r0[6]));
    const yr = _elementary.el.mul(0.25, _elementary.el.add(r0[1], r0[3], r0[5], r0[7]));
    return [
        yl,
        yr
    ];
}
exports.default = srvb;

},{"invariant":"Xxs2W","@nick-thompson/elementary":"20VCu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"Xxs2W":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if (format === undefined) throw new Error('invariant requires an error message argument');
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;

},{}],"20VCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementaryNodeRenderer", ()=>QC
);
parcelHelpers.export(exports, "ElementaryPerfRenderer", ()=>RC
);
parcelHelpers.export(exports, "ElementaryPluginRenderer", ()=>DC
);
parcelHelpers.export(exports, "ElementaryWebAudioRenderer", ()=>FC
);
parcelHelpers.export(exports, "candyWrap", ()=>Gg
);
parcelHelpers.export(exports, "el", ()=>tC
);
parcelHelpers.export(exports, "stdlib", ()=>Vg
);
parcelHelpers.export(exports, "sugar", ()=>ag
);
var process = require("process");
var global = arguments[3];
var A1 = {
    sin: "sin",
    cos: "cos",
    tan: "tan",
    tanh: "tanh",
    asinh: "asinh",
    ln: "ln",
    log: "log",
    log2: "log2",
    ceil: "ceil",
    floor: "floor",
    sqrt: "sqrt",
    exp: "exp",
    abs: "abs",
    le: "le",
    leq: "leq",
    ge: "ge",
    geq: "geq",
    pow: "pow",
    add: "add",
    sub: "sub",
    mul: "mul",
    div: "div",
    mod: "mod",
    min: "min",
    max: "max",
    root: "root",
    in: "in",
    sr: "sr",
    time: "time",
    const: "const",
    phasor: "phasor",
    rand: "rand",
    counter: "counter",
    latch: "latch",
    sample: "sample",
    table: "table",
    seq: "seq",
    delay: "delay",
    z: "z",
    metro: "metro",
    pole: "pole",
    env: "env",
    biquad: "biquad",
    convolve: "convolve",
    meter: "meter",
    scope: "scope",
    tapIn: "tapIn",
    tapOut: "tapOut"
}, I1 = function(A, I, g, C, B, Q, E, i) {
    if (!A) {
        var o;
        if (void 0 === I) o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var D = [
                g,
                C,
                B,
                Q,
                E,
                i
            ], w = 0;
            (o = new Error(I.replace(/%s/g, function() {
                return D[w++];
            }))).name = "Invariant Violation";
        }
        throw o.framesToPop = 1, o;
    }
}, g1 = function(A, I, g, C) {
    var B = g ? g.call(C, A, I) : void 0;
    if (void 0 !== B) return !!B;
    if (A === I) return !0;
    if ("object" != typeof A || !A || "object" != typeof I || !I) return !1;
    var Q = Object.keys(A), E = Object.keys(I);
    if (Q.length !== E.length) return !1;
    for(var i = Object.prototype.hasOwnProperty.bind(I), o = 0; o < Q.length; o++){
        var D = Q[o];
        if (!i(D)) return !1;
        var w = A[D], s = I[D];
        if (!1 === (B = g ? g.call(C, w, s, D) : void 0) || void 0 === B && w !== s) return !1;
    }
    return !0;
};
var C1 = function() {
    this.__data__ = [], this.size = 0;
};
var B1 = function(A, I) {
    return A === I || A != A && I != I;
};
var Q1 = function(A, I) {
    for(var g = A.length; g--;)if (B1(A[g][0], I)) return g;
    return -1;
}, E1 = Array.prototype.splice;
var i1 = function(A) {
    var I = this.__data__, g = Q1(I, A);
    return !(g < 0) && (g == I.length - 1 ? I.pop() : E1.call(I, g, 1), --this.size, !0);
};
var o1 = function(A) {
    var I = this.__data__, g = Q1(I, A);
    return g < 0 ? void 0 : I[g][1];
};
var D1 = function(A) {
    return Q1(this.__data__, A) > -1;
};
var w1 = function(A, I) {
    var g = this.__data__, C = Q1(g, A);
    return C < 0 ? (++this.size, g.push([
        A,
        I
    ])) : g[C][1] = I, this;
};
function s1(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
s1.prototype.clear = C1, s1.prototype.delete = i1, s1.prototype.get = o1, s1.prototype.has = D1, s1.prototype.set = w1;
var R1 = s1;
var N1 = function() {
    this.__data__ = new R1, this.size = 0;
};
var F1 = function(A) {
    var I = this.__data__, g = I.delete(A);
    return this.size = I.size, g;
};
var t1 = function(A) {
    return this.__data__.get(A);
};
var a1 = function(A) {
    return this.__data__.has(A);
}, G1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
};
function n1(A) {
    var I = {
        exports: {
        }
    };
    return A(I, I.exports), I.exports;
}
var y1 = "object" == typeof G1 && G1 && G1.Object === Object && G1, e = "object" == typeof self && self && self.Object === Object && self, c = y1 || e || Function("return this")(), h = c.Symbol, U = Object.prototype, r = U.hasOwnProperty, M = U.toString, J = h ? h.toStringTag : void 0;
var l = function(A) {
    var I = r.call(A, J), g = A[J];
    try {
        A[J] = void 0;
        var C = !0;
    } catch (A2) {
    }
    var B = M.call(A);
    return C && (I ? A[J] = g : delete A[J]), B;
}, Y = Object.prototype.toString;
var k = function(A) {
    return Y.call(A);
}, S = h ? h.toStringTag : void 0;
var K = function(A) {
    return null == A ? void 0 === A ? "[object Undefined]" : "[object Null]" : S && S in Object(A) ? l(A) : k(A);
};
var d = function(A) {
    var I = typeof A;
    return null != A && ("object" == I || "function" == I);
};
var L, f = function(A) {
    if (!d(A)) return !1;
    var I = K(A);
    return "[object Function]" == I || "[object GeneratorFunction]" == I || "[object AsyncFunction]" == I || "[object Proxy]" == I;
}, H = c["__core-js_shared__"], u = (L = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + L : "";
var Z = function(A) {
    return !!u && u in A;
}, b = Function.prototype.toString;
var V = function(A) {
    if (null != A) {
        try {
            return b.call(A);
        } catch (A3) {
        }
        try {
            return A + "";
        } catch (A) {
        }
    }
    return "";
}, W = /^\[object .+?Constructor\]$/, m = Function.prototype, p = Object.prototype, T = m.toString, X = p.hasOwnProperty, q = RegExp("^" + T.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var O = function(A) {
    return !(!d(A) || Z(A)) && (f(A) ? q : W).test(V(A));
};
var j = function(A, I) {
    return null == A ? void 0 : A[I];
};
var x = function(A, I) {
    var g = j(A, I);
    return O(g) ? g : void 0;
}, v = x(c, "Map"), z = x(Object, "create");
var P = function() {
    this.__data__ = z ? z(null) : {
    }, this.size = 0;
};
var _ = function(A) {
    var I = this.has(A) && delete this.__data__[A];
    return this.size -= I ? 1 : 0, I;
}, $ = Object.prototype.hasOwnProperty;
var AA = function(A) {
    var I = this.__data__;
    if (z) {
        var g = I[A];
        return "__lodash_hash_undefined__" === g ? void 0 : g;
    }
    return $.call(I, A) ? I[A] : void 0;
}, IA = Object.prototype.hasOwnProperty;
var gA = function(A) {
    var I = this.__data__;
    return z ? void 0 !== I[A] : IA.call(I, A);
};
var CA = function(A, I) {
    var g = this.__data__;
    return this.size += this.has(A) ? 0 : 1, g[A] = z && void 0 === I ? "__lodash_hash_undefined__" : I, this;
};
function BA(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
BA.prototype.clear = P, BA.prototype.delete = _, BA.prototype.get = AA, BA.prototype.has = gA, BA.prototype.set = CA;
var QA = BA;
var EA = function() {
    this.size = 0, this.__data__ = {
        hash: new QA,
        map: new (v || R1),
        string: new QA
    };
};
var iA = function(A) {
    var I = typeof A;
    return "string" == I || "number" == I || "symbol" == I || "boolean" == I ? "__proto__" !== A : null === A;
};
var oA = function(A, I) {
    var g = A.__data__;
    return iA(I) ? g["string" == typeof I ? "string" : "hash"] : g.map;
};
var DA = function(A) {
    var I = oA(this, A).delete(A);
    return this.size -= I ? 1 : 0, I;
};
var wA = function(A) {
    return oA(this, A).get(A);
};
var sA = function(A) {
    return oA(this, A).has(A);
};
var RA = function(A, I) {
    var g = oA(this, A), C = g.size;
    return g.set(A, I), this.size += g.size == C ? 0 : 1, this;
};
function NA(A) {
    var I = -1, g = null == A ? 0 : A.length;
    for(this.clear(); ++I < g;){
        var C = A[I];
        this.set(C[0], C[1]);
    }
}
NA.prototype.clear = EA, NA.prototype.delete = DA, NA.prototype.get = wA, NA.prototype.has = sA, NA.prototype.set = RA;
var FA = NA;
var tA = function(A, I) {
    var g = this.__data__;
    if (g instanceof R1) {
        var C = g.__data__;
        if (!v || C.length < 199) return C.push([
            A,
            I
        ]), this.size = ++g.size, this;
        g = this.__data__ = new FA(C);
    }
    return g.set(A, I), this.size = g.size, this;
};
function aA(A) {
    var I = this.__data__ = new R1(A);
    this.size = I.size;
}
aA.prototype.clear = N1, aA.prototype.delete = F1, aA.prototype.get = t1, aA.prototype.has = a1, aA.prototype.set = tA;
var GA = aA;
var nA = function(A, I) {
    for(var g = -1, C = null == A ? 0 : A.length; ++g < C && !1 !== I(A[g], g, A););
    return A;
}, yA = function() {
    try {
        var A = x(Object, "defineProperty");
        return A({
        }, "", {
        }), A;
    } catch (A) {
    }
}();
var eA = function(A, I, g) {
    "__proto__" == I && yA ? yA(A, I, {
        configurable: !0,
        enumerable: !0,
        value: g,
        writable: !0
    }) : A[I] = g;
}, cA = Object.prototype.hasOwnProperty;
var hA = function(A, I, g) {
    var C = A[I];
    cA.call(A, I) && B1(C, g) && (void 0 !== g || I in A) || eA(A, I, g);
};
var UA = function(A, I, g, C) {
    var B = !g;
    g || (g = {
    });
    for(var Q = -1, E = I.length; ++Q < E;){
        var i = I[Q], o = C ? C(g[i], A[i], i, g, A) : void 0;
        void 0 === o && (o = A[i]), B ? eA(g, i, o) : hA(g, i, o);
    }
    return g;
};
var rA = function(A, I) {
    for(var g = -1, C = Array(A); ++g < A;)C[g] = I(g);
    return C;
};
var MA = function(A) {
    return null != A && "object" == typeof A;
};
var JA = function(A) {
    return MA(A) && "[object Arguments]" == K(A);
}, lA = Object.prototype, YA = lA.hasOwnProperty, kA = lA.propertyIsEnumerable, SA = JA(function() {
    return arguments;
}()) ? JA : function(A) {
    return MA(A) && YA.call(A, "callee") && !kA.call(A, "callee");
}, KA = Array.isArray;
var dA = function() {
    return !1;
}, LA = n1(function(A, I) {
    var g = I && !I.nodeType && I, C = g && A && !A.nodeType && A, B = C && C.exports === g ? c.Buffer : void 0, Q = (B ? B.isBuffer : void 0) || dA;
    A.exports = Q;
}), fA = /^(?:0|[1-9]\d*)$/;
var HA = function(A, I) {
    var g = typeof A;
    return !!(I = null == I ? 9007199254740991 : I) && ("number" == g || "symbol" != g && fA.test(A)) && A > -1 && A % 1 == 0 && A < I;
};
var uA = function(A) {
    return "number" == typeof A && A > -1 && A % 1 == 0 && A <= 9007199254740991;
}, ZA = {
};
ZA["[object Float32Array]"] = ZA["[object Float64Array]"] = ZA["[object Int8Array]"] = ZA["[object Int16Array]"] = ZA["[object Int32Array]"] = ZA["[object Uint8Array]"] = ZA["[object Uint8ClampedArray]"] = ZA["[object Uint16Array]"] = ZA["[object Uint32Array]"] = !0, ZA["[object Arguments]"] = ZA["[object Array]"] = ZA["[object ArrayBuffer]"] = ZA["[object Boolean]"] = ZA["[object DataView]"] = ZA["[object Date]"] = ZA["[object Error]"] = ZA["[object Function]"] = ZA["[object Map]"] = ZA["[object Number]"] = ZA["[object Object]"] = ZA["[object RegExp]"] = ZA["[object Set]"] = ZA["[object String]"] = ZA["[object WeakMap]"] = !1;
var bA = function(A) {
    return MA(A) && uA(A.length) && !!ZA[K(A)];
};
var VA = function(A) {
    return function(I) {
        return A(I);
    };
}, WA = n1(function(A4, I) {
    var g = I && !I.nodeType && I, C = g && A4 && !A4.nodeType && A4, B = C && C.exports === g && y1.process, Q = function() {
        try {
            var A = C && C.require && C.require("util").types;
            return A || B && B.binding && B.binding("util");
        } catch (A) {
        }
    }();
    A4.exports = Q;
}), mA = WA && WA.isTypedArray, pA = mA ? VA(mA) : bA, TA = Object.prototype.hasOwnProperty;
var XA = function(A, I) {
    var g = KA(A), C = !g && SA(A), B = !g && !C && LA(A), Q = !g && !C && !B && pA(A), E = g || C || B || Q, i = E ? rA(A.length, String) : [], o = i.length;
    for(var D in A)!I && !TA.call(A, D) || E && ("length" == D || B && ("offset" == D || "parent" == D) || Q && ("buffer" == D || "byteLength" == D || "byteOffset" == D) || HA(D, o)) || i.push(D);
    return i;
}, qA = Object.prototype;
var OA = function(A) {
    var I = A && A.constructor;
    return A === ("function" == typeof I && I.prototype || qA);
};
var jA = function(A, I) {
    return function(g) {
        return A(I(g));
    };
}, xA = jA(Object.keys, Object), vA = Object.prototype.hasOwnProperty;
var zA = function(A) {
    if (!OA(A)) return xA(A);
    var I = [];
    for(var g in Object(A))vA.call(A, g) && "constructor" != g && I.push(g);
    return I;
};
var PA = function(A) {
    return null != A && uA(A.length) && !f(A);
};
var _A = function(A) {
    return PA(A) ? XA(A) : zA(A);
};
var $A = function(A, I) {
    return A && UA(I, _A(I), A);
};
var AI = function(A) {
    var I = [];
    if (null != A) for(var g in Object(A))I.push(g);
    return I;
}, II = Object.prototype.hasOwnProperty;
var gI = function(A) {
    if (!d(A)) return AI(A);
    var I = OA(A), g = [];
    for(var C in A)("constructor" != C || !I && II.call(A, C)) && g.push(C);
    return g;
};
var CI = function(A) {
    return PA(A) ? XA(A, !0) : gI(A);
};
var BI = function(A, I) {
    return A && UA(I, CI(I), A);
}, QI = n1(function(A5, I2) {
    var g2 = I2 && !I2.nodeType && I2, C2 = g2 && A5 && !A5.nodeType && A5, B = C2 && C2.exports === g2 ? c.Buffer : void 0, Q = B ? B.allocUnsafe : void 0;
    A5.exports = function(A, I) {
        if (I) return A.slice();
        var g = A.length, C = Q ? Q(g) : new A.constructor(g);
        return A.copy(C), C;
    };
});
var EI = function(A, I) {
    var g = -1, C = A.length;
    for(I || (I = Array(C)); ++g < C;)I[g] = A[g];
    return I;
};
var iI = function(A, I) {
    for(var g = -1, C = null == A ? 0 : A.length, B = 0, Q = []; ++g < C;){
        var E = A[g];
        I(E, g, A) && (Q[B++] = E);
    }
    return Q;
};
var oI = function() {
    return [];
}, DI = Object.prototype.propertyIsEnumerable, wI = Object.getOwnPropertySymbols, sI = wI ? function(A) {
    return null == A ? [] : (A = Object(A), iI(wI(A), function(I) {
        return DI.call(A, I);
    }));
} : oI;
var RI = function(A, I) {
    return UA(A, sI(A), I);
};
var NI = function(A, I) {
    for(var g = -1, C = I.length, B = A.length; ++g < C;)A[B + g] = I[g];
    return A;
}, FI = jA(Object.getPrototypeOf, Object), tI = Object.getOwnPropertySymbols ? function(A) {
    for(var I = []; A;)NI(I, sI(A)), A = FI(A);
    return I;
} : oI;
var aI = function(A, I) {
    return UA(A, tI(A), I);
};
var GI = function(A, I, g) {
    var C = I(A);
    return KA(A) ? C : NI(C, g(A));
};
var nI = function(A) {
    return GI(A, _A, sI);
};
var yI = function(A) {
    return GI(A, CI, tI);
}, eI = x(c, "DataView"), cI = x(c, "Promise"), hI = x(c, "Set"), UI = x(c, "WeakMap"), rI = V(eI), MI = V(v), JI = V(cI), lI = V(hI), YI = V(UI), kI = K;
(eI && "[object DataView]" != kI(new eI(new ArrayBuffer(1))) || v && "[object Map]" != kI(new v) || cI && "[object Promise]" != kI(cI.resolve()) || hI && "[object Set]" != kI(new hI) || UI && "[object WeakMap]" != kI(new UI)) && (kI = function(A) {
    var I = K(A), g = "[object Object]" == I ? A.constructor : void 0, C = g ? V(g) : "";
    if (C) switch(C){
        case rI:
            return "[object DataView]";
        case MI:
            return "[object Map]";
        case JI:
            return "[object Promise]";
        case lI:
            return "[object Set]";
        case YI:
            return "[object WeakMap]";
    }
    return I;
});
var SI = kI, KI = Object.prototype.hasOwnProperty;
var dI = function(A) {
    var I = A.length, g = new A.constructor(I);
    return I && "string" == typeof A[0] && KI.call(A, "index") && (g.index = A.index, g.input = A.input), g;
}, LI = c.Uint8Array;
var fI = function(A) {
    var I = new A.constructor(A.byteLength);
    return new LI(I).set(new LI(A)), I;
};
var HI = function(A, I) {
    var g = I ? fI(A.buffer) : A.buffer;
    return new A.constructor(g, A.byteOffset, A.byteLength);
}, uI = /\w*$/;
var ZI = function(A) {
    var I = new A.constructor(A.source, uI.exec(A));
    return I.lastIndex = A.lastIndex, I;
}, bI = h ? h.prototype : void 0, VI = bI ? bI.valueOf : void 0;
var WI = function(A) {
    return VI ? Object(VI.call(A)) : {
    };
};
var mI = function(A, I) {
    var g = I ? fI(A.buffer) : A.buffer;
    return new A.constructor(g, A.byteOffset, A.length);
};
var pI = function(A, I, g) {
    var C = A.constructor;
    switch(I){
        case "[object ArrayBuffer]":
            return fI(A);
        case "[object Boolean]":
        case "[object Date]":
            return new C(+A);
        case "[object DataView]":
            return HI(A, g);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
            return mI(A, g);
        case "[object Map]":
        case "[object Set]":
            return new C;
        case "[object Number]":
        case "[object String]":
            return new C(A);
        case "[object RegExp]":
            return ZI(A);
        case "[object Symbol]":
            return WI(A);
    }
}, TI = Object.create, XI = function() {
    function A() {
    }
    return function(I) {
        if (!d(I)) return {
        };
        if (TI) return TI(I);
        A.prototype = I;
        var g = new A;
        return A.prototype = void 0, g;
    };
}();
var qI = function(A) {
    return "function" != typeof A.constructor || OA(A) ? {
    } : XI(FI(A));
};
var OI = function(A) {
    return MA(A) && "[object Map]" == SI(A);
}, jI = WA && WA.isMap, xI = jI ? VA(jI) : OI;
var vI = function(A) {
    return MA(A) && "[object Set]" == SI(A);
}, zI = WA && WA.isSet, PI = zI ? VA(zI) : vI, _I = {
};
_I["[object Arguments]"] = _I["[object Array]"] = _I["[object ArrayBuffer]"] = _I["[object DataView]"] = _I["[object Boolean]"] = _I["[object Date]"] = _I["[object Float32Array]"] = _I["[object Float64Array]"] = _I["[object Int8Array]"] = _I["[object Int16Array]"] = _I["[object Int32Array]"] = _I["[object Map]"] = _I["[object Number]"] = _I["[object Object]"] = _I["[object RegExp]"] = _I["[object Set]"] = _I["[object String]"] = _I["[object Symbol]"] = _I["[object Uint8Array]"] = _I["[object Uint8ClampedArray]"] = _I["[object Uint16Array]"] = _I["[object Uint32Array]"] = !0, _I["[object Error]"] = _I["[object Function]"] = _I["[object WeakMap]"] = !1;
var $I = function A(I, g, C, B2, Q2, E) {
    var i, o = 1 & g, D = 2 & g, w = 4 & g;
    if (C && (i = Q2 ? C(I, B2, Q2, E) : C(I)), void 0 !== i) return i;
    if (!d(I)) return I;
    var s = KA(I);
    if (s) {
        if (i = dI(I), !o) return EI(I, i);
    } else {
        var R = SI(I), N = "[object Function]" == R || "[object GeneratorFunction]" == R;
        if (LA(I)) return QI(I, o);
        if ("[object Object]" == R || "[object Arguments]" == R || N && !Q2) {
            if (i = D || N ? {
            } : qI(I), !o) return D ? aI(I, BI(i, I)) : RI(I, $A(i, I));
        } else {
            if (!_I[R]) return Q2 ? I : {
            };
            i = pI(I, R, o);
        }
    }
    E || (E = new GA);
    var F = E.get(I);
    if (F) return F;
    E.set(I, i), PI(I) ? I.forEach(function(B) {
        i.add(A(B, g, C, B, I, E));
    }) : xI(I) && I.forEach(function(B, Q) {
        i.set(Q, A(B, g, C, Q, I, E));
    });
    var t = s ? void 0 : (w ? D ? yI : nI : D ? CI : _A)(I);
    return nA(t || I, function(B, Q) {
        t && (B = I[Q = B]), hA(i, Q, A(B, g, C, Q, I, E));
    }), i;
};
var Ag = function(A) {
    return $I(A, 5);
};
const Ig = Symbol.for("ELEM_NODE"), gg = new Map, Cg = new Map;
function Bg(A, I) {
    if (I <= 0) return A;
    let g = A;
    return g = (g << 5) - g + I, g |= 0, g < 0 ? -2 * g : g;
}
function Qg(A, I) {
    if (0 === I.length) return A;
    let g = A;
    for(let A6 = 0; A6 < I.length; ++A6)g = (g << 5) - g + I.charCodeAt(A6), g |= 0;
    return g < 0 ? -2 * g : g;
}
function Eg(A) {
    let I = A.toString(16);
    for(; I.length < 8;)I = "0" + I;
    return I;
}
function ig(A, g, C) {
    I1("string" == typeof A || "function" == typeof A, `Unexpected Node type ${typeof A}: ${A}`), I1(Array.isArray(C), "A Node must be initialized with a valid children array.");
    return {
        $$typeof: Ig,
        _type: A,
        _props: g,
        _children: C
    };
}
function og(A7, C = g1) {
    I1("function" == typeof A7, "Cannot memoize something that is not a function");
    const B = new Map;
    return function({ props: I , context: g , children: Q  }) {
        for (const [A, g3] of B)if (C(A, I)) return g3;
        const E = A7({
            props: I,
            context: g,
            children: Q
        });
        return B.set(Ag(I), E), E;
    };
}
function Dg(A) {
    return "object" == typeof A && A.hasOwnProperty("$$typeof") && A.$$typeof === Ig;
}
function wg(A8, g, C) {
    if ("number" == typeof g) return wg(A8, ig("const", {
        value: g
    }, []), C);
    if (I1(Dg(g), `Unexpected ${typeof g} passed to core.render: ${g}`), C.has(g)) return Object.assign({
    }, C.get(g));
    if ("function" == typeof g._type) {
        const I = wg(A8, g._type({
            props: g._props,
            context: A8.renderContext,
            children: g._children
        }), C);
        return C.set(g, I), I;
    }
    const { _props: B , _children: Q , ...E } = g, i = {
        ...E,
        _hash: null,
        _props: Ag(B),
        _children: Q.map(function(I, g) {
            return wg(A8, I, C);
        })
    }, o = Qg(0, i._type), D = Qg(o, i._props.hasOwnProperty("key") && "string" == typeof i._props.key ? i._props.key : JSON.stringify(i._props));
    let w = i._children.reduce(function(A, I) {
        return Bg(A, I._hash);
    }, D);
    return "root" === i._type && gg.has(w) && !Cg.has(w) && (w = Bg(w, (268435455 & Date.now()) * (Math.random() + 1) | 0)), i._hash = w, C.set(g, i), i;
}
function sg(A, g) {
    var C;
    if (I1(Dg(g), `Unexpected ${typeof g} passed to core.render: ${g}`), I1(Dg(C = g) && "string" == typeof C._type, `Attempting to mount an unresolved node: ${g}`), "root" === g._type && Cg.set(g._hash, g), !gg.has(g._hash)) {
        A.createNode(Eg(g._hash), g._type), gg.set(g._hash, g);
        for(let I in g._props)if (g._props.hasOwnProperty(I)) {
            const C = g._props[I];
            (null == C || "number" == typeof C && isNaN(C) || "number" == typeof C && !isFinite(C)) && console.warn(`Warning: applying a potentially erroneous property value. ${I}: ${C}`), A.setProperty(Eg(g._hash), I, C);
        }
        for(let I3 = 0; I3 < g._children.length; ++I3)sg(A, g._children[I3]), A.appendChild(Eg(g._hash), Eg(g._children[I3]._hash));
    }
}
function Rg(A, C, B) {
    if (I1(gg.has(C._hash), "Attempting to update a property for an unknown node"), B.has(C._hash)) return;
    const Q = gg.get(C._hash);
    Q._generation = 0;
    for(let I in C._props)if (C._props.hasOwnProperty(I)) {
        const B = C._props[I];
        if (!Q._props.hasOwnProperty(I) || !g1(Q._props[I], B)) (null == B || "number" == typeof B && isNaN(B) || "number" == typeof B && !isFinite(B)) && console.warn(`Warning: applying a potentially erroneous property value. ${I}: ${B}`), A.setProperty(Eg(Q._hash), I, B), Q._props[I] = B;
    }
    B.set(C._hash, !0);
    for(let I4 = 0; I4 < C._children.length; ++I4)Rg(A, C._children[I4], B);
}
function Ng(A, ...I8) {
    try {
        for (const A9 of gg.values())A9._generation++;
        let g = new Map, C3 = I8.map(function(I, C) {
            return wg(A, ig("root", {
                channel: C
            }, [
                I
            ]), g);
        });
        Cg.clear();
        for(let I7 = 0; I7 < C3.length; ++I7)sg(A, C3[I7]);
        let B = new Map;
        for(let I5 = 0; I5 < C3.length; ++I5)Rg(A, C3[I5], B);
        A.commitUpdates();
        for (const [I6, g4] of gg)g4._generation >= 4 && (A.deleteNode(Eg(I6)), gg.delete(I6));
        A.commitUpdates();
    } catch (A10) {
        let I = new Error(A10.message);
        throw I.name = "Elementary Error", Error.hasOwnProperty("captureStackTrace") && "function" == typeof Error.captureStackTrace && Error.captureStackTrace(I, Ng), I; /** @preserve node-do-not-add-exception-line */ 
    }
}
function Fg(A11) {
    gg.clear(), A11.forEach(function(A) {
        gg.set(A, Object.assign({
        }, ig("__hydratedNodeInstance__", {
        }, []), {
            _hash: A
        }));
    });
}
function tg(A) {
    I1(Array.isArray(A), `Trying to flatten something that's not an array: ${A}`);
    let g = [];
    for(let I = 0; I < A.length; ++I)Array.isArray(A[I]) ? g = g.concat(tg(A[I])) : g.push(A[I]);
    return g;
}
function ag(A, ...g) {
    if (0 === g.length) return ig(A, {
    }, []);
    const C = tg(g);
    if (Dg(C[0]) || "number" == typeof C[0]) return I1(C.length <= 8, "Nodes can only have at most 8 children."), ig(A, {
    }, C);
    const B = C[0], Q = C.slice(1);
    return I1(Q.length <= 8, "Nodes can only have at most 8 children."), ig(A, B, Q);
}
function Gg(A) {
    I1("object" == typeof A, "Candy wrapper wants an object");
    let g5 = {
    };
    for(let I in A)A.hasOwnProperty(I) && (g5[I] = function(...g) {
        return ag(A[I], ...g);
    });
    return g5;
}
const ng = Gg({
    ...A1
});
var yg = Object.freeze({
    __proto__: null,
    ms2samps: function({ children: [A]  }) {
        return ng.mul(ng.sr(), ng.div(A, 1000));
    },
    tau2pole: function({ children: [A]  }) {
        return ng.exp(ng.div(-1, ng.mul(A, ng.sr())));
    },
    db2gain: function({ children: [A]  }) {
        return ng.pow(10, ng.mul(A, 0.05));
    },
    select: function({ children: [A, I, g]  }) {
        return ng.add(ng.mul(A, I), ng.mul(ng.sub(1, A), g));
    }
});
const eg = Gg({
    ...A1,
    ...yg
});
var cg = Object.freeze({
    __proto__: null,
    compress: function({ children: [A, I, g, C, B, Q]  }) {
        const E = eg.env(eg.tau2pole(eg.mul(0.001, A)), eg.tau2pole(eg.mul(0.001, I)), B), i = eg.sub(1, eg.mul(eg.ge(E, eg.db2gain(g)), eg.mul(C, eg.sub(E, eg.db2gain(g)))));
        return eg.mul(i, Q);
    }
});
const hg = Gg({
    ...A1,
    ...yg,
    smooth: Ug,
    zero: rg
});
function Ug({ children: [A, I]  }) {
    return hg.pole(A, hg.mul(hg.sub(1, A), I));
}
function rg({ children: [A, I, g]  }) {
    return hg.sub(hg.mul(A, g), hg.mul(I, hg.z(g)));
}
var Mg = Object.freeze({
    __proto__: null,
    smooth: Ug,
    sm: function({ children: [A]  }) {
        return hg.smooth(hg.tau2pole(0.02), A);
    },
    zero: rg,
    dcblock: function({ children: [A]  }) {
        return hg.pole(0.995, hg.zero(1, 1, A));
    },
    df11: function({ children: [A, I, g, C]  }) {
        return hg.pole(g, hg.zero(A, I, C));
    },
    lowpass: function({ children: [A, I, g]  }) {
        const C = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), B = hg.cos(C), Q = hg.div(hg.sin(C), hg.mul(2, I)), E = hg.mul(0.5, hg.sub(1, B)), i = hg.sub(1, B), o = hg.mul(0.5, hg.sub(1, B)), D = hg.add(1, Q), w = hg.mul(-2, B), s = hg.sub(1, Q), R = hg.div(1, D);
        return hg.biquad(hg.mul(E, R), hg.mul(i, R), hg.mul(o, R), hg.mul(w, R), hg.mul(s, R), g);
    },
    highpass: function({ children: [A, I, g]  }) {
        const C = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), B = hg.cos(C), Q = hg.div(hg.sin(C), hg.mul(2, I)), E = hg.mul(0.5, hg.add(1, B)), i = hg.mul(-1, hg.add(1, B)), o = hg.mul(0.5, hg.add(1, B)), D = hg.add(1, Q), w = hg.mul(-2, B), s = hg.sub(1, Q), R = hg.div(1, D);
        return hg.biquad(hg.mul(E, R), hg.mul(i, R), hg.mul(o, R), hg.mul(w, R), hg.mul(s, R), g);
    },
    bandpass: function({ children: [A, I, g]  }) {
        const C = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), B = hg.cos(C), Q = hg.div(hg.sin(C), hg.mul(2, I)), E = Q, i = hg.mul(-1, Q), o = hg.add(1, Q), D = hg.mul(-2, B), w = hg.sub(1, Q), s = hg.div(1, o);
        return hg.biquad(hg.mul(E, s), hg.mul(0, s), hg.mul(i, s), hg.mul(D, s), hg.mul(w, s), g);
    },
    notch: function({ children: [A, I, g]  }) {
        const C = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), B = hg.cos(C), Q = hg.div(hg.sin(C), hg.mul(2, I)), E = hg.mul(-2, B), i = hg.add(1, Q), o = hg.mul(-2, B), D = hg.sub(1, Q), w = hg.div(1, i);
        return hg.biquad(hg.mul(1, w), hg.mul(E, w), hg.mul(1, w), hg.mul(o, w), hg.mul(D, w), g);
    },
    allpass: function({ children: [A, I, g]  }) {
        const C = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), B = hg.cos(C), Q = hg.div(hg.sin(C), hg.mul(2, I)), E = hg.sub(1, Q), i = hg.mul(-2, B), o = hg.add(1, Q), D = hg.add(1, Q), w = hg.mul(-2, B), s = hg.sub(1, Q), R = hg.div(1, D);
        return hg.biquad(hg.mul(E, R), hg.mul(i, R), hg.mul(o, R), hg.mul(w, R), hg.mul(s, R), g);
    },
    peak: function({ children: [A, I, g, C]  }) {
        const B = hg.pow(10, hg.div(g, 40)), Q = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), E = hg.cos(Q), i = hg.div(hg.sin(Q), hg.mul(2, I)), o = hg.add(1, hg.mul(i, B)), D = hg.mul(-2, E), w = hg.sub(1, hg.mul(i, B)), s = hg.add(1, hg.div(i, B)), R = hg.mul(-2, E), N = hg.sub(1, hg.div(i, B)), F = hg.div(1, s);
        return hg.biquad(hg.mul(o, F), hg.mul(D, F), hg.mul(w, F), hg.mul(R, F), hg.mul(N, F), C);
    },
    lowshelf: function({ children: [A, I, g, C]  }) {
        const B = hg.pow(10, hg.div(g, 40)), Q = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), E = hg.cos(Q), i = hg.div(hg.sin(Q), hg.mul(2, I)), o = hg.mul(2, i, hg.sqrt(B)), D = hg.add(B, 1), w = hg.sub(B, 1), s = hg.mul(D, E), R = hg.mul(w, E), N = hg.mul(B, hg.add(o, hg.sub(D, R))), F = hg.mul(2, B, hg.sub(w, s)), t = hg.mul(B, hg.sub(D, R, o)), a = hg.add(D, R, o), G = hg.mul(-2, hg.add(w, s)), n = hg.sub(hg.add(D, R), o), y = hg.div(1, a);
        return hg.biquad(hg.mul(N, y), hg.mul(F, y), hg.mul(t, y), hg.mul(G, y), hg.mul(n, y), C);
    },
    highshelf: function({ children: [A, I, g, C]  }) {
        const B = hg.pow(10, hg.div(g, 40)), Q = hg.div(hg.mul(2 * Math.PI, A), hg.sr()), E = hg.cos(Q), i = hg.div(hg.sin(Q), hg.mul(2, I)), o = hg.mul(2, i, hg.sqrt(B)), D = hg.add(B, 1), w = hg.sub(B, 1), s = hg.mul(D, E), R = hg.mul(w, E), N = hg.mul(B, hg.add(o, D, R)), F = hg.mul(-2, B, hg.add(w, s)), t = hg.mul(B, hg.sub(hg.add(D, R), o)), a = hg.add(hg.sub(D, R), o), G = hg.mul(2, hg.sub(w, s)), n = hg.sub(D, R, o), y = hg.div(1, a);
        return hg.biquad(hg.mul(N, y), hg.mul(F, y), hg.mul(t, y), hg.mul(G, y), hg.mul(n, y), C);
    },
    pink: function({ children: [A]  }) {
        return hg.biquad(1, -0.07568359, 0, -0.53567505, 0, hg.biquad(1, -1.81835938, 0.82094419, -1.94363403, 0.9438566, A));
    }
});
const Jg = Gg({
    ...A1,
    ...Mg
});
var lg = Object.freeze({
    __proto__: null,
    freeverb: function({ props: A12 , children: [I9, g6, C4]  }) {
        let B3 = [
            1557,
            1617,
            1491,
            1422,
            1277,
            1356,
            1188,
            1116
        ].map(function(B4, Q3) {
            return (function(A, I, g, C, B) {
                let Q = Jg.add(B, Jg.mul(g, Jg.tapIn({
                    name: A
                })));
                return Jg.add(Q, Jg.mul(0, Jg.tapOut({
                    name: A,
                    size: I
                }, Jg.smooth(C, Q))));
            })(`${A12.name}:lbcf:${Q3}`, B4, I9, g6, C4);
        });
        return [
            525,
            556,
            641,
            537
        ].reduce(function(I10, g7, C5) {
            return (function(A, I, g, C) {
                let B = Jg.add(C, Jg.mul(g, Jg.tapIn({
                    name: A
                })));
                return Jg.add(Jg.mul(-g, B), Jg.tapOut({
                    name: A,
                    size: I
                }, B));
            })(`${A12.name}:ap:${C5}`, g7, 0.5, I10);
        }, Jg.add(...B3));
    }
});
const Yg = Gg({
    ...A1,
    ...Mg
});
var kg = Object.freeze({
    __proto__: null,
    noise: function() {
        return Yg.sub(Yg.mul(2, Yg.rand()), 1);
    },
    pinknoise: function() {
        return Yg.pink(Yg.noise());
    }
});
const Sg = Gg({
    ...A1,
    train: Kg
});
function Kg({ children: [A]  }) {
    return Sg.le(Sg.phasor(A), 0.5);
}
function dg({ children: [A]  }) {
    return Sg.sub(Sg.mul(2, Sg.phasor(A)), 1);
}
function Lg(A, I) {
    let g = Sg.le(I, A), C = Sg.ge(I, Sg.sub(1, A)), B = Sg.div(I, A), Q = Sg.div(Sg.sub(I, 1), A);
    return Sg.add(Sg.mul(g, Sg.sub(Sg.mul(2, B), Sg.mul(B, B), 1)), Sg.mul(C, Sg.add(Sg.mul(2, Q), Sg.mul(Q, Q), 1)));
}
function fg({ children: [A]  }) {
    let I = Sg.phasor(A), g = Sg.le(I, 0.5), C = Sg.sub(Sg.mul(2, g), 1), B = Sg.div(A, Sg.sr()), Q = Lg(B, I), E = Lg(B, Sg.mod(Sg.add(I, 0.5), 1));
    return Sg.sub(Sg.add(C, Q), E);
}
var Hg = Object.freeze({
    __proto__: null,
    train: Kg,
    cycle: function({ children: [A]  }) {
        return Sg.sin(Sg.mul(2 * Math.PI, Sg.phasor(A)));
    },
    saw: dg,
    square: function({ children: [A]  }) {
        return Sg.sub(Sg.mul(2, Sg.train(A)), 1);
    },
    triangle: function({ children: [A]  }) {
        return Sg.mul(2, Sg.sub(0.5, Sg.abs(ag(dg, A))));
    },
    blepsaw: function({ children: [A]  }) {
        let I = Sg.phasor(A), g = Sg.sub(Sg.mul(2, I), 1), C = Sg.div(A, Sg.sr());
        return Sg.sub(g, Lg(C, I));
    },
    blepsquare: fg,
    bleptriangle: function({ children: [A]  }) {
        let I = Sg.div(Sg.mul(4, A), Sg.sr());
        return Sg.mul(I, Sg.pole(0.999, ag(fg, A)));
    }
});
const ug = Gg({
    ...A1,
    ...yg,
    ...Mg
});
var Zg, bg = Object.freeze({
    __proto__: null,
    adsr: function({ children: [A, I, g, C, B]  }) {
        let Q = ug.mul(A, ug.sr()), E = ug.le(ug.counter(B), Q), i = ug.select(B, ug.select(E, 1, g), 0), o = ug.select(B, ug.select(E, A, I), C), D = ug.tau2pole(ug.div(o, 6.91));
        return ug.smooth(D, i);
    },
    hann: function({ children: [A]  }) {
        return ug.mul(0.5, ug.sub(1, ug.cos(ug.mul(2 * Math.PI, A))));
    }
}), Vg = {
    ...A1,
    ...yg,
    ...cg,
    ...Mg,
    ...lg,
    ...kg,
    ...Hg,
    ...bg
}, Wg = "object" == typeof Reflect ? Reflect : null, mg = Wg && "function" == typeof Wg.apply ? Wg.apply : function(A, I, g) {
    return Function.prototype.apply.call(A, I, g);
};
Zg = Wg && "function" == typeof Wg.ownKeys ? Wg.ownKeys : Object.getOwnPropertySymbols ? function(A) {
    return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A));
} : function(A) {
    return Object.getOwnPropertyNames(A);
};
var pg = Number.isNaN || function(A) {
    return A != A;
};
function Tg() {
    Tg.init.call(this);
}
var Xg = Tg, qg = function(A13, I11) {
    return new Promise(function(g8, C) {
        function B(g) {
            A13.removeListener(I11, Q), C(g);
        }
        function Q() {
            "function" == typeof A13.removeListener && A13.removeListener("error", B), g8([].slice.call(arguments));
        }
        IC(A13, I11, Q, {
            once: !0
        }), "error" !== I11 && (function(A, I, g) {
            "function" == typeof A.on && IC(A, "error", I, g);
        })(A13, B, {
            once: !0
        });
    });
};
Tg.EventEmitter = Tg, Tg.prototype._events = void 0, Tg.prototype._eventsCount = 0, Tg.prototype._maxListeners = void 0;
var Og = 10;
function jg(A) {
    if ("function" != typeof A) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof A);
}
function xg(A) {
    return void 0 === A._maxListeners ? Tg.defaultMaxListeners : A._maxListeners;
}
function vg(A, I, g, C) {
    var B, Q, E, i;
    if (jg(g), void 0 === (Q = A._events) ? (Q = A._events = Object.create(null), A._eventsCount = 0) : (void 0 !== Q.newListener && (A.emit("newListener", I, g.listener ? g.listener : g), Q = A._events), E = Q[I]), void 0 === E) E = Q[I] = g, ++A._eventsCount;
    else if ("function" == typeof E ? E = Q[I] = C ? [
        g,
        E
    ] : [
        E,
        g
    ] : C ? E.unshift(g) : E.push(g), (B = xg(A)) > 0 && E.length > B && !E.warned) {
        E.warned = !0;
        var o = new Error("Possible EventEmitter memory leak detected. " + E.length + " " + String(I) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        o.name = "MaxListenersExceededWarning", o.emitter = A, o.type = I, o.count = E.length, i = o, console && console.warn && console.warn(i);
    }
    return A;
}
function zg() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Pg(A, I, g) {
    var C = {
        fired: !1,
        wrapFn: void 0,
        target: A,
        type: I,
        listener: g
    }, B = zg.bind(C);
    return B.listener = g, C.wrapFn = B, B;
}
function _g(A14, I12, g9) {
    var C = A14._events;
    if (void 0 === C) return [];
    var B = C[I12];
    return void 0 === B ? [] : "function" == typeof B ? g9 ? [
        B.listener || B
    ] : [
        B
    ] : g9 ? (function(A) {
        for(var I = new Array(A.length), g = 0; g < I.length; ++g)I[g] = A[g].listener || A[g];
        return I;
    })(B) : AC(B, B.length);
}
function $g(A) {
    var I = this._events;
    if (void 0 !== I) {
        var g = I[A];
        if ("function" == typeof g) return 1;
        if (void 0 !== g) return g.length;
    }
    return 0;
}
function AC(A, I) {
    for(var g = new Array(I), C = 0; C < I; ++C)g[C] = A[C];
    return g;
}
function IC(A, I, g, C) {
    if ("function" == typeof A.on) C.once ? A.once(I, g) : A.on(I, g);
    else {
        if ("function" != typeof A.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof A);
        A.addEventListener(I, function B(Q) {
            C.once && A.removeEventListener(I, B), g(Q);
        });
    }
}
Object.defineProperty(Tg, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Og;
    },
    set: function(A) {
        if ("number" != typeof A || A < 0 || pg(A)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + A + ".");
        Og = A;
    }
}), Tg.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, Tg.prototype.setMaxListeners = function(A) {
    if ("number" != typeof A || A < 0 || pg(A)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + A + ".");
    return this._maxListeners = A, this;
}, Tg.prototype.getMaxListeners = function() {
    return xg(this);
}, Tg.prototype.emit = function(A) {
    for(var I = [], g = 1; g < arguments.length; g++)I.push(arguments[g]);
    var C = "error" === A, B = this._events;
    if (void 0 !== B) C = C && void 0 === B.error;
    else if (!C) return !1;
    if (C) {
        var Q;
        if (I.length > 0 && (Q = I[0]), Q instanceof Error) throw Q;
        var E = new Error("Unhandled error." + (Q ? " (" + Q.message + ")" : ""));
        throw E.context = Q, E;
    }
    var i = B[A];
    if (void 0 === i) return !1;
    if ("function" == typeof i) mg(i, this, I);
    else {
        var o = i.length, D = AC(i, o);
        for(g = 0; g < o; ++g)mg(D[g], this, I);
    }
    return !0;
}, Tg.prototype.addListener = function(A, I) {
    return vg(this, A, I, !1);
}, Tg.prototype.on = Tg.prototype.addListener, Tg.prototype.prependListener = function(A, I) {
    return vg(this, A, I, !0);
}, Tg.prototype.once = function(A, I) {
    return jg(I), this.on(A, Pg(this, A, I)), this;
}, Tg.prototype.prependOnceListener = function(A, I) {
    return jg(I), this.prependListener(A, Pg(this, A, I)), this;
}, Tg.prototype.removeListener = function(A15, I13) {
    var g, C, B, Q, E;
    if (jg(I13), void 0 === (C = this._events)) return this;
    if (void 0 === (g = C[A15])) return this;
    if (g === I13 || g.listener === I13) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete C[A15], C.removeListener && this.emit("removeListener", A15, g.listener || I13));
    else if ("function" != typeof g) {
        for(B = -1, Q = g.length - 1; Q >= 0; Q--)if (g[Q] === I13 || g[Q].listener === I13) {
            E = g[Q].listener, B = Q;
            break;
        }
        if (B < 0) return this;
        0 === B ? g.shift() : (function(A, I) {
            for(; I + 1 < A.length; I++)A[I] = A[I + 1];
            A.pop();
        })(g, B), 1 === g.length && (C[A15] = g[0]), void 0 !== C.removeListener && this.emit("removeListener", A15, E || I13);
    }
    return this;
}, Tg.prototype.off = Tg.prototype.removeListener, Tg.prototype.removeAllListeners = function(A) {
    var I, g, C;
    if (void 0 === (g = this._events)) return this;
    if (void 0 === g.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== g[A] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete g[A]), this;
    if (0 === arguments.length) {
        var B, Q = Object.keys(g);
        for(C = 0; C < Q.length; ++C)"removeListener" !== (B = Q[C]) && this.removeAllListeners(B);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (I = g[A])) this.removeListener(A, I);
    else if (void 0 !== I) for(C = I.length - 1; C >= 0; C--)this.removeListener(A, I[C]);
    return this;
}, Tg.prototype.listeners = function(A) {
    return _g(this, A, !0);
}, Tg.prototype.rawListeners = function(A) {
    return _g(this, A, !1);
}, Tg.listenerCount = function(A, I) {
    return "function" == typeof A.listenerCount ? A.listenerCount(I) : $g.call(A, I);
}, Tg.prototype.listenerCount = $g, Tg.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Zg(this._events) : [];
}, Xg.once = qg;
let gC = null, CC = {
    renderContext: null,
    createNode: (...A)=>gC.recv("createNode", A)
    ,
    deleteNode: (...A)=>gC.recv("deleteNode", A)
    ,
    appendChild: (...A)=>gC.recv("appendChild", A)
    ,
    setProperty: (...A)=>gC.recv("setProperty", A)
    ,
    commitUpdates: (...A)=>gC.recv("commitUpdates", A)
};
class BC extends Xg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og;
    }
    initialize() {
        null === gC && (gC = process._linkedBinding("elemnative"), gC.setInternalCallbacks({
            dispatchEvent: (A, I)=>{
                "load" === A && (CC.renderContext = {
                    sampleRate: I.sampleRate,
                    blockSize: I.blockSize,
                    numInputs: I.numInputChannels,
                    numOutputs: I.numOutputs
                }), this.emit(A, I);
            }
        }));
    }
    render(...A16) {
        return Ng(CC, ...A16);
    }
}
var QC = new BC;
function EC(A) {
    try {
        window.webkit.messageHandlers.nativeHandler.postMessage(JSON.stringify(A));
    } catch (A17) {
        throw new Error("Failed to reach the plugin backend. Are you running with the correct renderer?");
    }
}
let iC = {
    renderContext: null,
    createNode: (...A)=>EC([
            "createNode",
            ...A
        ])
    ,
    deleteNode: (...A)=>EC([
            "deleteNode",
            ...A
        ])
    ,
    appendChild: (...A)=>EC([
            "appendChild",
            ...A
        ])
    ,
    setProperty: (...A)=>EC([
            "setProperty",
            ...A
        ])
    ,
    commitUpdates: (...A)=>EC([
            "commitUpdates",
            ...A
        ])
};
class oC extends Xg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og;
    }
    initialize() {
        window.__recvNativeMessage = (A)=>{
            const [I, g] = JSON.parse(A);
            "load" === I && (iC.renderContext = {
                sampleRate: g.sampleRate,
                blockSize: g.blockSize,
                numInputs: g.numInputChannels,
                numOutputs: g.numOutputs
            }, g.hasOwnProperty("hydration") && Fg(g.hydration)), this.emit(I, g);
        }, window.__elemReceiveNativeMessageBatch__ = (A18)=>{
            JSON.parse(A18).forEach(([A, I])=>{
                "load" === A && (iC.renderContext = {
                    sampleRate: I.sampleRate,
                    blockSize: I.blockSize,
                    numInputs: I.numInputChannels,
                    numOutputs: I.numOutputs
                }, I.hasOwnProperty("hydration") && Fg(I.hydration)), this.emit(A, I);
            });
        }, EC([
            "ready"
        ]);
    }
    render(...A26) {
        return Ng(iC, ...A26);
    }
}
var DC = new oC;
class wC {
    constructor(){
        this.renderContext = {
            sampleRate: 44100,
            blockSize: 512,
            numInputs: 0,
            numOutputs: 2
        }, this._creates = 0, this._deletes = 0, this._edges = 0, this._properties = 0;
    }
    createNode(...A19) {
        this._creates++;
    }
    deleteNode(...A20) {
        this._deletes++;
    }
    appendChild(...A21) {
        this._edges++;
    }
    setProperty(...A22) {
        this._properties++;
    }
    commitUpdates(...A23) {
        console.log("Batch complete with:"), console.log(`${this._creates} nodes created`), console.log(`${this._deletes} nodes deleted`), console.log(`${this._edges} edges created`), console.log(`${this._properties} properties written`);
    }
}
class sC extends Xg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og;
    }
    initialize() {
        window.setTimeout(()=>{
            this.emit("load");
        }, 50);
    }
    render(...A24) {
        return Ng(new wC, ...A24);
    }
}
var RC = new sC;
class NC extends Xg.EventEmitter {
    constructor(){
        super(), this.createNode = ig, this.memo = og, this.__worklet = null, this.__renderer = null, this.__timer = null;
    }
    async initialize(A25, g10 = {
    }) {
        I1("object" == typeof A25 && null !== A25, "First argument to initialize must be a valid AudioContext instance."), I1("object" == typeof g10 && null !== g10, "The optional second argument to initialize must be an object.");
        const C = new Blob([
            'var Module=function(){var A="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(A=A||__filename),function(I){var g,C,B;I=I||{},g||(g=void 0!==I?I:{}),g.ready=new Promise((function(A,I){C=A,B=I}));var Q,E={};for(Q in g)g.hasOwnProperty(Q)&&(E[Q]=g[Q]);var D,i,o,w,R="object"==typeof window,N="function"==typeof importScripts,F="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,G="";F?(G=N?require("path").dirname(G)+"/":__dirname+"/",D=function(A,I){var g=oI(A);return g?I?g:g.toString():(o||(o=require("fs")),w||(w=require("path")),A=w.normalize(A),o.readFileSync(A,I?null:"utf8"))},i=function(A){return(A=D(A,!0)).buffer||(A=new Uint8Array(A)),h(A.buffer),A},1<process.argv.length&&process.argv[1].replace(/\\\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(A){throw A})),process.on("unhandledRejection",u),g.inspect=function(){return"[Emscripten Module object]"}):(R||N)&&(N?G=self.location.href:"undefined"!=typeof document&&document.currentScript&&(G=document.currentScript.src),A&&(G=A),G=0!==G.indexOf("blob:")?G.substr(0,G.lastIndexOf("/")+1):"",D=function(A){try{var I=new XMLHttpRequest;return I.open("GET",A,!1),I.send(null),I.responseText}catch(B){if(A=oI(A)){I=[];for(var g=0;g<A.length;g++){var C=A[g];255<C&&(DI&&h(!1,"Character code "+C+" ("+String.fromCharCode(C)+")  at offset "+g+" not in 0x00-0xFF."),C&=255),I.push(String.fromCharCode(C))}return I.join("")}throw B}},N&&(i=function(A){try{var I=new XMLHttpRequest;return I.open("GET",A,!1),I.responseType="arraybuffer",I.send(null),new Uint8Array(I.response)}catch(I){if(A=oI(A))return A;throw I}}));var U,y=g.print||console.log.bind(console),s=g.printErr||console.warn.bind(console);for(Q in E)E.hasOwnProperty(Q)&&(g[Q]=E[Q]);E=null,g.wasmBinary&&(U=g.wasmBinary);g.noExitRuntime;"object"!=typeof WebAssembly&&u("no native wasm support detected");var J,M=!1;function h(A,I){A||u("Assertion failed: "+I)}var Y="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function a(A,I,g){var C=I+g;for(g=I;A[g]&&!(g>=C);)++g;if(16<g-I&&A.subarray&&Y)return Y.decode(A.subarray(I,g));for(C="";I<g;){var B=A[I++];if(128&B){var Q=63&A[I++];if(192==(224&B))C+=String.fromCharCode((31&B)<<6|Q);else{var E=63&A[I++];65536>(B=224==(240&B)?(15&B)<<12|Q<<6|E:(7&B)<<18|Q<<12|E<<6|63&A[I++])?C+=String.fromCharCode(B):(B-=65536,C+=String.fromCharCode(55296|B>>10,56320|1023&B))}}else C+=String.fromCharCode(B)}return C}var k,c,K,S,l,L,n,t,H,Z="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function r(A,I){for(var g=A>>1,C=g+I/2;!(g>=C)&&l[g];)++g;if(32<(g<<=1)-A&&Z)return Z.decode(K.subarray(A,g));for(g="",C=0;!(C>=I/2);++C){var B=S[A+2*C>>1];if(0==B)break;g+=String.fromCharCode(B)}return g}function d(A,I,g){if(void 0===g&&(g=2147483647),2>g)return 0;var C=I;g=(g-=2)<2*A.length?g/2:A.length;for(var B=0;B<g;++B)S[I>>1]=A.charCodeAt(B),I+=2;return S[I>>1]=0,I-C}function V(A){return 2*A.length}function W(A,I){for(var g=0,C="";!(g>=I/4);){var B=L[A+4*g>>2];if(0==B)break;++g,65536<=B?(B-=65536,C+=String.fromCharCode(55296|B>>10,56320|1023&B)):C+=String.fromCharCode(B)}return C}function f(A,I,g){if(void 0===g&&(g=2147483647),4>g)return 0;var C=I;g=C+g-4;for(var B=0;B<A.length;++B){var Q=A.charCodeAt(B);if(55296<=Q&&57343>=Q)Q=65536+((1023&Q)<<10)|1023&A.charCodeAt(++B);if(L[I>>2]=Q,(I+=4)+4>g)break}return L[I>>2]=0,I-C}function T(A){for(var I=0,g=0;g<A.length;++g){var C=A.charCodeAt(g);55296<=C&&57343>=C&&++g,I+=4}return I}function b(){var A=J.buffer;k=A,g.HEAP8=c=new Int8Array(A),g.HEAP16=S=new Int16Array(A),g.HEAP32=L=new Int32Array(A),g.HEAPU8=K=new Uint8Array(A),g.HEAPU16=l=new Uint16Array(A),g.HEAPU32=n=new Uint32Array(A),g.HEAPF32=t=new Float32Array(A),g.HEAPF64=H=new Float64Array(A)}var e,X=[],q=[],m=[];function O(){var A=g.preRun.shift();X.unshift(A)}var x=0,j=null,p=null;function u(A){throw g.onAbort&&g.onAbort(A),s(A),M=!0,A=new WebAssembly.RuntimeError("abort("+A+"). Build with -s ASSERTIONS=1 for more info."),B(A),A}g.preloadedImages={},g.preloadedAudios={};var z,v="data:application/octet-stream;base64,";if(!(z="data:application/octet-stream;base64,AGFzbQEAAAABlAInYAF/AGABfwF/YAJ/fwBgA39/fwBgAn9/AX9gBX9/f39/AGAGf39/f39+AGAEf39/fwBgA39/fwF/YAAAYAZ/f39/f38AYAF9AX1gCH9/f39/f39/AGAEf39/fwF/YAV/f39/fwF/YAABf2ABfAF9YAF8AXxgAn19AX1gA39+fwF+YAN/fH8AYAN/f38BfGAFf39/f38BfGAHf39/f39/fwBgDX9/f39/f39/f39/f38AYAJ8fwF9YAF/AX5gA3x8fwF8YAJ8fAF8YAJ8fwF8YAZ/fH9/f38Bf2ACfX8Bf2AHf35/f39/fgBgBH9/fn4AYAJ8fwF/YAJ9fwF9YAd/f39/f31/AGADf359AGAEf398fwAC6wEnAWEBYQAAAWEBYgABAWEBYwADAWEBZAAEAWEBZQAMAWEBZgADAWEBZwAAAWEBaAAFAWEBaQAAAWEBagAEAWEBawAVAWEBbAABAWEBbQAEAWEBbgADAWEBbwAJAWEBcAADAWEBcQAEAWEBcgABAWEBcwANAWEBdAADAWEBdQACAWEBdgAWAWEBdwAPAWEBeAAPAWEBeQANAWEBegAOAWEBQQAXAWEBQgAAAWEBQwAIAWEBRAABAWEBRQABAWEBRgAKAWEBRwACAWEBSAAFAWEBSQACAWEBSgAHAWEBSwAYAWEBTAABAWEBTQABA4wFigUAAQAIAAAAAAMIAAEJBAgIBQIDAAgDCAMCCQICAAkAEBACCAMHBAEBAAULAgUBAwgDGREEAgsLAhobHAsLCwABCQcAHQURAgIAAgQDARIKBwMBAAECDA0JCxIfAwMHBwADIAIJACEEBwABAQAIAgADAwMHBAMCAQQIIg4jAAAAAAAACQMHAwIFAwEABAcCBQUHAyQDAAElAwEBAQMBAQEBBAUCAQYAAQEEBQIBBgABAQQFAgEDAgYDAAEBDgwEBQoKCgUFBQgHBwcCCAgAAAEBCQEBCBMEAQEHBwIAAQEAAAAAAQEEAAAAAgEAAQYAAQEEBQIBBgEDAAEBBAUEAgEAAAEGAwADAAEBBAUCAQYDAAAAAQEEBQIBBgADAAEBBAUCAQIGAgMAAQABAQQFAgEBAgYAAQABAQQFAAIBBgABAQQFAgEBBgABAQQFAgEGAAEBBAUCAQYAAQEEBQIBBgMAAAEBBAUCAQIGAAECAQQFAgEG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AgwgAigCDCEAIAMiAiABNgIIIAIgAigCCCgCBDYCDCACKAIMIgMtAAAhAQJAIAAtAAAiAkUNACABIAJHDQADQCADLQABIQEgAC0AASICRQ0BIANBAWohAyAAQQFqIQAgASACRg0ACwsgASACRgvVAgECfwJAIAAgAUYNACABIAAgAmoiBGtBACACQQF0a00EQCAAIAEgAhAwGg8LIAAgAXNBA3EhAwJAAkAgACABSQRAIAMNAiAAQQNxRQ0BA0AgAkUNBCAAIAEtAAA6AAAgAUEBaiEBIAJBAWshAiAAQQFqIgBBA3ENAAsMAQsCQCADDQAgBEEDcQRAA0AgAkUNBSAAIAJBAWsiAmoiAyABIAJqLQAAOgAAIANBA3ENAAsLIAJBA00NAANAIAAgAkEEayICaiABIAJqKAIANgIAIAJBA0sNAAsLIAJFDQIDQCAAIAJBAWsiAmogASACai0AADoAACACDQALDAILIAJBA00NAANAIAAgASgCADYCACABQQRqIQEgAEEEaiEAIAJBBGsiAkEDSw0ACwsgAkUNAANAIAAgAS0AADoAACAAQQFqIQAgAUEBaiEBIAJBAWsiAg0ACwsLoQIBA38jAEFAaiIDJAAgACgCACIFQQRrKAIAIQQgBUEIaygCACEFIANBADYCFCADIAE2AhAgAyAANgIMIAMgAjYCCEEAIQEgA0EYakEAQScQKhogACAFaiEAAkAgBCACQQAQOwRAIANBATYCOCAEIANBCGogACAAQQFBACAEKAIAKAIUEQoAIABBACADKAIgQQFGGyEBDAELIAQgA0EIaiAAQQFBACAEKAIAKAIYEQUAAkACQCADKAIsDgIAAQILIAMoAhxBACADKAIoQQFGG0EAIAMoAiRBAUYbQQAgAygCMEEBRhshAQwBCyADKAIgQQFHBEAgAygCMA0BIAMoAiRBAUcNASADKAIoQQFHDQELIAMoAhghAQsgA0FAayQAIAELgQUBBH8jAEEQayIFJAACQAJAAkACQAJAAkACQAJAAkAgAEECaw4HAAECAwQFBgcLIAEgAi0AADoAAAwGCyABIAIrAwA5AwAMBQsgAiwAC0EATgRAIAEgAikDADcDACABIAIoAgg2AggMBQsgASACKAIAIAIoAgQQOQwECyABQgA3AgQgASABQQRqIgQ2AgAgAigCACIDIAJBBGoi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IgFBAXZBAXEiAHIgASAAdmpBAnRBgKUCaigCACEACyAARQ0BCwNAIAAoAgRBeHEgB2siASADSSECIAEgAyACGyEDIAAgBCACGyEEIAAoAhAiAQR/IAEFIAAoAhQLIgANAAsLIARFDQAgA0HYogIoAgAgB2tPDQAgBCgCGCEGIAQgBCgCDCIBRwRAIAQoAggiAEHgogIoAgBJGiAAIAE2AgwgASAANgIIDAkLIARBFGoiAigCACIARQRAIAQoAhAiAEUNAyAEQRBqIQILA0AgAiEFIAAiAUEUaiICKAIAIgANACABQRBqIQIgASgCECIADQALIAVBADYCAAwICyAHQdiiAigCACICTQRAQeSiAigCACEDAkAgAiAHayIBQRBPBEBB2KICIAE2AgBB5KICIAMgB2oiADYCACAAIAFBAXI2AgQgAiADaiABNgIAIAMgB0EDcjYCBAwBC0HkogJBADYCAEHYogJBADYCACADIAJBA3I2AgQgAiADaiIAIAAoAgRBAXI2AgQLIANBCGohAAwKCyAHQdyiAigCACIISQRAQdyiAiAIIAdrIgE2AgBB6KICQeiiAigCACICIAdqIgA2AgAgACABQQFyNgIEIAIgB0EDcjYCBCACQQhqIQAMCgtBACEAIAdBL2oiCQJ/QaimAigCAARAQbCmAigCAAwBC0G0pgJCfzcCAEGspgJCgKCAgICABDcCAEGopgIgC0EMakFwcUHYqtWqBXM2AgBBvKYCQQA2AgBBjKYCQQA2AgBBgCALIgFqIgZBACABayIFcSICIAdNDQlBiKYCKAIAIgQEQEGApgIoAgAiAyACaiIBIANNDQogASAESw0KC0GMpgItAABBBHENBAJAAkBB6KICKAIAIgMEQEGQpgIhAANAIAMgACgCACIBTwRAIAEgACgCBGogA0sNAwsgACgCCCIADQALC0EAEE4iAUF/Rg0FIAIhBkGspgIoAgAiA0EBayIAIAFxBEAgAiABayAAIAFqQQAgA2txaiEGCyAGIAdNDQUgBkH+////B0sNBUGIpgIoAgAiBARAQYCmAigCACIDIAZqIgAgA00NBiAAIARLDQYLIAYQTiIAIAFHDQEMBwsgBiAIayAFcSIGQf7///8HSw0EIAYQTiIBIAAoAgAgACgCBGpGDQMgASEACwJAIABBf0YNACAHQTBqIAZNDQBB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ADYCDAJ/IAAtAAtBB3YEQCAAKAIADAELIAALIQcgBkHAogIoAgA2AghBwKICQQA2AgAgBkEMaiEMQoCAgICAgICAgH8hESMAQRBrIggkAAJAIAciAC0AACIDRQRAIAAhAQwBCyAAIQECQANAIANBGHRBGHUiAkEgRiACQQlrQQVJckUNASABLQABIQMgAUEBaiICIQEgAw0ACyACIQEMAQsCQCABLQAAIgJBK2sOAwABAAELQX9BACACQS1GGyENIAFBAWohAQsCfyABLQAAQTBGBEBBASEOIAEtAAFB3wFxQdgARgRAIAFBAmohAUEQDAILIAFBAWohAUEQDAELQRALIgSsIRJBACECA0ACQEFQIQMCQCABLAAAIgVBMGtB/wFxQQpJDQBBqX8hAyAFQeEAa0H/AXFBGkkNAEFJIQMgBUHBAGtB/wFxQRlLDQELIAMgBWoiBSAETg0AIAggEEIgiCIUIBJCIIgiFX4gEEL/////D4MiDyASQv////8PgyIWfiITQiCIIA8gFX58Ig9CIIh8IBQgFn4gD0L/////D4N8Ig9CIIh8NwMIIAggE0L/////D4MgD0IghoQ3AwBBASEDAkAgCCkDCEIAUg0AIBAgEn4iEyAFrCIPQn+FVg0AIA8gE3whEEEBIQ4gAiEDCyABQQFqIQEgAyECDAELCyAMBEAgDCABIAAgDhs2AgALAkACQAJAIAIEQEHAogJBxAA2AgBCgICAgICAgICAfyEQDAELIBBCgICAgICAgICAf1QNAQsgDUUEQEHAogJBxAA2AgBC////////////ACERDAILIBBCgICAgICAgICAf1gNAEHAogJBxAA2AgAMAQsgECANrCIPhSAPfSERCyAIQRBqJAAjAEEQayIAJAAgAEHAogIoAgA2AgxBwKICIAYoAgg2AgAgBiAAKAIMNgIIIABBEGokAAJAIAYoAghBxABHBEAgBigCDCAHRg0BIAZBEGokACARDAILIwBBEGsiACQAIAAgC0GLERCWASAAEJUBAAsjAEEQayIAJAAgACALQdoMEJYBIAAQlQEACyEPIAktAAtBB3YEQCAJKAIIGiAJKAIAECcLIApBEGokACAPC5kBAQN8IAAgAKIiAyADIAOioiADRHzVz1o62eU9okTrnCuK5uVavqCiIAMgA0R9/rFX4x3HPqJE1WHBGaAB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AEGAAhAqQYACajYCBA8LAkACQAJAIAEgACgCACIEa0EDdSIFQSBqIgNBgICAgAJJBEACfyADIAIgBGsiAkECdSIGIAMgBksbQf////8BIAJBA3VB/////wBJGyICBEAgAkGAgICAAk8NAyACQQN0ECghBwsgByAFQQN0aiIDC0EAQYACECoiBkGAAmohBSAHIAJBA3RqIQIgASAERg0CA0AgA0EIayIDIAFBCGsiASgCADYCACADIAEoAgQ2AgQgAUIANwIAIAEgBEcNAAsgACACNgIIIAAoAgQhBCAAIAU2AgQgACgCACEBIAAgAzYCACABIARGDQMDQCAEIgBBCGshBAJAIABBBGsoAgAiAEUNACAAIAAoAgQiA0EBazYCBCADDQAgACAAKAIAKAIIEQAAIAAQKwsgASAERw0ACwwDCxAzAAtBhg8QOgALIAAgAjYCCCAAIAU2AgQgACAGNgIACyABBEAgARAnCwuoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0gEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSBtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAABAAoiEAIAFBg3BKBEAgAUH+B2ohAQwBCyAARAAAAAAAABAAoiEAIAFBhmggAUGGaEobQfwPaiEBCyAAIAFB/wdqrUI0hr+iC0kBAn8gACgCBCIFQQh1IQYgACgCACIAIAEgBUEBcQR/IAYgAigCAGooAgAFIAYLIAJqIANBAiAFQQJxGyAEIAAoAgAoAhgRBQALxgEBAn8jAEEQayIBJAACQCAAvUIgiKdB/////wdxIgJB+8Ok/wNNBEAgAkGAgMDyA0kNASAARAAAAAAAAAAAQQAQYCEADAELIAJBgIDA/wdPBEAgACAAoSEADAELAkACQAJAAkAgACABEKABQQNxDgMAAQIDCyABKwMAIAErAwhBARBgIQAMAwsgASsDACABKwMIEGEhAAwCCyABKwMAIAErAwhBARBgmiEADAELIAErAwAgASsDCBBhmiEACyABQRBqJAAgAAubBAEDfyABIAAgAUYiAjoADAJAIAINAANAIAEoAggiAi0ADA0BAkACfyACIAIoAggiAygCACIERgRAAkAgAygCBCIERQ0AIAQtAAwNAAwDCwJAIAEgAigCAEYEQCACIQEMAQsgAiACKAIEIgEoAgAiADYCBCABIAAEfyAAIAI2AgggAigCCAUgAws2AgggAigCCCIAIAAoAgAgAkdBAnRqIAE2AgAgASACNgIAIAIgATYCCCABKAIIIQMLIAFBAToADCADQQA6AAwgAyADKAIAIgAoAgQiATYCACABBEAgASADNgIICyAAIAMoAgg2AgggAygCCCIBIAEoAgAgA0dBAnRqIAA2AgAgACADNgIEIANBCGoMAQsCQCAERQ0AIAQtAAwNAAwCCwJAIAEgAigCAEcEQCACIQEMAQsgAiABKAIEIgA2AgAgASAABH8gACACNgIIIAIoAggFIAMLNgIIIAIoAggiACAAKAIAIAJHQQJ0aiABNgIAIAEgAjYCBCACIAE2AgggASgCCCEDCyABQQE6AAwgA0EAOgAMIAMgAygCBCIAKAIAIgE2AgQgAQRAIAEgAzYCCAsgACADKAIINgIIIAMoAggiASABKAIAIANHQQJ0aiAANgIAIAAgAzYCACADQQhqCyAANgIADAILIARBDGohASACQQE6AAwgAyAAIANGIgI6AAwgAUEBOgAAIAMhASACRQ0ACwsL3gEBAn8CQCABIAAoAgxGBEAgACgCCCECDAELIAAoAggiAgRAIAIQJwsgAEIANwIIIAFFBEBBACECDAELQX8gAUECdCABQf////8DcSABRxsQKCECIAAgATYCDCAAIAI2AggLIAJBACABQQJ0IgMQKhoCQCABIAAoAhhGBEAgACgCFCECDAELIAAoAhQiAgRAIAIQJwsgAEIANwIUIAFFBEBBACECDAELQX8gAUECdCABQf////8DcSABRxsQKCECIAAgATYCGCAAIAI2AhQLIAJBACADECoaIAAgATYCAAu0AQEBfyAAQgA3AgQgAEEMahBlIABBoAFqEGUgACgCuAIiAQRAIAEQJwsgAEIANwK4AiAAKALEAiIBBEAgARAnCyAAQgA3AsQCIABBzAJqEGUgACgC5AMiAQRAIAEQJwsgAEIANwLkAyAAKALwAyIBBEAgARAnCyAAQgA3AvADIAAoAvwDIgEEQCABECcLIABCADcC/AMgAEIANwKEBCAAKAKQBCIBBEAgARAnCyAAQgA3ApAEC74DAQl/AkACQCAAKAIIIgQgACgCDEcNACAAKAIEIgMgACgCACIGSwRAIAMgAyAGa0ECdUEBakF+bUECdCIGaiECIAQgA2siBQRAIAIgAyAFEDwgACgCBCEDCyAAIAIgBWoiBDYCCCAAIAMgBmo2AgQMAQsgBCAGayICQQF1QQEgAhsiAkGAgICABE8NASACQQJ0IgUQKCIIIAVqIQkgBCADayEHIAggAkF8cWoiBSEEAkAgB0UNAAJAIAdBBGsiCkECdkEBakEHcSIERQRAIAUhAgwBCyAFIQIDQCACIAMoAgA2AgAgA0EEaiEDIAJBBGohAiAEQQFrIgQNAAsLIAUgB2ohBCAKQRxJDQADQCACIAMoAgA2AgAgAiADKAIENgIEIAIgAygCCDYCCCACIAMoAgw2AgwgAiADKAIQNgIQIAIgAygCFDYCFCACIAMoAhg2AhggAiADKAIcNgIcIANBIGohAyACQSBqIgIgBEcNAAsLIAAgCTYCDCAAIAQ2AgggACAFNgIEIAAgCDYCACAGRQ0AIAYQJyAAKAIIIQQLIAQgASgCADYCACAAIAAoAghBBGo2AggPC0GGDxA6AAuWAwECfyAAQX82AhggAEEAOgAAAkACQAJAAkACQAJAAkACQAJAIAEoAhgOCQcHAAECAwQFBggLIAAgAS0AADoAAAwGCyAAIAErAwA5AwAMBQsgACABKQMANwMAIAAgASgCCDYCCCABQgA3AwAgAUEANgIIDAQLIAAgASgCADYCACAAIAEoAgQiAjYCBCAAIAEoAggiAzYCCCADRQRAIAAgAEEEajYCAAwECyACIABBBGo2AgggAUIANwIEIAEgAUEEajYCAAwDCyAAQQA2AgggAEIANwMAIAAgASgCADYCACAAIAEoAgQ2AgQgACABKAIINgIIIAFBADYCCCABQgA3AwAMAgsgAEEANgIIIABCADcDACAAIAEoAgA2AgAgACABKAIENgIEIAAgASgCCDYCCCABQQA2AgggAUIANwMADAELIAEoAhAiAkUEQCAAQQA2AhAMAQsgASACRgRAIAAgADYCECABKAIQIgIgACACKAIAKAIMEQIADAELIAAgAjYCECABQQA2AhALIAAgASgCGDYCGAsgAAvDHwMTfwF8AX4jAEGQAWsiAyQAAkACQAJAAkACQAJAAkAgAigCACIEQQFrDgQAAQIDBAsgAEEANgIYDAQLIABBATYCGAwDCyAAQQI2AhggAEEBOgAADAIL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KAIEIAJHDQAgAEEBOgA0AkAgACgCECICRQRAIABBATYCJCAAIAM2AhggACABNgIQIAAoAjBBAUcNAiADQQFGDQEMAgsgASACRgRAIAAoAhgiAkECRgRAIAAgAzYCGCADIQILIAAoAjBBAUcNAiACQQFGDQEMAgsgACAAKAIkQQFqNgIkCyAAQQE6ADYLC10BAX8gACgCECIDRQRAIABBATYCJCAAIAI2AhggACABNgIQDwsCQCABIANGBEAgACgCGEECRw0BIAAgAjYCGA8LIABBAToANiAAQQI2AhggACAAKAIkQQFqNgIkCwsVACAAQcSWAjYCACAAQQRqEJIBIAALagEDfyMAQRBrIgEkACABQQA2AgwgASAANgIEIAEgADYCACABIABBAWo2AgggASECIwBBEGsiAyQAIANBCGoiACACKAIENgIAIAAoAgBBAToAACACKAIIQQE6AAAgA0EQaiQAIAFBEGokAAuXAQEEfyMAQRBrIgEkACABQQA2AgwgASAANgIEIAEgADYCACABIABBAWo2AgggASEDIwBBEGsiBCQAAn8gBEEIaiIAIAMoAgQ2AgAgACgCAC0AAEULBEACfwJAIAMoAggiAi0AACIAQQFHBH8gAEECcQ0BIAJBAjoAAEEBBUEACwwBCwALIQILIARBEGokACABQRBqJAAgAgs3AQJ/IAEQTSICQQ1qECgiA0EANgIIIAMgAjYCBCADIAI2AgAgACADQQxqIAEgAkEBahAwNgIAC8cCAQV/IwBBEGsiCCQAIAIgAUF/c0ERa00EQAJ/IAAtAAtBB3YEQCAAKAIADAELIAALIQkCfyABQef///8HSQRAIAggAUEBdDYCCCAIIAEgAmo2AgwCfyMAQRBrIgIkACAIQQxqIgooAgAgCEEIaiILKAIASSEMIAJBEGokACALIAogDBsoAgAiAkELTwsEfyACQRBqQXBxIgIgAkEBayICIAJBC0YbBUEKCwwBC0FuC0EBaiIKECghAiAEBEAgAiAJIAQQSgsgBgRAIAIgBGogByAGEEoLIAMgBCAFamsiAwRAIAIgBGogBmogBCAJaiAFaiADEEoLIAFBCkcEQCAJECcLIAAgAjYCACAAIApBgICAgHhyNgIIIAAgBCAGaiADaiIANgIEIAhBADoAByAAIAJqIAgtAAc6AAAgCEEQaiQADwsQ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QQAgAUHIAWogAUHQAGogAhB9QQBIDQAgACgCTEEATiEEIAAoAgAhAiAALABKQQBMBEAgACACQV9xNgIACyACQSBxIQUCfyAAKAIwBEAgACABQcgBaiABQdAAaiABQaABahB9DAELIABB0AA2AjAgACABQdAAaiIGNgIQIAAgATYCHCAAIAE2AhQgACgCLCECIAAgATYCLCAAIAFByAFqIAYgAUGgAWoQfSACRQ0AGiAAQQBBACAAKAIkEQgAGiAAQQA2AjAgACACNgIsIABBADYCHCAAQQA2AhAgACgCFBogAEEANgIUQQALGiAAIAUgACgCAHI2AgAgBEUNAAsgAUHQAWokACADQRBqJAAQDgALbgEDfyMAQRBrIgMkACAAIANBCGoQmgEhAAJ/IAEtAAtBB3YEQCABKAIEDAELIAEtAAsLIQQgAhBNIQUgAAJ/IAEtAAtBB3YEQCABKAIADAELIAELIAQgBCAFahCZASAAIAIgBRBWGiADQRBqJAALXgEBfyMAQRBrIgMkAAJAIAJBCk0EQCAAIAI6AAsgACABIAIQSiADQQA6AA8gACACaiADLQAPOgAADAELIABBCiACQQprIAAtAAsiAEEAIAAgAiABEHwLIANBEGokAAt3AQJ/IwBBEGsiBCQAAkAgAiAAKAIIQf////8HcSIDSQRAIAAoAgAhAyAAIAI2AgQgAyABIAIQSiAEQQA6AA8gAiADaiAELQAPOgAADAELIAAgA0EBayACIANrQQFqIAAoAgQiAEEAIAAgAiABEHwLIARBEGokAAuZAQECfyMAQRBrIgQkACADQW9NBEACQCADQQpNBEAgACACOgALIAAhAwwBCyAAIANBC08EfyADQRBqQXBxIgMgA0EBayIDIANBC0YbBUEKC0EBaiIFECgiAzYCACAAIAVBgICAgHhyNgIIIAAgAjYCBAsgAyABIAIQSiAEQQA6AA8gAiADaiAELQAPOgAAIARBEGokAA8LEEQACzsBAX8jAEEQayICJABBACEBA0AgAUEDRwRAIAAgAUECdGpBADYCACABQQFqIQEMAQsLIAJBEGokACAAC7sCAAJAIAFBFEsNAAJAAkACQAJAAkACQAJAAkACQAJAIAFBCWsOCgABAgMEBQYHCAkKCyACIAIoAgAiAUEEajYCACAAIAEoAgA2AgAPCyACIAIoAgAi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BEAgARAnCyAAQgA3AuQDIABBzAJqEGYaIABB+O8BNgLAAiAAKALEAiIBBEAgARAnCyAAQgA3AsQCIABB+O8BNgK0AiAAKAK4AiIBBEAgARAnCyAAQgA3ArgCIABBoAFqEGYaIABBDGoQZhogAAuhAQEEfyAAKAIAIQEgAEEANgIAIAEEQAJAIAAtAAhFDQAgASgCICIABEAgASAANgIkIAAQJwsgASgCFCIABEAgACABKAIYIgJGBH8gAAUDQCACQQxrIgQoAgAiAwRAIAJBCGsgAzYCACADECcLIAQiAiAARw0ACyABKAIUCyECIAEgADYCGCACECcLIAEsABNBf0oNACABKAIIECcLIAEQJwsL3AQBCX8jAEEQayIGJAAgBkEANgIIIAZCADcDAAJAAkACQCABRQRAQQAhAQwBCyABQYCAgIAETw0BIAYgAUECdCICECgiAzYCACAGIAIgA2oiATYCCCADQQAgAhAqGgsgAEEANgIIIABCADcCACAAQQwQKCICNgIAIAAgAjYCBCAAIAJBDGoiBzYCCAJAIAEgA2siBEUEQCACQQBBDBAqGgwBCyAEQX9MDQIgBEECdUECdCEJIARBAnZBAnQhCCACIQEDQCABQQA2AgggAUIANwIAIAEgBBAoIgU2AgAgASAFIAlqNgIIIAEgBSADIAQQMCAIajYCBCABQQxqIgEgB0cNAAsLIAAgBzYCBCADBEAgAxAnIAAoAgQhByAAKAIAIQILIABCADcCDCAAQQA2AhQgAiAHRwRAIABBDGohAQNAIAYgAigCADYCAAJAIAEoAgQiAyABKAIIIgVJBEAgAyAGKAIANgIAIAEgA0EEajYCBAwBCwJAIAMgASgCACIDayIJQQJ1IghBAWoiBEGAgICABEkEQCAEIAUgA2siBUEBdSIKIAQgCksbQf////8DIAVBAnVB/////wFJGyIEBH8gBEGAgICABE8NAiAEQQJ0ECgFQQALIgUgCEECdGoiCCAGKAIANgIAIAlBAU4EQCAFIAMgCRAwGgsgASAFIARBAnRqNgIIIAEgCEEEajYCBCABIAU2AgAgAwRAIAMQJwsMAgsQMwALQYYPEDoACyACQQxqIgIgB0cNAAsLIAZBEGokACAADwsQMwALIAJBADYCCCACQgA3AgAQMwAL/wsCDX8CfSMAQRBrIgskACACKAIEIAItAAsiBSAFQRh0QRh1QQBIIgUbIgkhBCACKAIAIAIgBRsiBiECAkAgCSIFQQRJDQACfyAJQQRrIgVBBHEEQCAJIgchBCAGDAELIAYoAABBldPH3gVsIgJBGHYgAnNBldPH3gVsIAlBldPH3gVscyEEIAUhByAGQQRqCyECIAVBBEkNACAHIQUDQCACKAAEQZXTx94FbCIHQRh2IAdzQZXTx94FbCACKAAAQZXTx94FbCIHQRh2IAdzQZXTx94FbCAEQZXTx94FbHNBldPH3gVscyEEIAJBCGohAiAFQQhrIgVBA0sNAAsLAkACQAJAAkAgBUEBaw4DAgEAAwsgAi0AAkEQdCAEcyEECyACLQABQQh0IARzIQQLIAQgAi0AAHNBldPH3gVsIQQLIARBDXYgBHNBldPH3gVsIgJBD3YgAnMhCAJAAkAgASgCBCIERQ0AIAEoAgACfyAIIARBAWtxIARpIgVBAU0NABogCCAEIAhLDQAaIAggBHALIg1BAnRqKAIAIgJFDQAgAigCACICRQ0AIAVBAU0EQCAEQQFrIQ8DQCAIIAIoAgQiBUdBACAFIA9xIA1HGw0CAkAgAigCDCACLQATIgcgB0EYdEEYdSIFQQBIIhAbIAlHDQAgAkEIaiIMKAIAIQogEEUEQCAFRQ0FIAYiBS0AACAKQf8BcUcNAQNAIAdBAWsiB0UNBiAFLQABIQogBUEBaiEFIAogDEEBaiIMLQAARg0ACwwBCyAJRQ0EIAogDCAQGyAGIAkQNkUNBAsgAigCACICDQALDAELA0AgCCACKAIEIgVHBEAgBCAFTQR/IAUgBHAFIAULIA1HDQILAkAgAigCDCACLQATIgcgB0EYdEEYdSIFQQBIIg8bIAlHDQAgAkEIaiIMKAIAIQogD0UEQCAFRQ0EIAYiBS0AACAKQf8BcUcNAQNAIAdBAWsiB0UNBSAFLQABIQogBUEBaiEFIAogDEEBaiIMLQAARg0ACwwBCyAJRQ0DIAogDCAPGyAGIAkQNkUNAwsgAigCACICDQALC0EsECghBiALIAFBCGoiBTYCBCALIAY2AgAgBkEIaiECAkAgAywAC0EATgRAIAIgAykCADcCACACIAMoAgg2AggMAQsgAiADKAIAIAMoAgQQOQsgBiADKAIMNgIUIAYgAygCEDYCGCAGIANBFGooAgA2AhwgA0EANgIUIANCADcCDCAGIANBGGooAgA2AiAgBiADKAIcNgIkIAYgA0EgaigCADYCKCADQQA2AiAgA0IANwIYIAtBAToACCAGQQA2AgAgBiAINgIEAkAgASgCDEEBarMiEiABKgIQIhEgBLOUXkEBIAQbRQ0AIAQgBEEBa3FBAEcgBEEDSXIgBEEBdHIhAgJAAn9BAgJ/IBIgEZWNIhFDAACAT10gEUMAAAAAYHEEQCARqQwBC0EACyIDIAIgAiADSRsiAkEBRg0AGiACIAIgAkEBa3FFDQAaIAIQMgsiBCABKAIEIgdNBEAgBCAHTw0BIAdBA0khAgJ/IAEoAgyzIAEqAhCVjSIRQwAAgE9dIBFDAAAAAGBxBEAgEakMAQtBAAshAwJ/AkAgAg0AIAdpQQFLDQAgA0EBQSAgA0EBa2drdCADQQJJGwwBCyADEDILIgMgBCADIARLGyIEIAdPDQELIAEgBBBSCyABKAIEIgQgBEEBayICcUUEQCACIAhxIQ0MAQsgBCAISwRAIAghDQwBCyAIIARwIQ0LAkAgASgCACANQQJ0aiICKAIAIgNFBEAgBiABKAIINgIAIAEgBjYCCCACIAU2AgAgCygCACIFKAIAIgJFDQEgAigCBCECAkAgBCAEQQFrIgNxRQRAIAIgA3EhAgwBCyACIARJDQAgAiAEcCECCyABKAIAIAJBAnRqIAU2AgAMAQsgBiADKAIANgIAIAMgBjYCAAsgCygCACECIAtBADYCAEEBIQ4gASABKAIMQQFqNgIMIAsQsQELIAAgDjoABCAAIAI2AgAgC0EQaiQAC8MDAQl/AkACQCAAKAIEIgUgACgCAEcEQCAFIQMMAQsgACgCCCICIAAoAgwiA0kEQCACIAMgAmtBAnVBAWpBAm1BAnQiBmohAyACIAVrIgQEQCADIARrIgMgBSAEEDwgACgCCCECCyAAIAM2AgQgACACIAZqNgIIDAELIAMgBWsiA0EBdUEBIAMbIgNBgICAgARPDQEgA0ECdCIEECgiByAEaiEJIAcgA0EDakF8cWoiAyEGAkAgAiAFayIIRQ0AIAMhAiAFIQQgCEEEayIKQQJ2QQFqQQdxIgYEQANAIAIgBCgCADYCACAEQQRqIQQgAkEEaiECIAZBAWsiBg0ACwsgAyAIaiEGIApBHEkNAANAIAIgBCgCADYCACACIAQoAgQ2AgQgAiAEKAIINgIIIAIgBCgCDDYCDCACIAQoAhA2AhAgAiAEKAIUNgIUIAIgBCgCGDYCGCACIAQoAhw2AhwgBEEgaiEEIAJBIGoiAiAGRw0ACwsgACAJNgIMIAAgBjYCCCAAIAM2AgQgACAHNgIAIAVFDQAgBRAnIAAoAgQhAwsgA0EEayABKAIANgIAIAAgACgCBEEEazYCBA8LQYYPEDoAC4kHAwV/An0BfiACKQMAIgynQZXTx94FbCICQRh2IAJzQZXTx94FbEGomb30fXNBldPH3gVsIAxCIIinQZXTx94FbCICQRh2IAJzQZXTx94FbHMiAkENdiACc0GV08feBWwiAkEPdiACcyEHIAACfwJAIAEoAgQiBUUNAAJAIAVpIghBAk8EQCAHIQYgBSAHTQRAIAcgBXAhBgsgASgCACAGQQJ0aigCACICRQ0CIAhBAU0NAQNAIAIoAgAiAkUNAyAHIAIoAgQiCEcEQCAFIAhNBH8gCCAFcAUgCAsgBkcNBAsgAikDCCAMUg0AC0EADAMLIAEoAgAgByAFQQFrcSIGQQJ0aigCACICRQ0BCyAFQQFrIQgDQCACKAIAIgJFDQEgByACKAIEIglHQQAgCCAJcSAGRxsNASACKQMIIAxSDQALQQAMAQtBIBAoIgIgAykDADcDCCACIAQoAgA2AhAgAiAEKAIENgIUIAIgBCgCCDYCGCAEQQA2AgggBEIANwIAIAIgBzYCBCACQQA2AgACQCABKAIMQQFqsyIKIAEqAhAiCyAFs5ReQQEgBRtFDQAgBSAFQQFrcUEARyAFQQNJciAFQQF0ciEDQQIhBAJAAn8gCiALlY0iCkMAAIBPXSAKQwAAAABgcQRAIAqpDAELQQALIgggAyADIAhJGyIDQQFGDQAgAyADQQFrcUUEQCADIQQMAQsgAxAyIQQgASgCBCEFCwJAIAQgBU0EQCAEIAVPDQEgBUEDSSEDAn8gASgCDLMgASoCEJWNIgpDAACAT10gCkMAAAAAYHEEQCAKqQwBC0EACyEGAn8CQCADDQAgBWlBAUsNACAGQQFBICAGQQFrZ2t0IAZBAkkbDAELIAYQMgsiBiAEIAQgBkkbIgQgBU8NAQsgASAEEEgLIAEoAgQiBSAFQQFrIgNxRQRAIAMgB3EhBgwBCyAFIAdLBEAgByEGDAELIAcgBXAhBgsCQCABKAIAIAZBAnRqIgQoAgAiA0UEQCACIAEoAgg2AgAgASACNgIIIAQgAUEIajYCACACKAIAIgNFDQEgAygCBCEDAkAgBSAFQQFrIgRxRQRAIAMgBHEhAwwBCyADIAVJDQAgAyAFcCEDCyABKAIAIANBAnRqIAI2AgAMAQsgAiADKAIANgIAIAMgAjYCAAsgASABKAIMQQFqNgIMQQELOgAEIAAgAjYCAAv4BgMFfwJ9AX4gAikDACIMp0GV08feBWwiAkEYdiACc0GV08feBWxBqJm99H1zQZXTx94FbCAMQiCIp0GV08feBWwiAkEYdiACc0GV08feBWxzIgJBDXYgAnNBldPH3gVsIgJBD3YgAnMhCCAAAn8CQCABKAIEIgVFDQACQCAFaSIHQQJPBEAgCCEGIAUgCE0EQCAIIAVwIQYLIAEoAgAgBkECdGooAgAiAkUNAiAHQQFNDQEDQCACKAIAIgJFDQMgCCACKAIEIgdHBEAgBSAHTQR/IAcgBXAFIAcLIAZHDQQLIAIpAwggDFINAAtBAAwDCyABKAIAIAggBUEBa3EiBkECdGooAgAiAkUNAQsgBUEBayEHA0AgAigCACICRQ0BIAggAigCBCIJR0EAIAcgCXEgBkcbDQEgAikDCCAMUg0AC0EADAELQRgQKCICIAMpAwA3AwggAiAEKAIANgIQIAIgBCgCBDYCFCAEQgA3AgAgAkEANgIAIAIgCDYCBAJAIAEoAgxBAWqzIgogASoCECILIAWzlF5BASAFG0UNACAFIAVBAWtxQQBHIAVBA0lyIAVBAXRyIQNBAiEGAkACfyAKIAuVjSIKQwAAgE9dIApDAAAAAGBxBEAgCqkMAQtBAAsiBCADIAMgBEkbIgNBAUYNACADIANBAWtxRQRAIAMhBgwBCyADEDIhBiABKAIEIQULAkAgBSAGTwRAIAUgBk0NASAFQQNJIQMCfyABKAIMsyABKgIQlY0iCkMAAIBPXSAKQwAAAABgcQRAIAqpDAELQQALIQcCfwJAIAMNACAFaUEBSw0AIAdBAUEgIAdBAWtna3QgB0ECSRsMAQsgBxAyCyIHIAYgBiAHSRsiBiAFTw0BCyABIAYQSAsgASgCBCIFIAVBAWsiA3FFBEAgAyAIcSEGDAELIAUgCEsEQCAIIQYMAQsgCCAFcCEGCwJAIAEoAgAgBkECdGoiBCgCACIDRQRAIAIgASgCCDYCACABIAI2AgggBCABQQhqNgIAIAIoAgAiA0UNASADKAIEIQMCQCAFIAVBAWsiBHFFBEAgAyAEcSEDDAELIAMgBUkNACADIAVwIQMLIAEoAgAgA0ECdGogAjYCAAwBCyACIAMoAgA2AgAgAyACNgIACyABIAEoAgxBAWo2AgxBAQs6AAQgACACNgIAC/cHAgN/AX4jAEEgayIGJAACQAJAAkACQAJAIABBAWsOAwECAwALAkACQAJAIAEoAgAiACgCIEEBag4CAgABCyACIAMpAwA3AwAgAygCDCEBIAMoAgghACADQgA3AwggAiAANgIIIAIoAgwhACACIAE2AgwCQCAARQ0AIAAgACgCBCIBQQFrNgIEIAENACAAIAAoAgAoAggRAAAgABArCyACKAIQIgEEQCABIAIoAhQiAEYEfyABBQNAIAAiBEEIayEAAkAgBEEEaygCACIERQ0AIAQgBCgCBCIFQQFrNgIEIAUNACAEIAQoAgAoAggRAAAgBBArCyAAIAFHDQALIAIoAhALIQAgAiABNgIUIAAQJyACQQA2AhggAkIANwMQCyACIAMoAhA2AhAgAiADKAIUNgIUIAIgAygCGDYCGCADQQA2AhggA0IANwMQDAULIAAQQwsgACADKQMANwMAIAAgAygCCDYCCCAAIAMoAgw2AgwgA0IANwMIIABCADcDECAAQQA2AhggACADKAIQNgIQIAAgAygCFDYCFCAAIAMoAhg2AhggA0EANgIYIANCADcDECAAQQA2AiAMAwsCQAJAAkAgASgCACIAKAIgQQFqDgMCAQABCyACIAMpAwA3AwAgAygCDCEBIAMoAgghACADQgA3AwggAiAANgIIIAIoAgwhACACIAE2AgwCQCAARQ0AIAAgACgCBCIBQQFrNgIEIAENACAAIAAoAgAoAggRAAAgABArCyACKAIQIgEEQCABIAIoAhQiAEYEfyABBQNAIAAiBEEIayEAAkAgBEEEaygCACIERQ0AIAQgBCgCBCIFQQFrNgIEIAUNACAEIAQoAgAoAggRAAAgBBArCyAAIAFHDQALIAIoAhALIQAgAiABNgIUIAAQJyACQQA2AhggAkIANwMQCyACIAMoAhA2AhAgAiADKAIUNgIUIAIgAygCGDYCGCADQQA2Ahgg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AhhBA0cNAyAHIAFBAnRqIAYrAwC2OAIAIAFBAWoiASACRw0ACwsCQCAAKAIwIAAoAiwiBWsiAQRAIAFBA3UiAUEBIAFBAUsbIQZBACEBA0AgBSABQQN0aigCBCICBEAgAigCBEUNAwsgAUEBaiIBIAZHDQALC0EIEAEiABBPIABB/JcCQQEQAgALIAUgAUEDdGooAgAhASACIAIoAgRBAWo2AgQCQCADKAIUIARrIgVBAnUiBiABKAIEIAEoAgAiCGtBAnUiB0sEQCABIAYgB2sQQgwBCyAGIAdPDQAgASAIIAZBAnRqNgIEIAMoAhQgBGshBQsgBQRAIAEoAgAgBCAFEDwLAkACfyAAKAI8IgUgAEFAaygCACIESwRAIAUgBGsMAQsgACgCOCAFIARragsEQCAAKAJEIARBA3RqIgUgATYCACAFKAIEIQEgBSACNgIEAkAgAUUNACABIAEoAgQiAkEBazYCBCACDQAgASABKAIAKAIIEQAAIAEQKwsgACAAKAJQIARBAWpxNgJADAELIAIgAigCBCIAQQFrNgIEIAANACACIAIoAgAoAggRAAAgAhArCyADKAIQIgBFDQAgAyAANgIUIAAQJwsgA0EgaiQADwsQQAALQcgREEUAC0HIERBFAAsQMwALEDMAC0EIEAEiACADQRBqEDggAEH8lwJBARACAAsMACAAELwBGiAAECcLngMBBX8jAEEQayIFJAAgAEHE5QE2AgACQCAAKAJYIgFFDQAgASABKAIEIgNBAWs2AgQgAw0AIAEgASgCACgCCBEAACABECsLIAAoAkQiAwRAIAMgACgCSCIBRgR/IAMFA0AgASICQQhrIQECQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECsLIAEgA0cNAAsgACgCRAshASAAIAM2AkggARAnCyAAKAIsIgMEQCADIAAoAjAiAUYEfyADBQNAIAEiAkEIayEBAkAgAkEEaygCACICRQ0AIAIgAigCBCIEQQFrNgIEIAQNACACIAIoAgAoAggRAAAgAhArCyABIANHDQALIAAoAiwLIQEgACADNgIwIAEQJwsgAEGILjYCACAAKAIcIgEEQANAIAEoAgAhAyABKAIwQX9HBEAgAUEYahAsCyABQX82AjAgASwAE0F/TARAIAEo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AigCBCIEQQFrNgIEIAQNACACIAIoAgAoAggRAAAgAhArCyABIANHDQALIAAoAkQLIQEgACADNgJIIAEQJwsgACgCLCIDBEAgAyAAKAIwIgFGBH8gAwUDQCABIgJBCGshAQJAIAJBBGsoAgAiAkUNACACIAIoAgQiBEEBazYCBCAEDQAgAiACKAIAKAIIEQAAIAIQKwsgASADRw0ACyAAKAIsCyEBIAAgAzYCMCABECcLIABBiC42AgAgACgCHCIBBEADQCABKAIAIQMgASgCMEF/RwRAIAFBGGoQLAsgAUF/NgIwIAEsABNBf0wEQCABKAIIECcLIAEQJyADIgENAAsLIAAoAhQhASAAQQA2AhQgAQRAIAEQJwsgBUEQaiQAIAALfgEDfyMAQRBrIgMkACAAQYguNgIAIAAoAhwiAQRAA0AgASgCACECIAEoAjBBf0cEQCABQRhqECwLIAFBfzYCMCABLAATQX9MBEAgASgCCBAnCyABECcgAiIBDQALCyAAKAIUIQIgAEEANgIUIAIEQCACECcLIANBEGokACAAC4oOAQl/IwBBEGsiCCQAIwBBEGsiBiQAIAAiAUH4AGooAtABIgAEQANAIAAoAgAhAiAAECcgAiIADQALCyABKALAAiEAIAFBADYCwAIgAARAIAAQJwsgASgCtAIiAARAIAEgADYCuAIgABAnCyABKAKoAiIABEAgASAANgKsAiAAECcLIAEoApgCIgAEQANAIAAoAgAhAiAAECcgAiIADQALCyABKAKQAiEAIAFBADYCkAIgAARAIAAQJwsgASgChAIiAARAIAEgADYCiAIgABAnCyABKAL4ASIABEAgASAANgL8ASAAECcLIAEoAugBIgAEQCABIAA2AuwBIAAQJwsgASgC3AEiAARAIAEgADYC4AEgABAnCyABKALIASICBEAgAiABKALMASIARgR/IAIFA0AgAEEoayEDIABBCGsiACgCAEF/RwRAIAMQQwsgAEF/NgIAIAMiACACRw0ACyABKALIAQshACABIAI2AswBIAAQJwsgASgCsAEiAARAA0AgACgCACEEIAAoAhAiAgRAIAIgACgCFCIDRgR/IAIFA0AgAyIFQQhrIQMCQCAFQQRrKAIAIgVFDQAgBSAFKAIEIgdBAWs2AgQgBw0AIAUgBSgCACgCCBEAACAFECsLIAIgA0cNAAsgACgCEAshAyAAIAI2AhQgAxAnCyAAECcgBCIADQALCyABKAKoASEAIAFBADYCqAEgAARAIAAQJwsgASgCnAEiAARAA0AgACICKAIAIQACQCACKAIUIgNFDQAgAyADKAIEIgRBAWs2AgQgBA0AIAMgAygCACgCCBEAACADECsLIAIQJyAADQALCyABKAKUASEAIAFBADYClAEgAARAIAAQJwsgASgCiAEiAARAA0AgACICKAIAIQACQCACKAIUIgNFDQAgAyADKAIEIgRBAWs2AgQgBA0AIAMgAygCACgCCBEAACADECsLIAIQJyAADQALCyABKAKAASEAIAFBADYCgAEgAARAIAAQJwsgBkEQaiQAIAFB3ABqIgAoAhAiBkGqAW4hAwJAIAAoAggiBCAAKAIEIgJGBEAgAEEUaiEHDAELIABBFGohByACIANBAnRqIgUoAgAgBiADQaoBbGtBGGxqIgMgAiAAKAIUIAZqIgZBqgFuIglBAnRqKAIAIAYgCUGqAWxrQRhsaiIGRg0AA0BBBCEEAkAgAygCECICIANHBEBBBSEEIAJFDQELIAIgAigCACAEQQJ0aigCABEAAAsgA0EYaiIDIAUoAgBrQfAfRgRAIAUoAgQhAyAFQQRqIQULIAMgBkcNAAsgACgCBCECIAAoAgghBAsgB0EANgIAIAQgAmtBAnUiA0ECSwRAA0AgAigCABAnIAAgACgCBEEEaiICNgIEIAAoAgggAmtBAnUiA0ECSw0ACwtB1QAhAgJAAkACQCADQQFrDgIBAAILQaoBIQILIAAgAjYCEAsCQCABKAJgIgAgASgCZCICRg0AA0AgACgCABAnIABBBGoiACACRw0ACyABKAJkIgAgASgCYCICRg0AIAEgACAAIAJrQQRrQQJ2QX9zQQJ0ajYCZAsgASgCXCIABEAgABAnCyABKAJQIgIEQCACIAEoAlQiAEYEfyACBQNAIABBKGshAyAAQQhrIgAoAgBBf0cEQCADEEMLIABBfzYCACADIgAgAkcNAAsgASgCUAshACABIAI2AlQgABAnCyABKAJEIgAEQANAIAAiAigCACEAAkAgAigCFCIDRQ0AIAMgAygCBCIEQQFrNgIEIAQNACADIAMoAgAoAggRAAAgAxArCyACECcgAA0ACwsgASgCPCEAIAFBADYCPCAABEAgABAnCyABKAIwIgAEQANAIAAiAigCACEAAkAgAigCFCIDRQ0AIAMgAygCBCIEQQFrNgIEIAQNACADIAMoAgAoAggRAAAgAxArCyACECcgAA0ACwsgASgCKCEAIAFBADYCKCAABEAgABAnCyABKAIcIgAEQANAIAAoAgAhAgJAAkAgACgCKCIDIABBGGpGBEBBBCEEDAELQQUhBCADRQ0BCyADIAMoAgAgBEECdGooAgARAAALIAAsABNBf0wEQCAAKAIIECcLIAAQJyACIgANAAsLIAEoAhQhACABQQA2AhQgAARAIAAQJwsgASIDKAIIIgAEQANAIAAoAgAhBCAAKAIgIgEEQCAAIAE2AiQgARAnCyAAKAIUIgEEQCABIAAoAhgiAkYEfyABBQNAIAJBDGsiBSgCACIGBEAgAkEIayAGNgIAIAYQJwsgBSICIAFHDQALIAAoAhQLIQIgACABNgIYIAIQJwsgACwAE0F/TARAIAAoAggQJwsgABAnIAQiAA0ACwsgAygCACEAIANBADYCACAABEAgABAnCyAIQRBqJAAgAwsFAEGUOwsTACAAQQRqQQAgASgCBEHEOkYbC2gCAX4BfSACKQMAIQUgAyoCACEGQcAAECgiAUIANwIEIAFB8Dg2AgAgAUH4OTYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCAAIAE2AgQgACABQRBqNgIACwoAIAFBkDc2AgALEABBCBAoIgBBkDc2AgAgAAvmAQECfwJAIAMEQCAERQ0BIARBA3EhBiABKAIAIQBBACEDIARBAWtBA08EQCAEQXxxIQQDQCACIANBAnQiAWogACABaioCABBiOAIAIAIgAUEEciIHaiAAIAdqKgIAEGI4AgAgAiABQQhyIgdqIAAgB2oqAgAQYjgCACACIAFBDHIiAWogACABaioCABBiOAIAIANBBGohAyAEQQRrIgQNAAsLIAZFDQEDQCACIANBAnQiAWogACABaioCABBiOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLDgAgAEHcNDYCACAAECcLDAAgAEHcNDYCACAACwUAQYA3CxMAIABBBGpBACABKAIEQbA2RhsLaAIBfgF9IAIpAwAhBSADKgIAIQZBwAAQKCIBQgA3AgQgAUHcNDYCACABQeQ1NgIQIAFCADcCJCABIAY4AiAgASAFNwMYIAFCADcCLCABQoCAgPwDNwI0IAAgATYCBCAAIAFBEGo2AgALCgAgAUH8MjYCAAsQAEEIECgiAEH8MjYCACAAC+YBAQJ/AkAgAwRAIARFDQEgBEEDcSEGIAEoAgAhAEEAIQMgBEEBa0EDTwRAIARBfHEhBANAIAIgA0ECdCIBaiAAIAFqKgIAEGM4AgAgAiABQQRyIgdqIAAgB2oqAgAQYzgCACACIAFBCHIiB2ogACAHaioCABBjOAIAIAIgAUEMciIBaiAAIAFqKgIAEGM4AgAgA0EEaiEDIARBBGsiBA0ACwsgBkUNAQNAIAIgA0ECdCIBaiAAIAFqKgIAEGM4AgAgA0EBaiEDIAZBAWsiBg0ACwwBCyAERQ0AIAJBACAEQQJ0ECoaCwsOACAAQcgwNgIAIAAQJwsMACAAQcgwNgIAIAALBQBB7DILEwAgAEEEakEAIAEoAgRBnDJGGwtoAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQcgwNgIAIAFB0DE2AhAgAUIANwIkIAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgACABNgIEIAAgAUEQajYCAAsKACABQeguNgIACxAAQQgQKCIAQeguNgIAIAALggEBAn8jAEEgayIDJAAgA0EIaiAAQRRqIAEgASACEFMCQCADLQAMDQAgAygCCCIEQRhqIQAgAigCGCEBAkAgBCgCMEF/RgRAIAFBf0YNAgwBCyABQX9HDQAgABAsIARBfzYCMAwBCyADIAA2AhAgASADQRBqIAAgAhBLCyADQSBqJAALAwABC+oBAQJ/AkAgAyAAKAIsIgBLBEAgBEUNASAEQQNxIQYgASAAQQJ0aigCACEAQQAhAyAEQQFrQQNPBEAgBEF8cSEBA0AgAiADQQJ0IgRqIAAgBGoqAgA4AgAgAiAEQQRyIgdqIAAgB2oqAgA4AgAgAiAEQQhyIgdqIAAgB2oqAgA4AgAgAiAEQQxyIgRqIAAgBGoqAgA4AgAgA0EEaiEDIAFBBGsiAQ0ACwsgBkUNAQNAIAIgA0ECdCIBaiAAIAFqKgIAOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLagIBfwF8AkACQCABKAIEIAEtAAsiAyADQRh0QRh1QQBIG0EHRw0AIAFB3A1BBxA1DQAgAigCGEEDRw0BIAACfyACKwMAIgSZRAAAAAAAAOBBYwRAIASqDAELQYCAgIB4CzYCLAsPCxBAAAsOACAAQbQsNgIAIAAQJwsMACAAQbQsNgIAIAALBQBB2C4LIgEBfiABIAKtIAOtQiCGhCAEIAAREwAiBUIgiKcQGyAFpwsbACABIAIgAyAEIAUgBq0gB61CIIaEIAARBgALEwAgAEEEakEAIAEoAgRBnC5GGwtvAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQbQsNgIAIAFBqC02AhAgAUIANwIkIAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgAUEANgI8IAAgATYCBCAAIAFBEGo2AgALGgAgACABKAIIIAUQOwRAIAEgAiADIAQQdgsLNwAgACABKAIIIAUQOwRAIAEgAiADIAQQdg8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBEKAAuTAgEGfyAAIAEoAgggBRA7BEAgASACIAMgBBB2DwsgAS0ANSEHIAAoAgwhBiABQQA6ADUgAS0ANCEIIAFBADoANCAAQRBqIgkgASACIAMgBCAFEHUgByABLQA1IgpyIQcgCCABLQA0IgtyIQgCQCAGQQJIDQAgCSAGQQN0aiEJIABBGGohBgNAIAEtADYNAQJAIAsEQCABKAIYQQFGDQMgAC0ACEECcQ0BDAMLIApFDQAgAC0ACEEBcUUNAgsgAUEAOwE0IAYgASACIAMgBCAFEHUgAS0ANSIKIAdyIQcgAS0ANCILIAhyIQggBkEIaiIGIAlJDQALCyABIAdB/wFxQQBHOgA1IAEgCEH/AXFBAEc6ADQLpwEAIAAgASgCCCAEEDsEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQO0UNAAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNASABQQE2AiAPCyABIAI2AhQgASADNgIgIAEgASgCKEEBajYCKAJAIAEoAiRBAUcNACABKAIYQQJHDQAgAUEBOgA2CyABQQQ2AiwLC4gCACAAIAEoAgggBBA7BEACQCABKAIEIAJHDQAgASgCHEEBRg0AIAEgAzYCHAsPCwJAIAAgASgCACAEEDsEQAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNAiABQQE2AiAPCyABIAM2AiACQCABKAIsQQRGDQAgAUEAOwE0IAAoAggiACABIAIgAkEBIAQgACgCACgCFBEKACABLQA1BEAgAUEDNgIsIAEtADRFDQEMAwsgAUEENgIsCyABIAI2AhQgASABKAIoQQFqNgIoIAEoAiRBAUcNASABKAIYQQJHDQEgAUEBOgA2DwsgACgCCCIAIAEgAiADIAQgACgCACgCGBEFAAsLtQQBBH8gACABKAIIIAQQOwRAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLDwsCQCAAIAEoAgAgBBA7BEACQCACIAEoAhBHBEAgASgCFCACRw0BCyADQQFHDQIgAUEBNgIgDwsgASADNgIgIAEoAixBBEcEQCAAQRBqIgUgACgCDEEDdGohCCABAn8CQANAAkAgBSAITw0AIAFBADsBNCAFIAEgAiACQQEgBBB1IAEtADYNAAJAIAEtADVFDQAgAS0ANARAQQEhAyABKAIYQQFGDQRBASEHQQEhBiAALQAIQQJxDQEMBAtBASEHIAYhAyAALQAIQQFxRQ0DCyAFQQhqIQUMAQsLIAYhA0EEIAdFDQEaC0EDCzYCLCADQQFxDQILIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIMIQYgAEEQaiIFIAEgAiADIAQQayAGQQJIDQAgBSAGQQN0aiEGIABBGGohBQJAIAAoAggiAEECcUUEQCABKAIkQQFHDQELA0AgAS0ANg0CIAUgASACIAMgBBBrIAVBCGoiBSAGSQ0ACwwBCyAAQQFxRQRAA0AgAS0ANg0CIAEoAiRBAUYNAiAFIAEgAiADIAQQayAFQQhqIgUgBkkNAAwCCwALA0AgAS0ANg0BIAEoAiRBAUYEQCABKAIYQQFGDQILIAUgASACIAMgBBBrIAVBCGoiBSAGSQ0ACwsL1QUBBH8jAEFAaiIFJAACQCABQbCbAkEAEDsEQCACQQA2AgBBASEDDAELAn8CQCAAIAEgAC0ACEEYcQR/QQEFIAFFDQEgAUHEmAJBpJkCED0iBkUNASAGLQAIQRhxQQBHCxA7IQQLIAQLBEBBASEDIAIoAgAiAEUNASACIAAoAgA2AgAMAQsCQCABRQ0AIAFBxJgCQdSZAhA9IgRFDQEgAigCACIBBEAgAiABKAIANgIACyAEKAIIIgEgACgCCCIGQX9zcUEHcQ0BIAFBf3MgBnFB4ABxDQFBASEDIAAoAgwgBCgCDEEAEDsNASAAKAIMQaSbAkEAEDsEQCAEKAIMIgBFDQIgAEHEmAJBiJoCED1FIQMMAgsgACgCDCIBRQ0AQQAhAyABQcSYAkHUmQIQPSIBBEAgAC0ACEEBcUUNAgJ/IAEhACAEKAIMIQICQANAQQAgAkUNAhogAkHEmAJB1JkCED0iAkUNASACKAIIIAAoAghBf3NxDQFBASAAKAIMIAIoAgxBABA7DQIaIAAtAAhBAXFFDQEgACgCDCIBRQ0BIAFBxJgCQdSZAhA9IgEEQCACKAIMIQIgASEADAELCyAAKAIMIgBFDQAgAEHEmAJBxJoCED0iAEUNACAAIAIoAgwQjQEhAwsgAwshAwwCCyAAKAIMIgFFDQEgAUHEmAJBxJoCED0iAQRAIAAtAAhBAXFFDQIgASAEKAIMEI0BIQMMAgsgACgCDCIARQ0BIABBxJgCQfSYAhA9IgFFDQEgBCgCDCIARQ0BIABBxJgCQfSYAhA9IgBFDQEgBUEIaiIDQQRyQQBBNBAqGiAFQQE2AjggBUF/NgIUIAUgATYCECAFIAA2AgggACADIAIoAgBBASAAKAIAKAIcEQcAAkAgBSgCICIAQQFHDQAgAigCAEUNACACIAUoAhg2AgALIABBAUYhAwwBC0EAIQMLIAVBQGskACADC24BAn8gACABKAIIQQAQOwRAIAEgAiADEHcPCyAAKAIMIQQgAEEQaiIFIAEgAiADEI4BAkAgBEECSA0AIAUgBEEDdGohBCAAQRhqIQADQCAAIAEgAiADEI4BIAEtADYNASAAQQhqIgAgBEkNAAsLCzEAIAAgASgCCEEAEDsEQCABIAIgAxB3DwsgACgCCCIAIAEgAiADIAAoAgAoAhwRBwALGAAgACABKAIIQQAQOwRAIAEgAiADEHcLCwoAIAFBlCo2AgALowEBAn8jAEFAaiIDJAACf0EBIAAgAUEAEDsNABpBACABRQ0AGkEAIAFBxJgCQfSYAhA9IgFFDQAaIANBCGoiBEEEckEAQTQQKhogA0EBNgI4IANBfzYCFCADIAA2AhAgAyABNgIIIAEgBCACKAIAQQEgASgCACgCHBEHACADKAIgIgBBAUYEQCACIAMoAhg2AgALIABBAUYLIQAgA0FAayQAIAALCgAgACABQQAQOwsJACAAEJABECcLCAAgABB4ECcLEABBCBAoIgBBlCo2AgAgAAsFAEGMDAsDAAALBQBBxQ0LCQAgACgCPBAeC/MCAQd/IwBBIGsiBCQAIAQgACgCHCIFNgIQIAAoAhQhAyAEIAI2AhwgBCABNgIYIAQgAyAFayIBNgIUIAEgAmohBUECIQcgBEEQaiIDIQECfwJAAkAgACgCPCADQQIgBEEMahASIgMEf0HAogIgAzYCAEF/BUEAC0UEQANAIAUgBCgCDCIDRg0CIANBf0wNAyABIAMgASgCBCIISyIGQQN0aiIJIAMgCEEAIAYbayIIIAkoAgBqNgIAIAFBDEEEIAYbaiIJIAkoAgAgCGs2AgAgBSADayEFIAAoAjwgAUEIaiABIAYbIgEgByAGayIHIARBDGoQEiIDBH9BwKICIAM2AgBBfwVBAAtFDQALCyAFQX9HDQELIAAgACgCLCIBNgIcIAAgATYCFCAAIAEgACgCMGo2AhAgAgwBCyAAQQA2AhwgAEIANwMQIAAgACgCAEEgcjYCAEEAIAdBAkYNABogAiABKAIEawshACAEQSBqJAAgAAtSAQF/IwBBEGsiAyQAIAAoAjwgAacgAUIgiKcgAkH/AXEgA0EIahAZIgAEf0HAogIgADYCAEF/BUEACyEAIAMpAwghASADQRBqJABCfyABIAAbCwQAQQALJwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCEAEKkBIAFBEGokACAAC14BA38jAEEQayIBJAAgASAANgIMAn8jAEEQayIAIAEoAgw2AgggACAAKAIIKAIENgIMIAAoAgwiAAsQTUEBaiICEFQiAwR/IAMgACACEDAFQQALIQAgAUEQaiQAIAALrAQCB38BfCAAKAIgIQYCQCAAKAIEIghFDQACQCAIQQN0IgpBEGsiCUEEdkEBakEDcSIHRQRAIAIhBSAGIQQMAQsgAiEFIAYhBANAIAQgBSoCALs5AwAgBCADKgIAu5o5AwggBEEQaiEEIANBBGohAyAFQQRqIQUgB0EBayIHDQALCyAJQTBJDQAgBiAKaiEJA0AgBCAFKgIAuzkDACAEIAMqAgC7mjkDCCAEIAUqAgS7OQMQIAQgAyoCBLuaOQMYIAQgBSoCCLs5AyAgBCADKgIIu5o5AyggBCAFKgIMuzkDMCAEIAMqAgy7mjkDOCADQRBqIQMgBUEQaiEFIARBQGsiBCAJRw0ACwsgBiACIAhBAXRBfHFqKgIAuzkDCCAIQX8gBiAAKAIIIAAoAhQQrgECQCAAKAIEIgJFDQBEAAAAAAAAAEAgArijIQsgACgCICEDIAJBA3EhBUEAIQQgAkEBa0EDTwRAIAJBfHEhBwNAIAEgBEECdGogCyADIARBA3RqKwMAorY4AgAgASAEQQFyIgBBAnRqIAsgAyAAQQN0aisDAKK2OAIAIAEgBEECciIAQQJ0aiALIAMgAEEDdGorAwCitjgCACABIARBA3IiAEECdGogCyADIABBA3RqKwMAorY4AgAgBEEEaiEEIAdBBGsiBw0ACwsgBUUNAANAIAEgBEECdGogCyADIARBA3RqKwMAorY4AgAgBEEBaiEEIAVBAWsiBQ0ACwsLkwQBBn8gACgCICEGAkAgACgCBCIHRQ0AIAdBA3EhCCAHQQFrQQNPBEAgB0F8cSEJA0AgBiAEQQN0aiABIARBAnRqKgIAuzkDACAGIARBAXIiBUEDdGogASAFQQJ0aioCALs5AwAgBiAEQQJyIgVBA3RqIAEgBUECdGoqAgC7OQMAIAYgBEEDciIFQQN0aiABIAVBAnRqKgIAuzkDACAEQQRqIQQgCUEEayIJDQALCyAIRQ0AA0AgBiAEQQN0aiABIARBAnRqKgIAuzkDACAEQQFqIQQgCEEBayIIDQALCyAHQQEgBiAAKAIIIAAoAhQQrgECQCAAKAIEIgZFDQAgACgCICIFIQQgAyEAIAIhASAGQQN0IgdBEGsiCUEEdkEBakEDcSIIBEAgBSEEA0AgASAEKwMAtjgCACAAIAQrAwi2jDgCACAAQQRqIQAgBEEQaiEEIAFBBGohASAIQQFrIggNAAsLIAlBMEkNACAFIAdqIQUDQCABIAQrAwC2OAIAIAAgBCsDCLaMOAIAIAEgBCsDELY4AgQgACAEKwMYtow4AgQgASAEKwMgtjgCCCAAIAQrAyi2jDgCCCABIAQrAzC2OAIMIAAgBCsDOLaMOAIMIABBEGohACABQRBqIQEgBEFAayIEIAVHDQALCyACIAZBAXRBfHEiAGogAyoCAIw4AgAgA0EANgIAIAAgA2pBADYCAAvABgIGfwN8AkAgACgCBCABRg0AIAAoAgwgACgCCCIEa0ECdSECAkAgAgJ/IAG4nyIJmUQAAAAAAADgQWMEQCAJqgwBC0GAgICAeAtBAmoiA0kEQCAAQQhqIAMgAmsQQgwBCyACIANNDQAgACAEIANBAnRqNgIMCwJAIAFBAXYiAiAAKAIYIAAoAhQiBGtBA3UiA0sEQCAAQRRqIAIgA2sQiQEMAQsgAiADTw0AIAAgBCACQQN0ajYCGAsCQCABIAAoAiQgACgCICIDa0EDdSICSwRAIABBIGogASACaxCJAQwBCyABIAJPDQAgACADIAFBA3RqNgIkCyAAIAE2AgQgACgCFCEDIAAoAggiBUEBNgIEIAUgAUEEbSIENgIAAkACQCABQQxOBEAgA0IANwMIIANCgICAgICAgPg/NwMAIAMgBEEBdiIGQQN0aiICRBgtRFT7Iek/IAa3IgijIgkgCKIQWSIIOQMIIAIgCDkDACABQRdMDQFBAiECA0AgAyACQQN0IgdqIAkgAreiIggQWSIKOQMAIAMgB0EIcmogCBBsIgg5AwAgAyAEIAJrQQN0aiIHIAo5AwggByAIOQMAIAJBAmoiAiAGSQ0ACyAEIAVBCGogAxCDASAAKAIIIQUgACgCFCEDCyAFIAQ2AgQgAUEISA0CRBgtRFT7Iek/IARBAXYiBrciCKMiCSAIohBZIQgMAQsgBSAENgIECyADIARBA3RqIgEgCDkDACABIAZBA3RqIAhEAAAAAAAA4D+iOQMAIARBBEkNAEEBIQIgBkECIAZBAksbQQFrIgBBAXEhBSAGQQNPBEAgAEF+cSEAA0AgASACQQN0aiAJIAK3oiIIEFlEAAAAAAAA4D+iOQMAIAEgBCACa0EDdGogCBBsRAAAAAAAAOA/ojkDACABIAJBAWoiA0EDdGogCSADt6IiCBBZRAAAAAAAAOA/ojkDACABIAQgA2tBA3RqIAgQbEQAAAAAAADgP6I5AwAgAkECaiECIABBAmsiAA0ACwsgBUUNACABIAJBA3RqIAkgAreiIgkQWUQAAAAAAADgP6I5AwAgASAEIAJrQQN0aiAJEGxEAAAAAAAA4D+iOQMACwtQAQF/IABB5PABNgIAIAAoAiAiAQRAIAAgATYCJCABECcLIAAoAhQiAQRAIAAgATYCGCABECcLIAAoAggiAQRAIAAgATYCDCABECcLIAAQJwtOAQF/IABB5PABNgIAIAAoAiAiAQRAIAAgATYCJCABECcLIAAoAhQiAQRAIAAgATYCGCABECcLIAAoAggiAQRAIAAgATYCDCABECcLIAALBQBBqwoLCAAgABBmECcLHwEBfyAAQfjvATYCACAAKAIEIgEEQCABECcLIAAQJwscACAAQcwCaiAAKAKQBCAAKALkAyAAKAIIEIQBCwkAIAAQsAEQJwskAQF/IABB+O8BNgIAIAAoAgQiAQRAIAEQJwsgAEIANwIEIAALBgBB2OwBCxQAIABBCGpBACABKAIEQdjrAUYbCzsBAX8gACgCCEEoaiAAQRBqEDQiAUUEQEHIERBFAAsgASgCECIBIABBGGogAEEoaiABKAIAKAIIEQMAC0YBAX8jAEEQayIBJAAgAEFAaygCAEF/RwRAIABBKGoQLAsgAEF/NgJAIAAsACNBf0wEQCAAKAIYECcLIAAQJyABQRBqJAALQgEBfyMAQRBrIgEkACAAQUBrKAIAQX9HBEAgAEEoahAsCyAAQX82AkAgACwAI0F/TARAIAAoAhgQJwsgAUEQaiQAC6UBAQN/IwBBEGsiAyQAIAFB2OkBNgIAIAEgACkDEDcDECABIAApAwg3AwggAUEYaiECAkAgACwAI0EATgRAIAIgAEEYaiIEKQMANwMAIAIgBCgCCDYCCAwBCyACIAAoAhggACgCHBA5CyABQX82AkAgAUEAOgAoIABBQGsoAgAiAkF/RwRAIAIgAUEoaiAAQShqED4gASAAKAJANgJACyADQRBqJAALsQEBBH8jAEEQayIEJABByAAQKCIBQdjpATYCACABIAApAxA3AxAgASAAKQMINwMIIAFBGGohAgJAIAAsACNBAE4EQCACIABBGGoiAykDADcDACACIAMoAgg2AggMAQsgAiAAKAIYIAAoAhwQOQsgAUFAa0F/NgIAIAFBKGoiAkEAOgAAIABBQGsoAgAiA0F/RwRAIAMgAiAAQShqED4gASAAKAJANgJACyAEQRBqJAAgAQtPAQF/IwBBEGsiASQAIABB2OkBNgIAIABBQGsoAgBBf0cEQCAAQShqECwLIABBfzYCQCAALAAjQX9MBEAgACgCGBAnCyAAECcg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IDYCPCACQUBrQgA3AwAgAkHIAGoiBEIANwMAIAJCgICAgPADNwNQIAQQaSACQgA3A2AgAkIANwNYIAJCADcDcCACQSA2AmwgAiAJNgJoIAJB+ABqIgRCADcDACACQoCAgIDwAzcDgAEgBEEgEEIgA0EAOgAsIANB89LpqwY2AiggA0EEOgAzIAIoAmghBCADQQM2AiAgAyAEuDkDCCACIANBKGogA0EIaiACKAIAKAIIEQMAIAMoAiBBf0cEQCADQQhqECwLIAMsADNBf0wEQCADKAIoECcLIANBQGskACAAIAE2AgQgACAKNgIACwsAIAFBgNoBNgIACxEAQQgQKCIAQYDaATYCACAACzAAAkAgA0UEQCAERQ0BIAJBACAEQQJ0ECoaDwsgBEUNACACIAEoAgAgBEECdBA8CwsJACAAKAIIEAAL6wQBA38jAEEQayIFJAACQAJAAkAgASgCBCABLQALIgMgA0EYdEEYdUEASBtBBEcNACABQfIQQQQQNQ0AIAIoAhghAyAFQTAQKCIBNgIAIAVCroCAgICGgICAfzcCBCABQQA6AC4gAUHjECkAADcAJiABQd0QKQAANwAgIAFB1RApAAA3ABggAUHNECkAADcAECABQcUQKQAANwAIIAFBvRApAAA3AAAgA0EERw0BIAEQJyACKAIYQQRHDQICQCACLAALQQBOBEAgBSACKAIINgIIIAUgAikCADcDAAwBCyAFIAIoAgAgAigCBBA5CyAFKAIAIAUgBS0ACyICQRh0QRh1QQBIIgMbIQECQCAFKAIEIAIgAxsiA0EESQRAIAMiBCECDAELAkAgA0EEayICQQRxBEAgAyEEDAELIAEoAABBldPH3gVsIgRBGHYgBHNBldPH3gVsIANBldPH3gVscyEEIAFBBGohASACIQMLIAJBBEkNACADIQIDQCABKAAEQZXTx94FbCIDQRh2IANzQZXTx94FbCABKAAAQZXTx94FbCIDQRh2IANzQZXTx94FbCAEQZXTx94FbHNBldPH3gVscyEEIAFBCGohASACQQhrIgJBA0sNAAsLAkACQAJAAkAgAkEBaw4DAgEAAwsgAS0AAkEQdCAEcyEECyABLQABQQh0IARzIQQLIAQgAS0AAHNBldPH3gVsIQQLIAAgBEENdiAEc0GV08feBWwiAEEPdiAAczYCLCAFLAAL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DQQgAxAnCwJAIAEoAgQgAS0ACyIDIANBGHRBGHVBAEgbQQhHDQAgAUHCCkEIEDUNACACKAIYIQUgBEHAABAoIgM2AgAgBEKxgICAgIiAgIB/NwIEIANBADoAMSADQfMbLQAAOgAwIANB6xspAAA3ACggA0HjGykAADcAICADQdsbKQAANwAYIANB0xspAAA3ABAgA0HLGykAADcACCADQcMbKQAANwAAIAVBA0cNBCADECcgAigCGEEDRw0BIAIrAwAhBiAEQdAAECgiAzYCACAEQsOAgICAioCAgH83AgQgA0HYHkHDABAwIgNBADoAQyAGRAAAAAAAAAAAZEUNBCAGRAAAAAAAABRAY0UNBCADECcLAkAgASgCBCABLQALIgMgA0EYdEEYdUEASBtBBEcNACABQfIQQQQQNQ0AIAIoAhghBSAEQTAQKCIDNgIAIARCrYCAgICGgICAfzcCBCADQQA6AC0gA0HXHSkAADcAJSADQdIdKQAANwAgIANByh0pAAA3ABggA0HCHSkAADcAECADQbodKQAANwAIIANBsh0pAAA3AAAgBUEERw0EIAMQJwsgBCAAQRRqIAEgASACEFMgBC0ABA0CIAQoAgAiA0EYaiEAIAIoAhghASADKAIwQX9GBEAgAUF/Rg0DDAILIAFBf0cNASAAECwgA0F/NgIwDAILEEAACyAEIAA2AgAgASAEIAAgAhBLCyAEQRBqJAAPC0EIEAEiACAEEDggAEH8lwJBARACAAveAQEFfyMAQRBrIgQkACAAQcjVATYCACAAKAJYIgIEQCACIAAoAlwiAUYEfyACBQNAIAFBDGsiBSgCACIDBEAgAUEIayADNgIAIAMQJwsgBSIBIAJHDQALIAAoAlgLIQEgACACNgJcIAEQJwsgAEGILjYCACAAKAIcIgEEQANAIAEoAgAhAiABKAIwQX9HBEAgAUEYahAsCyABQX82AjAgASwAE0F/TARAIAEoAggQJwsgARAnIAIiAQ0ACwsgACgCFCEBIABBADYCFCABBEAgARAnCyAAECcgBEEQaiQAC2oBBH8gAEHI1QE2AgAgACgCWCIBBEAgASAAKAJcIgJGBH8gAQUDQCACQQxrIgMoAgAiBARAIAJBCGsgBDYCACAEECcLIAMiAiABRw0ACyAAKAJYCyEDIAAgATYCXCADECcLIAAQxAEa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AjBBf0cEQCABQRhqECwLIAFBfzYCMCABLAATQX9MBEAgASgCCBAnCyABECcgAiIBDQALCyAAKAIUIQIgAEEANgIUIAIEQCACECcLIAAQJyADQRBqJAALnAEBA38jAEEQayIDJAAgAEGQ0gE2AgAgACgCOCICBEAgACACNgI8IAIQJwsgAEGILjYCACAAKAIcIgEEQANAIAEoAgAhAiABKAIwQX9HBEAgAUEYahAsCyABQX82AjAgASwAE0F/TARAIAEoAggQJwsgARAnIAIiAQ0ACwsgACgCFCECIABBADYCFCACBEAgAhAnCyADQRBqJAAgAAsPACAAQaDRATYCACAAECcLDQAgAEGg0QE2AgAgAAsGAEGA0wELFAAgAEEEakEAIAEoAgRByNIBRhsLmwECAX4BfSACKQMAIQUgAyoCACEGQdgAECgiAUIANwIEIAFBoNEBNgIAIAFBkNIBNgIQIAFCADcCJCABIAY4AiAgASAFNwMYIAFCADcCLCABQoCAgPwDNwI0IAFBQGtCADcDACABQSA2AjwgAUHIAGoiAkIANwMAIAFCgICAgPADNwNQIAJBIBCJASAAIAE2AgQgACABQRBqNgIACxUAIABB6CM2AgAgACgCCBAAIAAQJwsLACABQdjPATYCAAsRAEEIECgiAEHYzwE2AgAgAAvYAQIFfQZ/AkAgA0EGTwRAIARFDQEgASgCFCELIAEoAhAhDCABKAIMIQ0gASgCCCEOIAEoAgQhDyABKAIAIRBBACEDA0AgDSADQQJ0IgFqKgIAIQggASAPaioCACEJIAAqAjAhCiAAIAEgDmoqAgAgASALaioCACIGlCABIAxqKgIAIAEgEGoqAgAgBpQgACoCLJIiB5STOAIwIAAgCiAJIAaUIAggB5STkjgCLCABIAJqIAc4AgAgA0EBaiIDIARHDQALDAELIARFDQAgAkEAIARBAnQQKhoLCw8AIABB0M0BNgIAIAAQJwsNACAAQdDNATYCACAACwYAQcjPAQsUACAAQQRqQQAgASgCBEGIzwFGGwtxAgF+AX0gAikDACEFIAMqAgAhBkHIABAoIgFCADcCBCABQdDNATYCACABQcjOATYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCABQgA3AjwgACABNgIEIAAgAUEQajYC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gICAgHhyNgIYIAQgATYCECAEIAA2AhQMAQsgBCAAOgAbIARBEGohASAARQ0BCyABIAJBBGogABAwGgsgACABakEAOgAAIAMoAgAiAEFwTw0BAkACQCAAQQtPBEAgAEEQakFwcSICECghASAEIAJBgICAgHhyNgIIIAQgATYCACAEIAA2AgQMAQsgBCAAOgALIAQhASAARQ0BCyABIANBBGogABAwGgsgACABakEAOgAAIAcgBEEQaiAEIAURAwAgBCwAC0F/TARAIAQoAgAQJwsgBCwAG0F/TARAIAQoAhAQJwsgBEEgaiQADwsQRAALEEQACxEAQQgQKCIAQcyfATYCACAAC9IBAQF/AkAgBEUNACAAKAIsIQAgBEEHcSEGQQAhASAEQQFrQQdPBEAgBEF4cSEEA0AgAiABQQJ0IgNqIAA2AgAgAiADQQRyaiAANgIAIAIgA0EIcmogADYCACACIANBDHJqIAA2AgAgAiADQRByaiAANgIAIAIgA0EUcmogADYCACACIANBGHJqIAA2AgAgAiADQRxyaiAANgIAIAFBCGohASAEQQhrIgQNAAsLIAZFDQADQCACIAFBAnRqIAA2AgAgAUEBaiEBIAZBAWsiBg0ACwsL6QEBAn8jAEEQayIDJAACQAJAAkAgASgCBCABLQALIgQgBEEYdEEYdUEASBtBBUcNACABQcoPQQUQNQ0AIAIoAhghBCADQTAQKCIBNgIAIANCr4CAgICGgICAfzcCBCABQQA6AC8gAUGEECkAADcAJyABQf0PKQAANwAgIAFB9Q8pAAA3ABggAUHtDykAADcAECABQeUPKQAANwAIIAFB3Q8pAAA3AAAgBEEDRw0BIAEQJyACKAIYQQNHDQIgACACKwMAtjgCLAsgA0EQaiQADwtBCBABIgAgAxA4IABB/JcCQQEQAgALEEAACw8AIABB3J0BNgIAIAAQJwsNACAAQdydATYCACAACwYAQbyfAQsUACAAQQRqQQAgASgCBEGEnwFGGwt1AgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQdydATYCACABQcyeATYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCABQYCAgPwDNgI8IAAgATYCBCAAIAFBEGo2AgALCwAgAUGUnAE2AgAL9yMD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IAsgCygCDEEBajYCDAsgAyASOgAEIAMgCDYCACADKAIAIQAgBygC7AIhASAHKgLoAiETIAMgAykDKDcDACADIBM4AjggAyABNgI0IAAoAigiAEUNASADQSBqIAAgAyADQThqIANBNGogACgCACgCGBEFACADIAMoAiQiADYCDCADIAMpAyg3AwAgAyADKAIgNgIIIAAEQCAAIAAoAgRBAWo2AgQLQQAhACADKQMAIhWnQZXTx94FbCIBQRh2IAFzQZXTx94FbEGomb30fXNBldPH3gVsIBVCIIinQZXTx94FbCIBQRh2IAFzQZXTx94FbHMiAUENdiABc0GV08feBWwiAUEPdiABcyEBIAMCfwJAIAooAgQiBEUNAAJAIARpIgJBAk8EQCABIgAgBE8EQCABIARwIQALIAooAgAgAEECdGooAgAiBkUNAiACQQFNDQEDQCAGKAIAIgZFDQMgASAGKAIEIgJHBEAgAiAETwR/IAIgBHAFIAILIABHDQQLIAYpAwggFVINAAtBAAwDCyAKKAIAIAEgBEEBa3EiAEECdGooAgAiBkUNAQsgBEEBayECA0AgBigCACIGRQ0BIAEgBigCBCIJR0EAIAIgCXEgAEcbDQEgBikDCCAVUg0AC0EADAELQRgQKCIGIAMpAwA3AwggBiADKAIINgIQIAYgAygCDDYCFCADQgA3AwggBkEANgIAIAYgATYCBAJAIAooAgxBAWqzIhMgCioCECIUIASzlF5BASAEG0UNACAEIARBAWtxQQBHIARBA0lyIARBAXRyIQJBAiEAAkACfyATIBSVjSITQwAAgE9dIBNDAAAAAGBxBEAgE6kMAQtBAAsiCSACIAIgCUkbIgJBAUYNACACIAJBAWtxRQRAIAIhAAwBCyACEDIhACAKKAIEIQQLAkAgACAETQRAIAAgBE8NASAEQQNJIQkCfyAKKAIMsyAKKgIQlY0iE0MAAIBPXSATQwAAAABgcQRAIBOpDAELQQALIQICfwJAIAkNACAEaUEBSw0AIAJBAUEgIAJBAWtna3QgAkECSRsMAQsgAhAyCyICIAAgACACSRsiACAETw0BCyAKIAAQSAsgCigCBCIEIARBAWsiAHFFBEAgACABcSEADAELIAEgBEkEQCABIQAMAQsgASAEcCEACwJAIAooAgAgAEECdGoiASgCACIARQRAIAYgCigCCDYCACAKIAY2AgggASAKQQhqNgIAIAYoAgAiAEUNASAAKAIEIQACQCAEIARBAWsiAXFFBEAgACABcSEADAELIAAgBEkNACAAIARwIQALIAooAgAgAEECdGogBjYCAAwBCyAGIAAoAgA2AgAgACAGNgIACyAKIAooAgxBAWo2AgxBAQs6ADwgAyAGNgI4AkAgAygCDCIARQ0AIAAgACgCBCIBQQFrNgIEIAENACAAIAAoAgAoAggRAAAgABArCyADKAIgIgEgBzYCKEHAABAoIgBBQGshBAJAAkACQAJAIAwoAgQgDC0ACyICIAJBGHRBGHVBAEgbQQRGBEAgDEGYCUEEEDVFDQEgAygCICEBCyADIAMoAiQiAjYCDCADIAE2AgggAyADKQMoNwMAIAIEQCACIAIoAgRBAWo2AgQLIAMgBDYCGCADIAA2AhQgAyAANgIQIAcoAlQiACAHKAJYTw0BIAAgAykDADcDACAAIAMoAgg2AgggACADKAIMNgIMIANCADcDCCAAQgA3AxAgAEEANgIYIAAgAygCEDYCECAAIAMoAhQ2AhQgACADKAIYNgIYIANBADYCGCADQgA3AxAgAEEBNgIgIAcgAEEoajYCVAwCCyADIAMoAiQiATYCDCADIAMpAyg3AwAgAyADKAIgNgIIIAEEQCABIAEoAgRBAWo2AgQLIAMgBDYCGCADIAA2AhQgAyAANgIQAkAgBygCVCIAIAcoAlhJBEAgACADKQMANwMAIAAgAygCCDYCCCAAIAMoAgw2AgwgA0IANwMIIABCADcDECAAQQA2AhggACADKAIQNgIQIAAgAygCFDYCFCAAIAMoAhg2AhggA0EANgIYIANCADcDECAAQQA2AiAgByAAQShqNgJUDAELIwBBEGsiCSQAAkACQAJAIAcoAlQgBygCUCIBa0EobSICQQFqIgBB58yZM0kEQCAAIAcoAlggAWtBKG0iAUEBdCIEIAAgBEsbQebMmTMgAUGz5swZSRsiAEHnzJkzTw0BIABBKGwiABAoIgEgAkEobGoiAiADKQMANwMAIAIgAygCCDYCCCACIAMoAgw2AgwgA0IANwMIIAIgAygCEDYCECACIAMoAhQ2AhQgAiADKAIYNgIYIANBADYCGCADQgA3AxAgAkEANgIgIAAgAWohBCACQShqIQYgBygCVCIAIAcoAlAiAUYNAgNAIAJBKGsiAiAAQShrIgAQXiAAIAFHDQALIAcgBDYCWCAHKAJUIQAgByAGNgJUIAcoAlAhASAHIAI2AlAgACABRg0DA0AgAEEoayECIABBCGsiACgCAEF/RwRAIAIQQwsgAEF/NgIAIAIiACABRw0ACwwDCxAzAAtBhg8QOgALIAcgBDYCWCAHIAY2AlQgByACNgJQCyABBEAgARAnCyAJQRBqJAAgAygCECIBRQ0AIAEgAygCFCIARgR/IAEFA0AgACICQQhrIQACQCACQQRrKAIAIgJFDQAgAiACKAIEIgRBAWs2AgQgBA0AIAIgAigCACgCCBEAACACECsLIAAgAUcNAAsgAygCEAshACADIAE2AhQgABAnCyADKAIMIgBFDQIgACAAKAIEIgFBAWs2AgQgAQ0CIAAgACgCACgCCBEAACAAECsMAgsjAEEQayIJJAACQAJAAkAgBygCVCAHKAJQIgFrQShtIgJBAWoiAEHnzJkzSQRAIAAgBygCWCABa0EobSIBQQF0IgQgACAESxtB5syZMyABQbPmzBlJGyIAQefMmTNPDQEgAEEobCIAECgiASACQShsaiICIAMpAwA3AwAgAiADKAIINgIIIAIgAygCDDYCDCADQgA3AwggAiADKAIQNgIQIAIgAygCFDYCFCACIAMoAhg2AhggA0EANgIYIANCADcDECACQQE2AiAgACABaiEEIAJBKGohBiAHKAJUIgAgBygCUCIBRg0CA0AgAkEoayICIABBKGsiABBeIAAgAUcNAAsgByAENgJYIAcoAlQhACAHIAY2AlQgBygCUCEBIAcgAjYCUCAAIAFGDQMDQCAAQShrIQIgAEEIayIAKAIAQX9HBEAgAhBDCyAAQX82AgAgAiIAIAFHDQALDAMLEDMAC0GGDxA6AAsgByAENgJYIAcgBjYCVCAHIAI2AlALIAEEQCABECcLIAlBEGokACADKAIQIgFFDQAgASADKAIUIgBGBH8gAQUDQCAAIgJBCGshAAJAIAJBBGsoAgAiAkUNACACIAIoAgQiBEEBazYCBCAEDQAgAiACKAIAKAIIEQAAIAIQKwsgACABRw0ACyADKAIQCyEAIAMgATYCFCAAECcLIAMoAgwiAEUNACAAIAAoAgQiAUEBazYCBCABDQAgACAAKAIAKAIIEQAAIAAQ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AzYCMCAAECcLIAIsACtBf0wEQCACKAIgECcLIAIoAhQiAARAIAIgADYCGCAAECcLIAIoAggiAwRAIAMgAigCDCIARgR/IAMFA0AgAEEMayIEKAIAIgUEQCAAQQhrIAU2AgAgBRAnCyAEIgAgA0cNAAsgAigCCAshACACIAM2AgwgABAnCyABKAI4IQMLAkAgA0EHRw0AIAJBCGogASgCJCABKAIga0ECdRCyARogASgCJCABKAIgIgBrIgMEQCACKAIIKAIAIAAgAxA8CwJAIAEsABtBAE4EQCACIAEoAhg2AiggAiABKQIQNwMgDAELIAJBIGogASgCECABKAIUEDkLIAIgAikDCDcCLCACQgA3AwggAikDECETIAJCADcDECACIBM3AjQgAikDGCETIAJCADcDGCACIBM3AjwgAkHIAGogByACQSBqIgAgABCzASACKAI4IgAEQCACIAA2AjwgABAnCyACKAIsIgMEQCADIAIoAjAiAEYEfyADBQNAIABBDGsiBCgCACIFBEAgAEEIayAFNgIAIAUQJwsgBCIAIANHDQALIAIoAiwLIQAgAiADNgIwIAAQJwsgAiwAK0F/TARAIAIoAiAQJwsgAigCFCIABEAgAiAANgIYIAAQJwsgAigCCCIDRQ0AIAMgAigCDCIARgR/IAMFA0AgAEEMayIEKAIAIgUEQCAAQQhrIAU2AgAgBRAnCyAEIgAgA0cNAAsgAigCCAshACACIAM2AgwgABAnCwJAIAEoAgQiA0UEQCABKAIIIgAoAgAgAUYNASABQQhqIQMDQCADKAIAIgFBCGohAyABIAEoAggiACgCAEcNAAsMAQsDQCADIgAoAgAiAw0ACwsgACAKRw0ACwsgAkHQAGokAAwCCyACQcAAECgiADYCICACQryAgICAiICAgH83AiQgAEEAOgA8IABBwhkoAAA2ADggAEG6GSkAADcAMCAAQbIZKQAANwAoIABBqhkpAAA3ACAgAEGiGSkAADcAGCAAQZoZKQAANwAQIABBkhkpAAA3AAggAEGKGSkAADcAAAtBCBABIgAgAkEgahA4DAULIwBBEGsiDiQAIBAoAggiAARAIAZBCGohEQNAIAAoAgggAEEIaiICIAAtABMiAUEYdEEYdUEASCIDGyEFAkAgACgCDCABIAMbIgNBBEkEQCADIgEhBAwBCwJA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IAEgBjgCICABIAU3AxggAUIANwIsIAFCgICA/AM3AjQgACABNgIEIAAgAUEQajYCAAsLACABQeDYADYCAAuUAQEEfyAABEACfyAAKAIQIgEEQCAAIAE2AhQgARAnCyAAKAIEIgIEQCACIAAoAggiA0YEfyACBQNAIANBDGsiASgCACIEBEAgA0EIayAENgIAIAQQJwsgASIDIAJHDQALIAAoAgQLIQEgACACNgIIIAEQJwsgACgCACEBIABBADYCACABBEAgARDFARAnCyAACxAnCwsRAEEIECgiAEHg2AA2AgAgAAvhAQECfwJAIAMEQCAERQ0BIARBA3EhBiABKAIAIQBBACEDIARBAWtBA08EQCAEQXxxIQQDQCACIANBAnQiAWogACABaioCAI44AgAgAiABQQRyIgdqIAAgB2oqAgCOOAIAIAIgAUEIciIHaiAAIAdqKgIAjjgCACACIAFBDHIiAWogACABaioCAI44AgAgA0EEaiEDIARBBGsiBA0ACwsgBkUNAQNAIAIgA0ECdCIBaiAAIAFqKgIAjjgCACADQQFqIQMgBkEBayIGDQALDAELIARFDQAgAkEAIARBAnQQKhoLCw8AIABBpNYANgIAIAAQJwsNACAAQaTWADYCACAACwYAQdDYAAsUACAAQQRqQQAgASgCBEGA2ABGGwtqAgF+AX0gAikDACEFIAMqAgAhBkHAABAoIgFCADcCBCABQaTWADYCACABQbDXADYCECABQgA3AiQgASAGOAIgIAEgBTcDGCABQgA3AiwgAUKAgID8AzcCNCAAIAE2AgQgACABQRBqNgIACwsAIAFBwNQANgIACxEAQQgQKCIAQcDUADYCACAAC+EBAQJ/AkAgAwRAIARFDQEgBEEDcSEGIAEoAgAhAEEAIQMgBEEBa0EDTwRAIARBfHEhBANAIAIgA0ECdCIBaiAAIAFqKgIAjTgCACACIAFBBHIiB2ogACAHaioCAI04AgAgAiABQQhyIgdqIAAgB2oqAgCNOAIAIAIgAUEMciIBaiAAIAFqKgIAjTgCACADQQRqIQMgBEEEayIEDQALCyAGRQ0BA0AgAiADQQJ0IgFqIAAgAWoqAgCNOAIAIANBAWohAyAGQQFrIgYNAAsMAQsgBEUNACACQQAgBEECdBAqGgsLBgBB/OwBCw8AIABBiNIANgIAIAAQ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AGdlcQBleHAAbG9vcABsb2FkUmVzb3VyY2VNYXAAbWV0cm8Ac3RkOjpleGNlcHRpb24ARnVuY3Rpb24AX19jeGFfZ3VhcmRfYWNxdWlyZSBkZXRlY3RlZCByZWN1cnNpdmUgaW5pdGlhbGl6YXRpb24AOiBubyBjb252ZXJzaW9uAHNpbgBtaW4AdGFuAHRhcEluAExvYWRpbmcgcmVzb3VyY2VzIGZyb20gZGlzayBpcyBub3Qgc3VwcG9ydGVkIGluIHdhc20AZnJvbQBtdWwAYm9vbABzdG9sbABzdGQ6OmJhZF9mdW5jdGlvbl9jYWxsAGNoYW5uZWwAaW50ZXJ2YWwAZW1zY3JpcHRlbjo6dmFsAGxlbmd0aABwYXRoAGFzaW5oAGxhdGNoAGxvZwB1bnNpZ25lZCBsb25nAHN0ZDo6d3N0cmluZwBiYXNpY19zdHJpbmcAc3RkOjpzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAcGF0aCBwcm9wIG11c3QgYmUgYSBzdHJpbmcAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQB2YWx1ZQBnYXRlAHByZXBhcmUAdmFsdWUgcHJvcCBmb3IgY29uc3Qgbm9kZSBtdXN0IGJlIGEgbnVtYmVyIHR5cGUAbmFtZSBwcm9wIGZvciB0YXBPdXQgbm9kZSBtdXN0IGJlIGEgc3RyaW5nIHR5cGUAbmFtZSBwcm9wIGZvciB0YXBJbiBub2RlIG11c3QgYmUgYSBzdHJpbmcgdHlwZQBzY29wZQBuYW1lAHNhbXBsZQBkb3VibGUAdGFibGUAOiBvdXQgb2YgcmFuZ2UAbWVzc2FnZQBtb2RlAGRlbGV0ZU5vZGUAY3JlYXRlTm9kZQBzb3VyY2UAbW9kAHVub3JkZXJlZF9tYXA6OmF0OiBrZXkgbm90IGZvdW5kAGhvbGQAYXBwZW5kQ2hpbGQAdm9pZABzZWVkAGFkZABiaXF1YWQAc3ViAGRhdGEAZ2V0T3V0cHV0QnVmZmVyRGF0YQBnZXRJbnB1dEJ1ZmZlckRhdGEAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBUcnlpbmcgdG8gYXBwZW5kIGEgY2hpbGQgdG8gYW4gdW5rbm93biBwYXJlbnQuAFRyeWluZyB0byBhcHBlbmQgYW4gdW5rbm93biBjaGlsZCB0byBhIHBhcmVudC4ARmFpbGVkIGV2ZW50IGludmFyaWFudC4AUnVudGltZSBoYXMgbm90IGJlZW4gcHJlcGFyZWQgeWV0LgBsb2FkUmVzb3VyY2VEYXRhIGV4cGVjdHMgYW4gb2JqZWN0LgBUcnlpbmcgdG8gY3JlYXRlIGEgbm9kZSB3aGljaCBhbHJlYWR5IGV4aXN0cy4AQ2Fubm90IGluaXRpYWxpemUgQXVkaW9SZXNvdXJjZU1hcCBmcm9tIGludmFsaWQgdmFsdWUgdHlwZXMuAHN0YXJ0T2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLgBzdG9wT2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLgBzaXplIHByb3AgbXVzdCBiZSBhIG51bWJlci4Ac2l6ZSBwcm9wIG9uIHRoZSB0YXBPdXQgbm9kZSBtdXN0IGJlIGEgbnVtYmVyLgBpbnRlcnZhbCBwcm9wIG9uIHRoZSBtZXRybyBub2RlIG11c3QgYmUgYSBudW1iZXIuAGNoYW5uZWxzIHByb3Agb24gdGhlIHNjb3BlIG5vZGUgbXVzdCBiZSBhIG51bWJlci4Ac2l6ZSBwcm9wIG9uIHRoZSBzY29wZSBub2RlIG11c3QgYmUgYSBudW1iZXIuAHN0YXJ0T2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgbnVtYmVyLgBzdG9wT2Zmc2V0IHByb3AgZm9yIHRoZSBzYW1wbGUgbm9kZSBtdXN0IGJlIGEgbnVtYmVyLgBGYWlsZWQgdG8gYWxsb2NhdGUgZnJvbSB0aGUgcG9vbC4AbmFtZSBwcm9wIG9uIHRoZSBzY29wZSBub2RlIG11c3QgYmUgYSBzdHJpbmcuAG1vZGUgcHJvcCBmb3IgdGhlIHNhbXBsZSBub2RlIG11c3QgYmUgYSBzdHJpbmcuAHNpemUgcHJvcCBvbiB0aGUgdGFwT3V0IG5vZGUgbXVzdCBiZSBhdCBsZWFzdCBhcyBiaWcgYXMgdGhlIGJsb2NrIHNpemUuAGNoYW5uZWxzIHByb3Agb24gdGhlIHNjb3BlIG5vZGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDQsIGluY2x1c2l2ZS4Ac2l6ZSBwcm9wIG9uIHRoZSBzY29wZSBub2RlIG11c3QgYmUgYmV0d2VlbiAyNTYgYW5kIDgxOTIsIGluY2x1c2l2ZS4Ac2VxIHByb3AgZm9yIHNlcSBub2RlIG11c3QgYmUgYW4gYXJyYXkgdHlwZS4AbG9vcCBwcm9wIGZvciBzZXEgbm9kZSBtdXN0IGJlIGEgYm9vbGVhbiB0eXBlLgBob2xkIHByb3AgZm9yIHNlcSBub2RlIG11c3QgYmUgYSBib29sZWFuIHR5cGUuAFRyeWluZyB0byBzZXQgYSBwcm9wZXJ0eSBmb3IgYW4gdW5yZWNvZ25pemVkIG5vZGUuAFRyeWluZyB0byBkZWxldGUgYW4gdW5yZWNvZ25pemVkIG5vZGUuAE5hTiB2YWx1ZSBlbmNvdW50ZXJlZC4ASGVhcCBzaXplIGV4Y2VlZGVkLgBTdGFjayBzaXplIGV4Y2VlZGVkLgBUYWJsZSBzaXplIGV4Y2VlZGVkLgBpbnRlcnZhbCBwcm9wIG9uIHRoZSBtZXRybyBub2RlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuAChudWxsKQBQdXJlIHZpcnR1YWwgZnVuY3Rpb24gY2FsbGVkIQBJbnZhbGlkIGNoYW5uZWwgaW5kZXggZm9yIABVbmtub3duIG5vZGUgdHlwZSAARmFpbGVkIHRvIGZpbmQgcmVzb3VyY2UgACVzCgBOMTBlbXNjcmlwdGVuM3ZhbEUAAABojgAAwxEAAAAAAABIEwAAHAAAAB0AAAAeAAAAHwAAACAAAAAhAAAAIgAAACMAAAAkAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJWk4yNEVsZW1lbnRhcnlBdWRpb1Byb2Nlc3NvcjE5cHJvY2Vzc1F1ZXVlZEV2ZW50c0VOMTBlbXNjcmlwdGVuM3ZhbEVFVWxSS05TXzEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUVONGVsZW0yanM1VmFsdWVFRV9OUzhfSVNHX0VFRnZTQ19TRl9FRUUATlN0M19fMjEwX19mdW5jdGlvbjZfX2Jhc2VJRnZSS05TXzEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUVONGVsZW0yanM1VmFsdWVFRUVFAABojgAA0hIAAJCOAAAMEgAAQBMAAAAAAADQEwAA2BEAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUAAAAAaI4AAJ8TAADsjgAAYBMAAAAAAAABAAAAyBMAAAAAAABONW1wYXJrMThiYWRfdmFyaWFudF9hY2Nlc3NFAAAAAJCOAADoEwAANIsAAAAAAAAIFAAABAAAACUAAAAmAAAA2BEAANgRAABaTjI0RWxlbWVudGFyeUF1ZGlvUHJvY2Vzc29yMTlwcm9jZXNzUXVldWVkRXZlbnRzRU4xMGVtc2NyaXB0ZW4zdmFsRUVVbFJLTlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOUzJfMTFjaGFyX3RyYWl0c0ljRUVOUzJfOWFsbG9jYXRvckljRUVFRU40ZWxlbTJqczVWYWx1ZUVFXwBojgAAMBQAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQAAaI4AANQUAACkjQAA2BEAANgRAADYEQAAAAAAACAWAAAnAAAAKAAAACkAAAAqAAAAKwAAACwAAAAtAAAALgAAAC8AAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzEySWRlbnRpdHlOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUATlN0M19fMjEwX19mdW5jdGlvbjZfX2Jhc2VJRk5TXzEwc2hhcmVkX3B0cklONGVsZW05R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAGiOAADMFQAAkI4AADgVAAAYFgAAAAAAAJQWAAAwAAAAMQAAADIAAAAzAAAANAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEySWRlbnRpdHlOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQCQjgAASBYAAEyHAAAAAAAA9BYAADUAAAA2AAAANwAAADgAAAA5AAAATjRlbGVtMTJJZGVudGl0eU5vZGVJZkVFAE40ZWxlbTlHcmFwaE5vZGVJZkVFAAAAaI4AANUWAACQjgAAvBYAAOwWAAAAAAAA7BYAADUAAAA6AAAAOwAAADwAAAA5AAAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzEySWRlbnRpdHlOb2RlSWZFRUVFAAAAaI4AABwXAAAAAAAANBgAACcAAAA9AAAAPgAAAD8AAABAAAAAQQAAAEIAAABDAAAARAAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNzaW5mRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAACMFwAAGBYAAAAAAAC8GAAARQAAAEYAAABHAAAAMwAAAEgAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3NpbmZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAACQjgAAXBgAAEyHAAAAAAAAEBkAADUAAABJAAAAOwAAAEoAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNzaW5mRUVFRQCQjgAA5BgAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNzaW5mRUVFRUVFAAAAAGiOAAAcGQAAAAAAAEgaAAAnAAAASwAAAEwAAABNAAAATgAAAE8AAABQAAAAUQAAAFIAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozY29zZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAACQjgAAoBkAABgWAAAAAAAA0BoAAFMAAABUAAAAVQAAADMAAABWAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNjb3NmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAkI4AAHAaAABMhwAAAAAAACQbAAA1AAAAVwAAADsAAABYAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozY29zZkVFRUUAkI4AAPgaAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozY29zZkVFRUVFRQAAAABojgAAMBsAAAAAAABcHAAAJwAAAFkAAABaAAAAWwAAAFwAAABdAAAAXgAAAF8AAABgAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3RhbmZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAkI4AALQbAAAYFgAAAAAAAOQcAABhAAAAYgAAAGMAAAAzAAAAZAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozdGFuZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAJCOAACEHAAATIcAAAAAAAA4HQAANQAAAGUAAAA7AAAAZgAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3RhbmZFRUVFAJCOAAAMHQAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM3RhbmZFRUVFRUUAAAAAaI4AAEQdAAAAAAAAcB4AACcAAABnAAAAaAAAAGkAAABqAAAAawAAAGwAAABtAAAAbgAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjR0YW5oZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAJCOAADIHQAAGBYAAAAAAAD4HgAAbwAAAHAAAABxAAAAMwAAAHIAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNHRhbmhmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQCQjgAAmB4AAEyHAAAAAAAAUB8AADUAAABzAAAAOwAAAHQAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjR0YW5oZkVFRUUAAAAAkI4AACAfAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0dGFuaGZFRUVFRUUAAABojgAAXB8AAAAAAACMIAAAJwAAAHUAAAB2AAAAdwAAAHgAAAB5AAAAegAAAHsAAAB8AAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWFzaW5oZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAJCOAADgHwAAGBYAAAAAAAAYIQAAfQAAAH4AAAB/AAAAMwAAAIAAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWFzaW5oZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAAAkI4AALQgAABMhwAAAAAAAHAhAAA1AAAAgQAAADsAAACCAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1YXNpbmhmRUVFRQAAAJCOAABAIQAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWFzaW5oZkVFRUVFRQAAaI4AAHwhAAAAAAAAqCIAACcAAACDAAAAhAAAAIUAAACGAAAAhwAAAIgAAACJAAAAigAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNsb2dmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAAAAIgAAGBYAAAAAAAAwIwAAiwAAAIwAAACNAAAAMwAAAI4AAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2xvZ2ZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAACQjgAA0CIAAEyHAAAAAAAAhCMAADUAAACPAAAAOwAAAJAAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNsb2dmRUVFRQCQjgAAWCMAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNsb2dmRUVFRUVFAAAAAGiOAACQIwAAAAAAAMAkAAAnAAAAkQAAAJIAAACTAAAAlAAAAJUAAACWAAAAlwAAAJgAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1bG9nMTBmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAAkI4AABQkAAAYFgAAAAAAAEwlAACZAAAAmgAAAJsAAAAzAAAAnAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1bG9nMTBmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAACQjgAA6CQAAEyHAAAAAAAApCUAADUAAACdAAAAOwAAAJ4AAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVsb2cxMGZFRUVFAAAAkI4AAHQlAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o1bG9nMTBmRUVFRUVFAABojgAAsCUAAAAAAADcJgAAJwAAAJ8AAACgAAAAoQAAAKIAAACjAAAApAAAAKUAAACmAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNGxvZzJmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAkI4AADQmAAAYFgAAAAAAAGQnAACnAAAAqAAAAKkAAAAzAAAAqgAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0bG9nMmZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAJCOAAAEJwAATIcAAAAAAAC8JwAANQAAAKsAAAA7AAAArAAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNGxvZzJmRUVFRQAAAACQjgAAjCcAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRsb2cyZkVFRUVFRQAAAGiOAADIJwAAAAAAAPQoAAAnAAAArQAAAK4AAACvAAAAsAAAALEAAACyAAAAswAAALQAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0Y2VpbGZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQCQjgAATCgAABgWAAAAAAAAfCkAALUAAAC2AAAAtwAAADMAAAC4AAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRjZWlsZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AABwpAABMhwAAAAAAANQpAAA1AAAAuQAAADsAAAC6AAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0Y2VpbGZFRUVFAAAAAJCOAACkKQAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNGNlaWxmRUVFRUVFAAAAaI4AAOApAAAAAAAAECsAACcAAAC7AAAAvAAAAL0AAAC+AAAAvwAAAMAAAADBAAAAwgAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVmbG9vcmZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAACQjgAAZCoAABgWAAAAAAAAnCsAAMMAAADEAAAAxQAAADMAAADGAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVmbG9vcmZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAAAJCOAAA4KwAATIcAAAAAAAD0KwAANQAAAMcAAAA7AAAAyAAAADkAAABONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNWZsb29yZkVFRUUAAACQjgAAxCsAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjVmbG9vcmZFRUVFRUUAAGiOAAAALAAAAAAAACwtAAAnAAAAyQAAAMoAAADLAAAAzAAAAM0AAADOAAAAzwAAANAAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0c3FydGZFRUVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQCQjgAAhCwAABgWAAAAAAAAtC0AANEAAADSAAAA0wAAADMAAADUAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjRzcXJ0ZkVFRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AAFQtAABMhwAAAAAAAAwuAAA1AAAA1QAAADsAAADWAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1o0c3FydGZFRUVFAAAAAJCOAADcLQAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aNHNxcnRmRUVFRUVFAAAAaI4AABguAAAAAAAARC8AACcAAADXAAAA2AAAANkAAADaAAAA2wAAANwAAADdAAAA3gAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNleHBmRUVFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAACcLgAAGBYAAAAAAADMLwAA3wAAAOAAAADhAAAAMwAAAOIAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOFVuYXJ5T3BlcmF0aW9uTm9kZUlmWGFkTF9aM2V4cGZFRUVFTlNfOWFsbG9jYXRvcklTM19FRUVFAACQjgAAbC8AAEyHAAAAAAAAIDAAADUAAADjAAAAOwAAAOQAAAA5AAAATjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNleHBmRUVFRQCQjgAA9C8AAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNleHBmRUVFRUVFAAAAAGiOAAAsMAAAAAAAAFgxAAAnAAAA5QAAAOYAAADnAAAA6AAAAOkAAADqAAAA6wAAAOwAAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozYWJzZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAACQjgAAsDAAABgWAAAAAAAA4DEAAO0AAADuAAAA7wAAADMAAADwAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThVbmFyeU9wZXJhdGlvbk5vZGVJZlhhZExfWjNhYnNmRUVFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAkI4AAIAxAABMhwAAAAAAADQyAAA1AAAA8QAAADsAAADyAAAAOQAAAE40ZWxlbTE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozYWJzZkVFRUUAkI4AAAgyAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4VW5hcnlPcGVyYXRpb25Ob2RlSWZYYWRMX1ozYWJzZkVFRUVFRQAAAABojgAAQDIAAAAAAABsMwAAJwAAAPMAAAD0AAAA9QAAAPYAAAD3AAAA+AAAAPkAAAD6AAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzRsZXNzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAkI4AAMQyAAAYFgAAAAAAAPQzAAD7AAAA/AAAAP0AAAAzAAAA/gAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfNGxlc3NJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAJCOAACUMwAATIcAAAAAAABMNAAANQAAAP8AAAA7AAAAAAEAADkAAABONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzI0bGVzc0lmRUVFRQCQjgAAHDQAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yNGxlc3NJZkVFRUVFRQAAAABojgAAWDQAAAAAAACQNQAAJwAAAAEBAAACAQAAAwEAAAQBAAAFAQAABgEAAAcBAAAIAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzEwbGVzc19lcXVhbElmRUVFRUVFTlNfOWFsbG9jYXRvcklTOV9FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAACQjgAA4DQAABgWAAAAAAAAIDYAAAkBAAAKAQAACwEAADMAAAAMAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU18xMGxlc3NfZXF1YWxJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAACQjgAAuDUAAEyHAAAAAAAAgDYAADUAAAANAQAAOwAAAA4BAAA5AAAATjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yMTBsZXNzX2VxdWFsSWZFRUVFAACQjgAASDYAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yMTBsZXNzX2VxdWFsSWZFRUVFRUUAaI4AAIw2AAAAAAAAxDcAACcAAAAPAQAAEAEAABEBAAASAQAAEwEAABQBAAAVAQAAFgEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU183Z3JlYXRlcklmRUVFRUVFTlNfOWFsbG9jYXRvcklTOV9FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAACQjgAAGDcAABgWAAAAAAAAUDgAABcBAAAYAQAAGQEAADMAAAAaAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU183Z3JlYXRlcklmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAJCOAADsNwAATIcAAAAAAACsOAAANQAAABsBAAA7AAAAHAEAADkAAABONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TdDNfXzI3Z3JlYXRlcklmRUVFRQAAkI4AAHg4AADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlN0M19fMjdncmVhdGVySWZFRUVFRUUAaI4AALg4AAAAAAAA9DkAACcAAAAdAQAAHgEAAB8BAAAgAQAAIQEAACIBAAAjAQAAJAEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU18xM2dyZWF0ZXJfZXF1YWxJZkVFRUVFRU5TXzlhbGxvY2F0b3JJUzlfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAJCOAABAOQAAGBYAAAAAAACIOgAAJQEAACYBAAAnAQAAMwAAACgBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzEzZ3JlYXRlcl9lcXVhbElmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAACQjgAAHDoAAEyHAAAAAAAA7DoAADUAAAApAQAAOwAAACoBAAA5AAAATjRlbGVtMTlCaW5hcnlPcGVyYXRpb25Ob2RlSWZOU3QzX18yMTNncmVhdGVyX2VxdWFsSWZFRUVFAAAAkI4AALA6AADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlN0M19fMjEzZ3JlYXRlcl9lcXVhbElmRUVFRUVFAABojgAA+DoAAAAAAAA0PAAAJwAAACsBAAAsAQAALQEAAC4BAAAvAQAAMAEAADEBAAAyAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TMl83U2FmZVBvd0lmRUVFRUVFTlNfOWFsbG9jYXRvcklTOV9FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAACIOwAAGBYAAAAAAADAPAAAMwEAADQBAAA1AQAAMwAAADYBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TMV83U2FmZVBvd0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAkI4AAFw8AABMhwAAAAAAABg9AAA1AAAANwEAADsAAAA4AQAAOQAAAE40ZWxlbTE5QmluYXJ5T3BlcmF0aW9uTm9kZUlmTlNfN1NhZmVQb3dJZkVFRUUAAJCOAADoPAAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOUJpbmFyeU9wZXJhdGlvbk5vZGVJZk5TXzdTYWZlUG93SWZFRUVFRUUAaI4AACQ9AAAAAAAAUD4AACcAAAA5AQAAOgEAADsBAAA8AQAAPQEAAD4BAAA/AQAAQAEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzRwbHVzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAACoPQAAGBYAAAAAAADYPgAAQQEAAEIBAABDAQAAMwAAAEQBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfNHBsdXNJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAACQjgAAeD4AAEyHAAAAAAAAMD8AADUAAABFAQAAOwAAAEYBAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TdDNfXzI0cGx1c0lmRUVFRQAAkI4AAAA/AADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU3QzX18yNHBsdXNJZkVFRUVFRQBojgAAPD8AAAAAAABoQAAAJwAAAEcBAABIAQAASQEAAEoBAABLAQAATAEAAE0BAABOAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfNW1pbnVzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAkI4AAMA/AAAYFgAAAAAAAPBAAABPAQAAUAEAAFEBAAAzAAAAUgEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU181bWludXNJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAJCOAACQQAAATIcAAAAAAABIQQAANQAAAFMBAAA7AAAAVAEAADkAAABONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlN0M19fMjVtaW51c0lmRUVFRQCQjgAAGEEAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TdDNfXzI1bWludXNJZkVFRUVFRQAAAABojgAAVEEAAAAAAACMQgAAJwAAAFUBAABWAQAAVwEAAFgBAABZAQAAWgEAAFsBAABcAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfMTBtdWx0aXBsaWVzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAACQjgAA3EEAABgWAAAAAAAAHEMAAF0BAABeAQAAXwEAADMAAABgAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzEwbXVsdGlwbGllc0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAAACQjgAAtEIAAEyHAAAAAAAAfEMAADUAAABhAQAAOwAAAGIBAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TdDNfXzIxMG11bHRpcGxpZXNJZkVFRUUAAACQjgAAREMAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TdDNfXzIxMG11bHRpcGxpZXNJZkVFRUVFRQAAaI4AAIhDAAAAAAAAxEQAACcAAABjAQAAZAEAAGUBAABmAQAAZwEAAGgBAABpAQAAagEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TMl8xMVNhZmVEaXZpZGVzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAkI4AABREAAAYFgAAAAAAAFRFAABrAQAAbAEAAG0BAAAzAAAAbgEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOUzFfMTFTYWZlRGl2aWRlc0lmRUVFRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQAAkI4AAOxEAABMhwAAAAAAALBFAAA1AAAAbwEAADsAAABwAQAAOQAAAE40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU18xMVNhZmVEaXZpZGVzSWZFRUVFAACQjgAAfEUAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzExU2FmZURpdmlkZXNJZkVFRUVFRQBojgAAvEUAAAAAAADwRgAAJwAAAHEBAAByAQAAcwEAAHQBAAB1AQAAdgEAAHcBAAB4AQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMyXzdNb2R1bHVzSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAABERgAAGBYAAAAAAAB8RwAAeQEAAHoBAAB7AQAAMwAAAHwBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMxXzdNb2R1bHVzSWZFRUVFTlNfOWFsbG9jYXRvcklTNV9FRUVFAAAAkI4AABhHAABMhwAAAAAAANRHAAA1AAAAfQEAADsAAAB+AQAAOQAAAE40ZWxlbTE4QmluYXJ5UmVkdWNpbmdOb2RlSWZOU183TW9kdWx1c0lmRUVFRQAAAJCOAACkRwAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlNfN01vZHVsdXNJZkVFRUVFRQAAaI4AAOBHAAAAAAAADEkAACcAAAB/AQAAgAEAAIEBAACCAQAAgwEAAIQBAACFAQAAhgEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TMl8zTWluSWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAABkSAAAGBYAAAAAAACUSQAAhwEAAIgBAACJAQAAMwAAAIoBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMxXzNNaW5JZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAACQjgAANEkAAEyHAAAAAAAA6EkAADUAAACLAQAAOwAAAIwBAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzNNaW5JZkVFRUUAAACQjgAAvEkAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzNNaW5JZkVFRUVFRQAAaI4AAPRJAAAAAAAAHEsAACcAAACNAQAAjgEAAI8BAACQAQAAkQEAAJIBAACTAQAAlAEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TMl8zTWF4SWZFRUVFRUVOU185YWxsb2NhdG9ySVM5X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAAB0SgAAGBYAAAAAAACkSwAAlQEAAJYBAACXAQAAMwAAAJgBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xOEJpbmFyeVJlZHVjaW5nTm9kZUlmTlMxXzNNYXhJZkVFRUVOU185YWxsb2NhdG9ySVM1X0VFRUUAAACQjgAAREsAAEyHAAAAAAAA+EsAADUAAACZAQAAOwAAAJoBAAA5AAAATjRlbGVtMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzNNYXhJZkVFRUUAAACQjgAAzEsAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMThCaW5hcnlSZWR1Y2luZ05vZGVJZk5TXzNNYXhJZkVFRUVFRQAAaI4AAARMAAAAAAAAFE0AACcAAACbAQAAnAEAAJ0BAACeAQAAnwEAAKABAAChAQAAogEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfOFJvb3ROb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAACETAAAGBYAAAAAAACETQAAowEAAKQBAAClAQAAMwAAAKYBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW04Um9vdE5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAACQjgAAPE0AAEyHAAAAAAAAwE0AADUAAACnAQAAqAEAAKkBAAA5AAAATjRlbGVtOFJvb3ROb2RlSWZFRQCQjgAArE0AAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOFJvb3ROb2RlSWZFRUVFAAAAAGiOAADMTQAAAAAAAMhOAAAnAAAAqgEAAKsBAACsAQAArQEAAK4BAACvAQAAsAEAALEBAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzlDb25zdE5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQCQjgAAOE4AABgWAAAAAAAAOE8AALIBAACzAQAAtAEAADMAAAC1AQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtOUNvbnN0Tm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AAPBOAABMhwAAAAAAAHhPAAA1AAAAtgEAALcBAAC4AQAAOQAAAE40ZWxlbTlDb25zdE5vZGVJZkVFAAAAAJCOAABgTwAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU185Q29uc3ROb2RlSWZFRUVFAAAAaI4AAIRPAAAAAAAAhFAAACcAAAC5AQAAugEAALsBAAC8AQAAvQEAAL4BAAC/AQAAwAEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTBQaGFzb3JOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAACQjgAA8E8AABgWAAAAAAAA+FAAAMEBAADCAQAAwwEAADMAAADEAQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTBQaGFzb3JOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAJCOAACsUAAATIcAAAAAAAA4UQAANQAAAMUBAAA7AAAAxgEAADkAAABONGVsZW0xMFBoYXNvck5vZGVJZkVFAACQjgAAIFEAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTBQaGFzb3JOb2RlSWZFRUVFAGiOAABEUQAAAAAAAEhSAAAnAAAAxwEAAMgBAADJAQAAygEAAMsBAADMAQAAzQEAAM4BAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE0U2FtcGxlUmF0ZU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAACwUQAAGBYAAAAAAADAUgAAzwEAANABAADRAQAAMwAAANIBAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xNFNhbXBsZVJhdGVOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAJCOAABwUgAATIcAAAAAAAAEUwAANQAAANMBAAA7AAAA1AEAADkAAABONGVsZW0xNFNhbXBsZVJhdGVOb2RlSWZFRQAAkI4AAOhSAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE0U2FtcGxlUmF0ZU5vZGVJZkVFRUUAaI4AABBTAAAAAAAAGFQAACcAAADVAQAA1gEAANcBAADYAQAA2QEAANoBAADbAQAA3AEAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTRTYW1wbGVUaW1lTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAkI4AAIBTAAAYFgAAAAAAAJBUAADdAQAA3gEAAN8BAAAzAAAA4AEAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE0U2FtcGxlVGltZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAAkI4AAEBUAABMhwAAAAAAANRUAAA1AAAA4QEAADsAAADiAQAAOQAAAE40ZWxlbTE0U2FtcGxlVGltZU5vZGVJZkVFAACQjgAAuFQAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTRTYW1wbGVUaW1lTm9kZUlmRUVFRQBojgAA4FQAAAAAAADkVQAAJwAAAOMBAADkAQAA5QEAAOYBAADnAQAA6AEAAOkBAADqAQAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xMlNlcXVlbmNlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAJCOAABQVQAAGBYAAAAAAABYVgAA6wEAAOwBAADtAQAAMwAAAO4BAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xMlNlcXVlbmNlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AAAxWAABMhwAAAAAAAJxWAADvAQAA8AEAAPEBAADyAQAAOQAAAE40ZWxlbTEyU2VxdWVuY2VOb2RlSWZFRQAAAACQjgAAgFYAAOwWAAAAAAAAEFcAAPMBAAD0AQAA9QEAADMAAAD2AQAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTlNfNnZlY3RvcklmTlNfOWFsbG9jYXRvcklmRUVFRU5TMl9JUzRfRUVFRQAAAJCOAADEVgAATIcAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xMlNlcXVlbmNlTm9kZUlmRUVFRQAAAGiOAAAcVwAAAAAAACBYAAAnAAAA9wEAAPgBAAD5AQAA+gEAAPsBAAD8AQAA/QEAAP4BAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzExQ291bnRlck5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAkI4AAIxXAAAYFgAAAAAAAJRYAAD/AQAAAAIAAAECAAAzAAAAAgIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTExQ291bnRlck5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAACQjgAASFgAAEyHAAAAAAAA1FgAADUAAAADAgAAOwAAAAQCAAA5AAAATjRlbGVtMTFDb3VudGVyTm9kZUlmRUUAkI4AALxYAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzExQ291bnRlck5vZGVJZkVFRUUAAAAAaI4AAOBYAAAAAAAA4FkAACcAAAAFAgAABgIAAAcCAAAIAgAACQIAAAoCAAALAgAADAIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfOUxhdGNoTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAJCOAABQWQAAGBYAAAAAAABQWgAADQIAAA4CAAAPAgAAMwAAABACAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW05TGF0Y2hOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQCQjgAACFoAAEyHAAAAAAAAkFoAADUAAAARAgAAOwAAABICAAA5AAAATjRlbGVtOUxhdGNoTm9kZUlmRUUAAAAAkI4AAHhaAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzlMYXRjaE5vZGVJZkVFRUUAAABojgAAnFoAAAAAAACoWwAAJwAAABMCAAAUAgAAFQIAABYCAAAXAgAAGAIAABkCAAAaAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8yMlVuaWZvcm1SYW5kb21Ob2lzZU5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQAAAJCOAAAIWwAAGBYAAAAAAAAoXAAAGwIAABwCAAAdAgAAMwAAAB4CAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0yMlVuaWZvcm1SYW5kb21Ob2lzZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAAkI4AANBbAABMhwAAAAAAAHRcAAA1AAAAHwIAACACAAAhAgAAOQAAAE40ZWxlbTIyVW5pZm9ybVJhbmRvbU5vaXNlTm9kZUlmRUUAAJCOAABQXAAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18yMlVuaWZvcm1SYW5kb21Ob2lzZU5vZGVJZkVFRUUAaI4AAIBcAAAAAAAAkF0AACcAAAAiAgAAIwIAACQCAAAlAgAAJgIAACcCAAAoAgAAKQIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTNNZXRyb25vbWVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAAkI4AAPhcAAAYFgAAAAAAAAheAAAqAgAAKwIAACwCAAAzAAAALQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEzTWV0cm9ub21lTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAAAkI4AALhdAABMhwAAAAAAAExeAAA1AAAALgIAAC8CAAAwAgAAMQIAAE40ZWxlbTEzTWV0cm9ub21lTm9kZUlmRUUAAACQjgAAMF4AAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTNNZXRyb25vbWVOb2RlSWZFRUVFAABojgAAWF4AAAAAAABkXwAAJwAAADICAAAzAgAANAIAADUCAAA2AgAANwIAADgCAAA5AgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xN1ZhcmlhYmxlRGVsYXlOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAAAAkI4AAMheAAAYFgAAAAAAAOBfAAA6AgAAOwIAADwCAAAzAAAAPQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTE3VmFyaWFibGVEZWxheU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAAAAAJCOAACMXwAATIcAAAAAAAAoYAAAPgIAAD8CAABAAgAAQQIAADkAAABONGVsZW0xN1ZhcmlhYmxlRGVsYXlOb2RlSWZFRQAAAJCOAAAIYAAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18xN1ZhcmlhYmxlRGVsYXlOb2RlSWZFRUVFAABojgAANGAAAAAAAABIYQAAJwAAAEICAABDAgAARAIAAEUCAABGAgAARwIAAEgCAABJAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8yMVNpbmdsZVNhbXBsZURlbGF5Tm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAAJCOAACoYAAAGBYAAAAAAADIYQAASgIAAEsCAABMAgAAMwAAAE0CAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0yMVNpbmdsZVNhbXBsZURlbGF5Tm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAAAkI4AAHBhAABMhwAAAAAAABRiAAA1AAAATgIAADsAAABPAgAAOQAAAE40ZWxlbTIxU2luZ2xlU2FtcGxlRGVsYXlOb2RlSWZFRQAAAJCOAADwYQAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU18yMVNpbmdsZVNhbXBsZURlbGF5Tm9kZUlmRUVFRQAAaI4AACBiAAAAAAAALGMAACcAAABQAgAAUQIAAFICAABTAgAAVAIAAFUCAABWAgAAVwIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTFPbmVQb2xlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAACQjgAAmGIAABgWAAAAAAAAoGMAAFgCAABZAgAAWgIAADMAAABbAgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTFPbmVQb2xlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAJCOAABUYwAATIcAAAAAAADgYwAANQAAAFwCAAA7AAAAXQIAADkAAABONGVsZW0xMU9uZVBvbGVOb2RlSWZFRQCQjgAAyGMAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTFPbmVQb2xlTm9kZUlmRUVFRQAAAABojgAA7GMAAAAAAADwZAAAJwAAAF4CAABfAgAAYAIAAGECAABiAgAAYwIAAGQCAABlAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xMkVudmVsb3BlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAJCOAABcZAAAGBYAAAAAAABkZQAAZgIAAGcCAABoAgAAMwAAAGkCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xMkVudmVsb3BlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AABhlAABMhwAAAAAAAKhlAAA1AAAAagIAADsAAABrAgAAOQAAAE40ZWxlbTEyRW52ZWxvcGVOb2RlSWZFRQAAAACQjgAAjGUAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTJFbnZlbG9wZU5vZGVJZkVFRUUAAABojgAAtGUAAAAAAAC8ZgAAJwAAAGwCAABtAgAAbgIAAG8CAABwAgAAcQIAAHICAABzAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl8xNkJpcXVhZEZpbHRlck5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQCQjgAAJGYAABgWAAAAAAAANGcAAHQCAAB1AgAAdgIAADMAAAB3AgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTZCaXF1YWRGaWx0ZXJOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQCQjgAA5GYAAEyHAAAAAAAAfGcAADUAAAB4AgAAOwAAAHkCAAA5AAAATjRlbGVtMTZCaXF1YWRGaWx0ZXJOb2RlSWZFRQAAAACQjgAAXGcAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTZCaXF1YWRGaWx0ZXJOb2RlSWZFRUVFAAAAaI4AAIhnAAAAAAAAjGgAACcAAAB6AgAAewIAAHwCAAB9AgAAfgIAAH8CAACAAgAAgQIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfOU1ldGVyTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAJCOAAD8ZwAAGBYAAAAAAAD8aAAAggIAAIMCAACEAgAAMwAAAIUCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW05TWV0ZXJOb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQCQjgAAtGgAAEyHAAAAAAAAPGkAAIYCAACHAgAAOwAAAIgCAACJAgAATjRlbGVtOU1ldGVyTm9kZUlmRUUAAAAAkI4AACRpAADsFgAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzlNZXRlck5vZGVJZkVFRUUAAABojgAASGkAAAAAAABEagAAJwAAAIoCAACLAgAAjAIAAI0CAACOAgAAjwIAAJACAACRAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl85U2NvcGVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAkI4AALRpAAAYFgAAAAAAALRqAACSAgAAkwIAAJQCAAAzAAAAlQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTlTY29wZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAJCOAABsagAATIcAAAAAAAD0agAAlgIAAJcCAACYAgAAmQIAAJoCAABONGVsZW05U2NvcGVOb2RlSWZFRQAAAACQjgAA3GoAAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOVNjb3BlTm9kZUlmRUVFRQAAAGiOAAAAawAAAAAAAPxrAAAnAAAAmwIAAJwCAACdAgAAngIAAJ8CAACgAgAAoQIAAKICAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzlUYXBJbk5vZGVJZkVFRUVOU185YWxsb2NhdG9ySVM3X0VFRk5TXzEwc2hhcmVkX3B0cklOUzJfOUdyYXBoTm9kZUlmRUVFRXhmaUVFRQCQjgAAbGsAABgWAAAAAAAAbGwAAKMCAACkAgAApQIAADMAAACmAgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtOVRhcEluTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAkI4AACRsAABMhwAAAAAAAKxsAAA1AAAApwIAAKgCAACpAgAAOQAAAE40ZWxlbTlUYXBJbk5vZGVJZkVFAAAAAJCOAACUbAAA7BYAAE40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOU185VGFwSW5Ob2RlSWZFRUVFAAAAaI4AALhsAAAAAAAAuG0AACcAAACqAgAAqwIAAKwCAACtAgAArgIAAK8CAACwAgAAsQIAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSU40ZWxlbTZkZXRhaWwxOEdlbmVyaWNOb2RlRmFjdG9yeUlOUzJfMTBUYXBPdXROb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAACQjgAAJG0AABgWAAAAAAAALG4AALICAACzAgAAtAIAADMAAAC1AgAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjRlbGVtMTBUYXBPdXROb2RlSWZFRU5TXzlhbGxvY2F0b3JJUzNfRUVFRQAAAJCOAADgbQAATIcAAAAAAABsbgAAtgIAALcCAAC4AgAAuQIAADkAAABONGVsZW0xMFRhcE91dE5vZGVJZkVFAACQjgAAVG4AAOwWAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfMTBUYXBPdXROb2RlSWZFRUVFAGiOAAB4bgAAAAAAAHxvAAAnAAAAugIAALsCAAC8AgAAvQIAAL4CAAC/AgAAwAIAAMECAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzE1Q29udm9sdXRpb25Ob2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAAJCOAADkbgAAGBYAAAAAAAD0bwAAwgIAAMMCAADEAgAAMwAAAMUCAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONGVsZW0xNUNvbnZvbHV0aW9uTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAJCOAACkbwAATIcAAAAAAAA4cAAAxgIAAMcCAADIAgAAyQIAADkAAABONGVsZW0xNUNvbnZvbHV0aW9uTm9kZUlmRUUAkI4AABxwAADsFgAAAAAAALxwAADKAgAAywIAAMwCAAAzAAAAzQIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU4xMmZmdGNvbnZvbHZlcjIwVHdvU3RhZ2VGRlRDb252b2x2ZXJFTlNfOWFsbG9jYXRvcklTMl9FRUVFAAAAkI4AAGBwAABMhwAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzE1Q29udm9sdXRpb25Ob2RlSWZFRUVFAAAAAGiOAADIcAAAAAAAANBxAAAnAAAAzgIAAM8CAADQAgAA0QIAANICAADTAgAA1AIAANUCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0lONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlMyXzEwU2FtcGxlTm9kZUlmRUVFRU5TXzlhbGxvY2F0b3JJUzdfRUVGTlNfMTBzaGFyZWRfcHRySU5TMl85R3JhcGhOb2RlSWZFRUVFeGZpRUVFAAAAkI4AADxxAAAYFgAAAAAAAERyAADWAgAA1wIAANgCAAAzAAAA2QIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTEwU2FtcGxlTm9kZUlmRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAACQjgAA+HEAAEyHAAAAAAAAsHIAANoCAADbAgAA3AIAAN0CAAA5AAAATjRlbGVtMTBTYW1wbGVOb2RlSWZFRQBONGVsZW0xN1Jlc291cmNlQmFzZWROb2RlSWZFRQAAAACQjgAAg3IAAOwWAACQjgAAbHIAAKRyAAAAAAAApHIAANoCAADeAgAA3wIAADwAAAA5AAAATjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TXzEwU2FtcGxlTm9kZUlmRUVFRQBojgAA2HIAAAAAAADUcwAAJwAAAOACAADhAgAA4gIAAOMCAADkAgAA5QIAAOYCAADnAgAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJTjRlbGVtNmRldGFpbDE4R2VuZXJpY05vZGVGYWN0b3J5SU5TMl85VGFibGVOb2RlSWZFRUVFTlNfOWFsbG9jYXRvcklTN19FRUZOU18xMHNoYXJlZF9wdHJJTlMyXzlHcmFwaE5vZGVJZkVFRUV4ZmlFRUUAkI4AAERzAAAYFgAAAAAAAER0AADoAgAA6QIAAOoCAAAzAAAA6wIAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU40ZWxlbTlUYWJsZU5vZGVJZkVFTlNfOWFsbG9jYXRvcklTM19FRUVFAJCOAAD8cwAATIcAAAAAAACEdAAA2gIAAOwCAADfAgAA7QIAADkAAABONGVsZW05VGFibGVOb2RlSWZFRQAAAACQjgAAbHQAAKRyAABONGVsZW02ZGV0YWlsMThHZW5lcmljTm9kZUZhY3RvcnlJTlNfOVRhYmxlTm9kZUlmRUVFRQAAAGiOAACQdAAAAAAAAMx1AADuAgAA7wIAAPACAADxAgAA8gIAAPMCAAD0AgAA9QIAAPYCAABOU3QzX18yMTBfX2Z1bmN0aW9uNl9fZnVuY0laTjRlbGVtOUdyYXBoSG9zdElmRTExc2V0UHJvcGVydHlFUktOU18xMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFU0NfUktOUzJfMmpzNVZhbHVlRUVVbHZFX05TOF9JU0hfRUVGdnZFRUUATlN0M19fMjEwX19mdW5jdGlvbjZfX2Jhc2VJRnZ2RUVFAAAAAGiOAACfdQAAkI4AAPx0AADEdQAAWk40ZWxlbTlHcmFwaEhvc3RJZkUxMXNldFByb3BlcnR5RVJLTlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOUzJfMTFjaGFyX3RyYWl0c0ljRUVOUzJfOWFsbG9jYXRvckljRUVFRVNBX1JLTlNfMmpzNVZhbHVlRUVVbHZFXwAAAABojgAA2HUAADI0RWxlbWVudGFyeUF1ZGlvUHJvY2Vzc29yAABojgAAYHYAAFAyNEVsZW1lbnRhcnlBdWRpb1Byb2Nlc3NvcgBIjwAAhHYAAAAAAAB8dgAAUEsyNEVsZW1lbnRhcnlBdWRpb1Byb2Nlc3NvcgAAAABIjwAAsHYAAAEAAAB8dgAAaWkAdgB2aQCgdgAABI4AAASOAABpaWlpAAAAAAAAAACkjQAAoHYAAFiOAAAQjgAAdmlpZGkAAACkjQAAoHYAAASOAAB2aWlpAAAAAKSNAACgdgAA2BEAANgRAACgdgAABI4AQdDuAQsipI0AAKB2AADQEwAA0BMAAHZpaWlpAAAApI0AAKB2AADQEwBBgO8BC8QIpI0AAKB2AADQEwAA0BMAANgRAAB2aWlpaWkAAKSNAACgdgAAdmlpAAAAAADodwAA9wIAAPgCAAD5AgAA+gIAAE4xMmZmdGNvbnZvbHZlcjIwVHdvU3RhZ2VGRlRDb252b2x2ZXJFAABojgAAwHcAAAAAAAAceAAA+wIAAPwCAABOMTJmZnRjb252b2x2ZXI2QnVmZmVySWZFRQAAaI4AAAB4AAAAAAAAVHgAAP0CAAD+AgAATjEyZmZ0Y29udm9sdmVyMTJGRlRDb252b2x2ZXJFAABojgAANHgAAAAAAAC4eAAA/wIAAAADAAABAwAAAgMAAAMDAABOOGF1ZGlvZmZ0OE9vdXJhRkZURQBOOGF1ZGlvZmZ0NmRldGFpbDEyQXVkaW9GRlRJbXBsRQAAAGiOAACNeAAAkI4AAHh4AACweAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSWhOU18xMWNoYXJfdHJhaXRzSWhFRU5TXzlhbGxvY2F0b3JJaEVFRUUAAOyOAADEeAAAAAAAAAEAAADIEwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVOU185YWxsb2NhdG9ySXdFRUVFAADsjgAAHHkAAAAAAAABAAAAyBMAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRHNOU18xMWNoYXJfdHJhaXRzSURzRUVOU185YWxsb2NhdG9ySURzRUVFRQAAAOyOAAB0eQAAAAAAAAEAAADIEwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEaU5TXzExY2hhcl90cmFpdHNJ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").startsWith(v)){var P=z;z=g.locateFile?g.locateFile(P,G):G+P}function _(A){for(;0<A.length;){var I=A.shift();if("function"==typeof I)I(g);else{var C=I.Ka;"number"==typeof C?void 0===I.oa?e.get(C)():e.get(C)(I.oa):C(void 0===I.oa?null:I.oa)}}}function $(A){this.X=A-16,this.Ia=function(A){L[this.X+4>>2]=A},this.Fa=function(A){L[this.X+8>>2]=A},this.Ga=function(){L[this.X>>2]=0},this.Ea=function(){c[this.X+12>>0]=0},this.Ha=function(){c[this.X+13>>0]=0},this.ya=function(A,I){this.Ia(A),this.Fa(I),this.Ga(),this.Ea(),this.Ha()}}function AA(A){switch(A){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+A)}}var IA=void 0;function gA(A){for(var I="";K[A];)I+=IA[K[A++]];return I}var CA={},BA={},QA={};function EA(A){if(void 0===A)return"_unknown";var I=(A=A.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=I&&57>=I?"_"+A:A}function DA(A,I){return A=EA(A),new Function("body","return function "+A+\'() {\\n    "use strict";    return body.apply(this, arguments);\\n};\\n\')(I)}function iA(A){var I=Error,g=DA(A,(function(I){this.name=A,this.message=I,void 0!==(I=Error(I).stack)&&(this.stack=this.toString()+"\\n"+I.replace(/^Error(:[^\\n]*)?\\n/,""))}));return g.prototype=Object.create(I.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},g}var oA=void 0;function wA(A){throw new oA(A)}var RA=void 0;function NA(A){throw new RA(A)}function FA(A,I,g){function C(I){(I=g(I)).length!==A.length&&NA("Mismatched type converter count");for(var C=0;C<A.length;++C)GA(A[C],I[C])}A.forEach((function(A){QA[A]=I}));var B=Array(I.length),Q=[],E=0;I.forEach((function(A,I){BA.hasOwnProperty(A)?B[I]=BA[A]:(Q.push(A),CA.hasOwnProperty(A)||(CA[A]=[]),CA[A].push((function(){B[I]=BA[A],++E===Q.length&&C(B)})))})),0===Q.length&&C(B)}function GA(A,I,g){if(g=g||{},!("argPackAdvance"in I))throw new TypeError("registerType registeredInstance requires argPackAdvance");var C=I.name;if(A||wA(\'type "\'+C+\'" must have a positive integer typeid pointer\'),BA.hasOwnProperty(A)){if(g.xa)return;wA("Cannot register type \'"+C+"\' twice")}BA[A]=I,delete QA[A],CA.hasOwnProperty(A)&&(I=CA[A],delete CA[A],I.forEach((function(A){A()})))}function UA(A){wA(A.W.Z.Y.name+" instance already deleted")}var yA=!1;function sA(){}function JA(A){--A.count.value,0===A.count.value&&(A.$?A.aa.ga(A.$):A.Z.Y.ga(A.X))}function MA(A){return"undefined"==typeof FinalizationGroup?(MA=function(A){return A},A):(yA=new FinalizationGroup((function(A){for(var I=A.next();!I.done;I=A.next())(I=I.value).X?JA(I):console.warn("object already deleted: "+I.X)})),sA=function(A){yA.unregister(A.W)},(MA=function(A){return yA.register(A,A.W,A.W),A})(A))}var hA=void 0,YA=[];function aA(){for(;YA.length;){var A=YA.pop();A.W.ha=!1,A.delete()}}function kA(){}var cA={};function KA(A,I,g){if(void 0===A[I].da){var C=A[I];A[I]=function(){return A[I].da.hasOwnProperty(arguments.length)||wA("Function \'"+g+"\' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+A[I].da+")!"),A[I].da[arguments.length].apply(this,arguments)},A[I].da=[],A[I].da[C.la]=C}}function SA(A,I,g,C,B,Q,E,D){this.name=A,this.constructor=I,this.ia=g,this.ga=C,this.ba=B,this.va=Q,this.ka=E,this.ua=D,this.Ba=[]}function lA(A,I,g){for(;I!==g;)I.ka||wA("Expected null or instance of "+g.name+", got an instance of "+I.name),A=I.ka(A),I=I.ba;return A}function LA(A,I){return null===I?(this.pa&&wA("null is not a valid "+this.name),0):(I.W||wA(\'Cannot pass "\'+uA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),lA(I.W.X,I.W.Z.Y,this.Y))}function nA(A,I){if(null===I){if(this.pa&&wA("null is not a valid "+this.name),this.na){var g=this.Ca();return null!==A&&A.push(this.ga,g),g}return 0}if(I.W||wA(\'Cannot pass "\'+uA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),!this.ma&&I.W.Z.ma&&wA("Cannot convert argument of type "+(I.W.aa?I.W.aa.name:I.W.Z.name)+" to parameter type "+this.name),g=lA(I.W.X,I.W.Z.Y,this.Y),this.na)switch(void 0===I.W.$&&wA("Passing raw pointer to smart pointer is illegal"),this.Ja){case 0:I.W.aa===this?g=I.W.$:wA("Cannot convert argument of type "+(I.W.aa?I.W.aa.name:I.W.Z.name)+" to parameter type "+this.name);break;case 1:g=I.W.$;break;case 2:if(I.W.aa===this)g=I.W.$;else{var C=I.clone();g=this.Da(g,pA((function(){C.delete()}))),null!==A&&A.push(this.ga,g)}break;default:wA("Unsupporting sharing policy")}return g}function tA(A,I){return null===I?(this.pa&&wA("null is not a valid "+this.name),0):(I.W||wA(\'Cannot pass "\'+uA(I)+\'" as a \'+this.name),I.W.X||wA("Cannot pass deleted object as a pointer of type "+this.name),I.W.Z.ma&&wA("Cannot convert argument of type "+I.W.Z.name+" to parameter type "+this.name),lA(I.W.X,I.W.Z.Y,this.Y))}function HA(A){return this.fromWireType(n[A>>2])}function ZA(A,I,g){return I===g?A:void 0===g.ba||null===(A=ZA(A,I,g.ba))?null:g.ua(A)}var rA={};function dA(A,I){return I.Z&&I.X||NA("makeClassHandle requires ptr and ptrType"),!!I.aa!=!!I.$&&NA("Both smartPtrType and smartPtr must be specified"),I.count={value:1},MA(Object.create(A,{W:{value:I}}))}function VA(A,I,g,C){this.name=A,this.Y=I,this.pa=g,this.ma=C,this.na=!1,this.ga=this.Da=this.Ca=this.sa=this.Ja=this.Aa=void 0,void 0!==I.ba?this.toWireType=nA:(this.toWireType=C?LA:tA,this.ea=null)}function WA(A,I){var C=(A=gA(A)).includes("j")?function(A,I){var C=[];return function(){C.length=arguments.length;for(var B=0;B<arguments.length;B++)C[B]=arguments[B];return A.includes("j")?(B=g["dynCall_"+A],B=C&&C.length?B.apply(null,[I].concat(C)):B.call(null,I)):B=e.get(I).apply(null,C),B}}(A,I):e.get(I);return"function"!=typeof C&&wA("unknown function pointer with signature "+A+": "+I),C}var fA=void 0;function TA(A){var I=gA(A=FI(A));return UI(A),I}function bA(A,I){var g=[],C={};throw I.forEach((function A(I){C[I]||BA[I]||(QA[I]?QA[I].forEach(A):(g.push(I),C[I]=!0))})),new fA(A+": "+g.map(TA).join([", "]))}function eA(A,I){for(var g=[],C=0;C<A;C++)g.push(L[(I>>2)+C]);return g}function XA(A){for(;A.length;){var I=A.pop();A.pop()(I)}}function qA(A){var I=Function;if(!(I instanceof Function))throw new TypeError("new_ called with constructor type "+typeof I+" which is not a function");var g=DA(I.name||"unknownFunctionName",(function(){}));return g.prototype=I.prototype,g=new g,(A=I.apply(g,A))instanceof Object?A:g}function mA(A,I,g,C,B){var Q=I.length;2>Q&&wA("argTypes array size mismatch! Must at least get return value and \'this\' types!");var E=null!==I[1]&&null!==g,D=!1;for(g=1;g<I.length;++g)if(null!==I[g]&&void 0===I[g].ea){D=!0;break}var i="void"!==I[0].name,o="",w="";for(g=0;g<Q-2;++g)o+=(0!==g?", ":"")+"arg"+g,w+=(0!==g?", ":"")+"arg"+g+"Wired";A="return function "+EA(A)+"("+o+") {\\nif (arguments.length !== "+(Q-2)+") {\\nthrowBindingError(\'function "+A+" called with \' + arguments.length + \' arguments, expected "+(Q-2)+" args!\');\\n}\\n",D&&(A+="var destructors = [];\\n");var R=D?"destructors":"null";for(o="throwBindingError invoker fn runDestructors retType classParam".split(" "),C=[wA,C,B,XA,I[0],I[1]],E&&(A+="var thisWired = classParam.toWireType("+R+", this);\\n"),g=0;g<Q-2;++g)A+="var arg"+g+"Wired = argType"+g+".toWireType("+R+", arg"+g+"); // "+I[g+2].name+"\\n",o.push("argType"+g),C.push(I[g+2]);if(E&&(w="thisWired"+(0<w.length?", ":"")+w),A+=(i?"var rv = ":"")+"invoker(fn"+(0<w.length?", ":"")+w+");\\n",D)A+="runDestructors(destructors);\\n";else for(g=E?1:2;g<I.length;++g)Q=1===g?"thisWired":"arg"+(g-2)+"Wired",null!==I[g].ea&&(A+=Q+"_dtor("+Q+"); // "+I[g].name+"\\n",o.push(Q+"_dtor"),C.push(I[g].ea));return i&&(A+="var ret = retType.fromWireType(rv);\\nreturn ret;\\n"),o.push(A+"}\\n"),qA(o).apply(null,C)}var OA=[],xA=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function jA(A){4<A&&0==--xA[A].qa&&(xA[A]=void 0,OA.push(A))}function pA(A){switch(A){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var I=OA.length?OA.pop():xA.length;return xA[I]={qa:1,value:A},I}}function uA(A){if(null===A)return"null";var I=typeof A;return"object"===I||"array"===I||"function"===I?A.toString():""+A}function zA(A,I){switch(I){case 2:return function(A){return this.fromWireType(t[A>>2])};case 3:return function(A){return this.fromWireType(H[A>>3])};default:throw new TypeError("Unknown float type: "+A)}}function vA(A,I,g){switch(I){case 0:return g?function(A){return c[A]}:function(A){return K[A]};case 1:return g?function(A){return S[A>>1]}:function(A){return l[A>>1]};case 2:return g?function(A){return L[A>>2]}:function(A){return n[A>>2]};default:throw new TypeError("Unknown integer type: "+A)}}function PA(A){return A||wA("Cannot use deleted val. handle = "+A),xA[A].value}function _A(A,I){var g=BA[A];return void 0===g&&wA(I+" has unknown type "+TA(A)),g}function $A(A,I){for(var g=Array(A),C=0;C<A;++C)g[C]=_A(L[(I>>2)+C],"parameter "+C);return g}var AI={};function II(A){var I=AI[A];return void 0===I?gA(A):I}var gI=[];function CI(){return"object"==typeof globalThis?globalThis:Function("return this")()}for(var BI=[null,[],[]],QI=Array(256),EI=0;256>EI;++EI)QI[EI]=String.fromCharCode(EI);IA=QI,oA=g.BindingError=iA("BindingError"),RA=g.InternalError=iA("InternalError"),kA.prototype.isAliasOf=function(A){if(!(this instanceof kA&&A instanceof kA))return!1;var I=this.W.Z.Y,g=this.W.X,C=A.W.Z.Y;for(A=A.W.X;I.ba;)g=I.ka(g),I=I.ba;for(;C.ba;)A=C.ka(A),C=C.ba;return I===C&&g===A},kA.prototype.clone=function(){if(this.W.X||UA(this),this.W.ja)return this.W.count.value+=1,this;var A=MA,I=Object,g=I.create,C=Object.getPrototypeOf(this),B=this.W;return(A=A(g.call(I,C,{W:{value:{count:B.count,ha:B.ha,ja:B.ja,X:B.X,Z:B.Z,$:B.$,aa:B.aa}}}))).W.count.value+=1,A.W.ha=!1,A},kA.prototype.delete=function(){this.W.X||UA(this),this.W.ha&&!this.W.ja&&wA("Object already scheduled for deletion"),sA(this),JA(this.W),this.W.ja||(this.W.$=void 0,this.W.X=void 0)},kA.prototype.isDeleted=function(){return!this.W.X},kA.prototype.deleteLater=function(){return this.W.X||UA(this),this.W.ha&&!this.W.ja&&wA("Object already scheduled for deletion"),YA.push(this),1===YA.length&&hA&&hA(aA),this.W.ha=!0,this},VA.prototype.wa=function(A){return this.sa&&(A=this.sa(A)),A},VA.prototype.ra=function(A){this.ga&&this.ga(A)},VA.prototype.argPackAdvance=8,VA.prototype.readValueFromPointer=HA,VA.prototype.deleteObject=function(A){null!==A&&A.delete()},VA.prototype.fromWireType=function(A){function I(){return this.na?dA(this.Y.ia,{Z:this.Aa,X:g,aa:this,$:A}):dA(this.Y.ia,{Z:this,X:A})}var g=this.wa(A);if(!g)return this.ra(A),null;var C=function(A,I){for(void 0===I&&wA("ptr should not be undefined");A.ba;)I=A.ka(I),A=A.ba;return rA[I]}(this.Y,g);if(void 0!==C)return 0===C.W.count.value?(C.W.X=g,C.W.$=A,C.clone()):(C=C.clone(),this.ra(A),C);if(C=this.Y.va(g),!(C=cA[C]))return I.call(this);C=this.ma?C.ta:C.pointerType;var B=ZA(g,this.Y,C.Y);return null===B?I.call(this):this.na?dA(C.Y.ia,{Z:C,X:B,aa:this,$:A}):dA(C.Y.ia,{Z:C,X:B})},g.getInheritedInstanceCount=function(){return Object.keys(rA).length},g.getLiveInheritedInstances=function(){var A,I=[];for(A in rA)rA.hasOwnProperty(A)&&I.push(rA[A]);return I},g.flushPendingDeletes=aA,g.setDelayFunction=function(A){hA=A,YA.length&&hA&&hA(aA)},fA=g.UnboundTypeError=iA("UnboundTypeError"),g.count_emval_handles=function(){for(var A=0,I=5;I<xA.length;++I)void 0!==xA[I]&&++A;return A},g.get_first_emval=function(){for(var A=5;A<xA.length;++A)if(void 0!==xA[A])return xA[A];return null};var DI=!1,iI="function"==typeof atob?atob:function(A){var I="",g=0;A=A.replace(/[^A-Za-z0-9\\+\\/=]/g,"");do{var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++)),E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(g++));C=C<<2|B>>4,B=(15&B)<<4|Q>>2;var D=(3&Q)<<6|E;I+=String.fromCharCode(C),64!==Q&&(I+=String.fromCharCode(B)),64!==E&&(I+=String.fromCharCode(D))}while(g<A.length);return I};function oI(A){if(A.startsWith(v)){if(A=A.slice(v.length),"boolean"==typeof F&&F){var I=Buffer.from(A,"base64");I=new Uint8Array(I.buffer,I.byteOffset,I.byteLength)}else try{var g=iI(A),C=new Uint8Array(g.length);for(A=0;A<g.length;++A)C[A]=g.charCodeAt(A);I=C}catch(A){throw Error("Converting base64 string to bytes failed.")}return I}}var wI={b:function(A){return NI(A+16)+16},c:function(A,I,g){throw new $(A).ya(I,g),A},A:function(){},H:function(A,I,g,C,B){var Q=AA(g);GA(A,{name:I=gA(I),fromWireType:function(A){return!!A},toWireType:function(A,I){return I?C:B},argPackAdvance:8,readValueFromPointer:function(A){if(1===g)var C=c;else if(2===g)C=S;else{if(4!==g)throw new TypeError("Unknown boolean type size: "+I);C=L}return this.fromWireType(C[A>>Q])},ea:null})},K:function(A,I,C,B,Q,E,D,i,o,w,R,N,F){R=gA(R),E=WA(Q,E),i&&(i=WA(D,i)),w&&(w=WA(o,w)),F=WA(N,F);var G=EA(R);!function(A,I){g.hasOwnProperty(A)?(wA("Cannot register public name \'"+A+"\' twice"),KA(g,A,A),g.hasOwnProperty(void 0)&&wA("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),g[A].da[void 0]=I):g[A]=I}(G,(function(){bA("Cannot construct "+R+" due to unbound types",[B])})),FA([A,I,C],B?[B]:[],(function(I){if(I=I[0],B)var C=I.Y,Q=C.ia;else Q=kA.prototype;I=DA(G,(function(){if(Object.getPrototypeOf(this)!==D)throw new oA("Use \'new\' to construct "+R);if(void 0===o.fa)throw new oA(R+" has no accessible constructor");var A=o.fa[arguments.length];if(void 0===A)throw new oA("Tried to invoke ctor of "+R+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(o.fa).toString()+") parameters instead!");return A.apply(this,arguments)}));var D=Object.create(Q,{constructor:{value:I}});I.prototype=D;var o=new SA(R,I,D,F,C,E,i,w);C=new VA(R,o,!0,!1),Q=new VA(R+"*",o,!1,!1);var N=new VA(R+" const*",o,!1,!0);return cA[A]={pointerType:Q,ta:N},function(A,I){g.hasOwnProperty(A)||NA("Replacing nonexistant public symbol"),g[A]=I,g[A].la=void 0}(G,I),[C,Q,N]}))},F:function(A,I,g,C,B,Q){h(0<I);var E=eA(I,g);B=WA(C,B),FA([],[A],(function(A){var g="constructor "+(A=A[0]).name;if(void 0===A.Y.fa&&(A.Y.fa=[]),void 0!==A.Y.fa[I-1])throw new oA("Cannot register multiple constructors with identical number of parameters ("+(I-1)+") for class \'"+A.name+"\'! Overload resolution is currently only performed using the parameter count, not actual type info!");return A.Y.fa[I-1]=function(){bA("Cannot construct "+A.name+" due to unbound types",E)},FA([],E,(function(C){return C.splice(1,0,null),A.Y.fa[I-1]=mA(g,C,null,B,Q),[]})),[]}))},e:function(A,I,g,C,B,Q,E,D){var i=eA(g,C);I=gA(I),Q=WA(B,Q),FA([],[A],(function(A){function C(){bA("Cannot call "+B+" due to unbound types",i)}var B=(A=A[0]).name+"."+I;I.startsWith("@@")&&(I=Symbol[I.substring(2)]),D&&A.Y.Ba.push(I);var o=A.Y.ia,w=o[I];return void 0===w||void 0===w.da&&w.className!==A.name&&w.la===g-2?(C.la=g-2,C.className=A.name,o[I]=C):(KA(o,I,B),o[I].da[g-2]=C),FA([],i,(function(C){return C=mA(B,C,A,Q,E),void 0===o[I].da?(C.la=g-2,o[I]=C):o[I].da[g-2]=C,[]})),[]}))},G:function(A,I){GA(A,{name:I=gA(I),fromWireType:function(A){var I=xA[A].value;return jA(A),I},toWireType:function(A,I){return pA(I)},argPackAdvance:8,readValueFromPointer:HA,ea:null})},t:function(A,I,g){g=AA(g),GA(A,{name:I=gA(I),fromWireType:function(A){return A},toWireType:function(A,I){if("number"!=typeof I&&"boolean"!=typeof I)throw new TypeError(\'Cannot convert "\'+uA(I)+\'" to \'+this.name);return I},argPackAdvance:8,readValueFromPointer:zA(I,g),ea:null})},h:function(A,I,g,C,B){function Q(A){return A}I=gA(I),-1===B&&(B=4294967295);var E=AA(g);if(0===C){var D=32-8*g;Q=function(A){return A<<D>>>D}}var i=I.includes("unsigned");GA(A,{name:I,fromWireType:Q,toWireType:function(A,g){if("number"!=typeof g&&"boolean"!=typeof g)throw new TypeError(\'Cannot convert "\'+uA(g)+\'" to \'+this.name);if(g<C||g>B)throw new TypeError(\'Passing a number "\'+uA(g)+\'" from JS side to C/C++ side to an argument of type "\'+I+\'", which is outside the valid range [\'+C+", "+B+"]!");return i?g>>>0:0|g},argPackAdvance:8,readValueFromPointer:vA(I,E,0!==C),ea:null})},f:function(A,I,g){function C(A){var I=n;return new B(k,I[(A>>=2)+1],I[A])}var B=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][I];GA(A,{name:g=gA(g),fromWireType:C,argPackAdvance:8,readValueFromPointer:C},{xa:!0})},u:function(A,I){var g="std::string"===(I=gA(I));GA(A,{name:I,fromWireType:function(A){var I=n[A>>2];if(g)for(var C=A+4,B=0;B<=I;++B){var Q=A+4+B;if(B==I||0==K[Q]){if(C=C?a(K,C,Q-C):"",void 0===E)var E=C;else E+=String.fromCharCode(0),E+=C;C=Q+1}}else{for(E=Array(I),B=0;B<I;++B)E[B]=String.fromCharCode(K[A+4+B]);E=E.join("")}return UI(A),E},toWireType:function(A,I){I instanceof ArrayBuffer&&(I=new Uint8Array(I));var C="string"==typeof I;C||I instanceof Uint8Array||I instanceof Uint8ClampedArray||I instanceof Int8Array||wA("Cannot pass non-string to std::string");var B=(g&&C?function(){for(var A=0,g=0;g<I.length;++g){var C=I.charCodeAt(g);55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&I.charCodeAt(++g)),127>=C?++A:A=2047>=C?A+2:65535>=C?A+3:A+4}return A}:function(){return I.length})(),Q=NI(4+B+1);if(n[Q>>2]=B,g&&C)!function(A,I,g){var C=K;if(0<g){g=I+g-1;for(var B=0;B<A.length;++B){var Q=A.charCodeAt(B);if(55296<=Q&&57343>=Q&&(Q=65536+((1023&Q)<<10)|1023&A.charCodeAt(++B)),127>=Q){if(I>=g)break;C[I++]=Q}else{if(2047>=Q){if(I+1>=g)break;C[I++]=192|Q>>6}else{if(65535>=Q){if(I+2>=g)break;C[I++]=224|Q>>12}else{if(I+3>=g)break;C[I++]=240|Q>>18,C[I++]=128|Q>>12&63}C[I++]=128|Q>>6&63}C[I++]=128|63&Q}}C[I]=0}}(I,Q+4,B+1);else if(C)for(C=0;C<B;++C){var E=I.charCodeAt(C);255<E&&(UI(Q),wA("String has UTF-16 code units that do not fit in 8 bits")),K[Q+4+C]=E}else for(C=0;C<B;++C)K[Q+4+C]=I[C];return null!==A&&A.push(UI,Q),Q},argPackAdvance:8,readValueFromPointer:HA,ea:function(A){UI(A)}})},p:function(A,I,g){if(g=gA(g),2===I)var C=r,B=d,Q=V,E=function(){return l},D=1;else 4===I&&(C=W,B=f,Q=T,E=function(){return n},D=2);GA(A,{name:g,fromWireType:function(A){for(var g,B=n[A>>2],Q=E(),i=A+4,o=0;o<=B;++o){var w=A+4+o*I;o!=B&&0!=Q[w>>D]||(i=C(i,w-i),void 0===g?g=i:(g+=String.fromCharCode(0),g+=i),i=w+I)}return UI(A),g},toWireType:function(A,C){"string"!=typeof C&&wA("Cannot pass non-string to C++ string type "+g);var E=Q(C),i=NI(4+E+I);return n[i>>2]=E>>D,B(C,i+4,E+I),null!==A&&A.push(UI,i),i},argPackAdvance:8,readValueFromPointer:HA,ea:function(A){UI(A)}})},I:function(A,I){GA(A,{za:!0,name:I=gA(I),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},k:function(A,I,g){A=PA(A),I=_A(I,"emval::as");var C=[],B=pA(C);return L[g>>2]=B,I.toWireType(C,A)},y:function(A,I,g,C){A=PA(A),g=$A(I,g);for(var B=Array(I),Q=0;Q<I;++Q){var E=g[Q];B[Q]=E.readValueFromPointer(C),C+=E.argPackAdvance}return pA(A=A.apply(void 0,B))},v:function(A,I,g,C,B){A=gI[A],I=PA(I),g=II(g);var Q=[];return L[C>>2]=pA(Q),A(I,g,Q,B)},J:function(A,I,g,C){(A=gI[A])(I=PA(I),g=II(g),null,C)},a:jA,l:function(A){return 0===A?pA(CI()):(A=II(A),pA(CI()[A]))},q:function(A,I){for(var g=(I=$A(A,I))[0],C=g.name+"_$"+I.slice(1).map((function(A){return A.name})).join("_")+"$",B=["retType"],Q=[g],E="",D=0;D<A-1;++D)E+=(0!==D?", ":"")+"arg"+D,B.push("argType"+D),Q.push(I[1+D]);C="return function "+EA("methodCaller_"+C)+"(handle, name, destructors, args) {\\n";var i=0;for(D=0;D<A-1;++D)C+="    var arg"+D+" = argType"+D+".readValueFromPointer(args"+(i?"+"+i:"")+");\\n",i+=I[D+1].argPackAdvance;for(C+="    var rv = handle[name]("+E+");\\n",D=0;D<A-1;++D)I[D+1].deleteObject&&(C+="    argType"+D+".deleteObject(arg"+D+");\\n");return g.za||(C+="    return retType.toWireType(destructors, rv);\\n"),B.push(C+"};\\n"),function(A){var I=gI.length;return gI.push(A),I}(A=qA(B).apply(null,Q))},j:function(A,I){return pA((A=PA(A))[I=PA(I)])},g:function(A){4<A&&(xA[A].qa+=1)},m:function(A,I){return(A=PA(A))instanceof(I=PA(I))},M:function(A){return"number"==typeof(A=PA(A))},L:function(A){return"string"==typeof(A=PA(A))},x:function(){return pA([])},r:function(A){return pA(II(A))},w:function(){return pA({})},i:function(A){XA(xA[A].value),jA(A)},n:function(A,I,g){A=PA(A),I=PA(I),g=PA(g),A[I]=g},d:function(A,I){return pA(A=(A=_A(A,"_emval_take_value")).readValueFromPointer(I))},o:function(){u()},C:function(A,I,g){K.copyWithin(A,I,I+g)},D:function(A){var I=K.length;if(2147483648<(A>>>=0))return!1;for(var g=1;4>=g;g*=2){var C=I*(1+.2/g);C=Math.min(C,A+100663296),0<(C=Math.max(A,C))%65536&&(C+=65536-C%65536);A:{try{J.grow(Math.min(2147483648,C)-k.byteLength+65535>>>16),b();var B=1;break A}catch(A){}B=void 0}if(B)return!0}return!1},E:function(){return 0},z:function(){},s:function(A,I,g,C){for(var B=0,Q=0;Q<g;Q++){for(var E=L[I+8*Q>>2],D=L[I+(8*Q+4)>>2],i=0;i<D;i++){var o=K[E+i],w=BI[A];0===o||10===o?((1===A?y:s)(a(w,0)),w.length=0):w.push(o)}B+=D}return L[C>>2]=B,0},B:function(){}},RI=function(){function A(A){g.asm=A.exports,J=g.asm.N,b(),e=g.asm.Q,q.unshift(g.asm.O),x--,g.monitorRunDependencies&&g.monitorRunDependencies(x),0==x&&(null!==j&&(clearInterval(j),j=null),p&&(A=p,p=null,A()))}var I={a:wI};if(x++,g.monitorRunDependencies&&g.monitorRunDependencies(x),g.instantiateWasm)try{return g.instantiateWasm(I,A)}catch(A){return s("Module.instantiateWasm callback failed with error: "+A),!1}return I=function(A){var I=z;try{A:{try{if(I==z&&U){var g=new Uint8Array(U);break A}var C=oI(I);if(C){g=C;break A}if(i){g=i(I);break A}throw"sync fetching of the wasm failed: you can preload it to Module[\'wasmBinary\'] manually, or emcc.py will do that for you when generating HTML (but not JS)"}catch(A){u(A)}g=void 0}var B=new WebAssembly.Module(g),Q=new WebAssembly.Instance(B,A)}catch(I){throw A=I.toString(),s("failed to compile wasm module: "+A),(A.includes("imported Memory")||A.includes("memory import"))&&s("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."),I}return[Q,B]}(I),A(I[0]),g.asm}();g.___wasm_call_ctors=RI.O;var NI=g._malloc=RI.P,FI=g.___getTypeName=RI.R;g.___embind_register_native_and_builtin_types=RI.S;var GI,UI=g._free=RI.T;function yI(){function A(){if(!GI&&(GI=!0,g.calledRun=!0,!M)){if(_(q),C(g),g.onRuntimeInitialized&&g.onRuntimeInitialized(),g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var A=g.postRun.shift();m.unshift(A)}_(m)}}if(!(0<x)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)O();_(X),0<x||(g.setStatus?(g.setStatus("Running..."),setTimeout((function(){setTimeout((function(){g.setStatus("")}),1),A()}),1)):A())}}if(g.dynCall_viiiiij=RI.U,g.dynCall_jiji=RI.V,p=function A(){GI||yI(),GI||(p=A)},g.run=yI,g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();return yI(),I}}();"object"==typeof exports&&"object"==typeof module?module.exports=Module:"function"==typeof define&&define.amd?define([],(function(){return Module})):"object"==typeof exports&&(exports.Module=Module);',
            'class ElementaryAudioWorkletProcessor extends AudioWorkletProcessor{constructor(e){super(e);const t=e.numberOfInputs,s=e.outputChannelCount.reduce(((e,t)=>e+t),0);this._module=Module(),this._native=new this._module.ElementaryAudioProcessor(t,s),this._native.prepare(sampleRate,512);if(e.hasOwnProperty("processorOptions")&&"object"==typeof e.processorOptions&&null!==e.processorOptions){const{virtualFileSystem:t,...s}=e.processorOptions;if("object"==typeof t&&null!==t&&Object.keys(t).length>0)try{this._native.loadResourceMap(t)}catch(e){console.error("Failed to load virtual file system")}}this._native.commitUpdates(),this.port.onmessage=e=>{const[t,...s]=e.data;switch(t){case"createNode":return this._native.createNode(...s);case"deleteNode":return this._native.deleteNode(...s);case"appendChild":return this._native.appendChild(...s);case"setProperty":return this._native.setProperty(...s);case"commitUpdates":return this._native.commitUpdates(...s);case"processQueuedEvents":return this._native.processQueuedEvents(((e,t)=>{this.port.postMessage([e,t])}))}},this.port.postMessage(["load",{sampleRate:sampleRate,blockSize:128,numInputChannels:2,numOutputChannels:2}])}process(e,t,s){if(e.length>0){let t=0;for(let s=0;s<e.length;++s)for(let o=0;o<e[s].length;++o){const r=this._native.getInputBufferData(t++);for(let t=0;t<e[s][o].length;++t)r[t]=e[s][o][t]}}const o=t.length>0&&t[0].length>0?t[0][0].length:0;if(this._native.process(o),t.length>0){let e=0;for(let s=0;s<t.length;++s)for(let o=0;o<t[s].length;++o){const r=this._native.getOutputBufferData(e++);for(let e=0;e<t[s][o].length;++e)t[s][o][e]=r[e]}}return!0}}registerProcessor("ElementaryAudioWorkletProcessor",ElementaryAudioWorkletProcessor);'
        ], {
            type: "text/javascript"
        }), B = URL.createObjectURL(C);
        return await A25.audioWorklet.addModule(B), this.__worklet = new AudioWorkletNode(A25, "ElementaryAudioWorkletProcessor", Object.assign({
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [
                2
            ]
        }, g10)), this.__renderer = {
            renderContext: null,
            createNode: (...A)=>this.__worklet.port.postMessage([
                    "createNode",
                    ...A
                ])
            ,
            deleteNode: (...A)=>this.__worklet.port.postMessage([
                    "deleteNode",
                    ...A
                ])
            ,
            appendChild: (...A)=>this.__worklet.port.postMessage([
                    "appendChild",
                    ...A
                ])
            ,
            setProperty: (...A)=>this.__worklet.port.postMessage([
                    "setProperty",
                    ...A
                ])
            ,
            commitUpdates: (...A)=>this.__worklet.port.postMessage([
                    "commitUpdates",
                    ...A
                ])
        }, this.__worklet.port.onmessage = (A)=>{
            const [I, g] = A.data;
            "load" === I && (this.__renderer.renderContext = {
                sampleRate: g.sampleRate,
                blockSize: g.blockSize,
                numInputs: g.numInputChannels,
                numOutputs: g.numOutputs
            }), this.emit(I, g);
        }, this.__timer = window.setInterval(()=>{
            this.__worklet.port.postMessage([
                "processQueuedEvents"
            ]);
        }, 8), this.__worklet;
    }
    render(...A) {
        return Ng(this.__renderer, ...A);
    }
}
var FC = new NC;
const tC = Gg(Vg);

},{"process":"lDnB8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3egax":[function(require,module,exports) {
var Note = require('./lib/note');
var Interval = require('./lib/interval');
var Chord = require('./lib/chord');
var Scale = require('./lib/scale');
var teoria;
// never thought I would write this, but: Legacy support
function intervalConstructor(from, to) {
    // Construct a Interval object from string representation
    if (typeof from === 'string') return Interval.toCoord(from);
    if (typeof to === 'string' && from instanceof Note) return Interval.from(from, Interval.toCoord(to));
    if (to instanceof Interval && from instanceof Note) return Interval.from(from, to);
    if (to instanceof Note && from instanceof Note) return Interval.between(from, to);
    throw new Error('Invalid parameters');
}
intervalConstructor.toCoord = Interval.toCoord;
intervalConstructor.from = Interval.from;
intervalConstructor.between = Interval.between;
intervalConstructor.invert = Interval.invert;
function noteConstructor(name, duration) {
    if (typeof name === 'string') return Note.fromString(name, duration);
    else return new Note(name, duration);
}
noteConstructor.fromString = Note.fromString;
noteConstructor.fromKey = Note.fromKey;
noteConstructor.fromFrequency = Note.fromFrequency;
noteConstructor.fromMIDI = Note.fromMIDI;
function chordConstructor(name, symbol) {
    if (typeof name === 'string') {
        var root, octave;
        root = name.match(/^([a-h])(x|#|bb|b?)/i);
        if (root && root[0]) {
            octave = typeof symbol === 'number' ? symbol.toString(10) : '4';
            return new Chord(Note.fromString(root[0].toLowerCase() + octave), name.substr(root[0].length));
        }
    } else if (name instanceof Note) return new Chord(name, symbol);
    throw new Error('Invalid Chord. Couldn\'t find note name');
}
function scaleConstructor(tonic, scale) {
    tonic = tonic instanceof Note ? tonic : teoria.note(tonic);
    return new Scale(tonic, scale);
}
teoria = {
    note: noteConstructor,
    chord: chordConstructor,
    interval: intervalConstructor,
    scale: scaleConstructor,
    Note: Note,
    Chord: Chord,
    Scale: Scale,
    Interval: Interval
};
require('./lib/sugar')(teoria);
exports = module.exports = teoria;

},{"./lib/note":"l6Zcm","./lib/interval":"7Q00e","./lib/chord":"h2Yz2","./lib/scale":"vO4zO","./lib/sugar":"7FAQa"}],"l6Zcm":[function(require,module,exports) {
var scientific = require('scientific-notation');
var helmholtz = require('helmholtz');
var pitchFq = require('pitch-fq');
var knowledge = require('./knowledge');
var vector = require('./vector');
var Interval = require('./interval');
function pad(str, ch, len) {
    for(; len > 0; len--)str += ch;
    return str;
}
function Note(coord, duration) {
    if (!(this instanceof Note)) return new Note(coord, duration);
    duration = duration || {
    };
    this.duration = {
        value: duration.value || 4,
        dots: duration.dots || 0
    };
    this.coord = coord;
}
Note.prototype = {
    octave: function() {
        return this.coord[0] + knowledge.A4[0] - knowledge.notes[this.name()][0] + this.accidentalValue() * 4;
    },
    name: function() {
        var value = this.accidentalValue();
        var idx = this.coord[1] + knowledge.A4[1] - value * 7 + 1;
        return knowledge.fifths[idx];
    },
    accidentalValue: function() {
        return Math.round((this.coord[1] + knowledge.A4[1] - 2) / 7);
    },
    accidental: function() {
        return knowledge.accidentals[this.accidentalValue() + 2];
    },
    /**
   * Returns the key number of the note
   */ key: function(white) {
        if (white) return this.coord[0] * 7 + this.coord[1] * 4 + 29;
        else return this.coord[0] * 12 + this.coord[1] * 7 + 49;
    },
    /**
  * Returns a number ranging from 0-127 representing a MIDI note value
  */ midi: function() {
        return this.key() + 20;
    },
    /**
   * Calculates and returns the frequency of the note.
   * Optional concert pitch (def. 440)
   */ fq: function(concertPitch) {
        return pitchFq(this.coord, concertPitch);
    },
    /**
   * Returns the pitch class index (chroma) of the note
   */ chroma: function() {
        var value = (vector.sum(vector.mul(this.coord, [
            12,
            7
        ])) - 3) % 12;
        return value < 0 ? value + 12 : value;
    },
    interval: function(interval) {
        if (typeof interval === 'string') interval = Interval.toCoord(interval);
        if (interval instanceof Interval) return new Note(vector.add(this.coord, interval.coord), this.duration);
        else if (interval instanceof Note) return new Interval(vector.sub(interval.coord, this.coord));
    },
    transpose: function(interval) {
        this.coord = vector.add(this.coord, interval.coord);
        return this;
    },
    /**
   * Returns the Helmholtz notation form of the note (fx C,, d' F# g#'')
   */ helmholtz: function() {
        var octave = this.octave();
        var name = this.name();
        name = octave < 3 ? name.toUpperCase() : name.toLowerCase();
        var padchar = octave < 3 ? ',' : '\'';
        var padcount = octave < 2 ? 2 - octave : octave - 3;
        return pad(name + this.accidental(), padchar, padcount);
    },
    /**
   * Returns the scientific notation form of the note (fx E4, Bb3, C#7 etc.)
   */ scientific: function() {
        return this.name().toUpperCase() + this.accidental() + this.octave();
    },
    /**
   * Returns notes that are enharmonic with this note.
   */ enharmonics: function(oneaccidental) {
        var key = this.key(), limit = oneaccidental ? 2 : 3;
        return [
            'm3',
            'm2',
            'm-2',
            'm-3'
        ].map(this.interval.bind(this)).filter(function(note) {
            var acc = note.accidentalValue();
            var diff = key - (note.key() - acc);
            if (diff < limit && diff > -limit) {
                var product = vector.mul(knowledge.sharp, diff - acc);
                note.coord = vector.add(note.coord, product);
                return true;
            }
        });
    },
    solfege: function(scale, showOctaves) {
        var interval = scale.tonic.interval(this), solfege, stroke, count;
        if (interval.direction() === 'down') interval = interval.invert();
        if (showOctaves) {
            count = (this.key(true) - scale.tonic.key(true)) / 7;
            count = count >= 0 ? Math.floor(count) : -Math.ceil(-count);
            stroke = count >= 0 ? '\'' : ',';
        }
        solfege = knowledge.intervalSolfege[interval.simple(true).toString()];
        return showOctaves ? pad(solfege, stroke, Math.abs(count)) : solfege;
    },
    scaleDegree: function(scale) {
        var inter = scale.tonic.interval(this);
        // If the direction is down, or we're dealing with an octave - invert it
        if (inter.direction() === 'down' || inter.coord[1] === 0 && inter.coord[0] !== 0) inter = inter.invert();
        inter = inter.simple(true).coord;
        return scale.scale.reduce(function(index, current, i) {
            var coord = Interval.toCoord(current).coord;
            return coord[0] === inter[0] && coord[1] === inter[1] ? i + 1 : index;
        }, 0);
    },
    /**
   * Returns the name of the duration value,
   * such as 'whole', 'quarter', 'sixteenth' etc.
   */ durationName: function() {
        return knowledge.durations[this.duration.value];
    },
    /**
   * Returns the duration of the note (including dots)
   * in seconds. The first argument is the tempo in beats
   * per minute, the second is the beat unit (i.e. the
   * lower numeral in a time signature).
   */ durationInSeconds: function(bpm, beatUnit) {
        var secs = 60 / bpm / (this.duration.value / 4) / (beatUnit / 4);
        return secs * 2 - secs / Math.pow(2, this.duration.dots);
    },
    /**
   * Returns the name of the note, with an optional display of octave number
   */ toString: function(dont) {
        return this.name() + this.accidental() + (dont ? '' : this.octave());
    }
};
Note.fromString = function(name, dur) {
    var coord = scientific(name);
    if (!coord) coord = helmholtz(name);
    return new Note(coord, dur);
};
Note.fromKey = function(key) {
    var octave = Math.floor((key - 4) / 12);
    var distance = key - octave * 12 - 4;
    var name = knowledge.fifths[(2 * Math.round(distance / 2) + 1) % 7];
    var subDiff = vector.sub(knowledge.notes[name], knowledge.A4);
    var note = vector.add(subDiff, [
        octave + 1,
        0
    ]);
    var diff = key - 49 - vector.sum(vector.mul(note, [
        12,
        7
    ]));
    var arg = diff ? vector.add(note, vector.mul(knowledge.sharp, diff)) : note;
    return new Note(arg);
};
Note.fromFrequency = function(fq, concertPitch) {
    var key, cents, originalFq;
    concertPitch = concertPitch || 440;
    key = 49 + 12 * ((Math.log(fq) - Math.log(concertPitch)) / Math.log(2));
    key = Math.round(key);
    originalFq = concertPitch * Math.pow(2, (key - 49) / 12);
    cents = 1200 * (Math.log(fq / originalFq) / Math.log(2));
    return {
        note: Note.fromKey(key),
        cents: cents
    };
};
Note.fromMIDI = function(note) {
    return Note.fromKey(note - 20);
};
module.exports = Note;

},{"scientific-notation":"fUWkl","helmholtz":"3gTrS","pitch-fq":"e5Dzl","./knowledge":"dn3yb","./vector":"h8fpS","./interval":"7Q00e"}],"fUWkl":[function(require,module,exports) {
var coords = require('notecoord');
var accval = require('accidental-value');
module.exports = function scientific(name) {
    var format = /^([a-h])(x|#|bb|b?)(-?\d*)/i;
    var parser = name.match(format);
    if (!(parser && name === parser[0] && parser[3].length)) return;
    var noteName = parser[1];
    var octave = +parser[3];
    var accidental = parser[2].length ? parser[2].toLowerCase() : '';
    var accidentalValue = accval.interval(accidental);
    var coord = coords(noteName.toLowerCase());
    coord[0] += octave;
    coord[0] += accidentalValue[0] - coords.A4[0];
    coord[1] += accidentalValue[1] - coords.A4[1];
    return coord;
};

},{"notecoord":"8QhAo","accidental-value":"ktsiD"}],"8QhAo":[function(require,module,exports) {
// First coord is octaves, second is fifths. Distances are relative to c
var notes = {
    c: [
        0,
        0
    ],
    d: [
        -1,
        2
    ],
    e: [
        -2,
        4
    ],
    f: [
        1,
        -1
    ],
    g: [
        0,
        1
    ],
    a: [
        -1,
        3
    ],
    b: [
        -2,
        5
    ],
    h: [
        -2,
        5
    ]
};
module.exports = function(name) {
    return name in notes ? [
        notes[name][0],
        notes[name][1]
    ] : null;
};
module.exports.notes = notes;
module.exports.A4 = [
    3,
    3
]; // Relative to C0 (scientic notation, ~16.35Hz)
module.exports.sharp = [
    -4,
    7
];

},{}],"ktsiD":[function(require,module,exports) {
var accidentalValues = {
    'bb': -2,
    'b': -1,
    '': 0,
    '#': 1,
    'x': 2
};
module.exports = function accidentalNumber(acc) {
    return accidentalValues[acc];
};
module.exports.interval = function accidentalInterval(acc) {
    var val = accidentalValues[acc];
    return [
        -4 * val,
        7 * val
    ];
};

},{}],"3gTrS":[function(require,module,exports) {
var coords = require('notecoord');
var accval = require('accidental-value');
module.exports = function helmholtz(name) {
    var name = name.replace(/\u2032/g, "'").replace(/\u0375/g, ',');
    var parts = name.match(/^(,*)([a-h])(x|#|bb|b?)([,\']*)$/i);
    if (!parts || name !== parts[0]) throw new Error('Invalid formatting');
    var note = parts[2];
    var octaveFirst = parts[1];
    var octaveLast = parts[4];
    var lower = note === note.toLowerCase();
    var octave;
    if (octaveFirst) {
        if (lower) throw new Error('Invalid formatting - found commas before lowercase note');
        octave = 2 - octaveFirst.length;
    } else if (octaveLast) {
        if (octaveLast.match(/^'+$/) && lower) octave = 3 + octaveLast.length;
        else if (octaveLast.match(/^,+$/) && !lower) octave = 2 - octaveLast.length;
        else throw new Error("Invalid formatting - mismatch between octave indicator and letter case");
    } else octave = lower ? 3 : 2;
    var accidentalValue = accval.interval(parts[3].toLowerCase());
    var coord = coords(note.toLowerCase());
    coord[0] += octave;
    coord[0] += accidentalValue[0] - coords.A4[0];
    coord[1] += accidentalValue[1] - coords.A4[1];
    return coord;
};

},{"notecoord":"8QhAo","accidental-value":"ktsiD"}],"e5Dzl":[function(require,module,exports) {
module.exports = function(coord1, stdPitch) {
    if (typeof coord1 === 'number') {
        stdPitch = coord1;
        return function(coord) {
            return stdPitch * Math.pow(2, (coord[0] * 12 + coord[1] * 7) / 12);
        };
    }
    stdPitch = stdPitch || 440;
    return stdPitch * Math.pow(2, (coord1[0] * 12 + coord1[1] * 7) / 12);
};

},{}],"dn3yb":[function(require,module,exports) {
// Note coordinates [octave, fifth] relative to C
module.exports = {
    notes: {
        c: [
            0,
            0
        ],
        d: [
            -1,
            2
        ],
        e: [
            -2,
            4
        ],
        f: [
            1,
            -1
        ],
        g: [
            0,
            1
        ],
        a: [
            -1,
            3
        ],
        b: [
            -2,
            5
        ],
        h: [
            -2,
            5
        ]
    },
    intervals: {
        unison: [
            0,
            0
        ],
        second: [
            3,
            -5
        ],
        third: [
            2,
            -3
        ],
        fourth: [
            1,
            -1
        ],
        fifth: [
            0,
            1
        ],
        sixth: [
            3,
            -4
        ],
        seventh: [
            2,
            -2
        ],
        octave: [
            1,
            0
        ]
    },
    intervalFromFifth: [
        'second',
        'sixth',
        'third',
        'seventh',
        'fourth',
        'unison',
        'fifth'
    ],
    intervalsIndex: [
        'unison',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
        'octave',
        'ninth',
        'tenth',
        'eleventh',
        'twelfth',
        'thirteenth',
        'fourteenth',
        'fifteenth'
    ],
    // linear index to fifth = (2 * index + 1) % 7
    fifths: [
        'f',
        'c',
        'g',
        'd',
        'a',
        'e',
        'b'
    ],
    accidentals: [
        'bb',
        'b',
        '',
        '#',
        'x'
    ],
    sharp: [
        -4,
        7
    ],
    A4: [
        3,
        3
    ],
    durations: {
        '0.25': 'longa',
        '0.5': 'breve',
        '1': 'whole',
        '2': 'half',
        '4': 'quarter',
        '8': 'eighth',
        '16': 'sixteenth',
        '32': 'thirty-second',
        '64': 'sixty-fourth',
        '128': 'hundred-twenty-eighth'
    },
    qualityLong: {
        P: 'perfect',
        M: 'major',
        m: 'minor',
        A: 'augmented',
        AA: 'doubly augmented',
        d: 'diminished',
        dd: 'doubly diminished'
    },
    alterations: {
        perfect: [
            'dd',
            'd',
            'P',
            'A',
            'AA'
        ],
        minor: [
            'dd',
            'd',
            'm',
            'M',
            'A',
            'AA'
        ]
    },
    symbols: {
        'min': [
            'm3',
            'P5'
        ],
        'm': [
            'm3',
            'P5'
        ],
        '-': [
            'm3',
            'P5'
        ],
        'M': [
            'M3',
            'P5'
        ],
        '': [
            'M3',
            'P5'
        ],
        '+': [
            'M3',
            'A5'
        ],
        'aug': [
            'M3',
            'A5'
        ],
        'dim': [
            'm3',
            'd5'
        ],
        'o': [
            'm3',
            'd5'
        ],
        'maj': [
            'M3',
            'P5',
            'M7'
        ],
        'dom': [
            'M3',
            'P5',
            'm7'
        ],
        'ø': [
            'm3',
            'd5',
            'm7'
        ],
        '5': [
            'P5'
        ]
    },
    chordShort: {
        'major': 'M',
        'minor': 'm',
        'augmented': 'aug',
        'diminished': 'dim',
        'half-diminished': '7b5',
        'power': '5',
        'dominant': '7'
    },
    stepNumber: {
        'unison': 1,
        'first': 1,
        'second': 2,
        'third': 3,
        'fourth': 4,
        'fifth': 5,
        'sixth': 6,
        'seventh': 7,
        'octave': 8,
        'ninth': 9,
        'eleventh': 11,
        'thirteenth': 13
    },
    // Adjusted Shearer syllables - Chromatic solfege system
    // Some intervals are not provided for. These include:
    // dd2 - Doubly diminished second
    // dd3 - Doubly diminished third
    // AA3 - Doubly augmented third
    // dd6 - Doubly diminished sixth
    // dd7 - Doubly diminished seventh
    // AA7 - Doubly augmented seventh
    intervalSolfege: {
        'dd1': 'daw',
        'd1': 'de',
        'P1': 'do',
        'A1': 'di',
        'AA1': 'dai',
        'd2': 'raw',
        'm2': 'ra',
        'M2': 're',
        'A2': 'ri',
        'AA2': 'rai',
        'd3': 'maw',
        'm3': 'me',
        'M3': 'mi',
        'A3': 'mai',
        'dd4': 'faw',
        'd4': 'fe',
        'P4': 'fa',
        'A4': 'fi',
        'AA4': 'fai',
        'dd5': 'saw',
        'd5': 'se',
        'P5': 'so',
        'A5': 'si',
        'AA5': 'sai',
        'd6': 'law',
        'm6': 'le',
        'M6': 'la',
        'A6': 'li',
        'AA6': 'lai',
        'd7': 'taw',
        'm7': 'te',
        'M7': 'ti',
        'A7': 'tai',
        'dd8': 'daw',
        'd8': 'de',
        'P8': 'do',
        'A8': 'di',
        'AA8': 'dai'
    }
};

},{}],"h8fpS":[function(require,module,exports) {
module.exports = {
    add: function(note, interval) {
        return [
            note[0] + interval[0],
            note[1] + interval[1]
        ];
    },
    sub: function(note, interval) {
        return [
            note[0] - interval[0],
            note[1] - interval[1]
        ];
    },
    mul: function(note, interval) {
        if (typeof interval === 'number') return [
            note[0] * interval,
            note[1] * interval
        ];
        else return [
            note[0] * interval[0],
            note[1] * interval[1]
        ];
    },
    sum: function(coord) {
        return coord[0] + coord[1];
    }
};

},{}],"7Q00e":[function(require,module,exports) {
var knowledge = require('./knowledge');
var vector = require('./vector');
var toCoord = require('interval-coords');
function Interval(coord) {
    if (!(this instanceof Interval)) return new Interval(coord);
    this.coord = coord;
}
Interval.prototype = {
    name: function() {
        return knowledge.intervalsIndex[this.number() - 1];
    },
    semitones: function() {
        return vector.sum(vector.mul(this.coord, [
            12,
            7
        ]));
    },
    number: function() {
        return Math.abs(this.value());
    },
    value: function() {
        var toMultiply = Math.floor((this.coord[1] - 2) / 7) + 1;
        var product = vector.mul(knowledge.sharp, toMultiply);
        var without = vector.sub(this.coord, product);
        var i = knowledge.intervalFromFifth[without[1] + 5];
        var diff = without[0] - knowledge.intervals[i][0];
        var val = knowledge.stepNumber[i] + diff * 7;
        return val > 0 ? val : val - 2;
    },
    type: function() {
        return knowledge.intervals[this.base()][0] <= 1 ? 'perfect' : 'minor';
    },
    base: function() {
        var product = vector.mul(knowledge.sharp, this.qualityValue());
        var fifth = vector.sub(this.coord, product)[1];
        fifth = this.value() > 0 ? fifth + 5 : -(fifth - 5) % 7;
        fifth = fifth < 0 ? knowledge.intervalFromFifth.length + fifth : fifth;
        var name = knowledge.intervalFromFifth[fifth];
        if (name === 'unison' && this.number() >= 8) name = 'octave';
        return name;
    },
    direction: function(dir) {
        if (dir) {
            var is = this.value() >= 1 ? 'up' : 'down';
            if (is !== dir) this.coord = vector.mul(this.coord, -1);
            return this;
        } else return this.value() >= 1 ? 'up' : 'down';
    },
    simple: function(ignore) {
        // Get the (upwards) base interval (with quality)
        var simple = knowledge.intervals[this.base()];
        var toAdd = vector.mul(knowledge.sharp, this.qualityValue());
        simple = vector.add(simple, toAdd);
        // Turn it around if necessary
        if (!ignore) simple = this.direction() === 'down' ? vector.mul(simple, -1) : simple;
        return new Interval(simple);
    },
    isCompound: function() {
        return this.number() > 8;
    },
    octaves: function() {
        var toSubtract, without, octaves;
        if (this.direction() === 'up') {
            toSubtract = vector.mul(knowledge.sharp, this.qualityValue());
            without = vector.sub(this.coord, toSubtract);
            octaves = without[0] - knowledge.intervals[this.base()][0];
        } else {
            toSubtract = vector.mul(knowledge.sharp, -this.qualityValue());
            without = vector.sub(this.coord, toSubtract);
            octaves = -(without[0] + knowledge.intervals[this.base()][0]);
        }
        return octaves;
    },
    invert: function() {
        var i = this.base();
        var qual = this.qualityValue();
        var acc = this.type() === 'minor' ? -(qual - 1) : -qual;
        var idx = 9 - knowledge.stepNumber[i] - 1;
        var coord = knowledge.intervals[knowledge.intervalsIndex[idx]];
        coord = vector.add(coord, vector.mul(knowledge.sharp, acc));
        return new Interval(coord);
    },
    quality: function(lng) {
        var quality = knowledge.alterations[this.type()][this.qualityValue() + 2];
        return lng ? knowledge.qualityLong[quality] : quality;
    },
    qualityValue: function() {
        if (this.direction() === 'down') return Math.floor((-this.coord[1] - 2) / 7) + 1;
        else return Math.floor((this.coord[1] - 2) / 7) + 1;
    },
    equal: function(interval) {
        return this.coord[0] === interval.coord[0] && this.coord[1] === interval.coord[1];
    },
    greater: function(interval) {
        var semi = this.semitones();
        var isemi = interval.semitones();
        // If equal in absolute size, measure which interval is bigger
        // For example P4 is bigger than A3
        return semi === isemi ? this.number() > interval.number() : semi > isemi;
    },
    smaller: function(interval) {
        return !this.equal(interval) && !this.greater(interval);
    },
    add: function(interval) {
        return new Interval(vector.add(this.coord, interval.coord));
    },
    toString: function(ignore) {
        // If given true, return the positive value
        var number = ignore ? this.number() : this.value();
        return this.quality() + number;
    }
};
Interval.toCoord = function(simple) {
    var coord = toCoord(simple);
    if (!coord) throw new Error('Invalid simple format interval');
    return new Interval(coord);
};
Interval.from = function(from, to) {
    return from.interval(to);
};
Interval.between = function(from, to) {
    return new Interval(vector.sub(to.coord, from.coord));
};
Interval.invert = function(sInterval) {
    return Interval.toCoord(sInterval).invert().toString();
};
module.exports = Interval;

},{"./knowledge":"dn3yb","./vector":"h8fpS","interval-coords":"aAlIb"}],"aAlIb":[function(require,module,exports) {
var pattern = /^(AA|A|P|M|m|d|dd)(-?\d+)$/;
// The interval it takes to raise a note a semitone
var sharp = [
    -4,
    7
];
var pAlts = [
    'dd',
    'd',
    'P',
    'A',
    'AA'
];
var mAlts = [
    'dd',
    'd',
    'm',
    'M',
    'A',
    'AA'
];
var baseIntervals = [
    [
        0,
        0
    ],
    [
        3,
        -5
    ],
    [
        2,
        -3
    ],
    [
        1,
        -1
    ],
    [
        0,
        1
    ],
    [
        3,
        -4
    ],
    [
        2,
        -2
    ],
    [
        1,
        0
    ]
];
module.exports = function(simple) {
    var parser = simple.match(pattern);
    if (!parser) return null;
    var quality = parser[1];
    var number = +parser[2];
    var sign = number < 0 ? -1 : 1;
    number = sign < 0 ? -number : number;
    var lower = number > 8 ? number % 7 || 7 : number;
    var octaves = (number - lower) / 7;
    var base = baseIntervals[lower - 1];
    var alts = base[0] <= 1 ? pAlts : mAlts;
    var alt = alts.indexOf(quality) - 2;
    // this happens, if the alteration wasn't suitable for this type
    // of interval, such as P2 or M5 (no "perfect second" or "major fifth")
    if (alt === -3) return null;
    return [
        sign * (base[0] + octaves + sharp[0] * alt),
        sign * (base[1] + sharp[1] * alt)
    ];
};
// Copy to avoid overwriting internal base intervals
module.exports.coords = baseIntervals.slice(0);

},{}],"h2Yz2":[function(require,module,exports) {
var daccord = require('daccord');
var knowledge = require('./knowledge');
var Note = require('./note');
var Interval = require('./interval');
function Chord(root, name) {
    if (!(this instanceof Chord)) return new Chord(root, name);
    name = name || '';
    this.name = root.name().toUpperCase() + root.accidental() + name;
    this.symbol = name;
    this.root = root;
    this.intervals = [];
    this._voicing = [];
    var bass = name.split('/');
    if (bass.length === 2 && bass[1].trim() !== '9') {
        name = bass[0];
        bass = bass[1].trim();
    } else bass = null;
    this.intervals = daccord(name).map(Interval.toCoord);
    this._voicing = this.intervals.slice();
    if (bass) {
        var intervals = this.intervals, bassInterval, note;
        // Make sure the bass is atop of the root note
        note = Note.fromString(bass + (root.octave() + 1)); // crude
        bassInterval = Interval.between(root, note);
        bass = bassInterval.simple();
        bassInterval = bassInterval.invert().direction('down');
        this._voicing = [
            bassInterval
        ];
        for(var i = 0, length = intervals.length; i < length; i++)if (!intervals[i].simple().equal(bass)) this._voicing.push(intervals[i]);
    }
}
Chord.prototype = {
    notes: function() {
        var root = this.root;
        return this.voicing().map(function(interval) {
            return root.interval(interval);
        });
    },
    simple: function() {
        return this.notes().map(function(n) {
            return n.toString(true);
        });
    },
    bass: function() {
        return this.root.interval(this._voicing[0]);
    },
    voicing: function(voicing) {
        // Get the voicing
        if (!voicing) return this._voicing;
        // Set the voicing
        this._voicing = [];
        for(var i = 0, length = voicing.length; i < length; i++)this._voicing[i] = Interval.toCoord(voicing[i]);
        return this;
    },
    resetVoicing: function() {
        this._voicing = this.intervals;
    },
    dominant: function(additional) {
        additional = additional || '';
        return new Chord(this.root.interval('P5'), additional);
    },
    subdominant: function(additional) {
        additional = additional || '';
        return new Chord(this.root.interval('P4'), additional);
    },
    parallel: function(additional) {
        additional = additional || '';
        var quality = this.quality();
        if (this.chordType() !== 'triad' || quality === 'diminished' || quality === 'augmented') throw new Error('Only major/minor triads have parallel chords');
        if (quality === 'major') return new Chord(this.root.interval('m3', 'down'), 'm');
        else return new Chord(this.root.interval('m3', 'up'));
    },
    quality: function() {
        var third, fifth, seventh, intervals = this.intervals;
        for(var i = 0, length = intervals.length; i < length; i++){
            if (intervals[i].number() === 3) third = intervals[i];
            else if (intervals[i].number() === 5) fifth = intervals[i];
            else if (intervals[i].number() === 7) seventh = intervals[i];
        }
        if (!third) return;
        third = third.direction() === 'down' ? third.invert() : third;
        third = third.simple().toString();
        if (fifth) {
            fifth = fifth.direction === 'down' ? fifth.invert() : fifth;
            fifth = fifth.simple().toString();
        }
        if (seventh) {
            seventh = seventh.direction === 'down' ? seventh.invert() : seventh;
            seventh = seventh.simple().toString();
        }
        if (third === 'M3') {
            if (fifth === 'A5') return 'augmented';
            else if (fifth === 'P5') return seventh === 'm7' ? 'dominant' : 'major';
            return 'major';
        } else if (third === 'm3') {
            if (fifth === 'P5') return 'minor';
            else if (fifth === 'd5') return seventh === 'm7' ? 'half-diminished' : 'diminished';
            return 'minor';
        }
    },
    chordType: function() {
        var length = this.intervals.length, interval, has, invert, i, name;
        if (length === 2) return 'dyad';
        else if (length === 3) {
            has = {
                unison: false,
                third: false,
                fifth: false
            };
            for(i = 0; i < length; i++){
                interval = this.intervals[i];
                invert = interval.invert();
                if (interval.base() in has) has[interval.base()] = true;
                else if (invert.base() in has) has[invert.base()] = true;
            }
            name = has.unison && has.third && has.fifth ? 'triad' : 'trichord';
        } else if (length === 4) {
            has = {
                unison: false,
                third: false,
                fifth: false,
                seventh: false
            };
            for(i = 0; i < length; i++){
                interval = this.intervals[i];
                invert = interval.invert();
                if (interval.base() in has) has[interval.base()] = true;
                else if (invert.base() in has) has[invert.base()] = true;
            }
            if (has.unison && has.third && has.fifth && has.seventh) name = 'tetrad';
        }
        return name || 'unknown';
    },
    get: function(interval) {
        if (typeof interval === 'string' && interval in knowledge.stepNumber) {
            var intervals = this.intervals, i, length;
            interval = knowledge.stepNumber[interval];
            for(i = 0, length = intervals.length; i < length; i++){
                if (intervals[i].number() === interval) return this.root.interval(intervals[i]);
            }
            return null;
        } else throw new Error('Invalid interval name');
    },
    interval: function(interval) {
        return new Chord(this.root.interval(interval), this.symbol);
    },
    transpose: function(interval) {
        this.root.transpose(interval);
        this.name = this.root.name().toUpperCase() + this.root.accidental() + this.symbol;
        return this;
    },
    toString: function() {
        return this.name;
    }
};
module.exports = Chord;

},{"daccord":"3EK3V","./knowledge":"dn3yb","./note":"l6Zcm","./interval":"7Q00e"}],"3EK3V":[function(require,module,exports) {
var SYMBOLS = {
    'm': [
        'm3',
        'P5'
    ],
    'mi': [
        'm3',
        'P5'
    ],
    'min': [
        'm3',
        'P5'
    ],
    '-': [
        'm3',
        'P5'
    ],
    'M': [
        'M3',
        'P5'
    ],
    'ma': [
        'M3',
        'P5'
    ],
    '': [
        'M3',
        'P5'
    ],
    '+': [
        'M3',
        'A5'
    ],
    'aug': [
        'M3',
        'A5'
    ],
    'dim': [
        'm3',
        'd5'
    ],
    'o': [
        'm3',
        'd5'
    ],
    'maj': [
        'M3',
        'P5',
        'M7'
    ],
    'dom': [
        'M3',
        'P5',
        'm7'
    ],
    'ø': [
        'm3',
        'd5',
        'm7'
    ],
    '5': [
        'P5'
    ],
    '6/9': [
        'M3',
        'P5',
        'M6',
        'M9'
    ]
};
module.exports = function(symbol) {
    var c, parsing = 'quality', additionals = [], name, chordLength = 2;
    var notes = [
        'P1',
        'M3',
        'P5',
        'm7',
        'M9',
        'P11',
        'M13'
    ];
    var explicitMajor = false;
    function setChord(name) {
        var intervals = SYMBOLS[name];
        for(var i = 0, len = intervals.length; i < len; i++)notes[i + 1] = intervals[i];
        chordLength = intervals.length;
    }
    // Remove whitespace, commas and parentheses
    symbol = symbol.replace(/[,\s\(\)]/g, '');
    for(var i1 = 0, len1 = symbol.length; i1 < len1; i1++){
        if (!(c = symbol[i1])) return;
        if (parsing === 'quality') {
            var sub3 = i1 + 2 < len1 ? symbol.substr(i1, 3).toLowerCase() : null;
            var sub2 = i1 + 1 < len1 ? symbol.substr(i1, 2).toLowerCase() : null;
            if (sub3 in SYMBOLS) name = sub3;
            else if (sub2 in SYMBOLS) name = sub2;
            else if (c in SYMBOLS) name = c;
            else name = '';
            if (name) setChord(name);
            if (name === 'M' || name === 'ma' || name === 'maj') explicitMajor = true;
            i1 += name.length - 1;
            parsing = 'extension';
        } else if (parsing === 'extension') {
            c = c === '1' && symbol[i1 + 1] ? +symbol.substr(i1, 2) : +c;
            if (!isNaN(c) && c !== 6) {
                chordLength = (c - 1) / 2;
                if (chordLength !== Math.round(chordLength)) return new Error('Invalid interval extension: ' + c.toString(10));
                if (name === 'o' || name === 'dim') notes[3] = 'd7';
                else if (explicitMajor) notes[3] = 'M7';
                i1 += c >= 10 ? 1 : 0;
            } else if (c === 6) {
                notes[3] = 'M6';
                chordLength = Math.max(3, chordLength);
            } else i1 -= 1;
            parsing = 'alterations';
        } else if (parsing === 'alterations') {
            var alterations = symbol.substr(i1).split(/(#|b|add|maj|sus|M)/i), next1, flat = false, sharp = false;
            if (alterations.length === 1) return new Error('Invalid alteration');
            else if (alterations[0].length !== 0) return new Error('Invalid token: \'' + alterations[0] + '\'');
            var ignore = false;
            alterations.forEach(function(alt, i, arr) {
                if (ignore || !alt.length) return ignore = false;
                var next = arr[i + 1], lower = alt.toLowerCase();
                if (alt === 'M' || lower === 'maj') {
                    if (next === '7') ignore = true;
                    chordLength = Math.max(3, chordLength);
                    notes[3] = 'M7';
                } else if (lower === 'sus') {
                    var type = 'P4';
                    if (next === '2' || next === '4') {
                        ignore = true;
                        if (next === '2') type = 'M2';
                    }
                    notes[1] = type; // Replace third with M2 or P4
                } else if (lower === 'add') {
                    if (next === '9') additionals.push('M9');
                    else if (next === '11') additionals.push('P11');
                    else if (next === '13') additionals.push('M13');
                    ignore = true;
                } else if (lower === 'b') flat = true;
                else if (lower === '#') sharp = true;
                else {
                    var token = +alt, quality, intPos;
                    if (isNaN(token) || String(token).length !== alt.length) return new Error('Invalid token: \'' + alt + '\'');
                    if (token === 6) {
                        if (sharp) notes[3] = 'A6';
                        else if (flat) notes[3] = 'm6';
                        else notes[3] = 'M6';
                        chordLength = Math.max(3, chordLength);
                        return;
                    }
                    // Calculate the position in the 'note' array
                    intPos = (token - 1) / 2;
                    if (chordLength < intPos) chordLength = intPos;
                    if (token < 5 || token === 7 || intPos !== Math.round(intPos)) return new Error('Invalid interval alteration: ' + token);
                    quality = notes[intPos][0];
                    // Alterate the quality of the interval according the accidentals
                    if (sharp) {
                        if (quality === 'd') quality = 'm';
                        else if (quality === 'm') quality = 'M';
                        else if (quality === 'M' || quality === 'P') quality = 'A';
                    } else if (flat) {
                        if (quality === 'A') quality = 'M';
                        else if (quality === 'M') quality = 'm';
                        else if (quality === 'm' || quality === 'P') quality = 'd';
                    }
                    sharp = flat = false;
                    notes[intPos] = quality + token;
                }
            });
            parsing = 'ended';
        } else if (parsing === 'ended') break;
    }
    return notes.slice(0, chordLength + 1).concat(additionals);
};

},{}],"vO4zO":[function(require,module,exports) {
var knowledge = require('./knowledge');
var Interval = require('./interval');
var scales = {
    aeolian: [
        'P1',
        'M2',
        'm3',
        'P4',
        'P5',
        'm6',
        'm7'
    ],
    blues: [
        'P1',
        'm3',
        'P4',
        'd5',
        'P5',
        'm7'
    ],
    chromatic: [
        'P1',
        'm2',
        'M2',
        'm3',
        'M3',
        'P4',
        'A4',
        'P5',
        'm6',
        'M6',
        'm7',
        'M7'
    ],
    dorian: [
        'P1',
        'M2',
        'm3',
        'P4',
        'P5',
        'M6',
        'm7'
    ],
    doubleharmonic: [
        'P1',
        'm2',
        'M3',
        'P4',
        'P5',
        'm6',
        'M7'
    ],
    harmonicminor: [
        'P1',
        'M2',
        'm3',
        'P4',
        'P5',
        'm6',
        'M7'
    ],
    ionian: [
        'P1',
        'M2',
        'M3',
        'P4',
        'P5',
        'M6',
        'M7'
    ],
    locrian: [
        'P1',
        'm2',
        'm3',
        'P4',
        'd5',
        'm6',
        'm7'
    ],
    lydian: [
        'P1',
        'M2',
        'M3',
        'A4',
        'P5',
        'M6',
        'M7'
    ],
    majorpentatonic: [
        'P1',
        'M2',
        'M3',
        'P5',
        'M6'
    ],
    melodicminor: [
        'P1',
        'M2',
        'm3',
        'P4',
        'P5',
        'M6',
        'M7'
    ],
    minorpentatonic: [
        'P1',
        'm3',
        'P4',
        'P5',
        'm7'
    ],
    mixolydian: [
        'P1',
        'M2',
        'M3',
        'P4',
        'P5',
        'M6',
        'm7'
    ],
    phrygian: [
        'P1',
        'm2',
        'm3',
        'P4',
        'P5',
        'm6',
        'm7'
    ],
    wholetone: [
        'P1',
        'M2',
        'M3',
        'A4',
        'A5',
        'A6'
    ]
};
// synonyms
scales.harmonicchromatic = scales.chromatic;
scales.minor = scales.aeolian;
scales.major = scales.ionian;
scales.flamenco = scales.doubleharmonic;
function Scale(tonic, scale) {
    if (!(this instanceof Scale)) return new Scale(tonic, scale);
    var scaleName, i;
    if (!('coord' in tonic)) throw new Error('Invalid Tonic');
    if (typeof scale === 'string') {
        scaleName = scale;
        scale = scales[scale];
        if (!scale) throw new Error('Invalid Scale');
    } else for(i in scales){
        if (scales.hasOwnProperty(i)) {
            if (scales[i].toString() === scale.toString()) {
                scaleName = i;
                break;
            }
        }
    }
    this.name = scaleName;
    this.tonic = tonic;
    this.scale = scale;
}
Scale.prototype = {
    notes: function() {
        var notes = [];
        for(var i = 0, length = this.scale.length; i < length; i++)notes.push(this.tonic.interval(this.scale[i]));
        return notes;
    },
    simple: function() {
        return this.notes().map(function(n) {
            return n.toString(true);
        });
    },
    type: function() {
        var length = this.scale.length - 2;
        if (length < 8) return "7tonic";
    },
    get: function(i) {
        var isStepStr = typeof i === 'string' && i in knowledge.stepNumber;
        i = isStepStr ? knowledge.stepNumber[i] : i;
        var len = this.scale.length;
        var interval, octaves;
        if (i < 0) {
            interval = this.scale[i % len + len - 1];
            octaves = Math.floor((i - 1) / len);
        } else if (i % len === 0) {
            interval = this.scale[len - 1];
            octaves = i / len - 1;
        } else {
            interval = this.scale[i % len - 1];
            octaves = Math.floor(i / len);
        }
        return this.tonic.interval(interval).interval(new Interval([
            octaves,
            0
        ]));
    },
    solfege: function(index, showOctaves) {
        if (index) return this.get(index).solfege(this, showOctaves);
        return this.notes().map(function(n) {
            return n.solfege(this, showOctaves);
        });
    },
    interval: function(interval) {
        interval = typeof interval === 'string' ? Interval.toCoord(interval) : interval;
        return new Scale(this.tonic.interval(interval), this.scale);
    },
    transpose: function(interval) {
        var scale = this.interval(interval);
        this.scale = scale.scale;
        this.tonic = scale.tonic;
        return this;
    }
};
Scale.KNOWN_SCALES = Object.keys(scales);
module.exports = Scale;

},{"./knowledge":"dn3yb","./interval":"7Q00e"}],"7FAQa":[function(require,module,exports) {
var knowledge = require('./knowledge');
module.exports = function(teoria) {
    var Note = teoria.Note;
    var Chord = teoria.Chord;
    var Scale = teoria.Scale;
    Note.prototype.chord = function(chord) {
        var isShortChord = chord in knowledge.chordShort;
        chord = isShortChord ? knowledge.chordShort[chord] : chord;
        return new Chord(this, chord);
    };
    Note.prototype.scale = function(scale) {
        return new Scale(this, scale);
    };
};

},{"./knowledge":"dn3yb"}],"31u3t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Synth {
    constructor(key, numVoices){
        this.voices = Array.from({
            length: numVoices
        }).map(function(x, i) {
            return {
                key: `${key}:v:${i}`,
                gate: 0,
                freq: 440,
                gain: 0,
                data: {
                    gateSeq: [],
                    freqSeq: [],
                    veloSeq: []
                }
            };
        });
        this.nextVoice = 0;
    }
    reset() {
        this.voices.forEach(function(v) {
            v.gate = 0;
            v.freq = 440;
            v.gain = 1;
            v.data.gateSeq.length = 0;
            v.data.freqSeq.length = 0;
            v.data.veloSeq.length = 0;
        });
        this.nextVoice = 0;
    }
    step() {
        this.voices.forEach(function(voice, i) {
            voice.data.gateSeq.push(voice.gate);
            voice.data.freqSeq.push(voice.freq);
            voice.data.veloSeq.push(voice.gain);
        });
    }
    noteOn(freq, gain) {
        this.voices[this.nextVoice].gate = 1;
        this.voices[this.nextVoice].freq = freq;
        this.voices[this.nextVoice].gain = gain;
        if (++this.nextVoice >= this.voices.length) this.nextVoice -= this.voices.length;
    }
    noteOff(freq1) {
        for(let i = 0; i < this.voices.length; ++i)if (this.voices[i].freq === freq1) this.voices[i].gate = 0;
    }
    render(renderFunc) {
        return this.voices.map(function(voice, i) {
            return renderFunc(voice.key, voice.data.gateSeq, voice.data.freqSeq, voice.data.veloSeq, i);
        });
    }
}
exports.default = Synth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c8qF0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A simple "clear" trick which essentially multiplies the alpha value of any
// existing color content in the canvas, slowly decaying to transparent.
parcelHelpers.export(exports, "clear", ()=>clear
);
// The main draw loop
//
// Maps oscilloscope data onto spherical coordinates, then plots the spherical
// positions onto the canvas
parcelHelpers.export(exports, "draw", ()=>draw
);
const palette = Array.from({
    length: 16
}).map((x, i)=>4 + i / 16 * 360
).filter((x)=>Math.abs(x - 250) > 25
);
const hue = palette[Math.round(Math.random() * (palette.length - 1))];
const phiTilt = Math.PI / 2 + Math.random() * Math.PI;
const thetaTilt = Math.PI / 2 + Math.random() * Math.PI;
function clear(ctx, clone, width, height) {
    clone.clearRect(0, 0, width, height);
    // Copy our existing context image onto the clone, which has its own globalAlpha,
    // so doing this will increase the opacity of the existing drawing that we place onto it
    clone.drawImage(ctx.canvas, 0, 0);
    // Then clear our original
    ctx.clearRect(0, 0, width, height);
    // Then we can draw back from our clone and we'll get the more-transparent version
    ctx.drawImage(clone.canvas, 0, 0);
}
function draw(ctx, frameCount, width, height, [leftData, rightData]) {
    // Mid points and radius
    let mx = width * 0.5;
    let my = height * 0.5;
    let mr = Math.min(mx, my) * 0.8;
    // Tilt + slow rotation
    let phiDelta = phiTilt + frameCount / 1317;
    let thetaDelta = thetaTilt + frameCount / 1000;
    // Slowly changing stroke color
    ctx.strokeStyle = `hsla(${hue + 10 * Math.sin(frameCount / 157) % 360}, 91%, ${65 + 10 * Math.sin(frameCount / 100)}%, 0.94)`;
    ctx.beginPath();
    {
        // Place the channel data in spherical coordinates, then map back to cartesian for plotting
        let phi = phiDelta + Math.PI * leftData[0];
        let theta = thetaDelta + Math.PI * rightData[0];
        let radius = mr;
        let x = radius * Math.cos(phi) * Math.sin(theta);
        let y = radius * Math.sin(phi) * Math.sin(theta);
        let z = radius * Math.cos(theta);
        ctx.moveTo(mx + x, my + z);
    }
    for(let i = 1; i < leftData.length; ++i){
        // Place the channel data in spherical coordinates, then map back to cartesian for plotting
        let phi = phiDelta + Math.PI * leftData[i];
        let theta = thetaDelta + Math.PI * rightData[i];
        let radius = mr;
        let x = radius * Math.cos(phi) * Math.sin(theta);
        let y = radius * Math.sin(phi) * Math.sin(theta);
        let z = radius * Math.cos(theta);
        ctx.lineTo(mx + x, my + z);
    }
    ctx.stroke();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["1bEO8","lzYRN"], "lzYRN", "parcelRequire9e87")

//# sourceMappingURL=index.833266ea.js.map
