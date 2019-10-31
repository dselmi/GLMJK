!function(i,t,n,e){"use strict";function o(e){if(!(this instanceof o))return new o(e);var s=this;return this.mobile={},this.desktop={},t(".js-main-menu-toggle").on("click",function(){i.$html.hasClass("is-main-menu-open")?(i.$html.removeClass("is-main-menu-open"),i.$html.addClass("is-main-menu-close")):(i.$html.removeClass("is-main-menu-close"),i.$html.addClass("is-main-menu-open"),s.mobile.$menu.find(".menu-item.is-open").removeClass("is-open"),s.desktop.$menu.removeClass("level-0-children-is-open"),s.desktop.$menu.find(".children-is-open").removeClass("children-is-open"),s.desktop.$menu.find(".is-visible").removeClass("is-visible"),s.desktop.$menu.find(".is-open").removeClass("is-open"),s.desktop.$menu.find(".is-hidden").removeClass("is-hidden"))}),i.$document.on("scroll",function(e){n.pageYOffset<50?i.$html.removeClass("is-menu-sticky"):i.$html.hasClass("is-menu-sticky")||i.$html.addClass("is-menu-sticky")}),this.initMobileMenu(),this.initDesktopMenu(),this}o.prototype.initMobileMenu=function(){this.mobile.$menu=t(".menu-mobile--main-menu"),this.mobile.$menu.find(".js-main-menu-submenu-open").on("click",function(){t(this).parent().addClass("is-open")}),this.mobile.$menu.find(".js-main-menu-submenu-close").on("click",function(){t(this).parent().parent().parent().parent().removeClass("is-open")})},o.prototype.initDesktopMenu=function(){var s=this;this.desktop.$menu=t(".menu-desktop"),this.desktop.$links=this.desktop.$menu.find(".menu-desktop__link"),this.desktop.$wrapper_level_0=this.desktop.$menu.find(".menu--level-0"),this.desktop.$wrapper_level_1=this.desktop.$menu.find(".menu--level-1"),this.desktop.$wrapper_level_2=this.desktop.$menu.find(".menu--level-2"),this.desktop.$this=null,this.desktop.$parent=null,this.desktop.id=-1,this.desktop.parent=-1;for(var e=this.desktop.level=0;e<this.desktop.$wrapper_level_2.length;e++)this.desktop.$wrapper_level_2[e].scrollHeight>t(this.desktop.$wrapper_level_2[e]).outerHeight()+5&&t(this.desktop.$wrapper_level_2[e]).addClass("is-scrollable");this.desktop.$links.on("mouseenter",function(e){s.desktop.$this=t(this),s.desktop.$parent=s.desktop.$this.parent(),s.desktop.id=parseInt(s.desktop.$this.attr("data-id")),s.desktop.parent=parseInt(s.desktop.$this.attr("data-parent")),s.desktop.level=parseInt(s.desktop.$this.attr("data-level")),0!==s.desktop.level||s.desktop.$parent.hasClass("is-visible")?1!==s.desktop.level||s.desktop.$parent.hasClass("is-open")||(s.desktop.$wrapper_level_1.find("> .menu__item").removeClass("is-open children-is-open"),s.desktop.$parent.addClass("is-open"),s.desktop.$parent.hasClass("menu-item-has-children")?s.desktop.$wrapper_level_1.addClass("children-is-open"):s.desktop.$wrapper_level_1.removeClass("children-is-open"),s.closeDesktopSubMenu(s.desktop.$wrapper_level_2.filter(".is-visible")),s.openDesktopSubMenu(s.desktop.$wrapper_level_2.filter('[data-parent="'+s.desktop.id+'"]'))):(s.desktop.$wrapper_level_0.find("> .menu__item.is-visible").removeClass("is-visible"),s.desktop.$parent.addClass("is-visible"),s.desktop.$parent.hasClass("menu-item-has-children")?(s.desktop.$wrapper_level_0.addClass("children-is-open"),s.desktop.$menu.addClass("level-0-children-is-open")):(s.desktop.$wrapper_level_0.removeClass("children-is-open"),s.desktop.$menu.removeClass("level-0-children-is-open")),s.desktop.$wrapper_level_1.removeClass("children-is-open"),s.desktop.$wrapper_level_1.find("> .menu__item").removeClass("is-open"),s.closeDesktopSubMenu(s.desktop.$wrapper_level_1.filter(".is-visible")),s.closeDesktopSubMenu(s.desktop.$wrapper_level_2.filter(".is-visible")),s.openDesktopSubMenu(s.desktop.$wrapper_level_1.filter('[data-parent="'+s.desktop.id+'"]')))})},o.prototype.openDesktopSubMenu=function(e){e.addClass("is-visible")},o.prototype.closeDesktopSubMenu=function(e){e.addClass("is-hidden"),setTimeout(function(){e.removeClass("is-visible is-hidden")},300)},t(n).on("load",function(){i.store.Menu=new o})}(APP,jQuery,window,document);
//# sourceMappingURL=../maps/components/menu.js.map
