<?php
if (isset($_GET['my_nonce']) && !wp_verify_nonce($_GET['my_nonce'], basename(__FILE__))) {
 
	if(isset($_GET["ID"])){
		
		$ID = $_GET["ID"];
		
		wp_delete_user( $ID );

		$link = admin_url()."admin.php?page=Customer-account-khadem";
		/*header("Location: $link");
		exit;*/
		wp_redirect( $link );
		exit;
	}

}else{
	// echo "what";
	exit;
}