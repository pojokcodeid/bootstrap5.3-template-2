function setFull(){
    $('#mdl_frm').removeClass('modal-xl');
    $('#mdl_frm').removeClass('modal-lg');
    $('#mdl_frm').removeClass('modal-sm');
    $('#mdl_frm').addClass('full_modal-dialog');
    $('#mdl_content').addClass('full_modal-content');
}

function setXl(){
    $('#mdl_frm').removeClass('modal-lg');
    $('#mdl_frm').removeClass('modal-sm');
    $('#mdl_frm').addClass('modal-xl');
    $('#mdl_frm').removeClass('full_modal-dialog');
    $('#mdl_content').removeClass('full_modal-content');
}

function setLg(){
    $('#mdl_frm').removeClass('modal-xl');
    $('#mdl_frm').removeClass('modal-sm');
    $('#mdl_frm').addClass('modal-lg');
    $('#mdl_frm').removeClass('full_modal-dialog');
    $('#mdl_content').removeClass('full_modal-content');
}

function setMd(){
    $('#mdl_frm').removeClass('modal-xl');
    $('#mdl_frm').removeClass('modal-sm');
    $('#mdl_frm').removeClass('modal-lg');
    $('#mdl_frm').removeClass('full_modal-dialog');
    $('#mdl_content').removeClass('full_modal-content');
}

function setSm(){
    $('#mdl_frm').removeClass('modal-xl');
    $('#mdl_frm').removeClass('modal-lg');
    $('#mdl_frm').addClass('modal-sm');
    $('#mdl_frm').removeClass('full_modal-dialog');
    $('#mdl_content').removeClass('full_modal-content');
}

function loading() {
    $.showLoading({ name: 'line-scale', allowHide: true });
}
//untuk data table
$(document).ready(function () {
    setTimeout(() => {
        $.hideLoading();
    }, 500);
});
//for number format
function numberFormat(variable) {
    var jumlah = variable.value;
    var perubahan = number_format(jumlah);
    variable.value = perubahan;
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '')
        .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
        .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}
//for tool tips text
$(function () {
    $('[data-txt="tooltip"]').tooltip()
})

//for popup report
function ON_Submit(theUrl, WhichOne, tw, th, frompost) {
    if (frompost == undefined) {
        var frm = document.frmSearch;
    } else {
        var frm = frompost;
    }
    var tmpAction = frm.action;
    var tmpTarget = frm.target;

    //alert(theUrl + WhichOne);
    if (WhichOne == 'Print') {
        if (tw == undefined) {
            var theWidth = 600;
        } else {
            var theWidth = tw;
        }
        if (th == undefined) {
            var theHeight = 660;
        } else {
            var theHeight = th;
        }
        var theLeft = (screen.width - theWidth) / 2;
        var theTop = (screen.height - theHeight) / 2;
        window.open('', "winbaru", "width=" + theWidth + ",height=" + theHeight + ",left=" + theLeft + ",top=" + theTop + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
        frm.target = 'winbaru';
    } else if (WhichOne != undefined && ((WhichOne.toUpperCase() == 'HIDDEN'))) {
        window.open("", "HIDDEN", "width=100,height=100,left=10,top=10,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
        frm.target = 'HIDDEN';
    } else {
        frm.target = '';
    }
    frm.action = theUrl;
    frm.submit();
    frm.action = tmpAction;
    frm.target = tmpTarget;
}

//for image validation
function resetUrl(input) {
    document.getElementById("blah").src = input;
    document.getElementById("txtFoto").value = null;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        if (input.files[0].size / 1024 >= 30000) {
            alert("Ukuran maximal gambar 3 MB");
            document.getElementById("txtFoto").value = null;
        } else {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                //.width(150)
                //.height(200);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}
//untuk pop up windows
function popupwindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'scrollbars=1,status=1, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function resetModal(){
    $(".modal-data").html('<h4 class="text-center">Loading ...</h4>');
}

//for popup insert
function showModal(parent, status) {
    $.showLoading({
        name: 'line-scale',
        allowHide: true
    });
    document.getElementById("status").innerHTML = status;
    $.post(parent,
        function (html) {
            $(".modal-data").html(html);
            setTimeout(() => {
                $.hideLoading();
            }, 500);
        }
    );
    $('#insertNew').modal('show');
}

//untuk data table
$(document).ready(function () {
    table = $('#example').DataTable({
        lengthMenu: [ [50, 100, -1], [50, 100, "All"] ],
        "pageLength": 100,
        "bDestroy": true
    });
    $('div.dataTables_filter input', table.table().container()).focus();
    
});

$(document).ready(function () {
    // untuk menampilkan sidebar terlebih dahulu
    $("#sidebar").mCustomScrollbar({
        axis: "yx",
        scrollInertia: 60,
        theme: "minimal-dark"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('#sidebar').removeClass('active2');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//untuk menu 
var treenam = "myMenu12345";
var tree = $('#myMenu').jstree({
    "search": {
        "case_insensitive": true,
        "show_only_matches": true
    },
    'plugins': ["themes", "search", "html_data", "ui", "state"],
    "state": {
        "key": treenam,
        "opened": true,
        "filter": function (k) {
            delete k.core.selected;
            return k;
        }
    },
    'core': {
        "themes": {
            //'name': 'default',
            'name': 'proton',
            "variant": "medium",
            'responsive': false
        },
        "check_callback": true,
        "multiple": true,
        "dblclick_toggle": false
    }
});
//tree.jstree(true).open_all();

$('#search_menu').keyup(function () {
    $('#myMenu').jstree('search', $(this).val());
});

//for acess link menu
function goto(link) {
    window.location.href = link;
}

//custom select2
$(document).ready(function () {
    $('.select2').select2({
        theme: 'bootstrap4'
    });
});

function setCurrency(currency) {
    if (!currency.id) {
        return currency.text;
    }
    var r = currency.text.split('|');
    tampilan = '<div class="container border border-left-0 border-right-0 border-top-0"><div class="row">';
    if (r[0]!='--Pilih--'){
        tampilan += '<div class="col-md-12">' + r[0] + '</div>';
        if (r[1]){
            tampilan += '<div class="col-sm-4"><small>' + r[1] + '</small></div>';
        }
        if (r[2]){
            tampilan += '<div class="col-sm-8 text-right"><small>' + r[2] + '</small></div>';
        }
    }
    tampilan += '</div></div>';
    var $currency = $(
        tampilan
    );
    return $currency;
};

function setValue(currency) {
    if (!currency.id) {
        return currency.text;
    }
    var r = currency.text.split('|');
    tampilan = '<span>' + r[0] + '</span>';
    var $currency = $(
        tampilan
    );
    return $currency;
};

$(document).ready(function () {
    $('.select3').select2({
        theme: 'bootstrap4',
        templateResult: setCurrency,
        templateSelection: setValue
    });
});
//end custom select2

//custom date select
$(".date").datepicker({
    changeMonth: true,
    changeYear: true,
    beforeShow: function (el, dp) {
        $(el).parent().append($('#ui-datepicker-div'));
        $('#ui-datepicker-div').hide();
    },
    onSelect: function () {
        $(this).change();
    }
});

//date 2 type non modal
$(".date2").datepicker({
    changeMonth: true,
    changeYear: true
});

