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

var ArrowBackwardCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.1515 14.1515L24.8485 15.8485L16.697 24L24.8485 32.1515L23.1515 33.8485L13.3029 24L23.1515 14.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33 24.7501H15V22.3501H33V24.7501Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var ArrowBackwardCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM23.1516 14.1515L24.8486 15.8485L18.347 22.3502H33V24.7502H17.4473L24.8486 32.1515L23.1516 33.8485L13.303 24L23.1516 14.1515Z", fill: "currentColor" })));
};

var ArrowBackwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.6116 9.61159L24 8L8 24L24 40L25.6116 38.3884L12.4893 25.2662H40V22.987H12.2362L25.6116 9.61159Z", fill: "currentColor" })));
};

var ArrowBackwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.8266 8.82661L24 8L8 24L24 40L24.8266 39.1734L10.2377 24.5845H40V23.4155H10.2378L24.8266 8.82661Z", fill: "currentColor" })));
};

var ArrowBackwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.9894 9.98944L24 8L8 24L24 40L25.9894 38.0106L13.2293 25.2504H40V22.4369H13.5419L25.9894 9.98944Z", fill: "currentColor" })));
};

var ArrowDownCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.1523 20.8485L14.8494 19.1515L24.0009 28.303L33.1523 19.1515L34.8494 20.8485L24.0009 31.6971L13.1523 20.8485Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var ArrowDownCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.0996 24C43.0996 34.4934 34.593 43 24.0996 43C13.6062 43 5.09961 34.4934 5.09961 24C5.09961 13.5066 13.6062 5 24.0996 5C34.593 5 43.0996 13.5066 43.0996 24ZM14.949 19.1515L13.252 20.8485L24.1005 31.6971L34.949 20.8485L33.252 19.1515L24.1005 28.303L14.949 19.1515Z", fill: "currentColor" })));
};

var ArrowDownLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1514 19.8485L12.8484 18.1515L23.9999 29.3029L35.1514 18.1515L36.8484 19.8485L23.9999 32.697L11.1514 19.8485Z", fill: "currentColor" })));
};

var ArrowDownLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.9395 20.0607L13.0608 17.9393L24.0001 28.8787L34.9395 17.9393L37.0608 20.0607L24.0001 33.1213L10.9395 20.0607Z", fill: "currentColor" })));
};

var ArrowDownwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.61159 22.3884L8 24L24 40L40 24L38.3884 22.3884L25.2662 35.5107L25.2662 8L22.987 8L22.987 35.7638L9.61159 22.3884Z", fill: "currentColor" })));
};

var ArrowDownwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.82664 24.1734L8.00003 25L24 41L40 25L39.1734 24.1734L24.5845 38.7623L24.5845 9.00001L23.4155 9.00001L23.4155 38.7622L8.82664 24.1734Z", fill: "currentColor" })));
};

var ArrowDownwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.98944 23.0106L8 25L24 41L40 25L38.0106 23.0106L25.2504 35.7707L25.2504 9L22.4369 9L22.4369 35.4581L9.98944 23.0106Z", fill: "currentColor" })));
};

var ArrowForwardCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.1514 15.8485L24.8484 14.1515L34.697 24L24.8484 33.8485L23.1514 32.1515L30.5527 24.7502H15V22.3502H29.653L23.1514 15.8485Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var ArrowForwardCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM24.8484 14.1515L23.1514 15.8485L29.653 22.3502H15V24.7502H30.5527L23.1514 32.1515L24.8484 33.8485L34.697 24L24.8484 14.1515Z", fill: "currentColor" })));
};

var ArrowForwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.3884 9.61159L24 8L40 24L24 40L22.3884 38.3884L35.5106 25.2662H8V22.9871H35.7639L22.3884 9.61159Z", fill: "currentColor" })));
};

var ArrowForwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.0106 9.98944L24 8L40 24L24 40L22.0106 38.0106L34.6144 25.4067H7.99999V22.5932H34.6144L22.0106 9.98944Z", fill: "currentColor" })));
};

var ArrowForwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.1735 8.82661L24.0001 8L40 24L24.0001 40L23.1735 39.1734L37.7623 24.5845H8V23.4155H37.7623L23.1735 8.82661Z", fill: "currentColor" })));
};

var ArrowInwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9655 35.3137L12.6863 35.3137L12.6863 12.6863L35.3137 12.6863L35.3137 14.9655L16.7561 14.9654L36.2091 34.4184L34.5975 36.0299L14.9654 16.3979L14.9655 35.3137Z", fill: "currentColor" })));
};

var ArrowInwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8552 35.3136L12.6862 35.3136L12.6863 12.6863L35.3136 12.6862L35.3136 13.8552L14.6819 13.8553L35.727 34.9004L34.9004 35.727L13.8553 14.6819L13.8552 35.3136Z", fill: "currentColor" })));
};

var ArrowInwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4998 34.3137L12.6863 34.3137V11.6863L35.3137 11.6863L35.3137 14.4998L17.4892 14.4998L36.3084 33.319L34.319 35.3084L15.4998 16.4892L15.4998 34.3137Z", fill: "currentColor" })));
};

var ArrowLeftLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.1516 11.1515L29.8486 12.8485L18.6972 24L29.8486 35.1515L28.1516 36.8485L15.303 24L28.1516 11.1515Z", fill: "currentColor" })));
};

var ArrowLeftLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.9393 10.9393L30.0607 13.0607L19.1213 24L30.0607 34.9393L27.9393 37.0607L14.8787 24L27.9393 10.9393Z", fill: "currentColor" })));
};

var ArrowOutwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.032 34.9412L35.3111 34.9412L35.3111 12.3137L12.6837 12.3138L12.6837 14.5929L31.2413 14.5929L11.7884 34.0458L13.4 35.6574L33.032 16.0254L33.032 34.9412Z", fill: "currentColor" })));
};

var ArrowOutwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.1374 34.9411L35.3064 34.9411L35.3063 12.3137L12.6789 12.3137L12.6789 13.4827L33.3107 13.4827L12.2656 34.5278L13.0922 35.3544L34.1373 14.3093L34.1374 34.9411Z", fill: "currentColor" })));
};

var ArrowOutwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.4928 34.9411L35.3063 34.9411V12.3137L12.6789 12.3137L12.6789 15.1272L30.5034 15.1272L11.6842 33.9464L13.6736 35.9359L32.4928 17.1167L32.4928 34.9411Z", fill: "currentColor" })));
};

var ArrowRightLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.1515 36.6971L18.4544 35L29.6059 23.8485L18.4544 12.6971L20.1515 11L33 23.8485L20.1515 36.6971Z", fill: "currentColor" })));
};

var ArrowRightLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9393 37.1213L17.818 35L28.7573 24.0607L17.818 13.1213L19.9393 11L33 24.0607L19.9393 37.1213Z", fill: "currentColor" })));
};

var ArrowUpCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.8477 27.1515L33.1506 28.8485L23.9991 19.697L14.8477 28.8485L13.1506 27.1515L23.9991 16.3029L34.8477 27.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var ArrowUpCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.0996 24C43.0996 34.4934 34.593 43 24.0996 43C13.6062 43 5.09961 34.4934 5.09961 24C5.09961 13.5066 13.6062 5 24.0996 5C34.593 5 43.0996 13.5066 43.0996 24ZM33.2502 28.8485L34.9473 27.1515L24.0987 16.3029L13.2502 27.1515L14.9473 28.8485L24.0987 19.697L33.2502 28.8485Z", fill: "currentColor" })));
};

var ArrowUpLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.8486 30.1515L35.1516 31.8485L24.0001 20.6971L12.8486 31.8485L11.1516 30.1515L24.0001 17.303L36.8486 30.1515Z", fill: "currentColor" })));
};

var ArrowUpLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37.0609 29.9393L34.9396 32.0607L24.0003 21.1213L13.0609 32.0607L10.9396 29.9393L24.0003 16.8787L37.0609 29.9393Z", fill: "currentColor" })));
};

var ArrowUpwardLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.3884 26.6116L41 25.0001L25 9.00006L9 25.0001L10.6116 26.6116L23.7338 13.4894L23.7338 41.0001L26.013 41.0001L26.013 13.2362L39.3884 26.6116Z", fill: "currentColor" })));
};

var ArrowUpwardLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.1734 25.8267L40 25.0001L24 9.00006L8.00003 25.0001L8.82664 25.8267L23.4156 11.2378L23.4156 41.0001L24.5846 41.0001L24.5846 11.2378L39.1734 25.8267Z", fill: "currentColor" })));
};

var ArrowUpwardLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.0106 25.9894L40 24L24 8L8 24L9.98944 25.9894L22.7496 13.2293L22.7496 40L25.5631 40L25.5631 13.5419L38.0106 25.9894Z", fill: "currentColor" })));
};

var ArScanLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.79999 5.80005H42.2V15H39.8V8.20005H8.19999V15H5.79999V5.80005ZM36.2 16.5411L24 9.62036L11.8 16.5411V20H14.2V17.9389L24 12.3796L33.8 17.9389V20H36.2V16.5411ZM11.8 25.2H5V22.8H43V25.2H36.2V31.4589L24 38.3796L11.8 31.4589V25.2ZM14.2 25.2V30.0611L24 35.6204L33.8 30.0611V25.2H14.2ZM5.80001 42.1999L42.2 42.2V33H39.8L39.8 39.7999H8.20001L8.20001 32.9999H5.80001L5.80001 42.1999Z", fill: "currentColor" })));
};

var ArScanLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 5.5H42.5V15H39.5V8.5H8.5V15H5.5V5.5ZM36.5 16.3663L24 9.27539L11.5 16.3663V19.9999H14.5V18.1136L24 12.7245L33.5 18.1136V19.9999H36.5V16.3663ZM11.5 25.5H5V22.5H43V25.5H36.5V31.6336L24 38.7245L11.5 31.6336V25.5ZM14.5 25.5V29.8863L24 35.2754L33.5 29.8863V25.5H14.5ZM5.5 33L5.5 42.5L42.5 42.5V33H39.5V39.5L8.5 39.5L8.5 33H5.5Z", fill: "currentColor" })));
};

var ArScanLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.39999 6.3999H41.6V14.9999H40.4V7.5999H7.59999V14.9999H6.39999V6.3999ZM35.6 16.8907L24 10.3103L12.4 16.8907V21.0001H13.6V17.5896L24 11.6899L34.4 17.5896V21.0001H35.6V16.8907ZM12.4 24.5999H5V23.3999H43V24.5999H35.6V31.1096L24 37.6899L12.4 31.1096V24.5999ZM13.6 24.5999V30.4107L24 36.3103L34.4 30.4107V24.5999H13.6ZM6.40001 41.6001L41.6 41.6001V33.0001H40.4V40.4001L7.60001 40.4001L7.60001 33.0001H6.40001L6.40001 41.6001Z", fill: "currentColor" })));
};

var CheckCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM20.3772 31.6466L34.7941 18.899L33.2044 17.101L20.4784 28.3534L15.2773 23.1515L13.5801 24.8485L20.3772 31.6466Z", fill: "currentColor" })));
};

var CheckCircleFillBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM20.3653 32.0581L34.9936 19.1237L33.0064 16.8762L20.4918 27.9417L15.4901 22.9394L13.3687 25.0605L20.3653 32.0581Z", fill: "currentColor" })));
};

var CheckCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.7941 18.899L20.3772 31.6466L13.5801 24.8485L15.2773 23.1515L20.4784 28.3534L33.2044 17.101L34.7941 18.899Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.6C33.1679 40.6 40.6 33.1679 40.6 24C40.6 14.8321 33.1679 7.4 24 7.4C14.8321 7.4 7.4 14.8321 7.4 24C7.4 33.1679 14.8321 40.6 24 40.6ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var CheckCircleLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.9936 19.1237L20.3653 32.0582L13.3687 25.0606L15.4901 22.9394L20.4918 27.9418L33.0064 16.8763L34.9936 19.1237Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 7.5C14.8873 7.5 7.5 14.8873 7.5 24C7.5 33.1127 14.8873 40.5 24 40.5C33.1127 40.5 40.5 33.1127 40.5 24C40.5 14.8873 33.1127 7.5 24 7.5ZM4.5 24C4.5 13.2304 13.2304 4.5 24 4.5C34.7696 4.5 43.5 13.2304 43.5 24C43.5 34.7696 34.7696 43.5 24 43.5C13.2304 43.5 4.5 34.7696 4.5 24Z", fill: "currentColor" })));
};

var CheckLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.8536 12.843L18.2853 35.7083L7.14551 24.4219L8.85362 22.736L18.2853 32.2917L39.1455 11.157L40.8536 12.843Z", fill: "currentColor" })));
};

var CheckLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.2829 13.2644L18.2875 36.5623L6.7207 24.8433L9.28287 22.3144L18.2875 31.4375L38.7207 10.7355L41.2829 13.2644Z", fill: "currentColor" })));
};

var ClockCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 7.19999C14.7216 7.19999 7.19999 14.7216 7.19999 24C7.19999 33.2784 14.7216 40.8 24 40.8C33.2784 40.8 40.8 33.2784 40.8 24C40.8 14.7216 33.2784 7.19999 24 7.19999ZM4.79999 24C4.79999 13.3961 13.3961 4.79999 24 4.79999C34.6039 4.79999 43.2 13.3961 43.2 24C43.2 34.6039 34.6039 43.2 24 43.2C13.3961 43.2 4.79999 34.6039 4.79999 24Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.2157 12.6151L22.2153 26.7997L34.4006 26.8001L34.4006 24.4002L24.6154 24.3998L24.6158 12.6151L22.2157 12.6151Z", fill: "currentColor" })));
};

var ClockCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 4.79999C13.3961 4.79999 4.79999 13.3961 4.79999 24C4.79999 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.79999 24 4.79999ZM22.2153 26.7996L22.2157 12.615L24.6158 12.6151L24.6154 24.3998L34.4006 24.4001L34.4006 26.8L22.2153 26.7996Z", fill: "currentColor" })));
};

var CloseCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM15.1504 31.1515L22.3027 23.9991L15.1521 16.8485L16.8492 15.1515L23.9998 22.3021L31.1504 15.1515L32.8474 16.8485L25.6968 23.9991L32.8492 31.1515L31.1521 32.8485L23.9998 25.6962L16.8474 32.8485L15.1504 31.1515Z", fill: "currentColor" })));
};

var CloseCircleFillBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM14.9395 30.9393L21.8789 23.9999L14.9397 17.0607L17.061 14.9393L24.0002 21.8786L30.9395 14.9393L33.0608 17.0607L26.1215 23.9999L33.061 30.9393L30.9397 33.0607L24.0002 26.1212L17.0608 33.0607L14.9395 30.9393Z", fill: "currentColor" })));
};

var CloseCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.4667C33.0943 40.4667 40.4667 33.0943 40.4667 24C40.4667 14.9057 33.0943 7.53333 24 7.53333C14.9057 7.53333 7.53333 14.9057 7.53333 24C7.53333 33.0943 14.9057 40.4667 24 40.4667ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.3027 23.9991L15.1504 31.1515L16.8474 32.8485L23.9998 25.6962L31.1521 32.8485L32.8492 31.1515L25.6968 23.9991L32.8474 16.8485L31.1504 15.1515L23.9998 22.3021L16.8492 15.1515L15.1521 16.8485L22.3027 23.9991Z", fill: "currentColor" })));
};

var CloseCircleLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M41.5 24C41.5 33.665 33.665 41.5 24 41.5C14.335 41.5 6.5 33.665 6.5 24C6.5 14.335 14.335 6.5 24 6.5C33.665 6.5 41.5 14.335 41.5 24Z", stroke: "currentColor", strokeWidth: "3" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.8789 23.9999L14.9395 30.9393L17.0608 33.0607L24.0002 26.1212L30.9397 33.0607L33.061 30.9393L26.1215 23.9999L33.0608 17.0607L30.9395 14.9393L24.0002 21.8786L17.061 14.9393L14.9397 17.0607L21.8789 23.9999Z", fill: "currentColor" })));
};

var CloseLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.3884 24L8 38.3884L9.61159 40L24 25.6116L38.3884 40L40 38.3884L25.6116 24L40 9.61159L38.3884 8L24 22.3884L9.61159 8L8 9.61159L22.3884 24Z", fill: "currentColor" })));
};

var CloseLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 24.8266L39.1734 40L40 39.1734L24.8266 24L40 8.82661L39.1734 8L24 23.1734L8.82661 8L8 8.82661L23.1734 24L8 39.1734L8.82661 40L24 24.8266Z", fill: "currentColor" })));
};

var CloseLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 25.9894L38.0106 40L40 38.0106L25.9894 24L40 9.98944L38.0106 8L24 22.0106L9.98944 8L8 9.98944L22.0106 24L8 38.0106L9.98944 40L24 25.9894Z", fill: "currentColor" })));
};

var ContentCopyLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.2001 5.79999H19.1545L14.8 10.2135V36.2H41.2001V5.79999ZM17.2 11.1982L20.1581 8.19999H38.8V33.8H17.2V11.1982ZM11.2 17V39.8H34V42.2H8.80005V17H11.2Z", fill: "currentColor" })));
};

var ContentCopyLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.5 5.5H19.029L14.5 10.0905V36.5H41.5V5.5ZM17.5 11.3213L20.2835 8.5H38.5V33.5H17.5V11.3213ZM11.5 17V39.5H34V42.5H8.5V17H11.5Z", fill: "currentColor" })));
};

var ContentCopyLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.5999 6.39999H19.4053L15.3999 10.4597V35.6H40.5999V6.39999ZM16.5999 10.952L19.9071 7.59999H39.3999V34.4H16.5999V10.952ZM10.5999 17V40.4H33.9999V41.6H9.3999V17H10.5999Z", fill: "currentColor" })));
};

var ContentCopyFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.1544 5.8H42.2V36.2H15.8V10.2136L20.1544 5.8ZM12.2 17V39.8H35V42.2H9.79999V17H12.2Z", fill: "currentColor" })));
};

var CurrencyLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.19999 24C7.19999 14.7217 14.7216 7.20005 24 7.20005C33.2784 7.20005 40.8 14.7217 40.8 24C40.8 33.2784 33.2784 40.8 24 40.8C14.7216 40.8 7.19999 33.2784 7.19999 24ZM24 4.80005C13.3961 4.80005 4.79999 13.3962 4.79999 24C4.79999 34.6039 13.3961 43.2001 24 43.2001C34.6039 43.2001 43.2 34.6039 43.2 24C43.2 13.3962 34.6039 4.80005 24 4.80005ZM23.166 32.2363V33.9551H24.4121V32.2363C27.6992 32.0322 29.5469 30.1738 29.5684 27.7031C29.5469 24.8887 27.0762 23.793 25.0781 23.3203L24.4121 23.127V18.293C25.8945 18.4541 26.9258 19.2598 27.0547 20.5488H29.3535C29.2891 18.1641 27.3018 16.4238 24.4121 16.2305V14.4902H23.166V16.252C20.4053 16.5312 18.375 18.2285 18.375 20.6992C18.375 22.8691 19.9434 24.1367 22.4355 24.8242L23.166 25.0176V30.1523C21.6406 29.9912 20.459 29.1855 20.3301 27.6816H17.9668C18.1064 30.3457 20.0508 32.043 23.166 32.2363ZM23.166 22.8047C22.0166 22.4824 20.7383 21.8916 20.7383 20.5703C20.7383 19.4102 21.6621 18.5186 23.166 18.3145V22.8047ZM27.2266 27.6602C27.2051 29.0244 26.0664 29.9697 24.4121 30.1523V25.3398C26.002 25.7803 27.2051 26.3389 27.2266 27.6602Z", fill: "currentColor" })));
};

var CurrencyLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 33.1127 33.1127 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24ZM24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM23.4023 32.1934V33.9551H24.6484V32.1934C28.0645 32.0107 30.0625 30.2598 30.0625 27.5527C30.0625 24.9531 28.0645 23.5996 25.4004 22.998L24.6484 22.8047V18.959C25.8838 19.1309 26.6465 19.8291 26.7539 20.8926H29.8477C29.8047 18.293 27.7744 16.4453 24.6484 16.252V14.4902H23.4023V16.252C20.3623 16.4883 18.2031 18.293 18.2031 20.9355C18.2031 23.2129 19.8145 24.5234 22.4355 25.168L23.4023 25.4043V29.4648C21.9951 29.3037 21.0283 28.5195 20.9316 27.1445H17.7949C17.8809 30.2812 20.0186 32.0107 23.4023 32.1934ZM23.4023 22.4824C22.3389 22.1816 21.4902 21.666 21.5117 20.7207C21.5332 19.8398 22.1885 19.1631 23.4023 18.9805V22.4824ZM26.7969 27.5527C26.7969 28.5625 25.9697 29.293 24.6484 29.4648V25.7051C26.0234 26.1133 26.7969 26.6074 26.7969 27.5527Z", fill: "currentColor" })));
};

var CurrencyLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.59999 23.9999C6.59999 14.3901 14.3902 6.5999 24 6.5999C33.6097 6.5999 41.4 14.3901 41.4 23.9999C41.4 33.6097 33.6097 41.3999 24 41.3999C14.3902 41.3999 6.59999 33.6097 6.59999 23.9999ZM24 5.3999C13.7275 5.3999 5.39999 13.7274 5.39999 23.9999C5.39999 34.2724 13.7275 42.5999 24 42.5999C34.2725 42.5999 42.6 34.2724 42.6 23.9999C42.6 13.7274 34.2725 5.3999 24 5.3999ZM23.0586 32.2363V33.9551H24.0898V32.2363C27.1836 32.0537 28.9883 30.2061 28.9883 27.832C28.9883 25.2109 26.6895 24.2012 24.7344 23.6426L24.0898 23.4492V17.6055C25.8838 17.7451 27.1514 18.7764 27.291 20.3555H28.7949C28.6875 18.0781 26.8076 16.3916 24.0898 16.2305V14.4902H23.0586V16.252C20.459 16.4883 18.5469 18.1426 18.5469 20.4844C18.5469 22.5039 19.9863 23.75 22.4355 24.4805L23.0586 24.6523V30.8613C21.2324 30.7217 19.8467 29.7441 19.707 28.0684H18.1387C18.2998 30.4316 20.1475 32.0752 23.0586 32.2363ZM23.0586 23.1699C21.5977 22.7617 20.0508 22.0098 20.0508 20.4199C20.0508 18.9482 21.2432 17.8203 23.0586 17.6055V23.1699ZM27.5059 27.8105C27.5059 29.5078 26.1094 30.6787 24.0898 30.8613V24.9531L24.2832 25.0176C26.1738 25.5547 27.5059 26.2637 27.5059 27.8105Z", fill: "currentColor" })));
};

var CurrencyFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 4.79993C13.3961 4.79993 4.79999 13.3961 4.79999 23.9999C4.79999 34.6038 13.3961 43.1999 24 43.1999C34.6039 43.1999 43.2 34.6038 43.2 23.9999C43.2 13.3961 34.6039 4.79993 24 4.79993ZM23.166 32.2362V33.955H24.4121V32.2362C27.6992 32.0321 29.5469 30.1737 29.5684 27.703C29.5469 24.8885 27.0762 23.7928 25.0781 23.3202L24.4121 23.1268V18.2928C25.8945 18.454 26.9258 19.2596 27.0547 20.5487H29.3535C29.2891 18.1639 27.3018 16.4237 24.4121 16.2303V14.4901H23.166V16.2518C20.4053 16.5311 18.375 18.2284 18.375 20.6991C18.375 22.869 19.9434 24.1366 22.4355 24.8241L23.166 25.0175V30.1522C21.6406 29.9911 20.459 29.1854 20.3301 27.6815H17.9668C18.1064 30.3456 20.0508 32.0428 23.166 32.2362ZM23.166 22.8046C22.0166 22.4823 20.7383 21.8915 20.7383 20.5702C20.7383 19.41 21.6621 18.5184 23.166 18.3143V22.8046ZM27.2266 27.66C27.2051 29.0243 26.0664 29.9696 24.4121 30.1522V25.3397C26.002 25.7802 27.2051 26.3387 27.2266 27.66Z", fill: "currentColor" })));
};

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

var DesktopLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M10.74 10.04L6.04004 14.74V34H22.8V37.54H16V39.94H32V37.54H25.2V34H37.26L41.96 29.3V10.04H10.74ZM39.56 28.3L36.26 31.6H8.44004V15.74L11.74 12.44H39.56V28.3Z", fill: "currentColor" })));
};

var DesktopLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M10.62 9.73999L5.73999 14.62V34.3H22.5V37.24H16V40.24H32V37.24H25.5V34.3H37.38L42.26 29.42V9.73999H10.62ZM39.26 28.18L36.14 31.3H8.73999V15.86L11.86 12.74H39.26V28.18Z", fill: "currentColor" })));
};

var DesktopLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M10.9996 10.64L6.63965 15V33.42H23.3996V38.16H15.9996V39.36H31.9996V38.16H24.5996V33.42H36.9996L41.3596 29.06V10.64H10.9996ZM40.1596 28.56L36.5196 32.2H7.83965V15.48L11.4796 11.84H40.1396V28.56H40.1596Z", fill: "currentColor" })));
};

var DesktopFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M10.74 10.04L6.04004 14.74V34H22.8V37.54H16V39.94H32V37.54H25.2V34H37.26L41.96 29.3V10.04H10.74Z", fill: "currentColor" })));
};

var DocumentLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.3998 12.4943V38.6002H37.5998V9.40018H13.4939L10.3998 12.4943ZM12.4998 7.00018L7.99982 11.5002V41.0002H39.9998V7.00018H12.4998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 20.7998H16V18.3998H32V20.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 25.7998H16V23.3998H32V25.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26 30.7996H16V28.3996H26V30.7996Z", fill: "currentColor" })));
};

var DocumentLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.9998 12.7428V38.0002H36.9998V10.0002H13.7425L10.9998 12.7428ZM12.4998 7.00018L7.99982 11.5002V41.0002H39.9998V7.00018H12.4998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 20.7998H16V17.7998H32V20.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 25.7998H16V22.7998H32V25.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26 31.0996H16V28.0996H26V31.0996Z", fill: "currentColor" })));
};

var DocumentLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.19982 11.9972V39.8002H38.7998V8.20018H12.9969L9.19982 11.9972ZM12.4998 7.00018L7.99982 11.5002V41.0002H39.9998V7.00018H12.4998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 20.7998H16V19.5998H32V20.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 25.7998H16V24.5998H32V25.7998Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26 30.1996H16V28.9996H26V30.1996Z", fill: "currentColor" })));
};

var DocumentFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.99976 11.5001L12.4998 7.00012H39.9998V41.0001H7.99976V11.5001ZM16 20.7998H32V18.3998H16V20.7998ZM32 25.7998H16V23.3998H32V25.7998ZM16 30.7997H26V28.3997H16V30.7997Z", fill: "currentColor" })));
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

var ErrorCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM23 27V15H25.4L25.4 27H23ZM23 33V30H25.4V33H23Z", fill: "currentColor" })));
};

var ErrorCircleFillBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24ZM22.5 27V15H25.5V27H22.5ZM22.5 33V30H25.5V33H22.5Z", fill: "currentColor" })));
};

var ErrorCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.4667C33.0943 40.4667 40.4667 33.0943 40.4667 24C40.4667 14.9057 33.0943 7.53333 24 7.53333C14.9057 7.53333 7.53333 14.9057 7.53333 24C7.53333 33.0943 14.9057 40.4667 24 40.4667ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 15V27H25.4L25.4 15H23ZM23 30V33H25.4L25.4 30H23Z", fill: "currentColor" })));
};

var ErrorCircleLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5 15V27H25.5L25.5 15H22.5ZM22.5 30V33H25.5L25.5 30H22.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" })));
};

var FileBinLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM23.4132 23.6799C23.6372 23.9039 23.9145 24.0159 24.2452 24.0159C24.5652 24.0159 24.8372 23.9039 25.0612 23.6799C25.2852 23.4559 25.3972 23.1786 25.3972 22.8479C25.3972 22.5173 25.2852 22.2399 25.0612 22.0159C24.8372 21.7919 24.5652 21.6799 24.2452 21.6799C23.9145 21.6799 23.6372 21.7919 23.4132 22.0159C23.1892 22.2399 23.0772 22.5173 23.0772 22.8479C23.0772 23.1786 23.1892 23.4559 23.4132 23.6799ZM25.1412 33.9999V25.1839H23.3172V33.9999H25.1412ZM33.8399 25.4719C33.2959 25.1839 32.6773 25.0399 31.9839 25.0399C31.4613 25.0399 30.9653 25.1413 30.4959 25.3439C30.0373 25.5466 29.6586 25.8293 29.3599 26.1919V25.1839H27.5359V33.9999H29.3599V29.0719C29.3599 28.2826 29.5573 27.6799 29.952 27.2639C30.3573 26.8373 30.9013 26.6239 31.584 26.6239C32.2666 26.6239 32.8053 26.8373 33.1999 27.2639C33.5946 27.6799 33.792 28.2826 33.792 29.0719V33.9999H35.5999V28.7999C35.5999 27.9999 35.4453 27.3173 35.1359 26.7519C34.8266 26.1866 34.3946 25.7599 33.8399 25.4719ZM14.2975 26.4959C14.6068 26.0693 15.0281 25.7226 15.5615 25.4559C16.1054 25.1786 16.7081 25.0399 17.3694 25.0399C18.1481 25.0399 18.8521 25.2266 19.4815 25.5999C20.1108 25.9733 20.6068 26.5066 20.9694 27.1999C21.3321 27.8826 21.5135 28.6666 21.5135 29.5519C21.5135 30.4373 21.3321 31.2319 20.9694 31.9359C20.6068 32.6293 20.1054 33.1733 19.4655 33.5679C18.8361 33.9519 18.1374 34.1439 17.3694 34.1439C16.6868 34.1439 16.0788 34.0106 15.5455 33.7439C15.0228 33.4773 14.6068 33.1359 14.2975 32.7199V33.9999H12.4734V22.1599H14.2975V26.4959ZM19.6575 29.5519C19.6575 28.9439 19.5295 28.4213 19.2734 27.9839C19.0281 27.5359 18.6975 27.1999 18.2815 26.9759C17.8761 26.7413 17.4388 26.6239 16.9694 26.6239C16.5108 26.6239 16.0735 26.7413 15.6574 26.9759C15.2521 27.2106 14.9214 27.5519 14.6655 27.9999C14.4201 28.4479 14.2975 28.9759 14.2975 29.5839C14.2975 30.1919 14.4201 30.7253 14.6655 31.1839C14.9214 31.6319 15.2521 31.9733 15.6574 32.2079C16.0735 32.4426 16.5108 32.5599 16.9694 32.5599C17.4388 32.5599 17.8761 32.4426 18.2815 32.2079C18.6975 31.9626 19.0281 31.6106 19.2734 31.1519C19.5295 30.6933 19.6575 30.1599 19.6575 29.5519Z", fill: "currentColor" })));
};

var FileBinLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM23.1543 23.7121C23.4209 23.9574 23.7516 24.0801 24.1463 24.0801C24.5409 24.0801 24.8663 23.9574 25.1223 23.7121C25.3889 23.4561 25.5223 23.1414 25.5223 22.7681C25.5223 22.3947 25.3889 22.0854 25.1223 21.8401C24.8663 21.5841 24.5409 21.4561 24.1463 21.4561C23.7516 21.4561 23.4209 21.5841 23.1543 21.8401C22.8983 22.0854 22.7703 22.3947 22.7703 22.7681C22.7703 23.1414 22.8983 23.4561 23.1543 23.7121ZM25.2503 25.1361H23.0103V34.0001H25.2503V25.1361ZM34.9354 26.0161C34.2847 25.3441 33.4314 25.0081 32.3754 25.0081C31.8207 25.0081 31.3087 25.1201 30.8394 25.3441C30.3807 25.5574 30.002 25.8561 29.7034 26.2401V25.1361H27.4634V34.0001H29.7034V29.1041C29.7034 28.4001 29.8794 27.8614 30.2314 27.4881C30.594 27.1041 31.0847 26.9121 31.7034 26.9121C32.3114 26.9121 32.7914 27.1041 33.1434 27.4881C33.4954 27.8614 33.6714 28.4001 33.6714 29.1041V34.0001H35.9114V28.8001C35.9114 27.6054 35.586 26.6774 34.9354 26.0161ZM14.4065 26.4321C14.6945 26.0054 15.0892 25.6587 15.5905 25.3921C16.1025 25.1254 16.6838 24.9921 17.3345 24.9921C18.0918 24.9921 18.7745 25.1787 19.3825 25.5521C20.0012 25.9254 20.4865 26.4587 20.8385 27.1521C21.2012 27.8347 21.3825 28.6294 21.3825 29.5361C21.3825 30.4427 21.2012 31.2481 20.8385 31.9521C20.4865 32.6454 20.0012 33.1841 19.3825 33.5681C18.7745 33.9521 18.0918 34.1441 17.3345 34.1441C16.6732 34.1441 16.0918 34.0161 15.5905 33.7601C15.0998 33.4934 14.7052 33.1521 14.4065 32.7361V34.0001H12.1665V22.1601H14.4065V26.4321ZM19.0945 29.5361C19.0945 29.0027 18.9825 28.5441 18.7585 28.1601C18.5452 27.7654 18.2572 27.4667 17.8945 27.2641C17.5425 27.0614 17.1585 26.9601 16.7425 26.9601C16.3372 26.9601 15.9532 27.0667 15.5905 27.2801C15.2385 27.4827 14.9505 27.7814 14.7265 28.1761C14.5132 28.5707 14.4065 29.0347 14.4065 29.5681C14.4065 30.1014 14.5132 30.5654 14.7265 30.9601C14.9505 31.3547 15.2385 31.6587 15.5905 31.8721C15.9532 32.0747 16.3372 32.1761 16.7425 32.1761C17.1585 32.1761 17.5425 32.0694 17.8945 31.8561C18.2572 31.6427 18.5452 31.3387 18.7585 30.9441C18.9825 30.5494 19.0945 30.0801 19.0945 29.5361Z", fill: "currentColor" })));
};

var FileBinLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM23.6003 23.52C23.7923 23.712 24.027 23.808 24.3043 23.808C24.571 23.808 24.795 23.712 24.9763 23.52C25.1683 23.328 25.2643 23.0933 25.2643 22.816C25.2643 22.5386 25.1683 22.304 24.9763 22.112C24.795 21.92 24.571 21.824 24.3043 21.824C24.027 21.824 23.7923 21.92 23.6003 22.112C23.4083 22.304 23.3123 22.5386 23.3123 22.816C23.3123 23.0933 23.4083 23.328 23.6003 23.52ZM25.0083 34V25.232H23.5523V34H25.0083ZM34.3538 26.048C33.6925 25.3973 32.8285 25.072 31.7618 25.072C31.1645 25.072 30.6151 25.1946 30.1138 25.44C29.6231 25.6853 29.2338 26.032 28.9458 26.48V25.232H27.4898V34H28.9458V29.152C28.9458 28.2346 29.1698 27.536 29.6178 27.056C30.0765 26.576 30.6898 26.336 31.4578 26.336C32.2151 26.336 32.8125 26.5706 33.2498 27.04C33.6871 27.4986 33.9058 28.1653 33.9058 29.04V34H35.3458V28.832C35.3458 27.616 35.0151 26.688 34.3538 26.048ZM14.1958 26.864C14.4945 26.3413 14.9318 25.9146 15.5078 25.584C16.0838 25.2533 16.7398 25.088 17.4758 25.088C18.2651 25.088 18.9745 25.2746 19.6038 25.648C20.2331 26.0213 20.7291 26.5493 21.0918 27.232C21.4545 27.904 21.6358 28.688 21.6358 29.584C21.6358 30.4693 21.4545 31.2586 21.0918 31.952C20.7291 32.6453 20.2278 33.184 19.5878 33.568C18.9585 33.952 18.2545 34.144 17.4758 34.144C16.7185 34.144 16.0518 33.9786 15.4758 33.648C14.9105 33.3173 14.4838 32.896 14.1958 32.384V34H12.7398V22.16H14.1958V26.864ZM20.1478 29.584C20.1478 28.9226 20.0145 28.3466 19.7478 27.856C19.4811 27.3653 19.1185 26.992 18.6598 26.736C18.2118 26.48 17.7158 26.352 17.1718 26.352C16.6385 26.352 16.1425 26.4853 15.6838 26.752C15.2358 27.008 14.8731 27.3866 14.5958 27.888C14.3291 28.3786 14.1958 28.9493 14.1958 29.6C14.1958 30.2613 14.3291 30.8426 14.5958 31.344C14.8731 31.8346 15.2358 32.2133 15.6838 32.48C16.1425 32.736 16.6385 32.864 17.1718 32.864C17.7158 32.864 18.2118 32.736 18.6598 32.48C19.1185 32.2133 19.4811 31.8346 19.7478 31.344C20.0145 30.8426 20.1478 30.256 20.1478 29.584Z", fill: "currentColor" })));
};

var FileBinFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM23.4132 23.6799C23.6372 23.9039 23.9145 24.0159 24.2452 24.0159C24.5652 24.0159 24.8372 23.9039 25.0612 23.6799C25.2852 23.4559 25.3972 23.1786 25.3972 22.8479C25.3972 22.5173 25.2852 22.2399 25.0612 22.0159C24.8372 21.7919 24.5652 21.6799 24.2452 21.6799C23.9145 21.6799 23.6372 21.7919 23.4132 22.0159C23.1892 22.2399 23.0772 22.5173 23.0772 22.8479C23.0772 23.1786 23.1892 23.4559 23.4132 23.6799ZM25.1412 33.9999V25.1839H23.3172V33.9999H25.1412ZM33.8399 25.4719C33.2959 25.1839 32.6773 25.0399 31.9839 25.0399C31.4613 25.0399 30.9653 25.1413 30.4959 25.3439C30.0373 25.5466 29.6586 25.8293 29.3599 26.1919V25.1839H27.5359V33.9999H29.3599V29.0719C29.3599 28.2826 29.5573 27.6799 29.952 27.2639C30.3573 26.8373 30.9013 26.6239 31.584 26.6239C32.2666 26.6239 32.8053 26.8373 33.1999 27.2639C33.5946 27.6799 33.792 28.2826 33.792 29.0719V33.9999H35.5999V28.7999C35.5999 27.9999 35.4453 27.3173 35.1359 26.7519C34.8266 26.1866 34.3946 25.7599 33.8399 25.4719ZM14.2975 26.4959C14.6068 26.0693 15.0281 25.7226 15.5615 25.4559C16.1054 25.1786 16.7081 25.0399 17.3694 25.0399C18.1481 25.0399 18.8521 25.2266 19.4815 25.5999C20.1108 25.9733 20.6068 26.5066 20.9694 27.1999C21.3321 27.8826 21.5135 28.6666 21.5135 29.5519C21.5135 30.4373 21.3321 31.2319 20.9694 31.9359C20.6068 32.6293 20.1054 33.1733 19.4655 33.5679C18.8361 33.9519 18.1374 34.1439 17.3694 34.1439C16.6868 34.1439 16.0788 34.0106 15.5455 33.7439C15.0228 33.4773 14.6068 33.1359 14.2975 32.7199V33.9999H12.4734V22.1599H14.2975V26.4959ZM19.6575 29.5519C19.6575 28.9439 19.5295 28.4213 19.2734 27.9839C19.0281 27.5359 18.6975 27.1999 18.2815 26.9759C17.8761 26.7413 17.4388 26.6239 16.9694 26.6239C16.5108 26.6239 16.0735 26.7413 15.6574 26.9759C15.2521 27.2106 14.9214 27.5519 14.6655 27.9999C14.4201 28.4479 14.2975 28.9759 14.2975 29.5839C14.2975 30.1919 14.4201 30.7253 14.6655 31.1839C14.9214 31.6319 15.2521 31.9733 15.6574 32.2079C16.0735 32.4426 16.5108 32.5599 16.9694 32.5599C17.4388 32.5599 17.8761 32.4426 18.2815 32.2079C18.6975 31.9626 19.0281 31.6106 19.2734 31.1519C19.5295 30.6933 19.6575 30.1599 19.6575 29.5519Z", fill: "currentColor" })));
};

var FileEfsLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM25.2719 26.6719H26.9039V25.1839H25.2719V24.5599C25.2719 24.0479 25.3839 23.6906 25.6079 23.4879C25.8319 23.2746 26.2212 23.1679 26.7759 23.1679V21.6479C25.6239 21.6479 24.7759 21.8826 24.2319 22.3519C23.6985 22.8106 23.4319 23.5466 23.4319 24.5599V25.1839H22.3919V26.6719H23.4319V34H25.2719V26.6719ZM29.8484 33.776C30.403 34.0213 31.027 34.144 31.7204 34.144C32.403 34.144 32.995 34.0319 33.4964 33.8079C34.0084 33.584 34.403 33.2746 34.6804 32.88C34.9577 32.4853 35.0964 32.0373 35.0964 31.5359C35.0857 30.9706 34.931 30.5173 34.6324 30.1759C34.3337 29.8346 33.9764 29.5786 33.5604 29.408C33.155 29.2266 32.6324 29.0506 31.9924 28.8799C31.5124 28.7413 31.1497 28.6293 30.9044 28.5439C30.659 28.448 30.451 28.32 30.2804 28.16C30.1097 28 30.0244 27.8026 30.0244 27.568C30.0244 27.2693 30.1524 27.0293 30.4084 26.8479C30.6644 26.6666 31.0324 26.576 31.5124 26.576C32.003 26.576 32.3924 26.6933 32.6804 26.9279C32.9684 27.1626 33.1284 27.4773 33.1604 27.872H34.9844C34.9417 26.9973 34.611 26.3093 33.9924 25.8079C33.3844 25.2959 32.579 25.04 31.5764 25.04C30.9044 25.04 30.307 25.152 29.7844 25.3759C29.2724 25.5999 28.8777 25.9093 28.6004 26.3039C28.323 26.688 28.1844 27.1146 28.1844 27.584C28.1844 28.16 28.3337 28.624 28.6324 28.976C28.9417 29.3279 29.3044 29.5893 29.7204 29.76C30.1364 29.9306 30.675 30.1066 31.3364 30.288C32.019 30.4799 32.515 30.656 32.8244 30.816C33.1444 30.976 33.3044 31.2213 33.3044 31.552C33.3044 31.8613 33.1604 32.1173 32.8724 32.32C32.595 32.5119 32.2004 32.608 31.6884 32.608C31.1977 32.608 30.787 32.4853 30.4564 32.24C30.1364 31.9839 29.9604 31.6693 29.9284 31.2959H28.0404C28.0617 31.8293 28.2324 32.3146 28.5524 32.7519C28.8724 33.1786 29.3044 33.52 29.8484 33.776ZM21.4129 29.3759C21.4129 29.7066 21.3915 30.0053 21.3489 30.2719H14.6129C14.6662 30.976 14.9275 31.5413 15.3969 31.968C15.8662 32.3946 16.4422 32.608 17.1249 32.608C18.1062 32.608 18.7995 32.1973 19.2049 31.3759H21.1729C20.9062 32.1866 20.4209 32.8533 19.7169 33.3759C19.0235 33.888 18.1595 34.144 17.1249 34.144C16.2822 34.144 15.5249 33.9573 14.8529 33.584C14.1915 33.1999 13.6689 32.6666 13.2849 31.984C12.9115 31.2906 12.7249 30.4906 12.7249 29.584C12.7249 28.6773 12.9062 27.8826 13.2689 27.2C13.6422 26.5066 14.1595 25.9733 14.8209 25.5999C15.4929 25.2266 16.2609 25.04 17.1249 25.04C17.9569 25.04 18.6982 25.2213 19.3489 25.584C19.9995 25.9466 20.5062 26.4586 20.8689 27.1199C21.2315 27.7706 21.4129 28.5226 21.4129 29.3759ZM19.5089 28.7999C19.4982 28.1279 19.2582 27.5893 18.7889 27.184C18.3195 26.7786 17.7382 26.576 17.0449 26.576C16.4155 26.576 15.8769 26.7786 15.4289 27.184C14.9809 27.5786 14.7142 28.1173 14.6289 28.7999H19.5089Z", fill: "currentColor" })));
};

var FileEfsLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM25.4363 26.976H26.9883V25.136H25.4363V24.768C25.4363 24.2667 25.5429 23.92 25.7563 23.728C25.9696 23.536 26.3483 23.4453 26.8923 23.456V21.568C25.6443 21.536 24.7109 21.776 24.0923 22.288C23.4736 22.8 23.1643 23.6 23.1643 24.688V25.136H22.1563V26.976H23.1643V34H25.4363V26.976ZM29.8799 33.76C30.4559 34.016 31.1066 34.144 31.8319 34.144C32.5359 34.144 33.1492 34.032 33.6719 33.808C34.2052 33.5733 34.6106 33.2533 34.8879 32.848C35.1759 32.4427 35.3199 31.984 35.3199 31.472C35.3092 30.8853 35.1492 30.416 34.8399 30.064C34.5412 29.7013 34.1839 29.4347 33.7679 29.264C33.3519 29.0933 32.8239 28.928 32.1839 28.768C31.5546 28.608 31.0906 28.4533 30.7919 28.304C30.4932 28.144 30.3439 27.9147 30.3439 27.616C30.3439 27.3493 30.4506 27.1413 30.6639 26.992C30.8879 26.8427 31.2026 26.768 31.6079 26.768C32.0452 26.768 32.3919 26.8747 32.6479 27.088C32.9146 27.2907 33.0639 27.568 33.0959 27.92H35.2399C35.1759 27.024 34.8292 26.3147 34.1999 25.792C33.5706 25.2587 32.7279 24.992 31.6719 24.992C30.9572 24.992 30.3332 25.1093 29.7999 25.344C29.2772 25.5787 28.8719 25.8987 28.5839 26.304C28.3066 26.7093 28.1679 27.1573 28.1679 27.648C28.1679 28.2453 28.3172 28.72 28.6159 29.072C28.9252 29.424 29.2879 29.6853 29.7039 29.856C30.1306 30.0267 30.6746 30.192 31.3359 30.352C31.9759 30.5227 32.4399 30.6827 32.7279 30.832C33.0266 30.9707 33.1759 31.184 33.1759 31.472C33.1759 31.7387 33.0532 31.9573 32.8079 32.128C32.5732 32.2987 32.2426 32.384 31.8159 32.384C31.3786 32.384 31.0106 32.272 30.7119 32.048C30.4239 31.824 30.2586 31.5413 30.2159 31.2H27.9599C27.9919 31.744 28.1732 32.24 28.5039 32.688C28.8452 33.136 29.3039 33.4933 29.8799 33.76ZM21.2893 29.376C21.2893 29.696 21.2679 29.984 21.2253 30.24H14.7453C14.7986 30.88 15.0226 31.3813 15.4173 31.744C15.8119 32.1067 16.2973 32.288 16.8733 32.288C17.7053 32.288 18.2973 31.9307 18.6493 31.216H21.0653C20.8093 32.0693 20.3186 32.7733 19.5933 33.328C18.8679 33.872 17.9773 34.144 16.9213 34.144C16.0679 34.144 15.2999 33.9573 14.6173 33.584C13.9453 33.2 13.4173 32.6613 13.0333 31.968C12.6599 31.2747 12.4733 30.4747 12.4733 29.568C12.4733 28.6507 12.6599 27.8453 13.0333 27.152C13.4066 26.4587 13.9293 25.9253 14.6013 25.552C15.2733 25.1787 16.0466 24.992 16.9213 24.992C17.7639 24.992 18.5159 25.1733 19.1773 25.536C19.8493 25.8987 20.3666 26.416 20.7293 27.088C21.1026 27.7493 21.2893 28.512 21.2893 29.376ZM18.9693 28.736C18.9586 28.16 18.7506 27.7013 18.3453 27.36C17.9399 27.008 17.4439 26.832 16.8573 26.832C16.3026 26.832 15.8333 27.0027 15.4493 27.344C15.0759 27.6747 14.8466 28.1387 14.7613 28.736H18.9693Z", fill: "currentColor" })));
};

var FileEfsLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM25.1084 26.4319H26.9484V25.2319H25.1084V24.6079C25.1084 24.0319 25.2364 23.6212 25.4924 23.3759C25.7591 23.1199 26.2124 22.9919 26.8524 22.9919V21.7759C25.7324 21.7759 24.9164 22.0052 24.4044 22.4639C23.9031 22.9119 23.6524 23.6265 23.6524 24.6079V25.2319H22.5164V26.4319H23.6524V33.9999H25.1084V26.4319ZM29.9421 33.8079C30.4754 34.0319 31.0781 34.1439 31.7501 34.1439C32.3794 34.1439 32.9341 34.0372 33.4141 33.8239C33.9047 33.5999 34.2834 33.2959 34.5501 32.9119C34.8167 32.5279 34.9501 32.0959 34.9501 31.6159C34.9394 31.0825 34.7901 30.6505 34.5021 30.3199C34.2247 29.9892 33.8887 29.7439 33.4941 29.5839C33.0994 29.4132 32.5874 29.2425 31.9581 29.0719C31.4567 28.9332 31.0621 28.8105 30.7741 28.7039C30.4967 28.5865 30.2621 28.4372 30.0701 28.2559C29.8887 28.0639 29.7981 27.8239 29.7981 27.5359C29.7981 27.1732 29.9527 26.8799 30.2621 26.6559C30.5714 26.4319 30.9874 26.3199 31.5101 26.3199C32.0754 26.3199 32.5234 26.4585 32.8541 26.7359C33.1954 27.0132 33.3821 27.3812 33.4141 27.8399H34.8701C34.8274 26.9865 34.5074 26.3145 33.9101 25.8239C33.3127 25.3332 32.5287 25.0879 31.5581 25.0879C30.9287 25.0879 30.3687 25.1999 29.8781 25.4239C29.3874 25.6372 29.0087 25.9305 28.7421 26.3039C28.4754 26.6772 28.3421 27.0879 28.3421 27.5359C28.3421 28.1012 28.4861 28.5599 28.7741 28.9119C29.0727 29.2532 29.4247 29.5145 29.8301 29.6959C30.2461 29.8665 30.7794 30.0372 31.4301 30.2079C32.1447 30.3892 32.6727 30.5759 33.0141 30.7679C33.3554 30.9492 33.5261 31.2319 33.5261 31.6159C33.5261 31.9892 33.3661 32.2985 33.0461 32.5439C32.7261 32.7892 32.2887 32.9119 31.7341 32.9119C31.1367 32.9119 30.6514 32.7732 30.2781 32.4959C29.9154 32.2185 29.7127 31.8612 29.6701 31.4239H28.1661C28.1981 31.9572 28.3687 32.4319 28.6781 32.8479C28.9874 33.2532 29.4087 33.5732 29.9421 33.8079ZM21.4586 29.2799C21.4586 29.5572 21.4426 29.8505 21.4106 30.1599H14.4026C14.4559 31.0239 14.7492 31.7012 15.2826 32.1919C15.8266 32.6719 16.4826 32.9119 17.2506 32.9119C17.8799 32.9119 18.4026 32.7679 18.8186 32.4799C19.2452 32.1812 19.5439 31.7865 19.7146 31.2959H21.2826C21.0479 32.1385 20.5786 32.8265 19.8746 33.3599C19.1706 33.8825 18.2959 34.1439 17.2506 34.1439C16.4186 34.1439 15.6719 33.9572 15.0106 33.5839C14.3599 33.2105 13.8479 32.6825 13.4746 31.9999C13.1012 31.3065 12.9146 30.5065 12.9146 29.5999C12.9146 28.6932 13.0959 27.8985 13.4586 27.2159C13.8212 26.5332 14.3279 26.0105 14.9786 25.6479C15.6399 25.2745 16.3972 25.0879 17.2506 25.0879C18.0826 25.0879 18.8186 25.2692 19.4586 25.6319C20.0986 25.9945 20.5892 26.4959 20.9306 27.1359C21.2826 27.7652 21.4586 28.4799 21.4586 29.2799ZM19.9546 28.9759C19.9546 28.4212 19.8319 27.9465 19.5866 27.5519C19.3412 27.1465 19.0052 26.8425 18.5786 26.6399C18.1626 26.4265 17.6986 26.3199 17.1866 26.3199C16.4506 26.3199 15.8212 26.5545 15.2986 27.0239C14.7866 27.4932 14.4932 28.1439 14.4186 28.9759H19.9546Z", fill: "currentColor" })));
};

var FileEfsFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM25.2719 26.6719H26.9039V25.1839H25.2719V24.5599C25.2719 24.0479 25.3839 23.6906 25.6079 23.4879C25.8319 23.2746 26.2212 23.1679 26.7759 23.1679V21.6479C25.6239 21.6479 24.7759 21.8826 24.2319 22.3519C23.6985 22.8106 23.4319 23.5466 23.4319 24.5599V25.1839H22.3919V26.6719H23.4319V34H25.2719V26.6719ZM29.8484 33.776C30.403 34.0213 31.027 34.144 31.7204 34.144C32.403 34.144 32.995 34.0319 33.4964 33.8079C34.0084 33.584 34.403 33.2746 34.6804 32.88C34.9577 32.4853 35.0964 32.0373 35.0964 31.5359C35.0857 30.9706 34.931 30.5173 34.6324 30.1759C34.3337 29.8346 33.9764 29.5786 33.5604 29.408C33.155 29.2266 32.6324 29.0506 31.9924 28.8799C31.5124 28.7413 31.1497 28.6293 30.9044 28.5439C30.659 28.448 30.451 28.32 30.2804 28.16C30.1097 28 30.0244 27.8026 30.0244 27.568C30.0244 27.2693 30.1524 27.0293 30.4084 26.8479C30.6644 26.6666 31.0324 26.576 31.5124 26.576C32.003 26.576 32.3924 26.6933 32.6804 26.9279C32.9684 27.1626 33.1284 27.4773 33.1604 27.872H34.9844C34.9417 26.9973 34.611 26.3093 33.9924 25.8079C33.3844 25.2959 32.579 25.04 31.5764 25.04C30.9044 25.04 30.307 25.152 29.7844 25.3759C29.2724 25.5999 28.8777 25.9093 28.6004 26.3039C28.323 26.688 28.1844 27.1146 28.1844 27.584C28.1844 28.16 28.3337 28.624 28.6324 28.976C28.9417 29.3279 29.3044 29.5893 29.7204 29.76C30.1364 29.9306 30.675 30.1066 31.3364 30.288C32.019 30.4799 32.515 30.656 32.8244 30.816C33.1444 30.976 33.3044 31.2213 33.3044 31.552C33.3044 31.8613 33.1604 32.1173 32.8724 32.32C32.595 32.5119 32.2004 32.608 31.6884 32.608C31.1977 32.608 30.787 32.4853 30.4564 32.24C30.1364 31.9839 29.9604 31.6693 29.9284 31.2959H28.0404C28.0617 31.8293 28.2324 32.3146 28.5524 32.7519C28.8724 33.1786 29.3044 33.52 29.8484 33.776ZM21.4129 29.3759C21.4129 29.7066 21.3915 30.0053 21.3489 30.2719H14.6129C14.6662 30.976 14.9275 31.5413 15.3969 31.968C15.8662 32.3946 16.4422 32.608 17.1249 32.608C18.1062 32.608 18.7995 32.1973 19.2049 31.3759H21.1729C20.9062 32.1866 20.4209 32.8533 19.7169 33.3759C19.0235 33.888 18.1595 34.144 17.1249 34.144C16.2822 34.144 15.5249 33.9573 14.8529 33.584C14.1915 33.1999 13.6689 32.6666 13.2849 31.984C12.9115 31.2906 12.7249 30.4906 12.7249 29.584C12.7249 28.6773 12.9062 27.8826 13.2689 27.2C13.6422 26.5066 14.1595 25.9733 14.8209 25.5999C15.4929 25.2266 16.2609 25.04 17.1249 25.04C17.9569 25.04 18.6982 25.2213 19.3489 25.584C19.9995 25.9466 20.5062 26.4586 20.8689 27.1199C21.2315 27.7706 21.4129 28.5226 21.4129 29.3759ZM19.5089 28.7999C19.4982 28.1279 19.2582 27.5893 18.7889 27.184C18.3195 26.7786 17.7382 26.576 17.0449 26.576C16.4155 26.576 15.8769 26.7786 15.4289 27.184C14.9809 27.5786 14.7142 28.1173 14.6289 28.7999H19.5089Z", fill: "currentColor" })));
};

var FileJpgLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM14.8514 22.64C14.5414 22.64 14.2814 22.535 14.0714 22.325C13.8614 22.115 13.7564 21.855 13.7564 21.545C13.7564 21.235 13.8614 20.975 14.0714 20.765C14.2814 20.555 14.5414 20.45 14.8514 20.45C15.1514 20.45 15.4064 20.555 15.6164 20.765C15.8264 20.975 15.9314 21.235 15.9314 21.545C15.9314 21.855 15.8264 22.115 15.6164 22.325C15.4064 22.535 15.1514 22.64 14.8514 22.64ZM15.6914 33.62C15.6914 34.43 15.4864 35.015 15.0764 35.375C14.6764 35.745 14.0914 35.93 13.3214 35.93H12.4364V34.49H13.0214C13.3714 34.49 13.6164 34.42 13.7564 34.28C13.9064 34.15 13.9814 33.93 13.9814 33.62V23.735H15.6914V33.62ZM20.8315 23.99C20.3315 24.25 19.9365 24.57 19.6465 24.95V23.735H17.9365V35.93H19.6465V30.8C19.9565 31.18 20.3565 31.5 20.8465 31.76C21.3365 32.01 21.8965 32.135 22.5265 32.135C23.2465 32.135 23.9015 31.955 24.4915 31.595C25.0915 31.225 25.5615 30.715 25.9015 30.065C26.2415 29.405 26.4115 28.66 26.4115 27.83C26.4115 27 26.2415 26.265 25.9015 25.625C25.5615 24.985 25.0915 24.49 24.4915 24.14C23.9015 23.78 23.2465 23.6 22.5265 23.6C21.8965 23.6 21.3315 23.73 20.8315 23.99ZM24.3115 26.36C24.5515 26.77 24.6715 27.26 24.6715 27.83C24.6715 28.4 24.5515 28.9 24.3115 29.33C24.0815 29.76 23.7715 30.09 23.3815 30.32C23.0015 30.54 22.5915 30.65 22.1515 30.65C21.7215 30.65 21.3115 30.54 20.9215 30.32C20.5415 30.1 20.2315 29.78 19.9915 29.36C19.7615 28.93 19.6465 28.43 19.6465 27.86C19.6465 27.29 19.7615 26.795 19.9915 26.375C20.2315 25.955 20.5415 25.635 20.9215 25.415C21.3115 25.195 21.7215 25.085 22.1515 25.085C22.5915 25.085 23.0015 25.195 23.3815 25.415C23.7715 25.625 24.0815 25.94 24.3115 26.36ZM33.1275 23.99C32.6375 23.73 32.0725 23.6 31.4325 23.6C30.7125 23.6 30.0525 23.78 29.4525 24.14C28.8625 24.49 28.3925 24.985 28.0425 25.625C27.7025 26.265 27.5325 27 27.5325 27.83C27.5325 28.66 27.7025 29.405 28.0425 30.065C28.3925 30.715 28.8625 31.225 29.4525 31.595C30.0525 31.955 30.7125 32.135 31.4325 32.135C32.0625 32.135 32.6225 32.005 33.1125 31.745C33.6125 31.475 34.0075 31.145 34.2975 30.755V32.135C34.2975 32.935 34.0825 33.545 33.6525 33.965C33.2325 34.385 32.6775 34.595 31.9875 34.595C31.3975 34.595 30.8875 34.46 30.4575 34.19C30.0375 33.93 29.7625 33.585 29.6325 33.155H27.9375C28.0375 34.055 28.4575 34.765 29.1975 35.285C29.9375 35.815 30.8675 36.08 31.9875 36.08C32.8275 36.08 33.5475 35.91 34.1475 35.57C34.7575 35.23 35.2225 34.76 35.5425 34.16C35.8625 33.57 36.0225 32.895 36.0225 32.135V23.735H34.2975V24.935C34.0175 24.555 33.6275 24.24 33.1275 23.99ZM33.9375 26.375C34.1775 26.795 34.2975 27.29 34.2975 27.86C34.2975 28.43 34.1775 28.93 33.9375 29.36C33.7075 29.78 33.4025 30.1 33.0225 30.32C32.6425 30.54 32.2325 30.65 31.7925 30.65C31.3625 30.65 30.9525 30.54 30.5625 30.32C30.1825 30.09 29.8725 29.76 29.6325 29.33C29.4025 28.9 29.2875 28.4 29.2875 27.83C29.2875 27.26 29.4025 26.77 29.6325 26.36C29.8725 25.94 30.1825 25.625 30.5625 25.415C30.9425 25.195 31.3525 25.085 31.7925 25.085C32.2325 25.085 32.6425 25.195 33.0225 25.415C33.4025 25.635 33.7075 25.955 33.9375 26.375Z", fill: "currentColor" })));
};

var FileJpgLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM14.8465 22.7C14.4665 22.7 14.1515 22.585 13.9015 22.355C13.6615 22.115 13.5415 21.82 13.5415 21.47C13.5415 21.12 13.6615 20.83 13.9015 20.6C14.1515 20.36 14.4665 20.24 14.8465 20.24C15.2165 20.24 15.5215 20.36 15.7615 20.6C16.0015 20.83 16.1215 21.12 16.1215 21.47C16.1215 21.82 16.0015 22.115 15.7615 22.355C15.5215 22.585 15.2165 22.7 14.8465 22.7ZM15.8815 33.365C15.8815 34.285 15.6515 34.945 15.1915 35.345C14.7415 35.755 14.0915 35.96 13.2415 35.96H12.3115V34.175H12.9115C13.2315 34.175 13.4565 34.11 13.5865 33.98C13.7165 33.86 13.7815 33.66 13.7815 33.38V23.69H15.8815V33.365ZM32.73 23.9299C32.26 23.6799 31.715 23.5549 31.095 23.5549C30.385 23.5549 29.74 23.7299 29.16 24.0799C28.59 24.4299 28.135 24.9299 27.795 25.5799C27.465 26.2299 27.3 26.9749 27.3 27.8149C27.3 28.6649 27.465 29.4199 27.795 30.0799C28.135 30.7299 28.595 31.2349 29.175 31.5949C29.755 31.9549 30.395 32.1349 31.095 32.1349C31.705 32.1349 32.245 32.0049 32.715 31.7449C33.195 31.4849 33.57 31.1599 33.84 30.7699V32.0599C33.84 32.7999 33.65 33.3499 33.27 33.7099C32.89 34.0799 32.395 34.2649 31.785 34.2649C31.265 34.2649 30.82 34.1499 30.45 33.9199C30.09 33.6999 29.855 33.3999 29.745 33.0199H27.66C27.76 33.9699 28.185 34.7199 28.935 35.2699C29.695 35.8199 30.665 36.0949 31.845 36.0949C32.725 36.0949 33.475 35.9149 34.095 35.5549C34.715 35.2049 35.18 34.7249 35.49 34.1149C35.8 33.5149 35.955 32.8299 35.955 32.0599V23.6899H33.84V24.8749C33.57 24.4849 33.2 24.1699 32.73 23.9299ZM33.54 26.5399C33.74 26.8999 33.84 27.3349 33.84 27.8449C33.84 28.3549 33.74 28.7949 33.54 29.1649C33.34 29.5249 33.07 29.8049 32.73 30.0049C32.39 30.1949 32.025 30.2899 31.635 30.2899C31.255 30.2899 30.895 30.1899 30.555 29.9899C30.225 29.7899 29.955 29.5049 29.745 29.1349C29.545 28.7549 29.445 28.3149 29.445 27.8149C29.445 27.3149 29.545 26.8849 29.745 26.5249C29.955 26.1549 30.225 25.8749 30.555 25.6849C30.885 25.4949 31.245 25.3999 31.635 25.3999C32.025 25.3999 32.39 25.4999 32.73 25.6999C33.07 25.8899 33.34 26.1699 33.54 26.5399ZM21.1663 23.945C20.6963 24.195 20.3263 24.51 20.0563 24.89V23.69H17.9563V35.96H20.0563V30.815C20.3463 31.195 20.7213 31.51 21.1813 31.76C21.6513 32.01 22.1913 32.135 22.8013 32.135C23.5113 32.135 24.1513 31.955 24.7213 31.595C25.3013 31.235 25.7563 30.73 26.0863 30.08C26.4263 29.42 26.5963 28.665 26.5963 27.815C26.5963 26.965 26.4263 26.22 26.0863 25.58C25.7563 24.93 25.3013 24.43 24.7213 24.08C24.1513 23.73 23.5113 23.555 22.8013 23.555C22.1913 23.555 21.6463 23.685 21.1663 23.945ZM24.1363 26.525C24.3463 26.885 24.4513 27.315 24.4513 27.815C24.4513 28.325 24.3463 28.765 24.1363 29.135C23.9363 29.505 23.6663 29.79 23.3263 29.99C22.9963 30.19 22.6363 30.29 22.2463 30.29C21.8663 30.29 21.5063 30.195 21.1663 30.005C20.8363 29.805 20.5663 29.52 20.3563 29.15C20.1563 28.78 20.0563 28.345 20.0563 27.845C20.0563 27.345 20.1563 26.91 20.3563 26.54C20.5663 26.17 20.8363 25.89 21.1663 25.7C21.5063 25.5 21.8663 25.4 22.2463 25.4C22.6363 25.4 22.9963 25.495 23.3263 25.685C23.6663 25.875 23.9363 26.155 24.1363 26.525Z", fill: "currentColor" })));
};

var FileJpgLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM14.8929 22.445C14.6329 22.445 14.4129 22.355 14.2329 22.175C14.0629 21.995 13.9779 21.775 13.9779 21.515C13.9779 21.255 14.0629 21.035 14.2329 20.855C14.4129 20.675 14.6329 20.585 14.8929 20.585C15.1529 20.585 15.3679 20.675 15.5379 20.855C15.7179 21.035 15.8079 21.255 15.8079 21.515C15.8079 21.775 15.7179 21.995 15.5379 22.175C15.3679 22.355 15.1529 22.445 14.8929 22.445ZM15.5679 33.785C15.5679 34.515 15.3829 35.05 15.0129 35.39C14.6429 35.73 14.1029 35.9 13.3929 35.9H12.5979V34.745H13.1679C13.5479 34.745 13.8129 34.67 13.9629 34.52C14.1229 34.37 14.2029 34.115 14.2029 33.755V23.78H15.5679V33.785ZM20.4436 24.125C19.9136 24.435 19.5136 24.825 19.2436 25.295V23.78H17.8786V35.9H19.2436V30.485C19.5236 30.955 19.9286 31.35 20.4586 31.67C20.9986 31.98 21.6186 32.135 22.3186 32.135C23.0486 32.135 23.7086 31.955 24.2986 31.595C24.8986 31.235 25.3686 30.73 25.7086 30.08C26.0486 29.43 26.2186 28.69 26.2186 27.86C26.2186 27.02 26.0486 26.285 25.7086 25.655C25.3686 25.015 24.8986 24.52 24.2986 24.17C23.7086 23.82 23.0486 23.645 22.3186 23.645C21.6086 23.645 20.9836 23.805 20.4436 24.125ZM24.4486 26.24C24.6986 26.7 24.8236 27.24 24.8236 27.86C24.8236 28.49 24.6986 29.04 24.4486 29.51C24.1986 29.97 23.8586 30.325 23.4286 30.575C23.0086 30.815 22.5436 30.935 22.0336 30.935C21.5336 30.935 21.0686 30.815 20.6386 30.575C20.2186 30.325 19.8786 29.97 19.6186 29.51C19.3686 29.04 19.2436 28.495 19.2436 27.875C19.2436 27.265 19.3686 26.73 19.6186 26.27C19.8786 25.8 20.2186 25.445 20.6386 25.205C21.0686 24.955 21.5336 24.83 22.0336 24.83C22.5436 24.83 23.0086 24.95 23.4286 25.19C23.8586 25.43 24.1986 25.78 24.4486 26.24ZM33.2653 24.11C32.7353 23.8 32.1153 23.645 31.4053 23.645C30.6753 23.645 30.0103 23.82 29.4103 24.17C28.8203 24.52 28.3553 25.015 28.0153 25.655C27.6753 26.285 27.5053 27.02 27.5053 27.86C27.5053 28.69 27.6753 29.43 28.0153 30.08C28.3553 30.73 28.8203 31.235 29.4103 31.595C30.0103 31.955 30.6753 32.135 31.4053 32.135C32.1153 32.135 32.7353 31.975 33.2653 31.655C33.7953 31.335 34.1953 30.935 34.4653 30.455V32.18C34.4653 33.03 34.2253 33.69 33.7453 34.16C33.2753 34.63 32.6653 34.865 31.9153 34.865C31.2553 34.865 30.6903 34.71 30.2203 34.4C29.7503 34.1 29.4403 33.7 29.2903 33.2H27.9403C28.0703 34.08 28.4953 34.775 29.2153 35.285C29.9353 35.795 30.8353 36.05 31.9153 36.05C32.7053 36.05 33.3953 35.885 33.9853 35.555C34.5853 35.225 35.0453 34.765 35.3653 34.175C35.6853 33.595 35.8453 32.93 35.8453 32.18V23.78H34.4653V25.28C34.2053 24.81 33.8053 24.42 33.2653 24.11ZM34.0903 26.255C34.3403 26.715 34.4653 27.255 34.4653 27.875C34.4653 28.495 34.3403 29.04 34.0903 29.51C33.8403 29.97 33.5003 30.325 33.0703 30.575C32.6503 30.815 32.1853 30.935 31.6753 30.935C31.1653 30.935 30.7003 30.815 30.2803 30.575C29.8603 30.325 29.5253 29.97 29.2753 29.51C29.0253 29.04 28.9003 28.49 28.9003 27.86C28.9003 27.24 29.0253 26.7 29.2753 26.24C29.5253 25.78 29.8603 25.43 30.2803 25.19C30.7003 24.95 31.1653 24.83 31.6753 24.83C32.1853 24.83 32.6503 24.955 33.0703 25.205C33.5003 25.445 33.8403 25.795 34.0903 26.255Z", fill: "currentColor" })));
};

var FileJpgFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM14.8514 22.64C14.5414 22.64 14.2814 22.535 14.0714 22.325C13.8614 22.115 13.7564 21.855 13.7564 21.545C13.7564 21.235 13.8614 20.975 14.0714 20.765C14.2814 20.555 14.5414 20.45 14.8514 20.45C15.1514 20.45 15.4064 20.555 15.6164 20.765C15.8264 20.975 15.9314 21.235 15.9314 21.545C15.9314 21.855 15.8264 22.115 15.6164 22.325C15.4064 22.535 15.1514 22.64 14.8514 22.64ZM15.6914 33.62C15.6914 34.43 15.4864 35.015 15.0764 35.375C14.6764 35.745 14.0914 35.93 13.3214 35.93H12.4364V34.49H13.0214C13.3714 34.49 13.6164 34.42 13.7564 34.28C13.9064 34.15 13.9814 33.93 13.9814 33.62V23.735H15.6914V33.62ZM20.8315 23.99C20.3315 24.25 19.9365 24.57 19.6465 24.95V23.735H17.9365V35.93H19.6465V30.8C19.9565 31.18 20.3565 31.5 20.8465 31.76C21.3365 32.01 21.8965 32.135 22.5265 32.135C23.2465 32.135 23.9015 31.955 24.4915 31.595C25.0915 31.225 25.5615 30.715 25.9015 30.065C26.2415 29.405 26.4115 28.66 26.4115 27.83C26.4115 27 26.2415 26.265 25.9015 25.625C25.5615 24.985 25.0915 24.49 24.4915 24.14C23.9015 23.78 23.2465 23.6 22.5265 23.6C21.8965 23.6 21.3315 23.73 20.8315 23.99ZM24.3115 26.36C24.5515 26.77 24.6715 27.26 24.6715 27.83C24.6715 28.4 24.5515 28.9 24.3115 29.33C24.0815 29.76 23.7715 30.09 23.3815 30.32C23.0015 30.54 22.5915 30.65 22.1515 30.65C21.7215 30.65 21.3115 30.54 20.9215 30.32C20.5415 30.1 20.2315 29.78 19.9915 29.36C19.7615 28.93 19.6465 28.43 19.6465 27.86C19.6465 27.29 19.7615 26.795 19.9915 26.375C20.2315 25.955 20.5415 25.635 20.9215 25.415C21.3115 25.195 21.7215 25.085 22.1515 25.085C22.5915 25.085 23.0015 25.195 23.3815 25.415C23.7715 25.625 24.0815 25.94 24.3115 26.36ZM33.1275 23.99C32.6375 23.73 32.0725 23.6 31.4325 23.6C30.7125 23.6 30.0525 23.78 29.4525 24.14C28.8625 24.49 28.3925 24.985 28.0425 25.625C27.7025 26.265 27.5325 27 27.5325 27.83C27.5325 28.66 27.7025 29.405 28.0425 30.065C28.3925 30.715 28.8625 31.225 29.4525 31.595C30.0525 31.955 30.7125 32.135 31.4325 32.135C32.0625 32.135 32.6225 32.005 33.1125 31.745C33.6125 31.475 34.0075 31.145 34.2975 30.755V32.135C34.2975 32.935 34.0825 33.545 33.6525 33.965C33.2325 34.385 32.6775 34.595 31.9875 34.595C31.3975 34.595 30.8875 34.46 30.4575 34.19C30.0375 33.93 29.7625 33.585 29.6325 33.155H27.9375C28.0375 34.055 28.4575 34.765 29.1975 35.285C29.9375 35.815 30.8675 36.08 31.9875 36.08C32.8275 36.08 33.5475 35.91 34.1475 35.57C34.7575 35.23 35.2225 34.76 35.5425 34.16C35.8625 33.57 36.0225 32.895 36.0225 32.135V23.735H34.2975V24.935C34.0175 24.555 33.6275 24.24 33.1275 23.99ZM33.9375 26.375C34.1775 26.795 34.2975 27.29 34.2975 27.86C34.2975 28.43 34.1775 28.93 33.9375 29.36C33.7075 29.78 33.4025 30.1 33.0225 30.32C32.6425 30.54 32.2325 30.65 31.7925 30.65C31.3625 30.65 30.9525 30.54 30.5625 30.32C30.1825 30.09 29.8725 29.76 29.6325 29.33C29.4025 28.9 29.2875 28.4 29.2875 27.83C29.2875 27.26 29.4025 26.77 29.6325 26.36C29.8725 25.94 30.1825 25.625 30.5625 25.415C30.9425 25.195 31.3525 25.085 31.7925 25.085C32.2325 25.085 32.6425 25.195 33.0225 25.415C33.4025 25.635 33.7075 25.955 33.9375 26.375Z", fill: "currentColor" })));
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

var FileMoveLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7029 4.8H36.3999V26H33.9999V7.2H12.697L8.39994 11.4971V40.8H29.1999V43.2H5.99994V10.5029L11.7029 4.8ZM36.0484 28.9998L42.0484 34.9998L42.8969 35.8484L42.0484 36.6969L36.0484 42.6969L34.3514 40.9998L38.3511 37.0001H29.1999V34.6001H38.2546L34.3514 30.6969L36.0484 28.9998ZM13.1999 21.6H29.1999V19.2H13.1999V21.6ZM29.1999 26.6H13.1999V24.2H29.1999V26.6ZM13.1999 31.6H23.1999V29.2H13.1999V31.6Z", fill: "currentColor" })));
};

var FileMoveLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0_1698_6897)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.8787 4.5H36V26H33V7.5H12.1213L8 11.6213V40.5H28.5V43.5H5V10.3787L10.8787 4.5ZM33.4395 30.909L35.5608 28.7877L42.6214 35.8483L35.5608 42.909L33.4395 40.7877L36.6271 37.6H28.5V34.6H37.1305L33.4395 30.909ZM12.5 21.9H28.5V18.9H12.5V21.9ZM28.5 26.9H12.5V23.9H28.5V26.9ZM12.5 31.9H22.5V28.9H12.5V31.9Z", fill: "currentColor" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1698_6897" },
                React.createElement("rect", { width: "48", height: "48", fill: "white" })))));
};

var FileMoveLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0_1698_6929)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.3514 5.39999H35.2V26H34V6.59999H11.8485L7.19997 11.2485V41.4H28.6V42.6H5.99997V10.7515L11.3514 5.39999ZM34.1758 30.2726L35.0243 29.4241L41.4485 35.8484L35.0243 42.2726L34.1758 41.4241L38.9998 36.6H28.6001V35.4H39.3031L34.1758 30.2726ZM12.6001 21H28.6001V19.8H12.6001V21ZM28.6001 26H12.6001V24.8H28.6001V26ZM12.6001 31H22.6001V29.8H12.6001V31Z", fill: "currentColor" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1698_6929" },
                React.createElement("rect", { width: "48", height: "48", fill: "white" })))));
};

var FileMoveFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0_1698_6956)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.5 5.99997L5.99997 10.5V42H28L27.9492 41.594C26.7289 40.058 26 38.1141 26 36C26 31.3887 29.4679 27.5874 33.938 27.062L34 27V5.99997H10.5ZM12.1999 20.4H28.1999V18H12.1999V20.4ZM28.1999 25.4H12.1999V23H28.1999V25.4ZM12.1999 30.4H22.1999V28H12.1999V30.4Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.0485 28.9998L42.0485 34.9998L42.897 35.8483L42.0485 36.6969L36.0485 42.6969L34.3514 40.9998L38.3512 37.0001H29.2V34.6001H38.2546L34.3514 30.6969L36.0485 28.9998Z", fill: "currentColor" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1698_6956" },
                React.createElement("rect", { width: "48", height: "48", fill: "white" })))));
};

var FileMp4LineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM31.4873 28.9565V29.8409H35.2098V31.4039H36.3615V29.8409H37.3179V28.8228H36.3615V24H34.9425L31.4873 28.9565ZM32.8344 28.8228L35.2612 25.1929V28.8228H32.8344ZM25.151 25.7653C25.383 25.4614 25.6989 25.2055 26.0988 24.9975C26.4987 24.7896 26.9506 24.6856 27.4545 24.6856C28.0303 24.6856 28.5542 24.8296 29.0261 25.1175C29.5059 25.3974 29.8818 25.7933 30.1538 26.3052C30.4257 26.8171 30.5617 27.4049 30.5617 28.0687C30.5617 28.7326 30.4257 29.3284 30.1538 29.8563C29.8818 30.3762 29.5059 30.7841 29.0261 31.08C28.5542 31.3679 28.0303 31.5119 27.4545 31.5119C26.9506 31.5119 26.5027 31.4119 26.1108 31.212C25.7189 31.004 25.399 30.7481 25.151 30.4442V34.5471H23.7834V24.7936H25.151V25.7653ZM29.17 28.0687C29.17 27.6129 29.074 27.221 28.8821 26.893C28.6981 26.5571 28.4502 26.3052 28.1383 26.1372C27.8344 25.9613 27.5064 25.8733 27.1545 25.8733C26.8106 25.8733 26.4827 25.9613 26.1708 26.1372C25.8669 26.3132 25.6189 26.5691 25.427 26.905C25.243 27.2409 25.151 27.6369 25.151 28.0927C25.151 28.5486 25.243 28.9485 25.427 29.2924C25.6189 29.6284 25.8669 29.8843 26.1708 30.0602C26.4827 30.2362 26.8106 30.3242 27.1545 30.3242C27.5064 30.3242 27.8344 30.2362 28.1383 30.0602C28.4502 29.8763 28.6981 29.6124 28.8821 29.2684C29.074 28.9245 29.17 28.5246 29.17 28.0687ZM20.7115 25.0095C20.3036 24.7936 19.8397 24.6856 19.3198 24.6856C18.832 24.6856 18.3761 24.8056 17.9522 25.0455C17.5283 25.2774 17.2164 25.5934 17.0164 25.9933C16.7925 25.5694 16.4726 25.2454 16.0567 25.0215C15.6408 24.7976 15.1689 24.6856 14.641 24.6856C14.2491 24.6856 13.8812 24.7616 13.5373 24.9135C13.1934 25.0655 12.9095 25.2774 12.6855 25.5494V24.7936H11.3179V31.4039H12.6855V27.7088C12.6855 27.117 12.8335 26.6651 13.1294 26.3532C13.4333 26.0333 13.8412 25.8733 14.3531 25.8733C14.865 25.8733 15.2689 26.0333 15.5648 26.3532C15.8607 26.6651 16.0087 27.117 16.0087 27.7088V31.4039H17.3643V27.7088C17.3643 27.117 17.5123 26.6651 17.8082 26.3532C18.1122 26.0333 18.52 25.8733 19.0319 25.8733C19.5438 25.8733 19.9477 26.0333 20.2436 26.3532C20.5395 26.6651 20.6875 27.117 20.6875 27.7088V31.4039H22.0432V27.5049C22.0432 26.905 21.9232 26.3932 21.6832 25.9693C21.4513 25.5454 21.1274 25.2255 20.7115 25.0095Z", fill: "currentColor" })));
};

var FileMp4LineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM30.9521 28.2772V29.3266H34.291V30.6813H35.6266V29.3266H36.4661V28.1627H35.6266V23.8125H34.0716L30.9521 28.2772ZM32.4212 28.1627L34.3769 25.2435V28.1627H32.4212ZM26.1104 24.7044C25.7617 24.8899 25.4871 25.1236 25.2868 25.4056V24.5152H23.7286V33.6195H25.2868V29.8019C25.502 30.0839 25.7802 30.3176 26.1215 30.5031C26.4703 30.6886 26.8709 30.7814 27.3236 30.7814C27.8504 30.7814 28.3253 30.6478 28.7482 30.3807C29.1785 30.1136 29.5162 29.7389 29.761 29.2566C30.0133 28.7668 30.1394 28.2066 30.1394 27.5759C30.1394 26.9452 30.0133 26.3925 29.761 25.9176C29.5162 25.4353 29.1785 25.0643 28.7482 24.8046C28.3253 24.5449 27.8504 24.415 27.3236 24.415C26.8709 24.415 26.4666 24.5115 26.1104 24.7044ZM28.3141 26.6188C28.4699 26.8859 28.5479 27.2049 28.5479 27.5759C28.5479 27.9544 28.4699 28.2808 28.3141 28.5554C28.1657 28.8299 27.9654 29.0414 27.7131 29.1898C27.4683 29.3382 27.2011 29.4124 26.9118 29.4124C26.6298 29.4124 26.3627 29.3419 26.1104 29.2009C25.8655 29.0525 25.6652 28.841 25.5094 28.5665C25.361 28.292 25.2868 27.9692 25.2868 27.5982C25.2868 27.2272 25.361 26.9044 25.5094 26.6299C25.6652 26.3554 25.8655 26.1476 26.1104 26.0066C26.3627 25.8582 26.6298 25.784 26.9118 25.784C27.2011 25.784 27.4683 25.8545 27.7131 25.9955C27.9654 26.1365 28.1657 26.3442 28.3141 26.6188ZM19.7235 24.4263C20.4803 24.4263 21.0888 24.66 21.5488 25.1275C22.0163 25.5875 22.25 26.233 22.25 27.0641V30.6813H20.6918V27.2755C20.6918 26.7932 20.5694 26.426 20.3245 26.1737C20.0797 25.914 19.7458 25.7841 19.3228 25.7841C18.8999 25.7841 18.5623 25.914 18.31 26.1737C18.0651 26.426 17.9427 26.7932 17.9427 27.2755V30.6813H16.3845V27.2755C16.3845 26.7932 16.2621 26.426 16.0172 26.1737C15.7724 25.914 15.4385 25.7841 15.0156 25.7841C14.5852 25.7841 14.2439 25.914 13.9916 26.1737C13.7467 26.426 13.6243 26.7932 13.6243 27.2755V30.6813H12.0661V24.5153H13.6243V25.261C13.8247 25.0013 14.0806 24.7973 14.3923 24.6489C14.7113 24.5005 15.0601 24.4263 15.4385 24.4263C15.9208 24.4263 16.3511 24.5301 16.7296 24.7379C17.108 24.9382 17.4011 25.2276 17.6088 25.606C17.8092 25.2499 18.0985 24.9642 18.477 24.749C18.8628 24.5339 19.2783 24.4263 19.7235 24.4263Z", fill: "currentColor" })));
};

var FileMp4LineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM31.8933 29.2999V30.0524H35.9282V31.8081H36.9096V30.0524H38.0002V29.1909H36.9096V24H35.721L31.8933 29.2999ZM33.0383 29.1909L35.9718 25.036V29.1909H33.0383ZM24.9966 26.121C25.2256 25.7224 25.5649 25.3916 26.0144 25.1286C26.4724 24.8572 27.0025 24.7215 27.6048 24.7215C28.2239 24.7215 28.7837 24.8699 29.2842 25.1668C29.7931 25.4637 30.1917 25.8835 30.4801 26.4264C30.7685 26.9607 30.9127 27.5841 30.9127 28.2966C30.9127 29.0006 30.7685 29.6282 30.4801 30.1796C30.1917 30.7309 29.7931 31.1592 29.2842 31.4646C28.7837 31.7699 28.2239 31.9226 27.6048 31.9226C27.011 31.9226 26.4852 31.7911 26.0271 31.5282C25.5776 31.2567 25.2341 30.9217 24.9966 30.5231V35.116H23.8388V24.836H24.9966V26.121ZM29.7295 28.2966C29.7295 27.7707 29.6234 27.3127 29.4114 26.9225C29.1993 26.5324 28.911 26.2355 28.5462 26.0319C28.19 25.8284 27.7956 25.7266 27.363 25.7266C26.9389 25.7266 26.5445 25.8326 26.1798 26.0447C25.8236 26.2482 25.5352 26.5493 25.3147 26.948C25.1026 27.3381 24.9966 27.7919 24.9966 28.3093C24.9966 28.8352 25.1026 29.2974 25.3147 29.6961C25.5352 30.0863 25.8236 30.3874 26.1798 30.5994C26.5445 30.803 26.9389 30.9047 27.363 30.9047C27.7956 30.9047 28.19 30.803 28.5462 30.5994C28.911 30.3874 29.1993 30.0863 29.4114 29.6961C29.6234 29.2974 29.7295 28.8309 29.7295 28.2966ZM20.5656 25.0524C20.1415 24.8234 19.6581 24.7089 19.1152 24.7089C18.5639 24.7089 18.0635 24.8446 17.6139 25.116C17.1644 25.3874 16.8421 25.7691 16.647 26.261C16.4265 25.7521 16.0915 25.3662 15.6419 25.1033C15.1924 24.8403 14.675 24.7089 14.0898 24.7089C13.6233 24.7089 13.1949 24.8064 12.8048 25.0015C12.4231 25.1966 12.1177 25.4765 11.8887 25.8412V24.8361H10.731V31.8081H11.8887V27.9659C11.8887 27.2364 12.0668 26.6809 12.4231 26.2992C12.7793 25.909 13.2585 25.714 13.8607 25.714C14.446 25.714 14.9082 25.9006 15.2475 26.2738C15.5953 26.6385 15.7692 27.1686 15.7692 27.8641V31.8081H16.9142V27.9659C16.9142 27.2364 17.0923 26.6809 17.4486 26.2992C17.8048 25.909 18.284 25.714 18.8862 25.714C19.4715 25.714 19.9337 25.9006 20.273 26.2738C20.6207 26.6385 20.7946 27.1686 20.7946 27.8641V31.8081H21.9397V27.6987C21.9397 27.0541 21.8167 26.507 21.5707 26.0575C21.3247 25.6079 20.9897 25.2729 20.5656 25.0524Z", fill: "currentColor" })));
};

