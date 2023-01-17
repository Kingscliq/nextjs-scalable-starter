export interface Billers {
    category_name: string;
    billers:
    {
        biller_id: number;
        category_id: number;
        biller_name: string;
        biller_description: string;
        biller_api: string;
        biller_api_param: string;
        biller_code: string;
        requires_validation: boolean;
        requires_biller_items: boolean;
        category: {
            category_id: number;
            category_name: boolean;
            category_description: string;
            category_sort_order: number;
            category_logo_url: string;
        },
        biller_items:
        {
            biller_item_id: number;
            biller_id: number;
            payment_item_name: string;
            payment_code: string;
            is_active: true
            biller_code: string;
            amount: number;
            months_paid_for: number;
            is_deleted: boolean;
            deleted_at: string;
            deleted_by: string;
            modified_at: string;
            created_at: string;
            modified_by: string;
            created_by: string;
        }[],

        is_active: boolean;
        biller_commission_types: number;
        service_charge: number;
        aggregator_surcharge: number;
        transaction_type: number;
        logo_url: string;
        label_name: string;
        validation_name: string;
        biller_item_label: string;
        is_value_added_service: boolean;
        is_deleted: boolean;
        deleted_at: string;
        deleted_by: string;
        modified_at: string;
        created_at: string;
        modified_by: string;
        created_by: string;
    }[],

}

export interface BillerItems {
    payment_code: any;
    category: any;
    transaction_type: any;
    service_charge: any;
    requires_validation: boolean;
    validation_name: string;
    biller_item_label: string;
    aggregator_commission: string;
    label_name: string;
    biller_code: string;
    biller_api: string;
    biller_id: string;
    requires_biller_items: boolean;
    biller_items: any;
    biller_name: any;
    logo_url: any;
    billerItem?: {
        biller_item_id?: number;
        biller_id?: number;
        payment_item_name?: string;
        payment_code?: string;
        is_active?: true
        biller_code?: string;
        amount?: number;
        months_paid_for?: number;
        is_deleted?: boolean;
        deleted_at?: string;
        deleted_by?: string;
        modified_at?: string;
        created_at?: string;
        modified_by?: string;
        created_by?: string;
    }[]
}

export interface BillerItemFormData {
    billerFormData: {
        amount: number;
        customer_name?: string;
        transaction_reference?: number;
        agent_username?: number;
    }
}


