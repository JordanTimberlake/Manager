import { a6 as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie';
import '@supabase/supabase-js';

const auth = defineNuxtRouteMiddleware((to, from) => {
  console.log("Middleware: ", to.path);
});

export { auth as default };
//# sourceMappingURL=auth-D2gbol-d.mjs.map
