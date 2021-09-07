import Image from 'next/image'
import logo from "../../public/favicon.ico"
import styles from "../../styles/navbar.module.css"

export default function Navbar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={ logo}/>
                </div>
              
                <div className={styles.elements}>CV templates</div>
                <div className={styles.elements}>Contact</div>
            </div>
        </>
    )
}