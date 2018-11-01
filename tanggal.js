$(document).ready(function() {
	var kolom = $('.tanggal');
	for (var i = 0; i < kolom.length; i++) {
		var idvalue = kolom[i].id+'val'+i;
		var triger = "makeTanggal('"+kolom[i].id+"','"+idvalue+"');";
		$('#'+kolom[i].id).replaceWith('<div class="input-group"> <div class="input-group-addon" onclick="'+triger+'"><i class="fa fa-calendar"></i></div> <input type="text" class="form-control tanggal"  onclick="'+triger+'" id="'+kolom[i].id+'" value="'+convertDate(kolom[i].value)+'" required> <input type="hidden" value="'+kolom[i].value+'" name="'+kolom[i].id+'" id="'+idvalue+'"> </div>')
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
    return 'dd/mm/yyyy';
}

function makeTanggal(tgl,kvalue) {
    $('#'+tgl).datepicker({
        dateFormat:'dd MM yy',
        altFormat:'yy-mm-dd',
        altField:'#'+kvalue,
        changeMonth: true,
        changeYear: true,
    });
    $('#'+tgl).datepicker('show');
}

