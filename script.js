$('#gallery_mzag').slick({
    centerMode: true,
    centerPadding: '100px',
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '75px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 400,
            settings: {
                centerPadding: '50px'
            }
        }
  ]
});

$('#gallery_logos').slick({
    centerMode: true,
    centerPadding: '30px',
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    dots: true
});

$('#gallery_yearbook').slick({
    centerMode: true,
    centerPadding: '30px',
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    dots: true
});