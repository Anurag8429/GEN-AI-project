const mongoose = require("mongoose")


const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        required : [true,"token is required to be added in blacklis"]
    }
},{
    timestamps : true
})

const tokenBlackListModel = mongoose.model("blackListTokens",blacklistTokenSchema)

module.exports = tokenBlackListModel