interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  requisitos: string[];
}

type EstadoRamo = 'aprobado' | 'disponible' | 'bloqueado';

interface Props {
  curso: Curso;
  estado: EstadoRamo;
  onToggle: () => void;
}

export function RamoCard({ curso, estado, onToggle }: Props) {
  // Estilos con tu paleta de colores (rosa/morado)
  const estilos = {
    aprobado: 'bg-[#b38ce7] border-[#9a6fd1] text-white',
    disponible: 'bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200 cursor-pointer',
    bloqueado: 'bg-gray-100 border-gray-300 text-gray-400'
  };

  // Iconos para cada estado
  const iconos = {
    aprobado: '✓',
    disponible: '→',
    bloqueado: '🔒'
  };

  return (
    <div
      className={`relative p-3 mb-2 rounded-lg border transition-all duration-200 ${estilos[estado]} group`}
      onClick={estado === 'disponible' ? onToggle : undefined}
    >
      {/* Indicador de estado */}
      <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs 
        ${estado === 'aprobado' ? 'bg-purple-600' : estado === 'disponible' ? 'bg-pink-400' : 'bg-gray-400'} text-white`}>
        {iconos[estado]}
      </div>

      {/* Nombre del ramo */}
      <div className="font-medium text-sm">{curso.nombre}</div>
      
      {/* Código del curso */}
      <div className="mt-1 text-xs font-mono opacity-80">{curso.id}</div>

      {/* Tooltip de requisitos (solo visible si hay requisitos) */}
      {curso.requisitos.length > 0 && (
        <div className="absolute z-10 invisible group-hover:visible bg-white text-gray-800 p-2 rounded shadow-lg 
                       border border-pink-200 text-xs mt-1 w-48">
          <p className="font-semibold text-pink-600">Requisitos:</p>
          <ul className="list-disc pl-5">
            {curso.requisitos.map(req => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
