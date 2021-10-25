// import React, { Component } from 'react';
// import { observer } from 'mobx-react'
// import ManagerStore from '../store/ManagerStore';

// class ManagerLecUpdateContainer extends Component {
//   managerStore = ManagerStore;

//   componentDidMount() {
//     const {id} = this.props;
//     this.managerStore.selectLec(id);
//   }

//   render() {
//     const { lec, updateLec, deleteLec, setLecProps } = this.managerStore;
//     return (
//       <div>
//         강의명: <input type="text" id="title" name="title" value={lec.title||""} 
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)} placeholder="강의명" /><br />
//         날짜: <input type="date" id="date" name="date" value={lec.date||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)} /><br />

//         시간: <input type="time" id="time" name="time"  value={lec.time||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)}/><br />
//         강의실:
//         <select name="room" id="room" value={lec.room||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
//           <option value="">--강의실--</option>
//           <option value="301호">301호</option>
//           <option value="302호">302호</option>
//           <option value="303호">303호</option>
//           <option value="201호">201호</option>
//           <option value="202호">202호</option>
//           <option value="101호">101호</option>
//         </select><br />
//         인원:
//         <select name="number" id="number" value={lec.number||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
//           <option value="">--인원--</option>
//           <option value="1">1인</option>
//           <option value="2">2인</option>
//           <option value="3">8인</option>
//         </select><br />
//         난이도: 
//         <select name="level" id="level" value={lec.level||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
//           <option value="">--난이도--</option>
//           <option value="1">level-1</option>
//           <option value="2">level-2</option>
//           <option value="3">level-3</option>
//         </select><br />
//         <textarea name="content" id="content" value={lec.content||""}
//         onChange={(e)=>setLecProps(e.target.name, e.target.value)}></textarea><br />
//         {/* <div name="status" value={lec.status} onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
//           <input type="radio" id="status2" name="status" value="2" />
//           <label htmlFor="o">승인</label>
//           <input type="radio" id="status3" name="status" value="3" />
//           <label htmlFor="x">반려</label>
//         </div> */}
//         <button onClick={()=>updateLec()}>수정</button>
//         <button onClick={()=>deleteLec()}>삭제</button>
//       </div>
//     );
//   }
// }

// export default observer(ManagerLecUpdateContainer);

import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import { useForm } from "react-hook-form";
import managerStore from '../store/ManagerStore';
import moment from 'moment';

function ManagerLecUpdateContainer(props) {

  useEffect(() => {
    const { id } = props;
    managerStore.selectLec(id);
  },[props]);


  const { lec, updateLec, deleteLec, setLecProps } = managerStore;
  const today = moment().format("YY.MM.DD")
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      강의명: <input id="title" name="title" type="title" value={lec.title}
        {...register("title", {required: true, validate: (value) => (value.length > 2) && (value.length < 21) })}
        onChange={(e) => setLecProps(e.target.name, e.target.value)} placeholder="3~20자" /><br />
      {errors.title && <p>3자~20자 이내만 입력 가능합니다.</p>}

      날짜: <input type="date" id="date" name="date" value={lec.date || ""}
        {...register("date", {required: true, validate: {
            dateTrue: (value) => moment(value).format("YY.MM.DD") > today}})}
        onChange={(e) => setLecProps(e.target.name, e.target.value)} /><br />
      {errors.date && errors.date.type === "dateTrue" && (<p>잘못 입력하셨습니다 :(</p>)}

      시간: <input type="time" id="time" name="time" value={lec.time || ""} {...register("time", { required: true })}
        onChange={(e) => setLecProps(e.target.name, e.target.value)} /><br />
      {errors.time && errors.time.type === "required" && <p>입력하세요!</p>}

      강의실:
      <select name="room" id="room" value={lec.room || ""} {...register("room")}
        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
        <option value="">--강의실--</option>
        <option value="301호">301호</option>
        <option value="302호">302호</option>
        <option value="303호">303호</option>
        <option value="201호">201호</option>
        <option value="202호">202호</option>
        <option value="101호">101호</option>
      </select><br />
      {errors.room && <p>입력하세요!</p>}

      인원:
      <select name="number" id="number" value={lec.number || ""} {...register("number",{ required: true } )}
        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
        <option value="">--인원--</option>
        <option value="1">1인</option>
        <option value="2">2인</option>
        <option value="8">8인</option>
      </select><br />
      {errors.number && <p>입력하세요!</p>}

      난이도:
      <select name="level" id="level" value={lec.level || ""} {...register("level",{ required: true })}
        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
        <option value="">--난이도--</option>
        <option value="1">level-1</option>
        <option value="2">level-2</option>
        <option value="3">level-3</option>
      </select><br />
      {errors.level && <p>입력하세요!</p>}

      <textarea name="content" id="content" value={lec.content || ""} {...register("content",{ required: true })}
        onChange={(e) => setLecProps(e.target.name, e.target.value)}></textarea><br />
      {errors.content && <p>입력하세요!</p>}

      <div name="status" id="status" value={lec.status} {...register("status",{ required: true })}
        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
        <input type="radio" id="status2" name="status" value="2" />
        <label htmlFor="o">승인</label>
        <input type="radio" id="status3" name="status" value="3" />
        <label htmlFor="x">반려</label>
      </div>
      {errors.status && <p>입력하세요!</p>}

      <button onClick={() => updateLec()}>수정</button>
      <button onClick={() => deleteLec()}>삭제</button>
    </form>
  );
}

export default observer(ManagerLecUpdateContainer);