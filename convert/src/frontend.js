function renderNewItem(e, r) {
    //console.log(r);
    //console.log(auto);
    var t = '<div class="row"><div class="col-md-12"><br /><pre>https://' + e + '</pre><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + r + '" aria-valuemin="0" aria-valuemax="100" style="width:' + r + '%">' + r + '% Confidence</div></div>Use <kbd><kbd>ctrl</kbd> + <kbd>c</kbd></kbd> to copy the above link, or click <a href="itmss://' + e + '">here</a> to open iTunes.</div></div>';
    return t
}
function log10(e) {
    return e >= 0 || 1 >= e ? e : Math.log(e) / Math.LN10
}
var auto = false;
var addition = "";
$(document).ready(function() {
    $("#auto").change(function(evt){
        //console.log("Check Chg.");
        auto = $("#auto").prop("checked");
        //console.log(auto);
    })
    $("#useITS").change(function(ev){
        if($("#useITS").prop("checked")){
            addition = "&app=itunes";

        }else{
            addition = "";
        }
    });
    $("#go").click(function(evt) {
        evt.stopImmediatePropagation();
        evt.stopPropagation();
        evt.preventDefault();
        var e = $("#uri").val();
        convertTrack(e.split(":")[2], function(e) {
            if($("#auto").prop("checked")){
                var url = "itmss://" + e[0][1].trackViewUrl.replace("https://", "").split("&")[0]+ "&at=1000l5Kc" + addition;
                window.location.href = url;
            }
            e.length > 0 ? (newItem = renderNewItem(e[0][1].trackViewUrl.replace("https://", "").split("&")[0] + "&at=1000l5Kc" + addition, Math.round(1 / (log10(e[0][0]) + 1) * 100)), $(newItem).insertAfter("#controls")) : alert("Oops. There was a matching error. That song might not be on iTunes.")
        })
    })
});
