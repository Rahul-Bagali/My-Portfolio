const path = require('path'); // Importing the 'path' module for handling file paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importing the HtmlWebpackPlugin for generating HTML files

module.exports = {
    entry: './src/index.js', // Entry point of the application, where the bundling starts
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'bundle.js', // Name of the output bundle file
        publicPath: '/', // Public URL of the output directory when referenced in a browser
    },
    resolve: {
        extensions: ['.js', '.jsx'], // File extensions to resolve automatically
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Regex to test for JavaScript and JSX files
                exclude: /node_modules/, // Exclude the node_modules directory from being processed
                use: {
                    loader: 'babel-loader', // Use Babel loader to transpile JavaScript files
                },
            },
            {
                test: /\.css$/, // Regex to test for CSS files
                use: ['style-loader', 'css-loader'], // Use these loaders to handle CSS
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Regex to test for image files
                use: {
                    loader: 'file-loader', // Use file-loader to handle image files
                    options: {
                        name: '[path][name].[ext]', // Preserve the original file path and name
                        outputPath: 'images/', // Output directory for images
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Directory to serve static files from
        },
        compress: true, // Enable gzip compression for served files
        port: 8080, // Port number for the development server
        historyApiFallback: true, // Enable support for React Router (HTML5 history API)
        open: true // Automatically open the browser after the server starts
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to the HTML template file
            favicon: './src/favicon.ico', // Path to the favicon file
        }),
    ],
};
