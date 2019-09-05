import { getTraveledWithRatings } from '../getTraveledWithRatings';
import { IReview, Locales, TraveledWith } from '../../models/review.model';

describe('getTraveledWithRatings', () => {
  const reviewStubFields = {
    "parents": [
      {
        "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
      }
    ],
    "id": "c9fa6d7b-a773-402e-b9cc-a800634484cf",
    "entryDate": 1252359116000,
    "travelDate": 1252359116000,
    "titles": {
      "nl": "Review title"
    },
    "texts": {
      "nl": "Review test"
    },
    "user": "M van Dam",
    "locale": Locales.nl
  };

  it('should calculate average ratings for every traveledWith and round them', () => {
    const reviews: IReview[] = [
      {
        "ratings": {
          "general": { "general": 8 },
          "aspects": {}
        },
        "traveledWith": TraveledWith.FAMILY,
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": { "general": 6 },
          "aspects": {}
        },
        "traveledWith": TraveledWith.FAMILY,
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": { "general": 9 },
          "aspects": {}
        },
        "traveledWith": TraveledWith.COUPLE,
        ...reviewStubFields,
      },
    ];

    expect(getTraveledWithRatings(reviews)).toEqual({
      [TraveledWith.COUPLE]: 9,
      [TraveledWith.FAMILY]: 7,
    });
  });
});
