// script.js
 

 const questions = [
     {
         question: "What subjects do you enjoy the most in school? (Select all that apply)",
         options: ["Math", "Science", "English", "History", "Arts", "Technology"],
         type: "checkbox",
         scores: {
             "Math": { "school1": 2, "school2": 1, "school15": 2 }, // School matching scores
             "Science": { "school1": 2, "school3": 2, "school16": 1 },
             "English": { "school4": 2, "school5": 1, "school14": 1 },
             "History": { "school4": 2, "school6": 1 },
             "Arts": { "school7": 2, "school8": 2, "school9": 1 },
             "Technology": { "school10": 2, "school11": 2, "school15": 1 }
         }
     },
     {
         question: "Are you interested in a career in healthcare or medicine?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school16": 2 },
             "No": {}
         }
     },
  {
         question: "Do you prefer learning by: (a) Doing hands-on activities, (b) Listening to lectures, (c) Working in groups, (d) Independent study",
         options: ["a", "b", "c", "d"],
         type: "radio",
         scores: {
             "a": { "school11": 2, "school10": 1 },
             "b": { "school14": 2, "school4": 1 },
             "c": { "school5": 2, "school17": 1 },
             "d": { "school6": 2, "school13": 1}
         }
     },
     {
         question: "Are you interested in technology and engineering?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school10": 2, "school11": 2, "school15": 2 },
             "No": {}
         }
     },
     {
         question: "Do you enjoy creative activities like music, drama, or art?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school7": 2, "school8": 2, "school9": 2 },
             "No": {}
         }
     },
  {
         question: "Are you passionate about sports and being physically active?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school1": 1, "school2": 2, "school3": 1 },
             "No": {}
         }
     },
     {
         question: "Do you like solving complex problems and puzzles?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school13": 2, "school15": 1 },
             "No": {}
         }
     },
     {
         question: "Are you interested in learning a new language?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school5": 2 },
             "No": {}
         }
     },
     {
         question: "Do you care about making a difference in your community or the world?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school9": 2, "school17": 2 },
             "No": {}
         }
     },
     {
         question: "Do you see yourself attending a 4-year college?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school4": 1, "school6": 1, "school14": 2 },
             "No": {}
         }
     },
  {
         question: "Are you interested in gaining technical skills for a trade?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school11": 2, "school10": 2 },
             "No": {}
         }
     },
     {
         question: "Do you prefer a small school environment or a large school environment?",
         options: ["Small", "Large"],
         type: "radio",
         scores: {
             "Small": { "school12": 2, "school13": 1 },
             "Large": { "school1": 1, "school2": 1, "school3": 1 }
         }
     },
     {
         question: "Are you interested in a rigorous academic program with Advanced Placement (AP) courses?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school4": 2, "school6": 2, "school14": 1 },
             "No": {}
         }
     },
  {
         question: "Do you want to be part of a school with a long history and tradition?",
         options: ["Yes", "No"],
         type: "radio",
         scores: {
             "Yes": { "school2": 1, "school3": 1, "school4": 2 },
             "No": {}
         }
     },
     {
         question: "How important is it to you to have a school close to your home?",
         options: ["Very Important", "Important", "Not Important"],
         type: "radio",
         scores: {
             "Very Important": { "school12": 2 },
             "Important": { "school17": 1 },
             "Not Important": {}
         }
     },
     // ... more questions
 ];
 

 const schools = {
     "school1": { name: "Bulkeley High School", /* ... */ },
     "school2": { name: "Hartford Public High School", /* ... */ },
  "school3": { name: "Weaver High School", /* ... */ },
  "school4": { name: "Global Communications Academy", /* ... */ },
  "school5": { name: "Classical Magnet School", /* ... */ },
  "school6": { name: "Sports and Medical Sciences Academy", /* ... */ },
  "school7": { name: "Hartford Art School", /* ... */ },
  "school8": { name: "Greater Hartford Academy of the Arts", /* ... */ },
  "school9": { name: "Academy of Engineering and Green Technology", /* ... */ },
  "school10": { name: "A.I. Prince Technical High School", /* ... */ },
  "school11": { name: "E.C. Goodwin Technical High School", /* ... */ },
  "school12": { name: "University High School of Science and Technology", /* ... */ },
  "school13": { name: "Breakthrough Magnet School South", /* ... */ },
  "school14": { name: "Achievement First Hartford High School", /* ... */ },
  "school15": { name: "Capital Preparatory Magnet School", /* ... */ },
  "school16": { name: "Medical Professions Academy", /* ... */ },
  "school17": { name: "Pathways Academy of Technology and Design", /* ... */ },
     // ... more schools with their specific attributes
 };
 

 let currentQuestionIndex = 0;
 let studentScores = {};
 

 const questionContainer = document.getElementById('question-container');
 const nextButton = document.getElementById('next-button');
 const resultsContainer = document.getElementById('results-container');
 const schoolRecommendations = document.getElementById('school-recommendations');
 

 function showQuestion() {
     const question = questions[currentQuestionIndex];
     questionContainer.innerHTML = `
         <p>${currentQuestionIndex + 1}. ${question.question}</p>
         <div class="options"></div>
     `;
 

     const optionsContainer = questionContainer.querySelector('.options');
 

     question.options.forEach(option => {
         let input;
         if (question.type === 'checkbox') {
             input = document.createElement('input');
             input.type = 'checkbox';
             input.value = option;
             input.name = `question-${currentQuestionIndex}`;
 

             let label = document.createElement('label');
             label.textContent = option;
             optionsContainer.appendChild(input);
             optionsContainer.appendChild(label);
             optionsContainer.appendChild(document.createElement('br'));
         } else if (question.type === 'radio') {
             input = document.createElement('input');
             input.type = 'radio';
             input.value = option;
             input.name = `question-${currentQuestionIndex}`;
 

             let label = document.createElement('label');
             label.textContent = option;
             optionsContainer.appendChild(input);
             optionsContainer.appendChild(label);
             optionsContainer.appendChild(document.createElement('br'));
         }
     });
 }
 

 function getSelectedValues() {
     const question = questions[currentQuestionIndex];
     if (question.type === 'checkbox') {
         const selectedOptions = [];
         const inputs = document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]:checked`);
         inputs.forEach(input => selectedOptions.push(input.value));
         return selectedOptions;
     } else if (question.type === 'radio') {
         const selectedOption = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
         return selectedOption ? selectedOption.value : null;
     }
 }
 

 function calculateScores(selectedValues) {
     const question = questions[currentQuestionIndex];
 

     if (question.type === 'checkbox') {
         selectedValues.forEach(value => {
             if (question.scores[value]) {
                  for (const school in question.scores[value]) {
                      studentScores[school] = (studentScores[school] || 0) + question.scores[value][school];
                  }
             }
         });
     } else if (question.type === 'radio') {
         if (question.scores[selectedValues]) {
             for (const school in question.scores[selectedValues]) {
                  studentScores[school] = (studentScores[school] || 0) + question.scores[selectedValues][school];
             }
         }
     }
 }
 

 function showResults() {
     resultsContainer.style.display = 'block';
     // Sort schools by score
     const sortedSchools = Object.entries(studentScores)
         .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
         .slice(0, 5); // Get top 5 schools
 

     if (sortedSchools.length === 0) {
         schoolRecommendations.innerHTML = "No perfect match found.";
         return;
     }
