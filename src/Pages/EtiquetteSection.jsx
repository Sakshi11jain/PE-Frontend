import React from "react";

const etiquetteList = {
  do: [
    { id: 1, title: "Research the Company", description: "Understand the company's mission, values, and recent achievements to show genuine interest." },
    { id: 2, title: "Dress Appropriately", description: "Wear formal or business casual attire based on the company's culture." },
    { id: 3, title: "Arrive on Time", description: "Plan your journey to reach the interview location at least 10 minutes early." },
    { id: 4, title: "Be Polite and Confident", description: "Greet everyone with a smile and maintain good body language throughout the interview." },
    { id: 5, title: "Prepare Questions", description: "Have a few thoughtful questions ready to ask about the company or role." },    { id: 6, title: "Maintain Eye Contact", description: "Show confidence by maintaining appropriate eye contact during conversations." },
    { id: 7, title: "Practice Common Questions", description: "Prepare for frequently asked questions to articulate your responses effectively." },
    { id: 8, title: "Listen Carefully", description: "Pay attention to the questions and respond accordingly." },
    { id: 9, title: "Show Enthusiasm", description: "Express genuine enthusiasm for the role and company." },
    { id: 10, title: "Highlight Relevant Skills", description: "Emphasize the skills and experiences most relevant to the role." },
    { id: 11, title: "Bring Copies of Your Resume", description: "Carry a few printed copies of your resume to share if needed." },
    { id: 12, title: "Follow Up", description: "Send a thank-you email after the interview to show appreciation." },
    { id: 13, title: "Stay Calm", description: "Handle unexpected questions or situations calmly and confidently." },
    { id: 14, title: "Turn Off Your Phone", description: "Ensure your phone is silent or off to avoid distractions." },
    { id: 15, title: "Prepare a Portfolio", description: "Bring a portfolio of your work, if applicable." },
    { id: 16, title: "Know Your Resume", description: "Be prepared to discuss any aspect of your resume in detail." },
    { id: 17, title: "Understand the Job Role", description: "Have a clear understanding of the job description and its requirements." },
    { id: 18, title: "Ask for Clarification", description: "If you don’t understand a question, ask for clarification politely." },
    { id: 19, title: "Practice Good Posture", description: "Sit up straight to convey confidence and interest." },
    { id: 20, title: "Show Gratitude", description: "Thank the interviewer for their time and the opportunity." },
    { id: 21,title: "Be Honest",description: "Always provide truthful answers during the interview. If you don’t know something, admit it and express your willingness to learn."},
    

  ],
  dont: [
    { id: 1, title: "Be Late", description: "Arriving late leaves a bad impression." },
    { id: 2, title: "Interrupt the Interviewer", description: "Always wait for the interviewer to finish before speaking." },
    { id: 3, title: "Show Overconfidence", description: "Be confident, but avoid sounding arrogant." },
    { id: 4, title: "Bring Distracting Items", description: "Ensure your phone is silent and avoid distractions." },
 
    { id: 6, title: "Speak Negatively About Past Employers", description: "Refrain from making negative comments about previous employers or colleagues." },
    { id: 7, title: "Fidget", description: "Avoid excessive movements or gestures that can show nervousness." },
    { id: 8, title: "Lack Preparation", description: "Not preparing for common interview questions shows disinterest." },
    { id: 9, title: "Talk Over the Interviewer", description: "Interruptions can seem disrespectful." },
    { id: 10, title: "Fail to Research the Company", description: "Lack of knowledge about the company can lead to rejection." },
    { id: 11, title: "Avoid Eye Contact", description: "Not making eye contact may be seen as a lack of confidence." },
    { id: 12, title: "Give Vague Responses", description: "Provide clear and concise answers to questions." },
    { id: 13, title: "Forget Important Documents", description: "Always carry necessary documents like your resume and ID proof." },
    { id: 14, title: "Speak Too Quietly", description: "Speak clearly and confidently to ensure you're heard." },
    { id: 15, title: "Be Disrespectful", description: "Rude behavior will harm your chances of being selected." },
    { id: 16, title: "Show Lack of Interest", description: "Engage actively in the conversation." },
    { id: 17, title: "Overuse Filler Words", description: "Avoid excessive use of words like 'um' and 'like'." },
  
    { id: 19, title: "Bring Up Salary Too Early", description: "Discussing salary too soon can leave a bad impression." },
    { id: 20, title: "Be Unprofessional", description: "Maintain professional conduct throughout the interview." },

  ],
};

function EtiquetteSection() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-20 pb-12 bg-gradient-to-br from-blue-200 to-blue-50 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-8 text-center">
        ✨ Interview Etiquette ✨
      </h1>
      <div className="w-full max-w-6xl bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/2 bg-green-100 p-6 rounded-lg shadow h-96 flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
            ✅ Do's
          </h2>
          <ul className="space-y-4 overflow-y-auto flex-1">
            {etiquetteList.do.map((item) => (
              <li key={item.id} className="bg-white p-4 rounded-md shadow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 bg-red-100 p-6 rounded-lg shadow h-96 flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
            ❌ Don'ts
          </h2>
          <ul className="space-y-4 overflow-y-auto flex-1">
            {etiquetteList.dont.map((item) => (
              <li key={item.id} className="bg-white p-4 rounded-md shadow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EtiquetteSection;
