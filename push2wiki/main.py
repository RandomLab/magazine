import requests
import json, os
from dotenv import load_dotenv, dotenv_values
config = dotenv_values('.env')

# print(config)

accessToken = config['SECRET_KEY']
print(accessToken)

endpoint = f"https://wiki.reflux.media/graphql"
headers = {"Authorization":f"Bearer {accessToken}"}

query = """query {
    pages {
        list( ){
            title
        }
    }
}"""

# r = requests.post(endpoint, json={"query":query}, headers=headers)

# if r.status_code == 200:
#     print(json.dumps(r.json()))
# else:
#     raise Exception(f'failed {r.status_code}')