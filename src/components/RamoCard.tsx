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
      ? "bg-green-300"
      : estado === "desbloqueado"
      ? "bg-white hover:border-blue-400"
      : "bg-gray-200 opacity-40";

  return (
    <div
      className={`p-1 border rounded-md shadow-xs text-sm transition-all cursor-pointer select-none ${bgColor}`}
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
