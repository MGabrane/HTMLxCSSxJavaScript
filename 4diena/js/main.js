$('#reg_form').submit(function(event){
    var hasErrors = false;
    $('.error_text').remove();
    var $userName = $('#reg_form input[name="username"]');
    if($userName.val() == '') {
        hasErrors = true;
        var error = '<div class="error_text">Field <b>Username</b> is empty</div>';
        $userName.parent().append(error);
    }
    
    var emailElement = 'input[name="email"]';
    var $email = $(this).find(emailElement);
    if ($email.val() == ''){
        hasErrors = true;
        var error2 = '<div class="error_text">Field <b>Email</b> is empty</div>'
        $email.parent().append(error2);
    }
    if(hasErrors == true){
        event.preventDefault();
    }
});

$('.gallery_image').fancybox();