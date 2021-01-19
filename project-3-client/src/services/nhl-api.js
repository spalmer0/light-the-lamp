//TODO: remove the "teams" so that I can navigate to other parts of api
const BASE_URL = "https://statsapi.web.nhl.com/api/v1/";

export function getTeams() {
    return fetch(`${BASE_URL}/teams`).then(res => res.json());
}

export function getRoster(teamId) {
    return fetch(`${BASE_URL}/teams/${teamId}/roster`).then(res => res.json());
}

export function getPlayer(playerId) {
    return fetch(`${BASE_URL}/people/${playerId}`).then(res => res.json());
}