const paths = [
        './routes/posts.js',
];

var ro = paths.map((path) => {
        const routes = require(path).map((route) => route)
        return routes;
});

var routes = [];

ro.map(item => {
        routes = routes.concat(item)
});

module.exports = routes;
