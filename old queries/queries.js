/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      category
      firstName
      lastName
      email
      phone
      companyName
      website
      country
      campaigns {
        items {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        firstName
        lastName
        email
        phone
        companyName
        website
        country
        campaigns {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
      id
      category
      name
      email
      team {
        id
        name
        agents {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoint
        totalPoints
        createdAt
        updatedAt
      }
      campaigns {
        items {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        nextToken
      }
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
      dailyPoints
      weeklyPoints
      monthlyPoints
      yearPoints {
        items {
          id
          month
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      totalPoints
      createdAt
      updatedAt
    }
  }
`;
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getYearPoints = /* GraphQL */ `
  query GetYearPoints($id: ID!) {
    getYearPoints(id: $id) {
      id
      agent {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      month
      date
      createdAt
      updatedAt
    }
  }
`;
export const listYearPoints = /* GraphQL */ `
  query ListYearPoints(
    $filter: ModelYearPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYearPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        month
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      agents {
        items {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        nextToken
      }
      dailyPoints
      weeklyPoints
      monthlyPoint
      totalPoints
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        agents {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoint
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      category
      name
      type
      client {
        id
        category
        firstName
        lastName
        email
        phone
        companyName
        website
        country
        campaigns {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      agent {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      startDate
      endDate
      createdAt
      status
      length
      notes
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
      weeklyReports {
        items {
          id
          willBeActiveOn
          createdAt
          weeklyTarget
          weeklyPoints
          updatedAt
        }
        nextToken
      }
      monthlyReports {
        items {
          id
          createdAt
          monthlyTarget
          monthlyPoints
          updatedAt
        }
        nextToken
      }
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
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDailyReport = /* GraphQL */ `
  query GetDailyReport($id: ID!) {
    getDailyReport(id: $id) {
      id
      campaign {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
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
      createdAt
      dailyTarget
      weeklyReport {
        id
        willBeActiveOn
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        dailyReports {
          nextToken
        }
        createdAt
        weeklyTarget
        monthlyReport {
          id
          createdAt
          monthlyTarget
          monthlyPoints
          updatedAt
        }
        weeklyPoints
        updatedAt
      }
      dailyPoints
      weeklyTarget
      updatedAt
    }
  }
`;
export const listDailyReports = /* GraphQL */ `
  query ListDailyReports(
    $filter: ModelDailyReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        kpis {
          nextToken
        }
        createdAt
        dailyTarget
        weeklyReport {
          id
          willBeActiveOn
          createdAt
          weeklyTarget
          weeklyPoints
          updatedAt
        }
        dailyPoints
        weeklyTarget
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWeeklyReport = /* GraphQL */ `
  query GetWeeklyReport($id: ID!) {
    getWeeklyReport(id: $id) {
      id
      willBeActiveOn
      campaign {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      dailyReports {
        items {
          id
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
        }
        nextToken
      }
      createdAt
      weeklyTarget
      monthlyReport {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        createdAt
        monthlyTarget
        weeklyReports {
          nextToken
        }
        monthlyPoints
        updatedAt
      }
      weeklyPoints
      updatedAt
    }
  }
`;
export const listWeeklyReports = /* GraphQL */ `
  query ListWeeklyReports(
    $filter: ModelWeeklyReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeklyReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        willBeActiveOn
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        dailyReports {
          nextToken
        }
        createdAt
        weeklyTarget
        monthlyReport {
          id
          createdAt
          monthlyTarget
          monthlyPoints
          updatedAt
        }
        weeklyPoints
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMonthlyReport = /* GraphQL */ `
  query GetMonthlyReport($id: ID!) {
    getMonthlyReport(id: $id) {
      id
      campaign {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      createdAt
      monthlyTarget
      weeklyReports {
        items {
          id
          willBeActiveOn
          createdAt
          weeklyTarget
          weeklyPoints
          updatedAt
        }
        nextToken
      }
      monthlyPoints
      updatedAt
    }
  }
`;
export const listMonthlyReports = /* GraphQL */ `
  query ListMonthlyReports(
    $filter: ModelMonthlyReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMonthlyReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        createdAt
        monthlyTarget
        weeklyReports {
          nextToken
        }
        monthlyPoints
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKpi = /* GraphQL */ `
  query GetKpi($id: ID!) {
    getKpi(id: $id) {
      campaign {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      id
      name
      result
      target
      nextWeekTarget
      coeff
      dailyReport {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        kpis {
          nextToken
        }
        createdAt
        dailyTarget
        weeklyReport {
          id
          willBeActiveOn
          createdAt
          weeklyTarget
          weeklyPoints
          updatedAt
        }
        dailyPoints
        weeklyTarget
        updatedAt
      }
      agent {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listKpis = /* GraphQL */ `
  query ListKpis(
    $filter: ModelKpiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKpis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        id
        name
        result
        target
        nextWeekTarget
        coeff
        dailyReport {
          id
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clientByfirstName = /* GraphQL */ `
  query ClientByfirstName(
    $category: String
    $firstName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientByfirstName(
      category: $category
      firstName: $firstName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        firstName
        lastName
        email
        phone
        companyName
        website
        country
        campaigns {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clientBylastName = /* GraphQL */ `
  query ClientBylastName(
    $category: String
    $lastName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientBylastName(
      category: $category
      lastName: $lastName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        firstName
        lastName
        email
        phone
        companyName
        website
        country
        campaigns {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const agentByDailyPoints = /* GraphQL */ `
  query AgentByDailyPoints(
    $category: String
    $dailyPoints: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentByDailyPoints(
      category: $category
      dailyPoints: $dailyPoints
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const agentByWeeklyPoints = /* GraphQL */ `
  query AgentByWeeklyPoints(
    $category: String
    $weeklyPoints: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentByWeeklyPoints(
      category: $category
      weeklyPoints: $weeklyPoints
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const agentByMonthlyPoints = /* GraphQL */ `
  query AgentByMonthlyPoints(
    $category: String
    $monthlyPoints: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentByMonthlyPoints(
      category: $category
      monthlyPoints: $monthlyPoints
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const agentByTotalPoints = /* GraphQL */ `
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
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          items {
            id
            category
            name
            type
            startDate
            endDate
            createdAt
            status
            length
            notes
            updatedAt
          }
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const agentByName = /* GraphQL */ `
  query AgentByName(
    $category: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentByName(
      category: $category
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        email
        team {
          id
          name
          dailyPoints
          weeklyPoints
          monthlyPoint
          totalPoints
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        kpis {
          nextToken
        }
        dailyPoints
        weeklyPoints
        monthlyPoints
        yearPoints {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignById = /* GraphQL */ `
  query CampaignById(
    $category: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignById(
      category: $category
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignTypeByLength = /* GraphQL */ `
  query CampaignTypeByLength(
    $type: String
    $length: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignTypeByLength(
      type: $type
      length: $length
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignByCreatedAt = /* GraphQL */ `
  query CampaignByCreatedAt(
    $category: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignByCreatedAt(
      category: $category
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchClients = /* GraphQL */ `
  query SearchClients(
    $filter: SearchableClientFilterInput
    $sort: SearchableClientSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchClients(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        category
        firstName
        lastName
        email
        phone
        companyName
        website
        country
        campaigns {
          # items {
          #   id
          #   category
          #   name
          #   type
          #   startDate
          #   endDate
          #   createdAt
          #   status
          #   length
          #   notes
          #   updatedAt
          # }
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchCampaigns = /* GraphQL */ `
  query SearchCampaigns(
    $filter: SearchableCampaignFilterInput
    $sort: SearchableCampaignSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchCampaigns(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        category
        name
        type
        client {
          id
          category
          firstName
          lastName
          email
          phone
          companyName
          website
          country
          notes
          createdAt
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        startDate
        endDate
        createdAt
        status
        length
        notes
        dailyReports {
          nextToken
        }
        weeklyReports {
          nextToken
        }
        monthlyReports {
          nextToken
        }
        kpis {
          nextToken
        }
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchDailyReports = /* GraphQL */ `
  query SearchDailyReports(
    $filter: SearchableDailyReportFilterInput
    $sort: SearchableDailyReportSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchDailyReports(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        kpis {
          nextToken
        }
        createdAt
        dailyTarget
        weeklyReport {
          id
          willBeActiveOn
          createdAt
          weeklyTarget
          weeklyPoints
          updatedAt
        }
        dailyPoints
        weeklyTarget
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchWeeklyReports = /* GraphQL */ `
  query SearchWeeklyReports(
    $filter: SearchableWeeklyReportFilterInput
    $sort: SearchableWeeklyReportSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchWeeklyReports(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        willBeActiveOn
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        dailyReports {
          nextToken
        }
        createdAt
        weeklyTarget
        monthlyReport {
          id
          createdAt
          monthlyTarget
          monthlyPoints
          updatedAt
        }
        weeklyPoints
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchMonthlyReports = /* GraphQL */ `
  query SearchMonthlyReports(
    $filter: SearchableMonthlyReportFilterInput
    $sort: SearchableMonthlyReportSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchMonthlyReports(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        createdAt
        monthlyTarget
        weeklyReports {
          nextToken
        }
        monthlyPoints
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchKpis = /* GraphQL */ `
  query SearchKpis(
    $filter: SearchableKpiFilterInput
    $sort: SearchableKpiSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchKpis(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        campaign {
          id
          category
          name
          type
          startDate
          endDate
          createdAt
          status
          length
          notes
          updatedAt
        }
        id
        name
        result
        target
        nextWeekTarget
        coeff
        dailyReport {
          id
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
        }
        agent {
          id
          category
          name
          email
          dailyPoints
          weeklyPoints
          monthlyPoints
          totalPoints
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
