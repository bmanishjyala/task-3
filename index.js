$("#todo").keyup(function () {
    $("#typing").text($(this).val());
    if ($(this).val()) {
        $("#typing").prepend("Typing: ");

    }
});