const mongoose=require('mongoose');
const config=require('../config/database');

//tester schema
const ticketSchema=mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    contact: {
        type:String,
        required:true
    },
    problem: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    }
});

const Ticket= module.exports = mongoose.model('Ticket',ticketSchema);

module.exports.addTicket=function(newTicket,callback) {
            newTicket.save(callback);
}
