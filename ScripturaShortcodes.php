<?php

// -----------------------------------------------------------------------------
// @Plugin Name: Scriptura Shortcodes
// @Plugin URI: https://github.com/Scriptura/ScripturaShortcodes
// @Description: Shortcodes pour WordPress
// @Version: 0.0.1
// @Author: Olivier Chavarin
// @Author URI: https://scriptura.github.io/
// @License: ISC
// -----------------------------------------------------------------------------

// @link https://wordpress.org/plugins/add/
// @link http://www.filsdetut.fr/mettre-plugin-en-ligne-wordpress-repository/
// @link https://generatewp.com/take-shortcodes-ultimate-level/

// @note Filtrage des balises de l'éditeur après les shortcodes @todo À tester...
//remove_filter('the_content', 'wpautop');
//add_filter('the_content', 'wpautop' , 99);
//add_filter('the_content', 'shortcode_unautop',100);


// -----------------------------------------------------------------------------
// @section     Do Shortcode
// @description Extention shortcodes dans l'environnement WordPress
// -----------------------------------------------------------------------------

// shortcodes dans les widgets
    add_filter('widget_text', 'do_shortcode' );

// shortcodes dans les extraits d'articles
    add_filter('the_excerpt', 'do_shortcode' ); // @bugfix @todo En attente de correction

// shortcodes dans les commentaires (attention aux injections Sql)
//  add_filter('comment_text', 'do_shortcode' );


// -----------------------------------------------------------------------------
// @section     Text Shortcodes
// @description Shortcodes pour le texte
// -----------------------------------------------------------------------------

