const home = (req,res)=>{
    res.status(200).send("<h1>Hello From User Route</h1>");
}

module.exports(home);