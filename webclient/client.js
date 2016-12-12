const Express = require('express');
const App = express();
app.use(Express.static('public'));

const PORT_NUMBER = process.env.PORT_NUMBER || 8888;
App.listen(PORT_NUMBER);
