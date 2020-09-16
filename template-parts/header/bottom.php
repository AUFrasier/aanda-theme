<?php
/**
 * Template part for displaying the bottom part of the header
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;
$frontPageHeroID = is_front_page() ? "front-page-hero" : 'subpage-hero';
?>

<div id="<?= $frontPageHeroID ?>" class="header-bottom">
    <?php get_template_part( 'template-parts/header/hero' ); ?>
</div><!-- .header-bottom -->
