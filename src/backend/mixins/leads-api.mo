import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/leads";

mixin (leads : List.List<Types.Lead>, nextLeadId : Nat) {
  public func submitLead(req : Types.LeadRequest) : async Types.SubmitLeadResult {
    Debug.todo()
  };

  public query func getAllLeads() : async [Types.Lead] {
    Debug.todo()
  };
};
