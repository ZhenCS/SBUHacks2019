import twint
import json

class TwitterUser:
    def __init__(self, name: str, mentions: list, depth: int):
        self.name = name
        self.mentions = mentions
        self.depth = depth
    def to_json(self):
        return {"name": self.name,
                "mentions": self.mentions,
                "depth": self.depth}


def scrape_twitter(user: str, tweet_count: int):
    open("output.json", "w").close()
    c = twint.Config()
    c.Username = user
    c.Limit = tweet_count
    c.Store_json = True
    c.Output = "output.json"
    twint.run.Search(c)


def parse_mentions(user: str, tweet_count: int):
    scrape_twitter(user, tweet_count)
    data = []
    with open('output.json', encoding='utf-8') as output:
        for line in output:
            data.append(json.loads(line))
    mentions = ""
    for tweet in data:
        if not tweet['mentions'] == []:
            for mention in tweet['mentions']:
                    mentions += mention+" "
    return mentions.strip()

def mention_cloud(user: str, tweet_count: int):
        return json.dumps(TwitterUser(user, parse_mentions(user, tweet_count).split(" "), 0).to_json())


def mention_network(user: str, tweet_count: int, depth: int):
        output = mention_network_helper(user.upper(), tweet_count, depth, {}, []);
        output['length'] = len(output)
        return output

def mention_network_helper(user: str, tweet_count: int, depth: int, output, uniqueNames):
        if depth == 0:
                return None
        arr = list(dict.fromkeys(parse_mentions(user, tweet_count).upper().split(" ")))[:5]
        setArr = set(arr)
        arr = [a for a in setArr if a not in uniqueNames]
        curr_user = TwitterUser(user, arr, depth)

        output[str(len(output))] = curr_user.to_json()
        uniqueNames.append(curr_user.name)
        for mentions in arr:
                mention_network_helper(mentions, tweet_count, depth-1, output, uniqueNames)
        return output

