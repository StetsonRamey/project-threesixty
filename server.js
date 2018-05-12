// REQUIRE DEPENDENCIES
// ============================================
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

// PARSE APPLICATION
// ============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


// ROUTES
// ============================================
require('./routes/api-routes')(app);
require('./routes/user-api-routes')(app);
require('./routes/html-routes')(app);

// SYNC SEQUELIZE & START APP
//============================================
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});

