const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anhnq:Ez54bG4e3L1y6hUT@atlascluster.at4sibr.mongodb.net/MOB402_ASM?retryWrites=true&w=majority')
        .catch((err)=>{
            console.log('Loi ket noi CSDL');
            console.log(err);
        });

module.exports = { mongoose };