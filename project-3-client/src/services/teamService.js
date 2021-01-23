const BASE_URL = '/api';

function fetchTeams(userId) {
    const url = userId ? BASE_URL + '/teams?userid=' + userId : BASE_URL + '/teams'
    return fetch(url).then(res => res.json());
}

function addFavorite(userId, teamId) {
    return fetch(BASE_URL + '/teams/favorites?movieid=' + teamId + '&userid=' + userId, {
        method: 'POST'
    }).then(res => res.json());
}

export {
    fetchTeams,
    addFavorite
};