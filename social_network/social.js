const list = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  };

  biggestFollower = (data) => {
    let result = [];
    let name = "";
    for (const elem in data) {
      if (data[elem].follows.length > result.length) {
        (result = data[elem].follows), (name = data[elem].name);
      }
    }
    return name;
  };

  mostPopular = (data) => {
    highestFollowerCount = 0;
    mostFollowers = {};
    followerCount = {};
    followArray = [];
    let result = [];
    for (const elem in data) {
      data[elem].follows.forEach((element) => followArray.push(element));
    }
    for (var i = 0; i < followArray.length; i++) {
      followerCount[followArray[i]] = 1 + (followerCount[followArray[i]] || 0);
    }
    for (const elem in followerCount) {
      if (followerCount[elem] > highestFollowerCount) {
        highestFollowerCount = followerCount[elem];
      }
    }
    for (const elem in followerCount) {
      if (followerCount[elem] === highestFollowerCount) {
        mostFollowers[elem] = followerCount[elem];
      }
    }
    for (const elem in mostFollowers) {
      result.push(data[elem].name);
    }
    return result.toString();
  };

  printAll = (data) => {
    namesList = {};
    for (const elem in data) {
      friends = [];
      data[elem].follows.forEach((element) => friends.push(list[element].name));

      namesList[elem] = {
        name: data[elem].name,
        age: data[elem].age,
        follows: friends,
      };
      console.log(namesList);
    }
  };



unrequitedFollowers = (data) => {
sadFriends =[]
    for (const elem in data) {
    data[elem].follows.forEach(element => {
        
        if (list[element].follows.includes(elem) === false)
        { if (sadFriends.includes(data[elem].name) === false)
            {sadFriends.push(data[elem].name)}}
    })
}
return sadFriends.toString()
}
unrequitedFollowers(list)