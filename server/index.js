const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

/// Middleware
app.use(cors());
app.use(express.json());

/// Const routers
// Template:
const inventoryRouter = require('./routes/api/inventoryAPI');
const inventoryRouterTwo = require('./routes/api/locationsApi');
const inventoryRouterThree = require("./routes/api/editAPI");

/// Simple API Documentation
app.get('/', (req, res) => {
	res.json({
		msg: 'You can perform these requests from this API:'
	});
});

/// Link Route Files
// Template:
app.use('/inventory', inventoryRouter);
app.use('/locations', inventoryRouterTwo);
app.use('/edit', inventoryRouterThree); 

app.listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`);
});
