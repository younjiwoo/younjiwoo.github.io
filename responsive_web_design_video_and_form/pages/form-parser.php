<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];
    $from = "From: form inquiry";
    $to = "younjiwoo@gmail.com";
    $subject = "I have a question";
    $human = $_POST['human'];

    $body = "From: $name\n Email: $email\n Phone: $phone\n Message: $comments";
        
    if ($_POST['submit']) {
        if ($name !='' && $email !='') {
            if ($human == 'pastry') {
                if (mail ($to, $subject, $body, $from)) {
                    echo 'Your message has been sent.';
            }    else {
                    echo 'Something is wrong, go back and try again.';
                 }
            } else if ($_POST['submit'] && $human != 'pastry') {    
                echo 'Please try the image verification again.';
            }    
            } else {
                    echo 'You need to fill in all required fields.';
            }
    }


?>