import HeroButton from '@/components/global/HeroButton';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { steps } from '@/data/steps';

const DesktopNavbar: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
    return (
        <section className="px-[10vw] grid grid-cols-3 py-3 fixed backdrop-blur-md z-30 w-full ">
            <Link to="/" className="mr-auto flex gap-3">
                <img src="/Logo.svg" alt="logo" className="w-6 h-6 my-auto" />
                <h1 className="my-auto font-medium">Investor Psyche Evaluation</h1>
            </Link>
            <div className="text-neutral-600 font-light flex my-auto justify-center">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    <div className='flex gap-2 cursor-pointer'>
                        <p>Factors</p>
                        <ChevronDown className={cn("size-4 my-auto animation", isVisible && "rotate-180")}/>
                    </div>
                    <AnimatePresence>
                        {isVisible && (
                        <motion.div
                            className="absolute flex flex-col z-20 py-2 bg-white animation rounded-md mt-3 backdrop-blur-lg -ml-5"
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            {steps.map((step) => (
                                <Link to={step.url} className='hover:bg-white/70 px-4 py-2'>
                                    {step.heading}
                                </Link>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <Link to="/" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Pricing
                </Link>
                <Link to="/resources" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Resources
                </Link>
            </div>
            <div className="flex gap-3 ml-auto">
                <HeroButton buttonClassName="bg-neutral-800 rounded-md text-white hover:bg-neutral-900/95 py-4 px-3" buttonText='Download sample'/>
            </div>
        </section>
    );
};

export default DesktopNavbar;
