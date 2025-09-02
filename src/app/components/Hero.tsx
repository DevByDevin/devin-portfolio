import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';
import Globe3D from './ui/Globe3D';
import { LAYOUT_STYLES, TYPOGRAPHY_STYLES, CARD_STYLES } from '../constants/styles';

export default function Hero() {
  return (
    <>
      <section className={`h-screen ${LAYOUT_STYLES.section}`}>
        <div className={LAYOUT_STYLES.containerCenter}>
          <div className="z-1 pt-10 text-center">
            <h1 className={TYPOGRAPHY_STYLES.h1}>
              Hi, I&apos;m{' '}
              <span className="relative inline-block">
                <span className="animate-gradient-x animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent">
                  Devin Han
                </span>
              </span>
            </h1>
            <p className={TYPOGRAPHY_STYLES.bodyLarge}>
              Global Full-Stack Developer & Digital Nomad
            </p>
            <p className={TYPOGRAPHY_STYLES.description}>
              From China to the US, I've built my career across continents. Ready to work globally
              and bring innovative solutions to teams worldwide.
            </p>
          </div>
          <div className="z-1 mb-8">
            <Globe3D />
          </div>
          <div className={`z-1 ${LAYOUT_STYLES.flexCenterCol}`}>
            <a href="#projects" className={CARD_STYLES.buttonCard}>
              View My Work
            </a>
            <a href="#contact" className={CARD_STYLES.buttonCard}>
              Get In Touch
            </a>
          </div>
        </div>
        <StarsBackground className="absolute inset-0 z-0 h-full w-full" />
      </section>
    </>
  );
}
