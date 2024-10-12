"use client";
import React, { useRef } from 'react';
import styles from "../../app/page.module.scss";
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

type Props = {
    value: string;
};

const WordComponent = ({ value }: Props) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.6', 'start 0.2']
    });
    const words = value.split(" ");
    
    return (
        <p ref={element} className={styles.paragraph}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word range={[start, end]} progress={scrollYProgress} key={i}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};

type InputRange = [number, number];

const Word = ({ children, range, progress }: { children: string; range: InputRange; progress: MotionValue<number> }) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / characters.length;

    return (
        <span className={styles.word}>
            {characters.map((character, i) => { 
                const start = range[0] + (step * i);
                const end = range[0] + (step * (i + 1));
                return (
                    <Character
                        range={[start, end]}
                        progress={progress}
                        key={i}
                    >
                        {character}
                    </Character>
                );
            })}
        </span>
    );
};

const Character = ({ children, range, progress }: { children: string; range: InputRange; progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span>
            <span className={styles.shadow} >{children} </span>
            <motion.span style={{ opacity }}>
            {children}
        </motion.span>
        </span>
        
    );
};

export default WordComponent;
