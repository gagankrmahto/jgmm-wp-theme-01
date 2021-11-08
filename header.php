<!DOCTYPE html>

<html lang="en-US">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>St. Jagat Gyan MM Public School</title>


	<!-- important css files  -->

	<link rel='stylesheet' id='menu-image-css' href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/menu-image/includes/css/menu-image459e.css?ver=3.0.4' type='text/css' media='all' />
	<link rel='stylesheet' id='twentyfourteen-lato-css' href='https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext' type='text/css' media='all' />
	<link rel='stylesheet' id='genericons-css' href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/jetpack/_inc/genericons/genericons/genericons128b.css?ver=3.1' type='text/css' media='all' />
	<link rel='stylesheet' id='twentyfourteen-style-css' href='<?php bloginfo("template_directory"); ?>/wp-content/themes/sms/stylef658.css?ver=5.8.1' type='text/css' media='all' />
	<!-- end of important css file -->
	<link rel='stylesheet' id='ditty-news-ticker-font-css'  href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ditty-news-ticker/inc/static/libs/fontastic/styles42d8.css?ver=2.3.10' type='text/css' media='all' />
<link rel='stylesheet' id='ditty-news-ticker-css'  href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ditty-news-ticker/inc/static/css/stylef8c9.css?ver=1630515521' type='text/css' media='all' />
<link rel='stylesheet' id='menu-image-css'  href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/menu-image/includes/css/menu-image459e.css?ver=3.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/jetpack/_inc/genericons/genericons/genericons128b.css?ver=3.1' type='text/css'
		media='all' />
		<link rel='stylesheet' id='dashicons-css' href='<?php bloginfo("template_directory"); ?>/wp-includes/css/dashicons.minf658.css?ver=5.8.1' type='text/css'
		media='all' />
		<link rel='stylesheet' id='metaslider-flex-slider-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ml-slider/assets/sliders/flexslider/flexslidera2f3.css?ver=3.23.0' type='text/css' media='all' property='stylesheet' />
	<link rel='stylesheet' id='metaslider-public-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/ml-slider/assets/metaslider/publica2f3.css?ver=3.23.0' type='text/css' media='all'
		property='stylesheet' />
		<link rel='stylesheet' id='twentyfourteen-lato-css'
		href='https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900%2C300italic%2C400italic%2C700italic&amp;subset=latin%2Clatin-ext'
		type='text/css' media='all' />
	<link rel='stylesheet' id='rtbs-css' href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/responsive-tabs/inc/css/rtbs_style.min5fc8.css?ver=4.0.4' type='text/css' media='all' />
	<link rel='stylesheet' id='nextgen_widgets_style-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/widget/static/widgets9fa9.css?ver=3.17'
		type='text/css' media='all' />

	<!-- responsive tabs -->
	<link rel='stylesheet' id='rtbs-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/responsive-tabs/inc/css/rtbs_style.min5fc8.css?ver=4.0.4' type='text/css'
		media='all' />
		<link rel='stylesheet' id='genericons-css'
		href='<?php bloginfo("template_directory"); ?>/wp-content/plugins/jetpack/_inc/genericons/genericons/genericons128b.css?ver=3.1' type='text/css'
		media='all' />
</head>

<body class="home page-template page-template-page-templates page-template-home page-template-page-templateshome-php page page-id-2 page-parent masthead-fixed full-width grid">
	<div id="page" class="hfeed">
		<div class="top-bar">
			<div class="site">
				<div class="menu-top-container">
					<ul id="menu-top" class="menu">
						<li id="menu-item-110" class="payment menu-item menu-item-type-custom menu-item-object-custom menu-item-110"><a target="_blank" rel="noopener" href="#">Online Fee Payment</a></li>
						<li id="menu-item-110" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110"><a target="_blank" rel="noopener" href="<?php bloginfo("url"); ?>/wp-admin">Admin Login</a></li>
					</ul>
				</div>
			</div>
		</div><!-- .top-bar -->

		<header id="masthead" class="site-header" role="banner">
			<div class="header-main">
				<h1 class="site-title">
				<?php
				$custom_logo_id = get_theme_mod( 'custom_logo' );
				$logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
				
				if ( has_custom_logo() ) {
					echo '<img src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '">';
				} else {
					echo '<h1>' . get_bloginfo('name') . '</h1>';
				}
				?>	
				</h1>
				<div class="header-right">
					<div class="reach">
						<h3>Reach us:</h3>
						<div class="menu-contact-container">
							<ul id="menu-contact" class="menu">
								<li id="menu-item-180" class="tel menu-item menu-item-type-custom menu-item-object-custom menu-item-180"><a href="tel:+91 9709838140">+91 9709838140</a></li>
								<li id="menu-item-181" class="email menu-item menu-item-type-custom menu-item-object-custom menu-item-181"><a href="mailto:stjagatgyanmm@gmail.com">stjagatgyanmm@gmail.com</a></li>
							</ul>
						</div>
					</div><!-- .reach -->
					<div id="search-container" class="search-box-wrapper">
						<div class="menu-social-container">
							<ul id="menu-social" class="menu">
								<li id="menu-item-112" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-112"><a target="_blank" rel="noopener" href="" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Facebook</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/fb.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>
								<li id="menu-item-113" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-113"><a target="_blank" rel="noopener" href="" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Twitter</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/tw.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>
								<li id="menu-item-115" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115"><a href="#" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Youtube</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/yt.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>

							</ul>
						</div>
						<div class="search-box">
							<form role="search" method="get" class="search-form" action="#">
								<label>
									<span class="screen-reader-text">Search for:</span>
									<input type="search" class="search-field" placeholder="Search &hellip;" value="" name="s" />
								</label>
								<input type="submit" class="search-submit" value="Search" />
							</form>
						</div>
					</div>
				</div><!-- .header-right -->
			</div>
		</header><!-- #masthead -->


		<nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">
			<div class="menu-social-container">
				<ul id="menu-social-1" class="menu">
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-112"><a target="_blank" rel="noopener" href="" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Facebook</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/fb.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-113"><a target="_blank" rel="noopener" href="" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Twitter</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/tw.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115"><a href="#" class="menu-image-title-hide menu-image-not-hovered"><span class="menu-image-title-hide menu-image-title">Youtube</span><img width="24" height="24" src="<?php bloginfo("template_directory"); ?>/static/images/yt.png" class="menu-image menu-image-title-hide" alt="" loading="lazy" /></a></li>

				</ul>
			</div> <button class="menu-toggle">Primary Menu</button>
			<a class="screen-reader-text skip-link" href="#content">Skip to content</a>
			<!-- custom navigation     -->
			<?php
			wp_nav_menu(
				array(
					'container' => 'div',
					'theme_location' => 'primary_menu',
					'container_class' => 'menu-menu-container',
					'menu_class' => 'nav-menu',
				)
			);
			?>
		</nav>
		