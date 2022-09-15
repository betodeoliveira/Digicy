let contactServiceInput = document.getElementById("Service");

function SetContactService(serviceName) {
    contactServiceInput.value = serviceName;
}

// Open contact form with service empty
$("set-contact-service-empty").click(function() {
    SetContactService('');
});

// Keep form height
$(window).bind("load resize submit",function(e){
    $('form').each(function() {
      var formHeight = $(this).height();
      $(this).siblings('.w-form-done').css({'min-height': formHeight});
    });
  }); 

$(document).ready(function () {
    const $contactForm = $("#contact-form");
    const $contactJustSubmit = $("#contact-just-submit");
    const $contactSubmitAndBook = $("#contact-submit-and-book");
    let openBookMeetingPage = true;
    
    $contactJustSubmit.click(function (e) {
        openBookMeetingPage = false;
        $contactSubmitAndBook.click();
    });
    
    $contactForm.submit(function (e) {
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
});