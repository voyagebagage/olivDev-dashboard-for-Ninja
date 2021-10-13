/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
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
          name
          type
          startDate
          endDate
          length
          notes
          createdAt
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
            name
            type
            startDate
            endDate
            length
            notes
            createdAt
            updatedAt
          }
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
      name
      email
      team {
        id
        name
        agents {
          nextToken
        }
        createdAt
        updatedAt
      }
      campaigns {
        items {
          id
          name
          type
          startDate
          endDate
          length
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      points
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
        name
        email
        team {
          id
          name
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        points
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
          name
          email
          points
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      type
      client {
        id
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
        name
        email
        team {
          id
          name
          createdAt
          updatedAt
        }
        campaigns {
          nextToken
        }
        points
        createdAt
        updatedAt
      }
      startDate
      endDate
      length
      notes
      dailyReports {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
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
        name
        type
        client {
          id
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
          name
          email
          points
          createdAt
          updatedAt
        }
        startDate
        endDate
        length
        notes
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKpi = /* GraphQL */ `
  query GetKpi($id: ID!) {
    getKpi(id: $id) {
      id
      name
      target
      dailyReports {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
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
        id
        name
        target
        dailyReports {
          nextToken
        }
        createdAt
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
      date
      kpis {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
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
        date
        kpis {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
