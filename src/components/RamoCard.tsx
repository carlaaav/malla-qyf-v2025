import { Curso } from "../data/cursos";

type Props = {
  curso: Curso;
  completado: boolean;
  desbloqueado: boolean;
  onToggle: () => void;
};

export function RamoCard({ curso, completado, desbloqueado, onToggle }: Props) {
  const estado = completado ? "completado" : desbloqueado ? "desbloqueado" : "bloqueado";

  const bgColor =
    estado === "completado"
      ? "bg-green-200 border-green-400" // Aprobado: verde
      : estado === "desbloqueado"
      ? "bg-white hover:bg-blue-50 border-blue-300" // Disponible: blanco con hover azul
      : "bg-gray-100 opacity-60 border-gray-300"; // Bloqueado: gris

  return (
    <div
      className={`p-2 border rounded-md shadow-xs text-sm transition-all cursor-pointer select-none ${bgColor}`}
      onClick={desbloqueado ? onToggle : undefined}
      title={
        curso.requisitos.length
          ? `Requiere: ${curso.requisitos.map((r) => r.toUpperCase()).join(", ")}`
          : "Sin requisitos"
      }
    >
      <div className="font-semibold text-center">{curso.nombre}</div>
      <div className="text-xs text-center text-gray-500 mt-1">{curso.id.toUpperCase()}</div>
    </div>
  );
}
