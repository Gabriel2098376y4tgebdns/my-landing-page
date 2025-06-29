import requests
import pandas as pd

# Sua URL base do Supabase (sem /rest/v1 no final)
base_url = "https://xxohfgaqpivmxbdegwem.supabase.co/rest/v1"

# Sua chave de API
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4b2hmZ2FxcGl2bXhiZGVnd2VtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU3Nzg4NSwiZXhwIjoyMDY2MTUzODg1fQ.ZSUbijWgq4QWFVTgW33Q_WsxTDsoljurqsB3GZMyRIQ"

headers = {
    "apikey": key,
    "Authorization": f"Bearer {key}",
    "Content-Type": "application/json",
    "Prefer": "resolution=merge-duplicates"
 }

# Lista de tabelas e seus arquivos CSV correspondentes
tables = {
    "pedidos": "pedidos.csv",
   
}

# Loop geral
for table, csv_file in tables.items():
    print(f"Importando {csv_file} para a tabela '{table}'...")
    
    url = f"{base_url}/{table}"
    df = pd.read_csv(csv_file)
if 'Unnamed: 0' in df.columns:
    df = df.drop(columns=['Unnamed: 0'])

    data = df.to_dict(orient="records")

    for row in data:
        res = requests.post(url, headers=headers, json=row)
        print(res.status_code, res.text)

print("✅ Importação concluída para todas as tabelas.")