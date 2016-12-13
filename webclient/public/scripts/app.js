/**
 * Created by jake on 12/13/16.
 */
const app = (function() {
    return {
        name: 'nanolnz',
        viewModel: {
            name: 'webclient',
            version: '0.9.0.1'
        }
    };
})();

$(document).ready(function() {
    app.config = envConfig;

    // Bind handlebars template to app
    var src = document.getElementById('restsrc_t');
    app.handlebarsTemplate = Handlebars.compile(src);
    app.bindViewModel = function(data) {
        app.viewModel = data;
        var output = app.handlebarsTemplate(app.viewModel);
        var ph =  document.getElementById('restsrc');
        ph.innerHTML = output;
    }

    $('#callApi').click(function() {
        $.get(app.config.restServerUrl + 'appinfo')
            .done(app.bindViewModel)
            .fail(function(err) { console.log(err); })
    })
});
