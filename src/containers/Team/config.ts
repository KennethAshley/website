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
      bio:
        'Patrick Charles has over twenty years of experience building software in\
        a variety of industries including finance, education, health care and computer security. He\
        has worked as a technology leader, consultant, software architect, engineer and\
        researcher. Patrick is an open source contributor, has authored a number of technical\
        papers, is an inventor with two US patents and is co-author of the opening chapter in the\
        soon to be published book “Frontiers of Cyberlearning”.',
      email: '',
      img: advisorImages.PatrickCharles,
      linkedin: 'https://www.linkedin.com/in/pchuck/',
      name: 'Patrick Charles',
      title: 'Data Science & Analytics Pipeline Architect'
    },
    {
      bio:
        'Josh started coding at the age of 10. Prior to Origin, he co-founded three\
        other venture-backed companies: EventVue, Torbit (acquired by Walmart Labs) & Forage.',
      email: '',
      img: advisorImages.JoshFraser,
      linkedin: 'https://www.linkedin.com/in/joshuafraser/',
      name: 'Josh Fraser',
      title: 'Co-Founder, Origin Protocol'
    },
    {
      bio:
        'As VP of Engineering, Dan oversees systems development for 1010data.\
        He focuses on making 1010data the fastest, most reliable big data discovery and sharing\
        platform on the web. He has been instrumental developing scaled solutions to gracefully\
        manage petabytes of data with world-class reliability and fast query response time.\
        During his 8-year tenure at 1010data, Dan has worked on numerous critical development\
        projects across the company including the Trillion-Row Spreadsheet and various MBS\
        data products. Before joining 1010data, Dan was a developer at Accenture on the\
        Global Architecture Team building custom enterprise management software. Dan holds a\
        BS in Computer Science from the University of Rochester.',
      email: '',
      img: advisorImages.DanHorowitz,
      linkedin: 'https://www.linkedin.com/in/danielhorowitznyc/',
      name: 'Dan Horowitz',
      title: 'Senior Vice President Engineering, 1010 Data'
    },
    {
      bio:
        'Based in Asia since 2004, Casper has worked as an investment banker,\
        tech entrepreneur, corporate executive and private equity investor. He is currently a\
        co-founder of Spartan Group, an investment management and advisory firm focusing on\
        blockchain technology. Casper co-heads Spartan’s advisory business, which works with\
        industry leaders in the blockchain and ICO space. Prior to Spartan, Casper spent 10 years\
        in the Investment Banking Division at Goldman Sachs in their London, Hong Kong, Beijing\
        and Singapore offices. Casper has been an active tech angel investor for over a decade,\
        and is an active blockchain and crypto investor.',
      email: '',
      img: advisorImages.CasperJohansen,
      linkedin: 'https://www.linkedin.com/in/casperbjohansen',
      name: 'Casper Johansen',
      title: 'Co-Founder, Spartan Group'
    },
    {
      bio:
        'Brian has over a decade of experience in debt and capital markets, digital\
        marketing, and technology entrepreneurship. A recognized innovator, he has a wealth of\
        business acumen developed through years of working with Fortune 500 and Inc. 500\
        companies, as well as early-stage startups. Brian acts as the venture mind for Coder,\
        leading sales, marketing, finance and strategy. Before founding Coder, Brian was an\
        Associate Director at Brafton, a digital marketing agency with offices in Boston, Chicago,\
        and San Francisco. Brian graduated with a Bachelor’s degree in finance from the\
        University of Illinois at Urbana-Champaign.',
      email: '',
      img: advisorImages.BrianShields,
      linkedin: 'https://www.linkedin.com/in/briandshields/',
      name: 'Brian Shields',
      title: 'Co-Founder, Coder Inc.'
    },
    {
      bio:
        'Brent has over 15 years of experience leading high impact growth\
        software companies, of which many have had successful exits. Brent is currently the\
        Chief Revenue Officer at Bread (BRD), one of the world\'s fastest growing crypto financial\
        platforms. Bread is considered a thought leader in the world of crypto, with over one\
        million users in over 140 countries. Prior to Bread, Brent worked in the Vista Equity\
        Partners portfolio where he helped drive two exits. Brent builds revenue engines and\
        helps develop growth strategies. When not at work, he helps advise a Silicon Valley \
        venture capital firm on early stage investments, and regularly speaks, mentors, and\
        attends global accelerator conferences.',
      email: '',
      img: advisorImages.BrentTraidman,
      linkedin: 'https://www.linkedin.com/in/btraidman/',
      name: 'Brent Traidman',
      title: 'Chief Revenue Officer, Bread'
    },
    {
      bio:
        'Rob Behnke is a 5-year cryptocurrency trader, token sale growth hacker,\
         and entrepreneur currently living in San Francisco. His prior startups - \
         The Brooklyn Salsa Company and the MicSwap iOS App have been featured in Forbes,\
          Techcrunch and the New York Times. He is the founder\
           of Token Agency - a premier, full-service marketing and strategy\
            agency for the blockchain startup space that\
         successfully launched and worked with multiple ICOs / Token Sales / Token Generation Events.',
      email: '',
      img: advisorImages.RobBehnke,
      linkedin: 'https://www.linkedin.com/in/rbehnke/',
      name: 'Rob Behnke',
      title: 'Founder, Token Agency'
    },
    {
      bio:
        'Kevin Owocki is the founder of Gitcoin.co. He is a software engineer interested in hacking,\
         learning, and writing about the intersection of next-generation technologies,\
          especially machine learning, computer vision, VR, AR, & plenoptic photography.\
           He has a BS in Computer Science,\
            10 years of engineering leadership experience in startups and Open Source Software.\
             He also is a community organizer in the Boulder Colorado Blockchain Tech Scene,\
              helping many notable events planning, like ETHDenver with\
               one of MARKET Protocol co-founders Phil Elsasser.',
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
