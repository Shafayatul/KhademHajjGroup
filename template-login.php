<?php /*Template Name: Login*/
ob_start();
get_header();
?>
<style type="text/css">
            .mycolor{
            color : #72c02c;
        }        
        .myborder{
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: 0px 0px 3px 0px #7E7E7E;
            -moz-box-shadow:    0px 0px 3px 0px #7E7E7E;
            box-shadow:         0px 0px 3px 0px #7E7E7E;
        }
        .mybutton{
            position: relative;
            left: 50%;
            top: 193px;

        }
        .margin-bottom-20 {
            margin-bottom: 20px;

        }
        .btn-u:hover {
            background: #f09d02;
        }
        .btn-u:hover, .btn-u:focus, .btn-u:active, .btn-u.active, .open .dropdown-toggle.btn-u {
            background: #f09d02;
        }
        .btn-u:hover {
            color: #fff;
            text-decoration: none;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        .input-group-addon {
            border-right: 0;
            /*color: #b3b3b3;*/
            font-size: 14px;
            background: #fff;
            padding: 6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            color: #555;
            text-align: center;
            background-color: #eee;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .input-group .form-control {
            float: left;
            width: 100%;
            margin-bottom: 0;
        }
        .form-control {
            box-shadow: none;
        }
        .form-control {
            display: block;
            width: 100%;
            height: 34px !important;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.428571429;
            color: #555;
            background-color: #fff;
            background-image: none;
            /*border: 1px solid  #72c02c !important;*/
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            /*-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;*/
            /*transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;*/
        }
        #signup-form{
            width: 100%;
        }
</style>

<br />
<?php
  if(isset($_POST["Login"])){  

    $password  = esc_attr($_POST["password"]);
    $email     = esc_attr($_POST["email"]);
    $user_login     = $email;



    $creds = array();
    $creds['user_login'] = $user_login;
    $creds['user_password'] = $password;
    $creds['remember'] = true;

    $user = wp_signon( $creds, false );

    $userID = $user->ID;
    ////////////////////////
    wp_set_current_user( $userID);
    wp_set_auth_cookie( $userID, true, false );
    do_action( 'wp_login', $user_login );


    if(is_user_logged_in()){
      wp_redirect( site_url("/") );
      exit;
    }else{
      $message = 'User email or password not correct. Please try again.';         
    }  

  }
?>
<div class="container">
    <div class="row">
        <div class="col-md-6  mx-auto">
             <div class="row myborder">
                <h2 style="color: #f09d02;" class="text-center">Please login</h2><hr>

                <form id="signup-form" method="post">

                    <?php
                        if ($message !="") {
                            echo '<div class="alert alert-danger">
                                  <strong>Error!</strong> '.$message.'
                                </div>';
                        }
                    ?>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="Email" name="email" value="<?php echo $_POST['email'];?>" id="fname type="email">                                    
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="Password" name="password" value="<?php echo $_POST['password'];?>" id="password" type="password">                                    
                    </div>


                    <?php wp_nonce_field( 'hiddent_csrf_check' );?>

                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-gold pull-left" type="submit" name="Login">Login</button>
                        </div>
                    </div>                    
                </form> 
            </div>
        </div>        
    </div>
</div>
<?php get_footer();?>