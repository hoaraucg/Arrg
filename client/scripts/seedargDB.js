const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Arguments collection and inserts the arguments below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactarrglist"
);

const argumentSeed = [
  {
    title: "Arg Title 1",
    main: "Bacon ipsum dolor amet ribeye tail meatloaf biltong, kevin chicken t-bone cupim picanha pork belly pastrami. Tri-tip kevin ham hock short ribs pork loin cupim flank alcatra jowl. Sausage buffalo picanha leberkas pork chop hamburger, jowl chicken capicola strip steak kielbasa spare ribs ribeye frankfurter. Ham hock hamburger pork belly venison filet mignon strip steak picanha shankle cow meatball.",
    sideone: "Pork chop cupim cow prosciutto, pork belly rump tenderloin. Pancetta jerky shank ham pig filet mignon burgdoggen rump ribeye chicken.",
    sidetwo: "Bacon kielbasa venison, shankle t-bone pork pig sirloin chicken turkey pork chop tail jerky sausage.",
    date: new Date(Date.now())
  },
  {
    title: "Arg Title 2",
    main: "Bacon ipsum dolor amet ribeye tail meatloaf biltong, kevin chicken t-bone cupim picanha pork belly pastrami. Tri-tip kevin ham hock short ribs pork loin cupim flank alcatra jowl. Sausage buffalo picanha leberkas pork chop hamburger, jowl chicken capicola strip steak kielbasa spare ribs ribeye frankfurter. Ham hock hamburger pork belly venison filet mignon strip steak picanha shankle cow meatball.",
    sideone: "Pork chop cupim cow prosciutto, pork belly rump tenderloin. Pancetta jerky shank ham pig filet mignon burgdoggen rump ribeye chicken.",
    sidetwo: "Bacon kielbasa venison, shankle t-bone pork pig sirloin chicken turkey pork chop tail jerky sausage.",
    date: new Date(Date.now())
  },
  {
    title: "Arg Title 3",
    main: "Bacon ipsum dolor amet ribeye tail meatloaf biltong, kevin chicken t-bone cupim picanha pork belly pastrami. Tri-tip kevin ham hock short ribs pork loin cupim flank alcatra jowl. Sausage buffalo picanha leberkas pork chop hamburger, jowl chicken capicola strip steak kielbasa spare ribs ribeye frankfurter. Ham hock hamburger pork belly venison filet mignon strip steak picanha shankle cow meatball.",
    sideone: "Pork chop cupim cow prosciutto, pork belly rump tenderloin. Pancetta jerky shank ham pig filet mignon burgdoggen rump ribeye chicken.",
    sidetwo: "Bacon kielbasa venison, shankle t-bone pork pig sirloin chicken turkey pork chop tail jerky sausage.",
    date: new Date(Date.now())
  },
  {
    title: "Arg Title 4",
    main: "Bacon ipsum dolor amet ribeye tail meatloaf biltong, kevin chicken t-bone cupim picanha pork belly pastrami. Tri-tip kevin ham hock short ribs pork loin cupim flank alcatra jowl. Sausage buffalo picanha leberkas pork chop hamburger, jowl chicken capicola strip steak kielbasa spare ribs ribeye frankfurter. Ham hock hamburger pork belly venison filet mignon strip steak picanha shankle cow meatball.",
    sideone: "Pork chop cupim cow prosciutto, pork belly rump tenderloin. Pancetta jerky shank ham pig filet mignon burgdoggen rump ribeye chicken.",
    sidetwo: "Bacon kielbasa venison, shankle t-bone pork pig sirloin chicken turkey pork chop tail jerky sausage.",
    date: new Date(Date.now())
  },
  {
    title: "Arg Title 5",
    main: "Bacon ipsum dolor amet ribeye tail meatloaf biltong, kevin chicken t-bone cupim picanha pork belly pastrami. Tri-tip kevin ham hock short ribs pork loin cupim flank alcatra jowl. Sausage buffalo picanha leberkas pork chop hamburger, jowl chicken capicola strip steak kielbasa spare ribs ribeye frankfurter. Ham hock hamburger pork belly venison filet mignon strip steak picanha shankle cow meatball.",
    sideone: "Pork chop cupim cow prosciutto, pork belly rump tenderloin. Pancetta jerky shank ham pig filet mignon burgdoggen rump ribeye chicken.",
    sidetwo: "Bacon kielbasa venison, shankle t-bone pork pig sirloin chicken turkey pork chop tail jerky sausage.",
    date: new Date(Date.now())
  }
];

db.Argument
  .remove({})
  .then(() => db.Argument.collection.insertMany(argumentSeed))
  .then(data => {
    console.log(data.result.n + " arguments inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
