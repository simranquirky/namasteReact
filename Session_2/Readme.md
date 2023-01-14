- For downloading packages and dependencies use npm, the command: `npm init -y`
- On running this a `package.json` file is created, which is used by nodejs for storing some configuration.
- `npm i react react-dom` installs react and react-dom packages. On running this command you get a file named `package-lock.json` and a folder named `node_modules`.
- In the above command, since we have ~not specified any particular version for the package so it installs the latest package. We could have specified version as well like `npm i react@17.2` . Here `i` stands for install.
- Dependency is any file or package/modules etc our project needs from outside world.
- There are multiple ways to inject dependencies. One way was using the script tags
```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
Other way is using the `npm i` command.
- If you look at the files/folders inside node_modules folder, you will find other things as well apart from react and react-dom. What are they? They are transitive dependencies.
- Our code contains lots of unneccessary tabs and spaces, which can be removed to reduce the file size if we have very big code. This is taken care of by bundlers. Webpack is one such bundler. We will use parcel. `npm i parcel`
- There are two kinds of dependency , a normal dependency which is shipped to production and dev dependency . We need to install parcel as dev dependency using `npm i -D parcel`. 
- Now we can run the file using `npx parcel src/index.html` , we can also include this command under script tag od package.json file like:
```
"scripts":{
    "start": "parcel src/index.html"
}
``` 
and then run the `npm run` command.
- `npx` is used for execution
- Parcel can do a lot of things, live server is one among the list. It can do compression, image optimization, etc.
- `node_modules` folder contains a lots of file, but we don't want to upload all the files to server or github, for that we have `package.json` .and `package-lock.json`. They contain all the info needed for regenerating the node modules, even if you delete the node_modules by mistake, you can regenerate by using `npm install` . `package-lock.json` is of small size in KBs whereas `node_modules` are in GBs.
- `package-lock.json` contains the exact version of the stuffs running in the dev, which needs to be pushed to git.
- `.vscode` folder contains the configurations for running the code on VSCODE.
- `dist` folder contains the files which will be shipped to production, it is created when we build our code using parcel. It contains the files in minimized form. 
- the files which we don't want to upload to github while running git push, we should add the list of such file to `.gitignore` file.
- `.DS_Store` is file generated only in MAC , for storing cache.
- When we run `npm debug` it generates a log, we don't want to upload that log to github, file name is `npm-debug.log*`
- on running the server we get a `react not defined error` . How to resolve this? We will import `react` and `react-dom` in our js file. Using the statements:
```
import React from "react";
import ReactDOM from "react-dom/client";
```
- Still we will get an error that browser scripts cannot contain import statemets, to resolve this we need to specify in our html code that it is not a normal script file, it is a module. 
- `npm create-react-app {{app_name}}` will download all the files required like parcel (create-react-app uses webpack) etc which we did manually and help us to start with the react app directly on running the `npm run` command.
- Under `package.json` file we have sections like `production` and `development` under whoich we can specify the browser versions on which on production code should run like `last 1 chrome version` which means latest chrome version. It contains the list on which your production/development code will run , this helps as some parts of the code might not be supported in older browser versions. Your bundler can modify the code to support other/older versions as well.
- `manifest.json` has list of icons, while using different devices different icons are rendered. (part of PWA).
