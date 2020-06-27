var callbackSuccess; var geoLat = 0.0; var geoLng = 0.0; function checkGeoCoords() { if (geoLat === 0.0 && geoLng === 0.0) { setTimeout('checkGeoCoords()', 1000); } else { callbackSuccess( { coords: { latitude: geoLat,longitude: geoLng }, accuracy: 1, timestamp: Date.now() }); } } navigator.geolocation.watchPosition = function(success,failure) { var answer = confirm("This webpage would like to use your current location."); if(answer){ callbackSuccess = success; checkGeoCoords(); } }


//Using FIPLAB Namespace to prevent possible issues
var FIPLABImages = {
newHeight: 405,
newWidth: 405,
    
isBound: false,
oldOnScroll: null,
    
init: function(){
    this.bindIfNeeded();
    this.onScroll();
},
    
bindIfNeeded: function(){
    if(this.isBound){
        return;
    }
    
    this.oldOnScroll = window.onscroll;
    
    var that = this;
    
    window.onscroll = function(){
        if(that.oldOnScroll && typeof that.oldOnScroll === 'function'){
            that.oldOnScroll();
        }
        that.onScroll();
    }
},
    
onScroll: function(){
    var images = document.querySelectorAll('.storyAttachmentMedia i.img, .tlPhotoAttachment');
    
    for(var i = 0; i < images.length; i++){
        var img = images[i];
        
        var height = parseFloat(img.style.height);
        var width = parseFloat(img.style.width);
        
        if(height > this.newHeight || width > this.newWidth){
            var style = img.getAttribute('style');
            style += '; width: ' + this.newWidth + 'px; height: ' + this.newHeight + 'px;';
            
            img.setAttribute('style', style);
        }
    }
}
}

FIPLABImages.init();
