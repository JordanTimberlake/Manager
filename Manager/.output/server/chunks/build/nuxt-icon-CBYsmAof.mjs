import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({});
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${(_a = unref(icon)) != null ? _a : ""}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-icons@3.2.1_magicast@0.3.4_rollup@4.20.0/node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-CBYsmAof.mjs.map
