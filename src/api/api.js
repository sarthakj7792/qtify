import axios from "axios";

const config = {
    endpoint: {
        TopAlbum: "/api/albums/top",
        NewAlbum: "/api/albums/new",
        Songs: "/api/songs",
        genres: "/api/genres",
    },
};

const fetchTopAlbum = async () => {
    try {
        let res = await axios.get(config.endpoint.TopAlbum);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch top albums:", err);
        return [];
    }
};

const fetchNewAlbum = async () => {
    try {
        let res = await axios.get(config["endpoint"]["NewAlbum"]);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch new albums:", err);
        return [];
    }
};

const fetchSongs = async () => {
    try {
        let res = await axios.get(config.endpoint.Songs);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch songs:", err);
        return [];
    }
};

const fetchGenres = async () => {
    try {
        let res = await axios.get(config["endpoint"].genres);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch genres:", err);
        return { data: [] };
    }
};

export { fetchTopAlbum, fetchNewAlbum, fetchSongs, fetchGenres };