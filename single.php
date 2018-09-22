<?php get_header();?> 
<?php
$message="";
if(isset($_POST["submit_quote"])){

    $nonce = $_REQUEST['_wpnonce'];
    if (wp_verify_nonce( $nonce, 'hiddent_csrf_check' ) ) {

      $post_id = sanitize_text_field( $_POST["post_id"] );
      $detail = sanitize_text_field( $_POST["detail"] );
      $user_id = get_current_user_id();

        $table_name = $wpdb->prefix . 'quotes'; //to get the table name
    
        $wpdb->insert($table_name, array(
           "user_id" => $user_id,
           "post_id" => $post_id,
           "detail" => $detail
        ));
        $message = 'Request has been submitted. We will contact you ASAP.';      
    }else{
      exit; // CSRF attack
    }
  }
?>
    <section id="content">

        <?php if(have_posts()) : ?>
            <?php while(have_posts())  : the_post(); ?>
                <h6 class="font_6 text-center" >
                    <a href="" target="_self">
                        <span class="home-big-title">
                            <?php the_title(); ?>
                        </span>
                    </a>
                </h6>
                <div class="container">
                    <div class="row style7 text-justify">
                        <div class="col-xs-12">
                            <?php the_content(); ?>
                        </div>
                    </div>

                    <?php if(get_post_type() != "post") : ?>
                        <div class="row">
                            <div class="col-xs-12 col-md-6 mx-auto">
                                <h3>As for quatation for this package</h3>

                                <?php if($message !="") : ?>
                                    <div class="alert alert-success" style="margin-top:18px;">
                                        <a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>
                                        <strong>Success!</strong> <?php echo $message;?>
                                    </div>
                                <?php endif; ?>

                                <?php if(is_user_logged_in()) : ?>
                                    <form method="post">
                                        <div class="form-group">
                                            <label for="detail" >What you want to know from us</label>
                                            <textarea class="form-control" rows="5" id="detail" name="detail"></textarea required="required">
                                        </div>
                                        <input type="hidden" name="post_id" value="<?php echo get_the_ID();?>">
                                        <?php wp_nonce_field( 'hiddent_csrf_check' );?>
                                        <button type="submit" class="btn btn-gold btn-block" name="submit_quote">Submit</button>
                                    </form>
                                <?php else : ?>
                                    <div class="alert alert-warning">
                                      <strong></strong> Please login or sign up to get quotation.
                                    </div>
                                <?php endif; ?>  
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endwhile; ?>
        <?php else : ?>
            <h3><?php _e('404 Error&#58; Not Found'); ?></h3>
        <?php endif; ?>


    </section>

<?php get_footer();?>