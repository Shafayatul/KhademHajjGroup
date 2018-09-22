<?php
global $wpdb;
$user_id = $_GET["ID"];

$all_meta_for_user = get_user_meta($user_id);
$user_info = get_userdata( $user_id ); 

?>
<div class="wrap">
	<div ID="icon-users" class="icon32"></div>
	<h2>Detail:</h2>
<table class="widefat fixed" cellspacing="0">
    <thead>
    <tr>

            <th id="columnname" class="manage-column column-columnname" scope="col"> Name </th>
            <th id="columnname" class="manage-column column-columnname num" scope="col"> Value </th> 
    </tr>
    </thead>

    <tbody>
        <tr class="alternate">
            <td class="column-columnname">First name: </td>
            <td class="column-columnname"><?php echo $all_meta_for_user['green_first_name'][0];?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Last name: </td>
            <td class="column-columnname"><?php echo $all_meta_for_user['green_last_name'][0];?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Phone: </td>
            <td class="column-columnname"><?php echo $all_meta_for_user['green_phone'][0];?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Email: </td>
            <td class="column-columnname"><?php echo $user_info->user_email;?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Address: </td>
            <td class="column-columnname">
            	<ul>
					<?php
					$table_name = $wpdb->prefix . 'user_address';
					$allAddresses = $wpdb->get_results( "SELECT * FROM ".$table_name." WHERE user_id = '$user_id' ", OBJECT );

					if(count($allAddresses)!=0){
						foreach ($allAddresses as $singleAddress){
						?>
							<li>
								<label class="gt-radio-label">
									<p>
										<?php echo $singleAddress->full_name;?><br>
									    <?php echo $singleAddress->address1;?><br>
									    <?php echo $singleAddress->address2;?><br>
									    <?php echo $singleAddress->city.' '.$singleAddress->state.' '.$singleAddress->zip;?>
									    <?php if($singleAddress->is_primary == 1){?>
									    <span class="credit-card-primary">Primary</span>
									    <?php } ?>
									</p>
								</label>
							</li>
					<?php
						}	
					}else{
					?>
						<li class="empty">
							Customer doesn't have any addresses.
						</li>
					<?php
					}
					?>
				</ul>
            </td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Card: </td>
            <td class="column-columnname">

				<ul>
					<?php
					$table_name = $wpdb->prefix . 'user_card';
					$allCards = $wpdb->get_results( "SELECT * FROM ".$table_name." WHERE user_id = '$user_id' ", OBJECT );
					if(count($allCards)==0){
					?>

						<li class="empty">
							Customer doesn't have any card.
						</li>
					<?php
					}else{
						foreach ($allCards as $card) {
					?>
							<li>
								<label for="creditcard-14473" class="gt-radio-label">
								    <p>Card number: <?php echo $card->card_number;?><br>
								        Type of card: visa
								        <br>
								        <?php if($card->is_primary == 1){?>
									    <span class="credit-card-primary">Primary</span>
									    <?php } ?>
								       
								    </p>
								</label>
							</li>
					<?php
						}
					}
					?>												
				</ul>
            </td>
        </tr>

    </tbody>
</table>
</div>