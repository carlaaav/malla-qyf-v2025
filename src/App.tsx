import { useState } from 'react';
import { cursos } from './data/cursos';
import './index.css';

export default function App() {
  const [aprobados, setAprobados] = useState<string[]>([]);

  const toggleAprobado = (id: string) => {
    setAprobados(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  // Agrupar por año (cada 2 semestres)
  const años = Array.from({ length: 5 }, (_, i) => ({
    año: i + 1,
    semestres: [
      cursos.filter(c => c.semestre === i*2 + 1),
      cursos.filter(c => c.semestre === i*2 + 2)
    ]
  }));

  return (
    <div className="min-h-screen bg-rose-50 p-6 font-nunito">
      {/* Encabezado */}
      <header className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-rose-200">
        <h1 className="text-3xl font-comfortaa font-bold text-rose-600 mb-2">
          Malla Curricular - Química y Farmacia
        </h1>
        <div className="flex gap-8 text-lg text-rose-800">
          <span><strong>Ramos aprobados:</strong> {aprobados.length}/{cursos.length}</span>
          <span><strong>Progreso:</strong> {Math.round((aprobados.length / cursos.length) * 100)}%</span>
        </div>
      </header>

      {/* Tabla de 10 columnas (2 semestres x 5 años) */}
      <div className="overflow-x-auto pb-6">
        <div className="inline-block min-w-full">
          <div className="grid grid-cols-10 gap-4">
            {años.flatMap(({ año, semestres }) => (
              <>
                {semestres.map((ramos, semIdx) => (
                  <div key={`${año}-${semIdx}`} className="bg-white p-4 rounded-xl shadow-sm border border-rose-200">
                    <h2 className="text-lg font-comfortaa font-bold text-rose-700 mb-3">
                      A{año} S{semIdx + 1}
                    </h2>
                    <div className="space-y-2">
                      {ramos.map(curso => {
                        const estaAprobado = aprobados.includes(curso.id);
                        const disponible = curso.requisitos.every(r => aprobados.includes(r));
                        
                        return (
                          <div
                            key={curso.id}
                            onClick={() => disponible && toggleAprobado(curso.id)}
                            className={`
                              p-2 rounded-lg cursor-pointer transition-all
                              ${estaAprobado
                                ? 'bg-green-100 border border-green-300 text-green-800'
                                : disponible
                                  ? 'bg-white border border-rose-200 hover:bg-rose-50'
                                  : 'bg-gray-100 border border-gray-200 text-gray-500 opacity-75'
                              }
                            `}
                          >
                            <div className="font-medium text-sm">{curso.nombre}</div>
                            <div className="text-xs font-mono text-rose-600">{curso.id}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
