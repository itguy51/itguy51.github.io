function renderNewItem(e, r) {
    //console.log(r);
    var t = '<div class="row"><div class="col-md-12"><br /><pre>https://' + e + '</pre><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + r + '" aria-valuemin="0" aria-valuemax="100" style="width:' + r + '%">' + r + '% Confidence</div></div>Use <kbd><kbd>ctrl</kbd> + <kbd>c</kbd></kbd> to copy the above link, or click <a href="itmss://' + e + '">here</a> to open iTunes.</div></div>';
    return t
}
function log10(e) {
    return e >= 0 || 1 >= e ? e : Math.log(e) / Math.LN10
}
$(document).ready(function() {
    $("#go").click(function() {
        var e = $("#uri").val();
        convertTrack(e.split(":")[2], function(e) {
            e.length > 0 ? (newItem = renderNewItem(e[0][1].trackViewUrl.replace("https://", "").split("&")[0], Math.round(1 / (log10(e[0][0]) + 1) * 100)), $(newItem).insertAfter("#controls")) : alert("Oops. There was a matching error. That song might not be on iTunes.")
        })
    })
});