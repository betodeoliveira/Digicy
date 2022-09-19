$(document).ready(function() {
    // Finds the website service description
    let websiteServiceDescription = document.getElementById("webdesign-service-description");
    // Finds all website descriptions references
    let websiteRichtextReference = document.getElementsByClassName("rich-text-services is-website-reference");
    // Set the first reference under the description
    websiteServiceDescription.innerHTML = websiteRichtextReference[0].innerHTML;

    // Finds the digital service description
    let digitalServiceDescription = document.getElementById("digital-service-description");
    // Finds all digital descriptions references
    let digitalRichtextReference = document.getElementsByClassName("rich-text-services is-digital-reference");
    // Set the first reference under the description
    digitalServiceDescription.innerHTML = digitalRichtextReference[0].innerHTML;

    // Finds all website select service buttons
    let websiteSelectServiceBtn = document.getElementsByClassName("services_select-service is-website");
    // If the user is on talet or desktop
    if(window.screen.width > 767) {
        // Do a click to play the webflow interaction on the first button
        websiteSelectServiceBtn[0].click();
    }
    // Finds all digital select service buttons
    let digitalSelectServiceBtn = document.getElementsByClassName("services_select-service is-digital");
    // If the user is on talet or desktop
    if(window.screen.width > 767) {
        // Do a click to play the webflow interaction on the first button
        digitalSelectServiceBtn[0].click();
    }

});

function UpdateWebdesignServiceDescription(elemento) {
    // Gets the element that will receive the content about the job offer
    let websiteServiceDescription = document.getElementById("webdesign-service-description");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the select service wrapper
    elementParent = elementParent.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    setTimeout(function() {
        websiteServiceDescription.innerHTML = $(elementParent).find(".rich-text-services").html();
    }, 250);
} 

function UpdateDigitalServiceDescription(elemento) {
    // Gets the element that will receive the content about the job offer
    let digitalServiceDescription = document.getElementById("digital-service-description");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the select service wrapper
    elementParent = elementParent.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    setTimeout(function() {
        digitalServiceDescription.innerHTML = $(elementParent).find(".rich-text-services").html();
    }, 250);
}