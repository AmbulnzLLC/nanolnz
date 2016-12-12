const Express = require('express');
const App = express();
app.use(Express.static('public'));

const PORT_NUMBER = process.env.PORT_NUMBER || 5555;
App.listen(PORT_NUMBER);
