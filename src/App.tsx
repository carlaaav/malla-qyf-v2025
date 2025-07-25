import { useState, useEffect } from 'react';
import { cursos } from './data/cursos';
import './index.css';

export default function App() {
  const [aprobados, setAprobados] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleAprobado = (id: string) => {
    setAprobados(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  // Agrupar por año (2 semestres = 1 año)
  const años = Array.from({ length: 5 }, (_, i) => {
    const semestres = [i*2 + 1, i*2 + 2];
    return {
      año: i + 1,
      semestres: semestres.map(sem => cursos.filter(c => c.semestre === sem))
    };
  });

  return (
    <div className={`min-h-screen bg-gray-50 p-6 ${loaded ? 'animate-fade-in' : ''}`}>
      {/* Cabecera con nueva tipografía */}
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-display text-blue-800 mb-2">
          Malla Curricular <span className="text-blue-600">Química y Farmacia</span>
        </h1>
        <div className="flex gap-4 text-lg">
          <span><i className="fas fa-check-circle text-green-500 mr-1"></i> {aprobados.length}/{cursos.length}</span>
          <span><i className="fas fa-chart-line text-blue-500 mr-1"></i> {Math.round((aprobados.length / cursos.length) * 100)}%</span>
        </div>
      </header>

      {/* Malla con tipografía mejorada */}
      <div className="space-y-8">
        {años.map(({ año, semestres }) => (
          <section key={año} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display text-blue-700 mb-4 flex items-center">
              <i className="fas fa-calendar-alt mr-2 text-blue-400"></i>
              Año {año}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {semestres.map((ramos, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-display text-lg text-blue-600 mb-3">
                    Semestre {(año-1)*2 + idx + 1}
                  </h3>
                  <div className="space-y-2">
                    {ramos.map(curso => {
                      const estaAprobado = aprobados.includes(curso.id);
                      const disponible = curso.requisitos.every(r => aprobados.includes(r));
                      
                      return (
                        <button
                          key={curso.id}
                          onClick={() => disponible && toggleAprobado(curso.id)}
                          className={`
                            ramo-card w-full p-3 text-left rounded-lg border
                            ${estaAprobado
                              ? 'bg-green-50 border-green-300 text-green-800'
                              : disponible
                                ? 'bg-white border-gray-200 hover:border-blue-300'
                                : 'bg-gray-50 border-gray-200 text-gray-500'
                            }
                          `}
                          disabled={!disponible}
                        >
                          <div className="font-medium flex justify-between items-start">
                            <span>{curso.nombre}</span>
                            {estaAprobado && (
                              <i className="fas fa-check-circle text-green-500 ml-2"></i>
                            )}
                          </div>
                          <div className="text-xs font-mono mt-1 text-gray-500">{curso.id}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
