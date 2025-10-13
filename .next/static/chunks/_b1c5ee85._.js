(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/packages/data:78bc0e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0091c3dda44fb1e8a6c2cb8d8f139281980e82b4d2":"getPackages"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "getPackages",
    ()=>getPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPackages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0091c3dda44fb1e8a6c2cb8d8f139281980e82b4d2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPackages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIFNjaGVtYSBkZSB2YWxpZGHDp8OjbyBjb20gWm9kIHBhcmEgZ2FyYW50aXIgYSBpbnRlZ3JpZGFkZSBkb3MgZGFkb3MgYW50ZXMgZGVcbi8vIGVudmnDoS1sb3MgYW8gYmFuY28gZGUgZGFkb3MuIElzc28gYWRpY2lvbmEgdW1hIGNhbWFkYSBleHRyYSBkZSBzZWd1cmFuw6dhLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG4vLyBDcmlhIHVtIGNsaWVudGUgU3VwYWJhc2UgY29tIHBlcm1pc3PDtWVzIGRlIGFkbWluaXN0cmFkb3IuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG4vKipcbiAqIEJ1c2NhIGUgcmV0b3JuYSB1bSBwYWNvdGUgZGUgdmlhZ2VtIHBlbG8gc2V1IElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZUJ5SWQoaWQ6IHN0cmluZykge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogJ0lEIGRvIHBhY290ZSBuw6NvIGZvcm5lY2lkby4nIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgLmZyb20oJ3ZpYWdlbnMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBpZClcbiAgICAuc2luZ2xlKCk7IC8vIC5zaW5nbGUoKSBnYXJhbnRlIHF1ZSBhcGVuYXMgdW0gcmVnaXN0cm8gc2VqYSByZXRvcm5hZG9cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvIGFvIGJ1c2NhciBwYWNvdGUgY29tIElEICR7aWR9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBCdXNjYSBlIHJldG9ybmEgdG9kb3Mgb3MgcGFjb3RlcyBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlcygpIHtcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndmlhZ2VucycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmlhZG9fZW0nLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcGFjb3RlczonLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIHJldHVybiB7IHBhY2thZ2VzOiBkYXRhIH07XG59XG5cbi8qKlxuICogQ3JpYSB1bSBub3ZvIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5pbnNlcnQodmFsaWRhdGVkLmRhdGEpO1xuICBcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY3JpYXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogQXR1YWxpemEgdW0gcGFjb3RlIGRlIHZpYWdlbSBleGlzdGVudGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcyB8fCAhdmFsaWRhdGVkLmRhdGEuaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiB2YWxpZGF0ZWQuc3VjY2VzcyA/IFwiSUQgZG8gcGFjb3RlIMOpIG5lY2Vzc8OhcmlvLlwiIDogdmFsaWRhdGVkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB9fTtcbiAgfVxuXG4gIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSA9IHZhbGlkYXRlZC5kYXRhO1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZSh1cGRhdGVEYXRhKS5lcSgnaWQnLCBpZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV2YWxpZGF0ZVBhdGgoYC9wYWNrYWdlcy8ke2lkfWApOyAvLyBJbnZhbGlkYSBhIHDDoWdpbmEgZGUgZGV0YWxoZXMgdGFtYsOpbVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogRGVsZXRhIHVtIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQYWNrYWdlKHBhY2thZ2VJZDogc3RyaW5nKSB7XG4gIGlmICghcGFja2FnZUlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICB9XG4gIFxuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBkZWxldGFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0ErRHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:3d835c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ba2d1cf38d8987c4aa57df19bb108e3ee05c633f":"createPackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "createPackage",
    ()=>createPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createPackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ba2d1cf38d8987c4aa57df19bb108e3ee05c633f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIFNjaGVtYSBkZSB2YWxpZGHDp8OjbyBjb20gWm9kIHBhcmEgZ2FyYW50aXIgYSBpbnRlZ3JpZGFkZSBkb3MgZGFkb3MgYW50ZXMgZGVcbi8vIGVudmnDoS1sb3MgYW8gYmFuY28gZGUgZGFkb3MuIElzc28gYWRpY2lvbmEgdW1hIGNhbWFkYSBleHRyYSBkZSBzZWd1cmFuw6dhLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG4vLyBDcmlhIHVtIGNsaWVudGUgU3VwYWJhc2UgY29tIHBlcm1pc3PDtWVzIGRlIGFkbWluaXN0cmFkb3IuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG4vKipcbiAqIEJ1c2NhIGUgcmV0b3JuYSB1bSBwYWNvdGUgZGUgdmlhZ2VtIHBlbG8gc2V1IElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZUJ5SWQoaWQ6IHN0cmluZykge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogJ0lEIGRvIHBhY290ZSBuw6NvIGZvcm5lY2lkby4nIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgLmZyb20oJ3ZpYWdlbnMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBpZClcbiAgICAuc2luZ2xlKCk7IC8vIC5zaW5nbGUoKSBnYXJhbnRlIHF1ZSBhcGVuYXMgdW0gcmVnaXN0cm8gc2VqYSByZXRvcm5hZG9cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvIGFvIGJ1c2NhciBwYWNvdGUgY29tIElEICR7aWR9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBCdXNjYSBlIHJldG9ybmEgdG9kb3Mgb3MgcGFjb3RlcyBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlcygpIHtcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndmlhZ2VucycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmlhZG9fZW0nLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcGFjb3RlczonLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIHJldHVybiB7IHBhY2thZ2VzOiBkYXRhIH07XG59XG5cbi8qKlxuICogQ3JpYSB1bSBub3ZvIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5pbnNlcnQodmFsaWRhdGVkLmRhdGEpO1xuICBcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY3JpYXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogQXR1YWxpemEgdW0gcGFjb3RlIGRlIHZpYWdlbSBleGlzdGVudGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcyB8fCAhdmFsaWRhdGVkLmRhdGEuaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiB2YWxpZGF0ZWQuc3VjY2VzcyA/IFwiSUQgZG8gcGFjb3RlIMOpIG5lY2Vzc8OhcmlvLlwiIDogdmFsaWRhdGVkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB9fTtcbiAgfVxuXG4gIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSA9IHZhbGlkYXRlZC5kYXRhO1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZSh1cGRhdGVEYXRhKS5lcSgnaWQnLCBpZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV2YWxpZGF0ZVBhdGgoYC9wYWNrYWdlcy8ke2lkfWApOyAvLyBJbnZhbGlkYSBhIHDDoWdpbmEgZGUgZGV0YWxoZXMgdGFtYsOpbVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogRGVsZXRhIHVtIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQYWNrYWdlKHBhY2thZ2VJZDogc3RyaW5nKSB7XG4gIGlmICghcGFja2FnZUlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICB9XG4gIFxuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBkZWxldGFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FnRnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:532f99 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40001207baa1d7ee4d2926d93cda70d1e13b520f8d":"updatePackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "updatePackage",
    ()=>updatePackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updatePackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40001207baa1d7ee4d2926d93cda70d1e13b520f8d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIFNjaGVtYSBkZSB2YWxpZGHDp8OjbyBjb20gWm9kIHBhcmEgZ2FyYW50aXIgYSBpbnRlZ3JpZGFkZSBkb3MgZGFkb3MgYW50ZXMgZGVcbi8vIGVudmnDoS1sb3MgYW8gYmFuY28gZGUgZGFkb3MuIElzc28gYWRpY2lvbmEgdW1hIGNhbWFkYSBleHRyYSBkZSBzZWd1cmFuw6dhLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG4vLyBDcmlhIHVtIGNsaWVudGUgU3VwYWJhc2UgY29tIHBlcm1pc3PDtWVzIGRlIGFkbWluaXN0cmFkb3IuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG4vKipcbiAqIEJ1c2NhIGUgcmV0b3JuYSB1bSBwYWNvdGUgZGUgdmlhZ2VtIHBlbG8gc2V1IElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZUJ5SWQoaWQ6IHN0cmluZykge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogJ0lEIGRvIHBhY290ZSBuw6NvIGZvcm5lY2lkby4nIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgLmZyb20oJ3ZpYWdlbnMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBpZClcbiAgICAuc2luZ2xlKCk7IC8vIC5zaW5nbGUoKSBnYXJhbnRlIHF1ZSBhcGVuYXMgdW0gcmVnaXN0cm8gc2VqYSByZXRvcm5hZG9cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvIGFvIGJ1c2NhciBwYWNvdGUgY29tIElEICR7aWR9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBCdXNjYSBlIHJldG9ybmEgdG9kb3Mgb3MgcGFjb3RlcyBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlcygpIHtcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndmlhZ2VucycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmlhZG9fZW0nLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcGFjb3RlczonLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIHJldHVybiB7IHBhY2thZ2VzOiBkYXRhIH07XG59XG5cbi8qKlxuICogQ3JpYSB1bSBub3ZvIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5pbnNlcnQodmFsaWRhdGVkLmRhdGEpO1xuICBcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY3JpYXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogQXR1YWxpemEgdW0gcGFjb3RlIGRlIHZpYWdlbSBleGlzdGVudGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcyB8fCAhdmFsaWRhdGVkLmRhdGEuaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiB2YWxpZGF0ZWQuc3VjY2VzcyA/IFwiSUQgZG8gcGFjb3RlIMOpIG5lY2Vzc8OhcmlvLlwiIDogdmFsaWRhdGVkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB9fTtcbiAgfVxuXG4gIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSA9IHZhbGlkYXRlZC5kYXRhO1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZSh1cGRhdGVEYXRhKS5lcSgnaWQnLCBpZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV2YWxpZGF0ZVBhdGgoYC9wYWNrYWdlcy8ke2lkfWApOyAvLyBJbnZhbGlkYSBhIHDDoWdpbmEgZGUgZGV0YWxoZXMgdGFtYsOpbVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogRGVsZXRhIHVtIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQYWNrYWdlKHBhY2thZ2VJZDogc3RyaW5nKSB7XG4gIGlmICghcGFja2FnZUlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICB9XG4gIFxuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBkZWxldGFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FxR3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:898f65 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40a900ca3f7d6e023557003139b613e6227fc03008":"deletePackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "deletePackage",
    ()=>deletePackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deletePackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a900ca3f7d6e023557003139b613e6227fc03008", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIFNjaGVtYSBkZSB2YWxpZGHDp8OjbyBjb20gWm9kIHBhcmEgZ2FyYW50aXIgYSBpbnRlZ3JpZGFkZSBkb3MgZGFkb3MgYW50ZXMgZGVcbi8vIGVudmnDoS1sb3MgYW8gYmFuY28gZGUgZGFkb3MuIElzc28gYWRpY2lvbmEgdW1hIGNhbWFkYSBleHRyYSBkZSBzZWd1cmFuw6dhLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG4vLyBDcmlhIHVtIGNsaWVudGUgU3VwYWJhc2UgY29tIHBlcm1pc3PDtWVzIGRlIGFkbWluaXN0cmFkb3IuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG4vKipcbiAqIEJ1c2NhIGUgcmV0b3JuYSB1bSBwYWNvdGUgZGUgdmlhZ2VtIHBlbG8gc2V1IElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZUJ5SWQoaWQ6IHN0cmluZykge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogJ0lEIGRvIHBhY290ZSBuw6NvIGZvcm5lY2lkby4nIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgLmZyb20oJ3ZpYWdlbnMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBpZClcbiAgICAuc2luZ2xlKCk7IC8vIC5zaW5nbGUoKSBnYXJhbnRlIHF1ZSBhcGVuYXMgdW0gcmVnaXN0cm8gc2VqYSByZXRvcm5hZG9cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvIGFvIGJ1c2NhciBwYWNvdGUgY29tIElEICR7aWR9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBCdXNjYSBlIHJldG9ybmEgdG9kb3Mgb3MgcGFjb3RlcyBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlcygpIHtcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAuZnJvbSgndmlhZ2VucycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmlhZG9fZW0nLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcGFjb3RlczonLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIHJldHVybiB7IHBhY2thZ2VzOiBkYXRhIH07XG59XG5cbi8qKlxuICogQ3JpYSB1bSBub3ZvIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5pbnNlcnQodmFsaWRhdGVkLmRhdGEpO1xuICBcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY3JpYXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogQXR1YWxpemEgdW0gcGFjb3RlIGRlIHZpYWdlbSBleGlzdGVudGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWNrYWdlKHBrZ0RhdGE6IFBhY2thZ2VGb3JtRGF0YSkge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBQYWNrYWdlU2NoZW1hLnNhZmVQYXJzZShwa2dEYXRhKTtcbiAgaWYgKCF2YWxpZGF0ZWQuc3VjY2VzcyB8fCAhdmFsaWRhdGVkLmRhdGEuaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiB2YWxpZGF0ZWQuc3VjY2VzcyA/IFwiSUQgZG8gcGFjb3RlIMOpIG5lY2Vzc8OhcmlvLlwiIDogdmFsaWRhdGVkLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB9fTtcbiAgfVxuXG4gIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSA9IHZhbGlkYXRlZC5kYXRhO1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZSh1cGRhdGVEYXRhKS5lcSgnaWQnLCBpZCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV2YWxpZGF0ZVBhdGgoYC9wYWNrYWdlcy8ke2lkfWApOyAvLyBJbnZhbGlkYSBhIHDDoWdpbmEgZGUgZGV0YWxoZXMgdGFtYsOpbVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogRGVsZXRhIHVtIHBhY290ZSBkZSB2aWFnZW0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQYWNrYWdlKHBhY2thZ2VJZDogc3RyaW5nKSB7XG4gIGlmICghcGFja2FnZUlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICB9XG4gIFxuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBkZWxldGFyIHBhY290ZTpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcGFja2FnZXMnKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0E2SHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/PackageFormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const initialFormData = {
    origem: '',
    destino: '',
    data_ida: '',
    data_volta: '',
    meio_transporte: 'Aéreo',
    companhia: '',
    preco: 0,
    disponibilidade: 0,
    descricao: '',
    imagem_url: '',
    categoria: '',
    ativo: true
};
// Componente de Input reutilizável
const FormInput = (props)=>{
    const { label, isTextArea, isSelect, ...rest } = props;
    const commonClasses = "w-full p-3 bg-slate-100 border border-slate-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-gray-600 mb-1 block",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isTextArea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 53,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : isSelect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 54,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 55,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormInput;
function PackageFormModal(param) {
    let { isOpen, onClose, onSubmit, packageToEdit, isSaving } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormData);
    const formId = "package-form-".concat(Math.random().toString(36).substring(2, 9));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackageFormModal.useEffect": ()=>{
            if (packageToEdit) {
                const formatDate = {
                    "PackageFormModal.useEffect.formatDate": (dateString)=>{
                        if (!dateString) return '';
                        const date = new Date(dateString);
                        return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
                    }
                }["PackageFormModal.useEffect.formatDate"];
                setFormData({
                    ...packageToEdit,
                    data_ida: formatDate(packageToEdit.data_ida),
                    data_volta: formatDate(packageToEdit.data_volta)
                });
            } else {
                setFormData(initialFormData);
            }
        }
    }["PackageFormModal.useEffect"], [
        packageToEdit,
        isOpen
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData((prev)=>({
                    ...prev,
                    [name]: e.target.checked
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-5c6346ed581bf268" + " " + "bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[95vh] flex flex-col transform transition-transform duration-300 scale-95 animate-scale-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5c6346ed581bf268" + " " + "p-6 border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-5c6346ed581bf268" + " " + "text-3xl font-bold text-gray-900",
                        children: packageToEdit ? 'Editar Pacote de Viagem' : 'Adicionar Novo Pacote'
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: formId,
                    onSubmit: handleSubmit,
                    className: "jsx-5c6346ed581bf268" + " " + "flex-grow overflow-y-auto p-6 space-y-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-5c6346ed581bf268" + " " + "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                name: "destino",
                                value: formData.destino,
                                onChange: handleChange,
                                placeholder: "Ex: Salvador, BA",
                                label: "Destino",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                name: "origem",
                                value: formData.origem,
                                onChange: handleChange,
                                placeholder: "Ex: São Paulo, SP",
                                label: "Origem",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                type: "datetime-local",
                                name: "data_ida",
                                value: formData.data_ida,
                                onChange: handleChange,
                                label: "Data de Ida",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                type: "datetime-local",
                                name: "data_volta",
                                value: formData.data_volta,
                                onChange: handleChange,
                                label: "Data de Volta"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                isSelect: true,
                                name: "meio_transporte",
                                value: formData.meio_transporte,
                                onChange: handleChange,
                                label: "Meio de Transporte",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        className: "jsx-5c6346ed581bf268",
                                        children: "Aéreo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        className: "jsx-5c6346ed581bf268",
                                        children: "Terrestre"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        className: "jsx-5c6346ed581bf268",
                                        children: "Marítimo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                name: "companhia",
                                value: formData.companhia,
                                onChange: handleChange,
                                placeholder: "Ex: Azul, GOL",
                                label: "Companhia"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                type: "number",
                                name: "preco",
                                value: formData.preco,
                                onChange: handleChange,
                                placeholder: "0.00",
                                label: "Preço (BRL)",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                type: "number",
                                name: "disponibilidade",
                                value: formData.disponibilidade,
                                onChange: handleChange,
                                placeholder: "0",
                                label: "Vagas Disponíveis",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5c6346ed581bf268" + " " + "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    name: "categoria",
                                    value: formData.categoria,
                                    onChange: handleChange,
                                    placeholder: "Ex: Praia, Aventura, Família",
                                    label: "Categoria"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5c6346ed581bf268" + " " + "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    name: "imagem_url",
                                    value: formData.imagem_url,
                                    onChange: handleChange,
                                    placeholder: "https://exemplo.com/imagem.jpg",
                                    label: "URL da Imagem de Capa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5c6346ed581bf268" + " " + "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    isTextArea: true,
                                    name: "descricao",
                                    value: formData.descricao,
                                    onChange: handleChange,
                                    placeholder: "Descreva os detalhes do pacote, o que está incluso, etc.",
                                    label: "Descrição do Pacote",
                                    rows: 5
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5c6346ed581bf268" + " " + "flex items-center gap-3 md:col-span-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "ativo",
                                        name: "ativo",
                                        checked: formData.ativo,
                                        onChange: handleChange,
                                        className: "jsx-5c6346ed581bf268" + " " + "h-5 w-5 rounded text-green-600 focus:ring-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "ativo",
                                        className: "jsx-5c6346ed581bf268" + " " + "font-medium text-gray-800",
                                        children: "Pacote Ativo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5c6346ed581bf268" + " " + "p-6 border-t border-gray-200 bg-gray-50/50 flex justify-end gap-4 rounded-b-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isSaving,
                            className: "jsx-5c6346ed581bf268" + " " + "py-2 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all transform hover:scale-105 disabled:opacity-50",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            form: formId,
                            disabled: isSaving,
                            className: "jsx-5c6346ed581bf268" + " " + "py-2 px-8 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait",
                            children: isSaving ? 'Salvando...' : 'Salvar Pacote'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "5c6346ed581bf268",
                    children: "form.jsx-5c6346ed581bf268{-ms-overflow-style:none;scrollbar-width:none}form.jsx-5c6346ed581bf268::-webkit-scrollbar{display:none}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(PackageFormModal, "t5JvwbZkNBMuk3VLLCoXVrocLqw=");
_c1 = PackageFormModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "FormInput");
__turbopack_context__.k.register(_c1, "PackageFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPackagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$78bc0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:78bc0e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$3d835c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:3d835c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$532f99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:532f99 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$898f65__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:898f65 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$PackageFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/packages/PackageFormModal.tsx [app-client] (ecmascript)"); // Importa o componente do modal
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AdminPackagesPage() {
    _s();
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [packageToEdit, setPackageToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // Função para carregar os pacotes do servidor
    const loadPackages = async ()=>{
        setLoading(true);
        const { packages, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$78bc0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPackages"])();
        if (error) {
            console.error("Falha ao carregar pacotes:", error.message);
        // TODO: Adicionar um feedback visual de erro para o usuário
        } else if (packages) {
            setPackages(packages);
        }
        setLoading(false);
    };
    // Carrega os pacotes quando a página é montada
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPackagesPage.useEffect": ()=>{
            loadPackages();
        }
    }["AdminPackagesPage.useEffect"], []);
    // Funções para controlar o modal
    const handleOpenCreateModal = ()=>{
        setPackageToEdit(null);
        setIsModalOpen(true);
    };
    const handleOpenEditModal = (pkg)=>{
        setPackageToEdit(pkg);
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        setPackageToEdit(null);
    };
    // Função para lidar com o submit do formulário (criar ou atualizar)
    const handleSubmit = async (formData)=>{
        startTransition(async ()=>{
            const action = formData.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$532f99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePackage"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$3d835c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPackage"];
            const result = await action(formData);
            if (result.error) {
                console.error("Erro ao salvar pacote:", result.error.message);
            // TODO: Mostrar erro no formulário
            } else {
                handleCloseModal();
                await loadPackages(); // Recarrega a lista
            }
        });
    };
    // Função para deletar um pacote
    const handleDelete = async (packageId)=>{
        if (window.confirm("Tem certeza que deseja excluir este pacote? Esta ação não pode ser desfeita.")) {
            startTransition(async ()=>{
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$898f65__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePackage"])(packageId);
                if (result.error) {
                    console.error("Erro ao deletar pacote:", result.error.message);
                } else {
                    await loadPackages(); // Recarrega a lista
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$PackageFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: handleCloseModal,
                onSubmit: handleSubmit,
                packageToEdit: packageToEdit,
                isSaving: isSaving
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-xl shadow-lg animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Gerenciamento de Pacotes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleOpenCreateModal,
                                className: "py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 cursor-pointer transform hover:scale-105",
                                children: "+ Adicionar Pacote"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/packages/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
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
                                                children: "Destino"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Origem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Preço"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Disponibilidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider",
                                                children: "Ações"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/packages/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "py-10 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 animate-pulse",
                                                children: "Carregando pacotes..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 65
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/packages/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this) : packages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "py-10 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: "Nenhum pacote cadastrado ainda."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm mt-1",
                                                    children: 'Clique em "Adicionar Pacote" para começar.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/packages/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this) : packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 transition-colors duration-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-5 font-medium text-gray-800",
                                                    children: pkg.destino
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-5 text-gray-600",
                                                    children: pkg.origem
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-5 text-gray-600",
                                                    children: new Intl.NumberFormat('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(pkg.preco)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-5 text-center text-gray-600",
                                                    children: pkg.disponibilidade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-5 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleOpenEditModal(pkg),
                                                                className: "font-medium text-sky-600 hover:text-sky-800 transition-colors cursor-pointer",
                                                                children: "Editar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(pkg.id),
                                                                disabled: isSaving,
                                                                className: "font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer disabled:opacity-50",
                                                                children: "Excluir"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/packages/page.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/packages/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, pkg.id, true, {
                                            fileName: "[project]/src/app/admin/packages/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/packages/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/packages/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/packages/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AdminPackagesPage, "Ky3wY/Uwl2oExHoM4VceeYdblS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = AdminPackagesPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPackagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
]);

//# sourceMappingURL=_b1c5ee85._.js.map