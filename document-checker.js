// ==========================================
// DOCUMENT CHECKER DATA
// ==========================================

const documentData = {

    // ================= GOVERNMENT =================

    aadhaar: {
        name: "Aadhaar Services",
        icon: "🪪",
        documents: [
            "Aadhaar Card / Aadhaar Number",
            "Registered Mobile Number",
            "Supporting Identity Proof if required"
        ]
    },

    pan: {
        name: "PAN Card",
        icon: "💳",
        documents: [
            "Aadhaar Card",
            "Mobile Number",
            "Passport Size Photo",
            "Signature",
            "Date of Birth Proof"
        ]
    },

    passport: {
        name: "Passport",
        icon: "🌍",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Date of Birth Proof",
            "Passport Size Photo",
            "Mobile Number",
            "Educational / Supporting Documents if required"
        ]
    },

    driving: {
        name: "Driving Licence",
        icon: "🚗",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Date of Birth Proof",
            "Passport Size Photo",
            "Mobile Number"
        ]
    },

    voter: {
        name: "Voter ID",
        icon: "🗳️",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Date of Birth Proof",
            "Passport Size Photo",
            "Mobile Number"
        ]
    },

    eshram: {
        name: "E-Shram Card",
        icon: "👷",
        documents: [
            "Aadhaar Card",
            "Aadhaar Linked Mobile Number",
            "Bank Account Details",
            "Occupation Details"
        ]
    },

    ration: {
        name: "Ration Card",
        icon: "🛒",
        documents: [
            "Aadhaar Cards of Family Members",
            "Address Proof",
            "Family Details",
            "Mobile Number",
            "Supporting Documents if required"
        ]
    },

    fssai: {
        name: "FSSAI License",
        icon: "🍴",
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Business Address Proof",
            "Business Details",
            "Passport Size Photo",
            "Bank Details if required"
        ]
    },

    zomato: {
        name: "Zomato / Swiggy Onboarding",
        icon: "🛵",
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Bank Account Details",
            "Mobile Number",
            "Restaurant / Business Details",
            "Food License if required"
        ]
    },


    // ================= CERTIFICATES =================

    community: {
        name: "Community Certificate",
        icon: "📜",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Parent / Family Community Certificate if available",
            "Family Details",
            "Mobile Number"
        ]
    },

    income: {
        name: "Income Certificate",
        icon: "💰",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Income Details",
            "Family Details",
            "Mobile Number"
        ]
    },

    nativity: {
        name: "Nativity Certificate",
        icon: "🏠",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Birth Certificate / School Records",
            "Parent Documents if required",
            "Mobile Number"
        ]
    },

    obc: {
        name: "OBC Certificate",
        icon: "📄",
        documents: [
            "Aadhaar Card",
            "Community Certificate",
            "Income Certificate",
            "Address Proof",
            "Mobile Number"
        ]
    },

    patm: {
        name: "Patm Certificate",
        icon: "📃",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Relevant Supporting Documents",
            "Mobile Number"
        ]
    },

    firstgraduate: {
        name: "First Graduate Certificate",
        icon: "🎓",
        documents: [
            "Aadhaar Card",
            "Family Members' Educational Details",
            "Address Proof",
            "Community Certificate if required",
            "Mobile Number"
        ]
    },

    legalheir: {
        name: "Legal Heir Certificate",
        icon: "⚖️",
        documents: [
            "Deceased Person's Death Certificate",
            "Aadhaar Cards of Legal Heirs",
            "Address Proof",
            "Relationship Proof",
            "Family Details"
        ]
    },

    unmarried: {
        name: "Unmarried Certificate",
        icon: "📜",
        documents: [
            "Aadhaar Card",
            "Address Proof",
            "Birth Certificate / School Certificate",
            "Passport Size Photo",
            "Mobile Number"
        ]
    },

    intercaste: {
        name: "Intercaste Certificate",
        icon: "📑",
        documents: [
            "Aadhaar Card",
            "Parents' Community Certificates",
            "Address Proof",
            "Marriage Certificate if applicable",
            "Mobile Number"
        ]
    },


    // ================= REGISTRATION =================

    marriage: {
        name: "Marriage Registration",
        icon: "💍",
        documents: [
            "Bride Aadhaar Card",
            "Groom Aadhaar Card",
            "Age Proof",
            "Address Proof",
            "Marriage Photo",
            "Marriage Invitation / Supporting Proof"
        ]
    },

    pattachitta: {
        name: "Patta / Chitta",
        icon: "🏡",
        documents: [
            "Patta Number",
            "Survey Number",
            "Owner Aadhaar Card",
            "Property Details",
            "Relevant Land Documents"
        ]
    },

    ec: {
        name: "EC / Villangam",
        icon: "📋",
        documents: [
            "Property Details",
            "Survey Number",
            "Document Number if available",
            "Owner Details",
            "Relevant Registration Details"
        ]
    },

    landsurvey: {
        name: "Land Surveyor Apply",
        icon: "📐",
        documents: [
            "Aadhaar Card",
            "Land Documents",
            "Patta / Chitta",
            "Survey Number",
            "Address Proof"
        ]
    },

    pattaname: {
        name: "Patta Name Transfer",
        icon: "🏠",
        documents: [
            "Aadhaar Card",
            "Sale Deed / Property Document",
            "Patta Details",
            "EC if required",
            "Supporting Land Documents"
        ]
    },


    // ================= EXAMS =================

    tnpsc: {
        name: "TNPSC",
        icon: "🏛️",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Community Certificate if applicable",
            "Mobile Number",
            "Email ID"
        ]
    },

    banking: {
        name: "Banking Exams",
        icon: "🏦",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Mobile Number",
            "Email ID"
        ]
    },

    rrb: {
        name: "RRB",
        icon: "🚆",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Community Certificate if applicable",
            "Mobile Number",
            "Email ID"
        ]
    },

    ssc: {
        name: "SSC",
        icon: "📝",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Mobile Number",
            "Email ID"
        ]
    },

    neet: {
        name: "NEET",
        icon: "🩺",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "10th Marksheet",
            "Educational Details",
            "Mobile Number",
            "Email ID"
        ]
    },

    jee: {
        name: "JEE",
        icon: "🎓",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "10th Marksheet",
            "Educational Details",
            "Mobile Number",
            "Email ID"
        ]
    },

    upsc: {
        name: "UPSC",
        icon: "🏛️",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Category Certificate if applicable",
            "Mobile Number",
            "Email ID"
        ]
    },

    postoffice: {
        name: "Post Office Exams",
        icon: "📮",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Community Certificate if applicable",
            "Mobile Number"
        ]
    },


    // ================= EDUCATION =================

    onlineapplication: {
        name: "Online Application",
        icon: "💻",
        documents: [
            "Aadhaar Card",
            "Passport Size Photo",
            "Signature",
            "Educational Certificates",
            "Mobile Number",
            "Email ID"
        ]
    },

    printscan: {
        name: "Print / Scan / Xerox",
        icon: "🖨️",
        documents: [
            "Original Document or Digital File",
            "USB Drive / Mobile File if applicable"
        ]
    },

    resume: {
        name: "Resume / Typing",
        icon: "📄",
        documents: [
            "Educational Details",
            "Personal Details",
            "Skills",
            "Experience Details if any",
            "Certificates if available",
            "Passport Size Photo if required"
        ]
    },

    project: {
        name: "College Project Making",
        icon: "💻",
        documents: [
            "Project Topic",
            "College Guidelines",
            "Student Details",
            "Project Requirements",
            "Reference Materials if available"
        ]
    },

    spiral: {
        name: "Spiral Binding",
        icon: "📚",
        documents: [
            "Printed Documents",
            "Project / Record Pages",
            "Cover Page if required"
        ]
    },


    // ================= BILLS & BOOKING =================

    prepaid: {
        name: "Prepaid Recharge",
        icon: "📱",
        documents: [
            "Mobile Number",
            "Recharge Plan / Amount"
        ]
    },

    postpaid: {
        name: "Postpaid Recharge",
        icon: "📱",
        documents: [
            "Mobile Number",
            "Bill / Account Details"
        ]
    },

    dth: {
        name: "D2H Dish Recharge",
        icon: "📺",
        documents: [
            "DTH Customer ID",
            "Recharge Plan / Amount"
        ]
    },

    eb: {
        name: "EB Bill",
        icon: "⚡",
        documents: [
            "EB Consumer Number",
            "Registered Details if required"
        ]
    },

    flight: {
        name: "Flight Ticket Booking",
        icon: "✈️",
        documents: [
            "Passenger Name",
            "Valid ID Proof",
            "Travel Date",
            "Travel Route",
            "Mobile Number",
            "Email ID"
        ]
    },

    railway: {
        name: "Railway Ticket Booking",
        icon: "🚆",
        documents: [
            "Passenger Name",
            "Age",
            "Gender",
            "Travel Date",
            "Boarding Station",
            "Destination"
        ]
    },

    bus: {
        name: "Bus Ticket Booking",
        icon: "🚌",
        documents: [
            "Passenger Name",
            "Travel Date",
            "Boarding Point",
            "Destination",
            "Mobile Number"
        ]
    },


    // ================= PHOTO =================

    passportphoto: {
        name: "Passport Size Photo",
        icon: "📸",
        documents: [
            "Recent Clear Photo",
            "Digital Photo if available"
        ]
    },

    halfphoto: {
        name: "Half Size Photo",
        icon: "📷",
        documents: [
            "Recent Clear Photo",
            "Digital Photo if available"
        ]
    },

    fullphoto: {
        name: "Full Size Photo",
        icon: "🖼️",
        documents: [
            "Recent Clear Photo",
            "Digital Photo if available"
        ]
    },

    a4photo: {
        name: "A4 Size Photo",
        icon: "🖨️",
        documents: [
            "Recent Clear Photo",
            "Digital Photo if available",
            "USB / Mobile File if available"
        ]
    },


    // ================= TRAINING =================

    tally: {
        name: "Tally",
        icon: "💻",
        documents: [
            "Student Name",
            "Mobile Number",
            "Email ID",
            "Educational Details"
        ]
    },

    msoffice: {
        name: "MS Office",
        icon: "🖥️",
        documents: [
            "Student Name",
            "Mobile Number",
            "Email ID"
        ]
    },

    sheets: {
        name: "Google Sheets",
        icon: "📊",
        documents: [
            "Google Account / Gmail ID",
            "Student Name",
            "Mobile Number"
        ]
    },


    // ================= TAX =================

    gst: {
        name: "GST Certificate",
        icon: "💼",
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Address Proof",
            "Bank Account Details",
            "Business Details",
            "Mobile Number",
            "Email ID"
        ]
    },

    incometax: {
        name: "Income Tax File",
        icon: "💰",
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Bank Statement",
            "Income Details",
            "Form 16 if available",
            "Mobile Number",
            "Email ID"
        ]
    },

    pfclaim: {
        name: "PF Claim",
        icon: "🏦",
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "UAN Number",
            "Bank Account Details",
            "Registered Mobile Number"
        ]
    },

    pfaccount: {
        name: "PF Account Open",
        icon: "💳",
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Bank Account Details",
            "Mobile Number",
            "Employment Details"
        ]
    }

};


