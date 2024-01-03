import { PrismaClient, Rating } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.create ({
    data: {
      firstName: 'Alice',
      lastName: 'Wonderland',
      email: 'alice@prisma.io'
    },
  })
  const bob = await prisma.user.create ({
    data: {
    firstName: 'Bob',
    lastName: 'Belcher',
    email: 'bob@prisma.io'
    },
  })
  console.log({ alice, bob })

  const numBed = await prisma.homeFeature.create ({
    data: {
        feature: '# of Bedrooms',
    }
  })

  const numBath = await prisma.homeFeature.create ({
    data: {
        feature: '# of Bathrooms',
    }
  })

  const sqFt = await prisma.homeFeature.create ({
    data: {
        feature: 'Sq Ft',
    }
  })

  const rateNumBed = await prisma.featureRating.create ({
    data: {
        featureId: numBed.id,
        userId: alice.id,
        rating: Rating.VERY_DESIRABLE
    }
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })