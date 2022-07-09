---
layout: project
title:  "EMG-Controlled Burger-Flipping Robot"
date:   2016-11-15 16:21:34 +0200
permalink: /projects/:name
categories: [robotics, signal processing, EMG]
thumbnail: /assets/images/projects/biorobotics-solidwork.png
type: "Ideate, Design, Develop"
organization: "BioRobotics module, University of Twente"
---

## Overview

Duchenne Muscular Dystrophy (DMD) is a genetic disorder which causes muscle degeneration. Symptoms often develop in early childhood in the form of lower limb weakness and a "waddling" gait. By early teenage years, those who are diagnosed often require wheelchairs. Eventually, muscular dystrophy spreads to upper limb muscles, along with gradual decline in respiratory and cardiac performance. 

Someone with DMD can expect to live up to only 30 years, as there is no cure. They will spend a large part of their lives relying on relatives or caretakers for assistance.

Our challenge was to design a robot that can be controlled by a person who is affected by DMD. The scope for the tasks in which the robot must perform should fall under manual labor work.

We had targeted our robotic design challenge towards the task of flipping a burger patty. After having generated a few conceptual designs and evaluated them, we ended up with the design below.

<p align="center">
<img src="/assets/images/projects/biorobotics-solidwork.png" alt="SolidWork Models of Robot" title="SolidWork Models of Robot" width="500px" />
<br/>
Model of our final design in SolidWorks from various viewpoints.
</p>
<br/>

Apart from the physical modelling, we also modelled the dynamics for robot behavior. We derived a transfer function which was used to create a simulink model.

With this design, the robot is to be controlled by EMG sensors attached to biceps of both arms. One arm controls the robotic cart movement along the rail setup. The other arm controls the activation for the movement that scoops and flips the burger with a 'spatula'.

To be able to use the signals from the biceps activations, we applied signal processing to design a filter. We had also designed a PID controller to prevent overshoot and to dampen the motor used to control the 'spatula'. This proved to be obsolete as we found out that we could also counter the movement overshoot by turning the motor the other way for a determined amount of time at the end.

The control of the motors and the EMG filtering were combined in a program written in C++. 

An in-depth report on the steps taken throughout the project can be found in the Design & Implementation Report (link below in _Further Reading_).

<br/>

<p align="center">
<img src="/assets/images/projects/biorobotics-robotactions.png" alt="Images of robot in action" title="Robot in Action" width="1000px" />
<br/>
Robot in action, controlled through bicep activations. 1 & 2 - Picking up burger "patty" with spatula. 3 - Elevated edges (white) on spatula, aids in flipping the patty.
</p>

<br/>

## Role
This project was completed in a group of 4 people over the course of a quartile (September - November 2016). My roles within the project varied throughout the different phases. 

In the beginning I was involved in the systems design, helping the group to come up with the requirements and specifications. After having generated our concepts, I was in charge of the concept visualizations, clearly communicating our ideas through sketches.

In the design phase, I designed some of the components for our final design in SolidWorks. I was also involved in the mathematical calculations for modelling the dynamics (to assess the behavior of the robot).

After having built and evaluated the robot, I was responsible for presenting our product demo.

<br/>

## Tech Stack
 - FRDM-K64F development boards (C++)
 - EMG sensors
 - SolidWorks
 - MatLab Simulink

<br/>

## Further Reading

<a href='/assets/docs/BioRobotics-DesignImplementationReport.pdf' target="_blank">[design & implementation report]</a>