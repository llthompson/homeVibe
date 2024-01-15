import { PrismaClient, Rating, FeatureType } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  // const alice = await prisma.user.create ({
  //   data: {
  //     firstName: 'Alice',
  //     lastName: 'Wonderland',
  //     email: 'alice@prisma.io'
  //   },
  // })
  // const bob = await prisma.user.create ({
  //   data: {
  //   firstName: 'Bob',
  //   lastName: 'Belcher',
  //   email: 'bob@prisma.io'
  //   },
  // })
  // console.log({ alice, bob })

  const numBed = await prisma.homeFeature.create({
    data: {
      // numberOf: '',
      feature: '# of Bedrooms',
    }
  })

  const numBath = await prisma.homeFeature.create({
    data: {
      feature: '# of Bathrooms',
    }
  })

  const lotSize = await prisma.homeFeature.create({
    data: {
      feature: 'Lot Size',
    }
  })

  const levels = await prisma.homeFeature.create({
    data: {
      feature: 'Levels',
    }
  })

  const garage = await prisma.homeFeature.create({
    data: {
      feature: 'Garage Space',
    }
  })

  const falseDoor = await prisma.homeFeature.create({
    data: {
      feature: 'Secret Bookcase Door',
      type: FeatureType.ADVANCED
    }
  })

  // A TON OF FEATURES

  const sauna = await prisma.homeFeature.create({
    data: {
      feature: 'Sauna',
      type: FeatureType.ADVANCED
    }
  });

  const steamRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Steam Room',
      type: FeatureType.ADVANCED
    }
  });

  const library = await prisma.homeFeature.create({
    data: {
      feature: 'Library',
      type: FeatureType.ADVANCED
    }
  });

  const musicRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Music Room',
      type: FeatureType.ADVANCED
    }
  });

  const gameRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Game Room',
      type: FeatureType.ADVANCED
    }
  });

  const bowlingAlley = await prisma.homeFeature.create({
    data: {
      feature: 'Bowling Alley',
      type: FeatureType.ADVANCED
    }
  });

  const homeOffice = await prisma.homeFeature.create({
    data: {
      feature: 'Home Office with Built-In Desk',
      type: FeatureType.ADVANCED
    }
  });

  const hobbyRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Hobby Room',
      type: FeatureType.ADVANCED
    }
  });

  const craftRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Craft Room',
      type: FeatureType.ADVANCED
    }
  });

  const sewingRoom = await prisma.homeFeature.create({
    data: {
      feature: 'Sewing Room',
      type: FeatureType.ADVANCED
    }
  });

  const greenhouse = await prisma.homeFeature.create({
    data: {
      feature: 'Greenhouse',
      type: FeatureType.ADVANCED
    }
  });

  const chickenCoop = await prisma.homeFeature.create({
    data: {
      feature: 'Chicken Coop',
      type: FeatureType.ADVANCED
    }
  });

  const backyardGarden = await prisma.homeFeature.create({
    data: {
      feature: 'Backyard Garden',
      type: FeatureType.ADVANCED
    }
  });

  const fruitOrchard = await prisma.homeFeature.create({
    data: {
      feature: 'Fruit Orchard',
      type: FeatureType.ADVANCED
    }
  });

  const koiPond = await prisma.homeFeature.create({
    data: {
      feature: 'Koi Pond',
      type: FeatureType.ADVANCED
    }
  });

  const waterfall = await prisma.homeFeature.create({
    data: {
      feature: 'Waterfall Feature',
      type: FeatureType.ADVANCED
    }
  });

  const firePit = await prisma.homeFeature.create({
    data: {
      feature: 'Fire Pit',
      type: FeatureType.ADVANCED
    }
  });

  const hammockStand = await prisma.homeFeature.create({
    data: {
      feature: 'Hammock Stand',
      type: FeatureType.ADVANCED
    }
  });

  const swingSet = await prisma.homeFeature.create({
    data: {
      feature: 'Swing Set',
      type: FeatureType.ADVANCED
    }
  });

  const treehouse = await prisma.homeFeature.create({
    data: {
      feature: 'Treehouse',
      type: FeatureType.ADVANCED
    }
  });







  // const rateNumBed = await prisma.featureRating.create({
  //   data: {
  //     featureId: numBed.id,
  //     userId: alice.id,
  //     rating: Rating.VERY_DESIRABLE
  //   }
  // })

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