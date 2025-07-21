export interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
}
  
  export const cursos = [

  // --- Semestre 1
  { id: "1", nombre: "Química General I", semestre: 1, creditos: 8, requisitos: [] },
  { id: "2", nombre: "Téc. Lab. Químico", semestre: 1, creditos: 4, requisitos: [] },
  { id: "3", nombre: "Intro. Álgebra y Cálculo", semestre: 1, creditos: 8, requisitos: [] },
  { id: "4", nombre: "Orientación Farmacéutica", semestre: 1, creditos: 3, requisitos: [] },
  { id: "5", nombre: "Curso Formación General", semestre: 1, creditos: 4, requisitos: [] },
  { id: "6", nombre: "Inglés I", semestre: 1, creditos: 3, requisitos: [] },

  // --- Semestre 2
  { id: "7", nombre: "Química General II", semestre: 2, creditos: 5, requisitos: ["1"] },
  { id: "8", nombre: "Lab. Química General", semestre: 2, creditos: 3, requisitos: ["1", "2"] },
  { id: "9", nombre: "Física General", semestre: 2, creditos: 5, requisitos: ["3"] },
  { id: "10", nombre: "Cálculo Diferencial e Integral", semestre: 2, creditos: 6, requisitos: ["3"] },
  { id: "11", nombre: "Química Transformadora", semestre: 2, creditos: 3, requisitos: [] },
  { id: "12", nombre: "Biología Celular", semestre: 2, creditos: 5, requisitos: ["2"] },
  { id: "13", nombre: "Inglés II", semestre: 2, creditos: 3, requisitos: ["6"] },

  // --- Semestre 3
  { id: "14", nombre: "Química Orgánica I", semestre: 3, creditos: 5, requisitos: ["7"] },
  { id: "15", nombre: "Química Analítica I", semestre: 3, creditos: 5, requisitos: ["7", "8"] },
  { id: "16", nombre: "Lab. Química Orgánica I", semestre: 3, creditos: 4, requisitos: ["7", "8"] },
  { id: "17", nombre: "Estadística y Análisis de Datos", semestre: 3, creditos: 4, requisitos: ["10"] },
  { id: "18", nombre: "Fundamentos de Ciencias Farmacéuticas", semestre: 3, creditos: 2, requisitos: ["4", "11"] },
  { id: "19", nombre: "Fisiología Celular", semestre: 3, creditos: 5, requisitos: ["9", "12"] },
  { id: "20", nombre: "Curso Formación General", semestre: 3, creditos: 2, requisitos: [] },
  { id: "21", nombre: "Inglés III", semestre: 3, creditos: 3, requisitos: ["13"] },

  // --- Semestre 4
  { id: "22", nombre: "Química Orgánica II", semestre: 4, creditos: 5, requisitos: ["14"] },
  { id: "23", nombre: "Lab. de Análisis Químico", semestre: 4, creditos: 4, requisitos: ["8", "17", "15"] },
  { id: "24", nombre: "Química Analítica II", semestre: 4, creditos: 5, requisitos: ["15"] },
  { id: "25", nombre: "Fisicoquímica I", semestre: 4, creditos: 6, requisitos: ["9", "10", "14"] },
  { id: "26", nombre: "Fisiología de Sistemas", semestre: 4, creditos: 4, requisitos: ["19"] },
  { id: "27", nombre: "Práctica Intermedia", semestre: 4, creditos: 3, requisitos: ["18", "17"] },
  { id: "28", nombre: "Inglés IV", semestre: 4, creditos: 3, requisitos: ["21"] },


  // --- Semestre 5
  { id: "29", nombre: "Lab. de Análisis Instrumental", semestre: 5, creditos: 4, requisitos: ["23", "24"] },
  { id: "30", nombre: "Botánica y Farmacognosia", semestre: 5, creditos: 7, requisitos: ["22", "24"] },
  { id: "31", nombre: "Química de Heterocíclicos y Análisis Espectroscópico", semestre: 5, creditos: 5, requisitos: ["22"] },
  { id: "32", nombre: "Bioquímica", semestre: 5, creditos: 5, requisitos: ["22"] },
  { id: "33", nombre: "Farmacología General", semestre: 5, creditos: 6, requisitos: ["23", "26"] },
  { id: "34", nombre: "Gestión de Calidad", semestre: 5, creditos: 3, requisitos: ["18"] },



  // --- Semestre 6
  
  { id: "35", nombre: "Microbiología", semestre: 6, creditos: 5, requisitos: ["32"] },
  { id: "36", nombre: "Farmacoquímica I", semestre: 6, creditos: 5, requisitos: ["31","33"] },
  { id: "37", nombre: "Farmacología de Sistemas I", semestre: 6, creditos: 5, requisitos: ["33"] },
  { id: "38", nombre: "Fisiopatología Molecular", semestre: 6, creditos: 5, requisitos: ["26","32"] },
  { id: "39", nombre: "Legislación Farmacéutica", semestre: 6, creditos: 4, requisitos: ["27","34"] },
  { id: "40", nombre: "Fisicoquímica Farmacéutica", semestre: 6, creditos: 6, requisitos: ["25"] },



  // --- Semestre 7
  { id: "41", nombre: "Fisiopatología y Semiología", semestre: 7, creditos: 5, requisitos: ["38"] },
  { id: "42", nombre: "Farmacoquímica II", semestre: 7, creditos: 5, requisitos: ["36"] },
  { id: "43", nombre: "Farmacología de Sistema II", semestre: 7, creditos: 6, requisitos: ["35","37"] },
  { id: "44", nombre: "Salud Pública", semestre: 7, creditos: 3, requisitos: ["39"] },
  { id: "45", nombre: "Tecnología Farmacéutica I", semestre: 7, creditos: 6, requisitos: ["39","40"] },
  { id: "46", nombre: "Operaciones Unitarias", semestre: 7, creditos: 5, requisitos: ["40"] },


  
  // --- Semestre 8

  { id: "47", nombre: "Análisis de Medicamentos, Doping y Drogas", semestre: 8, creditos: 5, requisitos: ["29","42"] },
  { id: "48", nombre: "Nutrición Clínica", semestre: 8, creditos: 3, requisitos: ["41"] },
  { id: "49", nombre: "Bioquímica Clínica", semestre: 8, creditos: 4, requisitos: ["41"] },
  { id: "50", nombre: "Biofarmacia y Farmacocinética", semestre: 8, creditos: 6, requisitos: ["33", "45"] },
  { id: "51", nombre: "Tecnología Farmacéutica II", semestre: 8, creditos: 6, requisitos: ["45","46"] },
  { id: "52", nombre: "Administración y Gestión Farmacéutica", semestre: 8, creditos: 3, requisitos: ["45"] },
  { id: "53", nombre: "Estadística Farmacéutica", semestre: 8, creditos: 3, requisitos: ["44","17"] },



  // --- Semestre 9
  { id: "54", nombre: "Farmacología Clínica", semestre: 9, creditos: 6, requisitos: ["43", "49","50"] },
  { id: "55", nombre: "Bromatología", semestre: 9, creditos: 4, requisitos: ["29","48"] },
  { id: "56", nombre: "Toxicología", semestre: 9, creditos: 5, requisitos: ["43","49"] },
  { id: "57", nombre: "Farmacia Asistencial", semestre: 9, creditos: 4, requisitos: ["44","52"] },
  { id: "58", nombre: "Tecnología Cosmética", semestre: 9, creditos: 4, requisitos: ["51"] },
  { id: "59", nombre: "Electivo Especializado", semestre: 9, creditos: 7, requisitos: [] },



  // --- Semestre 10
  { id: "60", nombre: "Farmacia Clínica", semestre: 10, creditos: 5, requisitos: ["54"] },
  { id: "61", nombre: "Práctica Profesional en Farmacia", semestre: 10, creditos: 7, requisitos: ["52", "54", "56"] },
  { id: "62", nombre: "Biotecnolopia Farmacéutica", semestre: 10, creditos: 4, requisitos: ["38","51"] },
  { id: "63", nombre: "Economia y Marketing Farmacéutico", semestre: 9, creditos: 3, requisitos: ["44","52","54"] },
  { id: "64", nombre: "Innovación y Proyectos", semestre: 10, creditos: 3, requisitos: ["53"] },
  { id: "65", nombre: "Electivos Especializados", semestre: 10, creditos: 8, requisitos: [] },



  // --- Semestre 11
  { id: "65", nombre: "Actividad de Titulación", semestre: 11, creditos: 30, requisitos: Array.from({ length: 64 }, (_, i) => (i + 1).toString()) }

    ];
    