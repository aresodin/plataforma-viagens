(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/packages/data:f85d3e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0091c3dda44fb1e8a6c2cb8d8f139281980e82b4d2":"getPackages"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "getPackages",
    ()=>getPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPackages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0091c3dda44fb1e8a6c2cb8d8f139281980e82b4d2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPackages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIENPUlJFw4fDg086IE8gZXNxdWVtYSBwYXJhIGEgVVJMIGRhIGltYWdlbSBmb2kgYWp1c3RhZG8uXG4vLyAudXJsKCkgLSBHYXJhbnRlIHF1ZSwgc2UgdW1hIHN0cmluZyBmb3IgZm9ybmVjaWRhLCBlbGEgREVWRSBzZXIgdW1hIFVSTCB2w6FsaWRhLlxuLy8gLm9yKHoubGl0ZXJhbCgnJykpIC0gUGVybWl0ZSBxdWUgYSBzdHJpbmcgc2VqYSB2YXppYS5cbi8vIC5udWxsYWJsZSgpLm9wdGlvbmFsKCkgLSBQZXJtaXRlIHF1ZSBvIGNhbXBvIHNlamEgbnVsbyBvdSBuw6NvIGRlZmluaWRvLlxuLy8gSXNzbyBjb2JyZSB0b2RvcyBvcyBjYXNvczogVVJMIHbDoWxpZGEsIHN0cmluZyB2YXppYSwgb3UgYXVzw6puY2lhIGRvIGNhbXBvLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5vcih6LmxpdGVyYWwoJycpKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlQnlJZChpZDogc3RyaW5nKSB7XG4gIGlmICghaWQpIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdJRCBkbyBwYWNvdGUgbsOjbyBmb3JuZWNpZG8uJyB9IH07XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5lcSgnaWQnLCBpZCkuc2luZ2xlKCk7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm8gYW8gYnVzY2FyIHBhY290ZSBjb20gSUQgJHtpZH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZXMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5vcmRlcignY3JpYWRvX2VtJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBwYWNvdGVzOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV0dXJuIHsgcGFja2FnZXM6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcbiAgICAvLyBBZGljaW9uYW5kbyB1bSBsb2cgcGFyYSB2ZXIgb3MgZXJyb3MgZGUgdmFsaWRhw6fDo28gbm8gc2Vydmlkb3JcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkZSB2YWxpZGHDp8OjbyBhbyBjcmlhciBwYWNvdGU6XCIsIHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICAvLyBTZSBhIGltYWdlbV91cmwgZm9yIHVtYSBzdHJpbmcgdmF6aWEsIGNvbnZlcnRlIHBhcmEgbnVsbCBhbnRlcyBkZSBpbnNlcmlyXG4gIGNvbnN0IGRhdGFUb0luc2VydCA9IHtcbiAgICAuLi52YWxpZGF0ZWQuZGF0YSxcbiAgICBpbWFnZW1fdXJsOiB2YWxpZGF0ZWQuZGF0YS5pbWFnZW1fdXJsIHx8IG51bGwsXG4gIH07XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuaW5zZXJ0KGRhdGFUb0luc2VydCk7XG4gIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBjcmlhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3BhY2thZ2VzJyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MgfHwgIXZhbGlkYXRlZC5kYXRhLmlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogdmFsaWRhdGVkLnN1Y2Nlc3MgPyBcIklEIGRvIHBhY290ZSDDqSBuZWNlc3PDoXJpby5cIiA6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cblxuICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSB2YWxpZGF0ZWQuZGF0YTtcbiAgXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IHtcbiAgICAuLi51cGRhdGVEYXRhLFxuICAgIGltYWdlbV91cmw6IHVwZGF0ZURhdGEuaW1hZ2VtX3VybCB8fCBudWxsLFxuICB9O1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZShkYXRhVG9VcGRhdGUpLmVxKCdpZCcsIGlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBhdHVhbGl6YXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXZhbGlkYXRlUGF0aChgL3BhY2thZ2VzLyR7aWR9YCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFja2FnZShwYWNrYWdlSWQ6IHN0cmluZykge1xuICBpZiAoIXBhY2thZ2VJZCkgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gZG8gU3VwYWJhc2UgYW8gZGVsZXRhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNTQW9Ec0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:2c861a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ba2d1cf38d8987c4aa57df19bb108e3ee05c633f":"createPackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "createPackage",
    ()=>createPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createPackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ba2d1cf38d8987c4aa57df19bb108e3ee05c633f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIENPUlJFw4fDg086IE8gZXNxdWVtYSBwYXJhIGEgVVJMIGRhIGltYWdlbSBmb2kgYWp1c3RhZG8uXG4vLyAudXJsKCkgLSBHYXJhbnRlIHF1ZSwgc2UgdW1hIHN0cmluZyBmb3IgZm9ybmVjaWRhLCBlbGEgREVWRSBzZXIgdW1hIFVSTCB2w6FsaWRhLlxuLy8gLm9yKHoubGl0ZXJhbCgnJykpIC0gUGVybWl0ZSBxdWUgYSBzdHJpbmcgc2VqYSB2YXppYS5cbi8vIC5udWxsYWJsZSgpLm9wdGlvbmFsKCkgLSBQZXJtaXRlIHF1ZSBvIGNhbXBvIHNlamEgbnVsbyBvdSBuw6NvIGRlZmluaWRvLlxuLy8gSXNzbyBjb2JyZSB0b2RvcyBvcyBjYXNvczogVVJMIHbDoWxpZGEsIHN0cmluZyB2YXppYSwgb3UgYXVzw6puY2lhIGRvIGNhbXBvLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5vcih6LmxpdGVyYWwoJycpKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlQnlJZChpZDogc3RyaW5nKSB7XG4gIGlmICghaWQpIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdJRCBkbyBwYWNvdGUgbsOjbyBmb3JuZWNpZG8uJyB9IH07XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5lcSgnaWQnLCBpZCkuc2luZ2xlKCk7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm8gYW8gYnVzY2FyIHBhY290ZSBjb20gSUQgJHtpZH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZXMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5vcmRlcignY3JpYWRvX2VtJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBwYWNvdGVzOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV0dXJuIHsgcGFja2FnZXM6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcbiAgICAvLyBBZGljaW9uYW5kbyB1bSBsb2cgcGFyYSB2ZXIgb3MgZXJyb3MgZGUgdmFsaWRhw6fDo28gbm8gc2Vydmlkb3JcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkZSB2YWxpZGHDp8OjbyBhbyBjcmlhciBwYWNvdGU6XCIsIHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICAvLyBTZSBhIGltYWdlbV91cmwgZm9yIHVtYSBzdHJpbmcgdmF6aWEsIGNvbnZlcnRlIHBhcmEgbnVsbCBhbnRlcyBkZSBpbnNlcmlyXG4gIGNvbnN0IGRhdGFUb0luc2VydCA9IHtcbiAgICAuLi52YWxpZGF0ZWQuZGF0YSxcbiAgICBpbWFnZW1fdXJsOiB2YWxpZGF0ZWQuZGF0YS5pbWFnZW1fdXJsIHx8IG51bGwsXG4gIH07XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuaW5zZXJ0KGRhdGFUb0luc2VydCk7XG4gIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBjcmlhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3BhY2thZ2VzJyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MgfHwgIXZhbGlkYXRlZC5kYXRhLmlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogdmFsaWRhdGVkLnN1Y2Nlc3MgPyBcIklEIGRvIHBhY290ZSDDqSBuZWNlc3PDoXJpby5cIiA6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cblxuICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSB2YWxpZGF0ZWQuZGF0YTtcbiAgXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IHtcbiAgICAuLi51cGRhdGVEYXRhLFxuICAgIGltYWdlbV91cmw6IHVwZGF0ZURhdGEuaW1hZ2VtX3VybCB8fCBudWxsLFxuICB9O1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZShkYXRhVG9VcGRhdGUpLmVxKCdpZCcsIGlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBhdHVhbGl6YXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXZhbGlkYXRlUGF0aChgL3BhY2thZ2VzLyR7aWR9YCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFja2FnZShwYWNrYWdlSWQ6IHN0cmluZykge1xuICBpZiAoIXBhY2thZ2VJZCkgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gZG8gU3VwYWJhc2UgYW8gZGVsZXRhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQStEc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:0cc18f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40001207baa1d7ee4d2926d93cda70d1e13b520f8d":"updatePackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "updatePackage",
    ()=>updatePackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updatePackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40001207baa1d7ee4d2926d93cda70d1e13b520f8d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIENPUlJFw4fDg086IE8gZXNxdWVtYSBwYXJhIGEgVVJMIGRhIGltYWdlbSBmb2kgYWp1c3RhZG8uXG4vLyAudXJsKCkgLSBHYXJhbnRlIHF1ZSwgc2UgdW1hIHN0cmluZyBmb3IgZm9ybmVjaWRhLCBlbGEgREVWRSBzZXIgdW1hIFVSTCB2w6FsaWRhLlxuLy8gLm9yKHoubGl0ZXJhbCgnJykpIC0gUGVybWl0ZSBxdWUgYSBzdHJpbmcgc2VqYSB2YXppYS5cbi8vIC5udWxsYWJsZSgpLm9wdGlvbmFsKCkgLSBQZXJtaXRlIHF1ZSBvIGNhbXBvIHNlamEgbnVsbyBvdSBuw6NvIGRlZmluaWRvLlxuLy8gSXNzbyBjb2JyZSB0b2RvcyBvcyBjYXNvczogVVJMIHbDoWxpZGEsIHN0cmluZyB2YXppYSwgb3UgYXVzw6puY2lhIGRvIGNhbXBvLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5vcih6LmxpdGVyYWwoJycpKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlQnlJZChpZDogc3RyaW5nKSB7XG4gIGlmICghaWQpIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdJRCBkbyBwYWNvdGUgbsOjbyBmb3JuZWNpZG8uJyB9IH07XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5lcSgnaWQnLCBpZCkuc2luZ2xlKCk7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm8gYW8gYnVzY2FyIHBhY290ZSBjb20gSUQgJHtpZH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZXMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5vcmRlcignY3JpYWRvX2VtJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBwYWNvdGVzOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV0dXJuIHsgcGFja2FnZXM6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcbiAgICAvLyBBZGljaW9uYW5kbyB1bSBsb2cgcGFyYSB2ZXIgb3MgZXJyb3MgZGUgdmFsaWRhw6fDo28gbm8gc2Vydmlkb3JcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkZSB2YWxpZGHDp8OjbyBhbyBjcmlhciBwYWNvdGU6XCIsIHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICAvLyBTZSBhIGltYWdlbV91cmwgZm9yIHVtYSBzdHJpbmcgdmF6aWEsIGNvbnZlcnRlIHBhcmEgbnVsbCBhbnRlcyBkZSBpbnNlcmlyXG4gIGNvbnN0IGRhdGFUb0luc2VydCA9IHtcbiAgICAuLi52YWxpZGF0ZWQuZGF0YSxcbiAgICBpbWFnZW1fdXJsOiB2YWxpZGF0ZWQuZGF0YS5pbWFnZW1fdXJsIHx8IG51bGwsXG4gIH07XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuaW5zZXJ0KGRhdGFUb0luc2VydCk7XG4gIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBjcmlhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3BhY2thZ2VzJyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MgfHwgIXZhbGlkYXRlZC5kYXRhLmlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogdmFsaWRhdGVkLnN1Y2Nlc3MgPyBcIklEIGRvIHBhY290ZSDDqSBuZWNlc3PDoXJpby5cIiA6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cblxuICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSB2YWxpZGF0ZWQuZGF0YTtcbiAgXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IHtcbiAgICAuLi51cGRhdGVEYXRhLFxuICAgIGltYWdlbV91cmw6IHVwZGF0ZURhdGEuaW1hZ2VtX3VybCB8fCBudWxsLFxuICB9O1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZShkYXRhVG9VcGRhdGUpLmVxKCdpZCcsIGlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBhdHVhbGl6YXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXZhbGlkYXRlUGF0aChgL3BhY2thZ2VzLyR7aWR9YCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFja2FnZShwYWNrYWdlSWQ6IHN0cmluZykge1xuICBpZiAoIXBhY2thZ2VJZCkgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gZG8gU3VwYWJhc2UgYW8gZGVsZXRhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQTBGc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/packages/data:645fc2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40a900ca3f7d6e023557003139b613e6227fc03008":"deletePackage"},"src/app/admin/packages/actions.ts",""] */ __turbopack_context__.s([
    "deletePackage",
    ()=>deletePackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deletePackage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a900ca3f7d6e023557003139b613e6227fc03008", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePackage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5cbi8vIENPUlJFw4fDg086IE8gZXNxdWVtYSBwYXJhIGEgVVJMIGRhIGltYWdlbSBmb2kgYWp1c3RhZG8uXG4vLyAudXJsKCkgLSBHYXJhbnRlIHF1ZSwgc2UgdW1hIHN0cmluZyBmb3IgZm9ybmVjaWRhLCBlbGEgREVWRSBzZXIgdW1hIFVSTCB2w6FsaWRhLlxuLy8gLm9yKHoubGl0ZXJhbCgnJykpIC0gUGVybWl0ZSBxdWUgYSBzdHJpbmcgc2VqYSB2YXppYS5cbi8vIC5udWxsYWJsZSgpLm9wdGlvbmFsKCkgLSBQZXJtaXRlIHF1ZSBvIGNhbXBvIHNlamEgbnVsbyBvdSBuw6NvIGRlZmluaWRvLlxuLy8gSXNzbyBjb2JyZSB0b2RvcyBvcyBjYXNvczogVVJMIHbDoWxpZGEsIHN0cmluZyB2YXppYSwgb3UgYXVzw6puY2lhIGRvIGNhbXBvLlxuY29uc3QgUGFja2FnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2VtOiB6LnN0cmluZygpLm1pbigxLCBcIk9yaWdlbSDDqSBvYnJpZ2F0w7NyaWEuXCIpLFxuICBkZXN0aW5vOiB6LnN0cmluZygpLm1pbigxLCBcIkRlc3Rpbm8gw6kgb2JyaWdhdMOzcmlvLlwiKSxcbiAgZGF0YV9pZGE6IHouc3RyaW5nKCkubWluKDEsIFwiRGF0YSBkZSBpZGEgw6kgb2JyaWdhdMOzcmlhLlwiKSxcbiAgZGF0YV92b2x0YTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1laW9fdHJhbnNwb3J0ZTogei5zdHJpbmcoKSxcbiAgY29tcGFuaGlhOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgcHJlY286IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiTyBwcmXDp28gZGV2ZSBzZXIgcG9zaXRpdm8uXCIpLFxuICBkaXNwb25pYmlsaWRhZGU6IHouY29lcmNlLm51bWJlcigpLmludCgpLm1pbigwLCBcIkEgZGlzcG9uaWJpbGlkYWRlIG7Do28gcG9kZSBzZXIgbmVnYXRpdmEuXCIpLFxuICBkZXNjcmljYW86IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBpbWFnZW1fdXJsOiB6LnN0cmluZygpLnVybChcIlVSTCBkYSBpbWFnZW0gaW52w6FsaWRhLlwiKS5vcih6LmxpdGVyYWwoJycpKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGNhdGVnb3JpYTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGF0aXZvOiB6LmJvb2xlYW4oKSxcbn0pO1xuXG50eXBlIFBhY2thZ2VGb3JtRGF0YSA9IHouaW5mZXI8dHlwZW9mIFBhY2thZ2VTY2hlbWE+O1xuXG5jb25zdCBjcmVhdGVBZG1pbkNsaWVudCA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpw6F2ZWlzIGRlIGFtYmllbnRlIGRvIFN1cGFiYXNlIG7Do28gY29uZmlndXJhZGFzLicpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlQnlJZChpZDogc3RyaW5nKSB7XG4gIGlmICghaWQpIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdJRCBkbyBwYWNvdGUgbsOjbyBmb3JuZWNpZG8uJyB9IH07XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5lcSgnaWQnLCBpZCkuc2luZ2xlKCk7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm8gYW8gYnVzY2FyIHBhY290ZSBjb20gSUQgJHtpZH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuICByZXR1cm4geyBwa2c6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZXMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluLmZyb20oJ3ZpYWdlbnMnKS5zZWxlY3QoJyonKS5vcmRlcignY3JpYWRvX2VtJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBwYWNvdGVzOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV0dXJuIHsgcGFja2FnZXM6IGRhdGEgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcbiAgICAvLyBBZGljaW9uYW5kbyB1bSBsb2cgcGFyYSB2ZXIgb3MgZXJyb3MgZGUgdmFsaWRhw6fDo28gbm8gc2Vydmlkb3JcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkZSB2YWxpZGHDp8OjbyBhbyBjcmlhciBwYWNvdGU6XCIsIHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cbiAgXG4gIGNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xuICAvLyBTZSBhIGltYWdlbV91cmwgZm9yIHVtYSBzdHJpbmcgdmF6aWEsIGNvbnZlcnRlIHBhcmEgbnVsbCBhbnRlcyBkZSBpbnNlcmlyXG4gIGNvbnN0IGRhdGFUb0luc2VydCA9IHtcbiAgICAuLi52YWxpZGF0ZWQuZGF0YSxcbiAgICBpbWFnZW1fdXJsOiB2YWxpZGF0ZWQuZGF0YS5pbWFnZW1fdXJsIHx8IG51bGwsXG4gIH07XG5cbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuaW5zZXJ0KGRhdGFUb0luc2VydCk7XG4gIFxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBjcmlhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3BhY2thZ2VzJyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFja2FnZShwa2dEYXRhOiBQYWNrYWdlRm9ybURhdGEpIHtcbiAgY29uc3QgdmFsaWRhdGVkID0gUGFja2FnZVNjaGVtYS5zYWZlUGFyc2UocGtnRGF0YSk7XG4gIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MgfHwgIXZhbGlkYXRlZC5kYXRhLmlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogdmFsaWRhdGVkLnN1Y2Nlc3MgPyBcIklEIGRvIHBhY290ZSDDqSBuZWNlc3PDoXJpby5cIiA6IHZhbGlkYXRlZC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfX07XG4gIH1cblxuICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSB2YWxpZGF0ZWQuZGF0YTtcbiAgXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IHtcbiAgICAuLi51cGRhdGVEYXRhLFxuICAgIGltYWdlbV91cmw6IHVwZGF0ZURhdGEuaW1hZ2VtX3VybCB8fCBudWxsLFxuICB9O1xuICBcbiAgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uZnJvbSgndmlhZ2VucycpLnVwZGF0ZShkYXRhVG9VcGRhdGUpLmVxKCdpZCcsIGlkKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBkbyBTdXBhYmFzZSBhbyBhdHVhbGl6YXIgcGFjb3RlOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXZhbGlkYXRlUGF0aChgL3BhY2thZ2VzLyR7aWR9YCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFja2FnZShwYWNrYWdlSWQ6IHN0cmluZykge1xuICBpZiAoIXBhY2thZ2VJZCkgcmV0dXJuIHsgZXJyb3I6IHsgbWVzc2FnZTogXCJJRCBkbyBwYWNvdGUgw6kgbmVjZXNzw6FyaW8uXCIgfSB9O1xuICBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKCd2aWFnZW5zJykuZGVsZXRlKCkuZXEoJ2lkJywgcGFja2FnZUlkKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gZG8gU3VwYWJhc2UgYW8gZGVsZXRhciBwYWNvdGU6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbiAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wYWNrYWdlcycpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQXFIc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
                lineNumber: 51,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isTextArea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 52,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : isSelect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 53,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...rest,
                className: commonClasses
            }, void 0, false, {
                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                lineNumber: 54,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
        lineNumber: 50,
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
            if (isOpen) {
                if (packageToEdit) {
                    // CORREÇÃO: Mapeia o objeto 'packageToEdit' e substitui qualquer valor 'null' ou 'undefined' por uma string vazia.
                    const sanitizedData = Object.entries(packageToEdit).reduce({
                        "PackageFormModal.useEffect.sanitizedData": (acc, param)=>{
                            let [key, value] = param;
                            acc[key] = value === null || value === undefined ? '' : value;
                            return acc;
                        }
                    }["PackageFormModal.useEffect.sanitizedData"], {});
                    const formatDate = {
                        "PackageFormModal.useEffect.formatDate": (dateString)=>{
                            if (!dateString) return '';
                            const date = new Date(dateString);
                            // Validação para evitar "Invalid Date"
                            return !isNaN(date.getTime()) ? new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16) : '';
                        }
                    }["PackageFormModal.useEffect.formatDate"];
                    setFormData({
                        ...initialFormData,
                        ...sanitizedData,
                        data_ida: formatDate(sanitizedData.data_ida || ''),
                        data_volta: formatDate(sanitizedData.data_volta || '')
                    });
                } else {
                    setFormData(initialFormData); // Reseta para o formulário de criação
                }
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
            className: "bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[95vh] flex flex-col transform transition-transform duration-300 scale-95 animate-scale-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-900",
                        children: packageToEdit ? 'Editar Pacote de Viagem' : 'Adicionar Novo Pacote'
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: formId,
                    onSubmit: handleSubmit,
                    className: "flex-grow overflow-y-auto p-6 space-y-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5",
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
                                lineNumber: 118,
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
                                lineNumber: 119,
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
                                lineNumber: 120,
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
                                lineNumber: 121,
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
                                        children: "Aéreo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Terrestre"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Marítimo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 122,
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
                                lineNumber: 125,
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
                                lineNumber: 126,
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
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    name: "categoria",
                                    value: formData.categoria,
                                    onChange: handleChange,
                                    placeholder: "Ex: Praia, Aventura, Família",
                                    label: "Categoria"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    name: "imagem_url",
                                    value: formData.imagem_url,
                                    onChange: handleChange,
                                    placeholder: "https://exemplo.com/imagem.jpg",
                                    label: "URL da Imagem de Capa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                    isTextArea: true,
                                    name: "descricao",
                                    value: formData.descricao,
                                    onChange: handleChange,
                                    placeholder: "Descreva os detalhes do pacote...",
                                    label: "Descrição do Pacote",
                                    rows: 5
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 md:col-span-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "ativo",
                                        name: "ativo",
                                        checked: formData.ativo,
                                        onChange: handleChange,
                                        className: "h-5 w-5 rounded text-green-600 focus:ring-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "ativo",
                                        className: "font-medium text-gray-800",
                                        children: "Pacote Ativo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-200 bg-gray-50/50 flex justify-end gap-4 rounded-b-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isSaving,
                            className: "py-2 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            form: formId,
                            disabled: isSaving,
                            className: "py-2 px-8 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all",
                            children: isSaving ? 'Salvando...' : 'Salvar Pacote'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/packages/PackageFormModal.tsx",
        lineNumber: 108,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$f85d3e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:f85d3e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$2c861a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:2c861a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$0cc18f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:0cc18f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$645fc2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/packages/data:645fc2 [app-client] (ecmascript) <text/javascript>");
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
        const { packages, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$f85d3e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPackages"])();
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
            const action = formData.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$0cc18f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePackage"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$2c861a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPackage"];
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$packages$2f$data$3a$645fc2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePackage"])(packageId);
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
]);

//# sourceMappingURL=_362a955a._.js.map