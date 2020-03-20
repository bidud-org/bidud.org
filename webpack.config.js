module.exports = {
    entry: {
        index: './docs/index.js',
        view: './docs/view.js',
    },
    output: {
        filename: '[name].b.js',
        path: __dirname + '/docs'
    },
    mode: 'development'
};