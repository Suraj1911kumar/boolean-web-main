function mail() {
    let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("message").value


    // --------------------validation start -------------------


    if (name === "" && email === "" && msg === "") {
        Swal.fire({
            imageUrl: './images/src/logo.png',
            icon: 'error',
            title: 'Oops...',
            imageWidth: 100,
            imageHeight: 50,
            timer: 5000,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__wobble'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            text: 'You have not filled any data ! plz fill it',
        })
    } else if (name === "" || name === 0) {
        Swal.fire('Please Fill Your Name');
    }
    else if (email == "" || email == 0) {
        Swal.fire('Please Fill Your email');
    } else if (!email.match(mailformat)) {
        Swal.fire('Not a valid Email!! please fill valid email');
    }
    else if (msg == "" || msg == 0) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'yes send it!!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "s.k.kh1911@gmail.com",
                    Password: "8FD785BA69668E539FB09FC92B7E114F7587",
                    To: "s.k.kh1911@gmail.com",
                    From: "s.k.kh1911@gmail.com",
                    Subject: "Mail from client",
                    Body: "Name : " + name + "<br/> User Email : " + email + "<br/> Message : " + msg
                }
                ).then(
                    message => Swal.fire({
                        imageUrl: './images/src/logo.png',
                        icon: 'success',
                        title: `Hallo ${name}`,
                        imageWidth: 100,
                        imageHeight: 50,
                        timer: 5000,
                        imageAlt: 'Custom image',
                        showConfirmButton: false,
                        showClass: {
                            popup: 'animate__animated animate__backInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        },
                        text: 'Thanks for messaging us. we contact you as soon as possible....',

                    })
                ).then(document.getElementById("form").reset());
            }
        })
    }
    else {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "s.k.kh1911@gmail.com",
            Password: "8FD785BA69668E539FB09FC92B7E114F7587",
            To: "s.k.kh1911@gmail.com",
            From: "s.k.kh1911@gmail.com",
            Subject: "Mail from client",
            Body: "Name : " + name + "<br/> User Email : " + email + "<br/> Message : " + msg
        }
        ).then(
            message => Swal.fire({
                imageUrl: './images/src/logo.png',
                icon: 'success',
                title: `Hallo ${name}`,
                imageWidth: 100,
                imageHeight: 50,
                timer: 5000,
                imageAlt: 'Custom image',
                showConfirmButton: false,
                showClass: {
                    popup: 'animate__animated animate__backInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                text: 'Thanks for messaging us. we contact you as soon as possible....',

            })
        ).then(document.getElementById('form').reset())
    }
}