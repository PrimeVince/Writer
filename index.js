document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            const details = this.querySelector(".portfolio-details");
            if (this.classList.contains("active")) {
                details.style.maxHeight = details.scrollHeight + "px";
            } else {
                details.style.maxHeight = "0";
            }
        });
    });
});
