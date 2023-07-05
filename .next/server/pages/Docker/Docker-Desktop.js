"use strict";
(() => {
var exports = {};
exports.id = 6737;
exports.ids = [6737,2888,660];
exports.modules = {

/***/ 1158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5035);
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8523);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__]);
private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/Docker/Docker-Desktop","pathname":"/Docker/Docker-Desktop","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: (next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3___default()),
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_Docker_Docker_Desktop_md__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2494);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* harmony import */ var _home_sunny_code_Cloud_DevOps_Large_Enterprise_Practical_Guide_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9369);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(452);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__]);
([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const __nextraPageOptions = {
    MDXContent,
    pageOpts: {
        "filePath": "pages/Docker/Docker-Desktop.md",
        "route": "/Docker/Docker-Desktop",
        "headings": [
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference"
            }
        ],
        "timestamp": 1688561416000,
        "pageMap": [
            {
                "kind": "Folder",
                "name": "Docker",
                "route": "/Docker",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Build-Container-Image",
                        "route": "/Docker/Build-Container-Image"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker Basics",
                        "route": "/Docker/Docker Basics"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker File for Nextjs",
                        "route": "/Docker/Docker File for Nextjs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker Introduction",
                        "route": "/Docker/Docker Introduction"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Architecture",
                        "route": "/Docker/Docker-Architecture"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Client",
                        "route": "/Docker/Docker-Client"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Container",
                        "route": "/Docker/Docker-Container"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Demon",
                        "route": "/Docker/Docker-Demon"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Desktop",
                        "route": "/Docker/Docker-Desktop"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Docker-Image",
                        "route": "/Docker/Docker-Image"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Build-Container-Image": "Build Container Image",
                            "Docker-Architecture": "Docker Architecture",
                            "Docker Basics": "Docker Basics",
                            "Docker-Client": "Docker Client",
                            "Docker-Container": "Docker Container",
                            "Docker-Demon": "Docker Demon",
                            "Docker-Desktop": "Docker Desktop",
                            "Docker File for Nextjs": "Docker File for Nextjs",
                            "Docker-Image": "Docker Image",
                            "Docker Introduction": "Docker Introduction"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Frontend Build Tools",
                "route": "/Frontend Build Tools",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Parcel",
                        "route": "/Frontend Build Tools/Parcel"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Rollup",
                        "route": "/Frontend Build Tools/Rollup"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Vite",
                        "route": "/Frontend Build Tools/Vite"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "webpack",
                        "route": "/Frontend Build Tools/webpack"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Parcel": "Parcel",
                            "Rollup": "Rollup",
                            "Vite": "Vite",
                            "webpack": "Webpack"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Frontend Concepts",
                "route": "/Frontend Concepts",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "ES modules",
                        "route": "/Frontend Concepts/ES modules"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "ES modules": "Es Modules"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Frontend Extra Tools",
                "route": "/Frontend Extra Tools",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Algolia",
                        "route": "/Frontend Extra Tools/Algolia"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Eslint",
                        "route": "/Frontend Extra Tools/Eslint"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Prettier",
                        "route": "/Frontend Extra Tools/Prettier"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Algolia": "Algolia",
                            "Eslint": "Eslint",
                            "Prettier": "Prettier"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Git",
                "route": "/Git",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Git Commands",
                        "route": "/Git/Git Commands"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git Divergent Branch",
                        "route": "/Git/Git Divergent Branch"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git Ignore",
                        "route": "/Git/Git Ignore"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git Previous Commits",
                        "route": "/Git/Git Previous Commits"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git Remove Cache",
                        "route": "/Git/Git Remove Cache"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git Show",
                        "route": "/Git/Git Show"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git fast-forward",
                        "route": "/Git/Git fast-forward"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git merge",
                        "route": "/Git/Git merge"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Git rebase",
                        "route": "/Git/Git rebase"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Git Commands": "Git Commands",
                            "Git Divergent Branch": "Git Divergent Branch",
                            "Git fast-forward": "Git Fast Forward",
                            "Git Ignore": "Git Ignore",
                            "Git merge": "Git Merge",
                            "Git Previous Commits": "Git Previous Commits",
                            "Git rebase": "Git Rebase",
                            "Git Remove Cache": "Git Remove Cache",
                            "Git Show": "Git Show"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Markdown",
                "route": "/Markdown",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "MDX",
                        "route": "/Markdown/MDX"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Markdown",
                        "route": "/Markdown/Markdown"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Mermaid",
                        "route": "/Markdown/Mermaid"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Markdown": "Markdown",
                            "MDX": "Mdx",
                            "Mermaid": "Mermaid"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Nextjs",
                "route": "/Nextjs",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Nextjs to ghpages",
                        "route": "/Nextjs/Nextjs to ghpages"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Nextjs vs Remix",
                        "route": "/Nextjs/Nextjs vs Remix"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Nextjs",
                        "route": "/Nextjs/Nextjs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Nextra",
                        "route": "/Nextjs/Nextra"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Remix",
                        "route": "/Nextjs/Remix"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Nextjs": "Nextjs",
                            "Nextjs to ghpages": "Nextjs to Ghpages",
                            "Nextjs vs Remix": "Nextjs Vs Remix",
                            "Nextra": "Nextra",
                            "Remix": "Remix"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Obsidian",
                "route": "/Obsidian",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Obsidian",
                        "route": "/Obsidian/Obsidian"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Organizing notes in Obsidian",
                        "route": "/Obsidian/Organizing notes in Obsidian"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Zettelkasten Approach",
                        "route": "/Obsidian/Zettelkasten Approach"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Obsidian": "Obsidian",
                            "Organizing notes in Obsidian": "Organizing Notes in Obsidian",
                            "Zettelkasten Approach": "Zettelkasten Approach"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "React",
                "route": "/React",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Index",
                        "route": "/React/Index"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Introduction",
                        "route": "/React/Introduction"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React Api Referece",
                        "route": "/React/React Api Referece"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React Basics",
                        "route": "/React/React Basics"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React Developer Tools",
                        "route": "/React/React Developer Tools"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React Native",
                        "route": "/React/React Native"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React News",
                        "route": "/React/React News"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "React",
                        "route": "/React/React"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Index": "Index",
                            "Introduction": "Introduction",
                            "React": "React",
                            "React Api Referece": "React API Referece",
                            "React Basics": "React Basics",
                            "React Developer Tools": "React Developer Tools",
                            "React Native": "React Native",
                            "React News": "React News"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Vercel",
                "route": "/Vercel",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Deploy Nextjs to Vercel",
                        "route": "/Vercel/Deploy Nextjs to Vercel"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Vercel Introuction",
                        "route": "/Vercel/Vercel Introuction"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Deploy Nextjs to Vercel": "Deploy Nextjs to Vercel",
                            "Vercel Introuction": "Vercel Introuction"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Vocabulary",
                "route": "/Vocabulary",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Vocabulary",
                        "route": "/Vocabulary/Vocabulary"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Vocabulary": "Vocabulary"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Work in Progress",
                "route": "/Work in Progress",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Elastic Search",
                        "route": "/Work in Progress/Elastic Search"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Observibility",
                        "route": "/Work in Progress/Observibility"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Elastic Search": "Elastic Search",
                            "Observibility": "Observibility"
                        }
                    }
                ]
            },
            {
                "kind": "Meta",
                "data": {
                    "index": "My Second Brain",
                    "about": {
                        "title": "About",
                        "type": "page"
                    },
                    "contact": {
                        "title": "Contact ↗",
                        "type": "page",
                        "href": "https://twitter.com/shuding_",
                        "newWindow": true
                    }
                }
            },
            {
                "kind": "MdxPage",
                "name": "about",
                "route": "/about"
            },
            {
                "kind": "MdxPage",
                "name": "index",
                "route": "/"
            }
        ],
        "flexsearch": {
            "codeblocks": true
        },
        "title": "Docker Desktop"
    },
    pageNextRoute: "/Docker/Docker-Desktop",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _home_sunny_code_Cloud_DevOps_Large_Enterprise_Practical_Guide_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        ol: "ol",
        li: "li",
        h4: "h4",
        ul: "ul",
        a: "a"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop is an application designed for Mac, Windows, and Linux environments."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It provides an easy installation process to set up Docker on your machine."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop enables the building and sharing of containerized applications and microservices."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It includes essential components such as the Docker daemon (dockerd) and the Docker client (docker)."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper are also included in Docker Desktop."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop offers a user-friendly interface and environment for managing Docker resources."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It simplifies the development and deployment of containerized applications on local machines."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop is a comprehensive toolset that integrates multiple Docker-related functionalities."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "For more detailed information about Docker Desktop, it is recommended to refer to the official Docker Desktop documentation."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Docker Desktop -> ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.docker.com/get-started/overview/",
                                children: "https://docs.docker.com/get-started/overview/"
                            })
                        ]
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = Object.assign({}, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return MDXLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
if (false) {}
if (true) __nextraPageOptions.dynamicMetaModules = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__/* .setupNextraPage */ .j)(__nextraPageOptions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8395:
/***/ ((module) => {

module.exports = require("flexsearch");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 9164:
/***/ ((module) => {

module.exports = require("git-url-parse");

/***/ }),

/***/ 4916:
/***/ ((module) => {

module.exports = require("intersection-observer");

/***/ }),

/***/ 1043:
/***/ ((module) => {

module.exports = require("lodash.get");

/***/ }),

/***/ 5875:
/***/ ((module) => {

module.exports = require("match-sorter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 2488:
/***/ ((module) => {

module.exports = require("slash");

/***/ }),

/***/ 4090:
/***/ ((module) => {

module.exports = require("title");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = import("@theguild/remark-mermaid/mermaid");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("scroll-into-view-if-needed");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,5035,3722,2636,3271,9369], () => (__webpack_exec__(1158)));
module.exports = __webpack_exports__;

})();