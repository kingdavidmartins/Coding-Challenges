// A traveling salesman has to visit clients. He got each client's address e.g.
// "432 Main Long Road St. Louisville OH 43071" as a list. The basic zipcode format
// usually consists of two capital letters followed by a white space and five digits.
// The list of clients to visit was given as a string of all addresses, each separated
// from the others by a comma,
// e.g. : "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".
// To ease his travel he wants to group the list by zipcode. The function travel will take two parameters
// r (list of all clients' addresses) and zipcode and returns a string in the following format:
// zipcode:street and town,street and town,.../house number,house number,...
// The street numbers must be in the same order as the streets where they belong.
// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

let saleManTravel = (r, zipcode) => {
  let streetAndCity = r.split(",").filter((value) => value.toString().indexOf(zipcode) !== -1).map((value) => value.split(" ", value.split(" ").length - 2).splice(1, value.split(" ").length).join(" "));
  let addressNumber = r.split(",").filter((value) => value.toString().indexOf(zipcode) !== -1).map((value) => value.split(" ").splice(0, 1).join(" ")).join();
  console.log((r.toString().indexOf(zipcode) === -1 || zipcode.length < 8) ? zipcode + ":/" : zipcode + ": " + streetAndCity + "/" + addressNumber);
};

let r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
saleManTravel(r, "OH 43071"); // "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
saleManTravel(r, "NY 56432"); // "NY 56432:High Street Pollocksville/786"
saleManTravel(r, "NY 5643"); // "NY 5643:/"