if (!is_admin()) {

    function ScripturaShortcodeMessage( $atts, $content ) {
        return '<p class="message">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message', 'ScripturaShortcodeMessage' );

    function ScripturaShortcodeMessageApi( $atts, $content ) {
        return '<p class="message-api">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-api', 'ScripturaShortcodeMessageApi' );

    function ScripturaShortcodeMessageImportant( $atts, $content ) {
        return '<p class="message-important">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-important', 'ScripturaShortcodeMessageImportant' );

    function ScripturaShortcodeMessageSource( $atts, $content ) {
        return '<p class="message-source">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-source', 'ScripturaShortcodeMessageSource' );

    function ScripturaShortcodeMessageSuccess( $atts, $content ) {
        return '<p class="message-success">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-success', 'ScripturaShortcodeMessageSuccess' );

    function ScripturaShortcodeMessageError( $atts, $content ) {
        return '<p class="message-error">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-error', 'ScripturaShortcodeMessageError' );

    function ScripturaShortcodeMessageInfo( $atts, $content )
    {
        return '<p class="message-info">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-info', 'ScripturaShortcodeMessageInfo' );

    function ScripturaShortcodeMessageWarning( $atts, $content )
    {
        return '<p class="message-warning">' . do_shortcode( $content ) . '</p>';
    }
    add_shortcode( '_message-warning', 'ScripturaShortcodeMessageWarning' );


// -----------------------------------------------------------------------------
// @section     Elements Shortcodes
// @description Shortcodes pour les ensembles de balises html
// -----------------------------------------------------------------------------

    function ScripturaShortcodeTab( $atts, $content )
    {
        return '<div class="tabs-js-united">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_tabs', 'ScripturaShortcodeTab' );

    function ScripturaShortcodeAccordion( $atts, $content )
    {
        return '<div class="accordion-js">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_accordion', 'ScripturaShortcodeAccordion' );

    function ScripturaShortcodeDivTag( $atts, $content )
    {
        $atts = shortcode_atts( // Attributs par défaut
        array(
            'class' => ''
        ), $atts);
        $layoutClass = ' class=' . $atts[ 'class' ];
        return '<div' . $layoutClass . '>' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_div', 'ScripturaShortcodeDivTag' );

    function ScripturaShortcodeGrid( $atts, $content )
    {
        return '<div class="grid">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_grid', 'ScripturaShortcodeGrid' );    function ScripturaShortcodeModule( $atts, $content )
    {
        $atts = shortcode_atts( // Attributs par défaut
        array(
            'class' => ''
        ), $atts);
        if ( $atts[ 'class' ] ) {
        $class = ' class="' . $atts[ 'class' ] . '"';
        } else {
        $class = '';
        }
        return '<div class="' . $atts[ 'class' ] . '">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_m', 'ScripturaShortcodeModule' );

    function ScripturaShortcodeColumns( $atts, $content )
    {
        return '<div class="columns">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_columns', 'ScripturaShortcodeColumns' );

    function ScripturaShortcodeColumn( $atts, $content )
    {
        $atts = shortcode_atts( // Attributs par défaut
        array(
            'class' => ''
        ), $atts);
        if ( $atts[ 'class' ] ) {
        $class = ' class="' . $atts[ 'class' ] . '"';
        } else {
        $class = '';
        }
        return '<div class="' . $atts[ 'class' ] . '">' . do_shortcode( $content ) . '</div>';
    }
    add_shortcode( '_c', 'ScripturaShortcodeColumn' );

    function ScripturaShortcodeTable( $atts, $content )
    {
        return '<table class="table">' . do_shortcode( $content ) . '</table>';
    }
    add_shortcode( '_table', 'ScripturaShortcodeTable' );

    function ScripturaShortcodeTheadTag( $atts, $content )
    {
        return '<thead>' . do_shortcode( $content ) . '</thead>';
    }
    add_shortcode( '_thead', 'ScripturaShortcodeTheadTag' );

    function ScripturaShortcodeTfootTag( $atts, $content )
    {
        return '<tfoot>' . do_shortcode( $content ) . '</tfoot>';
    }
    add_shortcode( '_tfoot', 'ScripturaShortcodeTfootTag' );

    function ScripturaShortcodeTbodyTag( $atts, $content )
    {
        return '<tbody>' . do_shortcode( $content ) . '</tbody>';
    }
    add_shortcode( '_tbody', 'ScripturaShortcodeTbodyTag' );

    function ScripturaShortcodeTrTag( $atts, $content )
    {
        return '<tr>' . do_shortcode( $content ) . '</tr>';
    }
    add_shortcode( '_tr', 'ScripturaShortcodeTrTag' );

    function ScripturaShortcodeThTag( $atts, $content )
    {
        return '<th>' . do_shortcode( $content ) . '</th>';
    }
    add_shortcode( '_th', 'ScripturaShortcodeThTag' );

    function ScripturaShortcodeTdTag( $atts, $content )
    {
        $atts = shortcode_atts( // Attributs par défaut
        array(
            'data-thead' => ''
        ), $atts);
        $dataThead = $atts[ 'data-thead' ];
        if ( $dataThead != '' ) {
            $dataThead = ' data-thead="' . $atts[ 'data-thead' ] . '"';
        } else {
            $dataThead = '';
        }
        return '<td' . $dataThead . '>' . do_shortcode( $content ) . '</td>';
    }
    add_shortcode( '_td', 'ScripturaShortcodeTdTag' );


    //function ScripturaShortcodeFirstLetter( $atts, $content )
    //{ // Lettrine
    //    return '<span class="first-letter">' . do_shortcode( $content ) . '</span>';
    //}
    //add_shortcode( '_l', 'ScripturaShortcodeFirstLetter' );

    //function ScripturaShortcodeCreativeCommons()
    //{
    //    return '<div class="icon-creative-commons">' .$content. '</div>';
    //}
    //add_shortcode( '_icon-creative-commons', 'ScripturaShortcodeCreativeCommons' );

}


// -----------------------------------------------------------------------------
// @section     TinyMCE
// @description Configuration de TinyMCE v4
// -----------------------------------------------------------------------------

if ( is_admin() ) {

    function ScripturaShortcodesCmd ()
    {
        global $typenow; // Récupère la variable de contexte du type de post
        if( ! in_array( $typenow, [ 'post', 'page' ] ) ) // Activation du plugin pour les articles et les pages
            return;
        add_filter( 'mce_external_plugins', 'ScripturaAddTinymcePluginShortcodes' ); // Ajout javascript à l'éditeur de WP
        add_filter( 'mce_buttons_4', 'ScripturaAddTinymceButtonShortcodes' ); // Ajoute un bouton à la première ligne de boutons @param Selon la rangée : 'mce_buttons', 'mce_buttons_4'
    }
    add_action( 'admin_head', 'ScripturaShortcodesCmd' );

    function ScripturaAddTinymcePluginShortcodes ( $plugin )
    {
        $plugin[ 'ScripturaShortcodeButtons' ] = plugins_url ( 'Scripts.js', __FILE__ ); // Emplacement de la fonction des bouttons
        return $plugin;
    }

    function ScripturaAddTinymceButtonShortcodes ( $buttons )
    { // Id de chaque bouton pour faire la correspondance avec le JS
        array_push(
            $buttons,
            'ScripturaButton0',
            'ScripturaButton1',
            'ScripturaButton2',
            'ScripturaButton3',
            'ScripturaButton4',
            'ScripturaButton5',
            'ScripturaButton6',
            'ScripturaButton7',
            'ScripturaButton8',
            'ScripturaButton9',
            'ScripturaButton10',
            'ScripturaButton11',
            'ScripturaButton12'
        ); // Passage d'un tableau contenant l'id du bouton, pour ajouter d'autres boutons il suffit de passer les autres id
        return $buttons;
    }

}


// -----------------------------------------------------------------------------
// @section     QTags Add Button
// @description Ajoute un boutton dans l'éditeur html
// -----------------------------------------------------------------------------

// @link https://codex.wordpress.org/Quicktags_API
/*
function ScripturaAddQuicktags() {
    if (wp_script_is( 'quicktags' )) {
?>
<script>
  QTags.addButton( 'sciptura_pre', 'info', '<p class="message-info">', '</p>', '', 'Boîte d\'information');
</script>
<?php
    }
}
add_action( 'admin_print_footer_scripts', 'ScripturaAddQuicktags' );
*/

