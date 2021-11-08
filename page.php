<?php get_header(); ?>
<div id="main" class="site-main">
	<div class="site">

		<div id="main-content" class="main-content">

			<div id="primary" class="content-area">
				<div id="content" class="site-content" role="main">
					
						<h1 class="entry-title"><?php the_title();?></h1>
					
					<div class="entry-content">
<?php the_content();?>
	</div><!-- .entry-content -->


		</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>