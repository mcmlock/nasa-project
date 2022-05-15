const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 4555;

const server = http.createServer(app);

const { loadPlanetsData } = require('./models/planets.model');

async function startServer() {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}...`);
    });
}

startServer();



