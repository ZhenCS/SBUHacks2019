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
    depth = 0;

    var myData = {
            name: twitterName,
            number: numberToProcess,
            the_depth: depth
        };

    $.ajax({
        type: 'POST',
        url: '/mainfunction',
        data: JSON.stringify(myData),
        contentType: 'application/json',
        success: function(data){
            console.log(data);
        }
    });

}

function submit_map(){
    // GETTING FORM DATA
    twitterName = document.getElementById("map_name").value;
    numberToProcess = document.getElementById("map_number").value;
    depth = document.getElementById("map_depth").value;

    var myData = {
            name: twitterName,
            number: numberToProcess,
            the_depth: depth
        };

    $.ajax({
        type: 'POST',
        url: '/mainfunction',
        data: JSON.stringify(myData),
        contentType: 'application/json',
        success: function(data){
            console.log("successful run");
        }
    });

}