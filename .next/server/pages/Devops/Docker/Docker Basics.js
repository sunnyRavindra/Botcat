"use strict";
(() => {
var exports = {};
exports.id = 3234;
exports.ids = [3234,2888,660];
exports.modules = {

/***/ 762:
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
/* harmony import */ var private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__]);
private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/Devops/Docker/Docker Basics","pathname":"/Devops/Docker/Docker Basics","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: (next_dist_pages_app__WEBPACK_IMPORTED_MODULE_3___default()),
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_Devops_Docker_Docker_Basics_md__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3508:
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
        "filePath": "pages/Devops/Docker/Docker Basics.md",
        "route": "/Devops/Docker/Docker Basics",
        "headings": [
            {
                "depth": 3,
                "value": "Start-Container-Image",
                "id": "start-container-image"
            },
            {
                "depth": 3,
                "value": "Updating-Docker-Container",
                "id": "updating-docker-container"
            },
            {
                "depth": 3,
                "value": "Docker-Image-Sharing",
                "id": "docker-image-sharing"
            },
            {
                "depth": 3,
                "value": "Docker-Registry",
                "id": "docker-registry"
            },
            {
                "depth": 3,
                "value": "Docker-Volumes",
                "id": "docker-volumes"
            },
            {
                "depth": 3,
                "value": "Differences-Between-Bind-Mount-and-Volumes",
                "id": "differences-between-bind-mount-and-volumes"
            },
            {
                "depth": 3,
                "value": "Container-Networks",
                "id": "container-networks"
            },
            {
                "depth": 3,
                "value": "Relationship-between-Docker-Desktop-and-Docker-Engine",
                "id": "relationship-between-docker-desktop-and-docker-engine"
            },
            {
                "depth": 3,
                "value": "DNS",
                "id": "dns"
            },
            {
                "depth": 3,
                "value": "Single-Docker-Example",
                "id": "single-docker-example"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference"
            },
            {
                "depth": 3,
                "value": "Multiple-Docker-Example",
                "id": "multiple-docker-example"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-1"
            },
            {
                "depth": 3,
                "value": "Docker-Commands",
                "id": "docker-commands"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-2"
            },
            {
                "depth": 3,
                "value": "DNS-Round-Robin",
                "id": "dns-round-robin"
            },
            {
                "depth": 3,
                "value": "Env-Variables",
                "id": "env-variables"
            },
            {
                "depth": 3,
                "value": "Arguments",
                "id": "arguments"
            },
            {
                "depth": 2,
                "value": "Markdown",
                "id": "markdown"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-3"
            },
            {
                "depth": 2,
                "value": "Docker-Swarm",
                "id": "docker-swarm"
            },
            {
                "depth": 3,
                "value": "Swarm-Basics",
                "id": "swarm-basics"
            },
            {
                "depth": 4,
                "value": "Initialization and Management:",
                "id": "initialization-and-management"
            },
            {
                "depth": 3,
                "value": "Service Management:",
                "id": "service-management"
            },
            {
                "depth": 3,
                "value": "Task and Container Management:",
                "id": "task-and-container-management"
            },
            {
                "depth": 3,
                "value": "Stack Deployment:",
                "id": "stack-deployment"
            },
            {
                "depth": 3,
                "value": "Secrets Management:",
                "id": "secrets-management"
            },
            {
                "depth": 3,
                "value": "Swarm-Notes",
                "id": "swarm-notes"
            },
            {
                "depth": 2,
                "value": "Emacs",
                "id": "emacs"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-4"
            },
            {
                "depth": 2,
                "value": "Elisp",
                "id": "elisp"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-5"
            },
            {
                "depth": 2,
                "value": "Learning-Inprogress",
                "id": "learning-inprogress"
            },
            {
                "depth": 3,
                "value": "Todo",
                "id": "todo"
            },
            {
                "depth": 3,
                "value": "Practical",
                "id": "practical"
            },
            {
                "depth": 3,
                "value": "Finnish Language",
                "id": "finnish-language"
            },
            {
                "depth": 2,
                "value": "Vim-Cheat-Sheet",
                "id": "vim-cheat-sheet"
            },
            {
                "depth": 3,
                "value": "Navigation",
                "id": "navigation"
            },
            {
                "depth": 3,
                "value": "Editing",
                "id": "editing"
            },
            {
                "depth": 3,
                "value": "Search-and-Replace",
                "id": "search-and-replace"
            },
            {
                "depth": 3,
                "value": "Saving-and-Quitting",
                "id": "saving-and-quitting"
            },
            {
                "depth": 3,
                "value": "Other-Useful-Commands",
                "id": "other-useful-commands"
            },
            {
                "depth": 2,
                "value": "Masters-Program",
                "id": "masters-program"
            },
            {
                "depth": 3,
                "value": "Finland",
                "id": "finland"
            },
            {
                "depth": 3,
                "value": "Netherlands",
                "id": "netherlands"
            },
            {
                "depth": 3,
                "value": "Germany",
                "id": "germany"
            },
            {
                "depth": 3,
                "value": "Canada",
                "id": "canada"
            },
            {
                "depth": 3,
                "value": "USA",
                "id": "usa"
            },
            {
                "depth": 3,
                "value": "Norway",
                "id": "norway"
            },
            {
                "depth": 3,
                "value": "Denmark",
                "id": "denmark"
            },
            {
                "depth": 3,
                "value": "Newzeland",
                "id": "newzeland"
            },
            {
                "depth": 3,
                "value": "Australia",
                "id": "australia"
            },
            {
                "depth": 2,
                "value": "Create-Github-hosted-React-Frontend",
                "id": "create-github-hosted-react-frontend"
            },
            {
                "depth": 3,
                "value": "Next-js-frontend",
                "id": "next-js-frontend"
            },
            {
                "depth": 3,
                "value": "Moving-to-Next-js",
                "id": "moving-to-next-js"
            },
            {
                "depth": 2,
                "value": "Docker-Compose",
                "id": "docker-compose"
            },
            {
                "depth": 3,
                "value": "Compose-Important-Points",
                "id": "compose-important-points"
            },
            {
                "depth": 4,
                "value": "Reference",
                "id": "reference-6"
            },
            {
                "depth": 3,
                "value": "Compose-File-Structure",
                "id": "compose-file-structure"
            },
            {
                "depth": 3,
                "value": "Compose-Basic-Commands",
                "id": "compose-basic-commands"
            },
            {
                "depth": 3,
                "value": "Compose-Advanced-Commands",
                "id": "compose-advanced-commands"
            },
            {
                "depth": 3,
                "value": "Compose-Environment-Variables",
                "id": "compose-environment-variables"
            },
            {
                "depth": 3,
                "value": "Compose-Volumes",
                "id": "compose-volumes"
            },
            {
                "depth": 3,
                "value": "Compose-Networking",
                "id": "compose-networking"
            },
            {
                "depth": 3,
                "value": "Compose-Extending-Services",
                "id": "compose-extending-services"
            }
        ],
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
        "title": "Docker Basics"
    },
    pageNextRoute: "/Devops/Docker/Docker Basics",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _home_sunny_code_Cloud_DevOps_Large_Enterprise_Practical_Guide_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        h3: "h3",
        ol: "ol",
        li: "li",
        code: "code",
        pre: "pre",
        span: "span",
        ul: "ul",
        a: "a",
        h4: "h4",
        h2: "h2"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "[[Run Commonds Inside Container]]"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "start-container-image",
                children: "Start-Container-Image"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker run"
                            }),
                            " command to start a container based on the image. Specify any desired options or configurations and provide the image name and tag. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker run -p 8000:8000 myimage:latest"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In this example, ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "-p 8000:8000"
                    }),
                    " maps port 8000 on the host to port 8000 in the container. Adjust the port mapping as needed for your application.\n2. Wait for Docker to download the necessary layers and start the container. You should see the container ID or name printed in the terminal, indicating that the container is running.\n3. Access your application: If your application is a web server listening on port 8000, you can open a web browser and navigate to ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "http://localhost:8000"
                    }),
                    " to access it. Adjust the URL and port number based on your application's configuration.\n5. To stop the container, press ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Ctrl + C"
                    }),
                    " in the terminal where it is running. The container will be stopped and removed."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "updating-docker-container",
                children: "Updating-Docker-Container"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Make the necessary changes to your application source code."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Open a terminal or command prompt."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Build a new Docker image with the updated source code using the same Dockerfile and a new tag. Navigate to the directory containing the Dockerfile and run the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker build"
                            }),
                            " command again. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker build -t myimage:latest ."
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Make sure to specify a different tag (e.g., ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "myimage:updated"
                    }),
                    ") to differentiate it from the previous image.\n4. Wait for the new image to build. Docker will only rebuild the layers that have changed, making the process faster.\n5. Once the new image is built, stop and remove the existing container. Run the following command to list all running containers:"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker ps"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Identify the container ID or name corresponding to the running container based on the previous image.\nThen, stop and remove the container using the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker stop"
                    }),
                    " and ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker rm"
                    }),
                    " commands, respectively. For example:"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "docker stop container_id_or_name"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "docker rm container_id_or_name"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "6",
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Run a new container using the updated image. Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker run"
                            }),
                            " command as mentioned earlier, specifying the updated image name and any desired options or configurations. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker run -p 8000:8000 myimage:updated"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "7",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Wait for Docker to download the necessary layers and start the new container."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Access your application to verify that the changes have taken effect. Use the appropriate URL and port number as configured in your application."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "docker-image-sharing",
                children: "Docker-Image-Sharing"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ensure that your containerized application is running and working correctly on your local machine. Verify that it functions as expected and that any necessary dependencies or configurations are in place."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Commit the running container to a new Docker image. Open a new terminal or command prompt and use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker commit"
                            }),
                            " command to create an image based on the running container. Specify the container ID or name and provide a name and tag for the new image. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker commit container_id_or_name myimage:shared"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Replace ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "container_id_or_name"
                    }),
                    " with the actual ID or name of the running container, and choose a name and tag for the new image (e.g., ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "myimage:shared"
                    }),
                    ").\n3. Tag the image with a version or any additional information if desired. This step is optional but can be helpful for tracking different versions of the shared image. For example:"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker tag myimage:shared myimage:v1.0"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "4",
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Log in to a Docker registry (such as Docker Hub) if you haven't already. This step is necessary if you want to push the image to a registry that requires authentication. Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker login"
                            }),
                            " command and provide your credentials as prompted."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Push the image to the Docker registry. Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker push"
                            }),
                            " command and specify the image name and tag to push it to the registry. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker push myimage:shared"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "6",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Provide the necessary information to others who wish to use your shared image. Share the image name and tag, along with any relevant instructions or documentation, so that others can pull and run the containerized application."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Others can now pull and run the shared image on their own machines using the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker pull"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker run"
                            }),
                            " commands, as described earlier. They should be able to use the image you shared to run the containerized application locally."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "docker-registry",
                children: "Docker-Registry"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A Docker registry is a storage system that stores Docker images."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Hub is a popular public registry available for general use."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker is configured to search for images on Docker Hub by default."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Users can also set up their own private registry."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The docker pull or docker run commands retrieve required images from the configured registry."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The docker push command allows users to upload their own images to the configured registry."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker registries enable efficient storage and distribution of Docker images."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "They provide a centralized location for sharing and accessing container images."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Hub is a widely used public registry for discovering and sharing Docker images."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Private registries offer additional control and privacy for organizations and individuals."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Set up a Docker registry: You have the option to use Docker Hub (a public registry) or set up your own private registry. If you choose to set up a private registry, you can use tools like Docker Registry or third-party solutions."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Log in to the Docker registry: If you are using Docker Hub or a private registry that requires authentication, log in to the registry using the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker login"
                            }),
                            " command. Provide your registry credentials (username and password) as prompted."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Tag your Docker image: Before pushing the image to the registry, it's recommended to tag it with the appropriate registry URL and repository name. Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker tag"
                            }),
                            " command to create a new tag for the image. For example:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker tag myimage:latest myregistry/myrepository:latest"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Replace ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "myimage:latest"
                    }),
                    " with the name and tag of the image you want to share. Adjust ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "myregistry"
                    }),
                    " and ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "myrepository"
                    }),
                    " with the appropriate registry URL and repository name.\n16. Push the Docker image to the registry: Use the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker push"
                    }),
                    " command to push the tagged image to the registry. For example:"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker push myregistry/myrepository:latest"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Docker will upload the image and its layers to the registry. This may take some time depending on the size of the image and your network connection.\n17. Verify the image on the registry: You can check the Docker registry (either Docker Hub or your private registry) to ensure that the image has been successfully pushed and is available for others to pull."
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Docker Registry -> ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.docker.com/get-started/overview/",
                                children: "https://docs.docker.com/get-started/overview/"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "docker-volumes",
                children: "Docker-Volumes"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker volumes are managed by Docker and are independent of the host file system."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes are designed to persist data even if the container is stopped or deleted."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes can be created and managed using Docker commands or Docker Compose files."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "They provide an easy way to share data between containers."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker volumes can be named, making it convenient to reference them in multiple containers."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes can be created with specific drivers to support network storage, cloud providers, or other specialized storage systems."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The data inside a volume can be accessed by multiple containers simultaneously."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes have their own location on the host system, typically in the Docker directory."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "docker run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysqlvolume:/var/lib/mysql mysql "
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "[[Docker-Bind-Mounts]]"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "differences-between-bind-mount-and-volumes",
                children: "Differences-Between-Bind-Mount-and-Volumes"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Persistence: Docker volumes persist data even if the container is removed, while bind mounts are tightly coupled to the host system and do not persist data separately."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Lifecycle: Docker volumes have a separate lifecycle managed by Docker, whereas bind mounts are directly linked to the host system and have no separate lifecycle."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Portability: Docker volumes are portable and can be easily moved between different Docker hosts. Bind mounts are specific to the host system where the container is running."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ease of use: Docker volumes provide a higher level of abstraction and ease of use, especially when managing data across multiple containers. Bind mounts are simpler to set up and are useful for immediate file or directory sharing."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Integration: Docker volumes can integrate with different storage drivers and systems, such as network storage or cloud providers. Bind mounts are limited to the host's file system.\nCertainly! Here are the point-wise details and differentiation for Docker container networks:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "container-networks",
                children: "Container-Networks"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: 'Default Network: When Docker is installed, it automatically creates a default network called "bridge." This network allows containers to communicate with each other using IP addresses.'
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Container Network Drivers: Docker supports multiple container network drivers that offer different networking capabilities, such as bridge, host, overlay, macvlan, and more. Each driver provides specific features and functionalities for container networking."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Bridge Network: The bridge network driver is the default and most commonly used driver. It creates an isolated network on the host and assigns IP addresses to containers connected to the bridge. Containers within the same bridge network can communicate with each other using container names as DNS aliases."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Host Network: The host network driver allows a container to use the host's networking stack directly, sharing the same network interface. It gives the container access to all host interfaces, bypassing Docker's network isolation."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Overlay Network: The overlay network driver enables containers to communicate across multiple Docker hosts or nodes in a swarm. It uses VXLAN (Virtual Extensible LAN) encapsulation to create a distributed network overlay that spans multiple hosts."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Macvlan Network: The macvlan network driver assigns a unique MAC address to each container, allowing them to appear as individual devices on the physical network. Containers in a macvlan network can communicate with other devices on the same physical network, including other containers."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network Scopes: Docker provides different network scopes for containers, such as global, swarm, and local. Global scope allows containers to communicate across multiple Docker daemons. Swarm scope restricts communication to containers within the same swarm. Local scope confines communication to containers within the same host."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: 'User-defined Networks: Docker allows users to create their own custom networks with specific configurations using the "docker network create" command. Custom networks provide better control over container connectivity and allow containers to be isolated in separate networks.'
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network Security: Docker networks can be secured using features like network segmentation, access control lists (ACLs), and firewall rules. This helps control traffic flow between containers and enhances network security."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Third-party Networking Solutions: Docker integrates with third-party networking solutions, such as Calico, Weave, and Flannel, which provide advanced networking features like network policies, service discovery, and load balancing."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "relationship-between-docker-desktop-and-docker-engine",
                children: "Relationship-between-Docker-Desktop-and-Docker-Engine"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop includes Docker Engine as its core component. It installs and manages Docker Engine behind the scenes, providing a user-friendly interface to work with Docker containers."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop abstracts away some of the complexities of working directly with Docker Engine, making it easier for developers to get started with Docker."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop also includes additional tools and features specifically tailored for developers, such as the ability to configure container resources, networking, and storage options through its graphical interface."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Docker Desktop is essentially a pre-packaged solution that bundles Docker Engine with a user-friendly interface and additional developer-centric features."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "dns",
                children: "DNS"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The docker containers talks to each other on the basis of DNS name(Docker container name) because the IP address from the container may be removed and can be dynamic at times(only apples to the new Virtual network)"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "So the default Bridge network does not have the same DNS functionality in it.(so you will have to add it manually by --link)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "single-docker-example",
                children: "Single-Docker-Example"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Spin up Nginx Server"
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "multiple-docker-example",
                children: "Multiple-Docker-Example"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Spin up Nginx Server"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Spin up mysql server"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Spin up httpd Server"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-1",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "docker-commands",
                children: "Docker-Commands"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker ->returns all the docker commands that can be used and referred to."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container run --publish 80:80 --detach --name mynewcontainer --network mynetwork nginx -> spins up a container spiting out a container ID"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container stop (container name)-> stops the running container on the machine"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container logs mynewcontainer"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container top mynewcontainer"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container rm (name of the containers separated by space)"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "ps aux (returns all the process running on the mac system)"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container inspect mynewcontainer"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container stats"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container run -it --name enakonda nginx bash"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container start -ai enakonda(This command keeps the docker container running until you have been exited from the bash shell)"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container exec -it enakonda bash(This command keeps the docker container running)\ndocker container port enakonda"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container inspect --format '{{ .NetworkSettings.IPAddress}}' enakonda."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker container run -d --name enakonda --network-alias search elasticsearch:2"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker network ls"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker network inspect bridge"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker network create myNetwork"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker network connect network container"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker network disconnect network container"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Images are just the binaries and the Kernal is provided by the OS itself"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker image history"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker image tag oldimage new/imagename"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker image push"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker login"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "docker logout"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-2",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Cloud-DevOps-Large-Enterprise-Practical-Guide/Docker"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "dns-round-robin",
                children: "DNS-Round-Robin"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "env-variables",
                children: "Env-Variables"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "ENV KEY VALUE"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "--e KEY=SomeOtherValue"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "arguments",
                children: "Arguments"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "ARG DEFAULT_PORT=80"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "--build-arg DEFAULT_PORT=8080"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "markdown",
                children: "Markdown"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GitHub Markdown is a lightweight markup language used to format and style text on GitHub."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It is based on the original Markdown syntax but includes some additional features and extensions."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GitHub Markdown is commonly used in README files, documentation, and issue comments on GitHub."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It supports basic formatting options like headings, lists, emphasis (bold and italic), and links."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GitHub Markdown allows for the inclusion of images, code blocks, and tables."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It supports syntax highlighting for different programming languages in code blocks."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GitHub Markdown supports task lists, which are useful for tracking progress in issues or pull requests."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It allows for the creation of links to specific lines or sections within a file."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GitHub Markdown supports emoji shortcuts for adding emoticons to your text."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It also supports the use of HTML tags for advanced formatting when necessary."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-3",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "Documents -> https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "docker-swarm",
                children: "Docker-Swarm"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "swarm-basics",
                children: "Swarm-Basics"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Docker Swarm: Docker Swarm is a native clustering and orchestration solution for Docker. It allows you to create and manage a cluster of Docker nodes, turning them into a single virtual Docker engine."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Clustering: Docker Swarm enables you to create a cluster by joining multiple Docker hosts together. These hosts can be physical or virtual machines. The cluster behaves as a single entity, providing a unified interface for managing containers across all the nodes."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Orchestration: Docker Swarm provides orchestration capabilities, allowing you to deploy and manage applications across the cluster. It handles tasks such as container scheduling, load balancing, service discovery, and scaling."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Nodes: In Docker Swarm, a node refers to an individual Docker host within the cluster. Nodes can be worker nodes or manager nodes. Worker nodes run containerized applications, while manager nodes handle cluster management tasks."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Services: Services are the definition of the tasks you want to run in your cluster. You can define a service to run a single container or a group of containers, specifying details such as the image, ports, environment variables, and resource constraints."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Load Balancing: Docker Swarm automatically distributes containers across the available nodes to balance the workload. It uses an ingress load balancer to route incoming traffic to the appropriate container, ensuring high availability and scalability."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Scaling: With Docker Swarm, you can easily scale your services up or down to meet the demand. You can specify the desired number of replicas for a service, and Swarm will distribute them across the nodes accordingly."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Rolling Updates: Docker Swarm supports rolling updates, allowing you to update your services without causing downtime. It follows a rolling deployment strategy by gradually updating containers one by one, ensuring that the service remains available throughout the process."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "High Availability: Docker Swarm provides high availability by allowing you to configure manager node replicas. If one manager node fails, another takes over, ensuring the cluster remains operational."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Integration with Docker CLI: Docker Swarm integrates seamlessly with the Docker command-line interface (CLI), making it easy to work with existing Docker commands and tools."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "initialization-and-management",
                children: "Initialization and Management:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker swarm init"
                            }),
                            ": Initialize a new Docker Swarm on the current node."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker swarm join"
                            }),
                            ": Join a node to an existing Docker Swarm as a worker or manager."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker swarm leave"
                            }),
                            ": Make a node leave the Docker Swarm."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker node ls"
                            }),
                            ": List all nodes in the Docker Swarm."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "service-management",
                children: "Service Management:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service create"
                            }),
                            ": Create a new service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service ls"
                            }),
                            ": List all services in the Docker Swarm."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service inspect"
                            }),
                            ": Inspect details of a specific service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service update"
                            }),
                            ": Update configuration or scale a service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service scale"
                            }),
                            ": Scale the number of replicas for a service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service rm"
                            }),
                            ": Remove a service from the Docker Swarm."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "task-and-container-management",
                children: "Task and Container Management:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker ps"
                            }),
                            ": List running containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker service ps"
                            }),
                            ": List tasks (containers) for a service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker logs"
                            }),
                            ": Fetch the logs of a container or service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker exec"
                            }),
                            ": Execute a command inside a running container."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stop"
                            }),
                            ": Stop a running container."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker rm"
                            }),
                            ": Remove a container."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "stack-deployment",
                children: "Stack Deployment:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stack deploy"
                            }),
                            ": Deploy a stack defined in a Docker Compose file."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stack ls"
                            }),
                            ": List all stacks in the Docker Swarm."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stack ps"
                            }),
                            ": List tasks (containers) of a stack."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stack services"
                            }),
                            ": List services in a stack."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker stack rm"
                            }),
                            ": Remove a stack from the Docker Swarm."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "secrets-management",
                children: "Secrets Management:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker secret create"
                            }),
                            ": Create a new secret."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker secret ls"
                            }),
                            ": List all secrets in the Docker Swarm."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker secret inspect"
                            }),
                            ": Inspect details of a specific secret."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker secret rm"
                            }),
                            ": Remove a secret from the Docker Swarm."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "swarm-notes",
                children: "Swarm-Notes"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Manager node"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Worker Node"
                            }),
                            " Concept using ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Control Plane"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Managers"
                            }),
                            " can become ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "workers"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Worker"
                            }),
                            " can become ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Manager"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "emacs",
                children: "Emacs"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Doom Emacs is a highly optimized and preconfigured Emacs distribution."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It aims to provide a faster and more efficient Emacs experience out of the box."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Doom Emacs is built on top of the Emacs text editor, extending its functionality and providing a streamlined workflow."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It includes a curated set of popular packages and plugins, carefully chosen for their usefulness and performance."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Doom Emacs utilizes a modular configuration system, allowing users to easily customize and extend their editor."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It supports various programming languages and provides language-specific configurations and features."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Doom Emacs emphasizes a modal editing style, inspired by Vim, which can enhance productivity and speed."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It offers a comprehensive set of keybindings and shortcuts to navigate, edit, and manage files efficiently."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Doom Emacs provides an integrated package manager, making it easy to install and update packages from various sources."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It has a strong and active community, with regular updates, documentation, and support available."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-4",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "Documents -> https://github.com/doomemacs/doomemacs"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "elisp",
                children: "Elisp"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Elisp (Emacs Lisp) is the programming language used for extending and customizing the Emacs text editor."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It is a dialect of Lisp, a family of programming languages known for its powerful and expressive syntax."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Elisp is a dynamically typed language, meaning variables do not have fixed types and can change at runtime."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It provides a rich set of built-in functions and macros for manipulating text, buffers, and files."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Elisp supports functional programming paradigms, including higher-order functions, closures, and recursion."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It has excellent integration with Emacs, allowing for seamless access to editor features and extensibility."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Elisp provides extensive support for interactive development, with a REPL (Read-Eval-Print Loop) for evaluating expressions in real-time."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "It supports advanced features like dynamic scoping, macros for code generation, and the ability to redefine built-in functions."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Elisp has a robust and active community that contributes packages, libraries, and documentation for extending Emacs."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Emacs Lisp is not limited to Emacs itself; it can also be used for scripting, automation, and general-purpose programming outside of the editor."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-5",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Tutorials -> "
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    - https://www.youtube.com/watch?v=ymSq4wHrqyU"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    - https://learnxinyminutes.com/docs/elisp/"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "learning-inprogress",
                children: "Learning-Inprogress"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "todo",
                children: "Todo"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Docker Mastery with Kubernetes+Swarm",
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "chapter 70/99 -> All Videos before this chapter is useless"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Docker and Kubernetes",
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Chapter 123/170  -> All Videos before this chapter is useless"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Revisit",
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                            href: "https://www.docker.com/products/telepresence-for-docker/",
                                            children: "https://www.docker.com/products/telepresence-for-docker/"
                                        })
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Pending Docker dockes (No need of going through the docker guide not much to learn from there)",
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                            href: "https://docs.docker.com/config/daemon/start/",
                                            children: "https://docs.docker.com/config/daemon/start/"
                                        })
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Terraform Training start.",
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                            href: "https://docs.docker.com/config/daemon/start/",
                                            children: "https://docs.docker.com/config/daemon/start/"
                                        })
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Start Algorithms and practice some of it"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Nginx tutorials"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Mongod tutorials"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Prostgres SQL"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "LeetCode"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "HackerRank"
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Certifications ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://training.linuxfoundation.org/it-career-roadmap/",
                                children: "https://training.linuxfoundation.org/it-career-roadmap/"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "practical",
                children: "Practical"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Docker -> ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.docker.com/",
                                children: "https://docs.docker.com/"
                            }),
                            " [ Round Robin, Compose ]"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Swarm -> ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.docker.com/",
                                children: "https://docs.docker.com/"
                            }),
                            "  [ OverlayNetwork, Routing Mesh, Stacks, Secrets in Swarm Services, Secrets with Stack, Swarm Life Cycle, Docker HeathCheck, Docker Registry, WebHooks,Create Automated Build,Repository Links,Certificats,Authentications,TLS,Private Repository, ]"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Kubernetes ->"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Triver CI"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "GO lang"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "finnish-language",
                children: "Finnish Language"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "vim-cheat-sheet",
                children: "Vim-Cheat-Sheet"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "navigation",
                children: "Navigation"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "h: Move left\nj: Move down\nk: Move up\nl: Move right\n0: Move to the beginning of the line\n$: Move to the end of the line\ngg:Move to the beginning of the file\nG: Move to the end of the file\nCtrl + f: Move forward one page\nCtrl + b: Move backward one page"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "editing",
                children: "Editing"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "i: Enter insert mode at the cursor\nI: Enter insert mode at the beginning of the line\na: Enter insert mode after the cursor\nA: Enter insert mode at the end of the line\no: Insert a new line below the current line\nO: Insert a new line above the current line\nx: Delete the character under the cursor\ndd: Delete the current line\nyy: Yank (copy) the current line\np: Paste the previously yanked or deleted text\nu: Undo the last change\nCtrl + r: Redo the last change"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "search-and-replace",
                children: "Search-and-Replace"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: '/pattern: Search forward for "pattern"\n?pattern: Search backward for "pattern"\nn: Jump to the next occurrence of the search pattern\nN: Jump to the previous occurrence of the search pattern\n:%s/old/new/g: Replace all occurrences of "old" with "new" in the entire file\n:%s/old/new/gc: Replace all occurrences of "old" with "new" in the entire file with confirmation'
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "saving-and-quitting",
                children: "Saving-and-Quitting"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: ":w: Save the file\n:q: Quit (close) the file\n:q!: Quit without saving (force quit)\n:wq or :x: Save and quit"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "other-useful-commands",
                children: "Other-Useful-Commands"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: ":set nu: Show line numbers\n:set nonu: Hide line numbers\n:set syntax=language: Enable syntax highlighting for a specific programming language\n:help keyword: Open Vim's built-in help for a specific keyword"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "masters-program",
                children: "Masters-Program"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "finland",
                children: "Finland"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "netherlands",
                children: "Netherlands"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "germany",
                children: "Germany"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "canada",
                children: "Canada"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "usa",
                children: "USA"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "norway",
                children: "Norway"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "denmark",
                children: "Denmark"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "newzeland",
                children: "Newzeland"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "australia",
                children: "Australia"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "create-github-hosted-react-frontend",
                children: "Create-Github-hosted-React-Frontend"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install node and npm inside devContainer by adding below propery to the devcontainer.json."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '"features": {'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '		"ghcr.io/devcontainers/features/node:1": {},'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '		"ghcr.io/devcontainers-contrib/features/npm-package:1": {}'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "	}"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create Svelte app"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "npm create svelte@latest ca-svelte-frontend --y"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: ">Skeleton project"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: ">Use Typescript"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: ">Select All"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "cd ca-svelte-frontend"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "npm install"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "npm run dev"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Deploy to ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "https://github.com/metonym/sveltekit-gh-pages"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Add homepage property to package.json ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: '"homepage": "https://{username}.github.io/{repo-name}"'
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add a predeploy property and a deploy property to the scripts object in package.json ."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '    "scripts": {'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '    +   "predeploy": "npm run build",'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '    +   "deploy": "gh-pages -d build",'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '        "build": "react-scripts build",'
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: '        "start": "react-scripts start",'
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "run command  ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: 'npm run deploy -- -m "Deploy React app to GitHub Pages"'
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist."
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Navigate to the GitHub repository settings page> Code and automation> Pages"
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).\nReference - > ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "https://github.com/gitname/react-gh-pages#readme"
                            }),
                            ".\nMysite - > ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "next-js-frontend",
                children: "Next-js-frontend"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Components. - > ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "ReactApp/scr/components/MyFirstComponent/MyFirstComponent"
                            })
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Make sure to use Uppercase letters while  importing Components"
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "JSX can have only one root element use ",
                            " or <></>instead of div."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create below folder structure."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "├── scss"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "│   ├── main.scss"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "│   └── _variables.scss"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "reference -> ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ReactApp/scr/scss"
                    }),
                    "\n5.  Create first react component"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const MyFirstComponent = () => {"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    return ("
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        <div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "            <div>MyFirstComponent</div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "            <div>MySecondComponent</div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        </div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        "
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    );"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "export default MyFirstComponent;"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "6",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "call the MyFirstComponent in App.js"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "import React, { Fragment } from 'react';"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "import MyFirstComponent from './components/MyFirstComponent/MyFirstComponent';"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "import './scss/main.scss';"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const App = () => {"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  return ("
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    <Fragment>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      <MyFirstComponent></MyFirstComponent>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      <MyFirstComponent></MyFirstComponent>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    </Fragment>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  );"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "export default App;"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "7",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add Props"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const MyFirstComponent = (props) => {"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    return ("
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        <div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "            <div>{props.Component1}</div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "            <div>{props.Component2}</div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        </div>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "        "
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    );"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "export default MyFirstComponent;"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "8",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Call component with props in App.js"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const App = () => {"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  return ("
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    <Fragment>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      <MyFirstComponent Component1='firstComponent1' Component2='SecondComponent2'></MyFirstComponent>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      <MyFirstComponent Component1='firstComponent2' Component2='SecondComponent2'></MyFirstComponent>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    </Fragment>"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  );"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "9",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add Saas component file to the component folder."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: " MyFirstComponent"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "│       ├── MyFirstComponent.js"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "│       └── MyFirstComponent.scss"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Reference ->\n10. Props Childeren Still To Understand.\n11. UseState"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const [component,setcomponent] = useState(props.Component1);"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                }
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "const changeTitle = ()=> {"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    setcomponent('new componnent');"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "};"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "12",
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use Next js instead on react"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            }
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "12",
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Styles with Modlues and tailwindcss.\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "npm install tailwindcss"
                            })
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Debugging, break points and React devtools."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "React Form , form submission ,clearing the inputs , two way binding, Lifting state up"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Signle State Vs Mutiple states(53 and 54)"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Rendering lists with Key property."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Turnery expressions for conditional content"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Portal"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Refs -> good for reading values"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "useEffect hook"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "moving-to-next-js",
                children: "Moving-to-Next-js"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Create next.js project and select default values\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "npm create-next-app "
                            })
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "class myFirstClass{\nconstructor(){\nthis.constructor = 'constructor';\n}\nmyFirstArrowFunction = (message, constructor) => {\nvar myfirstVar = '4';\nconst myfirstConst = '5';\nconsole.log(message + myfirstVar + myfirstConst)\n}\n//Spread\nconst myFirstArray = [1,2,3,4,5];\nconst myFirstSpreadArray = [...myFirstArray];\nconsole.log(myFirstSpreadArray)\n//Rest\nmyFirstRestFunction = (...args) => {\nconsole.log(args)\n}\n//Array Destructuring\n[a,b, ,c]= myFirstArray;\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\n//Object Destructuring\n{c,d} = {name='sunny',age='cloud'}\nconsole.log(c);\nconsole.log(d);\n//objects are coped as reference -> practical pending\n//Map ->practical pending\n}"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "docker-compose",
                children: "Docker-Compose"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-important-points",
                children: "Compose-Important-Points"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Definition of Multi-Container Applications: Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to describe the services, networks, and volumes needed for your application in a declarative YAML file."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Compose File: Docker Compose uses a YAML file called ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "docker-compose.yml"
                                    }),
                                    " to define the configuration of your application. It includes services, networks, volumes, environment variables, and other options necessary to run your application."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Service: A service is a containerized component of your application. Each service is defined within the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "services"
                                    }),
                                    " section of the Compose file and can be built from a Dockerfile or use a pre-built image from a registry."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Networking: Docker Compose automatically creates a default network for your application, allowing services to communicate with each other using their service names as DNS names. You can also define custom networks for better isolation and control over your application's communication."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Volumes: Volumes in Docker Compose allow you to persist and share data between containers or between a container and the host machine. Volumes can be defined in the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "volumes"
                                    }),
                                    " section of the Compose file."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Environment Variables: Docker Compose allows you to set environment variables for your services using the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "environment"
                                    }),
                                    " key. This is useful for passing configuration values or connecting services together."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Container Orchestration: With Docker Compose, you can easily orchestrate the deployment, scaling, and management of multiple containers that make up your application. You can start, stop, and restart services as a group using simple commands."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Commands: Docker Compose provides commands for managing your application, such as ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "up"
                                    }),
                                    " to create and start containers, ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "down"
                                    }),
                                    " to stop and remove containers, ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "logs"
                                    }),
                                    " to view container logs, and more. These commands streamline the management of your multi-container application."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Extensibility: Docker Compose supports extensions through the use of community-contributed tools called Compose plugins. These plugins provide additional functionalities like load balancing, monitoring, and service discovery."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Compatibility: Docker Compose is compatible with both Docker Swarm mode and standalone Docker hosts, allowing you to deploy your applications on different Docker environments seamlessly."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "reference-6",
                children: "Reference"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "version: '3'"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "services:"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  web:"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    image: nginx:latest"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    ports:"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      - 80:80"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "    volumes:"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      - ./html:/usr/share/nginx/html"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-file-structure",
                children: "Compose-File-Structure"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "yaml",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "yaml",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "version"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'3'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Compose file version"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "services"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "service_name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Name of the service"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "image_name:tag"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Docker image and tag"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "ports"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Port mapping"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "host_port:container_port"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "volumes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Volume mapping"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "host_path:container_path"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "environment"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Environment variables"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "KEY=VALUE"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "networks"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "# Networks to connect"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "network_name"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-basic-commands",
                children: "Compose-Basic-Commands"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose up"
                            }),
                            ": Create and start containers based on the Compose file."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose down"
                            }),
                            ": Stop and remove containers, networks, and volumes."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose start"
                            }),
                            ": Start existing containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose stop"
                            }),
                            ": Stop running containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose restart"
                            }),
                            ": Restart containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose pause"
                            }),
                            ": Pause containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose unpause"
                            }),
                            ": Unpause containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose ps"
                            }),
                            ": List containers managed by the Compose file."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose logs"
                            }),
                            ": View logs of containers."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose exec service_name command"
                            }),
                            ": Execute a command in a running container."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose build"
                            }),
                            ": Build or rebuild services."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-advanced-commands",
                children: "Compose-Advanced-Commands"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose up -d"
                            }),
                            ": Start containers in detached mode."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose up --scale service_name=N"
                            }),
                            ": Scale a service to N instances."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose down --volumes"
                            }),
                            ": Remove containers, networks, and volumes (including named volumes)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose logs -f"
                            }),
                            ": Follow the logs of containers in real-time."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose exec -d service_name command"
                            }),
                            ": Execute a command in a running container in detached mode."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "docker-compose config"
                            }),
                            ": Validate and view the Compose file."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-environment-variables",
                children: "Compose-Environment-Variables"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Environment variables can be defined under the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "environment"
                            }),
                            " key within a service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Variables can be set individually or loaded from an external ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".env"
                            }),
                            " file using ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "env_file"
                            }),
                            " configuration."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-volumes",
                children: "Compose-Volumes"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Volumes can be defined under the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "volumes"
                            }),
                            " key within a service."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes allow data persistence and sharing between containers or between containers and the host."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Volumes can be specified as named volumes, host paths, or anonymous volumes."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-networking",
                children: "Compose-Networking"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "By default, Compose creates a default network for the application."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Services within the same Compose file can communicate using service names as DNS names."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Custom networks can be defined using the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "networks"
                            }),
                            " key."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "compose-extending-services",
                children: "Compose-Extending-Services"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Compose allows extending services by defining a new service that inherits properties from a base service."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Inheritance is achieved by using the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "extends"
                            }),
                            " key within a service definition."
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
var __webpack_exports__ = __webpack_require__.X(0, [2940,5035,3722,2636,3271,9369], () => (__webpack_exec__(762)));
module.exports = __webpack_exports__;

})();