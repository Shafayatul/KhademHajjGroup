<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Google Map -->
        <meta http-equiv="x-ua-compatible" content="IE=edge">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

        <!-- Slider -->
        <link href="<?php echo get_template_directory_uri(); ?>/src/skdslider.css" rel="stylesheet">

        <!-- news ticker -->
        <link href="<?php echo get_template_directory_uri(); ?>/css/ticker.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="<?php echo get_template_directory_uri(); ?>/css/style.css" rel="stylesheet">

        <!-- Css For WP -->
        <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>"/>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-3.0.0.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-migrate-3.0.1.js"></script>
        <title>Khadem Hajj Group</title>

        <?php wp_head();?>
    </head>
    <body>
    <!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

        <header id="header" class="navbar-static-top">
            <div class="topnav hidden-xs">
                <div class="container">
                    <div style="width: 100%; display: block; overflow: hidden;">
                        <div class="top-part-1">
                            <div class="ticker-container">
                              <div class="ticker-caption">
                                <p>Scheduled Tour</p>
                              </div>
                              <ul>
                                <?php
                                $args = array(
                                    'post_type'   => 'post',
                                    'order' => 'DESC',
                                    'post_status' => 'publish',
                                    'posts_per_page' => -1,
                                    'tax_query' => array(
                                        array(
                                            'taxonomy' => 'category',
                                            'field' => 'slug',
                                            'terms' => 'scheduled-package'
                                        )
                                     )
                                 );

                                
                                $args = array(
                                  'post_type'   => 'scheduled_package',
                                  'post_status' => 'publish',
                                  'posts_per_page' => -1
                                 );
                                 
                                $scheduled_package = new WP_Query( $args );
                                ?>
                                <?php if( $scheduled_package->have_posts() ) : ?>
                                    <?php while( $scheduled_package->have_posts() ) : $scheduled_package->the_post(); ?>
                                        <div>
                                          <li><span>[<?php echo the_field( 'Scheduled-Date' ); ?>] - <?php echo get_the_title(); ?> <a href="<?php the_permalink();?>" class=" btn-gold">Detail</a></span></li>
                                        </div>
                                    <?php endwhile; ?>    
                                <?php endif; ?>
                              </ul>
                            </div>
                        </div>
                        <div class="top-part-2">
                            <ul class="quick-menu pull-left custom-top-menu">
                                <li><a href="tel:+44 20 7377 0119"><i class="fa fa-phone"></i>&nbsp;&nbsp;01919929292, 01913920240</a></li>
                            </ul>
                        </div>
                        <div class="top-part-3">
                            <style>
                                .lang-item {
                                    display: inline;
                                }
                                .lang-item {
                                    list-style: none;
                                }
                                #access img {
                                    margin-bottom: 0px;
                                }
                            </style>
                            <?php pll_the_languages(['show_flags' => 1, 'show_names' => 0]); ?>

                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="<?php bloginfo('home');?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" width="150" height="30" alt="">
                        <p class="font_9" style="font-size:12px; line-height:1.55em; text-align:left;">
                            <span style="font-size:12px;">
                                <span class="color_15">+923219333305 +923219366661</span>
                            </span>
                        </p>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <!-- <span class="navbar-toggler-icon"> -->
                            <i class="fa fa-bars menu-mobile-bars"></i>
                        <!-- </span> -->
                    </button>
                    <?php
                        wp_nav_menu( array(
                            'menu'              => 'header', // match name to yours
                            'theme_location'    => 'header',
                            'container'         => 'div', // no need to wrap `wp_nav_menu` manually
                            'container_class'   => 'collapse navbar-collapse',
                            'container_id'      => 'navbarResponsive',
                            'menu_class'        => 'navbar-nav ml-auto',
                            'fallback_cb'       => false,
                            'depth'             => 2,
                            'walker'            => new WP_Bootstrap_Navwalker() // Use different Walker
                        ));
                    ?>

<!--                     <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>

                        </ul>
                    </div> -->
                </div>
            </nav>
        </header>
        <div id="small-margin-slider"></div>