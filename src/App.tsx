import React, { useState, useEffect } from "react";

type Curso = {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
};

const cursos: Curso[] = [
  // Primer año
  { id: "QFAR1101", nombre: "Matemáticas I", semestre: 1, creditos: 6, requisitos: [] },
  { id: "QFAR1102", nombre: "Química I", semestre: 1, creditos: 6, requisitos: [] },
  { id: "QFAR1103", nombre: "Técnicas Básicas de Laboratorio", semestre: 1, creditos: 4, requisitos: [] },
  { id: "QFAR1104", nombre: "Biología Celular y Molecular", semestre: 1, creditos: 5, requisitos: [] },
  { id: "QFAR1105", nombre: "Introducción a las Ciencias Farmacéuticas", semestre: 1, creditos: 3, requisitos: [] },
  { id: "CES1144", nombre: "Salud, Bienestar y Sociedad", semestre: 1, creditos: 3, requisitos: [] },

  { id: "QFAR1106", nombre: "Matemáticas II", semestre: 2, creditos: 6, requisitos: [] },
  { id: "QFAR1107", nombre: "Química II", semestre: 2, creditos: 6, requisitos: ["QFAR1102", "QFAR1103"] },
  { id: "QFAR1109", nombre: "Fisiología y Patología I", semestre: 2, creditos: 6, requisitos: ["QFAR1104"] },
  { id: "CES1145", nombre: "Salud Pública", semestre: 2, creditos: 3, requisitos: ["CES1144"] },
  { id: "ELAC", nombre: "Electivo Antrológico Cristiano ELAC", semestre: 2, creditos: 3, requisitos: [] },
  { id: "QFAR1110", nombre: "Anatomía e Histología", semestre: 2, creditos: 5, requisitos: [] },

  // Segundo año
  { id: "QFAR1111", nombre: "Química Orgánica I", semestre: 3, creditos: 6, requisitos: ["QFAR1107"] },
  { id: "QFAR1112", nombre: "Botánica Farmacéutica", semestre: 3, creditos: 4, requisitos: [] },
  { id: "QFAR1108", nombre: "Biofísica", semestre: 3, creditos: 4, requisitos: [] },
  { id: "QFAR1113", nombre: "Fisiología y Patología II", semestre: 3, creditos: 6, requisitos: ["QFAR1109"] },
  { id: "CES1146", nombre: "Salud Familiar Comunitaria e Intercultural I", semestre: 3, creditos: 3, requisitos: ["CES1145"] },
  { id: "EL1", nombre: "Electivo Diversidad I EL1", semestre: 3, creditos: 3, requisitos: [] },

  { id: "QFAR1115", nombre: "Química Orgánica II", semestre: 4, creditos: 6, requisitos: ["QFAR1111"] },
  { id: "QFAR1116", nombre: "Química Analítica", semestre: 4, creditos: 5, requisitos: ["QFAR1107"] },
  { id: "QFAR1117", nombre: "Bioquímica General", semestre: 4, creditos: 5, requisitos: ["QFAR1111"] },
  { id: "CES1147", nombre: "Salud Familiar Comunitaria e Intercultural II", semestre: 4, creditos: 3, requisitos: ["CES1146"] },
  { id: "QFAR1114", nombre: "Comunicación en salud", semestre: 4, creditos: 3, requisitos: [] },
  { id: "QFAR1118", nombre: "Fisicoquímica", semestre: 4, creditos: 5, requisitos: ["QFAR1107", "QFAR1106"] },

  // Tercer año
  { id: "QFAR1119", nombre: "Farmacología General", semestre: 5, creditos: 5, requisitos: ["QFAR1115"] },
  { id: "QFAR1120", nombre: "Microbiología", semestre: 5, creditos: 4, requisitos: ["QFAR1102"] },
  { id: "QFAR1121", nombre: "Análisis Instrumental", semestre: 5, creditos: 4, requisitos: [] },
  { id: "QFAR1122", nombre: "Farmacognosia", semestre: 5, creditos: 4, requisitos: ["QFAR1112", "QFAR1115"] },
  { id: "CES1158", nombre: "Práctica Comunitaria Interdisciplinaria", semestre: 5, creditos: 3, requisitos: ["CES1147"] },
  { id: "EL2", nombre: "Electivo Diversidad II EL2", semestre: 5, creditos: 3, requisitos: [] },

  { id: "QFAR1123", nombre: "Farmacología de Sistemas I", semestre: 6, creditos: 5, requisitos: ["QFAR1113", "QFAR1119"] },
  { id: "QFAR1124", nombre: "Bioquímica Clínica", semestre: 6, creditos: 4, requisitos: ["QFAR1117", "QFAR1116"] },
  { id: "QFAR1125", nombre: "Farmacoquímica I", semestre: 6, creditos: 5, requisitos: ["QFAR1119"] },
  { id: "QFAR1126", nombre: "Inmunología", semestre: 6, creditos: 4, requisitos: ["QFAR1113", "QFAR1119"] },
  { id: "QFAR1127", nombre: "Bioestadística", semestre: 6, creditos: 3, requisitos: ["QFAR1106"] },
  { id: "QFAR1131", nombre: "Administración y gestión farmacéutica", semestre: 6, creditos: 4, requisitos: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"] },

  // Cuarto año
  { id: "QFAR1128", nombre: "Farmacología de Sistemas II", semestre: 7, creditos: 5, requisitos: ["QFAR1123"] },
  { id: "QFAR1129", nombre: "Tecnología Farmacéutica I", semestre: 7, creditos: 5, requisitos: ["QFAR1116"] },
  { id: "QFAR1130", nombre: "Farmacoquímica II", semestre: 7, creditos: 5, requisitos: ["QFAR1125"] },
  { id: "QFAR1145", nombre: "Electivo de Especialidad I", semestre: 7, creditos: 3, requisitos: ["QFAR1131", "QFAR1125"] },
  { id: "QFAR1132", nombre: "Práctica Preliminar", semestre: 7, creditos: 3, requisitos: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"] },
  { id: "ELTE", nombre: "Electivo Teológico ELTE", semestre: 7, creditos: 3, requisitos: [] },

  { id: "QFAR1133", nombre: "Toxicología", semestre: 8, creditos: 4, requisitos: ["QFAR1128", "QFAR1121"] },
  { id: "QFAR1134", nombre: "Tecnología Farmacéutica II", semestre: 8, creditos: 5, requisitos: ["QFAR1129"] },
  { id: "QFAR1135", nombre: "Atención Farmacéutica", semestre: 8, creditos: 4, requisitos: ["QFAR1124", "QFAR1128"] },
  { id: "QFAR1140", nombre: "Cosmética Farmacéutica", semestre: 8, creditos: 3, requisitos: ["QFAR1134"] },
  { id: "QFAR1136", nombre: "Farmacia Comunitaria y Asistencial", semestre: 8, creditos: 3, requisitos: ["QFAR1128", "QFAR1129"] },
  { id: "QFAR1137", nombre: "Seminarios de Investigación", semestre: 8, creditos: 3, requisitos: ["QFAR1132"] },
  { id: "QFAR1138", nombre: "Legislación Farmacéutica", semestre: 8, creditos: 3, requisitos: ["QFAR1132", "QFAR1128", "QFAR1129"] },

  // Quinto año
  { id: "QFAR1146", nombre: "Electivo Interprofesional", semestre: 9, creditos: 3, requisitos: ["QFAR1136"] },
  { id: "QFAR1139", nombre: "Biofarmacia", semestre: 9, creditos: 4, requisitos: ["QFAR1134"] },
  { id: "QFAR1140", nombre: "Cosmética Farmacéutica", semestre: 9, creditos: 3, requisitos: ["QFAR1134"] },
  { id: "QFAR1141", nombre: "Farmacia Clínica", semestre: 9, creditos: 5, requisitos: ["QFAR1130", "QFAR1135"] },
  { id: "IET1433", nombre: "Ética Profesional", semestre: 9, creditos: 3, requisitos: [] },
  { id: "EL3", nombre: "Electivo Diversidad III EL3", semestre: 9, creditos: 3, requisitos: [] },

  { id: "QFAR1142", nombre: "Práctica Profesional", semestre: 10, creditos: 8, requisitos: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"] },
  { id: "QFAR1143", nombre: "Actividad de Titulación", semestre: 10, creditos: 3, requisitos: ["QFAR1137"] },
  { id: "QFAR1144", nombre: "Electivo de Especialidad II", semestre: 10, creditos: 3, requisitos: ["QFAR1145"] },
];

const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const App = () => {
  const [cursosAprobados, setCursosAprobados] = useState<string[]>(() => {
    const guardado = localStorage.getItem("cursosAprobados");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
  }, [cursosAprobados]);

  const estaDesbloqueado = (curso: Curso): boolean =>
    curso.requisitos.every((req) => cursosAprobados.includes(req));

  const toggleCurso = (id: string) => {
    setCursosAprobados((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const cursosPorSemestre: { [sem: number]: Curso[] } = {};
  for (const curso of cursos) {
    if (!cursosPorSemestre[curso.semestre]) {
      cursosPorSemestre[curso.semestre] = [];
    }
    cursosPorSemestre[curso.semestre].push(curso);
  }

  const porcentaje = (cursosAprobados.length / cursos.length) * 100;
  const creditosTotales = cursosAprobados
    .map((id) => cursos.find((c) => c.id === id)?.creditos || 0)
    .reduce((acc, cur) => acc + cur, 0);

  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem("modoOscuro");
    return guardado ? JSON.parse(guardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  return (
    <div
      className={`relative min-h-screen p-6 overflow-x-hidden overflow-y-auto transition-colors duration-500 ${
        modoOscuro ? "bg-[#e7e0f6] text-[#3c2a52]" : "bg-pink-50 text-pink-800"
      }`}
    >
