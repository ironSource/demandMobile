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
}
