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

  const creditosAprobados = cursos
    .filter(c => aprobados.includes(c.id))
    .reduce((sum, c) => sum + c.creditos, 0);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Malla Curricular de Química y Farmacia
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center">
          <span className="font-medium">
            Ramos aprobados: <span className="text-green-600">{aprobados.length}</span>/{cursos.length}
          </span>
          <span className="font-bold">Créditos: {creditosAprobados}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(semestre => (
          <div key={semestre} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3 border-b pb-2">Semestre {semestre}</h2>
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
        ))}
      </div>
    </div>
  );
}
