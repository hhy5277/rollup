System.register(['./dep.js'], function (exports, module) {
	'use strict';
	var _missingExportShim$1, x;
	return {
		setters: [function (module) {
			_missingExportShim$1 = module.missingFn;
			x = module.x;
		}],
		execute: function () {

			_missingExportShim$1();
			x(_missingExportShim$1, _missingExportShim$1);

		}
	};
});
