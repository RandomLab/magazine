import { GraphQLClient, gql } from 'graphql-request'
import 'dotenv/config'

async function main() {
  const endpoint = 'https://wiki.reflux.media/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.SECRET_KEY,
    },
  })

  const query = gql`
    {
        pages {
            list(orderBy:ID) {
                id
            }
        }
    }
  `

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))
}

main().catch((error) => console.error(error))