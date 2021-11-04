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
          target
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
          target
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
          target
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
          updatedAt
        }
        nextToken
      }
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
        updatedAt
      }
      kpis {
        items {
          id
          name
          target
          coeff
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
        updatedAt
      }
      kpis {
        items {
          id
          name
          target
          coeff
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
        updatedAt
      }
      kpis {
        items {
          id
          name
          target
          coeff
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
export const onCreateKpi = /* GraphQL */ `
  subscription OnCreateKpi {
    onCreateKpi {
      id
      name
      target
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
export const onUpdateKpi = /* GraphQL */ `
  subscription OnUpdateKpi {
    onUpdateKpi {
      id
      name
      target
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
export const onDeleteKpi = /* GraphQL */ `
  subscription OnDeleteKpi {
    onDeleteKpi {
      id
      name
      target
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
