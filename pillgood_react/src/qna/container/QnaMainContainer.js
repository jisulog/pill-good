import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaMainView from '../component/QnaMainView';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableHead, TablePagination } from '@mui/material';
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
                <h1>QnA List</h1>
                
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
                <Link to={`/qna/create/`}><button>글작성</button></Link>
                <Link to={`/qna/`}><button>목록</button></Link>
                <TablePagination rowsPerPageOptions={[10, 50]} />
            </div>
        );
    }
}

export default observer(QnaMainContainer);