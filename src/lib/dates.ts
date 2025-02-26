export function calculateDuration(start: string, end: string) {
   const startDate = new Date(start);
   const endDate = new Date(end);

   const diff = endDate.getTime() - startDate.getTime();

   const hours = Math.floor(diff / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

   const parts = [];
   if (hours > 0) parts.push(`${hours} ч`);
   if (minutes > 0) parts.push(`${minutes} мин`);

   return parts.join(" ") || "0 мин";
}
