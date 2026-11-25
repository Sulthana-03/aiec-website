/** Renders an icon from the SVG sprite (see IconSprite). */
export default function Icon({ id }: { id: string }) {
  return (
    <svg className="icon">
      <use href={`#${id}`} />
    </svg>
  );
}
