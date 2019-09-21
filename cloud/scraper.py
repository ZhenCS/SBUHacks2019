import twint
import json


class TwitterUser:
    def __init__(self, name: str, mentions: list):
        self.name = name
        self.mentions = mentions

    def to_json(self):
        return json.dumps({"name": self.name,
                           "mentions": self.mentions})


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
    return TwitterUser(user, parse_mentions(user, tweet_count).split(" ")).to_json()


def mention_network(user: str, tweet_count: int, depth: int):
    output = mention_network_helper(user, tweet_count, depth, {})
    output['length'] = len(output)
    return output


def mention_network_helper(user: str, tweet_count: int, depth: int, output):
    if depth == 0:
        return None
    arr = list(dict.fromkeys(parse_mentions(user, tweet_count).split(" ")))[:5]
    curr_user = TwitterUser(user, arr)
    output[str(len(output))] = {"name": curr_user.name, "mentions" : curr_user.mentions}
    for mentions in arr:
        mention_network_helper(mentions, tweet_count, depth-1, output)
    return output

