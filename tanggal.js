$(document).ready(function() {
    var kolom = $('.tanggal');
	for (var i = 0; i < kolom.length; i++) {
		var idvalue = kolom[i].id+'val'+i;
		var triger = "makeTanggal('"+kolom[i].id+"','"+idvalue+"');";
		$('#'+kolom[i].id).replaceWith('<div class="input-group"> <div class="input-group-addon" onclick="'+triger+'"><i class="fa fa-calendar"></i></div> <input type="text" class="form-control tanggal" autocomplete="off"  onclick="'+triger+'" id="'+kolom[i].id+'" value="'+convertDate(kolom[i].value)+'" placeholder="dd/mm/yyyy"  required="required"> <input type="hidden" value="'+kolom[i].value+'" name="'+kolom[i].name+'" id="'+idvalue+'"> </div>');    
           $('.tanggal').keydown(function(e){
                e.preventDefault();
            });
	}
});


function convertDate(tgl) {
    if (tgl) {
        var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var tanggal = tgl.split('-');
        var bln = parseInt(tanggal[1]) - 1;
        var tanggal_indo = tanggal[2]+' '+bulan[bln]+' '+tanggal[0];	
        return tanggal_indo;
    }
    return '';
}
    
function makeTanggal(tgl,kvalue) {
    $('#'+tgl).datepicker({
        dateFormat:'dd MM yy',
        altFormat:'yy-mm-dd',
        altField:'#'+kvalue,
        changeMonth: true,
        changeYear: true,
        yearRange: '1940:2040',
        beforeShow: function() {
            setTimeout(function(){
                $('.ui-datepicker').css('z-index', 99999999999999);
            }, 0);
        },
    });
    $('#'+tgl).datepicker('show');
}

function setDate(cLabel,cValue,tanggal) {
    $('#'+cLabel).val(convertDate(tanggal));
    $('#'+cValue).val(tanggal);
}
