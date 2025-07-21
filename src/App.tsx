import React, { useState, useEffect } from 'react';
import { cursos as todosLosCursos, Curso } from './data/cursos';

const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

const App = () => {
  const [cursosAprobados, setCursosAprobados] = useState<string[]>(() => {
    const guardado = localStorage.getItem("cursosAprobados");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
  }, [cursosAprobados]);

  const estaDesbloqueado = (curso: Curso): boolean =>
    curso.requisitos.every(req => cursosAprobados.includes(req));

  const toggleCurso = (id: string) => {
    setCursosAprobados(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const cursosPorSemestre: { [sem: number]: Curso[] } = {};
  for (const curso of todosLosCursos) {
    if (!cursosPorSemestre[curso.semestre]) {
      cursosPorSemestre[curso.semestre] = [];
    }
    cursosPorSemestre[curso.semestre].push(curso);
  }

  const porcentaje = (cursosAprobados.length / todosLosCursos.length) * 100;
  const creditosTotales = cursosAprobados
  .map(id => todosLosCursos.find(c => c.id === id)?.creditos || 0)
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

        <button
            onClick={() => setModoOscuro(!modoOscuro)}
            className={`absolute top-4 right-6 text-sm px-3 py-1 rounded transition ${
              modoOscuro
                ? "bg-purple-600 text-white hover:bg-purple-500"
                : "bg-pink-200 text-pink-800 hover:bg-pink-300"
            }`}
          >
            {modoOscuro ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
          </button>


          <h1 className={`text-2xl font-bold text-center mb-4 ${modoOscuro ? "text-[#4b3a60]" : "text-pink-800"}`}>

        Malla Interactiva – Química y Farmacia V5 – U. de Chile  </h1>

      {/* Progreso total */}
      <div className="text-center mb-5">
      <div className="flex justify-center items-center gap-6 text-pink-700 font-semibold mb-2">
        <p className="text-lg">Avance total: {porcentaje.toFixed(1)}%</p>
        <p className="text-ms">Créditos acumulados: <span className="font-bold">{creditosTotales}</span></p>
      </div>


      <div className={`w-full max-w-md mx-auto rounded-full h-4 mt-2 shadow-inner ${modoOscuro ? "bg-[#e8d3f8]" : "bg-pink-100"}`}>
          <div
      className={`${modoOscuro ? "bg-[#be9fe1]" : "bg-pink-400"} h-4 rounded-full transition-all duration-500`}
      style={{ width: `${porcentaje}%` }}
            ></div>

        </div>

        <button
            onClick={() => setCursosAprobados([])}
            className={`mt-4 font-semibold px-4 py-2 rounded shadow transition-colors duration-300 ${
              modoOscuro
                ? "bg-[#d5b8ff] hover:bg-[#c7a7fa] text-[#4b3a60]"
                : "bg-pink-200 hover:bg-pink-300 text-pink-800"
            }`}
          >
            Reiniciar malla
          </button>

      </div>

      <div className="flex justify-center">

        <div className="grid grid-rows-[auto_auto_1fr] gap-2">
          {/* Fila de Años */}
          <div className="grid grid-cols-11 gap-1 mb-0.5">
            {[
              { año: "Año 1", span: 2 },
              { año: "Año 2", span: 2 },
              { año: "Año 3", span: 2 },
              { año: "Año 4", span: 2 },
              { año: "Año 5", span: 2 },
              { año: "Año 5 1/2", span: 1 }
            ].map(({ año, span }, index) => (
              <div
                key={index}
                style={{ gridColumn: `span ${span} / span ${span}` }}
                className={`text-center font-bold py-2 rounded-md text-sm ${
                  modoOscuro ? "bg-purple-700 text-white" : "bg-pink-300 text-white"
                }`}
              >
                {año}
              </div>
            ))}
          </div>



          {/* Fila de Semestres */}
          <div className="grid grid-cols-11 gap-2 mb-0.5">
            {romanos.map((r, i) => (
              <div
                key={i}
                className={`text-center font-bold py-1 rounded-md shadow text-sm ${
                  modoOscuro ? "bg-purple-600 text-white" : "bg-pink-200"
                }`}
              >
                {r}
              </div>
            ))}
          </div>


          {/* Cursos */}
          <div className="grid grid-cols-11 gap-4">
            {Array.from({ length: 11 }).map((_, semestreIndex) => {
              const semestre = semestreIndex + 1;
              const cursos = cursosPorSemestre[semestre] || [];
              return (
                <div key={semestre} className="flex flex-col gap-4 items-center">
                  {cursos.map(curso => {
                    const desbloqueado = estaDesbloqueado(curso);
                    const aprobado = cursosAprobados.includes(curso.id);
                    return (
                      <div key={curso.id} className="relative group w-fit">
                      <button
                          className={`w-[8rem] h-[5.5rem] flex flex-col justify-center items-center rounded-md shadow text-center text-[10px] font-medium
                          transition-all duration-300 ease-in-out transform
                            ${aprobado
                              ? modoOscuro
                                ? 'bg-[#b38ce7] text-white scale-105'  // pastel lavanda
                                : 'bg-pink-300 text-white scale-105'
                              : desbloqueado
                              ? modoOscuro
                                ? 'bg-[#e6ccf2] text-[#3c2a52] hover:bg-[#d7b8ec] hover:scale-105'
                                : 'bg-pink-100 text-pink-800 hover:bg-pink-200 hover:scale-105'
                              : modoOscuro
                                ? 'bg-[#f3e8fb] text-[#a58cb0] cursor-not-allowed'
                                : 'bg-pink-50 text-pink-300 cursor-not-allowed'}      
                            
                          `}
                          disabled={!desbloqueado && !aprobado}
                          onClick={() => toggleCurso(curso.id)}
                        >
                          {/* Nombre del curso */}
                          <div className="absolute top-1 left-2 text-[10px] text-pink-500 font-bold opacity-80">
                            {curso.id}
                          </div>
                          <div className="font-semibold text-[13px] leading-snug text-center">
                            {curso.nombre}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            Créditos: {curso.creditos}
                          </div>

                          {/* Emoji al aprobar */}
                          
                            {aprobado && (
                              <span className="absolute top-1 right-1 text-white text-lg animate-fadeIn">✨</span>
                            )}
                            
                      </button>
                      {/* Tooltip visual bonito */}
                      {!desbloqueado && !aprobado && curso.requisitos.length > 0 && (
                        <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-64 rounded-md shadow-lg px-3 py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                          modoOscuro
                            ? "bg-[#f5e8ff] border border-[#e0cfff] text-[#4b3a60]"
                            : "bg-white border border-pink-300 text-pink-800"
                        }`}>
                        
                          Debes aprobar:
                          <ul className="list-disc list-inside mt-1">
                            {curso.requisitos.map(reqId => {
                              const reqCurso = todosLosCursos.find(c => c.id === reqId);
                              return <li key={reqId}>{reqCurso?.nombre || reqId}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

