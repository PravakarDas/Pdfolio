"use client";

import { Button } from '@/components/ui/button'
import { feedback } from '@/lib/feedback'
import React from 'react'
import { MdAccountCircle } from 'react-icons/md'


const Feedback = () => {

    const [items, setItems] = React.useState(feedback);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const comment = formData.get("comment") as string;

        setItems(prev => [...prev, { name, comment }]);
        feedback.push({name,comment});

        feedback.map(m=>{
            console.log(m.name)
        })
    };

    return (
        <section className='w-full max-w-[1280px] mx-auto  bg-slate-50 py-20 px-10 space-y-4'>

            <h3 className='text-center'>FeedBack</h3>
            <div className='flex flex-col  items-center justify-center mx-auto '>
                {
                    items.map((feed) => (
                        <div key={feed.comment} className='bg-white  border border-gray-200 h-44 w-64 text-ellipsis  flex p-2 rounded-xl  flex-col justify-start overflow-hidden' >
                            <p className='flex items-center gap-2 text-4xl '> <MdAccountCircle /> <span className='text-black text-sm'>{feed.name}</span></p>
                            <p>{feed.comment}</p>
                        </div>
                    ))

                }

                <form onSubmit={handleSubmit} className='flex flex-col w-[360px] border p-4 mt-20 gap-2'>
                    <h4 className='text-xl font-bold'>Give your own feedback</h4>
                    <p className='text-gray-400'>please rate me and give me also your advice and opinion...</p>

                    <input
                        required
                        className='rounded border border-gray-400 p-2'
                        type='text'
                        name='name'
                        placeholder='enter your name'
                    />

                    <textarea
                        required
                        className='rounded border border-gray-400 p-2'
                        name='comment'
                        placeholder='write comment...'
                        maxLength={100}
                    />
                    <Button type='submit'>Submit</Button>
                </form>

            </div>

        </section>
    )
}

export default Feedback