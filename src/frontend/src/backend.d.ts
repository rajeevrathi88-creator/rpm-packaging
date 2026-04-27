import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: LeadId;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    productInterest: string;
    phone: string;
}
export type LeadId = bigint;
export interface LeadRequest {
    name: string;
    email: string;
    company: string;
    message: string;
    productInterest: string;
    phone: string;
}
export type SubmitLeadResult = {
    __kind__: "ok";
    ok: LeadId;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    submitLead(req: LeadRequest): Promise<SubmitLeadResult>;
}
