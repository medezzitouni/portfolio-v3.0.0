import type { NextPage } from "next";
import styles from '../styles/Project.module.css'
// import Image from 'next/image'
import Socials from "../components/Socials";
import Layout from "../components/Layout";
import Link from "next/link";
import Crad from "../components/Card";

const projects: Project[] = [
    {   
        title: 'SuperChat' ,
        year: '2019',
        image: process.env.BACKEND_URL + "/assets/superChat.png",
        link:  'https://superchat.onrender.com',
        body:  'SuperChat is a small project made with Express, Socket.io, Firestore, and JQuery. It&apos;s a One-room chat between all users with simple authentication system.'
    },
    {   
        title: 'Easylens' ,
        year: '2019/2022',
        image: process.env.BACKEND_URL + "/assets/easylens.png",
        link:  'https://app.easylens.ma',
        body:  'EasyLens aims to make the optician workflow easier by moving the process of ordering optic products online, providing qualitative and professional features that help the optician automate his daily tasks, manage his inventory, discover new products and suppliers, order, and track orders, and more.'
    },
    {
        title: 'Ametys',
        year: '2019/2020',
        image: process.env.BACKEND_URL + "/assets/ametys.png",
        link:  'https://www.ametys.org/fr/index.html',
        body:  'Ametys solutions allow local authorities as well as public actors to create attractive web sites and portals adapted to the challenges and uses of citizens.Internally, they use Ametys products to create next-generation intranets and extranets: collaborative and connected to their business needs.'
    },
    
]
const Project: NextPage = () => {
  return (
    <Layout>
        <div className="min-h-screen">
            <div className="flex flex-row h-[12vh] bg-secondary ">
                <div className='basis-[50%] pl-6 lg:pl-12 flex items-center justify-start'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={process.env.BACKEND_URL + "/assets/profile.png"}
                        height={"60rem"}
                        width={"60rem"}
                        alt="profile"
                        
                    />
                </div>
                <div className='basis-[50%] lg:basis-[45%] flex flex-col justify-center lg:items-end'>
                    <Link
                        className={`
                        bg-primary 
                        w-[80%]
                        h-[50%]
                        lg:w-[40%]
                        lg:h-[50%]
                       
                        rounded-full
                        text-secondary 
                        text-xl
                        grid
                        place-items-center
                    `} 
                    href='/'   
                    >
                    Home
                    </Link>
                </div>
            </div>
            <div className='min-h-[78vh] py-12 px-6 grid place-items-center'>
                <div className='grid gap-3 lg:grid-cols-3'>
                    {projects.sort(
                        (p1: Project , p2: Project) => p1.year == p2.year ? 0 : ( p1.year < p2.year ? -1 : 1)
                    ).map(({ title, year, image, link, body }, index) => (
                        <Crad 
                            key={index}
                            title={title}
                            image={image}
                            link={link}
                            body={body}
                            year={year}
                        />)
                    )
                    }
                </div>
            </div>
            {/* footer socails */}
            <div className="h-[10vh] grid place-items-center">
                <div className="w-[70%] lg:w-1/3">
                    <Socials vertical={false} show={false} />
                </div>
            </div>
        </div>
    </Layout>
  );
};
export default Project;
