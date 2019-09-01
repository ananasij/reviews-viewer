import { IReview, Locales, TraveledWith } from '../../models/review.model';

export const actionTypes = {
  GET_REVIEWS: 'GET_REVIEWS',
  GET_REVIEWS_SUCCESS: 'GET_REVIEWS_SUCCESS',
  GET_REVIEWS_ERROR: 'GET_REVIEWS_ERROR'
};

// export const getReviews = () => ({
//     type: actionTypes.GET_REVIEWS
// });

export const getReviews = () => getReviewsSuccess(dummyReviews);

export const getReviewsSuccess = (reviews: IReview[]) => ({
    type: actionTypes.GET_REVIEWS_SUCCESS,
    data: reviews
});

const dummyReviews: IReview[] = [
  {
    parents: [
      {
        id: '96e83a90-48da-4e81-9d06-7f1b76e5364e'
      }
    ],
    id: 'c9fa6d7b-a773-402e-b9cc-a800634484cf',
    traveledWith: TraveledWith['FAMILY'],
    entryDate: 1252359116000,
    travelDate: 1252359116000,
    ratings: {
      general: {
        general: 8
      },
      aspects: {
        location: 9,
        service: 0,
        priceQuality: 9,
        food: 0,
        room: 0,
        childFriendly: 9,
        interior: 0,
        size: 0,
        activities: 0,
        restaurants: 0,
        sanitaryState: 0,
        accessibility: 0,
        nightlife: 0,
        culture: 0,
        surrounding: 0,
        atmosphere: 0,
        noviceSkiArea: 0,
        advancedSkiArea: 0,
        apresSki: 0,
        beach: 0,
        entertainment: 0,
        environmental: 0,
        pool: 0,
        terrace: 0
      }
    },
    titles: {
      nl: 'perfecte vakantieplek'
    },
    texts: {
      nl:
        '14 dagen bungalowtent gehuurd, perfecte vakantie, weinig last van muggen, voor de kids (3,12,en 16) een paradijsje, nadeel bij de tenten van de touroperator is dat er geen luifel of partytent voorstaat, de plekken hebben weinig tot geen schaduw, dus zelf meenemen. Zeeeer schone toilet en doucheruimtes, zelfs voor de kleintjes een aparte ruimte.'
    },
    user: 'M van Dam',
    locale: Locales['nl']
  },
  {
    parents: [
      {
        id: '96e83a90-48da-4e81-9d06-7f1b76e5364e'
      }
    ],
    id: 'b73f3160-1fd2-410c-92b3-6c2df2f50bfc',
    traveledWith: TraveledWith['FAMILY'],
    entryDate: 1266252490713,
    travelDate: 1262304000000,
    ratings: {
      general: {
        general: 7
      },
      aspects: {
        location: 7,
        service: 0,
        priceQuality: 0,
        food: 0,
        room: 0,
        childFriendly: 0,
        interior: 0,
        size: 0,
        activities: 0,
        restaurants: 6,
        sanitaryState: 0,
        accessibility: 0,
        nightlife: 0,
        culture: 0,
        surrounding: 0,
        atmosphere: 0,
        noviceSkiArea: 0,
        advancedSkiArea: 0,
        apresSki: 0,
        beach: 0,
        entertainment: 0,
        environmental: 0,
        pool: 0,
        terrace: 0
      }
    },
    titles: {
      nl: 'Massale camping'
    },
    texts: {
      nl:
        "Hele grote camping, met grote zwembaden. Het eten was prima, niet echt super. Voor de jongeren is er 's avonds wel een disco, maar voor de wat ouderen is er niets te doen. Die zijn 's avonds verplicht om lek gestoken te worden door muggen. Muggen zijn echt een plaag daar, en dan wordt er af en toen gespoten en dan houd het weer even op. Een leuke plaats om te gaan winkelen en wat te drinken is Jesolo. En voor een dagje cultuur natuurlijk naar Venetie, zorg dat je niet op een té warme dag gaat!\nOnze bungalo was wel top met een boven en beneden verdieping en een ruim plaatsje. Eens in de zoveel tijd is er markt op de camping. Het strand is smal, en er lopen veel mensen die je wat willen verkopen of je willen masseren. Niet voor herhaling vatbaar, maar heb het wel naar me zin gehad."
    },
    user: 'shirleyvk',
    locale: Locales['nl']
  }
];
