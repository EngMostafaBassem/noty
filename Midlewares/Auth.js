exports.ValidAuth=(req,res,next)=>{
    console.log(req.session._id)
    if(req.session._id!=null){
        next()
    }
    else{
        res.redirect("/")
    }
}