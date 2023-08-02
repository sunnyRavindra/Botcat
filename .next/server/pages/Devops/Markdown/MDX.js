"use strict";
(() => {
var exports = {};
exports.id = 3642;
exports.ids = [3642,2888,660];
exports.modules = {

/***/ 3380:
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
/* harmony import */ var private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__]);
private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/Devops/Markdown/MDX","pathname":"/Devops/Markdown/MDX","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: (next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3___default()),
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_Devops_Markdown_MDX_md__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4812:
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
        "filePath": "pages/Devops/Markdown/MDX.md",
        "route": "/Devops/Markdown/MDX",
        "headings": [],
        "timestamp": 1690910921000,
        "pageMap": [
            {
                "kind": "Folder",
                "name": "Automation",
                "route": "/Automation",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Automation",
                        "route": "/Automation/Automation"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Automation": "Automation"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Aws",
                "route": "/Aws",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": " Region Selection Criteria",
                        "route": "/Aws/ Region Selection Criteria"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWS Account Structure",
                        "route": "/Aws/AWS Account Structure"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWS Local Zones",
                        "route": "/Aws/AWS Local Zones"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWS Transit Gateway",
                        "route": "/Aws/AWS Transit Gateway"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWS World Wide Infrastructure",
                        "route": "/Aws/AWS World Wide Infrastructure"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWS",
                        "route": "/Aws/AWS"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "AWSD",
                        "route": "/Aws/AWSD",
                        "frontMatter": {
                            "excalidraw-plugin": "parsed",
                            "tags": [
                                "excalidraw"
                            ]
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Attribute-based access control (ABAC)",
                        "route": "/Aws/Attribute-based access control (ABAC)"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Cloud Computing",
                        "route": "/Aws/Cloud Computing"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "IAM Identity Center",
                        "route": "/Aws/IAM Identity Center"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "IAM Policy",
                        "route": "/Aws/IAM Policy"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "IAM Roles",
                        "route": "/Aws/IAM Roles"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "IAM",
                        "route": "/Aws/IAM"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "My AWS Approach",
                        "route": "/Aws/My AWS Approach"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            " Region Selection Criteria": " Region Selection Criteria",
                            "Attribute-based access control (ABAC)": "Attribute Based Access Control (Abac)",
                            "AWS": "Aws",
                            "AWS Account Structure": "Aws Account Structure",
                            "AWS Local Zones": "Aws Local Zones",
                            "AWS Transit Gateway": "Aws Transit Gateway",
                            "AWS World Wide Infrastructure": "Aws World Wide Infrastructure",
                            "AWSD": "Awsd",
                            "Cloud Computing": "Cloud Computing",
                            "IAM": "Iam",
                            "IAM Identity Center": "Iam Identity Center",
                            "IAM Policy": "Iam Policy",
                            "IAM Roles": "Iam Roles",
                            "My AWS Approach": "My Aws Approach"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Devops",
                "route": "/Devops",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Devops",
                        "route": "/Devops/Devops",
                        "frontMatter": {
                            "excalidraw-plugin": "parsed",
                            "tags": [
                                "excalidraw"
                            ]
                        }
                    },
                    {
                        "kind": "Folder",
                        "name": "Docker",
                        "route": "/Devops/Docker",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Build Docker Image",
                                "route": "/Devops/Docker/Build Docker Image"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker 1",
                                "route": "/Devops/Docker/Docker 1",
                                "frontMatter": {
                                    "excalidraw-plugin": "parsed",
                                    "tags": [
                                        "excalidraw"
                                    ]
                                }
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Basics",
                                "route": "/Devops/Docker/Docker Basics"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Bind Mounts",
                                "route": "/Devops/Docker/Docker Bind Mounts"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker DevEnv Setup",
                                "route": "/Devops/Docker/Docker DevEnv Setup"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Layer Caching",
                                "route": "/Devops/Docker/Docker Layer Caching"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Multi Stage Build",
                                "route": "/Devops/Docker/Docker Multi Stage Build"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker MySQL Application",
                                "route": "/Devops/Docker/Docker MySQL Application"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Networking",
                                "route": "/Devops/Docker/Docker Networking"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Nextjs Application",
                                "route": "/Devops/Docker/Docker Nextjs Application"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Nicolaka Netshoot",
                                "route": "/Devops/Docker/Docker Nicolaka Netshoot"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Secrets",
                                "route": "/Devops/Docker/Docker Secrets"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker Volumes",
                                "route": "/Devops/Docker/Docker Volumes"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Docker",
                                "route": "/Devops/Docker/Docker"
                            },
                            {
                                "kind": "Folder",
                                "name": "DockerFiles",
                                "route": "/Devops/Docker/DockerFiles",
                                "children": [
                                    {
                                        "kind": "MdxPage",
                                        "name": "Docker Ignore file",
                                        "route": "/Devops/Docker/DockerFiles/Docker Ignore file"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "DockerFile",
                                        "route": "/Devops/Docker/DockerFiles/DockerFile"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "Nextjs Docker File",
                                        "route": "/Devops/Docker/DockerFiles/Nextjs Docker File"
                                    },
                                    {
                                        "kind": "Meta",
                                        "data": {
                                            "Docker Ignore file": "Docker Ignore File",
                                            "DockerFile": "Dockerfile",
                                            "Nextjs Docker File": "Nextjs Docker File"
                                        }
                                    }
                                ]
                            },
                            {
                                "kind": "MdxPage",
                                "name": "DockerHub",
                                "route": "/Devops/Docker/DockerHub"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "My Used Docker Commands",
                                "route": "/Devops/Docker/My Used Docker Commands"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Run Commonds Inside Container",
                                "route": "/Devops/Docker/Run Commonds Inside Container"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Start Docker Container",
                                "route": "/Devops/Docker/Start Docker Container"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Build Docker Image": "Build Docker Image",
                                    "Docker": "Docker",
                                    "Docker 1": "Docker 1",
                                    "Docker Basics": "Docker Basics",
                                    "Docker Bind Mounts": "Docker Bind Mounts",
                                    "Docker DevEnv Setup": "Docker Devenv Setup",
                                    "Docker Layer Caching": "Docker Layer Caching",
                                    "Docker Multi Stage Build": "Docker Multi Stage Build",
                                    "Docker MySQL Application": "Docker Mysql Application",
                                    "Docker Networking": "Docker Networking",
                                    "Docker Nextjs Application": "Docker Nextjs Application",
                                    "Docker Nicolaka Netshoot": "Docker Nicolaka Netshoot",
                                    "Docker Secrets": "Docker Secrets",
                                    "Docker Volumes": "Docker Volumes",
                                    "DockerHub": "Dockerhub",
                                    "My Used Docker Commands": "My Used Docker Commands",
                                    "Run Commonds Inside Container": "Run Commonds inside Container",
                                    "Start Docker Container": "Start Docker Container"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "Docker Compose",
                        "route": "/Devops/Docker Compose",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Docker Compose",
                                "route": "/Devops/Docker Compose/Docker Compose"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Docker Compose": "Docker Compose"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "Git",
                        "route": "/Devops/Git",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Git Commands",
                                "route": "/Devops/Git/Git Commands"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Commits list",
                                "route": "/Devops/Git/Git Commits list"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Divergent Branch",
                                "route": "/Devops/Git/Git Divergent Branch"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Ignore",
                                "route": "/Devops/Git/Git Ignore"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Previous Commits",
                                "route": "/Devops/Git/Git Previous Commits"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Remove Cache",
                                "route": "/Devops/Git/Git Remove Cache"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Show",
                                "route": "/Devops/Git/Git Show"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Squashing",
                                "route": "/Devops/Git/Git Squashing"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git Unstage All Files",
                                "route": "/Devops/Git/Git Unstage All Files"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git add except __",
                                "route": "/Devops/Git/Git add except __"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git fast-forward",
                                "route": "/Devops/Git/Git fast-forward"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git merge",
                                "route": "/Devops/Git/Git merge"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git rebase",
                                "route": "/Devops/Git/Git rebase"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Git",
                                "route": "/Devops/Git/Git"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Git": "Git",
                                    "Git add except __": "Git Add except   ",
                                    "Git Commands": "Git Commands",
                                    "Git Commits list": "Git Commits List",
                                    "Git Divergent Branch": "Git Divergent Branch",
                                    "Git fast-forward": "Git Fast Forward",
                                    "Git Ignore": "Git Ignore",
                                    "Git merge": "Git Merge",
                                    "Git Previous Commits": "Git Previous Commits",
                                    "Git rebase": "Git Rebase",
                                    "Git Remove Cache": "Git Remove Cache",
                                    "Git Show": "Git Show",
                                    "Git Squashing": "Git Squashing",
                                    "Git Unstage All Files": "Git Unstage All Files"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "Markdown",
                        "route": "/Devops/Markdown",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "MDX",
                                "route": "/Devops/Markdown/MDX"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Markdown",
                                "route": "/Devops/Markdown/Markdown"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Markdown": "Markdown",
                                    "MDX": "Mdx"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Devops": "Devops"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Every Thing I Know",
                "route": "/Every Thing I Know",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Everything I Know",
                        "route": "/Every Thing I Know/Everything I Know",
                        "frontMatter": {
                            "excalidraw-plugin": "parsed",
                            "tags": [
                                "excalidraw"
                            ]
                        }
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Everything I Know": "Everything I Know"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Excalidraw",
                "route": "/Excalidraw",
                "children": [
                    {
                        "kind": "Folder",
                        "name": "Scripts",
                        "route": "/Excalidraw/Scripts",
                        "children": [
                            {
                                "kind": "Folder",
                                "name": "Downloaded",
                                "route": "/Excalidraw/Scripts/Downloaded",
                                "children": [
                                    {
                                        "kind": "MdxPage",
                                        "name": "Elbow connectors",
                                        "route": "/Excalidraw/Scripts/Downloaded/Elbow connectors"
                                    },
                                    {
                                        "kind": "Meta",
                                        "data": {
                                            "Elbow connectors": "Elbow Connectors"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Frontend",
                "route": "/Frontend",
                "children": [
                    {
                        "kind": "Folder",
                        "name": "Frontend Build Tools",
                        "route": "/Frontend/Frontend Build Tools",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Parcel",
                                "route": "/Frontend/Frontend Build Tools/Parcel"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Rollup",
                                "route": "/Frontend/Frontend Build Tools/Rollup"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Vite",
                                "route": "/Frontend/Frontend Build Tools/Vite"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "webpack",
                                "route": "/Frontend/Frontend Build Tools/webpack"
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
                        "route": "/Frontend/Frontend Concepts",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "ES modules",
                                "route": "/Frontend/Frontend Concepts/ES modules"
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
                        "route": "/Frontend/Frontend Extra Tools",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Algolia",
                                "route": "/Frontend/Frontend Extra Tools/Algolia"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Eslint",
                                "route": "/Frontend/Frontend Extra Tools/Eslint"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Prettier",
                                "route": "/Frontend/Frontend Extra Tools/Prettier"
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
                        "kind": "MdxPage",
                        "name": "Frontend",
                        "route": "/Frontend/Frontend"
                    },
                    {
                        "kind": "Folder",
                        "name": "Nextjs",
                        "route": "/Frontend/Nextjs",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Client Components",
                                "route": "/Frontend/Nextjs/Client Components"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Create Nextjs App",
                                "route": "/Frontend/Nextjs/Create Nextjs App"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "My Nextjs Approach",
                                "route": "/Frontend/Nextjs/My Nextjs Approach"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Application Guide",
                                "route": "/Frontend/Nextjs/Nextjs Application Guide"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Application Structure",
                                "route": "/Frontend/Nextjs/Nextjs Application Structure"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Basic Concepts",
                                "route": "/Frontend/Nextjs/Nextjs Basic Concepts"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Client Components",
                                "route": "/Frontend/Nextjs/Nextjs Client Components"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Project Structure",
                                "route": "/Frontend/Nextjs/Nextjs Project Structure"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Server Components",
                                "route": "/Frontend/Nextjs/Nextjs Server Components"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs Thinking in Server Components",
                                "route": "/Frontend/Nextjs/Nextjs Thinking in Server Components"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs to ghpages",
                                "route": "/Frontend/Nextjs/Nextjs to ghpages"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs vs Remix",
                                "route": "/Frontend/Nextjs/Nextjs vs Remix"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextjs",
                                "route": "/Frontend/Nextjs/Nextjs"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Nextra",
                                "route": "/Frontend/Nextjs/Nextra"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Remix",
                                "route": "/Frontend/Nextjs/Remix"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Run Nextjs App",
                                "route": "/Frontend/Nextjs/Run Nextjs App"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Server Components",
                                "route": "/Frontend/Nextjs/Server Components"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Client Components": "Client Components",
                                    "Create Nextjs App": "Create Nextjs App",
                                    "My Nextjs Approach": "My Nextjs Approach",
                                    "Nextjs": "Nextjs",
                                    "Nextjs Application Guide": "Nextjs Application Guide",
                                    "Nextjs Application Structure": "Nextjs Application Structure",
                                    "Nextjs Basic Concepts": "Nextjs Basic Concepts",
                                    "Nextjs Client Components": "Nextjs Client Components",
                                    "Nextjs Project Structure": "Nextjs Project Structure",
                                    "Nextjs Server Components": "Nextjs Server Components",
                                    "Nextjs Thinking in Server Components": "Nextjs Thinking in Server Components",
                                    "Nextjs to ghpages": "Nextjs to Ghpages",
                                    "Nextjs vs Remix": "Nextjs Vs Remix",
                                    "Nextra": "Nextra",
                                    "Remix": "Remix",
                                    "Run Nextjs App": "Run Nextjs App",
                                    "Server Components": "Server Components"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "React",
                        "route": "/Frontend/React",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "My React Approach",
                                "route": "/Frontend/React/My React Approach"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "React Native",
                                "route": "/Frontend/React/React Native"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "React Quick Start",
                                "route": "/Frontend/React/React Quick Start"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "React",
                                "route": "/Frontend/React/React"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "My React Approach": "My React Approach",
                                    "React": "React",
                                    "React Native": "React Native",
                                    "React Quick Start": "React Quick Start"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "Vercel",
                        "route": "/Frontend/Vercel",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Deploy Nextjs to Vercel",
                                "route": "/Frontend/Vercel/Deploy Nextjs to Vercel"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Vercel Introuction",
                                "route": "/Frontend/Vercel/Vercel Introuction"
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
                        "kind": "Meta",
                        "data": {
                            "Frontend": "Frontend"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "IDE",
                "route": "/IDE",
                "children": [
                    {
                        "kind": "Folder",
                        "name": "Emacs",
                        "route": "/IDE/Emacs",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Emacs",
                                "route": "/IDE/Emacs/Emacs"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Emacs": "Emacs"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Language",
                "route": "/Language",
                "children": [
                    {
                        "kind": "Folder",
                        "name": "Vocabulary",
                        "route": "/Language/Vocabulary",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Vocabulary",
                                "route": "/Language/Vocabulary/Vocabulary"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Vocabulary": "Vocabulary"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Linux",
                "route": "/Linux",
                "children": [
                    {
                        "kind": "Folder",
                        "name": "Bash Script",
                        "route": "/Linux/Bash Script",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Bash Commands",
                                "route": "/Linux/Bash Script/Bash Commands"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Bash vs Sh",
                                "route": "/Linux/Bash Script/Bash vs Sh"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Bash",
                                "route": "/Linux/Bash Script/Bash"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Passing Parameters In Bash",
                                "route": "/Linux/Bash Script/Passing Parameters In Bash"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Bash": "Bash",
                                    "Bash Commands": "Bash Commands",
                                    "Bash vs Sh": "Bash Vs Sh",
                                    "Passing Parameters In Bash": "Passing Parameters in Bash"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Chroot",
                        "route": "/Linux/Chroot"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Linux Namespaces",
                        "route": "/Linux/Linux Namespaces"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Linux",
                        "route": "/Linux/Linux"
                    },
                    {
                        "kind": "Folder",
                        "name": "My Arch Rice",
                        "route": "/Linux/My Arch Rice",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Asahi Linux Setup",
                                "route": "/Linux/My Arch Rice/Asahi Linux Setup"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Install Docker on Arch Linux",
                                "route": "/Linux/My Arch Rice/Install Docker on Arch Linux"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Install Touch pad config",
                                "route": "/Linux/My Arch Rice/Install Touch pad config"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "Install Yay",
                                "route": "/Linux/My Arch Rice/Install Yay"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "My Arch Linux Setup",
                                "route": "/Linux/My Arch Rice/My Arch Linux Setup"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "My Arch Rice",
                                "route": "/Linux/My Arch Rice/My Arch Rice",
                                "frontMatter": {
                                    "excalidraw-plugin": "parsed",
                                    "tags": [
                                        "excalidraw"
                                    ]
                                }
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Asahi Linux Setup": "Asahi Linux Setup",
                                    "Install Docker on Arch Linux": "Install Docker on Arch Linux",
                                    "Install Touch pad config": "Install Touch Pad Config",
                                    "Install Yay": "Install Yay",
                                    "My Arch Linux Setup": "My Arch Linux Setup",
                                    "My Arch Rice": "My Arch Rice"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Folder",
                        "name": "zsh",
                        "route": "/Linux/zsh",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "Sub Shell Output",
                                "route": "/Linux/zsh/Sub Shell Output"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "zshrc",
                                "route": "/Linux/zsh/zshrc"
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "Sub Shell Output": "Sub Shell Output",
                                    "zshrc": "Zshrc"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Chroot": "Chroot",
                            "Linux": "Linux",
                            "Linux Namespaces": "Linux Namespaces"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "Mermaid",
                "route": "/Mermaid",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Mermaid",
                        "route": "/Mermaid/Mermaid"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Mermaid": "Mermaid"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "My Certifications",
                "route": "/My Certifications",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Certified AWS Solutions Architect Professional",
                        "route": "/My Certifications/Certified AWS Solutions Architect Professional"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "My Certifications",
                        "route": "/My Certifications/My Certifications"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Certified AWS Solutions Architect Professional": "Certified Aws Solutions Architect Professional",
                            "My Certifications": "My Certifications"
                        }
                    }
                ]
            },
            {
                "kind": "MdxPage",
                "name": "My Kanban",
                "route": "/My Kanban",
                "frontMatter": {
                    "kanban-plugin": "basic"
                }
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
                "name": "Visual Personal Knowledge Management",
                "route": "/Visual Personal Knowledge Management",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "Drawing 2023-07-30 10.05.42.excalidraw",
                        "route": "/Visual Personal Knowledge Management/Drawing 2023-07-30 10.05.42.excalidraw",
                        "frontMatter": {
                            "excalidraw-plugin": "parsed",
                            "tags": [
                                "excalidraw"
                            ]
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "Excalidraw",
                        "route": "/Visual Personal Knowledge Management/Excalidraw"
                    },
                    {
                        "kind": "Folder",
                        "name": "MidJourney",
                        "route": "/Visual Personal Knowledge Management/MidJourney",
                        "children": [
                            {
                                "kind": "MdxPage",
                                "name": "MidJourney",
                                "route": "/Visual Personal Knowledge Management/MidJourney/MidJourney",
                                "frontMatter": {
                                    "excalidraw-plugin": "parsed",
                                    "tags": [
                                        "excalidraw"
                                    ]
                                }
                            },
                            {
                                "kind": "Meta",
                                "data": {
                                    "MidJourney": "Midjourney"
                                }
                            }
                        ]
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "Drawing 2023-07-30 10.05.42.excalidraw": "Drawing 2023 07 30 10.05.42.excalidraw",
                            "Excalidraw": "Excalidraw"
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
                    "index": "\uD83E\uDDE0 Second Brain",
                    "about": {
                        "title": "About",
                        "type": "page"
                    },
                    "contact": {
                        "title": "Contact ↗",
                        "type": "page",
                        "href": "https://twitter.com/shuding_",
                        "newWindow": true
                    },
                    "excalibrain": "Excalibrain",
                    "My Kanban": "My Kanban"
                }
            },
            {
                "kind": "MdxPage",
                "name": "about",
                "route": "/about"
            },
            {
                "kind": "MdxPage",
                "name": "excalibrain",
                "route": "/excalibrain",
                "frontMatter": {
                    "excalidraw-plugin": "parsed",
                    "excalidraw-default-mode": "view",
                    "excalidraw-export-dark": false,
                    "excalidraw-export-transparent": false,
                    "excalidraw-linkbutton-opacity": 0.3,
                    "excalidraw-onload-script": "app.plugins.plugins[`excalibrain`].start(ea.targetView.leaf);",
                    "tags": [
                        "excalidraw"
                    ]
                }
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
        "title": "Mdx"
    },
    pageNextRoute: "/Devops/Markdown/MDX",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _home_sunny_code_Cloud_DevOps_Large_Enterprise_Practical_Guide_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        ol: "ol",
        li: "li"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Certainly! Here are some key important points about MDX (Markdown + JSX) files:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Combination of Markdown and JSX: MDX is an extension of Markdown that allows you to embed JSX (JavaScript XML) components and code directly within Markdown files."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Enhanced Component Support: MDX enables the use of React components within Markdown, allowing for more interactive and dynamic content creation."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Flexible and Powerful: MDX provides the flexibility of Markdown's simplicity and readability, combined with the power and extensibility of React components."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Seamless Integration: MDX files can seamlessly integrate with existing React and JavaScript ecosystems, making it easy to combine static content with interactive elements and functionality."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Interactive Documentation: MDX is commonly used for creating interactive documentation, tutorials, and blog posts, where rich content and code examples can be seamlessly combined."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Code Highlighting: MDX supports syntax highlighting for code snippets, making it easier to showcase and explain code examples within the document."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Customizable and Extensible: MDX allows for the creation of custom components and the use of third-party libraries, enabling developers to tailor the document's functionality to their specific needs."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Advanced Content Creation: With MDX, you can include complex interactive elements, such as charts, diagrams, videos, and more, to enhance the content and engage readers."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Access to JavaScript Ecosystem: MDX files have access to the entire JavaScript ecosystem, including npm packages, utilities, and frameworks, providing developers with a wide range of resources to enhance their content."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Rendered Output: MDX files can be transformed into static HTML or JSX components, allowing them to be rendered in web browsers or integrated into React applications."
                            }),
                            "\n"
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,5035,3722,2636,3271,9369], () => (__webpack_exec__(3380)));
module.exports = __webpack_exports__;

})();