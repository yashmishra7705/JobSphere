// ==========================================
// JOBSPHERE - MAIN JAVASCRIPT
// ==========================================


// ===============================
// RESUME UPLOAD
// ===============================

const resumeUpload = document.getElementById("resumeUpload");
const resumeName = document.getElementById("resumeName");

if (resumeUpload && resumeName) {

    resumeUpload.addEventListener("change", function () {

        if (resumeUpload.files.length > 0) {

            resumeName.textContent =
                "Selected Resume: " + resumeUpload.files[0].name;

        } else {

            resumeName.textContent = "";

        }

    });

}


// ===============================
// JOB SEARCH
// ===============================

const searchJobsBtn = document.getElementById("searchJobsBtn");

if (searchJobsBtn) {

    searchJobsBtn.addEventListener("click", function () {

        const searchBox = document.getElementById("jobSearch");
        const locationBox = document.getElementById("jobLocation");
        const typeBox = document.getElementById("jobType");

        const searchText =
            searchBox ? searchBox.value.toLowerCase().trim() : "";

        const locationText =
            locationBox ? locationBox.value.toLowerCase() : "";

        const typeText =
            typeBox ? typeBox.value.toLowerCase() : "";

        const jobs = document.querySelectorAll(".job-card");

        let found = 0;

        jobs.forEach(function (job) {

            const jobText = job.textContent.toLowerCase();

            const searchMatch =
                searchText === "" || jobText.includes(searchText);

            const locationMatch =
                locationText === "" || jobText.includes(locationText);

            const typeMatch =
                typeText === "" || jobText.includes(typeText);

            if (searchMatch && locationMatch && typeMatch) {

                job.style.display = "flex";
                found++;

            } else {

                job.style.display = "none";

            }

        });

        if (found === 0) {

            alert("No jobs found!");

        }

    });

}


// ===============================
// COMPANY SEARCH
// ===============================

const companySearchBtn =
    document.querySelector(".company-search button");

if (companySearchBtn) {

    companySearchBtn.addEventListener("click", function () {

        const searchBox =
            document.getElementById("companySearch");

        const industryBox =
            document.getElementById("companyIndustry");

        const searchText =
            searchBox ? searchBox.value.toLowerCase().trim() : "";

        const industryText =
            industryBox ? industryBox.value.toLowerCase() : "";

        const companies =
            document.querySelectorAll(".company-card");

        let found = 0;

        companies.forEach(function (company) {

            const companyText =
                company.textContent.toLowerCase();

            const searchMatch =
                searchText === "" ||
                companyText.includes(searchText);

            const industryMatch =
                industryText === "" ||
                companyText.includes(industryText);

            if (searchMatch && industryMatch) {

                company.style.display = "block";
                found++;

            } else {

                company.style.display = "none";

            }

        });

        if (found === 0) {

            alert("No companies found!");

        }

    });

}


// ===============================
// SKILL TEST
// ===============================

function startTest(category) {

    alert("Starting " + category + " Skill Test!");

}


// ===============================
// CAREER AI SUGGESTIONS
// ===============================

function aiSuggestion(message) {

    const input =
        document.getElementById("aiInput");

    if (!input) return;

    input.value = message;

    sendAIMessage();

}


// ===============================
// CAREER AI CHAT
// ===============================

function sendAIMessage() {

    const input =
        document.getElementById("aiInput");

    const chat =
        document.getElementById("aiChat");

    if (!input || !chat) return;

    const message =
        input.value.trim();

    if (message === "") return;


    // USER MESSAGE

    const userMessage =
        document.createElement("div");

    userMessage.className = "ai-message";

    userMessage.innerHTML = `
        <div class="message-avatar">You</div>

        <div class="message-content">
            <strong>You</strong>
            <p>${message}</p>
        </div>
    `;

    chat.appendChild(userMessage);


    // AI MESSAGE

    const aiMessage =
        document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.innerHTML = `
        <div class="message-avatar">AI</div>

        <div class="message-content">
            <strong>Career AI</strong>

            <p>
                That's a great career goal!
                I recommend improving your skills,
                building projects and taking relevant
                skill tests to become job-ready.
            </p>

        </div>
    `;

    chat.appendChild(aiMessage);


    input.value = "";

    chat.scrollTop = chat.scrollHeight;

}
// ===============================
// JOB APPLICATION
// ===============================

const applicationForm =
    document.getElementById("applicationForm");

if (applicationForm) {

    applicationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("applicantName").value.trim();

        const email =
            document.getElementById("applicantEmail").value.trim();

        const phone =
            document.getElementById("applicantPhone").value.trim();

        const resume =
            document.getElementById("applicantResume").files.length;

        if (!name || !email || !phone || resume === 0) {

            alert("Please fill all required fields.");

            return;
        }

        const successBox =
    document.getElementById("applicationSuccess");

const successMessage =
    document.getElementById("successMessage");

const selectedJobText =
    document.getElementById("selectedJob");

if (successBox && successMessage) {

    successMessage.innerHTML =
        "Thank you, <strong>" + name +
        "</strong>! Your application has been received successfully.";

    applicationForm.style.display = "none";

    successBox.style.display = "block";
}

applicationForm.reset();

    });

}
// ===============================
// SELECTED JOB DETAILS
// ===============================

const selectedJob = document.getElementById("selectedJob");

if (selectedJob) {

    const params = new URLSearchParams(window.location.search);

    const job = params.get("job");
    const company = params.get("company");

    if (job && company) {

        selectedJob.innerHTML =
            "Applying for <strong>" + job +
            "</strong> at <strong>" + company + "</strong>";

    }

}
// ===============================
// HOMEPAGE JOB SEARCH
// ===============================

const homeSearchBtn =
    document.getElementById("homeSearchBtn");

if (homeSearchBtn) {

    homeSearchBtn.addEventListener("click", function () {

        const title =
            document.getElementById("homeJobTitle").value.trim();

        const qualification =
            document.getElementById("homeQualification").value.trim();

        const location =
            document.getElementById("homeLocation").value;

        const params = new URLSearchParams();

        if (title) {
            params.set("search", title);
        }

        if (qualification) {
            params.set("qualification", qualification);
        }

        if (location) {
            params.set("location", location);
        }

        window.location.href =
            "jobs.html?" + params.toString();

    });

}
// ===============================
// HOMEPAGE SEARCH RESULTS
// ===============================

if (window.location.pathname.includes("jobs.html")) {

    const params = new URLSearchParams(window.location.search);

    const searchText =
        (params.get("search") || "").toLowerCase().trim();

    const qualification =
        (params.get("qualification") || "").toLowerCase().trim();

    const location =
        (params.get("location") || "").toLowerCase().trim();

    if (searchText || qualification || location) {

        const jobs =
            document.querySelectorAll(".job-card");

        let found = 0;

        jobs.forEach(function(job) {

            const jobText =
                job.textContent.toLowerCase();

            const searchMatch =
                !searchText ||
                jobText.includes(searchText);

            const qualificationMatch =
                !qualification ||
                jobText.includes(qualification);

            const locationMatch =
                !location ||
                jobText.includes(location);

            if (
                searchMatch &&
                qualificationMatch &&
                locationMatch
            ) {

                job.style.display = "flex";
                found++;

            } else {

                job.style.display = "none";

            }

        });

        if (found === 0) {

            alert("No jobs found for your search.");

        }

    }

}


