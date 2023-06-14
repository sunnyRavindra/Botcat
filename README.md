# Cloud-Architect-Large-Enterprise-Practical-Guild

* [Introduction](#Introduction)
  * [Docker](#Docker)
    * [Basic](#Basic)
    * [Docker-Engine](#Docker-Engine)
  * [Markdown](#Markdown)

## Introduction
Welcome to the Cloud Architect Large Enterprise Practical Guide! This comprehensive guide is designed to provide Cloud Architects working in large enterprise environments with a practical approach to learning. It covers a range of topics, including DevOps practices, software development methodologies, and cloud infrastructure design.


## [Docker](https://www.docker.com)
### Basics
1. Containers package code and its dependencies for reliable and fast execution.
2. Docker containers are lightweight and standalone.
3. They include everything necessary to run an application: code, runtime, tools, libraries, and settings.
4. Container images become containers during runtime.
5. Docker containers rely on *Docker Engine* to become containers.
6. Containers work consistently across different infrastructures.
7. Containers isolate software from the environment.
8. Containers ensure uniform functionality across different stages like development and staging.

### Docker-Engine
1. Docker Engine is the leading container runtime.
2. It runs on multiple Linux and Windows Server operating systems.

### How is Docker related to [Containerd](https://containerd.io/)
1. Docker is a platform for containerization, providing tools and a runtime environment.
2. Containerd is an open-source project that serves as the default container runtime for Docker Engine.
3. Containerd implements the low-level functionality needed for container execution and management.
4. Docker builds upon containerd to offer a user-friendly interface and additional features.
5. Containerd focuses on core container runtime tasks, such as image and container lifecycle management.
6. Docker adds tools and enhancements on top of containerd to simplify container workflows.
7. Containerd is lightweight, modular, and designed for stability and reliability in container operations.

## [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
    1. GitHub Markdown is a lightweight markup language used to format and style text on GitHub.
    2. It is based on the original Markdown syntax but includes some additional features and extensions.
    3. GitHub Markdown is commonly used in README files, documentation, and issue comments on GitHub.
    4. It supports basic formatting options like headings, lists, emphasis (bold and italic), and links.
    5. GitHub Markdown allows for the inclusion of images, code blocks, and tables.
    6. It supports syntax highlighting for different programming languages in code blocks.
    7. GitHub Markdown supports task lists, which are useful for tracking progress in issues or pull requests.
    8. It allows for the creation of links to specific lines or sections within a file.
    9. GitHub Markdown supports emoji shortcuts for adding emoticons to your text.
    10. It also supports the use of HTML tags for advanced formatting when necessary.

## Docker Important points
1. Every time you run an new container from an image, it generates a unique container ID (Which is very lengthy)
2. Docker first checks for the image in the local drive and then if not found it looks for it on the docker hub and pulls it down.
3. When Container is created it does not copy that image but created a layer of that image and runs the container.
4. when Container is created a default virtual network is also created for the respective container to run on.
5. when the containers are spunk up the process running inside the container as not under a vm or hiding from OS, they are indeed in the process of the system its just that they are running behind a virtual network.
6. Bind Mounting
7. Persistent Volumes
8.

# Docker Commands
1. docker version -> Returns the information of server and the client (If we are getting both the client and server response values then we can say that the Docker is working properly)
2. docker info -> Returns more information about the system off docker like how much containers are running(Basically properties command for docker)
3. docker ->returns all the docker commands that can be used and referred to.
4. docker container run --publish 80:80 --detach --name mynewcontainer --network mynetwork nginx -> spins up a container spiting out a container ID
5. docker container ls -> list the containers that we have running right now
6. docker container ls -a
7. docker container stop (container name)-> stops the running container on the machine
8. docker container logs mynewcontainer
9. docker container top mynewcontainer
10. docker container rm (name of the containers separated by space)
11. ps aux (returns all the process running on the mac system)
12. docker container inspect mynewcontainer
13. docker container stats
14. docker container run -it --name enakonda nginx bash
15. dicker container start -ai enakonda(This command keeps the docker container running until you have been exited from the bash shell)
16. docker container exec -it enakonda bash(This command keeps the docker container running)
docker container port enakonda
17. docker container inspect --format '{{ .NetworkSettings.IPAddress}}' enakonda.
18. docker container run -d --name enakonda --network-alias search elasticsearch:2
19.
# Docker Network
1. docker network ls
2. docker network inspect bridge
3. docker network create myNetwork
4. docker network connect network container
5. docker network disconnect network container


# DNS
1. The docker containers talks to each other on the basis of DNS name(Docker container name) because the IP address from the container may be removed and can be dynamic at times(only apples to the new Virtual network)
2. So the default Bridge network does not have the same DNS functionality in it.(so you will have to add it manually by --link)

# Images
1. Images are just the binaries and the Kernal is provided by the OS itself
2. docker image history
3. docker image tag oldimage new/imagename
4. docker image push
5. docker login
6. docker logout

# Docker compose

** DevContainers
1. Install DevContainers CLI
2. Install vscode and Docker over the internet , and make sure both of them are up and running.
3. install the "Remote Development" and "Dev Containers" extension for VS Code
4. Open the folder in VScode where you want to create Dev container
*** Imp Links
- [[https://containers.dev/]]
- https://github.com/devcontainers/cli
. Create `.devcontainer/devcontainer.json` file inside the folder.
 ```
    {
        "name": "UbuntuDevContainer",
        "image": "mcr.microsoft.com/devcontainers/base:jammy"
    }
```
5. cmd/ctrl + Shift + p -> reopen in Container 
Reference - >  `Cloud-Architect-Large-Enterprise-Practical-Guild/DevContainerFiles`
Official Tutorial - > `https://code.visualstudio.com/docs/devcontainers/containers`

### Create Github hosted React Frontend
1. Install node and npm inside devContainer by adding below propery to the devcontainer.json.
```
"features": {
		"ghcr.io/devcontainers/features/node:1": {},
		"ghcr.io/devcontainers-contrib/features/npm-package:1": {}
	}
```
2. Create Svelte app 
```
npm create svelte@latest ca-svelte-frontend --y
>Skeleton project
>Use Typescript
>Select All
cd ca-svelte-frontend
npm install
npm run dev
```
3. Deploy to `https://github.com/metonym/sveltekit-gh-pages`.
2. Add homepage property to package.json `"homepage": "https://{username}.github.io/{repo-name}"`.
3. Add a predeploy property and a deploy property to the scripts object in package.json .
```
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
```
1. run command  `npm run deploy -- -m "Deploy React app to GitHub Pages"`
```
    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
```
1. Navigate to the GitHub repository settings page> Code and automation> Pages
2. update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).
Reference - > `https://github.com/gitname/react-gh-pages#readme`.
Mysite - > `https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/`

### Next js frontend
1. 
1.  Components. - > `ReactApp/scr/components/MyFirstComponent/MyFirstComponent`
2.  Make sure to use Uppercase letters while  importing Components
3.  JSX can have only one root element use <Fragments > or <></>instead of div.
4.  Create below folder structure.
```
├── scss
│   ├── main.scss
│   └── _variables.scss
```
reference -> `ReactApp/scr/scss`
5.  Create first react component 
```
const MyFirstComponent = () => {
    return (
        <div>
            <div>MyFirstComponent</div>
            <div>MySecondComponent</div>
        </div>
        
    );
}
export default MyFirstComponent;
```
6.  call the MyFirstComponent in App.js
```
import React, { Fragment } from 'react';
import MyFirstComponent from './components/MyFirstComponent/MyFirstComponent';
import './scss/main.scss';
const App = () => {
  return (
    <Fragment>
      <MyFirstComponent></MyFirstComponent>
      <MyFirstComponent></MyFirstComponent>
    </Fragment>
  );
}
export default App;
```
7.  Add Props
```
const MyFirstComponent = (props) => {
    return (
        <div>
            <div>{props.Component1}</div>
            <div>{props.Component2}</div>
        </div>
        
    );
}
export default MyFirstComponent;
```
8.  Call component with props in App.js
```
const App = () => {
  return (
    <Fragment>
      <MyFirstComponent Component1='firstComponent1' Component2='SecondComponent2'></MyFirstComponent>
      <MyFirstComponent Component1='firstComponent2' Component2='SecondComponent2'></MyFirstComponent>
    </Fragment>
  );
}
```
9. Add Saas component file to the component folder.
```
 MyFirstComponent
│       ├── MyFirstComponent.js
│       └── MyFirstComponent.scss
```
Reference -> 
10. Props Childeren Still To Understand.
11. UseState
```
const [component,setcomponent] = useState(props.Component1);

const changeTitle = ()=> {
    setcomponent('new componnent');
};
```
12. Use Next js instead on react 
```

```
12. Styles with Modlues and tailwindcss.
`npm install tailwindcss`
13. Debugging, break points and React devtools.
14. React Form , form submission ,clearing the inputs , two way binding, Lifting state up
15. Signle State Vs Mutiple states(53 and 54)
16. Rendering lists with Key property.
17. Turnery expressions for conditional content 
18. Portal
19. Refs -> good for reading values
20. useEffect hook

### Moving to Next js 
1. Create next.js project and select default values 
`npm create-next-app `
2. 















class myFirstClass{
    constructor(){
        this.constructor = 'constructor';
    }
    myFirstArrowFunction = (message, constructor) => {
        var myfirstVar = '4';
    const myfirstConst = '5';
        console.log(message + myfirstVar + myfirstConst)
    }
    //Spread
    const myFirstArray = [1,2,3,4,5];
    const myFirstSpreadArray = [...myFirstArray];
    console.log(myFirstSpreadArray)
    //Rest
    myFirstRestFunction = (...args) => {
        console.log(args)
    }
    //Array Destructuring 
    [a,b, ,c]= myFirstArray;
    console.log(a);
    console.log(b);
    console.log(c);
    //Object Destructuring 
    {c,d} = {name='sunny',age='cloud'}
    console.log(c);
    console.log(d);
    //objects are coped as reference -> practical pending
    //Map ->practical pending
}

#### Application Containerization  
1. Install docker.
```
Onlocal: 
    curl -fsSL https://test.docker.com -o test-docker.sh
    sudo sh test-docker.sh
    docker -v
OnDevcontainer: add below lines to devcontainer.json
    "features": {
            "ghcr.io/devcontainers/features/docker-in-docker:2": {}
        }
```
2. Rebuild. 
3. Create DockerFile named "Dockerfile" inside the project folder.
```
    From alpine:latest
    #WORKDIR /app
    #COPY . .
```
4. Create Image using `docker build -t ca-frontend:v1 .`
5. Start Docker container with the build Image `Docker Container run -it ca-frontend:v1 sh `
6. To get out of the shell `ctrl+D`
Reference - > `Cloud-Architect-Large-Enterprise-Practical-Guild/Docker/Dockerfile`
Official Tutorial - > `https://docs.docker.com/get-started/overview/`




