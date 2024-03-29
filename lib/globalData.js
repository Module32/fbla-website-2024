const { faEarthAsia } = require("@fortawesome/free-solid-svg-icons");
const { faEarthOceania } = require("@fortawesome/free-solid-svg-icons");
const { faEarthAfrica } = require("@fortawesome/free-solid-svg-icons");
const { faEarthEurope } = require("@fortawesome/free-solid-svg-icons");
const { faEarthAmericas } = require("@fortawesome/free-solid-svg-icons");

const jobs = [
  {
    name: "Digital Marketing Specialist",
    desc: "Responsibilities may include developing and implementing digital marketing strategies, managing online advertising campaigns, and optimizing digital channels.",
    requirements: [
      "Experience with marketing and advertising",
      "Familiarity with aspects of design",
      "Ability to interpret and analyze data",
      "Storytelling skills",
    ],
    quote: {
      text: "I got black, I got white, and at VibeMagnet, I realized that I could market anyone with just those two colors. That's the beauty of this company -- you can really let your creativity flourish, and see results.",
      by: "Lil Tecca",
      image: "/people/tecca.jpg", // from https://static01.nyt.com/images/2019/10/06/arts/music/doas-tecca-promo/GettyImages-1165612474-square640.jpg,
      withUsSince: "December 2, 2019",
    },
    locations: [
      'NA',
      'EU',
      'AS',
      'AUS'
    ]
  },
  {
    name: "Content Marketing Manager",
    desc: "Focuses on creating and overseeing content strategies. This includes content creation, distribution, and ensuring alignment with overall marketing goals.",
    requirements: [
      "Experience in web content creation",
      "Ability to analyze audience responses",
      "Experience with Search Engine Optimization (SEO)",
      "Strong communication and time management skills",
    ],
    quote: {
      text: "I'm a professor in sassanomics, but my part-time job is a Content Marketing Manager at VibeMagnet. My own content has exploded on TikTok -- and I got banned later. But that's for another topic. I love this job, and this job loves me. Who doesn't?",
      by: "Prayag Mishra",
      image: "/people/prayag.jpg", // from https://www.famousbirthdays.com/headshots/prayag-mishra-2.jpg
      withUsSince: "January 9, 2023",
    },
    locations: [
      'NA',
      'AS',
      'AFR'
    ]
  },
  {
    name: "SEO Specialist",
    desc: "Works to optimize websites for search engines. Responsibilities include keyword research, on-page and off-page optimization, and staying informed about search engine algorithm updates.",
    requirements: [
      "Experience with low-level programming languages",
      "Experience with analyzing and creating algorithms",
      "Ability to read and interpret search engine data",
      "Ability to create impressionable websites",
    ],
    quote: {
      text: "Ba-ha-ha-ha! My friend Gru wanted to steal the moon for the second time -- and when he did, he wanted to sell it. As a VibeMagnet SEO Specialist, I helped him get to the top of Google searches for the moon!",
      by: "Minion",
      image: "/people/minion.webp", // from https://i.ebayimg.com/images/g/gPMAAOSw6gRi3oRc/s-l1200.webp,
      withUsSince: "July 14, 2016",
    },
    locations: [
      'AFR',
      'SA',
      'EU'
    ]
  },
  {
    name: "Social Media Manager",
    desc: "Manages and executes social media strategies for clients. This includes creating and scheduling posts, analyzing engagement metrics, and staying updated on social media trends.",
    requirements: [
      "Significant leadership experience and traits",
      "Understanding of social media algorithms and advertisements",
      "Time-management skills and a rigorous work ethic",
      "Creativity when designing advertisements and engaging content",
    ],
    quote: {
      text: "I was a chef, but now I help other chefs grow on social media. And at VibeMagnet, we eat it up. With no crumbs left.",
      by: "Gordon Ramsay",
      image: "/people/gordon.jpg", // from https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg
      withUsSince: "March 3, 2023",
    },
    locations: [
      'AFR',
      'AUS',
      'AS',
      'NA'
    ]
  },
  {
    name: "Paid Media Specialist",
    desc: "Handles paid advertising campaigns across platforms like Google Ads, Facebook Ads, and others. Responsible for budget management, targeting, and performance analysis.",
    requirements: [
      "Significant leadership experience and traits",
      "Understanding of social media algorithms and advertisements",
      "Time-management skills and a rigorous work ethic",
      "Ability to manage large advertising platforms and effectively budget money",
    ],
    quote: {
      text: "I faked it till I made it, with the power of advertising. So I know the importance of ads. And VibeMagnet has truly allowed me to teach this to others as well. Not scammers, though... I promise.",
      by: "Elizabeth Holmes",
      image: "/people/elizabeth.webp", // from https://pyxis.nymag.com/v1/imgs/d7d/e6f/1a075bc739bb2791753ddae1a2e4f7b519-elizabeth-holmes-2.1x.rsquare.w1400.jpg
      withUsSince: "February 3, 2023",
    },
  },
  {
    name: "Email Marketing Specialist",
    desc: "Develops and executes email marketing campaigns. This includes creating newsletters, managing subscriber lists, and analyzing email performance metrics.",
    requirements: [
      "Creativity when creating newsletters",
      "Ability to come up with engaging content that attracts viewers",
      "Ability to write eloquently and persuasively",
    ],
    quote: {
      text: "I created the Pony Express and delivered the first envelope via the Postal Office. At VibeMagnet, I've had the opportunity to email countless more people as part of advertising campaigns, all from the comfort of my home.",
      by: "Alexander Major",
      image: "/people/alexandermajor.png", // from https://kchistory.org/sites/default/files/blog/majors.jpg
      withUsSince: "August 23, 2023",
    },
  },
  {
    name: "Graphic Designer",
    desc: "Creates visual content for digital marketing campaigns, including graphics for social media, website design elements, and other visual assets.",
    requirements: [
      "Skilled in artwork and visual design",
      "Understanding of creating consistent design language",
      "Adaptive to companys' needs and vibes, to create fitting designs",
      "Mastery of modern design software",
    ],
    quote: {
      text: "My dad and mom done already gone viral on social media multiple times. It's your bestie, Miss Miss Westie, don't try to test me, it's gon get messy. Just, just, bless me. Bless me. I didn't sneeze but bless me.",
      by: "North West",
      image: "/people/northwest.png", // from https://pyxis.nymag.com/v1/imgs/1db/4d1/99ecd24684461599d0055539aef1b01403-north-west.1x.rsquare.w1400.jpg
      withUsSince: "May 19, 2023",
    },
  },
  {
    name: "Web Developer",
    desc: "Builds and maintains websites. This includes front-end and back-end development, ensuring websites are functional, user-friendly, and optimized for performance.",
    requirements: [
      "Mastery of modern frameworks like Next.js and Svelte",
      "Ability to create appealing front-end looks and make good first impressions",
      "Ability to design secure, fast back-end logic",
      "Strong communication skills",
    ],
    quote: {
      text: "I'm the Itsy Bitsy Spider, and I used to spin up webs on my own. But now, after finding the World Wide Web, I've helped clients develop their own websites and find new flies- I mean, customers.",
      by: "The Itsy Bitsy Spider",
      image: "/people/itsybitsyspider.png", // from https://images.nightcafe.studio/jobs/YvwDt8c12HIFCHVCKVI0/YvwDt8c12HIFCHVCKVI0--1--ij3ne_15.625x.jpg?tr=w-1600,c-at_max
      withUsSince: "January 1, 2019",
    },
  },
  {
    name: "Analytics Specialist",
    desc: "Focuses on data analysis to measure the effectiveness of digital marketing campaigns. This role involves using tools like Google Analytics to gather insights and make data-driven recommendations.",
    requirements: [
      "Strong communication skills",
      "Ability to read and interpret large amounts of data",
      "Ability to use data and make strong decisions based on it",
      "Strong mathematical and analytical foundations",
    ],
    quote: {
      text: "I'm an actor, but I can act like an analytics specialist. I've already showed up on numerous advertisements and billboards myself, so now I make sure others do too effectively.",
      by: "Brad Pitt",
      image: "/people/bradpitt.png", // from https://phantom-marca.unidadeditorial.es/f09c2e791007828aef05c3344550a69b/resize/828/f/jpg/assets/multimedia/imagenes/2023/07/28/16905604962999.jpg
      withUsSince: "April 22, 2020",
    },
  },
  {
    name: "Client Services Manager",
    desc: "Acts as a liaison between the agency and clients. Manages client relationships, communicates project progress, and ensures client satisfaction.",
    requirements: [
      // start here
      "Education in busines and marketing",
      "Experience in client services and account management",
      "Strong communicantion, problem-solving, and organizational skills",
      "Ability to analyze client data, trends, and make beneficial decisions",
    ],
    quote: {
      text: "I'll be there for you, I'll care for you -- and so will everyone at VibeMagnet. All the love I need is here at OVO -- and all the advertising you need is here at VibeMagnet. Don't worry about a thing, boo.",
      by: "Drake",
      image: "/people/drake.png", // from https://kchistory.org/sites/default/files/blog/majors.jpg
      withUsSince: "December 31, 2020",
    },
  },
  {
    name: "Copywriter",
    desc: "Creates compelling and persuasive copy for various digital channels, including websites, advertisements, and social media.",
    requirements: [
      "Strong writing skills",
      "Attention to detail and a keen eye",
      "Storytelling abilities",
      "Experience with proofreading and checking for proper grammar",
    ],
    quote: {
      text: "VibeMagnet has one of the most positive working environments I've ever been in. The sheer dedication of your coworkers and your managers really gets you excited, that you have an opportunity to make things the next big thing.",
      by: "Yashasvi Pabbisetty",
      image: "/people/yash.png",
      withUsSince: "September 4, 2023",
    },
  },
  {
    name: "Marketing Automation Specialist",
    desc: "Implements and manages marketing automation tools. This includes setting up workflows, segmenting audiences, and analyzing automation performance.",
    requirements: [
      "A bachelor's degree in Marketing, Business, IT, or related fields.",
      "Familiarity with channels like email, social media, and SEO.",
      "Knowledge of CRM systems and basic HTML.",
      "Conduct A/B testing for content and campaigns.",
    ],
    quote: {
      text: "Yes, AIs can get hired now too. I'm working at VibeMagnet with clients to automate their marketing strategies, and make their lives easier. Is there anything else I can help you with today?",
      by: "ChatGPT",
      image: "/people/gpt.png",
      withUsSince: "January 5, 2024",
    },
  },
  {
    name: "Public Relations (PR) Specialist",
    desc: "Manages communication and relationships with media outlets, influencers, and the public. Focuses on building a positive brand image.",
    requirements: [
      "Bachelor's degree in Public Relations, Communications, Journalism, or a related field.",
      "Strong research abilities to identify relevant media opportunities and industry trends.",
      "Strong networking skills to build relationships with stakeholders, influencers, and industry professionals.",
      "Understanding of cultural nuances and global perspectives in PR, especially for international campaigns.",
    ],
    quote: {
      text: "Hey sisters! It's James Charles here, and I'm working with VibeMagnet to help people create positive brand images for their companies. I ❤️ this job!",
      by: "James Charles",
      image: "/people/jamescharles.jpg",
      withUsSince: "October 13, 2018",
    },
  },
  {
    name: "Influencer Marketing Manager",
    desc: "Develops and executes influencer marketing strategies. Identifies and collaborates with influencers to promote products or services.",
    requirements: [
      "Strong writing skills",
      "Attention to detail and a keen eye",
      "Storytelling abilities",
      "Experience with proofreading and checking for proper grammar",
    ],
    quote: {
      text: "If you're doing drugs, stop it. Get some help. Don't stay under the influence of any drugs. However, some influencers are good. At VibeMagnet, I don't tell them to stop. I tell them, just do it.",
      by: "Michael Jordan",
      image: "/people/jordan.png",
      withUsSince: "June 29, 2015",
    },
  },
  {
    name: "Project Manager",
    desc: "Oversees the planning and execution of digital marketing projects. Coordinates tasks, manages timelines, and ensures projects are delivered on schedule.",
    requirements: [
      "Develop and implement influencer marketing strategies aligned with overall marketing goals.",
      "Strong negotiation skills to establish mutually beneficial partnerships with influencers.",
      "Ability to manage and optimize budgets for influencer marketing campaigns.",
      "Evaluate and approve influencer-generated content for quality and alignment with brand values.",
    ],
    quote: {
      text: "It's me, Alexander Poon -- both the VibeMagnet co-CEO and a project manager. I love my job here, and I also love being the biggest vibe here. We want vibes just like you, to have a great time in our work together.",
      by: "Alexander Poon",
      image: "/people/alex.png",
      withUsSince: "May 22, 2009",
    },
  },
];

const benefits = [
  "Guaranteed time off",
  "Stock options",
  "Remote-friendly",
  "Starting six-figure salary",
];

var countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const continents = [
  {
    name: "North America",
    icon: faEarthAmericas,
  },
  {
    name: "South America",
    icon: faEarthAmericas,
  },
  {
    name: "Europe",
    icon: faEarthEurope,
  },
  {
    name: "Asia",
    icon: faEarthAsia,
  },
  {
    name: "Africa",
    icon: faEarthAfrica,
  },
  {
    name: "Oceania",
    icon: faEarthOceania,
  },
];

module.exports = { jobs, benefits, countryList, continents };
