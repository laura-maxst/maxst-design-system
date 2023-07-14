'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

if (process.env.NODE_ENV === 'production') {
  react.exports = requireReact_production_min();
} else {
  react.exports = requireReact_development();
}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var DeleteLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4597 4.02002H28.5397V6.42002H19.4597V4.02002ZM39.76 9.06003H12.94L8.23999 13.76V17.8H34.48V38.3L31.18 41.6H13.52V20.38H11.12V44H32.18L36.88 39.3V17.8H39.76V9.06003ZM37.36 15.4H10.64V14.76L13.94 11.46H37.36V15.4ZM18.5798 22.14H20.9798V37.28H18.5798V22.14ZM27.0203 22.14H29.4203V37.28H27.0203V22.14Z", fill: "currentColor" })));
};

var DeleteLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.459 3.71997H28.539V6.71997H19.459V3.71997ZM40.0395 8.75998H12.8195L7.93945 13.64V18.1H34.1795V38.18L31.1395 41.22L13.7995 41.3V20.38H10.7995V44.3H32.2795L37.1595 39.42V18.1H40.0395V8.75998ZM10.9395 14.88L14.0595 11.76H37.0595V15.1H10.9395V14.88ZM18.2793 22.14H21.2793V37.28H18.2793V22.14ZM26.7188 22.14H29.7188V37.28H26.7188V22.14Z", fill: "currentColor" })));
};

var DeleteLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4599 4.62H28.5399V5.82H19.4599V4.62ZM39.1598 9.66003H13.1998L8.83978 14.02V17.2H35.0798V38.56L31.4398 42.2H12.9198V20.38H11.7198V43.4H31.9398L36.2998 39.04V17.2H39.1798V9.66003H39.1598ZM37.9598 16H10.0398V14.52L13.6798 10.88H37.9598V16ZM19.1796 22.14H20.3796V37.28H19.1796V22.14ZM27.6191 22.14H28.8191V37.28H27.6191V22.14Z", fill: "currentColor" })));
};

var DeleteFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4597 4.02002H28.5397V6.42002H19.4597V4.02002ZM12.54 8.58002L8.23999 12.88V15.28H39.76V8.58002H12.54ZM11.1199 44H32.1799L36.8799 39.3V17.18H11.1199V44ZM27.0199 22.14H29.4199V37.28H27.0199V22.14ZM18.5799 22.14H20.9799V37.28H18.5799V22.14Z", fill: "currentColor" })));
};

var DownloadLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M34 41.6H14V44H34V41.6Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1515 26.8486L12.8485 25.1516L24 36.3031L35.1515 25.1516L36.8485 26.8486L24 39.6972L11.1515 26.8486Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.9715 4.40012L24.9715 38.0001L22.5997 38.0001L22.5997 4.40012L24.9715 4.40012Z", fill: "currentColor" })));
};

var EditLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M43.9603 14.5L33.4203 3.95996L8.10031 29.3V38.14L6.32031 39.92L8.02031 41.62L9.80031 39.84H18.6403L43.9603 14.52V14.5ZM40.5603 14.5L36.8603 18.2L29.7203 11.06L33.4203 7.35996L40.5603 14.5ZM10.5003 37.42V30.28L28.0203 12.76L35.1603 19.9L17.6403 37.42H10.5003Z", fill: "currentColor" }),
        React.createElement("path", { d: "M28.2786 17.948L15.8477 30.3789L17.5447 32.076L29.9757 19.645L28.2786 17.948Z", fill: "currentColor" })));
};

var EditLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M44.3796 14.52L33.4196 3.56L7.79961 29.16V38L6.09961 39.7L8.21961 41.82L9.91961 40.12H18.7596L44.3796 14.5V14.52ZM40.1396 14.52L36.8596 17.8L30.1396 11.08L33.4196 7.8L40.1396 14.52ZM10.7996 37.14V30.42L28.0196 13.2L34.7396 19.92L17.5196 37.14H10.7996Z", fill: "currentColor" }),
        React.createElement("path", { d: "M28.0657 17.7359L15.6348 30.1668L17.7561 32.2881L30.187 19.8572L28.0657 17.7359Z", fill: "currentColor" })));
};

var EditLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M43.1202 14.52L33.4202 4.82001L8.70023 29.54V38.38L6.74023 40.34L7.58023 41.18L9.54023 39.22H18.3802L43.1002 14.5L43.1202 14.52ZM41.4202 14.52L36.8602 19.08L28.8602 11.08L33.4202 6.52001L41.4202 14.52ZM9.90023 38.04V30.04L28.0202 11.92L36.0202 19.92L17.9002 38.04H9.90023Z", fill: "currentColor" }),
        React.createElement("path", { d: "M28.7024 18.3723L16.2715 30.8032L17.12 31.6518L29.551 19.2208L28.7024 18.3723Z", fill: "currentColor" })));
};

var EditFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M43.9603 14.5L33.4203 3.96002L8.10031 29.3V38.14L6.32031 39.92L8.02031 41.62L9.80031 39.84H18.6403L43.9603 14.52V14.5ZM33.4203 7.36002L40.5603 14.5L36.8603 18.2L29.7203 11.06L33.4203 7.36002ZM15.8403 30.4L28.2803 17.96L29.9803 19.66L17.5403 32.1L15.8403 30.4Z", fill: "currentColor" })));
};

var FileLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M21.4595 39.98H8.01953V26.54L26.5395 8.02002H39.9795V20.96H37.5795V10.42H27.5195L10.4195 27.52V37.58H20.4795L31.5395 26.52V20.08H26.7595L16.0595 30.78L14.3595 29.08L25.7795 17.66H33.9395V27.5L21.4595 39.98Z", fill: "currentColor" })));
};

var FileLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M21.5807 40.28H7.7207V26.42L26.4207 7.71997H40.2807V20.96H37.2807V10.72H27.6607L10.7207 27.66V37.28H20.3407L31.2407 26.38V20.38H26.9007L16.2607 31L14.1407 28.88L25.6607 17.38H34.2407V27.64L21.5807 40.28Z", fill: "currentColor" })));
};

var FileLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M21.2201 39.38H8.62012V26.78L26.7801 8.62H39.3801V20.96H38.1801V9.81999H27.2801L9.82012 27.28V38.18H20.7201L32.1401 26.76V19.48H26.5201L15.6401 30.36L14.7801 29.52L26.0201 18.28H33.3401V27.26L21.2201 39.38Z", fill: "currentColor" })));
};

var FullScreenExitLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5881 7.99991L19.5884 19.5876L8.00014 19.588L8.00006 17.188L17.1883 17.1877L17.188 7.99998L19.5881 7.99991Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.9944 7.99985L27.994 19.5875L39.5823 19.5879L39.5824 17.188L30.3941 17.1877L30.3944 7.99992L27.9944 7.99985Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.9944 39.5817L27.994 27.994L39.5823 27.9936L39.5824 30.3936L30.3941 30.3939L30.3944 39.5816L27.9944 39.5817Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5882 39.5817L19.5885 27.994L8.00023 27.9936L8.00016 30.3935L17.1884 30.3938L17.1881 39.5816L19.5882 39.5817Z", fill: "currentColor" })));
};

var FullScreenLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.99166 19.018L6.99166 7.43031L18.58 7.43031L18.58 9.83024L9.39174 9.83024L9.39174 19.018L6.99166 19.018Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.5685 19.0183L40.5685 7.43059L28.9802 7.43059L28.9802 9.83051L38.1684 9.83051L38.1684 19.0183L40.5685 19.0183Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.5687 29.4185L40.5687 41.0061L28.9804 41.0061L28.9804 38.6062L38.1686 38.6062V29.4185L40.5687 29.4185Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.99166 29.4182L6.99166 41.0058L18.58 41.0058L18.58 38.6059L9.39174 38.6059L9.39174 29.4182L6.99166 29.4182Z", fill: "currentColor" })));
};

var HeartLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.71706 9.27016C13.2017 5.4721 19.8262 6.23562 23.8565 10.3053L24.0007 10.451L24.145 10.3053C28.1753 6.23562 34.7998 5.4721 39.2844 9.27016L39.2862 9.27171C44.2565 13.4982 44.4935 21.0122 39.9979 25.5518L24.0007 41.7054L8.00363 25.5518C3.50795 21.0122 3.74494 13.4982 8.71524 9.27171L8.71706 9.27016ZM10.269 11.1008C6.37414 14.4137 6.18722 20.3069 9.70892 23.863L24.0007 38.2946L38.2926 23.863C41.8142 20.3069 41.6274 14.4138 37.7325 11.1009C34.3267 8.21727 29.1163 8.69619 25.8503 11.9941L24.0007 13.8617L22.1512 11.9941C18.8853 8.69623 13.6749 8.21728 10.269 11.1008Z", fill: "currentColor" })));
};

var HeartFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.85756 8.40932C12.5631 4.39788 19.5205 5.20266 23.7533 9.505L23.9502 9.70511L24.1471 9.505C28.3799 5.20266 35.3373 4.39788 40.0428 8.40932L40.0447 8.41088C45.2579 12.8731 45.5056 20.8017 40.7914 25.5932L23.9502 42.7111L7.10897 25.5932C2.39481 20.8017 2.64251 12.8731 7.85573 8.41088L7.85756 8.40932Z", fill: "currentColor" })));
};

var HomeLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M35.2596 44H25.5796V30.56H22.5196V39.3L17.8196 44H8.05957V22L24.0196 6.04004L39.9796 22V39.3L35.2796 44H35.2596ZM27.9796 41.6H34.2596L37.5596 38.3V22.98L23.9996 9.42004L10.4396 22.98V41.6H16.7996L20.0996 38.3V28.16H27.9596V41.6H27.9796Z", fill: "currentColor" })));
};

var HomeLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24 5.62L7.73999 21.88V44.3H17.92L22.8 39.42V30.86H25.26V44.3H35.36L40.24 39.42V21.86L24 5.62ZM37.26 38.18L34.22 41.22L28.28 41.3V27.86H19.82V38.18L16.7 41.3H10.76V23.12L24.02 9.85999L37.28 23.12V38.18H37.26Z", fill: "currentColor" })));
};

var HomeLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M23.9996 6.88L8.63965 22.24V43.4H17.5596L21.9196 39.04V29.96H26.1796V43.4H35.0196L39.3796 39.04V22.24L24.0196 6.88H23.9996ZM38.1596 38.54L34.5196 42.18H27.3796V28.74H20.7196V38.52L17.0796 42.16H9.85965V22.7L24.0196 8.54L38.1796 22.7V38.52L38.1596 38.54Z", fill: "currentColor" })));
};

var HomeFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M35.2596 44H25.5796V30.56H22.5196V39.3L17.8196 44H8.05957V22L24.0196 6.04004L39.9796 22V39.3L35.2796 44H35.2596Z", fill: "currentColor" })));
};

var LanguageLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.0219 42.6964C11.7402 26.8668 18.326 11.1573 23.0629 5.24933L24.9354 6.75064C20.6169 12.1368 14.525 26.639 24.9764 41.3035L23.0219 42.6964Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.9781 42.6964C36.2598 26.8668 29.674 11.1573 24.9371 5.24933L23.0646 6.75064C27.3831 12.1368 33.475 26.639 23.0236 41.3035L24.9781 42.6964Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 19H8V16.6H40V19Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 31H8V28.6H40V31Z", fill: "currentColor" })));
};

var LanguageFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.0453 5.0993C15.0263 5.81664 9.13834 10.3547 6.49496 16.6H16.8877C18.0283 11.7875 20.0946 7.78851 22.0453 5.0993ZM5.66477 19C5.23134 20.5931 5 22.2695 5 24C5 25.5862 5.19438 27.127 5.56063 28.6H16.3238C15.8322 25.2135 15.9319 21.9798 16.4107 19H5.66477ZM6.33101 31C8.89197 37.4587 14.8919 42.1796 22.0716 42.9033C19.3082 38.8685 17.639 34.8538 16.7685 31H6.33101ZM25.9284 42.9033C33.1081 42.1796 39.108 37.4587 41.669 31H31.2315C30.361 34.8538 28.6918 38.8685 25.9284 42.9033ZM42.4394 28.6C42.8056 27.127 43 25.5862 43 24C43 22.2695 42.7687 20.5931 42.3352 19H31.5893C32.0681 21.9798 32.1678 25.2135 31.6762 28.6H42.4394ZM41.505 16.6H31.1123C29.9717 11.7875 27.9054 7.78851 25.9547 5.0993C32.9737 5.81664 38.8617 10.3547 41.505 16.6ZM28.9158 19C29.4265 21.9555 29.5378 25.1952 28.9984 28.6H19.0016C18.4622 25.1952 18.5735 21.9555 19.0842 19H28.9158ZM24 41.0826C21.7268 37.6664 20.2922 34.2723 19.4865 31H28.5135C27.7078 34.2723 26.2732 37.6664 24 41.0826ZM19.5983 16.6C20.63 12.5695 22.3503 9.20252 24 6.85927C25.6496 9.20252 27.37 12.5695 28.4017 16.6H19.5983Z", fill: "currentColor" })));
};

var ListLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M41.9996 9.3999H39.5996V11.7999H41.9996V9.3999Z", fill: "currentColor" }),
        React.createElement("path", { d: "M41.9996 36H39.5996V38.4H41.9996V36Z", fill: "currentColor" }),
        React.createElement("path", { d: "M41.9996 23H39.5996V25.4H41.9996V23Z", fill: "currentColor" }),
        React.createElement("path", { d: "M36 9.3999H6V11.7999H36V9.3999Z", fill: "currentColor" }),
        React.createElement("path", { d: "M36 36H6V38.4H36V36Z", fill: "currentColor" }),
        React.createElement("path", { d: "M36 23H6V25.4H36V23Z", fill: "currentColor" })));
};

var LoginLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.4761 41.2H23.0002V38.8H33.5243L37.8002 34.7756V9.19998H23.0002V6.79998H40.2002V35.8126L34.4761 41.2Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.8484 15.1515L20.1514 16.8485L27.3028 24L20.1514 31.1515L21.8484 32.8485L30.697 24L21.8484 15.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.00018 23L29.0002 23L29.0002 25.4L7.00018 25.4L7.00018 23Z", fill: "currentColor" })));
};

var LogoutLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5239 6.79999H24.9998V9.19999H14.4757L10.1998 13.2244V38.8H24.9998V41.2H7.7998V12.1874L13.5239 6.79999Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.8484 15.1515L30.1514 16.8485L37.3028 24L30.1514 31.1515L31.8484 32.8485L40.697 24L31.8484 15.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 23L39 23L39 25.4L17 25.4L17 23Z", fill: "currentColor" })));
};

var MessageLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M42.0005 8.07996H10.6805L5.98047 12.78V40.02L12.0005 34L37.3205 34.06L42.0405 29.36V8.07996H42.0005ZM36.3205 31.66L11.0005 31.6L8.38047 34.22V13.78L11.6805 10.48H39.6205V28.36L36.3405 31.66H36.3205Z", fill: "currentColor" }),
        React.createElement("path", { d: "M34.4 19.86H32V22.26H34.4V19.86Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.2408 19.86H22.8408V22.26H25.2408V19.86Z", fill: "currentColor" }),
        React.createElement("path", { d: "M16.0005 19.86H13.6005V22.26H16.0005V19.86Z", fill: "currentColor" })));
};

var MessageLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M42.3002 7.78003H10.5402L5.66016 12.66V40.74L12.1002 34.3L37.4202 34.36L42.3202 29.48V7.78003H42.3002ZM36.1802 31.36L10.8602 31.3L8.66016 33.5V13.9L11.7802 10.78H39.3002V28.24L36.1802 31.36Z", fill: "currentColor" }),
        React.createElement("path", { d: "M34.7002 19.5601H31.7002V22.5601H34.7002V19.5601Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.54 19.5601H22.54V22.5601H25.54V19.5601Z", fill: "currentColor" }),
        React.createElement("path", { d: "M16.2998 19.5601H13.2998V22.5601H16.2998V19.5601Z", fill: "currentColor" })));
};

var MessageLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M41.4005 8.67999H10.9205L6.56055 13.04V38.58L11.7205 33.42L37.0405 33.48L41.4005 29.12V8.67999ZM36.5605 32.26L11.2405 32.2L7.76055 35.68V13.52L11.4005 9.87999H40.1805V28.62L36.5405 32.28L36.5605 32.26Z", fill: "currentColor" }),
        React.createElement("path", { d: "M34.0004 20.26H32.4004V21.86H34.0004V20.26Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.8402 20.26H23.2402V21.86H24.8402V20.26Z", fill: "currentColor" }),
        React.createElement("path", { d: "M15.6 20.26H14V21.86H15.6V20.26Z", fill: "currentColor" })));
};

var MessageFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M42.0005 8.08002H10.6805L5.98047 12.78V40.02L12.0005 34L37.3205 34.06L42.0405 29.36V8.08002H42.0005ZM16.0005 22.26H13.6005V19.86H16.0005V22.26ZM25.2405 22.26H22.8405V19.86H25.2405V22.26ZM34.4005 22.26H32.0005V19.86H34.4005V22.26Z", fill: "currentColor" })));
};

var MoreHorizontalLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.7021 21.4468L33.7021 26.5532L38.8085 26.5532L38.8085 21.4468L33.7021 21.4468Z", fill: "currentColor" }),
        React.createElement("path", { d: "M21.4464 21.4468L21.4464 26.5532L26.5527 26.5532L26.5527 21.4468L21.4464 21.4468Z", fill: "currentColor" }),
        React.createElement("path", { d: "M9.19148 21.4468L9.19148 26.5532L14.2979 26.5532L14.2979 21.4468L9.19148 21.4468Z", fill: "currentColor" })));
};

var MoreVerticalLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M26.5 33.5H21.5V38.5H26.5V33.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M26.5 21.5H21.5V26.5H26.5V21.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M26.5 9.5H21.5V14.5H26.5V9.5Z", fill: "currentColor" })));
};

var NotificationLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1617 21.5088C10.1617 13.9246 16.4234 7.74353 24.0551 7.74353C31.6868 7.74353 37.9486 13.9246 37.9486 21.5088V26.7641H41.2V33.6878L37.165 37.4379H6.8V30.5084L10.1617 27.4353V21.5088ZM24.0551 10.1435C17.7259 10.1435 12.5617 15.273 12.5617 21.5088V28.493L9.2 31.5661V35.0379H36.2219L38.8 32.6418V29.1641H35.5486V21.5088C35.5486 15.273 30.3844 10.1435 24.0551 10.1435Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2547 5.00006V8.60006H22.8547V5.00006H25.2547Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9092 36.2198V37.2018C19.9092 39.4034 21.7145 41.2206 23.9813 41.2206C26.2352 41.2206 28.0534 39.4162 28.0534 37.2018V36.2198H30.4534V37.2018C30.4534 40.77 27.5322 43.6206 23.9813 43.6206C20.4065 43.6206 17.5092 40.7464 17.5092 37.2018V36.2198H19.9092Z", fill: "currentColor" })));
};

var NotificationFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M36.7486 27.9642V21.5088C36.7486 14.5988 31.0356 8.94354 24.0551 8.94354C17.0746 8.94354 11.3617 14.5988 11.3617 21.5088V27.9642L8 31.0373V36.2379H36.6935L40 33.1648V27.9642H36.7486Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1617 21.5088C10.1617 13.9246 16.4234 7.74353 24.0551 7.74353C31.6868 7.74353 37.9486 13.9246 37.9486 21.5088V26.7641H41.2V33.6878L37.165 37.4379H6.8V30.5084L10.1617 27.4353V21.5088ZM24.0551 10.1435C17.7259 10.1435 12.5617 15.273 12.5617 21.5088V28.493L9.2 31.5661V35.0379H36.2219L38.8 32.6418V29.1641H35.5486V21.5088C35.5486 15.273 30.3844 10.1435 24.0551 10.1435Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2547 5.00006V8.60006H22.8547V5.00006H25.2547Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9092 36.2198V37.2018C19.9092 39.4034 21.7145 41.2206 23.9813 41.2206C26.2352 41.2206 28.0534 39.4162 28.0534 37.2018V36.2198H30.4534V37.2018C30.4534 40.77 27.5322 43.6206 23.9813 43.6206C20.4065 43.6206 17.5092 40.7464 17.5092 37.2018V36.2198H19.9092Z", fill: "currentColor" })));
};

var NotificationOffLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.3004 5V8.6H22.9004V5H25.3004Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9 36.2V37.2C19.9 39.4 21.7 41.2 24 41.2C26.3 41.2 28.1 39.4 28.1 37.2V36.2H30.5V37.2C30.5 40.8 27.6 43.6 24 43.6C20.4 43.6 17.5 40.7 17.5 37.2V36.2H19.9Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1998 21.5C10.1998 18.9893 10.8558 16.5642 12.1852 14.4592L14.2144 15.7408C13.1438 17.4359 12.5998 19.4107 12.5998 21.5V28.5415L9.1998 31.5415V35H34.3998V37.4H6.7998V30.4585L10.1998 27.4585V21.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.2996 39.2L37.5996 40.9L9.09961 12.4L10.7996 10.7", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7725 10.4455C18.0826 8.68541 20.9383 7.70001 23.9997 7.70001C31.6563 7.70001 37.8997 13.9311 37.8997 21.5V26.8H41.1997V33.7389L39.8969 34.8969L38.3025 33.1031L38.7997 32.6611V29.2H35.4997V21.5C35.4997 15.2689 30.3431 10.1 23.9997 10.1C21.4611 10.1 19.1169 10.9146 17.227 12.3545L15.7725 10.4455Z", fill: "currentColor" })));
};

var NotificationOffFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.3004 5V8.6H22.9004V5H25.3004Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9 36.2V37.2C19.9 39.4 21.7 41.2 24 41.2C26.3 41.2 28.1 39.4 28.1 37.2V36.2H30.5V37.2C30.5 40.8 27.6 43.6 24 43.6C20.4 43.6 17.5 40.7 17.5 37.2V36.2H19.9Z", fill: "currentColor" }),
        React.createElement("path", { d: "M11.4 21.5V28L8 31V36.2H36.3L14 13.9C12.3 16 11.4 18.7 11.4 21.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M10.8269 10.7405L9.12988 12.4375L37.626 40.9336L39.3231 39.2366L10.8269 10.7405Z", fill: "currentColor" }),
        React.createElement("path", { d: "M37.9002 26.8V21.5C37.9002 13.9 31.7002 7.70001 24.0002 7.70001C21.0002 7.70001 18.2002 8.60001 15.8002 10.4L14.7002 11.2L39.1002 35.6L41.2002 33.7V26.8H37.9002Z", fill: "currentColor" })));
};

var OpenInNewLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.9145 7.79999H21.3527V10.2H13.9086L10.1998 13.9088V37.8H34.9733L37.7998 34.9735V26.647H40.1998V35.9676L35.9675 40.2H7.7998V12.9147L12.9145 7.79999ZM26.6469 7.79999H40.1998V20.4706H37.7998V11.897L17.7895 31.9073L16.0925 30.2103L36.1027 10.2H26.6469V7.79999Z", fill: "currentColor" })));
};

var PlayCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.4667 24C40.4667 33.0943 33.0943 40.4667 24 40.4667C14.9057 40.4667 7.53333 33.0943 7.53333 24C7.53333 14.9057 14.9057 7.53333 24 7.53333C33.0943 7.53333 40.4667 14.9057 40.4667 24ZM43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM34.7284 24L18.5115 13.1887V34.8112L34.7284 24ZM30.1613 24L21.0449 30.0776V17.9223L30.1613 24Z", fill: "currentColor" })));
};

var PlayCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM34 24L19 14V34L34 24Z", fill: "currentColor" })));
};

var ProfileLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.999 26.7027C28.0519 26.7027 31.3504 23.4043 31.3504 19.3514C31.3504 15.2985 28.0519 12 23.999 12C19.9461 12 16.6477 15.2985 16.6477 19.3514C16.6477 23.4043 19.9461 26.7027 23.999 26.7027ZM23.999 14.1229C26.894 14.1229 29.245 16.474 29.245 19.3689C29.245 22.2638 26.894 24.5973 23.999 24.5973C21.1041 24.5973 18.7531 22.2463 18.7531 19.3689C18.7531 16.4915 21.1041 14.1229 23.999 14.1229Z", fill: "currentColor" }),
        React.createElement("path", { d: "M30.6836 27.7554H30.245L23.999 34.0716L17.753 27.7554H17.3143C13.279 27.7554 9.99805 31.0364 9.99805 35.0717V36.0001H12.1035V35.0717C12.1035 32.3347 14.2089 30.0889 16.8932 29.8784L23.999 37.0718L31.1047 29.8784C33.7891 30.0889 35.8945 32.3347 35.8945 35.0717V36.0001H37.9999V35.0717C37.9999 31.0364 34.719 27.7554 30.6836 27.7554Z", fill: "currentColor" })));
};

var ProfileFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM23.9988 26.7027C28.0517 26.7027 31.3502 23.4043 31.3502 19.3514C31.3502 15.2985 28.0517 12 23.9988 12C19.9459 12 16.6475 15.2985 16.6475 19.3514C16.6475 23.4043 19.9459 26.7027 23.9988 26.7027ZM30.6836 27.7554H30.245L23.999 34.0716L17.753 27.7554H17.3143C13.279 27.7554 9.99805 31.0363 9.99805 35.0717V36H12L14.5 39.5L23.5 42L28.5 41.5L36 37L37 36H37.9999V35.0717C37.9999 31.0363 34.719 27.7554 30.6836 27.7554Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var SearchLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.9986 30.0002L39.9984 42L41.6953 40.3028L29.6955 28.303L27.9986 30.0002Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.599 19.9992C31.599 26.4057 26.4055 31.5992 19.999 31.5992C13.5925 31.5992 8.39902 26.4057 8.39902 19.9992C8.39902 13.5927 13.5925 8.39924 19.999 8.39924C26.4055 8.39924 31.599 13.5927 31.599 19.9992ZM33.999 19.9992C33.999 27.7312 27.731 33.9992 19.999 33.9992C12.267 33.9992 5.99902 27.7312 5.99902 19.9992C5.99902 12.2673 12.267 5.99924 19.999 5.99924C27.731 5.99924 33.999 12.2672 33.999 19.9992Z", fill: "currentColor" })));
};

var SettingLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24.0008 16.7999C20.0408 16.7999 16.8008 20.0399 16.8008 23.9999C16.8008 27.9599 20.0408 31.1999 24.0008 31.1999C27.9608 31.1999 31.2008 27.9799 31.2008 23.9999C31.2008 20.0199 27.9608 16.7999 24.0008 16.7999ZM24.0008 28.7999C21.3608 28.7999 19.2008 26.6399 19.2008 23.9999C19.2008 21.3599 21.3608 19.1999 24.0008 19.1999C26.6408 19.1999 28.8008 21.3599 28.8008 23.9999C28.8008 26.6399 26.6408 28.7999 24.0008 28.7999Z", fill: "currentColor" }),
        React.createElement("path", { d: "M37.9203 18.2399V10.0799H29.7603L24.0003 4.31995L18.2403 10.0799H10.0803V18.2399L4.32031 23.9999L10.0803 29.7599V37.9199H18.2403L24.0003 43.6799L29.7603 37.9199H37.9203V29.7599L43.6803 23.9999L37.9203 18.2399ZM35.5203 28.7799V35.5399H28.7603L23.9803 40.3199L19.2003 35.5399H12.4403V28.7799L7.66031 23.9999L12.4403 19.2199V12.4599H19.2003L23.9803 7.67995L28.7603 12.4599H35.5203V19.2199L40.3003 23.9999L35.5203 28.7799Z", fill: "currentColor" })));
};

var SettingLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24 16.5C19.86 16.5 16.5 19.86 16.5 24C16.5 28.14 19.86 31.5 24 31.5C28.14 31.5 31.5 28.14 31.5 24C31.5 19.86 28.14 16.5 24 16.5ZM24 28.5C21.52 28.5 19.5 26.48 19.5 24C19.5 21.52 21.52 19.5 24 19.5C26.48 19.5 28.5 21.52 28.5 24C28.5 26.48 26.48 28.5 24 28.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M38.22 18.1V9.75999H29.88L23.98 3.85999L18.08 9.75999H9.74V18.1L3.84 24L9.74 29.9V38.24H18.08L23.98 44.14L29.88 38.24H38.22V29.9L44.12 24L38.22 18.1ZM35.22 28.64V35.22H28.64L23.98 39.88L19.32 35.22H12.74V28.64L8.08 23.98L12.74 19.32V12.74H19.32L23.98 8.07999L28.64 12.74H35.22V19.32L39.88 23.98L35.22 28.64Z", fill: "currentColor" })));
};

var SettingLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.48 37.32L24 42.84L29.52 37.32H37.32V29.52L42.84 24L37.32 18.48V10.68H29.52L24 5.15997L18.48 10.68H10.68V18.48L5.16 24L10.68 29.52V37.32H18.48ZM18.98 36.12H11.88V29.02L6.86 24L11.88 18.98V11.88H18.98L24 6.85997L29.02 11.88H36.12V18.98L41.14 24L36.12 29.02V36.12H29.02L24 41.14L18.98 36.12ZM17.4002 24C17.4002 27.64 20.3602 30.6 24.0002 30.6C27.6402 30.6 30.6002 27.64 30.6002 24C30.6002 20.36 27.6402 17.4 24.0002 17.4C20.3602 17.4 17.4002 20.36 17.4002 24ZM18.6002 24C18.6002 21.02 21.0202 18.6 24.0002 18.6C26.9802 18.6 29.4002 21.02 29.4002 24C29.4002 26.98 26.9802 29.4 24.0002 29.4C21.0202 29.4 18.6002 26.98 18.6002 24Z", fill: "currentColor" })));
};

var SettingFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M37.92 18.2399V10.0799H29.76L24 4.31995L18.24 10.0799H10.08V18.2399L4.29999 23.9999L10.08 29.7599V37.9199H18.24L24 43.6799L29.76 37.9199H37.92V29.7599L43.68 23.9999L37.92 18.2399ZM24 29.9999C20.7 29.9999 18 27.2999 18 23.9999C18 20.6999 20.7 17.9999 24 17.9999C27.3 17.9999 30 20.6999 30 23.9999C30 27.2999 27.3 29.9999 24 29.9999Z", fill: "currentColor" })));
};

var StarLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857ZM24.0004 7.7115L19.2133 17.4112L8.50907 18.9666L16.2547 26.5168L14.4262 37.1777L24.0004 32.1443L33.5746 37.1777L31.7461 26.5168L39.4917 18.9666L28.7875 17.4112L24.0004 7.7115Z", fill: "currentColor" })));
};

var StarFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857Z", fill: "currentColor" })));
};

var UserLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24.0001 20.84C28.6201 20.84 32.3801 17.08 32.3801 12.46C32.3801 7.83996 28.6201 4.07996 24.0001 4.07996C19.3801 4.07996 15.6201 7.83996 15.6201 12.46C15.6201 17.08 19.3801 20.84 24.0001 20.84ZM24.0001 6.49996C27.3001 6.49996 29.9801 9.17996 29.9801 12.48C29.9801 15.78 27.3001 18.44 24.0001 18.44C20.7001 18.44 18.0201 15.76 18.0201 12.48C18.0201 9.19996 20.7001 6.49996 24.0001 6.49996Z", fill: "currentColor" }),
        React.createElement("path", { d: "M31.62 22.04H31.12L24 29.24L16.88 22.04H16.38C11.78 22.04 8.04004 25.78 8.04004 30.38V42H10.44V30.38C10.44 27.26 12.84 24.7 15.9 24.46L24 32.66L32.1 24.46C35.16 24.7 37.56 27.26 37.56 30.38V42H39.96V30.38C39.96 25.78 36.22 22.04 31.62 22.04Z", fill: "currentColor" })));
};

var UserLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24.0003 21.14C28.7803 21.14 32.6803 17.24 32.6803 12.46C32.6803 7.67999 28.8003 3.79999 24.0003 3.79999C19.2003 3.79999 15.3203 7.67999 15.3203 12.46C15.3203 17.24 19.2003 21.14 24.0003 21.14ZM24.0003 6.79999C27.1203 6.79999 29.6803 9.33999 29.6803 12.46C29.6803 15.58 27.1403 18.14 24.0003 18.14C20.8603 18.14 18.3203 15.6 18.3203 12.46C18.3203 9.31999 20.8603 6.79999 24.0003 6.79999Z", fill: "currentColor" }),
        React.createElement("path", { d: "M31.6202 21.74H31.0002L24.0002 28.82L17.0002 21.74H16.3802C11.6202 21.74 7.74023 25.62 7.74023 30.38V42H10.7402V30.38C10.7402 27.46 12.9602 25.06 15.7802 24.78L24.0002 33.08L32.2202 24.78C35.0602 25.08 37.2602 27.48 37.2602 30.38V42H40.2602V30.38C40.2602 25.62 36.3802 21.74 31.6202 21.74Z", fill: "currentColor" })));
};

var UserLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24.0007 20.24C28.2807 20.24 31.7807 16.76 31.7807 12.46C31.7807 8.16001 28.3007 4.70001 24.0007 4.70001C19.7007 4.70001 16.2207 8.18001 16.2207 12.46C16.2207 16.74 19.7007 20.24 24.0007 20.24ZM24.0007 5.90001C27.6207 5.90001 30.5807 8.84001 30.5807 12.48C30.5807 16.12 27.6407 19.06 24.0007 19.06C20.3607 19.06 17.4207 16.12 17.4207 12.48C17.4207 8.84001 20.3607 5.90001 24.0007 5.90001Z", fill: "currentColor" }),
        React.createElement("path", { d: "M31.6202 22.64H31.3802L24.0202 30.1L16.6402 22.64H16.4002C12.1402 22.64 8.66016 26.12 8.66016 30.38V42H9.86016V30.38C9.86016 26.86 12.6602 23.98 16.1602 23.84L24.0202 31.8L31.8802 23.84C35.3802 23.96 38.1802 26.86 38.1802 30.38V42H39.3802V30.38C39.3802 26.12 35.9002 22.64 31.6402 22.64H31.6202Z", fill: "currentColor" })));
};

var UserFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M23.9996 20.84C28.6196 20.84 32.3797 17.08 32.3797 12.46C32.3797 7.84002 28.6196 4.08002 23.9996 4.08002C19.3796 4.08002 15.6396 7.84002 15.6396 12.46C15.6396 17.08 19.3996 20.84 23.9996 20.84Z", fill: "currentColor" }),
        React.createElement("path", { d: "M31.62 22.04H31.12L24 29.24L16.88 22.04H16.38C11.78 22.04 8.04004 25.78 8.04004 30.38V42H39.96V30.38C39.96 25.78 36.22 22.04 31.62 22.04Z", fill: "currentColor" })));
};

var ViewFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0578 8.80079C24.0287 8.79972 23.9995 8.79972 23.9703 8.80079C14.8863 9.13224 6.86225 14.6964 3.55856 22.9744C3.55348 22.9871 3.54862 22.9999 3.54398 23.0128C3.34878 23.5552 3.35521 24.1371 3.53791 24.6701C3.54413 24.6882 3.55079 24.7062 3.55787 24.7241C6.84741 33.0039 14.8726 38.568 23.9562 38.8994C23.9854 38.9005 24.0146 38.9005 24.0438 38.8994C33.1274 38.568 41.1526 33.0039 44.4421 24.7241C44.447 24.7119 44.4516 24.6997 44.456 24.6874C44.6222 24.2256 44.6422 23.7352 44.5318 23.2707C44.5193 23.1708 44.4942 23.0719 44.4562 22.9761C41.1667 14.6963 33.1415 9.13223 24.0578 8.80079ZM24.0132 15.0922C19.092 15.0922 15.0486 18.9768 15.0486 23.8431C15.0486 28.7093 19.092 32.5939 24.0132 32.5939C28.9343 32.5939 32.9777 28.7093 32.9777 23.8431C32.9777 18.9768 28.9343 15.0922 24.0132 15.0922ZM17.4486 23.8431C17.4486 20.365 20.3539 17.4922 24.0132 17.4922C27.6724 17.4922 30.5777 20.365 30.5777 23.8431C30.5777 27.3211 27.6724 30.1939 24.0132 30.1939C20.3539 30.1939 17.4486 27.3211 17.4486 23.8431Z", fill: "currentColor" })));
};

var ViewFillBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0578 8.80079C24.0287 8.79972 23.9995 8.79972 23.9703 8.80079C14.8863 9.13224 6.86225 14.6964 3.55856 22.9744C3.55348 22.9871 3.54862 22.9999 3.54398 23.0128C3.34878 23.5552 3.35521 24.1371 3.53791 24.6701C3.54413 24.6882 3.55079 24.7062 3.55787 24.7241C6.84741 33.0039 14.8726 38.568 23.9562 38.8994C23.9854 38.9005 24.0146 38.9005 24.0438 38.8994C33.1274 38.568 41.1526 33.0039 44.4421 24.7241C44.447 24.7119 44.4516 24.6997 44.456 24.6874C44.6222 24.2256 44.6422 23.7352 44.5318 23.2707C44.5193 23.1708 44.4942 23.0719 44.4562 22.9761C41.1667 14.6963 33.1415 9.13223 24.0578 8.80079ZM24.0145 14.7922C18.9356 14.7922 14.75 18.8034 14.75 23.8431C14.75 28.8828 18.9356 32.894 24.0145 32.894C29.0934 32.894 33.2791 28.8828 33.2791 23.8431C33.2791 18.8034 29.0934 14.7922 24.0145 14.7922ZM17.75 23.8431C17.75 20.5386 20.513 17.7922 24.0145 17.7922C27.516 17.7922 30.2791 20.5386 30.2791 23.8431C30.2791 27.1476 27.516 29.894 24.0145 29.894C20.513 29.894 17.75 27.1476 17.75 23.8431Z", fill: "currentColor" })));
};

var ViewLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9703 8.80079C23.9995 8.79972 24.0287 8.79972 24.0578 8.80079C33.1415 9.13223 41.1667 14.6963 44.4562 22.9761C44.4942 23.0719 44.5193 23.1708 44.5318 23.2707C44.6422 23.7352 44.6222 24.2256 44.456 24.6874C44.4516 24.6997 44.447 24.7119 44.4421 24.7241C41.1526 33.0039 33.1274 38.568 24.0438 38.8994C24.0146 38.9005 23.9854 38.9005 23.9562 38.8994C14.8726 38.568 6.84741 33.0039 3.55787 24.7241C3.55079 24.7062 3.54413 24.6882 3.53791 24.6701C3.35521 24.1371 3.34878 23.5552 3.54398 23.0128C3.54862 22.9999 3.55348 22.9871 3.55856 22.9744C6.86225 14.6964 14.8863 9.13224 23.9703 8.80079ZM42.1599 23.6986C39.197 16.4324 32.0968 11.5125 24.0141 11.2008C15.8829 11.5144 8.74475 16.4918 5.80039 23.832C5.79971 23.8355 5.79923 23.8397 5.79923 23.845C5.79923 23.852 5.80009 23.8625 5.80359 23.8763C8.73565 31.2112 15.8709 36.1859 24 36.4994C32.132 36.1858 39.2694 31.2076 42.1995 23.8685C42.2003 23.865 42.2008 23.8607 42.2008 23.8552C42.2008 23.8458 42.1992 23.8301 42.1917 23.8083C42.1793 23.7721 42.1687 23.7354 42.1599 23.6986Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.0486 23.843C15.0486 18.9768 19.092 15.0922 24.0132 15.0922C28.9343 15.0922 32.9777 18.9768 32.9777 23.843C32.9777 28.7093 28.9343 32.5939 24.0132 32.5939C19.092 32.5939 15.0486 28.7093 15.0486 23.843ZM24.0132 17.4922C20.3539 17.4922 17.4486 20.365 17.4486 23.843C17.4486 27.3211 20.3539 30.1939 24.0132 30.1939C27.6724 30.1939 30.5777 27.3211 30.5777 23.843C30.5777 20.365 27.6724 17.4922 24.0132 17.4922Z", fill: "currentColor" })));
};

var ViewLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0691 8.501C24.0327 8.49967 23.9962 8.49967 23.9597 8.501C14.7604 8.83666 6.62925 14.4719 3.28031 22.8632C3.27396 22.8791 3.26788 22.8951 3.26208 22.9113C3.0427 23.5208 3.05074 24.1729 3.2545 24.7674C3.26227 24.7901 3.27059 24.8125 3.27945 24.8348C6.61422 33.2285 14.7467 38.8636 23.9457 39.1992C23.9821 39.2006 24.0186 39.2006 24.0551 39.1992C33.254 38.8636 41.3865 33.2285 44.7213 24.8348C44.7245 24.8268 44.7276 24.8187 44.7307 24.8106C44.7334 24.8034 44.7361 24.7962 44.7387 24.789C44.9236 24.2752 44.9469 23.7312 44.8277 23.2169C44.8115 23.0978 44.7808 22.9797 44.7354 22.8654C41.4006 14.4717 33.2681 8.83665 24.0691 8.501ZM24.0144 11.5011C31.9708 11.8123 38.9537 16.6523 41.8743 23.792C41.8785 23.8083 41.883 23.8245 41.8877 23.8407C38.9836 31.0174 31.9818 35.8869 24.0004 36.1992C16.0225 35.8871 9.02342 31.0217 6.11692 23.8504C9.0375 16.6776 16.0376 11.8131 24.0144 11.5011ZM24.0145 14.7922C18.9356 14.7922 14.75 18.8034 14.75 23.8431C14.75 28.8828 18.9356 32.894 24.0145 32.894C29.0934 32.894 33.2791 28.8828 33.2791 23.8431C33.2791 18.8034 29.0934 14.7922 24.0145 14.7922ZM17.75 23.8431C17.75 20.5386 20.513 17.7922 24.0145 17.7922C27.516 17.7922 30.2791 20.5386 30.2791 23.8431C30.2791 27.1476 27.516 29.894 24.0145 29.894C20.513 29.894 17.75 27.1476 17.75 23.8431Z", fill: "currentColor" })));
};

var ViewOffFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M24 17.5C23 17.5 22.1 17.7 21.3 18.1L29.9 26.7C30.3 25.9 30.6 24.9 30.6 23.9C30.6 20.4 27.7 17.5 24 17.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M44.4996 23.3C44.4674 23.1711 44.4282 23.0799 44.3996 23C41.3996 14.6 33.0996 9.19999 23.9996 8.79999H23.8996C20.4996 8.89999 17.2996 9.79999 14.3996 11.2L19.4996 16.3C20.7996 15.6 22.3996 15.1 23.9996 15.1C28.8996 15.1 32.9996 19 32.9996 23.9C32.9996 25.6 32.4996 27.1 31.6996 28.5L37.3996 34.2C40.446 31.8415 42.913 28.7104 44.4209 24.9965C44.4738 24.8662 44.5125 24.7301 44.531 24.5907C44.5982 24.0828 44.5877 23.6525 44.4996 23.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M35.2998 35.5L30.0998 30.3L28.3998 28.6L19.2998 19.5L17.5998 17.8L12.2998 12.5L9.69981 9.90002L7.99981 11.6L10.2998 13.9C7.29981 16.3 4.99981 19.4 3.49981 23C3.29981 23.5 3.29981 24.1 3.49981 24.7C3.49981 24.7 3.49981 24.7 3.49981 24.8C6.79981 33 14.8998 38.6 23.9998 38.9H24.0998C27.2998 38.8 30.3998 38 33.1998 36.7L36.5998 40.1L38.2998 38.4L35.2998 35.5ZM23.9998 32.6C19.0998 32.6 14.9998 28.7 14.9998 23.8C14.9998 22.3 15.3998 20.9 16.0998 19.6L17.8998 21.4C17.5998 22.1 17.3998 22.9 17.3998 23.8C17.3998 27.3 20.2998 30.2 23.9998 30.2C24.7998 30.2 25.4998 30.1 26.1998 29.8L27.9998 31.6C26.8998 32.2 25.4998 32.6 23.9998 32.6Z", fill: "currentColor" })));
};

var ViewOffFillBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.5 23.3C44.4779 23.2116 44.422 23.057 44.4 23C41.2 14.7 33.1 9.10005 24.1 8.80005H24C20.8 8.90005 17.8 9.70005 15 11L19.8 15.8C21.1 15.2 22.5 14.8 24 14.8C29.1 14.8 33.3 18.8 33.3 23.9C33.3 25.5 32.9 26.9001 32.2 28.2001L37.8 33.8C40.7 31.4 43 28.4 44.4 24.8C44.6 24.2 44.6 23.7 44.5 23.3ZM23.9996 17.8C23.2996 17.8 22.6996 17.9001 22.0996 18.1L29.8996 25.9C30.0996 25.3 30.2996 24.6 30.2996 23.9C30.2996 20.5 27.4996 17.8 23.9996 17.8ZM30.2996 30.5C29.4996 31.2 28.6996 31.7 27.6996 32.1C26.5996 32.6 25.2996 32.9 23.9996 32.9C18.8996 32.9 14.6996 28.9 14.6996 23.8C14.6996 22.4 14.9996 21.1 15.5996 20C15.9996 19.1 16.5996 18.2 17.2996 17.5L9.69961 9.90002L7.59961 12L9.79961 14.2C7.09961 16.5 4.89961 19.5 3.49961 22.9C3.29961 23.4 3.29961 24 3.49961 24.6V24.7C6.79961 33 14.8996 38.6 23.9996 38.9H24.0996C27.0996 38.8 29.9996 38.1 32.5996 37L36.1996 40.6L38.2996 38.5L30.2996 30.5ZM17.9988 22.4C18.1988 21.4 18.7988 20.4 19.4988 19.7L28.1988 28.5C27.4988 29.2 26.4988 29.7 25.3988 29.9C25.21 29.9 25.0211 29.9222 24.8217 29.9458C24.5988 29.9721 24.3628 30 24.0988 30C20.5988 30 17.7988 27.2 17.7988 23.9C17.7988 23.4 17.8988 22.9 17.9988 22.4Z", fill: "currentColor" })));
};

var ViewOffLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M38.244 38.4054L9.74785 9.9093L8.05081 11.6063L36.5469 40.1025L38.244 38.4054Z", fill: "currentColor" }),
        React.createElement("path", { d: "M44.5 23.3C44.4749 23.1996 44.4251 23.0652 44.4 23C41.2 14.7 33.1 9.09999 24.1 8.79999H24C20.6 8.89999 17.4 9.79999 14.5 11.2L16.3 13C18.7 11.9 21.3 11.3 24.1 11.2C32.2 11.5 39.3 16.4 42.2 23.7V23.8C40.8 27.2 38.5 30.2 35.6 32.3L37.3 34C40.4 31.6 42.9 28.4 44.4 24.6C44.6 24.2 44.6 23.7 44.5 23.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24 36.5C15.9 36.2 8.7 31.2 5.8 23.9C7.4 19.8 10.4 16.5 14 14.3L12.3 12.6C8.4 15 5.3 18.6 3.6 23C3.4 23.5 3.4 24.1 3.6 24.7C3.6 24.7 3.6 24.7 3.6 24.8C6.8 33 14.9 38.6 24 38.9H24.1C28.2 38.8 32.1 37.5 35.4 35.5L33.6 33.7C30.7 35.4 27.5 36.4 24 36.5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24 32.6C26.3 32.6 28.5 31.7 30.1 30.3L28.4 28.6C27.2 29.6 25.7 30.2 24 30.2C20.3 30.2 17.4 27.3 17.4 23.8C17.4 22.1 18.1 20.6 19.2 19.4L17.5 17.7C16 19.3 15 21.5 15 23.8C15 28.7 19.1 32.6 24 32.6Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24 17.5C27.7 17.5 30.6 20.4 30.6 23.9C30.6 24.9 30.3 25.9 29.9 26.7L31.7 28.5C32.5 27.2 33 25.6 33 23.9C33 19 29 15.1 24 15.1C22.4 15.1 20.8 15.5 19.5 16.3L21.3 18.1C22.1 17.7 23 17.5 24 17.5Z", fill: "currentColor" })));
};

var ViewOffLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M44.8002 23.2C44.7696 23.0469 44.7298 22.8753 44.7002 22.8C41.4002 14.4 33.2002 8.80002 24.0002 8.40002H23.9002C20.7002 8.50002 17.5002 9.30003 14.7002 10.6L17.0002 12.9C19.2002 12 21.5002 11.5 24.0002 11.4C32.0002 11.7 38.9002 16.6 41.9002 23.7C40.6002 26.9 38.5002 29.6 35.9002 31.7L38.0002 34C40.9002 31.6 43.3002 28.5 44.7002 24.9C44.9002 24.3 44.9002 23.7 44.8002 23.2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.9998 17.8C27.4998 17.8 30.2998 20.5 30.2998 23.9C30.2998 24.6 30.1998 25.3 29.8998 25.9L32.1998 28.2C32.8998 26.9 33.2998 25.5 33.2998 23.9C33.2998 18.9 29.0998 14.8 23.9998 14.8C22.4998 14.8 21.0998 15.2 19.7998 15.8L22.0998 18.1C22.6998 17.9 23.3998 17.8 23.9998 17.8Z", fill: "currentColor" }),
        React.createElement("path", { d: "M38.0998 38.2L30.2998 30.4L28.1998 28.3L19.4998 19.6L17.3998 17.5L14.2998 14.4L12.0998 12.2L9.6998 9.90002L7.5998 12L9.5998 14C6.7998 16.3 4.5998 19.3 3.1998 22.8C2.9998 23.4 2.9998 24.1 3.1998 24.7C3.1998 24.7 3.1998 24.7 3.1998 24.8C6.4998 33.2 14.6998 38.8 23.8998 39.2H23.9998C27.0998 39.1 29.9998 38.4 32.6998 37.2L35.8998 40.4L38.0998 38.2ZM17.8998 22.4L25.2998 29.8C24.8998 29.9 24.3998 29.9 23.9998 29.9C20.4998 29.9 17.6998 27.2 17.6998 23.8C17.6998 23.3 17.7998 22.8 17.8998 22.4ZM23.9998 36.2C15.9998 35.9 8.9998 31 6.0998 23.9C7.2998 20.9 9.2998 18.3 11.6998 16.2L15.5998 20.1C14.9998 21.3 14.6998 22.5 14.6998 23.9C14.6998 28.9 18.8998 33 23.9998 33C25.2998 33 26.5998 32.7 27.6998 32.2L30.4998 34.9C28.3998 35.6 26.2998 36.1 23.9998 36.2Z", fill: "currentColor" })));
};

exports.DeleteFillIcon = DeleteFillIcon;
exports.DeleteLineBoldIcon = DeleteLineBoldIcon;
exports.DeleteLineIcon = DeleteLineIcon;
exports.DeleteLineLightIcon = DeleteLineLightIcon;
exports.DownloadLineIcon = DownloadLineIcon;
exports.EditFillIcon = EditFillIcon;
exports.EditLineBoldIcon = EditLineBoldIcon;
exports.EditLineIcon = EditLineIcon;
exports.EditLineLightIcon = EditLineLightIcon;
exports.FileLineBoldIcon = FileLineBoldIcon;
exports.FileLineIcon = FileLineIcon;
exports.FileLineLightIcon = FileLineLightIcon;
exports.FullScreenExitLineIcon = FullScreenExitLineIcon;
exports.FullScreenLineIcon = FullScreenLineIcon;
exports.HeartFillIcon = HeartFillIcon;
exports.HeartLineIcon = HeartLineIcon;
exports.HomeFillIcon = HomeFillIcon;
exports.HomeLineBoldIcon = HomeLineBoldIcon;
exports.HomeLineIcon = HomeLineIcon;
exports.HomeLineLightIcon = HomeLineLightIcon;
exports.LanguageFillIcon = LanguageFillIcon;
exports.LanguageLineIcon = LanguageLineIcon;
exports.ListLineIcon = ListLineIcon;
exports.LoginLineIcon = LoginLineIcon;
exports.LogoutLineIcon = LogoutLineIcon;
exports.MessageFillIcon = MessageFillIcon;
exports.MessageLineBoldIcon = MessageLineBoldIcon;
exports.MessageLineIcon = MessageLineIcon;
exports.MessageLineLightIcon = MessageLineLightIcon;
exports.MoreHorizontalLineIcon = MoreHorizontalLineIcon;
exports.MoreVerticalLineIcon = MoreVerticalLineIcon;
exports.NotificationFillIcon = NotificationFillIcon;
exports.NotificationLineIcon = NotificationLineIcon;
exports.NotificationOffFillIcon = NotificationOffFillIcon;
exports.NotificationOffLineIcon = NotificationOffLineIcon;
exports.OpenInNewLineIcon = OpenInNewLineIcon;
exports.PlayCircleFillIcon = PlayCircleFillIcon;
exports.PlayCircleLineIcon = PlayCircleLineIcon;
exports.ProfileFillIcon = ProfileFillIcon;
exports.ProfileLineIcon = ProfileLineIcon;
exports.SearchLineIcon = SearchLineIcon;
exports.SettingFillIcon = SettingFillIcon;
exports.SettingLineBoldIcon = SettingLineBoldIcon;
exports.SettingLineIcon = SettingLineIcon;
exports.SettingLineLightIcon = SettingLineLightIcon;
exports.StarFillIcon = StarFillIcon;
exports.StarLineIcon = StarLineIcon;
exports.UserFillIcon = UserFillIcon;
exports.UserLineBoldIcon = UserLineBoldIcon;
exports.UserLineIcon = UserLineIcon;
exports.UserLineLightIcon = UserLineLightIcon;
exports.ViewFillBoldIcon = ViewFillBoldIcon;
exports.ViewFillIcon = ViewFillIcon;
exports.ViewLineBoldIcon = ViewLineBoldIcon;
exports.ViewLineIcon = ViewLineIcon;
exports.ViewOffFillBoldIcon = ViewOffFillBoldIcon;
exports.ViewOffFillIcon = ViewOffFillIcon;
exports.ViewOffLineBoldIcon = ViewOffLineBoldIcon;
exports.ViewOffLineIcon = ViewOffLineIcon;
//# sourceMappingURL=index.js.map
