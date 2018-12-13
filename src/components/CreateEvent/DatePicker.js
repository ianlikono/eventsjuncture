import { DatePicker } from "antd";
import moment from "moment";
import React, { Component } from "react";
import styled from "styled-components";

const StyledDate = styled(DatePicker)`
  .ant-input {
  }
`;

const RangePicker = StyledDate.RangePicker;

export default class DateRange extends Component {
  disabledDate = current => {
    return current && current < moment().endOf("day");
  };

  render() {
    return (
      <div>
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            "This Month": [moment(), moment().endOf("month")]
          }}
          disabledDate={this.disabledDate}
          showTime
          format="YYYY/MM/DD HH:mm:ss"
          onChange={this.props.dateOnChange}
        />
      </div>
    );
  }
}
