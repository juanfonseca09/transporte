import pandas as pd
import glob
from sqlalchemy import create_engine

engine = create_engine("mssql+pyodbc://localhost\\SQLEXPRESS/stm?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes")

archivos = glob.glob("data/*.csv")

# no cargo todo por tema de memoria
for archivo in archivos:
    for df in pd.read_csv(
        archivo,
        sep=",",
        encoding="latin-1",
        chunksize=50000,
        nrows=300000,
        dtype={"dsc_linea": str}
    ):
        df.columns = df.columns.str.strip().str.lower()
        df["fecha_evento"] = pd.to_datetime(
            df["fecha_evento"],
            errors="coerce"
        )
        df.to_sql(
            "viajes_stm",
            engine,
            if_exists="append",
            index=False
        )

