import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import styles from "../../../styles/cvform.module.css"

export default function Drop({ list }) {

    

    const [state, setState] = useState({
        isSwitch2: true,
    }
     )
    
    const onChange2 = () => {
        setState({ ...state, isSwitch2: !state.isSwitch2 })
    }
    const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    setData([...formdata, data])
    console.log(formdata);
    console.log(data);
  }
  const handleRemove = (data) => {
    const newArr = formdata.filter((datax)=> 
    
      formdata.indexOf(datax.title) != formdata.indexOf(data.title) &&
      formdata.indexOf(datax.date1) != formdata.indexOf(data.date1) &&
      formdata.indexOf(datax.date3) != formdata.indexOf(data.date2) 
       
    );
    setData(newArr);
    }
    const [formdata, setData] = useState([]);
   
    return (
        <>
         
                <div className={styles.box5}>
                    <div className={styles.boxheader} onClick={onChange2}>{list.header}</div>
                    <div className={styles.added}>
                        {
                            formdata.map((data) => {
                                return (
                                    <>
                                        <div className={styles.addedcontainer} key={uuidv4()}>
                                            <div className={styles.left}>
                                                <div className={styles.headeradded}>{data.title}</div>
                                                <div className={styles.dates}>
                                                    <div className={styles.dateadded}>({data.date1}) -</div>
                                                    <div className={styles.dateadded}>({data.date2})</div>
                                                </div>
                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.cancle} onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemove(data);
                                                }}>remove</div>
                                            </div>
                        
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={state.isSwitch2 ? styles.boxinputs : styles.boxinputvisible} id="desc">
                            <div className={styles.box2}>
                                <input className={styles.firstname} placeholder={[`${list.title}`]} {...register('title')} />
                                <input className={styles.firstname} placeholder="City/Town" />
                        </div>
                        <div className={styles.box3}>
                            <input className={styles.firstname} placeholder={[`${list.where}`]} />
                            </div>
                            <div className={styles.box2}>
                                <input className={styles.firstname} {...register('date1')} type="date" />  <input className={styles.firstname} {...register('date2')} type="date" />
                            </div>
                 <div className={styles.buttonclass}>
                            <input className={styles.button} type="submit" />
                        </div>
                        </div>
              
                    </form>
                        </div>
                         </>
           
       
    )
}