/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
      dailyReports {
        items {
          id
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
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
      dailyReports {
        items {
          id
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
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
      dailyReports {
        items {
          id
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
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
        kpis {
          nextToken
        }
        dailyReports {
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
        kpis {
          nextToken
        }
        dailyReports {
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
        kpis {
          nextToken
        }
        dailyReports {
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
        dailyReports {
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
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
        dailyReports {
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
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
        dailyReports {
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
          date
          createdAt
          dailyTarget
          dailyPoints
          weeklyTarget
          updatedAt
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
export const createWeeklyReport = /* GraphQL */ `
  mutation CreateWeeklyReport(
    $input: CreateWeeklyReportInput!
    $condition: ModelWeeklyReportConditionInput
  ) {
    createWeeklyReport(input: $input, condition: $condition) {
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
          date
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
export const updateWeeklyReport = /* GraphQL */ `
  mutation UpdateWeeklyReport(
    $input: UpdateWeeklyReportInput!
    $condition: ModelWeeklyReportConditionInput
  ) {
    updateWeeklyReport(input: $input, condition: $condition) {
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
          date
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
export const deleteWeeklyReport = /* GraphQL */ `
  mutation DeleteWeeklyReport(
    $input: DeleteWeeklyReportInput!
    $condition: ModelWeeklyReportConditionInput
  ) {
    deleteWeeklyReport(input: $input, condition: $condition) {
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
          date
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
export const createMonthlyReport = /* GraphQL */ `
  mutation CreateMonthlyReport(
    $input: CreateMonthlyReportInput!
    $condition: ModelMonthlyReportConditionInput
  ) {
    createMonthlyReport(input: $input, condition: $condition) {
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
export const updateMonthlyReport = /* GraphQL */ `
  mutation UpdateMonthlyReport(
    $input: UpdateMonthlyReportInput!
    $condition: ModelMonthlyReportConditionInput
  ) {
    updateMonthlyReport(input: $input, condition: $condition) {
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
export const deleteMonthlyReport = /* GraphQL */ `
  mutation DeleteMonthlyReport(
    $input: DeleteMonthlyReportInput!
    $condition: ModelMonthlyReportConditionInput
  ) {
    deleteMonthlyReport(input: $input, condition: $condition) {
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
export const createDailyReport = /* GraphQL */ `
  mutation CreateDailyReport(
    $input: CreateDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    createDailyReport(input: $input, condition: $condition) {
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
        dailyReports {
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
      date
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
export const updateDailyReport = /* GraphQL */ `
  mutation UpdateDailyReport(
    $input: UpdateDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    updateDailyReport(input: $input, condition: $condition) {
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
        dailyReports {
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
      date
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
export const deleteDailyReport = /* GraphQL */ `
  mutation DeleteDailyReport(
    $input: DeleteDailyReportInput!
    $condition: ModelDailyReportConditionInput
  ) {
    deleteDailyReport(input: $input, condition: $condition) {
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
        dailyReports {
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
      date
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
export const createKpi = /* GraphQL */ `
  mutation CreateKpi(
    $input: CreateKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    createKpi(input: $input, condition: $condition) {
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
        date
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
        dailyReports {
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
export const updateKpi = /* GraphQL */ `
  mutation UpdateKpi(
    $input: UpdateKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    updateKpi(input: $input, condition: $condition) {
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
        date
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
        dailyReports {
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
export const deleteKpi = /* GraphQL */ `
  mutation DeleteKpi(
    $input: DeleteKpiInput!
    $condition: ModelKpiConditionInput
  ) {
    deleteKpi(input: $input, condition: $condition) {
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
        date
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
        dailyReports {
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
