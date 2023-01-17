

// Payment Info
export interface User {
  data?: any;
  result?: any;
  res?: { data: any };
  account?: string;
  agent_id?: number;
  agent_username?: string;
  agent_type?: number;
  payforce_agent_no?: string;
  aggregator_code?: string;
  bank?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  is_kyc_verified?: boolean;
  is_first_time_login?: boolean;
  is_migration_completed?: boolean;
  passport?: string;
  token?: string;
  refresh_token?: string;
  allow_commission_withdrawal?: string;
  allow_sub_agent_to_use_k_y_cof_super_agent?: string;
  campaign_id?: number;
  wallet_balance?: string;
  user_role?: string | undefined;
  is_b_v_n_verified?: boolean;
  otp_required?: boolean;
  has_security_questions?: boolean;
  agent_status?: string | undefined;
  sponsor_name?: string | undefined;
  sponsor_phone?: string | undefined;
  transaction_limit?: number;
  wants_insurance?: boolean;
  is_pin_set?: boolean;
  id_verify?: number;
  address_verify?: number;
  passport_verify?: number;
  agent_virtual_account_dtos?: string | undefined;
  transaction_pin?: number;
  account_type?: number;
  app_manager_user_name?: string;
  is_team_member?: boolean;
  web_client_token?: string
}

export interface SignupUser {
  app_id: number;
  agent_type: number;
  agent_id: number | string;
  password: string;
  confirm_password: string;
  username: string;
  bvn: string;
  email: string;
  phone_number: string;
  first_name: string;
  gender: string;
  last_name: string;
  address: string;
  state: string;
  lga: string;
  date_of_birth: string;
  otp: string;
  business_name: string;
  business_category: string;
  transaction_pin: string;
  terms: boolean;
  channel: string;
  region: string;
  promo_code: string;
  device_imei: string;
  recruiter_code?: string;
}

export interface VerifyPhone {
  identifier?: string;
  phone_number?: number;
}

export interface VerifyUser {
  identifier?: string;
  phone_number?: number;
}

export interface PasswordReset {
  user_name?: string;
}

export interface SubAccount {
  password: string;
  confirm_password?: string;
  app_id: number;
  username: string;
  role_name: string;
  agent_pin: string;
  is_api_app_agent: boolean;
  date_of_birth: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  agent_type: number;
  gender: string;
  fullname: string;
  location?: string;
  state: string;
  lga: string;
  campaign_id: number;
  business_name: string;
  transaction_limit?: number;
}
export interface SubAccountProfile {
  agent_id?: number;
  username?: string;
  phone?: string;
  email?: string;
  gender?: string | undefined;
  first_name?: string;
  full_name?: string;
  business_name?: string;
  next_of_kin?: string;
  next_of_kin_phone?: string;
  next_of_kin_email?: string | undefined;
  next_of_kin_address?: string | undefined;
  next_of_kin_relationship?: string;
  rc_number?: string;
  address?: string;
  state?: string;
  region?: string;
  lga?: string;
  agent_type?: number;
  evidence_of_address?: string;
  id_card?: string;
  bank?: string;
  bank_code?: string;
  account?: string;
  agent_status?: number;
  request_to_go_live?: boolean;
  has_been_trained?: boolean;
  commission_account?: number;
  wallet_currency_code?: string | undefined;
  wallet_currency_symbol?: string;
  regdate?: string;
  date_of_birth?: string;
  posterminal_id?: string;
  device_imei?: string;
  reset_token?: string;
  otp?: string;
  recruiter_name?: string;
  recruiter_code?: string;
  timeout_pin?: string;
  agent_pin?: string;
  agent_account_no?: string;
  previous_day_balance?: number;
  previous_day_balance_modified_at?: string;
  sponsor_id?: number;
  campaign_id?: number;
  aggregator_code?: string;
  transaction_limit?: number;
  referer_code?: string;
  is_credited_to_referer?: string;
  bvn?: string;
  is_custom_charge?: boolean;
  is_first_time_login?: boolean;
  campaign_name?: string;
  sponsor_name?: string;
  agent_wallet_account_no?: string;
  agent_deposit_account_no?: string;
  agent_deposit_account_bank_name?: string;
  agent_deposit_account_bank_code?: string;
  bank_wallet_provider?: string;
  app_center_id?: string;
  passport?: string;
  is_kyc_uploaded?: boolean;
  is_bvn_verified?: boolean;
  is_kyc_verified?: boolean;
  latitude?: string;
  longitude?: string;
  app_id?: number;
  account_type?: number;
  wallet_balance?: number;
  agent_category?: number;
  is_migration_completed?: boolean;
  agent_transaction_count?: number;
  has_filled_pos_agreement_form?: boolean;
  terminal_id?: string;
  sanef_agent_code?: string;
  channel?: string;
  lien_amount?: number;
  lien_reason?: string;
  bvn_full_name?: string;
  bvn_phone_number?: string;
  is_bvn_record_match?: boolean;
  has_security_questions?: boolean;
  is_pilot_agent?: boolean;
  wants_insurance?: boolean;
  wants_funds_swiped?: boolean;
  segment_tracker?: boolean;
  is_api_app_agent?: boolean;
  app?: string;
  agent_device_log_histories?: string;
  tangerine_account_id?: string;
  fidelity_customer_ref?: string;
  nqr_sub_merchant_id?: string;
  agent_emvco_code?: string;
  agent_virtual_accounts?: string;
  sponsor_username?: string;
  promo_code?: string;
  pc_mac_address?: string;
  agent_virtual_cards?: string;
  business_type?: string;
  is_deleted?: boolean;
  deleted_at?: string;
  deleted_by?: string;
  modified_at?: string;
  created_at?: string;
  modified_by?: string;
  created_by?: string;
  auto_swipe_time?: string;
  swip_fund_to_main_account_wallet?: boolean;
  swipe_time?: string;

}

export interface TeamMemberSignup {
  role_name?: string,
  username?: string,
  password?: string,
  confirm_password?: string,
  first_name?: string,
  last_name?: string,
  phone?: string,
  email?: string,
  merchant_agent_id?: number,
  account_id?: number,
}

export interface TeamMember {
  app_manager_id: number,
  app_id: number,
  username: string,
  email: string,
  phone: string,
  first_name: string,
  last_name: string,
  role: string,
  agent_id: null,
  assigned_to: string,
  is_active: boolean,
  password: string,
  confirm_password: string
}

