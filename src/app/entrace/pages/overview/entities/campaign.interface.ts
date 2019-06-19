export interface Campaign {
    name: string;
    id: number;
    titleId: number;
    activationDate: string;
    expirationDate: string;
    creationDate: string;
    active: number;
    dailyCapTime: string;
    origin: number;
    updateCounter: number;
    editableByDsi2: number;
    globalTotal: number;
    globalDaily: number;
    payout: number;
    paymentModel: number;
    titleIcon: string;
    platform: number;
    deliveryStatus: string;
    deliveryStatusId: number;
    impressions?: number;
    clicks?: number;
    installs?: number;
    spend?: number;
    ipm?: number;
    ecpm?: number;
    ecpi?: number;
    ad_revenue_7d?: number;
    iap_revenue_7d?: number;
    arpu_7d?: number;
    roas_7d?: number;
    arpu_3d?: number;
    roas_3d?: number;
}
