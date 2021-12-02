export const getDailyReports = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      dailyReports {
        items {
          id
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
          kpis {
            items {
              id
              name
              result
              target
              nextWeekTarget
              coeff
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
