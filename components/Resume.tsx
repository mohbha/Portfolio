import React from 'react';
import { USER_PROFILE, EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

interface ResumeProps {
  id?: string;
  hideActionButtons?: boolean;
}

export const Resume: React.FC<ResumeProps> = ({ id = "resume-content", hideActionButtons = false }) => {
  
  const handleDownload = () => {
    // @ts-ignore
    const element = document.getElementById(id);
    const opt = {
      margin: 0.5,
      filename: 'Mohan_Jha_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    // @ts-ignore
    if (window.html2pdf) {
      // @ts-ignore
      window.html2pdf().set(opt).from(element).save();
    } else {
      alert("PDF Generator is loading, please try again in a second.");
    }
  };

  return (
    <div className="max-w-[210mm] mx-auto">
      
      {/* Action Bar - Only visible on screen */}
      {!hideActionButtons && (
        <div className="flex justify-between items-center mb-8 print:hidden" data-html2canvas-ignore="true">
          <h2 className="text-3xl font-bold text-white">Resume</h2>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>
      )}

      {/* Resume Paper */}
      <div id={id} className="bg-white text-black p-8 md:p-12 shadow-xl print:shadow-none min-h-[297mm]">
        
        {/* Header - Text Only */}
        <div className="border-b-2 border-black pb-6 mb-6">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">{USER_PROFILE.name}</h1>
          <p className="text-lg font-medium text-gray-700 mb-4">{USER_PROFILE.title}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin size={14} /> {USER_PROFILE.location}
              </div>
              <div className="flex items-center gap-1">
                <Phone size={14} /> {USER_PROFILE.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} /> {USER_PROFILE.email}
              </div>
              <div className="flex items-center gap-1">
                <Github size={14} /> github.com/mohbha
              </div>
              <div className="flex items-center gap-1">
                <Linkedin size={14} /> linkedin.com/in/mohanjha321
              </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Professional Summary</h3>
          <p className="text-sm leading-relaxed text-gray-800 text-justify">
            Aspiring DevOps Engineer with a strong foundation in Java (DSA), AWS-certified (Cloud Foundations & Architecting), and hands-on experience with Git, Docker, and Linux. Actively building CI/CD and cloud deployment skills to contribute in production-grade environments. Currently managing Exchange Server infrastructure at PSB Bank.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">Experience</h3>
          <div className="space-y-5">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">{exp.company}</h4>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <div className="text-gray-800 italic mb-2 text-sm font-medium">{exp.role}</div>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  {exp.description.split('. ').map((point, idx) => (
                     point && <li key={idx} className="pl-1 leading-snug">{point.replace('.', '')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Technical Skills</h3>
          <div className="grid grid-cols-1 gap-y-2 text-sm">
             <div className="flex">
               <span className="font-bold w-32 shrink-0">Languages:</span> 
               <span>Java, JavaScript, HTML, CSS, Bash/Shell</span>
             </div>
             <div className="flex">
               <span className="font-bold w-32 shrink-0">Cloud & Ops:</span> 
               <span>AWS, Docker, Git, Linux (RHEL/Ubuntu)</span>
             </div>
             <div className="flex">
               <span className="font-bold w-32 shrink-0">Infrastructure:</span> 
               <span>Exchange Server, Active Directory</span>
             </div>
             <div className="flex">
               <span className="font-bold w-32 shrink-0">Databases:</span> 
               <span>SQL, DBMS</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
           {/* Education */}
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Education</h3>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="mb-2">
                  <div className="font-bold text-sm">{edu.institution}</div>
                  <div className="text-sm text-gray-800">{edu.degree}</div>
                  <div className="text-xs text-gray-500 mt-1">{edu.year} • CGPA: {edu.score}</div>
                </div>
              ))}
           </div>

           {/* Certifications */}
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Certifications</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{cert.name}</span> <span className="text-gray-500 text-xs">- {cert.issuer}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Achievements */}
        <div>
           <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Achievements</h3>
           <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
             {ACHIEVEMENTS.map((ach, idx) => (
               <li key={idx}>{ach}</li>
             ))}
           </ul>
        </div>

      </div>
    </div>
  );
};