function notifications(){
  var notificationsList = document.querySelectorAll('#fbNotificationsList li');
  var result = {};
  
  for(var index in notificationsList){
    var elem = notificationsList[index];
    
    if(!elem || typeof elem.getAttribute == 'undefined'){
      continue;
    }
    
    var data = elem.getAttribute('data-gt');
    
    if(!data){
      continue;
    }
       
    var dataJSON = JSON.parse(data);
    
    if(dataJSON.unread >= 1){
      var notificationID = dataJSON.alert_id;
      var notificationElems = elem.querySelectorAll('.info');
      
      if(notificationElems.length){
        notificationElem = notificationElems[0].cloneNode(true);
        
        var metadataElem = notificationElem.querySelectorAll('.metadata')[0];
        notificationElem.removeChild(metadataElem);
        
        var content = notificationElem.innerText;
        content = content.replace(/^\s\s*/,'').replace(/\s\s*$/,'');
        
        result[notificationID] = content;
      }
    }
  }
  
  return JSON.stringify(result);
}

notifications();