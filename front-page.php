<?php get_header();
/*
Template Name: Home
*/
?>
        <div id="home-slider">
            <?php
            $args = array(
                'post_type'   => 'post',
                'order' => 'ASC',
                'post_status' => 'publish',
                'posts_per_page' => -1,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'category',
                        'field' => 'slug',
                        'terms' => 'slider'
                    )
                 )
             );


             
            $slider = new WP_Query( $args );
            ?>
            <?php if( $slider->have_posts() ) : ?>
                <?php while( $slider->have_posts() ) : $slider->the_post(); ?>
                    <?php //pll_the_languages( array( 'post_id' => $slider->ID ) ); ?>
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
                        'post_type'   => 'post',
                        'order' => 'ASC',
                        'post_status' => 'publish',
                        'posts_per_page' => -1,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'category',
                                'field' => 'slug',
                                'terms' => 'umrah'
                            )
                         )
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

                <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
                  <article class="box">
                    <a href="" target="_blank">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/umrah_other_country.jpg" alt="Fjords" style="width:100%">
                        <div class="text-center title-package-home">
                            <span class="span-title">Omrah + Other COuntry</span>  
                            <span class="span-sub-title"><?php echo __('Best offer going on', 'khadem');?></span>
                        </div>
                        <div class="details">
                            <h4 ><a href="<?php the_permalink();?>"><?php echo __('Enjoy both tour and umrah', 'khadem');?></a></h4>
                            <p>
                                <?php echo __('Here will be some little description for visitor.', 'khadem');?><br>
                            </p>
                            <p>
                                <h5 class="price-tag"><?php echo __('Price', 'khadem');?>: <?php echo __('Variable', 'khadem');?></h5>
                            </p>
                            <a href="<?php the_permalink();?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                        </div>
                    </a>
                  </article>
                </div>
                </div>        
            </div>

        </section>


        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        <?php echo __('HAJJ PACKAGES', 'khadem');?>
                    </span>
                </a>
            </h6>

            <div class="container">
                <div class="row image-box style7">

                    <?php
                    $args = array(
                        'post_type'   => 'post',
                        'order' => 'ASC',
                        'post_status' => 'publish',
                        'posts_per_page' => -1,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'category',
                                'field' => 'slug',
                                'terms' => 'hajj'
                            )
                         )
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
            </div>
        </section>

        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        <?php echo __('Hotel Makkah', 'khadem');?>
                    </span>
                </a>
            </h6>
            <div class="container">
                <div class="row image-box style7">
                    <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mk1.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('ECONOMY', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-makkah/economy-hotel-makkah/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mk2.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('3 STAR (NEAR)', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-makkah/3-star-near-hotel-makkah/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mk3.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('3 STAR(DISTANCE)', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-makkah/3-stardistance-hotel-makkah/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mk4.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('5 STAR', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-makkah/5-star-hotel-makkah/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>


                </div>        
            </div>
        </section>


        <section id="content">
            <h6 class="font_6 text-center" >
                <a href="" target="_self">
                    <span class="home-big-title">
                        <?php echo __('Hotel Madina', 'khadem');?>
                    </span>
                </a>
            </h6>
            <div class="container">
                <div class="row image-box style7">
                    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mh1.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('ECONOMY', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-madina/economy-hotel-madina/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mh2.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('3 STAR', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-madina/3-star-hotel-madina/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
                      <article class="box">
                        <a href="" target="_blank">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/mh3.jpg" alt="Fjords" style="width:100%">
                            <div class="text-center title-package-home">
                                <span class="span-title"><?php echo __('5 STAR', 'khadem');?></span>  
                            </div>
                            <div class="details">
                                <a href="<?php echo site_url('/category/hotel/hotel-madina/5-star-hotel-madina/');?>"><button class="btn btn-gold btn-block"><?php echo __('See Detail', 'khadem');?></button></a>
                            </div>
                        </a>
                      </article>
                    </div>
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