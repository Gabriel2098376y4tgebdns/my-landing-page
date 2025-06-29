# import_clientes.py

import pandas as pd
import requests
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

# === 1. Carregue o CSV ===
df = pd.read_csv('clientes.csv')  # Seu arquivo de clientes

# === 2. Defina os HEADERS ===
headers = {
    "apikey": SUPABASE_SERVICE_ROLE_KEY,
    "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
    "Content-Type": "application/json"
}

# === 3. Para cada linha, envie via REST ===
for _, row in df.iterrows():
    payload = row.to_dict()
    print(f"Enviando: {payload}")

    res = requests.post(
        f"{SUPABASE_URL}/rest/v1/clientes",
        headers=headers,
        json=payload
    )

    print(f"Status: {res.status_code}, Resposta: {res.text}")

print(" Importação finalizada!")
