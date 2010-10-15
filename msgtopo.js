// timer para o timeout do javascript
var msgTopoTimer = '';

// função simples para exibir resposta de erro ou confirmação
var msgTopo = function( txt, classe, tempo )
{
    // limpa timeout
    clearTimeout( msgTopoTimer );

    if( $('#msg-topo').length == 0 )
    {
        $('body').prepend( '<div><div id="msg-topo"></div></div>' );
    }

    if ( classe == 'erro' )
    {
        $('#msg-topo').removeClass( 'msg' );
    }
    else
    {
        $('#msg-topo').removeClass( 'erro' );
    }

    $('#msg-topo').addClass(classe);

    // hack para IE6 já que não aceita fixed...
    if ($.browser.msie == true)
    {
        if( $.browser.version < 7 )
        {
            $('#msg-topo').css( 'top', $(window).scrollTop() );
        }
    }

    // define texto e exibe msg
    $('#msg-topo').html( txt );
    $('#msg-topo').slideDown( 'fast' );
    $('#msg-topo').click(function(){
        escondeMsgTopo();
        return false;
    });

    // configura timeout
    msgTopoTimer = setTimeout( escondeMsgTopo, tempo );
}; // fim msgTopo

var escondeMsgTopo = function()
{
    clearTimeout( msgTopoTimer );
    $('#msg-topo').fadeOut( 'fast' );
};
