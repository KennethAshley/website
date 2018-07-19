import teamMemberImages from '@images/team';
import advisorImages from '@images/advisors';

export interface TeamMember {
  name: string;
  title: string;
  img: string;
  email: string;
  linkedin: string;
  bio: string;
}

export interface Advisor {
  name: string;
  title: string;
  img: string;
  email: string;
  linkedin: string;
}

interface Config {
  teamMembers: TeamMember[];
  advisors: Advisor[];
}

const config: Config = {
  advisors: [
    {
      email: '',
      img: advisorImages.PatrickCharles,
      linkedin: 'https://www.linkedin.com/in/pchuck/',
      name: 'Patrick Charles',
      title: 'Data Science & Analytics Pipeline Architect'
    },
    {
      email: '',
      img: advisorImages.BrianShields,
      linkedin: 'https://www.linkedin.com/in/briandshields/',
      name: 'Brian Shields',
      title: 'Co-Founder, Coder Inc.'
    },
    {
      email: '',
      img: advisorImages.DanHorowitz,
      linkedin: 'https://www.linkedin.com/in/danielhorowitznyc/',
      name: 'Dan Horowitz',
      title: 'Senior Vice President Engineering, 1010 Data'
    },
    {
      email: '',
      img: advisorImages.JoshFraser,
      linkedin: 'https://www.linkedin.com/in/joshuafraser/',
      name: 'Josh Fraser',
      title: 'Co-Founder, Origin Protocol'
    },
    {
      email: '',
      img: advisorImages.BrentTraidman,
      linkedin: 'https://www.linkedin.com/in/btraidman/',
      name: 'Brent Traidman',
      title: 'Chief Revenue Officer, Bread'
    },
    {
      email: '',
      img: advisorImages.CasperJohansen,
      linkedin: 'https://www.linkedin.com/in/casperbjohansen',
      name: 'Casper Johansen',
      title: 'Co-Founder, Spartan Group'
    },
    {
      email: '',
      img: advisorImages.RobBehnke,
      linkedin: 'https://www.linkedin.com/in/rbehnke/',
      name: 'Rob Behnke',
      title: 'Founder, Token Agency'
    },
    {
      email: '',
      img: advisorImages.KevinOwocki,
      linkedin: 'https://www.linkedin.com/in/owocki/',
      name: 'Kevin Owocki',
      title: 'Founder, GitCoin'
    }
  ],
  teamMembers: [
    {
      bio:
        'Seth has been a derivatives trader since 2005. He has grown and managed multiple algorithmic trading desks,\
         operated as a registered market maker and participated in numerous product launches. First introduced to the\
         crypto space in 2015 as a Trader and later focused on the technology side, Seth has a strong understanding of\
         centralized and decentralized trading and exchange infrastructures.',
      email: 'seth@marketprotocol.io',
      img: teamMemberImages.SethRubin,
      linkedin: 'https://www.linkedin.com/in/seth-rubin-8887a891/',
      name: 'Seth Rubin',
      title: 'CEO & Co-Founder'
    },
    {
      bio:
        'Phil has spent the last 7 years as the lead developer on a algorithmic trading desk. Phil  has led\
        teams of developers focused on creating trading infrastructure, user interfaces, execution platforms\
        and quantitative trading analytics. Phil has the skillset, creativity and passion needed to implement\
        technical solutions to solve the challenges presented by a decentralized market place.',
      email: 'phil@marketprotocol.io',
      img: teamMemberImages.PhilElsasser,
      linkedin: 'https://www.linkedin.com/in/phil-elsasser-79208160/',
      name: 'Phil Elsasser',
      title: 'CTO & Co-Founder'
    },
    {
      bio:
        'Collins has been trading and investing in financial markets since he was an early teenager. He has\
        successfully managed development groups solving complex problems in financial markets. As a market\
        professional, he understands the demands of an exchange user.',
      email: 'collins@marketprotocol.io',
      img: teamMemberImages.CollinsBrown,
      linkedin: 'https://www.linkedin.com/in/collins-brown-2ab68126/',
      name: 'Collins Brown',
      title: 'COO & Co-Founder'
    },
    {
      bio:
        'Eswara is a passionate Frontend Developer proficient working with\
        HTML, CSS & JavaScript. He is also experienced with\
        JavaScript frameworks such as ReactJS and AngularJS which are majorly\
        used in building dynamic single-page web applications.',
      email: 'eswara@marketprotocol.io',
      img: teamMemberImages.EswaraSai,
      linkedin: 'https://www.linkedin.com/in/eswarasai/',
      name: 'Eswara Sai',
      title: 'Senior Frontend Developer'
    },
    {
      bio:
        'Robert combines a personal passion for investing and derivatives with\
        decades of experience in software and Product Development. He\'s served in a\
        variety of product and engineering leadership roles, from startups to F50 companies.\
        Robert has a strong interest in DLT, smart contracts, and cryptocurrencies and\
        is hopeful of a decentralized future where the individual controls their identity\
        and data.',
      email: 'robert@marketprotocol.io',
      img: teamMemberImages.RobertJordan,
      linkedin: 'https://www.linkedin.com/in/jrobertjordan',
      name: 'Robert Jordan',
      title: 'Product Manager'
    },
    {
      bio:
        'Perfect is passionate about building smart solutions related to Android,\
        AI and Smart Contracts in order\
        to make people’s lives better. He also has experience with machine learning,\
        image processing and web applications\
        (backends with PHP and Node.js).',
      email: 'perfect@marketprotocol.io',
      img: teamMemberImages.PerfectMakanju,
      linkedin: 'https://www.linkedin.com/in/perfectmak/',
      name: 'Perfect Makanju',
      title: 'Software Developer'
    },
    {
      bio:
        'Przemyslaw is a technology enthusiast. He has an in-depth knowledge\
        of Digital TV, MPEG2/H.264, HDCP, embedded devices,\
        navigation devices, advanced routing algorithms and bleeding edge\
        hypervisors. Przemyslaw is interested in blockchains\
        and derivatives trading.',
      email: 'przemyslaw@marketprotocol.io',
      img: teamMemberImages.PrzemyslawSzulczynski,
      linkedin: 'https://www.linkedin.com/in/przemyslaw-szulczynski-2a96a41/',
      name: 'Przemyslaw Szulczynski',
      title: 'Software Developer'
    },
    {
      bio:
        'As crypto trader and enthusiast Lazar has evaluated many new projects,\
        pursuing the technical side of more successful ones. He has been involved\
        with development strategy and community support for a number of blockchain based startups.',
      email: 'lazar@marketprotocol.io',
      img: teamMemberImages.LazarJovanovic,
      linkedin: 'https://www.linkedin.com/in/lazar-jovanovic/',
      name: 'Lazar Jovanovic',
      title: 'Marketing/Brand Ambassador'
    },
    {
      bio:
        'Nitin is a Designer by profession and a Developer by passion. \
        He is a person who believes in having a healthy relationship between design and code. \
        Being a Product Designer and gaining experience in front-end development skills like \
        ReactJS, AngularJS, KnockoutJS, Less, SaSS over the past 4 years has helped him establish \
        the relationship between design and code.',
      email: 'nitin@marketprotocol.io',
      img: teamMemberImages.NitinGupta,
      linkedin: 'https://www.linkedin.com/in/nitinrgupta31/',
      name: 'Nitin Gupta',
      title: 'Product Designer/Developer'
    },
    {
      bio:
        'Travis Mathis is a software developer from Burlington, VT.\
        He\'s comes from a web 2.0 development background and has owned \
        and operated several startups\
        He has over 10 years experience in software engineering and has worked on numerous\
        projects as a contractor, freelancer, and team member.',
      email: 'travis@marketprotocol.io',
      img: teamMemberImages.TravisMathis,
      linkedin: 'https://www.linkedin.com/in/travis-mathis-43443b16/',
      name: 'Travis Mathis',
      title: 'Senior Developer'
    }
  ]
};

export default config;
