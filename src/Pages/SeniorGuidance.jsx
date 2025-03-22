import React, { useState } from "react";
import "./SeniorGuidance.css";

const SeniorGuidance = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const users = [
    {
      name: "Sakshi Jain",
      initial: "S",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      email: "sakj2966@gmail.com",
      profilePhoto: "./seniors/sakshi.jpg",
      experience:
        "There were total 3 rounds: 1. Online Assessment with coding round  2. Communication Round 3. Interview  They ask questions like: 1. Give your introduction. 2. What projects I made ? 3. Challenges I get during making project . 4. What are my hobbies ? 5. Any questions I want to ask them.",
    },
    {
      name: "Ayushi Pawar",
      initial: "A",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      email: "ayushipawar2022@gmail.com",
      profilePhoto: "./seniors/Ayushi.png",
      experience:
        "Accenture Hiring Process: Online Assessment: Cognitive & Technical: MCQs on Aptitude, Logic, English, Cloud, Networks, and Excel. Coding Round: For those who clear the first part.Communication Round: Tests communication skills. Final Interview: Technical + HR questions. My Interview Experience: Focused mainly on my project—company, details, tech stack, and implementation.",
    },
    {
      name: "Harsh Gupta",
      initial: "H",
      companyName: "Block",
      Role: "Tech consultant ",
      salary: "9LPA Fixed + 7LPA (Esop)",
      email: "hkumargupta317@gmail.com",
      profilePhoto: "./seniors/harshgupta.jpg",
      experience: "Interview Experience: I had three rounds in my interview, which was scheduled through a LinkedIn referral. 1. First Round (Introduction & Background) Self-introduction Why consulting? My previous experience 2. Second Round (Technical & Consulting Knowledge) Questions on technical skills Consulting-related scenarios 3. Third Round (Senior Consultant Discussion) Discussion with a senior consultant Problem-solving and situational questions ",
    }, 
    {
      name: "Pawan Dabi",
      initial: "P",
      companyName: "GammaEdge",
      Role: "Associate Software Engineer",
      salary: "2.5 LPA",
      email: "dabi001pawan@gmail.com",
      profilePhoto: "./seniors/pawan.jpg",
      experience: "Total 3-4 rounds , The interview questions: , 1) Tell me about your self., 2) Theoretical and practical technical skill questions that were mentioned in resume.., 3) Most of the questions were asked regarding the project that was mentioned in the resume. These were:- , 3.1) Why this project and the idea behind it., 3.2) how this project solves the problem. , 3.3) what are the challenges faced while working on the project. , 3.4) future goal for this project. ",
    },  
    {
      name: "Manika Dutt",
      initial: "M",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      email: "manikadutt76@gmail.com",
      profilePhoto: "./seniors/manika.jpg",
      experience:
        "There were 3 Rounds: 1. Cognitive & Coding: In which questions asked based on  Aptitude, reasoning, security, cloud, networks + 2 coding questions. 2. Communication: Non-elimination round. 3. HR Interview: Asked about my group project, conflict management, teamwork experience, strengths, learning & challenges over 4 years. ",
    },
    {
      name: "Akanksha singh ",
      initial: "A",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      email: "akankshasingh2431@gmail.com",
      profilePhoto: "./seniors/akanksha.jpg",
      experience: "There were four  rounds the cognitive assessment,coding round, communication round and the interview. Questions which were asked are mentioned below: 1. My introduction ,2. Project details ,3. My role in my project ( if it's a team project).,4. Database Basics,5. Brief about testing tools ,6. And situation based questions ( decision making),7. Asked a few questions about Accenture.,8. And my hobbies ",
    },
    
    {
      name: "Skandh Jadon",
      initial: "S",
      companyName: "Accenture",
      Role: "Associate Software Engineer",
      salary: "4.5 LPA",
      email: "skandhjadon01@gmail.com",
      profilePhoto: "./seniors/Skand.png",
      experience: " Interview exp - 15 min interview in which we only talked about my 2 projects and how i tackled difficulties making those.",
    },
    {
      name: "Anjali Vishwakarma",
      initial: "A",
      companyName: "Infosys",
      Role: "System Engineer",
      salary: "3.5 LPA",
      email: "anjalivishwakarma9617@gmail.com",
      profilePhoto: "./seniors/Anjali.jpg",
      experience: "There were 2 rounds - online test followed by an interview. Questions were only based on Whatever I had mentioned In my resume + some questions on core subjects like software engineering and DBMS.",
    },
    {
      name: "Shruti Solanki",
      initial: "S",
      companyName: "Dice Enterprises",
      Role: "Frontend Devloper",
      salary: "10 LPA",
      email: "shrutisolanki2607@gmail.com",
      profilePhoto: "./seniors/shruti.jpg",
      experience: "Selection Process: Round 1: Conducted by CEO & frontend developers, focused on React.js fundamentals. Round 2: Tested DSA, React, and JavaScript. Final Round: Assessed C++ & JavaScript, included solving DSA problems in JavaScript and code analysis. Experience: Joining Dice Enterprises, a fast-paced startup, has been enriching as a frontend developer. Strong fundamentals and passion for development are key. The journey has been a continuous learning experience, improving my problem-solving and technical skills.",
    },
    {
      name: "Rajveer Choudhary",
      initial: "R",
      companyName: "Infosys",
      Role: "Software Engineer",
      salary: "3.6 LPA",
      email: "rajveer190802@gmail.com",
      profilePhoto: "./seniors/rajveer.jpg",
      experience: "After clearing the screen test, I got a mail for the on-campus interview. I only had one round in which the interviewer asked me: 1) Self-introduction 2) Project explanation & tech stack 3) SQL queries (Delete vs. Truncate, Commit & Rollback) and then Interviewer asked if I had any questions. I was nervous at first but relaxed later, Just take a deep breath and crack it!",
    },
    {
      name: "Rohit Kumar",
      initial: "R",
      companyName: "Infosys",
      Role: "System Engineer",
      salary: "3.6 LPA",
      email: "rohit.tinsel165@slmail.me",
      profilePhoto: "./seniors/rohit.jpg",
      experience: "My interview experience was pretty average. It was a single round where they asked basic programming questions, along with some OOP concepts. They also asked a few questions on databases and SQL. In addition, there were some situational and behavioral questions.",
    },
    {
      name: "Chanchala Mukati",
      initial: "C",
      companyName: "Safesend",
      Role: "Software Engineer",
      salary: "6 LPA",
      email: "chanchalamukati14@gmail.com",
      profilePhoto: "./seniors/chanchla.jpg",
      experience: "Interview Process:   1. First Round: Aptitude, reasoning, verbal ability, and 2 DSA problems.   2. Technical Round: Prime number program, normalization (1NF & 2NF), SQL JOIN query, optimized DSA problem (GFG), and project-related questions.   3. HR Round: Self-introduction, first interview experience, why SafeSend, product vs. service-based company, relocation, and family details.",
    },
    {
      name: "Aryan Sindhe",
      initial: "A",
      companyName: "Infosys",
      Role: "System Engineer",
      salary: "3.6 LPA",
      email: "aryan980shinde@gmail.com",
      profilePhoto: "./seniors/aryan.jpg",
      experience: "It was a 2 day process 1st day : apti. round  (include reasoning , maths , english) 2nd day : HR and TR (20 to 25 min interview , mostly technical, be redy with core subjects and their real time applications with a well prepared CV)",
    },
    {
      name: "Harsh Molpariya",
      initial: "H",
      companyName: "GammaEdge",
      Role: "Automation test engineer",
      salary: "6.5 LPA",
      email: "harshmoyal17502@gmail.com",
      profilePhoto: "./seniors/harsh.jpg",
      experience: "Interview Process: HR Round: Focused on communication skills. Technical Round 1: Covered basic verbal and dry-run coding questions based on the languages mentioned in my resume (Java, C, C++). Technical Round 2: Fully Java-based, including OOPs, file handling, exception handling, and multithreading. Experience: It's been almost 4 months since I joined, and my experience has been great. I have learned various new technologies and am currently exploring even more.",
    },
    {
      name: "Gautam Parmar",
      initial: "G",
      companyName: "Infosys",
      Role: "System Engineer",
      salary: "3.6 LPA",
      email: "parmargautam933@gmail.com",
      profilePhoto: "./seniors/gautam.jpg",
      experience: "Interview Process:  1. Round 1: Aptitude, reasoning, verbal ability & pseudo code questions. 2. Technical + HR Round:   - Self-introduction   - Graduation project & cloud deployment (Firebase)   - Development process (explained & drew on paper)   - Why should we hire you?   - What do you know about the company?",
    },
    {
      name: "Saurav Thoke",
      initial: "S",
      companyName: "GammaStack",
      Role: "Solution Engineer",
      salary: "4.15 LPA",
      email: "sauravthoke28@gmail.com",
      profilePhoto: "./seniors/Saurav.jpg",
      experience: "Interview Process: Coding Round: Arrays, strings, trees, backtracking (4 questions). Technical 1: Java, OOPs, 1 coding (online), binary search, bubble sort, SQL. Technical 2: 3 coding – frequency count, pattern, least combination. Experience: 2 months at GAMMASTACK, great work culture, supportive seniors, and exploring game development..",
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <h1 className="text-6xl font-bold font-serif text-center mb-8 text-gray-800">
        Senior Guidance
      </h1>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? "flipped" : ""}`}
          >
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front text-gray-800 py-7 px-4 rounded-xl transform transition-all duration-300">
                <div className="mx-auto h-32 w-32 rounded-full mb-3 shadow-md flex items-center justify-center bg-gray-100 text-blue-200 text-7xl font-semibold">
                  {user.profilePhoto ? (
                    <img
                      className="h-full w-full rounded-full"
                      src={user.profilePhoto}
                      alt={user.initial}
                    />
                  ) : (
                    <span>{user.initial}</span>
                  )}
                </div>
                <h1 className="text-2xl text-center font-bold mb-4">
                  {user.name}
                </h1>
                <h2 className="pl-6">
                  <strong>Placed in:</strong> {user.companyName}
                </h2>
                <h2 className="pl-6">
                  <strong>Role:</strong> {user.Role}
                </h2>
                <h2 className="pl-6">
                  <strong>Salary:</strong> {user.salary}
                </h2>
                <h2 className="pl-6">
                  <strong>Email:</strong> {user.email || "N/A"}
                </h2>
                <button
                  onClick={() => toggleFlip(index)}
                  className="mt-[1.85rem] w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Experience
                </button>
              </div>

              {/* Back Side */}
              <div className="card-back flex flex-col items-center justify-center rounded-xl p-6">
                <p className="px-6 mb-4">
                  {user.experience}
                </p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="w-full bg-gradient-to-r from-purple-800 to-purple-900 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Back to Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorGuidance;
