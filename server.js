const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, function() {
    console.log("App is listening on 4000");
})