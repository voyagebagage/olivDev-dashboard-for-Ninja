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
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent {
    onUpdateAgent {
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
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent {
    onDeleteAgent {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateKpi = /* GraphQL */ `
  subscription OnCreateKpi {
    onCreateKpi {
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
export const onUpdateKpi = /* GraphQL */ `
  subscription OnUpdateKpi {
    onUpdateKpi {
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
export const onDeleteKpi = /* GraphQL */ `
  subscription OnDeleteKpi {
    onDeleteKpi {
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
export const onCreateKpiDailyReports = /* GraphQL */ `
  subscription OnCreateKpiDailyReports {
    onCreateKpiDailyReports {
      id
      dailyReport {
        id
        date
        kpis {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        target
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        date
        kpis {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        target
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        date
        kpis {
          nextToken
        }
        createdAt
        updatedAt
      }
      kpi {
        id
        name
        target
        dailyReports {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDailyReport = /* GraphQL */ `
  subscription OnCreateDailyReport {
    onCreateDailyReport {
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
export const onUpdateDailyReport = /* GraphQL */ `
  subscription OnUpdateDailyReport {
    onUpdateDailyReport {
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
export const onDeleteDailyReport = /* GraphQL */ `
  subscription OnDeleteDailyReport {
    onDeleteDailyReport {
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
