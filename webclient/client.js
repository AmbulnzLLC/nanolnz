const Express = require('express');
const App = Express();
App.use(Express.static('client'));

const PORT_NUMBER = process.env.PORT_NUMBER || 5555;
App.listen(PORT_NUMBER);
