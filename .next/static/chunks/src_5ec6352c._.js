(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dbbibutyatofxmxxlqdi.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYmlidXR5YXRvZnhteHhscWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3Njc0NDEsImV4cCI6MjA3MzM0MzQ0MX0.lSCs25CK8P6JxRpNTVxLUc1koOzuE_wSOtPZw9V9--U");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/data:7efd9d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0019b974b6cf46e725928bea2998c35e9bbb6c7a8a":"getUsers"},"src/app/admin/actions.ts",""] */ __turbopack_context__.s([
    "getUsers",
    ()=>getUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUsers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0019b974b6cf46e725928bea2998c35e9bbb6c7a8a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUsers"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG4vLyBFc3RhIGZ1bsOnw6NvIGNyaWEgdW0gY2xpZW50ZSBTdXBhYmFzZSBjb20gcGVybWlzc8O1ZXMgZGUgYWRtaW5pc3RyYWRvci5cbi8vIEVsYSBVU0EgdmFyacOhdmVpcyBkZSBhbWJpZW50ZSBlIFPDkyBERVZFIHJvZGFyIG5vIHNlcnZpZG9yLlxuY29uc3QgY3JlYXRlQWRtaW5DbGllbnQgPSAoKSA9PiB7XG4gIGlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIHx8ICFwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVmFyacOhdmVpcyBkZSBhbWJpZW50ZSBkbyBTdXBhYmFzZSBuw6NvIGNvbmZpZ3VyYWRhcy4nKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2xpZW50KFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCxcbiAgICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWSxcbiAgICB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgICBwZXJzaXN0U2Vzc2lvbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG5cbi8vIEHDp8OjbyBwYXJhIGJ1c2NhciB0b2RvcyBvcyB1c3XDoXJpb3MgZSBzdWFzIHBlcm1pc3PDtWVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YTogeyB1c2VyczogYXV0aFVzZXJzIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uYXV0aC5hZG1pbi5saXN0VXNlcnMoKTtcbiAgaWYgKGF1dGhFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciB1c3XDoXJpb3M6XCIsIGF1dGhFcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGF1dGhFcnJvciB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByb2xlcywgZXJyb3I6IHJvbGVzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndXNlcl9yb2xlcycpXG4gICAgLnNlbGVjdCgndXNlcl9pZCwgcm9sZScpO1xuICBpZiAocm9sZXNFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBwZXJtaXNzw7VlczpcIiwgcm9sZXNFcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHJvbGVzRXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJvbGVzTWFwID0gbmV3IE1hcChyb2xlcy5tYXAociA9PiBbci51c2VyX2lkLCByLnJvbGVdKSk7XG5cbiAgY29uc3QgY29tYmluZWRVc2VycyA9IGF1dGhVc2Vycy5tYXAodXNlciA9PiAoe1xuICAgIGlkOiB1c2VyLmlkLFxuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHJvbGU6IHJvbGVzTWFwLmdldCh1c2VyLmlkKSB8fCAnVVNFUicsXG4gIH0pKTtcblxuICByZXR1cm4geyB1c2VyczogY29tYmluZWRVc2VycyB9O1xufVxuXG4vLyBBw6fDo28gcGFyYSBkZWZpbmlyIGEgcGVybWlzc8OjbyBkZSB1bSB1c3XDoXJpb1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJSb2xlKHRhcmdldFVzZXJJZDogc3RyaW5nLCBuZXdSb2xlOiAnQURNSU4nIHwgJ1VTRVInKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxuICAgIC5mcm9tKCd1c2VyX3JvbGVzJylcbiAgICAudXBzZXJ0KHsgdXNlcl9pZDogdGFyZ2V0VXNlcklkLCByb2xlOiBuZXdSb2xlIH0sIHsgb25Db25mbGljdDogJ3VzZXJfaWQnIH0pXG4gICAgLnNlbGVjdCgpO1xuICAgIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBhdHVhbGl6YXIgcGVybWlzc8OjbzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICAvLyBMaW1wYSBvIGNhY2hlIGRhIHDDoWdpbmEgZGUgYWRtaW4gcGFyYSBxdWUgb3MgZGFkb3Mgc2VqYW0gcmVjYXJyZWdhZG9zXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4nKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwUkF3QnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/data:73e3e5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60fa609c4b2fc434374811bf3532cb1f23e24f423e":"updateUserRole"},"src/app/admin/actions.ts",""] */ __turbopack_context__.s([
    "updateUserRole",
    ()=>updateUserRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateUserRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60fa609c4b2fc434374811bf3532cb1f23e24f423e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserRole"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG4vLyBFc3RhIGZ1bsOnw6NvIGNyaWEgdW0gY2xpZW50ZSBTdXBhYmFzZSBjb20gcGVybWlzc8O1ZXMgZGUgYWRtaW5pc3RyYWRvci5cbi8vIEVsYSBVU0EgdmFyacOhdmVpcyBkZSBhbWJpZW50ZSBlIFPDkyBERVZFIHJvZGFyIG5vIHNlcnZpZG9yLlxuY29uc3QgY3JlYXRlQWRtaW5DbGllbnQgPSAoKSA9PiB7XG4gIGlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIHx8ICFwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVmFyacOhdmVpcyBkZSBhbWJpZW50ZSBkbyBTdXBhYmFzZSBuw6NvIGNvbmZpZ3VyYWRhcy4nKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2xpZW50KFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCxcbiAgICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWSxcbiAgICB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgICBwZXJzaXN0U2Vzc2lvbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG5cbi8vIEHDp8OjbyBwYXJhIGJ1c2NhciB0b2RvcyBvcyB1c3XDoXJpb3MgZSBzdWFzIHBlcm1pc3PDtWVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YTogeyB1c2VyczogYXV0aFVzZXJzIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uYXV0aC5hZG1pbi5saXN0VXNlcnMoKTtcbiAgaWYgKGF1dGhFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciB1c3XDoXJpb3M6XCIsIGF1dGhFcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGF1dGhFcnJvciB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhOiByb2xlcywgZXJyb3I6IHJvbGVzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndXNlcl9yb2xlcycpXG4gICAgLnNlbGVjdCgndXNlcl9pZCwgcm9sZScpO1xuICBpZiAocm9sZXNFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBwZXJtaXNzw7VlczpcIiwgcm9sZXNFcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHJvbGVzRXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHJvbGVzTWFwID0gbmV3IE1hcChyb2xlcy5tYXAociA9PiBbci51c2VyX2lkLCByLnJvbGVdKSk7XG5cbiAgY29uc3QgY29tYmluZWRVc2VycyA9IGF1dGhVc2Vycy5tYXAodXNlciA9PiAoe1xuICAgIGlkOiB1c2VyLmlkLFxuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHJvbGU6IHJvbGVzTWFwLmdldCh1c2VyLmlkKSB8fCAnVVNFUicsXG4gIH0pKTtcblxuICByZXR1cm4geyB1c2VyczogY29tYmluZWRVc2VycyB9O1xufVxuXG4vLyBBw6fDo28gcGFyYSBkZWZpbmlyIGEgcGVybWlzc8OjbyBkZSB1bSB1c3XDoXJpb1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJSb2xlKHRhcmdldFVzZXJJZDogc3RyaW5nLCBuZXdSb2xlOiAnQURNSU4nIHwgJ1VTRVInKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxuICAgIC5mcm9tKCd1c2VyX3JvbGVzJylcbiAgICAudXBzZXJ0KHsgdXNlcl9pZDogdGFyZ2V0VXNlcklkLCByb2xlOiBuZXdSb2xlIH0sIHsgb25Db25mbGljdDogJ3VzZXJfaWQnIH0pXG4gICAgLnNlbGVjdCgpO1xuICAgIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBhdHVhbGl6YXIgcGVybWlzc8OjbzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICAvLyBMaW1wYSBvIGNhY2hlIGRhIHDDoWdpbmEgZGUgYWRtaW4gcGFyYSBxdWUgb3MgZGFkb3Mgc2VqYW0gcmVjYXJyZWdhZG9zXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4nKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0FxRHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminUsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$data$3a$7efd9d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/data:7efd9d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$data$3a$73e3e5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/data:73e3e5 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminUsersPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // A lógica para carregar e gerenciar usuários permanece a mesma.
    const loadUsers = async ()=>{
        const { users, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$data$3a$7efd9d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUsers"])();
        if (error) {
            console.error("Falha ao carregar usuários:", error.message);
        } else if (users) {
            setUsers(users);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminUsersPage.useEffect": ()=>{
            const checkAdminAndFetchUsers = {
                "AdminUsersPage.useEffect.checkAdminAndFetchUsers": async ()=>{
                    setLoading(true);
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (user) {
                        setCurrentUserId(user.id);
                        const { data: userRole } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_roles').select('role').eq('user_id', user.id).single();
                        if ((userRole === null || userRole === void 0 ? void 0 : userRole.role) !== 'ADMIN') {
                            router.push('/home');
                        } else {
                            await loadUsers();
                        }
                    } else {
                        router.push('/login');
                    }
                    setLoading(false);
                }
            }["AdminUsersPage.useEffect.checkAdminAndFetchUsers"];
            checkAdminAndFetchUsers();
        }
    }["AdminUsersPage.useEffect"], [
        router
    ]);
    const handleRoleChange = (targetUserId, newRole)=>{
        if (targetUserId === currentUserId) {
            alert("Você não pode alterar sua própria permissão.");
            return;
        }
        startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$data$3a$73e3e5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserRole"])(targetUserId, newRole);
            await loadUsers();
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-semibold text-gray-700 animate-pulse",
                children: "Carregando usuários..."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-gray-900 mb-6",
                children: "Gerenciamento de Usuários"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                        children: "Permissão"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                        children: "Ações"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200",
                            children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-slate-50 transition-colors duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-5 font-medium text-gray-800",
                                            children: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "py-1 px-3 rounded-full text-xs font-bold ".concat(user.role === 'ADMIN' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'),
                                                children: user.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-5 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2",
                                                children: user.id !== currentUserId ? user.role === 'ADMIN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRoleChange(user.id, 'USER'),
                                                    disabled: isPending,
                                                    className: "py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                                                    children: isPending ? 'Aguarde...' : 'Remover Admin'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRoleChange(user.id, 'ADMIN'),
                                                    disabled: isPending,
                                                    className: "py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                                                    children: isPending ? 'Aguarde...' : 'Tornar Admin'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-400 italic",
                                                    children: "Você"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(AdminUsersPage, "s8PjxtOg5byN4GSdI2lls8WEe3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = AdminUsersPage;
var _c;
__turbopack_context__.k.register(_c, "AdminUsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5ec6352c._.js.map