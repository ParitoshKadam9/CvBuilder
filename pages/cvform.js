import { useState } from "react";
import styles from "../styles/cvform.module.css"
import Drop from "./components/dropdownform.js/dropDownForm";

import { useForm } from "react-hook-form";


export default function Form({ adddata }) {
  const [state, setState] = useState({
    isSwitch: true,
  })

  const onChange = () => {
    setState({ ...state, isSwitch: !state.isSwitch })
  }
   
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    console.log(register);
  }
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        
          <div className={styles.header}>CV details</div>
          <div className={styles.box1}>
            <div className={styles.image}></div>
            <div className={styles.names}>
              <input className={styles.firstname} placeholder="First Name" {...register('title')} />
              <input className={styles.firstname} placeholder="Last Name" />
            </div>
          </div>
          <div className={styles.box2}>
            <input className={styles.firstname} placeholder="E-mail" type="email" />
            <input className={styles.firstname} placeholder="Mobile no." type="number" />
          </div>
          <div className={styles.box3}>
            <input className={styles.firstname} placeholder="Address" />
          </div>
          <div className={styles.box4}>
            <input className={styles.firstname} placeholder="Pincode" type="number" />
            <input className={styles.firstname} placeholder="City/Town"/>
          </div>
            <div className={styles.box5} >
                <div className={styles.boxheader} onClick={onChange}>Resume Objective</div>
                <div className={state.isSwitch ? styles.boxinputs : styles.boxinputvisible }>
                    <textarea placeholder="Description" className={styles.textarea} />
                </div>
            </div>
          <Drop list={{header: "Work Experience", title: "Job Title", where: "Employer"}}/>
          <Drop list={{header: "Education and Qualification", title: "Degree", where: "School / University"}}/>
          <input className={styles.submit} type="submit" />
        
          </form>
        
      </>
    );
}