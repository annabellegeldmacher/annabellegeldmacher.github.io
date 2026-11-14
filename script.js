console.log("JavaScript file is connected!")

const box = document.getElementById("contact-box")

document.getElementById("open-contact").addEventListener("click", () => box.showModal());
document.getElementById("close-contact").addEventListener("click", () => box.close());

document.getElementById("copy-email").addEventListener("click", () => {
    navigator.clipboard.writeText("annabelle.geldmacher@gmail.com");
    document.getElementById("copy-email").textContent = "Copied!";
});
