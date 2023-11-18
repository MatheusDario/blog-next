export function formatDate(date: string): string {
  const dateObjt = new Date(date);
  return dateObjt.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
}
