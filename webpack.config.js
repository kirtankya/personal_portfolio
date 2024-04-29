const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        about: path.resolve(__dirname, 'src/about.js'),
        project: path.resolve(__dirname, 'src/project.js'),
        work: path.resolve(__dirname, 'src/work.js'),
        service: path.resolve(__dirname, 'src/service.js'),
        service_work: path.resolve(__dirname, 'src/service_work.js'),
        blog: path.resolve(__dirname, 'src/blog.js'),
        blog_detail: path.resolve(__dirname, 'src/blog_detail.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/', // Specify the public path to the root of the website
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // Keep as asset/resource if separate files are preferred
                generator: {
                    filename: 'images/[name][ext]', // Specify the output path for images
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Landing Page',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html'),
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: 'About Page',
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/about.html'),
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({
            title: 'Project Page',
            filename: 'project.html',
            template: path.resolve(__dirname, 'src/project.html'),
            chunks: ['project'],
        }),
        new HtmlWebpackPlugin({
            title: 'Work Page',
            filename: 'work.html',
            template: path.resolve(__dirname, 'src/work.html'),
            chunks: ['work'],
        }),
        new HtmlWebpackPlugin({
            title: 'Service Page',
            filename: 'service.html',
            template: path.resolve(__dirname, 'src/service.html'),
            chunks: ['service'],
        }),
        new HtmlWebpackPlugin({
            title: 'Service_work Page',
            filename: 'service_work.html',
            template: path.resolve(__dirname, 'src/service_work.html'),
            chunks: ['service_work']
        }),
        new HtmlWebpackPlugin({
            title: 'Blog Page',
            filename: 'blog.html',
            template: path.resolve(__dirname, 'src/blog.html'),
            chunks: ['blog']
        }),
        new HtmlWebpackPlugin({
            title: 'Blog_detail Page',
            filename: 'blog_detail.html',
            template: path.resolve(__dirname, 'src/blog_detail.html'),
            chunks: ['blog_detail'],
        })
    ],
};
