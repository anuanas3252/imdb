export class Movies {
    Id: string;
    Rank: string;
    Title: string;
    FullTitle: string;
    Year: string;
    Image: string;
    Crew: string;
    IMDbRating: string;
    IMDbRatingCount: string;

    constructor(Id: string, Rank: string, Title: string, FullTitle: string, Year: string, Image: string, Crew: string, IMDbRating: string, IMDbRatingCount: string) {
        this.Id = Id;
        this.Rank = Rank;
        this.Title = Title;
        this.FullTitle = FullTitle;
        this.Year = Year;
        this.Image = Image;
        this.Crew = Crew;
        this.IMDbRating = IMDbRating;
        this.IMDbRatingCount = IMDbRatingCount;

    }
}