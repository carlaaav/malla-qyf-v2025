// data/courses.ts
export interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  requisitos: string[];
}

export const cursos: Curso[] = [
  // --- PRIMER AÑO ---
  // Semestre I
  { id: "QFAR1101", nombre: "Matemáticas I", semestre: 1, requisitos: [] },
  { id: "QFAR1102", nombre: "Química I", semestre: 1, requisitos: [] },
  { id: "QFAR1103", nombre: "Técnicas Básicas de Laboratorio", semestre: 1, requisitos: [] },
  { id: "QFAR1104", nombre: "Biología Celular y Molecular", semestre: 1, requisitos: [] },
  { id: "QFAR1105", nombre: "Introducción a las Ciencias Farmacéuticas", semestre: 1, requisitos: [] },
  { id: "CES1144", nombre: "Salud, Bienestar y Sociedad", semestre: 1, requisitos: [] },

  // Semestre II
  { id: "QFAR1106", nombre: "Matemáticas II", semestre: 2, requisitos: ["QFAR1101"] },
  { id: "QFAR1107", nombre: "Química II", semestre: 2, requisitos: ["QFAR1102", "QFAR1103"] },
  { id: "QFAR1109", nombre: "Fisiología y Patología I", semestre: 2, requisitos: ["QFAR1104"] },
  { id: "CES1145", nombre: "Salud Pública", semestre: 2, requisitos: ["CES1144"] },
  { id: "ELAC", nombre: "Electivo Antropológico Cristiano", semestre: 2, requisitos: [] },
  { id: "QFAR1110", nombre: "Anatomía e Histología", semestre: 2, requisitos: [] },

  // --- SEGUNDO AÑO ---
  // Semestre III
  { id: "QFAR1111", nombre: "Química Orgánica I", semestre: 3, requisitos: ["QFAR1107"] },
  { id: "QFAR1112", nombre: "Botánica Farmacéutica", semestre: 3, requisitos: [] },
  { id: "QFAR1108", nombre: "Biofísica", semestre: 3, requisitos: [] },
  { id: "QFAR1113", nombre: "Fisiología y Patología II", semestre: 3, requisitos: ["QFAR1109"] },
  { id: "CES1146", nombre: "Salud Familiar Comunitaria e Intercultural I", semestre: 3, requisitos: ["CES1145"] },
  { id: "EL1", nombre: "Electivo Diversidad I", semestre: 3, requisitos: [] },

  // Semestre IV
  { id: "QFAR1115", nombre: "Química Orgánica II", semestre: 4, requisitos: ["QFAR1111"] },
  { id: "QFAR1116", nombre: "Química Analítica", semestre: 4, requisitos: ["QFAR1107"] },
  { id: "QFAR1117", nombre: "Bioquímica General", semestre: 4, requisitos: ["QFAR1111"] },
  { id: "CES1147", nombre: "Salud Familiar Comunitaria e Intercultural II", semestre: 4, requisitos: ["CES1146"] },
  { id: "QFAR1114", nombre: "Comunicación en salud", semestre: 4, requisitos: [] },
  { id: "QFAR1118", nombre: "Fisicoquímica", semestre: 4, requisitos: ["QFAR1107", "QFAR1106"] },

  // --- TERCER AÑO ---
  // Semestre V
  { id: "QFAR1119", nombre: "Farmacología General", semestre: 5, requisitos: ["QFAR1115"] },
  { id: "QFAR1120", nombre: "Microbiología", semestre: 5, requisitos: ["QFAR1102"] },
  { id: "QFAR1121", nombre: "Análisis Instrumental", semestre: 5, requisitos: [] },
  { id: "QFAR1122", nombre: "Farmacognosia", semestre: 5, requisitos: ["QFAR1112", "QFAR1115"] },
  { id: "CES1158", nombre: "Práctica Comunitaria Interdisciplinaria", semestre: 5, requisitos: ["CES1147"] },
  { id: "EL2", nombre: "Electivo Diversidad II", semestre: 5, requisitos: [] },

  // Semestre VI
  { id: "QFAR1123", nombre: "Farmacología de Sistemas I", semestre: 6, requisitos: ["QFAR1113", "QFAR1119"] },
  { id: "QFAR1124", nombre: "Bioquímica Clínica", semestre: 6, requisitos: ["QFAR1117"] },
  { id: "QFAR1125", nombre: "Farmacoquímica I", semestre: 6, requisitos: ["QFAR1119"] },
  { id: "QFAR1126", nombre: "Inmunología", semestre: 6, requisitos: ["QFAR1113", "QFAR1119"] },
  { id: "QFAR1127", nombre: "Bioestadística", semestre: 6, requisitos: ["QFAR1106"] },
  { id: "QFAR1131", nombre: "Administración y gestión farmacéutica", semestre: 6, requisitos: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"] },

  // --- CUARTO AÑO ---
  // Semestre VII
  { id: "QFAR1128", nombre: "Farmacología de Sistemas II", semestre: 7, requisitos: ["QFAR1123"] },
  { id: "QFAR1129", nombre: "Tecnología Farmacéutica I", semestre: 7, requisitos: ["QFAR1116"] },
  { id: "QFAR1130", nombre: "Farmacoquímica II", semestre: 7, requisitos: ["QFAR1125"] },
  { id: "QFAR1145", nombre: "Electivo de Especialidad I", semestre: 7, requisitos: ["QFAR1131", "QFAR1125"] },
  { id: "QFAR1122", nombre: "Práctica Preliminar", semestre: 7, requisitos: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"] },
  { id: "ELTE", nombre: "Electivo teológico", semestre: 7, requisitos: [] },

  // Semestre VIII
  { id: "QFAR1133", nombre: "Toxicología", semestre: 8, requisitos: ["QFAR1128", "QFAR1121"] },
  { id: "QFAR1134", nombre: "Tecnología farmacéutica", semestre: 8, requisitos: ["QFAR1129"] },
  { id: "QFAR1135", nombre: "Atención Farmacéutica", semestre: 8, requisitos: ["QFAR1124", "QFAR1128"] },
  { id: "QFAR1140", nombre: "Cosmética Farmacéutica", semestre: 8, requisitos: ["QFAR1134"] },
  { id: "QFAR1136", nombre: "Farmacia Comunitaria y Asistencial", semestre: 8, requisitos: ["QFAR1128", "QFAR1129"] },
  { id: "QFAR1137", nombre: "Seminarios de Investigación", semestre: 8, requisitos: ["QFAR1132"] },
  { id: "QFAR1138", nombre: "Legislación farmacéutica", semestre: 8, requisitos: ["QFAR1132", "QFAR1128", "QFAR1129"] },

  // --- QUINTO AÑO ---
  // Semestre IX
  { id: "QFAR1146", nombre: "Electivo interprofesional", semestre: 9, requisitos: ["QFAR1136"] },
  { id: "QFAR1139", nombre: "Biofarmacia", semestre: 9, requisitos: ["QFAR1134"] },
  { id: "QFAR1140", nombre: "Cosmetica Farmaceutica", semestre: 9, requisitos: ["QFAR1134"] },
  { id: "QFAR1141", nombre: "Farmacia Clínica", semestre: 9, requisitos: ["QFAR1130", "QFAR1135"] },
  { id: "IET1433", nombre: "Ética profesional", semestre: 9, requisitos: [] },
  { id: "EL3", nombre: "Electivo diversidad III", semestre: 9, requisitos: [] },

  // Semestre X
  { id: "QFAR1142", nombre: "Práctica Profesional", semestre: 10, requisitos: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"] },
  { id: "QFAR1143", nombre: "Actividad de Titulación", semestre: 10, requisitos: ["QFAR1137"] },
  { id: "QFAR1144", nombre: "Electivo de especialidad II", semestre: 10, requisitos: ["QFAR1145"] }
];
