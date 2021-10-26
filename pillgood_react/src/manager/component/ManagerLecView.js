import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

class ManagerLecView extends Component {
  render() {
    const { columns, rows } = this.props;
    return (
      // <tr>
      //   <td>{lec.email.email}</td>
      //   <td>{lec.email.name}</td>
      //   <td>{lec.title}</td>
      //   <td>{moment(lec.date).format("YY.MM.DD")}</td>
      //   <td>{moment(lec.time,"HH:mm:ss").format("HH:mm")}</td>
      //   <td>{lec.room}</td>
      //   <td>
      //   {lec.status === 1 ? "대기":
      //   lec.status === 2 ? "승인":
      //   lec.status === 3 ? "거부" : ""}
      //   </td>
      // </tr>
      <DataGrid style={{ height: 500, width: '100%'}}
            rows={rows}
            columns={columns}
            pageSize={7}
            hideFooterSelectedRowCount={true}
          />
    );
  }
}

export default ManagerLecView;