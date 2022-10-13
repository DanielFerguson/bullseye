import { PrismaClient, User, Game, Round, GameType } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

const generateRandomScore = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

export async function clearDatabase() {
    await prisma.round.deleteMany();
    await prisma.game.deleteMany();
    await prisma.user.deleteMany();
}

export async function seedDatabase() {
    let users: User[] = [];
    let games: Game[] = [];
    let rounds: Round[] = [];

    // Create 10 Users
    for (let index = 0; index < 10; index++) {
        users.push({
            id: faker.datatype.uuid(),
            name: faker.name.fullName(),
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    // Create 10 Games with 20 Rounds each
    for (let index = 0; index < 10; index++) {
        const gameId = faker.datatype.uuid();

        games.push({
            id: gameId,
            type: GameType.ABA
        });

        // Create Rounds
        for (let roundIndex = 0; roundIndex < 20; roundIndex++) {
            users.forEach(user => {
                rounds.push({
                    id: faker.datatype.uuid(),
                    userId: user.id,
                    gameId: gameId,
                    roundNumber: roundIndex,
                    score: generateRandomScore(4, 20)
                })
            });
        }
    }

    // Create data
    await prisma.user.createMany({ data: users });
    await prisma.game.createMany({ data: games });
    await prisma.round.createMany({ data: rounds });
}

seedDatabase()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
