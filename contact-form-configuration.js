$(document).ready(function () {
    let contactServiceInput = document.getElementById("Service");
    const $contactSubmit = $("#contact-submit");
    const $contactSubmitAndBook = $("#contact-submit-and-book");
});

let openBookMeetingPage = true;

function SetContactService(serviceName) {
    contactServiceInput.value = serviceName;
}

$contactSubmit.click(function (e) {
    openBookMeetingPage = false;
    $contactSubmit.click();
});

$contactSubmit.submit(function (e) {
    // If the user wants to book a meeting open the page on a new tab
    if(openBookMeetingPage) {
        window.open('/book-meeting', '_blank');
    }
    // Reset the variable in case the user wants to send another message
    else {
        openBookMeetingPage = true;
    }
    // Submit the form
    return true;
});