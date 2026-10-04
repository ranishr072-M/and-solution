/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


/* ================= DOCUMENT CHECKER ================= */

function checkDocuments() {

    const service = document.getElementById("serviceSelect").value;

    const result = document.getElementById("documentResult");

    if (service === "") {

        result.innerHTML = `
            <div class="result-box">
                <h3>Please select a service</h3>
                <p>Choose a service to see the commonly required documents.</p>
            </div>
        `;

        return;
    }


    let title = "";
    let documents = [];


    if (service === "pan") {

        title = "PAN Card – Commonly Required Documents";

        documents = [
            "✓ Aadhaar Card",
            "✓ Passport Size Photo",
            "✓ Mobile Number",
            "✓ Signature"
        ];

    }


    else if (service === "passport") {

        title = "Passport – Commonly Required Documents";

        documents = [
            "✓ Aadhaar Card",
            "✓ Address Proof",
            "✓ Date of Birth Proof",
            "✓ Passport Size Photo",
            "✓ Active Mobile Number"
        ];

    }


    else if (service === "certificate") {

        title = "Certificate Application – Common Documents";

        documents = [
            "✓ Aadhaar Card",
            "✓ Address Proof",
            "✓ Supporting Documents",
            "✓ Mobile Number"
        ];

    }


    else if (service === "online") {

        title = "Online Application – Common Requirements";

        documents = [
            "✓ Relevant ID Proof",
            "✓ Address Proof",
            "✓ Passport Size Photo",
            "✓ Mobile Number",
            "✓ Required Supporting Documents"
        ];

    }


    result.innerHTML = `
        <div class="result-box">

            <h3>${title}</h3>

            <ul>

                ${documents.map(function(doc) {

                    return `<li>${doc}</li>`;

                }).join("")}

            </ul>

            <p style="margin-top:15px;color:#98a2b3;font-size:11px;">
                Requirements may vary depending on the application.
                Contact AND before submitting important documents.
            </p>

        </div>
    `;

}


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(
    ".service-card, .why-card, .trust-item, .contact-card"
).forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.7s ease";

    observer.observe(element);

});
