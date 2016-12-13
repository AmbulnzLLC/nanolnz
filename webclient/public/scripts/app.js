/**
 * Created by jake on 12/13/16.
 */
const app = (function() {
    return {
        name: 'nanolnz',
        viewModel: {
            name: 'webclient',
            version: '0.9.0.1'
        },
        bindToDocument: function(data) {
            app.viewModel = data;
        }
    };
})();

$(document).ready(function() {
    app.config = envConfig;
    $('#restsrc').text(app.config.restServerUrl);
});