var FileMp4FillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM31.4873 28.9565V29.8409H35.2098V31.4039H36.3615V29.8409H37.3179V28.8228H36.3615V24H34.9425L31.4873 28.9565ZM32.8344 28.8228L35.2612 25.1929V28.8228H32.8344ZM25.151 25.7653C25.383 25.4614 25.6989 25.2055 26.0988 24.9975C26.4987 24.7896 26.9506 24.6856 27.4545 24.6856C28.0303 24.6856 28.5542 24.8296 29.0261 25.1175C29.5059 25.3974 29.8818 25.7933 30.1538 26.3052C30.4257 26.8171 30.5617 27.4049 30.5617 28.0687C30.5617 28.7326 30.4257 29.3284 30.1538 29.8563C29.8818 30.3762 29.5059 30.7841 29.0261 31.08C28.5542 31.3679 28.0303 31.5119 27.4545 31.5119C26.9506 31.5119 26.5027 31.4119 26.1108 31.212C25.7189 31.004 25.399 30.7481 25.151 30.4442V34.5471H23.7834V24.7936H25.151V25.7653ZM29.17 28.0687C29.17 27.6129 29.074 27.221 28.8821 26.893C28.6981 26.5571 28.4502 26.3052 28.1383 26.1372C27.8344 25.9613 27.5064 25.8733 27.1545 25.8733C26.8106 25.8733 26.4827 25.9613 26.1708 26.1372C25.8669 26.3132 25.6189 26.5691 25.427 26.905C25.243 27.2409 25.151 27.6369 25.151 28.0927C25.151 28.5486 25.243 28.9485 25.427 29.2924C25.6189 29.6284 25.8669 29.8843 26.1708 30.0602C26.4827 30.2362 26.8106 30.3242 27.1545 30.3242C27.5064 30.3242 27.8344 30.2362 28.1383 30.0602C28.4502 29.8763 28.6981 29.6124 28.8821 29.2684C29.074 28.9245 29.17 28.5246 29.17 28.0687ZM20.7115 25.0095C20.3036 24.7936 19.8397 24.6856 19.3198 24.6856C18.832 24.6856 18.3761 24.8056 17.9522 25.0455C17.5283 25.2774 17.2164 25.5934 17.0164 25.9933C16.7925 25.5694 16.4726 25.2454 16.0567 25.0215C15.6408 24.7976 15.1689 24.6856 14.641 24.6856C14.2491 24.6856 13.8812 24.7616 13.5373 24.9135C13.1934 25.0655 12.9095 25.2774 12.6855 25.5494V24.7936H11.3179V31.4039H12.6855V27.7088C12.6855 27.117 12.8335 26.6651 13.1294 26.3532C13.4333 26.0333 13.8412 25.8733 14.3531 25.8733C14.865 25.8733 15.2689 26.0333 15.5648 26.3532C15.8607 26.6651 16.0087 27.117 16.0087 27.7088V31.4039H17.3643V27.7088C17.3643 27.117 17.5123 26.6651 17.8082 26.3532C18.1121 26.0333 18.52 25.8733 19.0319 25.8733C19.5438 25.8733 19.9477 26.0333 20.2436 26.3532C20.5395 26.6651 20.6875 27.117 20.6875 27.7088V31.4039H22.0432V27.5049C22.0432 26.905 21.9232 26.3932 21.6832 25.9693C21.4513 25.5454 21.1274 25.2255 20.7115 25.0095Z", fill: "currentColor" })));
};

var FilePlyLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM25.5752 31.9999V20.8999H23.8652V31.9999H25.5752ZM30.1903 35.8849L35.2603 23.7349H33.4903L31.0753 30.0349L28.7503 23.7349H26.8453L30.1003 31.8649L28.4203 35.8849H30.1903ZM15.4092 24.9499C15.6992 24.5699 16.0942 24.2499 16.5942 23.9899C17.0942 23.7299 17.6592 23.5999 18.2892 23.5999C19.0092 23.5999 19.6642 23.7799 20.2542 24.1399C20.8542 24.4899 21.3242 24.9849 21.6642 25.6249C22.0042 26.2649 22.1742 26.9999 22.1742 27.8299C22.1742 28.6599 22.0042 29.4049 21.6642 30.0649C21.3242 30.7149 20.8542 31.2249 20.2542 31.5949C19.6642 31.9549 19.0092 32.1349 18.2892 32.1349C17.6592 32.1349 17.0992 32.0099 16.6092 31.7599C16.1192 31.4999 15.7192 31.1799 15.4092 30.7999V35.9299H13.6992V23.7349H15.4092V24.9499ZM20.4342 27.8299C20.4342 27.2599 20.3142 26.7699 20.0742 26.3599C19.8442 25.9399 19.5342 25.6249 19.1442 25.4149C18.7642 25.1949 18.3542 25.0849 17.9142 25.0849C17.4842 25.0849 17.0742 25.1949 16.6842 25.4149C16.3042 25.6349 15.9942 25.9549 15.7542 26.3749C15.5242 26.7949 15.4092 27.2899 15.4092 27.8599C15.4092 28.4299 15.5242 28.9299 15.7542 29.3599C15.9942 29.7799 16.3042 30.0999 16.6842 30.3199C17.0742 30.5399 17.4842 30.6499 17.9142 30.6499C18.3542 30.6499 18.7642 30.5399 19.1442 30.3199C19.5342 30.0899 19.8442 29.7599 20.0742 29.3299C20.3142 28.8999 20.4342 28.3999 20.4342 27.8299Z", fill: "currentColor" })));
};

var FilePlyLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM25.5896 31.9999V20.8999H23.4896V31.9999H25.5896ZM30.4694 35.9299L35.6144 23.6899H33.3794L31.2044 29.4949L29.0594 23.6899H26.7044L30.0344 31.7899L28.2344 35.9299H30.4694ZM15.4235 24.8899C15.6935 24.5099 16.0635 24.1949 16.5335 23.9449C17.0135 23.6849 17.5585 23.5549 18.1685 23.5549C18.8785 23.5549 19.5185 23.7299 20.0885 24.0799C20.6685 24.4299 21.1235 24.9299 21.4535 25.5799C21.7935 26.2199 21.9635 26.9649 21.9635 27.8149C21.9635 28.6649 21.7935 29.4199 21.4535 30.0799C21.1235 30.7299 20.6685 31.2349 20.0885 31.5949C19.5185 31.9549 18.8785 32.1349 18.1685 32.1349C17.5585 32.1349 17.0185 32.0099 16.5485 31.7599C16.0885 31.5099 15.7135 31.1949 15.4235 30.8149V35.9599H13.3235V23.6899H15.4235V24.8899ZM19.8185 27.8149C19.8185 27.3149 19.7135 26.8849 19.5035 26.5249C19.3035 26.1549 19.0335 25.8749 18.6935 25.6849C18.3635 25.4949 18.0035 25.3999 17.6135 25.3999C17.2335 25.3999 16.8735 25.4999 16.5335 25.6999C16.2035 25.8899 15.9335 26.1699 15.7235 26.5399C15.5235 26.9099 15.4235 27.3449 15.4235 27.8449C15.4235 28.3449 15.5235 28.7799 15.7235 29.1499C15.9335 29.5199 16.2035 29.8049 16.5335 30.0049C16.8735 30.1949 17.2335 30.2899 17.6135 30.2899C18.0035 30.2899 18.3635 30.1899 18.6935 29.9899C19.0335 29.7899 19.3035 29.5049 19.5035 29.1349C19.7135 28.7649 19.8185 28.3249 19.8185 27.8149Z", fill: "currentColor" })));
};

var FilePlyLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM25.5166 31.9999V20.8999H24.1516V31.9999H25.5166ZM29.973 35.8699L34.923 23.7799H33.513L30.963 30.4399L28.383 23.7799H26.868L30.183 31.9099L28.563 35.8699H29.973ZM15.3799 25.2949C15.6499 24.8249 16.0499 24.4349 16.5799 24.1249C17.1199 23.8049 17.7449 23.6449 18.4549 23.6449C19.1849 23.6449 19.8449 23.8199 20.4349 24.1699C21.0349 24.5199 21.5049 25.0149 21.8449 25.6549C22.1849 26.2849 22.3549 27.0199 22.3549 27.8599C22.3549 28.6899 22.1849 29.4299 21.8449 30.0799C21.5049 30.7299 21.0349 31.2349 20.4349 31.5949C19.8449 31.9549 19.1849 32.1349 18.4549 32.1349C17.7549 32.1349 17.1349 31.9799 16.5949 31.6699C16.0649 31.3499 15.6599 30.9549 15.3799 30.4849V35.8999H14.0149V23.7799H15.3799V25.2949ZM20.9599 27.8599C20.9599 27.2399 20.8349 26.6999 20.5849 26.2399C20.3349 25.7799 19.9949 25.4299 19.5649 25.1899C19.1449 24.9499 18.6799 24.8299 18.1699 24.8299C17.6699 24.8299 17.2049 24.9549 16.7749 25.2049C16.3549 25.4449 16.0149 25.7999 15.7549 26.2699C15.5049 26.7299 15.3799 27.2649 15.3799 27.8749C15.3799 28.4949 15.5049 29.0399 15.7549 29.5099C16.0149 29.9699 16.3549 30.3249 16.7749 30.5749C17.2049 30.8149 17.6699 30.9349 18.1699 30.9349C18.6799 30.9349 19.1449 30.8149 19.5649 30.5749C19.9949 30.3249 20.3349 29.9699 20.5849 29.5099C20.8349 29.0399 20.9599 28.4899 20.9599 27.8599Z", fill: "currentColor" })));
};

var FilePlyFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM25.5752 31.9999V20.8999H23.8652V31.9999H25.5752ZM30.1903 35.8849L35.2603 23.7349H33.4903L31.0753 30.0349L28.7503 23.7349H26.8453L30.1003 31.8649L28.4203 35.8849H30.1903ZM15.4092 24.9499C15.6992 24.5699 16.0942 24.2499 16.5942 23.9899C17.0942 23.7299 17.6592 23.5999 18.2892 23.5999C19.0092 23.5999 19.6642 23.7799 20.2542 24.1399C20.8542 24.4899 21.3242 24.9849 21.6642 25.6249C22.0042 26.2649 22.1742 26.9999 22.1742 27.8299C22.1742 28.6599 22.0042 29.4049 21.6642 30.0649C21.3242 30.7149 20.8542 31.2249 20.2542 31.5949C19.6642 31.9549 19.0092 32.1349 18.2892 32.1349C17.6592 32.1349 17.0992 32.0099 16.6092 31.7599C16.1192 31.4999 15.7192 31.1799 15.4092 30.7999V35.9299H13.6992V23.7349H15.4092V24.9499ZM20.4342 27.8299C20.4342 27.2599 20.3142 26.7699 20.0742 26.3599C19.8442 25.9399 19.5342 25.6249 19.1442 25.4149C18.7642 25.1949 18.3542 25.0849 17.9142 25.0849C17.4842 25.0849 17.0742 25.1949 16.6842 25.4149C16.3042 25.6349 15.9942 25.9549 15.7542 26.3749C15.5242 26.7949 15.4092 27.2899 15.4092 27.8599C15.4092 28.4299 15.5242 28.9299 15.7542 29.3599C15.9942 29.7799 16.3042 30.0999 16.6842 30.3199C17.0742 30.5399 17.4842 30.6499 17.9142 30.6499C18.3542 30.6499 18.7642 30.5399 19.1442 30.3199C19.5342 30.0899 19.8442 29.7599 20.0742 29.3299C20.3142 28.8999 20.4342 28.3999 20.4342 27.8299Z", fill: "currentColor" })));
};

var FileZipLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 38.6V12.4941L13.4941 9.4H37.6V38.6H10.4ZM8 11.5L12.5 7H40V41H8V11.5ZM21.5304 22.6799C21.7544 22.9039 22.0317 23.0159 22.3624 23.0159C22.6824 23.0159 22.9544 22.9039 23.1784 22.6799C23.4024 22.4559 23.5144 22.1786 23.5144 21.8479C23.5144 21.5173 23.4024 21.2399 23.1784 21.0159C22.9544 20.7919 22.6824 20.6799 22.3624 20.6799C22.0317 20.6799 21.7544 20.7919 21.5304 21.0159C21.3064 21.2399 21.1944 21.5173 21.1944 21.8479C21.1944 22.1786 21.3064 22.4559 21.5304 22.6799ZM23.2584 32.9999V24.1839H21.4344V32.9999H23.2584ZM28.7411 24.4559C28.2078 24.7333 27.7864 25.0746 27.4771 25.4799V24.1839H25.6531V37.1919H27.4771V31.7199C27.8078 32.1253 28.2344 32.4666 28.7571 32.7439C29.2798 33.0106 29.8771 33.1439 30.5491 33.1439C31.3171 33.1439 32.0158 32.9519 32.6451 32.5679C33.2851 32.1733 33.7864 31.6293 34.1491 30.9359C34.5118 30.2319 34.6931 29.4373 34.6931 28.5519C34.6931 27.6666 34.5118 26.8826 34.1491 26.1999C33.7864 25.5173 33.2851 24.9893 32.6451 24.6159C32.0158 24.2319 31.3171 24.0399 30.5491 24.0399C29.8771 24.0399 29.2744 24.1786 28.7411 24.4559ZM32.4531 26.9839C32.7091 27.4213 32.8371 27.9439 32.8371 28.5519C32.8371 29.1599 32.7091 29.6933 32.4531 30.1519C32.2078 30.6106 31.8771 30.9626 31.4611 31.2079C31.0558 31.4426 30.6184 31.5599 30.1491 31.5599C29.6904 31.5599 29.2531 31.4426 28.8371 31.2079C28.4318 30.9733 28.1011 30.6319 27.8451 30.1839C27.5998 29.7253 27.4771 29.1919 27.4771 28.5839C27.4771 27.9759 27.5998 27.4479 27.8451 26.9999C28.1011 26.5519 28.4318 26.2106 28.8371 25.9759C29.2531 25.7413 29.6904 25.6239 30.1491 25.6239C30.6184 25.6239 31.0558 25.7413 31.4611 25.9759C31.8771 26.1999 32.2078 26.5359 32.4531 26.9839ZM15.5191 31.5119H19.5191V32.9999H13.4071V31.5119L17.4231 25.6719H13.4071V24.1839H19.5191V25.6719L15.5191 31.5119Z", fill: "currentColor" })));
};

var FileZipLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 38V12.7426L13.7426 10H37V38H11ZM8 11.5L12.5 7H40V41H8V11.5ZM21.4668 22.7121C21.7334 22.9574 22.0641 23.0801 22.4588 23.0801C22.8534 23.0801 23.1788 22.9574 23.4348 22.7121C23.7014 22.4561 23.8348 22.1414 23.8348 21.7681C23.8348 21.3947 23.7014 21.0854 23.4348 20.8401C23.1788 20.5841 22.8534 20.4561 22.4588 20.4561C22.0641 20.4561 21.7334 20.5841 21.4668 20.8401C21.2108 21.0854 21.0828 21.3947 21.0828 21.7681C21.0828 22.1414 21.2108 22.4561 21.4668 22.7121ZM23.5628 33.0001V24.1361H21.3228V33.0001H23.5628ZM29.1999 24.4081C28.6986 24.6747 28.3039 25.0107 28.0159 25.4161V24.1361H25.7759V37.2241H28.0159V31.7361C28.3252 32.1414 28.7252 32.4774 29.2159 32.7441C29.7172 33.0107 30.2932 33.1441 30.9439 33.1441C31.7012 33.1441 32.3839 32.9521 32.9919 32.5681C33.6106 32.1841 34.0959 31.6454 34.4479 30.9521C34.8106 30.2481 34.9919 29.4427 34.9919 28.5361C34.9919 27.6294 34.8106 26.8347 34.4479 26.1521C34.0959 25.4587 33.6106 24.9254 32.9919 24.5521C32.3839 24.1787 31.7012 23.9921 30.9439 23.9921C30.2932 23.9921 29.7119 24.1307 29.1999 24.4081ZM32.3679 27.1601C32.5919 27.5441 32.7039 28.0027 32.7039 28.5361C32.7039 29.0801 32.5919 29.5494 32.3679 29.9441C32.1546 30.3387 31.8666 30.6427 31.5039 30.8561C31.1519 31.0694 30.7679 31.1761 30.3519 31.1761C29.9466 31.1761 29.5626 31.0747 29.1999 30.8721C28.8479 30.6587 28.5599 30.3547 28.3359 29.9601C28.1226 29.5654 28.0159 29.1014 28.0159 28.5681C28.0159 28.0347 28.1226 27.5707 28.3359 27.1761C28.5599 26.7814 28.8479 26.4827 29.1999 26.2801C29.5626 26.0667 29.9466 25.9601 30.3519 25.9601C30.7679 25.9601 31.1519 26.0614 31.5039 26.2641C31.8666 26.4667 32.1546 26.7654 32.3679 27.1601ZM15.6364 31.1601H19.5884V33.0001H13.0924V31.1921L16.9644 25.9761H13.1084V24.1361H19.5404V25.9441L15.6364 31.1601Z", fill: "currentColor" })));
};

var FileZipLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 39.8V11.9971L12.9971 8.2H38.8V39.8H9.2ZM8 11.5L12.5 7H40V41H8V11.5ZM21.5456 21.52C21.7376 21.712 21.9723 21.808 22.2496 21.808C22.5163 21.808 22.7403 21.712 22.9216 21.52C23.1136 21.328 23.2096 21.0933 23.2096 20.816C23.2096 20.5386 23.1136 20.304 22.9216 20.112C22.7403 19.92 22.5163 19.824 22.2496 19.824C21.9723 19.824 21.7376 19.92 21.5456 20.112C21.3536 20.304 21.2576 20.5386 21.2576 20.816C21.2576 21.0933 21.3536 21.328 21.5456 21.52ZM22.9536 32V23.232H21.4976V32H22.9536ZM28.1711 23.6C27.6058 23.9306 27.1791 24.3466 26.8911 24.848V23.232H25.4351V36.16H26.8911V30.384C27.1898 30.8853 27.6218 31.3066 28.1871 31.648C28.7631 31.9786 29.4245 32.144 30.1711 32.144C30.9498 32.144 31.6538 31.952 32.2831 31.568C32.9231 31.184 33.4245 30.6453 33.7871 29.952C34.1498 29.2586 34.3311 28.4693 34.3311 27.584C34.3311 26.688 34.1498 25.904 33.7871 25.232C33.4245 24.5493 32.9231 24.0213 32.2831 23.648C31.6538 23.2746 30.9498 23.088 30.1711 23.088C29.4138 23.088 28.7471 23.2586 28.1711 23.6ZM32.4431 25.856C32.7098 26.3466 32.8431 26.9226 32.8431 27.584C32.8431 28.256 32.7098 28.8426 32.4431 29.344C32.1765 29.8346 31.8138 30.2133 31.3551 30.48C30.9071 30.736 30.4111 30.864 29.8671 30.864C29.3338 30.864 28.8378 30.736 28.3791 30.48C27.9311 30.2133 27.5685 29.8346 27.2911 29.344C27.0245 28.8426 26.8911 28.2613 26.8911 27.6C26.8911 26.9493 27.0245 26.3786 27.2911 25.888C27.5685 25.3866 27.9311 25.008 28.3791 24.752C28.8378 24.4853 29.3338 24.352 29.8671 24.352C30.4111 24.352 30.9071 24.48 31.3551 24.736C31.8138 24.992 32.1765 25.3653 32.4431 25.856ZM15.3044 30.8H19.6084V32H13.6404V30.8L17.8964 24.416H13.6724V23.232H19.5764V24.416L15.3044 30.8Z", fill: "currentColor" })));
};

var FileZipFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 11.5L12.5 7H40V41H8V11.5ZM21.5304 22.6799C21.7544 22.9039 22.0317 23.0159 22.3624 23.0159C22.6824 23.0159 22.9544 22.9039 23.1784 22.6799C23.4024 22.4559 23.5144 22.1786 23.5144 21.8479C23.5144 21.5173 23.4024 21.2399 23.1784 21.0159C22.9544 20.7919 22.6824 20.6799 22.3624 20.6799C22.0317 20.6799 21.7544 20.7919 21.5304 21.0159C21.3064 21.2399 21.1944 21.5173 21.1944 21.8479C21.1944 22.1786 21.3064 22.4559 21.5304 22.6799ZM23.2584 32.9999V24.1839H21.4344V32.9999H23.2584ZM28.7411 24.4559C28.2078 24.7333 27.7864 25.0746 27.4771 25.4799V24.1839H25.6531V37.1919H27.4771V31.7199C27.8078 32.1253 28.2344 32.4666 28.7571 32.7439C29.2798 33.0106 29.8771 33.1439 30.5491 33.1439C31.3171 33.1439 32.0158 32.9519 32.6451 32.5679C33.2851 32.1733 33.7864 31.6293 34.1491 30.9359C34.5118 30.2319 34.6931 29.4373 34.6931 28.5519C34.6931 27.6666 34.5118 26.8826 34.1491 26.1999C33.7864 25.5173 33.2851 24.9893 32.6451 24.6159C32.0158 24.2319 31.3171 24.0399 30.5491 24.0399C29.8771 24.0399 29.2744 24.1786 28.7411 24.4559ZM32.4531 26.9839C32.7091 27.4213 32.8371 27.9439 32.8371 28.5519C32.8371 29.1599 32.7091 29.6933 32.4531 30.1519C32.2078 30.6106 31.8771 30.9626 31.4611 31.2079C31.0558 31.4426 30.6184 31.5599 30.1491 31.5599C29.6904 31.5599 29.2531 31.4426 28.8371 31.2079C28.4318 30.9733 28.1011 30.6319 27.8451 30.1839C27.5998 29.7253 27.4771 29.1919 27.4771 28.5839C27.4771 27.9759 27.5998 27.4479 27.8451 26.9999C28.1011 26.5519 28.4318 26.2106 28.8371 25.9759C29.2531 25.7413 29.6904 25.6239 30.1491 25.6239C30.6184 25.6239 31.0558 25.7413 31.4611 25.9759C31.8771 26.1999 32.2078 26.5359 32.4531 26.9839ZM15.5191 31.5119H19.5191V32.9999H13.4071V31.5119L17.4231 25.6719H13.4071V24.1839H19.5191V25.6719L15.5191 31.5119Z", fill: "currentColor" })));
};

var FilterLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.8749 6.48945H41.919L41.9177 11.8483L29.5441 23.9164V37.2153L25.1982 41.5103H18.8943V23.9165L6.01093 11.353L10.8749 6.48945ZM11.8689 8.88945L9.42658 11.3316L21.2943 22.9046V39.1103H24.2123L27.1441 36.2129V22.9047L39.518 10.8363L39.5185 8.88945H11.8689Z", fill: "currentColor" })));
};

var FilterLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.289 6.58496H42.0461L42.0447 12.296L29.5781 24.0717V37.0329L25.1378 41.4213L18.8812 41.3624V24.0185L6.21094 11.6627L11.289 6.58496ZM12.5316 9.58496L10.4805 11.6359L21.8812 22.7537V38.3905L23.9172 38.4097L26.5781 35.7799V22.7787L39.045 11.0027L39.0453 9.58496H12.5316Z", fill: "currentColor" })));
};

var FilterLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.593 6.40147H42.004L42.0028 11.0491L29.4716 23.8681V37.5132L25.0965 41.5994H19.1361V23.8736L5.94305 10.7956L10.593 6.40147ZM11.0676 7.59461L7.65853 10.8161L20.3292 23.3764V40.4063H24.626L28.2784 36.9949V23.3818L40.8098 10.5627L40.8105 7.59461H11.0676Z", fill: "currentColor" })));
};

var FilterFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M42.0391 6.58789V11.6435L29 23.375V37.0566L24.567 41.444H19.4375V23.4785L6.23438 11.6435L11.2891 6.58789H42.0391Z", fill: "currentColor" })));
};

var FirstPageLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.3022 11L35.9992 12.6971L24.8477 23.8485L35.9992 35L34.3022 36.6971L21.4536 23.8485L34.3022 11Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.0015 37.4L15.0016 11L17.4016 11L17.4015 37.4L15.0015 37.4Z", fill: "currentColor" })));
};

var FirstPageLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.2724 11.4688L36.3937 13.5901L25.4544 24.5294L36.3937 35.4688L34.2724 37.5901L21.2118 24.5294L34.2724 11.4688Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.4 37.4L14.4 11L17.4 11L17.4 37.4L14.4 37.4Z", fill: "currentColor" })));
};

var FolderLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M32.34 14.76V9.95999H23.66V12.36H29.94V14.76H21.26V9.95999H10.74L6.03998 14.66V39.94H37.28L41.98 35.24V14.76H32.34ZM39.58 34.24L36.28 37.54H8.43998V15.66L11.74 12.36H18.86V17.16H39.58V34.24Z", fill: "currentColor" })));
};

var FolderLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M32.6402 14.46V9.65997H23.6602V12.66H29.6402V14.46H21.5602V9.65997H10.6202L5.74023 14.54V40.24H37.4002L42.2802 35.36V14.46H32.6402ZM39.2802 34.12L36.2402 37.16L8.72023 37.24V15.78L11.8402 12.66H18.5402V17.46H39.2602V34.12H39.2802Z", fill: "currentColor" })));
};

var FolderLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M31.7401 15.3601V10.5601H23.6601V11.7601H30.5401V15.3601H20.6601V10.5601H10.9801L6.62012 14.9201V39.3601H37.0201L41.3801 35.0001V15.3601H31.7401ZM40.1801 34.5001L36.5401 38.1401H7.84012V15.4001L11.4801 11.7601H19.4601V16.5601H40.1801V34.5001Z", fill: "currentColor" })));
};

var FolderFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M21.26 16V9.96002H10.74L6.04004 14.66V39.94H37.28L41.98 35.24V16H21.26Z", fill: "currentColor" }),
        React.createElement("path", { d: "M32.3199 9.96002H23.9199V14.02H32.3199V9.96002Z", fill: "currentColor" })));
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

var GridViewLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.6704 6.00019H10.1942L6.00116 10.2413V22.6612H22.6704V6.00019ZM8.40116 11.2274L11.1964 8.40019H20.2704V20.2612H8.40116V11.2274ZM22.6577 25.3459H6.00116V41.9991H22.6577V25.3459ZM8.40116 39.5991V27.7459H20.2577V39.5991H8.40116ZM25.3469 25.3381H42.0005V37.7613L37.7797 41.9991H25.3469V25.3381ZM27.7469 27.7381V39.5991H36.7828L39.6005 36.77V27.7381H27.7469ZM42.0269 6.00117H25.3469V22.6622H42.0269V6.00117ZM27.7469 20.2622V8.40117H39.6269V20.2622H27.7469Z", fill: "currentColor" })));
};

var GridViewLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0001 5.99902H22.6562V22.6562H6V9.99917L10.0001 5.99902ZM6 25.3359H22.6601V42.0006H6V25.3359ZM42.0006 25.3359H25.3438V42.0006H38.0005L42.0006 38.0005V25.3359ZM25.3438 6H42.0006V22.6562H25.3438V6Z", fill: "currentColor" })));
};

var GridViewLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.6683 5.9996H10.2197L6.00159 10.2177V22.6663H22.6683V5.9996ZM7.20159 10.7148L10.7168 7.1996H21.4683V21.4663H7.20159V10.7148ZM22.6683 25.3336H6.00159V42.0003H22.6683V25.3336ZM7.20159 40.8003V26.5336H21.4683V40.8003H7.20159ZM25.3336 25.3336H42.0003V37.7821L37.7821 42.0003H25.3336V25.3336ZM26.5336 26.5336V40.8003H37.2851L40.8003 37.2851V26.5336H26.5336ZM42.0003 6.00058H25.3336V22.6672H42.0003V6.00058ZM26.5336 21.4672V7.20058H40.8003V21.4672H26.5336Z", fill: "currentColor" })));
};

var GridViewFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0001 5.99902H22.6562V22.6562H6V9.99917L10.0001 5.99902ZM6 25.3359H22.6601V42.0006H6V25.3359ZM42.0006 25.3359H25.3438V42.0006H38.0005L42.0006 38.0005V25.3359ZM25.3438 6H42.0006V22.6562H25.3438V6Z", fill: "currentColor" })));
};

var HeartLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.71706 9.27016C13.2017 5.4721 19.8262 6.23562 23.8565 10.3053L24.0007 10.451L24.145 10.3053C28.1753 6.23562 34.7998 5.4721 39.2844 9.27016L39.2862 9.27171C44.2565 13.4982 44.4935 21.0122 39.9979 25.5518L24.0007 41.7054L8.00363 25.5518C3.50795 21.0122 3.74494 13.4982 8.71524 9.27171L8.71706 9.27016ZM10.269 11.1008C6.37414 14.4137 6.18722 20.3069 9.70892 23.863L24.0007 38.2946L38.2926 23.863C41.8142 20.3069 41.6274 14.4138 37.7325 11.1009C34.3267 8.21727 29.1163 8.69619 25.8503 11.9941L24.0007 13.8617L22.1512 11.9941C18.8853 8.69623 13.6749 8.21728 10.269 11.1008Z", fill: "currentColor" })));
};

var HeartFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.85756 8.40932C12.5631 4.39788 19.5205 5.20266 23.7533 9.505L23.9502 9.70511L24.1471 9.505C28.3799 5.20266 35.3373 4.39788 40.0428 8.40932L40.0447 8.41088C45.2579 12.8731 45.5056 20.8017 40.7914 25.5932L23.9502 42.7111L7.10897 25.5932C2.39481 20.8017 2.64251 12.8731 7.85573 8.41088L7.85756 8.40932Z", fill: "currentColor" })));
};

var HelpCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.5999C33.1679 40.5999 40.6 33.1678 40.6 23.9999C40.6 14.832 33.1679 7.39988 24 7.39988C14.8321 7.39988 7.4 14.832 7.4 23.9999C7.4 33.1678 14.8321 40.5999 24 40.5999ZM24 42.9999C34.4934 42.9999 43 34.4933 43 23.9999C43 13.5065 34.4934 4.99988 24 4.99988C13.5066 4.99988 5 13.5065 5 23.9999C5 34.4933 13.5066 42.9999 24 42.9999Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4 31.0399L25.4 34.0399L23 34.0399L23 31.0399L25.4 31.0399Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.016 29.184C23.016 28.1386 23.1973 27.2533 23.56 26.528C23.9227 25.7813 24.3707 25.1413 24.904 24.608C25.4373 24.0533 25.96 23.5306 26.472 23.04C27.0053 22.528 27.4533 21.9946 27.816 21.44C28.1787 20.864 28.36 20.1813 28.36 19.392C28.36 18.8586 28.232 18.3146 27.976 17.76C27.7413 17.2053 27.3253 16.7466 26.728 16.384C26.1307 16 25.3093 15.808 24.264 15.808C23.2187 15.808 22.3333 16.0106 21.608 16.416C20.904 16.8213 20.3493 17.3546 19.944 18.016C19.56 18.6773 19.336 19.3813 19.272 20.128H17C17.064 18.9546 17.384 17.8773 17.96 16.896C18.5573 15.8933 19.368 15.0933 20.392 14.496C21.4373 13.8986 22.664 13.6 24.072 13.6C25.608 13.6 26.856 13.888 27.816 14.464C28.7973 15.0186 29.512 15.744 29.96 16.64C30.408 17.5146 30.632 18.432 30.632 19.392C30.632 20.3946 30.4507 21.2373 30.088 21.92C29.7467 22.5813 29.3093 23.1786 28.776 23.712C28.264 24.224 27.7413 24.7253 27.208 25.216C26.6747 25.7066 26.2267 26.272 25.864 26.912C25.5227 27.5306 25.352 28.288 25.352 29.184H23.016Z", fill: "currentColor" })));
};

var HelpCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.6621 23.9999C42.6621 34.4933 34.1555 42.9999 23.6621 42.9999C13.1687 42.9999 4.66211 34.4933 4.66211 23.9999C4.66211 13.5065 13.1687 4.99988 23.6621 4.99988C34.1555 4.99988 42.6621 13.5065 42.6621 23.9999ZM22.6781 29.184C22.6781 28.1386 22.8594 27.2533 23.2221 26.528C23.5848 25.7813 24.0328 25.1413 24.5661 24.608C25.0994 24.0533 25.6221 23.5306 26.1341 23.04C26.6674 22.528 27.1154 21.9946 27.4781 21.44C27.8408 20.864 28.0221 20.1813 28.0221 19.392C28.0221 18.8586 27.8941 18.3146 27.6381 17.76C27.4034 17.2053 26.9874 16.7466 26.3901 16.384C25.7928 16 24.9714 15.808 23.9261 15.808C22.8808 15.808 21.9954 16.0106 21.2701 16.416C20.5661 16.8213 20.0114 17.3546 19.6061 18.016C19.2221 18.6773 18.9981 19.3813 18.9341 20.128H16.6621C16.7261 18.9546 17.0461 17.8773 17.6221 16.896C18.2194 15.8933 19.0301 15.0933 20.0541 14.496C21.0994 13.8986 22.3261 13.6 23.7341 13.6C25.2701 13.6 26.5181 13.888 27.4781 14.464C28.4594 15.0186 29.1741 15.744 29.6221 16.64C30.0701 17.5146 30.2941 18.432 30.2941 19.392C30.2941 20.3946 30.1128 21.2373 29.7501 21.92C29.4088 22.5813 28.9714 23.1786 28.4381 23.712C27.9261 24.224 27.4034 24.7253 26.8701 25.216C26.3368 25.7066 25.8888 26.272 25.5261 26.912C25.1848 27.5306 25.0141 28.288 25.0141 29.184H22.6781ZM25.0621 31.0399V34.0399H22.6621V31.0399H25.0621Z", fill: "currentColor" })));
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

var InfoCircleLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 40.4667C33.0943 40.4667 40.4667 33.0943 40.4667 24C40.4667 14.9057 33.0943 7.53333 24 7.53333C14.9057 7.53333 7.53333 14.9057 7.53333 24C7.53333 33.0943 14.9057 40.4667 24 40.4667ZM24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4 21L25.4 33L23 33L23 21L25.4 21Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4 15L25.4 18L23 18L23 15L25.4 15Z", fill: "currentColor" })));
};

var InfoCircleFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.7422 24C42.7422 34.4934 34.2356 43 23.7422 43C13.2488 43 4.74219 34.4934 4.74219 24C4.74219 13.5066 13.2488 5 23.7422 5C34.2356 5 42.7422 13.5066 42.7422 24ZM25.1422 15V18H22.7422V15H25.1422ZM25.1422 21L25.1422 33H22.7422V21H25.1422Z", fill: "currentColor" })));
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

var LastPageLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6986 11L15.0016 12.6971L26.1531 23.8485L15.0016 35L16.6986 36.6971L29.5472 23.8485L16.6986 11Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.9992 37.4L35.9992 11L33.5992 11L33.5992 37.4L35.9992 37.4Z", fill: "currentColor" })));
};

var LastPageLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.5213 11.4688L14.4 13.5901L25.3394 24.5294L14.4 35.4688L16.5213 37.5901L29.582 24.5294L16.5213 11.4688Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.3938 37.4L36.3938 11L33.3938 11L33.3938 37.4L36.3938 37.4Z", fill: "currentColor" })));
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

var LocationLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M34 41.6H14V44H34V41.6Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24 3.85999C16.34 3.85999 10.12 10.1 10.12 17.76V25.68L24 39.7L37.88 25.68V17.76C37.88 10.1 31.66 3.85999 24 3.85999ZM35.48 24.7L24 36.3L12.52 24.7V17.78C12.52 11.44 17.66 6.27999 24 6.27999C30.34 6.27999 35.48 11.44 35.48 17.78V24.7Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.9997 11.3C20.2997 11.3 17.2997 14.3 17.2997 18C17.2997 21.7 20.2997 24.7 23.9997 24.7C27.6997 24.7 30.6997 21.7 30.6997 18C30.6997 14.3 27.6997 11.3 23.9997 11.3ZM23.9997 22.3C21.6197 22.3 19.6997 20.38 19.6997 18C19.6997 15.62 21.6197 13.7 23.9997 13.7C26.3797 13.7 28.2997 15.62 28.2997 18C28.2997 20.38 26.3797 22.3 23.9997 22.3Z", fill: "currentColor" })));
};

var LocationLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M34 41.3H14V44.3H34V41.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.0003 3.56C16.1803 3.56 9.82031 9.94 9.82031 17.76V25.8L24.0003 40.14L38.1803 25.8V17.76C38.1803 9.92 31.8203 3.56 24.0003 3.56ZM35.1803 24.56L24.0003 35.86L12.8203 24.56V17.76C12.8203 11.58 17.8403 6.56 24.0003 6.56C30.1603 6.56 35.1803 11.58 35.1803 17.76V24.56Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24 11C20.14 11 17 14.14 17 18C17 21.86 20.14 25 24 25C27.86 25 31 21.86 31 18C31 14.14 27.86 11 24 11ZM24 22C21.8 22 20 20.2 20 18C20 15.8 21.8 14 24 14C26.2 14 28 15.8 28 18C28 20.2 26.2 22 24 22Z", fill: "currentColor" })));
};

var LocationLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M34 42.2H14V43.4H34V42.2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.0007 4.45996C16.6807 4.45996 10.7207 10.42 10.7207 17.76V25.42L24.0007 38.84L37.2807 25.42V17.76C37.2807 10.42 31.3207 4.45996 24.0007 4.45996ZM36.0807 24.94L24.0007 37.14L11.9207 24.94V17.76C11.9207 11.08 17.3407 5.65996 24.0007 5.65996C30.6607 5.65996 36.0807 11.08 36.0807 17.76V24.94Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.0004 11.9C20.6404 11.9 17.9004 14.64 17.9004 18C17.9004 21.36 20.6404 24.1 24.0004 24.1C27.3604 24.1 30.1004 21.36 30.1004 18C30.1004 14.64 27.3604 11.9 24.0004 11.9ZM24.0004 22.9C21.3004 22.9 19.1004 20.7 19.1004 18C19.1004 15.3 21.3004 13.1 24.0004 13.1C26.7004 13.1 28.9004 15.3 28.9004 18C28.9004 20.7 26.7004 22.9 24.0004 22.9Z", fill: "currentColor" })));
};

var LocationFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M34 41.6H14V44H34V41.6Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.0001 3.85999C16.3601 3.85999 10.1201 10.1 10.1201 17.76V25.68L24.0001 39.7L37.8801 25.68V17.76C37.8801 10.1 31.6601 3.85999 24.0001 3.85999ZM24.0001 24.1C20.6401 24.1 17.9001 21.36 17.9001 18C17.9001 14.64 20.6401 11.9 24.0001 11.9C27.3601 11.9 30.1001 14.64 30.1001 18C30.1001 21.36 27.3601 24.1 24.0001 24.1Z", fill: "currentColor" })));
};

var LayerHorizontalLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.5547 15.9396L26.5209 8.84916L37.875 17.3791L37.8636 31.58L32.2195 27.2905L32.2252 20.1996L26.5547 15.9396ZM24.1461 14.13L16.0471 8.04553L16.0955 18.1837L8.05307 12.1419L8.03696 32.2665L24.127 44.3541L24.135 34.2979L32.209 40.4341L32.2171 30.3031L40.2597 36.4156L40.2759 16.1811L24.0979 4.02698L24.1461 14.13ZM18.4701 12.8677L18.5041 19.9932L24.1431 24.2295L24.1374 31.2853L29.8128 35.5986L29.8242 21.3977L18.4701 12.8677ZM10.4492 16.9438L21.7421 25.4276L21.7308 39.5522L10.4379 31.0684L10.4492 16.9438Z", fill: "currentColor" })));
};

var LayerHorizontalLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.854 15.7891L26.8238 9.4518L37.5749 17.5287L37.5641 30.9755L32.5196 27.1416L32.5253 20.0497L26.854 15.7891ZM23.8432 13.5271L15.7442 7.44263L15.7944 17.9574L8.05307 12.1418L8.03696 32.2664L24.127 44.354L24.1347 34.6743L32.5085 41.0384L32.5166 30.9074L40.5593 37.0199L40.5761 16.0312L23.795 3.42407L23.8432 13.5271ZM18.773 13.4704L18.8052 20.2193L24.1431 24.2294L24.1377 30.9085L29.5133 34.994L29.5241 21.5473L18.773 13.4704ZM11.0483 18.1442L21.1419 25.727L21.1318 38.3516L11.0382 30.7688L11.0483 18.1442Z", fill: "currentColor" })));
};

var LayerHorizontalLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.9412 16.2479L25.9 7.61351L38.4902 17.0721L38.4776 32.8192L31.6042 27.5954L31.6099 20.5066L25.9412 16.2479ZM24.767 15.3657L16.6736 9.28542L16.6736 18.6181L8.05307 12.1419L8.03696 32.2665L24.127 44.3542L24.1355 33.6926L31.595 39.1711L31.6031 29.064L39.6457 35.1765L39.6607 16.4881L24.7188 5.2627L24.767 15.3657ZM17.8436 11.6278L17.8436 19.4971L24.1431 24.2296L24.1367 32.2418L30.4268 36.8615L30.4394 21.0907L17.8436 11.6278ZM9.2212 14.4828L22.9726 24.8136L22.9588 42.0132L9.20742 31.6824L9.2212 14.4828Z", fill: "currentColor" })));
};

var LayerLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 15L14.9942 19.4971L5.90125 23.9804L14.9643 28.5118L5.90125 32.9804L24 42.0295L42.0983 32.9804L33.0353 28.5118L42.0983 23.9804L33.0056 19.4972L42 15L24 6L6 15ZM30.3408 29.8591L24 33.0295L17.6589 29.8591L11.2979 32.9954L24 39.3462L36.7017 32.9954L30.3408 29.8591ZM11.2979 23.9954L17.6887 20.8444L24 24L30.311 20.8445L36.7017 23.9954L24 30.3462L11.2979 23.9954ZM11.3666 15L24 21.3167L36.6334 15L24 8.68328L11.3666 15Z", fill: "currentColor" })));
};

var LayerLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 15L14.6573 19.3287L5.22668 23.9785L14.2898 28.5099L5.22668 32.9785L24 42.3649L42.7729 32.9785L33.7099 28.51L42.7729 23.9785L33.3425 19.3288L42 15L24 6L6 15ZM30.3417 30.1941L24 33.3649L17.658 30.194L11.9725 32.9973L24 39.0108L36.0271 32.9973L30.3417 30.1941ZM11.9725 23.9973L18.0256 21.0128L24 24L29.9742 21.0129L36.0271 23.9973L24 30.0108L11.9725 23.9973ZM12.7082 15L24 20.6459L35.2918 15L24 9.3541L12.7082 15Z", fill: "currentColor" })));
};

var LayerLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 15L15.6679 19.8339L7.25049 23.9842L16.3135 28.5156L7.25049 32.9841L24.0001 41.3587L40.7492 32.9841L31.6863 28.5156L40.7492 23.9842L32.332 19.834L42 15L24 6L6 15ZM30.339 29.1893L24.0001 32.3587L17.6608 29.1892L9.94883 32.9916L24 40.0171L38.0509 32.9916L30.339 29.1893ZM9.94883 23.9917L17.0152 20.5076L24 24L30.9847 20.5077L38.0509 23.9917L24 31.0171L9.94883 23.9917ZM8.68328 15L24 22.6584L39.3167 15L24 7.34164L8.68328 15Z", fill: "currentColor" })));
};

var LayerFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 15L24 6L42 15L24 24L6 15ZM6 24L12.35 20.8L24 26.6L35.65 20.8L42 24L24 33L6 24ZM12.35 29.8008L6 33.0008L24 42.0008L42 33.0008L35.65 29.8008L24 35.6008L12.35 29.8008Z", fill: "currentColor" })));
};

var LockLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.2005 20.94V13.22C33.2005 8.13999 29.0805 4.01999 24.0005 4.01999C18.9205 4.01999 14.8005 8.13999 14.8005 13.22L14.8005 21.5H17.2005L17.2005 13.22C17.2005 9.45999 20.2405 6.41999 24.0005 6.41999C27.7605 6.41999 30.8005 9.45999 30.8005 13.22V20.94H14.6805L9.98047 25.64V44H33.3405L38.0405 39.3V20.94H33.2005ZM35.6405 38.3L32.3405 41.6H12.3805V26.64L15.6805 23.34H35.6405V38.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.4205 32.02H22.0205V38H24.4205V32.02Z", fill: "currentColor" })));
};

var LockLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.4997 20.64V13.22C33.4997 7.97997 29.2397 3.71997 23.9997 3.71997C18.7597 3.71997 14.4997 7.97997 14.4997 13.22V21.5H17.4997V13.22C17.4997 9.63997 20.4197 6.71997 23.9997 6.71997C27.5797 6.71997 30.4997 9.63997 30.4997 13.22V20.64H14.5597L9.67969 25.52V44.3H33.4597L38.3397 39.42V20.64H33.4997ZM35.3397 38.18L32.2197 41.3H12.6797V26.76L15.7997 23.64H35.3397V38.18Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.7197 32.02H21.7197V38H24.7197V32.02Z", fill: "currentColor" })));
};

var LockLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M32.5996 21.54V13.22C32.5996 8.48 28.7396 4.62 23.9996 4.62C19.2596 4.62 15.3996 8.48 15.3996 13.22V22H16.5996V13.22C16.5996 9.14 19.9196 5.82 23.9996 5.82C28.0796 5.82 31.3996 9.14 31.3996 13.22V21.54H14.9196L10.5596 25.9V43.42H33.0796L37.4396 39.06V21.54H32.5996ZM36.2396 38.56L32.5996 42.2H11.7796V26.38L15.4196 22.74H36.2396V38.56Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.82 32.02H22.62V38H23.82V32.02Z", fill: "currentColor" })));
};

var LockFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.2005 20.94V13.22C33.2005 8.14002 29.0805 4.02002 24.0005 4.02002C18.9205 4.02002 14.8005 8.14002 14.8005 13.22L14.8005 22H17.2005L17.2005 13.22C17.2005 9.46002 20.2605 6.42002 24.0005 6.42002C27.7405 6.42002 30.8005 9.46002 30.8005 13.22V20.94H14.6805L9.98047 25.64V44H33.3405L38.0405 39.3V20.94H33.2005ZM24.4205 38H22.0205V32.02H24.4205V38Z", fill: "currentColor" })));
};

var LockOpenLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.2005 20.94V13.22C33.2005 8.13999 29.0805 4.01999 24.0005 4.01999C18.9205 4.01999 14.8005 8.13999 14.8005 13.22V16H17.2005V13.22C17.2005 9.45999 20.2405 6.41999 24.0005 6.41999C27.7605 6.41999 30.8005 9.45999 30.8005 13.22V20.94H14.6805L9.98047 25.64V44H33.3405L38.0405 39.3V20.94H33.2005ZM35.6405 38.3L32.3405 41.6H12.3805V26.64L15.6805 23.34H35.6405V38.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.4205 32.02H22.0205V38H24.4205V32.02Z", fill: "currentColor" })));
};

var LockOpenLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.4997 20.64V13.22C33.4997 7.97997 29.2397 3.71997 23.9997 3.71997C18.7597 3.71997 14.4997 7.97997 14.4997 13.22V16H17.4997V13.22C17.4997 9.63997 20.4197 6.71997 23.9997 6.71997C27.5797 6.71997 30.4997 9.63997 30.4997 13.22V20.64H14.5597L9.67969 25.52V44.3H33.4597L38.3397 39.42V20.64H33.4997ZM35.3397 38.18L32.2197 41.3H12.6797V26.76L15.7997 23.64H35.3397V38.18Z", fill: "currentColor" }),
        React.createElement("path", { d: "M24.7197 32.02H21.7197V38H24.7197V32.02Z", fill: "currentColor" })));
};

var LockOpenLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M32.6005 21.54V13.22C32.6005 8.48 28.7405 4.62 24.0005 4.62C19.2605 4.62 15.4005 8.48 15.4005 13.22V16H16.6005V13.22C16.6005 9.14 19.9205 5.82 24.0005 5.82C28.0805 5.82 31.4005 9.14 31.4005 13.22V21.54H14.9205L10.5605 25.9V43.42H33.0805L37.4405 39.06V21.54H32.6005ZM36.2405 38.56L32.6005 42.2H11.7805V26.38L15.4205 22.74H36.2405V38.56Z", fill: "currentColor" }),
        React.createElement("path", { d: "M23.8211 32.02H22.6211V38H23.8211V32.02Z", fill: "currentColor" })));
};

var LockOpenFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M33.2005 20.94V13.22C33.2005 8.14002 29.0805 4.02002 24.0005 4.02002C18.9205 4.02002 14.8005 8.14002 14.8005 13.22V16H17.2005V13.22C17.2005 9.46002 20.2605 6.42002 24.0005 6.42002C27.7405 6.42002 30.8005 9.46002 30.8005 13.22V20.94H14.6805L9.98047 25.64V44H33.3405L38.0405 39.3V20.94H33.2005ZM24.4205 38H22.0205V32.02H24.4205V38Z", fill: "currentColor" })));
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

var MailLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.4 14.4941V36.6H36.5059L39.6 33.5059V11.4H11.4941L8.4 14.4941ZM10.5 9L6 13.5V39H37.5L42 34.5V9H10.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9973 24.3561L39.6784 9.6254L41.3216 11.3746L24.0026 27.644L8.18121 12.8773L9.81878 11.1227L23.9973 24.3561Z", fill: "currentColor" })));
};

var MailLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 14.7426V36H36.2574L39 33.2574V12H11.7426L9 14.7426ZM10.5 9L6 13.5V39H37.5L42 34.5V9H10.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9967 23.9451L39.473 9.40674L41.527 11.5933L24.0033 28.0549L7.97653 13.0966L10.0235 10.9034L23.9967 23.9451Z", fill: "currentColor" })));
};

var MailLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.2 13.9971V37.8H37.0029L40.8 34.0029V10.2H10.9971L7.2 13.9971ZM10.5 9L6 13.5V39H37.5L42 34.5V9H10.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9983 25.1777L40.5888 9.56311L41.4112 10.437L24.0017 26.8224L8.59061 12.4387L9.40939 11.5614L23.9983 25.1777Z", fill: "currentColor" })));
};

var MailFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.2522 9L23.9969 24.3523L9.10701 10.393L10.5 9H40.2522ZM42 10.6505L24.003 27.6477L7.40907 12.0909L6 13.5V39H37.5L42 34.5V10.6505Z", fill: "currentColor" })));
};

var MapFlowLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.79999 6.79999H17.2V17.2H6.79999V6.79999ZM9.19999 9.19999V14.8H14.8V9.19999H9.19999Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.8 19.8H29.2V30.2H18.8V19.8ZM21.2 22.2V27.8H26.8V22.2H21.2Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.8 32.8H41.2V43.2H30.8V32.8ZM33.2 35.2V40.8H38.8V35.2H33.2Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.602 12.7H16.998V10.3H41.002V26.2H28.498V23.8H38.602V12.7Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.40195 37.3L31.002 37.3L31.002 39.7L7.00195 39.7L7.00195 23.8L19.502 23.8L19.502 26.2L9.40195 26.2L9.40195 37.3Z", fill: "currentColor" })));
};

var MapFlowLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 6.5H18.5V17.5H7.5V6.5ZM10.5 9.5V14.5H15.5V9.5H10.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 19.5H30.5V30.5H19.5V19.5ZM22.5 22.5V27.5H27.5V22.5H22.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.5 32.5H42.5V43.5H31.5V32.5ZM34.5 35.5V40.5H39.5V35.5H34.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.302 13H17.998V10H42.302V26.5H29.498V23.5H39.302V13Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.702 37L32.002 37L32.002 40L7.70195 40L7.70195 23.5L20.502 23.5L20.502 26.5L10.702 26.5L10.702 37Z", fill: "currentColor" })));
};

var MapFlowLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.40002 6.39996H16.6V15.6H7.40002V6.39996ZM8.60002 7.59996V14.4H15.4V7.59996H8.60002Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4 19.4H28.6V28.6H19.4V19.4ZM20.6 20.6V27.4H27.4V20.6H20.6Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.4 32.4H40.6V41.6H31.4V32.4ZM32.6 33.6V40.4H39.4V33.6H32.6Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.202 11.1H16V9.89996H40.402V24.6H28.4981V23.4H39.202V11.1Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.80195 36.9L32 36.9L32 38.1L7.60195 38.1L7.60195 23.4L19.502 23.4L19.502 24.6L8.80195 24.6L8.80195 36.9Z", fill: "currentColor" })));
};

var MapLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M18.8395 13.64V16.04H31.9395L19.0995 28.88V32.28L25.7795 25.6L31.5595 31.38L25.2795 37.66H11.2195C9.67953 37.66 8.41953 36.4 8.41953 34.86C8.41953 33.32 9.67953 32.06 11.2195 32.06C12.5995 32.06 13.7395 33.06 13.9595 34.36L16.4195 31.9V13.16C16.4195 10.3 14.0795 7.95999 11.2195 7.95999C8.35953 7.95999 6.01953 10.3 6.01953 13.16V34.84C6.01953 37.7 8.35953 40.04 11.2195 40.04H37.2195L41.9195 35.34V13.64H18.8195H18.8395ZM11.2395 10.36C12.7795 10.36 14.0395 11.62 14.0395 13.16V30.46C13.2395 29.94 12.2795 29.64 11.2395 29.64C10.1995 29.64 9.25953 29.96 8.43953 30.48V13.16C8.43953 11.62 9.69953 10.36 11.2395 10.36ZM27.4795 23.88L35.3195 16.04H39.5195V23.4L33.2395 29.68L27.4595 23.9L27.4795 23.88ZM36.2395 37.64H28.6795L39.5195 26.8V34.36L36.2195 37.66L36.2395 37.64Z", fill: "currentColor" })));
};

var MapLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M20.0002 13.34V16.34H28.7002L19.9602 25.08V29.32L24.5402 24.74L31.1602 31.36L25.1802 37.34H11.2402C9.86023 37.34 8.74023 36.22 8.74023 34.84C8.74023 33.46 9.86023 32.34 11.2402 32.34C12.5202 32.34 13.5202 33.32 13.6802 34.54L16.7402 31.48V13.16C16.7402 10.12 14.2802 7.65997 11.2402 7.65997C8.20023 7.65997 5.74023 10.12 5.74023 13.16V34.84C5.74023 37.88 8.20023 40.34 11.2402 40.34H37.3602L42.2402 35.46V13.34H19.9802H20.0002ZM11.2402 10.66C12.6202 10.66 13.7402 11.78 13.7402 13.16V29.94C12.9802 29.56 12.1402 29.34 11.2402 29.34C10.3402 29.34 9.50023 29.58 8.74023 29.96V13.16C8.74023 11.78 9.86023 10.66 11.2402 10.66ZM26.6602 22.62L32.9402 16.34H39.2402V23.28L33.2602 29.26L26.6402 22.64L26.6602 22.62ZM36.1402 37.34H29.4402L39.2602 27.52V34.22L36.1402 37.34Z", fill: "currentColor" })));
};

var MapLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M18.0001 14.2401V15.4401H31.5401L18.0001 28.9801V30.6801L24.8601 23.8201L32.4201 31.3801L25.5401 38.2601H11.2201C9.34012 38.2601 7.82012 36.7401 7.82012 34.8601C7.82012 32.9801 9.34012 31.4601 11.2201 31.4601C12.6801 31.4601 13.9201 32.4001 14.4001 33.7001L15.8201 32.2801V13.1601C15.8201 10.6201 13.7601 8.56006 11.2201 8.56006C8.68012 8.56006 6.62012 10.6201 6.62012 13.1601V34.8401C6.62012 37.3801 8.68012 39.4401 11.2201 39.4401H36.9801L41.3401 35.0801V14.2401H17.9801H18.0001ZM7.84012 13.1601C7.84012 11.2801 9.36012 9.76006 11.2401 9.76006C13.1201 9.76006 14.6401 11.2801 14.6401 13.1601V31.7401C13.8001 30.8201 12.5801 30.2401 11.2401 30.2401C9.90012 30.2401 8.68012 30.8401 7.84012 31.7601V13.1601ZM25.7001 22.9601L33.2201 15.4401H40.1401V23.6401L33.2601 30.5201L25.7001 22.9601ZM36.4801 38.2401H27.2201L40.1201 25.3401V34.6001L36.4801 38.2401Z", fill: "currentColor" })));
};

var MapFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M14.6996 31.36V11.76C14.6996 9.66002 12.9996 7.96002 10.8996 7.96002C8.79961 7.96002 7.09961 9.66002 7.09961 11.76V31.4C8.15961 30.58 9.45961 30.06 10.8996 30.06C12.3396 30.06 13.6396 30.54 14.6996 31.36Z", fill: "currentColor" }),
        React.createElement("path", { d: "M37.4202 13.64L27.1602 23.88L32.9402 29.66L41.6202 20.98V13.64H37.4202Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.4601 25.58L19.4801 31.56V28.16L34.0001 13.64H17.0801V33.88L14.6801 36.28C14.6801 34.18 12.9801 32.48 10.8801 32.48C8.78008 32.48 7.08008 34.18 7.08008 36.28C7.08008 38.06 8.32008 39.54 9.98008 39.96C10.2801 40.02 10.5801 40.06 10.9001 40.06H22.5601L31.2401 31.38L25.4601 25.6V25.58Z", fill: "currentColor" }),
        React.createElement("path", { d: "M36.92 40.02L41.62 35.32V24.38L25.96 40.02H36.92Z", fill: "currentColor" })));
};

var MenuLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M42 9.39999H6V11.8H42V9.39999Z", fill: "currentColor" }),
        React.createElement("path", { d: "M42 36H6V38.4H42V36Z", fill: "currentColor" }),
        React.createElement("path", { d: "M42 23H6V25.4H42V23Z", fill: "currentColor" })));
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

var MinusLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37 24.2H11V21.8H37V24.2Z", fill: "currentColor" })));
};

var MinusLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37 24.5H11V21.5H37V24.5Z", fill: "currentColor" })));
};

var MobileLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M16.7195 6L12.0195 10.7V43.98H31.2595L35.9595 39.28V6H16.7195ZM33.5595 38.28L30.2595 41.58H14.4195V11.7L17.7195 8.4H33.5595V38.28Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.96 36.7H19.96V39.1H25.96V36.7Z", fill: "currentColor" })));
};

var MobileLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M16.6007 5.70001L11.7207 10.58V44.28H31.3807L36.2607 39.4V5.70001H16.6007ZM33.2607 38.16L30.1407 41.28H14.7207V11.82L17.8407 8.70001H33.2607V38.16Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.9609 36.4H19.9609V39.4H25.9609V36.4Z", fill: "currentColor" })));
};

var MobileLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M16.9596 6.59998L12.5996 10.96V43.38H30.9996L35.3596 39.02V6.59998H16.9596ZM34.1596 38.52L30.5196 42.16H13.8196V11.46L17.4596 7.81998H34.1596V38.54V38.52Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.959 37.3H19.959V38.5H25.959V37.3Z", fill: "currentColor" })));
};

var MobileFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M16.7195 6L12.0195 10.7V43.98H31.2595L35.9595 39.28V6H16.7195ZM25.9595 39.1H19.9595V36.7H25.9595V39.1Z", fill: "currentColor" })));
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

var MyLocationLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 27.6C25.9882 27.6 27.6 25.9882 27.6 24C27.6 22.0118 25.9882 20.4 24 20.4C22.0118 20.4 20.4 22.0118 20.4 24C20.4 25.9882 22.0118 27.6 24 27.6ZM24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2 5V9.0473C32.5273 9.62729 38.3727 15.4727 38.9527 22.8L43 22.8V25.2H38.9527C38.3727 32.5273 32.5273 38.3727 25.2 38.9527V43H22.8V38.9527C15.4727 38.3727 9.62729 32.5273 9.0473 25.2H5V22.8L9.0473 22.8C9.62729 15.4727 15.4727 9.62729 22.8 9.0473V5H25.2ZM24 36.6C30.9588 36.6 36.6 30.9588 36.6 24C36.6 17.0412 30.9588 11.4 24 11.4C17.0412 11.4 11.4 17.0412 11.4 24C11.4 30.9588 17.0412 36.6 24 36.6Z", fill: "currentColor" })));
};

var MyLocationLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "24", cy: "24", r: "4.5", stroke: "currentColor", strokeWidth: "3" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5 5V9.07406C32.5866 9.77767 38.2223 15.4134 38.9259 22.5H43V25.5H38.9259C38.2223 32.5866 32.5866 38.2223 25.5 38.9259V43H22.5V38.9259C15.4134 38.2223 9.77767 32.5866 9.07406 25.5H5V22.5H9.07406C9.77767 15.4134 15.4134 9.77767 22.5 9.07406V5H25.5ZM24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z", fill: "currentColor" })));
};

var MyLocationLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "24", cy: "24", r: "5.4", stroke: "currentColor", strokeWidth: "1.2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.6 5V9.01178C32.4071 9.31889 38.6811 15.5929 38.9882 23.4L43 23.4V24.6H38.9882C38.6811 32.4071 32.4071 38.6811 24.6 38.9882V43H23.4V38.9882C15.5929 38.6811 9.31888 32.4071 9.01178 24.6H5V23.4L9.01178 23.4C9.31891 15.5929 15.5929 9.3189 23.4 9.01178V5H24.6ZM24 37.8C31.6215 37.8 37.8 31.6215 37.8 24C37.8 16.3785 31.6215 10.2 24 10.2C16.3785 10.2 10.2 16.3785 10.2 24C10.2 31.6215 16.3785 37.8 24 37.8Z", fill: "currentColor" })));
};

var MyLocationFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39ZM27.6 24C27.6 25.9882 25.9882 27.6 24 27.6C22.0118 27.6 20.4 25.9882 20.4 24C20.4 22.0118 22.0118 20.4 24 20.4C25.9882 20.4 27.6 22.0118 27.6 24ZM30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2 10V5H22.8V10H25.2ZM25.2 43V38H22.8V43H25.2ZM38 22.8H43V25.2H38V22.8ZM10 22.8H5V25.2H10V22.8Z", fill: "currentColor" })));
};

var NotificationLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2614 3.39999V6.46356C32.8205 7.07299 38.8302 13.3873 38.8302 21.0467V26.7471H42.3057V34.0292L38.0428 37.9911H30.8162C30.7252 41.6789 27.6772 44.6 23.9828 44.6C20.2639 44.6 17.2402 41.6554 17.1494 37.9911H5.7V30.7031L9.29337 27.4182V21.0467C9.29337 13.3876 15.3026 7.07342 22.8614 6.46362V3.39999H25.2614ZM19.5506 37.9911C19.6407 40.3137 21.573 42.2 23.9828 42.2C26.379 42.2 28.3247 40.3265 28.415 37.9911H19.5506ZM24.0618 8.81537C17.2514 8.81537 11.6934 14.3347 11.6934 21.0467V28.4759L8.1 31.7609V35.5911H37.0997L39.9057 32.9832V29.1471H36.4302V21.0467C36.4302 14.3347 30.8722 8.81537 24.0618 8.81537Z", fill: "currentColor" })));
};

var NotificationLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4614 3.20001V5.98928C33.0424 6.74035 39.0302 13.1206 39.0302 20.8467V26.247H42.5057V33.9599L38.0607 38.0911H31.0029C30.7587 41.8051 27.6389 44.7 23.8828 44.7C20.1022 44.7 17.0064 41.7825 16.7627 38.0911H5.3V30.3709L8.89337 27.0859V20.8467C8.89337 13.1209 14.8807 6.74079 22.4614 5.98935V3.20001H25.4614ZM19.7745 38.0911C20.01 40.1065 21.742 41.7 23.8828 41.7C26.0125 41.7 27.7552 40.1162 27.9911 38.0911H19.7745ZM23.9618 8.91534C17.3142 8.91534 11.8934 14.3032 11.8934 20.8467V28.4081L8.3 31.693V35.0911H36.8818L39.5057 32.6525V29.247H36.0302V20.8467C36.0302 14.3032 30.6094 8.91534 23.9618 8.91534Z", fill: "currentColor" })));
};

var NotificationLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.6327 3.39999V7.08146C32.2563 7.39991 38.402 13.6721 38.402 21.3075V27.7009H41.9289V34.2164L37.9726 37.8934H30.2717V38.3301C30.2717 41.8098 27.4214 44.6 23.9441 44.6C20.444 44.6 17.6164 41.7873 17.6164 38.3301V37.8934H6V31.3749L9.64647 28.0414V21.3075C9.64647 13.6724 15.7918 7.40034 23.415 7.0815V3.39999H24.6327ZM18.8342 37.8934V38.3301C18.8342 41.1059 21.1076 43.3823 23.9441 43.3823C26.7634 43.3823 29.054 41.1229 29.054 38.3301V37.8934H18.8342ZM24.0242 8.28651C16.7828 8.28651 10.8642 14.1541 10.8642 21.3075V28.5781L7.21773 31.9116V36.6757H37.4941L40.7112 33.6857V28.9186H37.1843V21.3075C37.1843 14.1541 31.2657 8.28651 24.0242 8.28651Z", fill: "currentColor" })));
};

var NotificationFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2614 3.39999V6.66417C32.7116 7.27314 38.6302 13.4995 38.6302 21.0467V26.947H42.1057V33.942L37.9642 37.7911H30.8183V37.8214C30.8183 41.5889 27.7338 44.6 23.9828 44.6C20.2067 44.6 17.1473 41.5641 17.1473 37.8214V37.7911H5.9V30.7913L9.49337 27.5063V21.0467C9.49337 13.4997 15.4115 7.27351 22.8614 6.66423V3.39999H25.2614ZM19.5473 37.7911V37.8214C19.5473 40.2211 21.5147 42.2 23.9828 42.2C26.4368 42.2 28.4183 40.2351 28.4183 37.8214V37.7911H19.5473Z", fill: "currentColor" })));
};

var NotificationOffLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.8144 6.44526C19.9857 6.66778 17.3618 7.68347 15.189 9.33896L16.6435 11.248C18.6969 9.68352 21.2435 8.79886 24.0001 8.79886C30.8884 8.79886 36.4887 14.4115 36.4887 21.1797V28.1857V29.3857H37.6887H40.0456V33.2516L39.4783 33.7559L41.0728 35.5497L42.0428 34.6874L42.4456 34.3294V33.7905V28.1857V26.9857H41.2456H38.8887V21.1797C38.8887 13.5406 32.9497 7.17254 25.4012 6.46429V3.3952H22.8144V6.44526ZM16.9951 38.2239H6.75446H5.55446V37.0239V31.4191V30.8776L5.96051 30.5193L9.21913 27.6441V21.1796C9.21913 18.7698 9.78314 16.4349 10.9238 14.3549L7.94007 11.3712L9.7724 9.53888L40.491 40.2575L38.6586 42.0898L34.7928 38.2239H31.005C30.9402 42.0452 27.8395 45 24 45C20.1617 45 17.0617 41.9415 16.9951 38.2239ZM7.95446 35.8239H32.3928L12.7082 16.1394C11.985 17.685 11.6191 19.3944 11.6191 21.1796V28.1856V28.7271L11.2131 29.0854L7.95446 31.9606V35.8239ZM28.4175 38.2239C28.3522 40.5393 26.4364 42.4132 24 42.4132C21.5637 42.4132 19.6478 40.5393 19.5826 38.2239H28.4175Z", fill: "currentColor" })));
};

var NotificationOffLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.46 5.99029V3.19998H22.46V5.99769C19.7298 6.27497 17.1977 7.28619 15.0858 8.89526L16.9039 11.2816C18.8828 9.77388 21.3382 8.92001 24.0001 8.92001C30.6509 8.92001 36.0555 14.3401 36.0555 20.8687V29.3065H39.5778V32.6832L39.1206 33.0896L41.1137 35.3318L42.5778 34.0304V26.3065H39.0555V20.8687C39.0555 13.1548 33.0716 6.72653 25.46 5.99029ZM38.5897 41.7534L40.7603 39.5829L10.3406 9.16324L8.17004 11.3337L10.7846 13.9482C9.62383 16.0598 9.05138 18.4285 9.05138 20.8687V27.1296L5.42236 30.3317V38.0588H16.7547C16.8922 41.8491 20.0333 44.8782 23.8855 44.8782C27.7123 44.8782 30.8785 41.8733 31.0163 38.0588H34.8951L38.5897 41.7534ZM31.8951 35.0588L13.0207 16.1843C12.3776 17.6254 12.0514 19.2114 12.0514 20.8687V28.4834L8.42236 31.6855V35.0588H31.8951ZM19.7582 38.0588H28.0127C27.8773 40.1836 26.0884 41.8782 23.8855 41.8782C21.6707 41.8782 19.8935 40.1726 19.7582 38.0588Z", fill: "currentColor" })));
};

var NotificationOffFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.9004 7.74103C20.316 7.93554 17.9044 8.82187 15.8002 10.4L14.7002 11.2L39.1002 35.6L41.2002 33.7V26.8H37.9002V21.5C37.9002 14.3329 32.3863 8.4108 25.3004 7.75946V5H22.9004V7.74103ZM19.9 36.2V37.2C19.9 39.4 21.7 41.2 24 41.2C26.3 41.2 28.1 39.4 28.1 37.2V36.2H19.9ZM17.5 36.2L8 36.2V31L11.4 28V21.5C11.4 19.5549 11.8343 17.658 12.6695 15.977L9.12988 12.4375L10.8269 10.7404L13.994 13.9075L14 13.9L36.3 36.2H36.2865L39.3231 39.2366L37.626 40.9336L32.8924 36.2H30.5V37.2C30.5 40.8 27.6 43.6 24 43.6C20.4 43.6 17.5 40.7 17.5 37.2V36.2Z", fill: "currentColor" })));
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

var PlayLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.8 3.70972L41.1082 24L11.8 44.2903L11.8 3.70972ZM14.2 8.29028L14.2 39.7097L36.8918 24L14.2 8.29028Z", fill: "currentColor" })));
};

var PlayFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.5 3.13715L41.6352 24L11.5 44.8629L11.5 3.13715Z", fill: "currentColor" })));
};

var PlusLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.8 36V10H25.2V36H22.8Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37 24.2H11V21.8H37V24.2Z", fill: "currentColor" })));
};

var PlusLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5 24.5L37 24.5L37 21.5L25.5 21.5L25.5 10L22.5 10L22.5 21.5L11 21.5L11 24.5L22.5 24.5L22.5 36L25.5 36L25.5 24.5Z", fill: "currentColor" })));
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

var ProgressCircleLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.19999 24C7.19999 14.7217 14.7216 7.20005 24 7.20005C33.2784 7.20005 40.8 14.7217 40.8 24C40.8 33.2784 33.2784 40.8 24 40.8C14.7216 40.8 7.19999 33.2784 7.19999 24ZM24 4.80005C13.3961 4.80005 4.79999 13.3962 4.79999 24C4.79999 34.6039 13.3961 43.2001 24 43.2001C34.6039 43.2001 43.2 34.6039 43.2 24C43.2 13.3962 34.6039 4.80005 24 4.80005ZM24 14.8C18.9144 14.8 14.8 18.9144 14.8 24C14.8 29.0856 18.9144 33.2001 24 33.2001C29.0856 33.2001 33.2 29.0856 33.2 24C33.2 23.6736 33.1828 23.3505 33.1491 23.0319L30.7624 23.284C30.7872 23.5192 30.8 23.7581 30.8 24C30.8 27.7602 27.7601 30.8 24 30.8C20.2399 30.8 17.2 27.7602 17.2 24C17.2 20.2399 20.2399 17.2 24 17.2V14.8Z", fill: "currentColor" })));
};

var ProgressCircleLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 33.1127 33.1127 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24ZM24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM24 14.5C18.7487 14.5 14.5 18.7487 14.5 24C14.5 29.2513 18.7487 33.5 24 33.5C29.2513 33.5 33.5 29.2513 33.5 24C33.5 23.663 33.4822 23.3294 33.4475 23.0004L30.4641 23.3154C30.4878 23.5402 30.5 23.7686 30.5 24C30.5 27.5944 27.5944 30.5 24 30.5C20.4056 30.5 17.5 27.5944 17.5 24C17.5 20.4056 20.4056 17.5 24 17.5V14.5Z", fill: "currentColor" })));
};

var ProgressCircleLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 5.29032C13.6669 5.29032 5.29032 13.6669 5.29032 24C5.29032 34.3331 13.6669 42.7097 24 42.7097C34.3331 42.7097 42.7097 34.3331 42.7097 24C42.7097 13.6669 34.3331 5.29032 24 5.29032ZM4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3 23.945C15.3 19.166 19.1659 15.3 23.945 15.3V16.59C19.8784 16.59 16.59 19.8784 16.59 23.945C16.59 28.0117 19.8784 31.3 23.945 31.3C28.0116 31.3 31.3 28.0117 31.3 23.945C31.3 23.6835 31.2862 23.4252 31.2593 23.1707L32.5422 23.0352C32.5738 23.3345 32.59 23.6381 32.59 23.945C32.59 28.7241 28.7241 32.59 23.945 32.59C19.1659 32.59 15.3 28.7241 15.3 23.945Z", fill: "currentColor" })));
};

var ProgressCircleFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 4.80005C13.3961 4.80005 4.79999 13.3962 4.79999 24C4.79999 34.6039 13.3961 43.2001 24 43.2001C34.6039 43.2001 43.2 34.6039 43.2 24C43.2 13.3962 34.6039 4.80005 24 4.80005ZM24 14.8C18.9144 14.8 14.8 18.9144 14.8 24C14.8 29.0856 18.9144 33.2001 24 33.2001C29.0856 33.2001 33.2 29.0856 33.2 24C33.2 23.6736 33.1828 23.3505 33.1491 23.0319L30.7624 23.284C30.7872 23.5192 30.8 23.7581 30.8 24C30.8 27.7602 27.7601 30.8 24 30.8C20.2399 30.8 17.2 27.7602 17.2 24C17.2 20.2399 20.2399 17.2 24 17.2V14.8Z", fill: "currentColor" })));
};

var ProgressLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.8 24C4.8 13.3859 13.3858 4.80005 24 4.80005V7.20005C14.7113 7.20005 7.2 14.7114 7.2 24C7.2 33.2887 14.7113 40.8 24 40.8C33.2887 40.8 40.8 33.2887 40.8 24C40.8 23.4028 40.7685 22.8126 40.7071 22.2313L43.0938 21.9793C43.164 22.644 43.2 23.3183 43.2 24C43.2 34.6142 34.6142 43.2001 24 43.2001C13.3858 43.2001 4.8 34.6142 4.8 24Z", fill: "currentColor" })));
};

var ProgressLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.5 24C4.5 13.2201 13.2201 4.5 24 4.5V7.5C14.877 7.5 7.5 14.877 7.5 24C7.5 33.123 14.877 40.5 24 40.5C33.123 40.5 40.5 33.123 40.5 24C40.5 23.4133 40.469 22.8337 40.4087 22.2628L43.3922 21.9477C43.4635 22.6229 43.5 23.3076 43.5 24C43.5 34.7799 34.7799 43.5 24 43.5C13.2201 43.5 4.5 34.7799 4.5 24Z", fill: "currentColor" })));
};

var ProgressLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.355 24C5.355 13.6923 13.6923 5.35498 24 5.35498V6.64498C14.4048 6.64498 6.645 14.4048 6.645 24C6.645 33.5952 14.4048 41.355 24 41.355C33.5952 41.355 41.355 33.5952 41.355 24C41.355 23.3831 41.3224 22.7736 41.259 22.173L42.5419 22.0375C42.6101 22.6829 42.645 23.3377 42.645 24C42.645 34.3076 34.3077 42.645 24 42.645C13.6923 42.645 5.355 34.3076 5.355 24Z", fill: "currentColor" })));
};

var RefreshLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.5135 14.0322C24.2127 14.0097 23.9081 13.9981 23.5996 13.9981C16.8019 13.9981 11.3052 19.4948 11.3052 26.2925C11.3052 33.0902 16.8019 38.5869 23.5996 38.5869C30.3973 38.5869 35.894 33.0902 35.894 26.2925C35.894 23.4656 34.9289 20.8509 33.3138 18.7793L35.1317 17.362C37.0512 19.8239 38.1992 22.9338 38.1992 26.2925C38.1992 34.3634 31.6704 40.8921 23.5996 40.8921C15.5288 40.8921 9 34.3634 9 26.2925C9 18.2217 15.5288 11.6929 23.5996 11.6929C23.9469 11.6929 24.2902 11.7053 24.6292 11.7293L21.2683 8.35581L22.6292 7L27.7583 12.1483L28.4349 12.8275L27.757 13.5054L22.6279 18.6344L21.2696 17.2761L24.5135 14.0322Z", fill: "currentColor" })));
};

var RefreshLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9806 13.7859C17.0783 13.7967 11.5008 19.381 11.5008 26.2858C11.5008 33.1974 17.0892 38.7859 24.0008 38.7859C30.9124 38.7859 36.5008 33.1974 36.5008 26.2858C36.5008 23.4119 35.5198 20.7541 33.8778 18.6481L36.2437 16.8036C38.2818 19.4176 39.5008 22.7198 39.5008 26.2858C39.5008 34.8543 32.5692 41.7859 24.0008 41.7859C15.4324 41.7859 8.50079 34.8543 8.50079 26.2858C8.50079 17.7174 15.4324 10.7858 24.0008 10.7858C24.0107 10.7858 24.0205 10.7859 24.0304 10.7859L21.2194 7.9644L23.3447 5.84705L28.6847 11.207L29.7414 12.2677L28.6827 13.3264L23.3427 18.6664L21.2214 16.5451L23.9806 13.7859Z", fill: "currentColor" })));
};

var RefreshLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5758 13.1806C25.0616 13.1184 24.5366 13.0859 24.0007 13.0859C16.7026 13.0859 10.8007 18.9877 10.8007 26.2859C10.8007 33.5841 16.7026 39.4859 24.0007 39.4859C31.2989 39.4859 37.2007 33.5841 37.2007 26.2859C37.2007 23.2504 36.1642 20.4423 34.4298 18.2178L35.6916 17.234C37.6373 19.7295 38.8007 22.8813 38.8007 26.2859C38.8007 34.4677 32.1826 41.0859 24.0007 41.0859C15.8189 41.0859 9.20074 34.4677 9.20074 26.2859C9.20074 18.1041 15.8189 11.4859 24.0007 11.4859C24.6233 11.4859 25.2328 11.525 25.8291 11.5997L21.7153 7.47038L22.8487 6.34113L28.1887 11.7011L28.7523 12.2668L28.1877 12.8314L22.8477 18.1714L21.7163 17.0401L25.5758 13.1806Z", fill: "currentColor" })));
};

var RouteLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.4444 21.1593L34.1571 22.8406L42.998 13.8349L34.1412 5.14499L32.4604 6.85811L38.5124 12.7961H33.0009C27.3676 12.7961 22.8009 17.3628 22.8009 22.9961V28.4231C20.9298 26.205 18.1299 24.7961 15.0009 24.7961H9.56344L15.5556 18.6922L13.8429 17.0109L5.00201 26.0167L13.8588 34.7065L15.5396 32.9934L9.63094 27.1961H15.0009C19.3087 27.1961 22.8009 30.6883 22.8009 34.9961L22.8009 42.9961H25.2009V22.9961C25.2009 18.6883 28.6931 15.1961 33.0009 15.1961H38.2985L32.4444 21.1593Z", fill: "currentColor" })));
};

var RouteLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2304 20.9492L34.3712 23.0508L43.4223 13.8309L34.3513 4.93083L32.2503 7.07223L37.7783 12.4961H33.0009C27.2019 12.4961 22.5009 17.1971 22.5009 22.9961V27.6476C20.5951 25.7028 17.9389 24.4961 15.0009 24.4961H10.2783L15.7696 18.9023L13.6288 16.8007L4.5777 26.0206L13.6487 34.9207L15.7497 32.7793L10.3651 27.4961H15.0009C19.143 27.4961 22.5009 30.854 22.5009 34.9961V42.9961H25.5009V34.9961V22.9961C25.5009 18.854 28.8587 15.4961 33.0009 15.4961H37.5836L32.2304 20.9492Z", fill: "currentColor" })));
};

var RouteLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.8726 21.5797L33.7289 22.4203L42.1494 13.8428L33.721 5.5733L32.8806 6.42987L39.9806 13.3961H33.0009C27.699 13.3961 23.4009 17.6942 23.4009 22.9961V30.3449C21.7632 27.3936 18.6153 25.3961 15.0009 25.3961H8.13365L15.1274 18.2719L14.2711 17.4313L5.85062 26.0088L14.279 34.2783L15.1194 33.4218L8.16268 26.5961H15.0009C19.6401 26.5961 23.4009 30.3569 23.4009 34.9961L23.4009 42.9961H24.6009V22.9961C24.6009 18.3569 28.3617 14.5961 33.0009 14.5961H39.7283L32.8726 21.5797Z", fill: "currentColor" })));
};

var SearchLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.9986 30.0002L39.9984 42L41.6953 40.3028L29.6955 28.303L27.9986 30.0002Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.599 19.9992C31.599 26.4057 26.4055 31.5992 19.999 31.5992C13.5925 31.5992 8.39902 26.4057 8.39902 19.9992C8.39902 13.5927 13.5925 8.39924 19.999 8.39924C26.4055 8.39924 31.599 13.5927 31.599 19.9992ZM33.999 19.9992C33.999 27.7312 27.731 33.9992 19.999 33.9992C12.267 33.9992 5.99902 27.7312 5.99902 19.9992C5.99902 12.2673 12.267 5.99924 19.999 5.99924C27.731 5.99924 33.999 12.2672 33.999 19.9992Z", fill: "currentColor" })));
};

var SelectAreaLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.79999 9.65001C4.79999 7.19234 6.79232 5.20001 9.24999 5.20001C11.7077 5.20001 13.7 7.19234 13.7 9.65001C13.7 12.1077 11.7077 14.1 9.24999 14.1C6.79232 14.1 4.79999 12.1077 4.79999 9.65001ZM9.24999 7.60001C8.1178 7.60001 7.19999 8.51783 7.19999 9.65001C7.19999 10.7822 8.1178 11.7 9.24999 11.7C10.3822 11.7 11.3 10.7822 11.3 9.65001C11.3 8.51783 10.3822 7.60001 9.24999 7.60001Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.79999 35.25C4.79999 32.7923 6.79232 30.8 9.24999 30.8C11.7077 30.8 13.7 32.7923 13.7 35.25C13.7 37.7077 11.7077 39.7 9.24999 39.7C6.79232 39.7 4.79999 37.7077 4.79999 35.25ZM9.24999 33.2C8.1178 33.2 7.19999 34.1178 7.19999 35.25C7.19999 36.3822 8.1178 37.3 9.24999 37.3C10.3822 37.3 11.3 36.3822 11.3 35.25C11.3 34.1178 10.3822 33.2 9.24999 33.2Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.8 9.65001C29.8 7.19234 31.7923 5.20001 34.25 5.20001C36.7077 5.20001 38.7 7.19234 38.7 9.65001C38.7 12.1077 36.7077 14.1 34.25 14.1C31.7923 14.1 29.8 12.1077 29.8 9.65001ZM34.25 7.60001C33.1178 7.60001 32.2 8.51783 32.2 9.65001C32.2 10.7822 33.1178 11.7 34.25 11.7C35.3822 11.7 36.3 10.7822 36.3 9.65001C36.3 8.51783 35.3822 7.60001 34.25 7.60001Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.5 11.1031L12.5 11.1031V8.70312L30.5 8.70312V11.1031Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 36.1029H13V33.7029H23V36.1029Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.30074 31.403L8.30074 13.403L10.7007 13.403L10.7007 31.403L8.30074 31.403Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3 23.403L33.3 13.403L35.7 13.403L35.7 23.403L33.3 23.403Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.1253 22.538L43.7716 29.4859L37.7255 33.417L42.1209 37.8124L37.4129 42.5204L33.0728 38.1803L29.2317 44.1733L22.1253 22.538ZM25.8747 26.262L29.936 38.6267L32.6613 34.3747L37.4129 39.1263L38.7268 37.8124L33.9339 33.0195L38.2284 30.2273L25.8747 26.262Z", fill: "currentColor" })));
};

var SelectAreaLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.90002 9.65002C4.90002 7.02667 7.02667 4.90002 9.65002 4.90002C12.2734 4.90002 14.4 7.02667 14.4 9.65002C14.4 12.2734 12.2734 14.4 9.65002 14.4C7.02667 14.4 4.90002 12.2734 4.90002 9.65002ZM9.65002 7.90002C8.68353 7.90002 7.90002 8.68353 7.90002 9.65002C7.90002 10.6165 8.68353 11.4 9.65002 11.4C10.6165 11.4 11.4 10.6165 11.4 9.65002C11.4 8.68353 10.6165 7.90002 9.65002 7.90002Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.90002 35.25C4.90002 32.6266 7.02667 30.5 9.65002 30.5C12.2734 30.5 14.4 32.6266 14.4 35.25C14.4 37.8734 12.2734 40 9.65002 40C7.02667 40 4.90002 37.8734 4.90002 35.25ZM9.65002 33.5C8.68353 33.5 7.90002 34.2835 7.90002 35.25C7.90002 36.2165 8.68353 37 9.65002 37C10.6165 37 11.4 36.2165 11.4 35.25C11.4 34.2835 10.6165 33.5 9.65002 33.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.5 9.65002C29.5 7.02667 31.6266 4.90002 34.25 4.90002C36.8734 4.90002 39 7.02667 39 9.65002C39 12.2734 36.8734 14.4 34.25 14.4C31.6266 14.4 29.5 12.2734 29.5 9.65002ZM34.25 7.90002C33.2835 7.90002 32.5 8.68353 32.5 9.65002C32.5 10.6165 33.2835 11.4 34.25 11.4C35.2165 11.4 36 10.6165 36 9.65002C36 8.68353 35.2165 7.90002 34.25 7.90002Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.5 11.1031L12.5 11.1031V8.10315L30.5 8.10315V11.1031Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 36.403H13V33.403H23V36.403Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.30078 31.403L8.30078 13.403L11.3008 13.403L11.3008 31.403L8.30078 31.403Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33 23.403L33 13.403L36 13.403L36 23.403L33 23.403Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.6567 22.0725L44.4645 29.3933L38.4969 33.2733L42.7906 37.567L37.1676 43.1901L32.9326 38.9551L29.1437 44.8666L21.6567 22.0725ZM26.3434 26.7276L30.0241 37.9335L32.4182 34.198L37.1676 38.9474L38.548 37.567L33.7574 32.7765L37.5355 30.32L26.3434 26.7276Z", fill: "currentColor" })));
};

var SelectAreaLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 9.64999C5 7.52369 6.7237 5.79999 8.85 5.79999C10.9763 5.79999 12.7 7.52369 12.7 9.64999C12.7 11.7763 10.9763 13.5 8.85 13.5C6.7237 13.5 5 11.7763 5 9.64999ZM8.85 6.99999C7.38645 6.99999 6.2 8.18643 6.2 9.64999C6.2 11.1135 7.38645 12.3 8.85 12.3C10.3136 12.3 11.5 11.1135 11.5 9.64999C11.5 8.18643 10.3136 6.99999 8.85 6.99999Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.99988 35.25C4.99988 33.1237 6.72358 31.4 8.84988 31.4C10.9762 31.4 12.6999 33.1237 12.6999 35.25C12.6999 37.3763 10.9762 39.1 8.84988 39.1C6.72358 39.1 4.99988 37.3763 4.99988 35.25ZM8.84988 32.6C7.38632 32.6 6.19988 33.7864 6.19988 35.25C6.19988 36.7135 7.38632 37.9 8.84988 37.9C10.3134 37.9 11.4999 36.7135 11.4999 35.25C11.4999 33.7864 10.3134 32.6 8.84988 32.6Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.4 9.64999C30.4 7.52369 32.1237 5.79999 34.25 5.79999C36.3763 5.79999 38.1 7.52369 38.1 9.64999C38.1 11.7763 36.3763 13.5 34.25 13.5C32.1237 13.5 30.4 11.7763 30.4 9.64999ZM34.25 6.99999C32.7864 6.99999 31.6 8.18643 31.6 9.64999C31.6 11.1135 32.7864 12.3 34.25 12.3C35.7135 12.3 36.9 11.1135 36.9 9.64999C36.9 8.18643 35.7135 6.99999 34.25 6.99999Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.9999 10.4L11.9999 10.4V9.19995L30.9999 9.19995V10.4Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5999 35.5029H11.9999V34.3029H22.5999V35.5029Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.30073 32.0029L8.30073 13.4029L9.50073 13.4029L9.50073 32.0029L8.30073 32.0029Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.9 23.4029L33.9 13.4029L35.1 13.4029L35.1 23.4029L33.9 23.4029Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.0626 23.469L42.3858 29.6713L36.7776 33.3176L41.2724 37.8124L37.4129 41.6719L32.9699 37.2289L29.4077 42.7866L23.0626 23.469ZM24.9373 25.331L29.7599 40.0134L32.7641 35.3261L37.4129 39.9749L39.5753 37.8124L34.8818 33.1189L39.6142 30.042L24.9373 25.331Z", fill: "currentColor" })));
};

var SelectAreaFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.5 30.0171L24 24.4L29.7481 41.9L33.1278 36.6268L37.8074 41.3064L40.9069 38.2068L36.1776 33.4776L41.5 30.0171Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.24999 5.20001C6.79232 5.20001 4.79999 7.19234 4.79999 9.65001C4.79999 11.6737 6.15086 13.3819 8.00006 13.9221V30.9779C6.15086 31.5181 4.79999 33.2263 4.79999 35.25C4.79999 37.7077 6.79232 39.7 9.24999 39.7C11.452 39.7 13.2805 38.1006 13.637 36.0001H25.0736L19.9383 20.3657L35.4001 25.3285V13.95C37.3003 13.443 38.7 11.71 38.7 9.65001C38.7 7.19234 36.7077 5.20001 34.25 5.20001C31.7923 5.20001 29.8 7.19234 29.8 9.65001C29.8 9.76782 29.8046 9.88456 29.8136 10.0001H13.6864C13.6954 9.88456 13.7 9.76782 13.7 9.65001C13.7 7.19234 11.7077 5.20001 9.24999 5.20001ZM7.19999 9.65001C7.19999 8.51783 8.1178 7.60001 9.24999 7.60001C10.3822 7.60001 11.3 8.51783 11.3 9.65001C11.3 10.7822 10.3822 11.7 9.24999 11.7C8.1178 11.7 7.19999 10.7822 7.19999 9.65001ZM9.24999 33.2C8.1178 33.2 7.19999 34.1178 7.19999 35.25C7.19999 36.3822 8.1178 37.3 9.24999 37.3C10.3822 37.3 11.3 36.3822 11.3 35.25C11.3 34.1178 10.3822 33.2 9.24999 33.2ZM32.2 9.65001C32.2 8.51783 33.1178 7.60001 34.25 7.60001C35.3822 7.60001 36.3 8.51783 36.3 9.65001C36.3 10.7822 35.3822 11.7 34.25 11.7C33.1178 11.7 32.2 10.7822 32.2 9.65001Z", fill: "currentColor" })));
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

var SmartGlassesLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.83 13.0262C19.0465 9.63808 28.9531 9.63751 36.1911 13.0267L37.2089 10.8532C29.3269 7.16241 18.6735 7.16184 10.81 10.8537L11.83 13.0262ZM17.4474 17.1473C21.3258 15.3374 26.6542 15.3374 30.5325 17.1473L31.5474 14.9725C27.0258 12.8624 20.9542 12.8624 16.4325 14.9725L17.4474 17.1473ZM25.4607 21.0912C24.5977 20.6963 23.4023 20.6963 22.5394 21.0912L21.5407 18.9088C23.0378 18.2237 24.9623 18.2237 26.4594 18.9088L25.4607 21.0912ZM3.98 22.6201H43.98V32.6401C43.98 36.7229 40.6827 40.0201 36.6 40.0201H32.5C31.0931 40.0201 29.7564 39.4479 28.7626 38.4796L28.7514 38.4687L24.3715 34.0886C24.1601 33.8773 23.8399 33.8773 23.6285 34.0886L19.2485 38.4686C18.2656 39.4516 16.9212 40.0201 15.5 40.0201H11.36C7.27725 40.0201 3.98 36.7229 3.98 32.6401V22.6201ZM6.38 25.0201V27.0601H41.58V25.0201H6.38ZM6.38 32.6401V29.4601H41.58V32.6401C41.58 35.3974 39.3573 37.6201 36.6 37.6201H32.5C31.7492 37.6201 31.0081 37.3142 30.4426 36.7656L26.0685 32.3916C24.9199 31.243 23.0801 31.243 21.9315 32.3916L17.5515 36.7716C17.0144 37.3087 16.2787 37.6201 15.5 37.6201H11.36C8.60274 37.6201 6.38 35.3974 6.38 32.6401Z", fill: "currentColor" })));
};

var SmartGlassesLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9575 13.2977C19.0931 9.94756 28.9064 9.94685 36.0639 13.2984L37.3361 10.5815C29.3736 6.85298 18.6269 6.85226 10.6825 10.5821L11.9575 13.2977ZM3.68001 22.3201H44.28V32.6401C44.28 36.8885 40.8484 40.3201 36.6 40.3201H32.5C31.0114 40.3201 29.6005 39.7148 28.5532 38.6944L28.5393 38.6808L24.1593 34.3007C24.1066 34.248 24.0507 34.2301 24 34.2301C23.9493 34.2301 23.8934 34.248 23.8407 34.3007L19.4607 38.6807C18.422 39.7194 17.0016 40.3201 15.5 40.3201H11.36C7.11158 40.3201 3.68001 36.8885 3.68001 32.6401V22.3201ZM6.68001 25.3201V26.76H41.28V25.3201H6.68001ZM6.68001 32.6401V29.76H41.28V32.6401C41.28 35.2316 39.1916 37.3201 36.6 37.3201H32.5C31.8314 37.3201 31.165 37.0475 30.653 36.5518L26.2807 32.1794C25.0149 30.9136 22.9851 30.9136 21.7193 32.1794L17.3393 36.5594C16.858 37.0408 16.1984 37.3201 15.5 37.3201H11.36C8.76844 37.3201 6.68001 35.2316 6.68001 32.6401ZM30.4057 17.1391C26.6078 15.3667 21.3723 15.3667 17.5743 17.1391L16.3057 14.4205C20.9078 12.2729 27.0723 12.2729 31.6743 14.4205L30.4057 17.1391ZM22.6642 20.9438C23.4478 20.5852 24.5521 20.5852 25.3358 20.9438L26.5842 18.2158C25.0078 17.4945 22.9921 17.4945 21.4158 18.2158L22.6642 20.9438Z", fill: "currentColor" })));
};

var SmartGlassesLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.575 12.4831C18.9532 9.019 29.0466 9.01871 36.4456 12.4833L36.9544 11.3966C29.2334 7.78116 18.7668 7.78088 11.065 11.3968L11.575 12.4831ZM4.58002 23.2198H43.38V32.6398C43.38 36.3912 40.3514 39.4198 36.6 39.4198H32.5C31.2566 39.4198 30.0682 38.9137 29.1813 38.0496L29.1757 38.0441L24.7958 33.6641C24.3501 33.2184 23.65 33.2184 23.2043 33.6641L18.8243 38.0441C17.9528 38.9156 16.7606 39.4198 15.5 39.4198H11.36C7.60865 39.4198 4.58002 36.3912 4.58002 32.6398V23.2198ZM5.78002 24.4198V27.6598H42.18V24.4198H5.78002ZM5.78002 32.6398V28.8598H42.18V32.6398C42.18 35.7285 39.6886 38.2198 36.6 38.2198H32.5C31.5847 38.2198 30.6942 37.8469 30.0214 37.1927L25.6443 32.8156C24.73 31.9013 23.2701 31.9013 22.3558 32.8156L17.9758 37.1956C17.3272 37.8441 16.4394 38.2198 15.5 38.2198H11.36C8.27139 38.2198 5.78002 35.7285 5.78002 32.6398ZM30.7863 16.6036C26.7471 14.7186 21.2329 14.7186 17.1937 16.6036L16.6863 15.5162C21.0471 13.4811 26.9329 13.4811 31.2937 15.5162L30.7863 16.6036ZM22.2897 20.5456C23.3111 20.0781 24.6889 20.0781 25.7103 20.5456L26.2097 19.4544C24.8711 18.8419 23.1289 18.8419 21.7903 19.4544L22.2897 20.5456Z", fill: "currentColor" })));
};

var SortLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.9323 18.824L23.1999 20.4851L13.4661 10.3338L3.7323 20.4851L2 18.824L13.4661 6.86618L24.9323 18.824Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2862 40.9684L12.2862 10.1906L14.6862 10.1906L14.6862 40.9684L12.2862 40.9684Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.0677 28.9759L24.8001 27.3148L34.5339 37.4661L44.2677 27.3148L46 28.9759L34.5339 40.9338L23.0677 28.9759Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.7141 6.83155L35.7141 37.6093L33.3141 37.6093L33.3141 6.83155L35.7141 6.83155Z", fill: "currentColor" })));
};

var SortLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0661 18.2848L23.1999 19.1153L13.033 8.51237L2.86614 19.1153L1.99999 18.2848L13.033 6.77854L24.0661 18.2848Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.433 40.7778L12.433 8.35535L13.633 8.35535L13.633 40.7778L12.433 40.7778Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9339 29.3153L24.8 28.4848L34.9669 39.0877L45.1338 28.4848L46 29.3153L34.9669 40.8216L23.9339 29.3153Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.5671 6.83162L35.5672 39.4502L34.3672 39.4502L34.3671 6.83163L35.5671 6.83162Z", fill: "currentColor" })));
};

var SortLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.3653 18.6164L23.2 20.6927L13.6827 10.7672L4.16539 20.6927L2.00002 18.6164L13.6827 6.43267L25.3653 18.6164Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2027 40.9684L12.2027 10.1907L15.2027 10.1907L15.2027 40.9684L12.2027 40.9684Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.6347 28.9836L24.8001 26.9072L34.3174 36.8327L43.8346 26.9072L46 28.9836L34.3173 41.1672L22.6347 28.9836Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.8374 6.63148L35.8374 37.4092L32.8374 37.4092L32.8374 6.63148L35.8374 6.63148Z", fill: "currentColor" })));
};

var StarLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857ZM24.0004 7.7115L19.2133 17.4112L8.50907 18.9666L16.2547 26.5168L14.4262 37.1777L24.0004 32.1443L33.5746 37.1777L31.7461 26.5168L39.4917 18.9666L28.7875 17.4112L24.0004 7.7115Z", fill: "currentColor" })));
};

var StarFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857Z", fill: "currentColor" })));
};

var SyncLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.6615 11.2657C25.7109 6.70433 16.1658 8.65311 11.5999 15.6106L11.5866 15.6308L11.5742 15.6516C11.4003 15.9414 11.2417 16.2165 11.0942 16.4853L10.1857 11.6831L8.22058 12.0549L9.80647 20.4375L18.189 18.8516L17.8173 16.8864L13.1254 17.7741C13.2741 17.4975 13.4365 17.2131 13.6196 16.9074C17.4582 11.0823 25.4988 9.43866 31.3412 13.2699C35.2077 15.8492 37.2032 19.8747 37.2032 23.869H39.6032C39.6032 19.0645 37.1999 14.2913 32.6688 11.2705L32.6688 11.2705L32.6615 11.2657ZM15.7344 38.1984C11.2033 35.1777 8.80005 30.4045 8.80005 25.6H11.2C11.2 29.5943 13.1956 33.6198 17.0621 36.1991C22.9111 40.0346 30.9634 38.3829 34.7968 32.5416L34.8175 32.5101L34.84 32.48C35.0578 32.1897 35.2471 31.8609 35.4269 31.4937L30.4145 32.5774L29.9918 30.6226L38.3692 28.8113L40.1806 37.1887L38.2257 37.6114L37.2617 33.1529C37.1159 33.4065 36.9573 33.6538 36.7833 33.8888C32.2096 40.8215 22.6822 42.7579 15.7417 38.2032L15.7344 38.1985L15.7344 38.1984Z", fill: "currentColor" })));
};

var SyncLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8355 18.1309L17.7242 17.3952L18.2819 20.3429L9.40803 22.0217L7.72919 13.1479L10.6769 12.5902L11.3936 16.3785C16.0682 9.33665 25.7603 7.37804 32.8261 12.015L32.8351 12.0209L32.8351 12.021C37.449 15.0969 39.9031 19.9634 39.9031 24.8691H36.9031C36.9031 20.9762 34.9587 17.0443 31.1756 14.5202C25.4726 10.7812 17.6218 12.3857 13.8735 18.0672L13.8355 18.1309ZM15.5679 39.4481C10.954 36.3721 8.49994 31.5056 8.49994 26.6H11.4999C11.4999 30.4928 13.4443 34.4247 17.2274 36.9489C22.9387 40.6933 30.8042 39.0786 34.5459 33.377L34.5717 33.3376L34.5999 33.3C34.6335 33.2552 34.6664 33.2095 34.6986 33.1627L30.52 34.0662L29.886 31.1339L38.7522 29.2169L40.6692 38.083L37.7369 38.717L36.9667 35.1546C32.2759 42.1442 22.6213 44.0769 15.577 39.454L15.5679 39.4481L15.5679 39.4481Z", fill: "currentColor" })));
};

var SyncLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.3323 11.7674C25.657 7.38668 16.4844 9.26107 12.1015 15.9398L12.1011 15.9395L12.0886 15.9603C11.6389 16.7099 11.2963 17.3545 10.9832 18.0503L9.79267 11.7575L8.61359 11.9806L10.1251 19.9701L18.1147 18.4586L17.8916 17.2795L12.1592 18.364C12.4286 17.7835 12.7268 17.2297 13.1114 16.5881C17.1307 10.4757 25.5509 8.75388 31.6721 12.7694C35.7054 15.4591 37.8031 19.6718 37.8031 23.869H39.0031C39.0031 19.2668 36.7015 14.6801 32.336 11.7698L32.336 11.7698L32.3323 11.7674ZM16.0671 37.6991C11.7016 34.7888 9.39996 30.2022 9.39996 25.5999H10.6C10.6 29.797 12.6977 34.0098 16.731 36.6995C22.8555 40.7173 31.2817 38.9914 35.2983 32.8707L35.3087 32.855L35.32 32.8399C35.7346 32.2871 36.0497 31.62 36.3564 30.8834L30.33 32.1864L30.0764 31.0135L38.0628 29.2867L39.7896 37.2731L38.6167 37.5267L37.3424 31.6331C37.0538 32.3008 36.7221 32.9665 36.2914 33.5446C31.9045 40.2107 22.741 42.0788 16.0708 37.7015L16.0671 37.6991Z", fill: "currentColor" })));
};

var TableViewLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.0287 5.97838H10.2667L5.98511 10.1742V42.022H37.7756L42.0287 37.8147V5.97838ZM8.42874 11.2009L11.2644 8.42201H39.5851V17H25.1992H22.7992H8.42874V11.2009ZM22.7992 19.4H8.42874V28.2998H22.7992V19.4ZM22.7992 30.6998H8.42874V39.5784H22.7992V30.6998ZM25.1992 39.5784V30.6998H39.5851V36.7947L36.7711 39.5784H25.1992ZM25.1992 28.2998V19.4H39.5851V28.2998H25.1992Z", fill: "currentColor" })));
};

var TableViewLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42 6H10.2496L6 10.289V17V20V28V31V42H22.5H25.5H37.7599L42 37.7796V31V28V20V17V6ZM25.5 39H36.5214L39 36.5329V31H25.5V39ZM25.5 28H39V20H25.5V28ZM22.5 20V28H9V20H22.5ZM22.5 17H25.5H39V9H11.5004L9 11.5235V17H22.5ZM22.5 31V39H9V31H22.5Z", fill: "currentColor" })));
};

var TableViewLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41.9995 5.9996H10.2535L5.99951 10.2025V41.9996H23.3996V42H24.5996V41.9996H37.768L41.9995 38.0416V30.0994H42V28.8994H41.9995V18.2H42V17H41.9995V5.9996ZM24.5996 40.7996H37.2943L40.7995 37.5209V30.0994H24.5996V40.7996ZM24.5996 28.8994H40.7995V18.2H24.5996V28.8994ZM23.3996 18.2V28.8994H7.19951V18.2H23.3996ZM23.3996 17H24.5996H40.7995V7.1996H10.7463L7.19951 10.7038V17H23.3996ZM23.3996 30.0994V40.7996H7.19951V30.0994H23.3996Z", fill: "currentColor" })));
};

var TableViewFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42 6H10.25L6 10.0078V18H42V6ZM22.5 21.5H6V30H22.5V21.5ZM6 33.5H22.5V42H6V33.5ZM42 21.5H25.5V30H42V21.5ZM25.5 33.5H42V38L37.7812 42H25.5V33.5Z", fill: "currentColor" })));
};

var TerminalLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.4 12.4941V38.6H35.5059L38.6 35.5059V9.4H12.4941L9.4 12.4941ZM11.5 7L7 11.5V41H36.5L41 36.5V7H11.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.803 23.5L15.1515 18.8485L16.8485 17.1515L23.1971 23.5L16.8485 29.8485L15.1515 28.1515L19.803 23.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 31.2H24V28.8H32V31.2Z", fill: "currentColor" })));
};

var TerminalLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 12.7426V38H35.2574L38 35.2574V10H12.7426L10 12.7426ZM11.5 7L7 11.5V41H36.5L41 36.5V7H11.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.3787 23.5L14.9393 19.0607L17.0607 16.9393L23.6213 23.5L17.0607 30.0607L14.9393 27.9393L19.3787 23.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 31.5H24V28.5H32V31.5Z", fill: "currentColor" })));
};

var TerminalLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.2 11.9971V39.8H36.0029L39.8 36.0029V8.2H11.9971L8.2 11.9971ZM11.5 7L7 11.5V41H36.5L41 36.5V7H11.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6515 23.5L15.5757 18.4243L16.4243 17.5757L22.3485 23.5L16.4243 29.4243L15.5757 28.5757L20.6515 23.5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32 30.6H24V29.4H32V30.6Z", fill: "currentColor" })));
};

var TerminalFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.5 7L7 11.5V41H36.5L41 36.5V7H11.5ZM19.8028 23.5L15.1514 18.8485L16.8484 17.1515L23.197 23.5L16.8484 29.8485L15.1514 28.1515L19.8028 23.5ZM24 31.2H32V28.8H24V31.2Z", fill: "currentColor" })));
};

var ThreeDLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M17.5796 8.06L8.05957 17.56V39.94H30.4196L39.9396 30.42V8.06H17.5796ZM35.9396 28.6V31H35.9596L31.0996 35.86V31H31.9196V28.6H31.0996V18.58L37.5196 12.16V28.6H35.9196H35.9396ZM10.4596 19.28H28.7196V37.54H10.4596V19.28ZM19.2796 11.66V10.46H35.8396L29.4196 16.88H19.2596V15.66H16.8596V16.88H12.1396L17.3596 11.66H19.2596H19.2796Z", fill: "currentColor" }),
        React.createElement("path", { d: "M19.2799 28.46H16.8799V30.86H19.2799V28.46Z", fill: "currentColor" }),
        React.createElement("path", { d: "M19.2799 22.06H16.8799V24.46H19.2799V22.06Z", fill: "currentColor" }),
        React.createElement("path", { d: "M13.8876 32.4087L12.1914 34.1067L13.8893 35.8029L15.5855 34.1049L13.8876 32.4087Z", fill: "currentColor" }),
        React.createElement("path", { d: "M25.5396 28.6H23.1396V31H25.5396V28.6Z", fill: "currentColor" })));
};

var ThreeDLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M17.4598 7.76001L7.75977 17.44V40.24H30.5398L40.2398 30.54V7.76001H17.4598ZM36.4798 28.3V30.08L31.4398 35.12V31.3H32.8798V28.3H31.4398V18.7L37.2598 12.88V28.28H36.4798V28.3ZM10.7798 19.58H28.4398V37.24H10.7598V19.58H10.7798ZM18.7198 10.76H35.1398L29.3198 16.58H19.5998V14.34H16.5998V16.58H12.8998L18.7198 10.76Z", fill: "currentColor" }),
        React.createElement("path", { d: "M19.5801 20.94H16.5801V23.94H19.5801V20.94Z", fill: "currentColor" }),
        React.createElement("path", { d: "M13.4416 32.4328L11.3203 34.5541L13.4416 36.6754L15.563 34.5541L13.4416 32.4328Z", fill: "currentColor" }),
        React.createElement("path", { d: "M26.2598 28.3H23.2598V31.3H26.2598V28.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M19.6602 28.3H16.6602V31.3H19.6602V28.3Z", fill: "currentColor" })));
};

var ThreeDLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M17.8202 8.66003L8.66016 17.82V39.34H30.1802L39.3402 30.18V8.66003H17.8202ZM18.3202 9.86003H37.2802L29.6602 17.48H18.8002V16.54H17.6202V17.5H10.7002L18.3202 9.88003V9.86003ZM9.86016 18.68H29.3202V38.14H9.86016V18.68ZM30.5202 37.3V30.4H31.3002V29.2H30.5202V18.34L38.1402 10.72V29.68L30.5202 37.3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M17.5674 20.7145L17.5527 21.9144L18.7526 21.9291L18.7673 20.7292L17.5674 20.7145Z", fill: "currentColor" }),
        React.createElement("path", { d: "M17.502 24.9278L17.4863 26.1277L18.6862 26.1434L18.7019 24.9435L17.502 24.9278Z", fill: "currentColor" }),
        React.createElement("path", { d: "M17.6661 12.3229L17.6504 13.5228L18.8503 13.5385L18.866 12.3386L17.6661 12.3229Z", fill: "currentColor" }),
        React.createElement("path", { d: "M12.1552 35.0099L11.3066 35.8584L12.1552 36.7069L13.0037 35.8584L12.1552 35.0099Z", fill: "currentColor" }),
        React.createElement("path", { d: "M15.121 32.0296L14.2725 32.8782L15.121 33.7267L15.9695 32.8782L15.121 32.0296Z", fill: "currentColor" }),
        React.createElement("path", { d: "M18.7195 29.2H17.5195V30.4H18.7195V29.2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M27.1199 29.2H25.9199V30.4H27.1199V29.2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M35.5203 29.2H34.3203V30.4H35.5203V29.2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M22.9207 29.2H21.7207V30.4H22.9207V29.2Z", fill: "currentColor" })));
};

var ThreeDFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M28.7196 39.94V19.28H8.05957V38.24L9.01957 37.28L10.7196 38.98L9.75957 39.94H28.7196ZM23.8996 28.6H26.2996V31H23.8996V28.6ZM16.8796 20.74H19.2796V23.14H16.8796V20.74ZM16.8796 28.48H19.2796V30.88H16.8796V28.48ZM13.7996 32.4L15.4996 34.1L13.7996 35.8L12.0996 34.1L13.7996 32.4Z", fill: "currentColor" }),
        React.createElement("path", { d: "M29.4198 16.88L38.2398 8.06H17.5798L8.75977 16.88H29.4398H29.4198ZM19.2598 13V15.4H16.8598V13H19.2598Z", fill: "currentColor" }),
        React.createElement("path", { d: "M31.1201 18.58V28.6H33.3401V31H31.1201V39.24L39.3601 31H37.9601V28.6H39.9401V9.76001L31.1201 18.58Z", fill: "currentColor" })));
};

var ThreeDMapLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M43.9795 17.3C43.7395 14.72 41.5595 12.38 37.7995 10.66C30.1995 7.21999 17.8195 7.21999 10.2195 10.66C6.45953 12.36 4.27953 14.7 4.03953 17.3V17.72C4.03953 17.72 4.01953 17.76 4.01953 17.8V32.02C4.01953 34 5.09953 36.86 10.2195 39.24L11.9195 40.02V23.06L11.2195 22.74C8.19953 21.36 6.45953 19.6 6.41953 17.86V17.76C6.45953 16.02 8.19953 14.24 11.2195 12.88C18.2795 9.67999 29.7595 9.67999 36.8195 12.88C39.8795 14.26 41.6195 16.06 41.6195 17.82C41.6195 19.46 40.0595 21.16 37.3195 22.5L27.3195 12.5L22.4595 17.36L20.6395 15.54L15.6195 20.56L17.3195 22.26L20.6395 18.94L26.6195 24.92C22.4395 24.66 18.0995 25.02 14.3195 26V28.44C21.0795 26.52 30.0395 26.82 36.1195 29.34V40.04L37.8195 39.26C42.9395 36.88 44.0195 34.02 44.0195 32.04V17.34H43.9995L43.9795 17.3ZM9.51953 24.58V36.14C7.85953 35.12 6.41953 33.74 6.41953 32.02V22.52C7.25953 23.26 8.29953 23.96 9.51953 24.58ZM30.2995 25.3L30.3595 25.24L24.1395 19.02L27.2995 15.86L36.0995 24.66V26.76C34.3195 26.12 32.3595 25.62 30.2995 25.3ZM41.5995 32.02C41.5995 33.76 40.1395 35.14 38.4995 36.14V24.58C39.7395 23.96 40.7795 23.26 41.5995 22.52V32.02Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14.3045 14.305L12.6074 16.0021L14.3045 17.6991L16.0015 16.0021L14.3045 14.305Z", fill: "currentColor" })));
};

var ThreeDMapLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M44.2807 17.3C44.0407 14.6 41.8007 12.16 37.9207 10.4C30.2407 6.91998 17.7607 6.91998 10.1007 10.4C6.2207 12.16 3.9807 14.6 3.7407 17.3V17.72C3.7407 17.72 3.7207 17.78 3.7207 17.8C3.7207 17.82 3.7207 17.86 3.7207 17.88V32.02C3.7207 34.08 4.8207 37.06 10.1007 39.5L12.2207 40.48V22.86L11.3407 22.46C8.4207 21.14 6.7407 19.46 6.7207 17.84V17.74C6.7607 16.12 8.4407 14.44 11.3407 13.12C18.3207 9.95998 29.7007 9.95998 36.6807 13.12C39.6207 14.46 41.3007 16.16 41.3007 17.78C41.3007 19.28 39.8607 20.82 37.3607 22.1L27.3007 12.04L22.4407 16.9L20.6207 15.08L15.4007 20.3L17.5207 22.42L20.6207 19.32L25.8207 24.52C22.2207 24.38 18.5407 24.66 15.2207 25.42V28.48C21.7207 26.82 30.0007 27.14 35.8007 29.44V40.46L37.9207 39.48C43.2007 37.04 44.3007 34.06 44.3007 32V17.3H44.2807ZM9.2007 24.76V35.6C7.8207 34.66 6.7007 33.46 6.7007 32.02V23.18C7.4207 23.76 8.2607 24.28 9.2007 24.78V24.76ZM30.4807 24.98L24.5407 19.04L27.2807 16.3L35.7807 24.8V26.26C34.1407 25.7 32.3607 25.28 30.4807 24.98ZM41.2807 32.02C41.2807 33.46 40.1607 34.66 38.7807 35.6V24.76C39.7407 24.26 40.5807 23.74 41.2807 23.16V32V32.02Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14.3059 13.8808L12.1846 16.0021L14.3059 18.1234L16.4272 16.0021L14.3059 13.8808Z", fill: "currentColor" })));
};

var ThreeDMapLineLightIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M43.3796 17.3001C43.1196 14.9601 41.0796 12.8201 37.5396 11.2201C30.0796 7.84006 17.9196 7.84006 10.4596 11.2201C6.91961 12.8201 4.87961 14.9801 4.61961 17.3001V17.7201C4.61961 17.7201 4.59961 17.7601 4.59961 17.7801C4.59961 17.8001 4.59961 17.8201 4.59961 17.8401V32.0001C4.59961 33.8001 5.61961 36.4201 10.4596 38.6601L11.3196 39.0601V23.4201L10.9596 23.2601C7.71961 21.7801 5.83961 19.8201 5.79961 17.8401V17.7201C5.83961 15.7401 7.69961 13.7601 10.9596 12.3001C18.1596 9.04006 29.8596 9.04006 37.0396 12.3001C40.3196 13.7801 42.1996 15.7801 42.1996 17.7801C42.1996 19.7801 40.3796 21.7201 37.1796 23.2001L27.2996 13.3201L22.4396 18.1801L20.6196 16.3601L16.0196 20.9601L16.8596 21.8001L20.5996 18.0601L28.2996 25.7601C23.3796 25.2601 18.0796 25.6201 13.6996 26.8801V28.1201C20.7396 25.9601 30.3396 26.2601 36.6996 29.0001V39.0801L37.5596 38.6801C42.3996 36.4401 43.4196 33.8201 43.4196 32.0201V17.3201H43.3996L43.3796 17.3001ZM5.79961 21.0001C6.71961 22.1801 8.17961 23.2801 10.0996 24.2001V37.1601C7.27961 35.6801 5.79961 33.9001 5.79961 32.0001V21.0001ZM30.2596 26.0001L23.2796 19.0201L27.2996 15.0001L36.6996 24.4001V27.7201C34.7596 26.9401 32.5796 26.3801 30.2596 26.0001ZM42.1996 32.0001C42.1996 33.9001 40.7196 35.6801 37.8996 37.1601V24.2001C39.8196 23.2801 41.2796 22.2001 42.1996 21.0001V32.0001Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14.3056 15.1535L13.457 16.0021L14.3056 16.8506L15.1541 16.0021L14.3056 15.1535Z", fill: "currentColor" })));
};

var ThreeDMapFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { d: "M36.8004 12.4C29.7404 9.2 18.2604 9.2 11.2004 12.4C8.18039 13.76 6.44039 15.54 6.40039 17.28V17.38C6.44039 19.12 8.18039 20.9 11.2004 22.26L11.9004 22.58V27.9C16.6604 26.18 22.7604 25.64 28.4004 26.24L20.6004 18.44L17.2804 21.76L15.5804 20.06L20.6004 15.04L22.4204 16.86L27.2804 12L37.2804 22C39.9804 20.66 41.5404 19 41.5804 17.36V17.26C41.5404 15.52 39.8004 13.74 36.7804 12.38L36.8004 12.4ZM14.3004 17.24L12.6004 15.54L14.3004 13.84L16.0004 15.54L14.3004 17.24Z", fill: "currentColor" }),
        React.createElement("path", { d: "M27.3001 15.4L24.1201 18.56L32.4401 26.88C33.7001 27.16 34.9401 27.48 36.0801 27.9V24.2L27.2801 15.4H27.3001Z", fill: "currentColor" }),
        React.createElement("path", { d: "M9.49953 23.12C6.17953 21.54 4.09953 19.4 4.03953 17.06C4.03953 17.08 4.03953 17.12 4.03953 17.14V17.56C4.03953 17.56 4.01953 17.6 4.01953 17.64C4.01953 17.68 4.01953 17.68 4.01953 17.72V31.86C4.01953 33.74 5.03953 36.42 9.51953 38.7V23.14L9.49953 23.12Z", fill: "currentColor" }),
        React.createElement("path", { d: "M44.0004 17.54V17.12H43.9804C43.9804 17.12 43.9804 17.08 43.9804 17.06C43.9204 19.44 41.7804 21.58 38.4004 23.18V38.74C43.0004 36.44 44.0204 33.74 44.0204 31.84V17.7C44.0204 17.7 44.0204 17.66 44.0204 17.62C44.0204 17.58 44.0204 17.58 44.0204 17.54H44.0004Z", fill: "currentColor" })));
};

var UploadCircleLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.19999 24C7.19999 14.7217 14.7216 7.20005 24 7.20005C33.2784 7.20005 40.8 14.7217 40.8 24C40.8 33.2784 33.2784 40.8 24 40.8C14.7216 40.8 7.19999 33.2784 7.19999 24ZM24 4.80005C13.3961 4.80005 4.79999 13.3962 4.79999 24C4.79999 34.6039 13.3961 43.2001 24 43.2001C34.6039 43.2001 43.2 34.6039 43.2 24C43.2 13.3962 34.6039 4.80005 24 4.80005ZM30.8546 23.7245L32.5517 22.0275L24.1242 13.6L15.6967 22.0275L17.3938 23.7245L22.8813 18.237V30.215H25.2813V18.1512L30.8546 23.7245ZM17.8203 31.4782H30.4519V33.8782H17.8203V31.4782Z", fill: "currentColor" })));
};

var UploadCircleLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 33.1127 33.1127 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24ZM24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM30.6425 23.7611L32.7638 21.6397L24.1242 13.0001L15.4846 21.6397L17.6059 23.7611L22.6 18.7669V30.0396H25.6V18.7186L30.6425 23.7611ZM17.8203 31.5025H30.4519V34.5025H17.8203V31.5025Z", fill: "currentColor" })));
};

var UploadCircleLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.29032 24C5.29032 13.6669 13.6669 5.29032 24 5.29032C34.3331 5.29032 42.7097 13.6669 42.7097 24C42.7097 34.3331 34.3331 42.7097 24 42.7097C13.6669 42.7097 5.29032 34.3331 5.29032 24ZM24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM31.8267 22.7654L32.7391 21.853L24.1335 13.2474L15.5279 21.853L16.4403 22.7654L23.4624 15.7433V30.2009H24.7527V15.6913L31.8267 22.7654ZM17.3551 32.0936H30.9375V33.384H17.3551V32.0936Z", fill: "currentColor" })));
};

var UploadCircleFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 4.80005C13.3961 4.80005 4.79999 13.3962 4.79999 24C4.79999 34.6039 13.3961 43.2001 24 43.2001C34.6039 43.2001 43.2 34.6039 43.2 24C43.2 13.3962 34.6039 4.80005 24 4.80005ZM30.8546 23.1245L32.5517 21.4275L24.1242 13L15.6967 21.4275L17.3938 23.1245L22.8813 17.637V29.615H25.2813V17.5512L30.8546 23.1245ZM17.8203 31.4783H30.4519V33.8783H17.8203V31.4783Z", fill: "currentColor" })));
};

var UploadLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.8506 16.8485L35.1536 18.5456L25.0021 8.39408L25.0021 39.297H22.6021L22.6021 8.7941L12.8506 18.5456L11.1536 16.8485L24.0021 3.99998L36.8506 16.8485ZM14 41.6H34V44H14V41.6Z", fill: "currentColor" })));
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

var ViewInArLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 5.78396L14.9512 8.18388L8.18316 8.18388L8.18316 14.9514L5.78308 14.9514L5.78308 5.78395L14.9512 5.78396Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 42.2161V39.8162L39.8149 39.8162V33.0486L42.215 33.0486L42.215 42.2161L33.0469 42.2161Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 5.7842L33.0469 8.18412L39.8149 8.18412L39.8149 14.9517L42.215 14.9517L42.215 5.7842L33.0469 5.7842Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 42.2156L14.9512 39.8157L8.18316 39.8157L8.18316 33.0481L5.78308 33.0481L5.78308 42.2156L14.9512 42.2156Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0001 10.2455L36.7001 16.8956V31.3953L24.0001 38.0455L11.3001 31.3953V16.8956L24.0001 10.2455ZM13.7001 19.4547V29.9429L22.8001 34.708V23.4257L13.7001 19.4547ZM25.2001 23.4257V34.708L34.3001 29.9429V19.4547L25.2001 23.4257ZM32.7253 17.5234L24.0001 21.3307L15.2749 17.5234L24.0001 12.9546L32.7253 17.5234Z", fill: "#222222" })));
};

var ViewInArLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 5.48394L14.9512 8.48384L8.48317 8.48384L8.48317 14.9514L5.48308 14.9514L5.48308 5.48393L14.9512 5.48394Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 42.5161V39.5162L39.5149 39.5162L39.5149 33.0486L42.515 33.0486L42.515 42.5161L33.0469 42.5161Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 5.48418L33.0469 8.48408L39.5149 8.48408L39.5149 14.9517L42.515 14.9517L42.515 5.48418L33.0469 5.48418Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 42.5156L14.9512 39.5157L8.48317 39.5157L8.48317 33.0481L5.48307 33.0481L5.48308 42.5156L14.9512 42.5156Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0001 9.9068L37.0001 16.7141V31.5768L24.0001 38.3841L11.0001 31.5768V16.7141L24.0001 9.9068ZM14.0001 19.913V29.7613L22.5001 34.2123V23.622L14.0001 19.913ZM25.5001 23.622V34.2123L34.0001 29.7613V19.913L25.5001 23.622ZM32.0315 17.4988L24.0001 21.0034L15.9686 17.4988L24.0001 13.2932L32.0315 17.4988Z", fill: "currentColor" })));
};

var ViewInArLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 6.38391L14.9512 7.58387L7.58315 7.58387L7.58315 14.9514L6.38311 14.9514L6.38311 6.38391L14.9512 6.38391Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 41.6161V40.4161L40.4149 40.4161V33.0486L41.6149 33.0486L41.6149 41.6161L33.0469 41.6161Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 6.38415L33.0469 7.58411L40.4149 7.58411L40.4149 14.9517L41.6149 14.9517L41.6149 6.38415L33.0469 6.38415Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 41.6156L14.9512 40.4156L7.58315 40.4156L7.58315 33.0481L6.38311 33.0481L6.38311 41.6156L14.9512 41.6156Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0001 10.9227L36.1001 17.2587V31.0322L24.0001 37.3682L11.9001 31.0322V17.2587L24.0001 10.9227ZM13.1001 18.5383V30.306L23.4001 35.6995V23.0328L13.1001 18.5383ZM24.6001 23.0328V35.6995L34.9001 30.306V18.5383L24.6001 23.0328ZM34.1127 17.5726L24.0001 21.9854L13.8875 17.5726L24.0001 12.2773L34.1127 17.5726Z", fill: "currentColor" })));
};

var ViewInArFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 5.78393L14.9512 8.18385L8.18317 8.18385L8.18317 14.9514L5.78309 14.9514L5.78309 5.78392L14.9512 5.78393Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 42.2161V39.8162L39.8149 39.8162V33.0486L42.215 33.0486L42.215 42.2161L33.0469 42.2161Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.0469 5.78417L33.0469 8.18409L39.8149 8.18409L39.8149 14.9517L42.215 14.9517L42.215 5.78417L33.0469 5.78417Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9512 42.2156L14.9512 39.8157L8.18317 39.8157L8.18317 33.0481L5.78309 33.0481L5.78309 42.2156L14.9512 42.2156Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.3636 17.0267L24.0001 11.6L13.6366 17.0267L24.0001 21.5489L34.3636 17.0267ZM35.5001 18.7129L25.0001 23.2947V36.1673L35.5001 30.6691V18.7129ZM23.0001 36.1673V23.2947L12.5001 18.7129V30.6691L23.0001 36.1673ZM12.5001 17.6218L12.5001 17.6218L12.5001 17.6218V17.6218Z", fill: "currentColor" })));
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

var WarningFillIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 29V19H25.4V29H23ZM23 35V32H25.4V35H23ZM24 6L2 42H46L24 6Z", fill: "currentColor" })));
};

var WarningFillBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5 29V19H25.5V29H22.5ZM22.5 35V32H25.5V35H22.5ZM24 6L2 42H46L24 6Z", fill: "currentColor" })));
};

var WarningFillLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 29V19H24.6V29H23ZM23 35V32H24.6V35H23ZM23.75 6L1.75 42H45.75L23.75 6Z", fill: "currentColor" })));
};

var WarningLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 29L23 19L25.4 19L25.4 29L23 29Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 35L23 32L25.4 32L25.4 35L23 35Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 6L2 42H46L24 6ZM24 10.2431L6.00101 39.696H41.999L24 10.2431Z", fill: "currentColor" })));
};

var WarningLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5 29L22.5 19L25.5 19L25.5 29L22.5 29Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5 35L22.5 32L25.5 32L25.5 35L22.5 35Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 6L2 42H46L24 6ZM24 11.3039L7.00126 39.12H40.9987L24 11.3039Z", fill: "currentColor" })));
};

var WarningLineLightIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 29L23 19L24.6 19L24.6 29L23 29Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 35L23 32L24.6 32L24.6 35L23 35Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.75 6L1.75 42H45.75L23.75 6ZM23.75 8.82874L4.41734 40.464H43.0827L23.75 8.82874Z", fill: "currentColor" })));
};

exports.ArScanLineBoldIcon = ArScanLineBoldIcon;
exports.ArScanLineIcon = ArScanLineIcon;
exports.ArScanLineLightIcon = ArScanLineLightIcon;
exports.ArrowBackwardCircleFillIcon = ArrowBackwardCircleFillIcon;
exports.ArrowBackwardCircleLineIcon = ArrowBackwardCircleLineIcon;
exports.ArrowBackwardLineBoldIcon = ArrowBackwardLineBoldIcon;
exports.ArrowBackwardLineIcon = ArrowBackwardLineIcon;
exports.ArrowBackwardLineLightIcon = ArrowBackwardLineLightIcon;
exports.ArrowDownCircleFillIcon = ArrowDownCircleFillIcon;
exports.ArrowDownCircleLineIcon = ArrowDownCircleLineIcon;
exports.ArrowDownLineBoldIcon = ArrowDownLineBoldIcon;
exports.ArrowDownLineIcon = ArrowDownLineIcon;
exports.ArrowDownwardLineBoldIcon = ArrowDownwardLineBoldIcon;
exports.ArrowDownwardLineIcon = ArrowDownwardLineIcon;
exports.ArrowDownwardLineLightIcon = ArrowDownwardLineLightIcon;
exports.ArrowForwardCircleFillIcon = ArrowForwardCircleFillIcon;
exports.ArrowForwardCircleLineIcon = ArrowForwardCircleLineIcon;
exports.ArrowForwardLineBoldIcon = ArrowForwardLineBoldIcon;
exports.ArrowForwardLineIcon = ArrowForwardLineIcon;
exports.ArrowForwardLineLightIcon = ArrowForwardLineLightIcon;
exports.ArrowInwardLineBoldIcon = ArrowInwardLineBoldIcon;
exports.ArrowInwardLineIcon = ArrowInwardLineIcon;
exports.ArrowInwardLineLightIcon = ArrowInwardLineLightIcon;
exports.ArrowLeftLineBoldIcon = ArrowLeftLineBoldIcon;
exports.ArrowLeftLineIcon = ArrowLeftLineIcon;
exports.ArrowOutwardLineBoldIcon = ArrowOutwardLineBoldIcon;
exports.ArrowOutwardLineIcon = ArrowOutwardLineIcon;
exports.ArrowOutwardLineLightIcon = ArrowOutwardLineLightIcon;
exports.ArrowRightLineBoldIcon = ArrowRightLineBoldIcon;
exports.ArrowRightLineIcon = ArrowRightLineIcon;
exports.ArrowUpCircleFillIcon = ArrowUpCircleFillIcon;
exports.ArrowUpCircleLineIcon = ArrowUpCircleLineIcon;
exports.ArrowUpLineBoldIcon = ArrowUpLineBoldIcon;
exports.ArrowUpLineIcon = ArrowUpLineIcon;
exports.ArrowUpwardLineBoldIcon = ArrowUpwardLineBoldIcon;
exports.ArrowUpwardLineIcon = ArrowUpwardLineIcon;
exports.ArrowUpwardLineLightIcon = ArrowUpwardLineLightIcon;
exports.CheckCircleFillBoldIcon = CheckCircleFillBoldIcon;
exports.CheckCircleFillIcon = CheckCircleFillIcon;
exports.CheckCircleLineBoldIcon = CheckCircleLineBoldIcon;
exports.CheckCircleLineIcon = CheckCircleLineIcon;
exports.CheckLineBoldIcon = CheckLineBoldIcon;
exports.CheckLineIcon = CheckLineIcon;
exports.ClockCircleFillIcon = ClockCircleFillIcon;
exports.ClockCircleLineIcon = ClockCircleLineIcon;
exports.CloseCircleFillBoldIcon = CloseCircleFillBoldIcon;
exports.CloseCircleFillIcon = CloseCircleFillIcon;
exports.CloseCircleLineBoldIcon = CloseCircleLineBoldIcon;
exports.CloseCircleLineIcon = CloseCircleLineIcon;
exports.CloseLineBoldIcon = CloseLineBoldIcon;
exports.CloseLineIcon = CloseLineIcon;
exports.CloseLineLightIcon = CloseLineLightIcon;
exports.ContentCopyFillIcon = ContentCopyFillIcon;
exports.ContentCopyLineBoldIcon = ContentCopyLineBoldIcon;
exports.ContentCopyLineIcon = ContentCopyLineIcon;
exports.ContentCopyLineLightIcon = ContentCopyLineLightIcon;
exports.CurrencyFillIcon = CurrencyFillIcon;
exports.CurrencyLineBoldIcon = CurrencyLineBoldIcon;
exports.CurrencyLineIcon = CurrencyLineIcon;
exports.CurrencyLineLightIcon = CurrencyLineLightIcon;
exports.DeleteFillIcon = DeleteFillIcon;
exports.DeleteLineBoldIcon = DeleteLineBoldIcon;
exports.DeleteLineIcon = DeleteLineIcon;
exports.DeleteLineLightIcon = DeleteLineLightIcon;
exports.DesktopFillIcon = DesktopFillIcon;
exports.DesktopLineBoldIcon = DesktopLineBoldIcon;
exports.DesktopLineIcon = DesktopLineIcon;
exports.DesktopLineLightIcon = DesktopLineLightIcon;
exports.DocumentFillIcon = DocumentFillIcon;
exports.DocumentLineBoldIcon = DocumentLineBoldIcon;
exports.DocumentLineIcon = DocumentLineIcon;
exports.DocumentLineLightIcon = DocumentLineLightIcon;
exports.DownloadLineIcon = DownloadLineIcon;
exports.EditFillIcon = EditFillIcon;
exports.EditLineBoldIcon = EditLineBoldIcon;
exports.EditLineIcon = EditLineIcon;
exports.EditLineLightIcon = EditLineLightIcon;
exports.ErrorCircleFillBoldIcon = ErrorCircleFillBoldIcon;
exports.ErrorCircleFillIcon = ErrorCircleFillIcon;
exports.ErrorCircleLineBoldIcon = ErrorCircleLineBoldIcon;
exports.ErrorCircleLineIcon = ErrorCircleLineIcon;
exports.FileBinFillIcon = FileBinFillIcon;
exports.FileBinLineBoldIcon = FileBinLineBoldIcon;
exports.FileBinLineIcon = FileBinLineIcon;
exports.FileBinLineLightIcon = FileBinLineLightIcon;
exports.FileEfsFillIcon = FileEfsFillIcon;
exports.FileEfsLineBoldIcon = FileEfsLineBoldIcon;
exports.FileEfsLineIcon = FileEfsLineIcon;
exports.FileEfsLineLightIcon = FileEfsLineLightIcon;
exports.FileJpgFillIcon = FileJpgFillIcon;
exports.FileJpgLineBoldIcon = FileJpgLineBoldIcon;
exports.FileJpgLineIcon = FileJpgLineIcon;
exports.FileJpgLineLightIcon = FileJpgLineLightIcon;
exports.FileLineBoldIcon = FileLineBoldIcon;
exports.FileLineIcon = FileLineIcon;
exports.FileLineLightIcon = FileLineLightIcon;
exports.FileMoveFillIcon = FileMoveFillIcon;
exports.FileMoveLineBoldIcon = FileMoveLineBoldIcon;
exports.FileMoveLineIcon = FileMoveLineIcon;
exports.FileMoveLineLightIcon = FileMoveLineLightIcon;
exports.FileMp4FillIcon = FileMp4FillIcon;
exports.FileMp4LineBoldIcon = FileMp4LineBoldIcon;
exports.FileMp4LineIcon = FileMp4LineIcon;
exports.FileMp4LineLightIcon = FileMp4LineLightIcon;
exports.FilePlyFillIcon = FilePlyFillIcon;
exports.FilePlyLineBoldIcon = FilePlyLineBoldIcon;
exports.FilePlyLineIcon = FilePlyLineIcon;
exports.FilePlyLineLightIcon = FilePlyLineLightIcon;
exports.FileZipFillIcon = FileZipFillIcon;
exports.FileZipLineBoldIcon = FileZipLineBoldIcon;
exports.FileZipLineIcon = FileZipLineIcon;
exports.FileZipLineLightIcon = FileZipLineLightIcon;
exports.FilterFillIcon = FilterFillIcon;
exports.FilterLineBoldIcon = FilterLineBoldIcon;
exports.FilterLineIcon = FilterLineIcon;
exports.FilterLineLightIcon = FilterLineLightIcon;
exports.FirstPageLineBoldIcon = FirstPageLineBoldIcon;
exports.FirstPageLineIcon = FirstPageLineIcon;
exports.FolderFillIcon = FolderFillIcon;
exports.FolderLineBoldIcon = FolderLineBoldIcon;
exports.FolderLineIcon = FolderLineIcon;
exports.FolderLineLightIcon = FolderLineLightIcon;
exports.FullScreenExitLineIcon = FullScreenExitLineIcon;
exports.FullScreenLineIcon = FullScreenLineIcon;
exports.GridViewFillIcon = GridViewFillIcon;
exports.GridViewLineBoldIcon = GridViewLineBoldIcon;
exports.GridViewLineIcon = GridViewLineIcon;
exports.GridViewLineLightIcon = GridViewLineLightIcon;
exports.HeartFillIcon = HeartFillIcon;
exports.HeartLineIcon = HeartLineIcon;
exports.HelpCircleFillIcon = HelpCircleFillIcon;
exports.HelpCircleLineIcon = HelpCircleLineIcon;
exports.HomeFillIcon = HomeFillIcon;
exports.HomeLineBoldIcon = HomeLineBoldIcon;
exports.HomeLineIcon = HomeLineIcon;
exports.HomeLineLightIcon = HomeLineLightIcon;
exports.InfoCircleFillIcon = InfoCircleFillIcon;
exports.InfoCircleLineIcon = InfoCircleLineIcon;
exports.LanguageFillIcon = LanguageFillIcon;
exports.LanguageLineIcon = LanguageLineIcon;
exports.LastPageLineBoldIcon = LastPageLineBoldIcon;
exports.LastPageLineIcon = LastPageLineIcon;
exports.LayerFillIcon = LayerFillIcon;
exports.LayerHorizontalLineBoldIcon = LayerHorizontalLineBoldIcon;
exports.LayerHorizontalLineIcon = LayerHorizontalLineIcon;
exports.LayerHorizontalLineLightIcon = LayerHorizontalLineLightIcon;
exports.LayerLineBoldIcon = LayerLineBoldIcon;
exports.LayerLineIcon = LayerLineIcon;
exports.LayerLineLightIcon = LayerLineLightIcon;
exports.ListLineIcon = ListLineIcon;
exports.LocationFillIcon = LocationFillIcon;
exports.LocationLineBoldIcon = LocationLineBoldIcon;
exports.LocationLineIcon = LocationLineIcon;
exports.LocationLineLightIcon = LocationLineLightIcon;
exports.LockFillIcon = LockFillIcon;
exports.LockLineBoldIcon = LockLineBoldIcon;
exports.LockLineIcon = LockLineIcon;
exports.LockLineLightIcon = LockLineLightIcon;
exports.LockOpenFillIcon = LockOpenFillIcon;
exports.LockOpenLineBoldIcon = LockOpenLineBoldIcon;
exports.LockOpenLineIcon = LockOpenLineIcon;
exports.LockOpenLineLightIcon = LockOpenLineLightIcon;
exports.LoginLineIcon = LoginLineIcon;
exports.LogoutLineIcon = LogoutLineIcon;
exports.MailFillIcon = MailFillIcon;
exports.MailLineBoldIcon = MailLineBoldIcon;
exports.MailLineIcon = MailLineIcon;
exports.MailLineLightIcon = MailLineLightIcon;
exports.MapFillIcon = MapFillIcon;
exports.MapFlowLineBoldIcon = MapFlowLineBoldIcon;
exports.MapFlowLineIcon = MapFlowLineIcon;
exports.MapFlowLineLightIcon = MapFlowLineLightIcon;
exports.MapLineBoldIcon = MapLineBoldIcon;
exports.MapLineIcon = MapLineIcon;
exports.MapLineLightIcon = MapLineLightIcon;
exports.MenuLineIcon = MenuLineIcon;
exports.MessageFillIcon = MessageFillIcon;
exports.MessageLineBoldIcon = MessageLineBoldIcon;
exports.MessageLineIcon = MessageLineIcon;
exports.MessageLineLightIcon = MessageLineLightIcon;
exports.MinusLineBoldIcon = MinusLineBoldIcon;
exports.MinusLineIcon = MinusLineIcon;
exports.MobileFillIcon = MobileFillIcon;
exports.MobileLineBoldIcon = MobileLineBoldIcon;
exports.MobileLineIcon = MobileLineIcon;
exports.MobileLineLightIcon = MobileLineLightIcon;
exports.MoreHorizontalLineIcon = MoreHorizontalLineIcon;
exports.MoreVerticalLineIcon = MoreVerticalLineIcon;
exports.MyLocationFillIcon = MyLocationFillIcon;
exports.MyLocationLineBoldIcon = MyLocationLineBoldIcon;
exports.MyLocationLineIcon = MyLocationLineIcon;
exports.MyLocationLineLightIcon = MyLocationLineLightIcon;
exports.NotificationFillIcon = NotificationFillIcon;
exports.NotificationLineBoldIcon = NotificationLineBoldIcon;
exports.NotificationLineIcon = NotificationLineIcon;
exports.NotificationLineLightIcon = NotificationLineLightIcon;
exports.NotificationOffFillIcon = NotificationOffFillIcon;
exports.NotificationOffLineBoldIcon = NotificationOffLineBoldIcon;
exports.NotificationOffLineIcon = NotificationOffLineIcon;
exports.OpenInNewLineIcon = OpenInNewLineIcon;
exports.PlayCircleFillIcon = PlayCircleFillIcon;
exports.PlayCircleLineIcon = PlayCircleLineIcon;
exports.PlayFillIcon = PlayFillIcon;
exports.PlayLineIcon = PlayLineIcon;
exports.PlusLineBoldIcon = PlusLineBoldIcon;
exports.PlusLineIcon = PlusLineIcon;
exports.ProfileFillIcon = ProfileFillIcon;
exports.ProfileLineIcon = ProfileLineIcon;
exports.ProgressCircleFillIcon = ProgressCircleFillIcon;
exports.ProgressCircleLineBoldIcon = ProgressCircleLineBoldIcon;
exports.ProgressCircleLineIcon = ProgressCircleLineIcon;
exports.ProgressCircleLineLightIcon = ProgressCircleLineLightIcon;
exports.ProgressLineBoldIcon = ProgressLineBoldIcon;
exports.ProgressLineIcon = ProgressLineIcon;
exports.ProgressLineLightIcon = ProgressLineLightIcon;
exports.RefreshLineBoldIcon = RefreshLineBoldIcon;
exports.RefreshLineIcon = RefreshLineIcon;
exports.RefreshLineLightIcon = RefreshLineLightIcon;
exports.RouteLineBoldIcon = RouteLineBoldIcon;
exports.RouteLineIcon = RouteLineIcon;
exports.RouteLineLightIcon = RouteLineLightIcon;
exports.SearchLineIcon = SearchLineIcon;
exports.SelectAreaFillIcon = SelectAreaFillIcon;
exports.SelectAreaLineBoldIcon = SelectAreaLineBoldIcon;
exports.SelectAreaLineIcon = SelectAreaLineIcon;
exports.SelectAreaLineLightIcon = SelectAreaLineLightIcon;
exports.SettingFillIcon = SettingFillIcon;
exports.SettingLineBoldIcon = SettingLineBoldIcon;
exports.SettingLineIcon = SettingLineIcon;
exports.SettingLineLightIcon = SettingLineLightIcon;
exports.SmartGlassesLineBoldIcon = SmartGlassesLineBoldIcon;
exports.SmartGlassesLineIcon = SmartGlassesLineIcon;
exports.SmartGlassesLineLightIcon = SmartGlassesLineLightIcon;
exports.SortLineBoldIcon = SortLineBoldIcon;
exports.SortLineIcon = SortLineIcon;
exports.SortLineLightIcon = SortLineLightIcon;
exports.StarFillIcon = StarFillIcon;
exports.StarLineIcon = StarLineIcon;
exports.SyncLineBoldIcon = SyncLineBoldIcon;
exports.SyncLineIcon = SyncLineIcon;
exports.SyncLineLightIcon = SyncLineLightIcon;
exports.TableViewFillIcon = TableViewFillIcon;
exports.TableViewLineBoldIcon = TableViewLineBoldIcon;
exports.TableViewLineIcon = TableViewLineIcon;
exports.TableViewLineLightIcon = TableViewLineLightIcon;
exports.TerminalFillIcon = TerminalFillIcon;
exports.TerminalLineBoldIcon = TerminalLineBoldIcon;
exports.TerminalLineIcon = TerminalLineIcon;
exports.TerminalLineLightIcon = TerminalLineLightIcon;
exports.ThreeDFillIcon = ThreeDFillIcon;
exports.ThreeDLineBoldIcon = ThreeDLineBoldIcon;
exports.ThreeDLineIcon = ThreeDLineIcon;
exports.ThreeDLineLightIcon = ThreeDLineLightIcon;
exports.ThreeDMapFillIcon = ThreeDMapFillIcon;
exports.ThreeDMapLineBoldIcon = ThreeDMapLineBoldIcon;
exports.ThreeDMapLineIcon = ThreeDMapLineIcon;
exports.ThreeDMapLineLightIcon = ThreeDMapLineLightIcon;
exports.UploadCircleFillIcon = UploadCircleFillIcon;
exports.UploadCircleLineBoldIcon = UploadCircleLineBoldIcon;
exports.UploadCircleLineIcon = UploadCircleLineIcon;
exports.UploadCircleLineLightIcon = UploadCircleLineLightIcon;
exports.UploadLineIcon = UploadLineIcon;
exports.UserFillIcon = UserFillIcon;
exports.UserLineBoldIcon = UserLineBoldIcon;
exports.UserLineIcon = UserLineIcon;
exports.UserLineLightIcon = UserLineLightIcon;
exports.ViewFillBoldIcon = ViewFillBoldIcon;
exports.ViewFillIcon = ViewFillIcon;
exports.ViewInArFillIcon = ViewInArFillIcon;
exports.ViewInArLineBoldIcon = ViewInArLineBoldIcon;
exports.ViewInArLineIcon = ViewInArLineIcon;
exports.ViewInArLineLightIcon = ViewInArLineLightIcon;
exports.ViewLineBoldIcon = ViewLineBoldIcon;
exports.ViewLineIcon = ViewLineIcon;
exports.ViewOffFillBoldIcon = ViewOffFillBoldIcon;
exports.ViewOffFillIcon = ViewOffFillIcon;
exports.ViewOffLineBoldIcon = ViewOffLineBoldIcon;
exports.ViewOffLineIcon = ViewOffLineIcon;
exports.WarningFillBoldIcon = WarningFillBoldIcon;
exports.WarningFillIcon = WarningFillIcon;
exports.WarningFillLightIcon = WarningFillLightIcon;
exports.WarningLineBoldIcon = WarningLineBoldIcon;
exports.WarningLineIcon = WarningLineIcon;
exports.WarningLineLightIcon = WarningLineLightIcon;
//# sourceMappingURL=index.js.map
