import { B as BaseStyle, u as useRouter, D as addStyle, U as absolutePosition, C as getOffset, ag as $dt, N as addClass, z as focus, ah as isClient, V as isTouchDevice, s as setAttribute } from './server.mjs';
import { u as useCookie, s as script$2$1, Z as ZIndex, C as ConnectedOverlayScrollHandler, U as UniqueComponentId, R as Ripple, c as script$3, b as script$6 } from './index-BX0FDCFU.mjs';
import { useSSRContext, mergeProps, ref, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createElementBlock, renderSlot, resolveDynamicComponent, normalizeClass, createCommentVNode, resolveComponent, resolveDirective, Transition, withDirectives } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { F as FocusTrap } from './index-CX6Uhrcl.mjs';
import { O as OverlayEventBus } from './index-BclfgfHO.mjs';
import { _ as __nuxt_component_0 } from './AppFooter-Dj_YR9mv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import '@iconify/utils';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie';
import '@supabase/supabase-js';

var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-avatar {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ".concat(dt("avatar.width"), ";\n    height: ").concat(dt("avatar.height"), ";\n    font-size: ").concat(dt("avatar.font.size"), ";\n    background: ").concat(dt("avatar.background"), ";\n    border-radius: ").concat(dt("avatar.border.radius"), ";\n}\n\n.p-avatar-image {\n    background: transparent;\n}\n\n.p-avatar-circle {\n    border-radius: 50%;\n}\n\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n\n.p-avatar-icon {\n    font-size: ").concat(dt("avatar.font.size"), ";\n}\n\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n\n.p-avatar-lg {\n    width: ").concat(dt("avatar.lg.width"), ";\n    height: ").concat(dt("avatar.lg.width"), ";\n    font-size: ").concat(dt("avatar.lg.font.size"), ";\n}\n\n.p-avatar-lg .p-avatar-icon {\n    font-size: ").concat(dt("avatar.lg.font.size"), ";\n}\n\n.p-avatar-xl {\n    width: ").concat(dt("avatar.xl.width"), ";\n    height: ").concat(dt("avatar.xl.width"), ";\n    font-size: ").concat(dt("avatar.xl.font.size"), ";\n}\n\n.p-avatar-xl .p-avatar-icon {\n    font-size: ").concat(dt("avatar.xl.font.size"), ";\n}\n\n.p-avatar-group {\n    display: flex;\n    align-items: center;\n}\n\n.p-avatar-group .p-avatar + .p-avatar {\n    margin-left: ").concat(dt("avatar.group.offset"), ";\n}\n\n.p-avatar-group .p-avatar {\n    border: 2px solid ").concat(dt("avatar.group.border.color"), ";\n}\n");
};
var classes$1 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-avatar p-component", {
      "p-avatar-image": props.image != null,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge"
    }];
  },
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = BaseStyle.extend({
  name: "avatar",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseAvatar",
  "extends": script$6,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": "normal"
    },
    shape: {
      type: String,
      "default": "square"
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: AvatarStyle,
  provide: function provide() {
    return {
      $pcAvatar: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "Avatar",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["error"],
  methods: {
    onError: function onError(event) {
      this.$emit("error", event);
    }
  }
};
var _hoisted_1$1 = ["aria-labelledby", "aria-label"];
var _hoisted_2 = ["src", "alt"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.label ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.label), 17)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
      key: 1,
      "class": normalizeClass(_ctx.cx("icon"))
    }, null, 8, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, _ctx.ptm("icon")), null, 16)) : _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 3,
      src: _ctx.image,
      alt: _ctx.ariaLabel,
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, _ctx.ptm("image")), null, 16, _hoisted_2)) : createCommentVNode("", true)];
  })], 16, _hoisted_1$1);
}
script$2.render = render$1;
var theme2 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-popover {\n    margin-top: ".concat(dt("popover.gutter"), ";\n    background: ").concat(dt("popover.background"), ";\n    color: ").concat(dt("popover.color"), ";\n    border: 1px solid ").concat(dt("popover.border.color"), ";\n    border-radius: ").concat(dt("popover.border.radius"), ";\n    box-shadow: ").concat(dt("popover.shadow"), ";\n}\n\n.p-popover-content {\n    padding: ").concat(dt("popover.content.padding"), ";\n}\n\n.p-popover-flipped {\n    margin-top: calc(").concat(dt("popover.gutter"), " * -1);\n    margin-bottom: ").concat(dt("popover.gutter"), ";\n}\n\n.p-popover-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-popover-leave-to {\n    opacity: 0;\n}\n\n.p-popover-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-popover-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n.p-popover:after,\n.p-popover:before {\n    bottom: 100%;\n    left: calc(").concat(dt("popover.arrow.offset"), " + ").concat(dt("popover.arrow.left"), ');\n    content: " ";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.p-popover:after {\n    border-width: calc(').concat(dt("popover.gutter"), " - 2px);\n    margin-left: calc(-1 * (").concat(dt("popover.gutter"), " - 2px));\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt("popover.background"), ";\n}\n\n.p-popover:before {\n    border-width: ").concat(dt("popover.gutter"), ";\n    margin-left: calc(-1 * ").concat(dt("popover.gutter"), ");\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt("popover.border.color"), ";\n}\n\n.p-popover-flipped:after,\n.p-popover-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n\n.p-popover.p-popover-flipped:after {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt("popover.background"), ";\n}\n\n.p-popover.p-popover-flipped:before {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt("popover.border.color"), ";\n}\n");
};
var classes = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var PopoverStyle = BaseStyle.extend({
  name: "popover",
  theme: theme2,
  classes
});
var script$1 = {
  name: "BasePopover",
  "extends": script$6,
  props: {
    dismissable: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    breakpoints: {
      type: Object,
      "default": null
    },
    closeOnEscape: {
      type: Boolean,
      "default": true
    }
  },
  style: PopoverStyle,
  provide: function provide2() {
    return {
      $pcPopover: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Popover",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["show", "hide"],
  data: function data() {
    return {
      visible: false
    };
  },
  watch: {
    dismissable: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      }
    }
  },
  selfClick: false,
  target: null,
  eventTarget: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  styleElement: null,
  overlayEventListener: null,
  documentKeydownListener: null,
  beforeUnmount: function beforeUnmount() {
    if (this.dismissable) {
      this.unbindOutsideClickListener();
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.destroyStyle();
    this.unbindResizeListener();
    this.target = null;
    if (this.container && this.autoZIndex) {
      ZIndex.clear(this.container);
    }
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
    this.container = null;
  },
  mounted: function mounted() {
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  methods: {
    toggle: function toggle(event, target) {
      if (this.visible)
        this.hide();
      else
        this.show(event, target);
    },
    show: function show2(event, target) {
      this.visible = true;
      this.eventTarget = event.currentTarget;
      this.target = target || event.currentTarget;
    },
    hide: function hide() {
      this.visible = false;
    },
    onContentClick: function onContentClick() {
      this.selfClick = true;
    },
    onEnter: function onEnter(el) {
      var _this = this;
      this.container.setAttribute(this.attributeSelector, "");
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      if (this.dismissable) {
        this.bindOutsideClickListener();
      }
      this.bindScrollListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        ZIndex.set("overlay", el, this.baseZIndex + this.$primevue.config.zIndex.overlay);
      }
      this.overlayEventListener = function(e) {
        if (_this.container.contains(e.target)) {
          _this.selfClick = true;
        }
      };
      this.focus();
      OverlayEventBus.on("overlay-click", this.overlayEventListener);
      this.$emit("show");
      if (this.closeOnEscape) {
        this.bindDocumentKeyDownListener();
      }
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.unbindDocumentKeyDownListener();
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      absolutePosition(this.container, this.target, false);
      var containerOffset = getOffset(this.container);
      var targetOffset = getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty($dt("popover.arrow.left").name, "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-popover-flipped", "true");
        !this.isUnstyled && addClass(this.container, "p-popover-flipped");
      }
    },
    onContentKeydown: function onContentKeydown(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.hide();
        focus(this.target);
      }
    },
    onButtonKeydown: function onButtonKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          event.preventDefault();
      }
    },
    focus: function focus2() {
      var focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.visible = false;
      }
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        (void 0).document.addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        (void 0).document.removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener && isClient()) {
        this.outsideClickListener = function(event) {
          if (_this2.visible && !_this2.selfClick && !_this2.isTargetClicked(event)) {
            _this2.visible = false;
          }
          _this2.selfClick = false;
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this3.visible) {
            _this3.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.visible && !isTouchDevice()) {
            _this4.visible = false;
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isTargetClicked: function isTargetClicked(event) {
      return this.eventTarget && (this.eventTarget === event.target || this.eventTarget.contains(event.target));
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    createStyle: function createStyle() {
      if (!this.styleElement && !this.isUnstyled) {
        var _this$$primevue;
        this.styleElement = (void 0).createElement("style");
        this.styleElement.type = "text/css";
        setAttribute(this.styleElement, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).head.appendChild(this.styleElement);
        var innerHTML = "";
        for (var breakpoint in this.breakpoints) {
          innerHTML += "\n                        @media screen and (max-width: ".concat(breakpoint, ") {\n                            .p-popover[").concat(this.attributeSelector, "] {\n                                width: ").concat(this.breakpoints[breakpoint], " !important;\n                            }\n                        }\n                    ");
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle: function destroyStyle() {
      if (this.styleElement) {
        (void 0).head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    }
  },
  computed: {
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    }
  },
  directives: {
    focustrap: FocusTrap,
    ripple: Ripple
  },
  components: {
    Portal: script$3
  }
};
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-popover",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "dialog",
            "aria-modal": $data.visible,
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            "class": _ctx.cx("root")
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            closeCallback: $options.hide,
            keydownCallback: function keydownCallback(event) {
              return $options.onButtonKeydown(event);
            }
          }) : (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("content"),
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onContentClick && $options.onContentClick.apply($options, arguments);
            }),
            onMousedown: _cache[1] || (_cache[1] = function() {
              return $options.onContentClick && $options.onContentClick.apply($options, arguments);
            }),
            onKeydown: _cache[2] || (_cache[2] = function() {
              return $options.onContentKeydown && $options.onContentKeydown.apply($options, arguments);
            })
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
script.render = render;
const _sfc_main$1 = {
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const user_id = useCookie("user_id");
    const csrfToken = useCookie("token");
    const op = ref(null);
    const logout = async () => {
      try {
        const data2 = await $fetch("http://localhost:8000/api/auth/signout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken.value || ""
            // csrfToken.value
          },
          credentials: "include"
          // Ensure cookies are included in the request
        });
        console.log(data2);
        user_id.value = "";
        csrfToken.value = "";
        router.push("/login");
      } catch (e) {
        console.error("Failed to logout", e);
        error.value = "Failed to logout";
        show(error.value);
      }
      loading.value = false;
    };
    const user = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[--><div class="sidebar"><div class="title text-center font-bold md:text-lg"><p>EPIUSE Manager</p></div><div class="routes">`);
      _push(ssrRenderComponent(unref(script$2$1), {
        text: "",
        class: "route",
        as: "router-link",
        label: "Router",
        to: "/home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"${_scopeId}></path></svg><p${_scopeId}> Home </p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  d: "M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                })
              ])),
              createVNode("p", null, " Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(script$2$1), {
        text: "",
        class: "route",
        as: "router-link",
        label: "Router",
        to: "/employees"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"${_scopeId}></path></svg><p${_scopeId}> Employees </p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  d: "M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"
                })
              ])),
              createVNode("p", null, " Employees ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="profile"><div class="routes">`);
      _push(ssrRenderComponent(unref(script$2$1), {
        text: "",
        class: "route mb-2",
        as: "router-link",
        label: "Router",
        to: "/help"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"${_scopeId}></path></svg><p${_scopeId}> Help &amp; Support </p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  d: "M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"
                })
              ])),
              createVNode("p", null, " Help & Support ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="divider"></div><div class="profileContent">`);
      _push(ssrRenderComponent(unref(script$2), {
        image: "/images/media/default.png",
        shape: "circle",
        alt: "avatar"
      }, null, _parent));
      _push(`<p class="text-center md:text-sm md:contents hidden trancate text-wrap">${ssrInterpolate((_a = user.value) == null ? void 0 : _a.username)}</p></div></div></div>`);
      _push(ssrRenderComponent(unref(script), {
        ref_key: "op",
        ref: op
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="popover"${_scopeId}><div class="text-slate-400 pb-4"${_scopeId}><p style="${ssrRenderStyle({ "font-size": "12px" })}"${_scopeId}>signed in as ${ssrInterpolate(user.value.email)}</p></div>`);
            _push2(ssrRenderComponent(unref(script$2$1), {
              text: "",
              class: "popoverRoute",
              onClick: logout
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"${_scopeId2}><path fill="currentColor" d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"${_scopeId2}></path></svg><p${_scopeId2}> Logout </p>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16px",
                      height: "16px",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"
                      })
                    ])),
                    createVNode("p", null, " Logout ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "popover" }, [
                createVNode("div", { class: "text-slate-400 pb-4" }, [
                  createVNode("p", { style: { "font-size": "12px" } }, "signed in as " + toDisplayString(user.value.email), 1)
                ]),
                createVNode(unref(script$2$1), {
                  text: "",
                  class: "popoverRoute",
                  onClick: logout
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16px",
                      height: "16px",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"
                      })
                    ])),
                    createVNode("p", null, " Logout ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppSidebar = _sfc_main$1;
  const _component_AppFooter = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppSidebar, null, null, _parent));
  _push(`<div class="slot">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C3yOzbmC.mjs.map
