<?php
function AllQuoteFunction(){
	$exampleListTable = new Example_List_Table();
			$exampleListTable->prepare_items();
			?>
				<div class="wrap">
					<div ID="icon-users" class="icon32"></div>
					<h2>All Quotes</h2>
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
				'TITLE'        	=> 'TITLE',
				'QUOTE DETAIL' 	  	=> 'QUOTE DETAIL',
				'USER' 		=> 'USER',
				'PHONE' 		=> 'PHONE',				
				'EMAIL ADDRESS' 		=> 'EMAIL ADDRESS',				
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
				'TITLE' => array('TITLE', false),
				'QUOTE DETAIL' => array('QUOTE DETAIL', false),
				'USER' => array('USER', false),
				'PHONE' => array('PHONE', false),
				'EMAIL ADDRESS' => array('EMAIL ADDRESS', false),
				);
		}
	 
		/**
		 * Get the table data
		 *
		 * @return Array
		 */
		private function table_data()
		{
			
			$data = array();
			global $wpdb;
			$table_name = $wpdb->prefix . 'quotes';
			$all_quote_array = $wpdb->get_results( "SELECT * FROM ".$table_name." ORDER BY id DESC ", OBJECT );
			
			foreach($all_quote_array as $quote_detail){

				$all_meta_for_user = get_user_meta($quote_detail->user_id);
				$user_data = get_userdata($quote_detail->user_id);
				$post_data = get_post($quote_detail->post_id);

				$data[] = array(
						'ID'          	=> $quote_detail->id,
						'TITLE'  		=> $post_data->post_title,
						'QUOTE DETAIL'  => $quote_detail->detail,
						'USER'			=> $user_data->user_nicename,
						'PHONE'			=> $all_meta_for_user['khadem_contact_number'][0],
						'EMAIL ADDRESS'	=> $user_data->user_email,
						'ACTION'      	=> '<a href="'.wp_nonce_url(admin_url('options.php?page=delete-quote-khadem&ID='.$quote_detail->id.''), 'doing_something', 'my_nonce').'" class="button button-primary">Delete</a>'
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
				case 'TITLE':
				case 'QUOTE DETAIL':
				case 'USER':
				case 'PHONE':
				case 'EMAIL ADDRESS':
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
			$order = 'desc';
	 
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


