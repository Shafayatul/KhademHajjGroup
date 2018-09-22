<?php
ob_start();
add_action('admin_menu', 'khadem_admin_customer_menu');
 
function khadem_admin_customer_menu(){
        add_menu_page( 'Customer Account', 'Customer list', 'manage_options', 'Customer-account-khadem', 'khademCustomerAccountMainFunc','dashicons-universal-access-alt',6 );
		add_submenu_page(null, "Quote Customer", "Quote Customer", 'manage_options', "Quote-Customer-khadem", "khademQuoteCustomerFunc");
		add_submenu_page(null, "Delete Member", "Delete Member", 'manage_options', "delete-agent-khadem", "khademDeleteCustomerFunc");		
}

//show the main list of Customer in the main page
function khademCustomerAccountMainFunc(){
	include('pages/CustomerAccountMainShowCustomerList.php');
	AllCustomerFunction();
}
function khademQuoteCustomerFunc(){
	include('pages/QuoteCustomer.php');
}
function khademDeleteCustomerFunc(){
	include('pages/khademDeleteCustomerFunc.php');
}
?>