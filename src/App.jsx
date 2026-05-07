import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="app-bg">
      <Container className="py-5">
        <Row className="mb-5 text-center text-white">
          <Col>
            <h1 className="fw-bold text-uppercase">
              Análisis de Viajes STM
            </h1>
          </Col>
        </Row>
        <Row className="mb-4 justify-content-center">
          <Col md={10}>
            <Card className="project-card shadow-sm border-0">
              <Card.Body>
                <p className="text-muted">
                  Este proyecto lo hice usando datos reales del STM de Montevideo con la idea de analizar cómo se comportan los viajes y tratar de encontrar algunos patrones interesantes según horarios, líneas y empresas.
                </p>
                <p className="text-muted">
                  Los datos venían separados en varios CSV mensuales y bastante pesados, así que primero armé un pequeño proceso ETL en Python para leerlos por partes, limpiarlos y cargarlos en SQL Server sin tener problemas de memoria.
                </p>
                <p className="text-muted">
                  Después trabajé directamente sobre SQL Server creando views y stored procedures para resumir la información y dejar consultas listas para análisis y reporting.
                </p>
                <p className="text-muted">
                  A partir de eso construí dashboards en Power BI mostrando métricas como cantidad de viajes, pasajeros por hora, líneas más utilizadas y comparación entre empresas de transporte.
                </p>
                <p className="text-muted">
                  También armé algunos indicadores para comparar el movimiento entre distintos meses y ver variaciones en la demanda del sistema a lo largo del tiempo.
                </p>
                <p className="text-muted mb-3">
                  La idea no era hacer algo súper complejo sino practicar un flujo bastante parecido a un proyecto BI real, trabajando con ETL, SQL Server, modelado y visualización de datos.
                </p>
                <a
                  href="https://github.com/juanfonseca09/transporte/tree/main/back/sql"
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub style={{ marginRight: "6px" }} />
                  Ver código
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5 justify-content-center">
          <Col md={10}>
            <Card className="project-card shadow-sm border-0">
              <Card.Body className="text-center">
                <img
                  src="/bus.jpg"
                  alt="dashboard stm"
                  className="img-fluid rounded"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}