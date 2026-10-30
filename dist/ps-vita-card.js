function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",_=u.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const r=this.constructor;if(!1===i&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??$)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,_?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,U=document,O=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),q=L(1),V=L(2),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),G=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(o.lastIndex=h,c=o.exec(s),null!==c);)h=o.lastIndex,o===R?"!--"===c[1]?o=H:void 0!==c[1]?o=I:void 0!==c[2]?(B.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=j):void 0!==c[3]&&(o=j):o===j?">"===c[0]?(o=n??R,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?j:'"'===c[3]?z:D):o===z||o===D?o=j:o===H||o===I?o=R:(o=j,n=void 0);const d=o===j&&t[e+1].startsWith("/>")?" ":"";r+=o===R?s+k:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+C+d):s+C+(-2===l?e:d)}return[K(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=Q.createElement(c,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[r++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?st:"?"===o[1]?it:"@"===o[1]?nt:et}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),J.nextNode(),a.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===W)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=T(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=X(t,n._$AS(t,e.values),n,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);J.currentNode=i;let n=J.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=J.nextNode(),r++)}return J.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new tt(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=X(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=X(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),r||=!T(a)||a!==this._$AH[o],a===F?t=F:t!==F&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends et{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===W)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Q,tt),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new tt(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},dt=(t=ht,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return pt({...t,state:!0,attribute:!1})}const ft="ps-vita-card",gt=["battery_level","battery_charging","battery_temp","battery_minutes","firmware","model","uptime","plugin_uptime","in_game","title_id","game_name","link","ip","ssid","rssi"],_t=new Set(["battery_charging","in_game","link"]),mt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)})`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--ha-card-background, #14161c);
    color: var(--primary-text-color, #e5e7eb);
    font-family: var(--paper-font-body1_-_font-family, sans-serif);
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 8px;
  }

  .device {
    width: 100%;
    aspect-ratio: 600 / 240;
  }

  .screen-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f8fafc;
    font-size: 14px;
    line-height: 1.25;
    padding: 8px;
    box-sizing: border-box;
  }

  .state-line {
    text-align: center;
    font-size: 13px;
    color: var(--secondary-text-color, #9ca3af);
    margin: 8px 0 12px;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  .stat {
    background: var(--ha-card-background, #1f2937);
    border: 1px solid var(--divider-color, #374151);
    border-radius: 10px;
    padding: 8px 6px;
    text-align: center;
  }
  .stat-value {
    font-size: 16px;
    font-weight: 700;
  }
  .stat-sub {
    font-size: 11px;
    color: var(--secondary-text-color, #9ca3af);
    margin-top: 2px;
  }

  .bar {
    margin-top: 12px;
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--secondary-text-color, #9ca3af);
  }
  .bar .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4b5563;
    margin-right: 4px;
  }
  .bar .dot.on { background: #22c55e; }
  .bar .dot.bad { background: #ef4444; }

  @media (max-width: 480px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
  }
`;const yt={"state.playing":"Playing","state.standby":"In LiveArea","state.unknown":"Unknown","state.charging":"Charging","stat.battery":"Battery","stat.battery_temp":"Battery temperature","stat.rssi":"Wi-Fi","stat.plugin_uptime":"Plugin uptime","stat.battery_minutes":"Battery remaining","stat.uptime":"System uptime","stat.firmware":"Firmware","stat.model":"Model","stat.ssid":"SSID","stat.ip":"IP address","stat.title_id":"Title ID","stat.game_name":"Game","indicator.link_up":"Network connected","indicator.link_down":"Network down","indicator.charging":"Charging","indicator.unavailable":"Plugin offline","editor.entity":"Entity prefix (device slug)","editor.name":"Name","editor.language":"Language"},$t={"state.playing":"Jogando","state.standby":"Na LiveArea","state.unknown":"Desconhecido","state.charging":"Carregando","stat.battery":"Bateria","stat.battery_temp":"Temperatura da bateria","stat.rssi":"Wi-Fi","stat.plugin_uptime":"Tempo do plugin","stat.battery_minutes":"Bateria restante","stat.uptime":"Uptime do sistema","stat.firmware":"Firmware","stat.model":"Modelo","stat.ssid":"SSID","stat.ip":"Endereço IP","stat.title_id":"Title ID","stat.game_name":"Jogo","indicator.link_up":"Rede conectada","indicator.link_down":"Sem rede","indicator.charging":"Carregando","indicator.unavailable":"Plugin offline","editor.entity":"Prefixo das entidades (slug do dispositivo)","editor.name":"Nome","editor.language":"Idioma"},vt={en:yt,"pt-BR":$t,pt:$t};function bt(t,e){return(vt[e??""]??yt)[t]??yt[t]??t}const At=new Set(["","unknown","unavailable"]),wt=new Set(["","unknown","unavailable","-"]);function xt(t,e){return e?t.states[e]?.state??"":""}function St(t){return wt.has(t)}const Et=new Set(["","-","unknown","unavailable"]);console.info("%c PS-VITA-CARD %c v0.1.0 ","color: white; background: #1f2937; font-weight: 700;","color: white; background: #0070d1; font-weight: 700;");const Ct=window;Ct.customCards=Ct.customCards||[],Ct.customCards.push({type:ft,name:"PS Vita Card",description:"Card for jailbroken PS Vita via ps-vita-mqtt-plugin MQTT integration",preview:!1,documentationURL:"https://github.com/hudsonbrendon/ps-vita-card",getEntitySuggestion:(t,e)=>{const s=function(t,e){const s=t.entities?.[e];if(s&&"mqtt"!==s.platform)return;const i=/^sensor\.(.+)_battery_level$/.exec(e);if(!i)return;const n=i[1];return t.states[`binary_sensor.${n}_battery_charging`]?n:void 0}(t,e);return s?{config:{type:`custom:${ft}`,entity:s}}:null}});const Pt=[{entity:"battery_level",unit:"%",subtitle:"stat.battery"},{entity:"battery_temp",unit:"°C",multiply:.01,precision:1,subtitle:"stat.battery_temp"},{entity:"rssi",unit:" dBm",subtitle:"stat.rssi"},{entity:"plugin_uptime",suffix:" s",subtitle:"stat.plugin_uptime"}];let kt=class extends ct{static{this.styles=mt}setConfig(t){if(!t)throw new Error("Invalid config");this._config=t,this._entities=function(t){const e={},s=t.entities??{},i=t.entity?.trim()??"";for(const t of gt)if(s[t])e[t]=s[t];else if(i){const s=_t.has(t)?"binary_sensor":"sensor";e[t]=`${s}.${i}_${t}`}else e[t]="";return e}(t)}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"language",selector:{select:{options:["en","pt-BR"],mode:"dropdown"}}}],computeLabel:t=>bt(`editor.${t.name}`)}}getGridOptions(){return{columns:6,rows:4,min_columns:4,min_rows:3}}willUpdate(t){t.has("hass")&&this.toggleAttribute("dark-mode",Boolean(this.hass?.themes?.darkMode))}_displayStat(t,e){if(!e.unit&&!e.multiply&&void 0===e.precision&&!e.suffix&&t&&this.hass?.formatEntityState&&!["unknown","unavailable",""].includes(t.state))try{return this.hass.formatEntityState(t)}catch{}return function(t,e){if(!t||Et.has(t.state))return"—";const s=t.state,i=Number(s);if(Number.isFinite(i)){const t=i*(e.multiply??1);return`${null!=e.precision?t.toFixed(e.precision):String(t)}${e.unit??""}${e.suffix??""}`}return`${s}${e.suffix??""}`}(t,e)}static getStubConfig(){return{type:`custom:${ft}`,entity:"psvita_sala"}}getCardSize(){return 4}resolveStatEntityId(t){if(!this._entities)return t.entity;const e=t.entity;return this._entities[e]??t.entity}renderScreen(t){const e=this._entities,s=this.hass,i=s.states[e.game_name]?.state??"",n=new Set(["","-","unknown","unavailable"]).has(i)?bt("state.standby",t):i;return q`<div class="screen-content">${n}</div>`}renderStats(t){const e=(this._config?.stats??Pt).slice(0,4);return q`
      <div class="stats">
        ${e.map(e=>{const s=this.resolveStatEntityId(e),i=this._displayStat(this.hass.states[s],e);return q`
            <div class="stat">
              <div class="stat-value">${i}</div>
              <div class="stat-sub">${bt(e.subtitle,t)}</div>
            </div>
          `})}
      </div>
    `}renderIndicators(t){const e=this._entities,s=this.hass,i=s.states[e.link]?.state,n=s.states[e.battery_charging]?.state,r="on"===i,o="on"===n;return q`
      <div class="bar">
        <span><span class="dot ${r?"on":"bad"}"></span>${bt(r?"indicator.link_up":"indicator.link_down",t)}</span>
        ${o?q`<span><span class="dot on"></span>${bt("indicator.charging",t)}</span>`:null}
      </div>
    `}render(){if(!this._config||!this._entities||!this.hass)return q``;const t=this._config.language??this.hass.language??"en";return q`
      <ha-card>
        ${this._config.name?q`<div class="name">${this._config.name}</div>`:null}
        <div class="device">${e=this.renderScreen(t),V`
    <svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PS Vita">
      <defs>
        <linearGradient id="psv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1f2937"/>
          <stop offset="1" stop-color="#0b1220"/>
        </linearGradient>
        <linearGradient id="psv-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0b132b"/>
          <stop offset="1" stop-color="#1b2640"/>
        </linearGradient>
      </defs>

      <!-- Body -->
      <rect x="2" y="20" width="596" height="200" rx="40" ry="40"
            fill="url(#psv-body)" stroke="#000" stroke-width="2"/>

      <!-- Screen -->
      <rect x="120" y="40" width="360" height="160" rx="6"
            fill="url(#psv-screen)" stroke="#0a0f1d" stroke-width="2"/>
      <foreignObject x="120" y="40" width="360" height="160">
        ${e}
      </foreignObject>

      <!-- Left stick -->
      <circle cx="60" cy="120" r="18" fill="#111827" stroke="#4b5563" stroke-width="1.5"/>
      <circle cx="60" cy="120" r="10" fill="#374151"/>

      <!-- Right stick -->
      <circle cx="540" cy="120" r="18" fill="#111827" stroke="#4b5563" stroke-width="1.5"/>
      <circle cx="540" cy="120" r="10" fill="#374151"/>

      <!-- D-pad -->
      <g fill="#1f2937" stroke="#4b5563" stroke-width="1">
        <rect x="50" y="60" width="20" height="40" rx="3"/>
        <rect x="40" y="70" width="40" height="20" rx="3"/>
      </g>

      <!-- Face buttons -->
      <circle cx="560" cy="60" r="6" fill="#16a34a"/>
      <circle cx="540" cy="80" r="6" fill="#3b82f6"/>
      <circle cx="580" cy="80" r="6" fill="#dc2626"/>
      <circle cx="560" cy="100" r="6" fill="#ec4899"/>

      <!-- PS button -->
      <circle cx="300" cy="220" r="6" fill="#374151"/>
    </svg>
  `}</div>
        <div class="state-line">${function(t,e,s){const i=xt(t,e.in_game).toLowerCase();if(At.has(i)||"off"===i)return bt("state.standby",s);if("on"===i){const i=xt(t,e.game_name);if(!St(i))return`${bt("state.playing",s)} ${i}`;const n=xt(t,e.title_id);return St(n)?bt("state.playing",s):`${bt("state.playing",s)} ${n}`}return bt("state.standby",s)}(this.hass,this._entities,t)}</div>
        ${this.renderStats(t)}
        ${this.renderIndicators(t)}
      </ha-card>
    `;var e}};t([pt({attribute:!1})],kt.prototype,"hass",void 0),t([ut()],kt.prototype,"_config",void 0),t([ut()],kt.prototype,"_entities",void 0),kt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(ft)],kt);export{kt as PSVitaCard};
