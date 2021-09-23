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
* ### User-friendly GUI


## FlowKat Demonstration
<p>To be added!</p>
<!-- <hr/>
<br>
<p align="center">Enter the Broker and Exporter ports where your Kafka instance is running </p>
<p align="center">
<img src="https://klustr.app/images/Broker-Entry.gif" alt="Enter Ports">
</p>
<br>
<p align="center">Upon successful submission, critical information about your brokers, topics, and consumer groups becomes immediately available </p>
<p align="center">
  <img src="https://klustr.app/images/Cluster-Overview-SM.gif" alt="Cluster Overview">
</p> 
<br>
<p align="center">From the Core Metrics dashboard, you will see controller and partition data and can select critical metrics...</p>
<p align="center">
  <img src="https://klustr.app/images/Core-Metrics-SM.gif" alt="Cluster Overview">
</p> 
<p align="center">...to be displayed and updated, in real time!</p>
<p align="center">
  <img src="https://klustr.app/images/Graph-SM.gif">
</p> -->

## Installation
- FlowKat relies on KafkaJS in order to aggregate messages and Prometheus to graph metrics; if Prometheus is not hooked up to your Kafka Cluster instance, FlowKat should still be able to deliver compilated messages
- Clone this repo: ````https://github.com/oslabs-beta/flowkat.git````
- Run the following commands in the root folder:
  - ````npm install```` 
- Enter the port address for your Kafka broker and (optionally) your Prometheus instance to have FlowKat retrieve messages and metrics


## FlowKat Engineering Team
[Matt von der Lippe](https://github.com/mvdlippe)
| [George Zhao](https://github.com/iSaySureWhyNot)
| [Jorge Espinoza](https://github.com/jespin457)

We welcome contributions, so please feel free to fork, clone, and help FlowKat! Remember to leave a [![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/flowkat?style=social&label=Star&)](https://github.com/oslabs-beta/flowkat/).

## License
Released under the MIT License