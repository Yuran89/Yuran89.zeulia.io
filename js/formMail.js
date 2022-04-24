$("sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("errorMess").text("input email adres");
        return false;
    } else if(name == "") {
        $("errorMess").text("input name");
        return false;
    } else if(phone == "") {
        $("errorMess").text("input phone");
        return false;
    } else if(message == "") {
        $("errorMess").text("input message");
        return false;
    }
    $("errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
            alert("sms не отправлено");
            else $("mailForm").trigger("reset");
            $("#sendMail").prop("disabled", false);
        }
    });
});