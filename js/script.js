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
    let xhttp = new XMLHttpRequest();
    
}

function submit_map(){

}