// ===============================
// MOBILE MENU
// ===============================
function toggleServiceMenu() {
    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("show");
    }
}


// ===============================
// OPEN SERVICE MODAL
// ===============================
function openService(serviceName) {

    const modal = document.getElementById("serviceModal");
    const modalName = document.getElementById("modalServiceName");
    const modalWhatsapp = document.getElementById("modalWhatsapp");

    if (!modal || !modalName || !modalWhatsapp) {
        return;
    }

    // Service name
    modalName.textContent = serviceName;

    // WhatsApp message
    const message =
        `Hello APPLY NOW DOCUMENTS (AND), I need information about ${serviceName}.`;

    modalWhatsapp.href =
        `https://wa.me/917867976169?text=${encodeURIComponent(message)}`;

    // Show modal
    modal.classList.add("show");

    // Stop background scrolling
    document.body.style.overflow = "hidden";
}


// ===============================
// CLOSE SERVICE MODAL
// ===============================
function closeService() {

    const modal = document.getElementById("serviceModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    // Enable scrolling again
    document.body.style.overflow = "";
}


// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================
const serviceModal = document.getElementById("serviceModal");

if (serviceModal) {

    serviceModal.addEventListener("click", function (event) {

        if (event.target === serviceModal) {
            closeService();
        }

    });

}


// ===============================
// CLOSE MODAL WITH ESC KEY
// ===============================
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeService();
    }

});
// Close mobile menu when a navigation link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        const navMenu = document.getElementById("navMenu");

        if (navMenu) {
            navMenu.classList.remove("show");
        }
    });
});
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("navMenu").classList.remove("show");
    });
});