const LenValidation = (value, min, max) => {
    if (value.length < min || value.length > max) {
        return false;
    }
    return true;
}

const validateUserName =async (username) =>{

    let check = false;

    do{
        const user = await User.find({username});

        if(user)
            {
                check = false;
                username+=((new Date()*Math.random()).toString(36).substring(0,1));
            }
            else
            {
                check = true;
            }
    }
    while(!check);

    return uname;

}

module.exports = LenValidation,validateUserName;