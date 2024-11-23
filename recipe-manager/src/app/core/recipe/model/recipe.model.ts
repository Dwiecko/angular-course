export interface RecipeModel {
       id: number;                              // Unikalny identyfikator przepisu   
       title: string;                           // Tytuł przepisu   
       description: string;                     // Krótki opis przepisu   
       ingredients: string[];                   // Tablica składników   
       preparationTime: number;                 // Czas przygotowania w minutach   
       difficulty: 'easy' | 'medium' | 'hard';  // Poziom trudności 
}
