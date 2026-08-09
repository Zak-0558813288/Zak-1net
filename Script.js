// OPEN IMAGE

function openImage(imageSource) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("fullImage").src = imageSource;
}


// CLOSE IMAGE

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}


// OPEN DOCUMENT

function openDocument(documentSource) {
    document.getElementById("documentModal").style.display = "flex";
    document.getElementById("documentViewer").src = documentSource;
}


// CLOSE DOCUMENT

function closeDocument() {
    document.getElementById("documentModal").style.display = "none";
    document.getElementById("documentViewer").src = "";
}


// CLOSE MODALS WHEN CLICKING OUTSIDE

window.onclick = function(event) {

    const imageModal = document.getElementById("imageModal");
    const documentModal = document.getElementById("documentModal");

    if (event.target === imageModal) {
        closeImage();
    }

    if (event.target === documentModal) {
        closeDocument();
    }
};
