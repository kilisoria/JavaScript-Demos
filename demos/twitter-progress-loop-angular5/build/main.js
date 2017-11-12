webpackJsonp([1],{52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),o=n(53);r.platformBrowserDynamic().bootstrapModule(o.AppModule)},53:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),i=n(0),c=n(54),s=n(56),a=function(){function t(){}return t=r([i.NgModule({bootstrap:[c.AppComponent],imports:[o.BrowserModule],declarations:[c.AppComponent,s.ProgressIndicatorComponent]})],t)}();e.AppModule=a},54:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(){function t(){this.percent=0}return t=r([o.Component({selector:"my-app",styles:[n(55)],template:'\n\t\t<textarea \n\t\t\tmaxlength="140"\n\t\t\t(input)="percent = ( $event.target.value.length / 140 * 100 )"\n\t\t></textarea>\n\n\t\t<div class="indicators">\n\t\t\t<progress-indicator [percent]="percent"></progress-indicator>\n\t\t\t<progress-indicator [percent]="percent" color="magenta"></progress-indicator>\n\t\t\t<progress-indicator [percent]="percent" [style.color]="\'orange\'"></progress-indicator>\n\t\t\t<progress-indicator [percent]="percent" backgroundColor="#F0F0F0"></progress-indicator>\n\t\t\t<progress-indicator [percent]="percent" backgroundColor="none"></progress-indicator>\n\t\t</div>\n\n\t\t<progress-indicator \n\t\t\t[percent]="percent"\n\t\t\t[style.width.px]="100"\n\t\t\t[style.height.px]="100">\n\t\t</progress-indicator>\n\t'})],t)}();e.AppComponent=i},55:function(t,e){t.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\ntextarea {\n  height: 100px ;\n  font-size: inherit ;\n  width: 450px ;\n}\ndiv.indicators {\n  display: flex ;\n  margin: 7px 0px 20px 0px ;\n}\ndiv.indicators > * {\n  margin-right: 15px ;\n}\n"},56:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=n(0),s=function(){function t(){this.backgroundColor="#CCD6DD",this.color="currentColor",this.dashArray="0,100",this.percent=0}return t.prototype.ngOnChanges=function(t){isNaN(this.percent)||this.percent<0?this.percent=0:this.percent>100&&(this.percent=100),"none"===this.backgroundColor&&(this.backgroundColor="");var e=2*Math.PI*9,n=e*this.percent/100;this.dashArray=n+",100"},t=r([c.Component({selector:"progress-indicator",inputs:["percent","color","backgroundColor"],changeDetection:i.ChangeDetectionStrategy.OnPush,styles:[n(57)],template:'\n\t\t<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">\n\t\t\t<circle\n\t\t\t\t*ngIf="backgroundColor"\n\t\t\t\tcx="10"\n\t\t\t\tcy="10"\n\t\t\t\tr="9"\n\t\t\t\tfill="none"\n\t\t\t\t[attr.stroke]="backgroundColor"\n\t\t\t\tstroke-width="2">\n\t\t\t</circle>\n\n\t\t\t<circle\n\t\t\t\tcx="10"\n\t\t\t\tcy="10"\n\t\t\t\tr="9"\n\t\t\t\tfill="none"\n\t\t\t\t[attr.stroke]="color"\n\t\t\t\tstroke-width="2"\n\t\t\t\tstroke-linecap="round"\n\t\t\t\t[attr.stroke-dasharray]="dashArray"\n\t\t\t\ttransform="rotate( -90, 10, 10 )"\n\t\t\t\t[class.empty]="! percent">\n\t\t\t</circle>\n\t\t</svg>\n\t'}),o("design:paramtypes",[])],t)}();e.ProgressIndicatorComponent=s},57:function(t,e){t.exports=":host {\n  color: #1DA1F2 ;\n  display: inline-block;\n  height: 20px ;\n  width: 20px ;\n}\nsvg {\n  display: block ;\n  height: 100% ;\n  width: 100% ;\n}\ncircle {\n  opacity: 1.0 ;\n  transition: stroke-dasharray ease 150ms, opacity ease-out 200ms;\n}\ncircle.empty {\n  /*\n\t\tWhen the SVG circle has a first-dash of zero, it's still visible in the stroke.\n\t\tAs such, we want to hide the circle when there is no percentage. But, we don't\n\t\twant to strip it out of the page, otherwise the transition won't work for the\n\t\t\"stroke-dasharray\" property. As such, we'll use the opacity so that we can hide\n\t\tit without janking the transition.\n\t*/\n  opacity: 0.0 ;\n}\n"}},[52]);