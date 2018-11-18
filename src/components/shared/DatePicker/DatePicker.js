import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import withSizes from "react-sizes";
import { SingleDateLabel, SingleDateWrapper } from "./DatePickerStyles";

const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56]
  };
}

function disabledRangeTime(_, type) {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56]
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56]
  };
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const DateComponent = props => {
  if (!props.isMobile) {
    return (
      <div style={{ marginLeft: "40vw", marginTop: "70px" }}>
        <RangePicker
          onChange={onChange}
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment("00:00:00", "HH:mm:ss"),
              moment("11:59:59", "HH:mm:ss")
            ]
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    );
  }
  return (
    <SingleDateWrapper style={{ marginLeft: "40vw", marginTop: "70px" }}>
      <SingleDateLabel>Start Date</SingleDateLabel>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        placeholder="Select Start Date"
      />
      <SingleDateLabel>End Date</SingleDateLabel>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        placeholder="Select End Date"
      />
    </SingleDateWrapper>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600
});

export default withSizes(mapSizesToProps)(DateComponent);
