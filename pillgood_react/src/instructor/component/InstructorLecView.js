import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';


class InstructorLecView extends Component {
  render() {
    const {lec}  = this.props;
    const { columns, rows, useStyles  } = this.props;
    const classes = useStyles;

      return(
        <div>
        <DataGrid style={{ height: 500, width: '100%'}}
            rows={rows}
            columns={columns}
            pageSize={5}
            hideFooterSelectedRowCount={true}
          />

        </div>

    );
  }
}

export default InstructorLecView;