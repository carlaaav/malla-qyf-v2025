import { useState } from "react";
import "./index.css";

const coursesBySemester = [
  // PRIMER AÑO - Semestre I
  [
    { code: "QFAR1101", name: "Matemáticas I" },
    { code: "QFAR1102", name: "Química I" },
    { code: "QFAR1103", name: "Técnicas Básicas de Laboratorio" },
    { code: "QFAR1104", name: "Biología Celular y Molecular" },
    { code: "QFAR1105", name: "Introducción a las Ciencias Farmacéuticas" },
    { code: "CES1144", name: "Salud, Bienestar y Sociedad" },
  ],
  // PRIMER AÑO - Semestre II
  [
    { code: "QFAR1106", name: "Matemáticas II", prereqs: ["QFAR1101"] },
    { code: "QFAR1107", name: "Química II", prereqs: ["QFAR1102", "QFAR1103"] },
    { code: "QFAR1109", name: "Fisiología y Patología I", prereqs: ["QFAR1104"] },
    { code: "CES1145", name: "Salud Pública", prereqs: ["CES1144"] },
    { code: "ELAC", name: "Electivo Antropológico Cristiano" },
    { code: "QFAR1110", name: "Anatomía e Histología" },
  ],
  // SEGUNDO AÑO - Semestre III
  [
    { code: "QFAR1111", name: "Química Orgánica I", prereqs: ["QFAR1107"] },
    { code: "QFAR1112", name: "Botánica Farmacéutica" },
    { code: "QFAR1108", name: "Biofísica" },
    { code: "QFAR1113", name: "Fisiología y Patología II", prereqs: ["QFAR1109"] },
    { code: "CES1146", name: "Salud Familiar Comunitaria e Intercultural I", prereqs: ["CES1145"] },
    { code: "EL1", name: "Electivo Diversidad I" },
  ],
  // SEGUNDO AÑO - Semestre IV
  [
    { code: "QFAR1115", name: "Química Orgánica II", prereqs: ["QFAR1111"] },
    { code: "QFAR1116", name: "Química Analítica", prereqs: ["QFAR1107"] },
    { code: "QFAR1117", name: "Bioquímica General", prereqs: ["QFAR1111"] },
    { code: "CES1147", name: "Salud Familiar Comunitaria e Intercultural II", prereqs: ["CES1146"] },
    { code: "QFAR1114", name: "Comunicación en Salud" },
    { code: "QFAR1118", name: "Fisicoquímica", prereqs: ["QFAR1107", "QFAR1106"] },
  ],
  // TERCER AÑO - Semestre V
  [
    { code: "QFAR1119", name: "Farmacología General", prereqs: ["QFAR1115"] },
    { code: "QFAR1120", name: "Microbiología", prereqs: ["QFAR1102"] },
    { code: "QFAR1121", name: "Análisis Instrumental" },
    { code: "QFAR1122", name: "Farmacognosia", prereqs: ["QFAR1112", "QFAR1115"] },
    { code: "CES1158", name: "Práctica Comunitaria Interdisciplinaria", prereqs: ["CES1147"] },
    { code: "EL2", name: "Electivo Diversidad II" },
  ],
  // TERCER AÑO - Semestre VI
  [
    { code: "QFAR1123", name: "Farmacología de Sistemas I", prereqs: ["QFAR1113", "QFAR1119"] },
    { code: "QFAR1124", name: "Bioquímica Clínica", prereqs: ["QFAR1117"] },
    { code: "QFAR1125", name: "Farmacoquímica I", prereqs: ["QFAR1119"] },
    { code: "QFAR1126", name: "Inmunología", prereqs: ["QFAR1113", "QFAR1119"] },
    { code: "QFAR1127", name: "Bioestadística", prereqs: ["QFAR1106"] },
    { code: "QFAR1131", name: "Administración y Gestión Farmacéutica", prereqs: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"] },
  ],
  // CUARTO AÑO - Semestre VII
  [
    { code: "QFAR1128", name: "Farmacología de Sistemas II", prereqs: ["QFAR1123"] },
    { code: "QFAR1129", name: "Tecnología Farmacéutica I", prereqs: ["QFAR1116"] },
    { code: "QFAR1130", name: "Farmacoquímica II", prereqs: ["QFAR1125"] },
    { code: "QFAR1145", name: "Electivo de Especialidad I", prereqs: ["QFAR1131", "QFAR1125"] },
    { code: "QFAR1122", name: "Práctica Preliminar", prereqs: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"] },
    { code: "ELTE", name: "Electivo Teológico" },
  ],
  // CUARTO AÑO - Semestre VIII
  [
    { code: "QFAR1133", name: "Toxicología", prereqs: ["QFAR1128", "QFAR1121"] },
    { code: "QFAR1134", name: "Tecnología Farmacéutica II", prereqs: ["QFAR1129"] },
    { code: "QFAR1135", name: "Atención Farmacéutica", prereqs: ["QFAR1124", "QFAR1128"] },
    { code: "QFAR1140", name: "Cosmética Farmacéutica", prereqs: ["QFAR1134"] },
    { code: "QFAR1136", name: "Farmacia Comunitaria y Asistencial", prereqs: ["QFAR1128", "QFAR1129"] },
    { code: "QFAR1137", name: "Seminarios de Investigación", prereqs: ["QFAR1132"] },
    { code: "QFAR1138", name: "Legislación Farmacéutica", prereqs: ["QFAR1132", "QFAR1128", "QFAR1129"] },
  ],
  // QUINTO AÑO - Semestre IX
  [
    { code: "QFAR1146", name: "Electivo Interprofesional", prereqs: ["QFAR1136"] },
    { code: "QFAR1139", name: "Biofarmacia", prereqs: ["QFAR1134"] },
    { code: "QFAR1140", name: "Cosmética Farmacéutica", prereqs: ["QFAR1134"] },
    { code: "QFAR1141", name: "Farmacia Clínica", prereqs: ["QFAR1130", "QFAR1135"] },
    { code: "IET1433", name: "Ética Profesional" },
    { code: "EL3", name: "Electivo Diversidad III" },
  ],
  // QUINTO AÑO - Semestre X
  [
    { code: "QFAR1142", name: "Práctica Profesional", prereqs: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"] },
    { code: "QFAR1143", name: "Actividad de Titulación", prereqs: ["QFAR1137"] },
    { code: "QFAR1144", name: "Electivo de Especialidad II", prereqs: ["QFAR1145"] },
  ],
];

export default function App() {
  const [approved, setApproved] = useState([]);

  const toggleCourse = (code) => {
    setApproved((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const isAvailable = (course) => {
    if (!course.prereqs) return true;
    return course.prereqs.every((p) => approved.includes(p));
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Malla Curricular de Química y Farmacia</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {coursesBySemester.map((semester, i) => (
          <div key={i} className="bg-white shadow rounded p-2">
            <h2 className="text-lg font-semibold text-center mb-2">Semestre {i + 1}</h2>
            {semester.map((course) => {
              const available = isAvailable(course);
              const approvedClass = approved.includes(course.code)
                ? "bg-green-200"
                : available
                ? "bg-yellow-100"
                : "bg-gray-200 opacity-50";
              return (
                <div
                  key={course.code}
                  className={`p-2 m-1 rounded cursor-pointer ${approvedClass}`}
                  onClick={() => available && toggleCourse(course.code)}
                >
                  <span className="block text-sm font-medium">{course.code}</span>
                  <span className="text-sm">{course.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
