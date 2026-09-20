// Portfolio content — edit this file to update the site.
window.PORTFOLIO = {
  profile: {
    name: 'George Kopf V',
    role: 'Robotics & Controls',
    status: 'Princeton University · Class of 2027 · Electrical & Computer Engineering · Minor in Robotics',
    location: 'Princeton, NJ',
    intro:
      "I'm a senior at Princeton University with a minor in Robotics, focusing on interdisciplinary research involving electrical, mechanical, and biological robotics and controls. My passion is for all things that climb, swim, fly, and even orbit!",
    email: 'georgekopf5@gmail.com',
    portrait: 'media/portrait.jpg',
    phoneDisplay: '(609) 608-2119',
    phoneHref: 'tel:+16096082119',
    links: {
      linkedin: 'https://linkedin.com/in/george-kopf-v-a0b895270',
      resume: 'files/resume.pdf',
    },
  },

  skillGroups: [
    {
      title: 'Controls & Autonomy',
      items: ['Optimal Control (iLQR, Partially Observable MDPs, Q Learning)', 'Trajectory Optimization', 'State Estimation, Sensor Feedback, and PID', 'Path Planning'],
    },
    {
      title: 'Robotics',
      items: ['ROS', 'LiDAR & Camera Perception', 'Mechatronics & Actuation', 'Aerospace Applications', 'Soft & Bioinspired Mechanisms'],
    },
    {
      title: 'Modeling & Tools',
      items: ['MATLAB', 'Python & Java', 'CAD (Solidworks, Fusion, NX)', 'Circuits (LTspice, Plecs, Altium, EasyEda, KiCad)', 'Adjoint-Based Gradient Descent Optimization'],
    },
    {
      title: 'Hardware',
      items: ['Embedded C / C++', 'PCB & Power Electronics', 'Sensors & Integration', 'Bench Debugging (Oscilloscope, AFG, DMM, PLC)', 'Machining (Lathe, Mill, CNC, Additive Manufacturing)'],
    },
  ],

  projects: [
    {
      id: 'flying-fish',
      index: '01',
      title: 'Bioinspired Flying Fish RMO',
      summary:
        'A Robotic Model Organism (RMO) inspired by Exocotidae flying fish, able to swim in 3 DOF, actuate pectoral fins in 2 DOF, and remotely transmit live telemetry data for experimental analysis.',
      image: 'images/flying-fish/FishOpen.jpg',
      tags: ['Bioinspired', 'Mechatronics', 'Controls', 'Custom PCB', 'CAD'],
      specs: [
        { label: 'Modes', value: 'Swim / Taxi / Glide' },
        { label: 'Components', value: 'Custom PCB, DC & Servo Motors, 6 DoF IMU, FPC Antenna' },
        { label: 'Microcontroller', value: 'ESP32 S3' },
      ],
      timeline: 'Feb 2026 - Present · Research project',
      role: 'Independent Work Project & Thesis',
      overview: [
        'The Exocoetidae family of flying fish is famous for its members’ fantastical ability to leap from the waves and glide vast distances. These fish engage in complex and powerful fluid interactions near the surface of the water, but these hydronamics very difficult to study using traditional natural biology methods.',
        'To investigate the physical principles behind taxiing behaviors in flying fish, we develop a robotic model organism (RMO) of a flying fish designed to replicate this hard-to-study behavior in a controlled setting. The RMO focuses heavily on body morphology to study flow dynamics, focusing on anatomical fidelity. Field data and morphological analysis of actual fish samples were used to develop an accurate representation of the flying fish. The purpose of this project is to integrate electrical design elements to improve the functionality of the RMO as a bio-relevant tool via untethering and remote-control, focusing on controllable caudal and pectoral fins for swimming and taxiing. Here, we were able to successfully integrate electrical control and demonstrate tether-less swimming at higher DoF, trading raw swimming power for precision control. The RMO has wireless connectivity and internal positional sensing, allowing accelerometer and gyroscope data to be exported from the fish onto a computer remotely teleoperating the RMO, where motor speed and sensor configurations can be controlled. The RMO can swim at up to 11 cm/s at a tail beat frequency of 2 Hz, as well as deploy pectoral fins to stabilize swimming gait and engage in turning.',
      ],
      highlights: [
        'Iterative CAD prototyping and space-limited circuit design optimize for weight and volume constraints.',
        'Servo-actuated folding pectoral fin mechanism that doubles as deployable gliding wings and actuatable swimming fins for rotational adjustment.',
        'Integrated IMU regulates control feedback loop to maintain stability.',
        'Biologically relevant morphology allows for RMO’s use as a hydronamical model of Exocotidae flying fish in swimming and taxiing.',
      ],
      milestones: [
        { phase: 'Phase 1', title: 'Biomechanics study - Feb 2026', detail: 'Studied flying-fish gait and morphology to determine design goals for RMO.' },
        { phase: 'Phase 2', title: 'Electrical integration - Mar:Apr 2026', detail: 'Designed and implemented microcontroller circuitry and custom PCB to operate the RMO remotely on battery power.' },
        { phase: 'Phase 3', title: 'Test-tank trials - May 2026', detail: 'Ran repeated swimming trials to characterize RMO swim speed and stability.' },
        { phase: 'Phase 4', title: 'Pectoral fin deployment - June:July 2026', detail: 'Designed and built deployable pectoral fins with TPU rays and silicon membranes. Servo-driven fishing line tendons actuate ray flexion.' },
        { phase: 'Phase 5', title: 'Test-tank trials - July 2026', detail: 'Ran characterization trials on swimming behavior using simple pectoral fin actuations.' },
        { phase: 'Phase 6', title: 'Taxiing Build - Sep:Dec 2026', detail: 'Current work, updating design to be capable of accelerating into biorelevant taxiing behavior.' },
      ],
      report: { title: 'Spring 2026 Design & Trial Report', file: 'files/Functional_Enhancement_of_a_Bio_Inspired_Flying_Fish_Robotic_Model_Organism.pdf', pages: '34 pages', size: 'PDF' },
      gallery: [
        { src: 'images/flying-fish/FishCADPic1.png', caption: 'Solidworks CAD model of pectoral fin deployment and finning mechanism.' },
        { src: 'images/flying-fish/FishClosed.jpg', caption: 'Folding wing mechanism in the stowed swimming configuration.' },
        { src: 'images/flying-fish/FullCircuit2.jpg', caption: 'Full circuit schematics for PCB and hard disconnect switch using magnetic-sensitive reed switch and MOSFET.' },
        { src: 'images/flying-fish/PCB_Good2.png', caption: 'PCB Gerber rendering, includes feedback moderated voltage regulator and motor driver circuitry.' },
        { src: 'images/flying-fish/FishTracker.jpg', caption: 'Tracked swimming gait path at 2Hz speed.' },
      ],

      videos: [  
          {
           youtubeId: 'CSTuG3WQ93k', // your YouTube video ID
           caption: 'My initial versions of the RMO had no pectoral fins but could swim effectively with the aid of a buoyant rod.',
          },
          {
           youtubeId: 'qeWnH5_I7Iw', // your YouTube video ID
           caption: 'Adjusting weight distribution and buoyancy helped the RMO swim freely on its own, although roll stability could use some improvements. ',
          },
          {
           youtubeId: 'eb-ZYu7g_Zw',
           caption: 'Rapid prototyping allowed me to quickly identify the designs best suited towards the actuation I wanted.',
          },
          {
           youtubeId: 'sYIIYmhH6aQ',
           caption: 'Dry actuation of pectoral fins demonstrates wireless controlability.',
          },
          {
           youtubeId: 'D-TbZ9wqJSA',
           caption: 'Actuation of pectoral fins to induce turning - note how the waterproofing material limits the pectoral fins\' ranges of motion. This is the first thing to fix in the next model!',
          },
      ],
    },


      {
      id: 'pocketqube-satellite',
      index: '02',
      title: 'TigerCub Satellite',
      summary:
        'A 5 cm-class PocketQube pico-satellite with a stacked custom-PCB avionics bus, solar power harvesting, and a novel Iridium RockBLOCK antenna.',
      image: 'images/sat/tigercub.jpg',
      tags: ['Aerospace', 'PCB', 'Power', 'RF'],
      specs: [
        { label: 'Format', value: '1P PocketQube' },
        { label: 'Downlink', value: 'Iridium Satellite Network' },
        { label: 'Microcontroller', value: 'Teensy 4.0 & ATSAMD21E18' },
      ],
      timeline: 'Fall 2026 - Spring 2027 · Student team',
      role: 'Deployable Burnwire Module, EPS firmware',
      overview: [
        'TigerCub is Princeton\'s PocketQube-class pico-satellite — a 5 cm cube that is an eigth the size of a CubeSat — built as a low-cost platform for an orbital technology demonstration. The whole spacecraft is a stack of PCBs sharing a custom PQ10 bus. I joined the project as part of Princeton\'s new class MAE 348 this semester, so work is ongoing. As one of the only Electrical Engineers on the team, my role in the upcoming semester is to fix existing firmware issues with the DynOSSAT-EPS board curently being used.',
        "In order to achieve radar-visibility, our satellite needs to increase its cross sectional area. I am also designing and testing the custom PCB for the burnwire module, which involves a triple-MOSFET switch for redundancy and a nichrome wire cutter.",
      ],
      highlights: [
        'Deployable retroreflector for crosssectional radar standards.',
        'Regulated multi-rail bus feeding the stacked avionics boards.',
        'EPS firmware that manages power modes across orbital eclipse and sunlight.',
        'Iridium RockBLOCK antenna module for a novel downlink approach in PocketQube sats.',
      ],
      milestones: [
        { phase: 'Current Work', title: 'Deployable Retroreflector', detail: 'Currently designing and testing the custom PCB for a burn wire release deployable mechanism for radar cross sectional area.' },
        { phase: 'Next Steps', title: 'EPS Firmware', detail: 'Updating DynOSSAT-EDU firmware for charge management, rail sequencing, and low-power safe modes (tight pico-sat power budgeting).' },
        { phase: 'Next Steps', title: 'Integration Test', detail: 'Integrating EPS with the avionics stack (Onboard computing, science payload, comm systems) and validating power modes under simulated load.' },
      ],
      report: { title: 'N/A', file: 'reports/pocketqube-satellite.pdf', pages: '0 pages', size: 'PDF' },
      gallery: [
        { src: 'images/sat/BurnWireSchematicV1.png', caption: 'Prototype burn wire PCB with triple-MOSFET inhibits.' },
        { src: 'images/sat/BurnWirePCBV1.png', caption: 'PCB Layout of burn wire board.' },
      ],
      video: { src: 'media/pocketqube-satellite/demo.mp4', caption: '' },
    },
    
    {
      id: 'search-rescue-robot',
      index: '03',
      title: 'Search and Rescue Robot',
      summary:
        'A Search and Rescue Robot (SaRR) designed to navigate through difficult environments and deliver a specific payload to a target. The SaRR is capable of navigating a 15 degree incline, breaching a 1 foot wall, and delivering a payload via closed loop sensor detection.',
      image: 'images/wall_breach.jpg',
      tags: ['Robotics', 'Machining', 'Sensors & Feedback', 'Teleop', 'CAD'],
      specs: [
        { label: 'Role', value: 'Electrical Lead' },
        { label: 'Components', value: 'DC CIM Motors, CAN Communication Procedures, Finite State programming, 12v Power Harness, Photoresistors & IR Distance Sensors, 3D Prints, Plastic CNC, Metal Machining' },
        { label: 'Microcontroller', value: 'Teensy 4.1' },
      ],
      timeline: 'Fall 2025 · Team project',
      role: 'Electrical Lead: Wiring, Firmware, Sensor Integration, Electrical Enclosures and Hardware',
      overview: [
        "As part of MAE 322: Mechanical Design with Professor Daniel Nosenchuck, I worked in a group of 11 people on an 8-week project to design, manufacture, and automate a Search-and-Rescue-Robot (SaRR) capable of surviving a 1-foot drop test, tracking via light, navigating a 3-foot wide ramp and chute, breaching a 1-foot high wall, and delivering a rescue payload to a randomized drop point. Our group was given broad creative freedom in the design and construction of the SaRR, allowing us to develop novel solutions to the engineering challenges posed by the course.",
        "We broke the task down into two separate robots, dividing the challenges posed by the course between the two. Inspired by pouched marsupials, MotherBot and BabyBot work as a team, allowing each subsystem to optimize for different tasks. MotherBot uses her bulk to handle the drop test and ramp, then navigates the chute, reaches over the wall, and places BabyBot safely on the other side, ready to identify the drop point and deliver the medkit. This dual design avoids compromises on durability or stability that more typically built wall-breach methods require. MotherBot protects BabyBot during the drop test using a tensioned line so the large moment is applied through the reinforced drivetrain rather than the more fragile medkit launcher mechanism.",
        "Choosing a more complex design posed a serious risk in terms of exposure to more failure points and a higher workload, but our team felt confident making the choice to move forward. With a solid project management structure and 11 hands on deck, we wanted to appropriately challenge ourselves and build a SaRR that was novel and reliable. As the only Electrical Engineer on the team, I took point on the Electrical Subteam, including the design and assembly of the full wiring harnesses for both robots and various systems issues during programming, testing, and debugging.",     
      ],
      highlights: [
        'Belt driven drivetrain with tensioners allow the 220 lb SaRR to absorb the impact of a 1 ft fall while protecting BabyBot inside.',
        'Photoresistors and distance sensors guide the robot to through a Finite State Machine based control system.',
        'Low-latency wireless teleoperation link with closed and open loop modes.',
        'Deployable BabyBot communicates with MotherBot and can be retrieved after successful task completion.',
      ],
      milestones: [
        { phase: 'Week 1–4', title: 'Machine Shop Training', detail: 'Time spent building a practice robot to teach us fundamentals of machine shop fabrication, including 3D Printing, CNC Machining, Laser Cutting, Milling, and using Lathes.' },
        { phase: 'Week 5–6', title: 'Brainstorming and Design', detail: 'Brainstorming focused on feasibility, reliability, and uniqueness. Initial designs were CADed in Creo and iterated aggressively through prototyping and failure. Our project motto was \"Fail fast and fail forward!\" We also took this time to set a semester-long timeline according to an Agile model.' },
        { phase: 'Week 7–9', title: 'Manufacturing and Redesign', detail: 'Robots were constructed from laser-cut acrylic, 3D-printed PET, welded steel, and machined aluminum using Princeton’s MAE machine shop. Manufacturing took place on a rolling basis as CAD designs were finalized, oftentimes circling back to prototyping and redesign as project needs shifted. As an Electrical Engineer, it is very unusual to get access to the machine shop, and I really enjoyed the hands on process.' },
        { phase: 'Week 8–10', title: 'Electrical and Software', detail: "Both robots used their own Teensy 4.1. Schematics, wiring harnesses, and software were built in parallel with manufacturing to enable rapid integration. Each robot had its own unique sensor arrays and power requirements." },
        { phase: 'Week 11–12', title: 'Testing and Debugging', detail: "In the last two weeks before the deadline, we hit the ground running with rapid testing and debugging. The goal was to identify and fix any issues through sheer volume of repetition, and the robots succesfully fully completed the course during testing by the final day. Some key fixes included rebuilding the pulley shaft attached to the BabyBot extension mechanism, adding spacers to the wheels to stop the belt drive from grinding into them, tuning BabyBot's payload launcher's spring tension, and integrating recalibration code into the sensor systems to allow for automated calibration at different light levels." },
      ],
      report: { title: 'Final Design Report', file: 'files/sarr_report.pdf', pages: '60 pages', size: 'PDF' },
      gallery: [
        { src: 'images/cad_design_1.png', caption: "BabyBot's final CAD design in CREO." },
        { src: 'images/wiring_diagram_1.png', caption: "MotherBot's wiring diagram drawn up in Fritzing." },
        { src: 'images/baby_electricals.jpg', caption: "BabyBot's naked wiring harness in place." },
        { src: 'images/medkitlaunch_problem.gif', caption: 'Not everything worked right on the first try! Iterative prototyping was the lifeblood of this project.' },
        { src: 'images/baby_medkit_test.gif', caption: 'Testing BabyBot\'s updated delivery mechanism.' },
        { src: 'images/motherbot_full.jpg', caption: 'MotherBot pictured hoisting BabyBot.' },
        { src: 'images/wall_test.png', caption: 'Testing and debugging the delivery mechanism were critical to minimizing failure modes.' },
        { src: 'images/sarr_hero.jpg', caption: 'Loaded SaRR on Demo Day!' },
      ],
       videos: [  
          {
           youtubeId: '_BIuc2J6lpQ', // your YouTube video ID
           caption: 'With time up and robots ready, it was time for Demo Day! Here the SaRR successfully navigates the chute.',
          },
          {
           youtubeId: 'KER3P4G4rRA', // your YouTube video ID
           caption: 'MotherBot raises BabyBot, lifts it over the wall, and safely lowers it down. Wall breach successful!',
          },
          {
           youtubeId: 'WtNiErJ64EE',
           caption: 'By identifying the light source and tracking towards it, BabyBot successfully delivers the payload to the goal target!',
          },
      ],
    },

    {
      id: 'ostraciiform-swim',
      index: '04',
      title: 'Ostraciiform Swim Gait Simulation & Optimization',
      summary:
        "A simulation study of boxfish-style ostraciiform swimming, coupling a hydrodynamic model with an Adjoint-Based Gradient Descent optimizer to find tail-beat gaits that maximize thrust efficiency.",
      image: 'images/fish/real_fish.png',
      tags: ['Simulation', 'Optimization', 'MATLAB', 'Fluid Dynamics'],
      specs: [
        { label: 'Optimization Modes', value: 'Efficiency / Thrust' },
        { label: 'Method', value: 'Fluid Model + Optimizer' },
        { label: 'System', value: 'Princeton Adroit Supercomputer Cluster' },
      ],
      timeline: 'Summer 2025 · Research Study',
      role: 'Modeling, Characterization, Analysis',
      overview: [
        "As part of the Kent State University 2025 REU Program, I worked closely with Professor Xuanhong An, using an adjoint-based gradient descent optimization algorithm to optimize the swim gait of stiff-fin Ostraciiform fish. My work focused on three areas: characterization of the algorithm, establishment of a biological baseline swim gait, and optimization tests for comparison against the baseline.",
        "The optimization algorithm is built around a custom-written CFD program. It simulates the caudal tail fin as a stiff board fixed in place as incompressible fluid is moved across it. The simulation design is twofold: choosing a simplified model allows for the supercomputer cluster to complete full depth optimization runs in a matter of hours instead of days, and the stiff fin can be easily adapted to a robotic model for physical confirmation of simulated results.",
        "The math behind the optimization algorithm is better referenced in the attached report, but to create a brief overview, a set of fourier modes have parameters which represent the amplitude and period of the pitch and heave of the fin. These discretized vorticity equations can be plugged into a 2D incompressible Navier Stokes solver and solved using gradient descent. However, our parameter had too many dimensions for traditional methods to be feasible, even with a supercomputer cluster. To combat this, an adjoint system was derived to solve for the gradient cost function. By looping through the algorithm, we continually output the gradient with respect to our pitch and heave parameters, which are reinserted into the algorithm as inputs. Eventually, we descend on a local minima (hopefully the global minima) and end the loop.",
      ],
      highlights: [
        'Reduced-order hydrodynamic model of an oscillating-tail swimmer.',
        'Optimization loop adjusting tail-beat amplitude and frequency by adjusting pitch and heave values.',
        'Swimming-efficiency objective balancing thrust against actuation energy to optimize for effieciency.',
        'Flow-field visualization to interpret the optimized gaits.',
      ],
      milestones: [
        { phase: 'Week 1-2', title: 'Understanding the Code', detail: 'Spent time studying the simluation and optimization code, the math behind the adjoint-based gradient descent algorithm, and the math involved in Navier Stokes/fluid particle dynamics.' },
        { phase: 'Week 3-5', title: 'Debugging', detail: 'Adjusted algorithm to improve run times and reduce convergence failures. Lots of minor bugs would cause the program to crash mid-run.' },
        { phase: 'Week 6-7', title: 'Characterization', detail: 'Ran large array of optimization trails under various initial paremeter conditions to characterize the effective resolution of the optimizer.' },
        { phase: 'Week 8-9', title: 'Analysis & Presentation', detail: 'Processed large volumes of data using MATLAB to create comprehensive graphs and visualizations of the vorticity fields. Presented work as one of two speakers at an interprogram REU conference.' },
      ],
      report: { title: 'Study & Results Report', file: 'files/fish_paper.pdf', pages: '13 pages', size: 'PDF' },
      gallery: [
        { src: 'images/fish/diagram.png', caption: 'Diagram of 2D simulation of the caudal fin.' },
        { src: 'images/fish/cycle.png', caption: 'Diagram of the core logic loop behind the optimization algorithm. See report for in-depth explanation of the math involed.' },
        { src: 'images/fish/fish_graphic_1.png', caption: "Example flow-field visualization and optimized drag graph. The algorithm was first run with a single fourier mode. The \"drag value\" calculated here is more accurately a measure of inefficiency. As it decreases, our fish uses less energy per stroke. Units are arbitrary. " },
        { src: 'images/fish/fish_graphic_5.png', caption: 'Inputting the results of our single fourier mode run into five fourier modes expands the depth of our optimization. We see a marked decrease in drag, although it is less impactful than the single fourier mode run was.' },
        { src: 'images/fish/fish_graphic_10.png', caption: 'At ten fourier modes, we see once again the change in drag is another order of magnitude smaller. The algorithm is close to done optimizing here, and only runs six cycles before reaching a minima and exiting.' },
        { src: 'images/fish/fish_graphic_30.png', caption: "Thirty fourier modes basically does nothing to our efficiency. The program waffles about for a few cycles before exiting, indicating the algorithm's resolution is too rough to continue to refine the optimization." },
        { src: 'images/fish/initial_conditions.png', caption: 'Initial Drag and Lift values set into the algorithm.' },
        { src: 'images/fish/conditions_FINAL.png', caption: 'Final Drag and Lift values after complete optimization. A large negative \"Drag\" represents a decrease relative to initial conditions.' },
        { src: 'images/fish/biology_compare.png', caption: "Comparison of Drag and Lift values to Coe & Gutscmidt's (2023) biological model - see report for further detail." },
      ],
      
      video: { src: 'images/fish/10FT_Vorticity_Model.mp4', caption: 'Optimized Vorticity Field Animation: Note the triple vorticies; it appears the algorithm has developed this unique swimming gait to take advantage of this trailing edge triple-vortice behavior, allowing for small increases in efficiency compared to the simpler, single-vortex gait it started out with.' },
    },
    
    {
      id: 'carlab-navigation',
      index: '05',
      title: 'CarLab: Robotics and Autonomous Systems Lab',
      summary:
        'As part of Junior design class ECE 302, this project involves autonomous controls for a sensor-equipped R/C car capable of PID speed control and autonomous line navigation.',
      image: 'images/carlab/carlab_wide.jpg',
      tags: ['Autonomy', 'PID', 'Analog Circuitry', 'PSoC'],
      specs: [
        { label: 'Role', value: 'Two Person Project Team' },
        { label: 'Components', value: 'Analog Circuit Design, Finite State programming, 9.6v & 7.4v Power Harnesses, Camera and Hall Effect sensors, PsoC Creator C & Top Level Design, XBee UART Radio Modules' },
        { label: 'Microcontroller', value: 'PSoC 5LP' },
      ],
      timeline: 'Fall 2025 · Lab project',
      role: 'Two Person Project Team,  ',
      overview: [
        "As Princeton's Junior year design class, ECE 302 is the main lab course Electrical Engineers take. Involved in the course is lots of hands-on hardware engineering and feedback controls. PSoC 5LP microcontrollers test analog logic design, and our car succesfully completed speed control and line following benchmarks. ",
        "See the attached design reports for in-depth explanation of circuit logic and signal data. ",
      ],
      highlights: [
        'PSoC Creator programming and top design heavily based in analog logic.',
        'PID control systems regulate driving speed and turning angle.',
        'Foundational hardware skills, including use of AFGs, DMMs, Oscilloscopes, and Logic Analyzers for data collection.',
      ],
      milestones: [
        { phase: 'Week 1', title: 'Voltage Regulator Board', detail: 'Built out the foundation of the car and added voltage regulator board for handling the PSoC, motors, and sensors.' },
        { phase: 'Week 2', title: 'Motor Driver Board', detail: 'Motor driver board using PSoC-driven MOSFET switching to control motor PWM.' },
        { phase: 'Week 3-4', title: 'Speed Control Software & Tuning', detail: 'Main PID control software written and manually tuned using an adjusted Ziegler–Nichols method.' },
        { phase: 'Week 5', title: 'Camera Board', detail: 'We used a PTC08 v3.3.1 camera breakout with an LM1881 video sync separator chip to break CSYNC and VSYNC signals into separate lines for PSoC.' },
        { phase: 'Week 6-7', title: 'Line Following Software & Tuning', detail: 'Integrated servo-driven steering control into a secondary PD loop. Many hours in this phase were spent debugging mysterious glitching in the camera feed that kept tripping voltage thresholds for line detection until the problem was utlimately solved with a third camera replacement.' },
      ],
      reports: [
        { title: 'PID Speed Control Report', file: 'files/Speed Control Report.pdf', pages: '15 pages', size: 'PDF' },
        { title: 'Line Following Report', file: 'files/Navigation Report.pdf', pages: '11 pages', size: 'PDF' }
      ],
      gallery: [
        { src: 'images/carlab/MotorDriverBoard.jpg', caption: 'Close up of the finalized motor driver board. The 7.2V motors run on their own battery supplied to the IRLZ44N MOSFET, with switching driven by PSoC.' },
        { src: 'images/carlab/PowerDistributionBoard.jpg', caption: 'Close up of the finalized voltage regulator board. Three voltage regulators break our 9.6V supply into a 5V rail for the camera, a 5V rail for the hall effect wheel encoder, and a 6V rail for the servo motors controlling steering.' },
        { src: 'images/carlab/SpeedControlSchematic.png', caption: 'Altium schematic of the car\'s circuit layout for speed control.' },
        { src: 'images/carlab/CameraBoardSchematic.png', caption: 'Altium schematic of camera board layout.' },
        { src: 'images/carlab/topdesign.png', caption: 'Our finalized PSoC Creator Top Design for the analog logic running speed control and line following. The core logic of line following centers around identifying regular intervals in the camera signal stream which represent new lines in an image and comparing their filtered voltage values to a threshold value between white floors and black line. See the design reports for a more in depth breakdown of the analog logic.' },
        { src: 'images/carlab/rawvid_and_csync.png', caption: 'Sample oscilloscope data, this one showing the raw video feed compared to the separated CSYNC signal by the LM1881 sync separator chip. See the design reports for more data.' },
      ],
      videos: [  
          {
             youtubeId: 'iHkwRFToN2Y', // your YouTube video ID
             caption: 'By building a wheel encoder using a hall effect sensor, we could control speed with feedback PID control.',
          },
          {
             youtubeId: 'nf9ySxd8Plg', // your YouTube video ID
             caption: 'Our line-following car succesfully completes the track with camera-based sensing, requiring speed and steering control.',
          },
      ],
    },

    
    {
      id: 'trucklab-ilqr',
      index: '06',
      title: 'TruckLab Self-Driving iLQR Algorithm',
      summary:
        'As part of ECE 346: Intelligent Robotics, we built and designed an iterative LQR trajectory optimizer for a scale R/C truck, with path planning and obstacle avoidance. ROS2 april tag localization runs a real-time localization and path planner on onboard compute.',
      image: 'images/trucklab/truck.jpg',
      tags: ['Optimal Control', 'iLQR', 'ROS2', 'Python', 'Trajectory'],
      specs: [
        { label: 'Processor', value: 'Jetson Orin Nano' },
        { label: 'Path Planner', value: 'iLQR' },
        { label: 'Software', value: 'ROS2, Python' },
        { label: 'Modes', value: 'Assistive Safety Filter / Full Self-Driving' },
      ],
      timeline: 'Spring 2026 · Optimal Controls project',
      role: 'Four Person Project Team',
      overview: [
        "Our system used two ILQR functions running concurrently. The first ILQR ran as a safety monitor. From an input, the monitor considered the human input and applied the 5D bicycle kinematics to predict the vehicle’s trajectory under human control. At the termination of a 12 step (1.2 s) dynamic trajectory simulated from the input control, the monitor would run receding horizon ILQR from the end of the trajectory. If the monitor predicted that the simulated dynamic trajectory or ILQR entered a failure state, the monitor would consider the human’s input to be unsafe, and revert to the fallback policy. See the attached report for further detail on the design of the fallback policy, goalpost positioning, safety filter design, and ROS node architecture.",
      ],
      highlights: [
        'iLQR optimizer over the simple truck kinematic model.',
        'Can drive autonomously or act as a safety-filter for manual driving.',
        'Prevents obstacle collisions and road line violations.',
        'ROS2 architecture localizes the truck, runs simulations, and handles the burden of the running logic.',
      ],
      milestones: [
        { phase: 'Week 1', title: 'ROS2 Setup', detail: 'Established ROS2 on the Jetson with localization via april tags and node architecture.' },
        { phase: 'Week 2', title: 'iLQR Solver', detail: 'Implemented the iterative LQR optimizer with physics-based models of the car and track.' },
        { phase: 'Week 3-4', title: 'Safety Filter', detail: 'Built two-layer iLQR safety filter with safety monitor on layer one and fallback policy on layer two.' },
        { phase: 'Week 5', title: 'Tuning', detail: 'Verified maneuvers in simulation and deployed them on the TruckLab scale truck. Tuned the algorithm\'s physical models and safety gains.' },
      ],
      report: { title: 'Project Report', file: 'files/ECE346 Report.pdf', pages: '9 pages', size: 'PDF' },
      gallery: [
        { src: 'images/trucklab/ilqr diagram.png', caption: 'iLQR logic loop diagram. Note the sequencing of the forward pass line search and backwards pass policy calculation.' },
        { src: 'images/trucklab/ros nodes architecture.png', caption: 'ROS2 nodes architecture. The safety filter node acts as the core of the logic block, using branch nodes to localize the track, predict system dynamics, and estimate actuation error.' },
      ],
      videos: [  
          {
             youtubeId: 'RCPHTLpMS2Y', // your YouTube video ID
             caption: 'The second-layer iLQR algorithm works as an effective self-driving algorithm without obstacles on the track.',
          },
          {
             youtubeId: '7VjDNxjxyCo', // your YouTube video ID
             caption: 'ROS2 graphic demonstrating the safety filter algorithm taking over during manual driving to slam the brakes before a collision in the forward reachable horizon becomes unavoidable.',
          },
          {
             youtubeId: 'm-QncJ7ivXQ', // your YouTube video ID
             caption: 'Another example of the safety filter. Here it succesfully takes control, steers around an obstacle, then hands control to the driver. When the unavoidable three-block wall enters the forward reachable horizon, the safety filter slams the brakes.',
          },
          {
             youtubeId: '7KZxNe5Iyiw', // your YouTube video ID
             caption: 'Our full self-driving ILQR algorithm attempts to drive around the obstacle. It\'s a little tentative to leave the roadlines, but eventually makes the decision to drive over the lines and around obstacle.',
          },
      ],  
    },

    {
      id: 'programmable-lightsaber',
      index: '07',
      title: 'Programmable Lightsaber',
      summary:
        'A programmable LED lightsaber with an addressable RGB blade, motion-reactive sound and lighting effects driven by an IMU, and a machined aluminum hilt.',
      image: 'images/lightsaber/lightsaber.png',
      tags: ['Embedded C', 'PID Controls', 'IMU', 'Audio'],
      specs: [
        { label: 'Role', value: 'Two Person Project Team' },
        { label: 'Components', value: 'Breadboard Circuit Design, Feedback Controls, Reactive to swinging and clashing, UART-controlled audio DFPlayer' },
        { label: 'Microcontroller', value: 'Arduino Nano' },
      ],
      timeline: 'Fall 2025 · Lab project',
      role: 'Two Person Project Team,  ',
      overview: [
        "As Princeton's Junior year design class, ECE 302 is the main lab course Electrical Engineers take. Involved in the course is a final project of our own choosing. My partner and I decided to build a programmable lightsaber.",
        'The lightsaber boasts an addressable RGB LED strip which lights the blade with animated ignite, retract, and clash effects. An onboard, pre-offset IMU makes the light and sound react to swings and clashes in real-time.',
        "The passive flickering of the blade is driven by a sinoidal feedback algorithm based on the average swing speed.",
        'I designed the electronics, wrote the firmware for the LED animations and motion detection, and machined the aluminum hilt to house the battery, board, and speaker.',
        "See the attached design reports for in-depth explanation of circuit logic, breadboard communication protocols, and signal data. ",
      ],
      highlights: [
        'Addressable RGB blade with animated ignite, retract, flicker, and clash effects.',
        'IMU-driven motion detection triggering swing and clash sound/light effects.',
        'Onboard audio playback synchronized to blade state.',
        'Machined aluminum hilt fully housing the battery, MCU, speaker, and other circuitry.',
      ],
      milestones: [
        { phase: 'Week 1', title: 'Electronics', detail: 'Selected the MCU, LED strip, IMU, and audio parts and prototyped the critical circuits.' },
        { phase: 'Week 1-2', title: 'Fabrication and Construction', detail: 'Machined the aluminum hilt and integrated the electronics into the assembly. Assembled the final circuit.' },
        { phase: 'Week 2', title: 'Blade firmware', detail: 'Wrote the addressable-LED animations for ignite, retract, and idle flicker.' },
        { phase: 'Week 4', title: 'Motion effects', detail: 'Added and tuned IMU-based swing and clash detection driving synchronized light and sound.' },
      ],
      report: { title: 'Project Report', file: 'files/lightsaber.pdf', pages: '17 pages', size: 'PDF' },
      gallery: [
        { src: 'images/lightsaber/lightsaber schematic.png', caption: 'Fritzing schematic of the final design. The large cap on the audo player stopped voltage sag from the LEDs from affecting the audio quality.' },
        { src: 'images/lightsaber/IMU communication oscope.png', caption: 'Oscope signal data from the IMU\'s I2C communication while playing audio. See the report for more detailed signal data and analysis.' },
        { src: 'images/lightsaber/lightsaber swinging data.png', caption: 'IMU data used to characterize swinging motions.' },
        { src: 'images/lightsaber/lightsaber striking data.png', caption: 'IMU data used to characterize striking motions. This allowed us to tune the audio effects based on swing speed thresholds.' },
      ],
    videos: [  
          {
             youtubeId: 'J2BTiwhTlY4', // your YouTube video ID
             caption: 'The internals of the lightsaber\'s circuitry.',
          },
          {
             youtubeId: 'ewV28aPC_g0', // your YouTube video ID
             caption: 'Ryan showing off the completed saber!',
          },
      ],   
    },

    
    {
      id: 'origami-swimmer',
      index: '08',
      title: 'Bioinspired Origami Swimmer',
      summary:
        'A soft aquatic robot using an origami-folded fin structure that expands and contracts to generate thrust, exploring compliant folding mechanisms for underwater propulsion.',
      image: 'projects/origami-swimmer.png',
      tags: ['Soft Robotics', 'Origami', 'Actuators', 'Prototyping'],
      specs: [
        { label: 'Structure', value: 'Origami fold' },
        { label: 'Actuation', value: 'Compliant' },
        { label: 'Domain', value: 'Underwater' },
      ],
      timeline: 'Spring 2023 · Research project',
      role: 'Mechanism design, testing',
      overview: [
        'A bioinspired soft swimmer that uses an origami-folded fin to produce thrust. Folding the patterned structure changes its shape and displaces water, so a simple actuation input becomes a swimming stroke without rigid linkages.',
        'The project explored how fold geometry maps to thrust — designing crease patterns, building compliant prototypes, and measuring how each fold pattern swims.',
      ],
      highlights: [
        'Origami crease patterns that convert simple actuation into a swimming stroke.',
        'Compliant, jointless fin structure that folds to displace water.',
        'Several fold geometries prototyped and compared for thrust.',
        'Thrust measured in a test tank to link fold pattern to performance.',
      ],
      milestones: [
        { phase: 'Phase 1', title: 'Fold design', detail: 'Designed candidate origami crease patterns and modeled their folding motion.' },
        { phase: 'Phase 2', title: 'Prototyping', detail: 'Built compliant folded fin prototypes from patterned sheet materials.' },
        { phase: 'Phase 3', title: 'Actuation', detail: 'Integrated actuation to drive the fold cycle and produce a swimming stroke.' },
        { phase: 'Phase 4', title: 'Thrust testing', detail: 'Measured thrust in a test tank and compared fold geometries for performance.' },
      ],
      report: { title: 'Design & Test Report', file: 'reports/origami-swimmer.pdf', pages: '16 pages', size: 'PDF' },
      gallery: [
        { src: 'media/origami-swimmer/1.jpg', caption: 'Origami crease pattern for the folding fin.' },
        { src: 'media/origami-swimmer/2.jpg', caption: 'Compliant folded fin prototype.' },
        { src: 'media/origami-swimmer/3.jpg', caption: 'Actuation driving the fold cycle.' },
        { src: 'media/origami-swimmer/4.jpg', caption: 'Thrust measurement setup in the test tank.' },
      ],
      video: { src: 'media/origami-swimmer/demo.mp4', caption: 'Origami fin folding through a full swimming stroke underwater.' },
    },
    {
      id: 'boomcoli-igem',
      index: '08',
      title: 'Bioengineering BOOMcoli for iGEM',
      summary:
        'An iGEM synthetic-biology project engineering E. coli ("BOOMcoli") with a designed genetic circuit, including the wet-lab work and the supporting hardware and data tooling.',
      image: 'projects/boomcoli-igem.png',
      tags: ['Synthetic Biology', 'iGEM', 'Lab', 'Data'],
      specs: [
        { label: 'Chassis', value: 'E. coli' },
        { label: 'Team', value: 'iGEM' },
        { label: 'Scope', value: 'Circuit + tooling' },
      ],
      timeline: '2023 · iGEM competition',
      role: 'Hardware & data, wet-lab support',
      overview: [
        'A synthetic-biology project for the iGEM competition, engineering E. coli — nicknamed "BOOMcoli" — with a custom genetic circuit designed by the team. As an EE on a mostly bio team, I bridged the wet lab and the instrumentation.',
        'I built supporting hardware and data tooling: instrumentation to run and monitor experiments, and the pipeline to log and analyze the resulting measurement data alongside the wet-lab work.',
      ],
      highlights: [
        'Custom instrumentation supporting the wet-lab experimental protocol.',
        'Data-logging and analysis pipeline for experiment measurements.',
        'Cross-disciplinary work bridging electrical hardware and molecular biology.',
        'Contributed to the team iGEM submission and presentation.',
      ],
      milestones: [
        { phase: 'Phase 1', title: 'Project scoping', detail: 'Worked with the bio team to define the genetic circuit goal and the hardware it needed.' },
        { phase: 'Phase 2', title: 'Instrumentation', detail: 'Built the hardware to run and monitor the experiments in the lab.' },
        { phase: 'Phase 3', title: 'Data pipeline', detail: 'Set up logging and analysis for the experimental measurement data.' },
        { phase: 'Phase 4', title: 'iGEM submission', detail: 'Compiled results and contributed to the team submission and presentation.' },
      ],
      report: { title: 'iGEM Project Report', file: 'reports/boomcoli-igem.pdf', pages: '28 pages', size: 'PDF' },
      gallery: [
        { src: 'media/boomcoli-igem/1.jpg', caption: 'Custom instrumentation for running experiments.' },
        { src: 'media/boomcoli-igem/2.jpg', caption: 'Wet-lab session monitoring the engineered E. coli.' },
        { src: 'media/boomcoli-igem/3.jpg', caption: 'Data-logging pipeline dashboard for measurements.' },
        { src: 'media/boomcoli-igem/4.jpg', caption: 'Team at the iGEM presentation.' },
      ],
      video: { src: 'media/boomcoli-igem/demo.mp4', caption: 'Walkthrough of the instrumentation and data pipeline supporting the wet lab.' },
    },

    
  ],
}
