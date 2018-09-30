<?php /*Template Name: Ticket Visa*/
ob_start();
get_header();

$args = array(
    'post_type'   => 'post',
    'order' => 'DESC',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field' => 'slug',
            'terms' => 'ticket-visa'
        )
     )
 );
 
$ticket_visa = new WP_Query( $args );
?>

<div class="container">
    <div class="row mx-auto">
        
        <?php if( $ticket_visa->have_posts() ) : ?>
            <?php while( $ticket_visa->have_posts() ) : $ticket_visa->the_post(); ?>
                <div class="col-md-2">
                    <p>
                        <img src="<?php echo get_the_post_thumbnail_url();?>" width="100%" height="120px">
                    </p>
                    <p>
                        <b><?php echo get_the_title(); ?></b>
                        <br>
                        <?php echo get_the_content(); ?>                                
                    </p>
                    </div>
                 
            <?php endwhile; ?>    
        <?php endif; ?>

      </div> 
</div>


<?php get_footer();?>