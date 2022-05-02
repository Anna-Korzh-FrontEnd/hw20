"use strict";

//1:
let object = {

    set: function(number=0){

        return  this.number = number;

    },
    add: function (arg){
        return  this.number += arg;

    },
    sub: function (arg) {
        return this.number -= arg;

    },
    mult: function (arg){
        return this.number *= arg;

    },
    div: function (arg) {
        return this.number /= arg;

    }
}




module.exports = object








