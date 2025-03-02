export interface Person {
   id: number;
   fullname: string;
   description: string;
   birth_date?: Date;
   phone: string;
   telegram: string;
   socials: {
      vk: string;
      ok: string;
      telegram: string;
      phone: string;
   };
}
