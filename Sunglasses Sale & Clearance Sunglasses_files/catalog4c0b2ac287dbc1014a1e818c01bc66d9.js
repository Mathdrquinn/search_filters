(function($){var inviewObjects={},viewportSize,viewportOffset,d=document,w=window,documentElement=d.documentElement,expando=$.expando,timer;$.event.special.inview={add:function(data){inviewObjects[data.guid+"-"+this[expando]]={data:data,$element:$(this)};if(!timer&&!$.isEmptyObject(inviewObjects)){timer=setInterval(checkInView,250);}},remove:function(data){try{delete inviewObjects[data.guid+"-"+this[expando]];}catch(e){}
if($.isEmptyObject(inviewObjects)){clearInterval(timer);timer=null;}}};function getViewportSize(){var mode,domObject,size={height:w.innerHeight,width:w.innerWidth};if(!size.height){mode=d.compatMode;if(mode||!$.support.boxModel){domObject=mode==='CSS1Compat'?documentElement:d.body;size={height:domObject.clientHeight,width:domObject.clientWidth};}}
return size;}
function getViewportOffset(){return{top:w.pageYOffset||documentElement.scrollTop||d.body.scrollTop,left:w.pageXOffset||documentElement.scrollLeft||d.body.scrollLeft};}
function checkInView(){var $elements=$(),elementsLength,i=0;$.each(inviewObjects,function(i,inviewObject){var selector=inviewObject.data.selector,$element=inviewObject.$element;$elements=$elements.add(selector?$element.find(selector):$element);});elementsLength=$elements.length;if(elementsLength){viewportSize=viewportSize||getViewportSize();viewportOffset=viewportOffset||getViewportOffset();for(;i<elementsLength;i++){if(!$.contains(documentElement,$elements[i])){continue;}
var $element=$($elements[i]),elementSize={height:$element.height(),width:$element.width()},elementOffset=$element.offset(),inView=$element.data('inview'),visiblePartX,visiblePartY,visiblePartsMerged;if(!viewportOffset||!viewportSize){return;}
if(elementOffset.top+elementSize.height>viewportOffset.top&&elementOffset.top<viewportOffset.top+viewportSize.height&&elementOffset.left+elementSize.width>viewportOffset.left&&elementOffset.left<viewportOffset.left+viewportSize.width){visiblePartX=(viewportOffset.left>elementOffset.left?'right':(viewportOffset.left+viewportSize.width)<(elementOffset.left+elementSize.width)?'left':'both');visiblePartY=(viewportOffset.top>elementOffset.top?'bottom':(viewportOffset.top+viewportSize.height)<(elementOffset.top+elementSize.height)?'top':'both');visiblePartsMerged=visiblePartX+"-"+visiblePartY;if(!inView||inView!==visiblePartsMerged){$element.data('inview',visiblePartsMerged).trigger('inview',[true,visiblePartX,visiblePartY]);}}else if(inView){$element.data('inview',false).trigger('inview',[false]);}}}}
$(w).bind("scroll resize scrollstop",function(){viewportSize=viewportOffset=null;});if(!documentElement.addEventListener&&documentElement.attachEvent){documentElement.attachEvent("onfocusin",function(){viewportOffset=null;});}})(jQuery);var current_taxes=[];var availObj=document.getElementById('product_avail');var firstview=1;if(typeof useSwitchImageBox==='undefined'){useSwitchImageBox=false;}
if(useSwitchImageBox){var product_thumbnail=document.getElementById('variantThumbnail');}else{var product_thumbnail=document.getElementById('product_thumbnail');}
function switchImageBox(imageBoxType){switch(imageBoxType){case'product':$('#productImageBox').show();$('#variantImageBox').hide();break;case'variant':$('#variantImageBox').show();$('#productImageBox').hide();break;}}
function check_options(){var local_taxes=[];var is_rebuild_wholesale=false;var variantid=false;if(typeof(taxes)!='undefined'){for(var t in taxes){if(hasOwnProperty(taxes,t))
local_taxes[t]=taxes[t][0];}}
price=default_price;for(var x in variants){if(!hasOwnProperty(variants,x)||variants[x][1].length==0)
continue;variantid=x;for(var c in variants[x][1]){if(!hasOwnProperty(variants[x][1],c))
continue;if(getPOValue(c)!=variants[x][1][c]){variantid=false;break;}}
if(variantid)
break;}
if(variantid){var max_avail=variants[variantid][0][1];price=variants[variantid][0][0];orig_price=variants[variantid][0][4];avail=variants[variantid][0][1];$('#variant_id').val(variantid).trigger('change');$('.product-builder-btn','.details-add-to-cart').attr('rel',variantid);if(variants[variantid][3]){product_wholesale=[];for(var t in variants[variantid][3]){if(!hasOwnProperty(variants[variantid][3],t))
continue;var _tmp=modi_price(variants[variantid][3][t][2],cloneObject(variants[variantid][3][t][3]),variants[variantid][3][t][4]);product_wholesale[t]=[variants[variantid][3][t][0],variants[variantid][3][t][1],_tmp[0],[]];for(var c in _tmp[1]){if(hasOwnProperty(_tmp[1],c))
product_wholesale[t][3][c]=_tmp[1][c];}}
is_rebuild_wholesale=true;}
for(var t in local_taxes){if(hasOwnProperty(local_taxes,t)&&variants[variantid][2][t])
local_taxes[t]=parseFloat(variants[variantid][2][t]);}
if(!product_thumbnail){if(useSwitchImageBox){product_thumbnail=document.getElementById('variantThumbnail');}else{product_thumbnail=document.getElementById('product_thumbnail');}}
if(product_thumbnail){if(variants[variantid][0][2].src){if(typeof hasSwiper!='undefined'){if(hasSwiper===true&&typeof jsSwiper!=="undefined"&&jsSwiper!==null){if('slides'in jsSwiper){if(getImgSrc(product_thumbnail)!=variants[variantid][0][2].src){var detailedImage=variants[variantid][0][2].src.replace(/_w+\w*.jpg/g,'_w600.jpg');$('.product_thumbnail').parent().attr('href',detailedImage);$('.product_thumbnail').attr('src',variants[variantid][0][2].src);}
jsSwiper.swipeTo(0);}}}
if(getImgSrc(product_thumbnail)!=variants[variantid][0][2].src){product_thumbnail.src=variants[variantid][0][2].src;product_thumbnail.width=variants[variantid][0][2].newWidth;product_thumbnail.height=variants[variantid][0][2].newHeight;if(typeof(window.saved_product_thumbnail)!='undefined'&&saved_product_thumbnail)
saved_product_thumbnail=false;}
if(useSwitchImageBox){switchImageBox('variant');}}else if(useSwitchImageBox&&$('#variantImageBox:visible')){switchImageBox('product');}else if(getImgSrc(product_thumbnail)!=product_image.src){product_thumbnail.src=product_image.src;if(product_image.width>0&&product_image.height>0){product_thumbnail.width=product_image.width;product_thumbnail.height=product_image.height;if(typeof(window.saved_product_thumbnail)!='undefined'&&saved_product_thumbnail)
saved_product_thumbnail=false;}}
if(max_image_width>0&&product_thumbnail.width>max_image_width){product_thumbnail.height=Math.round(product_thumbnail.height*max_image_width/product_thumbnail.width);product_thumbnail.width=max_image_width;}
if(max_image_height>0&&product_thumbnail.height>max_image_height){product_thumbnail.width=Math.round(product_thumbnail.width*max_image_height/product_thumbnail.height);product_thumbnail.height=max_image_height;}}
if(document.getElementById('product_weight'))
document.getElementById('product_weight').innerHTML=price_format(variants[variantid][0][3]);if(document.getElementById('product_weight_box'))
document.getElementById('product_weight_box').style.display=parseFloat(variants[variantid][0][3])>0?"":"none";if(document.getElementById('product_code'))
{if($('#product_code').val()!=variants[variantid][0][5])
{$('#product_code').val(variants[variantid][0][5]).trigger('change');}}}
if(pconf_price>0)
price=pconf_price;var _tmp=modi_price(price,local_taxes,orig_price);price=_tmp[0];local_taxes=_tmp[1];if(!variantid){product_wholesale=[];for(var t in _product_wholesale){if(!hasOwnProperty(_product_wholesale,t))
continue;_tmp=modi_price(_product_wholesale[t][2],_product_wholesale[t][3].slice(0),_product_wholesale[t][4]);product_wholesale[t]=[_product_wholesale[t][0],_product_wholesale[t][1],_tmp[0],_tmp[1]];}
is_rebuild_wholesale=true;}
for(var t in local_taxes){if(!hasOwnProperty(local_taxes,t))
continue;if(document.getElementById('tax_'+t)){document.getElementById('tax_'+t).innerHTML=price_format(Math.max(local_taxes[t],0));}
current_taxes[t]=local_taxes[t];}
if(is_rebuild_wholesale)
rebuild_wholesale();if(document.getElementById('product_price'))
document.getElementById('product_price').innerHTML=price_format(Math.max(price,0));if(alter_currency_rate>0&&document.getElementById('product_alt_price')){var altPrice=price*alter_currency_rate;document.getElementById('product_alt_price').innerHTML=price_format(Math.max(altPrice,0));}
if(document.getElementById('save_percent')&&document.getElementById('save_percent_box')&&list_price>0&&dynamic_save_money_enabled){var save_percent=Math.round(100-(price/list_price)*100);if(save_percent>0){document.getElementById('save_percent_box').style.display='';document.getElementById('save_percent').innerHTML=save_percent;}else{document.getElementById('save_percent_box').style.display='none';document.getElementById('save_percent').innerHTML='0';}}
$('.product-quantity-text').hide();$('.add-to-cart-button').hide();$('.prod-notif').hide();$('.ships-today-items').hide();var here_avail=variantid?avail:product_avail;$('.product-quantity-text').html('Only '+here_avail+' left in stock!');if(here_avail>0){$('.add-to-cart-button').show();$('#in-stock').show();if(here_avail<3){$('.product-quantity-text').show();if(firstview==0){if(new_analytics==true)
{ga('send','event','product','view','Low_Stock_Notify');}
else
{_gaq.push(['_trackEvent','product','view','Low_Stock_Notify']);}}}}else{$('.prod-notif').show();$('#out-of-stock').show();}
if(typeof home_try_on!="undefined")
{if(typeof try_on_inv_threshold!="undefined"&&typeof try_on_btn_classname!="undefined")
{if($(try_on_btn_classname).length>0)
{var try_on_avail=false;if(here_avail>0)
{if(here_avail>try_on_inv_threshold)
try_on_avail=true;}
if(try_on_avail)
{if(variants[variantid].tryOnAdded===true)
{$(try_on_btn_classname).removeClass('unavailable available').addClass('added ui-state-disabled');$(try_on_btn_classname+' '+try_on_btn_inner_classname).text(try_on_added_text);$(try_on_question_classname+'.unavailable').hide();$(try_on_question_classname+'.available').show();$('#home_try_on_available').val('');}
else
{$(try_on_btn_classname).removeClass('unavailable added ui-state-disabled').addClass('available');if(typeof $.cookie('fp_results')!==null&&!$.isEmptyObject($.cookie('fp_results')))
{console.log('setting avail text');$(try_on_btn_classname+' '+try_on_btn_inner_classname).text(try_on_btn_avail_text);}
else
{console.log('setting need fit profile text');$(try_on_btn_classname+' '+try_on_btn_inner_classname).text(try_on_btn_avail_no_fit_profile_text);}
$(try_on_question_classname+'.unavailable').hide();$(try_on_question_classname+'.available').show();$('#home_try_on_available').val('Y');}}
else
{$(try_on_btn_classname).removeClass('available added').addClass('unavailable ui-state-disabled');$(try_on_btn_classname+' '+try_on_btn_inner_classname).text(try_on_btn_unavail_text);$(try_on_question_classname+'.unavailable').show();$(try_on_question_classname+'.available').hide();$('#home_try_on_available').val('N');}}}}
firstview=0;if((mq>0&&avail>mq+min_avail)||!is_limit)
avail=mq+min_avail-1;avail=Math.min(mq,avail);var select_avail=min_avail;availObj=document.getElementById(quantity_input_box_enabled?'product_avail_input':'product_avail');if(availObj&&availObj.tagName.toUpperCase()=='SELECT'){if(!isNaN(min_avail)&&!isNaN(avail)){var first_value=-1;if(availObj.options[0])
first_value=availObj.options[0].value;if(first_value==min_avail){if((avail-min_avail+1)!=availObj.options.length){if(availObj.options.length>avail-min_avail+1){var cnt=availObj.options.length;for(var x=(avail-min_avail+1<0?0:avail-min_avail+1);x<cnt;x++)
availObj.options[availObj.options.length-1]=null;}else{var cnt=availObj.options.length;for(var x=cnt+min_avail;x<=avail-min_avail+1;x++)
availObj.options[cnt++]=new Option(x,x);}}}else{var cnt=availObj.options.length-1;while(cnt>=0)
availObj.options[cnt--]=null;cnt=0;for(var x=min_avail;x<=avail;x++)
availObj.options[cnt++]=new Option(x,x);}
if(availObj.options.length==0||min_avail>avail)
availObj.options[0]=new Option(txt_out_of_stock,0);}
select_avail=availObj.options[availObj.selectedIndex].value;}else if(availObj&&availObj.tagName.toUpperCase()=='INPUT'&&availObj.type.toUpperCase()=='TEXT'){if(!isNaN(min_avail)&&!isNaN(avail)){availObj.minQuantity=min_avail;availObj.maxQuantity=max_avail;}
if(isNaN(parseInt(availObj.value))||availObj.value==0)
availObj.value=min_avail;select_avail=availObj.value;}
check_wholesale(select_avail);if(alert_msg=='Y'&&min_avail>avail)
alert(txt_out_of_stock);var ex_flag=check_exceptions();if(!ex_flag&&(alert_msg=='Y'))
alert(exception_msg);if(document.getElementById('exception_msg')){if(ex_flag){document.getElementById('exception_msg').style.display='none';}else{document.getElementById('exception_msg').innerHTML=exception_msg_html;document.getElementById('exception_msg').style.display='';}}
return true;}
function modi_price(_price,_taxes,_orig_price){var return_price=round(_price,2);for(var x2 in modifiers){if(!hasOwnProperty(modifiers,x2))
continue;var value=getPOValue(x2);if(!value||!modifiers[x2][value])
continue;var elm=modifiers[x2][value];return_price+=parseFloat(elm[1]=='$'?elm[0]:(_price*elm[0]/100));for(var t2 in _taxes){if(hasOwnProperty(_taxes,t2)&&elm[2][t2])
_taxes[t2]+=parseFloat(elm[1]=='$'?elm[2][t2]:(_orig_price*elm[2][t2]/100));}}
return[return_price,_taxes];}
function check_exceptions(){if(typeof(exceptions)==='undefined')
return true;for(var x in exceptions){if(!hasOwnProperty(exceptions,x)||isNaN(x))
continue;var found=true;for(var c in exceptions[x]){if(!hasOwnProperty(exceptions[x],c))
continue;var value=getPOValue(c);if(!value)
return true;if(value!=exceptions[x][c]){found=false;break;}}
if(found)
return false;}
return true;}
function rebuild_wholesale(){var div=document.getElementById('wl-prices');var wl_table=$('table',div).get(0);var wl_taxes=$('div',div).get(0);if(!div||!wl_table||!wl_taxes)
return false;var i=wl_table.rows.length-1;while(i>0)
wl_table.deleteRow(i--);if(!product_wholesale||product_wholesale.length==0){div.style.display='none';return false;}
var str='';var r;for(i in product_wholesale){if(!hasOwnProperty(product_wholesale,i)||product_wholesale[i][0]==0)
continue;r=wl_table.insertRow(-1);insert_text=(product_wholesale[i][1]==0)?product_wholesale[i][0]+'+':(product_wholesale[i][1]-product_wholesale[i][0]>0?product_wholesale[i][0]+'-'+product_wholesale[i][1]:product_wholesale[i][0]);r.insertCell(-1).innerHTML=insert_text+'&nbsp;'+(product_wholesale[i][0]==1?lbl_item:lbl_items);r.insertCell(-1).innerHTML=price_format(product_wholesale[i][2]<0?0:product_wholesale[i][2],false,false,false,true);}
if(wl_table.rows.length<=1){div.style.display='none';return false;}
var display_taxes=false;if(taxes.length>0){for(i in taxes){if(hasOwnProperty(taxes,i)&&current_taxes[i]>0)
display_taxes=true;}}
if(!display_taxes)
wl_taxes.style.display='none';else
wl_taxes.style.display='';div.style.display='';return true;}
function check_wholesale(qty){if((typeof(product_wholesale)=='undefined')||product_wholesale.length==0)
return true;var wl_taxes=current_taxes.slice(0);var wl_price=price;for(var x=0;x<product_wholesale.length;x++){if(product_wholesale[x][0]<=qty&&(product_wholesale[x][1]>=qty||product_wholesale[x][1]==0)){wl_price=product_wholesale[x][2];wl_taxes=product_wholesale[x][3].slice(0);}
if(document.getElementById('wp'+x)){var wPrice=price-default_price+product_wholesale[x][2];document.getElementById('wp'+x).innerHTML=price_format(Math.max(wPrice,0));}}
if(document.getElementById('product_price'))
document.getElementById('product_price').innerHTML=price_format(Math.max(wl_price,0));if(alter_currency_rate>0&&document.getElementById('product_alt_price')){document.getElementById('product_alt_price').innerHTML=price_format(Math.max(wl_price*alter_currency_rate,0));}
if(document.getElementById('save_percent')&&document.getElementById('save_percent_box')&&list_price>0&&dynamic_save_money_enabled){var save_percent=Math.round(100-(Math.max(wl_price,0)/list_price)*100);if(save_percent>0){document.getElementById('save_percent_box').style.display='';document.getElementById('save_percent').innerHTML=save_percent;}else{document.getElementById('save_percent_box').style.display='none';document.getElementById('save_percent').innerHTML='0';}}
for(var x in taxes){if(hasOwnProperty(taxes,x)&&document.getElementById('tax_'+x)&&wl_taxes[x]&&current_taxes[x]){document.getElementById('tax_'+x).innerHTML=price_format(Math.max(wl_taxes[x],0));}}
return true;}
function getPOValue(c){if(!document.getElementById('po'+c)||document.getElementById('po'+c).tagName.toUpperCase()!='SELECT')
return false;return document.getElementById('po'+c).options[document.getElementById('po'+c).selectedIndex].value;}
function product_option(classid){if(!isNaN(classid))
return document.getElementById("po"+classid);if(!names)
return false;for(var x in names){if(!hasOwnProperty(names,x)||names[x]['class_name']!=classid)
continue;return document.getElementById('po'+x);}
return false;}
function product_option_value(classid){var obj=product_option(classid);if(!obj)
return false;if(obj.type!='select-one')
return obj.value;var classid=parseInt(obj.id.substr(2));var optionid=parseInt(obj.options[obj.selectedIndex].value);if(names[classid]&&names[classid]['options'][optionid])
return names[classid]['options'][optionid];return false;}
function close_opts_expire_msg(cartid){var post_params='target=cart&mode=update&product_options=1&id='+cartid;var cart_message_box=document.getElementById('cart_message_'+cartid);$.ajax({type:'POST',url:'popup_poptions.php',data:post_params});if(cart_message_box){cart_message_box.style.display='none';}
return false;}
var active_filters=updateActive();$(document).ready(function(){var ajax_history=$('#filtermenu').attr('ajax_history');var ajax_legacy=$('#filtermenu').attr('ajax_legacy');var url_initial=location.href;var ajax_force_refresh=false;if($('body').hasClass("catalog")||$('body').hasClass("search"))
{if(typeof($.cookie)=='function')
{$.cookie('filter_pageurl',url_initial);}}
$(":checkbox").attr("autocomplete","off");if(active_filters.hasOwnProperty('Power'))
$('.products-list').appendPower(active_filters);if(($('#filtermenu').attr('rel')=='is_ajax'||$('#activemenu').attr('rel')=='is_ajax')&&(!($.browser.msie)||($.browser.msie&&parseInt($.browser.version,10)>=10)||ajax_legacy=='Y')){$('.page_option').prop("onclick",null).attr("onclick",null);$('.sort_option').prop("onchange",null).attr("onchange",null);if((!($.browser.msie)||($.browser.msie&&parseInt($.browser.version,10)>=10))){$(window).bind('popstate',function(ev){if(url_initial==location.href&&ajax_force_refresh==false){return;}
location.reload();});}
$('body').on('click','.page_option',function(e){e.preventDefault();disableAjaxFilteredContent();getResultsAjax($(this).parents('form:first'));return false;});$('body').on('change','.filter_option, .active_option, .sort_option',function(e){e.preventDefault();disableAjaxFilteredContent();getResultsAjax($(this).parents('form:first'));return false;});$('body').on('click','.clear-filters',function(e){e.preventDefault();disableAjaxFilteredContent();$('#activemenu .active_option').attr('checked',false);getResultsAjax($('#activemenu'));return false;});getResultsAjax=function(form_data){$.ajax({type:'GET',url:xcart_web_dir+'/get_quick_block.php?block=search_results',data:form_data.serialize(),dataType:'json',success:function(data){if(data!==null){updateResults(data);$.cookie('filter_pageurl',data.pageurl);}else{enableAjaxFilteredContent();}},error:function(){enableAjaxFilteredContent();}});}
updateResults=function(d){$('.products-list').replaceWith(d.products);$('.side-navigation').replaceWith(d.filters);$('.utilities').replaceWith(d.utilities);$('.page_option').prop("onclick",null).attr("onclick",null);$('.sort_option').prop("onchange",null).attr("onchange",null);if(ajax_history=='js'&&(!($.browser.msie)||($.browser.msie&&parseInt($.browser.version,10)>=10))&&d.pageurl!=window.location){ajax_force_refresh=true;window.history.pushState({path:d.pageurl},'',d.pageurl);}
enableAjaxFilteredContent();$('img.thumbnailer').lazyload({threshold:200});active_filters=updateActive();if(active_filters.hasOwnProperty('Power'))
$('.products-list').appendPower(active_filters);$(ajax.messages).trigger('productsFiltered');};disableAjaxFilteredContent=function(){$('.products-list').block({message:'<img src="//cdn.readers.com/skin/common_files/images/loading.gif" height="34" width="34" border="0" />',centerY:false});$('.side-navigation').block({message:null});$('.utilities').block({message:null});}
enableAjaxFilteredContent=function(){$('.products-list').unblock();$('.side-navigation').unblock();$('.utilities').unblock();if($(document).scrollTop()>450){$('html, body').animate({scrollTop:$('.promo-bar').offset().top},'slow');}}}else{$('body').on('change','.filter_option',function(e){e.preventDefault();$('#filtermenu').submit();});$('body').on('change','.active_option',function(e){e.preventDefault();$('#activemenu').submit();});$('body').on('click','.clear-filters',function(e){e.preventDefault();$('#activemenu .active_option').attr('checked',false);$('#activemenu').submit();});}});function updateActive(){if($('#powerCat').length>0)
var savedPower=[$('#powerCat').text()];var actives={};$('.active_option').each(function(){if(actives.hasOwnProperty($(this).data('filter-name')))
actives[$(this).data('filter-name')][actives[$(this).data('filter-name')].length]=$(this).data('filter-text');else
actives[$(this).data('filter-name')]=new Array($(this).data('filter-text'));});if(typeof savedPower!='undefined')
actives.Power=savedPower;return actives;};$.fn.appendPower=function(filters){$('.product',this).each(function(){imgAnchor=$('.panel .product-image-container a',this);titleAnchor=$('.meta-container .display-product-title a',this);imgAnchor.attr('href',imgAnchor.attr('href')+'~'+encodeURIComponent(filters.Power[0]));titleAnchor.attr('href',titleAnchor.attr('href')+'~'+encodeURIComponent(filters.Power[0]));});};function displayProductImageSubset(optionid){$('.dpimages-icons-box .thumb-wrapper').hide();$(optionid).show();}
$(document).ready(function(){$('.dpimages-icons-box .thumb-wrapper').each(function(){$(this).hide();});if($("body.product .swatch").length>0){$("body.product .swatch").click(function(){$(".swatch").each(function(){$(this).parent('.swatch-container').children('div').removeClass('selected');});$(this).parent('.swatch-container').children('div').addClass('selected');var classid='po'+$(this).attr('classid');var optionid=$(this).attr('id');$('#'+classid).val(optionid).trigger('change');displayProductImageSubset("#option-"+optionid);$('#orderform').find('.add-to-fit-kit').data('variantid',$(this).attr('variantid'));if(typeof updateFitKitButtons==="function")
{updateFitKitButtons();}
return false;});}
if($(".poColor").length>0){var updateSwatches=function(){$(".swatch").each(function(){$(this).parent('.swatch-container').children('div').removeClass('selected');});$('#'+$(".poColor").val()).parent('.swatch-container').children('div').addClass('selected');displayProductImageSubset("#option-"+$(".poColor").val());}
$(".poColor").change(updateSwatches);updateSwatches();}
if($("body.catalog, body.search").length>0){$("body.catalog, body.search").on('click','.product .swatch',function(e){e.preventDefault();$(this).parent().children().each(function(){$(this).removeClass('selected');});$(this).addClass('selected');var target=$(this).attr('rel');var swatch=$(this).attr('swatch');var width=($('.product-image-container img',$(this).closest('.product')).length>0)?Math.round($('.product-image-container img',$(this).closest('.product')).width()):140;var variantid=$(this).attr('variantid');$.ajax({url:'/get_info.php',method:'GET',data:'info=variant_url&size='+width+'&variantid='+variantid,success:function(data){$('#img'+target).attr('src',data);var newRL=$('.prod'+target).attr('href').replace(/(on=[\w\s\+\/%\\]+)|(~[%\+][0-9A-Z\.]+)/,'on='+swatch+'$2').replace(/(showid=[\w\s\+\/%\\]+)|(~[%\+][0-9A-Z\.]+)/,'showid='+variantid+'$2');$('.prod'+target).attr('href',newRL);}});return false;});}
$('#product_thumbnail').on('click',function(){$('a.h215','.product-image-container').attr('href',$('#product_thumbnail','.product-image-container a.h215').attr('src'));});$('.poColor').on('change',function(){$('a.h215','.product-image-container').attr('href',$('#product_thumbnail','.product-image-container a.h215').attr('src'));});});