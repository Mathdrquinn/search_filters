vwo_$('.subcategory-descr:nth-child(2)').html('<p>Take advantage of our lowest discounts (EVER) and stock up on as many of the latest styles you want.</p>');
//vwo_$('.twelve.content .twelve.columns:nth-child(2)').wrapInner('<div class=\'shading\'></div>')
var mens = 'http://www.sunglasswarehouse.com/saleitems.html?sc[Gender][]=57&sort=orderby&page=1';
var women = 'http://www.sunglasswarehouse.com/saleitems.html?sc[Gender][]=85&sort=orderby&page=1';
var clear = 'http://www.sunglasswarehouse.com/saleitems.html?sc[Trends][]=95&sort=orderby&page=1';
vwo_$('.dialog').before([
     '<div class=\'twelve columns no-padding\'><div class=\'row header-cta-container m-buttons\'>',
     '<div class=\'four large-4 medium-4 small-12 columns cta for-mobile\'><a href=\'' + mens + '\'><div class=\'button mens\'>Shop Mens\'s &nbsp <span class=\'not-for-mobile\'>›</span><span class=\'triangle\'></span></div></a></div>',
     '<div class=\'four large-4 medium-4 small-12 columns cta for-mobile\'><a href=\'' + women + '\'><div class=\'button women\'>Shop Women\'s &nbsp <span class=\'not-for-mobile\'>›</span><span class=\'triangle\'></span></div></a></div>',
     '<div class=\'four large-4 medium-4 small-12 columns cta for-mobile\'><a href=\'' + clear + '\'><div class=\'button polarized\'>Shop Clear &nbsp<span class=\'not-for-mobile\'>›</span><span class=\'triangle\'></span></div></a></div>',
     '</div></div>'
    ].join('')
);
if(document.URL === mens) {
 vwo_$('.header-cta-container .mens').addClass('hover-activate');
}
else if (document.URL === women) {
 vwo_$('.header-cta-container .women').addClass('hover-activate');
}
else if (document.URL === clear) {
 vwo_$('.header-cta-container .polarized').addClass('hover-activate');
}
else {};

// Added JS
///////////////////////////////////
$('form#filtermenu ul:nth-child(2) li.category-label').addClass('zip')
$('.category-label').on('click', function () {
    var section = $(this);
    section.toggleClass('zip');
    section.siblings('li').slideToggle();
});
//////////////////////////////////

//// Slides background-image
//vwo_$(window).on('scroll', function() {
// var scroll = vwo_$(this).scrollTop() / -10;
// console.log(scroll)
// vwo_$('.twelve.content .twelve.columns:nth-child(2)').css('background-position-y', scroll);
//});

/*
 <div class="twelve columns no-padding">
 <div class="row header-cta-container">
 <div class="four large-4 medium-4 small-12 columns cta for-mobile"><a href="http://www.sunglasswarehouse.com/posu.html?sc[Gender][]=57&sort=orderby&page=1">
 <div class="button">Men's ›</div>
 </a></div>
 <div class="four large-4 medium-4 small-12 columns cta for-mobile"><a href="http://www.sunglasswarehouse.com/posu.html?sc[Gender][]=85&sort=orderby&page=1">
 <div class="button">Women's ›</div>
 </a></div>
 <div class="four large-4 medium-4 small-12 columns cta for-mobile"><a href="http://www.sunglasswarehouse.com/posu.html?sc[Gender][]=85&sort=orderby&page=1">
 <div class="button">Sport ›</div>
 </a></div>
 </div>
 </div>
 */