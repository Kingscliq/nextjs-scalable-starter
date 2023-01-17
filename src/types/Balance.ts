
export interface Balance {
    wallet_balance: number,
    loan_balance: number,
    commission_balance: number,
    agent_transactions: string | undefined,
    trans_summary: {
        total_transaction_count: number,
        total_debit: number,
        total_credit: number,
        total_transaction_amount: number,
        total_daily_commission: number,
        total_monthly_commission: number,
    },
}