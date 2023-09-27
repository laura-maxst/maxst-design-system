'use strict';



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

___$insertStyle("@charset \"UTF-8\";\n/* CSS 초기화 */\n* {\n  box-sizing: border-box;\n  word-break: keep-all;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n*::-webkit-scrollbar {\n  display: none; /* Chrome, Safari, Opera*/\n}\n\nhtml {\n  width: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  background-color: var(--background-base);\n}\nbody > div {\n  position: relative;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nmain {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-family: \"Pretendard\", sans-serif !important;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* button, input, select, textarea 초기화 */\nbutton,\ninput,\nselect,\ntextarea {\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  vertical-align: middle;\n  font-size: 100%;\n  font-family: \"Pretendard\", sans-serif;\n  background: transparent;\n}\n\nbutton,\ninput[type=button], textarea {\n  border: 0 none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n/* input 기본 스타일 초기화 */\ninput, textarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 0 none;\n}\n\ninput:focus, textarea:focus {\n  outline: none;\n}\n\n/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */\ninput::-ms-clear {\n  display: none;\n}\n\n/* input type number 에서 화살표 제거 */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ntextarea {\n  resize: none;\n  -webkit-appearance: none;\n}\n\na {\n  color: #008FFD;\n  text-decoration: none;\n  outline: none;\n}\na:hover, a:active {\n  color: #008FFD;\n  text-decoration: none;\n}\n\nb {\n  font-weight: 700;\n}\n\npre {\n  white-space: pre-wrap;\n}\n\np {\n  white-space: break-spaces;\n}\n\n@font-face {\n  font-family: \"Pretendard\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"../../fonts/Pretendard-Bold.eot\");\n  src: url(\"../../fonts/Pretendard-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/Pretendard-Bold.woff2\") format(\"woff2\"), url(\"../../fonts/Pretendard-Bold.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Pretendard\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"../../fonts/Pretendard-SemiBold.eot\");\n  src: url(\"../../fonts/Pretendard-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/Pretendard-SemiBold.woff2\") format(\"woff2\"), url(\"../../fonts/Pretendard-SemiBold.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Pretendard\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"../../fonts/Pretendard-Medium.eot\");\n  src: url(\"../../fonts/Pretendard-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/Pretendard-Medium.woff2\") format(\"woff2\"), url(\"../../fonts/Pretendard-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Pretendard\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"../../fonts/Pretendard-Regular.eot\");\n  src: url(\"../../fonts/Pretendard-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../fonts/Pretendard-Regular.woff2\") format(\"woff2\"), url(\"../../fonts/Pretendard-Regular.woff\") format(\"woff\");\n}\n.font-box {\n  margin-bottom: 8px;\n}\n\n.font-size-12 {\n  font-size: 12px;\n}\n\n.font-size-14 {\n  font-size: 14px;\n}\n\n.font-size-16 {\n  font-size: 16px;\n}\n\n.font-size-18 {\n  font-size: 18px;\n}\n\n.font-size-20 {\n  font-size: 20px;\n}\n\n.font-size-24 {\n  font-size: 24px;\n}\n\n.font-size-28 {\n  font-size: 28px;\n}\n\n.font-size-32 {\n  font-size: 32px;\n}\n\n.font-size-36 {\n  font-size: 36px;\n}\n\n.font-size-40 {\n  font-size: 40px;\n}\n\n.font-size-48 {\n  font-size: 48px;\n}\n\n.font-weight-semibold {\n  font-weight: 600;\n}\n\n.font-weight-medium {\n  font-weight: 500;\n}\n\n.font-weight-regular {\n  font-weight: 400;\n}\n\n.font-title-xs, .font-title-s, .font-title-m, .font-title-l, .font-title-xl {\n  line-height: 1.3;\n  font-weight: 600;\n  color: var(--color-text-default);\n  color: var(--color-text-default);\n}\n.left.font-title-xs, .left.font-title-s, .left.font-title-m, .left.font-title-l, .left.font-title-xl {\n  text-align: left;\n}\n.right.font-title-xs, .right.font-title-s, .right.font-title-m, .right.font-title-l, .right.font-title-xl {\n  text-align: left;\n}\n.center.font-title-xs, .center.font-title-s, .center.font-title-m, .center.font-title-l, .center.font-title-xl {\n  text-align: center;\n}\n\n.font-title-xl {\n  font-size: 48px;\n}\n@media only screen and (max-width: 767px) {\n  .font-title-xl {\n    font-size: 32px;\n  }\n}\n\n.font-title-l {\n  font-size: 32px;\n}\n@media only screen and (max-width: 767px) {\n  .font-title-l {\n    font-size: 24px;\n  }\n}\n\n.font-title-m {\n  font-size: 24px;\n}\n@media only screen and (max-width: 767px) {\n  .font-title-m {\n    font-size: 20px;\n  }\n}\n\n.font-title-s {\n  font-size: 20px;\n}\n@media only screen and (max-width: 767px) {\n  .font-title-s {\n    font-size: 18px;\n  }\n}\n\n.font-title-xs {\n  font-size: 18px;\n}\n@media only screen and (max-width: 767px) {\n  .font-title-xs {\n    font-size: 16px;\n  }\n}\n\n.font-body-s, .font-body-m, .font-body-l {\n  line-height: 1.5;\n  font-weight: 400;\n  color: var(--color-text-default);\n  color: var(--color-text-default);\n}\n.left.font-body-s, .left.font-body-m, .left.font-body-l {\n  text-align: left;\n}\n.right.font-body-s, .right.font-body-m, .right.font-body-l {\n  text-align: left;\n}\n.center.font-body-s, .center.font-body-m, .center.font-body-l {\n  text-align: center;\n}\n.default.font-body-s, .default.font-body-m, .default.font-body-l {\n  color: var(--color-text-default);\n}\n.sub.font-body-s, .sub.font-body-m, .sub.font-body-l {\n  color: var(--color-text-sub);\n}\n.subtlest.font-body-s, .subtlest.font-body-m, .subtlest.font-body-l {\n  color: var(--color-text-subtlest);\n}\n\n.font-body-l {\n  font-size: 16px;\n}\n@media only screen and (max-width: 767px) {\n  .font-body-l {\n    font-size: 16px;\n  }\n}\n\n.font-body-m {\n  font-size: 14px;\n}\n@media only screen and (max-width: 767px) {\n  .font-body-m {\n    font-size: 14px;\n  }\n}\n\n.font-body-s {\n  font-size: 12px;\n}\n@media only screen and (max-width: 767px) {\n  .font-body-s {\n    font-size: 12px;\n  }\n}\n\n.font-label-s, .font-label-m, .font-label-l, .font-label-xl {\n  line-height: 1.5;\n  font-weight: 500;\n  color: var(--color-text-default);\n}\n.left.font-label-s, .left.font-label-m, .left.font-label-l, .left.font-label-xl {\n  text-align: left;\n}\n.right.font-label-s, .right.font-label-m, .right.font-label-l, .right.font-label-xl {\n  text-align: left;\n}\n.center.font-label-s, .center.font-label-m, .center.font-label-l, .center.font-label-xl {\n  text-align: center;\n}\n\n.font-label-xl {\n  font-size: 18px;\n}\n@media only screen and (max-width: 767px) {\n  .font-label-xl {\n    font-size: 18px;\n  }\n}\n\n.font-label-l {\n  font-size: 16px;\n}\n@media only screen and (max-width: 767px) {\n  .font-label-l {\n    font-size: 16px;\n  }\n}\n\n.font-label-m {\n  font-size: 14px;\n}\n@media only screen and (max-width: 767px) {\n  .font-label-m {\n    font-size: 14px;\n  }\n}\n\n.font-label-s {\n  font-size: 12px;\n}\n@media only screen and (max-width: 767px) {\n  .font-label-s {\n    font-size: 12px;\n  }\n}\n\n.alert-box {\n  position: fixed;\n  display: flex;\n  top: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  justify-content: space-between;\n  gap: 8px;\n  min-width: 300px;\n  width: auto;\n  max-width: 800px;\n  padding: 12px 16px;\n  color: var(--color-text-default);\n  background-color: var(--color-background-2nd-base);\n  z-index: 99999;\n  transition: all 0.7s ease-in-out;\n}\n.alert-box:before {\n  content: \"\";\n  display: block;\n  width: 4px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--color-background-ui-middle);\n}\n.alert-box > div {\n  display: flex;\n  gap: 8px;\n  height: fit-content;\n}\n.alert-box .alert__text-box {\n  gap: 4px;\n}\n.alert-box.open {\n  opacity: 1;\n  visibility: unset;\n  transition: all 0.7s ease-in-out;\n}\n.alert-box.close {\n  opacity: 0;\n  visibility: hidden;\n}\n.alert-box .font-title, .alert-box p {\n  color: var(--color-text-default);\n}\n.alert-box button {\n  height: fit-content;\n  min-width: auto;\n}\n.alert-box svg {\n  flex: none;\n  display: block;\n  width: 24px;\n  height: 24px;\n  color: var(--color-text-default);\n}\n.alert-box .close-button {\n  width: 20px;\n  height: 20px;\n}\n.alert-box .close-button svg {\n  width: 20px;\n  height: 20px;\n}\n\n.alert-error {\n  background-color: var(--color-background-error-light);\n}\n.alert-error:before {\n  background-color: var(--color-background-error);\n}\n.alert-error .alert__left-box svg {\n  color: var(--color-text-error);\n}\n.alert-error .alert__right-box .button__ghost-s--default:hover, .alert-error .alert__right-box .button__ghost-s--default:focus, .alert-error .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-error .alert__right-box .button__ghost-s--default:hover::before, .alert-error .alert__right-box .button__ghost-s--default:focus::before, .alert-error .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-error);\n  opacity: 0.3;\n  z-index: -1;\n}\n.alert-error .alert__left-box {\n  align-items: center;\n}\n\n.alert-warning {\n  background-color: var(--color-background-warning-light);\n}\n.alert-warning:before {\n  background-color: var(--color-background-warning);\n}\n.alert-warning .alert__left-box svg {\n  color: var(--color-text-warning);\n}\n.alert-warning .alert__right-box .button__ghost-s--default:hover, .alert-warning .alert__right-box .button__ghost-s--default:focus, .alert-warning .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-warning .alert__right-box .button__ghost-s--default:hover::before, .alert-warning .alert__right-box .button__ghost-s--default:focus::before, .alert-warning .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-warning);\n  opacity: 0.3;\n  z-index: -1;\n}\n.alert-warning .alert__left-box {\n  align-items: center;\n}\n\n.alert-information {\n  background-color: var(--color-background-information-light);\n}\n.alert-information:before {\n  background-color: var(--color-background-information);\n}\n.alert-information .alert__left-box svg {\n  color: var(--color-text-information);\n}\n.alert-information .alert__right-box .button__ghost-s--default:hover, .alert-information .alert__right-box .button__ghost-s--default:focus, .alert-information .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-information .alert__right-box .button__ghost-s--default:hover::before, .alert-information .alert__right-box .button__ghost-s--default:focus::before, .alert-information .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-information);\n  opacity: 0.3;\n  z-index: -1;\n}\n.alert-information .alert__left-box {\n  align-items: center;\n}\n\n.alert-success {\n  background-color: var(--color-background-success-light);\n}\n.alert-success:before {\n  background-color: var(--color-background-success);\n}\n.alert-success .alert__left-box svg {\n  color: var(--color-text-success);\n}\n.alert-success .alert__right-box .button__ghost-s--default:hover, .alert-success .alert__right-box .button__ghost-s--default:focus, .alert-success .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-success .alert__right-box .button__ghost-s--default:hover::before, .alert-success .alert__right-box .button__ghost-s--default:focus::before, .alert-success .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-success);\n  opacity: 0.3;\n  z-index: -1;\n}\n.alert-success .alert__left-box {\n  align-items: center;\n}\n\n.alert-description-error {\n  background-color: var(--color-background-error-light);\n}\n.alert-description-error:before {\n  background-color: var(--color-background-error);\n}\n.alert-description-error .alert__left-box svg {\n  color: var(--color-text-error);\n}\n.alert-description-error .alert__right-box .button__ghost-s--default:hover, .alert-description-error .alert__right-box .button__ghost-s--default:focus, .alert-description-error .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-description-error .alert__right-box .button__ghost-s--default:hover::before, .alert-description-error .alert__right-box .button__ghost-s--default:focus::before, .alert-description-error .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-error);\n  opacity: 0.3;\n  z-index: -1;\n}\n\n.alert-description-warning {\n  background-color: var(--color-background-warning-light);\n}\n.alert-description-warning:before {\n  background-color: var(--color-background-warning);\n}\n.alert-description-warning .alert__left-box svg {\n  color: var(--color-text-warning);\n}\n.alert-description-warning .alert__right-box .button__ghost-s--default:hover, .alert-description-warning .alert__right-box .button__ghost-s--default:focus, .alert-description-warning .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-description-warning .alert__right-box .button__ghost-s--default:hover::before, .alert-description-warning .alert__right-box .button__ghost-s--default:focus::before, .alert-description-warning .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-warning);\n  opacity: 0.3;\n  z-index: -1;\n}\n\n.alert-description-information {\n  background-color: var(--color-background-information-light);\n}\n.alert-description-information:before {\n  background-color: var(--color-background-information);\n}\n.alert-description-information .alert__left-box svg {\n  color: var(--color-text-information);\n}\n.alert-description-information .alert__right-box .button__ghost-s--default:hover, .alert-description-information .alert__right-box .button__ghost-s--default:focus, .alert-description-information .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-description-information .alert__right-box .button__ghost-s--default:hover::before, .alert-description-information .alert__right-box .button__ghost-s--default:focus::before, .alert-description-information .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-information);\n  opacity: 0.3;\n  z-index: -1;\n}\n\n.alert-description-success {\n  background-color: var(--color-background-success-light);\n}\n.alert-description-success:before {\n  background-color: var(--color-background-success);\n}\n.alert-description-success .alert__left-box svg {\n  color: var(--color-text-success);\n}\n.alert-description-success .alert__right-box .button__ghost-s--default:hover, .alert-description-success .alert__right-box .button__ghost-s--default:focus, .alert-description-success .alert__right-box .button__ghost-s--default:active {\n  position: relative;\n  background-color: transparent;\n}\n.alert-description-success .alert__right-box .button__ghost-s--default:hover::before, .alert-description-success .alert__right-box .button__ghost-s--default:focus::before, .alert-description-success .alert__right-box .button__ghost-s--default:active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-background-success);\n  opacity: 0.3;\n  z-index: -1;\n}\n\n@media only screen and (max-width: 767px) {\n  .alert-box {\n    min-width: unset;\n    width: calc(100% - 32px);\n  }\n  .alert-box .alert__left-box {\n    align-items: flex-start;\n  }\n}\n.mds-breadcrumb {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.mds-breadcrumb .breadcrumb-icon {\n  width: 20px;\n  height: 20px;\n}\n.mds-breadcrumb .breadcrumb-icon svg {\n  width: 20px;\n  height: 20px;\n  color: var(--color-text-subtlest);\n}\n.mds-breadcrumb .breadcrumb-home + .breadcrumb-icon {\n  margin-left: -4px;\n}\n.mds-breadcrumb .breadcrumb-home svg {\n  color: var(--color-text-subtlest);\n}\n.mds-breadcrumb .default {\n  color: var(--color-text-subtlest);\n}\n.mds-breadcrumb button:disabled {\n  color: var(--color-text-disabled);\n}\n.mds-breadcrumb .breadcrumb-more-button svg {\n  color: var(--color-text-sub);\n}\n\n.button__ghost-xl--error, .button__ghost-xl--disabled, .button__ghost-xl--pressed, .button__ghost-xl--default, .button__error-tertiary-xl--error, .button__error-tertiary-xl--disabled, .button__error-tertiary-xl--pressed, .button__error-tertiary-xl--default, .button__error-xl--error, .button__error-xl--disabled, .button__error-xl--pressed, .button__error-xl--default, .button__tertiary-xl--error, .button__tertiary-xl--disabled, .button__tertiary-xl--pressed, .button__tertiary-xl--default, .button__secondary-xl--error, .button__secondary-xl--disabled, .button__secondary-xl--pressed, .button__secondary-xl--default, .button__primary-xl--error, .button__primary-xl--disabled, .button__primary-xl--pressed, .button__primary-xl--default {\n  min-width: 120px;\n  height: 48px;\n  padding: 0 16px;\n}\n\n.button__ghost-l--error, .button__ghost-l--disabled, .button__ghost-l--pressed, .button__ghost-l--default, .button__error-tertiary-l--error, .button__error-tertiary-l--disabled, .button__error-tertiary-l--pressed, .button__error-tertiary-l--default, .button__error-l--error, .button__error-l--disabled, .button__error-l--pressed, .button__error-l--default, .button__tertiary-l--error, .button__tertiary-l--disabled, .button__tertiary-l--pressed, .button__tertiary-l--default, .button__secondary-l--error, .button__secondary-l--disabled, .button__secondary-l--pressed, .button__secondary-l--default, .button__primary-l--error, .button__primary-l--disabled, .button__primary-l--pressed, .button__primary-l--default {\n  min-width: 100px;\n  height: 40px;\n  padding: 0 16px;\n}\n\n.button__ghost-m--error, .button__ghost-m--disabled, .button__ghost-m--pressed, .button__ghost-m--default, .button__error-tertiary-m--error, .button__error-tertiary-m--disabled, .button__error-tertiary-m--pressed, .button__error-tertiary-m--default, .button__error-m--error, .button__error-m--disabled, .button__error-m--pressed, .button__error-m--default, .button__tertiary-m--error, .button__tertiary-m--disabled, .button__tertiary-m--pressed, .button__tertiary-m--default, .button__secondary-m--error, .button__secondary-m--disabled, .button__secondary-m--pressed, .button__secondary-m--default, .button__primary-m--error, .button__primary-m--disabled, .button__primary-m--pressed, .button__primary-m--default {\n  min-width: 80px;\n  height: 36px;\n  padding: 0 12px;\n}\n\n.button__ghost-s--error, .button__ghost-s--disabled, .button__ghost-s--pressed, .button__ghost-s--default, .button__error-tertiary-s--error, .button__error-tertiary-s--disabled, .button__error-tertiary-s--pressed, .button__error-tertiary-s--default, .button__error-s--error, .button__error-s--disabled, .button__error-s--pressed, .button__error-s--default, .button__tertiary-s--error, .button__tertiary-s--disabled, .button__tertiary-s--pressed, .button__tertiary-s--default, .button__secondary-s--error, .button__secondary-s--disabled, .button__secondary-s--pressed, .button__secondary-s--default, .button__primary-s--error, .button__primary-s--disabled, .button__primary-s--pressed, .button__primary-s--default {\n  min-width: 70px;\n  height: 32px;\n  padding: 0 12px;\n}\n\n.button__ghost-xs--error, .button__ghost-xs--disabled, .button__ghost-xs--pressed, .button__ghost-xs--default, .button__error-tertiary-xs--error, .button__error-tertiary-xs--disabled, .button__error-tertiary-xs--pressed, .button__error-tertiary-xs--default, .button__error-xs--error, .button__error-xs--disabled, .button__error-xs--pressed, .button__error-xs--default, .button__tertiary-xs--error, .button__tertiary-xs--disabled, .button__tertiary-xs--pressed, .button__tertiary-xs--default, .button__secondary-xs--error, .button__secondary-xs--disabled, .button__secondary-xs--pressed, .button__secondary-xs--default, .button__primary-xs--error, .button__primary-xs--disabled, .button__primary-xs--pressed, .button__primary-xs--default {\n  min-width: 60px;\n  height: 28px;\n  padding: 0 8px;\n}\n\n.button__text-xs--default, .button__text-s--default, .button__text-m--default, .button__text-l--default, .button__text-xl--default {\n  color: var(--color-text-sub);\n}\n.button__text-xs--default svg, .button__text-s--default svg, .button__text-m--default svg, .button__text-l--default svg, .button__text-xl--default svg {\n  color: var(--color-text-sub);\n}\n\n.button__text-xs--error:hover, .button__text-xs--error:focus, .button__text-xs--pressed:hover, .button__text-xs--pressed:focus, .button__text-xs--pressed, .button__text-xs--default:hover, .button__text-xs--default:focus, .button__text-s--error:hover, .button__text-s--error:focus, .button__text-s--pressed:hover, .button__text-s--pressed:focus, .button__text-s--pressed, .button__text-s--default:hover, .button__text-s--default:focus, .button__text-m--error:hover, .button__text-m--error:focus, .button__text-m--pressed:hover, .button__text-m--pressed:focus, .button__text-m--pressed, .button__text-m--default:hover, .button__text-m--default:focus, .button__text-l--error:hover, .button__text-l--error:focus, .button__text-l--pressed:hover, .button__text-l--pressed:focus, .button__text-l--pressed, .button__text-l--default:hover, .button__text-l--default:focus, .button__text-xl--error:hover, .button__text-xl--error:focus, .button__text-xl--pressed:hover, .button__text-xl--pressed:focus, .button__text-xl--pressed, .button__text-xl--default:hover, .button__text-xl--default:focus {\n  color: var(--color-text-default);\n}\n.button__text-xs--error:hover svg, .button__text-xs--error:focus svg, .button__text-xs--pressed:hover svg, .button__text-xs--pressed:focus svg, .button__text-xs--pressed svg, .button__text-xs--default:hover svg, .button__text-xs--default:focus svg, .button__text-s--error:hover svg, .button__text-s--error:focus svg, .button__text-s--pressed:hover svg, .button__text-s--pressed:focus svg, .button__text-s--pressed svg, .button__text-s--default:hover svg, .button__text-s--default:focus svg, .button__text-m--error:hover svg, .button__text-m--error:focus svg, .button__text-m--pressed:hover svg, .button__text-m--pressed:focus svg, .button__text-m--pressed svg, .button__text-m--default:hover svg, .button__text-m--default:focus svg, .button__text-l--error:hover svg, .button__text-l--error:focus svg, .button__text-l--pressed:hover svg, .button__text-l--pressed:focus svg, .button__text-l--pressed svg, .button__text-l--default:hover svg, .button__text-l--default:focus svg, .button__text-xl--error:hover svg, .button__text-xl--error:focus svg, .button__text-xl--pressed:hover svg, .button__text-xl--pressed:focus svg, .button__text-xl--pressed svg, .button__text-xl--default:hover svg, .button__text-xl--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__text-xs--error, .button__text-s--error, .button__text-m--error, .button__text-l--error, .button__text-xl--error {\n  color: var(--color-text-error);\n}\n.button__text-xs--error svg, .button__text-s--error svg, .button__text-m--error svg, .button__text-l--error svg, .button__text-xl--error svg {\n  color: var(--color-text-error);\n}\n\n.button__link-xs--default, .button__link-s--default, .button__link-m--default, .button__link-l--default, .button__link-xl--default {\n  color: var(--color-text-information);\n}\n.button__link-xs--default svg, .button__link-s--default svg, .button__link-m--default svg, .button__link-l--default svg, .button__link-xl--default svg {\n  color: var(--color-text-information);\n}\n\n.button__link-xs--pressed:hover, .button__link-xs--pressed:focus, .button__link-xs--pressed, .button__link-xs--default:hover, .button__link-xs--default:focus, .button__link-s--pressed:hover, .button__link-s--pressed:focus, .button__link-s--pressed, .button__link-s--default:hover, .button__link-s--default:focus, .button__link-m--pressed:hover, .button__link-m--pressed:focus, .button__link-m--pressed, .button__link-m--default:hover, .button__link-m--default:focus, .button__link-l--pressed:hover, .button__link-l--pressed:focus, .button__link-l--pressed, .button__link-l--default:hover, .button__link-l--default:focus, .button__link-xl--pressed:hover, .button__link-xl--pressed:focus, .button__link-xl--pressed, .button__link-xl--default:hover, .button__link-xl--default:focus {\n  position: relative;\n  color: var(--color-text-information);\n}\n.button__link-xs--pressed:hover::after, .button__link-xs--pressed:focus::after, .button__link-xs--pressed::after, .button__link-xs--default:hover::after, .button__link-xs--default:focus::after, .button__link-s--pressed:hover::after, .button__link-s--pressed:focus::after, .button__link-s--pressed::after, .button__link-s--default:hover::after, .button__link-s--default:focus::after, .button__link-m--pressed:hover::after, .button__link-m--pressed:focus::after, .button__link-m--pressed::after, .button__link-m--default:hover::after, .button__link-m--default:focus::after, .button__link-l--pressed:hover::after, .button__link-l--pressed:focus::after, .button__link-l--pressed::after, .button__link-l--default:hover::after, .button__link-l--default:focus::after, .button__link-xl--pressed:hover::after, .button__link-xl--pressed:focus::after, .button__link-xl--pressed::after, .button__link-xl--default:hover::after, .button__link-xl--default:focus::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color-text-information);\n}\n.button__link-xs--pressed:hover svg, .button__link-xs--pressed:focus svg, .button__link-xs--pressed svg, .button__link-xs--default:hover svg, .button__link-xs--default:focus svg, .button__link-s--pressed:hover svg, .button__link-s--pressed:focus svg, .button__link-s--pressed svg, .button__link-s--default:hover svg, .button__link-s--default:focus svg, .button__link-m--pressed:hover svg, .button__link-m--pressed:focus svg, .button__link-m--pressed svg, .button__link-m--default:hover svg, .button__link-m--default:focus svg, .button__link-l--pressed:hover svg, .button__link-l--pressed:focus svg, .button__link-l--pressed svg, .button__link-l--default:hover svg, .button__link-l--default:focus svg, .button__link-xl--pressed:hover svg, .button__link-xl--pressed:focus svg, .button__link-xl--pressed svg, .button__link-xl--default:hover svg, .button__link-xl--default:focus svg {\n  color: var(--color-text-information);\n}\n\n.button__primary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xl--default.icon-button img, .button__primary-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-xl--default:hover, .button__primary-xl--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--default:hover svg, .button__primary-xl--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--default.primary-action {\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n  background-color: var(--color-background-primary);\n  clip-path: polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%);\n}\n.button__primary-xl--default.primary-action:hover, .button__primary-xl--default.primary-action:focus, .button__primary-xl--default.primary-action:active {\n  background-color: var(--color-background-primary-accent);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n\n.button__primary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xl--pressed.icon-button img, .button__primary-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-xl--pressed:hover, .button__primary-xl--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--pressed:hover svg, .button__primary-xl--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--pressed.primary-action {\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n  background-color: var(--color-background-primary);\n  clip-path: polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%);\n}\n.button__primary-xl--pressed.primary-action:hover, .button__primary-xl--pressed.primary-action:focus, .button__primary-xl--pressed.primary-action:active {\n  background-color: var(--color-background-primary-accent);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n\n.button__primary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__primary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__primary-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xl--disabled.icon-button img, .button__primary-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-xl--disabled.primary-action {\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n  background-color: var(--color-background-primary);\n  clip-path: polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%);\n  background-color: var(--color-background-disabled);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n.button__primary-xl--disabled.primary-action:hover, .button__primary-xl--disabled.primary-action:focus, .button__primary-xl--disabled.primary-action:active {\n  background-color: var(--color-background-primary-accent);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n.button__primary-xl--disabled.primary-action:hover, .button__primary-xl--disabled.primary-action:focus, .button__primary-xl--disabled.primary-action:active {\n  background-color: var(--color-background-disabled);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n\n.button__primary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xl--error.icon-button img, .button__primary-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-xl--error:hover, .button__primary-xl--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--error:hover svg, .button__primary-xl--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xl--error.primary-action {\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n  background-color: var(--color-background-primary);\n  clip-path: polygon(0% 14px, 14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%);\n}\n.button__primary-xl--error.primary-action:hover, .button__primary-xl--error.primary-action:focus, .button__primary-xl--error.primary-action:active {\n  background-color: var(--color-background-primary-accent);\n  background-size: 51% 100%;\n  background-repeat: no-repeat;\n}\n\n.button__primary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-l--default.icon-button img, .button__primary-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-l--default:hover, .button__primary-l--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--default:hover svg, .button__primary-l--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-l--pressed.icon-button img, .button__primary-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-l--pressed:hover, .button__primary-l--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--pressed:hover svg, .button__primary-l--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__primary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__primary-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-l--disabled.icon-button img, .button__primary-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-l--error.icon-button img, .button__primary-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__primary-l--error:hover, .button__primary-l--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-l--error:hover svg, .button__primary-l--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-m--default.icon-button img, .button__primary-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-m--default:hover, .button__primary-m--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--default:hover svg, .button__primary-m--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-m--pressed.icon-button img, .button__primary-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-m--pressed:hover, .button__primary-m--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--pressed:hover svg, .button__primary-m--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__primary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__primary-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-m--disabled.icon-button img, .button__primary-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-m--error.icon-button img, .button__primary-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-m--error:hover, .button__primary-m--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-m--error:hover svg, .button__primary-m--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-s--default.icon-button img, .button__primary-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-s--default:hover, .button__primary-s--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--default:hover svg, .button__primary-s--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-s--pressed.icon-button img, .button__primary-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-s--pressed:hover, .button__primary-s--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--pressed:hover svg, .button__primary-s--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__primary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__primary-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-s--disabled.icon-button img, .button__primary-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-s--error.icon-button img, .button__primary-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__primary-s--error:hover, .button__primary-s--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-s--error:hover svg, .button__primary-s--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xs--default.icon-button img, .button__primary-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__primary-xs--default:hover, .button__primary-xs--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--default:hover svg, .button__primary-xs--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xs--pressed.icon-button img, .button__primary-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__primary-xs--pressed:hover, .button__primary-xs--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--pressed:hover svg, .button__primary-xs--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__primary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__primary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__primary-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xs--disabled.icon-button img, .button__primary-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__primary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-primary);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__primary-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__primary-xs--error.icon-button img, .button__primary-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__primary-xs--error:hover, .button__primary-xs--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__primary-xs--error:hover svg, .button__primary-xs--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xl--default.icon-button img, .button__secondary-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-xl--default:hover, .button__secondary-xl--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--default:hover svg, .button__secondary-xl--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xl--pressed.icon-button img, .button__secondary-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-xl--pressed:hover, .button__secondary-xl--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--pressed:hover svg, .button__secondary-xl--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__secondary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__secondary-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xl--disabled.icon-button img, .button__secondary-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xl--error.icon-button img, .button__secondary-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-xl--error:hover, .button__secondary-xl--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xl--error:hover svg, .button__secondary-xl--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-l--default.icon-button img, .button__secondary-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-l--default:hover, .button__secondary-l--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--default:hover svg, .button__secondary-l--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-l--pressed.icon-button img, .button__secondary-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-l--pressed:hover, .button__secondary-l--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--pressed:hover svg, .button__secondary-l--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__secondary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__secondary-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-l--disabled.icon-button img, .button__secondary-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-l--error.icon-button img, .button__secondary-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__secondary-l--error:hover, .button__secondary-l--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-l--error:hover svg, .button__secondary-l--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-m--default.icon-button img, .button__secondary-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-m--default:hover, .button__secondary-m--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--default:hover svg, .button__secondary-m--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-m--pressed.icon-button img, .button__secondary-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-m--pressed:hover, .button__secondary-m--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--pressed:hover svg, .button__secondary-m--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__secondary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__secondary-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-m--disabled.icon-button img, .button__secondary-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-m--error.icon-button img, .button__secondary-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-m--error:hover, .button__secondary-m--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-m--error:hover svg, .button__secondary-m--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-s--default.icon-button img, .button__secondary-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-s--default:hover, .button__secondary-s--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--default:hover svg, .button__secondary-s--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-s--pressed.icon-button img, .button__secondary-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-s--pressed:hover, .button__secondary-s--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--pressed:hover svg, .button__secondary-s--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__secondary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__secondary-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-s--disabled.icon-button img, .button__secondary-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-s--error.icon-button img, .button__secondary-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__secondary-s--error:hover, .button__secondary-s--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-s--error:hover svg, .button__secondary-s--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xs--default.icon-button img, .button__secondary-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__secondary-xs--default:hover, .button__secondary-xs--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--default:hover svg, .button__secondary-xs--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xs--pressed.icon-button img, .button__secondary-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__secondary-xs--pressed:hover, .button__secondary-xs--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--pressed:hover svg, .button__secondary-xs--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__secondary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__secondary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__secondary-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xs--disabled.icon-button img, .button__secondary-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__secondary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-secondary);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__secondary-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__secondary-xs--error.icon-button img, .button__secondary-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__secondary-xs--error:hover, .button__secondary-xs--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__secondary-xs--error:hover svg, .button__secondary-xs--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__tertiary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xl--default svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xl--default.icon-button img, .button__tertiary-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-xl--default:hover, .button__tertiary-xl--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--default:hover svg, .button__tertiary-xl--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xl--pressed svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xl--pressed.icon-button img, .button__tertiary-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-xl--pressed:hover, .button__tertiary-xl--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--pressed:hover svg, .button__tertiary-xl--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__tertiary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xl--disabled svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__tertiary-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xl--disabled.icon-button img, .button__tertiary-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xl--error svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xl--error.icon-button img, .button__tertiary-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-xl--error:hover, .button__tertiary-xl--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xl--error:hover svg, .button__tertiary-xl--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-l--default svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-l--default.icon-button img, .button__tertiary-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-l--default:hover, .button__tertiary-l--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--default:hover svg, .button__tertiary-l--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-l--pressed svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-l--pressed.icon-button img, .button__tertiary-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-l--pressed:hover, .button__tertiary-l--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--pressed:hover svg, .button__tertiary-l--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__tertiary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-l--disabled svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__tertiary-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-l--disabled.icon-button img, .button__tertiary-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-l--error svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-l--error.icon-button img, .button__tertiary-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__tertiary-l--error:hover, .button__tertiary-l--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-l--error:hover svg, .button__tertiary-l--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-m--default svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-m--default.icon-button img, .button__tertiary-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-m--default:hover, .button__tertiary-m--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--default:hover svg, .button__tertiary-m--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-m--pressed svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-m--pressed.icon-button img, .button__tertiary-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-m--pressed:hover, .button__tertiary-m--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--pressed:hover svg, .button__tertiary-m--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__tertiary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-m--disabled svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__tertiary-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-m--disabled.icon-button img, .button__tertiary-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-m--error svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-m--error.icon-button img, .button__tertiary-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-m--error:hover, .button__tertiary-m--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-m--error:hover svg, .button__tertiary-m--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-s--default svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-s--default.icon-button img, .button__tertiary-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-s--default:hover, .button__tertiary-s--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--default:hover svg, .button__tertiary-s--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-s--pressed svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-s--pressed.icon-button img, .button__tertiary-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-s--pressed:hover, .button__tertiary-s--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--pressed:hover svg, .button__tertiary-s--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__tertiary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-s--disabled svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__tertiary-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-s--disabled.icon-button img, .button__tertiary-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-s--error svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-s--error.icon-button img, .button__tertiary-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__tertiary-s--error:hover, .button__tertiary-s--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-s--error:hover svg, .button__tertiary-s--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xs--default svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xs--default.icon-button img, .button__tertiary-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__tertiary-xs--default:hover, .button__tertiary-xs--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--default:hover svg, .button__tertiary-xs--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xs--pressed svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xs--pressed.icon-button img, .button__tertiary-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__tertiary-xs--pressed:hover, .button__tertiary-xs--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--pressed:hover svg, .button__tertiary-xs--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__tertiary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__tertiary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xs--disabled svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__tertiary-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xs--disabled.icon-button img, .button__tertiary-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__tertiary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-tertiary);\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__tertiary-xs--error svg {\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__tertiary-xs--error.icon-button img, .button__tertiary-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__tertiary-xs--error:hover, .button__tertiary-xs--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__tertiary-xs--error:hover svg, .button__tertiary-xs--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__error-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xl--default.icon-button img, .button__error-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-xl--default:hover, .button__error-xl--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--default:hover svg, .button__error-xl--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xl--pressed.icon-button img, .button__error-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-xl--pressed:hover, .button__error-xl--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--pressed:hover svg, .button__error-xl--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__error-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xl--disabled.icon-button img, .button__error-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xl--error.icon-button img, .button__error-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-xl--error:hover, .button__error-xl--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xl--error:hover svg, .button__error-xl--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-l--default.icon-button img, .button__error-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-l--default:hover, .button__error-l--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--default:hover svg, .button__error-l--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-l--pressed.icon-button img, .button__error-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-l--pressed:hover, .button__error-l--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--pressed:hover svg, .button__error-l--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__error-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-l--disabled.icon-button img, .button__error-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-l--error.icon-button img, .button__error-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-l--error:hover, .button__error-l--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-l--error:hover svg, .button__error-l--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-m--default.icon-button img, .button__error-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-m--default:hover, .button__error-m--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--default:hover svg, .button__error-m--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-m--pressed.icon-button img, .button__error-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-m--pressed:hover, .button__error-m--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--pressed:hover svg, .button__error-m--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__error-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-m--disabled.icon-button img, .button__error-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-m--error.icon-button img, .button__error-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-m--error:hover, .button__error-m--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-m--error:hover svg, .button__error-m--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-s--default.icon-button img, .button__error-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-s--default:hover, .button__error-s--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--default:hover svg, .button__error-s--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-s--pressed.icon-button img, .button__error-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-s--pressed:hover, .button__error-s--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--pressed:hover svg, .button__error-s--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__error-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-s--disabled.icon-button img, .button__error-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-s--error.icon-button img, .button__error-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-s--error:hover, .button__error-s--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-s--error:hover svg, .button__error-s--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xs--default.icon-button img, .button__error-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-xs--default:hover, .button__error-xs--default:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--default:hover svg, .button__error-xs--default:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xs--pressed.icon-button img, .button__error-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-xs--pressed:hover, .button__error-xs--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--pressed:hover svg, .button__error-xs--pressed:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__error-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xs--disabled.icon-button img, .button__error-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-error);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-xs--error.icon-button img, .button__error-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-xs--error:hover, .button__error-xs--error:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__error-xs--error:hover svg, .button__error-xs--error:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__error-tertiary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xl--default svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xl--default.icon-button img, .button__error-tertiary-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-xl--default:hover, .button__error-tertiary-xl--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--default:hover svg, .button__error-tertiary-xl--default:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xl--pressed svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xl--pressed.icon-button img, .button__error-tertiary-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-xl--pressed:hover, .button__error-tertiary-xl--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--pressed:hover svg, .button__error-tertiary-xl--pressed:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__error-tertiary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xl--disabled svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-tertiary-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xl--disabled.icon-button img, .button__error-tertiary-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xl--error svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xl--error.icon-button img, .button__error-tertiary-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-xl--error:hover, .button__error-tertiary-xl--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xl--error:hover svg, .button__error-tertiary-xl--error:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-l--default svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-l--default.icon-button img, .button__error-tertiary-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-l--default:hover, .button__error-tertiary-l--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--default:hover svg, .button__error-tertiary-l--default:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-l--pressed svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-l--pressed.icon-button img, .button__error-tertiary-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-l--pressed:hover, .button__error-tertiary-l--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--pressed:hover svg, .button__error-tertiary-l--pressed:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__error-tertiary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-l--disabled svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-tertiary-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-l--disabled.icon-button img, .button__error-tertiary-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-l--error svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-l--error.icon-button img, .button__error-tertiary-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__error-tertiary-l--error:hover, .button__error-tertiary-l--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-l--error:hover svg, .button__error-tertiary-l--error:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-m--default svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-m--default.icon-button img, .button__error-tertiary-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-m--default:hover, .button__error-tertiary-m--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--default:hover svg, .button__error-tertiary-m--default:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-m--pressed svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-m--pressed.icon-button img, .button__error-tertiary-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-m--pressed:hover, .button__error-tertiary-m--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--pressed:hover svg, .button__error-tertiary-m--pressed:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__error-tertiary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-m--disabled svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-tertiary-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-m--disabled.icon-button img, .button__error-tertiary-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-m--error svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-m--error.icon-button img, .button__error-tertiary-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-m--error:hover, .button__error-tertiary-m--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-m--error:hover svg, .button__error-tertiary-m--error:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-s--default svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-s--default.icon-button img, .button__error-tertiary-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-s--default:hover, .button__error-tertiary-s--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--default:hover svg, .button__error-tertiary-s--default:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-s--pressed svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-s--pressed.icon-button img, .button__error-tertiary-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-s--pressed:hover, .button__error-tertiary-s--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--pressed:hover svg, .button__error-tertiary-s--pressed:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__error-tertiary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-s--disabled svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-tertiary-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-s--disabled.icon-button img, .button__error-tertiary-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-s--error svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-s--error.icon-button img, .button__error-tertiary-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__error-tertiary-s--error:hover, .button__error-tertiary-s--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-s--error:hover svg, .button__error-tertiary-s--error:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xs--default svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xs--default.icon-button img, .button__error-tertiary-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-tertiary-xs--default:hover, .button__error-tertiary-xs--default:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--default:hover svg, .button__error-tertiary-xs--default:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xs--pressed svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xs--pressed.icon-button img, .button__error-tertiary-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-tertiary-xs--pressed:hover, .button__error-tertiary-xs--pressed:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--pressed:hover svg, .button__error-tertiary-xs--pressed:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__error-tertiary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  cursor: default;\n}\n.button__error-tertiary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xs--disabled svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__error-tertiary-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xs--disabled.icon-button img, .button__error-tertiary-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-tertiary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__error-tertiary-xs--error svg {\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__error-tertiary-xs--error.icon-button img, .button__error-tertiary-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__error-tertiary-xs--error:hover, .button__error-tertiary-xs--error:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__error-tertiary-xs--error:hover svg, .button__error-tertiary-xs--error:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__text-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xl--default.icon-button img, .button__text-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xl--pressed.icon-button img, .button__text-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__text-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xl--disabled.icon-button img, .button__text-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xl--error.icon-button img, .button__text-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-l--default.icon-button img, .button__text-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-l--pressed.icon-button img, .button__text-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__text-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-l--disabled.icon-button img, .button__text-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-l--error.icon-button img, .button__text-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__text-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-m--default.icon-button img, .button__text-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-m--pressed.icon-button img, .button__text-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__text-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-m--disabled.icon-button img, .button__text-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-m--error.icon-button img, .button__text-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-s--default.icon-button img, .button__text-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-s--pressed.icon-button img, .button__text-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__text-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-s--disabled.icon-button img, .button__text-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-s--error.icon-button img, .button__text-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__text-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xs--default.icon-button img, .button__text-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__text-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xs--pressed.icon-button img, .button__text-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__text-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__text-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xs--disabled.icon-button img, .button__text-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__text-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__text-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__text-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__text-xs--error.icon-button img, .button__text-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__link-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xl--default.icon-button img, .button__link-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xl--pressed.icon-button img, .button__link-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__link-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xl--disabled.icon-button img, .button__link-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xl--error.icon-button img, .button__link-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-l--default.icon-button img, .button__link-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-l--pressed.icon-button img, .button__link-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__link-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-l--disabled.icon-button img, .button__link-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-l--error.icon-button img, .button__link-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__link-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-m--default.icon-button img, .button__link-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-m--pressed.icon-button img, .button__link-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__link-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-m--disabled.icon-button img, .button__link-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-m--error.icon-button img, .button__link-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-s--default.icon-button img, .button__link-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-s--pressed.icon-button img, .button__link-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__link-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-s--disabled.icon-button img, .button__link-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-s--error.icon-button img, .button__link-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__link-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xs--default.icon-button img, .button__link-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__link-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xs--pressed.icon-button img, .button__link-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__link-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: default;\n}\n.button__link-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xs--disabled.icon-button img, .button__link-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__link-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n}\n.button__link-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__link-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__link-xs--error.icon-button img, .button__link-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__ghost-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xl--default svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xl--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xl--default.icon-button img, .button__ghost-xl--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-xl--default:hover, .button__ghost-xl--default:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xl--default:hover svg, .button__ghost-xl--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xl--pressed svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xl--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xl--pressed.icon-button img, .button__ghost-xl--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-xl--pressed:hover, .button__ghost-xl--pressed:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xl--pressed:hover svg, .button__ghost-xl--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: transparent;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__ghost-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xl--disabled svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__ghost-xl--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xl--disabled.icon-button img, .button__ghost-xl--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xl--error svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xl--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xl--error.icon-button img, .button__ghost-xl--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-xl--error:hover, .button__ghost-xl--error:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xl--error:hover svg, .button__ghost-xl--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-l--default svg {\n  color: var(--color-text-default);\n}\n.button__ghost-l--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-l--default.icon-button img, .button__ghost-l--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-l--default:hover, .button__ghost-l--default:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-l--default:hover svg, .button__ghost-l--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-l--pressed svg {\n  color: var(--color-text-default);\n}\n.button__ghost-l--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-l--pressed.icon-button img, .button__ghost-l--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-l--pressed:hover, .button__ghost-l--pressed:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-l--pressed:hover svg, .button__ghost-l--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: transparent;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__ghost-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-l--disabled svg {\n  color: var(--color-text-default);\n}\n.button__ghost-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__ghost-l--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-l--disabled.icon-button img, .button__ghost-l--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-l--error svg {\n  color: var(--color-text-default);\n}\n.button__ghost-l--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-l--error.icon-button img, .button__ghost-l--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.button__ghost-l--error:hover, .button__ghost-l--error:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-l--error:hover svg, .button__ghost-l--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-m--default svg {\n  color: var(--color-text-default);\n}\n.button__ghost-m--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-m--default.icon-button img, .button__ghost-m--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-m--default:hover, .button__ghost-m--default:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-m--default:hover svg, .button__ghost-m--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-m--pressed svg {\n  color: var(--color-text-default);\n}\n.button__ghost-m--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-m--pressed.icon-button img, .button__ghost-m--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-m--pressed:hover, .button__ghost-m--pressed:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-m--pressed:hover svg, .button__ghost-m--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: transparent;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__ghost-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-m--disabled svg {\n  color: var(--color-text-default);\n}\n.button__ghost-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__ghost-m--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-m--disabled.icon-button img, .button__ghost-m--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-m--error svg {\n  color: var(--color-text-default);\n}\n.button__ghost-m--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-m--error.icon-button img, .button__ghost-m--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-m--error:hover, .button__ghost-m--error:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-m--error:hover svg, .button__ghost-m--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-s--default svg {\n  color: var(--color-text-default);\n}\n.button__ghost-s--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-s--default.icon-button img, .button__ghost-s--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-s--default:hover, .button__ghost-s--default:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-s--default:hover svg, .button__ghost-s--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-s--pressed svg {\n  color: var(--color-text-default);\n}\n.button__ghost-s--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-s--pressed.icon-button img, .button__ghost-s--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-s--pressed:hover, .button__ghost-s--pressed:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-s--pressed:hover svg, .button__ghost-s--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: transparent;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__ghost-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-s--disabled svg {\n  color: var(--color-text-default);\n}\n.button__ghost-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__ghost-s--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-s--disabled.icon-button img, .button__ghost-s--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-s--error svg {\n  color: var(--color-text-default);\n}\n.button__ghost-s--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-s--error.icon-button img, .button__ghost-s--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.button__ghost-s--error:hover, .button__ghost-s--error:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-s--error:hover svg, .button__ghost-s--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xs--default svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xs--default.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xs--default.icon-button img, .button__ghost-xs--default.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__ghost-xs--default:hover, .button__ghost-xs--default:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xs--default:hover svg, .button__ghost-xs--default:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xs--pressed svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xs--pressed.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xs--pressed.icon-button img, .button__ghost-xs--pressed.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__ghost-xs--pressed:hover, .button__ghost-xs--pressed:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xs--pressed:hover svg, .button__ghost-xs--pressed:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__ghost-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  cursor: unset;\n  background-color: transparent;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  cursor: default;\n}\n.button__ghost-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xs--disabled svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__ghost-xs--disabled.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xs--disabled.icon-button img, .button__ghost-xs--disabled.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__ghost-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n}\n.button__ghost-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__ghost-xs--error svg {\n  color: var(--color-text-default);\n}\n.button__ghost-xs--error.icon-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.button__ghost-xs--error.icon-button img, .button__ghost-xs--error.icon-button svg {\n  display: block;\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.button__ghost-xs--error:hover, .button__ghost-xs--error:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__ghost-xs--error:hover svg, .button__ghost-xs--error:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-primary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--default.icon-button img, .button__icon-primary-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-primary-xl--default.icon-button-only img, .button__icon-primary-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xl--default.icon-button-only img, .button__icon-primary-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-xl--default.icon-button:hover, .button__icon-primary-xl--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--default.icon-button:hover svg, .button__icon-primary-xl--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n}\n.button__icon-primary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--pressed.icon-button img, .button__icon-primary-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-primary-xl--pressed.icon-button-only img, .button__icon-primary-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xl--pressed.icon-button-only img, .button__icon-primary-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-xl--pressed.icon-button:hover, .button__icon-primary-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--pressed.icon-button:hover svg, .button__icon-primary-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-primary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-primary-xl--disabled.icon-button img, .button__icon-primary-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-primary-xl--disabled.icon-button-only img, .button__icon-primary-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xl--disabled.icon-button-only img, .button__icon-primary-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--error.icon-button img, .button__icon-primary-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-primary-xl--error.icon-button-only img, .button__icon-primary-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xl--error.icon-button-only img, .button__icon-primary-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-xl--error.icon-button:hover, .button__icon-primary-xl--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xl--error.icon-button:hover svg, .button__icon-primary-xl--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--default.icon-button img, .button__icon-primary-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-primary-l--default.icon-button-only img, .button__icon-primary-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-l--default.icon-button-only img, .button__icon-primary-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-l--default.icon-button:hover, .button__icon-primary-l--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--default.icon-button:hover svg, .button__icon-primary-l--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n}\n.button__icon-primary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--pressed.icon-button img, .button__icon-primary-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-primary-l--pressed.icon-button-only img, .button__icon-primary-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-l--pressed.icon-button-only img, .button__icon-primary-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-l--pressed.icon-button:hover, .button__icon-primary-l--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--pressed.icon-button:hover svg, .button__icon-primary-l--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-primary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-primary-l--disabled.icon-button img, .button__icon-primary-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-primary-l--disabled.icon-button-only img, .button__icon-primary-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-l--disabled.icon-button-only img, .button__icon-primary-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--error.icon-button img, .button__icon-primary-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-primary-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-primary-l--error.icon-button-only img, .button__icon-primary-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-l--error.icon-button-only img, .button__icon-primary-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-primary-l--error.icon-button:hover, .button__icon-primary-l--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-l--error.icon-button:hover svg, .button__icon-primary-l--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--default.icon-button img, .button__icon-primary-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-primary-m--default.icon-button-only img, .button__icon-primary-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-m--default.icon-button-only img, .button__icon-primary-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-m--default.icon-button:hover, .button__icon-primary-m--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--default.icon-button:hover svg, .button__icon-primary-m--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n}\n.button__icon-primary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--pressed.icon-button img, .button__icon-primary-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-primary-m--pressed.icon-button-only img, .button__icon-primary-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-m--pressed.icon-button-only img, .button__icon-primary-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-m--pressed.icon-button:hover, .button__icon-primary-m--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--pressed.icon-button:hover svg, .button__icon-primary-m--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-primary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-primary-m--disabled.icon-button img, .button__icon-primary-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-primary-m--disabled.icon-button-only img, .button__icon-primary-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-m--disabled.icon-button-only img, .button__icon-primary-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--error.icon-button img, .button__icon-primary-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-primary-m--error.icon-button-only img, .button__icon-primary-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-m--error.icon-button-only img, .button__icon-primary-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-m--error.icon-button:hover, .button__icon-primary-m--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-m--error.icon-button:hover svg, .button__icon-primary-m--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--default.icon-button img, .button__icon-primary-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-primary-s--default.icon-button-only img, .button__icon-primary-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-s--default.icon-button-only img, .button__icon-primary-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-s--default.icon-button:hover, .button__icon-primary-s--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--default.icon-button:hover svg, .button__icon-primary-s--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n}\n.button__icon-primary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--pressed.icon-button img, .button__icon-primary-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-primary-s--pressed.icon-button-only img, .button__icon-primary-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-s--pressed.icon-button-only img, .button__icon-primary-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-s--pressed.icon-button:hover, .button__icon-primary-s--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--pressed.icon-button:hover svg, .button__icon-primary-s--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-primary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-primary-s--disabled.icon-button img, .button__icon-primary-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-primary-s--disabled.icon-button-only img, .button__icon-primary-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-s--disabled.icon-button-only img, .button__icon-primary-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--error.icon-button img, .button__icon-primary-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-primary-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-primary-s--error.icon-button-only img, .button__icon-primary-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-s--error.icon-button-only img, .button__icon-primary-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-primary-s--error.icon-button:hover, .button__icon-primary-s--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-s--error.icon-button:hover svg, .button__icon-primary-s--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--default.icon-button img, .button__icon-primary-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-primary-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-primary-xs--default.icon-button-only img, .button__icon-primary-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xs--default.icon-button-only img, .button__icon-primary-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-primary-xs--default.icon-button:hover, .button__icon-primary-xs--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--default.icon-button:hover svg, .button__icon-primary-xs--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n}\n.button__icon-primary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--pressed.icon-button img, .button__icon-primary-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-primary-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-primary-xs--pressed.icon-button-only img, .button__icon-primary-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xs--pressed.icon-button-only img, .button__icon-primary-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-primary-xs--pressed.icon-button:hover, .button__icon-primary-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--pressed.icon-button:hover svg, .button__icon-primary-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-primary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-primary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-primary-xs--disabled.icon-button img, .button__icon-primary-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-primary-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-primary-xs--disabled.icon-button-only img, .button__icon-primary-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xs--disabled.icon-button-only img, .button__icon-primary-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-primary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-primary);\n}\n.button__icon-primary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-primary-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--error.icon-button img, .button__icon-primary-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-primary-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-primary-xs--error.icon-button-only img, .button__icon-primary-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-primary-xs--error.icon-button-only img, .button__icon-primary-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-primary-xs--error.icon-button:hover, .button__icon-primary-xs--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-primary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-primary-xs--error.icon-button:hover svg, .button__icon-primary-xs--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--default.icon-button img, .button__icon-secondary-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-secondary-xl--default.icon-button-only img, .button__icon-secondary-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xl--default.icon-button-only img, .button__icon-secondary-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-xl--default.icon-button:hover, .button__icon-secondary-xl--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--default.icon-button:hover svg, .button__icon-secondary-xl--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n}\n.button__icon-secondary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--pressed.icon-button img, .button__icon-secondary-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-secondary-xl--pressed.icon-button-only img, .button__icon-secondary-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xl--pressed.icon-button-only img, .button__icon-secondary-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-xl--pressed.icon-button:hover, .button__icon-secondary-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--pressed.icon-button:hover svg, .button__icon-secondary-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-secondary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-secondary-xl--disabled.icon-button img, .button__icon-secondary-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-secondary-xl--disabled.icon-button-only img, .button__icon-secondary-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xl--disabled.icon-button-only img, .button__icon-secondary-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--error.icon-button img, .button__icon-secondary-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-secondary-xl--error.icon-button-only img, .button__icon-secondary-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xl--error.icon-button-only img, .button__icon-secondary-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-xl--error.icon-button:hover, .button__icon-secondary-xl--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xl--error.icon-button:hover svg, .button__icon-secondary-xl--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--default.icon-button img, .button__icon-secondary-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-secondary-l--default.icon-button-only img, .button__icon-secondary-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-l--default.icon-button-only img, .button__icon-secondary-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-l--default.icon-button:hover, .button__icon-secondary-l--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--default.icon-button:hover svg, .button__icon-secondary-l--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n}\n.button__icon-secondary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--pressed.icon-button img, .button__icon-secondary-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-secondary-l--pressed.icon-button-only img, .button__icon-secondary-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-l--pressed.icon-button-only img, .button__icon-secondary-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-l--pressed.icon-button:hover, .button__icon-secondary-l--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--pressed.icon-button:hover svg, .button__icon-secondary-l--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-secondary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-secondary-l--disabled.icon-button img, .button__icon-secondary-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-secondary-l--disabled.icon-button-only img, .button__icon-secondary-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-l--disabled.icon-button-only img, .button__icon-secondary-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--error.icon-button img, .button__icon-secondary-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-secondary-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-secondary-l--error.icon-button-only img, .button__icon-secondary-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-l--error.icon-button-only img, .button__icon-secondary-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-secondary-l--error.icon-button:hover, .button__icon-secondary-l--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-l--error.icon-button:hover svg, .button__icon-secondary-l--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--default.icon-button img, .button__icon-secondary-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-secondary-m--default.icon-button-only img, .button__icon-secondary-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-m--default.icon-button-only img, .button__icon-secondary-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-m--default.icon-button:hover, .button__icon-secondary-m--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--default.icon-button:hover svg, .button__icon-secondary-m--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n}\n.button__icon-secondary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--pressed.icon-button img, .button__icon-secondary-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-secondary-m--pressed.icon-button-only img, .button__icon-secondary-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-m--pressed.icon-button-only img, .button__icon-secondary-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-m--pressed.icon-button:hover, .button__icon-secondary-m--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--pressed.icon-button:hover svg, .button__icon-secondary-m--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-secondary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-secondary-m--disabled.icon-button img, .button__icon-secondary-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-secondary-m--disabled.icon-button-only img, .button__icon-secondary-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-m--disabled.icon-button-only img, .button__icon-secondary-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--error.icon-button img, .button__icon-secondary-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-secondary-m--error.icon-button-only img, .button__icon-secondary-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-m--error.icon-button-only img, .button__icon-secondary-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-m--error.icon-button:hover, .button__icon-secondary-m--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-m--error.icon-button:hover svg, .button__icon-secondary-m--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--default.icon-button img, .button__icon-secondary-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-secondary-s--default.icon-button-only img, .button__icon-secondary-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-s--default.icon-button-only img, .button__icon-secondary-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-s--default.icon-button:hover, .button__icon-secondary-s--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--default.icon-button:hover svg, .button__icon-secondary-s--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n}\n.button__icon-secondary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--pressed.icon-button img, .button__icon-secondary-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-secondary-s--pressed.icon-button-only img, .button__icon-secondary-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-s--pressed.icon-button-only img, .button__icon-secondary-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-s--pressed.icon-button:hover, .button__icon-secondary-s--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--pressed.icon-button:hover svg, .button__icon-secondary-s--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-secondary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-secondary-s--disabled.icon-button img, .button__icon-secondary-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-secondary-s--disabled.icon-button-only img, .button__icon-secondary-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-s--disabled.icon-button-only img, .button__icon-secondary-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--error.icon-button img, .button__icon-secondary-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-secondary-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-secondary-s--error.icon-button-only img, .button__icon-secondary-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-s--error.icon-button-only img, .button__icon-secondary-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-secondary-s--error.icon-button:hover, .button__icon-secondary-s--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-s--error.icon-button:hover svg, .button__icon-secondary-s--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--default.icon-button img, .button__icon-secondary-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-secondary-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-secondary-xs--default.icon-button-only img, .button__icon-secondary-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xs--default.icon-button-only img, .button__icon-secondary-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-secondary-xs--default.icon-button:hover, .button__icon-secondary-xs--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--default.icon-button:hover svg, .button__icon-secondary-xs--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n}\n.button__icon-secondary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--pressed.icon-button img, .button__icon-secondary-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-secondary-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-secondary-xs--pressed.icon-button-only img, .button__icon-secondary-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xs--pressed.icon-button-only img, .button__icon-secondary-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-secondary-xs--pressed.icon-button:hover, .button__icon-secondary-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--pressed.icon-button:hover svg, .button__icon-secondary-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-secondary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-secondary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-secondary-xs--disabled.icon-button img, .button__icon-secondary-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-secondary-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-secondary-xs--disabled.icon-button-only img, .button__icon-secondary-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xs--disabled.icon-button-only img, .button__icon-secondary-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-secondary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-secondary);\n}\n.button__icon-secondary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-secondary-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--error.icon-button img, .button__icon-secondary-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-secondary-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-secondary-xs--error.icon-button-only img, .button__icon-secondary-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-secondary-xs--error.icon-button-only img, .button__icon-secondary-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-secondary-xs--error.icon-button:hover, .button__icon-secondary-xs--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-secondary-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-secondary-xs--error.icon-button:hover svg, .button__icon-secondary-xs--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-tertiary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xl--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--default.icon-button img, .button__icon-tertiary-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-tertiary-xl--default.icon-button-only img, .button__icon-tertiary-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xl--default.icon-button-only img, .button__icon-tertiary-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-xl--default.icon-button:hover, .button__icon-tertiary-xl--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--default.icon-button:hover svg, .button__icon-tertiary-xl--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-tertiary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xl--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--pressed.icon-button img, .button__icon-tertiary-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-tertiary-xl--pressed.icon-button-only img, .button__icon-tertiary-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xl--pressed.icon-button-only img, .button__icon-tertiary-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-xl--pressed.icon-button:hover, .button__icon-tertiary-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--pressed.icon-button:hover svg, .button__icon-tertiary-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-tertiary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xl--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-tertiary-xl--disabled.icon-button img, .button__icon-tertiary-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-tertiary-xl--disabled.icon-button-only img, .button__icon-tertiary-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xl--disabled.icon-button-only img, .button__icon-tertiary-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xl--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--error.icon-button img, .button__icon-tertiary-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-tertiary-xl--error.icon-button-only img, .button__icon-tertiary-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xl--error.icon-button-only img, .button__icon-tertiary-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-xl--error.icon-button:hover, .button__icon-tertiary-xl--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xl--error.icon-button:hover svg, .button__icon-tertiary-xl--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-l--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--default.icon-button img, .button__icon-tertiary-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-tertiary-l--default.icon-button-only img, .button__icon-tertiary-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-l--default.icon-button-only img, .button__icon-tertiary-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-l--default.icon-button:hover, .button__icon-tertiary-l--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--default.icon-button:hover svg, .button__icon-tertiary-l--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-tertiary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-l--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--pressed.icon-button img, .button__icon-tertiary-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-tertiary-l--pressed.icon-button-only img, .button__icon-tertiary-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-l--pressed.icon-button-only img, .button__icon-tertiary-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-l--pressed.icon-button:hover, .button__icon-tertiary-l--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--pressed.icon-button:hover svg, .button__icon-tertiary-l--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-tertiary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-l--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-tertiary-l--disabled.icon-button img, .button__icon-tertiary-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-tertiary-l--disabled.icon-button-only img, .button__icon-tertiary-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-l--disabled.icon-button-only img, .button__icon-tertiary-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-l--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--error.icon-button img, .button__icon-tertiary-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-tertiary-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-tertiary-l--error.icon-button-only img, .button__icon-tertiary-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-l--error.icon-button-only img, .button__icon-tertiary-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-tertiary-l--error.icon-button:hover, .button__icon-tertiary-l--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-l--error.icon-button:hover svg, .button__icon-tertiary-l--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-m--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--default.icon-button img, .button__icon-tertiary-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-tertiary-m--default.icon-button-only img, .button__icon-tertiary-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-m--default.icon-button-only img, .button__icon-tertiary-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-m--default.icon-button:hover, .button__icon-tertiary-m--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--default.icon-button:hover svg, .button__icon-tertiary-m--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-tertiary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-m--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--pressed.icon-button img, .button__icon-tertiary-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-tertiary-m--pressed.icon-button-only img, .button__icon-tertiary-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-m--pressed.icon-button-only img, .button__icon-tertiary-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-m--pressed.icon-button:hover, .button__icon-tertiary-m--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--pressed.icon-button:hover svg, .button__icon-tertiary-m--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-tertiary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-m--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-tertiary-m--disabled.icon-button img, .button__icon-tertiary-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-tertiary-m--disabled.icon-button-only img, .button__icon-tertiary-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-m--disabled.icon-button-only img, .button__icon-tertiary-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-m--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--error.icon-button img, .button__icon-tertiary-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-tertiary-m--error.icon-button-only img, .button__icon-tertiary-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-m--error.icon-button-only img, .button__icon-tertiary-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-m--error.icon-button:hover, .button__icon-tertiary-m--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-m--error.icon-button:hover svg, .button__icon-tertiary-m--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-s--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--default.icon-button img, .button__icon-tertiary-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-tertiary-s--default.icon-button-only img, .button__icon-tertiary-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-s--default.icon-button-only img, .button__icon-tertiary-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-s--default.icon-button:hover, .button__icon-tertiary-s--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--default.icon-button:hover svg, .button__icon-tertiary-s--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-tertiary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-s--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--pressed.icon-button img, .button__icon-tertiary-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-tertiary-s--pressed.icon-button-only img, .button__icon-tertiary-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-s--pressed.icon-button-only img, .button__icon-tertiary-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-s--pressed.icon-button:hover, .button__icon-tertiary-s--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--pressed.icon-button:hover svg, .button__icon-tertiary-s--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-tertiary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-s--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-tertiary-s--disabled.icon-button img, .button__icon-tertiary-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-tertiary-s--disabled.icon-button-only img, .button__icon-tertiary-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-s--disabled.icon-button-only img, .button__icon-tertiary-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-s--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--error.icon-button img, .button__icon-tertiary-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-tertiary-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-tertiary-s--error.icon-button-only img, .button__icon-tertiary-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-s--error.icon-button-only img, .button__icon-tertiary-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-tertiary-s--error.icon-button:hover, .button__icon-tertiary-s--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-s--error.icon-button:hover svg, .button__icon-tertiary-s--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xs--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--default.icon-button img, .button__icon-tertiary-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-tertiary-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-tertiary-xs--default.icon-button-only img, .button__icon-tertiary-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xs--default.icon-button-only img, .button__icon-tertiary-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-tertiary-xs--default.icon-button:hover, .button__icon-tertiary-xs--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--default.icon-button:hover svg, .button__icon-tertiary-xs--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-tertiary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xs--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--pressed.icon-button img, .button__icon-tertiary-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-tertiary-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-tertiary-xs--pressed.icon-button-only img, .button__icon-tertiary-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xs--pressed.icon-button-only img, .button__icon-tertiary-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-tertiary-xs--pressed.icon-button:hover, .button__icon-tertiary-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--pressed.icon-button:hover svg, .button__icon-tertiary-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-tertiary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-tertiary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xs--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-tertiary-xs--disabled.icon-button img, .button__icon-tertiary-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-tertiary-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-tertiary-xs--disabled.icon-button-only img, .button__icon-tertiary-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xs--disabled.icon-button-only img, .button__icon-tertiary-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-tertiary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-default);\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-tertiary);\n}\n.button__icon-tertiary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-tertiary-xs--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--error.icon-button img, .button__icon-tertiary-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-tertiary-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-tertiary-xs--error.icon-button-only img, .button__icon-tertiary-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-tertiary-xs--error.icon-button-only img, .button__icon-tertiary-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-tertiary-xs--error.icon-button:hover, .button__icon-tertiary-xs--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-accent);\n  color: var(--color-text-default);\n}\n.button__icon-tertiary-xs--error.icon-button:hover svg, .button__icon-tertiary-xs--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-error-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xl--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--default.icon-button img, .button__icon-error-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-xl--default.icon-button-only img, .button__icon-error-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xl--default.icon-button-only img, .button__icon-error-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-xl--default.icon-button:hover, .button__icon-error-xl--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--default.icon-button:hover svg, .button__icon-error-xl--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n}\n.button__icon-error-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xl--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--pressed.icon-button img, .button__icon-error-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-xl--pressed.icon-button-only img, .button__icon-error-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xl--pressed.icon-button-only img, .button__icon-error-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-xl--pressed.icon-button:hover, .button__icon-error-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--pressed.icon-button:hover svg, .button__icon-error-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xl--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-xl--disabled.icon-button img, .button__icon-error-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-xl--disabled.icon-button-only img, .button__icon-error-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xl--disabled.icon-button-only img, .button__icon-error-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xl--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--error.icon-button img, .button__icon-error-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-xl--error.icon-button-only img, .button__icon-error-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xl--error.icon-button-only img, .button__icon-error-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-xl--error.icon-button:hover, .button__icon-error-xl--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xl--error.icon-button:hover svg, .button__icon-error-xl--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-l--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--default.icon-button img, .button__icon-error-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-l--default.icon-button-only img, .button__icon-error-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-l--default.icon-button-only img, .button__icon-error-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-l--default.icon-button:hover, .button__icon-error-l--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--default.icon-button:hover svg, .button__icon-error-l--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n}\n.button__icon-error-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-l--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--pressed.icon-button img, .button__icon-error-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-l--pressed.icon-button-only img, .button__icon-error-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-l--pressed.icon-button-only img, .button__icon-error-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-l--pressed.icon-button:hover, .button__icon-error-l--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--pressed.icon-button:hover svg, .button__icon-error-l--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-l--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-l--disabled.icon-button img, .button__icon-error-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-l--disabled.icon-button-only img, .button__icon-error-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-l--disabled.icon-button-only img, .button__icon-error-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-l--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--error.icon-button img, .button__icon-error-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-l--error.icon-button-only img, .button__icon-error-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-l--error.icon-button-only img, .button__icon-error-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-l--error.icon-button:hover, .button__icon-error-l--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-l--error.icon-button:hover svg, .button__icon-error-l--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-m--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--default.icon-button img, .button__icon-error-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-m--default.icon-button-only img, .button__icon-error-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-m--default.icon-button-only img, .button__icon-error-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-m--default.icon-button:hover, .button__icon-error-m--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--default.icon-button:hover svg, .button__icon-error-m--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n}\n.button__icon-error-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-m--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--pressed.icon-button img, .button__icon-error-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-m--pressed.icon-button-only img, .button__icon-error-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-m--pressed.icon-button-only img, .button__icon-error-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-m--pressed.icon-button:hover, .button__icon-error-m--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--pressed.icon-button:hover svg, .button__icon-error-m--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-m--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-m--disabled.icon-button img, .button__icon-error-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-m--disabled.icon-button-only img, .button__icon-error-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-m--disabled.icon-button-only img, .button__icon-error-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-m--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--error.icon-button img, .button__icon-error-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-m--error.icon-button-only img, .button__icon-error-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-m--error.icon-button-only img, .button__icon-error-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-m--error.icon-button:hover, .button__icon-error-m--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-m--error.icon-button:hover svg, .button__icon-error-m--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-s--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--default.icon-button img, .button__icon-error-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-s--default.icon-button-only img, .button__icon-error-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-s--default.icon-button-only img, .button__icon-error-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-s--default.icon-button:hover, .button__icon-error-s--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--default.icon-button:hover svg, .button__icon-error-s--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n}\n.button__icon-error-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-s--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--pressed.icon-button img, .button__icon-error-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-s--pressed.icon-button-only img, .button__icon-error-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-s--pressed.icon-button-only img, .button__icon-error-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-s--pressed.icon-button:hover, .button__icon-error-s--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--pressed.icon-button:hover svg, .button__icon-error-s--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-s--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-s--disabled.icon-button img, .button__icon-error-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-s--disabled.icon-button-only img, .button__icon-error-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-s--disabled.icon-button-only img, .button__icon-error-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-s--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--error.icon-button img, .button__icon-error-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-s--error.icon-button-only img, .button__icon-error-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-s--error.icon-button-only img, .button__icon-error-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-s--error.icon-button:hover, .button__icon-error-s--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-s--error.icon-button:hover svg, .button__icon-error-s--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xs--default svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--default.icon-button img, .button__icon-error-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-xs--default.icon-button-only img, .button__icon-error-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xs--default.icon-button-only img, .button__icon-error-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-xs--default.icon-button:hover, .button__icon-error-xs--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--default.icon-button:hover svg, .button__icon-error-xs--default.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n}\n.button__icon-error-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xs--pressed svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--pressed.icon-button img, .button__icon-error-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-xs--pressed.icon-button-only img, .button__icon-error-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xs--pressed.icon-button-only img, .button__icon-error-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-xs--pressed.icon-button:hover, .button__icon-error-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--pressed.icon-button:hover svg, .button__icon-error-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xs--disabled svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-xs--disabled.icon-button img, .button__icon-error-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-xs--disabled.icon-button-only img, .button__icon-error-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xs--disabled.icon-button-only img, .button__icon-error-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default-reverse);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-error);\n}\n.button__icon-error-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-xs--error svg {\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--error.icon-button img, .button__icon-error-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-xs--error.icon-button-only img, .button__icon-error-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-xs--error.icon-button-only img, .button__icon-error-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-xs--error.icon-button:hover, .button__icon-error-xs--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  background-color: var(--color-background-error-accent);\n  color: var(--color-text-default-reverse);\n}\n.button__icon-error-xs--error.icon-button:hover svg, .button__icon-error-xs--error.icon-button:focus svg {\n  color: var(--color-text-default-reverse);\n}\n\n.button__icon-error-tertiary-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xl--default svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--default.icon-button img, .button__icon-error-tertiary-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-tertiary-xl--default.icon-button-only img, .button__icon-error-tertiary-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xl--default.icon-button-only img, .button__icon-error-tertiary-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-xl--default.icon-button:hover, .button__icon-error-tertiary-xl--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--default.icon-button:hover svg, .button__icon-error-tertiary-xl--default.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-error-tertiary-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xl--pressed svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--pressed.icon-button img, .button__icon-error-tertiary-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-tertiary-xl--pressed.icon-button-only img, .button__icon-error-tertiary-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xl--pressed.icon-button-only img, .button__icon-error-tertiary-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-xl--pressed.icon-button:hover, .button__icon-error-tertiary-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--pressed.icon-button:hover svg, .button__icon-error-tertiary-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-tertiary-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xl--disabled svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-tertiary-xl--disabled.icon-button img, .button__icon-error-tertiary-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-tertiary-xl--disabled.icon-button-only img, .button__icon-error-tertiary-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xl--disabled.icon-button-only img, .button__icon-error-tertiary-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xl--error svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--error.icon-button img, .button__icon-error-tertiary-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-error-tertiary-xl--error.icon-button-only img, .button__icon-error-tertiary-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xl--error.icon-button-only img, .button__icon-error-tertiary-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-xl--error.icon-button:hover, .button__icon-error-tertiary-xl--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xl--error.icon-button:hover svg, .button__icon-error-tertiary-xl--error.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-l--default svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--default.icon-button img, .button__icon-error-tertiary-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-l--default.icon-button-only img, .button__icon-error-tertiary-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-l--default.icon-button-only img, .button__icon-error-tertiary-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-l--default.icon-button:hover, .button__icon-error-tertiary-l--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--default.icon-button:hover svg, .button__icon-error-tertiary-l--default.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-error-tertiary-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-l--pressed svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--pressed.icon-button img, .button__icon-error-tertiary-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-l--pressed.icon-button-only img, .button__icon-error-tertiary-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-l--pressed.icon-button-only img, .button__icon-error-tertiary-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-l--pressed.icon-button:hover, .button__icon-error-tertiary-l--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--pressed.icon-button:hover svg, .button__icon-error-tertiary-l--pressed.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-tertiary-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-l--disabled svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-tertiary-l--disabled.icon-button img, .button__icon-error-tertiary-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-l--disabled.icon-button-only img, .button__icon-error-tertiary-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-l--disabled.icon-button-only img, .button__icon-error-tertiary-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-l--error svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--error.icon-button img, .button__icon-error-tertiary-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-error-tertiary-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-l--error.icon-button-only img, .button__icon-error-tertiary-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-l--error.icon-button-only img, .button__icon-error-tertiary-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-error-tertiary-l--error.icon-button:hover, .button__icon-error-tertiary-l--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-l--error.icon-button:hover svg, .button__icon-error-tertiary-l--error.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-m--default svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--default.icon-button img, .button__icon-error-tertiary-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-tertiary-m--default.icon-button-only img, .button__icon-error-tertiary-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-m--default.icon-button-only img, .button__icon-error-tertiary-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-m--default.icon-button:hover, .button__icon-error-tertiary-m--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--default.icon-button:hover svg, .button__icon-error-tertiary-m--default.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-error-tertiary-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-m--pressed svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--pressed.icon-button img, .button__icon-error-tertiary-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-tertiary-m--pressed.icon-button-only img, .button__icon-error-tertiary-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-m--pressed.icon-button-only img, .button__icon-error-tertiary-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-m--pressed.icon-button:hover, .button__icon-error-tertiary-m--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--pressed.icon-button:hover svg, .button__icon-error-tertiary-m--pressed.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-tertiary-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-m--disabled svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-tertiary-m--disabled.icon-button img, .button__icon-error-tertiary-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-tertiary-m--disabled.icon-button-only img, .button__icon-error-tertiary-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-m--disabled.icon-button-only img, .button__icon-error-tertiary-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-m--error svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--error.icon-button img, .button__icon-error-tertiary-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-error-tertiary-m--error.icon-button-only img, .button__icon-error-tertiary-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-m--error.icon-button-only img, .button__icon-error-tertiary-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-m--error.icon-button:hover, .button__icon-error-tertiary-m--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-m--error.icon-button:hover svg, .button__icon-error-tertiary-m--error.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-s--default svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--default.icon-button img, .button__icon-error-tertiary-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-s--default.icon-button-only img, .button__icon-error-tertiary-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-s--default.icon-button-only img, .button__icon-error-tertiary-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-s--default.icon-button:hover, .button__icon-error-tertiary-s--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--default.icon-button:hover svg, .button__icon-error-tertiary-s--default.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-error-tertiary-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-s--pressed svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--pressed.icon-button img, .button__icon-error-tertiary-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-s--pressed.icon-button-only img, .button__icon-error-tertiary-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-s--pressed.icon-button-only img, .button__icon-error-tertiary-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-s--pressed.icon-button:hover, .button__icon-error-tertiary-s--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--pressed.icon-button:hover svg, .button__icon-error-tertiary-s--pressed.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-tertiary-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-s--disabled svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-tertiary-s--disabled.icon-button img, .button__icon-error-tertiary-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-s--disabled.icon-button-only img, .button__icon-error-tertiary-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-s--disabled.icon-button-only img, .button__icon-error-tertiary-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-s--error svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--error.icon-button img, .button__icon-error-tertiary-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-error-tertiary-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-error-tertiary-s--error.icon-button-only img, .button__icon-error-tertiary-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-s--error.icon-button-only img, .button__icon-error-tertiary-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-error-tertiary-s--error.icon-button:hover, .button__icon-error-tertiary-s--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-s--error.icon-button:hover svg, .button__icon-error-tertiary-s--error.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xs--default svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--default.icon-button img, .button__icon-error-tertiary-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-tertiary-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-tertiary-xs--default.icon-button-only img, .button__icon-error-tertiary-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xs--default.icon-button-only img, .button__icon-error-tertiary-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-tertiary-xs--default.icon-button:hover, .button__icon-error-tertiary-xs--default.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--default.icon-button:hover svg, .button__icon-error-tertiary-xs--default.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-ui-base);\n}\n.button__icon-error-tertiary-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xs--pressed svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--pressed.icon-button img, .button__icon-error-tertiary-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-tertiary-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-tertiary-xs--pressed.icon-button-only img, .button__icon-error-tertiary-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xs--pressed.icon-button-only img, .button__icon-error-tertiary-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-tertiary-xs--pressed.icon-button:hover, .button__icon-error-tertiary-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--pressed.icon-button:hover svg, .button__icon-error-tertiary-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-error-tertiary-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  color: var(--color-text-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: var(--color-background-disabled);\n}\n.button__icon-error-tertiary-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xs--disabled svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-error-tertiary-xs--disabled.icon-button img, .button__icon-error-tertiary-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-tertiary-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-tertiary-xs--disabled.icon-button-only img, .button__icon-error-tertiary-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xs--disabled.icon-button-only img, .button__icon-error-tertiary-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-tertiary-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  border: 1px solid var(--color-border-error);\n  color: var(--color-text-error);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-error-tertiary-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-error-tertiary-xs--error svg {\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--error.icon-button img, .button__icon-error-tertiary-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-error-tertiary-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-error-tertiary-xs--error.icon-button-only img, .button__icon-error-tertiary-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-error-tertiary-xs--error.icon-button-only img, .button__icon-error-tertiary-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-error-tertiary-xs--error.icon-button:hover, .button__icon-error-tertiary-xs--error.icon-button:focus {\n  background-color: var(--color-background-ui-base);\n  border: 1px solid var(--color-border-error-accent);\n  color: var(--color-text-error);\n}\n.button__icon-error-tertiary-xs--error.icon-button:hover svg, .button__icon-error-tertiary-xs--error.icon-button:focus svg {\n  color: var(--color-text-error);\n}\n\n.button__icon-ghost-xl--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-xl--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xl--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--default.icon-button img, .button__icon-ghost-xl--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-xl--default.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-ghost-xl--default.icon-button-only img, .button__icon-ghost-xl--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xl--default.icon-button-only img, .button__icon-ghost-xl--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-xl--default.icon-button:hover, .button__icon-ghost-xl--default.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--default.icon-button:hover svg, .button__icon-ghost-xl--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-xl--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-2nd-base);\n}\n.button__icon-ghost-xl--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xl--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--pressed.icon-button img, .button__icon-ghost-xl--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-xl--pressed.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-ghost-xl--pressed.icon-button-only img, .button__icon-ghost-xl--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xl--pressed.icon-button-only img, .button__icon-ghost-xl--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-xl--pressed.icon-button:hover, .button__icon-ghost-xl--pressed.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--pressed.icon-button:hover svg, .button__icon-ghost-xl--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-xl--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: transparent;\n}\n.button__icon-ghost-xl--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xl--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-ghost-xl--disabled.icon-button img, .button__icon-ghost-xl--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-xl--disabled.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-ghost-xl--disabled.icon-button-only img, .button__icon-ghost-xl--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xl--disabled.icon-button-only img, .button__icon-ghost-xl--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-xl--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-xl--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xl--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--error.icon-button img, .button__icon-ghost-xl--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-xl--error.icon-button-only {\n  min-width: auto;\n  width: 48px;\n  height: 48px;\n  padding: 10px;\n}\n.button__icon-ghost-xl--error.icon-button-only img, .button__icon-ghost-xl--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xl--error.icon-button-only img, .button__icon-ghost-xl--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-xl--error.icon-button:hover, .button__icon-ghost-xl--error.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xl--error.icon-button:hover svg, .button__icon-ghost-xl--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-l--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-l--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-l--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--default.icon-button img, .button__icon-ghost-l--default.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-l--default.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-ghost-l--default.icon-button-only img, .button__icon-ghost-l--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-l--default.icon-button-only img, .button__icon-ghost-l--default.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-l--default.icon-button:hover, .button__icon-ghost-l--default.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--default.icon-button:hover svg, .button__icon-ghost-l--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-l--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-2nd-base);\n}\n.button__icon-ghost-l--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-l--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--pressed.icon-button img, .button__icon-ghost-l--pressed.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-l--pressed.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-ghost-l--pressed.icon-button-only img, .button__icon-ghost-l--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-l--pressed.icon-button-only img, .button__icon-ghost-l--pressed.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-l--pressed.icon-button:hover, .button__icon-ghost-l--pressed.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--pressed.icon-button:hover svg, .button__icon-ghost-l--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-l--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: transparent;\n}\n.button__icon-ghost-l--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-l--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-ghost-l--disabled.icon-button img, .button__icon-ghost-l--disabled.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-l--disabled.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-ghost-l--disabled.icon-button-only img, .button__icon-ghost-l--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-l--disabled.icon-button-only img, .button__icon-ghost-l--disabled.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-l--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-l--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-l--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--error.icon-button img, .button__icon-ghost-l--error.icon-button svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.button__icon-ghost-l--error.icon-button-only {\n  min-width: auto;\n  width: 40px;\n  height: 40px;\n  padding: 6px;\n}\n.button__icon-ghost-l--error.icon-button-only img, .button__icon-ghost-l--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-l--error.icon-button-only img, .button__icon-ghost-l--error.icon-button-only svg {\n  width: 24px;\n}\n.button__icon-ghost-l--error.icon-button:hover, .button__icon-ghost-l--error.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-l--error.icon-button:hover svg, .button__icon-ghost-l--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-m--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-m--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-m--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--default.icon-button img, .button__icon-ghost-m--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-m--default.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-ghost-m--default.icon-button-only img, .button__icon-ghost-m--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-m--default.icon-button-only img, .button__icon-ghost-m--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-m--default.icon-button:hover, .button__icon-ghost-m--default.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--default.icon-button:hover svg, .button__icon-ghost-m--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-m--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-2nd-base);\n}\n.button__icon-ghost-m--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-m--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--pressed.icon-button img, .button__icon-ghost-m--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-m--pressed.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-ghost-m--pressed.icon-button-only img, .button__icon-ghost-m--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-m--pressed.icon-button-only img, .button__icon-ghost-m--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-m--pressed.icon-button:hover, .button__icon-ghost-m--pressed.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--pressed.icon-button:hover svg, .button__icon-ghost-m--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-m--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: transparent;\n}\n.button__icon-ghost-m--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-m--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-ghost-m--disabled.icon-button img, .button__icon-ghost-m--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-m--disabled.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-ghost-m--disabled.icon-button-only img, .button__icon-ghost-m--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-m--disabled.icon-button-only img, .button__icon-ghost-m--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-m--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-m--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-m--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--error.icon-button img, .button__icon-ghost-m--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-m--error.icon-button-only {\n  min-width: auto;\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n}\n.button__icon-ghost-m--error.icon-button-only img, .button__icon-ghost-m--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-m--error.icon-button-only img, .button__icon-ghost-m--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-m--error.icon-button:hover, .button__icon-ghost-m--error.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-m--error.icon-button:hover svg, .button__icon-ghost-m--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-s--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-s--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-s--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--default.icon-button img, .button__icon-ghost-s--default.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-s--default.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-ghost-s--default.icon-button-only img, .button__icon-ghost-s--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-s--default.icon-button-only img, .button__icon-ghost-s--default.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-s--default.icon-button:hover, .button__icon-ghost-s--default.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--default.icon-button:hover svg, .button__icon-ghost-s--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-s--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-2nd-base);\n}\n.button__icon-ghost-s--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-s--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--pressed.icon-button img, .button__icon-ghost-s--pressed.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-s--pressed.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-ghost-s--pressed.icon-button-only img, .button__icon-ghost-s--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-s--pressed.icon-button-only img, .button__icon-ghost-s--pressed.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-s--pressed.icon-button:hover, .button__icon-ghost-s--pressed.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--pressed.icon-button:hover svg, .button__icon-ghost-s--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-s--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: transparent;\n}\n.button__icon-ghost-s--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-s--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-ghost-s--disabled.icon-button img, .button__icon-ghost-s--disabled.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-s--disabled.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-ghost-s--disabled.icon-button-only img, .button__icon-ghost-s--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-s--disabled.icon-button-only img, .button__icon-ghost-s--disabled.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-s--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-s--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-s--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--error.icon-button img, .button__icon-ghost-s--error.icon-button svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.button__icon-ghost-s--error.icon-button-only {\n  min-width: auto;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.button__icon-ghost-s--error.icon-button-only img, .button__icon-ghost-s--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-s--error.icon-button-only img, .button__icon-ghost-s--error.icon-button-only svg {\n  width: 20px;\n}\n.button__icon-ghost-s--error.icon-button:hover, .button__icon-ghost-s--error.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-s--error.icon-button:hover svg, .button__icon-ghost-s--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-xs--default {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-xs--default span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xs--default svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--default.icon-button img, .button__icon-ghost-xs--default.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-ghost-xs--default.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-ghost-xs--default.icon-button-only img, .button__icon-ghost-xs--default.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xs--default.icon-button-only img, .button__icon-ghost-xs--default.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-ghost-xs--default.icon-button:hover, .button__icon-ghost-xs--default.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--default.icon-button:hover svg, .button__icon-ghost-xs--default.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-xs--pressed {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--color-background-2nd-base);\n}\n.button__icon-ghost-xs--pressed span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xs--pressed svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--pressed.icon-button img, .button__icon-ghost-xs--pressed.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-ghost-xs--pressed.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-ghost-xs--pressed.icon-button-only img, .button__icon-ghost-xs--pressed.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xs--pressed.icon-button-only img, .button__icon-ghost-xs--pressed.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-ghost-xs--pressed.icon-button:hover, .button__icon-ghost-xs--pressed.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--pressed.icon-button:hover svg, .button__icon-ghost-xs--pressed.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__icon-ghost-xs--disabled {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  color: var(--color-text-disabled);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: unset;\n  background-color: transparent;\n}\n.button__icon-ghost-xs--disabled span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xs--disabled svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--disabled svg {\n  color: var(--color-text-disabled);\n}\n.button__icon-ghost-xs--disabled.icon-button img, .button__icon-ghost-xs--disabled.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-ghost-xs--disabled.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-ghost-xs--disabled.icon-button-only img, .button__icon-ghost-xs--disabled.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xs--disabled.icon-button-only img, .button__icon-ghost-xs--disabled.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-ghost-xs--error {\n  white-space: nowrap;\n  max-width: 330px !important;\n  color: var(--color-text-default);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.button__icon-ghost-xs--error span {\n  width: 100%;\n  display: block;\n  color: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button__icon-ghost-xs--error svg {\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--error.icon-button img, .button__icon-ghost-xs--error.icon-button svg {\n  display: block;\n  width: 16px;\n  height: 20px;\n}\n.button__icon-ghost-xs--error.icon-button-only {\n  min-width: auto;\n  width: 28px;\n  height: 28px;\n  padding: 4px;\n}\n.button__icon-ghost-xs--error.icon-button-only img, .button__icon-ghost-xs--error.icon-button-only svg {\n  display: block;\n}\n.button__icon-ghost-xs--error.icon-button-only img, .button__icon-ghost-xs--error.icon-button-only svg {\n  width: 16px;\n}\n.button__icon-ghost-xs--error.icon-button:hover, .button__icon-ghost-xs--error.icon-button:focus {\n  background-color: var(--color-background-2nd-base);\n  color: var(--color-text-default);\n}\n.button__icon-ghost-xs--error.icon-button:hover svg, .button__icon-ghost-xs--error.icon-button:focus svg {\n  color: var(--color-text-default);\n}\n\n.button__group {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.button__group.fullWidth button {\n  flex-grow: 1;\n  width: 100%;\n}\n.button__group.left {\n  justify-content: flex-start;\n}\n.button__group.center {\n  justify-content: center;\n}\n.button__group.right {\n  justify-content: flex-end;\n}\n.button__group.vertical {\n  flex-direction: column;\n}\n.button__group.horizontal {\n  flex-direction: row;\n}\n@media only screen and (max-width: 767px) {\n  .button__group button {\n    width: 100%;\n  }\n}\n\n.checkbox__group {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 16px;\n}\n.checkbox__group .checkbox-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 16px;\n}\n.checkbox__group .checkbox__all-check__label {\n  width: 100%;\n}\n.checkbox__group.left {\n  justify-content: flex-start;\n}\n.checkbox__group.right {\n  justify-content: flex-end;\n}\n.checkbox__group.right .checkbox-box, .checkbox__group.right .checkbox-label {\n  justify-content: flex-end;\n}\n.checkbox__group.right + .helper-text {\n  text-align: right;\n}\n.checkbox__group.vertical {\n  flex-direction: column;\n  gap: 4px;\n}\n.checkbox__group.vertical .checkbox-box {\n  flex-direction: column;\n  gap: 12px;\n  width: max-content;\n}\n.checkbox__group.vertical .checkbox__all-check__label .checkbox-wrap {\n  margin-left: 0;\n}\n.checkbox__group.vertical.right {\n  align-items: flex-end;\n}\n.checkbox__group.vertical.right .checkbox-label {\n  justify-content: flex-start;\n}\n.checkbox__group.horizontal {\n  flex-direction: row;\n  gap: 4px;\n}\n.checkbox__group.horizontal .checkbox-box {\n  flex-direction: row;\n  gap: 16px;\n}\n.checkbox__group .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.checkbox__group .helper-text .text {\n  width: 100%;\n}\n.checkbox__group .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.checkbox__group .helper-text.error {\n  color: var(--color-text-error);\n}\n.checkbox__group .helper-text.success {\n  color: var(--color-text-success);\n}\n.checkbox__group .helper-text .icon-error,\n.checkbox__group .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.checkbox__group .helper-text .icon-error svg,\n.checkbox__group .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.checkbox-wrap .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.checkbox-wrap .helper-text .text {\n  width: 100%;\n}\n.checkbox-wrap .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.checkbox-wrap .helper-text.error {\n  color: var(--color-text-error);\n}\n.checkbox-wrap .helper-text.success {\n  color: var(--color-text-success);\n}\n.checkbox-wrap .helper-text .icon-error,\n.checkbox-wrap .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.checkbox-wrap .helper-text .icon-error svg,\n.checkbox-wrap .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.checkbox-wrap .helper-text.font-body {\n  padding-top: 4px;\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  color: var(--color-text-default);\n  cursor: pointer;\n}\n.checkbox-label .checkbox {\n  margin-right: 8px;\n  color: var(--color-text-default);\n  flex: none;\n}\n.checkbox-label .checkbox input {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.checkbox-label p {\n  word-break: break-all;\n}\n\n.checkbox-icon svg {\n  color: var(--color-text-default);\n}\n.checkbox-icon.checked svg {\n  color: var(--color-text-accent);\n}\n.checkbox-icon.disabled svg {\n  color: var(--color-text-disabled);\n}\n.checkbox-icon:hover, .checkbox-icon:focus, .checkbox-icon:active {\n  background-color: var(--color-background-ui-base);\n}\n.checkbox-icon.checkbox__l {\n  display: block;\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n}\n.checkbox-icon.checkbox__l svg {\n  width: 24px;\n  height: 24px;\n}\n\n.checkbox__l--default {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n.checkbox__l--default svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__l--default svg {\n  width: 18px;\n  height: 18px;\n}\n.checkbox__l--default:hover, .checkbox__l--default:active, .checkbox__l--default:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__l--default.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n}\n.checkbox__l--default.checked:hover, .checkbox__l--default.checked:active, .checkbox__l--default.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n\n.checkbox__l--pressed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-color: var(--color-border-accent);\n}\n.checkbox__l--pressed svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__l--pressed svg {\n  width: 18px;\n  height: 18px;\n}\n.checkbox__l--pressed:hover, .checkbox__l--pressed:active, .checkbox__l--pressed:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__l--pressed.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__l--pressed.checked:hover, .checkbox__l--pressed.checked:active, .checkbox__l--pressed.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n\n.checkbox__l--disabled {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n.checkbox__l--disabled svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__l--disabled svg {\n  width: 18px;\n  height: 18px;\n}\n.checkbox__l--disabled:hover, .checkbox__l--disabled:active, .checkbox__l--disabled:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__l--disabled, .checkbox__l--disabled:hover, .checkbox__l--disabled:active, .checkbox__l--disabled:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.checkbox__l--disabled + p {\n  color: var(--color-text-disabled);\n}\n.checkbox__l--disabled.checked svg {\n  color: var(--color-text-disabled) !important;\n}\n.checkbox__l--disabled.checked, .checkbox__l--disabled.checked:hover, .checkbox__l--disabled.checked:active, .checkbox__l--disabled.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.checkbox__l--disabled.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n}\n.checkbox__l--disabled.checked:hover, .checkbox__l--disabled.checked:active, .checkbox__l--disabled.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__l--disabled.checked, .checkbox__l--disabled.checked:hover, .checkbox__l--disabled.checked:active, .checkbox__l--disabled.checked:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.checkbox__l--disabled.checked + p {\n  color: var(--color-text-disabled);\n}\n.checkbox__l--disabled.checked.checked svg {\n  color: var(--color-text-disabled) !important;\n}\n.checkbox__l--disabled.checked.checked, .checkbox__l--disabled.checked.checked:hover, .checkbox__l--disabled.checked.checked:active, .checkbox__l--disabled.checked.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n\n.checkbox__l--error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-color: var(--color-border-error);\n}\n.checkbox__l--error svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__l--error svg {\n  width: 18px;\n  height: 18px;\n}\n.checkbox__l--error:hover, .checkbox__l--error:active, .checkbox__l--error:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__l--error:hover, .checkbox__l--error:active, .checkbox__l--error:focus {\n  border-color: var(--color-border-error-accent);\n}\n.checkbox__l--error.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n  background-color: var(--color-background-error);\n}\n.checkbox__l--error.checked:hover, .checkbox__l--error.checked:active, .checkbox__l--error.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__l--error.checked:hover, .checkbox__l--error.checked:active, .checkbox__l--error.checked:focus {\n  background-color: var(--color-background-error-accent);\n}\n\n.checkbox-icon svg {\n  color: var(--color-text-default);\n}\n.checkbox-icon.checked svg {\n  color: var(--color-text-accent);\n}\n.checkbox-icon.disabled svg {\n  color: var(--color-text-disabled);\n}\n.checkbox-icon:hover, .checkbox-icon:focus, .checkbox-icon:active {\n  background-color: var(--color-background-ui-base);\n}\n.checkbox-icon.checkbox__s {\n  display: block;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n}\n.checkbox-icon.checkbox__s svg {\n  width: 20px;\n  height: 20px;\n}\n\n.checkbox__s--default {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox__s--default svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__s--default svg {\n  width: 16px;\n  height: 16px;\n}\n.checkbox__s--default:hover, .checkbox__s--default:active, .checkbox__s--default:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__s--default.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n}\n.checkbox__s--default.checked:hover, .checkbox__s--default.checked:active, .checkbox__s--default.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n\n.checkbox__s--pressed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border-color: var(--color-border-accent);\n}\n.checkbox__s--pressed svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__s--pressed svg {\n  width: 16px;\n  height: 16px;\n}\n.checkbox__s--pressed:hover, .checkbox__s--pressed:active, .checkbox__s--pressed:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__s--pressed.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__s--pressed.checked:hover, .checkbox__s--pressed.checked:active, .checkbox__s--pressed.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n\n.checkbox__s--disabled {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox__s--disabled svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__s--disabled svg {\n  width: 16px;\n  height: 16px;\n}\n.checkbox__s--disabled:hover, .checkbox__s--disabled:active, .checkbox__s--disabled:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__s--disabled, .checkbox__s--disabled:hover, .checkbox__s--disabled:active, .checkbox__s--disabled:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.checkbox__s--disabled + p {\n  color: var(--color-text-disabled);\n}\n.checkbox__s--disabled.checked svg {\n  color: var(--color-text-disabled) !important;\n}\n.checkbox__s--disabled.checked, .checkbox__s--disabled.checked:hover, .checkbox__s--disabled.checked:active, .checkbox__s--disabled.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.checkbox__s--disabled.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n}\n.checkbox__s--disabled.checked:hover, .checkbox__s--disabled.checked:active, .checkbox__s--disabled.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__s--disabled.checked, .checkbox__s--disabled.checked:hover, .checkbox__s--disabled.checked:active, .checkbox__s--disabled.checked:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.checkbox__s--disabled.checked + p {\n  color: var(--color-text-disabled);\n}\n.checkbox__s--disabled.checked.checked svg {\n  color: var(--color-text-disabled) !important;\n}\n.checkbox__s--disabled.checked.checked, .checkbox__s--disabled.checked.checked:hover, .checkbox__s--disabled.checked.checked:active, .checkbox__s--disabled.checked.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n\n.checkbox__s--error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border-color: var(--color-border-error);\n}\n.checkbox__s--error svg {\n  color: var(--color-text-default-reverse) !important;\n}\n.checkbox__s--error svg {\n  width: 16px;\n  height: 16px;\n}\n.checkbox__s--error:hover, .checkbox__s--error:active, .checkbox__s--error:focus {\n  border-color: var(--color-border-accent);\n}\n.checkbox__s--error:hover, .checkbox__s--error:active, .checkbox__s--error:focus {\n  border-color: var(--color-border-error-accent);\n}\n.checkbox__s--error.checked {\n  border: 0 none;\n  background-color: var(--color-background-primary);\n  background-color: var(--color-background-error);\n}\n.checkbox__s--error.checked:hover, .checkbox__s--error.checked:active, .checkbox__s--error.checked:focus {\n  background-color: var(--color-background-primary-accent);\n}\n.checkbox__s--error.checked:hover, .checkbox__s--error.checked:active, .checkbox__s--error.checked:focus {\n  background-color: var(--color-background-error-accent);\n}\n\n.mds-container {\n  width: 100%;\n  max-width: 1200px;\n  padding-left: 56px;\n  padding-right: 56px;\n  box-sizing: border-box;\n  background-color: var(--color-background-base);\n}\n.mds-container.full {\n  max-width: none;\n}\n@media only screen and (max-width: 1279px) {\n  .mds-container {\n    max-width: none;\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .mds-container {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.mds-divider {\n  width: 100%;\n  height: 1px;\n  border: 0;\n}\n.mds-divider, .mds-divider.divider-default {\n  background-color: var(--color-divider-default);\n}\n.mds-divider.divider-accent {\n  background-color: var(--color-divider-accent);\n}\n.mds-divider.divider-vertical {\n  height: auto;\n  width: 1px;\n  align-self: stretch;\n}\n.mds-divider.with-children {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n}\n.mds-divider.with-children .divider__children-box {\n  padding: 0 8px;\n}\n.mds-divider.with-children::before, .mds-divider.with-children::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 1px;\n}\n.mds-divider.with-children::before, .mds-divider.with-children::after, .mds-divider.with-children.divider-default::before, .mds-divider.with-children.divider-default::after {\n  background-color: var(--color-divider-default);\n}\n.mds-divider.with-children.divider-accent::before, .mds-divider.with-children.divider-accent::after {\n  background-color: var(--color-divider-accent);\n}\n.mds-divider.with-children.divider-vertical {\n  flex-direction: column;\n}\n.mds-divider.with-children.divider-vertical::before, .mds-divider.with-children.divider-vertical::after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 100%;\n}\n\n.dropdown-box {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n}\n.dropdown-box.center .dropdown-box__menu-wrap {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.dropdown-box.right .dropdown-box__menu-wrap {\n  right: 0;\n}\n.dropdown-box__base .textfield.has-helperText {\n  position: relative;\n}\n.dropdown-box__base .textfield-formControl svg:last-child {\n  color: var(--color-text-default);\n}\n.dropdown-box__menu-wrap {\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n  position: absolute;\n  width: 100%;\n  top: 100%;\n  min-width: 180px;\n  z-index: 9999;\n  max-height: 216px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n  background-color: var(--color-background-overlay);\n}\n.dropdown-box__menu-wrap::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.dropdown-box__menu-wrap::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-overlay);\n}\n.dropdown-box__menu-wrap::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.dropdown-box__menu-wrap .dropdown-box__menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  cursor: pointer;\n  background-color: var(--color-background-overlay);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu svg {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  color: var(--color-text-default);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu .dropdown-box__menu__label {\n  width: 100%;\n  color: var(--color-text-default);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-box__menu-wrap .dropdown-box__menu .dropdown-box__menu__sub-label {\n  color: var(--color-text-subtlest);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu svg:last-child {\n  color: var(--color-text-subtlest);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu:hover, .dropdown-box__menu-wrap .dropdown-box__menu:focus, .dropdown-box__menu-wrap .dropdown-box__menu:active {\n  background-color: var(--color-background-overlay-accent);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu.disabled {\n  background-color: var(--color-background-overlay);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu.disabled .dropdown-box__menu__label {\n  color: var(--color-text-disabled);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu.disabled .dropdown-box__menu__sub-label {\n  color: var(--color-text-disabled);\n}\n.dropdown-box__menu-wrap .dropdown-box__menu.disabled svg {\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .dropdown-box__menu-wrap {\n    min-width: 120px;\n    width: auto;\n  }\n  .dropdown-box__menu-wrap.full-width {\n    width: 100%;\n  }\n}\n.dropdown-box .dropdown-box__base .textfield-formControl svg:last-child,\n.dropdown-box .dropdown-box__base .icon-button:not(.icon-button-only) svg:last-child {\n  transition: all ease 0.3s;\n}\n.dropdown-box.open .dropdown-box__base .textfield-formControl svg:last-child,\n.dropdown-box.open .dropdown-box__base .icon-button:not(.icon-button-only) svg:last-child {\n  transition: all ease 0.3s;\n  transform: rotate(180deg);\n}\n\n.menu-item-l {\n  height: 48px;\n}\n\n.menu-item-l {\n  height: 48px;\n}\n\n.menu-item-l {\n  height: 48px;\n}\n\n.menu-item-s {\n  height: 36px;\n}\n\n.menu-item-s {\n  height: 36px;\n}\n\n.menu-item-s {\n  height: 36px;\n}\n\nform {\n  width: 100%;\n  padding-top: 32px;\n  padding-bottom: 40px;\n}\nform fieldset {\n  width: 100%;\n  min-width: unset;\n}\nform fieldset > div {\n  margin-top: 24px;\n}\nform fieldset > div:first-child {\n  margin-top: 0;\n}\nform fieldset > div.button__group {\n  margin-top: 40px;\n}\nform fieldset .dropdown-box {\n  width: 100%;\n}\nform fieldset > label {\n  margin-top: 24px;\n}\nform fieldset > label:first-child {\n  margin-top: 0;\n}\n\n.mds-list-wrap {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n  background-color: var(--color-background-overlay);\n}\n.mds-list-wrap .mds-list-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-height: 70px;\n}\n.mds-list-wrap .mds-list-box svg {\n  color: var(--color-text-default);\n}\n.mds-list-wrap .mds-list-box .mds-list__right-box {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  padding: 8px 16px;\n}\n.mds-list-wrap .mds-list-box .mds-list__left-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-height: 70px;\n  padding: 8px 16px;\n}\n.mds-list-wrap .mds-list-box .mds-list__left-box:hover, .mds-list-wrap .mds-list-box .mds-list__left-box:focus, .mds-list-wrap .mds-list-box .mds-list__left-box:active {\n  background-color: var(--color-background-overlay-accent);\n}\n.mds-list-wrap .mds-list-box.top .mds-list__right-box {\n  top: 0;\n  transform: translateY(0);\n}\n.mds-list-wrap .mds-list-box.top .mds-list__left-box {\n  align-items: flex-start;\n}\n.mds-list-wrap .mds-list-box .mds-list__icon-box {\n  flex: none;\n  width: 24px;\n  height: 24px;\n}\n.mds-list-wrap .mds-list-box .mds-list__icon-box svg {\n  width: 100%;\n  height: 100%;\n}\n.mds-list-wrap .mds-list-box .mds-list__icon-box.icon-with-event {\n  cursor: pointer;\n}\n.mds-list-wrap .mds-list-box .mds-list__avatar-box {\n  flex: none;\n  width: 40px;\n  height: 40px;\n}\n.mds-list-wrap .mds-list-box .mds-list__avatar-box svg, .mds-list-wrap .mds-list-box .mds-list__avatar-box img {\n  width: 100%;\n  height: 100%;\n}\n.mds-list-wrap .mds-list-box .mds-list__image-box {\n  flex: none;\n  width: 54px;\n  height: 54px;\n}\n.mds-list-wrap .mds-list-box .mds-list__image-box svg, .mds-list-wrap .mds-list-box .mds-list__image-box img {\n  width: 100%;\n  height: 100%;\n}\n.mds-list-wrap .mds-list-box .mds-list__text-box {\n  width: 100%;\n}\n.mds-list-wrap .mds-list-box .mds-list__text-box .font-body {\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.modal-wrap {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.modal-wrap .dim {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.modal-wrap.open {\n  display: block;\n  z-index: 99999999;\n}\n.modal-wrap.open .dim {\n  display: block;\n  background-color: var(--color-dimmed-60);\n}\n\n.modal-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 24px;\n  min-height: 184px;\n  max-height: 800px;\n  background-color: var(--color-background-overlay);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.modal-box::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.modal-box::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-overlay);\n}\n.modal-box::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.modal-box .modal-close-button {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.modal-box .modal-close-button svg {\n  width: inherit;\n  height: inherit;\n}\n\n.modal__s {\n  max-width: 90%;\n  width: 348px;\n}\n.modal__s .modal-header img {\n  display: block;\n  margin: 0 auto;\n}\n.modal__s .modal-header svg {\n  width: 32px;\n  height: 32px;\n}\n.modal__s .modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal__s .modal-body > div:first-child, .modal__s .modal-body > label:first-child {\n  margin-top: 32px;\n}\n.modal__s .modal-body > p:first-child {\n  margin-top: 8px;\n}\n.modal__s .modal-body .input__group + .helper-text {\n  margin-top: 0;\n}\n.modal__s .modal-footer {\n  margin-top: 40px;\n}\n.modal__s button {\n  min-width: 0;\n}\n@media only screen and (max-width: 1279px) {\n  .modal__s {\n    max-height: 90%;\n  }\n  .modal__s .modal-header img {\n    max-width: calc(100% - 48px);\n  }\n  .modal__s .modal-body {\n    max-width: 100%;\n  }\n  .modal__s .modal-footer .button__group button {\n    width: 100%;\n  }\n}\n\n.modal__m {\n  max-width: 90%;\n  width: 532px;\n}\n.modal__m .modal-header img {\n  display: block;\n  margin: 0 auto;\n}\n.modal__m .modal-header svg {\n  width: 32px;\n  height: 32px;\n}\n.modal__m .modal-footer .button__group {\n  justify-content: flex-end;\n}\n.modal__m .modal-footer .button__group button {\n  max-width: 100% !important;\n}\n.modal__m .modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal__m .modal-body > div:first-child, .modal__m .modal-body > label:first-child {\n  margin-top: 32px;\n}\n.modal__m .modal-body > p:first-child {\n  margin-top: 8px;\n}\n.modal__m .modal-body .input__group + .helper-text {\n  margin-top: 0;\n}\n.modal__m .modal-footer {\n  margin-top: 40px;\n}\n.modal__m button {\n  min-width: 0;\n}\n@media only screen and (max-width: 1279px) {\n  .modal__m {\n    max-height: 90%;\n  }\n  .modal__m .modal-header img {\n    max-width: calc(100% - 48px);\n  }\n  .modal__m .modal-body {\n    max-width: 100%;\n  }\n  .modal__m .modal-footer .button__group button {\n    width: 100%;\n  }\n}\n\n.modal__l {\n  max-width: 90%;\n  width: 720px;\n}\n.modal__l .modal-header img {\n  display: block;\n  margin: 0 auto;\n}\n.modal__l .modal-header svg {\n  width: 32px;\n  height: 32px;\n}\n.modal__l .modal-body {\n  max-width: 80%;\n}\n.modal__l .modal-footer .button__group {\n  justify-content: flex-end;\n}\n.modal__l .modal-footer .button__group button {\n  flex-grow: 0;\n  width: 33%;\n}\n.modal__l .modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal__l .modal-body > div:first-child, .modal__l .modal-body > label:first-child {\n  margin-top: 32px;\n}\n.modal__l .modal-body > p:first-child {\n  margin-top: 8px;\n}\n.modal__l .modal-body .input__group + .helper-text {\n  margin-top: 0;\n}\n.modal__l .modal-footer {\n  margin-top: 40px;\n}\n.modal__l button {\n  min-width: 0;\n}\n@media only screen and (max-width: 1279px) {\n  .modal__l {\n    max-height: 90%;\n  }\n  .modal__l .modal-header img {\n    max-width: calc(100% - 48px);\n  }\n  .modal__l .modal-body {\n    max-width: 100%;\n  }\n  .modal__l .modal-footer .button__group button {\n    width: 100%;\n  }\n}\n\n.modal__xl {\n  max-width: 90%;\n  width: 1088px;\n}\n.modal__xl .modal-header img {\n  display: block;\n  margin: 0 auto;\n}\n.modal__xl .modal-header svg {\n  width: 32px;\n  height: 32px;\n}\n.modal__xl .modal-body {\n  max-width: 80%;\n}\n.modal__xl .modal-footer .button__group {\n  justify-content: flex-end;\n}\n.modal__xl .modal-footer .button__group button {\n  flex-grow: 0;\n  width: 25%;\n}\n.modal__xl .modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal__xl .modal-body > div:first-child, .modal__xl .modal-body > label:first-child {\n  margin-top: 32px;\n}\n.modal__xl .modal-body > p:first-child {\n  margin-top: 8px;\n}\n.modal__xl .modal-body .input__group + .helper-text {\n  margin-top: 0;\n}\n.modal__xl .modal-footer {\n  margin-top: 40px;\n}\n.modal__xl button {\n  min-width: 0;\n}\n@media only screen and (max-width: 1279px) {\n  .modal__xl {\n    max-height: 90%;\n  }\n  .modal__xl .modal-header img {\n    max-width: calc(100% - 48px);\n  }\n  .modal__xl .modal-body {\n    max-width: 100%;\n  }\n  .modal__xl .modal-footer .button__group button {\n    width: 100%;\n  }\n}\n\n.mds-pagination {\n  display: flex;\n}\n.mds-pagination ul {\n  display: flex;\n}\n.mds-pagination ul li button {\n  min-width: unset;\n  padding: 0;\n}\n.mds-pagination ul li button.checked {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-secondary);\n}\n.mds-pagination ul li button.checked:hover, .mds-pagination ul li button.checked:focus, .mds-pagination ul li button.checked:active {\n  background-color: var(--color-background-secondary-accent);\n}\n.mds-pagination ul li button.checked:disabled {\n  color: var(--color-text-disabled);\n  background-color: var(--color-background-disabled);\n}\n.mds-pagination ul li button.checked:disabled:hover, .mds-pagination ul li button.checked:disabled:focus, .mds-pagination ul li button.checked:disabled:active {\n  background-color: var(--color-background-disabled);\n}\n.mds-pagination.pagination__simple-mode ul li {\n  display: flex;\n  align-items: center;\n}\n.mds-pagination.pagination__simple-mode ul li.simple-mode__dash {\n  padding: 0 2px;\n  color: var(--color-text-subtlest);\n}\n.mds-pagination.pagination__simple-mode ul li.simple-mode__dash span {\n  color: inherit;\n}\n.mds-pagination.pagination__simple-mode ul li.simple-mode__this span {\n  color: inherit;\n}\n.mds-pagination.pagination__simple-mode ul li.simple-mode__total {\n  color: var(--color-text-subtlest);\n}\n.mds-pagination.pagination__simple-mode ul li.simple-mode__total span {\n  color: inherit;\n}\n\n.pagination-l li button {\n  width: 40px;\n  height: 40px;\n}\n.pagination-l.pagination__simple-mode li.simple-mode__this, .pagination-l.pagination__simple-mode li.simple-mode__total {\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n}\n\n.pagination-m li button {\n  width: 32px;\n  height: 32px;\n}\n.pagination-m.pagination__simple-mode li.simple-mode__this, .pagination-m.pagination__simple-mode li.simple-mode__total {\n  width: 32px;\n  height: 32px;\n  justify-content: center;\n}\n\n.pagination-s li button {\n  width: 28px;\n  height: 28px;\n}\n.pagination-s.pagination__simple-mode li.simple-mode__this, .pagination-s.pagination__simple-mode li.simple-mode__total {\n  width: 28px;\n  height: 28px;\n  justify-content: center;\n}\n\n.radio__group {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 8px;\n}\n.radio__group .radio-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 16px;\n}\n.radio__group .radio__group__label {\n  width: 100%;\n}\n.radio__group.left {\n  justify-content: flex-start;\n}\n.radio__group.right {\n  justify-content: flex-end;\n}\n.radio__group.right .radio-box {\n  justify-content: flex-end;\n}\n.radio__group.right + .helper-text, .radio__group.right .radio__group__label {\n  text-align: right;\n}\n.radio__group.vertical {\n  flex-direction: column;\n  gap: 4px;\n}\n.radio__group.vertical .radio-box {\n  padding-top: 4px;\n  flex-direction: column;\n  gap: 12px;\n}\n.radio__group.vertical.right {\n  align-items: flex-end;\n}\n.radio__group.vertical.right .radio-box {\n  align-items: flex-end;\n  width: max-content;\n  align-items: flex-start;\n}\n.radio__group.horizontal {\n  flex-direction: row;\n  gap: 4px;\n}\n.radio__group.horizontal .radio-box {\n  padding-top: 4px;\n  flex-direction: row;\n  gap: 16px;\n}\n.radio__group .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__group .helper-text .text {\n  width: 100%;\n}\n.radio__group .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__group .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__group .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__group .helper-text .icon-error,\n.radio__group .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__group .helper-text .icon-error svg,\n.radio__group .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio input[type=radio] {\n  appearance: none;\n}\n\n.radio-wrap .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio-wrap .helper-text .text {\n  width: 100%;\n}\n.radio-wrap .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio-wrap .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio-wrap .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio-wrap .helper-text .icon-error,\n.radio-wrap .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio-wrap .helper-text .icon-error svg,\n.radio-wrap .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.radio-wrap .helper-text.font-body {\n  padding-top: 4px;\n}\n.radio-wrap .radio-label {\n  display: flex;\n  align-items: flex-start;\n  color: var(--color-text-default);\n  cursor: pointer;\n}\n.radio-wrap .radio-label .radio {\n  flex: none;\n  margin-right: 8px;\n  color: var(--color-text-default);\n}\n.radio-wrap .radio-label p {\n  word-break: break-all;\n}\n\n.radio__l--default {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n.radio__l--default:hover, .radio__l--default:active, .radio__l--default:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__l--default.checked {\n  border-color: var(--color-background-primary);\n  border-width: 7px;\n}\n.radio__l--default.checked:hover, .radio__l--default.checked:active, .radio__l--default.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__l--default .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__l--default .helper-text .text {\n  width: 100%;\n}\n.radio__l--default .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__l--default .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__l--default .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__l--default .helper-text .icon-error,\n.radio__l--default .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__l--default .helper-text .icon-error svg,\n.radio__l--default .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__l--pressed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-color: var(--color-border-accent);\n}\n.radio__l--pressed:hover, .radio__l--pressed:active, .radio__l--pressed:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__l--pressed.checked {\n  border-color: var(--color-background-primary);\n  border-width: 7px;\n  border-color: var(--color-background-primary-accent);\n}\n.radio__l--pressed.checked:hover, .radio__l--pressed.checked:active, .radio__l--pressed.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__l--pressed .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__l--pressed .helper-text .text {\n  width: 100%;\n}\n.radio__l--pressed .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__l--pressed .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__l--pressed .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__l--pressed .helper-text .icon-error,\n.radio__l--pressed .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__l--pressed .helper-text .icon-error svg,\n.radio__l--pressed .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__l--disabled {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n}\n.radio__l--disabled:hover, .radio__l--disabled:active, .radio__l--disabled:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__l--disabled, .radio__l--disabled:hover, .radio__l--disabled:active, .radio__l--disabled:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.radio__l--disabled + p {\n  color: var(--color-text-disabled);\n}\n.radio__l--disabled.checked, .radio__l--disabled.checked:hover, .radio__l--disabled.checked:active, .radio__l--disabled.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.radio__l--disabled.checked {\n  border-color: var(--color-background-primary);\n  border-width: 7px;\n}\n.radio__l--disabled.checked:hover, .radio__l--disabled.checked:active, .radio__l--disabled.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__l--disabled.checked, .radio__l--disabled.checked:hover, .radio__l--disabled.checked:active, .radio__l--disabled.checked:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.radio__l--disabled.checked + p {\n  color: var(--color-text-disabled);\n}\n.radio__l--disabled.checked.checked, .radio__l--disabled.checked.checked:hover, .radio__l--disabled.checked.checked:active, .radio__l--disabled.checked.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.radio__l--disabled .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__l--disabled .helper-text .text {\n  width: 100%;\n}\n.radio__l--disabled .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__l--disabled .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__l--disabled .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__l--disabled .helper-text .icon-error,\n.radio__l--disabled .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__l--disabled .helper-text .icon-error svg,\n.radio__l--disabled .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__l--error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border-color: var(--color-border-error);\n}\n.radio__l--error:hover, .radio__l--error:active, .radio__l--error:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__l--error:hover, .radio__l--error:active, .radio__l--error:focus {\n  border-color: var(--color-border-error-accent);\n}\n.radio__l--error.checked {\n  border-color: var(--color-background-primary);\n  border-width: 7px;\n  border-color: var(--color-border-error);\n}\n.radio__l--error.checked:hover, .radio__l--error.checked:active, .radio__l--error.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__l--error.checked:hover, .radio__l--error.checked:active, .radio__l--error.checked:focus {\n  border-color: var(--color-border-error-accent);\n}\n.radio__l--error .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__l--error .helper-text .text {\n  width: 100%;\n}\n.radio__l--error .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__l--error .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__l--error .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__l--error .helper-text .icon-error,\n.radio__l--error .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__l--error .helper-text .icon-error svg,\n.radio__l--error .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__s--default {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.radio__s--default:hover, .radio__s--default:active, .radio__s--default:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__s--default.checked {\n  border-color: var(--color-background-primary);\n  border-width: 6px;\n}\n.radio__s--default.checked:hover, .radio__s--default.checked:active, .radio__s--default.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__s--default .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__s--default .helper-text .text {\n  width: 100%;\n}\n.radio__s--default .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__s--default .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__s--default .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__s--default .helper-text .icon-error,\n.radio__s--default .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__s--default .helper-text .icon-error svg,\n.radio__s--default .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__s--pressed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border-color: var(--color-border-accent);\n}\n.radio__s--pressed:hover, .radio__s--pressed:active, .radio__s--pressed:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__s--pressed.checked {\n  border-color: var(--color-background-primary);\n  border-width: 6px;\n  border-color: var(--color-background-primary-accent);\n}\n.radio__s--pressed.checked:hover, .radio__s--pressed.checked:active, .radio__s--pressed.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__s--pressed .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__s--pressed .helper-text .text {\n  width: 100%;\n}\n.radio__s--pressed .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__s--pressed .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__s--pressed .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__s--pressed .helper-text .icon-error,\n.radio__s--pressed .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__s--pressed .helper-text .icon-error svg,\n.radio__s--pressed .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__s--disabled {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.radio__s--disabled:hover, .radio__s--disabled:active, .radio__s--disabled:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__s--disabled, .radio__s--disabled:hover, .radio__s--disabled:active, .radio__s--disabled:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.radio__s--disabled + p {\n  color: var(--color-text-disabled);\n}\n.radio__s--disabled.checked, .radio__s--disabled.checked:hover, .radio__s--disabled.checked:active, .radio__s--disabled.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.radio__s--disabled.checked {\n  border-color: var(--color-background-primary);\n  border-width: 6px;\n}\n.radio__s--disabled.checked:hover, .radio__s--disabled.checked:active, .radio__s--disabled.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__s--disabled.checked, .radio__s--disabled.checked:hover, .radio__s--disabled.checked:active, .radio__s--disabled.checked:focus {\n  border-color: var(--color-border-disabled);\n  background-color: var(--color-background-disabled);\n}\n.radio__s--disabled.checked + p {\n  color: var(--color-text-disabled);\n}\n.radio__s--disabled.checked.checked, .radio__s--disabled.checked.checked:hover, .radio__s--disabled.checked.checked:active, .radio__s--disabled.checked.checked:focus {\n  background-color: var(--color-background-disabled);\n}\n.radio__s--disabled .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__s--disabled .helper-text .text {\n  width: 100%;\n}\n.radio__s--disabled .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__s--disabled .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__s--disabled .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__s--disabled .helper-text .icon-error,\n.radio__s--disabled .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__s--disabled .helper-text .icon-error svg,\n.radio__s--disabled .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.radio__s--error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-border-default);\n  border-radius: 50%;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border-color: var(--color-border-error);\n}\n.radio__s--error:hover, .radio__s--error:active, .radio__s--error:focus {\n  border-color: var(--color-border-accent);\n}\n.radio__s--error:hover, .radio__s--error:active, .radio__s--error:focus {\n  border-color: var(--color-border-error-accent);\n}\n.radio__s--error.checked {\n  border-color: var(--color-background-primary);\n  border-width: 6px;\n  border-color: var(--color-border-error);\n}\n.radio__s--error.checked:hover, .radio__s--error.checked:active, .radio__s--error.checked:focus {\n  border-color: var(--color-background-primary-accent);\n}\n.radio__s--error.checked:hover, .radio__s--error.checked:active, .radio__s--error.checked:focus {\n  border-color: var(--color-border-error-accent);\n}\n.radio__s--error .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.radio__s--error .helper-text .text {\n  width: 100%;\n}\n.radio__s--error .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.radio__s--error .helper-text.error {\n  color: var(--color-text-error);\n}\n.radio__s--error .helper-text.success {\n  color: var(--color-text-success);\n}\n.radio__s--error .helper-text .icon-error,\n.radio__s--error .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.radio__s--error .helper-text .icon-error svg,\n.radio__s--error .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n\n.search-wrap {\n  max-width: 320px;\n}\n.search-wrap.fullWidth {\n  max-width: none;\n}\n\n.snackbar-box {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  min-width: 300px;\n  width: auto;\n  max-width: 500px;\n  padding: 12px 16px;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  z-index: 99999;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n  transition: all 0.7s ease-in-out;\n}\n.snackbar-box.open {\n  opacity: 1;\n  visibility: unset;\n  transition: all 0.7s ease-in-out;\n}\n.snackbar-box.close {\n  opacity: 0;\n  visibility: hidden;\n}\n.snackbar-box p {\n  color: var(--color-text-default-reverse);\n}\n.snackbar-box button {\n  height: fit-content;\n  color: var(--color-text-accent) !important;\n}\n.snackbar-box svg {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: var(--color-text-default-reverse);\n}\n.snackbar-box > div {\n  display: flex;\n  gap: 8px;\n}\n\n.light .snackbar-box button:hover, .light .snackbar-box button:focus, .light .snackbar-box button:active {\n  background-color: var(--palette-gray-900);\n}\n\n.dark .snackbar-box button:hover, .dark .snackbar-box button:focus, .dark .snackbar-box button:active {\n  background-color: var(--palette-gray-800);\n}\n\n@media only screen and (max-width: 767px) {\n  .snackbar-box {\n    min-width: unset;\n    width: calc(100% - 32px);\n  }\n}\n.snackbar-top-left {\n  top: 20px;\n  left: 20px;\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-top-left {\n    top: 16px;\n    left: 16px;\n  }\n}\n\n.snackbar-top {\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-top {\n    top: 16px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.snackbar-top-right {\n  top: 20px;\n  right: 20px;\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-top-right {\n    top: 16px;\n    right: 16px;\n  }\n}\n\n.snackbar-bottom-right {\n  bottom: 20px;\n  right: 20px;\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-bottom-right {\n    bottom: 16px;\n    right: 16px;\n  }\n}\n\n.snackbar-bottom {\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-bottom {\n    bottom: 16px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.snackbar-bottom-left {\n  bottom: 20px;\n  left: 20px;\n}\n@media only screen and (max-width: 767px) {\n  .snackbar-bottom-left {\n    bottom: 16px;\n    left: 16px;\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n.spinner-wrap {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.spinner-wrap > svg.spinner {\n  position: absolute;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n  animation: rotate 2s linear infinite;\n  z-index: 2;\n  width: 24px;\n  height: 24px;\n  color: transparent;\n}\n.spinner-wrap > svg.spinner.spinner-white .path {\n  stroke: var(--color-text-default-reverse);\n  stroke-linecap: square;\n  animation: dash 1.5s ease-in-out infinite;\n}\n.spinner-wrap > svg.spinner {\n  position: absolute;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n  animation: rotate 2s linear infinite;\n  z-index: 2;\n  width: 24px;\n  height: 24px;\n  color: transparent;\n}\n.spinner-wrap > svg.spinner.spinner-black .path {\n  stroke: var(--color-text-default);\n  stroke-linecap: square;\n  animation: dash 1.5s ease-in-out infinite;\n}\n\n.switch-toggle-wrap {\n  position: relative;\n}\n.switch-toggle-wrap label {\n  display: block;\n}\n.switch-toggle-wrap.label-mode label .font-body {\n  position: absolute;\n}\n.switch-toggle-wrap .helper-text.font-body {\n  display: block;\n  color: var(--color-text-sub);\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-l {\n  width: 44px;\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l label {\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode label .font-body {\n  top: 0;\n  left: 52px;\n  line-height: 24px;\n  word-break: break-all;\n}\n\n.switch-toggle__l--default::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--default + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__l--default:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--default::before {\n  width: 44px;\n  height: 24px;\n  border-radius: 12px;\n}\n.switch-toggle__l--default + .switch-button {\n  top: calc(50% - 10px);\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--default + .switch-button svg {\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--default:checked + .switch-button {\n  left: 22px;\n}\n.switch-toggle__l--default:hover::before, .switch-toggle__l--default:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--default:hover + .switch-button svg, .switch-toggle__l--default:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--default:hover:checked::before, .switch-toggle__l--default:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--default:hover:checked + .switch-button svg, .switch-toggle__l--default:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--default::before {\n  background-color: var(--color-background-ui-middle);\n}\n.switch-toggle__l--default + .switch-button {\n  background-color: var(--palette-white);\n}\n.switch-toggle__l--default + .switch-button svg {\n  color: var(--color-background-ui-middle);\n}\n.switch-toggle__l--default:checked::before {\n  background-color: var(--color-background-primary);\n}\n.switch-toggle__l--default:checked + .switch-button svg {\n  color: var(--color-background-primary);\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-l {\n  width: 44px;\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l label {\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode label .font-body {\n  top: 0;\n  left: 52px;\n  line-height: 24px;\n  word-break: break-all;\n}\n\n.switch-toggle__l--pressed::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--pressed + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__l--pressed:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--pressed::before {\n  width: 44px;\n  height: 24px;\n  border-radius: 12px;\n}\n.switch-toggle__l--pressed + .switch-button {\n  top: calc(50% - 10px);\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--pressed + .switch-button svg {\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--pressed:checked + .switch-button {\n  left: 22px;\n}\n.switch-toggle__l--pressed:hover::before, .switch-toggle__l--pressed:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--pressed:hover + .switch-button svg, .switch-toggle__l--pressed:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--pressed:hover:checked::before, .switch-toggle__l--pressed:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--pressed:hover:checked + .switch-button svg, .switch-toggle__l--pressed:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--pressed::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--pressed + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--pressed:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--pressed:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-l {\n  width: 44px;\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l label {\n  height: 24px;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-l.label-mode label .font-body {\n  top: 0;\n  left: 52px;\n  line-height: 24px;\n  word-break: break-all;\n}\n\n.switch-toggle__l--disabled::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--disabled + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__l--disabled:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__l--disabled::before {\n  width: 44px;\n  height: 24px;\n  border-radius: 12px;\n}\n.switch-toggle__l--disabled + .switch-button {\n  top: calc(50% - 10px);\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--disabled + .switch-button svg {\n  width: 20px;\n  height: 20px;\n}\n.switch-toggle__l--disabled:checked + .switch-button {\n  left: 22px;\n}\n.switch-toggle__l--disabled:hover::before, .switch-toggle__l--disabled:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--disabled:hover + .switch-button svg, .switch-toggle__l--disabled:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__l--disabled:hover:checked::before, .switch-toggle__l--disabled:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--disabled:hover:checked + .switch-button svg, .switch-toggle__l--disabled:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__l--disabled::before {\n  background-color: var(--color-background-disabled) !important;\n}\n.switch-toggle__l--disabled + .switch-button {\n  background-color: var(--color-text-disabled) !important;\n}\n.switch-toggle__l--disabled + .switch-button svg {\n  color: var(--color-background-disabled) !important;\n}\n.switch-toggle__l--disabled:checked::before {\n  background-color: var(--color-background-disabled) !important;\n}\n.switch-toggle__l--disabled:checked + .switch-button svg {\n  color: var(--color-background-disabled) !important;\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-s {\n  width: 30px;\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s label {\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode label .font-body {\n  top: 0;\n  left: 38px;\n  line-height: 16px;\n}\n\n.switch-toggle__s--default::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--default + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__s--default:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--default::before {\n  width: 30px;\n  height: 16px;\n  border-radius: 8px;\n}\n.switch-toggle__s--default + .switch-button {\n  top: calc(50% - 6px);\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n}\n.switch-toggle__s--default + .switch-button svg {\n  width: 12px;\n  height: 12px;\n}\n.switch-toggle__s--default:checked + .switch-button {\n  left: 16px;\n}\n.switch-toggle__s--default:hover::before, .switch-toggle__s--default:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--default:hover + .switch-button svg, .switch-toggle__s--default:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--default:hover:checked::before, .switch-toggle__s--default:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--default:hover:checked + .switch-button svg, .switch-toggle__s--default:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--default::before {\n  background-color: var(--color-background-ui-middle);\n}\n.switch-toggle__s--default + .switch-button {\n  background-color: var(--palette-white);\n}\n.switch-toggle__s--default + .switch-button svg {\n  color: var(--color-background-ui-middle);\n}\n.switch-toggle__s--default:checked::before {\n  background-color: var(--color-background-primary);\n}\n.switch-toggle__s--default:checked + .switch-button svg {\n  color: var(--color-background-primary);\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-s {\n  width: 30px;\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s label {\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode label .font-body {\n  top: 0;\n  left: 38px;\n  line-height: 16px;\n}\n\n.switch-toggle__s--pressed::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--pressed + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__s--pressed:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--pressed::before {\n  width: 30px;\n  height: 16px;\n  border-radius: 8px;\n}\n.switch-toggle__s--pressed + .switch-button {\n  top: calc(50% - 6px);\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n}\n.switch-toggle__s--pressed + .switch-button svg {\n  width: 12px;\n  height: 12px;\n}\n.switch-toggle__s--pressed:checked + .switch-button {\n  left: 16px;\n}\n.switch-toggle__s--pressed:hover::before, .switch-toggle__s--pressed:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--pressed:hover + .switch-button svg, .switch-toggle__s--pressed:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--pressed:hover:checked::before, .switch-toggle__s--pressed:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--pressed:hover:checked + .switch-button svg, .switch-toggle__s--pressed:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--pressed::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--pressed + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--pressed:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--pressed:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n\n.switch-toggle-wrap.disabled label .font-body {\n  color: var(--color-text-disabled) !important;\n}\n.switch-toggle-wrap.switch-toggle-s {\n  width: 30px;\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s label {\n  height: 16px;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode {\n  width: auto;\n}\n.switch-toggle-wrap.switch-toggle-s.label-mode label .font-body {\n  top: 0;\n  left: 38px;\n  line-height: 16px;\n}\n\n.switch-toggle__s--disabled::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  z-index: 1;\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--disabled + .switch-button {\n  position: absolute;\n  left: 2px;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n  background-color: var(--palette-white);\n}\n.switch-toggle__s--disabled:checked + .switch-button {\n  transition: all 0.2s ease-in-out;\n}\n.switch-toggle__s--disabled::before {\n  width: 30px;\n  height: 16px;\n  border-radius: 8px;\n}\n.switch-toggle__s--disabled + .switch-button {\n  top: calc(50% - 6px);\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n}\n.switch-toggle__s--disabled + .switch-button svg {\n  width: 12px;\n  height: 12px;\n}\n.switch-toggle__s--disabled:checked + .switch-button {\n  left: 16px;\n}\n.switch-toggle__s--disabled:hover::before, .switch-toggle__s--disabled:focus::before {\n  background-color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--disabled:hover + .switch-button svg, .switch-toggle__s--disabled:focus + .switch-button svg {\n  color: var(--color-background-ui-middle-accent);\n}\n.switch-toggle__s--disabled:hover:checked::before, .switch-toggle__s--disabled:focus:checked::before {\n  background-color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--disabled:hover:checked + .switch-button svg, .switch-toggle__s--disabled:focus:checked + .switch-button svg {\n  color: var(--color-background-primary-accent);\n}\n.switch-toggle__s--disabled::before {\n  background-color: var(--color-background-disabled) !important;\n}\n.switch-toggle__s--disabled + .switch-button {\n  background-color: var(--color-text-disabled) !important;\n}\n.switch-toggle__s--disabled + .switch-button svg {\n  color: var(--color-background-disabled) !important;\n}\n.switch-toggle__s--disabled:checked::before {\n  background-color: var(--color-background-disabled) !important;\n}\n.switch-toggle__s--disabled:checked + .switch-button svg {\n  color: var(--color-background-disabled) !important;\n}\n\n.tab-wrap {\n  overflow: hidden;\n}\n.tab-wrap .tab-bar {\n  overflow: hidden;\n  position: relative;\n  margin-left: 56px;\n  margin-right: 56px;\n}\n.tab-wrap .tab-bar.fixed .tab-bar__list > button {\n  width: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.tab-wrap .tab-bar .control {\n  display: none;\n  position: absolute;\n  top: 0;\n  z-index: 999;\n  background-color: var(--color-background-base);\n}\n.tab-wrap .tab-bar .control::before {\n  content: \"\";\n  display: block;\n  width: 36px;\n  height: 56px;\n  background-color: var(--color-background-base);\n  z-index: -1;\n}\n.tab-wrap .tab-bar .control::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: -20px;\n  width: 20px;\n  height: 56px;\n  background: linear-gradient(to left, rgba(255, 255, 255, 0), var(--color-background-base));\n}\n.tab-wrap .tab-bar .control button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.tab-wrap .tab-bar .control.prev {\n  left: 0;\n}\n.tab-wrap .tab-bar .control.next {\n  right: 0;\n}\n.tab-wrap .tab-bar .control.next::after {\n  left: -20px;\n  right: auto;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--color-background-base));\n}\n.tab-wrap .tab-bar__list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tab-wrap .tab-bar__list > button {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 80px;\n  height: 56px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: var(--color-text-subtlest);\n  cursor: pointer;\n  overflow: hidden;\n}\n.tab-wrap .tab-bar__list > button .font-label {\n  color: var(--color-text-subtlest);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 20px;\n}\n.tab-wrap .tab-bar__list > button .chips {\n  min-width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 20px;\n  color: var(--color-text-default-reverse) !important;\n  background-color: var(--color-background-ui-middle);\n}\n.tab-wrap .tab-bar__list svg {\n  min-width: 24px;\n  width: 24px;\n  height: 24px;\n}\n.tab-wrap .tab-panel {\n  padding: 32px 56px;\n  border-top: 1px solid var(--color-divider-default);\n}\n@media only screen and (max-width: 1279px) {\n  .tab-wrap .tab-bar {\n    margin-left: 48px;\n    margin-right: 48px;\n  }\n  .tab-wrap .tab-panel {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .tab-wrap .tab-bar {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n  .tab-wrap .tab-panel {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.tab-wrap .tab-bar__l {\n  height: 56px;\n}\n.tab-wrap .tab-bar__list button.tab-l-default {\n  height: 56px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.tab-wrap .tab-bar__list button.tab-l-default:hover, .tab-wrap .tab-bar__list button.tab-l-default:focus, .tab-wrap .tab-bar__list button.tab-l-default:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-l-default:hover p, .tab-wrap .tab-bar__list button.tab-l-default:hover span, .tab-wrap .tab-bar__list button.tab-l-default:focus p, .tab-wrap .tab-bar__list button.tab-l-default:focus span, .tab-wrap .tab-bar__list button.tab-l-default:active p, .tab-wrap .tab-bar__list button.tab-l-default:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-default.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-default.checked p, .tab-wrap .tab-bar__list button.tab-l-default.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-default.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__l {\n  height: 56px;\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed {\n  height: 56px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed:hover, .tab-wrap .tab-bar__list button.tab-l-pressed:focus, .tab-wrap .tab-bar__list button.tab-l-pressed:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed:hover p, .tab-wrap .tab-bar__list button.tab-l-pressed:hover span, .tab-wrap .tab-bar__list button.tab-l-pressed:focus p, .tab-wrap .tab-bar__list button.tab-l-pressed:focus span, .tab-wrap .tab-bar__list button.tab-l-pressed:active p, .tab-wrap .tab-bar__list button.tab-l-pressed:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed p, .tab-wrap .tab-bar__list button.tab-l-pressed span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed.checked p, .tab-wrap .tab-bar__list button.tab-l-pressed.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-pressed.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__l {\n  height: 56px;\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled {\n  height: 56px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: var(--color-text-disabled) !important;\n  background-color: var(--color-background-disabled) !important;\n  cursor: auto;\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled:hover, .tab-wrap .tab-bar__list button.tab-l-disabled:focus, .tab-wrap .tab-bar__list button.tab-l-disabled:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled:hover p, .tab-wrap .tab-bar__list button.tab-l-disabled:hover span, .tab-wrap .tab-bar__list button.tab-l-disabled:focus p, .tab-wrap .tab-bar__list button.tab-l-disabled:focus span, .tab-wrap .tab-bar__list button.tab-l-disabled:active p, .tab-wrap .tab-bar__list button.tab-l-disabled:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled p, .tab-wrap .tab-bar__list button.tab-l-disabled span {\n  color: var(--color-text-disabled) !important;\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled.checked p, .tab-wrap .tab-bar__list button.tab-l-disabled.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-l-disabled.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__m {\n  height: 48px;\n}\n.tab-wrap .tab-bar__m .control::before, .tab-wrap .tab-bar__m .control::after {\n  height: 48px;\n}\n.tab-wrap .tab-bar__list button.tab-m-default {\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.tab-wrap .tab-bar__list button.tab-m-default:hover, .tab-wrap .tab-bar__list button.tab-m-default:focus, .tab-wrap .tab-bar__list button.tab-m-default:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-m-default:hover p, .tab-wrap .tab-bar__list button.tab-m-default:hover span, .tab-wrap .tab-bar__list button.tab-m-default:focus p, .tab-wrap .tab-bar__list button.tab-m-default:focus span, .tab-wrap .tab-bar__list button.tab-m-default:active p, .tab-wrap .tab-bar__list button.tab-m-default:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-default.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-default.checked p, .tab-wrap .tab-bar__list button.tab-m-default.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-default.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__m {\n  height: 48px;\n}\n.tab-wrap .tab-bar__m .control::before, .tab-wrap .tab-bar__m .control::after {\n  height: 48px;\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed {\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed:hover, .tab-wrap .tab-bar__list button.tab-m-pressed:focus, .tab-wrap .tab-bar__list button.tab-m-pressed:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed:hover p, .tab-wrap .tab-bar__list button.tab-m-pressed:hover span, .tab-wrap .tab-bar__list button.tab-m-pressed:focus p, .tab-wrap .tab-bar__list button.tab-m-pressed:focus span, .tab-wrap .tab-bar__list button.tab-m-pressed:active p, .tab-wrap .tab-bar__list button.tab-m-pressed:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed p, .tab-wrap .tab-bar__list button.tab-m-pressed span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed.checked p, .tab-wrap .tab-bar__list button.tab-m-pressed.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-pressed.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__m {\n  height: 48px;\n}\n.tab-wrap .tab-bar__m .control::before, .tab-wrap .tab-bar__m .control::after {\n  height: 48px;\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled {\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: var(--color-text-disabled) !important;\n  background-color: var(--color-background-disabled) !important;\n  cursor: auto;\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled:hover, .tab-wrap .tab-bar__list button.tab-m-disabled:focus, .tab-wrap .tab-bar__list button.tab-m-disabled:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled:hover p, .tab-wrap .tab-bar__list button.tab-m-disabled:hover span, .tab-wrap .tab-bar__list button.tab-m-disabled:focus p, .tab-wrap .tab-bar__list button.tab-m-disabled:focus span, .tab-wrap .tab-bar__list button.tab-m-disabled:active p, .tab-wrap .tab-bar__list button.tab-m-disabled:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled p, .tab-wrap .tab-bar__list button.tab-m-disabled span {\n  color: var(--color-text-disabled) !important;\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled.checked p, .tab-wrap .tab-bar__list button.tab-m-disabled.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-m-disabled.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__s {\n  height: 40px;\n}\n.tab-wrap .tab-bar__s .control::before, .tab-wrap .tab-bar__s .control::after {\n  height: 40px;\n}\n.tab-wrap .tab-bar__list button.tab-s-default {\n  height: 40px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.tab-wrap .tab-bar__list button.tab-s-default svg {\n  width: 20px;\n  height: 20px;\n}\n.tab-wrap .tab-bar__list button.tab-s-default:hover, .tab-wrap .tab-bar__list button.tab-s-default:focus, .tab-wrap .tab-bar__list button.tab-s-default:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-s-default:hover p, .tab-wrap .tab-bar__list button.tab-s-default:hover span, .tab-wrap .tab-bar__list button.tab-s-default:focus p, .tab-wrap .tab-bar__list button.tab-s-default:focus span, .tab-wrap .tab-bar__list button.tab-s-default:active p, .tab-wrap .tab-bar__list button.tab-s-default:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-default.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-default.checked p, .tab-wrap .tab-bar__list button.tab-s-default.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-default.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__s {\n  height: 40px;\n}\n.tab-wrap .tab-bar__s .control::before, .tab-wrap .tab-bar__s .control::after {\n  height: 40px;\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed {\n  height: 40px;\n  padding-left: 12px;\n  padding-right: 12px;\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed svg {\n  width: 20px;\n  height: 20px;\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed:hover, .tab-wrap .tab-bar__list button.tab-s-pressed:focus, .tab-wrap .tab-bar__list button.tab-s-pressed:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed:hover p, .tab-wrap .tab-bar__list button.tab-s-pressed:hover span, .tab-wrap .tab-bar__list button.tab-s-pressed:focus p, .tab-wrap .tab-bar__list button.tab-s-pressed:focus span, .tab-wrap .tab-bar__list button.tab-s-pressed:active p, .tab-wrap .tab-bar__list button.tab-s-pressed:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed p, .tab-wrap .tab-bar__list button.tab-s-pressed span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed.checked p, .tab-wrap .tab-bar__list button.tab-s-pressed.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-pressed.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.tab-wrap .tab-bar__s {\n  height: 40px;\n}\n.tab-wrap .tab-bar__s .control::before, .tab-wrap .tab-bar__s .control::after {\n  height: 40px;\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled {\n  height: 40px;\n  padding-left: 12px;\n  padding-right: 12px;\n  color: var(--color-text-disabled) !important;\n  background-color: var(--color-background-disabled) !important;\n  cursor: auto;\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled svg {\n  width: 20px;\n  height: 20px;\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled:hover, .tab-wrap .tab-bar__list button.tab-s-disabled:focus, .tab-wrap .tab-bar__list button.tab-s-disabled:active {\n  color: var(--color-text-default);\n  background-color: var(--color-background-ui-base);\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled:hover p, .tab-wrap .tab-bar__list button.tab-s-disabled:hover span, .tab-wrap .tab-bar__list button.tab-s-disabled:focus p, .tab-wrap .tab-bar__list button.tab-s-disabled:focus span, .tab-wrap .tab-bar__list button.tab-s-disabled:active p, .tab-wrap .tab-bar__list button.tab-s-disabled:active span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled p, .tab-wrap .tab-bar__list button.tab-s-disabled span {\n  color: var(--color-text-disabled) !important;\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled.checked {\n  position: relative;\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled.checked p, .tab-wrap .tab-bar__list button.tab-s-disabled.checked span {\n  color: var(--color-text-default);\n}\n.tab-wrap .tab-bar__list button.tab-s-disabled.checked::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: var(--color-border-accent);\n}\n\n.textfield__text-l-default label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-default label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-default .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-default .textfield-formControl input, .textfield__text-l-default .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-default .textfield-formControl input::placeholder, .textfield__text-l-default .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-default .textfield-formControl input::placeholder, .textfield__text-l-default .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-default .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-default .textfield-formControl:focus, .textfield__text-l-default .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-default .textfield-formControl button, .textfield__text-l-default .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-default .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-default .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-l-default .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-default .textfield-formControl + .font-body .icon-success, .textfield__text-l-default .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-default .textfield-formControl + .font-body .icon-error, .textfield__text-l-default .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-default .textfield-formControl + .font-body .icon-error, .textfield__text-l-default .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-default .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-default .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-default .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-default .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-default .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-onfocused label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-onfocused label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-onfocused .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-onfocused .textfield-formControl input, .textfield__text-l-onfocused .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-onfocused .textfield-formControl input::placeholder, .textfield__text-l-onfocused .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-onfocused .textfield-formControl input::placeholder, .textfield__text-l-onfocused .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-onfocused .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-onfocused .textfield-formControl:focus, .textfield__text-l-onfocused .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-onfocused .textfield-formControl button, .textfield__text-l-onfocused .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-onfocused .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body .icon-success, .textfield__text-l-onfocused .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body .icon-error, .textfield__text-l-onfocused .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body .icon-error, .textfield__text-l-onfocused .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-onfocused .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-onfocused .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-onfocused .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-onfocused .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-onfocused .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-typing label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-typing label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-typing .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-typing .textfield-formControl input, .textfield__text-l-typing .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-typing .textfield-formControl input::placeholder, .textfield__text-l-typing .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-typing .textfield-formControl input::placeholder, .textfield__text-l-typing .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-typing .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-typing .textfield-formControl:focus, .textfield__text-l-typing .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-typing .textfield-formControl button, .textfield__text-l-typing .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-typing .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-typing .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-l-typing .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-typing .textfield-formControl + .font-body .icon-success, .textfield__text-l-typing .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-typing .textfield-formControl + .font-body .icon-error, .textfield__text-l-typing .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-typing .textfield-formControl + .font-body .icon-error, .textfield__text-l-typing .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-typing .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-typing .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-typing .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-typing .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-typing .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-completed label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-completed label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-completed .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-completed .textfield-formControl input, .textfield__text-l-completed .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-completed .textfield-formControl input::placeholder, .textfield__text-l-completed .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-completed .textfield-formControl input::placeholder, .textfield__text-l-completed .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-completed .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-completed .textfield-formControl:focus, .textfield__text-l-completed .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-completed .textfield-formControl button, .textfield__text-l-completed .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-completed .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-completed .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-l-completed .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-completed .textfield-formControl + .font-body .icon-success, .textfield__text-l-completed .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-completed .textfield-formControl + .font-body .icon-error, .textfield__text-l-completed .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-completed .textfield-formControl + .font-body .icon-error, .textfield__text-l-completed .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-completed .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-completed .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-completed .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-completed .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-completed .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-error label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-error label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-error .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-error);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-error .textfield-formControl input, .textfield__text-l-error .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-error .textfield-formControl input::placeholder, .textfield__text-l-error .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-error .textfield-formControl input::placeholder, .textfield__text-l-error .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-error .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-error .textfield-formControl:focus, .textfield__text-l-error .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-error .textfield-formControl button, .textfield__text-l-error .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-error .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-error .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-error);\n}\n.textfield__text-l-error .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-error .textfield-formControl + .font-body .icon-success, .textfield__text-l-error .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-error .textfield-formControl + .font-body .icon-error, .textfield__text-l-error .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-error .textfield-formControl + .font-body .icon-error, .textfield__text-l-error .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-error .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-error .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-error .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-error .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-error .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-success label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-success label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-success .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-success);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-success .textfield-formControl input, .textfield__text-l-success .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-success .textfield-formControl input::placeholder, .textfield__text-l-success .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-success .textfield-formControl input::placeholder, .textfield__text-l-success .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-success .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-success .textfield-formControl:focus, .textfield__text-l-success .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-success .textfield-formControl button, .textfield__text-l-success .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-success .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-l-success .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-success);\n}\n.textfield__text-l-success .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-success .textfield-formControl + .font-body .icon-success, .textfield__text-l-success .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-success .textfield-formControl + .font-body .icon-error, .textfield__text-l-success .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-success .textfield-formControl + .font-body .icon-error, .textfield__text-l-success .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-success .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-success .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-success .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-success .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-success .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-l-disabled label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-l-disabled label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-l-disabled .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-disabled);\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__text-l-disabled .textfield-formControl input, .textfield__text-l-disabled .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-l-disabled .textfield-formControl input::placeholder, .textfield__text-l-disabled .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-disabled .textfield-formControl input::placeholder, .textfield__text-l-disabled .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-l-disabled .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-l-disabled .textfield-formControl:focus, .textfield__text-l-disabled .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-l-disabled .textfield-formControl button, .textfield__text-l-disabled .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-l-disabled .textfield-formControl > svg:first-child {\n  color: var(--color-text-disabled);\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body .icon-success, .textfield__text-l-disabled .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body .icon-error, .textfield__text-l-disabled .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body .icon-error, .textfield__text-l-disabled .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-disabled .textfield-formControl + .font-body .icon-error svg, .textfield__text-l-disabled .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-l-disabled .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-l-disabled .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-l-disabled .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-default label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-default label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-default .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-default .textfield-formControl input, .textfield__text-s-default .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-default .textfield-formControl input::placeholder, .textfield__text-s-default .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-default .textfield-formControl input::placeholder, .textfield__text-s-default .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-default .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-default .textfield-formControl:focus, .textfield__text-s-default .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-default .textfield-formControl button, .textfield__text-s-default .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-default .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-default .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-s-default .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-default .textfield-formControl + .font-body .icon-success, .textfield__text-s-default .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-default .textfield-formControl + .font-body .icon-error, .textfield__text-s-default .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-default .textfield-formControl + .font-body .icon-error, .textfield__text-s-default .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-default .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-default .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-default .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-default .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-default .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-onfocused label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-onfocused label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-onfocused .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-onfocused .textfield-formControl input, .textfield__text-s-onfocused .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-onfocused .textfield-formControl input::placeholder, .textfield__text-s-onfocused .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-onfocused .textfield-formControl input::placeholder, .textfield__text-s-onfocused .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-onfocused .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-onfocused .textfield-formControl:focus, .textfield__text-s-onfocused .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-onfocused .textfield-formControl button, .textfield__text-s-onfocused .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-onfocused .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body .icon-success, .textfield__text-s-onfocused .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body .icon-error, .textfield__text-s-onfocused .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body .icon-error, .textfield__text-s-onfocused .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-onfocused .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-onfocused .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-onfocused .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-onfocused .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-onfocused .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-typing label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-typing label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-typing .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-typing .textfield-formControl input, .textfield__text-s-typing .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-typing .textfield-formControl input::placeholder, .textfield__text-s-typing .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-typing .textfield-formControl input::placeholder, .textfield__text-s-typing .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-typing .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-typing .textfield-formControl:focus, .textfield__text-s-typing .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-typing .textfield-formControl button, .textfield__text-s-typing .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-typing .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-typing .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-s-typing .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-typing .textfield-formControl + .font-body .icon-success, .textfield__text-s-typing .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-typing .textfield-formControl + .font-body .icon-error, .textfield__text-s-typing .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-typing .textfield-formControl + .font-body .icon-error, .textfield__text-s-typing .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-typing .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-typing .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-typing .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-typing .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-typing .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-completed label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-completed label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-completed .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-completed .textfield-formControl input, .textfield__text-s-completed .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-completed .textfield-formControl input::placeholder, .textfield__text-s-completed .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-completed .textfield-formControl input::placeholder, .textfield__text-s-completed .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-completed .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-completed .textfield-formControl:focus, .textfield__text-s-completed .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-completed .textfield-formControl button, .textfield__text-s-completed .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-completed .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-completed .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-s-completed .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-completed .textfield-formControl + .font-body .icon-success, .textfield__text-s-completed .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-completed .textfield-formControl + .font-body .icon-error, .textfield__text-s-completed .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-completed .textfield-formControl + .font-body .icon-error, .textfield__text-s-completed .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-completed .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-completed .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-completed .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-completed .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-completed .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-error label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-error label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-error .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-error);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-error .textfield-formControl input, .textfield__text-s-error .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-error .textfield-formControl input::placeholder, .textfield__text-s-error .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-error .textfield-formControl input::placeholder, .textfield__text-s-error .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-error .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-error .textfield-formControl:focus, .textfield__text-s-error .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-error .textfield-formControl button, .textfield__text-s-error .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-error .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-error .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-error);\n}\n.textfield__text-s-error .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-error .textfield-formControl + .font-body .icon-success, .textfield__text-s-error .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-error .textfield-formControl + .font-body .icon-error, .textfield__text-s-error .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-error .textfield-formControl + .font-body .icon-error, .textfield__text-s-error .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-error .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-error .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-error .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-error .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-error .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-success label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-success label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-success .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-success);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-success .textfield-formControl input, .textfield__text-s-success .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-success .textfield-formControl input::placeholder, .textfield__text-s-success .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-success .textfield-formControl input::placeholder, .textfield__text-s-success .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-success .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-success .textfield-formControl:focus, .textfield__text-s-success .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-success .textfield-formControl button, .textfield__text-s-success .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-success .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__text-s-success .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-success);\n}\n.textfield__text-s-success .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-success .textfield-formControl + .font-body .icon-success, .textfield__text-s-success .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-success .textfield-formControl + .font-body .icon-error, .textfield__text-s-success .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-success .textfield-formControl + .font-body .icon-error, .textfield__text-s-success .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-success .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-success .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-success .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-success .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-success .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__text-s-disabled label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__text-s-disabled label .required {\n  color: var(--color-text-accent);\n}\n.textfield__text-s-disabled .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-disabled);\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__text-s-disabled .textfield-formControl input, .textfield__text-s-disabled .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__text-s-disabled .textfield-formControl input::placeholder, .textfield__text-s-disabled .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-disabled .textfield-formControl input::placeholder, .textfield__text-s-disabled .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__text-s-disabled .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__text-s-disabled .textfield-formControl:focus, .textfield__text-s-disabled .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__text-s-disabled .textfield-formControl button, .textfield__text-s-disabled .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__text-s-disabled .textfield-formControl > svg:first-child {\n  color: var(--color-text-disabled);\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body .icon-success, .textfield__text-s-disabled .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body .icon-error, .textfield__text-s-disabled .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body .icon-error, .textfield__text-s-disabled .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-disabled .textfield-formControl + .font-body .icon-error svg, .textfield__text-s-disabled .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__text-s-disabled .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__text-s-disabled .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__text-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__text-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__text-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__text-s-disabled .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-default label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-default label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-default .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-default .textfield-formControl input, .textfield__password-l-default .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-default .textfield-formControl input::placeholder, .textfield__password-l-default .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-default .textfield-formControl input::placeholder, .textfield__password-l-default .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-default .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-default .textfield-formControl:focus, .textfield__password-l-default .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-default .textfield-formControl button, .textfield__password-l-default .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-default .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-default .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-l-default .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-default .textfield-formControl + .font-body .icon-success, .textfield__password-l-default .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-default .textfield-formControl + .font-body .icon-error, .textfield__password-l-default .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-default .textfield-formControl + .font-body .icon-error, .textfield__password-l-default .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-default .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-default .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-default .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-default .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-default .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-onfocused label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-onfocused label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-onfocused .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-onfocused .textfield-formControl input, .textfield__password-l-onfocused .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-onfocused .textfield-formControl input::placeholder, .textfield__password-l-onfocused .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-onfocused .textfield-formControl input::placeholder, .textfield__password-l-onfocused .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-onfocused .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-onfocused .textfield-formControl:focus, .textfield__password-l-onfocused .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-onfocused .textfield-formControl button, .textfield__password-l-onfocused .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-onfocused .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body .icon-success, .textfield__password-l-onfocused .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body .icon-error, .textfield__password-l-onfocused .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body .icon-error, .textfield__password-l-onfocused .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-onfocused .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-onfocused .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-onfocused .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-onfocused .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-onfocused .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-typing label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-typing label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-typing .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-typing .textfield-formControl input, .textfield__password-l-typing .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-typing .textfield-formControl input::placeholder, .textfield__password-l-typing .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-typing .textfield-formControl input::placeholder, .textfield__password-l-typing .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-typing .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-typing .textfield-formControl:focus, .textfield__password-l-typing .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-typing .textfield-formControl button, .textfield__password-l-typing .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-typing .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-typing .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-l-typing .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-typing .textfield-formControl + .font-body .icon-success, .textfield__password-l-typing .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-typing .textfield-formControl + .font-body .icon-error, .textfield__password-l-typing .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-typing .textfield-formControl + .font-body .icon-error, .textfield__password-l-typing .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-typing .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-typing .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-typing .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-typing .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-typing .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-completed label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-completed label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-completed .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-completed .textfield-formControl input, .textfield__password-l-completed .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-completed .textfield-formControl input::placeholder, .textfield__password-l-completed .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-completed .textfield-formControl input::placeholder, .textfield__password-l-completed .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-completed .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-completed .textfield-formControl:focus, .textfield__password-l-completed .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-completed .textfield-formControl button, .textfield__password-l-completed .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-completed .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-completed .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-l-completed .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-completed .textfield-formControl + .font-body .icon-success, .textfield__password-l-completed .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-completed .textfield-formControl + .font-body .icon-error, .textfield__password-l-completed .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-completed .textfield-formControl + .font-body .icon-error, .textfield__password-l-completed .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-completed .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-completed .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-completed .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-completed .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-completed .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-error label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-error label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-error .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-error);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-error .textfield-formControl input, .textfield__password-l-error .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-error .textfield-formControl input::placeholder, .textfield__password-l-error .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-error .textfield-formControl input::placeholder, .textfield__password-l-error .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-error .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-error .textfield-formControl:focus, .textfield__password-l-error .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-error .textfield-formControl button, .textfield__password-l-error .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-error .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-error .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-error);\n}\n.textfield__password-l-error .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-error .textfield-formControl + .font-body .icon-success, .textfield__password-l-error .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-error .textfield-formControl + .font-body .icon-error, .textfield__password-l-error .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-error .textfield-formControl + .font-body .icon-error, .textfield__password-l-error .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-error .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-error .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-error .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-error .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-error .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-success label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-success label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-success .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-success);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-success .textfield-formControl input, .textfield__password-l-success .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-success .textfield-formControl input::placeholder, .textfield__password-l-success .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-success .textfield-formControl input::placeholder, .textfield__password-l-success .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-success .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-success .textfield-formControl:focus, .textfield__password-l-success .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-success .textfield-formControl button, .textfield__password-l-success .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-success .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-l-success .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-success);\n}\n.textfield__password-l-success .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-success .textfield-formControl + .font-body .icon-success, .textfield__password-l-success .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-success .textfield-formControl + .font-body .icon-error, .textfield__password-l-success .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-success .textfield-formControl + .font-body .icon-error, .textfield__password-l-success .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-success .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-success .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-success .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-success .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-success .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-l-disabled label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-l-disabled label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-l-disabled .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-disabled);\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 48px;\n}\n.textfield__password-l-disabled .textfield-formControl input, .textfield__password-l-disabled .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-l-disabled .textfield-formControl input::placeholder, .textfield__password-l-disabled .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-disabled .textfield-formControl input::placeholder, .textfield__password-l-disabled .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-l-disabled .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-l-disabled .textfield-formControl:focus, .textfield__password-l-disabled .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-l-disabled .textfield-formControl button, .textfield__password-l-disabled .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-l-disabled .textfield-formControl > svg:first-child {\n  color: var(--color-text-disabled);\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body .icon-success, .textfield__password-l-disabled .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body .icon-error, .textfield__password-l-disabled .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body .icon-error, .textfield__password-l-disabled .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-disabled .textfield-formControl + .font-body .icon-error svg, .textfield__password-l-disabled .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-l-disabled .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-l-disabled .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-l-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-l-disabled .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-default label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-default label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-default .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-default .textfield-formControl input, .textfield__password-s-default .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-default .textfield-formControl input::placeholder, .textfield__password-s-default .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-default .textfield-formControl input::placeholder, .textfield__password-s-default .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-default .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-default .textfield-formControl:focus, .textfield__password-s-default .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-default .textfield-formControl button, .textfield__password-s-default .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-default .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-default .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-s-default .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-default .textfield-formControl + .font-body .icon-success, .textfield__password-s-default .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-default .textfield-formControl + .font-body .icon-error, .textfield__password-s-default .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-default .textfield-formControl + .font-body .icon-error, .textfield__password-s-default .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-default .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-default .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-default .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-default .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-default .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-default .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-onfocused label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-onfocused label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-onfocused .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-onfocused .textfield-formControl input, .textfield__password-s-onfocused .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-onfocused .textfield-formControl input::placeholder, .textfield__password-s-onfocused .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-onfocused .textfield-formControl input::placeholder, .textfield__password-s-onfocused .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-onfocused .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-onfocused .textfield-formControl:focus, .textfield__password-s-onfocused .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-onfocused .textfield-formControl button, .textfield__password-s-onfocused .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-onfocused .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body .icon-success, .textfield__password-s-onfocused .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body .icon-error, .textfield__password-s-onfocused .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body .icon-error, .textfield__password-s-onfocused .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-onfocused .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-onfocused .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-onfocused .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-onfocused .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-onfocused .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-onfocused .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-typing label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-typing label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-typing .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-accent);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-typing .textfield-formControl input, .textfield__password-s-typing .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-typing .textfield-formControl input::placeholder, .textfield__password-s-typing .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-typing .textfield-formControl input::placeholder, .textfield__password-s-typing .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-typing .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-typing .textfield-formControl:focus, .textfield__password-s-typing .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-typing .textfield-formControl button, .textfield__password-s-typing .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-typing .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-typing .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-s-typing .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-typing .textfield-formControl + .font-body .icon-success, .textfield__password-s-typing .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-typing .textfield-formControl + .font-body .icon-error, .textfield__password-s-typing .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-typing .textfield-formControl + .font-body .icon-error, .textfield__password-s-typing .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-typing .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-typing .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-typing .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-typing .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-typing .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-typing .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-completed label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-completed label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-completed .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-completed .textfield-formControl input, .textfield__password-s-completed .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-completed .textfield-formControl input::placeholder, .textfield__password-s-completed .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-completed .textfield-formControl input::placeholder, .textfield__password-s-completed .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-completed .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-completed .textfield-formControl:focus, .textfield__password-s-completed .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-completed .textfield-formControl button, .textfield__password-s-completed .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-completed .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-completed .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-s-completed .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-completed .textfield-formControl + .font-body .icon-success, .textfield__password-s-completed .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-completed .textfield-formControl + .font-body .icon-error, .textfield__password-s-completed .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-completed .textfield-formControl + .font-body .icon-error, .textfield__password-s-completed .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-completed .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-completed .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-completed .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-completed .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-completed .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-completed .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-error label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-error label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-error .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-error);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-error .textfield-formControl input, .textfield__password-s-error .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-error .textfield-formControl input::placeholder, .textfield__password-s-error .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-error .textfield-formControl input::placeholder, .textfield__password-s-error .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-error .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-error .textfield-formControl:focus, .textfield__password-s-error .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-error .textfield-formControl button, .textfield__password-s-error .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-error .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-error .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-error);\n}\n.textfield__password-s-error .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-error .textfield-formControl + .font-body .icon-success, .textfield__password-s-error .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-error .textfield-formControl + .font-body .icon-error, .textfield__password-s-error .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-error .textfield-formControl + .font-body .icon-error, .textfield__password-s-error .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-error .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-error .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-error .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-error .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-error .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-error .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-success label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-success label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-success .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-success);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-success .textfield-formControl input, .textfield__password-s-success .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-success .textfield-formControl input::placeholder, .textfield__password-s-success .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-success .textfield-formControl input::placeholder, .textfield__password-s-success .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-success .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-success .textfield-formControl:focus, .textfield__password-s-success .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-success .textfield-formControl button, .textfield__password-s-success .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-success .textfield-formControl > svg:first-child {\n  color: var(--color-text-default);\n}\n.textfield__password-s-success .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-success);\n}\n.textfield__password-s-success .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-success .textfield-formControl + .font-body .icon-success, .textfield__password-s-success .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-success .textfield-formControl + .font-body .icon-error, .textfield__password-s-success .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-success .textfield-formControl + .font-body .icon-error, .textfield__password-s-success .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-success .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-success .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-success .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-success .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-success .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-success .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.textfield__password-s-disabled label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  color: var(--color-text-default);\n}\n.textfield__password-s-disabled label .required {\n  color: var(--color-text-accent);\n}\n.textfield__password-s-disabled .textfield-formControl {\n  min-width: 180px;\n  color: var(--color-text-disabled);\n  background-color: var(--color-background-disabled);\n  border: 1px solid var(--color-border-disabled);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  height: 36px;\n}\n.textfield__password-s-disabled .textfield-formControl input, .textfield__password-s-disabled .textfield-formControl textarea {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-weight: 400;\n  font-size: 16px;\n  color: inherit;\n}\n.textfield__password-s-disabled .textfield-formControl input::placeholder, .textfield__password-s-disabled .textfield-formControl textarea::placeholder {\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--color-text-disabled);\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-disabled .textfield-formControl input::placeholder, .textfield__password-s-disabled .textfield-formControl textarea::placeholder {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .textfield__password-s-disabled .textfield-formControl {\n    min-width: 120px;\n    width: 100%;\n  }\n}\n.textfield__password-s-disabled .textfield-formControl:focus, .textfield__password-s-disabled .textfield-formControl.onfocused {\n  border-color: var(--color-border-accent);\n}\n.textfield__password-s-disabled .textfield-formControl button, .textfield__password-s-disabled .textfield-formControl svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: var(--color-text-disabled);\n  flex: none;\n}\n.textfield__password-s-disabled .textfield-formControl > svg:first-child {\n  color: var(--color-text-disabled);\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n  color: var(--color-text-subtlest);\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body .text {\n  width: 100%;\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body .icon-success, .textfield__password-s-disabled .textfield-formControl + .font-body .icon-success svg {\n  color: var(--color-text-success);\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body .icon-error, .textfield__password-s-disabled .textfield-formControl + .font-body .icon-error svg {\n  color: var(--color-text-error);\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body .icon-error, .textfield__password-s-disabled .textfield-formControl + .font-body .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-disabled .textfield-formControl + .font-body .icon-error svg, .textfield__password-s-disabled .textfield-formControl + .font-body .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n.textfield__password-s-disabled .textfield-formControl.multi-line {\n  align-items: flex-start;\n  padding: 16px;\n  padding-right: 0;\n  height: 200px;\n}\n.textfield__password-s-disabled .textfield-formControl.multi-line textarea {\n  padding-right: 16px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  -ms-overflow-style: thin;\n}\n.textfield__password-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.textfield__password-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-thumb {\n  background-color: var(--color-background-ui-middle);\n  border-radius: 0;\n  border-right: 4px solid var(--color-background-base);\n}\n.textfield__password-s-disabled .textfield-formControl.multi-line textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.textfield__password-s-disabled .textarea__text-langth-check {\n  display: block;\n  width: 100px;\n  text-align: right;\n}\n\n.input__group {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.input__group .input-box {\n  padding-top: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.input__group .textfield label {\n  display: none;\n}\n.input__group.fullWidth .textfield {\n  flex-grow: 1;\n}\n.input__group label {\n  width: 100%;\n}\n.input__group label .required {\n  color: var(--color-text-accent);\n}\n.input__group .helper-text {\n  display: flex;\n  gap: 4px;\n  padding-top: 0;\n  color: var(--color-text-subtlest);\n}\n.input__group .helper-text .text {\n  width: 100%;\n}\n.input__group .helper-text.disabled {\n  color: var(--color-text-disabled);\n}\n.input__group .helper-text.error {\n  color: var(--color-text-error);\n}\n.input__group .helper-text.success {\n  color: var(--color-text-success);\n}\n.input__group .helper-text .icon-error,\n.input__group .helper-text .icon-success {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n}\n.input__group .helper-text .icon-error svg,\n.input__group .helper-text .icon-success svg {\n  width: 16px;\n  height: 16px;\n}\n@media only screen and (max-width: 767px) {\n  .input__group .textfield {\n    width: 100%;\n  }\n}\n\n.tooltip-wrap {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-top-left .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n  right: 0;\n  left: auto;\n  transform: none;\n}\n.tooltip-top-left .tooltip-box.arrow::before {\n  top: 100%;\n  left: calc(100% - 17px);\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-top-left .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n  right: 0;\n  left: auto;\n  transform: none;\n}\n.tooltip-top-left .tooltip-box.arrow::before {\n  top: 100%;\n  left: calc(100% - 17px);\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-top .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n}\n.tooltip-top .tooltip-box.arrow::before {\n  top: 100%;\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-top .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n}\n.tooltip-top .tooltip-box.arrow::before {\n  top: 100%;\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-top-right .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n  left: 0;\n  transform: none;\n}\n.tooltip-top-right .tooltip-box.arrow::before {\n  top: 100%;\n  left: auto;\n  right: calc(100% - 22px);\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-top-right .tooltip-box {\n  top: auto;\n  bottom: calc(100% + 8px);\n  left: 0;\n  transform: none;\n}\n.tooltip-top-right .tooltip-box.arrow::before {\n  top: 100%;\n  left: auto;\n  right: calc(100% - 22px);\n  bottom: auto;\n  transform: rotate(0deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-right .tooltip-box {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: translateY(-50%);\n}\n.tooltip-right .tooltip-box.arrow::before {\n  top: calc(50% - 3px);\n  left: auto;\n  right: calc(100% - 3px);\n  bottom: auto;\n  transform: rotate(90deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-right .tooltip-box {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: translateY(-50%);\n}\n.tooltip-right .tooltip-box.arrow::before {\n  top: calc(50% - 3px);\n  left: auto;\n  right: calc(100% - 3px);\n  bottom: auto;\n  transform: rotate(90deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-bottom-right .tooltip-box {\n  left: 0;\n  transform: none;\n}\n.tooltip-bottom-right .tooltip-box.arrow::before {\n  bottom: 100%;\n  left: auto;\n  right: calc(100% - 22px);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-bottom-right .tooltip-box {\n  left: 0;\n  transform: none;\n}\n.tooltip-bottom-right .tooltip-box.arrow::before {\n  bottom: 100%;\n  left: auto;\n  right: calc(100% - 22px);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-bottom-left .tooltip-box {\n  right: 0;\n  left: auto;\n  transform: none;\n}\n.tooltip-bottom-left .tooltip-box.arrow::before {\n  bottom: 100%;\n  left: calc(100% - 17px);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-bottom-left .tooltip-box {\n  right: 0;\n  left: auto;\n  transform: none;\n}\n.tooltip-bottom-left .tooltip-box.arrow::before {\n  bottom: 100%;\n  left: calc(100% - 17px);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-dark-mode {\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n}\n.tooltip-box-dark-mode p, .tooltip-box-dark-mode span, .tooltip-box-dark-mode label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box-dark-mode.arrow::before {\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n}\n\n.tooltip-left .tooltip-box {\n  top: 50%;\n  left: auto;\n  right: calc(100% + 8px);\n  transform: translateY(-50%);\n}\n.tooltip-left .tooltip-box.arrow::before {\n  top: calc(50% - 3px);\n  left: calc(100% + 2px);\n  bottom: auto;\n  transform: rotate(270deg);\n}\n\n.tooltip-box {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 8px);\n  max-width: 330px;\n  width: max-content;\n  padding: 4px 12px;\n  text-align: left;\n  color: var(--color-text-default-reverse);\n  background-color: var(--color-background-overlay-reverse);\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.16);\n}\n.tooltip-box p, .tooltip-box span, .tooltip-box label {\n  color: var(--color-text-default-reverse);\n}\n.tooltip-box.arrow::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  margin-left: -5px;\n  border: 1px solid var(--color-background-overlay-reverse);\n  border-color: var(--color-background-overlay-reverse) transparent transparent transparent;\n  border-width: 4px 5px 0;\n  transform: rotate(180deg);\n}\n.tooltip-box.open {\n  display: block;\n}\n\n.tooltip-box-light-mode {\n  color: var(--color-text-default);\n  background-color: var(--color-background-overlay);\n}\n.tooltip-box-light-mode p, .tooltip-box-light-mode span, .tooltip-box-light-mode label {\n  color: var(--color-text-default);\n}\n.tooltip-box-light-mode.arrow::before {\n  border-color: var(--color-background-overlay) transparent transparent transparent;\n}\n\n.tooltip-left .tooltip-box {\n  top: 50%;\n  left: auto;\n  right: calc(100% + 8px);\n  transform: translateY(-50%);\n}\n.tooltip-left .tooltip-box.arrow::before {\n  top: calc(50% - 3px);\n  left: calc(100% + 2px);\n  bottom: auto;\n  transform: rotate(270deg);\n}\n\n:root,\n:root.light,\n.light {\n  --theme-primary: #d75894;\n  --theme-secondary: #9b3dca;\n  --theme-surface: #fff;\n  --theme-background: #fafafa;\n  --theme-on-primary: #fff;\n  --theme-on-secondary: #fff;\n  --theme-on-surface: #000;\n  --palette-white: #ffffff;\n  --palette-black: #000000;\n  --palette-mint-900: #0f9bb6;\n  --palette-mint-800: #0eadca;\n  --palette-mint-700: #0fbed7;\n  --palette-mint-600: #0fcbdd;\n  --palette-mint-500: #1dd9e7;\n  --palette-mint-400: #43dfeb;\n  --palette-mint-300: #73e7f0;\n  --palette-mint-200: #99eef4;\n  --palette-mint-100: #bbf4f8;\n  --palette-mint-50: #ddf9fb;\n  --palette-bluegray-900: #212631;\n  --palette-bluegray-800: #293541;\n  --palette-bluegray-700: #374553;\n  --palette-bluegray-600: #465563;\n  --palette-bluegray-500: #657786;\n  --palette-bluegray-400: #8a98a6;\n  --palette-bluegray-300: #aab8c2;\n  --palette-bluegray-200: #c8d0d9;\n  --palette-bluegray-100: #e1e8ed;\n  --palette-bluegray-50: #f8f9fd;\n  --palette-gray-900: #222222;\n  --palette-gray-800: #424242;\n  --palette-gray-700: #606060;\n  --palette-gray-600: #818181;\n  --palette-gray-500: #9e9e9e;\n  --palette-gray-400: #c2c2c2;\n  --palette-gray-300: #dedede;\n  --palette-gray-200: #f0f0f0;\n  --palette-gray-100: #f5f5f5;\n  --palette-gray-50: #fafafa;\n  --palette-red: #ea1b1b;\n  --palette-red-accent: #d80516;\n  --palette-red-light: #ffe9e9;\n  --palette-orange: #f97f0e;\n  --palette-orange-light: #ffebd0;\n  --palette-green: #00c400;\n  --palette-green-light: #dbf1db;\n  --palette-blue: #109eff;\n  --palette-blue-light: #cef1ff;\n  --palette-blue-900: #1476c4;\n  --palette-blue-800: #1681d9;\n  --palette-blue-700: #138deb;\n  --palette-blue-600: #109eff;\n  --palette-blue-500: #49b0fe;\n  --palette-blue-400: #65bcfe;\n  --palette-blue-300: #7ec7fe;\n  --palette-blue-200: #99d2ff;\n  --palette-blue-100: #c0e3ff;\n  --palette-blue-50: #e2f2ff;\n  --palette-magenta: #f567ac;\n  --palette-magenta-900: #e12a95;\n  --palette-magenta-800: #e73d9d;\n  --palette-magenta-700: #ec53a4;\n  --palette-magenta-600: #f567ac;\n  --palette-magenta-500: #f67eb8;\n  --palette-magenta-400: #f894c5;\n  --palette-magenta-300: #f9a7cf;\n  --palette-magenta-200: #fabada;\n  --palette-magenta-100: #fcd1e6;\n  --palette-magenta-50: #fee8f3;\n  --palette-purple: #e59bff;\n  --palette-purple-900: #ac76cc;\n  --palette-purple-800: #c287e0;\n  --palette-purple-700: #d092f0;\n  --palette-purple-600: #e59bff;\n  --palette-purple-500: #e6b2ff;\n  --palette-purple-400: #e9bcff;\n  --palette-purple-300: #ecc5ff;\n  --palette-purple-200: #f3d9ff;\n  --palette-purple-100: #f6e4ff;\n  --palette-purple-50: #fbf1ff;\n  --text-accent: var(--palette-mint-500);\n  --background-base: var(--palette-white);\n  --background-2nd-base: var(--palette-gray-100);\n  --background-ui-base: var(--palette-gray-50);\n  --background-ui-middle: var(--palette-gray-500);\n  --background-ui-middle-accent: var(--palette-gray-700);\n  --background-overlay: var(--palette-white);\n  --background-overlay-reverse: var(--palette-gray-800);\n  --background-overlay-accent: var(--palette-gray-50);\n  --background-primary: var(--palette-mint-500);\n  --background-primary-accent: var(--palette-mint-800);\n  --background-secondary: var(--palette-gray-700);\n  --background-secondary-accent: var(--palette-gray-800);\n  --background-tertiary: var(--palette-white);\n  --background-disabled: var(--palette-gray-100);\n  --background-error: var(--palette-red);\n  --background-error-accent: var(--palette-red-accent);\n  --background-error-light: var(--palette-red-light);\n  --background-warning: var(--palette-orange);\n  --background-warning-light: var(--palette-orange-light);\n  --background-information: var(--palette-blue);\n  --background-information-light: var(--palette-blue-light);\n  --background-success: var(--palette-green);\n  --background-success-light: var(--palette-green-light);\n  --color-text-default: var(--palette-gray-900);\n  --color-text-default-reverse: var(--palette-gray-50);\n  --color-text-sub: var(--palette-gray-700);\n  --color-text-subtlest: var(--palette-gray-500);\n  --color-text-disabled: var(--palette-gray-400);\n  --color-text-error: var(--palette-red);\n  --color-text-error-accent: var(--palette-red-accent);\n  --color-text-information: var(--palette-blue);\n  --color-text-accent: var(--text-accent);\n  --color-text-success: var(--palette-green);\n  --color-text-warning: var(--palette-orange);\n  --color-background-base: var(--background-base);\n  --color-background-2nd-base: var(--background-2nd-base);\n  --color-background-ui-base: var(--background-ui-base);\n  --color-background-ui-middle: var(--background-ui-middle);\n  --color-background-ui-middle-accent: var(--background-ui-middle-accent);\n  --color-background-overlay: var(--background-overlay);\n  --color-background-overlay-reverse: var(--background-overlay-reverse);\n  --color-background-overlay-accent: var(--background-overlay-accent);\n  --color-background-primary: var(--background-primary);\n  --color-background-primary-accent: var(--background-primary-accent);\n  --color-background-secondary: var(--background-secondary);\n  --color-background-secondary-accent: var(--background-secondary-accent);\n  --color-background-tertiary: var(--background-tertiary);\n  --color-background-disabled: var(--background-disabled);\n  --color-background-error: var(--background-error);\n  --color-background-error-accent: var(--background-error-accent);\n  --color-background-error-light: var(--background-error-light);\n  --color-background-warning: var(--background-warning);\n  --color-background-warning-light: var(--background-warning-light);\n  --color-background-information: var(--background-information);\n  --color-background-information-light: var(--background-information-light);\n  --color-background-success: var(--background-success);\n  --color-background-success-light: var(--background-success-light);\n  --color-border-default: var(--palette-gray-400);\n  --color-border-accent: var(--palette-gray-900);\n  --color-border-disabled: var(--palette-gray-300);\n  --color-border-error: var(--palette-red);\n  --color-border-error-accent: var(--palette-red-accent);\n  --color-border-success: var(--palette-green);\n  --color-divider-default: var(--palette-gray-300);\n  --color-divider-accent: var(--palette-gray-500);\n  --color-dimmed-85: rgba(0, 0, 0, 0.85);\n  --color-dimmed-60: rgba(0, 0, 0, 0.6);\n}\n\n:root.dark,\n.dark {\n  --theme-primary: #f34c83;\n  --theme-secondary: #c298dc;\n  --theme-surface: #2f2b2b;\n  --theme-background: #1b1918;\n  --theme-on-primary: #443e41;\n  --theme-on-secondary: #000;\n  --theme-on-surface: #f5f1f2;\n  --palette-white: #ffffff;\n  --palette-black: #000000;\n  --palette-mint-900: #ddf9fb;\n  --palette-mint-800: #bbf4f8;\n  --palette-mint-700: #99eef4;\n  --palette-mint-600: #73e7f0;\n  --palette-mint-500: #43dfeb;\n  --palette-mint-400: #1dd9e7;\n  --palette-mint-300: #0fcbdd;\n  --palette-mint-200: #0fbed7;\n  --palette-mint-100: #0eadca;\n  --palette-mint-50: #0f9bb6;\n  --palette-bluegray-900: #f8f9fd;\n  --palette-bluegray-800: #eaebec;\n  --palette-bluegray-700: #cfd1d4;\n  --palette-bluegray-600: #adb1b9;\n  --palette-bluegray-500: #90979c;\n  --palette-bluegray-400: #6b7379;\n  --palette-bluegray-300: #41474c;\n  --palette-bluegray-200: #2e363a;\n  --palette-bluegray-100: #1e2427;\n  --palette-bluegray-50: #171b1c;\n  --palette-gray-900: #fdfdfd;\n  --palette-gray-800: #e9e9e9;\n  --palette-gray-700: #d9d9d9;\n  --palette-gray-600: #c0c0c0;\n  --palette-gray-500: #a3a3a3;\n  --palette-gray-400: #8e8e8e;\n  --palette-gray-300: #4f4f50;\n  --palette-gray-200: #343434;\n  --palette-gray-100: #272626;\n  --palette-gray-50: #141212;\n  --palette-red: #ee3b3b;\n  --palette-red-accent: #e70f21;\n  --palette-red-light: #4e0b0b;\n  --palette-orange: #f98d0e;\n  --palette-orange-light: #4d2e06;\n  --palette-green: #03cd03;\n  --palette-green-light: #073207;\n  --palette-blue: #24a6ff;\n  --palette-blue-light: #023245;\n  --palette-blue-900: #f8f9fd;\n  --palette-blue-800: #eaebec;\n  --palette-blue-700: #cfd1d4;\n  --palette-blue-600: #24a6ff;\n  --palette-blue-500: #90979c;\n  --palette-blue-400: #6b7379;\n  --palette-blue-300: #41474c;\n  --palette-blue-200: #2e363a;\n  --palette-blue-100: #1e2427;\n  --palette-blue-50: #171b1c;\n  --palette-magenta: #f86fb1;\n  --palette-magenta-900: #f8f9fd;\n  --palette-magenta-800: #eaebec;\n  --palette-magenta-700: #cfd1d4;\n  --palette-magenta-600: #adb1b9;\n  --palette-magenta-500: #90979c;\n  --palette-magenta-400: #6b7379;\n  --palette-magenta-300: #41474c;\n  --palette-magenta-200: #2e363a;\n  --palette-magenta-100: #1e2427;\n  --palette-magenta-50: #171b1c;\n  --palette-purple: #e394ff;\n  --palette-purple-900: #f8f9fd;\n  --palette-purple-800: #eaebec;\n  --palette-purple-700: #cfd1d4;\n  --palette-purple-600: #adb1b9;\n  --palette-purple-500: #90979c;\n  --palette-purple-400: #6b7379;\n  --palette-purple-300: #41474c;\n  --palette-purple-200: #2e363a;\n  --palette-purple-100: #1e2427;\n  --palette-purple-50: #171b1c;\n  --text-accent: var(--palette-mint-400);\n  --background-base: var(--palette-gray-50);\n  --background-2nd-base: var(--palette-gray-100);\n  --background-ui-base: var(--palette-gray-100);\n  --background-ui-middle: var(--palette-gray-500);\n  --background-ui-middle-accent: var(--palette-gray-700);\n  --background-overlay: var(--palette-gray-200);\n  --background-overlay-reverse: var(--palette-gray-900);\n  --background-overlay-accent: var(--palette-gray-300);\n  --background-primary: var(--palette-mint-500);\n  --background-primary-accent: var(--palette-mint-200);\n  --background-secondary: var(--palette-gray-700);\n  --background-secondary-accent: var(--palette-gray-800);\n  --background-tertiary: var(--palette-gray-50);\n  --background-disabled: var(--palette-gray-200);\n  --background-error: var(--palette-red);\n  --background-error-accent: var(--palette-red-accent);\n  --background-error-light: var(--palette-red-light);\n  --background-warning: var(--palette-orange);\n  --background-warning-light: var(--palette-orange-light);\n  --background-information: var(--palette-blue);\n  --background-information-light: var(--palette-blue-light);\n  --background-success: var(--palette-green);\n  --background-success-light: var(--palette-green-light);\n  --color-text-default: var(--palette-gray-900);\n  --color-text-default-reverse: var(--palette-gray-50);\n  --color-text-sub: var(--palette-gray-700);\n  --color-text-subtlest: var(--palette-gray-500);\n  --color-text-disabled: var(--palette-gray-400);\n  --color-text-error: var(--palette-red);\n  --color-text-error-accent: var(--palette-red-accent);\n  --color-text-information: var(--palette-blue);\n  --color-text-accent: var(--text-accent);\n  --color-text-success: var(--palette-green);\n  --color-text-warning: var(--palette-orange);\n  --color-background-base: var(--background-base);\n  --color-background-2nd-base: var(--background-2nd-base);\n  --color-background-ui-base: var(--background-ui-base);\n  --color-background-ui-middle: var(--background-ui-middle);\n  --color-background-ui-middle-accent: var(--background-ui-middle-accent);\n  --color-background-overlay: var(--background-overlay);\n  --color-background-overlay-reverse: var(--background-overlay-reverse);\n  --color-background-overlay-accent: var(--background-overlay-accent);\n  --color-background-primary: var(--background-primary);\n  --color-background-primary-accent: var(--background-primary-accent);\n  --color-background-secondary: var(--background-secondary);\n  --color-background-secondary-accent: var(--background-secondary-accent);\n  --color-background-tertiary: var(--background-tertiary);\n  --color-background-disabled: var(--background-disabled);\n  --color-background-error: var(--background-error);\n  --color-background-error-accent: var(--background-error-accent);\n  --color-background-error-light: var(--background-error-light);\n  --color-background-warning: var(--background-warning);\n  --color-background-warning-light: var(--background-warning-light);\n  --color-background-information: var(--background-information);\n  --color-background-information-light: var(--background-information-light);\n  --color-background-success: var(--background-success);\n  --color-background-success-light: var(--background-success-light);\n  --color-border-default: var(--palette-gray-400);\n  --color-border-accent: var(--palette-gray-900);\n  --color-border-disabled: var(--palette-gray-300);\n  --color-border-error: var(--palette-red);\n  --color-border-error-accent: var(--palette-red-accent);\n  --color-border-success: var(--palette-green);\n  --color-divider-default: var(--palette-gray-300);\n  --color-divider-accent: var(--palette-gray-500);\n  --color-dimmed-85: rgba(0, 0, 0, 0.85);\n  --color-dimmed-60: rgba(0, 0, 0, 0.6);\n}");

