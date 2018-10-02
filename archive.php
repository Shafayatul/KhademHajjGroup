<?php get_header();?> 
    <section id="content">
        <h6 class="font_6 text-center" >
            <a href="" target="_self">
                <span class="home-big-title">
                    <?php echo the_archive_title();?>
                </span>
            </a>
        </h6>


        <div class="container">
            <div class="row">
                <?php if(have_posts()): ?>
                    <?php while(have_posts()):the_post(); ?> 
                            <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
                              <article class="box">
                                <a href="" target="_blank">
                                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="Fjords" style="width:100%">
                                    <div class="text-center title-package-home">
                                        <span class="span-title"><?php echo get_the_title(); ?></span>  
                                        <span class="span-sub-title"><?php echo the_field( 'Subtitle-1' ); ?></span>
                                    </div>
                                    <div class="details">
                                        <h4 ><a href="<?php the_permalink();?>"><?php echo the_field( 'Subtitle-2' ); ?></a></h4>
                                        <p>
                                            <?php echo the_field( 'Small-Description' ); ?><br>
                                        </p>
                                        <p>
                                            <h5 class="price-tag"><?php echo __('Price', 'khadem');?>: <?php echo the_field( 'Price' ); ?></h5>
                                        </p>
                                        <a href="<?php the_permalink();?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                                    </div>
                                </a>
                              </article>
                            </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <br>
            <?php
              if ( function_exists('wp_bootstrap_pagination') )
                wp_bootstrap_pagination();
            ?>         
        </div>
    </section>
<?php get_footer();?>