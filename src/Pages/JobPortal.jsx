import { useState } from "react";
import { motion } from "framer-motion";

const platforms = {
    "Internships": [
      { 
        "name": "Internshala", 
        "link": "https://internshala.com", 
        "app": "https://play.google.com/store/apps/details?id=com.internshala.app", 
        "logo": "/Job/Internshala.png", 
        "desc": "Best platform for students to find internships & jobs."
      },
      { 
        "name": "zuno", 
        "link": "https://www.foundit.in/zuno/", 
        "app": "https://play.google.com/store/apps/details?id=com.foundit.zuno", 
        "logo": "/Job/zuno.jpg", 
        "desc": "Paid Internships & Jobs."
      },
      { 
        "name": "LinkedIn", 
        "link": "https://linkedin.com", 
        "app": "https://play.google.com/store/apps/details?id=com.linkedin.android", 
        "logo": "/Job/linkedin.png", 
        "desc": "Professional networking platform with job & internship listings."
      },
      { 
        "name": "Glassdoor", 
        "link": "https://glassdoor.com", 
        "app": "https://play.google.com/store/apps/details?id=com.glassdoor.app", 
        "logo": "/Job/Glassdoor.png", 
        "desc": "Find internships & company reviews for better career decisions."
      },
      { 
        "name": "Indeed", 
        "link": "https://indeed.com", 
        "app": "https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch", 
        "logo": "/Job/Indeed.png", 
        "desc": "Search for internships & jobs across various industries."
      },
      { 
        "name": "WayUp", 
        "link": "https://wayup.com", 
        "app": "https://play.google.com/store/apps/details?id=com.wayup.app", 
        "logo": "/Job/wayup.jpg", 
        "desc": "Internships & jobs for students and recent grads."
      }
    ],
  "Full-time Jobs": [
        { 
          "name": "LinkedIn", 
          "link": "https://www.linkedin.com", 
          "app": "https://play.google.com/store/apps/details?id=com.linkedin.android", 
          "logo": "/Job/linkedin.png", 
          "desc": "Professional networking platform with job listings."
        },
        { 
          "name": "Indeed", 
          "link": "https://www.indeed.com", 
          "app": "https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch", 
          "logo": "/Job/Indeed.png", 
          "desc": "Job search engine with millions of listings worldwide."
        },
        { 
          "name": "Glassdoor", 
          "link": "https://www.glassdoor.com", 
          "app": "https://play.google.com/store/apps/details?id=com.glassdoor.app", 
          "logo": "/Job/Glassdoor.png", 
          "desc": "Find jobs & company reviews for informed career decisions."
        },
        { 
          "name": "Naukri", 
          "link": "https://www.naukri.com", 
          "app": "https://play.google.com/store/apps/details?id=naukriApp.appModules.login", 
          "logo": "/Job/Naukri.png", 
          "desc": "India's top job portal for various industries."
        },
        { 
          "name": "Fountit (Monster)", 
          "link": "https://www.foundit.in/", 
          "app": "https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views", 
          "logo": "/Job/foundit.jpg", 
          "desc": "Global job search platform for full-time opportunities."
        },
        { 
          "name": "apna", 
          "link": "https://apna.co/", 
          "app": "https://play.google.com/store/apps/details?id=com.apnatime", 
          "logo": "/Job/apna.jpg", 
          "desc": "India's largest jobs and professional networking platform."
        },
        { 
          "name": "ZipRecruiter", 
          "link": "https://www.ziprecruiter.com", 
          "app": "https://play.google.com/store/apps/details?id=com.ziprecruiter.android.release", 
          "logo": "/Job/zip.png", 
          "desc": "AI-powered job search platform with personalized matches."
        },
        { 
          "name": "CareerBuilder", 
          "link": "https://www.careerbuilder.com", 
          "app": "https://play.google.com/store/apps/details?id=com.careerbuilder.SugarDrone", 
          "logo": "/Job/careerBuilder.jpg", 
          "desc": "Job search site with resume-building tools & career advice."
        },
        {
          "name":"Unstop",
          "link":"https://unstop.com/",
          "app":"https://play.google.com/store/apps/details?id=com.dare2compete.app",
          "logo": "/Job/unstop.jpg",
          "desc":"Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company."
        }
      ]
    ,
    "Freelance": [
      { 
        "name": "Upwork", 
        "link": "https://www.upwork.com", 
        "app": "https://play.google.com/store/apps/details?id=com.upwork.android.apps.main", 
        "logo": "/Job/up.png", 
        "desc": "One of the largest platforms for freelancers to find work."
      },
      { 
        "name": "Fiverr", 
        "link": "https://www.fiverr.com", 
        "app": "https://play.google.com/store/apps/details?id=com.fiverr.fiverr", 
        "logo": "/Job/fiverr.svg", 
        "desc": "Freelance marketplace for gigs starting at $5."
      },
      { 
        "name": "Freelancer", 
        "link": "https://www.freelancer.com", 
        "app": "https://play.google.com/store/apps/details?id=com.freelancer.android.messenger", 
        "logo": "/Job/freelancer.svg", 
        "desc": "Global freelance platform for various job categories."
      },
      { 
        "name": "Toptal", 
        "link": "https://www.toptal.com", 
        "app": "https://play.google.com/store/apps/details?id=com.toptal.talent", 
        "logo": "/Job/toptal.png", 
        "desc": "Exclusive network for top freelancers in tech & design."
      },
      { 
        "name": "Truelancer", 
        "link": "https://www.truelancer.com/", 
        "app": "https://play.google.com/store/apps/details?id=com.truelancer.app", 
        "logo": "/Job/truelancer.png", 
        "desc": " Freelance Work App."
      },
      { 
        "name": "Guru", 
        "link": "https://www.guru.com", 
        "app": "https://play.google.com/store/apps/details?id=com.guru.flmarketplace", 
        "logo": "/Job/guru.png", 
        "desc": "Freelance platform for professionals across various fields."
      },
      { 
        "name": "Kwork", 
        "link": "https://kwork.com/for-sellers", 
        "app": "https://play.google.com/store/apps/details?id=ru.kwork.app", 
        "logo": "/Job/kwork.png", 
        "desc": "A new freelance platform, a fast, safe and easy way to become a freelancer or to find a service for your business needs."
      }
    ]
  ,
    "Government Jobs": [
      { 
        "name": "NCS (National Career Service)", 
        "link": "https://www.ncs.gov.in", 
        "app": "https://play.google.com/store/apps/details?id=com.ncs.android", 
        "logo": "/Job/NCS.jpg", 
        "desc": "Government job portal with IT sector job listings."
      },
      { 
        "name": "Sarkari Result", 
        "link": "https://www.sarkariresult.com", 
        "app": "https://play.google.com/store/apps/details?id=com.app.app14f269771c01", 
        "logo": "/Job/sarkariResult.png", 
        "desc": "Latest government job updates including IT sector jobs."
      },
      { 
        "name": "Sarkari Naukri", 
        "link": "https://sarkarinaukri.com/", 
        "app": "https://play.google.com/store/apps/details?id=com.jobportal.allgovernmentjob", 
        "logo": "/Job/sarkariNaukri.jpg", 
        "desc": "Latest government job updates."
      },
      {
        "name": "Employment News", 
        "link": "http://www.employmentnews.gov.in", 
        "app": "https://play.google.com/store/apps/details?id=com.govtjobs.employmentnewsapp", 
        "logo": "/Job/EmployementNews.jpg", 
        "desc": "Official source for government job openings in India."
      },
      { 
        "name": "DRDO Careers", 
        "link": "https://drdo.gov.in/drdo/careers", 
        "app": "https://play.google.com/store/apps/details?id=com.refread.drdo", 
        "logo": "/Job/DRDO.png", 
        "desc": "Defence Research and Development Organisation job openings."
      },
      { 
        "name": "ISRO Careers", 
        "link": "https://www.isro.gov.in/Careers.html", 
        "app": "https://play.google.com/store/apps/details?id=com.isro.app", 
        "logo": "/Job/ISRO.png", 
        "desc": "Indian Space Research Organisation IT job vacancies."
      },
      { 
        "name": "IBPS (IT Officer Jobs)", 
        "link": "https://www.ibps.in", 
        "app": "https://play.google.com/store/apps/details?id=com.testbook.tbapp.ibpssoitofficer", 
        "logo": "/Job/IBPS.jpg", 
        "desc": "IT sector job openings in government banks via IBPS."
      },
      { 
        "name": "NPCIL Careers", 
        "link": "https://npcilcareers.co.in", 
        "app": "https://play.google.com/store/apps/details?id=com.npcil.app", 
        "logo": "/Job/NPCIL.png", 
        "desc": "IT job opportunities in Nuclear Power Corporation of India."
      },
      { 
        "name": "UPSC (IT & Technical Jobs)", 
        "link": "https://www.upsc.gov.in", 
        "app": "https://play.google.com/store/apps/details?id=com.upsc.app", 
        "logo": "/Job/UPSC .png", 
        "desc": "Union Public Service Commission IT job postings."
      },
      { 
        "name": "Indian Railways (CRIS Jobs)", 
        "link": "https://cris.org.in", 
        "app": "https://play.google.com/store/apps/details?id=com.indianrail.thinkapps.irctc", 
        "logo": "/Job/IRCTC.png", 
        "desc": "IT job openings in the Centre for Railway Information Systems."
      }
    ]  
};

function JobPortal() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCategories = Object.keys(platforms).filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 flex flex-col items-center p-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        Job Portal
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search category..."
          className="w-full p-3 pl-5 text-lg border border-gray-300 rounded-full focus:outline-none shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full bg-white shadow-lg rounded-lg mt-2 z-10"
          >
            {filteredCategories.map((cat) => (
              <div
                key={cat}
                className="p-3 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setCategory(cat);
                  setSearch(cat);
                  setIsOpen(false);
                }}
              >
                {cat}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Job Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {category &&
          platforms[category]?.map((platform) => (
            <motion.div
              key={platform.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="bg-white p-6 shadow-lg rounded-xl text-center flex flex-col items-center transition-transform hover:scale-105 duration-300"
            >
              <img src={platform.logo} alt={platform.name} className="mb-3 w-24 h-24 rounded-full shadow-md" />
              <h2 className="text-xl font-semibold">{platform.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{platform.desc}</p>
              <div className="flex gap-3 mt-4">
                <a href={platform.app} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition">
                  Download App
                </a>
                <a href={platform.link} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                  Visit Site
                </a>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}

export default JobPortal;