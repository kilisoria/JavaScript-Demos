webpackJsonp([2],{54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),r=n(55);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},55:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,p=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(p=(i<3?r(p):i>3?r(e,n,p):r(e,n))||p);return i>3&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),i=n(0),p=n(56),c=n(57),a=function(){function t(){}return t=o([i.NgModule({bootstrap:[p.AppComponent],imports:[r.BrowserModule],declarations:[p.AppComponent,c.ChildComponent]})],t)}();e.AppModule=a},56:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,p=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(p=(i<3?r(p):i>3?r(e,n,p):r(e,n))||p);return i>3&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(){function t(){}return t=o([r.Component({selector:"my-app",styles:["\n\t\t:host {\n\t\t\tanimation: enter-animation 10s ease ;\n\t\t\tborder: 3px solid #EAEAEA ;\n\t\t\tbox-sizing: border-box ;\n\t\t\tdisplay: block ;\n\t\t\tfont-size: 16px ;\n\t\t\tpadding: 20px 20px 20px 20px ;\n\t\t}\n\n\t\t@keyframes enter-animation {\n\t\t\tfrom {\n\t\t\t\topacity: 0.0 ;\n\t\t\t}\n\t\t\tto {\n\t\t\t\topacity: 1.0 ;\n\t\t\t}\n\t\t}\n\n\t\tchild-component {\n\t\t\tmargin: 20px 0px 20px 0px ;\n\t\t}\n\t"],template:'\n\t\t<div>\n\t\t\tThis is the <strong>App</strong> component.\n\t\t</div>\n\n\t\t<child-component></child-component>\n\n\t\t<div>\n\t\t\tWhen this runs, you will see that the <strong>height</strong> animation of\n\t\t\tthe child-component <strong>overrides the opacity</strong> animation of the\n\t\t\tapp component because they are both named <strong>"enter-animation"</strong>.\n\t\t</div>\n\t'})],t)}();e.AppComponent=i},57:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,p=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(p=(i<3?r(p):i>3?r(e,n,p):r(e,n))||p);return i>3&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(){function t(){}return t=o([r.Component({selector:"child-component",styles:["\n\t\t:host {\n\t\t\tanimation: enter-animation 10s ease ;\n\t\t\tborder: 3px solid #CCCCCC ;\n\t\t\tbox-sizing: border-box ;\n\t\t\tdisplay: block ;\n\t\t\theight: 100px ;\n\t\t\tpadding: 20px 20px 20px 20px ;\n\t\t}\n\n\t\t@keyframes enter-animation {\n\t\t\tfrom {\n\t\t\t\theight: 0px ;\n\t\t\t}\n\t\t\tto {\n\t\t\t\theight: 100px ;\n\t\t\t}\n\t\t}\n\t"],template:"\n\t\tThis is the <strong>Child</strong> component.\n\t"})],t)}();e.ChildComponent=i}},[54]);