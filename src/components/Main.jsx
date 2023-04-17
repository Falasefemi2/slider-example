import { motion } from "framer-motion"
import { staggerContainer } from "./variants"
import Pictures from "./Pictures"
import { images } from "./data"
import { useState } from "react"

const Main = () => {
    const [active, setActive] = useState('Halland-3')
  return (
    <section>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto max-w-7xl flex lg:flex-row min-h-[70vh] gap-5"
        >
            {images.map((image, i) => (
                <Pictures 
                key={image.id}
                {...image}
                active={active}
                i={i}
                handleClick={setActive}
                />
            ))}
        </motion.div>
    </section>
  )
}

export default Main