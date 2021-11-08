<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="site">
				<div class="menu-foot1-container"><ul id="menu-foot1" class="menu"><li id="menu-item-130" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-130"><a href="#">Message from Director/ Principal</a></li>
<li id="menu-item-131" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-131"><a href="#">Infrastructure &#038; Facilities</a></li>

</ul></div>				<div class="foot-logo">				<?php
				$custom_logo_id = get_theme_mod( 'custom_logo' );
				$logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
				
				if ( has_custom_logo() ) {
					echo '<img src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '">';
				} else {
					echo '<h1>' . get_bloginfo('name') . '</h1>';
				}
				?>
				</div>
				<div class="menu-foot2-container">
					<ul id="menu-foot2" class="menu">
<li id="menu-item-138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"><a href="#">Kritika (Magazine)</a></li>
<li id="menu-item-135" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"><a href="#">Curriculum</a></li>
</ul></div>			</div><!-- .site -->
		</footer><!-- #colophon -->
			<div class="site">

				<div class="site-info">Copyright © <a href="#" rel="home"><?php echo get_bloginfo( 'name' ); ?></a> <br>
All Rights Reserved.</div><!-- .site-info -->
				<div class="site-generator">
					<div class="menu-branding-container"><ul id="menu-branding" class="menu"><li id="menu-item-140" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-140"></li>
</ul></div>				</div><!-- .site-generator -->
			</div><!-- .site -->
	</div><!-- #page -->

	<script type='text/javascript' src='<?php bloginfo("template_directory"); ?>/wp-content/plugins/responsive-tabs/inc/js/rtbs.min5fc8.js?ver=4.0.4'
		id='rtbs-js'></script>


		<script type='text/javascript'
		src='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ditty-news-ticker/inc/static/js/swiped-events.min8daf.js?ver=1.1.4'
		id='swiped-events-js'></script>
		<script type='text/javascript' id='ditty-news-ticker-js-extra'>
		/* <![CDATA[ */
		var mtphr_dnt_vars = { "is_rtl": "" };
/* ]]> */
	</script>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
	<script>
		jQuery(document).ready(function ($) {
			$('#mtphr-dnt-18').ditty_news_ticker({
				id: '18',
				type: 'scroll',
				scroll_direction: 'up',
				scroll_speed: 3,
				scroll_pause: 1,
				scroll_spacing: 25,
				scroll_init: 0,
				scroll_init_delay: 2,
				rotate_type: 'slide_up',
				auto_rotate: 1,
				rotate_delay: 7,
				rotate_pause: 0,
				rotate_speed: 10,
				rotate_ease: 'easeInOutQuint',
				nav_reverse: 0,
				disable_touchswipe: 0,
				offset: 20,
				after_load: function ($ticker) {
				},
				before_change: function ($ticker) {
				},
				after_change: function ($ticker) {
				}
			});
		});
	</script>
	        <script type='text/javascript' id='metaslider-flex-slider-js-after'>
var metaslider_176 = function($) {$('#metaslider_176').addClass('flexslider');
            $('#metaslider_176').flexslider({ 
                slideshowSpeed:4000,
                animation:"fade",
                controlNav:false,
                directionNav:false,
                pauseOnHover:false,
                direction:"horizontal",
                reverse:false,
                animationSpeed:600,
                prevText:"&lt;",
                nextText:"&gt;",
                fadeFirstSlide:true,
                slideshow:true
            });
            $(document).trigger('metaslider/initialized', '#metaslider_176');
        };
        var timer_metaslider_176 = function() {
            var slider = !window.jQuery ? window.setTimeout(timer_metaslider_176, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_176, 1) : metaslider_176(window.jQuery);
        };
        timer_metaslider_176();
</script>
<script type='text/javascript'
		src='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ditty-news-ticker/inc/static/js/ditty-news-ticker.minf8c9.js?ver=1630515521'
		id='ditty-news-ticker-js'></script>
		<script type='text/javascript'
		src='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ml-slider/assets/sliders/flexslider/jquery.flexslider.mina2f3.js?ver=3.23.0'
		id='metaslider-flex-slider-js'></script>
</body>

</html>