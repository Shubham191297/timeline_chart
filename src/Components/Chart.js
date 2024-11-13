import React, { useEffect, useState } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import data from "../data/data.json";
import { listTransform } from "../utils/ListTransform";

const Chart = ({ numDays, dateValue }) => {
  const [groupNames, setGroupNames] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    let entryNum = 1;
    const newGroupNames = [];
    const newDataList = [];

    Object.entries(data).forEach((item) => {
      newGroupNames.push({ id: entryNum, title: item[0] });

      if (item[0] === "layers") {
        entryNum++;
        item[1].forEach((value) => {
          newGroupNames.push({
            id: entryNum,
            title: item[0] + " " + value.number,
          });
          value.layers.forEach((event) =>
            newDataList.push({ group: entryNum, ...event })
          );
          entryNum++;
        });
      } else {
        item[1].forEach((event) =>
          newDataList.push({ group: entryNum, ...event })
        );
        entryNum++;
      }
    });

    const transformedItems = listTransform(newDataList);

    setGroupNames(newGroupNames);
    setItemsList(transformedItems);
  }, []);

  if (!groupNames.length || !itemsList.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{dateValue?.format("DD MMMM YYYY")}</h2>
      <Timeline
        groups={groupNames}
        items={itemsList}
        defaultTimeStart={moment(dateValue?.toDate())}
        defaultTimeEnd={moment(dateValue?.toDate()).add(24 * numDays, "hour")}
        timeSteps={{ hour: numDays < 7 ? 1 : 6, day: 1 }}
        itemRenderer={({ item, itemContext, getItemProps }) => {
          if (!item || !itemContext) return null;

          const itemProps = getItemProps
            ? getItemProps({
                style: {
                  backgroundColor: item.backgroundColor || "#ccc",
                  color: item.color || "#fff",
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: 1,
                },
              })
            : {};

          return (
            <div {...itemProps}>
              <div
                style={{
                  height: itemContext.dimensions.height,
                  overflow: "hidden",
                  paddingLeft: 3,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {itemContext.title}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Chart;
