<?php
/**
 * Plugin Name: Field Name in Pods Editor
 * Plugin URI: https://github.com/enovision/field-name-in-pods-editor
 * Description: Shows the pod configuration field name below the label when editing pods.
 * Version: 1.0.0
 * License: GPLv2 or later
 * Author: Johan van de Merwe
 * Author URI: https://www.enovision.net
 */

function field_name_in_pods_editor_admin_enqueue_scripts() {
    wp_enqueue_script('field-name-in-pods-editor-js', plugin_dir_url(__FILE__) . 'assets/admin.js', ['jquery'], '1.0', true);
    wp_enqueue_style('field-name-in-pods-editor-css', plugin_dir_url(__FILE__) . 'assets/admin.css', [], '1.0', 'all');
}
add_action('admin_enqueue_scripts', 'field_name_in_pods_editor_admin_enqueue_scripts');