//Remove from the News Feed
var elems = document.querySelectorAll('.composerLinksTable td');

if(elems && typeof elems[2] !== 'undefined'){
    var checkInElem = elems[2];
    
    checkInElem.style.display = 'none';
    
    var nub = document.querySelectorAll('.nub'); 
    
    for(var index in nub){
        var item = nub[index];
        var classNames = item.className;
        
        if(typeof classNames === 'undefined'){
            continue;
        }
        
        var reg = new RegExp('hidden');
        var matches = classNames.match(reg);
        
        if(!matches || !matches.length){
            console.log(item);
            item.style.visibility = 'hidden';
        }
    }
}

//Remove from the profile
var barElems = document.querySelectorAll('#publisher_button_bar td');

if(barElems && typeof barElems[2] !== 'undefined'){
    var checkInElem = barElems[2];
    
    checkInElem.style.display = 'none';
}

//var element = document.querySelector('button.touchable._50o7._6-t._6-u');
//if (element != null) {
//    element.style.display = 'none';
//}

var element = document.querySelector('i.img.sp_8er8dp.sx_cea4be');
if (element != null) {
    element.style.display = 'none';
}