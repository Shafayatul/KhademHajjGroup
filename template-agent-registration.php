<?php /*Template Name: Agent Registration*/
ob_start();
get_header();
?>
<style type="text/css">
            .mycolor{
            color : #72c02c;
        }        
        .myborder{
            padding: 20px;;
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
$message="";
if(isset($_POST["email"])){

    $nonce = $_REQUEST['_wpnonce'];
    if (wp_verify_nonce( $nonce, 'hiddent_csrf_check' ) ) {

      $user_name = sanitize_text_field( $_POST["email"] );
      $password = sanitize_text_field( $_POST["password"] );
      $password_confirmation = sanitize_text_field( $_POST["confirm_password"] );
      $user_email = sanitize_email( $_POST["email"] );
      $contact_number = sanitize_text_field( $_POST["contact_number"] );
      $company = sanitize_text_field( $_POST["company"] );
      $address = sanitize_text_field( $_POST["address"] );
      $name = sanitize_text_field( $_POST["user_name"] );


      if (!filter_var($user_email, FILTER_VALIDATE_EMAIL) === false) {

        // email valid
        if($password == $password_confirmation){

          // passwords match 
          $user_id = username_exists( $user_name );
          if ( !$user_id and email_exists($user_email) == false ) {
            $user_id = wp_create_user( $user_name, $password, $user_email );


            wp_update_user( array( 'ID' => $user_id, 'user_nicename' => $name ) );

            add_user_meta( $user_id, 'khadem_account_type', 'Agent');
            add_user_meta( $user_id, 'khadem_contact_number', $contact_number);
            add_user_meta( $user_id, 'khadem_company', $company);
            add_user_meta( $user_id, 'khadem_address', $address);
  
                       

            // log in after sign in
            //$message = khademClientLogin();
            wp_set_current_user( $user_id);
            wp_set_auth_cookie( $user_id, true, false );
            do_action( 'wp_login', $user_name );
            wp_redirect( site_url("") );
            exit;
            
          }else{
            $message = 'User already exists. Please change the username or email.';           
          }
        }else{

          // passwords do not match
          $message = 'Passwords do not match.';          
        }
      } else {

        // email not valid
        $message = $user_email.'  is not a valid email address.';      
      }

    }else{

      exit; // CSRF attack

    }
  }
?>
<div class="container">
    <div class="row">
        <div class="col-md-6  mx-auto">
             <div class="row myborder">
                <h2 style="color: #f09d02;" class="text-center">Sign Up Now</h2><hr>

                <form id="signup-form" method="post">

                    <?php
                        if ($message !="") {
                            echo '<div class="alert alert-danger">
                                  <strong>Error!</strong> '.$message.'
                                </div>';
                        }
                    ?>


                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Name', 'khadem');?>" name="user_name" value="<?php echo $_POST['user_name'];?>" id="username type="text">                                                
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Email', 'khadem');?>" name="email" value="<?php echo $_POST['email'];?>" id="fname type="email">                                    
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Password', 'khadem');?>" name="password" value="<?php echo $_POST['password'];?>" id="password type="password">                                    
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Confirm Password', 'khadem');?>" name="confirm_password" value="<?php echo $_POST['confirm_password'];?>" id="password_confirm type="password">                                    
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Address', 'khadem');?>" name="address" value="<?php echo $_POST['address'];?>" id="address type="text">                                    
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Contact Number', 'khadem');?>" name="contact_number" value="<?php echo $_POST['contact_number'];?>" id="contact_number type="text">
                    </div>

                    <div class="input-group margin-bottom-20">
                        <input required="required" size="60" maxlength="255" class="form-control" placeholder="<?php echo __('Company', 'khadem');?>" name="company" value="<?php echo $_POST['company'];?>" type="text">
                    </div>

                    <?php wp_nonce_field( 'hiddent_csrf_check' );?>

                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-gold pull-left" type="submit" name="signUpButton"><?php echo __('Sign Up', 'khadem');?></button>
                        </div>
                    </div>                    
                </form> 
            </div>
        </div>        
    </div>
</div>
<?php get_footer();?>