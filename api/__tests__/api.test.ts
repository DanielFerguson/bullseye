import { describe, expect, test } from '@jest/globals';

// TODO: How can I edit a score of a round for an archer after-the-fact?
// TODO: Will need to include middleware permissions around editing.

describe('archers', () => {
    // GET /api/archers
    test('can get all archers', () => {
        expect(false).toBe(true);
    });

    // POST /api/archers
    test('can create an archer', () => {
        expect(false).toBe(true);
    });

    // GET /api/archers/{id}
    test('can get a specific archer', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/archers/{id}
    test('can delete a specific archer', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/archers
    test('cannot delete all archers', () => {
        expect(false).toBe(true);
    });

    // GET /api/archers/{id}/games/{id}
    test('can get a specific game for a specific archer', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/archers/{id}/games/{id}
    test('can delete a specific game for a specific archer', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/archers/{id}/games
    test('cannot delete all games for a specific archer', () => {
        expect(false).toBe(true);
    });
})

describe('games', () => {
    // POST /api/games
    test('can create a game', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/games/{id}
    test('can delete a game', () => {
        expect(false).toBe(true);
    });
});

describe('clubs', () => {
    // GET /api/clubs
    test('can get all clubs', () => {
        expect(false).toBe(true);
    });

    // GET /api/clubs/{id}
    test('can get a specific club', () => {
        expect(false).toBe(true);
    });

    // POST /api/clubs
    test('can create a club', () => {
        expect(false).toBe(true);
    });

    // DELETE /api/clubs/{id}
    test('can delete a club', () => {
        expect(false).toBe(true);
    });
});