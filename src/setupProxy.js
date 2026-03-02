const path = require('path');

module.exports = function (app) {
    const albums = require(path.resolve(__dirname, '../api/data/albums.json'));
    const songs = require(path.resolve(__dirname, '../api/data/songs.json'));
    const genres = require(path.resolve(__dirname, '../api/data/genres.json'));

    app.get('/api/albums/top', (req, res) => {
        res.json(albums.top);
    });

    app.get('/api/albums/new', (req, res) => {
        res.json(albums.new);
    });

    app.get('/api/songs', (req, res) => {
        res.json(songs);
    });

    app.get('/api/genres', (req, res) => {
        res.json(genres);
    });
};
