import { useState } from "react";

const Company = () => {
  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "./Company_logos/Google.webp",
      description:
        "A global leader in internet-related services, including search engines, online advertising, and cloud computing.",
      founder: "Larry Page & Sergey Brin",
      ceo: "Sundar Pichai",
      startDate: "September 4, 1998",
      website: "https://about.google/",
      rating: 4.3,
      pros: [
        "1. My teammates were really great people and did a lot to help me get up and running. (in 3620 ratings)",
        "2. Great benefits and I do believe they build some of the best products out there. (in 2903 ratings)",
      ],
      cons: [
        "1. Long hours and lots to learn if you are not a learner it might not be the best place (in 689 ratings)",
        " 2. Bad management and rude to customers (in 599 ratings)",
      ],
    },
    {
      id: 2,
      name: "TCS",
      logo: "./Company_logos/TCS.png",
      description:
        "India's largest IT services firm offering consulting, IT solutions, and business outsourcing services globally.",
      founder: "Tata Sons",
      ceo: "K. Krithivasan",
      startDate: "April 1, 1968",
      website: "https://www.tcs.com/",
      rating: 3.7,
      pros: [
        "1. Work Life balance is good and the stability for the job is high (in 1359 ratings)",
        "2. Good job security and policies (in 862 ratings)",
      ],
      cons: [
        "1. Less salary and hike is also very less (in 995 ratings) ",
        "2. The salary hike is low but overall good (in 280 ratings)",
      ],
    },
    {
      id: 3,
      name: "Infosys",
      logo: "./Company_logos/Infosys.png",
      description:
        "A global leader in consulting, technology, outsourcing, and next-generation services.",
      founder: "Narayana Murthy & team",
      ceo: "Salil Parekh",
      startDate: "July 2, 1981",
      website: "https://www.infosys.com/",
      rating: 3.6,
      pros: [
        "1. Many clubs of any kind of interest..Great campus...Good salary for consultants.. good work life balance(in 8408 ratings) ",
        "2. Work culture and their process is was good where employees will not have any worries. (in 5849 ratings)",
      ],
      cons: [
        "1.Salary is less and you may be put to support job even after you being developer (in 11251 ratings)",
        "2. There is no salary hike in Infosys since 2021 even though the company is making a hige profit. (in 3318 ratings)",
      ],
    },
    {
      id: 4,
      name: "Wipro",
      logo: "./Company_logos/Wipro.svg",
      description:
        "A multinational company specializing in IT, consulting, and business process services.",
      founder: "M.H. Hasham Premji",
      ceo: "Thierry Delaporte",
      startDate: "December 29, 1945",
      website: "https://www.wipro.com/",
      rating: 3.6,
      pros: [
        "1. Here it's good work life balance and also it depends on project u work for (in 4334 ratings)",
        "2. Work culture is good and good to start career as a fresher and worklife balanced. (in 2622 ratings)",
      ],
      cons: [
        "1. Less salary is provided for the work done and provides no bonus for extra working hours (in 4775 ratings)",
        "2.Also the management is poor and doesn't give proper response until you put pressure. (in 2247 ratings) ",
      ],
    },
    {
      id: 5,
      name: "IBM",
      logo: "./Company_logos/IBM.png",
      description:
        "A leading provider of hardware, software, cloud-based services, and cognitive computing.",
      founder: "Charles Ranlett Flint",
      ceo: "Arvind Krishna",
      startDate: "June 16, 1911",
      website: "https://www.ibm.com/",
      rating: 4.0,
      pros: [
        "1. Good work life balance and good to be able to work from home although that’s often at the discretion of your manager(in 9541 ratings)",
        "2. The people are great and the Extreme Blue program was excellent for learning principles of product design. (in 4566 ratings)",
      ],
      cons: [
        "1. Low salary and the increment was less than 2% even top performer unless you got band promotion (in 4967 ratings)",
        "2. Poor Management (in 2809 ratings)",
      ],
    },
    {
      id: 6,
      name: "Cognizant Technology Solutions",
      logo: "./Company_logos/cognizant.jpeg",
      description:
        "A global provider of IT services, consulting, and business process outsourcing.",
      founder: "Kumar Mahadeva",
      ceo: "Ravi Kumar S.",
      startDate: "January 26, 1994",
      website: "https://www.cognizant.com/",
      rating: 3.7,
      pros: [
        "1. work life balance is good and it also depends on the team and project you are working in (in 8084 ratings)",
        "2. Still there a good work culture but it is not as good as it was in 2019 (in 5725 ratings)",
      ],
      cons: [
        "1. Salary is less for people who stay there for long time with more years of experience (in 4592 ratings)",
        "2. The management is poor as it's a big company and has to manage a lot of things (in 3306 ratings)",
      ],
    },
    {
      id: 7,
      name: "Accenture",
      logo: "./Company_logos/Accenture.png",
      description:
        "A global professional services company providing consulting and strategy in digital, technology, and operations.",
      founder: "Arthur Andersen",
      ceo: "Julie Sweet",
      startDate: "1989",
      website: "https://www.accenture.com/",
      rating: 3.8,
      pros: [
        "1. It has been 7 months working in Accenture.....never felt work tirelessly.....trainings are good and good work life balance (in 9381 ratings)",
        "2. Working here is good because the work culture is good and we get to reskill and upskill ourselves. (in 7036 ratings)",
      ],
      cons: [
        "1. Low salary for resources who are loyal and staying with the company for long years. (in 6798 ratings)",
        "2. I was in Accenture Kolkata and here management are very very poor like political leader (leader with zero knowledge). (in 3599 ratings)",
      ],
    },
    {
      id: 8,
      name: "Capgemini",
      logo: "./Company_logos/Capgemini.svg",
      description:
        "A leader in consulting, digital transformation, technology, and engineering services.",
      founder: "Serge Kampf",
      ceo: "Aiman Ezzat",
      startDate: "October 1, 1967",
      website: "https://www.capgemini.com/",
      rating: 3.8,
      pros: [
        "1. If someone want a company with good infrastructure and company with full enjoyment than Capgemini which provide good work life balance (in 7949 ratings)",
        "2. Work culture is good and also it depends on the project that you are working. (in 3615 ratings)",
      ],
      cons: [
        "1. for existing employees salary is less when compared to lateral hires and difference is too high. (in 3750 ratings)",
        "2.Should be awarded with A++ grade in terms of poor management and project allocation. (in 2173 ratings)",
      ],
    },
    {
      id: 9,
      name: "HCLTech",
      logo: "./Company_logos/HCLTech.png",
      description:
        "An IT services company providing software development, infrastructure management, and business outsourcing.",
      founder: "Shiv Nadar",
      ceo: "C Vijayakumar",
      startDate: "August 11, 1976",
      website: "https://www.hcltech.com/",
      rating: 3.5,
      pros: [
        "1. work life balance is good and you prefer this company for long term if you are not expecting hike and promotion (in 4881 ratings)",
        "2. Job security is good and secure (in 2002 ratings)",
      ],
      cons: [
        "1. The salary for the employees is very less although is very normal but obviously you expect more always (in 3364 ratings)",
        "2. Very poor management by managers will ignore if you are on bench and dont care about your security (in 1690 ratings)",
      ],
    },
    {
      id: 10,
      name: "Microsoft",
      logo: "./Company_logos/Microsoft.webp",
      description:
        "A multinational technology company developing software, hardware, and cloud-based services.",
      founder: "Bill Gates & Paul Allen",
      ceo: "Satya Nadella",
      startDate: "April 4, 1975",
      website: "https://www.microsoft.com/",
      rating: 4.2,
      pros: [
        "1. They provide great benefits and you get a lot of exposure if interested in full time corporate role (in 5545 ratings)",
        "2. Work/Life balance is good and entirely up to you make it what you want it to be (in 4411 ratings)",
      ],
      cons: [
        "1. Bad managers abound and there is not much remedy for that except for leaving the job. (in 1308 ratings)",
        "2. life balance in hardware due to frequent unplanned work travel and evening calls; bloated meetings; some poor management (in 997 ratings)",
      ],
    },
    {
      id: 11,
      name: "Oracle",
      logo: "./Company_logos/Oracle.png",
      description:
        "A leading global provider of database software, cloud solutions, and enterprise IT systems.",
      founder: "Larry Ellison, Bob Miner, Ed Oates",
      ceo: "Safra Catz",
      startDate: "June 16, 1977",
      website: "https://www.oracle.com/",
      rating: 3.8,
      pros: [
        "1.Good work life balance given so that you become lazy and settle down for less and compromise (in 7039 ratings)",
        "2. Good benefits and teaches you how to deal with executives and helps you figure out what you want to do later in life. (in 3058 ratings)",
      ],
      cons: [
        "1. I was hired on a low salary and made my way up to being a very useful asset. (in 2080 ratings)",
        "2. management is poor and inefficient (in 1601 ratings)",
      ],
    },
    {
      id: 12,
      name: "Mphasis Limited",
      logo: "./Company_logos/mphasis.png",
      description:
        "Mphasis Limited is an Indian multinational information technology services and consulting company, providing infrastructure technology and applications outsourcing services, as well as architecture guidance, application development and integration, and application management services.",
      founder: "Jerry Rao & Jeroen Tas",
      ceo: "Nitin Rakesh",
      startDate: "June 2000",
      website: "https://www.mphasis.com/",
      rating: 3.4,
      pros: [
        "1. Good work life balance and flexible (in 1134 ratings)",
        "2. Because Mphasis was under EDS and HP for long time the work culture is good. (in 509 ratings)",
      ],
      cons: [
        "1. Less Salary and not satisfied with apprisals (in 722 ratings)",
        "2. Treats freshers poorly and poor management (in 402 ratings)",
      ],
    },
    {
      id: 13,
      name: "Cisco Systems",
      logo: "./Company_logos/cisco.png",
      description:
        "An American multinational technology conglomerate that develops and sells networking hardware, software, telecommunications equipment, and other high-technology services and products.",
      founder: "Leonard Bosack & Sandra Lerner",
      ceo: "Chuck Robbins",
      startDate: "December 1984",
      website: "https://www.cisco.com/",
      rating: 4.1,
      pros: [
        "1. Good work/life balance (for most) with plenty of tools to help get that done. (in 3616 ratings)",
        "2. Worked for Cisco for over 10 years the best I can say Benefits are good. (in 2454 ratings)",
      ],
      cons: [
        "1. Frequent layoffs and yearly hikes were low (in 1663 ratings)",
        "2. Bad management and politics at cisco (in 783 ratings)",
      ],
    },
    {
      id: 14,
      name: "Adobe",
      logo: "./Company_logos/Adobe.png",
      description:
        "A global leader in creative software solutions, specializing in digital media and marketing.",
      founder: "John Warnock, Charles Geschke",
      ceo: "Shantanu Narayen",
      startDate: "December 1982",
      website: "https://www.adobe.com/",
      rating: 4.2,
      pros: [
        "1. Good work/life balance (the lights would always turn off at HQ around 5:30!) (in 1109 ratings)",
        "2. Great benefits and WLB. (in 1073 ratings)",
      ],
      cons: [
        "1. Poor management but its okay (in 251 ratings)",
        "2. Some managers have a tendency to micromanage (but that's the exception) (in 230 ratings)",
      ],
    },
    {
      id: 15,
      name: "Salesforce",
      logo: "https://uipath.com/cdn-cgi/image/width=575,format=auto/https:////images.ctfassets.net/5965pury2lcm/3GNvyZ3UUnTGPTdDVSqYJu/f3851b55467b1533937b7191ed2f4da7/Salesforce-Logo-Video-Spotlight.png",
      description:
        "A global leader in customer relationship management (CRM) solutions and enterprise cloud computing.",
      founder: "Marc Benioff, Parker Harris",
      ceo: "Marc Benioff",
      startDate: "February 1999",
      website: "https://www.salesforce.com/",
      rating: 4.1,
      pros: [
        "1. Many might have told about all the great benefits salesforce offers and everything is true : (in 2326 ratings)",
        "2. Salesforce promotes a great culture as a company and that is reflected in the employees' interactions at the company (in 1967 ratings)",
      ],
      cons: [
        "1. Poor management (both middle management and executives) (in 462 ratings)",
        "2. Bad managers thrive creating terrible and deep differences between departments and culture. (in 382 ratings)",
      ],
    },
  ];

  const scsitCompanies = [
    {
      "id": 1,
      "name": "Dice",
      "logo": "./Company_logos/dice.png",
      "description": "Dice is a corporate spend orchestration, digital commerce, and payments platform for enterprises.",
      "founder": "Lakshay Jain, Prashant Kushwah and Sonam Khubchandani",
      "ceo": "Prashant Kushwah",
      "startDate": "2018",
      "website": "https://dice.tech/",
      "rating": 3.7,
      "pros": [
        "Good startup culture at Dice Pune (in 14 reviews)"
      ],
      "cons": [
        "There are no cons to display at this time.",
      ]
    },
    {
      "id": 2,
      "name": "Fico",
      "logo": "./Company_logos/FICO.svg",
      "description": "A global leader in analytics, providing software and tools for credit risk management. FICO, originally Fair, Isaac and Company, is an American data analytics company based in Bozeman, Montana, focused on credit scoring services.",
      "founder": "Bill Fair and Earl Isaac",
      "ceo": "William J. Lansing",
      "startDate": "1956",
      "website": "https://www.fico.com/",
      "rating": 4.1,
      "pros": [
        "1. Good work/life balance depending on manager and role (in 187 reviews)",
        "2. Most people were great and the company had good intentions. (in 129 reviews)"
      ],
      "cons": [
        "1. Management is poor (in 61 reviews)",
        "2. Low salary and very far. (in 47 reviews)"
      ]
    },
    {
      "id": 3,
      name: "Accenture",
      logo: "./Company_logos/Accenture.png",
      description:
        "A global professional services company providing consulting and strategy in digital, technology, and operations.",
      founder: "Arthur Andersen",
      ceo: "Julie Sweet",
      startDate: "1989",
      website: "https://www.accenture.com/",
      rating: 3.8,
      pros: [
        "1. It has been 7 months working in Accenture.....never felt work tirelessly.....trainings are good and good work life balance (in 9381 ratings)",
        "2. Working here is good because the work culture is good and we get to reskill and upskill ourselves. (in 7036 ratings)",
      ],
      cons: [
        "1. Low salary for resources who are loyal and staying with the company for long years. (in 6798 ratings)",
        "2. I was in Accenture Kolkata and here management are very very poor like political leader (leader with zero knowledge). (in 3599 ratings)",
      ],
    },
    {
      "id": 4,
      "name": "LTIMindTree",
      "logo": "./Company_logos/LTIMindtree.webp",
      "description": "A leading global technology consulting and digital transformation company.",
      "founder": "Debashis Chatterjee",
      "ceo": "Debashis Chatterjee",
      "startDate": "1996",
      "website": "https://www.ltimindtree.com/",
      "rating": 3.5,
      "pros": [
        "1. work life balance is good and again its based on project. (in 883 reviews)",
        "2. Good work culture and you can learn more if you are placed in good project. (in 418 reviews)"
      ],
      "cons": [
        "1. Bad management and not for freshers mostly in bench (in 267 reviews)",
        "2. Less salary in india and hike is not good. (in 240 reviews)"
      ]
    },
    {
      "id": 5,
      "name": "Quantiphi",
      "logo": "./Company_logos/quantiphi.png",
      "description": "A data science and AI company helping businesses innovate with AI and ML solutions.",
      "founder": "Asif Hasan, Reghu Hariharan, and Ritesh Patel",
      "ceo": "Asif Hasan",
      "startDate": "2013",
      "website": "https://www.quantiphi.com/",
      "rating": 4.3,
      "pros": [
        "1. Work culture is good employees are good (in 131 reviews)",
        "2. The culture is good and the work will depend on your project.(in 93 reviews)"
      ],
      "cons": [
        "1. No work life balance due to all fresher are hired and leads have to look into all small things or deliver project practically by himself (in 321 reviews)",
        "2. extended working hours and constant need for upskilling. (in 84 reviews)"
      ]
    },
    {
      "id": 6,
      "name": "Cognam",
      "logo": "./Company_logos/cognam.jpeg",
      "description": "A software development and IT consulting company offering innovative solutions.",
      "founder": "Unknown",
      "ceo": "Luis Gutierrez-Sheris",
      "startDate": "2011",
      "website": "https://www.cognam.com/",
      "rating": 3.8,
      "pros": [
        "1. All people are very good work life balance (in 4 reviews)",
        "2. Good Atmosphere and salary also. (in 4 reviews)"
      ],
      "cons": [
        "1. There is a lack of professionalism, with daily humiliations from managers being a common occurrence. (in 5 reviews)",
        "2. Old technologies being used CEO not good (in 4 reviews)"
      ]
    },
    {
      "id": 7,
      "name": "Unthinkable Solutions",
      "logo": "./Company_logos/unthinkable.png",
      "description": "An innovative IT company focused on delivering unique software solutions.",
      "founder": "Yogesh Agarwal",
      "ceo": "Yogesh Agarwal",
      "startDate": "2019",
      "website": "https://www.unthinkable.co/",
      "rating": 3.6,
      "pros": [
        "1. Good for learning opportunity. (in 21 reviews)",
        "2. Good work culture. (in 15 reviews)"
      ],
      "cons": [
        "1. no work life balance is there. (in 24 reviews)",
        "2. Poor management. (in 19 reviews)"
      ]
    },
    {
      "id": 8,
      "name": "SafeSend",
      "logo": "./Company_logos/safesend.jpg",
      "description": "A secure and efficient platform for sending and managing financial documents. SafeSend’s mission is to automate the tax and accounting profession with innovative, emerging technologies that help practitioners work more efficiently and better serve their clients.",
      "founder": "Steve Dusablon and Andrew Hatfield",
      "ceo": "Mathieu Stevenson",
      "startDate": "2008",
      "website": "https://www.safesend.com/",
      "rating": 4.1,
      "pros": [
        "1. Great culture and progressive technology (in 7 reviews)",
"2. Good work culture and work environment. (in 5 reviews)"
      ],
      "cons": [
        "There are no cons to display at this time."
      ]
    },
    {
      "id": 9,
      "name": "Nucleusteq",
      "logo": "./Company_logos/nucleusteq.jpeg",
      "description": "NucleusTeq is the top-leading software services, solutions, and products company dedicated to empowering and transforming businesses through advanced digital technologies, including big data, analytics, cloud, enterprise automation, and mobility.",
      "founder": "Ashish Baghel",
      "ceo": "Ashish Baghel",
      "startDate": "2018",
      "website": "https://nucleusteq.com//",
      "rating": 3.8,
      "pros": [
        "1. Best Work Culture (in 9 reviews)",
        "2. The management is amazing very friendly and transparent on every approach. (in 8 reviews)"
      ],
      "cons": [
        "There are no cons to display at this time."
      ]
    },
    {
      "id": 10,
      "name": "Principal Global Services",
      "logo": "./Company_logos/principal.png",
      "description": "Principal is a global financial services company passionate about improving the wealth and well-being of families and communities",
      "founder": "Kaushik Majumdar",
      "ceo": "Deanna Strable-Soethout",
      "startDate": "2006",
      "website": "https://www.principal.com/",
      "rating": 3.9,
      "pros": [
        "1. Work life balance is good. (in 322 reviews)",
        "2. Great benefits and the company overall is working to have the employees to be more antonymous. (in 208 reviews)"
      ],
      "cons": [
        "1. Bad management infact they do not know to manage at all. 4. No employee importance. (in 89 reviews)",
        "2. There is no training and you are literally thrown into the fire and nobody helps you. (in 39 reviews)"
      ]
    },
    {
      "id": 11,
      "name": "Evitamin Business Consulting Pvt Ltd",
      "logo": "./Company_logos/evitamin.png",
      "description": "A business consulting firm specializing in the e-commerce and retail sectors.",
      "founder": "Unknown",
      "ceo": "Vaibhav Daga",
      "startDate": "2017",
      "website": "https://evitamin.in/",
      "rating": 3.8,
      "pros": [
        "1. Work environment at E vitamin is so cool, Seniors are very helpful and friendly. (in 7 reviews)",
        "2. good working environment and people. (in 5 reviews)"
      ],
      "cons": [
        "1. Low salary and very minor growth. (in 9 reviews)",
        "2. The management and administration is bad (in 3 reviews)"
      ]
    },
    {
      "id": 12,
      "name": "NRI Fintech",
      "logo": "./Company_logos/nri.jpg",
      "description": "A fintech company offering innovative solutions in finance and banking.",
      "founder": "Unknown",
      "ceo": "Mr. Maulindu Chatterjee",
      "startDate": "2012",
      "website": "https://www.nrifintech.com/",
      "rating": 3.8,
      "pros": [
        "1. Good salary. (in 11 reviews)",
        "2. Good work culture (in 11 reviews)"
      ],
      "cons": [
        "1. High workload during peak periods. (in 6 ratings)",
        "2. No work life balance (in 8 reviews)"
      ]
    },
    {
      "id": 13,
      "name": "McKinley Rice",
      "logo": "./Company_logos/mckinley.png",
      "description": "A human capital services company that helps businesses connect with global talent. .",
      "founder": "Felix Kim",
      "ceo": "Felix Kim",
      "startDate": "2018",
      "website": "https://mckinleyrice.com/",
      "rating": 4.1,
      "pros": [
        "1. Friendly and supportive team. (in 18 reviews)",
        "2. good people to work with. (in 17 reviews)"
      ],
      "cons": [
        "No job security at all. (in 7 reviews)"
      ]
    },
    {
      "id": 14,
      "name": "Livegage",
      "logo": "./Company_logos/Livegage.jpg",
      "description": "A customer engagement platform that helps businesses personalize communication with clients.",
      "founder": "Anupam Sarwaikar",
      "ceo": "Anupam Sarwaikar",
      "startDate": "2021",
      "website": "https://livegage.ai/",
      "rating": 4.2,
      "pros": [
        "1.Good Work environment for exploring and implementing things"
      ],
      "cons": [
        "1.Few from Leadership need to give equal value to each employees"
      ]
    },
    {
      "id": 15,
      "name": "Systango",
      "logo": "./Company_logos/Systango.png",
      "description": "At Systango, we redefine possibilities across product discovery, design, software engineering, and product growth. Our commitment to innovation, scalability, and security is at the core of our technology consultation and service portfolio.",
      "founder": "Vinita Rathi",
      "ceo": "Vinita Rathi",
      "startDate": "2007",
      "website": "https://www.systango.com/",
      "rating": 4.3,
      "pros": [
        "1. best work culture, and atmosphere so far in my 1 year of experience. (in 11 reviews)",
        "2. Supportive management. (in 10 reviews)"
      ],
      "cons": [
        "1. There's no work life balance. (in 9 reviews)",
        "2. Less Salary hike. (in 4 reviews)"
      ]
    },
    {
      "id": 16,
      "name": "Gammastack",
      "logo": "./Company_logos/GammaStack.jpg",
      "description": "They work with companies in the iGaming, Blockchain, Logistic, and Automobile industries. They offer services such as iGaming, Fantasy Sports, Custom Software, and Self-storage Management Software.",
      "founder": "Gaurav Soni",
      "ceo": "Gaurav Soni",
      "startDate": "2012",
      "website": "https://www.gammastack.com/",
      "rating": 4.0,
      "pros": [
        "1. Flexible Timing is only good. (in 24 reviews)",
        "2. Good Work Culture and Lots of Learning. (in 20 reviews)"
      ],
      "cons": [
        "1. Low salary and 10 hours working. (in 6 reviews)"
      ]
    },
    {
      "id": 17,
      "name": "Lumber",
      "logo": "./Company_logos/lumber.jpeg",
      "description": "Lumber bringing AI to the forefront of construction workforce management, integrating siloed systems and simplifying complex processes.",
      "founder": "Shreesha Ramdas and Manish Kumar",
      "ceo": "Shreesha Ramdas",
      "startDate": "2013",
      "website": "https://www.lumberfi.com/",
      "rating": 4.0,
      "pros": [
        "Not available"
      ],
      "cons": [
        "Not available"
      ]
    },
    {
      "id": 18,
      "name": "Growisto",
      "logo": "./Company_logos/growisto.png",
      "description": "A digital marketing agency helping businesses grow through innovative marketing strategies.",
      "founder": "Kiran Patil and Pritesh Mittal",
      "ceo": "Kiran Patil",
      "startDate": "2015",
      "website": "https://www.growisto.com/",
      "rating": 4.2,
      "pros": [
        "1. great work culture. (in 16 reviews)",
"2. Culture is good. (in 13 reviews)"
      ],
      "cons": [
        "1. Not a place for anyone who is looking for work life balance in terms of fixed working hours. (in 7 reviews)",
        "2. Senior management is a downright bully. (in 6 reviews)"
      ]
    },
    {
      "id": 19,
      "name": "Turing",
      "logo": "./Company_logos/turing.png",
      "description": "A platform that helps companies hire remote developers from across the globe.",
      "founder": "Jonathan Siddharth & Vijay Krishnan",
      "ceo": "Jonathan Siddharth",
      "startDate": "2018",
      "website": "https://www.turing.com/",
      "rating": 3.9,
      "pros": [
        "1. Great work culture. (in 68 reviews)",
        "2. Good salary and you can work anywhere. (in 42 reviews)"
      ],
      "cons": [
        "1. Frequent layoffs due to restructuring of organisation. (in 32 reviews)",
        "2. No benefits are there for hourly payment employees. (in 19 reviews)"
      ]
    },
    {
      "id": 20,
      "name": "MindRuby",
      "logo": "./Company_logos/mindruby.jpeg",
      "description": "A technology services company We intend to design tailored cloud solutions that allow our customers to transform their company into a cloud-first business.",
      "founder": "Avinash Kumar",
      "ceo": "Sateesh Chandrashekhar",
      "startDate": "2016",
      "website": "https://mindruby.com/",
      "rating": 4.1,
      "pros": [
        "1. Good work life balance in this organisation. (in 5 reviews)",
"2. Comfortable work culture with balanced Professional and Personal life. (in 3 reviews)"
      ],
      "cons": [
        "There are no cons to display at this time."
      ]
    }
  ];
  const [showHiringPartners, setShowHiringPartners] = useState(false);

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span className="flex items-center">
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={index} className="text-yellow-500 text-2xl">&#9733;</span>
        ))}
        {halfStar && <span className="text-yellow-500 text-2xl">&#9733;</span>}
        <span className="ml-2 text-gray-600 text-sm">({rating}/5)</span>
      </span>
    );
  };
  
  function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details) details.classList.toggle("hidden");
  }
  
  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-50 min-h-screen py-8 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        Top 15 IT Companies
      </h1>
      <Top15Companies
        companies={companies.slice(0, 15)}
        toggleDetails={toggleDetails}
        getStarRating={getStarRating}
      />
  
      <p
        className="text-center text-lg text-blue-700 mt-8 cursor-pointer underline hover:text-blue-900"
        onClick={() => setShowHiringPartners(!showHiringPartners)}
      >
        Click here and have a look at SCSIT hiring partners
      </p>
  
      {showHiringPartners && (
        <div className="mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        SCSIT  Hiring Partners 2024-25
      </h1>
          <SCSITCompanies
            scsitCompanies={scsitCompanies.slice(0, 20)}
            toggleDetails={toggleDetails}
            getStarRating={getStarRating}
          />
        </div>
      )}
  
      <p className="text-slate-500 text-center">
        <strong>Disclaimer: </strong>The Ratings and Reviews are extracted from Glassdoor.com.
      </p>
    </div>
  );
}
  
  const Top15Companies = ({ companies, toggleDetails, getStarRating }) => (
    <div className="flex flex-wrap gap-[2%] mx-2 sm:mx-8">
      {companies.map((company, index) => (
        <div
          key={company.id}
          className={`h-auto mb-4 ${
            index === 0 ||
            index === 4 ||
            index === 6 ||
            index === 10 ||
            index === 12
              ? "w-full sm:w-[40%]"
              : index === 1 ||
                index === 7 ||
                index === 13 ||
                index === 11
              ? "w-full sm:w-[30%] sm:basis-[30%]"
              : index === 2 ||
                index === 5 ||
                index === 8 ||
                index === 14
              ? "w-full sm:grow sm:basis-[100px]"
              : "w-full sm:w-1/4"
          }  shadow-xl rounded-lg overflow-hidden transform transition hover:scale-100 hover:shadow-2xl p-4 text-center flex flex-col`}
          style={{
            backgroundImage: 'url(/Company_logos/backgroundcard.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}          
        >
          <CompanyCard
            company={company}
            toggleDetails={toggleDetails}
            getStarRating={getStarRating}
            prefix="top"
          />
        </div>
      ))}
    </div>
  );
  
  const SCSITCompanies = ({ scsitCompanies, toggleDetails, getStarRating }) => (
    <div className="flex flex-wrap gap-[2%] mx-2 sm:mx-8">
      {scsitCompanies.map((company, index) => (
        <div
          key={company.id}
          className={`h-auto mb-4 ${
            index === 0 ||
            index === 4 ||
            index === 6 ||
            index === 10 ||
            index === 12 ||
            index === 16 ||
            index === 18 ||
            index === 19
              ? "w-full sm:w-[40%]"
              : index === 1 ||
                index === 7 ||
                index === 13
              ? "w-full sm:w-[30%] sm:basis-[30%]"
              : index === 2 ||
                index === 5 ||
                index === 8 ||
                index === 11 ||
                index === 17 ||
                index === 14
              ? "w-full sm:grow sm:basis-[100px]"
              : "w-full sm:w-1/4"
          } bg-white shadow-xl rounded-lg overflow-hidden transform transition hover:scale-100 hover:shadow-2xl p-4 text-center flex flex-col`}
          style={{
            backgroundImage: 'url(/Company_logos/backgroundcard.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}    
        >
          <CompanyCard
            company={company}
            toggleDetails={toggleDetails}
            getStarRating={getStarRating}
            prefix="scsit"
          />
        </div>
      ))}
    </div>
  );
  
  const CompanyCard = ({ company, toggleDetails, getStarRating, prefix }) => (
    <div>
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        className="h-20 mt-2 w-44 mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold">{company.name}</h2>
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-lg underline hover:text-blue-800"
      >
        Visit Website
      </a>
      <div className="flex flex-col items-center justify-center"> {/* Make sure this div takes up full width */}
  <button
    className="mt-2 border-2 border-purple-900 rounded-lg p-2 bg-gradient-to-r from-blue-200 to-purple-200 text-sm text-blue-800 flex items-center justify-center text-center font-bold gap-1"
    onClick={() => toggleDetails(`${prefix}-${company.id}`)}
  >
    ☞ Read Details
  </button>
</div>
      <div
        id={`${prefix}-${company.id}`}
        className="hidden absolute top-0 left-0 w-full h-full p-6 shadow-2xl z-50 rounded-lg overflow-auto"
        style={{
          backgroundImage: 'url(/Company_logos/backgroundcard.jpg)',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}    
      >
        <button
          className="absolute top-2 right-2 text-red-500 text-xl"
          onClick={() => toggleDetails(`${prefix}-${company.id}`)}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
        <p className="text-gray-700">{company.description}</p>
        <p className="text-gray-700 mt-2">
          <strong>Founder:</strong> {company.founder}
        </p>
        <p className="text-gray-700">
          <strong>CEO:</strong> {company.ceo}
        </p>
        <p className="text-gray-700">
          <strong>Founded:</strong> {company.startDate}
        </p>
        <p className="font-bold text-gray-700 flex items-center justify-center">
          Rating:&nbsp;{getStarRating(company.rating)}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Pros</h3>
          <ul>
            {company.pros.map((pro, index) => (
              <li key={index} className="text-gray-700">
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Cons</h3>
          <ul>
            {company.cons.map((con, index) => (
              <li key={index} className="text-gray-700">
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
export default Company;