import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/jacky.jpg" alt="An image showing Jacqueline" width={300} height={300} />
      </div>
      <h1>Hi, I'm Jacqueline</h1>
      <p>I blog about web development - especially a frontend framework called React.</p>
    </section>
  )
}

export default Hero;