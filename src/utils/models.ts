export const SubAccounts = (agentType: number) => [3, 6].includes(agentType)
export const MainAccounts = (agentType: number) => !([3, 6].includes(agentType))