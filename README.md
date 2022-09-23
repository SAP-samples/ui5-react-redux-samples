# UI5 React Redux Samples
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/ui5-react-redux-samples)](https://api.reuse.software/info/github.com/SAP-samples/ui5-react-redux-samples)

# Description
This is a branch as a part of one of the state management presentation linked below. In this branch, you will find the code that has Redux Toolkit added to it. You can use this branch to see how Redux was implemented.

When switching from branch to branch, please remember to run the command to install the node modules as the app will not run without that step.

### [How to Make State Management Work for You with Redux and Redux Toolkit](https://youtu.be/OspWBMQZqTw)

[Original release](https://www.youtube.com/watch?v=Eo5kYkiTvrQ)

This presentation goes over what state management is, Redux, and Redux Toolkit.

The following branches are associated with the presentation:
- `state-management-intro-main`
- `state-management-intro-basic-redux`
- `state-management-intro-redux-toolkit`

# Requirements
[Git](https://git-scm.com/)

[Node v14 and up](https://nodejs.org/en/)

[Yarn (optional)](https://yarnpkg.com/)

# Download and Installation

In order to run the repo, you will need to install Node. All the commands will be written with both NPM and Yarn. Both will work so choose what you want to use.

To clone the repo, open a CLI and navigate to a folder you want to pull the repo into and run the following command:
`git clone https://github.com/SAP-samples/ui5-react-redux-samples.git`

Once downloaded, navigate to the base folder of the repo and install the packages. This is needed to run the application.
You can use either of the two commands:
`npm i`
`yarn install`

Once done, you should be able to run the application with either of the following commands:
`npm start`
or
`yarn start`

# Available Scripts

In the project directory, you can run the following scripts. They are written as NPM scripts followed by Yarn scripts.

### `npm start` | `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test` | `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Redux
The basic Redux example is on branch `redux-example`.
The example using Redux Toolkit is on branch `redux-toolkit-example`.

[Here is the link to the Getting Started page in the Redux Documentation](https://redux.js.org/introduction/getting-started). Note that the official documentation is now based on Redux Toolkit, instead of basic Redux. There are still a lot of articles on adding basic Redux to new projects but the way forward is likely going to be using Redux Toolkit. Knowing both is good as a lot of projects still use basic Redux as the toolkit is very new.

# Known Issues
No known issues.

# How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.

For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

# Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

# License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
