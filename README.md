# Cloud-Architect-Large-Enterprise-Practical-Guild

#### DevContainers
1. Install vscode and Docker over the internet , and make sure both of them are up and running.
2. install the "Remote Development" and "Dev Containers" extension for VS Code
3. Open the folder in VScode where you want to create Dev container 
4. Create `.devcontainer/devcontainer.json` file inside the folder.
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




