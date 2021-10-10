function sendEmail(event) {

//    event.preventDefault();

    emailjs.init("user_ZVVGAOPGRb8NAqB2nHCjI")

    console.log("name",document.getElementById("name").value,);
    console.log("email",document.getElementById("email").value,);
    console.log("subject",document.getElementById("subject").value,);
    console.log("message",document.getElementById("message").value);


    const webSite= "my-cv";
    const visitorName= document.getElementById("name").value;
    const visitorEmail= document.getElementById("email").value;
    const subject= document.getElementById("subject").value;
    const message= document.getElementById("message").value;
    const validate= document.getElementsByClassName("validate").value;
        

    if ( (validate != "") & (visitorEmail != "") & (visitorName != "") & (subject != "") & (message != "") ) {
        
        emailjs.send("gmail","template_kvi4ul1",{
            webSite,
            visitorName,
            visitorEmail,
            subject,
            message,
        })

        .then(result => alert('Your message has been sent. I will reach you sooner.'))
        .catch(err=>alert( 'Oops! try again'))

    }
}



window.onload=function () {
    document.getElementById('mailBtn').addEventListener("click", sendEmail);

}
