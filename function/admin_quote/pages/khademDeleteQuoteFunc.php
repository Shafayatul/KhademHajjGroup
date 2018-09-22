<?php
if (isset($_GET['my_nonce']) && !wp_verify_nonce($_GET['my_nonce'], basename(__FILE__))) {
 
	if(isset($_GET["ID"])){
		
		$ID = $_GET["ID"];
		
		global $wpdb;
		$table_name = $wpdb->prefix . 'quotes';
		$wpdb->delete($table_name, array('id'=>$ID));

		$link = admin_url()."admin.php?page=Quote-account-khadem";

		wp_redirect( $link );
		exit;
	}

}else{
	// echo "what";
	exit;
}