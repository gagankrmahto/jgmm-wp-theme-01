!function(t){var e={init:function(e){return this.each((function(){function i(){P.tick_count=S.find(".mtphr-dnt-tick").length,P.tick_count>0&&("scroll"===N.type?r():"rotate"===N.type&&m()),N.after_load.call(R,S),R.trigger("mtphr_dnt_after_load_single",[P,it]),t("body").trigger("mtphr_dnt_after_load",[R,P,it])}function n(){S.find(".mtphr-dnt-tick").each((function(){t(this).height()>et&&(et=t(this).height()),"up"!==N.scroll_direction&&"down"!==N.scroll_direction||t(this).css("height","auto")})),S.css("height",et+"px")}function r(){var e=S.find(".mtphr-dnt-tick:first");if(e.attr("style")){var i,r=e.attr("style").split("width:");rt=!(r.length>1)}it=[],S.find("img").length?S.imagesLoaded((function(){n(),S.find(".mtphr-dnt-tick").each((function(){t(this).show();var e=[{headline:t(this)}];it.push(e)})),g(),o()})):(n(),S.find(".mtphr-dnt-tick").each((function(){t(this).show();var e=[{headline:t(this)}];it.push(e)})),g(),o()),S.on({mouseenter:function(){N.scroll_pause&&s()},mouseleave:function(){N.scroll_pause&&!P.paused&&a()}}),S.find("a").on("click",(function(){N.scroll_pause&&!P.paused&&a()}))}function s(){clearTimeout(ct),cancelAnimationFrame(nt)}function a(){o()}function o(){function t(){for(var e=0;e<P.tick_count;e++)if(!0===it[e][0].visible){var i="reset";"left"===N.scroll_direction||"right"===N.scroll_direction?("reset"===(i="left"===N.scroll_direction?c(e):p(e))?(i=it[e][0].reset,it[e][0].headline.css("opacity",0)):it[e][0].headline.css("opacity",1),it[e][0].headline.css({transform:"translateX( "+i+"px )"})):("reset"===(i="up"===N.scroll_direction?l(e):_(e))?(i=it[e][0].reset,it[e][0].headline.css("opacity",0)):it[e][0].headline.css("opacity",1),it[e][0].headline.css({transform:"translateY( "+i+"px )"})),it[e][0].position=i}N.scroll_init&&pt?(pt=!1,ct=setTimeout((function(){nt=requestAnimationFrame(t)}),1e3*N.scroll_init_delay)):(pt=!1,nt=requestAnimationFrame(t))}clearTimeout(ct),cancelAnimationFrame(nt),nt=requestAnimationFrame(t)}function c(t){var e=parseFloat(it[t][0].position-N.scroll_speed*lt);return e<-(it[t][0].headline.width()+N.offset)?e=u(t):e<parseFloat(tt-it[t][0].headline.width()-N.scroll_spacing)&&d(t),e}function p(t){var e=parseFloat(it[t][0].position+N.scroll_speed*lt);return e>tt+N.offset?e=u(t):e>N.scroll_spacing&&d(t),e}function l(t){var e=parseFloat(it[t][0].position-N.scroll_speed*lt);return e<-(it[t][0].headline.height()+N.offset)?e=u(t):e<et-it[t][0].headline.height()-N.scroll_spacing&&d(t),e}function _(t){var e=parseFloat(it[t][0].position+N.scroll_speed*lt);return e>et+N.offset?e=u(t):e>N.scroll_spacing&&d(t),e}function u(e){return P.tick_count>1&&(it[e][0].visible=!1),P.tick_count===e+1&&(R.trigger("mtphr_dnt_scroll_complete",[P,it]),t("body").trigger("mtphr_dnt_scroll_complete",[R,P,it])),"reset"}function f(t){!1===it[t][0].visible&&(P.previous_tick=parseInt(t-1),P.previous_tick<0&&(P.previous_tick=parseInt(P.tick_count-1)),P.current_tick=t,P.next_tick=parseInt(t+1),P.next_tick>=P.tick_count&&(P.next_tick=0))}function d(t){t===P.tick_count-1?N.scroll_loop&&(f(0),it[0][0].visible=!0):(f(parseInt(t+1)),it[t+1][0].visible=!0)}function h(){for(var t=0;t<P.tick_count;t++){var e,i=it[t][0].headline;switch(N.scroll_direction){case"left":e=tt+N.offset,!1===it[t][0].visible&&i.css("transform","translateX( "+e+"px )");break;case"right":e=parseInt("-"+(i.width()+N.offset)),!1===it[t][0].visible&&i.css("transform","translateX( "+e+"px )");break;case"up":rt&&i.css("width",tt),e=parseInt(et+N.offset),!1===it[t][0].visible&&i.css("transform","translateY( "+e+"px )");break;case"down":rt&&i.css("width",tt),e=parseInt("-"+(i.height()+N.offset)),!1===it[t][0].visible&&i.css("transform","translateY( "+e+"px )");break}it[t][0].width=i.width(),it[t][0].height=i.height(),!1===it[t][0].visible&&(it[t][0].position=e),it[t][0].reset=e}}function g(){for(var t,e,i=0;i<P.tick_count;i++)if(it[i]){switch(e=it[i][0].headline,N.scroll_direction){case"left":t=tt+N.offset,e.css("transform","translateX( "+t+"px )");break;case"right":t=parseInt("-"+(e.width()+N.offset)),e.css("transform","translateX( "+t+"px )");break;case"up":rt&&e.css("width",tt),t=parseInt(et+N.offset),e.css("transform","translateY( "+t+"px )");break;case"down":rt&&e.css("width",tt),t=parseInt("-"+(e.height()+N.offset)),e.css("transform","translateY( "+t+"px )");break}it[i][0].width=e.width(),it[i][0].height=e.height(),it[i][0].position=t,it[i][0].reset=t,it[i][0].visible=!1,e=it[i][0].headline}if(P.current_tick=0,it[P.current_tick][0].visible=!0,N.scroll_init)for("left"===N.scroll_direction?t=0:"right"===N.scroll_direction?t=tt:"up"===N.scroll_direction?t=0:"down"===N.scroll_direction&&(t=et),i=0;i<P.tick_count;i++)switch(e=it[i][0].headline,N.scroll_direction){case"left":t<tt&&(e.css("transform","translateX( "+t+"px )"),it[i][0].position=t,it[i][0].visible=!0,t=t+it[i][0].width+N.scroll_spacing);break;case"right":t>0&&(t-=it[i][0].width,e.css("transform","translateX( "+t+"px )"),it[i][0].position=t,it[i][0].visible=!0,t-=N.scroll_spacing);break;case"up":t<et&&(e.css("transform","translateY( "+t+"px )"),it[i][0].position=t,it[i][0].visible=!0,t=t+it[i][0].height+N.scroll_spacing);break;case"down":t>0&&(e.css("transform","translateY( "+t+"px )"),e.stop(!0,!0).css("top",t+"px"),it[i][0].position=t,it[i][0].visible=!0,t-=N.scroll_spacing);break}}function k(){y()}function v(){clearInterval(st)}function m(){switch(S.find(".mtphr-dnt-tick").each((function(){it.push(t(this)),t(this).imagesLoaded((function(){F()}))})),F(),S.find(".mtphr-dnt-tick").show(),N.rotate_type){case"fade":T(S,it,parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_left":Y(S,it,parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_right":E(S,it,parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_down":q(S,it,parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_up":O(S,it,parseInt(100*N.rotate_speed),N.rotate_ease);break}w(0),N.auto_rotate&&k(),S.on({mouseenter:function(){N.auto_rotate&&N.rotate_pause&&!P.running&&v()},mouseleave:function(){N.auto_rotate&&N.rotate_pause&&!P.running&&!P.paused&&k()}}),S.find("a").on("click",(function(){N.auto_rotate&&N.rotate_pause&&!P.running&&!P.paused&&k()}))}function y(){v(),st=setInterval((function(){var t=parseInt(P.current_tick+1);t===P.tick_count&&(t=0),b(t)}),parseInt(1e3*N.rotate_delay))}function b(e){P.current_tick!==e&&(N.auto_rotate&&v(),P.next_tick=e,N.before_change.call(R,S),R.trigger("mtphr_dnt_before_change_single",[P,it]),t("body").trigger("mtphr_dnt_before_change",[R,P,it]),P.running=1,I(e),x(e),P.previous_tick=P.current_tick,P.current_tick=e,ot=setTimeout((function(){N.after_change.call(R,S),R.trigger("mtphr_dnt_after_change_single",[P,it]),t("body").trigger("mtphr_dnt_after_change",[R,P,it]),at=N.rotate_type,P.reverse=0,P.running=0,N.auto_rotate&&!P.paused&&y()}),parseInt(100*N.rotate_speed)))}function w(t){Z&&(Z.children("a").removeClass("active"),Z.children('a[href="'+t+'"]').addClass("active"))}function x(e){switch(w(e),at){case"fade":A(S,t(it[e]),t(it[P.current_tick]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_left":C(S,t(it[e]),t(it[P.current_tick]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_right":L(S,t(it[e]),t(it[P.current_tick]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_down":z(S,t(it[e]),t(it[P.current_tick]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_up":M(S,t(it[e]),t(it[P.current_tick]),parseInt(100*N.rotate_speed),N.rotate_ease);break}}function I(e){switch(at){case"fade":X(S,t(it[P.current_tick]),t(it[e]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_left":D(S,t(it[P.current_tick]),t(it[e]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_right":W(S,t(it[P.current_tick]),t(it[e]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_down":j(S,t(it[P.current_tick]),t(it[e]),parseInt(100*N.rotate_speed),N.rotate_ease);break;case"slide_up":Q(S,t(it[P.current_tick]),t(it[e]),parseInt(100*N.rotate_speed),N.rotate_ease);break}}function F(){for(var e=0;e<P.tick_count;e++)t(it[e]).width(tt+"px"),P.current_tick!==e&&t(it[e]).css({left:parseFloat(tt+N.offset)+"px"});var i=t(it[P.current_tick]).height();S.stop().css("height",i+"px")}function T(t,e){var i=e[0],n=i.height();t.css("height",n+"px"),i.css({opacity:1,left:"auto"})}function A(t,e,i,n,r){e.css({opacity:0,left:"auto"}),e.stop().animate({opacity:1},n,r);var s=e.height();t.stop().animate({height:s+"px"},n,r)}function X(e,i,n,r,s){i.stop().animate({opacity:0},r,s,(function(){t(this).css({left:parseFloat(tt+N.offset)+"px"}),i.remove(),e.append(i)}))}function Y(t,e){var i=e[0],n=i.height();t.css("height",n+"px"),i.css({opacity:1,left:0})}function C(t,e,i,n,r){var s=e.height();e.css({opacity:1,left:parseFloat(tt+N.offset)+"px"}),t.stop().animate({height:s+"px"},n,r,(function(){})),e.stop().animate({left:"0"},n,r,(function(){}))}function D(t,e,i,n,r){e.stop().animate({left:"-"+parseFloat(tt+N.offset)+"px"},n,r,(function(){e.css({opacity:0}),e.remove(),t.append(e)}))}function E(t,e){var i=e[0],n=i.height();t.css("height",n+"px"),i.css({opacity:1,left:0})}function L(t,e,i,n,r){var s=e.height();e.css({opacity:1,left:"-"+parseFloat(tt+N.offset)+"px"}),t.stop().animate({height:s+"px"},n,r,(function(){})),e.stop().animate({left:"0"},n,r)}function W(t,e,i,n,r){e.stop().animate({left:parseFloat(tt+N.offset)+"px"},n,r,(function(){e.css({opacity:0}),e.remove(),t.append(e)}))}function q(t,e){var i=e[0],n=i.height();t.css("height",n+"px"),i.css({opacity:1,top:0,left:"auto"})}function z(t,e,i,n,r){var s=e.height();e.css({opacity:1,top:"-"+parseFloat(s+N.offset)+"px",left:"auto"}),t.stop().animate({height:s+"px"},n,r),e.stop().animate({top:"0"},n,r)}function j(t,e,i,n,r){var s=i.height();e.stop().animate({top:parseFloat(s+N.offset)+"px"},n,r,(function(){e.css({opacity:0}),e.remove(),t.append(e)}))}function O(t,e){var i=e[0],n=i.height();t.css({height:n+"px",left:"auto"}),i.css({opacity:1,top:0})}function M(t,e,i,n,r){var s=e.height();e.css({opacity:1,top:parseFloat(i.height()+N.offset)+"px",left:"auto"}),t.stop().animate({height:s+"px"},n,r),e.stop().animate({top:"0"},n,r)}function Q(t,e,i,n,r){var s=e.height();e.stop().animate({top:"-"+parseFloat(s+N.offset)+"px"},n,r,(function(){e.css({opacity:0}),e.remove(),t.append(e)}))}function B(){if(P.running)return!1;var t=parseInt(P.current_tick+1);t===P.tick_count&&(t=0),b(t)}function G(){if(P.running)return!1;var t=parseInt(P.current_tick-1);t<0&&(t=P.tick_count-1),N.nav_reverse&&("slide_left"===N.rotate_type?at="slide_right":"slide_right"===N.rotate_type?at="slide_left":"slide_down"===N.rotate_type?at="slide_up":"slide_up"===N.rotate_type&&(at="slide_down"),P.reverse=1),b(t)}function H(t){t?(P.paused=!1,$.removeClass("paused"),"scroll"===N.type?a():k()):(P.paused=!0,$.addClass("paused"),"scroll"===N.type?s():v()),R.trigger("mtphr_dnt_play_pause",[P,it])}function J(){if(P.running)return!1;var t=parseInt(P.current_tick+1);t===P.tick_count&&(t=0),"slide_left"!==N.rotate_type&&"slide_right"!==N.rotate_type||(at="slide_left"),b(t)}function K(){if(P.running)return!1;var t=parseInt(P.current_tick-1);t<0&&(t=P.tick_count-1),"slide_left"!==N.rotate_type&&"slide_right"!==N.rotate_type||(at="slide_right"),N.nav_reverse&&("slide_down"===N.rotate_type?at="slide_up":"slide_up"===N.rotate_type&&(at="slide_down"),P.reverse=1),b(t)}var N={id:"",type:"scroll",scroll_direction:"left",scroll_speed:10,scroll_pause:0,scroll_spacing:40,scroll_units:10,scroll_init:0,scroll_init_delay:2,scroll_loop:1,rotate_type:"fade",auto_rotate:0,rotate_delay:10,rotate_pause:0,rotate_speed:10,rotate_ease:"easeOutExpo",nav_reverse:0,disable_touchswipe:0,offset:20,before_change:function(){},after_change:function(){},after_load:function(){}},P={id:N.id,tick_count:0,previous_tick:0,current_tick:0,next_tick:0,reverse:0,running:0,paused:0};e&&t.extend(N,e);var R=t(this),S=R.find(".mtphr-dnt-tick-contents"),U=R.find(".mtphr-dnt-nav-prev"),V=R.find(".mtphr-dnt-nav-next"),Z=R.find(".mtphr-dnt-control-links"),$=R.find(".mtphr-dnt-play-pause"),tt=S.outerWidth(!0),et=0,it=[],nt,rt=!0,st,at=N.rotate_type,ot,ct,pt=!0,lt=.13;if(S.data("ditty:vars",P),U&&"rotate"===N.type&&(U.on("click",(function(t){t.preventDefault(),G()})),V.on("click",(function(t){t.preventDefault(),B()}))),Z&&"rotate"===N.type&&Z.children("a").on("click",(function(e){e.preventDefault();var i=parseInt(t(this).attr("href"));if(P.running)return!1;if(i===P.current_tick)return!1;var n=i<P.current_tick?1:0;N.nav_reverse&&n&&("slide_left"===N.rotate_type?at="slide_right":"slide_right"===N.rotate_type?at="slide_left":"slide_down"===N.rotate_type?at="slide_up":"slide_up"===N.rotate_type&&(at="slide_down"),P.reverse=1),b(i)})),$.on("click",(function(t){t.preventDefault(),H(P.paused)})),"rotate"!==N.type||N.disable_touchswipe||(S[0].addEventListener("swiped-left",(function(){J()})),S[0].addEventListener("swiped-right",(function(){K()}))),R.on("mtphr_dnt_next",(function(){B()})),R.on("mtphr_dnt_prev",(function(){G()})),R.on("mtphr_dnt_goto",(function(t,e){b(parseInt(e))})),R.on("mtphr_dnt_pause",(function(){H()})),R.on("mtphr_dnt_play",(function(){H(!0)})),t(window).on("resize",(function(){S.outerWidth()!==tt&&(tt=S.outerWidth(!0),"scroll"===N.type?("up"===N.scroll_direction||"down"===N.scroll_direction)&&rt?g():h():"rotate"===N.type&&F())})),R.on("mtphr_dnt_resize_single",(function(){"scroll"===N.type?h():"rotate"===N.type&&F()})),t("body").on("mtphr_dnt_resize",(function(t,e){e&&e.indexOf(N.id)>=0&&("scroll"===N.type?h():"rotate"===N.type&&F())})),R.on("mtphr_dnt_replace_ticks",(function(e,n,r){clearTimeout(ct),cancelAnimationFrame(nt),R.find(".mtphr-dnt-tick").remove(),n.each((function(){S.append(t(this))})),setTimeout((function(){i()}),r)})),0===R.width()){var _t=!0;setTimeout((function t(){R.width()>10&&(_t=!1,tt=S.outerWidth(!0),i()),_t&&setTimeout(t,100)}),100)}else i()}))}};t.fn.ditty_news_ticker=function(t){if(e[t])return e[t].apply(this,Array.prototype.slice.call(arguments,1));if("object"!=typeof t&&t)throw new Error("Method "+t+" does not exist in ditty_news_ticker");return e.init.apply(this,arguments)}}(jQuery);