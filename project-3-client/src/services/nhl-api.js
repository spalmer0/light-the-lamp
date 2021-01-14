//TODO: remove the "teams" so that I can navigate to other parts of api
const BASE_URL = "https://statsapi.web.nhl.com/api/v1/teams";

export function getTeams() {
    return fetch(BASE_URL).then(res => res.json());
}

export function getPlayers(teamId) {
    return fetch(`${BASE_URL}/${teamId}/roster`).then(res => res.json());
}