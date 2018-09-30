<?php get_header();
/*
Template Name: Home
*/
?> 

        <div id="home-slider">
            <?php
            $args = array(
              'post_type'   => 'slider',
              'post_status' => 'publish',
              'posts_per_page' => -1
             );
             
            $slider = new WP_Query( $args );
            ?>
            <?php if( $slider->have_posts() ) : ?>
                <?php while( $slider->have_posts() ) : $slider->the_post(); ?>
                    <div class="slide">
                        <img src="<?php echo get_the_post_thumbnail_url(); ?>" />
                        <div class="slide-desc">
                            <h2><?php echo get_the_title(); ?></h2>
                            <p><?php echo get_the_content(); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>    
            <?php endif; ?>

        </div>

        <div class="container text-center" style="margin-top: 40px">
            <a href="<?php echo site_url('/ticket-visa/');?>">
                <button class="btn btn-gold btn-lg">Get Ticket + Visa Prices</button>
            </a>
        </div>
        

        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        <?php echo __('UMRAH PACKAGES', 'khadem');?>
                    </span>
                </a>
            </h6>

            <div class="container">
                <div class="row image-box style7">

                    <?php
                    $args = array(
                      'post_type'   => 'umrah',
                      'post_status' => 'publish',
                      'posts_per_page' => -1
                     );
                     
                    $umrah = new WP_Query( $args );
                    ?>
                    <?php if( $umrah->have_posts() ) : ?>
                        <?php while( $umrah->have_posts() ) : $umrah->the_post(); ?>
                            <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
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
                                            <?php echo the_field( 'Small-Description' ); ?>.<br>
                                        </p>
                                        <p>
                                            <h3 class="price-tag">Price: <?php echo the_field( 'Price' ); ?></h3>
                                        </p>
                                        <a href="<?php the_permalink();?>"><button class="btn btn-gold btn-block">See Detail</button></a>
                                    </div>
                                </a>
                              </article>
                            </div>
                        <?php endwhile; ?>    
                    <?php endif; ?>




                </div>        
            </div>

        </section>


        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        HAJJ PACKAGES
                    </span>
                </a>
            </h6>

            <div class="container">
                <div class="row image-box style7">

                    <?php
                    $args = array(
                      'post_type'   => 'hajj',
                      'post_status' => 'publish',
                      'posts_per_page' => -1
                     );
                     
                    $hajj = new WP_Query( $args );
                    ?>
                    <?php if( $hajj->have_posts() ) : ?>
                        <?php while( $hajj->have_posts() ) : $hajj->the_post(); ?>
                            <div class=" col-xs-12 col-sm-6 col-md-4 mx-auto">
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
                                            <?php echo the_field( 'Small-Description' ); ?>.<br>
                                        </p>
                                        <p>
                                            <h3 class="price-tag">Price: <?php echo the_field( 'Price' ); ?></h3>
                                        </p>
                                        <a href="<?php the_permalink();?>"><button class="btn btn-gold btn-block">See Detail</button></a>
                                    </div>
                                </a>
                              </article>
                            </div>
                        <?php endwhile; ?>    
                    <?php endif; ?>

                </div>        
            </div>
        </section>

        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        Hotels
                    </span>
                </a>
            </h6>
            <div class="container">
                <div class="row image-box style7">
                    <?php
                    $args = array(
                      'post_type'   => 'hotel',
                      'post_status' => 'publish',
                      'posts_per_page' => -1
                     );
                     
                    $hotel = new WP_Query( $args );
                    ?>
                    <?php if( $hotel->have_posts() ) : ?>
                        <?php while( $hotel->have_posts() ) : $hotel->the_post(); ?>
                            <div class=" col-xs-12 col-sm-6 col-md-4 mx-auto">
                              <article class="box">
                                <a href="<?php the_permalink();?>" target="_blank">
                                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="Fjords" style="width:100%">
                                    <div class="text-center title-package-home">
                                        <span class="span-title"><?php echo get_the_title(); ?></span>  
                                        <span class="span-sub-title"><?php echo the_field( 'Subtitle-1' ); ?></span>
                                    </div>
                                    <div class="details">
                                        <h4 ><a href="<?php the_permalink();?>"><?php echo the_field( 'Subtitle-2' ); ?></a></h4>
                                        <p>
                                            <?php echo the_field( 'Small-Description' ); ?>.<br>
                                        </p>
                                        <p>
                                            <h3 class="price-tag">Price: <?php echo the_field( 'Price' ); ?></h3>
                                        </p>
                                        <a href="<?php the_permalink();?>"><button class="btn btn-gold btn-block">See Detail</button></a>
                                    </div>
                                </a>
                              </article>
                            </div>
                        <?php endwhile; ?>    
                    <?php endif; ?>
                </div>        
            </div>
        </section>


        <section id="content">
            <br><br><br><br>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="thumbnail-slider">
                            <div class="inner">
                                <ul>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-adidas.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-nike.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-amazon.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-spotify.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-android.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-adidas.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-nike.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-amazon.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-spotify.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-android.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-android.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-adidas.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-nike.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-amazon.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-spotify.png"></a>
                                    </li>
                                    <li>
                                        <a class="thumb" href="<?php echo get_template_directory_uri(); ?>/img/small-slider/logo-android.png"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            
        </section>
        
<?php include(TEMPLATEPATH.'/home-footer.php');?>