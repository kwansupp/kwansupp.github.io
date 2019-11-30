---
layout: project
title:  "Object Recognition of Electrical Components in Control Panels"
date:   2019-08-30
categories: [computer vision, deep learning, business development]
thumbnail: /assets/images/projects/cv.gif
type: "Pilot R&D Project"
organization: "Modderkolk x New Engineers"
---

## Overview
Modderkolk Projects & Maintenance is a SME company that manufactures electrical control panel cabinets for industry, healthcare, and water management. These cabinets are customized to the necessities of customers, whether for controlling the airflow of production cleanrooms or operation rooms or for controlling the water levels in canals.

These control cabinets are still being assembled by hand. To reduce production time, the company seeks to automate the production process with the use of collaborative robots.

<p align="center">
<img src="/assets/images/projects/MK-project-vision.png" alt="images of production line vision" title="Production Process Vision" width="600px" />
<br/>
Conceptualized vision of a connected production process.
</p>
<br/>

To begin innovating, efforts are put into research and development for such a system for sorting incoming materials. More specifically, software proof of concepts are created, using computer vision and deep learning.

<p align="center">
<img src="/assets/images/projects/cv.gif" alt="GIF of image processing to detect objects" title="Object detection process" width="500px" />
<br/>
Image processing for detecting objects in an image.
</p>
<br/>

<p align="center">
<img src="/assets/images/projects/classify.gif" alt="sample of visual biofeedback as a GIF" title="Sample of visual biofeedback in deployment" width="500px" />
<br/>
Sample of object inference from retrained classification model (transfer learning).
</p>
<br/>

This project was a challenging one due to it's scale and complexity. Problem definition was very crucial and it was necessary to break it down into a more specific problem. Through exploratory data analysis, I identified one of the control panel cabinets design that is manufactured most often, along with the components that are found within it (9 components). My challenge was then to build a proof of concept system that can identify these components when delivered to the warehouse. The system should also let the warehouse employee know for which assembly project the material needs to be delivered to.

I was challenged by the lack of any good-quality image data. I collected the images of the components by hand and then generated more data by means of image augmentation. I also included noise and transformations in the augmentations to make the dataset more representative of real-world environments. Objects that the model will have to classify may be affected by various orientations, lighting, and other noise in the environment. 

<p align="center">
<img src="/assets/images/projects/MK-dataset.png" alt="samples of dataset for second proof of concept" title="Sample of dataset for second proof of concept" width="500px" />
<br/>
Sample images from dataset that is used to train the second proof of concept (object recognition for 9 objects found in a standard cabinet). More data was generated through image augmentation.
</p>
<br/>

Using transfer learning, I retrained a model on the generated dataset. Information on the model performance can be found in the Evaluation Report under the *Further Reading* section.

Apart from the proof of concepts, I also designed a system for data collection to further scale the model to identify over hundreds of components. Next to development, I created a strategy for scaling up the project and for its implementation within the company.

Overall, within the period of a year (September 2018 - August 2019), I achieved the following:
- Problem definition
- Worked with the director to visualize the conceptual vision of a smart production line
- Created and managed a technology roadmap towards the vision
- Built proof of concepts for object recognition software (first with 4 components, then 9 components identified to be in one of the standard cabinets)
- Deployed model as an API and led the integration in company's ERP system to have a system that can be used in sorting materials to the correct cabinet project
- Managed various stakeholders to get people on board with the concept
- Design system for image data collection and machine learning system. This system is currently being developed to scale up the project to identify over hundreds of different components.

For more details on the project and a reflection of my year, check the *Further Reading* section below.



## Tech stack
Exploratory analysis: 
 - Python - pandas, scikit-learn
 - SQL

Proof of concept: 
 - OpenCV
 - Python
 - Tensorflow
 - Keras
 - SQL
 - Raspberry Pi (TCP/IP image transfer)
 - Flask (serving REST API)


## Further Reading

<a href="https://kwansupp.github.io/NE-final/" target="_blank">[Reflection Site]</a> — Reflection of project and New Engineers apprenticeship experience

<a href='/assets/docs/NE+MK-Model-Evaluation.pdf' target="_blank">[Model Evaluation Report]</a> — Evaluation of Model Performance for Object Classification

<a href='/assets/docs/NE+MK-5pager-problem.pdf' target="_blank">[Problem Definition]</a> — Object Recognition for an Automated Production Process for Electrical Panel Cabinets

**Executive Summary**  
The Big Hairy Audacious Goal (BHAG) for Modderkolk Projects & Maintenance B.V. is to have 90% of electrical panel cabinets produced by a fully autonomous production line by the year 2028. Implementing a robotic production line allows for benefits in production lead time, quality assurance, error reduction, and possibilities for manpower allocation. This can help the company to maintain it’s competitive edge and keep up with customer demands with respect to time and resources. This report details the initial proof of concept in applying object recognition technology as a step towards a fully-automated production line.

<a href='/assets/docs/NE+MK-5pager-Innovation.pdf' target="_blank">[Innovation Report]</a> — Modderkolk's Innovation Intent & Capability: A Statement of Intent for Innovation, Analysis of Company's Innovative Capability & Strategic Recommendations for Innovation

**Executive Summary**  
Modderkolk Projects & Maintenance B.V. wants to become an ever-flourishing company. In order to reach that goal, good organization and planning is necessary. The current organizational structure of the company already helps to
support short-communication lines and allow for employee autonomy to radically serve customer needs. The company is still hindered by inefficient planning, caused by too many starts and stops within processes. To address this problem, Modderkolk has an innovation goal of having a fully autonomous production line that has real-time monitoring for insights. To help identify how Modderkolk can increase the innovative capability in order to successfully reach this goal, an analysis is completed on various company activities and attributes. From this analysis on company strategy, organization, process, competences, and culture, it is recommended for the company to have an explicit innovation strategy. Recommendations are given on some initiatives that can be included in the innovation strategy.
