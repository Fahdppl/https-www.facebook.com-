function notifications(){
  var unreadNotifications = document.querySelectorAll('#notifications_jewel .aclb');

  if(!unreadNotifications.length){
    return JSON.stringify({});
  }

  var results = {};

  var idFromString = function(idString){
    return idString.replace('notif_','');
  }

  for(var index in unreadNotifications){
    elem = unreadNotifications[index];
    var id = elem.id;

    if(!id){ continue; }
    id = idFromString(id);
    
    var contentElem = elem.querySelectorAll('.ib .c div')[0];
    
    var content = contentElem.innerText;
    content = content.replace(/^\s\s*/,'').replace(/\s\s*$/,'');

    results[id] = content
  }

    return JSON.stringify(results);
}

notifications();