function Title(_a) {
    var role = _a.role, type = _a.type, size = _a.size, align = _a.align, className = _a.className, children = _a.children;
    var Tag = 'h'.concat(String(role + 1));
    return React__default["default"].createElement(Tag, {
        className: "font-".concat(type, "-").concat(size, " ").concat(align ? align : '', " ").concat(className ? className : ''),
    }, [children]);
}

function Text(_a) {
    var role = _a.role, type = _a.type, size = _a.size, innerHtml = _a.innerHtml, className = _a.className, children = _a.children;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, innerHtml ? (React__default["default"].createElement("p", { className: "font-".concat(type, " font-").concat(type, "-").concat(size, " ").concat(role ? role : '', " ").concat(className ? className : ''), dangerouslySetInnerHTML: {
            __html: String(children),
        } })) : (React__default["default"].createElement("p", { className: "font-".concat(type, " font-").concat(type, "-").concat(size, " ").concat(role ? role : '', " ").concat(className ? className : '') }, children))));
}

function TextLabel(_a) {
    var role = _a.role, size = _a.size, className = _a.className, children = _a.children;
    return (React__default["default"].createElement("span", { className: "font-label font-label-".concat(size, " ").concat(role ? role : '', " ").concat(className ? className : '') }, children));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Spinner = function (_a) {
    var color = _a.color;
    return (React__default["default"].createElement("span", { className: "spinner-wrap" },
        React__default["default"].createElement("svg", { className: ['spinner', "spinner-".concat(color ? color : 'white')].join(' '), viewBox: "0 0 50 50" },
            React__default["default"].createElement("circle", { className: "path", cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "4" }))));
};

var Button = function (_a) {
    var id = _a.id, size = _a.size, children = _a.children, type = _a.type, state = _a.state, iconLeft = _a.iconLeft, iconRight = _a.iconRight, isIconMode = _a.isIconMode, iconOnly = _a.iconOnly, isActionMode = _a.isActionMode, loading = _a.loading, buttonWidth = _a.buttonWidth, className = _a.className, props = __rest(_a, ["id", "size", "children", "type", "state", "iconLeft", "iconRight", "isIconMode", "iconOnly", "isActionMode", "loading", "buttonWidth", "className"]);
    var _b = React$1.useState(''), buttonWidthStyle = _b[0], setButtonWidthStyle = _b[1];
    var onLabelSizeFilter = function () {
        switch (size) {
            case 'xl':
                return 'l';
            case 'l':
                return 'l';
            case 'm':
                return 'm';
            case 's':
                return 'm';
            case 'xs':
                return 's';
            default:
                return 'm';
        }
    };
    var onTextLabelSizeFilter = function () {
        switch (size) {
            case 'xl':
                return 'l';
            case 'l':
                return 'l';
            case 'm':
                return 'm';
            case 's':
                return 'm';
            case 'xs':
                return 'm';
            default:
                return 'l';
        }
    };
    var onButtonTypeSizeFilter = function (type, size) {
        if (['text', 'link'].includes(type)) {
            switch (size) {
                case 'xl':
                    return 'l';
                case 'l':
                    return 'l';
                case 'm':
                    return 's';
                case 's':
                    return 's';
                case 'xs':
                    return 's';
                default:
                    return '';
            }
        }
        else {
            return size;
        }
    };
    React$1.useEffect(function () {
        if (buttonWidth) {
            setButtonWidthStyle(buttonWidth);
        }
    }, [buttonWidth]);
    return (React__default["default"].createElement("button", __assign({ id: id ? id : '', type: props.htmlType ? props.htmlType : 'button', className: [
            "button__".concat(isIconMode ? 'icon-' : '').concat(type, "-").concat(onButtonTypeSizeFilter(type, size), "--").concat(state ? state : 'default'),
            "".concat(iconLeft || iconRight || isIconMode ? 'icon-button' : ''),
            "".concat(isIconMode ? 'icon-button-only' : ''),
            "".concat(isActionMode && type === 'primary' && size === 'xl'
                ? 'primary-action'
                : ''),
            className && className,
        ].join(' '), disabled: state === 'disabled', style: { width: "".concat(buttonWidthStyle ? buttonWidthStyle : '') } }, props), loading ? (React__default["default"].createElement(Spinner, { color: ['primary', 'secondary', 'error'].includes(type) ? 'white' : 'black' })) : (React__default["default"].createElement(React__default["default"].Fragment, null,
        iconLeft && iconLeft,
        !isIconMode ? (React__default["default"].createElement(TextLabel, { size: ['text', 'link'].includes(type)
                ? onTextLabelSizeFilter()
                : onLabelSizeFilter() }, children)) : (iconOnly),
        iconRight && iconRight))));
};

var ButtonGroup = function (_a) {
    var children = _a.children, fullWidth = _a.fullWidth, align = _a.align, direction = _a.direction, buttonWidth = _a.buttonWidth;
    return (React__default["default"].createElement("div", { className: [
            "button__group",
            fullWidth && 'fullWidth',
            align && align,
            direction && direction,
        ].join(' ') }, React__default["default"].Children.map(children, function (child) {
        if (child !== null)
            return React__default["default"].cloneElement(child, { buttonWidth: buttonWidth });
    })));
};

var dist = {};

Object.defineProperty(dist, '__esModule', { value: true });

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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8488 11.1515L25.5459 12.8485L14.3944 24L25.5459 35.1515L23.8488 36.8485L11.0003 24L23.8488 11.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.6973 25H12.6973V22.6H36.6973V25Z", fill: "currentColor" })));
};

var ArrowBackwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0596 13.0607L23.9383 10.9393L10.8776 24L23.9383 37.0606L26.0596 34.9393L16.1202 25H36.999V22H17.1202L26.0596 13.0607Z", fill: "currentColor" })));
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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1515 24.8485L12.8485 23.1515L24 34.3029L35.1515 23.1515L36.8485 24.8485L24 37.697L11.1515 24.8485Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.9997 12L24.9997 36L22.5997 36L22.5997 12L24.9997 12Z", fill: "currentColor" })));
};

var ArrowDownwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.0607 22.9393L10.9393 25.0607L24 38.1213L37.0606 25.0607L34.9393 22.9393L24.9999 32.8788L24.9999 12L21.9999 12L21.9999 31.8786L13.0607 22.9393Z", fill: "currentColor" })));
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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.1512 11.1515L22.4541 12.8485L33.6056 24L22.4541 35.1515L24.1512 36.8485L36.9997 24L24.1512 11.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.3027 25H35.3027V22.6H11.3027V25Z", fill: "currentColor" })));
};

var ArrowForwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.9404 13.0607L24.0618 10.9393L37.1224 24L24.0618 37.0606L21.9404 34.9393L31.8798 25H11.001V22H30.8798L21.9404 13.0607Z", fill: "currentColor" })));
};

var ArrowInwardLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3025 33.8989L16.7025 33.899L16.703 15.3005L35.3015 15.2999L35.3015 12.8999L14.3031 12.9005L14.3025 33.8989Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.1285 33.0735L16.3306 13.2756L14.6335 14.9727L34.4314 34.7706L36.1285 33.0735Z", fill: "currentColor" })));
};

var ArrowInwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8027 33.899L13.8027 33.8989L13.8033 12.6006L35.1016 12.6L35.1017 15.6L18.4559 15.6004L35.929 33.0735L33.8077 35.1948L16.8031 18.1903L16.8027 33.899Z", fill: "currentColor" })));
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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3889 33.8989L35.3884 14.1005L35.3883 12.8148L34.1027 12.8148L14.3042 12.8142L14.3042 15.3857L31.1646 15.3861L13.4772 33.0735L15.2954 34.8918L32.817 17.3702L32.8175 33.899L35.3889 33.8989Z", fill: "currentColor" })));
};

var ArrowOutwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.6036 33.899L35.6036 33.8989L35.603 12.6005L14.3046 12.5999L14.3045 15.5999L30.9504 15.6004L13.4773 33.0735L15.5986 35.1948L32.6031 18.1903L32.6036 33.899Z", fill: "currentColor" })));
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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1515 23.1515L12.8485 24.8485L24 13.6971L35.1515 24.8485L36.8485 23.1515L24 10.303L11.1515 23.1515Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.2001 36L25.2001 12L22.8001 12L22.8001 36L25.2001 36Z", fill: "currentColor" })));
};

var ArrowUpwardLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.0607 25.0607L10.9393 22.9393L24 9.87869L37.0606 22.9393L34.9393 25.0607L25.4999 15.6212L25.4999 36L22.4999 36L22.4999 15.6214L13.0607 25.0607Z", fill: "currentColor" })));
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
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.2998 37.297L11.5799 12.5771L13.157 11L37.8769 35.7199L36.2998 37.297Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.0225 35.7199L35.7424 11L37.3195 12.5771L12.5996 37.297L11.0225 35.7199Z", fill: "currentColor" })));
};

var CloseLineBoldIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.9887 38.5092L10.3887 11.9092L12.51 9.78786L39.11 36.3879L36.9887 38.5092Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.78845 36.3879L36.3884 9.78786L38.5098 11.9092L11.9098 38.5092L9.78845 36.3879Z", fill: "currentColor" })));
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

var FirstPageLineIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.3022 11L35.9992 12.6971L24.8477 23.8485L35.9992 35L34.3022 36.6971L21.4536 23.8485L34.3022 11Z", fill: "currentColor" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.0015 37.4L15.0016 11L17.4016 11L17.4015 37.4L15.0015 37.4Z", fill: "currentColor" })));
};

var FirstPageLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.2724 11.4688L36.3937 13.5901L25.4544 24.5294L36.3937 35.4688L34.2724 37.5901L21.2118 24.5294L34.2724 11.4688Z", fill: "currentColor" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14.4 37.4L14.4 11L17.4 11L17.4 37.4L14.4 37.4Z", fill: "currentColor" })));
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
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.6986 11L15.0016 12.6971L26.1531 23.8485L15.0016 35L16.6986 36.6971L29.5472 23.8485L16.6986 11Z", fill: "currentColor" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M35.9992 37.4L35.9992 11L33.5992 11L33.5992 37.4L35.9992 37.4Z", fill: "currentColor" })));
};

