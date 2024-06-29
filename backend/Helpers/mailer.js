const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    port:587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


const sendEmail=async (email) => {
    const emailOptions = {
        from:{
            name:"StartUp Board",
            address:process.env.EMAIL
        },
        to:email,
        subject:"Welcome to StartUp Board",
        text:"Welcome to StartUp Board, the best place to find your dream Investment",
        html:"<h1>Welcome to StartUp Board</h1><p>StartUp Board is the best place to find your dream Investment</p>",
    };

    try{
        transport.sendMail(emailOptions);
        console.log('sent email');
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports=sendEmail;