<?php get_header();?> 
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
                </div>
            <?php endwhile; ?>
        <?php else : ?>
            <h3><?php _e('404 Error&#58; Not Found'); ?></h3>
        <?php endif; ?>
    </section>
<?php get_footer();?>