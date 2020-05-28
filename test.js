// const util = require("util");
const array = [
  {
    _id: "5ecb2a0b663ce0337063e1a4",
    name: "Taking Your HIV Medication Every Day | HIV.gov",
    parent: "5ecb2a0b663ce0337063e1a3",
  },
  {
    _id: "5ecb2a0b663ce0337063e1a3",
    name: "The FDA has approved Exservanª for the treatment of ALS",
    parent: "5ecb2a0b663ce0337063e1a1",
  },
  {
    _id: "5ecb2a0b663ce0337063e1a2",
    name: "Existing drugs may offer a first-line treatment for coronavirus",
    parent: "5ecb2a0b663ce0337063e1a1",
  },
  {
    _id: "5ecb2a0b663ce0337063e1a1",
    name: "Chemotherapy-free treatment for lymphoma recommended by NICE",
    parent: "5ecb2a0b663ce0337063e1a0",
  },
  {
    _id: "5ecb2a0b663ce0337063e1a0",
    name: "Confidence high about a COVID-19 vaccine",
    parent: "5ecb2a0b663ce0337063e199",
  },
  {
    _id: "5ecb2a0b663ce0337063e19f",
    name: "List of Anxiety Drugs",
    parent: "5ecb2a0b663ce0337063e199",
  },
  {
    _id: "5ecb2a0b663ce0337063e19e",
    name:
      "Migraine Research Foundation Migraine Treatment - Migraine Research Foundation",
    parent: "5ecb2a0b663ce0337063e199",
  },
  {
    _id: "5ecb2a0b663ce0337063e19d",
    name: "GoodRx What's the Best Treatment for Fibromyalgia Pain? - GoodRx",
    parent: "5ecb2a0b663ce0337063e199",
  },
  {
    _id: "5ecb2a0b663ce0337063e199",
    name:
      "Popular heartburn medicine being studied as treatment for coronavirus",
    parent: null,
  },
  {
    _id: "5ebe039289910f85adfd1ce6",
    name: "Head lice treatment can kill COVID-19",
    parent: "5ebe039289910f85adfd1cda",
  },
  {
    _id: "5ebe039289910f85adfd1ce5",
    name: "Effective Treatments for Herpes",
    parent: "5ebe039289910f85adfd1cda",
  },
  {
    _id: "5ebe039289910f85adfd1ce4",
    name: "Taking Your HIV Medication Every Day | HIV.gov",
    parent: "5ebe039289910f85adfd1ce3",
  },
  {
    _id: "5ebe039289910f85adfd1ce3",
    name: "The FDA has approved Exservanª for the treatment of ALS",
    parent: "5ebe039289910f85adfd1ce1",
  },
  {
    _id: "5ebe039289910f85adfd1ce2",
    name: "Existing drugs may offer a first-line treatment for coronavirus",
    parent: "5ebe039289910f85adfd1ce1",
  },
  {
    _id: "5ebe039289910f85adfd1ce1",
    name: "Chemotherapy-free treatment for lymphoma recommended by NICE",
    parent: "5ebe039289910f85adfd1ce0",
  },
  {
    _id: "5ebe039289910f85adfd1ce0",
    name: "Confidence high about a COVID-19 vaccine",
    parent: "5ebe039289910f85adfd1cd9",
  },
  {
    _id: "5ebe039289910f85adfd1cdf",
    name: "List of Anxiety Drugs",
    parent: "5ebe039289910f85adfd1cd9",
  },
  {
    _id: "5ebe039289910f85adfd1cde",
    name:
      "Migraine Research Foundation Migraine Treatment - Migraine Research Foundation",
    parent: "5ebe039289910f85adfd1cd9",
  },
  {
    _id: "5ebe039289910f85adfd1cdd",
    name: "GoodRx What's the Best Treatment for Fibromyalgia Pain? - GoodRx",
    parent: "5ebe039289910f85adfd1cd9",
  },
  {
    _id: "5ebe039289910f85adfd1cdc",
    name: "Gilead Expands Access to Potential COVID-19 Treatment, Remdesivir",
    parent: null,
  },
  {
    _id: "5ebe039289910f85adfd1cdb",
    name: "Starting HIV Treatment - POZ",
    parent: null,
  },
  {
    _id: "5ebe039289910f85adfd1cda",
    name: "Potential coronavirus treatment",
    parent: null,
  },
  {
    _id: "5ebe039289910f85adfd1cd9",
    name:
      "Popular heartburn medicine being studied as treatment for coronavirus",
    parent: null,
  },
  {
    _id: "5ebe030c89910f85adfd1cd8",
    name: "Head lice treatment can kill COVID-19",
    parent: "5ebe030c89910f85adfd1ccc",
  },
  {
    _id: "5ebe030c89910f85adfd1cd7",
    name: "Effective Treatments for Herpes",
    parent: "5ebe030c89910f85adfd1ccc",
  },
  {
    _id: "5ebe030c89910f85adfd1cd6",
    name: "Taking Your HIV Medication Every Day | HIV.gov",
    parent: "5ebe030c89910f85adfd1cd5",
  },
  {
    _id: "5ebe030c89910f85adfd1cd5",
    name: "The FDA has approved Exservanª for the treatment of ALS",
    parent: "5ebe030c89910f85adfd1cd3",
  },
  {
    _id: "5ebe030c89910f85adfd1cd4",
    name: "Existing drugs may offer a first-line treatment for coronavirus",
    parent: "5ebe030c89910f85adfd1cd3",
  },
  {
    _id: "5ebe030c89910f85adfd1cd3",
    name: "Chemotherapy-free treatment for lymphoma recommended by NICE",
    parent: "5ebe030c89910f85adfd1cd2",
  },
  {
    _id: "5ebe030c89910f85adfd1cd2",
    name: "Confidence high about a COVID-19 vaccine",
    parent: "5ebe030c89910f85adfd1ccb",
  },
  {
    _id: "5ebe030c89910f85adfd1cd1",
    name: "List of Anxiety Drugs",
    parent: "5ebe030c89910f85adfd1ccb",
  },
  {
    _id: "5ebe030c89910f85adfd1cd0",
    name:
      "Migraine Research Foundation Migraine Treatment - Migraine Research Foundation",
    parent: "5ebe030c89910f85adfd1ccb",
  },
  {
    _id: "5ebe030c89910f85adfd1ccf",
    name: "GoodRx What's the Best Treatment for Fibromyalgia Pain? - GoodRx",
    parent: "5ebe030c89910f85adfd1ccb",
  },
  {
    _id: "5ebe030c89910f85adfd1cce",
    name: "Gilead Expands Access to Potential COVID-19 Treatment, Remdesivir",
    parent: null,
  },
  {
    _id: "5ebe030c89910f85adfd1ccd",
    name: "Starting HIV Treatment - POZ",
    parent: null,
  },
  {
    _id: "5ebe030c89910f85adfd1ccc",
    name: "Potential coronavirus treatment",
    parent: null,
  },
  {
    _id: "5ebe030c89910f85adfd1ccb",
    name:
      "Popular heartburn medicine being studied as treatment for coronavirus",
    parent: null,
  },
];

const nested = (items, id = null, level = "") => {
  level = level + "--";
  return items
    .filter((item) => {
      return item.parent === id;
    })
    .map((item) => {
      console.log(level + `${item._id} ${item.name}`);
      return { ...item, children: nested(items, item._id, level) };
    });
};

nested(array);
