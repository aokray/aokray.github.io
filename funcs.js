var nco_toggled = false;

$(document).ready(function () {
    $("#nco").hide();
    
    $("#nco_dropdown").click(function () {
        if (nco_toggled) {
            $("#nco_dropdown").text("+");
            nco_toggled = false;
        } else {
            $("#nco_dropdown").text("-");
            nco_toggled = true;
        }
        $("#nco").toggle('slow');
    });
});


var sst_toggled = false;

$(document).ready(function () {
    $("#sst").hide();
    
    $("#sst_dropdown").click(function () {
        if (sst_toggled) {
            $("#sst_dropdown").text("+");
            sst_toggled = false;
        } else {
            $("#sst_dropdown").text("-");
            sst_toggled = true;
        }
        $("#sst").toggle('slow');
    });
});


var ood_toggled = false;

$(document).ready(function () {
    $("#ood").hide();
    
    $("#ood_dropdown").click(function () {
        if (ood_toggled) {
            $("#ood_dropdown").text("+");
            ood_toggled = false;
        } else {
            $("#ood_dropdown").text("-");
            ood_toggled = true;
        }
        $("#ood").toggle('slow');
    });
});
