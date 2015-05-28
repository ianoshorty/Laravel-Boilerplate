var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.sass('app.scss');

    mix.scripts([
        '/bower/jquery/dist/jquery.js',
        '/bower/bootstrap-sass/assets/javascripts/bootstrap.js',
        '/bower/bootstrap-sass/assets/javascripts/bootstrap-sprockets.js',
        '/js/app.js'
    ], 'public/js/app.js', 'resources/assets');

    mix.version(["css/app.css", "js/app.js"]);

    mix.browserSync([
        'app/**/*',
        'public/**/*',
        'resources/views/**/*'
    ], {
        proxy: 'rpvrphp.dev',
        reloadDelay: 2000
    });
});
