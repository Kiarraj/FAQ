const FAQData = [
    {
        question: "How do I create a new task?",
        answer:[
            " To Create a new task, circle on the 'Add Task' button located in the task management interface.",
            " Fill in the required details such as task name, due date, and any additional information.",
            "Click 'Save' to create the task.",
        ],
    },
    {
         question: "Can I assign a task to someone else?",
        answer: [ 
            "Yes, you can assign a task to someone else.",
            "While creating or editing a task, you will find an 'Assignee' field.",
            "Start typing the name or email of the person you want to assign the task to, and select thier name from the suggestion",
            "The assigned person will recieve a notificatonn about the task.",
        ]
    },
    {
        question: "How can I track the progress of a task?",
        answer: [
            "To track the progress of a task, open the task details page.",
            "You will find a status section that indicates the current status of the task, such as 'Not Started', 'In Progess', or 'Completed'. ",
            "You can update the status by clicking on the corresponding option.",
            "Additionally, you can  add comments and attachments to provide moren details and updates on the task's progress.",
        ]
    },
    {
        question: "Can I set reminders for a task?",
        answer: [
            "Yes, you can set reminders for task to ensure you stay on top of your deadlines.",
            "When creating or editing a task, you will find an option ton set a reminder or due date notification.",
            "Choose the desired time or date for the reminder, and you will recieve a notification or email at the specified time to remimd you about a task."
        ]
    },
];

const FAQcontainer = document.querySelector(".faq-container");

const removeAllExpanded = () => {
    const questionContainers = document.querySelectorAll (".faq-container .question container"
    );

    questionContainers.forEach((q) => {
        q.classList.remove("expanded");
        const answerContainer = q.querySelector(".answer-container");
        answerContainer.style.maxHeight = "0"
    });
};

const displayFAQ = () => {
    FAQData.forEach(q => {

        const answerHTML = q.answer.map(a => `<div class="answer">
        <span class="answer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
              </svg>                  
        </span>
        ${a}
       </div> `)
       .join("");

        const html = `
        <div class="question"> 
        ${q.question} 
            <span class="question-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </span>
        </div>

        <div class="answer-container">
           ${answerHTML}
           </div> `;

           const questionContainer = document.createElement("div");
           questionContainer.classList.add("question-container");
           questionContainer.innerHTML = html;

           FAQcontainer.appendChild(questionContainer);

           const question = questionContainer.querySelector(".question");

           question.addEventListener("click", () => {
                if (!questionContainer.classList.contains("expanded")){
                    removeAllExpanded();
                }

            questionContainer.classList.toggle("expanded");
            const isExpanded = questionContainer.classList.contains("expanded");

            const answerContainer =
            questionContainer.querySelector(".answer-container");
            const contentHeight = answerContainer.scrollHeight;
            answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
           });

    });
};

displayFAQ();