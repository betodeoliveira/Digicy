function UpdateWebdesignServiceDescription(elemento) {
    // Gets the element that will receive the content about the job offer
    let webdesignServiceDescription = document.getElementById("webdesign-service-description");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the buttons wrapper parent
    elementParent = elementParent.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    // We find the element that has the content about the job offer
    for (var i = 0; i < elementParent.childNodes.length; i++) {
        console.log(elementParent.childNodes[i].className);
        if (
            elementParent.childNodes[i].className ==
            "rich-text-services is-hide w-richtext"
        ) {
            // Now we update the element content
            webdesignServiceDescription.innerHTML = elementParent.childNodes[i].innerHTML;
            break;
        }
    }
} 