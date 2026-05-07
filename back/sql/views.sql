USE stm;
GO

CREATE VIEW vw_mes AS
SELECT
    YEAR(fecha_evento) AS anio,
    MONTH(fecha_evento) AS mes,
    COUNT(DISTINCT id_viaje) AS viajes,
    SUM(cantidad_pasajeros) AS pasajeros
FROM viajes_stm
GROUP BY YEAR(fecha_evento), MONTH(fecha_evento);
GO

CREATE VIEW vw_hora AS
SELECT
    DATEPART(HOUR, fecha_evento) AS hora,
    COUNT(DISTINCT id_viaje) AS viajes,
    SUM(cantidad_pasajeros) AS pasajeros
FROM viajes_stm
GROUP BY DATEPART(HOUR, fecha_evento);
GO

CREATE VIEW vw_lineas AS
SELECT
    dsc_linea AS linea,
    COUNT(DISTINCT id_viaje) AS viajes,
    SUM(cantidad_pasajeros) AS pasajeros
FROM viajes_stm
GROUP BY dsc_linea;
GO