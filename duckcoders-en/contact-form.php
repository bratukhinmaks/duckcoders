<?php
$recipient = "ducknets@gmail.com";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$name=stripslashes($name);
$phone=stripslashes($phone);
$email=stripslashes($email);
$subject=stripslashes($subject);
$message=stripslashes($message);
$message= "Name: $name, Subject: $subject, Phone: $phone \n\n Message: $message";

if(mail("$recipient", "$subject", "$message", "From: $email" )) {
	echo '
        <div class="alert alert-success alert-dismissable fade in">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    	<p>Email sent successfully! We will get back to you shortly.</p></div>
    	';
} else {
    echo 'ERROR!';
}
