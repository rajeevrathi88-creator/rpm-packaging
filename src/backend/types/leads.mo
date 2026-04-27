module {
  public type LeadId = Nat;

  public type LeadRequest = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    message : Text;
    productInterest : Text;
  };

  public type Lead = {
    id : LeadId;
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    message : Text;
    productInterest : Text;
    timestamp : Int;
  };

  public type SubmitLeadResult = { #ok : LeadId; #err : Text };
};
