import users from "../data/users.json";

const getUserColors = (userId) => {
  switch (userId) {
    case 23:
      return ["orange", "black"];
    case 24:
      return ["black", "white"];
    case 27:
      return ["#FF5733", "white"];
    default:
      return ["white", "black"];
  }
};

export function listTransform(dataList) {
  const itemsList = dataList.map((item, index) => {
    const eventUser = users.users.find((user) => user.id === item.userId);
    const eventTitle = eventUser.name;
    const [bgColor, txtColor] = getUserColors(eventUser.id);

    return {
      id: index,
      group: item.group,
      title: eventTitle,
      start_time: new Date(item.startDate),
      end_time: new Date(item.endDate),
      color: txtColor,
      backgroundColor: bgColor,
    };
  });

  return itemsList;
}
