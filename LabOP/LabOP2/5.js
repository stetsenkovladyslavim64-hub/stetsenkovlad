const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Julius Caesar", phone: "+380445554434" },
  { name: "Nero", phone: "+380445554435" },
];

const findPhoneByName = (name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) return entry.phone;
  }
};
