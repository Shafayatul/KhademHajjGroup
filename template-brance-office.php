<?php /*Template Name: Brance Office*/
ob_start();
get_header();
?>
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
	        <div class="col-md-6"> 
	        	<address>
	        		<h4>
						Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
						Visit us at:<br>
						Example.com<br>
						Box 564, Disneyland<br>
						USA
					</h4>
				</address>
	        </div>
	        <div class="col-md-6">   
	        	<div id="map"></div>
	        </div>
	    </div>
	</div>
	<script src="https://maps.googleapis.com/maps/api/js?key="></script>
	<script type="text/javascript">
		jQuery(function () {

		    function initMap() {

		        var location = new google.maps.LatLng(50.0875726, 14.4189987);

		        var mapCanvas = document.getElementById('map');
		        var mapOptions = {
		            center: location,
		            zoom: 16,
		            panControl: false,
		            mapTypeId: google.maps.MapTypeId.ROADMAP
		        }
		        var map = new google.maps.Map(mapCanvas, mapOptions);

		    }

		    google.maps.event.addDomListener(window, 'load', initMap);

		    var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

			map.set('styles', styles);
		});
	</script>
</section>

<?php get_footer();?>