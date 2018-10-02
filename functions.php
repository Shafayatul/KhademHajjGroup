<?php
/**
* show admin bar to only admin
*/
add_action('after_setup_theme', 'remove_admin_bar');
function remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}




/**
 * Load translations for khademhajjtheme
 */
function khadem_hajj_group_theme_setup(){
    load_theme_textdomain('khademhajjtheme', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'khadem_hajj_group_theme_setup');


/**
* Add login/logout link to naviagation menu
*/
function add_login_out_item_to_menu( $items, $args ){

    if(pll_current_language() == 'en'){

        if( is_admin() ||  $args->theme_location != 'header menu en' )
            return $items; 
        $redirect = site_url();
        if( is_user_logged_in( ) ){
            $link = '<a  class="nav-link" href="' . wp_logout_url( $redirect ) . '" title="' .  __( 'Logout', 'khadem' ) .'">' . __( 'Logout', 'khadem' ) . '</a>';
            return $items.= '<li class="nav-item" class="menu-item menu-item-type-post_type menu-item-object-page nav-item">'. $link . '</li>';
        }else{
            return $items;
        }       
         
    }else{
        if( is_admin() ||  $args->theme_location != 'header menu bd' )
            return $items; 
        $redirect = site_url();
        if( is_user_logged_in( ) ){
            $link = '<a  class="nav-link" href="' . wp_logout_url( $redirect ) . '" title="' .  __( 'Logout', 'khadem' ) .'">' . __( 'Logout', 'khadem' ) . '</a>';
            return $items.= '<li class="nav-item" class="menu-item menu-item-type-post_type menu-item-object-page nav-item">'. $link . '</li>';
        }else{
            return $items;
        }      
    }
    
}
add_filter( 'wp_nav_menu_items', 'add_login_out_item_to_menu', 50, 2 );




/**
* Run while activating the theme
*/
add_action('after_switch_theme', 'khadem_theme_activation');

function khadem_theme_activation () {
    global $wpdb;

    $table_name = $wpdb->prefix . 'quotes';


    if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
        $sql = "CREATE TABLE $table_name (
          id int(11) NOT NULL AUTO_INCREMENT,
          user_id int(11) DEFAULT NULL,
          post_id int(11) DEFAULT NULL,
          detail text DEFAULT NULL,
          start_date datetime DEFAULT NOW(),
          PRIMARY KEY id (id)
        );";

        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }
}




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


/***/


/**
 * WordPress Bootstrap Pagination
 */
require_once('includes/wp-bootstrap-pagination.php');



/**
* Primary Menu
*/
require_once('includes/wp-bootstrap-navwalker.php');


/*
* allow admin to view Agent
*/

include('function/admin_agent/index.php');

/*
* allow admin to view customer
*/

include('function/admin_customer/index.php');
/*
* allow admin to view customer
*/

include('function/admin_quote/index.php');