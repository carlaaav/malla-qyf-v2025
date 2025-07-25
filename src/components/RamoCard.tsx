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
  // Estilos con mejor accesibilidad
  const estilos = {
    aprobado: 'bg-purple-600 border-purple-700 text-white',
    disponible: 'bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200 cursor-pointer transition-colors',
    bloqueado: 'bg-gray-100 border-gray-300 text-gray-500'
  };

  // Iconos accesibles con labels ARIA
  const iconos = {
    aprobado: { symbol: '✓', label: 'Aprobado' },
    disponible: { symbol: '→', label: 'Disponible' },
    bloqueado: { symbol: '🔒', label: 'Bloqueado' }
  };

  const handleClick = () => {
    if (estado === 'disponible') {
      onToggle();
    }
  };

  return (
    <div
      className={`relative p-3 mb-2 rounded-lg border ${estilos[estado]} group`}
      onClick={handleClick}
      role="button"
      aria-label={`${curso.nombre} - ${iconos[estado].label}`}
      aria-disabled={estado !== 'disponible'}
      tabIndex={estado === 'disponible' ? 0 : -1}
    >
      {/* Indicador de estado con mejor accesibilidad */}
      <div 
        className={`absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
          estado === 'aprobado' ? 'bg-purple-800' : 
          estado === 'disponible' ? 'bg-pink-500' : 'bg-gray-500'
        } text-white`}
        aria-hidden="true"
      >
        {iconos[estado].symbol}
      </div>

      {/* Contenido principal */}
      <div className="pr-4"> {/* Espacio para el icono */}
        <h3 className="font-medium text-sm mb-1">{curso.nombre}</h3>
        <div className="text-xs font-mono opacity-80">{curso.id}</div>
      </div>

      {/* Tooltip de requisitos mejorado */}
      {curso.requisitos.length > 0 && (
        <div 
          className="absolute z-10 invisible group-hover:visible bg-white text-gray-800 p-2 rounded-lg shadow-md 
                     border border-pink-200 text-xs mt-1 w-48 transition-opacity duration-200"
          role="tooltip"
        >
          <p className="font-semibold text-pink-600 mb-1">Requisitos:</p>
          <ul className="list-disc pl-4 space-y-1">
            {curso.requisitos.map(req => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
