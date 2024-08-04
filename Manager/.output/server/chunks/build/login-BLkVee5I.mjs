import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { Y as useToast, u as useRouter } from './server.mjs';
import { u as useSeoMeta } from './index-BNocwU-e.mjs';
import { u as useCookie, s as script$2 } from './index-BX0FDCFU.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { s as script } from './index-W9RA4w4r.mjs';
import { S as Spinner } from './Spinner-BAsfqhRw.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Log in",
      description: "Manager account creation page"
    });
    const csrfToken = useCookie("token");
    const user_id = useCookie("user_id");
    const error = ref(null);
    const toast = useToast();
    const loading = ref(false);
    const router = useRouter();
    const userData = ref({
      email: "",
      password: ""
    });
    const login = async () => {
      loading.value = true;
      try {
        const data = await $fetch("http://localhost:8000/api/auth/signin/", {
          method: "POST",
          body: JSON.stringify({
            email: userData.value.email,
            password: userData.value.password
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken.value || ""
            // csrfToken.value
          },
          credentials: "include"
          // Ensure cookies are included in the request
        });
        console.log(data);
        user_id.value = data.user_id;
        loading.value = false;
        router.push("/home");
      } catch (e) {
        console.error("Failed to login", e);
        error.value = "Invalid Credentials - Please check your email and password";
        show(error.value);
      }
      loading.value = false;
    };
    const show = (message) => {
      message = message || "An error occurred";
      toast.add({ severity: "warn", summary: "Error", detail: message, life: 3e3 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "userAuth p-10" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(script), null, null, _parent));
      _push(`<div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10"><div class="pb-6"><h1 class="text-3xl font-semibold text-left"> Log In </h1><p class="text-sm">Don&#39;t have an account? <a class="underline" href="/signup">Create an account</a></p></div><div class="w-full flex flex-row justify-between gap-4"><form class="w-1/2"><div class="mb-4"><label for="email" class="block text-sm font-bold mb-2">Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(userData).email)} required class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="mb-4"><label for="password" class="block text-sm font-bold mb-2">Password</label><input type="password" id="password"${ssrRenderAttr("value", unref(userData).password)} required class="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="flex items-center justify-between"><a href="/signup" class="underline">Sign up instead</a>`);
      _push(ssrRenderComponent(unref(script$2), {
        rounded: "",
        class: "font-bold py-2 px-4 w-1/2",
        type: "button",
        onClick: login
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log In `);
          } else {
            return [
              createTextVNode(" Log In ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><div class="w-1/2 flex flex-col justify-start items-center gap-10"><h1 class="text-3xl font-semibold text-center"> Welcome to ManagerOrg </h1>`);
      if (unref(loading)) {
        _push(`<div class="w-full flex justify-center items-center">`);
        _push(ssrRenderComponent(Spinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BLkVee5I.mjs.map