var LastPageLineBoldIcon = function () {
    return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.5213 11.4688L14.4 13.5901L25.3394 24.5294L14.4 35.4688L16.5213 37.5901L29.582 24.5294L16.5213 11.4688Z", fill: "currentColor" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M36.3938 37.4L36.3938 11L33.3938 11L33.3938 37.4L36.3938 37.4Z", fill: "currentColor" })));
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

var ProgressLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9831 23.6053C39.9735 23.4377 39.959 23.1843 39.959 22.9125H42.959C42.959 23.0972 42.9692 23.2767 42.9795 23.4563C42.9897 23.6358 43 23.8153 43 24C43 34.5054 34.4895 43 24.0103 43C13.531 43 5 34.5054 5 24C5 13.4946 13.5105 5 23.9897 5C24.3589 5 24.728 5 25.0766 5.04104L24.7259 8.02047C24.5833 8.00368 24.3951 8 23.9897 8C15.1668 8 8 15.152 8 24C8 32.8437 15.1831 40 24.0103 40C32.8332 40 40 32.848 40 24C40 23.9146 39.9953 23.8194 39.9844 23.6273L39.9831 23.6053Z", fill: "currentColor" })));
};

var RefreshLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.5135 14.0322C24.2127 14.0097 23.9081 13.9981 23.5996 13.9981C16.8019 13.9981 11.3052 19.4948 11.3052 26.2925C11.3052 33.0902 16.8019 38.5869 23.5996 38.5869C30.3973 38.5869 35.894 33.0902 35.894 26.2925C35.894 23.4656 34.9289 20.8509 33.3138 18.7793L35.1317 17.362C37.0512 19.8239 38.1992 22.9338 38.1992 26.2925C38.1992 34.3634 31.6704 40.8921 23.5996 40.8921C15.5288 40.8921 9 34.3634 9 26.2925C9 18.2217 15.5288 11.6929 23.5996 11.6929C23.9469 11.6929 24.2902 11.7053 24.6292 11.7293L21.2683 8.35581L22.6292 7L27.7583 12.1483L28.4349 12.8275L27.757 13.5054L22.6279 18.6344L21.2696 17.2761L24.5135 14.0322Z", fill: "currentColor" })));
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

var StarLineIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857ZM24.0004 7.7115L19.2133 17.4112L8.50907 18.9666L16.2547 26.5168L14.4262 37.1777L24.0004 32.1443L33.5746 37.1777L31.7461 26.5168L39.4917 18.9666L28.7875 17.4112L24.0004 7.7115Z", fill: "currentColor" })));
};

var StarFillIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0004 2.28857L30.3812 15.2176L44.6492 17.2908L34.3248 27.3546L36.7621 41.565L24.0004 34.8558L11.2387 41.565L13.676 27.3546L3.35156 17.2908L17.6196 15.2176L24.0004 2.28857Z", fill: "currentColor" })));
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

