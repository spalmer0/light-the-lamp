const Favorite = require('../models/favorite');
const axios = require('axios');
const BASE_URL = "https://statsapi.web.nhl.com/api/v1/";



module.exports = {
    getMovies,
    addFavorite
};

async function getFavTeams(req, res) {
    try {
        const { data } = await axios.get(`${BASE_URL}/teams`);
        if (req.query.userid) {
            const favorites = await Favorite.find({ userId: req.query.userid });
            const teamsWithFavorites = markFavorites(favorites, data.results);
            data.results = teamsWithFavorites;
        }
        res.json({ data });
    } catch (error) {
        
    }
}

async function addFavorite(req, res) {
    try {
        const userId = req.query.userid;
        const teamId = req.query.teamid;
        await Favorite.create({ userId: userId, teamId: teamId });
        getFavTeams(req, res);
    } catch (error) {
        console.log(error);
        // TODO: add error handling
    }
}

function markFavorites(favoritesArr, teamsArr) {
    const teamIds = favoritesArr.map(favorite => favorite.teamId);
    
    return teamsArr.map(movie => {
        if(teamIds.includes(team.id)) {
            team.favorite = true;
        } else {
            team.favorite = false;
        }
        return team;
    });
}