var msgTopoTimer = '';

var msgTopo = function(txt, classe, tempo){
	if(typeof tempo == 'undefined') 
		tempo = 5000;
	else 
		tempo *= 1000;

	clearTimeout(msgTopoTimer);
	if($('#msg-topo').length == 0)
			$('body').prepend('<div /><div id="msg-topo" />');

	// hack para IE6 já que não aceita fixed...
	if ($.browser.msie == true)
			if($.browser.version < 7)
					$('#msg-topo').css('top', $(window).scrollTop());

	$('#msg-topo')
		.attr('class', '')
		.addClass(classe)
		.html(txt)
		.slideDown( 'fast' )
		.click(function(e){
			escondeMsgTopo();
			e.preventDefault();
		});

	msgTopoTimer = setTimeout(escondeMsgTopo, tempo);
};

var escondeMsgTopo = function(){
	clearTimeout(msgTopoTimer);
	$('#msg-topo').fadeOut('fast');
};
