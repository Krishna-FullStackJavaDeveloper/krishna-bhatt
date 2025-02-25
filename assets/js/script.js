//project page
const projects = [
    {
        title: "Tea Board",
        details: [
            "Spearheaded the design and implementation of project modules utilizing ReactJS Function Components and Material UI.",
            "Developed robust RESTful APIs for multiple modules.",
            "Conducted seminars on ReactJS to upskill colleagues."
        ],
        techStack: "Java 17, Spring Boot, ReactJS, MS SQL, RESTful Swagger API, GitHub, Docker Compose, Microservices."
    },
    {
        title: "NPD Web App",
        details: [
            "Engineered and integrated Swagger RESTful APIs.",
            "Leveraged React Query for effective data fetching and state management.",
            "Designed dynamic data tables to visualize JSON parsed data."
        ],
        techStack: "Java 17, JPA, Spring Boot, ReactJS, PostgreSQL, RESTful API, SVN, GitHub, Microservices, Docker Compose."
    },
    {
        title: "Gail",
        details: [
            "Led the development of a comprehensive web application for auctions and tenders.",
            "Conducted thorough testing of all module units.",
            "Assisted team members in troubleshooting queries."
        ],
        techStack: "Java, Spring MVC, JPA, Servlet, jQuery, JavaScript, MsSQL, SVN."
    },
    {
        title: "E-Signer",
        details: [
            "Developed a secure web application for legal document management.",
            "Designed and implemented RESTful APIs with Java Spring Boot.",
            "Integrated APIs with ReactJS for seamless data handling."
        ],
        techStack: "Java Spring Boot, ReactJS (Material UI, React Router, Formik), MsSQL, RESTful API, SVN."
    },
    {
        title: "IMS Insurance Management System",
        description: [
            "Developed backend using Java Spring Boot and frontend with Angular.",
            "Employed test-driven development with JUnit.",
            "Adopted Agile methodologies for iterative improvements."
        ],
        techStack: "Java Spring Boot, Angular 10, MySQL, RESTful Swagger API, JUnit, BitBucket, JIRA."
    },
    {
        title: "ELD PinPoint Driver Tracker",
        description: [
            "Implemented real-time vehicle tracking using WebSockets.",
            "Integrated PostgreSQL and optimized SQL queries.",
            "Followed Agile methodologies for continuous improvements."
        ],
        techStack: "Java Spring Boot, Angular 10, MySQL, RESTful Swagger API, BitBucket, JIRA, JWT."
    },
    {
        title: "Art Asylum (Design It Your Way)",
        description: [
            "Developed an online platform for artists to showcase and sell their artwork."
        ],
        techStack: "Java 8, JSP, Servlet, third-party framework for online canvas."
    }
];

let currentPage = 1;
const itemsPerPage = 2;

function displayProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let paginatedProjects = projects.slice(startIndex, endIndex);
    
    paginatedProjects.forEach(project => {
        let projectItem = document.createElement("div");
        projectItem.classList.add("projects-item");
        
        projectItem.innerHTML = `
        <div class="left-content">
            <h2>${project.title}</h2>
        </div>
        <div class="right-content">
            <ul>${(project.details || project.description || []).map(detail => `<li>${detail}</li>`).join('')}</ul>
            <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        </div>
    `;
        
        container.appendChild(projectItem);
    });

    document.getElementById("pageNumber").innerText = currentPage;
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(projects.length / itemsPerPage)) {
        currentPage++;
        displayProjects();
    }
});

displayProjects();

// Staggered animation function
function staggeredAnimation() {
    const items = document.querySelectorAll('.experience-item'); // Select all experience items
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Set a staggered delay for each item
        item.classList.add('fade-inside'); // Add the class to trigger the fade-in animation
    });
}

// Trigger the staggered animation on page load
window.addEventListener('load', staggeredAnimation);
