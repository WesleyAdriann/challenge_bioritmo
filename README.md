<h1 align="center">
Challenge Bioritmo
</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/wesleyadriann/challenge_bioritmo" />
  <img src="https://img.shields.io/github/last-commit/wesleyadriann/challenge_bioritmo" />
  <img src="https://img.shields.io/github/license/wesleyadriann/challenge_bioritmo" />
    <img src="https://img.shields.io/github/repo-size/wesleyadriann/challenge_bioritmo" />
</p>


## Prerequisites

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com)


## Usage
### Without Docker
In the directory, install the dependencies
```bash
npm install
```
Start React development server
```bash
npm start
```
Await for browser window open in [http://localhost:3000](http://localhost:3000).

For Storybook
```bash
npm run storybook
```
Open browser in [http://localhost:6006](http://localhost:6006).


### With Docker (Recommended)
In the directory build Dockerfile
```bash
# docker image build -t <IMAGE_NAME> <DOCKERFILE_DIRECTORY>
docker image build -t <IMAGE_NAME> .
```
Run the Container
```bash
#  docker run -p <pc_port>:<container_port> <IMAGE_NAME>
docker run -p 3000:3000 <IMAGE_NAME>
```
Application will be running on [http://localhost:3000](http://localhost:3000)

## Deployment (Production)
### Without Docker
In the directory, install the dependencies
```bash
npm install
```
Execute *build* command to create minify version to production
```bash
npm run build
```
Will be create folder /build with the files. Inserts into HTTP server. [More information](https://create-react-app.dev/docs/deployment/)


### With Docker
In the directory build Dockerfile image
```bash
# docker image build -t <IMAGE_NAME> -f <DOCKERFILE_NAME> <DOCKERFILE_DIRECTORY>
docker image build -t <IMAGE_NAME> -f DockerfileBuild .
```
Run the Container
```bash
#  docker run -p <PC_PORT>:<CONTAINER_PORT> <IMAGE_NAME>
docker run -p 80:80 <IMAGE_NAME>
```
Application will be running on [http://localhost:80](http://localhost:80)


## Built With

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Axios](https://github.com/axios/axios)
- [Create React App](https://create-react-app.dev)
- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io/docs/getting-started)
- [Prettier](https://prettier.io/)
- [ReactJs](https://reactjs.org)
- [React Hook Form](https://react-hook-form.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org)
- [Redux](https://redux.js.org)
- [Storybook](https://storybook.js.org/)
- [Styled Components](https://www.styled-components.com)
- [Typescript](https://www.typescriptlang.org/)

## Authors
- Wesley Adriann
  - Github: [wesleyadriann](https://github.com/WesleyAdriann)
  - LinkedIn: [in/wesleyadriann](https://www.linkedin.com/in/wesleyadriann/)

## URL Project Reference

- [https://github.com/WesleyAdriann/challenge_bioritmo](https://github.com/WesleyAdriann/challenge_bioritmo)
