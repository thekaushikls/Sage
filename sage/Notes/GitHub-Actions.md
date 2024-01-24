# GitHub-Actions
*Created* : 15-05-2023 18:36
<br>*Tags* : #Automation #GitHub #Actions #CICD #DevOps
---

## About

GitHub Actions is a feature of the `GitHub` platform that provides tools to automate parts of software development. It uses YAML based instructions, to run workflows in development pipelines to help with CICD *(Continuous Integration and Continuous Deployment)* methodologies.

## Terminology

### Events

Events are the main entry point of any automation. Events triggers actions, workflows, or even other events which in-turn trigger other parts of the workflow.

These events are raised by GitHub, when a real-world event occurs. For example, when a user opens a new `Issue`, a `Issue-Created Event` is raised. When a `Pull Request` is created by a contributor, a `Pull Request Created Event` is raised.

### Workflow Runs

Workflow Runs (or just Runs) contain the steps in processing the workflow instructions. It maybe performing some checks, building the code, compiling binaries, or even deploying on `GitHub Pages`

A Workflow contains at least 1 `Job`. 

### Jobs

A Job is a part of the `Workflow` that performs one main task. It may be split into several `Steps`
Each `Job` is associated with a `Runner` which may or may not run independently. By default, Jobs can run in parallel.

But can also be made to run in sequence by adding `required` parameters.

### Steps

A `Step` is a single abstracted instance of the entire workflow, which may or may not depend on external / `Community Actions`. A `Step` can be a simple process of executing a shell script, or run a few lines of python code, or even run an entire action.

Steps can run only in sequence.

### Runners

A `Runner` can be considered as a virtual machine / environment where the `Steps` are executed in sequence.

There are two broad flavors of `Runners` that can be specified to suit the steps in the workflow.

1. GitHub Hosted Runners - have three main operating system environments
	1. Ubuntu Runners
	2. Windows Runners
	3. MacOS Runners
2. Self-Hosted Runners - 
	Here, the operating systems, and additional tools available need to be configured, hosted, and maintained by the user(s). 

## References
1. [GitHub Actions: The Full Course - Learn by Doing!](https://www.youtube.com/playlist?list=PLArH6NjfKsUhvGHrpag7SuPumMzQRhUKY) by [glich.stream](https://www.youtube.com/@glich.stream) on YouTube

---
## Read Also
