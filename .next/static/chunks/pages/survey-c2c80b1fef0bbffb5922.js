(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{8014:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return R}});var n=s(5893),r=s(7757),o=s.n(r);function t(e,a,s,n,r,o,t){try{var i=e[o](t),l=i.value}catch(c){return void s(c)}i.done?a(l):Promise.resolve(l).then(n,r)}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,n=new Array(a);s<a;s++)n[s]=e[s];return n}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(e){if("string"===typeof e)return i(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=s(6156),u=s(1163),d=s(7294),m=s(9459),p=s.n(m),h=function(e){var a=e.collectAnswers,s=(0,d.useState)(!1),r=s[0],o=s[1],t=function(e){switch(e.target.value){case"Work":return o(1);case"Gap Year":return o(2);case"University":return o(3);case"Military":return o(4);default:return r}};return(0,d.useEffect)((function(){a(r)}),[r]),(0,n.jsxs)("div",{className:p().question,children:[(0,n.jsx)("span",{children:"1 / 6"}),(0,n.jsx)("legend",{children:"Which Post-Secondary School Option do you think you will pursue?"}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"work",name:"pursue",value:"Work",checked:1===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"work",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Work"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"gap year",name:"pursue",value:"Gap Year",checked:2===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"gap year",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Gap Year"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"university",name:"pursue",value:"University",checked:3===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"university",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"University"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"military",name:"pursue",value:"Military",checked:4===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"military",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Military"]})]})]})},f=function(e){var a=e.collectAnswers,s=(0,d.useState)(!1),r=s[0],o=s[1],t=function(e){switch(e.target.value){case"absolutely":return o(1);case"planning":return o(2);case"debating":return o(3);case"help":return o(4);default:return r}};return(0,d.useEffect)((function(){a(r)}),[r]),(0,n.jsxs)("div",{className:p().question,children:[(0,n.jsx)("span",{children:"2 / 6"}),(0,n.jsx)("legend",{children:"How sure are you about your plans?"}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"absolutely",name:"sure",value:"absolutely",checked:1===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"absolutely",children:[(0,n.jsx)("span",{className:p().specialBtns}),"Absolutely sure & I have ",(0,n.jsx)("br",{className:p().brs2}),"already been planning"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"planning",name:"sure",value:"planning",checked:2===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"planning",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Sure & need to start planning"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"debating",name:"sure",value:"debating",checked:3===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"debating",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Debating options"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"help",name:"sure",value:"help",checked:4===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"help",children:[(0,n.jsx)("span",{className:p().specialBtns}),"No idea & I would like ",(0,n.jsx)("br",{className:p().brs2}),"some help exploring my options"]})]})]})},x=function(e){var a=e.collectAnswers,s=(0,d.useState)([]),r=s[0],o=s[1],t={exploration:{value:1,name:"exploration"},searching:{value:2,name:"searching"},scholarships:{value:3,name:"scholarships"},apprenticeship:{value:4,name:"apprenticeship"},enlistment:{value:5,name:"enlistment"},opportunities:{value:6,name:"opportunities"},none:{value:7,name:"none"}};(0,d.useEffect)((function(){a(r)}),[r]);var i=function(e){var a=t[e.target.value],s=a.value,n=a.name;if(e.target.value===n){if(r.includes(s))return o((function(e){return e.filter((function(e){return e!==s}))}));o((function(e){return[].concat(l(e),[s])}))}};return(0,n.jsxs)("div",{className:p().question,children:[(0,n.jsx)("span",{children:"3 / 6"}),(0,n.jsx)("legend",{children:"Which aspects of post-secondary school planning would you like to help with?"}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"exploration",name:"aspects",value:"exploration",checked:r.forEach((function(e){return 1===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"exploration",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Career & skills exploration"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"searching",name:"aspects",value:"searching",checked:r.forEach((function(e){return 2===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"searching",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"University searching"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"scholarships",name:"aspects",value:"scholarships",checked:r.forEach((function(e){return 3===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"scholarships",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Financial aid & scholarships"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"apprenticeship",name:"aspects",value:"apprenticeship",checked:r.forEach((function(e){return 4===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"apprenticeship",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Exploring apprenticeship"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"enlistment",name:"aspects",value:"enlistment",checked:r.forEach((function(e){return 5===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"enlistment",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Exploring military enlistment"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"opportunities",name:"aspects",value:"opportunities",checked:r.forEach((function(e){return 6===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"opportunities",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Gap Year opportunities"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"checkbox",id:"none",name:"aspects",value:"none",checked:r.forEach((function(e){return 7===e})),onChange:i}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"none",children:[(0,n.jsx)("span",{className:p().specialBtns}),"None - I've totally got",(0,n.jsx)("br",{className:p().brs})," a handle on all of it"]})]})]})},j=function(e){var a=e.collectAnswers,s=(0,d.useState)(!1),r=s[0],o=s[1],t=function(e){switch(e.target.value){case"relaxed":return o(1);case"little":return o(2);case"worried":return o(3);case"really":return o(4);case"anxious":return o(5);default:return r}};return(0,d.useEffect)((function(){a(r)}),[r]),(0,n.jsxs)("div",{className:"".concat(p().question4," ").concat(p().question),children:[(0,n.jsx)("span",{children:"4 / 6"}),(0,n.jsx)("legend",{children:'On a scale of 1-5 how "stressed out" are you about the application process and getting in to the university you want?'}),(0,n.jsxs)("div",{className:p().questionContainer,children:[(0,n.jsxs)("div",{className:p().answers,children:[(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"1. no problem - I'm relaxed"})}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"2. a little worried"})}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"3. worried"})}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"4. really worried & anxious "})}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"5. so anxious that I'm losing sleep"})})]}),(0,n.jsxs)("div",{className:p().checks,children:[(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"relaxed",name:"stress",value:"relaxed",checked:1===r,onChange:t}),(0,n.jsx)("label",{className:p().formRadioLabel,htmlFor:"relaxed",children:(0,n.jsx)("span",{className:p().formRadioButton})})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"little",name:"stress",value:"little",checked:2===r,onChange:t}),(0,n.jsx)("label",{className:p().formRadioLabel,htmlFor:"little",children:(0,n.jsx)("span",{className:p().formRadioButton})})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"worried",name:"stress",value:"worried",checked:3===r,onChange:t}),(0,n.jsx)("label",{className:p().formRadioLabel,htmlFor:"worried",children:(0,n.jsx)("span",{className:p().formRadioButton})})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"really",name:"stress",value:"really",checked:4===r,onChange:t}),(0,n.jsx)("label",{className:p().formRadioLabel,htmlFor:"really",children:(0,n.jsx)("span",{className:p().formRadioButton})})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"anxious",name:"stress",value:"anxious",checked:5===r,onChange:t}),(0,n.jsx)("label",{className:p().formRadioLabel,htmlFor:"anxious",children:(0,n.jsx)("span",{className:p().formRadioButton})})]})]})]})]})},v=function(e){var a=e.collectAnswers,s=(0,d.useState)(""),r=s[0],o=s[1];return(0,d.useEffect)((function(){a(r)}),[r]),(0,n.jsxs)("div",{className:"".concat(p().question5," ").concat(p().question),children:[(0,n.jsx)("span",{children:"5 / 6"}),(0,n.jsx)("legend",{children:"If you wanted to study abroad, which country would you choose?"}),(0,n.jsx)("input",{onChange:function(e){return o(e.target.value)},value:r,required:!0,type:"text",placeholder:"Czechia, Germany etc.."})]})},y=function(e){var a=e.collectAnswers,s=(0,d.useState)(!1),r=s[0],o=s[1],t=function(e){"yes"===e.target.value?o(1):o(2)};return(0,d.useEffect)((function(){a(r)}),[r]),(0,n.jsxs)("div",{className:p().question,children:[(0,n.jsx)("span",{children:"6 / 6"}),(0,n.jsx)("legend",{children:"Was this survey useful ?"}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"Yes",name:"useful",value:"yes",checked:1===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"Yes",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"Yes"]})]}),(0,n.jsxs)("div",{className:p().formRadioGroup,children:[(0,n.jsx)("input",{className:p().formRadioInput,type:"radio",id:"No",name:"useful",value:"no",checked:2===r,onChange:t}),(0,n.jsxs)("label",{className:p().formRadioLabel,htmlFor:"No",children:[(0,n.jsx)("span",{className:p().formRadioButton}),"No"]})]})]})};function N(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function b(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?N(Object(s),!0).forEach((function(a){(0,c.Z)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var R=function(){var e=(0,d.useState)({}),a=e[0],s=e[1],r=(0,d.useState)(!1),i=r[0],c=r[1],m=(0,u.useRouter)(),N=function(){var e,s=(e=o().mark((function e(s){var n,r,t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),n=a.question6,r=a.question4,t=a.question3,i=a.question2,a.question1&&i&&r&&n&&0!=t.length){e.next=4;break}return e.abrupt("return",c(!0));case 4:m.push("/completion");case 5:case"end":return e.stop()}}),e)})),function(){var a=this,s=arguments;return new Promise((function(n,r){var o=e.apply(a,s);function i(e){t(o,n,r,i,l,"next",e)}function l(e){t(o,n,r,i,l,"throw",e)}i(void 0)}))});return function(e){return s.apply(this,arguments)}}();return(0,n.jsxs)("form",{onSubmit:N,className:p().container,children:[(0,n.jsx)("h1",{children:"What Does the Future Hold for You?"}),(0,n.jsx)(h,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question1:e})}))}}),(0,n.jsx)(f,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question2:e})}))}}),(0,n.jsx)(x,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question3:l(e)})}))}}),(0,n.jsx)(j,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question4:e})}))}}),(0,n.jsx)(v,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question5:e})}))}}),(0,n.jsx)(y,{collectAnswers:function(e){s((function(a){return b(b({},a),{},{question6:e})}))}}),(0,n.jsx)("div",{className:"".concat(p().error," ").concat(i?p().flex:p().hidden),children:"You need to answer all questions"}),(0,n.jsx)("button",{type:"submit",children:"Submit"})]})}},8058:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/survey",function(){return s(8014)}])},9459:function(e){e.exports={container:"Survey_container__2D1HP",question:"Survey_question__1pXhA",formRadioInput:"Survey_formRadioInput__26sEj",formRadioLabel:"Survey_formRadioLabel__3AICt",text:"Survey_text__riXW7",formRadioButton:"Survey_formRadioButton__3FH3h",specialBtns:"Survey_specialBtns__38flx",formRadioButtonv2:"Survey_formRadioButtonv2__2tNYH",wrapper:"Survey_wrapper__3TCKA",answers:"Survey_answers__1G4R_",checks:"Survey_checks__3KLh9",questionContainer:"Survey_questionContainer__1AhVC",question5:"Survey_question5__30tJw",brs:"Survey_brs__1T7x9",brs2:"Survey_brs2__3cbVG",question4:"Survey_question4__19UmI",error:"Survey_error__16RPb",flex:"Survey_flex__3lITz",hidden:"Survey_hidden__1uCWz"}},1163:function(e,a,s){e.exports=s(2441)}},function(e){e.O(0,[774,888,179],(function(){return a=8058,e(e.s=a);var a}));var a=e.O();_N_E=a}]);