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
          date
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
export const agentByTotalPointsCustom = /* GraphQL */ `
  query AgentByTotalPoints(
    $category: String
    $totalPoints: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentByTotalPoints(
      category: $category
      totalPoints: $totalPoints
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        campaigns {
          items {
            id
            name
          }
          nextToken
        }
        totalPoints
      }
      nextToken
    }
    # monthlyPoints
    # yearPoints {
    #   nextToken
    # }
  }
`;