dist.ArrowBackwardCircleFillIcon = ArrowBackwardCircleFillIcon;
dist.ArrowBackwardCircleLineIcon = ArrowBackwardCircleLineIcon;
dist.ArrowBackwardLineBoldIcon = ArrowBackwardLineBoldIcon;
dist.ArrowBackwardLineIcon = ArrowBackwardLineIcon;
dist.ArrowDownCircleFillIcon = ArrowDownCircleFillIcon;
dist.ArrowDownCircleLineIcon = ArrowDownCircleLineIcon;
dist.ArrowDownLineBoldIcon = ArrowDownLineBoldIcon;
var ArrowDownLineIcon_1 = dist.ArrowDownLineIcon = ArrowDownLineIcon;
dist.ArrowDownwardLineBoldIcon = ArrowDownwardLineBoldIcon;
dist.ArrowDownwardLineIcon = ArrowDownwardLineIcon;
dist.ArrowForwardCircleFillIcon = ArrowForwardCircleFillIcon;
dist.ArrowForwardCircleLineIcon = ArrowForwardCircleLineIcon;
dist.ArrowForwardLineBoldIcon = ArrowForwardLineBoldIcon;
dist.ArrowForwardLineIcon = ArrowForwardLineIcon;
dist.ArrowInwardLineBoldIcon = ArrowInwardLineBoldIcon;
dist.ArrowInwardLineIcon = ArrowInwardLineIcon;
dist.ArrowLeftLineBoldIcon = ArrowLeftLineBoldIcon;
var ArrowLeftLineIcon_1 = dist.ArrowLeftLineIcon = ArrowLeftLineIcon;
dist.ArrowOutwardLineBoldIcon = ArrowOutwardLineBoldIcon;
dist.ArrowOutwardLineIcon = ArrowOutwardLineIcon;
dist.ArrowRightLineBoldIcon = ArrowRightLineBoldIcon;
var ArrowRightLineIcon_1 = dist.ArrowRightLineIcon = ArrowRightLineIcon;
dist.ArrowUpCircleFillIcon = ArrowUpCircleFillIcon;
var ArrowUpCircleLineIcon_1 = dist.ArrowUpCircleLineIcon = ArrowUpCircleLineIcon;
dist.ArrowUpLineBoldIcon = ArrowUpLineBoldIcon;
dist.ArrowUpLineIcon = ArrowUpLineIcon;
dist.ArrowUpwardLineBoldIcon = ArrowUpwardLineBoldIcon;
dist.ArrowUpwardLineIcon = ArrowUpwardLineIcon;
dist.CheckCircleFillBoldIcon = CheckCircleFillBoldIcon;
var CheckCircleFillIcon_1 = dist.CheckCircleFillIcon = CheckCircleFillIcon;
var CheckCircleLineBoldIcon_1 = dist.CheckCircleLineBoldIcon = CheckCircleLineBoldIcon;
dist.CheckCircleLineIcon = CheckCircleLineIcon;
var CheckLineBoldIcon_1 = dist.CheckLineBoldIcon = CheckLineBoldIcon;
dist.CheckLineIcon = CheckLineIcon;
dist.ClockCircleFillIcon = ClockCircleFillIcon;
dist.ClockCircleLineIcon = ClockCircleLineIcon;
var CloseCircleFillBoldIcon_1 = dist.CloseCircleFillBoldIcon = CloseCircleFillBoldIcon;
dist.CloseCircleFillIcon = CloseCircleFillIcon;
dist.CloseCircleLineBoldIcon = CloseCircleLineBoldIcon;
dist.CloseCircleLineIcon = CloseCircleLineIcon;
var CloseLineBoldIcon_1 = dist.CloseLineBoldIcon = CloseLineBoldIcon;
var CloseLineIcon_1 = dist.CloseLineIcon = CloseLineIcon;
dist.DeleteFillIcon = DeleteFillIcon;
dist.DeleteLineBoldIcon = DeleteLineBoldIcon;
dist.DeleteLineIcon = DeleteLineIcon;
dist.DeleteLineLightIcon = DeleteLineLightIcon;
dist.DesktopFillIcon = DesktopFillIcon;
dist.DesktopLineBoldIcon = DesktopLineBoldIcon;
dist.DesktopLineIcon = DesktopLineIcon;
dist.DesktopLineLightIcon = DesktopLineLightIcon;
dist.DocumentFillIcon = DocumentFillIcon;
dist.DocumentLineBoldIcon = DocumentLineBoldIcon;
dist.DocumentLineIcon = DocumentLineIcon;
dist.DocumentLineLightIcon = DocumentLineLightIcon;
dist.DownloadLineIcon = DownloadLineIcon;
dist.EditFillIcon = EditFillIcon;
dist.EditLineBoldIcon = EditLineBoldIcon;
dist.EditLineIcon = EditLineIcon;
dist.EditLineLightIcon = EditLineLightIcon;
dist.ErrorCircleFillBoldIcon = ErrorCircleFillBoldIcon;
var ErrorCircleFillIcon_1 = dist.ErrorCircleFillIcon = ErrorCircleFillIcon;
var ErrorCircleLineBoldIcon_1 = dist.ErrorCircleLineBoldIcon = ErrorCircleLineBoldIcon;
dist.ErrorCircleLineIcon = ErrorCircleLineIcon;
dist.FileLineBoldIcon = FileLineBoldIcon;
dist.FileLineIcon = FileLineIcon;
dist.FileLineLightIcon = FileLineLightIcon;
dist.FirstPageLineBoldIcon = FirstPageLineBoldIcon;
var FirstPageLineIcon_1 = dist.FirstPageLineIcon = FirstPageLineIcon;
dist.FolderFillIcon = FolderFillIcon;
dist.FolderLineBoldIcon = FolderLineBoldIcon;
dist.FolderLineIcon = FolderLineIcon;
dist.FolderLineLightIcon = FolderLineLightIcon;
dist.FullScreenExitLineIcon = FullScreenExitLineIcon;
dist.FullScreenLineIcon = FullScreenLineIcon;
dist.HeartFillIcon = HeartFillIcon;
dist.HeartLineIcon = HeartLineIcon;
dist.HelpCircleFillIcon = HelpCircleFillIcon;
dist.HelpCircleLineIcon = HelpCircleLineIcon;
dist.HomeFillIcon = HomeFillIcon;
dist.HomeLineBoldIcon = HomeLineBoldIcon;
var HomeLineIcon_1 = dist.HomeLineIcon = HomeLineIcon;
dist.HomeLineLightIcon = HomeLineLightIcon;
var InfoCircleFillIcon_1 = dist.InfoCircleFillIcon = InfoCircleFillIcon;
dist.InfoCircleLineIcon = InfoCircleLineIcon;
dist.LanguageFillIcon = LanguageFillIcon;
dist.LanguageLineIcon = LanguageLineIcon;
dist.LastPageLineBoldIcon = LastPageLineBoldIcon;
var LastPageLineIcon_1 = dist.LastPageLineIcon = LastPageLineIcon;
dist.LayerFillIcon = LayerFillIcon;
dist.LayerLineBoldIcon = LayerLineBoldIcon;
dist.LayerLineIcon = LayerLineIcon;
dist.LayerLineLightIcon = LayerLineLightIcon;
dist.ListLineIcon = ListLineIcon;
dist.LocationFillIcon = LocationFillIcon;
dist.LocationLineBoldIcon = LocationLineBoldIcon;
dist.LocationLineIcon = LocationLineIcon;
dist.LocationLineLightIcon = LocationLineLightIcon;
dist.LockFillIcon = LockFillIcon;
dist.LockLineBoldIcon = LockLineBoldIcon;
dist.LockLineIcon = LockLineIcon;
dist.LockLineLightIcon = LockLineLightIcon;
dist.LockOpenFillIcon = LockOpenFillIcon;
dist.LockOpenLineBoldIcon = LockOpenLineBoldIcon;
dist.LockOpenLineIcon = LockOpenLineIcon;
dist.LockOpenLineLightIcon = LockOpenLineLightIcon;
dist.LoginLineIcon = LoginLineIcon;
dist.LogoutLineIcon = LogoutLineIcon;
dist.MailFillIcon = MailFillIcon;
dist.MailLineBoldIcon = MailLineBoldIcon;
dist.MailLineIcon = MailLineIcon;
dist.MailLineLightIcon = MailLineLightIcon;
dist.MapFillIcon = MapFillIcon;
dist.MapFlowLineBoldIcon = MapFlowLineBoldIcon;
dist.MapFlowLineIcon = MapFlowLineIcon;
dist.MapFlowLineLightIcon = MapFlowLineLightIcon;
dist.MapLineBoldIcon = MapLineBoldIcon;
dist.MapLineIcon = MapLineIcon;
dist.MapLineLightIcon = MapLineLightIcon;
dist.MenuLineIcon = MenuLineIcon;
dist.MessageFillIcon = MessageFillIcon;
dist.MessageLineBoldIcon = MessageLineBoldIcon;
dist.MessageLineIcon = MessageLineIcon;
dist.MessageLineLightIcon = MessageLineLightIcon;
var MinusLineBoldIcon_1 = dist.MinusLineBoldIcon = MinusLineBoldIcon;
dist.MinusLineIcon = MinusLineIcon;
dist.MobileFillIcon = MobileFillIcon;
dist.MobileLineBoldIcon = MobileLineBoldIcon;
dist.MobileLineIcon = MobileLineIcon;
dist.MobileLineLightIcon = MobileLineLightIcon;
var MoreHorizontalLineIcon_1 = dist.MoreHorizontalLineIcon = MoreHorizontalLineIcon;
dist.MoreVerticalLineIcon = MoreVerticalLineIcon;
dist.MyLocationFillIcon = MyLocationFillIcon;
dist.MyLocationLineBoldIcon = MyLocationLineBoldIcon;
dist.MyLocationLineIcon = MyLocationLineIcon;
dist.MyLocationLineLightIcon = MyLocationLineLightIcon;
dist.NotificationFillIcon = NotificationFillIcon;
dist.NotificationLineIcon = NotificationLineIcon;
dist.NotificationOffFillIcon = NotificationOffFillIcon;
dist.NotificationOffLineIcon = NotificationOffLineIcon;
dist.OpenInNewLineIcon = OpenInNewLineIcon;
dist.PlayCircleFillIcon = PlayCircleFillIcon;
dist.PlayCircleLineIcon = PlayCircleLineIcon;
dist.PlusLineBoldIcon = PlusLineBoldIcon;
dist.PlusLineIcon = PlusLineIcon;
dist.ProfileFillIcon = ProfileFillIcon;
dist.ProfileLineIcon = ProfileLineIcon;
dist.ProgressLineIcon = ProgressLineIcon;
dist.RefreshLineIcon = RefreshLineIcon;
dist.RouteLineBoldIcon = RouteLineBoldIcon;
dist.RouteLineIcon = RouteLineIcon;
dist.RouteLineLightIcon = RouteLineLightIcon;
var SearchLineIcon_1 = dist.SearchLineIcon = SearchLineIcon;
dist.SelectAreaFillIcon = SelectAreaFillIcon;
dist.SelectAreaLineBoldIcon = SelectAreaLineBoldIcon;
dist.SelectAreaLineIcon = SelectAreaLineIcon;
dist.SelectAreaLineLightIcon = SelectAreaLineLightIcon;
dist.SettingFillIcon = SettingFillIcon;
dist.SettingLineBoldIcon = SettingLineBoldIcon;
dist.SettingLineIcon = SettingLineIcon;
dist.SettingLineLightIcon = SettingLineLightIcon;
dist.StarFillIcon = StarFillIcon;
dist.StarLineIcon = StarLineIcon;
dist.TerminalFillIcon = TerminalFillIcon;
dist.TerminalLineBoldIcon = TerminalLineBoldIcon;
dist.TerminalLineIcon = TerminalLineIcon;
dist.TerminalLineLightIcon = TerminalLineLightIcon;
dist.ThreeDFillIcon = ThreeDFillIcon;
dist.ThreeDLineBoldIcon = ThreeDLineBoldIcon;
dist.ThreeDLineIcon = ThreeDLineIcon;
dist.ThreeDLineLightIcon = ThreeDLineLightIcon;
dist.ThreeDMapFillIcon = ThreeDMapFillIcon;
dist.ThreeDMapLineBoldIcon = ThreeDMapLineBoldIcon;
dist.ThreeDMapLineIcon = ThreeDMapLineIcon;
dist.ThreeDMapLineLightIcon = ThreeDMapLineLightIcon;
dist.UserFillIcon = UserFillIcon;
dist.UserLineBoldIcon = UserLineBoldIcon;
dist.UserLineIcon = UserLineIcon;
dist.UserLineLightIcon = UserLineLightIcon;
var ViewFillBoldIcon_1 = dist.ViewFillBoldIcon = ViewFillBoldIcon;
dist.ViewFillIcon = ViewFillIcon;
dist.ViewInArFillIcon = ViewInArFillIcon;
dist.ViewInArLineBoldIcon = ViewInArLineBoldIcon;
dist.ViewInArLineIcon = ViewInArLineIcon;
dist.ViewInArLineLightIcon = ViewInArLineLightIcon;
dist.ViewLineBoldIcon = ViewLineBoldIcon;
dist.ViewLineIcon = ViewLineIcon;
var ViewOffFillBoldIcon_1 = dist.ViewOffFillBoldIcon = ViewOffFillBoldIcon;
dist.ViewOffFillIcon = ViewOffFillIcon;
dist.ViewOffLineBoldIcon = ViewOffLineBoldIcon;
dist.ViewOffLineIcon = ViewOffLineIcon;
dist.WarningFillBoldIcon = WarningFillBoldIcon;
var WarningFillIcon_1 = dist.WarningFillIcon = WarningFillIcon;
dist.WarningFillLightIcon = WarningFillLightIcon;
dist.WarningLineBoldIcon = WarningLineBoldIcon;
dist.WarningLineIcon = WarningLineIcon;
dist.WarningLineLightIcon = WarningLineLightIcon;

var Alert = function (_a) {
    var type = _a.type, title = _a.title, contents = _a.contents, closeButton = _a.closeButton, actionButtonData = _a.actionButtonData, open = _a.open, onClose = _a.onClose;
    // const [iconNode, setIconNode] = useState<>(null);
    var resolveOnClose = function () {
        if (!onClose) {
            return;
        }
        onClose();
    };
    var iconSetting = function () {
        if (type === 'error') {
            return React__default["default"].createElement(ErrorCircleFillIcon_1, null);
        }
        else if (type === 'warning') {
            return React__default["default"].createElement(WarningFillIcon_1, null);
        }
        else if (type === 'information') {
            return React__default["default"].createElement(InfoCircleFillIcon_1, null);
        }
        else if (type === 'success') {
            return React__default["default"].createElement(CheckCircleFillIcon_1, null);
        }
    };
    var timer = React$1.useRef(null);
    var clearSnackTimer = function () { return clearTimeout(timer.current); };
    var startSnackTimer = function () {
        return (timer.current = setTimeout(resolveOnClose, 3000));
    };
    var onMouseOver = function () {
        clearSnackTimer();
    };
    var onMouseLeave = function () {
        startSnackTimer();
    };
    React$1.useEffect(function () {
        if (open) {
            startSnackTimer();
        }
    }, [open]);
    return (React__default["default"].createElement("div", { className: [
            'alert-box',
            open ? 'open' : 'close',
            "alert-".concat(title ? 'description-' : '').concat(type && type),
        ].join(' '), onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        React__default["default"].createElement("div", { className: "alert__left-box" },
            iconSetting(),
            title ? (React__default["default"].createElement("div", { className: "alert__text-box" },
                React__default["default"].createElement(Title, { role: 3, type: "title", size: "xs", className: "font-title" }, title),
                React__default["default"].createElement(Text, { type: "body", size: "m" }, contents))) : (React__default["default"].createElement(Text, { type: "body", size: "m" }, contents))),
        (actionButtonData || closeButton) && (React__default["default"].createElement("div", { className: "alert__right-box" },
            actionButtonData && (React__default["default"].createElement(Button, { size: "s", type: "ghost", onClick: actionButtonData.onClickAction }, actionButtonData.label)),
            closeButton && (React__default["default"].createElement(Button, { iconOnly: React__default["default"].createElement(CloseLineIcon_1, null), size: "s", type: "text", isIconMode: true, onClick: resolveOnClose, className: "close-button" }))))));
};

var DropdownMenu = function (_a) {
    var id = _a.id, label = _a.label, size = _a.size, iconLeft = _a.iconLeft, iconRight = _a.iconRight, disabled = _a.disabled, subLabel = _a.subLabel, onChange = _a.onChange, onClick = _a.onClick;
    var resolveOnClick = function (_a) {
        _a.e; var id = _a.id, label = _a.label;
        if (!disabled) {
            onClick(id, label);
            onChange(id, label);
        }
    };
    return (React__default["default"].createElement("div", { className: [
            'dropdown-box__menu',
            "menu-item-".concat(size ? size : 'l'),
            disabled ? 'disabled' : '',
        ].join(' '), id: id, onClick: function (e) { return resolveOnClick({ e: e, id: id, label: label }); } },
        iconLeft && iconLeft,
        React__default["default"].createElement(Text, { className: "dropdown-box__menu__label", type: "body", size: "l" }, label),
        subLabel && (React__default["default"].createElement(TextLabel, { className: "dropdown-box__menu__sub-label", size: "m" }, subLabel)),
        iconRight && iconRight));
};

var Dropdown = function (_a) {
    var id = _a.id, size = _a.size, align = _a.align, children = _a.children, menuData = _a.menuData, onClick = _a.onClick, onChange = _a.onChange, isFullWidthMenu = _a.isFullWidthMenu, className = _a.className;
    var _b = React$1.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = React$1.useState(isFullWidthMenu ? isFullWidthMenu : false), isFullWidthMenuWrap = _c[0], setIsFullWidthMenuWrap = _c[1];
    var onClickDropdownBase = function (e, id) {
        if (menuOpen) {
            setMenuOpen(false);
        }
        else {
            setMenuOpen(true);
        }
    };
    var onChangeDropdownMenu = function (id, label) {
        if (!onChange) {
            return;
        }
        else {
            onChange({ id: id, label: label });
        }
    };
    var onClickDropdownMenu = function (id, label) {
        if (menuOpen) {
            setMenuOpen(false);
        }
        else {
            setMenuOpen(true);
        }
        if (!onClick) {
            return;
        }
        else {
            onClick({ id: id, label: label });
        }
    };
    React$1.useEffect(function () {
        var _a;
        if (((_a = children.type) === null || _a === void 0 ? void 0 : _a.displayName) == 'TextField') {
            setIsFullWidthMenuWrap(true);
        }
        else {
            setIsFullWidthMenuWrap(false);
        }
    }, [children]);
    React$1.useEffect(function () {
        if (menuOpen) {
            document.getElementById(String(id));
            var thisDropdownMenuWrap = document.getElementById("".concat(id, "-menu-wrap"));
            var thisDropdownBaseWrap = document.getElementById("".concat(id, "__base"));
            // const isAlignCenter = thisDropdown?.classList.contains('center');
            // if (thisDropdownMenuWrap && isAlignCenter) {
            //   const thisWidth = window
            //     .getComputedStyle(thisDropdownMenuWrap)
            //     .getPropertyValue('width')
            //     .split('px')[0];
            //   const thisWidthHalf = Number(thisWidth) / 2;
            //   console.log('thisWidth', thisWidth);
            //   thisDropdownMenuWrap.style.left = `calc(50% - ${thisWidthHalf}px)`;
            // }
            if (thisDropdownBaseWrap && thisDropdownMenuWrap) {
                if (thisDropdownBaseWrap.getElementsByClassName('has-helperText')[0]) {
                    thisDropdownMenuWrap.style.top = 'calc(100% - 22px)';
                }
            }
        }
    }, [menuOpen]);
    return (React__default["default"].createElement("div", { className: [
            'dropdown-box',
            align ? align : 'left',
            menuOpen ? 'open' : 'close',
            className ? className : '',
        ].join(' '), id: id },
        React__default["default"].createElement("div", { className: "dropdown-box__base", onClick: function (e) { return onClickDropdownBase(); }, id: id + '__base' }, children),
        menuOpen && (React__default["default"].createElement("div", { className: [
                'dropdown-box__menu-wrap',
                isFullWidthMenuWrap ? 'full-width' : '',
            ].join(' '), id: id + '-menu-wrap' }, menuData &&
            menuData.map(function (item) { return (React__default["default"].createElement(DropdownMenu, { id: item.id, size: size, label: item.label, subLabel: item === null || item === void 0 ? void 0 : item.subLabel, iconLeft: item === null || item === void 0 ? void 0 : item.iconLeft, iconRight: item === null || item === void 0 ? void 0 : item.iconRight, disabled: item.disabled, onChange: onChangeDropdownMenu, onClick: onClickDropdownMenu, key: item.id })); })))));
};

var Breadcrumb = function (_a) {
    var menuData = _a.menuData, moreButton = _a.moreButton, thisPage = _a.thisPage, homeButton = _a.homeButton;
    var _b = React$1.useState(true), fullMenuMode = _b[0], setFullMenuMode = _b[1];
    var DrawButton = function (buttonData) {
        return (React__default["default"].createElement(React__default["default"].Fragment, null, buttonData.subMenu ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(Dropdown, { id: "".concat(buttonData.id, "-dropdown"), size: "s", align: "left", menuData: buttonData.subMenu, className: "breadcrumb-dropdown-box", onClick: buttonData.onMoveSubPage && buttonData.onMoveSubPage },
                React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(Button, { state: buttonData.disabled ? 'disabled' : 'default', type: "text", size: "s", iconLeft: buttonData.icon && buttonData.icon, iconRight: React__default["default"].createElement(ArrowUpCircleLineIcon_1, null), className: [
                            thisPage === buttonData.id ? 'current' : 'default',
                        ].join(' '), onClick: buttonData.onMovePage && buttonData.onMovePage }, buttonData.label))))) : (React__default["default"].createElement(Button, { state: buttonData.disabled ? 'disabled' : 'default', type: "text", size: "s", iconLeft: buttonData.icon && buttonData.icon, className: [
                thisPage === buttonData.id ? 'current' : 'default',
            ].join(' '), onClick: buttonData.onMovePage && buttonData.onMovePage }, buttonData.label))));
    };
    var onClickMoreButton = function () {
        setFullMenuMode(true);
    };
    React$1.useEffect(function () {
        setFullMenuMode(!moreButton);
    }, [moreButton]);
    return (React__default["default"].createElement("div", { className: ['mds-breadcrumb'].join(' ') },
        homeButton && (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(Button, { type: "ghost", size: "s", iconOnly: homeButton.icon ? homeButton.icon : React__default["default"].createElement(HomeLineIcon_1, null), isIconMode: true, className: ['breadcrumb-home'].join(' '), onClick: homeButton.onMoveHome && homeButton.onMoveHome }),
            React__default["default"].createElement("div", { className: "breadcrumb-icon" },
                React__default["default"].createElement(ArrowRightLineIcon_1, null)))),
        fullMenuMode &&
            menuData.map(function (item, index) {
                return (React__default["default"].createElement(React$1.Fragment, { key: item.id },
                    index !== 0 && (React__default["default"].createElement("div", { className: "breadcrumb-icon" },
                        React__default["default"].createElement(ArrowRightLineIcon_1, null))),
                    DrawButton(item)));
            }),
        !fullMenuMode && (React__default["default"].createElement(React__default["default"].Fragment, null,
            DrawButton(menuData[0]),
            React__default["default"].createElement("div", { className: "breadcrumb-icon" },
                React__default["default"].createElement(ArrowRightLineIcon_1, null)),
            React__default["default"].createElement(Button, { type: "ghost", size: "s", isIconMode: true, iconOnly: React__default["default"].createElement(MoreHorizontalLineIcon_1, null), className: ['breadcrumb-more-button'].join(' '), onClick: onClickMoreButton }),
            React__default["default"].createElement("div", { className: "breadcrumb-icon" },
                React__default["default"].createElement(ArrowRightLineIcon_1, null)),
            DrawButton(menuData[menuData.length - 1])))));
};

function Checkbox(_a) {
    var id = _a.id, type = _a.type, state = _a.state, size = _a.size, disabled = _a.disabled, label = _a.label, helperText = _a.helperText, checked = _a.checked, onChange = _a.onChange, onClick = _a.onClick;
    var _b = React$1.useState('default'), thisState = _b[0], setThisState = _b[1];
    // checked 여부
    var _c = React$1.useState(checked ? true : false), thisIsChecked = _c[0], setThisIsChecked = _c[1];
    var _d = React$1.useState(type ? type : 'selected'), thisType = _d[0], setThisType = _d[1];
    var resolveOnChange = function (e) {
        if (!onChange) {
            return;
        }
        onChange(e.target);
        return;
    };
    var onChecked = function (e) {
        if (disabled || state === 'disabled') {
            return;
        }
        if (e.target.checked) {
            setThisIsChecked(true);
        }
        else {
            setThisIsChecked(false);
        }
        if (!onClick) {
            return;
        }
        onClick(e.target);
    };
    React$1.useEffect(function () {
        if (typeof state === 'string') {
            setThisState(state);
        }
    }, [state]);
    React$1.useEffect(function () {
        if (checked === true) {
            setThisIsChecked(true);
        }
        else if (checked === false) {
            setThisIsChecked(false);
        }
    }, [checked]);
    React$1.useEffect(function () {
        if (typeof type === 'string') {
            setThisType(type);
        }
    }, [type]);
    return (React__default["default"].createElement("div", { className: ['checkbox-wrap'].join(' ') },
        label ? (React__default["default"].createElement("label", { htmlFor: id, className: ['', 'checkbox-label'].join(' ') },
            React__default["default"].createElement("span", { className: [
                    'checkbox',
                    "checkbox__".concat(size, "--").concat((disabled && 'disabled') || thisState),
                    "".concat(thisIsChecked ? 'checked' : ''),
                ].join(' ') },
                thisType === 'selected' && thisIsChecked && React__default["default"].createElement(CheckLineBoldIcon_1, null),
                thisType === 'indeterminate' && thisIsChecked && (React__default["default"].createElement(MinusLineBoldIcon_1, null)),
                React__default["default"].createElement("input", { id: id, type: "checkbox", defaultChecked: checked, disabled: disabled, onClick: function (e) { return onChecked(e); }, onChange: function (e) { return resolveOnChange(e); } })),
            React__default["default"].createElement(Text, { type: "body", size: "l" }, label))) : (React__default["default"].createElement("label", { htmlFor: id, className: [
                'checkbox',
                "checkbox__".concat(size, "--").concat((disabled && 'disabled') || thisState),
                "".concat(thisIsChecked ? 'checked' : ''),
            ].join(' ') },
            thisType === 'selected' && thisIsChecked && React__default["default"].createElement(CheckLineBoldIcon_1, null),
            thisType === 'indeterminate' && thisIsChecked && (React__default["default"].createElement(MinusLineBoldIcon_1, null)),
            React__default["default"].createElement("input", { id: id, type: "checkbox", defaultChecked: checked ? checked : false, disabled: disabled, onClick: function (e) { return onChecked(e); }, onChange: function (e) { return resolveOnChange(e); } }))),
        helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: [
                'helper-text',
                (disabled && 'disabled') || thisState,
            ].join(' ') },
            thisState === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
            React__default["default"].createElement("span", { className: "text" }, helperText)))));
}

function CheckboxIcon(_a) {
    var id = _a.id, size = _a.size, disabled = _a.disabled, checked = _a.checked, checkOffIcon = _a.checkOffIcon, checkOnIcon = _a.checkOnIcon, onChange = _a.onChange, onClick = _a.onClick;
    // checked 여부
    var _b = React$1.useState(checked ? true : false), thisIsChecked = _b[0], setThisIsChecked = _b[1];
    var resolveOnChange = function (e) {
        if (!onChange) {
            return;
        }
        onChange(e.target);
        return;
    };
    var onChecked = function (e, id) {
        if (disabled) {
            return;
        }
        if (e.target.checked) {
            setThisIsChecked(true);
        }
        else {
            setThisIsChecked(false);
        }
        if (!onClick) {
            return;
        }
        onClick(e.target);
    };
    React$1.useEffect(function () {
        if (checked === true) {
            setThisIsChecked(true);
        }
        else if (checked === false) {
            setThisIsChecked(false);
        }
    }, [checked]);
    return (React__default["default"].createElement("label", { htmlFor: id, className: [
            'checkbox',
            'checkbox-icon',
            "checkbox__".concat(size),
            "".concat(disabled ? 'disabled' : ''),
            "".concat(thisIsChecked ? 'checked' : ''),
        ].join(' ') },
        thisIsChecked ? checkOnIcon : checkOffIcon,
        React__default["default"].createElement("input", { id: id, type: "checkbox", defaultChecked: checked ? checked : false, disabled: disabled, onClick: function (e) { return onChecked(e); }, onChange: function (e) { return resolveOnChange(e); } })));
}

var CheckboxGroup = function (_a) {
    var id = _a.id, type = _a.type, state = _a.state, size = _a.size, disabled = _a.disabled, label = _a.label, checked = _a.checked, controlMode = _a.controlMode, helperText = _a.helperText, align = _a.align, direction = _a.direction, onClick = _a.onClick, onChange = _a.onChange, options = _a.options;
    var optionList = options.map(function (item) {
        return item.id;
    });
    var _b = React$1.useState([]), checkItemList = _b[0], setCheckItemList = _b[1];
    var _c = React$1.useState(type ? type : 'selected'), checkBoxAllType = _c[0], setCheckBoxAllType = _c[1];
    var _d = React$1.useState(Boolean(checked)), checkAll = _d[0], setCheckAll = _d[1];
    var resolveOnChange = function (e) {
        if (!onChange) {
            return;
        }
        onChange(e);
        return;
    };
    var onCheckedAll = function (e) {
        if (disabled || state === 'disabled') {
            return;
        }
        setCheckAll(!checkAll);
        if (!checkAll) {
            setCheckItemList(optionList);
        }
        else {
            setCheckItemList([]);
        }
        if (!onClick) {
            return;
        }
        onClick([e, e.checked ? optionList : []]);
    };
    var onCheckedOne = function (e) {
        if (disabled || state === 'disabled') {
            return;
        }
        var checkItems = __spreadArray([], checkItemList, true);
        if (checkItems.includes(e.id)) {
            checkItems.splice(checkItems.indexOf(e.id), 1);
        }
        else {
            checkItems.push(e.id);
        }
        setCheckItemList(checkItems);
        if (checkItems.length === 0) {
            setCheckAll(false);
        }
        else {
            setCheckAll(true);
        }
        if (!onClick) {
            return;
        }
        onClick([e, checkItems]);
    };
    React$1.useEffect(function () {
        var check = options.filter(function (item) { return item.checked; }).map(function (item) { return item.id; });
        if (check.length === 0) {
            setCheckAll(false);
            setCheckItemList([]);
        }
        else {
            setCheckAll(true);
            setCheckItemList(check);
        }
    }, [options]);
    React$1.useEffect(function () {
        if (checkItemList.length === options.length) {
            setCheckBoxAllType('selected');
        }
        else {
            setCheckBoxAllType('indeterminate');
        }
    }, [checkItemList]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: [
                "checkbox__group",
                align && align,
                direction ? direction : 'horizontal',
            ].join(' ') },
            React__default["default"].createElement("div", { className: "checkbox-box" },
                label && (React__default["default"].createElement(TextLabel, { size: "m", className: "checkbox__all-check__label" }, controlMode ? (React__default["default"].createElement(Checkbox, { id: id, label: label, size: size, state: state, checked: checkAll, onChange: resolveOnChange, onClick: onCheckedAll, type: checkBoxAllType, disabled: disabled })) : (React__default["default"].createElement(React__default["default"].Fragment, null, label)))),
                checkItemList &&
                    options.map(function (checkboxItem) { return (React__default["default"].createElement(Checkbox, { id: checkboxItem.id, label: checkboxItem.label, state: state, size: size, checked: checkItemList.includes(checkboxItem.id), onClick: onCheckedOne, key: checkboxItem.id, disabled: disabled })); })),
            helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: ['helper-text', (disabled && 'disabled') || state].join(' ') },
                state === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                    React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
                React__default["default"].createElement("span", { className: "text" }, helperText))))));
};

var Container = function (_a) {
    var full = _a.full, className = _a.className, children = _a.children, props = __rest(_a, ["full", "className", "children"]);
    return (React__default["default"].createElement("div", __assign({ className: ['mds-container', full && 'full', className && className].join(' ') }, props), children));
};

var Divider = function (_a) {
    var type = _a.type, direction = _a.direction, children = _a.children;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, children ? (React__default["default"].createElement("div", { className: [
            'mds-divider',
            "divider-".concat(type ? type : 'default'),
            "divider-".concat(direction ? direction : 'horizontal'),
            "".concat(children && 'with-children'),
        ].join(' ') }, children && React__default["default"].createElement("div", { className: "divider__children-box" }, children))) : (React__default["default"].createElement("hr", { className: [
            'mds-divider',
            "divider-".concat(type ? type : 'default'),
            "divider-".concat(direction ? direction : 'horizontal'),
        ].join(' ') }))));
};

var Form = function (_a) {
    var id = _a.id, className = _a.className, children = _a.children;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("form", { id: id && id, className: ['form-box', className && className].join(' ') },
            React__default["default"].createElement("fieldset", null, children))));
};

var Switch = function (_a) {
    var id = _a.id, iconMode = _a.iconMode, size = _a.size, state = _a.state, label = _a.label, className = _a.className, checked = _a.checked, disabled = _a.disabled, helperText = _a.helperText, onClick = _a.onClick;
    var _b = React$1.useState(false), isChecked = _b[0], setIsChecked = _b[1];
    var _c = React$1.useState('default'), thisState = _c[0], setThisState = _c[1];
    var resolveOnClick = function (e) {
        setIsChecked(e.target.checked);
        if (!onClick) {
            return;
        }
        onClick(e.target.checked);
    };
    React$1.useEffect(function () {
        setIsChecked(Boolean(checked));
    }, []);
    React$1.useEffect(function () {
        if (typeof state === 'string') {
            setThisState(state);
        }
    }, [state]);
    return (React__default["default"].createElement("div", { className: [
            'switch-toggle-wrap',
            label && 'label-mode',
            size ? "switch-toggle-".concat(size) : 'switch-toggle-l',
            disabled ? 'disabled' : thisState,
        ].join(' ') },
        React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement("input", { id: id, type: "checkbox", className: [
                    'switch-toggle',
                    "switch-toggle__".concat(size ? size : 'l', "--").concat((disabled && 'disabled') || thisState),
                    className ? className : '',
                ].join(' '), disabled: disabled, defaultChecked: checked, onClick: resolveOnClick }),
            React__default["default"].createElement("span", { className: "switch-button" }, iconMode &&
                (isChecked ? React__default["default"].createElement(CheckLineBoldIcon_1, null) : React__default["default"].createElement(CloseLineBoldIcon_1, null))),
            label && (React__default["default"].createElement(Text, { type: "body", size: "m" }, label))),
        helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: ['helper-text', disabled && 'disabled'].join(' ') }, helperText))));
};

