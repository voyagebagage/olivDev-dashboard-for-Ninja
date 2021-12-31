/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent {
    onCreateAgent {
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
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent {
    onUpdateAgent {
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
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent {
    onDeleteAgent {
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
export const onCreateYearPoints = /* GraphQL */ `
  subscription OnCreateYearPoints {
    onCreateYearPoints {
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
export const onUpdateYearPoints = /* GraphQL */ `
  subscription OnUpdateYearPoints {
    onUpdateYearPoints {
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
export const onDeleteYearPoints = /* GraphQL */ `
  subscription OnDeleteYearPoints {
    onDeleteYearPoints {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateWeeklyReport = /* GraphQL */ `
  subscription OnCreateWeeklyReport {
    onCreateWeeklyReport {
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
export const onUpdateWeeklyReport = /* GraphQL */ `
  subscription OnUpdateWeeklyReport {
    onUpdateWeeklyReport {
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
export const onDeleteWeeklyReport = /* GraphQL */ `
  subscription OnDeleteWeeklyReport {
    onDeleteWeeklyReport {
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
export const onCreateMonthlyReport = /* GraphQL */ `
  subscription OnCreateMonthlyReport {
    onCreateMonthlyReport {
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
export const onUpdateMonthlyReport = /* GraphQL */ `
  subscription OnUpdateMonthlyReport {
    onUpdateMonthlyReport {
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
export const onDeleteMonthlyReport = /* GraphQL */ `
  subscription OnDeleteMonthlyReport {
    onDeleteMonthlyReport {
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
export const onCreateDailyReport = /* GraphQL */ `
  subscription OnCreateDailyReport {
    onCreateDailyReport {
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
export const onUpdateDailyReport = /* GraphQL */ `
  subscription OnUpdateDailyReport {
    onUpdateDailyReport {
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
export const onDeleteDailyReport = /* GraphQL */ `
  subscription OnDeleteDailyReport {
    onDeleteDailyReport {
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
export const onCreateKpi = /* GraphQL */ `
  subscription OnCreateKpi {
    onCreateKpi {
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
export const onUpdateKpi = /* GraphQL */ `
  subscription OnUpdateKpi {
    onUpdateKpi {
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
export const onDeleteKpi = /* GraphQL */ `
  subscription OnDeleteKpi {
    onDeleteKpi {
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
