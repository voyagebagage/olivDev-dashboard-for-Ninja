/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
          status
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
          status
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
          status
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
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
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
          name
          type
          startDate
          endDate
          status
          length
          notes
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
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
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
          name
          type
          startDate
          endDate
          status
          length
          notes
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
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
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
          name
          type
          startDate
          endDate
          status
          length
          notes
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
export const createYearPoints = /* GraphQL */ `
  mutation CreateYearPoints(
    $input: CreateYearPointsInput!
    $condition: ModelYearPointsConditionInput
  ) {
    createYearPoints(input: $input, condition: $condition) {
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
export const updateYearPoints = /* GraphQL */ `
  mutation UpdateYearPoints(
    $input: UpdateYearPointsInput!
    $condition: ModelYearPointsConditionInput
  ) {
    updateYearPoints(input: $input, condition: $condition) {
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
export const deleteYearPoints = /* GraphQL */ `
  mutation DeleteYearPoints(
    $input: DeleteYearPointsInput!
    $condition: ModelYearPointsConditionInput
  ) {
    deleteYearPoints(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
      status
      length
      notes
      dailyReports {
        items {
          id
          campaignName
          date
          target
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
      status
      length
      notes
      dailyReports {
        items {
          id
          campaignName
          date
          target
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
      status
      length
      notes
      dailyReports {
        items {
          id
          campaignName
          date
          target
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
export const createKpi = /* GraphQL */ `
  mutation CreateKpi(
    $input: CreateKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    createKpi(input: $input, condition: $condition) {
      id
      name
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
export const updateKpi = /* GraphQL */ `
  mutation UpdateKpi(
    $input: UpdateKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    updateKpi(input: $input, condition: $condition) {
      id
      name
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
export const deleteKpi = /* GraphQL */ `
  mutation DeleteKpi(
    $input: DeleteKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    deleteKpi(input: $input, condition: $condition) {
      id
      name
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
export const createKpiDailyReports = /* GraphQL */ `
  mutation CreateKpiDailyReports(
    $input: CreateKpiDailyReportsInput!
    $condition: ModelKpiDailyReportsConditionInput
  ) {
    createKpiDailyReports(input: $input, condition: $condition) {
      id
      dailyReport {
        id
        campaignName
        date
        campaign {
          id
          name
          type
          startDate
          endDate
          status
          length
          notes
          createdAt
          updatedAt
        }
        kpis {
          nextToken
        }
        target
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateKpiDailyReports = /* GraphQL */ `
  mutation UpdateKpiDailyReports(
    $input: UpdateKpiDailyReportsInput!
    $condition: ModelKpiDailyReportsConditionInput
  ) {
    updateKpiDailyReports(input: $input, condition: $condition) {
      id
      dailyReport {
        id
        campaignName
        date
        campaign {
          id
          name
          type
          startDate
          endDate
          status
          length
          notes
          createdAt
          updatedAt
        }
        kpis {
          nextToken
        }
        target
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteKpiDailyReports = /* GraphQL */ `
  mutation DeleteKpiDailyReports(
    $input: DeleteKpiDailyReportsInput!
    $condition: ModelKpiDailyReportsConditionInput
  ) {
    deleteKpiDailyReports(input: $input, condition: $condition) {
      id
      dailyReport {
        id
        campaignName
        date
        campaign {
          id
          name
          type
          startDate
          endDate
          status
          length
          notes
          createdAt
          updatedAt
        }
        kpis {
          nextToken
        }
        target
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDailyReport = /* GraphQL */ `
  mutation CreateDailyReport(
    $input: CreateDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    createDailyReport(input: $input, condition: $condition) {
      id
      campaignName
      date
      campaign {
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
        status
        length
        notes
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpis {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      target
      createdAt
      updatedAt
    }
  }
`;
export const updateDailyReport = /* GraphQL */ `
  mutation UpdateDailyReport(
    $input: UpdateDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    updateDailyReport(input: $input, condition: $condition) {
      id
      campaignName
      date
      campaign {
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
        status
        length
        notes
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpis {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      target
      createdAt
      updatedAt
    }
  }
`;
export const deleteDailyReport = /* GraphQL */ `
  mutation DeleteDailyReport(
    $input: DeleteDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    deleteDailyReport(input: $input, condition: $condition) {
      id
      campaignName
      date
      campaign {
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
        status
        length
        notes
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpis {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      target
      createdAt
      updatedAt
    }
  }
`;
