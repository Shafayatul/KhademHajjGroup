<?php
ob_start();
add_action('admin_menu', 'khadem_admin_agent_menu');
 
function khadem_admin_agent_menu(){
        add_menu_page( 'Agent Account', 'Agent list', 'manage_options', 'Agent-account-khadem', 'khademAgentAccountMainFunc','dashicons-universal-access-alt',6 );
		add_submenu_page(null, "Quote Agent", "Quote Agent", 'manage_options', "Quote-Agent-khadem", "khademQuoteAgentFunc");
		add_submenu_page(null, "Delete Member", "Delete Member", 'manage_options', "delete-agent-khadem", "khademDeleteAgentFunc");		
}

//show the main list of Agent in the main page
function khademAgentAccountMainFunc(){
	include('pages/AgentAccountMainShowAgentList.php');
	AllAgentFunction();
}
function khademQuoteAgentFunc(){
	include('pages/QuoteAgent.php');
}
function khademDeleteAgentFunc(){
	include('pages/khademDeleteAgentFunc.php');
}
?>