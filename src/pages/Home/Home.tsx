//pages
import Popular from "../../components/Popular/popular.component"
import Veggie from "../../components/Veggie/veggie.component"

//framer motion
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <motion.div 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Veggie/>
            <Popular/>
        </motion.div>
    )
}

export default Home