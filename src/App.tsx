import { useState } from 'react';
import { cursos } from './data/cursos';
import { RamoCard } from './components/RamoCard';
import './index.css';

export default function App() {
  const [aprobados, setAprobados] = useState<string[]>([]);

  const toggleAprobado = (id: string) => {
    setAprobados(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const getEstadoRamo = (curso: typeof cursos[0]) => {
    if (aprobados.includes(curso.id)) return 'aprobado';
    return curso.requisitos.every(req => aprobados.includes(req)) 
      ? 'disponible' 
      : 'bloqueado';
  };

  // Función para calcular el progreso
  const calcularProgreso = () => {
    return (aprobados.length / cursos.length) * 100;
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">
        Malla Curricular de Química y Farmacia
      </h1>

      {/* Panel de progreso */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">
            Ramos aprobados: <span className="text-purple-600">{aprobados.length}</span>/{cursos.length}
          </span>
          <span className="text-sm font-semibold text-purple-700">
            Progreso: {calcularProgreso().toFixed(1)}%
          </span>
        </div>
        
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${calcularProgreso()}%` }}
          ></div>
        </div>
      </div>

      {/* Botón de reinicio */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setAprobados([])}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          Reiniciar progreso
        </button>
      </div>

      {/* Malla por semestres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(semestre => (
          <div key={semestre} className="bg-white p-4 rounded-lg shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-purple-200 pb-2 text-purple-700">
              Semestre {semestre}
            </h2>
            <div className="space-y-2">
              {cursos
                .filter(c => c.semestre === semestre)
                .map(curso => (
                  <RamoCard
                    key={curso.id}
                    curso={curso}
                    estado={getEstadoRamo(curso)}
                    onToggle={() => toggleAprobado(curso.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
