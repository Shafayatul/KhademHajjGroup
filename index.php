<?php get_header();?> 
    <section id="content">
        <h6 class="font_6 text-center" >
            <a href="" target="_self">
                <span class="home-big-title">
                    BLOG
                </span>
            </a>
        </h6>
        <div class="container">
            <div class="row">
                <?php if(have_posts()): ?>
                    <?php while(have_posts()):the_post(); ?> 
                        <div class="col-md-12">
                            <h4 class="classic-title"><span><a href="<?php the_permalink(); ?>"><?php the_title();?></a></span></h4>
                            <p><?php the_excerpt ();?></p>
                            <a class="btn btn-gold btn-sm" href="<?php the_permalink(); ?>">Read More <i class="fa fa-angle-right"></i></a>
                            <?php if (($wp_query->current_post +1) != ($wp_query->post_count)) { ?>
                                <div id="small-margin-slider2"></div>
                            <?php } ?>                            
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <br>

            <div class="row">
                <div class="col-xs-6 text-left">
                    <?php next_posts_link( 'Older posts' ); ?>
                </div>
                <div class="col-xs-6 text-right">
                    <?php previous_posts_link( 'Newer posts' ); ?>
                </div>
            </div>            
        </div>
    </section>
<?php get_footer();?>