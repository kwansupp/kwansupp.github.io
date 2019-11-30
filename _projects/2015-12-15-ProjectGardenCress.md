---
layout: project
title:  "Project Garden Cress"
date:   2015-12-15 16:21:34 +0200
permalink: /projects/:name
categories: [raspberry pi, computer vision, sensors, electronics, analytics]
thumbnail: /assets/images/projects/gardencress.gif
type: "Ideate, Design, Develop"
organization: "Empirical Evidence in Engineering Course, University College Twente"
---

## Overview

This project was completed as part of the course Empirical Evidence in Engineering. The goal is to design a data-acquisition system and to use it to derive meaningful insights. 

We designed a system to monitor plant growth, more specifically watercress. The system incorporates the use of a light sensor, a moisture sensure, and a (Raspberry Pi) camera. The data from these sensors are used to track plant growth over around a timespan of around 25 hours.

<!-- <br/> -->
<p align="center">
<img src="/assets/images/projects/gardencress.gif" alt="Timelapse image" title="Timelapse of Plant Growth" width="500px" />
<br/>
Timelapse of plant growth (in around 25 hours)
</p>
<br/>

One of the challenges in our design was in acquiring image data, which we wanted to use to track the amount of growth. This is done by tracking the amount of "green" over time. As there was a lot of background noise, we decided to control the environment by adding a static background (red to contrast plant color).

<!-- <br/> -->
<p align="center">
<img src="/assets/images/projects/gardencress-cv.png" alt="Image processing images" title="Image processing for plant growth." width="500px" />
<br/>
Image processing to analyze plant growth (through pixel count).
</p>

<br/>

For more detailed descriptions of the project process, visit the documentation website (link below in _Further Reading_). Unfortunately, some of the images are no longer working properly, most likely due to hosting issues on Blogger.

<br/>

## Role
This project was done in a group of 4 people. Apart from being actively involved in the setups of the various sensors, my focus was on analyzing the light acquisition and tackling the challenges in image acquisition.

<br/>

## Tech Stack
 - Raspberry Pi
 - Light dependent resistor (LDR)
 - Moisture sensor
 - Python
 - OpenCV

<br/>

## Further Reading

<a href="http://projectgardencress.blogspot.com/p/project-garden-cress.html" target="_blank">[website]</a>
