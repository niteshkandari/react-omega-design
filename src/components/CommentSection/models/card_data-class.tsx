export class CardData {
  constructor(
    public no_of_stars: number = 1,
    public text: string = "",
    public author: string = ""
  ) {}
}

export const card_data = [
  new CardData(
    5,
    "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!",
    "Jonathan Taylor"
  ),
  new CardData(
    5,
    "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    "Lizzie Rodgers"
  ),
];
