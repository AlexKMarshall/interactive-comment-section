type Props = {
  value: number
}
export function VoteCounter({ value = 0 }: Props): JSX.Element {
  return (
    <>
      <button aria-label="vote up">+</button>
      <span>{value}</span>
      <button aria-label="vote down">-</button>
    </>
  )
}
