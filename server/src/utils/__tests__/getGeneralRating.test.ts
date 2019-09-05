import { getGeneralRating } from '../getGeneralRating';
import { IReview, Locales, TraveledWith } from '../../models/review.model';

describe('getGeneralRating', () => {
  const reviewStubFields = {
    "parents": [
      {
        "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
      }
    ],
    "id": "c9fa6d7b-a773-402e-b9cc-a800634484cf",
    "traveledWith": TraveledWith.FAMILY,
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

  it('should calculate average rating and round it', () => {
    const reviews: IReview[] = [
      {
        "ratings": {
          "general": {
            "general": 8
          },
          "aspects": {}
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {
            "general": 8
          },
          "aspects": {}
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {
            "general": 7
          },
          "aspects": {}
        },
        ...reviewStubFields,
      },
    ];

    expect(getGeneralRating(reviews)).toBe(8);
  });

  // TODO check
  it('should return NaN for empty array', () => {
    const reviews: IReview[] = [];

    expect(getGeneralRating(reviews)).toBe(NaN);
  });
});
