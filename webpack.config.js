module.exports = {
    entry: {
        index: './docs/index.js',
        view: './docs/view.js',
    },
    output: {
        filename: '[name].b.js',
        path: __dirname + '/docs'
    },
    mode: 'development',
    resolve: {
        alias: {
            sbd: 'sbd/dist/sbd.min.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
};