var ListItem = function (_a) {
    var id = _a.id, title = _a.title, text = _a.text, iconLeft = _a.iconLeft, iconRightData = _a.iconRightData, avatarIcon = _a.avatarIcon, image = _a.image, checkboxData = _a.checkboxData, switchData = _a.switchData, labelData = _a.labelData, alignTop = _a.alignTop;
    var drawIcon = function (type, node) {
        return React__default["default"].createElement("div", { className: "mds-list__".concat(type, "-box") }, node);
    };
    var drawIconWithEvent = function (icon, onClick) {
        return (React__default["default"].createElement("div", { className: "mds-list__icon-box icon-with-event", onClick: onClick }, icon));
    };
    React$1.useEffect(function () {
        var listBox = document.getElementById("mds-list__left-box-".concat(id));
        var listRightBox = document.getElementById("mds-list__right-box-".concat(id));
        if (listRightBox && listBox) {
            var listRightBoxWidth = window
                .getComputedStyle(listRightBox)
                .getPropertyValue('width')
                .split('px')[0];
            listBox.style.paddingRight = "".concat(listRightBoxWidth, "px");
        }
    }, [id]);
    return (React__default["default"].createElement("li", { className: ['mds-list-box', alignTop ? 'top' : 'center'].join(' ') },
        React__default["default"].createElement("div", { className: "mds-list__left-box", id: "mds-list__left-box-".concat(id) },
            (iconLeft && drawIcon('icon', iconLeft)) ||
                (avatarIcon && drawIcon('avatar', avatarIcon)) ||
                (image && drawIcon('image', image)),
            React__default["default"].createElement("div", { className: "mds-list__text-box" },
                React__default["default"].createElement(Title, { role: 3, type: "title", size: "xs" }, title),
                React__default["default"].createElement(Text, { type: "body", size: "m" }, text))),
        React__default["default"].createElement("div", { className: "mds-list__right-box", id: "mds-list__right-box-".concat(id) }, (iconRightData &&
            drawIconWithEvent(iconRightData.icon, iconRightData.onClick)) ||
            (checkboxData && (React__default["default"].createElement(Checkbox, { id: "".concat(id, "-checkbox"), size: "s", onClick: checkboxData.onClick }))) ||
            (switchData && (React__default["default"].createElement(Switch, { id: "".concat(id, "-switch"), onClick: switchData.onClick }))) ||
            (labelData && (React__default["default"].createElement(Button, { type: "ghost", size: "xs", id: "".concat(id, "-label-button"), onClick: labelData.onClick }, labelData.label))))));
};

var List = function (_a) {
    var listItemData = _a.listItemData, alignTop = _a.alignTop;
    return (React__default["default"].createElement("div", { className: "mds-list-wrap" }, listItemData.map(function (listItem) {
        return React__default["default"].createElement(ListItem, __assign({ key: listItem.id, alignTop: alignTop }, listItem));
    })));
};

var Modal = function (_a) {
    var title = _a.title, titleImage = _a.titleImage, titleIcon = _a.titleIcon, children = _a.children, size = _a.size, buttonPrimary = _a.buttonPrimary, buttonError = _a.buttonError, buttonSecondary = _a.buttonSecondary, buttonGhost = _a.buttonGhost, isCloseButton = _a.isCloseButton, open = _a.open, onClose = _a.onClose;
    var _b = React$1.useState(false), isFooter = _b[0], setIsFooter = _b[1];
    var onClickClose = function () {
        console.log('close');
        var bodyEl = document.body;
        bodyEl.style.overflow = "auto";
        onClose();
    };
    React$1.useEffect(function () {
        if (buttonPrimary || buttonError || buttonSecondary || buttonGhost) {
            setIsFooter(true);
        }
    }, [buttonPrimary, buttonError, buttonSecondary, buttonGhost]);
    React$1.useEffect(function () {
        if (open) {
            var bodyEl = document.body;
            bodyEl.style.overflow = "hidden";
        }
    }, [open]);
    return (React__default["default"].createElement("div", { className: ['modal-wrap', open ? 'open' : 'close'].join(' ') },
        React__default["default"].createElement("div", { className: "dim", onClick: onClickClose }),
        React__default["default"].createElement("div", { className: ['modal-box', "modal__".concat(size ? size : 's')].join(' ') },
            isCloseButton && (React__default["default"].createElement("span", { className: "modal-close-button", onClick: onClickClose },
                React__default["default"].createElement(CloseLineIcon_1, null))),
            title && (React__default["default"].createElement("div", { className: "modal-header" },
                titleIcon && titleIcon,
                titleImage && titleImage,
                React__default["default"].createElement(Title, { type: "title", size: "s", role: 1 }, title))),
            children && (React__default["default"].createElement("div", { className: "modal-body" }, typeof children === 'string' ? (React__default["default"].createElement(Text, { type: "body", size: "m" }, children)) : (children))),
            isFooter && (React__default["default"].createElement("div", { className: "modal-footer" },
                React__default["default"].createElement(ButtonGroup, { fullWidth: true },
                    buttonGhost && (React__default["default"].createElement(Button, { type: "ghost", size: "l", onClick: buttonGhost.onClick }, buttonGhost.text)),
                    buttonSecondary && (React__default["default"].createElement(Button, { type: "secondary", size: "l", onClick: buttonSecondary.onClick }, buttonSecondary.text)),
                    buttonPrimary ? (React__default["default"].createElement(Button, { type: "primary", size: "l", onClick: buttonPrimary.onClick }, buttonPrimary.text)) : (buttonError && (React__default["default"].createElement(Button, { type: "error", size: "l", onClick: buttonError.onClick }, buttonError.text)))))))));
};

var pageSizeData = [
    {
        id: 'page-size-10',
        label: '10 pages',
    },
    {
        id: 'page-size-20',
        label: '20 pages',
    },
    {
        id: 'page-size-50',
        label: '50 pages',
    },
    {
        id: 'page-size-100',
        label: '100 pages',
    },
];
var Pagination = function (_a) {
    var smallWidth = _a.smallWidth, simpleMode = _a.simpleMode, size = _a.size, 
    // totalCount,
    totalPage = _a.totalPage, defaultPage = _a.defaultPage, disabled = _a.disabled, showFirstButton = _a.showFirstButton, showLastButton = _a.showLastButton, showPageSizeChanger = _a.showPageSizeChanger, onshowPageSizeChage = _a.onshowPageSizeChage, showPageOptionCustom = _a.showPageOptionCustom; _a.onChange; var onClick = _a.onClick;
    var _b = React$1.useState(1), thisPage = _b[0], setThisPage = _b[1];
    var _c = React$1.useState(10); _c[0]; _c[1];
    var _d = React$1.useState({
        id: 'page-size-10',
        label: '10 pages',
    }), selectShowPageSizeData = _d[0], setSelectShowPageSizeData = _d[1];
    var buttonSizeFilter = function (size) {
        switch (size) {
            case 'l':
                return 'l';
            case 'm':
                return 's';
            case 's':
                return 'xs';
            default:
                return 'l';
        }
    };
    var textLabelSizeFilter = function (size) {
        switch (size) {
            case 'l':
                return 'l';
            case 'm':
                return 'm';
            case 's':
                return 'm';
            default:
                return 'l';
        }
    };
    var resolveOnshowPageSizeChage = function (selectMenuData) {
        if (selectMenuData) {
            setSelectShowPageSizeData({
                id: selectMenuData.id,
                label: selectMenuData.label,
            });
        }
        if (!onshowPageSizeChage) {
            return;
        }
        onshowPageSizeChage(selectMenuData);
    };
    var resolveOnClick = function (type, index) {
        if (type === 'item') {
            setThisPage(Number(index));
        }
        else if (type === 'prev') {
            if (thisPage !== 1) {
                setThisPage(thisPage - 1);
            }
        }
        else if (type === 'next') {
            if (thisPage !== totalPage) {
                setThisPage(thisPage + 1);
            }
        }
        else if (type === 'first') {
            setThisPage(1);
        }
        else if (type === 'last') {
            setThisPage(totalPage);
        }
        if (!onClick) {
            return;
        }
        onClick();
    };
    var onClickMoreButton = function () {
        console.log('more');
    };
    var pageNumbers = Array.from({ length: totalPage }, function (_, i) { return i + 1; });
    var paginaionItemFilter = function (node) {
        var itemList = [];
        var firstLastLiDraw = function (type, content) {
            return React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(type) }, content);
        };
        var moreButtonDraw = function (type) { return (React__default["default"].createElement("li", { key: "pagination-button-more-".concat(type) },
            React__default["default"].createElement(Button, { type: "ghost", state: disabled ? 'disabled' : 'default', size: buttonSizeFilter(size), id: "pagination-button-more-".concat(type), iconOnly: React__default["default"].createElement(MoreHorizontalLineIcon_1, null), isIconMode: true, onClick: function () { return onClickMoreButton(); } }))); };
        if (smallWidth) {
            if (node.length >= 7) {
                itemList = [];
                if (thisPage < 4) {
                    itemList = node.map(function (item, index) {
                        return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, index < 5 && item));
                    });
                    itemList.push(moreButtonDraw('next'), firstLastLiDraw('last', node[node.length - 1]));
                }
                else if (thisPage >= 4 && thisPage <= node.length - 4) {
                    itemList = node.map(function (item, index) {
                        if (index > thisPage - 3 && index < thisPage + 1) {
                            return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, item));
                        }
                    });
                    itemList.unshift(firstLastLiDraw('first', node[0]), moreButtonDraw('prev'));
                    itemList.push(moreButtonDraw('next'), firstLastLiDraw('last', node[node.length - 1]));
                }
                else if (thisPage > node.length - 4) {
                    itemList = node.map(function (item, index) {
                        return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, index >= node.length - 5 && item));
                    });
                    itemList.unshift(firstLastLiDraw('first', node[0]), moreButtonDraw('prev'));
                }
            }
        }
        else {
            if (node.length >= 14) {
                itemList = [];
                if (thisPage < 7) {
                    itemList = node.map(function (item, index) {
                        return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, index < 12 && item));
                    });
                    itemList.push(moreButtonDraw('next'), firstLastLiDraw('last', node[node.length - 1]));
                }
                else if (thisPage >= 7 && thisPage < node.length - 5) {
                    itemList = node.map(function (item, index) {
                        return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, index >= thisPage - 6 && index <= thisPage + 3 && item));
                    });
                    itemList.unshift(firstLastLiDraw('first', node[0]), moreButtonDraw('prev'));
                    itemList.push(moreButtonDraw('next'), firstLastLiDraw('last', node[node.length - 1]));
                }
                else if (thisPage >= node.length - 12) {
                    itemList = node.map(function (item, index) {
                        return (React__default["default"].createElement(React$1.Fragment, { key: "pagination-button-".concat(index) }, index >= node.length - 12 && item));
                    });
                    itemList.unshift(firstLastLiDraw('first', node[0]), moreButtonDraw('prev'));
                }
            }
        }
        return itemList;
    };
    var pageSetting = function () {
        var paginationItemDraw = pageNumbers.map(function (i) {
            return (React__default["default"].createElement("li", { key: "pagination-button-".concat(i) },
                React__default["default"].createElement(Button, { type: "ghost", state: disabled ? 'disabled' : 'default', size: buttonSizeFilter(size), id: "pagination-button-".concat(i), onClick: function () { return resolveOnClick('item', i); }, className: thisPage === i ? 'checked' : '' }, i)));
        });
        return paginaionItemFilter(paginationItemDraw);
    };
    React$1.useEffect(function () {
        setSelectShowPageSizeData(showPageOptionCustom ? showPageOptionCustom[0] : pageSizeData[0]);
    }, [showPageOptionCustom]);
    React$1.useEffect(function () {
        if (defaultPage) {
            setThisPage(defaultPage);
        }
    }, [defaultPage]);
    return (React__default["default"].createElement("div", { className: [
            'mds-pagination',
            "pagination-".concat(size),
            simpleMode ? 'pagination__simple-mode' : '',
            disabled ? 'disabled' : ' ',
        ].join(' ') },
        React__default["default"].createElement("ul", null,
            showFirstButton && (React__default["default"].createElement("li", null,
                React__default["default"].createElement(Button, { type: "ghost", state: (disabled && 'disabled') ||
                        (thisPage === 1 ? 'disabled' : 'default'), size: buttonSizeFilter(size), id: "pagination-button-first", onClick: function () { return resolveOnClick('first'); }, isIconMode: true, iconOnly: React__default["default"].createElement(FirstPageLineIcon_1, null) }))),
            React__default["default"].createElement("li", null,
                React__default["default"].createElement(Button, { type: "ghost", size: buttonSizeFilter(size), id: "pagination-button-prev", onClick: function () { return resolveOnClick('prev'); }, isIconMode: true, iconOnly: React__default["default"].createElement(ArrowLeftLineIcon_1, null), state: (disabled && 'disabled') ||
                        (thisPage === 1 ? 'disabled' : 'default') })),
            simpleMode ? (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("li", { className: "simple-mode__this" },
                    React__default["default"].createElement(TextLabel, { size: textLabelSizeFilter(size) }, thisPage)),
                React__default["default"].createElement("li", { className: "simple-mode__dash" },
                    React__default["default"].createElement(TextLabel, { size: textLabelSizeFilter(size) }, "/")),
                React__default["default"].createElement("li", { className: "simple-mode__total" },
                    React__default["default"].createElement(TextLabel, { size: textLabelSizeFilter(size) }, totalPage)))) : (pageSetting()),
            React__default["default"].createElement("li", null,
                React__default["default"].createElement(Button, { type: "ghost", size: buttonSizeFilter(size), id: "pagination-button-next", onClick: function () { return resolveOnClick('next'); }, isIconMode: true, iconOnly: React__default["default"].createElement(ArrowRightLineIcon_1, null), state: (disabled && 'disabled') ||
                        (thisPage === totalPage ? 'disabled' : 'default') })),
            showLastButton && (React__default["default"].createElement("li", null,
                React__default["default"].createElement(Button, { type: "ghost", size: buttonSizeFilter(size), id: "pagination-button-last", onClick: function () { return resolveOnClick('last'); }, isIconMode: true, iconOnly: React__default["default"].createElement(LastPageLineIcon_1, null), state: (disabled && 'disabled') ||
                        (thisPage === totalPage ? 'disabled' : 'default') })))),
        showPageSizeChanger && (React__default["default"].createElement(Dropdown, { size: "s", menuData: showPageOptionCustom ? showPageOptionCustom : pageSizeData, onChange: resolveOnshowPageSizeChage, id: "dropdown-page-size-change", className: "dropdown-page-size-change" },
            React__default["default"].createElement(Button, { type: "ghost", size: "m", iconRight: React__default["default"].createElement(ArrowDownLineIcon_1, null) }, selectShowPageSizeData.label && selectShowPageSizeData.label)))));
};

function Radio(_a) {
    var id = _a.id, name = _a.name, state = _a.state, size = _a.size, disabled = _a.disabled, label = _a.label, helperText = _a.helperText, checked = _a.checked, onChange = _a.onChange, onClick = _a.onClick;
    var _b = React$1.useState('default'), thisState = _b[0], setThisState = _b[1];
    // checked 여부
    var _c = React$1.useState(checked ? true : false), thisIsChecked = _c[0], setThisIsChecked = _c[1];
    var resolveOnChange = function (e) {
        if (!onChange) {
            return;
        }
        onChange(e.target);
        return;
    };
    var onChecked = function (e) {
        if (disabled || state === 'disabled') {
            return;
        }
        if (e.target.checked) {
            setThisIsChecked(true);
        }
        else {
            setThisIsChecked(false);
        }
        if (!onClick) {
            return;
        }
        onClick(e.target);
    };
    React$1.useEffect(function () {
        if (typeof state === 'string') {
            setThisState(state);
        }
    }, [state]);
    React$1.useEffect(function () {
        if (checked === true) {
            setThisIsChecked(true);
        }
        else if (checked === false) {
            setThisIsChecked(false);
        }
    }, [checked]);
    return (React__default["default"].createElement("div", { className: ['radio-wrap'].join(' ') },
        label ? (React__default["default"].createElement("label", { htmlFor: id, className: ['', 'radio-label'].join(' ') },
            React__default["default"].createElement("span", { className: [
                    'radio',
                    "radio__".concat(size, "--").concat((disabled && 'disabled') || thisState),
                    "".concat(thisIsChecked ? 'checked' : ''),
                ].join(' ') },
                React__default["default"].createElement("input", { type: "radio", id: id, name: name, defaultChecked: checked, disabled: disabled, onClick: function (e) { return onChecked(e); }, onChange: function (e) { return resolveOnChange(e); } })),
            React__default["default"].createElement(Text, { type: "body", size: "l" }, label))) : (React__default["default"].createElement("label", { htmlFor: id, className: [
                'radio',
                "radio__".concat(size, "--").concat((disabled && 'disabled') || thisState),
                "".concat(thisIsChecked ? 'checked' : ''),
            ].join(' ') },
            React__default["default"].createElement("input", { type: "radio", id: id, name: name, defaultChecked: checked ? checked : false, disabled: disabled, onClick: function (e) { return onChecked(e); }, onChange: function (e) { return resolveOnChange(e); } }))),
        helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: [
                'helper-text',
                (disabled && 'disabled') || thisState,
            ].join(' ') },
            state === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
            React__default["default"].createElement("span", { className: "text" }, helperText)))));
}

var RadioGroup = function (_a) {
    _a.id; var name = _a.name, state = _a.state, size = _a.size, disabled = _a.disabled, label = _a.label, helperText = _a.helperText, align = _a.align, direction = _a.direction, onClick = _a.onClick, onChange = _a.onChange, options = _a.options;
    options.map(function (item) {
        return item.id;
    });
    var _b = React$1.useState(options.map(function (item) {
        var _a;
        return _a = {}, _a[item.id] = Boolean(item.checked), _a;
    })), checkItemList = _b[0], setCheckItemList = _b[1];
    var resolveOnChange = function (e) {
        if (!onChange) {
            return;
        }
        onChange(e);
        return;
    };
    var onCheckedOne = function (e) {
        if (disabled || state === 'disabled') {
            return;
        }
        // const checkItems = checkItemList;
        // if (checkItems.includes(e.id)) {
        //   checkItems.splice(checkItems.indexOf(e.id), 1);
        // } else {
        //   checkItems.push();
        // }
        setCheckItemList(e.id);
        if (!onClick) {
            return;
        }
        onClick([e]);
    };
    React$1.useEffect(function () {
        var check = options.filter(function (item) { return item.checked; }).map(function (item) { return item.id; });
        setCheckItemList(check);
    }, [options]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: [
                "radio__group",
                align && align,
                direction ? direction : 'horizontal',
            ].join(' ') },
            label && (React__default["default"].createElement(TextLabel, { size: "m", className: "radio__group__label" }, label)),
            React__default["default"].createElement("div", { className: "radio-box" }, options &&
                checkItemList &&
                options.map(function (radioItem) { return (React__default["default"].createElement(Radio, { id: radioItem.id, name: name, label: radioItem.label, state: state, size: size, checked: checkItemList.includes(radioItem.id), onChange: resolveOnChange, onClick: onCheckedOne, key: radioItem.id, disabled: disabled })); })),
            helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: ['helper-text', (disabled && 'disabled') || state].join(' ') },
                state === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                    React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
                React__default["default"].createElement("span", { className: "text" }, helperText))))));
};

function TextField(_a) {
    var id = _a.id, value = _a.value, label = _a.label, placeholder = _a.placeholder, required = _a.required, password = _a.password, state = _a.state, size = _a.size, disabled = _a.disabled, helperText = _a.helperText, resetButton = _a.resetButton, minLength = _a.minLength, maxLength = _a.maxLength, multiLine = _a.multiLine, iconLeft = _a.iconLeft, iconRight = _a.iconRight, onChange = _a.onChange, onClick = _a.onClick; __rest(_a, ["id", "value", "label", "placeholder", "required", "password", "state", "size", "disabled", "helperText", "resetButton", "minLength", "maxLength", "multiLine", "iconLeft", "iconRight", "onChange", "onClick"]);
    var _b = React$1.useState(''), resoleValue = _b[0], setResolveValue = _b[1];
    var _c = React$1.useState('default'), thisState = _c[0], setThisState = _c[1];
    var _d = React$1.useState(false), showResetButton = _d[0], setShowResetButton = _d[1];
    var _e = React$1.useState('text'), thisType = _e[0], setThisType = _e[1];
    var _f = React$1.useState(0), valueLength = _f[0], setValueLength = _f[1];
    var onMaxLengthCheck = function (valueLength) {
        if (typeof maxLength === 'number') {
            setValueLength(valueLength);
            if (valueLength > Number(maxLength)) {
                setThisState('error');
            }
            else {
                setThisState('typing');
            }
        }
    };
    var onMinLengthCheck = function (valueLength) {
        if (typeof minLength === 'number') {
            if (valueLength < minLength) {
                setThisState('error');
            }
            else {
                setThisState('typing');
            }
        }
    };
    var resolveOnChange = function (e) {
        setResolveValue(e.target.value);
        if (multiLine) {
            onMaxLengthCheck(e.target.value.length);
        }
        else {
            onMinLengthCheck(e.target.value.length);
        }
        if (!onChange) {
            return;
        }
        onChange(e.target.value);
        return;
    };
    var onFocus = function (e) {
        if (thisState !== 'error') {
            setThisState('onfocused');
        }
    };
    var onBlur = function (e) {
        if (thisState !== 'error') {
            if (e.target.value) {
                setThisState('completed');
            }
            else {
                setThisState('default');
            }
        }
    };
    var onClearValue = function () {
        setResolveValue('');
        setThisState('default');
    };
    var onVisibilityPassword = function () {
        if (thisType === 'text') {
            setThisType('password');
        }
        else {
            setThisType('text');
        }
    };
    React$1.useEffect(function () {
        if (typeof resetButton === 'boolean') {
            setShowResetButton(!!resetButton);
        }
    }, [resetButton]);
    React$1.useEffect(function () {
        if (typeof state === 'string') {
            setThisState(state);
        }
    }, [state]);
    React$1.useEffect(function () {
        if (password) {
            setThisType('password');
        }
        else {
            setThisType('text');
        }
    }, [password]);
    React$1.useEffect(function () {
        if (multiLine && value) {
            var valueLengthCheck = value.length;
            setResolveValue(value);
            setValueLength(valueLengthCheck);
            if (valueLengthCheck > Number(maxLength)) {
                setThisState('error');
            }
        }
        else {
            if (typeof maxLength === 'number' && value) {
                var valuefilter = value.slice(0, maxLength);
                setResolveValue(valuefilter);
            }
            else {
                setResolveValue(value);
            }
        }
    }, [maxLength, multiLine, value]);
    return (React__default["default"].createElement("div", { className: [
            "textfield textfield__text-".concat(size ? size : 'l', "-").concat((disabled && 'disabled') || thisState),
            helperText ? 'has-helperText' : '',
        ].join(' ') },
        label && (React__default["default"].createElement("label", { htmlFor: id },
            React__default["default"].createElement(TextLabel, { size: "m" },
                label,
                " ",
                required && React__default["default"].createElement("span", { className: "required" }, " *")))),
        React__default["default"].createElement("div", { className: ['textfield-formControl', multiLine && 'multi-line'].join(' ') },
            !multiLine && iconLeft && iconLeft,
            multiLine ? (React__default["default"].createElement("textarea", { id: id, placeholder: placeholder, disabled: (disabled ? disabled : false) ||
                    (thisState === 'disabled' ? true : false), value: resoleValue ? resoleValue : '', onChange: function (e) { return resolveOnChange(e); }, onFocus: function (e) { return onFocus(); }, onBlur: function (e) { return onBlur(e); }, onClick: onClick })) : (React__default["default"].createElement("input", { id: id, placeholder: placeholder, type: thisType, disabled: (disabled ? disabled : false) ||
                    (thisState === 'disabled' ? true : false), value: resoleValue ? resoleValue : '', onChange: function (e) { return resolveOnChange(e); }, onFocus: function (e) { return onFocus(); }, onBlur: function (e) { return onBlur(e); }, minLength: minLength && minLength, maxLength: maxLength && maxLength, onClick: onClick })),
            !disabled && !multiLine && (React__default["default"].createElement(React__default["default"].Fragment, null,
                showResetButton && resoleValue && thisState !== 'disabled' && (React__default["default"].createElement("button", { onClick: onClearValue },
                    React__default["default"].createElement(CloseCircleFillBoldIcon_1, null))),
                password && (React__default["default"].createElement("span", { onClick: onVisibilityPassword }, thisType === 'text' ? (React__default["default"].createElement(ViewOffFillBoldIcon_1, null)) : (React__default["default"].createElement(ViewFillBoldIcon_1, null)))))),
            !multiLine && iconRight && iconRight),
        (helperText || multiLine) && (React__default["default"].createElement(Text, { type: "body", size: "s" },
            thisState === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
            thisState === 'success' && (React__default["default"].createElement("div", { className: "icon-success" },
                React__default["default"].createElement(CheckCircleLineBoldIcon_1, null))),
            React__default["default"].createElement("span", { className: "text" }, helperText),
            multiLine && maxLength && (React__default["default"].createElement("span", { className: "textarea__text-langth-check" },
                valueLength,
                " / ",
                maxLength))))));
}

var InputGroup = function (_a) {
    var id = _a.id, label = _a.label, state = _a.state, fullWidth = _a.fullWidth, required = _a.required, helperText = _a.helperText, disabled = _a.disabled, children = _a.children;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: ["input__group", fullWidth && 'fullWidth'].join(' ') },
            label && (React__default["default"].createElement("label", { htmlFor: id },
                React__default["default"].createElement(TextLabel, { size: "m" },
                    label,
                    " ",
                    required && React__default["default"].createElement("span", { className: "required" }, " *")))),
            React__default["default"].createElement("div", { className: "input-box" }, React__default["default"].Children.map(children, function (child) {
                return React__default["default"].cloneElement(child, { state: state });
            })),
            helperText && (React__default["default"].createElement(Text, { type: "body", size: "s", className: ['helper-text', (disabled && 'disabled') || state].join(' ') },
                state === 'error' && (React__default["default"].createElement("div", { className: "icon-error" },
                    React__default["default"].createElement(ErrorCircleLineBoldIcon_1, null))),
                state === 'success' && (React__default["default"].createElement("div", { className: "icon-success" },
                    React__default["default"].createElement(CheckCircleLineBoldIcon_1, null))),
                React__default["default"].createElement("span", { className: "text" }, helperText))))));
};

var SearchBar = function (_a) {
    var id = _a.id, size = _a.size, placeholder = _a.placeholder, disabled = _a.disabled, fullWidth = _a.fullWidth, resetButton = _a.resetButton, align = _a.align, onChange = _a.onChange;
    return (React__default["default"].createElement("div", { className: ["search-wrap", fullWidth && 'fullWidth', align && align].join(' ') },
        React__default["default"].createElement(TextField, { id: id, size: size, placeholder: placeholder, iconLeft: React__default["default"].createElement(SearchLineIcon_1, null), disabled: disabled, onChange: onChange, resetButton: resetButton })));
};

var Snackbar = function (_a) {
    var contents = _a.contents, closeButton = _a.closeButton, actionButtonData = _a.actionButtonData, iconLeft = _a.iconLeft, align = _a.align, open = _a.open, onClose = _a.onClose;
    var resolveOnClose = function () {
        if (!onClose) {
            return;
        }
        onClose();
    };
    var timer = React$1.useRef(null);
    var clearSnackTimer = function () { return clearTimeout(timer.current); };
    var startSnackTimer = function () {
        return (timer.current = setTimeout(resolveOnClose, 3000));
    };
    var onMouseOver = function () {
        clearSnackTimer();
    };
    var onMouseLeave = function () {
        startSnackTimer();
    };
    React$1.useEffect(function () {
        if (open) {
            startSnackTimer();
        }
    }, [open]);
    return (React__default["default"].createElement("div", { className: [
            'snackbar-box',
            "snackbar-".concat(align ? align : 'bottom-left'),
            open ? 'open' : 'close',
        ].join(' '), onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        React__default["default"].createElement("div", { className: "snackbar__left-box" },
            iconLeft && iconLeft,
            React__default["default"].createElement(Text, { type: "body", size: "m" }, contents)),
        (actionButtonData || closeButton) && (React__default["default"].createElement("div", { className: "snackbar__right-box" },
            actionButtonData && (React__default["default"].createElement(Button, { size: "s", type: "ghost", onClick: actionButtonData.onClickAction }, actionButtonData.label)),
            closeButton && (React__default["default"].createElement(Button, { iconOnly: React__default["default"].createElement(CloseLineIcon_1, null), size: "s", type: "text", isIconMode: true, onClick: resolveOnClose }))))));
};

function TabPanel(_a) {
    var contents = _a.contents;
    return React__default["default"].createElement("div", { className: "tab-panel" }, contents);
}

function Tab(_a) {
    var size = _a.size, widthFixed = _a.widthFixed, selectValue = _a.selectValue, tabData = _a.tabData;
    var _b = React$1.useState('l'), tabSize = _b[0], setTabSize = _b[1];
    var _c = React$1.useState(''), selectTab = _c[0], setSelectTab = _c[1];
    var _d = React$1.useState(0), tabMoveSize = _d[0], setTabMoveSize = _d[1];
    var _e = React$1.useState(0), tabBarListItemWidth = _e[0], setTabBarListItemWidth = _e[1];
    var onClickTabBarItem = function (id, state) {
        if (state === 'disabled') {
            return;
        }
        setSelectTab(id);
    };
    var onTabStateFilter = function (state) {
        if (typeof state == 'string') {
            return state;
        }
        else {
            return 'default';
        }
    };
    var onChickControlButton = function (type) {
        var tabBar = document.querySelector('.tab-bar');
        var tabBarList = document.querySelector('.tab-bar__list');
        var tabBarWidth = tabBar.clientWidth;
        var tabBarListWidth = tabBarList.clientWidth;
        var tabControlPrev = document.querySelector('.control.prev');
        var tabControlNext = document.querySelector('.control.next');
        if (type === 'next') {
            if (tabMoveSize > tabBarListWidth - tabBarWidth) {
                tabBarList.style.left = "-".concat(tabBarListWidth - tabBarWidth, "px");
                tabControlNext.style.display = 'none';
            }
            else {
                if (tabMoveSize === 0) {
                    tabBarList.style.left = "-".concat(tabBarListItemWidth, "px");
                }
                else {
                    tabBarList.style.left = "-".concat(tabMoveSize, "px");
                }
                setTabMoveSize(tabMoveSize + tabBarListItemWidth);
            }
            tabControlPrev.style.display = 'block';
        }
        else if (type === 'prev') {
            if (tabMoveSize < tabBarListWidth - tabBarWidth) {
                setTabMoveSize(tabMoveSize - tabBarListItemWidth);
                if (tabMoveSize <= 0) {
                    tabBarList.style.left = "0px";
                    tabControlPrev.style.display = 'none';
                    setTabMoveSize(tabBarListItemWidth);
                }
                else {
                    tabBarList.style.left = "-".concat(tabMoveSize, "px");
                }
            }
            else {
                tabBarList.style.left = "-".concat(tabBarListWidth - tabBarWidth - tabBarListItemWidth, "px");
                setTabMoveSize(tabBarListWidth - tabBarWidth - tabBarListItemWidth * 2);
                tabControlNext.style.display = 'block';
            }
        }
    };
    React$1.useEffect(function () {
        var tabBar = document.querySelector('.tab-bar');
        var tabBarList = document.querySelector('.tab-bar__list');
        var tabControlNext = document.querySelector('.control.next');
        if (tabBarList) {
            var tabBarWidth = tabBar.clientWidth;
            var tabBarListWidth = tabBarList.clientWidth;
            setTabBarListItemWidth(tabBarList.children[0].clientWidth);
            if (tabBarWidth < tabBarListWidth) {
                tabControlNext.style.display = 'block';
            }
            setTabMoveSize(tabBarList.children[0].clientWidth);
        }
    }, []);
    React$1.useEffect(function () {
        if (size === ('l'  )) {
            setTabSize(size);
        }
    }, [size]);
    React$1.useEffect(function () {
        if (selectValue) {
            setSelectTab(selectValue);
        }
    }, [selectValue]);
    return (React__default["default"].createElement("div", { className: ['tab-wrap'].join(' ') },
        React__default["default"].createElement("div", { className: [
                'tab-bar',
                widthFixed ? 'fixed' : '',
                "tab-bar__".concat(size),
            ].join(' ') },
            React__default["default"].createElement("div", { className: "control prev" },
                React__default["default"].createElement(Button, { size: size === 's' ? 's' : 'm', type: "tertiary", iconOnly: React__default["default"].createElement(ArrowLeftLineIcon_1, null), isIconMode: true, onClick: function () { return onChickControlButton('prev'); } })),
            React__default["default"].createElement("div", { className: "tab-bar__list" }, tabData.map(function (tabitem) {
                return (React__default["default"].createElement("button", { className: [
                        "tab-".concat(size, "-").concat(onTabStateFilter(tabitem.state)),
                        tabitem.id === selectTab ? 'checked' : '',
                    ].join(' '), key: tabitem.id, onClick: function () { return onClickTabBarItem(tabitem.id, tabitem.state); } },
                    tabitem.icon && tabitem.icon,
                    React__default["default"].createElement(TextLabel, { size: (tabSize === 'l' && 'xl') ||
                            (tabSize === 'm' && 'l') ||
                            (tabSize === 's' && 'm') ||
                            'l' }, tabitem.label),
                    tabitem.count && (React__default["default"].createElement("span", { className: "chips" }, tabitem.count))));
            })),
            React__default["default"].createElement("div", { className: "control next" },
                React__default["default"].createElement(Button, { size: size === 's' ? 's' : 'm', type: "tertiary", iconOnly: React__default["default"].createElement(ArrowRightLineIcon_1, null), isIconMode: true, onClick: function () { return onChickControlButton('next'); } }))),
        tabData.map(function (tabitem) {
            return tabitem.id === selectTab && (React__default["default"].createElement(TabPanel, { contents: tabitem.children, key: tabitem.id }));
        })));
}

var Tooltip = function (_a) {
    var title = _a.title, text = _a.text, customContent = _a.customContent, children = _a.children, align = _a.align, arrow = _a.arrow, mode = _a.mode;
    var _b = React$1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var onMouseOver = function () {
        setIsOpen(true);
    };
    var onMouseLeave = function () {
        setIsOpen(false);
    };
    return (React__default["default"].createElement("div", { className: ['tooltip-wrap', align && "tooltip-".concat(align)].join(' '), onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        children,
        React__default["default"].createElement("div", { className: [
                'tooltip-box',
                isOpen ? 'open' : 'close',
                arrow && 'arrow',
                "tooltip-box-".concat(mode ? mode : 'dark-mode'),
            ].join(' ') }, customContent ? (customContent) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            title && (React__default["default"].createElement(Text, { type: "body", size: "l" }, title)),
            text && (React__default["default"].createElement(Text, { type: "body", size: "m" }, text)))))));
};

exports.Alert = Alert;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxIcon = CheckboxIcon;
exports.Container = Container;
exports.Divider = Divider;
exports.Dropdown = Dropdown;
exports.Form = Form;
exports.InputGroup = InputGroup;
exports.List = List;
exports.Modal = Modal;
exports.Pagination = Pagination;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.SearchBar = SearchBar;
exports.Snackbar = Snackbar;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Text = Text;
exports.TextField = TextField;
exports.TextLabel = TextLabel;
exports.Title = Title;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map