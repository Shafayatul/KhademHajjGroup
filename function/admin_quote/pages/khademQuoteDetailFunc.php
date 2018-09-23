<?php
global $wpdb;
$post_id = $_GET["ID"];

$post_info = get_post( $post_id, 'ARRAY_A'); 

var_dump($post_info);
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
            <td class="column-columnname">Title: </td>
            <td class="column-columnname"><?php echo $post_info['post_title'];?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Published at: </td>
            <td class="column-columnname"><?php echo $post_info['post_date'];?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Type: </td>
            <td class="column-columnname"><?php echo strtoupper($post_info['post_type']);?></td>
        </tr>
        <tr class="alternate">
            <td class="column-columnname">Content: </td>
            <td class="column-columnname"><?php echo $post_info['post_content'];?></td>
        </tr>

    </tbody>
</table>
</div>