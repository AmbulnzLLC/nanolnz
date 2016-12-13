/**
 * Created by jake on 12/13/16.
 */
const app = (function() {
    return {
        name: 'nanolnz'
    };
})();

$(document).ready(function() {
    app.config = envConfig;
    $('#restsrc').text(app.config.restServerUrl);
});
