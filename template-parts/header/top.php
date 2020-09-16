<?php
/**
 * Template part for displaying the top part of the header
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;
$frontPageHeroID = is_front_page() ? "front-page-header" : 'subpage-header';
?>

<div id="<?= $frontPageHeroID ?>" class="header-top">
    <?php get_template_part( 'template-parts/header/branding' ); ?>
    <?php get_template_part( 'template-parts/header/navigation' ); ?>
    <?php get_template_part( 'template-parts/header/header-action' ); ?>
</div><!-- .header-top -->
