<?php


/**
* Custom Post Type
*/
add_action('init', 'khadem_custom_post_type'); // Add our HTML5 Blank Custom Post Type
function khadem_custom_post_type()
{
    register_post_type( 'faq',                         
        array(
            'labels' => array(
                'name' => __( 'Faq' ),
                'singular_name' => __( 'Faq' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Faq' ),
                'edit_item' => __( 'Edit Faq' ),
                'new_item' => __( 'New Faq' ),
                'view_item' => __( 'View Faq' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Faq you are looking for.' )
                ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 3,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-post-status', 
            'taxonomies' => array('faq_category'),
            // 'capability_type' => 'page',
            // 'rewrite' => array( 'slug' => 'Faq' ),
            // 'supports' => array( 'title', 'editor', 'custom-fields' )// if thumbnail needed, then add ",'thumbnail'"
        )
    );
    register_post_type( 'umrah',                         
        array(
            'labels' => array(
                'name' => __( 'Umrah' ),
                'singular_name' => __( 'Umrah' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Umrah' ),
                'edit_item' => __( 'Edit Umrah' ),
                'new_item' => __( 'New Umrah' ),
                'view_item' => __( 'View Umrah' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Umrah you are looking for.' )
                ),
            'taxonomies' => array('umrah_category'),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 4,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-id-alt', 
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
    register_post_type( 'hajj',                         
        array(
            'labels' => array(
                'name' => __( 'Hajj' ),
                'singular_name' => __( 'Hajj' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Hajj' ),
                'edit_item' => __( 'Edit Hajj' ),
                'new_item' => __( 'New Hajj' ),
                'view_item' => __( 'View Hajj' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Hajj you are looking for.' )
                ),
            'taxonomies' => array('hajj_category'),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 5,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-id-alt', 
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
    register_post_type( 'hotel',                         
        array(
            'labels' => array(
                'name' => __( 'Hotel' ),
                'singular_name' => __( 'Hotel' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Hotel' ),
                'edit_item' => __( 'Edit Hotel' ),
                'new_item' => __( 'New Hotel' ),
                'view_item' => __( 'View Hotel' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Hotel you are looking for.' )
                ),
            'taxonomies' => array('hotel_category'),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 6,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-id-alt', 
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
    register_post_type( 'scheduled_package',                         
        array(
            'labels' => array(
                'name' => __( 'Scheduled Package' ),
                'singular_name' => __( 'Scheduled Package' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Scheduled Package' ),
                'edit_item' => __( 'Edit Scheduled Package' ),
                'new_item' => __( 'New Scheduled Package' ),
                'view_item' => __( 'View Scheduled Package' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Scheduled Package you are looking for.' )
                ),
            'taxonomies' => array('scheduled_package_category'),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 7,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-id-alt', 
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields')
        )
    );

    register_post_type( 'ticket_visa',                         
        array(
            'labels' => array(
                'name' => __( 'Ticket + Visa Package' ),
                'singular_name' => __( 'Ticket + Visa Package' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Ticket + Visa Package' ),
                'edit_item' => __( 'Edit Ticket + Visa Package' ),
                'new_item' => __( 'New Ticket + Visa Package' ),
                'view_item' => __( 'View Ticket + Visa Package' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Ticket + Visa Package you are looking for.' )
                ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => true,
            'menu_position' => 8,
            'has_archive' => true,
            'hierarchical' => false, 
            'menu_icon' => 'dashicons-id-alt', 
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields')
        )
    );



}




/**
* register a custom category for custom post type
*/
function khadem_register_custom_taxonomy() {
  $labels = array(
    'name'              => _x( 'Faq Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Faq Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Faq Categories' ),
    'all_items'         => __( 'All Faq Categories' ),
    'parent_item'       => __( 'Parent Faq Category' ),
    'parent_item_colon' => __( 'Parent Faq Category:' ),
    'edit_item'         => __( 'Edit Faq Category' ), 
    'update_item'       => __( 'Update Faq Category' ),
    'add_new_item'      => __( 'Add New Faq Category' ),
    'new_item_name'     => __( 'New Faq Category' ),
    'menu_name'         => __( 'Faq Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'faq_category', 'Faq', $args );


  $labels = array(
    'name'              => _x( 'Umrah Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Umrah Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Umrah Categories' ),
    'all_items'         => __( 'All Umrah Categories' ),
    'parent_item'       => __( 'Parent Umrah Category' ),
    'parent_item_colon' => __( 'Parent Umrah Category:' ),
    'edit_item'         => __( 'Edit Umrah Category' ), 
    'update_item'       => __( 'Update Umrah Category' ),
    'add_new_item'      => __( 'Add New Umrah Category' ),
    'new_item_name'     => __( 'New Umrah Category' ),
    'menu_name'         => __( 'Umrah Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'umrah_category', 'Umrah', $args );


  $labels = array(
    'name'              => _x( 'Hajj Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Hajj Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Hajj Categories' ),
    'all_items'         => __( 'All Hajj Categories' ),
    'parent_item'       => __( 'Parent Hajj Category' ),
    'parent_item_colon' => __( 'Parent Hajj Category:' ),
    'edit_item'         => __( 'Edit Hajj Category' ), 
    'update_item'       => __( 'Update Hajj Category' ),
    'add_new_item'      => __( 'Add New Hajj Category' ),
    'new_item_name'     => __( 'New Hajj Category' ),
    'menu_name'         => __( 'Hajj Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'hajj_category', 'Faq', $args );


  $labels = array(
    'name'              => _x( 'Hotel Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Hotel Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Hotel Categories' ),
    'all_items'         => __( 'All Hotel Categories' ),
    'parent_item'       => __( 'Parent Hotel Category' ),
    'parent_item_colon' => __( 'Parent Hotel Category:' ),
    'edit_item'         => __( 'Edit Hotel Category' ), 
    'update_item'       => __( 'Update Hotel Category' ),
    'add_new_item'      => __( 'Add New Hotel Category' ),
    'new_item_name'     => __( 'New Hotel Category' ),
    'menu_name'         => __( 'Hotel Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'hotel_category', 'Faq', $args );


  $labels = array(
    'name'              => _x( 'Scheduled Package Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Scheduled Package Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Scheduled Package Categories' ),
    'all_items'         => __( 'All Scheduled Package Categories' ),
    'parent_item'       => __( 'Parent Scheduled Package Category' ),
    'parent_item_colon' => __( 'Parent Scheduled Package Category:' ),
    'edit_item'         => __( 'Edit Scheduled Package Category' ), 
    'update_item'       => __( 'Update Scheduled Package Category' ),
    'add_new_item'      => __( 'Add New Scheduled Package Category' ),
    'new_item_name'     => __( 'New Scheduled Package Category' ),
    'menu_name'         => __( 'Scheduled Package Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'scheduled_package_category', 'Faq', $args );

}
add_action( 'init', 'khadem_register_custom_taxonomy', 0 );



/**
* Custom thumbnails with differnt size
*/
add_theme_support('post-thumbnails');
if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}





/**
 * WordPress Bootstrap Pagination
 */
function wp_bootstrap_pagination( $args = array() ) {
    
    $defaults = array(
        'range'           => 4,
        'custom_query'    => FALSE,
        'previous_string' => __( 'Previous', 'text-domain' ),
        'next_string'     => __( 'Next', 'text-domain' ),
        'before_output'   => '<nav aria-label="Page navigation example"><ul class="pagination justify-content-center">',
        'after_output'    => '</nav></ul>'
    );
    
    $args = wp_parse_args( 
        $args, 
        apply_filters( 'wp_bootstrap_pagination_defaults', $defaults )
    );
    
    $args['range'] = (int) $args['range'] - 1;
    if ( !$args['custom_query'] )
        $args['custom_query'] = @$GLOBALS['wp_query'];
    $count = (int) $args['custom_query']->max_num_pages;
    $page  = intval( get_query_var( 'paged' ) );
    $ceil  = ceil( $args['range'] / 2 );
    
    if ( $count <= 1 )
        return FALSE;
    
    if ( !$page )
        $page = 1;
    
    if ( $count > $args['range'] ) {
        if ( $page <= $args['range'] ) {
            $min = 1;
            $max = $args['range'] + 1;
        } elseif ( $page >= ($count - $ceil) ) {
            $min = $count - $args['range'];
            $max = $count;
        } elseif ( $page >= $args['range'] && $page < ($count - $ceil) ) {
            $min = $page - $ceil;
            $max = $page + $ceil;
        }
    } else {
        $min = 1;
        $max = $count;
    }
    
    $echo = '';
    $previous = intval($page) - 1;
    $previous = esc_attr( get_pagenum_link($previous) );
    
    $firstpage = esc_attr( get_pagenum_link(1) );
    if ( $firstpage && (1 != $page) )
        $echo .= '';
    if ( $previous && (1 != $page) )
        $echo .= '<li class="page-item"><a class="page-link" href="' . $previous . '" title="' . __( 'previous', 'text-domain') . '">' . $args['previous_string'] . '</a></li>';
    
    if ( !empty($min) && !empty($max) ) {
        for( $i = $min; $i <= $max; $i++ ) {
            if ($page == $i) {
                $echo .= '<li class="page-item"><span class="page-link">' . str_pad( (int)$i, 2, '0', STR_PAD_LEFT ) . '</span></li>';
            } else {
                $echo .= sprintf( '<li class="page-item"><a class="page-link" href="%s">%002d</a></li>', esc_attr( get_pagenum_link($i) ), $i );
            }
        }
    }
    
    $next = intval($page) + 1;
    $next = esc_attr( get_pagenum_link($next) );
    if ($next && ($count != $page) )
        $echo .= '<li class="page-item"><a class="page-link" href="' . $next . '" title="' . __( 'next', 'text-domain') . '">' . $args['next_string'] . '</a></li>';
    
    $lastpage = esc_attr( get_pagenum_link($count) );
    if ( $lastpage ) {
        $echo .= '';
    }
    if ( isset($echo) )
        echo $args['before_output'] . $echo . $args['after_output'];
}



/**
* Primary Menu
*/
require_once('includes/wp-bootstrap-navwalker.php');


