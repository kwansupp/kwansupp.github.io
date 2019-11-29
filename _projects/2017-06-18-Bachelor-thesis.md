---
layout: project
title:  "Real-Time Inertial Sensor-Driven Biofeedback on Foot Progression Angle"
subtitle: "Bachelor Thesis Assignment"
date:   2017-06-18
categories: [motion capture, signal processing, AR]
thumbnail: /assets/images/projects/thesis-exp-demo.gif
type: "Design & Research Project"
organization: "Bachelor Thesis Assignment"
---

## Overview
Using inertial sensors (inertial measurement units or IMUs) and augmented reality glasses, is it possible to design an ambulatory system for use as a gait training intervention for knee osteoarthritis?

Osteoarthritis is a chronic disease commonly found in the world's aging population. Apart from pain and disability in hip and knee joints, those affected often find themselves with lowered productivity levels in daily life. In turn, this leads to financial burdens.

Among the many interventions already developed for knee osteoarthritis, gait training is a non-invasive method that has proved effective for preventing the disease progression. Patients can retrain their walking style such that less load is put on the knee joint. This can be done through controlled foot progression angle (pointing toes inwards or outwards).

Near real-time biofeedback systems have been used for gait training, although they are highly dependent on complex and expensive laboratory environment systems. If IMUs can be used instead of optical systems, this would reduce the costs for such gait training intervention. Along with augmented reality glasses, an ambulatory system can be created, allowing for wider uses of biofeedback and gait training in clinical rehabilitation.

For my bachelor thesis assignment, I developed such a system. The challenge of this project was in processing signals from an inertial motion capture suit such that correct feedback on foot progression angle can be given to the users. Designing a visual feedback and having it displayed in (near) real-time was also a challenge. What is the best format for giving the feedback visually? What is the best frequency to give visual feedback? How much delay can there be in the feedback and how does that affect its usability for gait training?

After having developed the system, I designed and ran experiments to test its usability. My thesis report can be found below under Further Reading.

<p align="center">
<img src="/assets/images/projects/thesis-exp-demo.gif" alt="sample of visual biofeedback as a GIF" title="Sample of visual biofeedback in deployment" width="500px" />
<br/>
A sample of the visual biofeedback running in real-time. The arrows show the degree and direction in which footsteps should be placed (foot angle placed more inwards or outwards). The colors signify how well the user placed his or her previous footsteps. There are two arrows, one for each foot.
</p>
<br/>

## Tech stack
 - Unity3D Game Engine (C#)
 - Microsoft HoloLens
 - XSens Inertial Motion Capture Suit


## Further Reading
<a href='/assets/docs/KwanSuppaiboonsuk-FinalThesis.pdf' target="_blank">[thesis]</a>

### Abstract
In this study, a near real-time biofeedback system was developed, using inertial motion capture and augmented reality (AR) glasses. The system is designed to give feedback on foot progression angle (FPA), commonly used in gait interventions for knee osteoarthritis patients. Through alterations of this angle, mechanical loading on the knee joint can be reduced. By doing so, disease progression is slowed down and patients are able to lead daily lives with reduced physical pain. With the use of mixed reality technology glasses and inertial motion captures of the body, the system is able to provide patients with interventions in an ambulatory setting, in contrast to that of the current clinical research practices which use treadmills and cameras. Through two rounds of experimental testing of the prototype (with four healthy participants altogether), the usability and effectiveness of this system are evaluated by using gait analysis and the System Usability Scale (SUS). Experimental results of the system prototype show that the system is usable, although there is still much to be improved regarding system performance and accuracy. Further research and development should be done before it can actually be deployed for use with knee osteoarthritis patients. Nevertheless, the proposed system could enable wider adoption of gait retraining rehabilitation applications by reducing complexity and cost.

**Keywords:** gait analysis; visual biofeedback; inertial motion capture; foot progression angle; wearable technology; knee osteoarthritis
