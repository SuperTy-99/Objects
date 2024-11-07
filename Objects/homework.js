/*
Using JavaScript console.log following 

is maya friends with nina?
How many friends maya has?
how many children john has?
*/

let profile = {
    name: "john",
    status: "complicated",
    children: [
      {
        name: "maya",
        age: 5,
        friends: [
          { name: "nina", age: 4 },
          { name: "lola", age: 5 }
        ]
      },
      { name: "joe", age: 2, children: [] }
    ]
  };
  //is maya friends with nina?
  console.log(profile.children[0].friends[0]);
  //How many friends maya has?
  console.log(profile.children[0].friends.length);
  //how many children john has?
  console.log(profile.children.length);