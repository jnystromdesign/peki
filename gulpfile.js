const gulp 	        = require('gulp');
const sass          = require('gulp-sass');
const babel         = require('gulp-babel');
const concatJS      = require('gulp-concat');
const concatCSS     = require('gulp-concat-css');
const cleanCSS      = require('gulp-clean-css');
const uglify        = require('gulp-uglify');
const groupMediaQ   = require('group-css-media-queries');
const htmlreplace   = require('gulp-html-replace');
const browserSync   = require('browser-sync');
 
 // Static Server + watching scss/html files
gulp.task('default', () => {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./js/src/*.js").on('change', () => {
    	gulp.src('js/src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js/dist'));
    });

    gulp.watch( "./styles/sass/style.sass" ).on('change', function(){
        gulp.src('./styles/sass/style.sass')
        .pipe( sass() )
        .pipe( gulp.dest('./styles/css') )
        .pipe(browserSync.stream())
    });

    gulp.watch(["./**/*.html", "./js/dist/*.js"]).on('change', browserSync.reload);
});


gulp.task( 'build' , () => {
    
   gulp.src(['js/dist/libs.js', 'js/dist/app.js'])
        .pipe( concatJS('scripts.js') )
        .pipe( uglify() )
        .pipe( gulp.dest('./build/js') );

    gulp.src(['./styles/css/libs.css', './styles/css/style.css'])
        .pipe( concatCSS('styles.css') )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('./build/css/') );

    gulp.src('./*.html')
        .pipe( htmlreplace({
            'scripts' : 'js/scripts.js',
            'styles'  : 'css/styles.css'
        }) )
        .pipe( gulp.dest('./build') );
    
    gulp.src('./audio/*')
        .pipe( gulp.dest('./build/audio') );

    gulp.src('./img/*')
        .pipe( gulp.dest('./build/img') );
});

gulp.task( 'libs' , () => {
    
    // --- Scripts --- //
    var lib_scripts = ['./bower_components/jquery/dist/jquery.min.js']; 

    gulp.src(lib_scripts)
        .pipe( concatJS( 'libs.js' ) )
        .pipe( gulp.dest('./js/dist/') );
    
 
    // --- Styles --- //    
    var lib_stylesheets = ['./bower_components/normalize-css/normalize.css']; 
    gulp.src( lib_stylesheets )
        .pipe( concatCSS('libs.css') )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('./styles/css/') );

});