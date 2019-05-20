
//next is ver imp to errors
module.exports.notFound=(res,req,next)=>{
 const err=new Error('not found');
 err.status=404;
 next(err);


};

module.exports.errors = (err,res,req,next)=> {
    res.status(err.status || 500).json(//500 for any diff error
        {
            err: err.message || 'Something went wrong'
         }
    );
};
