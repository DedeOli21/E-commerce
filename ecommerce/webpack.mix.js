const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('Front_end Quasar/dist/spa/index.html', 'resources/views/welcome.blade.php')
    .copyDirectory('Front_end Quasar/dist/spa', 'public')
