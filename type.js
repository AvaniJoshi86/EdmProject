const Category =require('../../model/Category')

const type = require('../../model/type')


const adate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.addtype = async(req,res) =>{

    let catdata = await Category.find({})
    return res.render('type',{
        catdata : catdata
    })
}

module.exports.inserttype = async(req,res) =>{

    req.body.isActive = req.isActive
    req.body.createdDate = adate
    req.body.updatedDate = adate

    let typedata = await type.create(req.body)

    if(typedata)
    {
        // console.log("typedata add")
        return res.redirect('back')
    }
    else
    {
        console.log("typadata is not added")
        return res.redirect('back')
    }
}