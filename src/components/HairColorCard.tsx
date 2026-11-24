import type { HairColor } from "../types";

export default function HairColorCard({ color }: { color: HairColor }) {
  const hex = "#" + (color.hex ?? "CCCCCC").replace("#", "");
  return (
    <div className="card">
      <div className="swatch" style={{ background: hex }} />
      <h3>{color.name}</h3>
      <p>{color.desc}</p>
    </div>
  );
}