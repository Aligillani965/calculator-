import styles from "./Display.module.css"
function Display({myVal}){
    return <>
     <input className={styles.display} type="text"  value={myVal} readOnly/>
    </>
}
export default Display