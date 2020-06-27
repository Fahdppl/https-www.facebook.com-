function jsnotifications(){
  var uNotify = document.querySelectorAll('#notifications_jewel .aclb');

  if(!uNotify.length){
    return JSON.stringify({});
  }

  var results = {};

  var idFromString = function(idString){
    return idString.replace('notif_','');
  }

  for(var index in uNotify){
    elem = uNotify[index];
    var id = elem.id;

    if(!id){ continue; }
    id = idFromString(id);
    
    var contentElement = elem.querySelectorAll('.ib .c div')[0];
    
    var content = contentElement.innerText;
    content = content.replace(/^\s\s*/,'').replace(/\s\s*$/,'');

      results[id] = content;
  }

    return JSON.stringify(results);
}

jsnotifications();