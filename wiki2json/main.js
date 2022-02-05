import { GraphQLClient, gql } from 'graphql-request'
import 'dotenv/config'
import * as fs from 'fs'


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
    const data2file = JSON.stringify(data, undefined, 2)

    fs.writeFile('data.json', data2file, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    })
}

main().catch((error) => console.error(error))