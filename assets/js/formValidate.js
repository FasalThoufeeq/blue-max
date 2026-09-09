$(document).ready(function() {

    const validateName = () => {
        const name = $("#name").val().trim();
        if (name === "") {
            $("#name-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("nameRequired") : "Name is required");
        } else if(name.length < 3){
            $("#name-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("nameMin") : "Minimum of 3 characters required");
        }
        else {
            $("#name-error").text("");
        }
    }

    const validateEmail = () => {
        const email = $("#email").val().trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") {
            $("#email-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("emailRequired") : "Email is required");
        } else if (!emailPattern.test(email)) {
            $("#email-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("emailInvalid") : "Invalid email format");
        } else {
            $("#email-error").text("");
        }
    }

    const validateSubject = () => {
        const subject = $("#subject").val().trim();
        if(subject == ''){
            $("#subject-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("subjectRequired") : "Subject is required");
        }else if(subject.length < 5){
            $("#subject-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("subjectMin") : "Minimum of 5 characters required");
        }else {
            $("#subject-error").text("");
        }
    }

    const validateMessage = () => {
        const message = $("#message").val().trim();
        if(message == ''){
            $("#message-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("messageRequired") : "Message is required");
        }else if(message.length < 8){
            $("#message-error").text(window.BlueMaxI18n ? BlueMaxI18n.t("messageMin") : "Minimum of 8 characters required");
        }else {
            $("#message-error").text("");
        }
    }


    $("#name").blur(validateName);
    $("#email").blur(validateEmail);
    $("#subject").blur(validateSubject);
    $("#message").blur(validateMessage);

    $('#submit-btn').click(function() {
     validateName();
     validateEmail();
     validateSubject();
     validateEmail();
    })

})