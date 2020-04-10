# Ionic + React + JSX

This project shows a sample application using JSX instead of TSX with Ionic/React framework.

## Install
```sh
npm install
ionic serve
```

Ionic serve allows auto-reloading webapp if dev changes code.

## Build
```sh
ionic build
```

## Creating Ionic/React Project with JSX

- Install Ionic and its dependencies
```sh
npm install -g @ionic/cli native-run cordova-res
```

- Create project (folder structure)
```sh
ionic start myProjectName tabs --type=react --capacitor
```

- Navigate to the project dir
```sh
cd myProjectName
```

- Change all .tsx files to .js

- Make sure to convert Components to JSX form, for e.g.
  - React Class Component (using `rce` snippet with [React ES7 extension](https://marketplace.visualstudio.com/itemdetails?itemName=dsznajder.es7-react-js-snippets)):
    ```JSX
    import React, { Component } from 'react'

    export class MiComponente extends Component {
        render() {
            return (
                <div>
                    
                </div>
            )
        }
    }

    export default MiComponente
    ```
    - React Functional Component (using `rfce`)
    ```JSX
    import React from 'react'

    function MiComponente() {
        return (
            <div>
                
            </div>
        )
    }

    export default MiComponente
    ```