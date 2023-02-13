# Oort Dashboard

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Build and Serve App](#build-and-serve-app)
    1. [Run Tests](#run-tests)
    1. [Deployment Setup](#deployment-setup)
1. [View Application](#view-application)
1. [Resources](#resources)

## Usage

> Password protected access to a sortable list of EC2 instances (using fake data).

## Requirements

- Node 18.13.0
- Yarn 1.22.19^

## Development

#### Installing Dependencies

From within the root directory:

```sh
$ yarn add
```

#### Build and Serve App
To run app locally, from the root directory, run:
```
$ yarn dev
```

#### Run Tests
From root directory
```
$ yarn test
```

#### Deployment Setup
- Create a new AWS account if you do not already have one
- Be sure your project is hosted on a source control platform like, GitHub, Bitbucket, GitLab, etc
- Navigate to AWS Amplify in the AWS console to create a new app by selecting "Host web app"
- Select the git platform you are using and grant AWS Amplify permission to access the source code
- Follow along with the prompts to connect and deploy your app
- AWS Amplify has built in continuous integration so all changes pushed to git will automatically be deployed

## View Application
For development, in your browser, navigate to
```sh
http://localhost:3000
```

View the latest deploy at: https://main.d24rb4l8t0k5hf.amplifyapp.com

Credentials -

  username: test

  password: Password1!

## Resources

To configure AWS amplify authentication, see documentation below:

https://ui.docs.amplify.aws/react/connected-components/authenticator/configuration
