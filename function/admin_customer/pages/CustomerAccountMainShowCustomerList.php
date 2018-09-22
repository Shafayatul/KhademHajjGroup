<?php
function AllCustomerFunction(){
	$exampleListTable = new Example_List_Table();
			$exampleListTable->prepare_items();
			?>
				<div class="wrap">
					<div ID="icon-users" class="icon32"></div>
					<h2>All Customers</h2>
					<form method="post">
						<input type="hIDden" name="page" value="example_list_table" />
						<?php $exampleListTable->search_box('search', 'search_ID'); ?>
					</form>
					<?php $exampleListTable->display(); ?>
				</div>
			<?php
}

	 
	// WP_List_Table is not loaded automatically so we need to load it in our application
	if( ! class_exists( 'WP_List_Table' ) ) {
		require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
	}
	 
	/**
	 * Create a new table class that will extend the WP_List_Table
	 */
	class Example_List_Table extends WP_List_Table
	{
		/**
		 * Prepare the items for the table to process
		 *
		 * @return VoID
		 */
	
			
		public function prepare_items()
		{
			$columns = $this->get_columns();
			$hIDden = $this->get_hIDden_columns();
			$sortable = $this->get_sortable_columns();
	 
			$data = $this->table_data();
			usort( $data, array( &$this, 'sort_data' ) );
	 
			$perPage = 20;
			$currentPage = $this->get_pagenum();
			$totalItems = count($data);
	 
			$this->set_pagination_args( array(
				'total_items' => $totalItems,
				'per_page'    => $perPage
			) );
	 
			$data = array_slice($data,(($currentPage-1)*$perPage),$perPage);
	 
			$this->_column_headers = array($columns, $hIDden, $sortable);
			$this->items = $data;
		}
	 
		/**
		 * OverrIDe the parent columns method. Defines the columns to use in your listing table
		 *
		 * @return Array
		 */
		public function get_columns()
		{
			$columns = array(
				'ID'          	=> 'ID',
				'NAME'        	=> 'NAME',
				'EMAIL' 	  	=> 'EMAIL',
				'PHONE' 		=> 'PHONE',
				'ADDRESS' 		=> 'ADDRESS',				
				'ACTION'      	=> 'ACTION'
			);
	 
			return $columns;
		}

		/**
		 * Define which columns are hIDden
		 *
		 * @return Array
		 */
		public function get_hIDden_columns()
		{
			return array();
		}
	 
		/**
		 * Define the sortable columns
		 *
		 * @return Array
		 */
		public function get_sortable_columns()
		{
			return array(
				'ID' => array('ID', false),
				'NAME' => array('NAME', false),
				'EMAIL' => array('EMAIL', false),
				'PHONE' => array('PHONE', false),
				'ADDRESS' => array('ADDRESS', false),
				);
		}
	 
		/**
		 * Get the table data
		 *
		 * @return Array
		 */
		private function table_data()
		{

			$users_array = get_users( array(
			                "meta_key" => "khadem_account_type",
			                "meta_value" => "Customer",
			                "fields" => "ID"
			            ) );
			$all_users = implode(',',$users_array);	
			
			$data = array();
			global $wpdb;
			$table_name = $wpdb->prefix . 'users';
			if(isset($_POST['s'])){
				$like = $_POST['s'];
				$all_agent_array = $wpdb->get_results( "SELECT * FROM ".$table_name." WHERE (user_login like '%".$like."%' OR user_email like '%".$like."%' OR user_nicename like '%".$like."%') AND ID IN ($all_users) ", OBJECT );
			}else{
				$all_agent_array = $wpdb->get_results( "SELECT * FROM ".$table_name." WHERE ID IN ($all_users) ", OBJECT );

				// $all_agent_array = $wpdb->get_results( "SELECT * FROM ".$table_name." WHERE ID IN ($all_users) ", OBJECT );
			}
			
			$today = date("Y-m-d");
			$cc = count($all_agent_array);
			foreach($all_agent_array as $agent_detail){

				$all_meta_for_user = get_user_meta($agent_detail->ID);

				$data[] = array(
						'ID'          	=> $agent_detail->ID,
						'NAME'  		=> $agent_detail->user_nicename,
						'EMAIL'  		=> $agent_detail->user_email,
						'PHONE'			=> $all_meta_for_user['khadem_contact_number'][0],
						'ADDRESS'			=> $all_meta_for_user['khadem_address'][0],
						'ACTION'      	=> '<a href="'.wp_nonce_url(admin_url('options.php?page=Quote-Customer-khadem&ID='.$agent_detail->ID.''), 'doing_something', 'my_nonce').'" class="button button-primary">Quotes</a>

							<a href="'.wp_nonce_url(admin_url('options.php?page=delete-agent-khadem&ID='.$agent_detail->ID.''), 'doing_something', 'my_nonce').'" class="button button-primary">Delete</a>'
						);
			}
			return $data;
		}
	 
		/**
		 * Define what data to show on each column of the table
		 *
		 * @param  Array $item        Data
		 * @param  String $column_name - Current column name
		 *
		 * @return Mixed
		 */
		public function column_default( $item, $column_name )
		{
			switch( $column_name ) {
				case 'ID':
				case 'NAME':
				case 'EMAIL':
				case 'PHONE':
				case 'ADDRESS':
				case 'ACTION':
					return $item[ $column_name ];
	 
				default:
					return print_r( $item, true ) ;
			}
		}
	 
		/**
		 * Allows you to sort the data by the variables set in the $_GET
		 *
		 * @return Mixed
		 */
		private function sort_data( $a, $b )
		{
			// Set defaults
			$orderby = 'ID';
			$order = 'asc';
	 
			// If orderby is set, use this as the sort column
			if(!empty($_GET['orderby']))
			{
				$orderby = $_GET['orderby'];
			}
	 
			// If order is set use this as the order
			if(!empty($_GET['order']))
			{
				$order = $_GET['order'];
			}
	 
	 
			$result = strnatcmp( $a[$orderby], $b[$orderby] );
	 
			if($order === 'asc')
			{
				return $result;
			}
	 
			return -$result;
		}
	}


