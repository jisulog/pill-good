import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaMainView from '../component/QnaMainView';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {TableHead} from '@mui/material';
import Button from '@mui/material/Button';
import "../qna.css";
//List
class QnaMainContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectQnaAll();
    }
    render() {
        const {qnas} = this.qnaStore;
        const qnaList = qnas.map(qna =>{
            return (<QnaMainView key={qna.qna_id} qna = {qna}/>)
        
        });
  
    
        return (
            <div>
        
                <h2 style={{textAlign:'center', color:'#574934'}} >QnA List</h2>
                <TableHead>
                <TableRow>
                                <TableCell >NO.</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">category</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Date</TableCell>
                </TableRow>
                </TableHead>
                {qnaList}
                <div className="button-align">
                <Button variant="contained"  className="link" ><Link to={`/qna/create/`}>글작성</Link></Button>
          
                </div>
            </div> 

        );
    }
}

export default observer(QnaMainContainer);