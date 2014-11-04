/* 
 * Formstone v0.0.1 - 2014-11-04 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){this.on(n.mouseEnter,a,e)}function d(){j(),this.off(n.namespace)}function e(a){j();var b=a.data;b.left=a.pageX,b.top=a.pageY,b.timer=o.startTimer(b.timer,b.delay,function(){h(b)}),b.$el.one(n.mouseLeave,b,f)}function f(a){var b=a.data;o.clearTimer(b.timer),j()}function g(a){var b=(a.data,{left:a.pageX,top:a.pageY});i(b)}function h(c){j();var d="";d+='<div class="',d+=[m.base,m[c.direction]].join(" "),d+='">',d+='<div class="'+m.content+'">',d+=c.formatter.call(c.$el,c),d+='<span class="'+m.caret+'"></span>',d+="</div>",d+="</div>",p={$tipper:a(d),$el:c.$el},b.$body.append(p.$tipper);var e=p.$tipper.find(o.getClassName(m.content)),f=p.$tipper.find(o.getClassName(m.caret)),h=c.$el.offset(),k=c.$el.outerHeight(),l=c.$el.outerWidth(),q=0,r=0,s=0,t=0,u=!1,v=!1,w=f.outerHeight(!0),x=f.outerWidth(!0),y=e.outerHeight(!0),z=e.outerWidth(!0);"right"===c.direction||"left"===c.direction?(v=(y-w)/2,t=-y/2,"right"===c.direction?s=c.margin:"left"===c.direction&&(s=-(z+c.margin))):(u=(z-x)/2,s=-z/2,"bottom"===c.direction?t=c.margin:"top"===c.direction&&(t=-(y+c.margin))),e.css({top:t,left:s}),f.css({top:v,left:u}),c.follow?c.$el.on(n.mouseMove,c,g).trigger(n.mouseMove):c.match?"right"===c.direction||"left"===c.direction?(r=c.top,"right"===c.direction?q=h.left+l:"left"===c.direction&&(q=h.left)):(q=c.left,"bottom"===c.direction?r=h.top+k:"top"===c.direction&&(r=h.top)):"right"===c.direction||"left"===c.direction?(r=h.top+k/2,"right"===c.direction?q=h.left+l:"left"===c.direction&&(q=h.left)):(q=h.left+l/2,"bottom"===c.direction?r=h.top+k:"top"===c.direction&&(r=h.top)),p.$tipper.addClass(m.visible),i({top:r,left:q})}function i(a){p&&p.$tipper.css(a)}function j(){p&&(p.$el.off([n.mouseMove,n.mouseLeave].join(" ")),p.$tipper.remove(),p=null)}function k(){return this.data("title")}var l=b.Plugin("tipper",{widget:!0,defaults:{delay:0,direction:"top",follow:!1,formatter:k,margin:15,match:!1},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:c,_destruct:d}}),m=l.classes,n=l.events,o=(l.methods,l.functions),p=null}(jQuery,Formstone);