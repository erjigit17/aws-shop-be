'use strict'

const data = [
  {
    id: 1,
    title: 'Shantaram',
    description:
      'It took me a long time and most of the world to learn what I know about love and fate and the choices we make, but the heart of it came to me in an instant, while I was chained to a wall and being tortured.',
    price: 1000,
    image: 'https://for-sls-pic.s3.eu-central-1.amazonaws.com/shantaram.avif',
    count: 12,
  },
  {
    id: 2,
    title: 'The mountain shadow',
    description:
      'Shantaram introduced millions of readers to a cast of unforgettable characters through Lin, an Australian fugitive, working as a passport forger for a branch of the Bombay mafia. In The Mountain Shadow, the long-awaited sequel, Lin must find his way in a Bombay run by a different generation of mafia dons, playing by a different set of rules.',
    price: 800,
    image:
      'https://for-sls-pic.s3.eu-central-1.amazonaws.com/The+mountain+shadow.avif',
    count: 2,
  },
]

module.exports.getProductsById = async (event) => {
  const { id } = event.pathParameters;
  const index = (urlId) => {
    return data.find((item) => item.id == urlId)
  }
  const result = index(id) 
  return {
    statusCode: !result ? 404 : 200,
    
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    body: !result ? 'Not found' : JSON.stringify(result),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
