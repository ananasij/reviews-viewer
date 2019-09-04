import { Context } from 'koa';

export const ratignsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = getRatings();
};

export function getRatings(): any {
  return {
    data: {
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
      },
      traveledWith: {
        family: 6,
        friends: 8,
        other: 10,
        couple: 10,
        single: 9
      }
    }
  };
}
