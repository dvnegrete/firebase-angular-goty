export interface Game {
    id: string;
    name: string;
    url: string;
    votos: number;
}

export interface Gaming extends Omit<Game, 'id' | 'url' | 'votos'> {
    value: number;
}