$(window).scroll(function () {
    // paralax effect untuk judul / tema
    let scroll = $(this).scrollTop();

    $('.tema h1').css({
        'transform': 'translate(0px, ' + scroll / 6 + '%)'
    })

    $('.tema .author').css({
        'transform': 'translate(0px, ' + scroll / 4 + '%)'
    })

    // artikel kawah putih
    if (scroll > $('.artikelKawahPutih').offset().top - 520) {
        // console.log('ok')
        $('.artikelKawahPutih .kpSatu, artikelKawahPutih .kpDua').each(function () {
            setTimeout(function () {
                // console.log('ok')
                $('.kpSatu').addClass('kpSatuMuncul')
                $('.kpDua').addClass('kpDuaMuncul')
            }, 300);
        })
    };

    // figure cikole
    if (scroll > $('.cikole').offset().top - 520) {
        $('.cikole').addClass('cikoleMuncul');
        // console.log('ok')
    };

    // article cikole
    if (scroll > $('.artikelCikole').offset().top - 480) {
        // console.log('ok')
        $('.artikelCikole .cSatu, .artikelCikole .cDua').each(function () {
            setTimeout(function () {
                $('.cSatu').addClass('cSatuMuncul')
                $('.cDua').addClass('cDuaMuncul')
            }, 300);
        })
    };

    //figure heuleut
    if (scroll > $('.heuleut').offset().top - 520) {
        $('.heuleut').addClass('heuleutMuncul');
        // console.log('ok')
    };

    // article heuleut
    if (scroll > $('.artikelHeuleut').offset().top - 480) {
        // console.log('ok')
        $('.artikelHeuleut .hSatu, .artikelHeuleut .hDua').each(function () {
            setTimeout(function () {
                $('.hSatu').addClass('hSatuMuncul');
                $('.hDua').addClass('hDuaMuncul');
            }, 300);
        })
    };

    // figure mercusuar
    if (scroll > $('.mercusuar').offset().top - 520) {
        // console.log('ok')
        $('.mercusuar').addClass('mercusuarMuncul');
    };

    // artikel mercusuar
    if (scroll > $('.artikelMercusuar').offset().top - 480) {
        // console.log('ok')
        $('.artikelMercusuar .mSatu, .artikelMercusuar .mDua').each(function () {
            setTimeout(function () {
                $('.mSatu').addClass('mSatuMuncul');
                $('.mDua').addClass('mDuaMuncul');
            }, 300);
        })
    };

    // Kiara-Artha-Park
    if (scroll > $('.Kiara-Artha-Park').offset().top - 520) {
        // console.log('ok')
        $('.Kiara-Artha-Park').addClass('Kiara-Artha-ParkMuncul');
    }

    // artikel Kiara-Artha-Park
    if (scroll > $('.artikelKiara-Artha-Park').offset().top - 480) {
        // console.log('ok')
        $('.artikelKiara-Artha-Park .kSatu, .artikelKiara-Artha-Park .kDua').each(function () {
            setTimeout(function () {
                $('.kSatu').addClass('kSatuMuncul');
                $('.kDua').addClass('kDuaMuncul');
            }, 300);
        })
    };

    // tanda terima kasih
    if (scroll > $('.br').offset().top - 500) {
        // console.log('ok')
        $('.artikelKiara-Artha-Park .bebas').each(function () {
            setTimeout(function () {
                $('.bebas').addClass('bebasMuncul');
            }, 300);
        })
    };
})

$(window).on('load', function () { // pada saat halaman nya di buka / di refresh, jalan kan function berikut
    // memunculkan icon wa,fb,ig dengan parallax effect
    $('.ig').addClass('igMuncul');
    $('.fb').addClass('fbMuncul');
    $('.wa').addClass('waMuncul');
    // memunculkan figure kawah putih
    $('.kawahPutih').addClass('kawahPutihMuncul');
});