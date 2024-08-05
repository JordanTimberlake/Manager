import { Y as useToast, u as useRouter } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const router = useRouter();
    useSeoMeta({
      title: "Create account",
      description: "Manager account creation page"
    });
    const csrfToken = useCookie("token");
    const user_id = useCookie("user_id");
    const loading = ref(false);
    const userData = ref({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
    const handleCreateAccount = async () => {
      loading.value = true;
      if (userData.value.email === "" || userData.value.password === "" || userData.value.first_name === "" || userData.value.last_name === "") {
        alert("Please fill in all fields");
        return;
      }
      try {
        const data = await $fetch("https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/auth/signup/", {
          method: "POST",
          body: JSON.stringify({
            first_name: userData.value.first_name,
            last_name: userData.value.last_name,
            email: userData.value.email,
            password: userData.value.password
          }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken.value || ""
            // csrfToken.value
          },
          withCredentials: true
        });
        user_id.value = data.user_id;
        loading.value = false;
        router.push("/home");
      } catch (err) {
        console.error("Failed to login", err);
        err.value = "Failed - Please make sure you have filled in all the input boxes";
        show(err.value);
      }
      loading.value = false;
    };
    const show = (message) => {
      message = message || "An error occurred";
      toast.add({ severity: "warn", summary: "Error", detail: message, life: 5e3 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "userAuth p-10" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(script), null, null, _parent));
      _push(`<div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10"><div class="pb-6"><h1 class="text-3xl font-semibold text-left"> Create an account </h1><p class="text-sm">Already have an account? <a class="underline" href="/login">Log in</a></p></div><div class="w-full flex lg:flex-row-reverse flex-col justify-between gap-4"><div class="lg:w-1/2 flex flex-col justify-center items-center gap-10"><h1 class="lg:text-3xl font-semibold text-center"> Welcome to ManagerOrg </h1>`);
      if (loading.value) {
        _push(`<div class="w-full flex justify-center items-center">`);
        _push(ssrRenderComponent(Spinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form class="lg:w-1/2"><div class="flex flex-row justify-between gap-4"><div class="mb-4"><label for="name" class="block text-sm font-bold mb-2">Name</label><input type="name" id="name"${ssrRenderAttr("value", userData.value.first_name)} required class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="mb-4"><label for="surname" class="block text-sm font-bold mb-2">Surname</label><input type="surname" id="surname"${ssrRenderAttr("value", userData.value.last_name)} required class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div></div><div class="mb-4"><label for="email" class="block text-sm font-bold mb-2">Email</label><input type="email" id="email"${ssrRenderAttr("value", userData.value.email)} required class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="mb-4"><label for="password" class="block text-sm font-bold mb-2">Password</label><input type="password" id="password"${ssrRenderAttr("value", userData.value.password)} required class="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="flex items-center justify-between"><a href="/login" class="underline">Log in instead</a>`);
      _push(ssrRenderComponent(unref(script$2), {
        rounded: "",
        class: "font-bold py-2 px-4 w-1/2",
        type: "button",
        onClick: handleCreateAccount
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create account `);
          } else {
            return [
              createTextVNode(" Create account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-ghOto9IQ.mjs.map
