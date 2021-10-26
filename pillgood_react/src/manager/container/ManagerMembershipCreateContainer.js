// import React, { Component } from 'react';
// import { observer } from 'mobx-react'
// import ManagerStore from '../store/ManagerStore';

// class ManagerMembershipCreateContainer extends Component {
//   managerStore = ManagerStore;
//   render() {
//     const { membership, createMembership, setMembershipProps} = this.managerStore;
//     return (
//       <div>
//         횟수: <input type="number" id="number" name="number" value={membership.number||""} 
//         onChange={(e)=>setMembershipProps(e.target.name, e.target.value)} placeholder="횟수"/><br/>
//         기간:
//         <div name="period" value={membership.period} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
//           <input type="radio" id="period10" name="period" value="10"/>
//           <label htmlFor="10">10일</label>
//           <input type="radio" id="period30" name="period" value="30" />
//           <label htmlFor="30">30일</label>
//           <input type="radio" id="period45" name="period" value="45" />
//           <label htmlFor="45">45일</label>
//           <input type="radio" id="period60" name="period" value="60" />
//           <label htmlFor="60">60일</label>
//         </div>
//         가격: <input type="number" id="price" name="price" value={membership.price||""} 
//         onChange={(e)=>setMembershipProps(e.target.name, e.target.value)} placeholder=""/>원<br/>
//         유형:
//         <div name="type"  value={membership.type} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
//           <input type="radio" id="1" name="type" value="1" />
//           <label htmlFor="1">1인</label>
//           <input type="radio" id="2" name="type" value="2"/>
//           <label htmlFor="2">2인</label>
//           <input type="radio" id="3" name="type" value="3"/>
//           <label htmlFor="8">8인</label>
//         </div>
//         활성
//         <div name="type"  value={membership.status} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
//           <input type="radio" id="status1" name="status" value="1"/>
//           <label htmlFor="o">활성</label>
//           <input type="radio" id="status2" name="status" value="2" />
//           <label htmlFor="x">비활성</label>
//         </div>
//         <button onClick={()=>createMembership()}>추가</button>
//       </div>
//     );
//   }
// }

// export default observer(ManagerMembershipCreateContainer);

import React from 'react';
import { observer } from 'mobx-react'
import { useForm } from "react-hook-form";
import managerStore from '../store/ManagerStore';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ManagerMembershipCreateContainer = () => {
  const { membership, createMembership, setMembershipProps } = managerStore;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%', margin: '30px auto' }}>
      횟수: <input type="number" id="number" name="number" value={membership.number || ""}
        {...register("number", {
          required: true, validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 31
          }
        })}
        onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="1~30" /><br />
      {errors.number && <p>입력하세요!</p>}
      {errors.number && errors.number.type === "positiveNumber" && (<p>잘못 입력하셨습니다 :(</p>)}
      {errors.number && errors.number.type === "lessThanHundred" && (<p>30보다 큰 수를 입력할 수 없습니다 :(</p>)}


      {/* 기간:
      <div name="period" value={membership.period} onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
        <input type="radio" id="period10" name="period" value="10" {...register("period", { required: true })}/>
        <label htmlFor="10">10일</label>
        <input type="radio" id="period30" name="period" value="30" {...register("period", { required: true })}/>
        <label htmlFor="30">30일</label>
        <input type="radio" id="period45" name="period" value="45" {...register("period", { required: true })}/>
        <label htmlFor="45">45일</label>
        <input type="radio" id="period60" name="period" value="60" {...register("period", { required: true })}/>
        <label htmlFor="60">60일</label>
      </div>
      {errors.period && <p>기간을 선택 하세요!</p>} */}
      <FormControl component="fieldset" >
        <FormLabel component="legend">기간</FormLabel>
        <RadioGroup row value={membership.period} name="period" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
          <FormControlLabel value="10" control={<Radio size="small" color="secondary"/>} label="10일" {...register("period", { required: true })} />
          <FormControlLabel value="30" control={<Radio size="small" color="secondary"/>} label="30일" {...register("period", { required: true })} />
          <FormControlLabel value="45" control={<Radio size="small" color="secondary"/>} label="45일" {...register("period", { required: true })} />
          <FormControlLabel value="60" control={<Radio size="small" color="secondary"/>} label="60일" {...register("period", { required: true })} />
        </RadioGroup>
      </FormControl>
      {errors.period && <p>기간을 선택 하세요!</p>}

      가격: <input type="number" id="price" name="price" value={membership.price || ""}
        {...register("price", {
          required: true, validate: {
            positiveNumber: (value) => parseFloat(value) > 9999,
            lessThanHundred: (value) => parseFloat(value) < 1000001
          }
        })}
        onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="10,000~999,999" />원<br />
      {errors.price && errors.price.type === "positiveNumber" && (<p>잘못된 가격을 입력하셨습니다 :(</p>)}
      {errors.price && errors.price.type === "lessThanHundred" && (<p>1,000,000원 미만의 가격을 입력하세요 :(</p>)}

      {/* 유형:
      <div name="type" value={membership.type} onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
        <input type="radio" id="1" name="type" value="1" {...register("type", { required: true })}/>
        <label htmlFor="1">1인</label>
        <input type="radio" id="2" name="type" value="2" {...register("type", { required: true })}/>
        <label htmlFor="2">2인</label>
        <input type="radio" id="3" name="type" value="3" {...register("type", { required: true })}/>
        <label htmlFor="8">8인</label>
      </div>
      {errors.type && <p>유형을 선택 하세요!</p>} */}
      <FormControl component="fieldset" >
        <FormLabel component="legend">유형</FormLabel>
        <RadioGroup row value={membership.type} name="type" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="1인" {...register("type", { required: true })} />
          <FormControlLabel value="2" control={<Radio />} label="2인" {...register("type", { required: true })} />
          <FormControlLabel value="3" control={<Radio />} label="8인" {...register("type", { required: true })} />
        </RadioGroup>
      </FormControl>
      {errors.type && <p>유형을 선택 하세요!</p>}

      {/* 활성
      <div name="type" value={membership.status} onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
        <input type="radio" id="status1" name="status" value="1" {...register("status", { required: true })} />
        <label htmlFor="o">활성</label>
        <input type="radio" id="status2" name="status" value="2" {...register("status", { required: true })} />
        <label htmlFor="x">비활성</label>
      </div>
      {errors.status && <p>활성 여부를 선택 하세요!</p>} */}

        <FormControl component="fieldset" >
        <FormLabel component="legend">활성</FormLabel>
        <RadioGroup row value={membership.status} name="status" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="활성" {...register("status", { required: true })} />
          <FormControlLabel value="2" control={<Radio />} label="비활성" {...register("status", { required: true })} />
        </RadioGroup>
      </FormControl>
      {errors.status && <p>활성 여부를 선택 하세요!</p>}

      <button onClick={() => createMembership()}>추가</button>
    </form>
  );
}

export default observer(ManagerMembershipCreateContainer);