import express from 'express';
import helmet from 'helmet';
import { join } from 'path';

const configureDevelopment = (app) => {
    const clientConfig = require('../webpack/client/dev');
    const serverConfig = require('../webpack/server/dev');
    const { publicPath, path } = clientConfig.output;

    const multiCompiler = require('webpack')([clientConfig, serverConfig]);
    const clientCompiler = multiCompiler.compilers[0];

    app.use(require('webpack-dev-middleware')(multiCompiler, { publicPath }));
    app.use(require('webpack-hot-middleware')(clientCompiler));

    app.use(publicPath, express.static(path));

    app.use(require('webpack-hot-server-middleware')(multiCompiler, {
        serverRendererOptions: { outputPath: path },
    }));
};

const configureProduction = (app) => {
    const clientStats = require('./assets/stats.json');
    const serverRender = require('./assets/app.server.js').default;
    const publicPath = '/';
    const outputPath = join(__dirname, 'assets');

    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({
        clientStats,
        outputPath,
    }));
};

const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

console.log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);
app.use(helmet());
app.set('port', process.env.PORT || 4000);

if (isDevelopment) {
    configureDevelopment(app);
} else {
    configureProduction(app);
}

app.listen(app.get('port'), () => console.log('info', `Server listening on port ${app.get('port')}...`));
