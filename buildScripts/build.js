/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// Babel and other libraries look for this NODE_ENV variable to deterine how they're build
process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take a moment'));

webpack(webpackConfig).run((err, stats) => {
    if (err) { // a fatal error occurred. stop here
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors){
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings){
        console.log(chalk.yellow('Webpack generated the following warning: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build has succeeded
    console.log(chalk.green('Your app has been build for production and saved to /dist!'));

    return 0;
});
