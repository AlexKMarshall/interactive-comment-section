type Props = { username: string };
export function Avatar({ username }: Props): JSX.Element {
  const initial = username.charAt(0).toUpperCase();
  return <span>{initial}</span>;
}
