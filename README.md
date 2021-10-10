<p align="center">
 <img src="./static/FlowKat_Small.png" width="800" height="400"></p>
<h1 align="center"><strong>FlowKat</strong></h1></a>


<p align="center">An open source tool for inspecting the flow of your Kafka messages</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
  <img alt="license" src="https://img.shields.io/github/license/oslabs-beta/flowkat?color=%2357d3af">
  <img alt="last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/flowkat?color=%2357d3af">
  <img alt="Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/flowkat?logoColor=%2334495e&style=social"> 
</p>

## Table of Contents

* [Features](#features)
* [Demo](#flowkat-demonstration)
* [Installation](#installation)
* [Team FlowKat](#team-flowkat)
* [License](#license)

## Features
* ### Read Messages from your Kafka Topics
* ### Simple GUI that's easy to follow
* ### Connect Your Prometheus Instance for metrics

## FlowKat Demonstration
<p>To be added!</p>

## Installation
- FlowKat relies on KafkaJS in order to aggregate messages and Prometheus to graph metrics; if Prometheus is not hooked up to your Kafka Cluster instance, FlowKat should still be able to deliver compilated messages
- Clone this repo: ````https://github.com/oslabs-beta/flowkat.git````
- Run the following commands in the root folder:
  - ````npm install```` 
  - ````npm run watch````
  - ````npm run package-win```` or ````npm run package-linux````
- Open FlowKat
- Enter the port address for your Kafka broker and (optionally) your Prometheus instance to have FlowKat retrieve messages and metrics


## FlowKat Engineering Team
[Matt von der Lippe](https://github.com/mvdlippe)
| [George Zhao](https://github.com/iSaySureWhyNot)
| [Jorge Espinoza](https://github.com/jespin457)

We welcome contributions, so please feel free to fork, clone, and help FlowKat! Remember to leave a [![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/flowkat?style=social&label=Star&)](https://github.com/oslabs-beta/flowkat/).

## License
Released under the MIT License
