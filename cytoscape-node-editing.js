!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cytoscapeNodeEditing=t():e.cytoscapeNodeEditing=t()}(self,(()=>{return e={123:(e,t,i)=>{var n;!function(){"use strict";var o,s,a=(o=Math.max,s=Date.now||function(){return(new Date).getTime()},function(e,t,i){var n,a,r,d,h,u,p,c,g,f=0,l=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(t=t<0?0:+t||0,!0===i){var v=!0;m=!1}else g=typeof(c=i),!c||"object"!=g&&"function"!=g||(v=!!i.leading,l="maxWait"in i&&o(+i.maxWait||0,t),m="trailing"in i?!!i.trailing:m);function y(t,i){i&&clearTimeout(i),a=u=p=void 0,t&&(f=s(),r=e.apply(h,n),u||a||(n=h=void 0))}function C(){var e=t-(s()-d);e<=0||e>t?y(p,a):u=setTimeout(C,e)}function x(){y(m,u)}function b(){if(n=arguments,d=s(),h=this,p=m&&(u||!v),!1===l)var i=v&&!u;else{a||v||(f=d);var o=l-(d-f),c=o<=0||o>l;c?(a&&(a=clearTimeout(a)),f=d,r=e.apply(h,n)):a||(a=setTimeout(x,o))}return c&&u?u=clearTimeout(u):u||t===l||(u=setTimeout(C,t)),i&&(c=!0,r=e.apply(h,n)),!c||u||a||(n=h=void 0),r}return b.cancel=function(){u&&clearTimeout(u),a&&clearTimeout(a),f=0,a=u=p=void 0},b}),r=function(e,t,i){if(e&&t&&i){var n=0;e("core","nodeEditing",(function(e){var s=this;if("get"===e)return o(s,"api");var r=[];const d=1.1;var h,u,p=t.extend(!0,{padding:5,undoable:!0,grappleSize:8,grappleColor:"green",grappleStrokeColor:"black",grappleStrokeWidth:0,grappleCornerRadius:0,inactiveGrappleStroke:"inside 1px blue",boundingRectangleLineDash:[4,8],boundingRectangleLineColor:"red",boundingRectangleLineWidth:1.5,zIndex:999,moveSelectedNodesOnKeyEvents:function(){return!0},minWidth:function(e){return e.data("resizeMinWidth")||15},minHeight:function(e){return e.data("resizeMinHeight")||15},getCompoundMinWidth:function(e){return e.css("min-width")},getCompoundMinHeight:function(e){return e.css("min-height")},getCompoundMinWidthBiasRight:function(e){return e.css("min-width-bias-right")},getCompoundMinWidthBiasLeft:function(e){return e.css("min-width-bias-left")},getCompoundMinHeightBiasTop:function(e){return e.css("min-height-bias-top")},getCompoundMinHeightBiasBottom:function(e){return e.css("min-height-bias-bottom")},setWidth:function(e,t){e.css("width",t)},setHeight:function(e,t){e.css("height",t)},setCompoundMinWidth:function(e,t){console.log("width"),e.css("min-width",t)},setCompoundMinHeight:function(e,t){console.log("height"),e.css("min-height",t)},setCompoundMinWidthBiasLeft:function(e,t){e.css("min-width-bias-left",t)},setCompoundMinWidthBiasRight:function(e,t){e.css("min-width-bias-right",t)},setCompoundMinHeightBiasTop:function(e,t){e.css("min-height-bias-top",t)},setCompoundMinHeightBiasBottom:function(e,t){e.css("min-height-bias-bottom",t)},isFixedAspectRatioResizeMode:function(e){return e.is(".fixedAspectRatioResizeMode")},isNoResizeMode:function(e){return e.is(".noResizeMode, :parent")},isNoControlsMode:function(e){return e.is(".noControlsMode")},cursors:{default:"default",inactive:"not-allowed",nw:"nw-resize",n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize"},resizeToContentCueEnabled:function(e){return!0},resizeToContentFunction:void 0,resizeToContentCuePosition:"bottom-right",resizeToContentCueImage:"/node_modules/cytoscape-node-editing/resizeCue.svg",enableMovementWithArrowKeys:!0,autoRemoveResizeToContentCue:!1},e),c=t(s.container()),g="cy-node-edge-editing-stage"+n;n++;var f,l,m=t('<div id="'+g+'"></div>');c.find("#"+g).length<1&&c.append(m),(f=i.stages.length<n?new i.Stage({id:"node-edge-editing-stage",container:g,width:c.width(),height:c.height()}):i.stages[n-1]).getChildren().length<1?(l=new i.Layer,f.add(l)):l=f.getChildren()[0];var v=a((function(){m.attr("height",c.height()).attr("width",c.width()).css({position:"absolute",top:0,left:0,"z-index":p.zIndex}),setTimeout((function(){var e=m.offset(),t=c.offset();m.css({top:-(e.top-t.top),left:-(e.left-t.left)}),l.getStage().setWidth(c.width()),l.getStage().setHeight(c.height())}),0)}),250);v(),t(window).on("resize",v);var y=function(e){this.parent=e,this.boundingRectangle=new C(e),this.oldPos={x:void 0,y:void 0},this.currentPos={x:0,y:0};var t=["topleft","topcenter","topright","centerright","bottomright","bottomcenter","bottomleft","centerleft"];this.grapples=[];for(var i=0;i<t.length;i++){var n=t[i],o=!0;(p.isNoResizeMode(e)||p.isFixedAspectRatioResizeMode(e)&&n.indexOf("center")>=0)&&(o=!1),this.grapples.push(new x(e,this,n,o))}!p.resizeToContentCueEnabled(e)||p.isNoResizeMode(e)||p.autoRemoveResizeToContentCue&&(!p.autoRemoveResizeToContentCue||B(e))||(this.resizeCue=new b(e,this)),l.draw()};y.prototype.update=function(){this.boundingRectangle.update();for(var e=0;e<this.grapples.length;e++)this.grapples[e].update();var t=this.boundingRectangle.parent,i=p.resizeToContentCueEnabled(t)&&!p.isNoResizeMode(t)&&(!p.autoRemoveResizeToContentCue||p.autoRemoveResizeToContentCue&&!B(t));this.resizeCue&&i?this.resizeCue.update():this.resizeCue&&!i?(this.resizeCue.unbindEvents(),this.resizeCue.shape.destroy(),delete this.resizeCue):!this.resizeCue&&i&&(this.resizeCue=new b(t,this)),l.draw()},y.prototype.remove=function(){this.boundingRectangle.shape.destroy(),delete this.boundingRectangle;for(var e=0;e<this.grapples.length;e++)this.grapples[e].unbindAllEvents(),this.grapples[e].shape.destroy();delete this.grapples,this.resizeCue&&(this.resizeCue.unbindEvents(),this.resizeCue.shape.destroy(),delete this.resizeCue),l.draw()};var C=function(e){this.parent=e,this.shape=null;var t=e.renderedPosition(),n=e.renderedOuterWidth()+P(),o=e.renderedOuterHeight()+P(),s={x:t.x-n/2,y:t.y-o/2},a=new i.Rect({x:s.x,y:s.y,width:n,height:o,stroke:p.boundingRectangleLineColor,strokeWidth:p.boundingRectangleLineWidth,dash:p.boundingRectangleLineDash});l.add(a),this.shape=a};C.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+P(),i=this.parent.renderedOuterHeight()+P(),n={x:e.x-t/2,y:e.y-i/2};this.shape.x(n.x),this.shape.y(n.y),this.shape.width(t),this.shape.height(i)};var x=function(e,t,n,o){this.parent=e,this.location=n,this.isActive=o,this.resizeControls=t;var s=e.renderedPosition(),a=e.renderedOuterWidth()+P(),r=e.renderedOuterHeight()+P(),d={x:s.x-a/2,y:s.y-r/2},h=R(e);if(this.shape=new i.Rect({width:h,height:h}),this.isActive)this.shape.fill(p.grappleColor),this.shape.stroke(p.grappleStrokeColor),this.shape.strokeWidth(p.grappleStrokeWidth),this.shape.cornerRadius(p.grappleCornerRadius);else{var u=p.inactiveGrappleStroke.split(" "),c=u[2],g=parseInt(u[1].replace(/px/,""));this.shape.stroke(c),this.shape.strokeWidth(g)}this.updateShapePosition(d,a,r,h),l.add(this.shape),this.isActive?this.bindActiveEvents():this.bindInactiveEvents()};x.prototype.bindInactiveEvents=function(){var e=function(t){s.boxSelectionEnabled(!0),s.panningEnabled(!0),s.autounselectify(!1),s.autoungrabify(!1),l.getStage().off("contentTouchend contentMouseup",e)};this.shape.on("mouseenter",(function(e){e.target.getStage().container().style.cursor=p.cursors.inactive})),this.shape.on("mouseleave",(function(e){null!=e.target.getStage()&&(e.target.getStage().container().style.cursor=p.cursors.default)})),this.shape.on("touchstart mousedown",(function(t){s.boxSelectionEnabled(!1),s.panningEnabled(!1),s.autounselectify(!0),s.autoungrabify(!0),l.getStage().on("contentTouchend contentMouseup",e)}))},x.prototype.bindActiveEvents=function(){var e,t,i,n,o,a,r=this,d=r.parent,h={},u={topleft:"nw",topcenter:"n",topright:"ne",centerright:"e",bottomright:"se",bottomcenter:"s",bottomleft:"sw",centerleft:"w"},c=function(e){s.style().selector("core").style("active-bg-opacity",o).update(),r.shape.getStage().container().style.cursor=p.cursors.default,s.boxSelectionEnabled(!0),s.panningEnabled(!0),setTimeout((function(){s.autounselectify(!1),s.autoungrabify(!1)}),0),s.trigger("nodeediting.resizeend",[r.location,r.parent]),l.getStage().off("contentTouchend contentMouseup",c),l.getStage().off("contentTouchmove contentMousemove",g),r.shape.on("mouseenter",f),r.shape.on("mouseleave",m)},g=function(o){var u=r.shape.getStage().getPointerPosition(),c=u.x,g=u.y,f=(g-h.y)/s.zoom(),l=(c-h.x)/s.zoom(),m=r.location;s.batch((function(){var o=p.isFixedAspectRatioResizeMode(d);if(!(o&&m.indexOf("center")>=0||p.isNoResizeMode(d))){if(o){var s=n(d)/i(d),r=(Math.min(l,f),"topright"==m||"bottomleft"==m);l>f?f=l*s*(r?-1:1):l=f/s*(r?-1:1)}var h=d.position(),u=h.x,c=h.y,g=!1,v=!1,y=0,C=0,x=0,b=0;if(d.isParent()){var M=i(d)-a.w,z=n(d)-a.h;M>0&&(y=M*parseFloat(p.getCompoundMinWidthBiasLeft(d))/(parseFloat(p.getCompoundMinWidthBiasLeft(d))+parseFloat(p.getCompoundMinWidthBiasRight(d))),isNaN(y)&&(y=0),C=M-y),z>0&&(x=z*parseFloat(p.getCompoundMinHeightBiasTop(d))/(parseFloat(p.getCompoundMinHeightBiasTop(d))+parseFloat(p.getCompoundMinHeightBiasBottom(d))),isNaN(x)&&(x=0),b=z-x)}if(m.startsWith("top")){if(n(d)-f>p.minHeight(d)&&(!d.isParent()||x-f>=0))c=h.y+f/2,v=!0,t(d,n(d)-f);else if(o)return}else if(m.startsWith("bottom"))if(n(d)+f>p.minHeight(d)&&(!d.isParent()||b+f>=0))c=h.y+f/2,v=!0,t(d,n(d)+f);else if(o)return;if(m.endsWith("left")&&i(d)-l>p.minWidth(d)&&(!d.isParent()||y-l>=0)?(u=h.x+l/2,g=!0,e(d,i(d)-l)):m.endsWith("right")&&i(d)+l>p.minWidth(d)&&(!d.isParent()||C+l>=0)&&(u=h.x+l/2,g=!0,e(d,i(d)+l)),d.isParent()||!g&&!v||d.position({x:u,y:c}),d.isParent()){if(M=i(d)-a.w,z=n(d)-a.h,g&&M>0){m.endsWith("right")?C=M-y:m.endsWith("left")&&(y=M-C);var w=y/(y+C)*100,B=100-w;if(w<0||B<0)return;p.setCompoundMinWidthBiasLeft(d,w+"%"),p.setCompoundMinWidthBiasRight(d,B+"%")}if(v&&z>0){m.startsWith("top")?x=z-b:m.startsWith("bottom")&&(b=z-x);var R=x/(x+b)*100,W=100-R;if(R<0||W<0)return;p.setCompoundMinHeightBiasTop(d,R+"%"),p.setCompoundMinHeightBiasBottom(d,W+"%")}}}})),h.x=c,h.y=g,r.resizeControls.update(),s.trigger("nodeediting.resizedrag",[m,d])},f=function(e){e.target.getStage().container().style.cursor=p.cursors[u[r.location]]},m=function(e){null!=e.target.getStage()&&(e.target.getStage().container().style.cursor=p.cursors.default)};this.shape.on("mouseenter",f),this.shape.on("mouseleave",m),this.shape.on("touchstart mousedown",(function(v){a=d.children().boundingBox(),e=d.isParent()?p.setCompoundMinWidth:p.setWidth,t=d.isParent()?p.setCompoundMinHeight:p.setHeight,console.log("hello team"),i=function(e){return e.isParent()?Math.max(parseFloat(p.getCompoundMinWidth(e)),a.w):e.width()},n=function(e){return e.isParent()?Math.max(parseFloat(p.getCompoundMinHeight(e)),a.h):e.height()},s.trigger("nodeediting.resizestart",[r.location,r.parent]),s.style()._private.coreStyle["active-bg-opacity"]&&(o=s.style()._private.coreStyle["active-bg-opacity"].value),s.style().selector("core").style("active-bg-opacity",0).update(),v.target.getStage().container().style.cursor=p.cursors[u[r.location]];var y=v.target.getStage().getPointerPosition();h.x=y.x,h.y=y.y,s.boxSelectionEnabled(!1),s.panningEnabled(!1),s.autounselectify(!0),s.autoungrabify(!0),r.shape.off("mouseenter",f),r.shape.off("mouseleave",m),l.getStage().on("contentTouchend contentMouseup",c),l.getStage().on("contentTouchmove contentMousemove",g)}))},x.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+P(),i=this.parent.renderedOuterHeight()+P(),n={x:e.x-t/2,y:e.y-i/2},o=R(this.parent);this.shape.width(o),this.shape.height(o),this.updateShapePosition(n,t,i,o)},x.prototype.unbindAllEvents=function(){this.shape.off("mouseenter"),this.shape.off("mouseleave"),this.shape.off("touchstart mousedown")},x.prototype.updateShapePosition=function(e,t,i,n){switch(this.location){case"topleft":this.shape.x(e.x-n/2),this.shape.y(e.y-n/2);break;case"topcenter":this.shape.x(e.x+t/2-n/2),this.shape.y(e.y-n/2);break;case"topright":this.shape.x(e.x+t-n/2),this.shape.y(e.y-n/2);break;case"centerright":this.shape.x(e.x+t-n/2),this.shape.y(e.y+i/2-n/2);break;case"bottomright":this.shape.x(e.x+t-n/2),this.shape.y(e.y+i-n/2);break;case"bottomcenter":this.shape.x(e.x+t/2-n/2),this.shape.y(e.y+i-n/2);break;case"bottomleft":this.shape.x(e.x-n/2),this.shape.y(e.y+i-n/2);break;case"centerleft":this.shape.x(e.x-n/2),this.shape.y(e.y+i/2-n/2)}};var b=function(e,t){this.parent=e,this.resizeControls=t;var n=e.renderedPosition(),o=e.renderedOuterWidth()+P(),s=e.renderedOuterHeight()+P(),a={x:n.x-o/2,y:n.y-s/2},r=W(e),d=T(e),h=new Image;h.src=p.resizeToContentCueImage,this.shape=new i.Image({width:d,height:r,image:h}),h.onload=function(){l.draw()},this.updateShapePosition(a,o,s,d,r),this.bindEvents(),l.add(this.shape)};b.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+P(),i=this.parent.renderedOuterHeight()+P(),n={x:e.x-t/2,y:e.y-i/2},o=W(this.parent),s=T(this.parent);this.shape.width(s),this.shape.height(o),this.updateShapePosition(n,t,i,s,o)},b.prototype.updateShapePosition=function(e,t,i,n,o){switch(p.resizeToContentCuePosition){case"top-left":this.shape.x(e.x+.4*n),this.shape.y(e.y+.4*o);break;case"top-right":this.shape.x(e.x+t-1.4*n),this.shape.y(e.y+.4*o);break;case"bottom-left":this.shape.x(e.x+.4*n),this.shape.y(e.y+i-1.4*o);break;default:this.shape.x(e.x+t-1.4*n),this.shape.y(e.y+i-1.4*o)}},b.prototype.bindEvents=function(){var e=this.parent,t=this;this.shape.on("mousedown",(function(e){e.evt.preventDefault(),e.evt.stopPropagation()})),this.shape.on("click",(function(i){i.evt.preventDefault(),"function"==typeof p.resizeToContentFunction?p.resizeToContentFunction([e]):s.undoRedo&&p.undoable?s.trigger("nodeediting.resizetocontent",[t]):E({self:t,firstTime:!0})}))},b.prototype.unbindEvents=function(){this.shape.off("mousedown"),this.shape.off("click")};var M,z=function(e){if(e.isParent())return e.children().boundingBox().h;var t=document.createElement("canvas").getContext("2d"),i=e.style();return t.font=i["font-size"]+" "+i["font-family"],Math.max(1.1*t.measureText("M").width,30)},w=function(e){if(e.isParent())return e.children().boundingBox().w;var t=document.createElement("canvas").getContext("2d"),i=e.style();t.font=i["font-size"]+" "+i["font-family"];const n=i.label.split("\n");let o=0;return n.forEach((function(e){var i=t.measureText(e).width;o<i&&(o=i)})),o},B=function(e){const t=e.width(),i=e.height();let n=z(e),o=w(e);if(0!==o&&"function"==typeof p.isFixedAspectRatioResizeMode&&p.isFixedAspectRatioResizeMode(e)){var s=e.width()/e.height(),a=o<n?o:n*s,r=o<n?o/s:n;a>=o&&r>=n?(o=a,n=r):(o=o<n?n*s:o,n=o<n?n:o/s)}return t===o*d&&i===n*d},R=function(e){return Math.max(1,s.zoom())*p.grappleSize*Math.min(e.width()/25,e.height()/25,1)},W=function(e){return Math.max(1,s.zoom())*p.grappleSize*1.25*Math.min(e.width()/25,e.height()/25,1)},T=function(e){return Math.max(1,s.zoom())*p.grappleSize*1.25*Math.min(e.width()/25,e.height()/25,1)},P=function(){return p.padding*Math.max(1,s.zoom())},E=function(e){var t=e.self.parent,i=t.isParent()?p.setCompoundMinWidth:p.setWidth,n=t.isParent()?p.setCompoundMinHeight:p.setHeight;if(e.firstTime){e.firstTime=null,e.oldWidth=t.isParent()?p.getCompoundMinWidth(t):t.width(),e.oldHeight=t.isParent()?p.getCompoundMinHeight(t):t.height(),t.isParent()&&(e.oldBiasLeft=p.getCompoundMinWidthBiasLeft(t)||"50%",e.oldBiasRight=p.getCompoundMinWidthBiasRight(t)||"50%",e.oldBiasTop=p.getCompoundMinHeightBiasTop(t)||"50%",e.oldBiasBottom=p.getCompoundMinHeightBiasBottom(t)||"50%");var o=w(t),s=z(t);if(0!==o){if("function"==typeof p.isFixedAspectRatioResizeMode&&p.isFixedAspectRatioResizeMode(t)){var a=t.width()/t.height(),h=o<s?o:s*a,u=o<s?o/a:s;h>=o&&u>=s?(o=h,s=u):s=(o=o<s?s*a:o)<s?s:o/a}i(t,o*d),n(t,s*d),t.isParent()&&(p.setCompoundMinWidthBiasLeft(t,"50%"),p.setCompoundMinWidthBiasRight(t,"50%"),p.setCompoundMinHeightBiasTop(t,"50%"),p.setCompoundMinHeightBiasBottom(t,"50%"))}return r.length&&r.forEach((e=>{e.update()})),e}var c=e.oldWidth,g=e.oldHeight;if(e.oldWidth=t.isParent()?p.getCompoundMinWidth(t):t.width(),e.oldHeight=t.isParent()?p.getCompoundMinHeight(t):t.height(),i(t,c),n(t,g),t.isParent()){var f=e.oldBiasLeft||"50%",l=e.oldBiasRight||"50%",m=e.oldBiasTop||"50%",v=e.oldBiasBottom||"50%";e.oldBiasLeft=p.getCompoundMinWidthBiasLeft(t)||"50%",e.oldBiasRight=p.getCompoundMinWidthBiasRight(t)||"50%",e.oldBiasTop=p.getCompoundMinHeightBiasTop(t)||"50%",e.oldBiasBottom=p.getCompoundMinHeightBiasBottom(t)||"50%",p.setCompoundMinWidthBiasLeft(t,f),p.setCompoundMinWidthBiasRight(t,l),p.setCompoundMinHeightBiasTop(t,m),p.setCompoundMinHeightBiasBottom(t,v)}return r.length&&r.forEach((e=>{e.update()})),e};function H(e,t){var i=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].id()]=!0;var n=e.filter((function(e,i){"number"==typeof e&&(e=i);for(var n=e.parent()[0];null!=n;){if(t[n.id()])return!1;n=n.parent()[0]}return!0}));return n}(t);i.union(i.descendants()).positions((function(t,i){"number"==typeof t&&(t=i);var n=t.position("x"),o=t.position("y");return t.isParent()?{x:n,y:o}:{x:n+e.x,y:o+e.y}}))}var S=!1,k={37:!1,38:!1,39:!1,40:!1};if(s.on("unselect","node",h=function(e){r.length&&(r.forEach((e=>{e.remove()})),r=[]);var t=s.nodes(":selected");1==t.size()&&t.forEach((e=>{r.push(new y(e))}))}),s.on("select","node",u=function(e){e.target,r.length&&(r.forEach((e=>{e.remove()})),r=[]),s.nodes(":selected").forEach((e=>{p.isNoControlsMode(e)||r.push(new y(e))}))}),s.on("remove","node",(function(e){e.target.selected()&&h()})),s.on("add","node",(function(e){e.target.selected()&&u(e)})),s.on("position","node",(function(e){r.length&&r.forEach((t=>{t.parent.position(),e.target.id()==t.parent.id()?t.update():t.currentPos.x==t.oldPos.x&&t.currentPos.y==t.oldPos.y||(t.currentPos=t.parent.position(),t.update(),t.oldPos={x:t.currentPos.x,y:t.currentPos.y})}))})),s.on("zoom",(function(){r.length&&r.forEach((e=>{e.update()}))})),s.on("pan",(function(){r.length&&r.forEach((e=>{e.update()}))})),s.on("afterUndo afterRedo",(function(){r.length&&r.forEach((e=>{e.update(),e.oldPos={x:void 0,y:void 0}}))})),p.enableMovementWithArrowKeys&&(document.addEventListener("keydown",(function(e){if("function"==typeof p.moveSelectedNodesOnKeyEvents?p.moveSelectedNodesOnKeyEvents():p.moveSelectedNodesOnKeyEvents){var t=document.activeElement.tagName;if("TEXTAREA"!=t&&"INPUT"!=t){switch(e.keyCode){case 37:case 39:case 38:case 40:case 32:e.preventDefault()}if(e.keyCode<37||e.keyCode>40)return;k[e.keyCode]=!0,e.preventDefault(),S||(M=s.nodes(":selected"),s.trigger("nodeediting.movestart",[M]),S=!0);var i=3;if(e.altKey&&e.shiftKey)return;e.altKey?i=1:e.shiftKey&&(i=10);var n=0,o=0;n+=k[39]?i:0,n-=k[37]?i:0,o+=k[40]?i:0,H({x:n,y:o-=k[38]?i:0},M)}}}),!0),document.addEventListener("keyup",(function(e){e.keyCode<"37"||e.keyCode>"40"||(e.preventDefault(),k[e.keyCode]=!1,("function"==typeof p.moveSelectedNodesOnKeyEvents?p.moveSelectedNodesOnKeyEvents():p.moveSelectedNodesOnKeyEvents)&&(s.trigger("nodeediting.moveend",[M]),M=void 0,S=!1))}),!0)),s.undoRedo&&p.undoable){var N,L;s.on("nodeediting.resizestart",(function(e,i,n){N={node:n,css:{}},n.isParent()?(N.css.minWidth=parseFloat(p.getCompoundMinWidth(n)),N.css.minHeight=parseFloat(p.getCompoundMinHeight(n)),N.css.biasLeft=p.getCompoundMinWidthBiasLeft(n),N.css.biasRight=p.getCompoundMinWidthBiasRight(n),N.css.biasTop=p.getCompoundMinHeightBiasTop(n),N.css.biasBottom=p.getCompoundMinHeightBiasBottom(n)):(N.css.width=n.width(),N.css.height=n.height(),N.position=t.extend({},n.position()))})),s.on("nodeediting.resizeend",(function(e,t,i){N.firstTime=!0,s.undoRedo().do("resize",N),N=void 0})),s.on("nodeediting.movestart",(function(e,t){null!=t[0]&&(L={firstTime:!0,firstNodePosition:{x:t[0].position("x"),y:t[0].position("y")},nodes:t})})),s.on("nodeediting.moveend",(function(e,t){if(null!=L){var i=L.firstNodePosition;L.positionDiff={x:-t[0].position("x")+i.x,y:-t[0].position("y")+i.y},delete L.firstNodePosition,s.undoRedo().do("nodeediting.move",L),L=void 0}})),s.on("nodeediting.resizetocontent",(function(e,t){var i={self:t,firstTime:!0};s.undoRedo().do("resizeToContent",i)}));var F=function(e){if(e.firstTime)return r.length&&r.forEach((e=>{e.update()})),delete e.firstTime,e;var i=e.node,n={node:i,css:{}};return i.isParent()?(n.css.minWidth=parseFloat(p.getCompoundMinWidth(i)),n.css.minHeight=parseFloat(p.getCompoundMinHeight(i)),n.css.biasLeft=p.getCompoundMinWidthBiasLeft(i),n.css.biasRight=p.getCompoundMinWidthBiasRight(i),n.css.biasTop=p.getCompoundMinHeightBiasTop(i),n.css.biasBottom=p.getCompoundMinHeightBiasBottom(i)):(n.css.width=i.width(),n.css.height=i.height(),n.position=t.extend({},i.position())),s.startBatch(),i.isParent()?(p.setCompoundMinWidth(i,e.css.minWidth),p.setCompoundMinHeight(i,e.css.minHeight),p.setCompoundMinWidthBiasLeft(i,e.css.biasLeft),p.setCompoundMinWidthBiasRight(i,e.css.biasRight),p.setCompoundMinHeightBiasTop(i,e.css.biasTop),p.setCompoundMinHeightBiasBottom(i,e.css.biasBottom)):(i.position(e.position),p.setWidth(i,e.css.width),p.setHeight(i,e.css.height)),s.endBatch(),r.length&&r.forEach((e=>{e.update()})),n},O=function(e){if(e.firstTime)return delete e.firstTime,e;var t=e.nodes,i=e.positionDiff,n={nodes:t,positionDiff:{x:-i.x,y:-i.y}};return H(i,t),n};s.undoRedo().action("resize",F,F),s.undoRedo().action("nodeediting.move",O,O),s.undoRedo().action("resizeToContent",E,E)}var A,K={refreshGrapples:function(){r.length&&r.forEach((e=>{var t=e.parent;e.remove(),(r=r.filter((t=>t!==e))).push(new y(t))}))},removeGrapples:function(){r.length&&r.forEach((e=>{e.remove(),e=[]}))}};return A=K,o(s).api=A,K}))}function o(e,t){void 0===e.scratch("_cyNodeEditing")&&e.scratch("_cyNodeEditing",{});var i=e.scratch("_cyNodeEditing");return void 0===t?i:i[t]}};e.exports&&(e.exports=r),void 0===(n=function(){return r}.call(t,i,t,e))||(e.exports=n),"undefined"!=typeof cytoscape&&"undefined"!=typeof jQuery&&"undefined"!=typeof Konva&&r(cytoscape,jQuery,Konva)}()}},t={},function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}(123);var e,t}));