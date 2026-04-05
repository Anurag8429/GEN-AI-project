🤖 AI Interview Preparation & Resume Generator

A full-stack AI-powered platform that helps candidates prepare for job interviews by analyzing their resume and job description.
The system generates structured interview reports including technical questions, behavioral questions, skill gap analysis, and a personalized preparation plan.
It also generates an optimized resume tailored to the job description.


🚀 Project Highlights
AI-Powered Candidate Analysis – Automatically analyzes resumes and job descriptions to generate interview questions, skill gap insights, and preparation plans.
Generative AI Integration – Uses Google Gemini to generate structured interview reports and tailored resumes.
End-to-End Automation – Handles resume upload, PDF parsing, AI inference, and report generation in a single workflow.
Backend API Architecture – Built scalable REST APIs using Node.js and Express.js.
Persistent Data Storage – Stores interview reports and candidate insights using MongoDB.


⚠️ Problem Statement
Many candidates struggle to prepare for interviews because they don't know:

what questions might be asked
which skills they are missing for a job
how well their resume matches the job description

This project solves that problem by using Generative AI to automatically analyze candidate profiles and provide personalized interview preparation guidance.


✨ Features
Upload resume in PDF format
Extract resume text automatically
Analyze resume and job description using AI
Generate technical interview questions
Generate behavioral interview questions
Identify skill gaps
Provide a personalized preparation plan
Generate an AI-optimized resume
Store reports for later access


⚙️ System Workflow
User uploads a resume PDF and provides:
self description
job description
The backend extracts text from the resume using a PDF parsing library.
Resume content and job description are sent to Gemini AI.
The AI generates a structured interview report containing:
match score
technical interview questions
behavioral interview questions
skill gap analysis
preparation plan
The generated report is stored in MongoDB.
The system can also generate a customized resume tailored to the job description.


🏗 System Architecture
User
 ↓
Upload Resume + Job Description
 ↓
Backend API (Node.js / Express)
 ↓
PDF Parsing
 ↓
Gemini AI Processing
 ↓
Interview Report Generation
 ↓
MongoDB Storage
 ↓
Return Interview Insights + Resume


⚙️ Technical Highlights
• 🚀 Generative AI Integration
Uses Google Gemini to analyze resumes and generate structured interview insights.

• 🧩 Backend API Architecture
Built scalable REST APIs using Node.js and Express.js.

• 📄 PDF Resume Processing
Extracts resume content automatically using PDF parsing libraries.

• 🗄 Database Storage
Stores interview reports and user data using MongoDB.

• 🔄 End-to-End Workflow
Handles resume upload, AI processing, report generation, and data storage seamlessly.


API Endpoints
Generate Interview Report
POST /api/interview

Request Body:

resume (PDF file)
selfDescription
jobDescription

Response:

{
  matchScore,
  technicalQuestions,
  behavioralQuestions,
  skillGaps,
  preparationPlan
}

Get Interview Report
GET /api/interview/report/:interviewId

Returns a previously generated interview report.

Generate Resume PDF
POST /api/interview/resume/pdf/:interviewReportId

Generates an AI-optimized resume based on candidate profile and job description.


Example Use Case
A candidate applying for a Backend Developer role uploads their resume and job description.

The system automatically generates:

Interview questions likely to be asked
Skills the candidate should improve
A structured interview preparation roadmap
An optimized resume aligned with the job role

📈 Future Improvements
Mock interview simulation
Voice-based AI interviews
ATS resume scoring
Company-specific interview preparation
Frontend dashboard for candidates
Author

Anurag Kumar
Integrated MSc Mathematics – NIT Rourkela






