import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://avatars.githubusercontent.com/u/8395726?v=4',
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Default Pool',
            code: 'POOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-05T12:00:00.820Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'DE'
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-05T12:00:00.820Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'ARG',

            guesses: {
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
}

main()