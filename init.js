const readline = require( 'readline-sync' );

var init = function()
{
	const content = {};

	content.searchTerm = AskAndReturnSearchTerm();
	content.prefix = AskAndReturnPrefix();

	function AskAndReturnSearchTerm()
	{
		return readline.question( 'Texto:' );
	}

	function AskAndReturnPrefix()
	{
		var prefixes = [ 'teste 1', 'teste 2', 'teste 3', 'teste 4' ];
		var prefixIndex = readline.keyInSelect( prefixes );
		return prefixes[ prefixIndex ];
	}

	console.log( content );
}

init();