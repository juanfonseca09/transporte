# STM - Análisis de Viajes en Montevideo

Este proyecto lo hice usando datos reales del STM de Montevideo con la idea de analizar cómo se comportan los viajes y practicar un flujo bastante parecido a algo de BI/Data Engineering real.

Los datos originales venían separados en varios CSV mensuales y además eran bastante grandes, así que primero armé un pequeño ETL en Python para leerlos por partes, limpiarlos y cargarlos en SQL Server sin problemas de memoria.

Después trabajé sobre SQL Server creando views y stored procedures para resumir información y dejar consultas preparadas para análisis y visualización.

Por último, conecté todo a Power BI para armar dashboards mostrando métricas como:

- viajes por mes
- pasajeros por hora
- líneas más utilizadas
- empresas con más movimiento
- variaciones entre meses

## Tecnologías

- Python
- Pandas
- SQL Server
- SQL
- Power BI
- React + Bootstrap

## ETL

Para procesar los archivos usé `chunksize` porque el dataset completo era bastante pesado.

El flujo fue más o menos:

```text
CSV -> Python -> SQL Server -> Power BI