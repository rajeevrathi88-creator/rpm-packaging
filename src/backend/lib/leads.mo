import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/leads";

module {
  public type Lead = Types.Lead;
  public type LeadRequest = Types.LeadRequest;
  public type SubmitLeadResult = Types.SubmitLeadResult;

  public func submitLead(
    leads : List.List<Lead>,
    nextId : Nat,
    req : LeadRequest,
    timestamp : Int,
  ) : (Lead, Nat) {
    Debug.todo()
  };

  public func getAllLeads(leads : List.List<Lead>) : [Lead] {
    Debug.todo()
  };
};
