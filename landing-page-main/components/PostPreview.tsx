import React from 'react';
import Link from 'next/link';
import styles from './postPreview.module.css';

function PostPreview(props:any) {
  return (
    <div className={`${styles.card}  group relative overflow-hidden rounded-lg border transition-shadow duration-300`}>
      <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
      <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight ">{props.title}</h3>
          <p className="   dark:text-white">{props.subtitle}</p>
        </div>
        <Link
          href={props.link}
          className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
          prefetch={false}
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

function ArrowRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.arrowIcon} transition-transform duration-300`}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default PostPreview;