// ==========================================
// CHECK DOCUMENTS
// ==========================================

function checkDocuments() {

    const select =
        document.getElementById("serviceSelect");

    const result =
        document.getElementById("result");

    const selectedService =
        select.value;


    // No service selected

    if (!selectedService) {

        result.innerHTML = `

            <div class="error-result">

                <div class="error-icon">
                    ⚠️
                </div>

                <h2>
                    Please Select a Service
                </h2>

                <p>
                    Choose a service from the list above
                    to check the required documents.
                </p>

            </div>

        `;

        return;
    }


    // Get service data

    const data =
        documentData[selectedService];


    if (!data) {

        result.innerHTML = `

            <div class="error-result">

                <h2>
                    Service Information Not Available
                </h2>

                <p>
                    Please contact AND for more information.
                </p>

            </div>

        `;

        return;
    }


    // Create document list

    let documentList = "";

    data.documents.forEach(function(documentName) {

        documentList += `

            <li>

                <span class="check-icon">
                    ✓
                </span>

                <span>
                    ${documentName}
                </span>

            </li>

        `;

    });


    // Display result

    result.innerHTML = `

        <div class="result-card">

            <div class="result-header">

                <div class="result-icon">
                    ${data.icon}
                </div>

                <div>

                    <span>
                        DOCUMENT CHECK
                    </span>

                    <h2>
                        ${data.name}
                    </h2>

                </div>

            </div>


            <div class="document-list">

                <h3>
                    Commonly Required Documents
                </h3>

                <ul>
                    ${documentList}
                </ul>

            </div>


            <div class="result-note">

                <strong>
                    Note:
                </strong>

                Exact document requirements may vary
                depending on the application and department.

            </div>


            <a
                href="https://wa.me/917867976169?text=${encodeURIComponent(
                    "Hello APPLY NOW DOCUMENTS (AND), I need help with " + data.name
                )}"
                target="_blank"
                class="result-whatsapp"
            >
                💬 Ask About This Service
            </a>

        </div>

    `;


    // Smooth scroll to result

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("show");

}


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu =
            document.getElementById("navMenu");

        navMenu.classList.remove("show");

    });

});