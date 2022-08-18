function receivesAFunction(callback){
    callback()
}
receivesAFunction(function (){
    return "sprinkles of happiness"
});

function returnsANamedFunction(){
return function stress(){
    return stress
}
}
function returnsAnAnonymousFunction(){
    return function(){
        return "coolpack!"
    }
}





// var fn = function returnsAnAnonymousFunction(){
//     returnsAnAnonymousFunction(fn.name);
// }