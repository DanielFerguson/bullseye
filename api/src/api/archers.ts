import { PrismaClient } from '@prisma/client';
import { stringIsUuid } from '../helpers';

const prisma = new PrismaClient();

module.exports.getAll = async (event) => {
  const archers = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: false
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        archers: archers
      },
      null,
      2
    ),
  };
};

module.exports.create = async (event) => {
  let body: { name: string | null | undefined } = {
    name: null
  };

  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'The parameter `name` is required, but was not passed through.'
      })
    }
  }

  if (
    body.name === null ||
    body.name === undefined ||
    body.name.length === 0
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'The parameter `name` is required, but was not passed through.'
      })
    }
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
    }
  });

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        archer: user,
      },
      null,
      2
    ),
  };
};

module.exports.get = async (event) => {
  const archerId = event.pathParameters.archerId;

  const archer = await prisma.user.findFirst({
    where: {
      id: archerId
    }
  })

  if (archer === null) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `Archer with an ID of ${archerId} was not found.`
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      archer: archer
    }),
  };
};

module.exports.delete = async (event) => {
  const archerId = event.pathParameters.archerId;

  if (!stringIsUuid(archerId)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `${archerId} is not an archer ID.`
      })
    }
  }

  await prisma.user.delete({
    where: {
      id: archerId
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Archer successfully deleted.",
    }),
  };
};

// TODO
module.exports.getArcherGame = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

// TODO
module.exports.deleteArcherGame = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
