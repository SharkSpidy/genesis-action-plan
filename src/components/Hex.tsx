/** Small hexagon marker used throughout the deck as a bullet / accent. */
export default function Hex({ size = 9 }: { size?: number }) {
  return (
    <span
      className="hex"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  )
}
