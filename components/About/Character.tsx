"use client";
import React, { useRef } from 'react';
import styles from "../../app/page.module.scss";
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

type Props = {
    value: string; // This will be your paragraph text
};

const WordComponent = ({ value }: Props) => {
    const element = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.6', 'start 0.2']
    });

    // Split the paragraph into characters for animation
    const characters = value.split(" "); // Split by character

    return (
        <p ref={element} className={styles.paragraph}>
            {characters.map((character, i) => {
                const start = i / characters.length;
                const end = start + (1 / characters.length);
                return (
                    <Character range={[start, end]} progress={scrollYProgress} key={i}>
                        {character}
                    </Character>
                );
            })}
        </p>
    );
};

type InputRange = [number, number];

const Character = ({ children, range, progress }: { children: string; range: InputRange; progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className={styles.word}> {/* Added class for better styling */}
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
};

export default WordComponent;
