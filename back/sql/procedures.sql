USE stm;
GO

CREATE PROCEDURE p_lineas
AS
BEGIN
    SELECT TOP 10
        dsc_linea AS linea,
        COUNT(DISTINCT id_viaje) AS viajes,
        SUM(cantidad_pasajeros) AS pasajeros
    FROM viajes_stm
    GROUP BY dsc_linea
    ORDER BY pasajeros DESC;
END;
GO

CREATE PROCEDURE p_horas
AS
BEGIN
    SELECT TOP 5
        DATEPART(HOUR, fecha_evento) AS hora,
        COUNT(DISTINCT id_viaje) AS viajes,
        SUM(cantidad_pasajeros) AS pasajeros
    FROM viajes_stm
    GROUP BY DATEPART(HOUR, fecha_evento)
    ORDER BY pasajeros DESC;
END;
GO

CREATE PROCEDURE p_mes
    @anio INT,
    @mes INT
AS
BEGIN
    SELECT
        COUNT(DISTINCT id_viaje) AS viajes,
        SUM(cantidad_pasajeros) AS pasajeros,
        COUNT(DISTINCT dsc_linea) AS lineas,
        COUNT(DISTINCT descrip_empresa) AS empresas
    FROM viajes_stm
    WHERE YEAR(fecha_evento) = @anio
      AND MONTH(fecha_evento) = @mes;
END;
GO