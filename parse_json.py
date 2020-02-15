import pandas as pd
import json
import sys

with open(sys.argv[1], 'r', encoding='utf-8') as f:
    d = f.readlines()

L = []
for dd in d:
    L.append(json.loads(dd))

df = pd.DataFrame(L)

df.to_csv("data.csv", encoding='utf-8-sig', index=False)
