

exports.homepage = async (req,res) =>{
    const locals = {
        title: "RemeberMe",
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/main',
    });
};

//abouts
exports.about = async (req,res) =>{
    const locals = {
        title: "about",
    };
    res.render('about', locals);
};
//abouts
exports.qoutes = async (req,res) =>{
    const locals = {
        title: "qoutes",
        
    };
    res.render('qoutes',{
        locals,
        layout: '../views/layouts/qoute_layout',
    });
};