import Board from "@/components/Board";
import Report from "@/pages/Report";
import getTime from "@/utilities/getTime";
import { useState } from "react";

export default function AttendanceReport({ users }) {
  const [info, setInfo] = useState([]);
  return (
    <Board title={"Attendance Report"} actionButton={<Report setInfo={setInfo} />}>
      <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>

        <tbody>
          {
            info?.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.designation}</td>
                <td>{getTime(data.in, "time")}</td>
                <td>{getTime(data.out, "time")}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </Board>
  );
}