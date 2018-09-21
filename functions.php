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
            // 'taxonomies' => array('faq_category'),
            // 'capability_type' => 'page',
            // 'rewrite' => array( 'slug' => 'Faq' ),
            // 'supports' => array( 'title', 'editor', 'custom-fields' )// if thumbnail needed, then add ",'thumbnail'"
        )
    );
    register_post_type( 'Umrah Package',                         
        array(
            'labels' => array(
                'name' => __( 'Umrah Package' ),
                'singular_name' => __( 'Umrah Package' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Umrah Package' ),
                'edit_item' => __( 'Edit Umrah Package' ),
                'new_item' => __( 'New Umrah Package' ),
                'view_item' => __( 'View Umrah Package' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Umrah Package you are looking for.' )
                ),
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
    register_post_type( 'Hajj Package',                         
        array(
            'labels' => array(
                'name' => __( 'Hajj Package' ),
                'singular_name' => __( 'Hajj Package' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New Hajj Package' ),
                'edit_item' => __( 'Edit Hajj Package' ),
                'new_item' => __( 'New Hajj Package' ),
                'view_item' => __( 'View Hajj Package' ),
                'not_found' => __( 'Sorry, we couldn\'t find the Hajj Package you are looking for.' )
                ),
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
}
/**
* register a custom category for faq
*/
function taxonomies_faq() {
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
}
add_action( 'init', 'taxonomies_faq', 0 );



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