
<!--   younjiwoo@gmail.com,vargas1530@gmail.com-->

   <?php
    $myemail  = "woonbox@gmail.com";
    
$name   = check_input($_POST['name'], "Don't forget your name!");
$phone  = check_input($_POST['phone'], "We will need your phone number entered correctly to contact you.");
$email  = check_input($_POST['email'], "We would like to option to email please.");
$unit    = check_input($_POST['unit']);
$directTo = check_input($_POST['directTo']);
$connectedTo = check_input($_POST['connectedTo']);
$contact = check_input($_POST['contact']);
$comments = check_input($_POST['comment'], "Write your comments");
    
    /* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

    /* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $url))
{
    $url = '';
}
    
$message = "Hello!

Your contact form has been submitted by:

Name: $name
E-mail: $email
Phone: $phone
Unit Number: $unit
It's about $directTo
This is from a/an $connectedTo
He/She would like to contact $contact

Comments:
$comments

End of message
";

mail($myemail, $name, $message);

/* Redirect visitor to the thank you page */
header('Location: thankyou.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>
    
    </body>
    </html>

<?php
exit();
}
?>
