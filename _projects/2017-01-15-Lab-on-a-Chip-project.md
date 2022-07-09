---
layout: project
title:  "Endoparasite Tester"
date:   2017-01-15
permalink: /projects/:name
categories: [microfluidics, microfabrication, lab on a chip]
thumbnail: /assets/images/projects/labonachip-design.PNG
type: "Research, Design, Develop"
organization: "Lab on a Chip Module, University of Twente"
---


## Overview

Horses are often infected with various parasites and diseases. The procedure for testing horses for infection requires owners to send faecal samples to the veterinarian. In order to determine the severity of the infection, the faecal samples undergo various procedures in the lab where the parasites are filtered, counted, and identified under a microscope. For owners, the costs for diagnosis often requires more effort and resources than just giving their horses antibiotics. This results in owners using antibiotics as a form of prevention, even when the horse may not be infected. This sometimes results in side-effects for the horses and may cause problems with antibiotic resistance.

With lab-on-a-chip technology, a system could be designed to perform the lab operations on a small scale. These chips would require little resources and can be bulk-produced to reduce the total costs. The device could be used by the owners' homes and could be cheaper than the cost of antibiotics. This device would allow horses to be easily tested for parasite infections and remove the owners' irresponsible use of antibiotics.

As part of our project for the Lab-on-a-Chip module, we researched, designed, fabricated, and tested a microfluidic chip as an endoparasite home-test device for horses.

The chips need to be able to filter a solution of horse faeces to find parasite eggs. Using theories in microfluidics, we created multiple chip designs that we could possibly test.

We evaluated our chip designs on its performance in separating microbeads of various sizes (comparable to that of various parasite eggs that may be found in horses). We also tested its performance in counting the concentration of the microbeads. 

For detailed information, check out the documents under _Further Reading_.

<p align="center">
<img src="/assets/images/projects/LOC-all_clewin_designs.PNG" alt="2D Model of chips" title="2D Models of Chip" width="1000px" />
<br/>
Models of our chip designs in 2D, created in Clewin; units in micrometers.
</p>
<br/>

<p align="center">
<img src="/assets/images/projects/LOC-3D-designs.png" alt="3D Model of chips" title="3D Models of Chip" width="1000px" />
<br/>
Models of our chip moulds in 3D, created in Solidworks. These models were 3D printed and the moulds were used to fabricate the chips.
</p>
<br/>

<p align="center">
<img src="/assets/images/projects/LOC-chip-separation.png" alt="Chip separating microbeads" title="Chip Design 2 Testing" width="250px" />
<br/>
Testing chip design 2 on performance in separating microbeads of different sizes. A solution filled with beads of sizes 6 and 20 micrometers (concentration ratio of 1:19) was injected into the chip. The beads are representative of the different types of parasite eggs that can be found in horse feces. 
</p>
<br/>

## Role
This project was completed in a group of 5 over the course of a quartile (November 2016 - January 2017).
Within this project, I was actively involved throughout. The process included: 
 - Problem definition
 - Research of microfluidics theory and methodology
 - Chip designs
 - Lab experiments to test chip designs  
 - Analysis of chip performance
 - Report write-up

In our research phase, we looked into multiple techniques that could possibly filter and detect endoparasite eggs. We divided the research of amongst the five of us. My research focus was on electrical detection (detecting parasite eggs with the use of electrodes), which we deemed as an unsuitable option for our solution. This was because there is a risk that the heat generated from the electrodes will accelerate the hatching of the parasite eggs, which will clog and ruin the chip.

During the design phase, we had to create 2D designs which laid the basis for the 3D designs that were used for fabrication. I was more involved in the 3D designs, which was done in SolidWorks.

After having fabricated the microdevice, we designed and ran experiments to test our chips' performance for separating, detecting, and counting microbeads (comparable to sizes of parasite eggs). My main tasks were focused towards optical detection — the performance of a photoresistor in counting the amount of beads flowing through the channel. Together with one other person, we had set up the electrical circuit together and built a setup for the photoresistor sensor, along with collecting and analyzing the data. I also aided in some of the experiments for testing the bead separation.

<p align="center">
<img src="/assets/images/projects/LOC-sketch.png" alt="Electrical Setup of photoresistor (schema)" title="Schema for photoresistor setup" width="400px" /> <img src="/assets/images/projects/LOC-photoresistor-setup.jpg" alt="Electrical Setup of photoresistor" title="Setup of photoresistor for optical detection" width="250px" />
<br/>
Schema and actual setup of photoresistor for detecting the concentration of beads flowing through a microchannel.
</p>
<br/>


## Further Reading

<a href='/assets/docs/Endoparasite_Home_Test_ppt.pdf' target="_blank">[Design Presentation]</a>

<a href='/assets/docs/Endoparasite_Home_Test.pdf' target="_blank">[Final Report]</a>

**Abstract**  
This paper provides a background for the design of a microfluidic chip for creating a endoparasite home-testing device for horses. In the paper an experimental set-up and method is introduced for testing the performance of pinched flow fractionation (PFF) for separation and photoresistors for optical detection. The PFF is used for separating beads (comparable to parasite eggs) and is tested at different flow rate ratios and multiple images are taken for analysis. The photoresistors are tested to see the viability in measuring the concentration of beads in a solution (severity of parasitic infection). The results from these tests are discussed within this paper. Further recommendations for future research and applications are also provided.
