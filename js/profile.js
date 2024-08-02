$(document).ready(function () {
    $("#profileForm").submit(function (event) {
        event.preventDefault();

        // Retrieve the token from localStorage
        var token = localStorage.getItem("authToken");

        // Form data
        var formData = new FormData();
        formData.append("token", token);
        formData.append("dob", $("#dob").val());
        formData.append("emergency_contact", $("#emergency_contact").val());
        if ($("#photo")[0].files.length > 0) {
            formData.append("photo", $("#photo")[0].files[0]);
        }

        $.ajax({
            type: "POST",
            url: "../php/profile.php",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            if (data.success) {
                alert("Profile updated successfully.");
            } else {
                alert("Profile update failed: " + data.message);
            }
        });
    });
});
