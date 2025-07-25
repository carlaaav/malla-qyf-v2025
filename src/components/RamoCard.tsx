interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
}

type EstadoRamo = 'aprobado' | 'disponible' | 'bloqueado';

interface Props {
  curso: Curso;
  estado: EstadoRamo;
  onToggle: () => void;
}

export function RamoCard({ curso, estado, onToggle }: Props) {
  const estilos = {
    aprobado: 'bg-green-100 border-green-400 text-green-800 shadow-sm',
    disponible: 'bg-white border-blue-300 text-gray-800 hover:bg-blue-50 cursor-pointer shadow-sm hover:shadow-md',
    bloqueado: 'bg-gray-50 border-gray-200 text-gray-500 opacity-80'
  };

  return (
    <div
      className={`p-3 mb-3 rounded-lg border transition-all ${estilos[estado]}`}
      onClick={estado === 'disponible' ? onToggle : undefined}
      title={
        curso.requisitos.length > 0 
          ? `Requisitos: ${curso.requisitos.join(', ')}`
          : 'Sin requisitos'
      }
    >
      <div className="font-medium">{curso.nombre}</div>
      <div className="flex justify-between mt-1 text-sm">
        <span className="font-mono text-gray-600">{curso.id}</span>
        <span className="font-bold">{curso.creditos} cr.</span>
      </div>
    </div>
  );
}
