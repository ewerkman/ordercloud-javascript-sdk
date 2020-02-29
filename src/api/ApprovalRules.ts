import { ListPage } from '../models/ListPage';
import { ApprovalRule } from '../models/ApprovalRule';
import { PartialDeep } from '../models/PartialDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class ApprovalRules {
    private impersonating:boolean = false;

   /**
    * @param buyerID ID of the buyer.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TApprovalRule extends ApprovalRule>(buyerID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TApprovalRule>> }, accessToken?: string ): Promise<Required<ListPage<TApprovalRule>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/approvalrules`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRule: ApprovalRule, accessToken?: string ): Promise<Required<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/approvalrules`, { data: approvalRule, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string,  accessToken?: string ): Promise<Required<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: ApprovalRule, accessToken?: string ): Promise<Required<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { data: approvalRule, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, approvalRuleID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: PartialDeep<ApprovalRule>,  accessToken?: string ): Promise<Required<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { data: approvalRule, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ApprovalRules.As().List() // lists ApprovalRules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ApprovalRules();