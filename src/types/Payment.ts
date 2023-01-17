
export interface PaymentDetail {
    agent_charge?: number;
    transaction_type?: number;
    agent_username?: string;
    aggregator_commission?: number;
    bank_name?: string;
    biller_api?: string;
    biller_api_param?: string;
    biller_code?: string;
    biller_id?: number;
    customer_email?: string;
    customer_id?: string;
    customer_mobile?: string;
    customer_name?: string;
    device_imei?: string;
    is_credit_to_wallet?: boolean,
    latitude?: string;
    longitude?: string;
    narration?: string;
    offline_id?: string;
    payment_code?: string;
    transaction_status?: number,
    service_charge?: number,
    amount?: number,
    currency?: string;
    transaction_mode?: string;
    transaction_reference?: string;
    transaction_id?: string;
    agent_transaction_id?: number,
    transaction_channel?: string;
    voucher_code?: string;
    voucher_otp?: string;
    month_paid_for?: string | number;
    label_name?: string
}




export interface TransactionDetails extends PaymentDetail {
    agent_transaction_id: number,
}


