var lihat = () => {
    var jenis = document.getElementById('jenis').value
    var ukuran = document.getElementById('ukuran').value
    if ( jenis == 1 ) {
        var bintang = '';
        for ( var i = 0 ; i < ukuran ; i++) {
            for (var j = 0; j < ukuran; j++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'    
        }
        console.log(bintang);
    }
    if ( jenis == 2 ) {
        var bintang = '';
        for (var i = 0 ; i <= ukuran ; i ++) {
            for ( var l = 0 ; l <= i  ; l++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'
        }
        console.log(bintang);
    } 
    if ( jenis == 3 ) {
        var bintang = '';
        for (var i = 0 ; i < ukuran ; i ++) {
            for ( var j = 0; j < ukuran ; j++ ) {
                bintang = bintang + '   ';
            }
            for ( var k = 0 ; k < i  ; k++) {
                bintang = bintang + ' * '
            }
            bintang = bintang + '<br>'
        }
        console.log(bintang);
    }
    document.getElementById('result').innerHTML = bintang;
}










