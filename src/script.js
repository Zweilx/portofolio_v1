document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", function () {
        if (detail.open) {
            document.querySelectorAll("details").forEach((otherDetail) => {
                if (otherDetail !== detail && otherDetail.open) {
                    otherDetail.open = false;
                }
            });
        }
    });
});
