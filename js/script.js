function cloudClick(){
    cloudTab = document.getElementById("header_tabs_link_cloud");
    cloud = document.getElementById("cloud");
    mapTab = document.getElementById("header_tabs_link_map");
    map = document.getElementById("map");

    if (cloudTab.classList == "inactive"){
        cloudTab.classList = "active";
        mapTab.classList = "inactive";

        cloud.classList.add("visible");
        map.classList.remove("visible");
    }
}

function mapClick(){
    cloudTab = document.getElementById("header_tabs_link_cloud");
    mapTab = document.getElementById("header_tabs_link_map");

    if (mapTab.classList == "inactive"){
        cloudTab.classList = "inactive";
        mapTab.classList = "active";

        cloud.classList.remove("visible");
        map.classList.add("visible");
    }
}

function submit_cloud(){
    // GETTING FORM DATA
    twitterName = document.getElementById("cloud_name").value;
    numberToProcess = document.getElementById("cloud_number").value;
    
    // CREATING URL
    url = "35.231.85.14:5000/" + twitterName + "/" + numberToProcess;
    console.log(url);

    // SENDING THE DATA TO SERVER
    windowSettings = "height=400,width=400,top=0,left=0,scrollbars=yes,resizable";
    // window.open("/images/at_sign_PNG68.png", "image", windowSettings);
    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       console.log("response_get");
    //     }
    // };
    // xhttp.open("GET", url);
    // xhttp.send();

    // RETRIEVE DATA AS JSON

    // SEND JSON TO PYTHON SCRIPT

    // PYTHON SHOULD MAKE POPUP WINDOW
}

function submit_map(){
    // GETTING FORM DATA
    twitterName = document.getElementById("map_name").value;
    numberToProcess = document.getElementById("map_number").value;
    depth = document.getElementById("map_depth").value;
    
    // CREATING URL
    url = "35.231.85.14:5000/" + twitterName + "/" + numberToProcess + "/" + depth;
    console.log(url);

    // SENDING THE DATA TO SERVER
    windowSettings = "height=400,width=400,top=0,left=0,scrollbars=yes,resizable";
    // window.open("/images/at_sign_PNG68.png", "image", windowSettings);
    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       console.log("response_get");
    //     }
    // };
    // xhttp.open("GET", url);
    // xhttp.send();
    window.open("www.facebook.com", "image", windowSettings);
}