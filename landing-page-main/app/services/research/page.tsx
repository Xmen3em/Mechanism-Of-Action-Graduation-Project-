import React from 'react';
import getPostMetaData from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Header from '../../../components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Research() {
  const postMetaData = getPostMetaData();
  // Take only the first six slugs
  const firstThreeSlugs = postMetaData.slice(0, 6);

  const postPreviews = firstThreeSlugs.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <Header />
          <div className=' group relative overflow-hidden  transition-shadow duration-300'>
      <div className="container mx-auto px-4  md:px-6 lg:py-16">
      <h2 className="mb-8  text-2xl font-semibold tracking-tight text-foreground  border-b-0  sm:text-4xl">
        Books
      </h2>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className=" rounded-lg border dark:border-white mx-3 flex flex-col items-start">
          <img src="/images/rang&dale.jpg" alt="Book Cover" width={300} height={450} className="mb-4   mt-10 ml-20 rounded-lg shadow-lg" />
          <h2 className="mb-2 text-xl font-bold text-foreground mx-10">Rang & Dale's Pharmacology (9th) edition</h2>
          <p className="mb-2 text-muted-foreground mx-10 ">Humphrey P. Rang, James M. Ritter, Rod J. Flower, Graeme Henderson</p>
          <p className="mb-4 text-muted-foreground mx-10 "> 2019</p>
          <p className="text-muted-foreground mx-10 mb-10 ">
            Rang & Dale's Pharmacology" is a comprehensive textbook that explains the science of drugs and their effects on the human body. Aimed at medical, pharmacy, and biomedical science students, it covers drug mechanisms, therapeutic applications, and the impact on various bodily systems. The book is renowned for its clear explanations, detailed illustrations, and clinical case studies, making it an essential resource for understanding pharmacological principles.

          </p>

<Link
      href="https://books.google.com.eg/books/about/Rang_Dale_s_Pharmacology.html?id=26t2DwAAQBAJ&redir_esc=y"
      className="inline-flex items-center gap-2 font-medium transition-colors text-blue-500 hover:bg-gray-500 hover:text-white p-2 rounded-lg mb-6 mx-10 "
      prefetch={false}
    >
      More Information
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>


        </div>
        <div className=" rounded-lg border dark:border-white mx-3 flex flex-col items-start">
          <img src="/images/mp.jpg" alt="Book Cover" width={300} height={450} className="mb-4 ml-20 mt-10 rounded-lg shadow-lg" />
          <h2 className="mb-2 text-xl font-bold text-foreground mx-10">Medical Pharmacology and Therapeutics (6th) edition</h2>
          <p className="mb-2 text-muted-foreground mx-10 ">Derek G. Waller, Anthony P. Sampson</p>
          <p className="mb-4 text-muted-foreground mx-10 ">  2021</p>
          <p className="text-muted-foreground mx-10 mb-10 ">
            Medical Pharmacology and Therapeutics" provides a comprehensive overview of pharmacology and its therapeutic applications. The book is designed for medical and healthcare students, offering detailed explanations of drug action, usage, and the management of various diseases. It includes clinical case studies, clear illustrations, and up-to-date information on new drugs and treatments. The text is known for its practical approach, helping students apply pharmacological principles to real-world clinical scenarios.
          </p>
<Link
      href="https://books.google.com.eg/books?id=6b0tDwAAQBAJ&pg=PR5&hl=ar&source=gbs_selected_pages&cad=1#v=onepage&q&f=false"
      className="inline-flex items-center gap-2 font-medium transition-colors text-blue-500 hover:bg-gray-500 hover:text-white p-2 rounded-lg mb-6 mx-10 "
      prefetch={false}
    >
      More Information
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
        </div>
      </div>
    </div>
    </div>
              <h2 className=" text-2xl font-semibold tracking-tight text-foreground  border-b-0 mx-36 mt-10 sm:text-4xl">
        Articles
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8">
        {postPreviews}
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
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
export default Research;
