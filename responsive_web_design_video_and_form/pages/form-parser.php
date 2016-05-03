<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $url = $_POST['url'];
    $sponsorAmt = $_POST['sponsorAmt'];
    $area = $POST_['area'];
    $newsletter = $POST_['newsletter'];
    $comments = $_POST['comments'];
    $from = "From: form inquiry";
    $to = "younjiwoo@gmail.com";
    $subject = "I have a question.";
    $human = $_POST['human'];

    $body = "From: $name\n Phone: $phone\n Email: $email\n Message: $comments";
    
    if ($_POST['submit']) {
        if ($name !='' && $email !='') {
            if ($human == 'pastry') {
                if (mail ($to, $subject, $body, $from)) {
                    echo '<p>Your message has been sent.</p>';
            }    else {
                    echo '<p>Something is wrong, go back and try again.</p>';
                 }
            } else if ($_POST['submit'] && $human !='pastry') {
                    echo '<p>The characters are wrong, please try again.</p>';
            }    
            } else {
                    echo '<p>You need to fill in all required fields </p>';
            }
    }


?>