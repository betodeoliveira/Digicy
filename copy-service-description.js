function UpdateWebdesignServiceDescription(elemento) {
    // Gets the element that will receive the content about the job offer
    let websiteServiceDescription = document.getElementById("webdesign-service-description");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the select service wrapper
    elementParent = elementParent.parentNode;
    // Then we select the buttons wrapper parent
    elementParent = elementParent.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    // We find the element that has the content about the job offer
    for (var i = 0; i < elementParent.childNodes.length; i++) {
        // console.log(elementParent.childNodes[i].className);
        if (
            elementParent.childNodes[i].className ==
            "rich-text-services is-website-reference w-richtext"
        ) {
            // Now we wait the description animation and update the element content
            setTimeout(function() {
                websiteServiceDescription.innerHTML = elementParent.childNodes[i].innerHTML;
            }, 250);
            break;
        }
    }
} 

function UpdateDigitalServiceDescription(elemento) {
    // Gets the element that will receive the content about the job offer
    let digitalServiceDescription = document.getElementById("digital-service-description");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the select service wrapper
    elementParent = elementParent.parentNode;
    // Then we select the buttons wrapper parent
    elementParent = elementParent.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    // We find the element that has the content about the job offer
    for (var i = 0; i < elementParent.childNodes.length; i++) {
        // console.log(elementParent.childNodes[i].className);
        if (
            elementParent.childNodes[i].className ==
            "rich-text-services is-digital-reference w-richtext"
        ) {
            // Now we wait the description animation and update the element content
            setTimeout(function() {
                digitalServiceDescription.innerHTML = elementParent.childNodes[i].innerHTML;
            }, 250);
            break;
        }
    }
}

$(document).ready(function() {
    let websiteServiceDescription = document.getElementById("webdesign-service-description");
    let websiteRichtextReference = document.getElementsByClassName("rich-text-services is-website-reference");
    websiteServiceDescription.innerHTML = websiteRichtextReference[0].innerHTML;

    let websiteSelectServiceBtn = document.getElementsByClassName("services_select-service is-website");
    websiteSelectServiceBtn[0].click();


    let digitalServiceDescription = document.getElementById("digital-service-description");
    let digitalRichtextReference = document.getElementsByClassName("rich-text-services is-digital-reference");
    digitalServiceDescription.innerHTML = digitalRichtextReference[0].innerHTML;

    
});