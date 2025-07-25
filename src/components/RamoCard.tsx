import { Curso } from "../types";

type Props = {
  curso: Curso;
  completado: boolean;
  desbloqueado: boolean;
  onToggle: () => void;
  showCredits?: boolean;
};

export function RamoCard({ curso, completado, desbloqueado, onToggle, showCredits = false }: Props) {
  const estado = completado ? "completado" : desbloqueado ? "desbloqueado" : "bloqueado";

  const bgColor = completado 
    ? "bg-green-100 border-green-400" 
    : desbloqueado 
      ? "bg-white hover:bg-blue-50 border-blue-300" 
      : "bg-gray-100 opacity-75 border-gray-300";

  const textColor = completado 
    ? "text-green-800" 
    : desbloqueado 
      ? "text-gray-800" 
      : "text-gray-500";

  return (
    <div
      className={`p-3 border rounded-lg shadow-sm transition-all cursor-pointer select-none ${bgColor}`}
      onClick={desbloqueado ? onToggle : undefined}
      title={
        curso.requisitos.length
          ? `Requisitos: ${curso.requisitos.join(", ")}`
          : "Sin requisitos"
      }
    >
      <div className={`font-medium text-center ${textColor}`}>
        {curso.nombre}
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-xs font-mono font-semibold text-gray-500">
          {curso.id}
        </span>
        {showCredits && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {curso.creditos} cr.
          </span>
        )}
      </div>
    </div>
  );
}
