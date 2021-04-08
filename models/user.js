const mongoose = require('mongoose');
const crypto = require ('crypto');
const uuid = require('uuid/v1');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    hashed_password:{
        type: String,
        required: true,
    },
    salt: {
        type: String
    }
}, {timestamps: true})


userSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.cryptePassword(password)

})

.get(function(){
    return this._password;
})

userSchema.methods = {
    cryptePassword: function(password) {
        if(!password) return '';
        try {
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        } catch (error) {
            return ''
        }
    }
}
