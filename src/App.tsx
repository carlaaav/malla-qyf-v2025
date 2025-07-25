import { useState } from 'react';
import { RamoCard } from './components/RamoCard';
import './index.css';

interface Curso {
  id: string;
  nombre: string;
  requisitos: string[];
  creditos?: number;
}

const coursesBySemester: Curso[][] = [
  // PRIMER AÑO - Semestre I
  [
    { id: "QFAR1101", nombre: "Matemáticas I", requisitos: [], creditos: 5 },
    { id: "QFAR1102", nombre: "Química I", requisitos: [], creditos: 5 },
    { id: "QFAR1103", nombre: "Técnicas Básicas de Laboratorio", requisitos: [], creditos: 4 },
    { id: "QFAR1104", nombre: "Biología Celular y Molecular", requisitos: [], creditos: 5 },
    { id: "QFAR1105", nombre: "Introducción a las Ciencias Farmacéuticas", requisitos: [], creditos: 3 },
    { id: "CES1144", nombre: "Salud, Bienestar y Sociedad", requisitos: [], creditos: 3 },
  ],
  // PRIMER AÑO - Semestre II
  [
    { id: "QFAR1106", nombre: "Matemáticas II", requisitos: ["QFAR1101"], creditos: 5 },
    { id: "QFAR1107", nombre: "Química II", requisitos: ["QFAR1102", "QFAR1103"], creditos: 5 },
    { id: "QFAR1109", nombre: "Fisiología y Patología I", requisitos: ["QFAR1104"], creditos: 5 },
    { id: "CES1145", nombre: "Salud Pública", requisitos: ["CES1144"], creditos: 3 },
    { id: "ELAC", nombre: "Electivo Antropológico Cristiano", requisitos: [], creditos: 3 },
    { id: "QFAR1110", nombre: "Anatomía e Histología", requisitos: [], creditos: 4 },
  ],
  // SEGUNDO AÑO - Semestre III
  [
    { id: "QFAR1111", nombre: "Química Orgánica I", requisitos: ["QFAR1107"], creditos: 5 },
    { id: "QFAR1112", nombre: "Botánica Farmacéutica", requisitos: [], creditos: 4 },
    { id: "QFAR1108", nombre: "Biofísica", requisitos: [], creditos: 4 },
    { id: "QFAR1113", nombre: "Fisiología y Patología II", requisitos: ["QFAR1109"], creditos: 5 },
    { id: "CES1146", nombre: "Salud Familiar Comunitaria e Intercultural I", requisitos: ["CES1145"], creditos: 3 },
    { id: "EL1", nombre: "Electivo Diversidad I", requisitos: [], creditos: 3 },
  ],
  // SEGUNDO AÑO - Semestre IV
  [
    { id: "QFAR1115", nombre: "Química Orgánica II", requisitos: ["QFAR1111"], creditos: 5 },
    { id: "QFAR1116", nombre: "Química Analítica", requisitos: ["QFAR1107"], creditos: 5 },
    { id: "QFAR1117", nombre: "Bioquímica General", requisitos: ["QFAR1111"], creditos: 5 },
    { id: "CES1147", nombre: "Salud Familiar Comunitaria e Intercultural II", requisitos: ["CES1146"], creditos: 3 },
    { id: "QFAR1114", nombre: "Comunicación en Salud", requisitos: [], creditos: 3 },
    { id: "QFAR1118", nombre: "Fisicoquímica", requisitos: ["QFAR1107", "QFAR1106"], creditos: 5 },
  ],
  // TERCER AÑO - Semestre V
  [
    { id: "QFAR1119", nombre: "Farmacología General", requisitos: ["QFAR1115"], creditos: 5 },
    { id: "QFAR1120", nombre: "Microbiología", requisitos: ["QFAR1102"], creditos: 5 },
    { id: "QFAR1121", nombre: "Análisis Instrumental", requisitos: [], creditos: 4 },
    { id: "QFAR1122", nombre: "Farmacognosia", requisitos: ["QFAR1112", "QFAR1115"], creditos: 4 },
    { id: "CES1158", nombre: "Práctica Comunitaria Interdisciplinaria", requisitos: ["CES1147"], creditos: 5 },
    { id: "EL2", nombre: "Electivo Diversidad II", requisitos: [], creditos: 3 },
  ],
  // TERCER AÑO - Semestre VI
  [
    { id: "QFAR1123", nombre: "Farmacología de Sistemas I", requisitos: ["QFAR1113", "QFAR1119"], creditos: 5 },
    { id: "QFAR1124", nombre: "Bioquímica Clínica", requisitos: ["QFAR1117"], creditos: 5 },
    { id: "QFAR1125", nombre: "Farmacoquímica I", requisitos: ["QFAR1119"], creditos: 5 },
    { id: "QFAR1126", nombre: "Inmunología", requisitos: ["QFAR1113", "QFAR1119"], creditos: 4 },
    { id: "QFAR1127", nombre: "Bioestadística", requisitos: ["QFAR1106"], creditos: 3 },
    { id: "QFAR1131", nombre: "Administración y Gestión Farmacéutica", requisitos: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"], creditos: 4 },
  ],
  // CUARTO AÑO - Semestre VII
  [
    { id: "QFAR1128", nombre: "Farmacología de Sistemas II", requisitos: ["QFAR1123"], creditos: 5 },
    { id: "QFAR1129", nombre: "Tecnología Farmacéutica I", requisitos: ["QFAR1116"], creditos: 5 },
    { id: "QFAR1130", nombre: "Farmacoquímica II", requisitos: ["QFAR1125"], creditos: 5 },
    { id: "QFAR1145", nombre: "Electivo de Especialidad I", requisitos: ["QFAR1131", "QFAR1125"], creditos: 3 },
    { id: "QFAR1132", nombre: "Práctica Preliminar", requisitos: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"], creditos: 5 },
    { id: "ELTE", nombre: "Electivo Teológico", requisitos: [], creditos: 3 },
  ],
  // CUARTO AÑO - Semestre VIII
  [
    { id: "QFAR1133", nombre: "Toxicología", requisitos: ["QFAR1128", "QFAR1121"], creditos: 4 },
    { id: "QFAR1134", nombre: "Tecnología Farmacéutica II", requisitos: ["QFAR1129"], creditos: 5 },
    { id: "QFAR1135", nombre: "Atención Farmacéutica", requisitos: ["QFAR1124", "QFAR1128"], creditos: 5 },
    { id: "QFAR1140", nombre: "Cosmética Farmacéutica", requisitos: ["QFAR1134"], creditos: 3 },
    { id: "QFAR1136", nombre: "Farmacia Comunitaria y Asistencial", requisitos: ["QFAR1128", "QFAR1129"], creditos: 5 },
    { id: "QFAR1137", nombre: "Seminarios de Investigación", requisitos: ["QFAR1132"], creditos: 3 },
    { id: "QFAR1138", nombre: "Legislación Farmacéutica", requisitos: ["QFAR1132", "QFAR1128", "QFAR1129"], creditos: 3 },
  ],
  // QUINTO AÑO - Semestre IX
  [
    { id: "QFAR1146", nombre: "Electivo Interprofesional", requisitos: ["QFAR1136"], creditos: 3 },
    { id: "QFAR1139", nombre: "Biofarmacia", requisitos: ["QFAR1134"], creditos: 4 },
    { id: "QFAR1141", nombre: "Farmacia Clínica", requisitos: ["QFAR1130", "QFAR1135"], creditos: 5 },
    { id: "IET1433", nombre: "Ética Profesional", requisitos: [], creditos: 3 },
    { id: "EL3", nombre: "Electivo Diversidad III", requisitos: [], creditos: 3 },
  ],
  // QUINTO AÑO - Semestre X
  [
    { id: "QFAR1142", nombre: "Práctica Profesional", requisitos: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"], creditos: 10 },
    { id: "QFAR1143", nombre: "Actividad de Titulación", requisitos: ["QFAR1137"], creditos: 5 },
    { id: "QFAR1144", nombre: "Electivo de Especialidad II", requisitos: ["QFAR1145"], creditos: 3 },
  ],
];

export default function App() {
  const [approved, setApproved] = useState<string[]>([]);
  const [showCredits, setShowCredits] = useState(false);

  const toggleCourse = (code: string) => {
    setApproved((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const isAvailable = (curso: Curso) => {
    return curso.requisitos.every((req) => approved.includes(req));
  };

  const totalApprovedCredits = coursesBySemester
    .flat()
    .filter(course => approved.includes(course.id))
    .reduce((sum, course) => sum + (course.creditos || 0), 0);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-800">Malla Curricular de Química y Farmacia</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">
            Créditos aprobados: <span className="text-green-600">{totalApprovedCredits}</span>
          </div>
          <button
            onClick={() => setShowCredits(!showCredits)}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
          >
            {showCredits ? "Ocultar créditos" : "Mostrar créditos"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursesBySemester.map((semester, semesterIndex) => (
            <div key={semesterIndex} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-center border-b pb-2 text-blue-700">
                Semestre {semesterIndex + 1}
              </h2>
              
              <div className="grid grid-cols-1 gap-3">
                {semester.map((course) => (
                  <RamoCard
                    key={course.id}
                    curso={course}
                    completado={approved.includes(course.id)}
                    desbloqueado={isAvailable(course)}
                    onToggle={() => toggleCourse(course.id)}
                    showCredits={showCredits}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
