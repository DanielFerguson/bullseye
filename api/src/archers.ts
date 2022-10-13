import { PrismaClient } from '@prisma/client';

interface ApiEvent {
  pathParameters: {
    archerId: number;
  }
}

const prisma = new PrismaClient();

module.exports.getAll = async (event) => {
  const archers = await prisma.user.findMany();

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

// TODO
module.exports.create = async (event) => {
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
module.exports.get = async (event: ApiEvent) => {
  const id = event.pathParameters.archerId;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Getting Archer #${id}`,
      },
      null,
      2
    ),
  };
};

// TODO
module.exports.delete = async (event) => {
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
