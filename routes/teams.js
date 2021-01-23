const router = require('express').Router();
const teamsCtrl = require('../controllers/teams');

router.get('/teams', teamssCtrl.getFavTeams);
router.post('/teams/favorites', teamsCtrl.addFavorite);

module.exports = router;