// self invoking anonymous function  
(function(){
    // get the link
    var link = document.getElementsByTagName("a")[0];
    // handle click event of this link
    link.onclick = function(){
        var xhr = new XMLHttpRequest(); // creat xhr object
        
        /* handle the onreadyState event
        0 initialized
        1 loading
        2 loaded
        3 interactive
        4 complete
        */
        xhr.onreadystatechange = function(){
            if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){
                xhr.responseText;
                
                var body =  document.getElementsByTagName("body")[0];
                var p = document.createElement("p");
                var pText = document.createTextNode(xhr.responseText);
                p.appendChild(pText);
                body.appendChild(p);
            }
        }
    
        
        // open the request
        xhr.open("GET", "files/ajax.txt", true); // get files content asynchroneously
        
        // send the request
        xhr.send(null);
        
        return false; // desable default behavior
    };
    
 })();
