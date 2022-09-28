export function getRandomAvatar() {
  const index = Math.random() * (5 - 1) + 1;
  return `/expression_${index.toFixed()}.png`;
}
