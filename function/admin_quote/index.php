<?php
ob_start();
add_action('admin_menu', 'khadem_admin_quote_menu');
 
function khadem_admin_quote_menu(){
        add_menu_page( 'Quote List', 'Quote list', 'manage_options', 'Quote-account-khadem', 'khademQuoteAccountMainFunc','dashicons-universal-access-alt',6 );
		add_submenu_page(null, "Detail Package", "Detail Package", 'manage_options', "detail-quote-khadem", "khademQuoteDetailFunc");	
		add_submenu_page(null, "Delete Member", "Delete Member", 'manage_options', "delete-quote-khadem", "khademDeleteQuoteFunc");		
}

//show the main list of Quote in the main page
function khademQuoteAccountMainFunc(){
	include('pages/QuoteAccountMainShowQuoteList.php');
	AllQuoteFunction();
}

function khademQuoteDetailFunc(){
	include('pages/khademQuoteDetailFunc.php');
}
function khademDeleteQuoteFunc(){
	include('pages/khademDeleteQuoteFunc.php');
}
?>