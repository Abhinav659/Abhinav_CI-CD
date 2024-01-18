# Abhinav Sharma Portfolio Website - End-to-End CI/CD Pipeline

This repository contains the codebase for my portfolio website hosted on an AWS EC2 instance. The project leverages Jenkins for setting up the Continuous Integration and Continuous Deployment (CI/CD) pipeline.

## Overview

This project is a demonstration of my skills and experiences as an AWS Certified Solution Architect and DevOps Engineer. The website showcases my professional journey, skills, and projects. The CI/CD pipeline is designed to automate the deployment process, ensuring that the latest version of the website is always available.

## Technology Stack

The technology stack for this project includes:

- AWS EC2: The hosting platform for the website.
- Jenkins: The tool used to set up the CI/CD pipeline.

## CI/CD Pipeline

The CI/CD pipeline is triggered by code changes pushed to the GitHub repository. When a change is detected, the pipeline automatically feeds the code into Jenkins. The output of the build process is then deployed onto AWS EC2.

## Jenkins Configuration

Jenkins is configured to monitor the GitHub repository for any changes. Upon detecting a change, Jenkins triggers a build. The build process involves compiling the source code, running tests, and packaging the application. Once the build process is successful, Jenkins deploys the application onto the AWS EC2 instance.

## AWS EC2 Configuration

The AWS EC2 instance is configured to receive the application from Jenkins and serve it to the users. The instance is set up to automatically pull the latest version of the application whenever a new build is deployed.

## Testing

To test the CI/CD pipeline, changes can be made to the application code in the GitHub repository. Once the changes are pushed to the repository, Jenkins will automatically trigger a build and deploy the updated application onto the AWS EC2 instance.

## Conclusion

This project showcases my ability to set up an end-to-end CI/CD pipeline using Jenkins and AWS EC2. It also highlights my proficiency as an AWS Certified Solution Architect and DevOps Engineer.

---

[Source 1](https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/), [Source 2](https://dev.to/onumaku_bobby/compare-aws-codepipeline-vs-jenkins-for-cicd-3j6k), [Source 4](https://blog.ippon.tech/jenkins-vs-aws-codepipeline/)

