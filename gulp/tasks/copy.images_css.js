'use strict';

module.exports = function() {
	$.gulp.task('copy:images_css', function() {
		return $.gulp.src('./source/images_css/**/*.*', { since: $.gulp.lastRun('copy:images_css') })
			.pipe($.gulp.dest($.config.root + '/assets/css'));
	});
};