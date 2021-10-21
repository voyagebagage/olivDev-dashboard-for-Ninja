/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
      monthlyPoint
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
      monthlyPoint
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
      monthlyPoint
      totalPoints
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
          monthlyPoint
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
          monthlyPoint
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
          monthlyPoint
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
        monthlyPoint
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
        monthlyPoint
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
        monthlyPoint
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
export const onCreateKpi = /* GraphQL */ `
  subscription OnCreateKpi {
    onCreateKpi {
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
export const onUpdateKpi = /* GraphQL */ `
  subscription OnUpdateKpi {
    onUpdateKpi {
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
export const onDeleteKpi = /* GraphQL */ `
  subscription OnDeleteKpi {
    onDeleteKpi {
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
export const onCreateKpiDailyReports = /* GraphQL */ `
  subscription OnCreateKpiDailyReports {
    onCreateKpiDailyReports {
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
export const onUpdateKpiDailyReports = /* GraphQL */ `
  subscription OnUpdateKpiDailyReports {
    onUpdateKpiDailyReports {
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
export const onDeleteKpiDailyReports = /* GraphQL */ `
  subscription OnDeleteKpiDailyReports {
    onDeleteKpiDailyReports {
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
export const onCreateDailyReport = /* GraphQL */ `
  subscription OnCreateDailyReport {
    onCreateDailyReport {
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
          monthlyPoint
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
export const onUpdateDailyReport = /* GraphQL */ `
  subscription OnUpdateDailyReport {
    onUpdateDailyReport {
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
          monthlyPoint
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
export const onDeleteDailyReport = /* GraphQL */ `
  subscription OnDeleteDailyReport {
    onDeleteDailyReport {
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
          monthlyPoint
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
