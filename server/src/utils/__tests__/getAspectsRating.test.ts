import { getAspectsRating } from '../getAspectsRating';
import { IReview, Locales, TraveledWith } from '../../models/review.model';

describe('getAspectsRating', () => {
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

  it('should calculate average for every rating and round it', () => {
    const reviews: IReview[] = [
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 9,
            "service": 8,
            "priceQuality": 9,
          }
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 5,
            "service": 7,
            "priceQuality": 7,
          }
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 10,
            "service": 10,
            "priceQuality": 8,
          }
        },
        ...reviewStubFields,
      },
    ];

    expect(getAspectsRating(reviews)).toEqual({
      "location": 8,
      "service": 8,
      "priceQuality": 8,
    });
  });

  it('should ignore 0 values in calculation', () => {
    const reviews: IReview[] = [
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 9,
            "service": 0,
          }
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 5,
            "service": 7,
          }
        },
        ...reviewStubFields,
      },
    ];

    expect(getAspectsRating(reviews)).toEqual({
      "location": 7,
      "service": 7,
    });
  });

  it('should omit aspect if there are only 0 values', () => {
    const reviews: IReview[] = [
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 9,
            "service": 0,
          }
        },
        ...reviewStubFields,
      },
      {
        "ratings": {
          "general": {},
          "aspects": {
            "location": 5,
            "service": 0,
          }
        },
        ...reviewStubFields,
      },
    ];

    expect(getAspectsRating(reviews)).toEqual({
      "location": 7,
    });
  });
});
